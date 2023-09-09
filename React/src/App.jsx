import './App.css';
import { Canvas } from '@react-three/fiber'; // 중괄호 추가
import MyElement3D from './MyElement3D';

function App() {
  return (
    <Canvas camera={{near:3.5, far:6}}> {/* Canvas 엘리먼트로 수정 */}
      <MyElement3D />
    </Canvas>
  );
}

export default App;
