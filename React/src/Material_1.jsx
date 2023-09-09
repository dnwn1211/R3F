import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Box, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva"

function Material_1() {

    const mesh1 = useRef()
    const mesh2 = useRef()

    useEffect(()=>{
        mesh2.current.material =mesh1.current.material
    },[])

    const{roughness,metalness,clearcoat,clearcoatRoughness,transmission,thickness,ior}=useControls({
        roughness: {value: 0, min:0,max: 1,step:0.01},
        metalness: {value: 0, min:0,max: 1,step:0.01},
        clearcoat: {value: 0, min:0,max: 1,step:0.01},
        clearcoatRoughness: {value: 0, min:0,max: 1,step:0.01},
        transmission:{value: 0, min: 0, max:1,step:0.01},
        thickness:{value: 0, min:0, max:10, step: 0.01},
        ior: {value: 1.5, min:0, max:2.333, step: 0.01}
    })

    return (
        <>
            {/* 조명 */}
            <ambientLight intensity={0.2}/>
            <directionalLight position={[0, 1, 0]}/>
            <directionalLight postion={[1,2,8]} intensity={0.7}/>

            {/* 로컬 좌포계 */}
            <axesHelper scale={10} />
            <OrbitControls />

            <mesh ref={mesh1} position={[0.7,0,0]} >
                <torusKnotGeometry args={[0.5,0.15,256,128]}/>
                <meshPhysicalMaterial
                visible={true}
                transparent={true} //표면 효과
                opacity={1} // 투명도 transparent 값 true로 변경
                depthTest={true}
                depthWrite={true}
                side={THREE.DoubleSide}// 면에 대해서 앞면 뒷면 rendering지정

                color={0xffffff}
                emissive={0x00000}
                roughness={roughness}//거칠기
                metalness={metalness}// 1=금속
                flatShading={false}
                wireframe={false}
                clearcoat={clearcoat}//코팅
                clearcoatRoughness={clearcoatRoughness}// 코팅의 거칠기

                transmission={transmission} //투명도
                thickness={thickness} //유리
                ior={ior} //굴절율 1.5~2.3333
                />
                {/* 로컬 좌표계
                <axesHelper /> */}
            </mesh>

            <mesh ref={mesh2} position={[-0.7,0,0]}>
                <torusGeometry args={[0.5,0.2]}/>
            </mesh>
            </>
    );
}

export default Material_1;
