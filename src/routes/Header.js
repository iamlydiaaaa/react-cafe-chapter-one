import { isVisible } from "@testing-library/user-event/dist/utils";
import "./../css/navbar.css"
import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";


function Header() {

  function Logo(){
    return (
        <h1 className="logo" onClick={() => { navigate("/"); }}>
          CodeOven Studio
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
                <span onClick={() => { handleMenuClick(); navigate("/detail"); }}>Menu</span>
                  <ul className="depth">
                    <li><span onClick={() => { handleMenuClick(); navigate("/detail/0"); }}>Coffee</span></li>
                  </ul>
                </li>
                <li><span onClick={() => { handleMenuClick(); navigate("/about"); }}>About</span></li>
                <li><span onClick={() => { handleMenuClick(); navigate("/event"); }}>Event</span></li>
                <li><span onClick={() => { handleMenuClick(); navigate("/cart"); }}>Cart</span></li>
              </ul>
            </nav>
            
            <button className="btn-sitemap-close closeBtn" onClick={handleMenuClick}>
              <span className="hide">Close</span>
            </button>
          </div>
        </div>
      </div>
      {/* <!--    왼쪽 숨겨진 메뉴 부분 끝  --> */}


      {/* <!--   ====== 검색 부분 시작 ======    --> */}
      <div className="all-search-wrap">
        <button className="btn-all-search-open" onClick={handleSearchClick}>
          Search
        </button>

        {/* <!--   ====== 숨겨진 검색 팝업창 ======    --> */}
        <div className="all-search" style={{
          top: isSearchVisible ? '0' : '-100%',  // 위쪽으로 슬라이드 애니메이션
          visibility: isVisible ? 'visible' : 'hidden', // 항상 visible 유지
          transition: 'all 0.5s ease', // 애니메이션 적용
        }}>
          <fieldset id="hd_sch">
            <div className="sch-word-box">
              <form
                name="frmsearch1"
                action="#"
                onsubmit="return search_submit(this);"
              >
                <label for="sch_str" className="sound_only">
                  검색어<strong className="sound_only"> 필수</strong>
                </label>
                <input
                  type="text"
                  name="q"
                  value=""
                  id="sch_str"
                  required
                  placeholder="Search..."
                  autocomplete="off"
                />
                <button type="submit" id="sch_submit" value="검색">
                  <span className="sound_only">Search</span>
                </button>
              </form>
            </div>
            <div className="sch-word-wrap">
              <div className="sch-recent-word">
                <h2>Recent Search</h2>
                <ul>
                  {/* <!-- <li className="sch-word-empty">최근검색어가 없습니다.</li>--> */}
                  <li>
                    <a href="#" className="recent-word">
                      #Masking tape
                    </a>
                    <span className="recent-date">2022.10.14</span>
                    <button type="button" className="recent-delete">
                      <span className="hide">DEL</span>
                    </button>
                  </li>
                  <li>
                    <a href="#" className="recent-word">
                      #Airpod
                    </a>
                    <span className="recent-date">2022.11.14</span>
                    <button type="button" className="recent-delete">
                      <span className="hide">DEL</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="sch-popular-word">
                <h2>Top Searched</h2>
                <ul>
                  {/* <!-- <li className="sch-word-empty">인기검색어가 없습니다.</li>--> */}
                  <li>
                    <a href="#">1. Masking tape</a>
                  </li>
                  <li>
                    <a href="#">2. Sticker</a>
                  </li>
                  <li>
                    <a href="#">3. Keyring</a>
                  </li>
                  <li>
                    <a href="#">4. Airpod case</a>
                  </li>
                  <li>
                    <a href="#">5. Birthday</a>
                  </li>
                  <li>
                    <a href="#">6. Heart</a>
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn-all-search-close closeBtn" onClick={handleSearchClick}>
              <span className="hide">Close Search</span>
            </button>
          </fieldset>
        </div>
      </div>
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
