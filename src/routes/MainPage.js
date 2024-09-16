import mainbg from "./../img/main01.jpg";
import "./../css/texteffect.css";
import "./../css/main.css";

function MainPage() {
  return (
    <div className="main">
      <section className="sec01">
        {/* version 1 */}
        {/* <div className="main_tit">
          <h1>
            <span>C</span>
            <span>O</span>
            <span>D</span>
            <span>E</span>
            <span>O</span>
            <span>V</span>
            <span>E</span>
            <span>N</span>
          </h1>
          <p>STUDIO</p>
        </div> */}

        <div className="main_body">
          <div className="main">
            <div className="main_title">
              <div className="main_title-inner">
                <div className="title01">
                  <div className="title01-inner">Chapter</div>
                </div>
                <div className="title02">
                  <div className="title02-inner">One.</div>
                </div>
              </div>
            </div>
            <div className="image">
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec02">
        <h2>
          It's time to eat, drink, <br /> & get lost in a good book!
        </h2>
        <p>
          Join us as we celebrate food, friendship,
          <br /> and unforgettable moments that fill our hearts and stomachs!
        </p>
        <div className="btns_wrap">
          <div className="btns">
            <button className="btn_default">See our Menu</button>
            <button className="btn_default">Book a table</button>
            <button className="btn_default">Catering</button>
          </div>
        </div>
      </section>
      <section className="sec03">
        <h2>Instagram</h2>
        <div className="insta_wrap"></div>
      </section>
    </div>
  );
}

export default MainPage;
