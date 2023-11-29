import './App.css';
import { Canvas } from '@react-three/fiber'; // 중괄호 추가
import MyElement3D from './MyElement3D';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

// import Footer from './com/footer';

<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

function App() {

  return (
    <>
      <Nav className='main_nav_bar' activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Nav.Link href="/home">
            <img src='/images/WhiteLogo2.png' alt='logo'/>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Learn About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Game Select</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Log in</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <audio id="audioElement" controls autoPlay loop>
            <source src="/audio/zomC.wav" type="audio/wav"/>
          </audio>
        </Nav.Item>
      </Nav>
    
      <Canvas camera={{near: 1,far: 100, position : [5,0,7]}}>
        <MyElement3D />
      </Canvas>
      <Container className='card-container'>
        <div>
          Game select
        </div>
        <div className="row d-flex justify-content-center">
          <div style={{width:'30%'}}>
            <Card className="small-card">
              <Card.Img variant="top" src="/images/contentImg1.png" />
              <Card.Body>
                <Card.Title>Coming Soon</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{width:'30%'}}>
            <Card className="small-card">
              <Card.Img variant="top" src="/images/contentImg2.png" />
              <Card.Body>
                <Card.Title>Zombie</Card.Title>
                <Card.Text>Zombie Apocalypse</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{width:'30%'}}>
            <Card className="small-card">
              <Card.Img variant="top" src="/images/contentImg3.png" />
              <Card.Body>
                <Card.Title>Coming Soon</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
      {/* <Footer/> */}
      <Container className='footer'>
        <div style={{textAlign: 'center', color:'white'}}>
          <img src='/images/BlackLogo.png' style={{width:'11vw',height: '10vw'}}/>
          <Container className='footer-content'>
            <div>
              <p style={{fontWeight:'bolder'}}>기획, 디자인</p>
              mikyholee@naver.com
            </div>
            <div>
              <p style={{fontWeight:'bolder'}}>개발자</p>
              github.com/dwisgolmog
            </div>
            <div>
              <p style={{fontWeight:'bolder'}}>개발자</p>
              github.com/dnwn1211
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default App;
