import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecentView() {
  let [recentView, setRecentview] = useState([]);

  //최근 본 상품 가져오기
  useEffect(() => {
    if (localStorage.getItem("watched") === null) {
      localStorage.setItem("watched", JSON.stringify([]));
    }

    let watchedItems = JSON.parse(localStorage.getItem("watched"));
    setRecentview(watchedItems); //배열을 역순으로 정렬
  }, []);

  return (
    <div className="recentView">
      <div>
        <h4>최근 본 상품</h4>
        {recentView.length > 0
          ? recentView.slice(0, 4).map((idx, i) => {
              return (
                <Link to={"/detail/" + idx} key={i}>
                  <div className="recentViewWrap">
                    <img src={ process.env.PUBLIC_URL + "/img/latte (" + idx + ").JPG" } width="100%" alt={"image" + idx} />
                  </div>
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default RecentView;
