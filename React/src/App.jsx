import './App.css';
import { Canvas } from '@react-three/fiber'; // 중괄호 추가
import MyElement3D from './MyElement3D';

function App() {
  return (
    <Canvas
      camera={{
        near: 1,
        far: 100,
        position: [7,7,0]
      }}
    >
      <MyElement3D />
    </Canvas>
  );
}

export default App;
