import { isVisible } from "@testing-library/user-event/dist/utils";
import "./../css/header.css"
import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";


function Header() {

  function Logo(){
    return (
        <h1 className="logo" onClick={() => { navigate("/"); }}>
          Chapter One
        </h1>
    )
  }
  const [isVisible, setIsVisible] = useState(false); // left 제어 상태
  const [isSearchVisible, setisSearchVisible] = useState(false); // left 제어 상태
  let navigate = useNavigate();

  // 버튼 클릭 핸들러
  const handleMenuClick = () => {
    setIsVisible(!isVisible); // left 상태 토글
  };
  const handleSearchClick = () => {
    setisSearchVisible(!isSearchVisible); // left 상태 토글
  };

  return (
    <header id="header">
      <div className="header-logo"><Logo /></div>
      {/* <!--    왼쪽 숨겨진 메뉴 부분 시작   --> */}
      <div className="sitemap-wrap">
        <button className="btn-sitemap-open popupClick" onClick={handleMenuClick}>
          <span className="hide">Side Menu</span>
        </button>
        <div className="sitemap">
          <div className="inner" style={{
          left: isVisible ? '0' : '-100%',  // 왼쪽으로 슬라이드 애니메이션
          visibility: isVisible ? 'visible' : 'hidden', // 항상 visible 유지
          transition: 'left 0.5s ease', // 애니메이션 적용
        }}>
            <div className="sitemap-logo">
              <Logo />
            </div>
            <nav className="all-menu-wrap">
              <ul className="all-menu">
                <li>
                <span onClick={() => { handleMenuClick(); navigate("/menu"); }}>Menu</span>
                </li>
                <li><span onClick={() => { handleMenuClick(); navigate("/about"); }}>About</span></li>
                <li><span onClick={() => { handleMenuClick(); navigate("/booking"); }}>Booking</span></li>
                <li><span onClick={() => { handleMenuClick(); navigate("/contact"); }}>Contact</span></li>
              </ul>
            </nav>
            
            <button className="btn-sitemap-close closeBtn" onClick={handleMenuClick}>
              <span className="hide">Close</span>
            </button>
          </div>
        </div>
      </div>
      {/* <!--    왼쪽 숨겨진 메뉴 부분 끝  --> */}
    </header>
  );
}

function Search_submit(f) {
  if (f.q.value.length < 2) {
    alert("검색어는 두글자 이상 입력하십시오.");
    f.q.select();
    f.q.focus();
    return false;
  }
  return true;
}

export default Header;
