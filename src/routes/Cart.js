import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, decreaseCount } from "../store.js";
import { changeName } from "./../store/userSlice.js";
import { useState, memo, useMemo } from "react";
import "./../css/cart.css";
import { useNavigate } from "react-router-dom";

//재렌더링 막는 memo, useMemo: 꼭 필요할 때만 재렌더링함
let Child = memo(function () {
  console.log("재렌더링");
  return <div>자식임</div>;
});

function Cart() {
  //기본세팅 걍외우셈. store.js 안의 모든 state 가져오라는 뜻
  let a = useSelector((state) => {
    return state;
  });
  //내가 가져오려는 것만 가져오려면
  let cart = useSelector((state) => {
    return state.cart;
  });

  let dispatch = useDispatch(); // store.js로 요청을 보내주는 함수

  let [count, setCount] = useState(0);

  const navigate = useNavigate();

  return (
    <div className="sub_wrap sub_cart">
      {/* <Child></Child> */}
      {/* <button onClick={()=>{setCount(count+1)}}>+</button> */}
      {/* <p>{a.user.name}의 장바구니</p> */}
      <h2 className="sub_tit">Cart</h2>
      <Table striped bordered hover className="cart_table">
        <thead>
          <tr>
            <th>#</th>
            <th> </th>
            <th>Product</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((a, i) => (
            <tr key={i}>
              <td>{a.id + 1}</td>
              <td>
                <img
                  src={process.env.PUBLIC_URL + "/img/latte (" + a.id + ").JPG"}
                  height="100px"
                  alt=""
                  onClick={()=>{navigate('/detail/'+a.id)}}
                  style={{'cursor':'pointer'}}
                />
              </td>
              <td>{a.name}</td>
              <td className="cart_amount">
                <button
                  onClick={() => {
                    dispatch(addCount(a.name));
                  }}
                >
                  +
                </button>
                <span>{a.count}</span>
                <button
                  onClick={() => {
                    dispatch(decreaseCount(a.name));
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
