import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function MyElement3D() {
    const refMesh = useRef();
    useFrame((state, delta) => {
        if (refMesh.current) { // refMesh가 유효한 경우에만 회전 변경
            refMesh.current.rotation.y += delta;
        }
    });
    return (
        <>
            {/* 조명 */}
            <directionalLight position={[1, 1, 1]} />
            {/* x0, y45, z0 만큼 회전 */}
            <mesh ref={refMesh} rotation={[30*Math.PI/180, 45 * Math.PI / 180, 60*Math.PI/180]}> {/* ref 속성 추가 */}
                <boxGeometry />
                <meshStandardMaterial color="skyblue" />
            </mesh>
        </>
    );
}

export default MyElement3D;
