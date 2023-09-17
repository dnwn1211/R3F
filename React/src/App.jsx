import './App.css';
import { Canvas } from '@react-three/fiber'; // 중괄호 추가
import MyElement3D from './MyElement3D';

function App() {
  return (
    <Canvas>
      <MyElement3D />
    </Canvas>
  );
}

export default App;
