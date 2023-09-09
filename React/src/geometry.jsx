import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Box, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva"

function MyBox(props){
    const geom=new THREE.BoxGeometry()
    return <mesh {...props} geometry={geom}>
    </mesh>
}

function geometry() {

    // drei R3F에서 사용할 수 있는 유용한 컴포넌트들을 모아놓은 라이브러리
    // npm i @react-three/drei

    const refMesh = useRef();
    const refWireMesh=useRef();
    // useFrame((state, delta) => {
    //     if (refMesh.current) { // refMesh가 유효한 경우에만 회전 변경
    //         refMesh.current.rotation.z += delta;
    //     }
    // });

    const {radius,widthSegments,heightSegments,phiStart,phiLength,thetaStart,thetaLength}=useControls({
        radius : {value: 1, min: 0.1, max: 5, step : 0.01},
        widthSegments :{value: 32, min: 3, max: 256, step : 1},
        heightSegments:{value: 32, min: 2, max: 256, step : 1},
        phiStart : {value: 0, min: 0, max: 360, step :0.1},
        phiLength : {value: 360, min: 0, max: 360, step :0.1},
        thetaStart:{value: 0, min: 0, max: 180, step :0.1},
        thetaLength : {value: 180, min: 0, max: 180, step :0.1},
    })

    useEffect(()=>{
        refWireMesh.current.geometry=refMesh.current.geometry
    },[radius,widthSegments,heightSegments,phiStart,phiLength,thetaStart,thetaLength])

    return (
        <>
            {/* 조명 */}
            <ambientLight intensity={0.1}/>
            <directionalLight position={[1, 1, 1]} intensity={0.5}/>
            
            {/* 로컬 좌포계 */}
            <axesHelper scale={10} />
            <OrbitControls />

            {/* x0, y45, z0 만큼 회전 */}
            <mesh ref={refMesh} >
                <torusGeometry args={[6.5,0.7,9,49,3]}/>
                <meshStandardMaterial color="info" />
                {/* 로컬 좌표계
                <axesHelper /> */}
            </mesh>

            <mesh ref={refWireMesh} >
                <meshStandardMaterial emissive="yellow" wireframe={true}/>
            </mesh>

            
            
        </>
    );
}

export default geometry;
