import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useContext, useEffect, useState } from 'react';
import {Button, Container, Row, Col, Nav} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { addCart } from '../store.js';
import { useDispatch } from 'react-redux';


function Detail(props){

  const navigate = useNavigate();
  const dispatch = useDispatch()

  let {stockid} = useParams();
  let currentItem = props.items.find(function(x){
    // items 목록에서 id가 현재페이지 id랑 똑같은 아이를 찾아라
    //props는 items={items}로 보낸 이 아이임
    return x.id === parseInt(stockid, 10)
  });

  let [tab, setTab] = useState(0)
  let [alert, setalert] = useState(true)

  useEffect(()=> {
    let a = setTimeout(() => {  // mount, update 시 여기에 있는 코드가 실행됨
      setalert(false)
    }, 2000)   
    return () =>{               //useEffect 동작 전에 실행됨.
      clearTimeout(a)           //타이머 제거해주는 함수.기존 데이터요청은 제거해주세요~
    }
  }, [])

  //최근 본 상품 재배열
  useEffect(()=>{
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    // 꺼낸거.push(찾은상품.id)
    꺼낸거 = [currentItem.id, ...꺼낸거];
  
    //Set으로 바꿨다가 다시 array로 만들기
    꺼낸거 = new Set(꺼낸거)
    꺼낸거 = Array.from(꺼낸거)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  }, [])

  


  //페이지 첫 로딩 시 fade in 효과
  let [fade, setFade] = useState('')
  useEffect(() => {
    setTimeout(() => {setFade('end')}, 100)
    return () => {
      setFade('')
    }
  }, [])

    return (
      <div className='sub_wrap'>
        <Container className={'start ' + fade}>
          {
            alert == true ?
            <div className='alert alert-warning'>2초이내 구매시 할인</div>
            : null
          }
          <Row>
            <Col><img src={process.env.PUBLIC_URL + '/img/latte (' + currentItem.id + ').JPG'} width="100%" /></Col>
            <Col>
              <h2>{currentItem.title}</h2>
              <p>{currentItem.content}</p>
              <p>{currentItem.price}</p>
              <Button variant="outline-primary" onClick={()=>{
                dispatch(addCart(currentItem.title))
                if(window.confirm('Added. Go to cart?')){
                  navigate('/cart')
                }
              }}>Add to the Cart</Button>
            </Col>
          </Row>
        </Container>
        <Nav variant="tabs" defaultActiveKey="/link0">
          <Nav.Item>
            <Nav.Link eventKey="/link0" onClick={()=>{setTab(0)}}>Option 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/link1" onClick={()=>{setTab(1)}}>Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/link2" onClick={()=>{setTab(2)}}>
            Option 3
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} items={props.items}/>
      </div>
    )
  }

  function TabContent({tab, items}){
    let [fade, setFade] = useState('')

    useEffect(() => {
      setTimeout(() => {setFade('end')}, 100)
      return () => {
        setFade('')
      }
    }, [tab])

    return (
      <div className={'start ' + fade}>
      {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tab]}
      
      </div>
    )
  }

  export default Detail;