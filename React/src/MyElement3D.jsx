import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";


function MyElement3D() {
    const refMesh = useRef();
    useFrame((state, delta) => {
        if (refMesh.current) { // refMesh가 유효한 경우에만 회전 변경
            refMesh.current.rotation.z += delta;
        }
    });
    
    return (
        <>
            {/* 조명 */}
            <directionalLight position={[1, 1, 1]} />
            
            {/* 로컬 좌포계 */}
            <axesHelper scale={10} />
            <OrbitControls />

            {/* x0, y45, z0 만큼 회전 */}
            <mesh ref={refMesh} 
                position={[2,2,2]} //위치 이동
                rotation={[0,45*Math.PI/180,0]}
                scale={[2,1,1]}
            > 
                <boxGeometry />
                <meshStandardMaterial color="info" 
                    opacity={0.5} transparent={true}
                />
                {/* 로컬 좌표계 */}
                <axesHelper />

                <mesh
                    scale={[0.1,0.1,0.1]}
                    position-y={2}
                >
                    <sphereGeometry/>
                    <meshStandardMaterial color="red"/>
                    <axesHelper scale={5}/>
                </mesh>
            </mesh>
            
        </>
    );
}

export default MyElement3D;
