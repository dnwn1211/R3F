import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Box, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva"

function MyElement3D() {

    const mesh1 = useRef()
    const mesh2 = useRef()

    useEffect(()=>{
        mesh2.current.material =mesh1.current.material
    },[])

    const mapcap=useTexture("./images/mapcap.jpg")

    return (
        <>
            {/* 조명 mapcap 광원 필요 x */}
            {/* <ambientLight intensity={0.2}/>
            <directionalLight position={[0, 1, 0]}/>
            <directionalLight postion={[1,2,8]} intensity={0.7}/> */}

            {/* 로컬 좌포계 */}
            <axesHelper scale={10} />
            <OrbitControls />

            <mesh ref={mesh1} position={[0.7,0,0]} >
                <torusKnotGeometry args={[0.5,0.15,256,128]}/>
                <meshNormalMaterial/>
            </mesh>

            <mesh ref={mesh2} position={[-0.7,0,0]}>
                <torusGeometry args={[0.5,0.2]}/>
            </mesh>
            </>
    );
}

export default MyElement3D;
