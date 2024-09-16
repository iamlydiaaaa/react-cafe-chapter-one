import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import data1 from "../data.js";
import RecentView from "./RecentView.js";
import LoadingEffect from "./LoadingEffect.js"
import "./../css/menu.css"

function Menu() {
  let [items, setItems] = useState(data1 || []);
  let [loading, setLoading] = useState(false);

  // View More 버튼 클릭하기
  const loadMoreItems = () => {
    setLoading(true);
    axios.get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        let copy = [...items, ...result.data]; // 뒤에 새로 추가하기
        setItems(copy);
      })
      .catch(() => {
        console.log("Fail to load Ajax request");
      })
      .finally(() => {
        setLoading(false); //로딩 종료
      })
  };

  return (
    <div>
      
      <h2 className="sub_tit">Menu</h2>
      <ul className="shop_list">
        {items.map((a, i) => <ItemList key={i} items={a} index={i} />)}
      </ul>
      <Button variant="outline-primary" onClick={loadMoreItems}>
        { loading ? <LoadingEffect /> : 'View More' }
      </Button>
      <RecentView />
    </div>
  );
}

function ItemList(props) {
  let num = "/detail/" + props.items.id;
  return (
    <li>
      <Link to={num} style={{"text-decoration": "none"}}>
        <span className="shop_item_img">
          <strong>MORE</strong>
          <img src={process.env.PUBLIC_URL + '/img/latte (' + props.index + ').JPG'} width="100%" alt={'image'+props.index} />

        </span>
        <span className="shop_item_tit">{props.items.title}</span>
      </Link>
      <span className="shop_item_desc">{props.items.content}</span>
      <span className="shop_item_price">
        $<strong>{props.items.price}</strong>
      </span>
      {/* <a href="#" className="shop_item_cart"><i className="fa fa-shopping-cart"></i></a> */}
    </li>
  );
}

export default Menu;
