import { useState, lazy, Suspense, useTransition } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, } from "react-bootstrap";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import data1 from "./data.js";

import LoadingEffect from "./routes/LoadingEffect.js"
import Event from "./routes/Event.js"
import Visual from "./routes/Visual.js"
import Header from "./routes/Header.js"
import MainPage from "./routes/MainPage.js"

// import Detail from './routes/Detail.js'
// import Cart from './routes/Cart.js'
//필요할 때만 해당 페이지들 불러오기. 페이지로딩속도를 빠르게 해줌. 단점은 해당 페이지 들어갈 때 로딩생김
const Detail = lazy(() => import("./routes/Detail.js"));
const Cart = lazy(() => import("./routes/Cart.js"));
const Menu = lazy(() => import("./routes/Menu.js"));
const About = lazy(() => import("./routes/About.js"));

function App() {
  
  let [isPending, startTransition] = useTransition();     //너무 느릴 때 성능저하 개선해줌. 순서를 바꿔주는거임
  let navigate = useNavigate();
  let [items, setItems] = useState(data1);
  let location = useLocation(); // 현재 경로를 가져오기 위해 useLocation 훅 사용

  // 현재 경로가 '/'가 아닐 때 제목사진을 표시하도록 설정
  const showVisual = location.pathname !== '/';


  return (
    <div className="App">
      < Header />
      {/* <div className="nav_wrap">
        <Navbar bg="none" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/">CodeOven Studio</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/detail">Menu</Nav.Link>
              <Nav.Link onClick={() => { navigate("/event"); }}> Event </Nav.Link>
              <Nav.Link href="/cart">cart</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div> */}
      
      {showVisual && <Visual />}

      <Suspense fallback={ <LoadingEffect /> } >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />

          <Route path="/cart" element={<Cart items={items} />} />
          <Route path="/detail" element={<Menu items={items} />} ></Route>
          <Route path="/detail/:stockid" element={<Detail items={items} />} />
          
          <Route path="*" element={<div>404 ERROR: 없는페이지</div>} />
          <Route path="/event" element={<Event />}>
            <Route path="one" element={<div>Birthday Coupon</div>} />
            <Route path="two" element={<div>Buy one Get one!</div>} />
          </Route>
        </Routes>
      </Suspense>
      <div className="footer"></div>
    </div>
  );
}




export default App;
