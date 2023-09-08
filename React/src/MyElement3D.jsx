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

function MyElement3D() {

    // drei R3F에서 사용할 수 있는 유용한 컴포넌트들을 모아놓은 라이브러리
    // npm i @react-three/drei

    const refMesh = useRef();
    const refWireMesh=useRef();
    // useFrame((state, delta) => {
    //     if (refMesh.current) { // refMesh가 유효한 경우에만 회전 변경
    //         refMesh.current.rotation.z += delta;
    //     }
    // });

    const {xSize,ySize,zSize,xSegments,ySegments,zSegments}=useControls({
        xSize :{value: 1, min: 0.1, max: 5, step: 0.01},
        ySize :{value: 1, min: 0.1, max: 5, step: 0.01},
        zSize :{value: 1, min: 0.1, max: 5, step: 0.01},
        xSegments :{value: 1, min: 1, max: 10, step: 1},
        ySegments :{value: 1, min: 1, max: 10, step: 1},
        zSegments :{value: 1, min: 1, max: 10, step: 1}
    })

    useEffect(()=>{
        refWireMesh.current.geometry=refMesh.current.geometry
    },[xSize,ySize,zSize,xSegments,ySegments,zSegments])

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
                <boxGeometry args={[xSize,ySize,zSize,xSegments,ySegments,zSegments]} />
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

export default MyElement3D;
