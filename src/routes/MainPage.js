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
                  <div className="title01-inner">CodeOven</div>
                </div>
                <div className="title02">
                  <div className="title02-inner">Studio</div>
                </div>
              </div>
            </div>

            <div className="image">
              <p></p>
            </div>
          </div>
        </div>

        {/* <button className="button">See Web Menu</button>
        <button className="button">Contact</button>
        <button className="button">Location</button> */}
        {/* <div className="main_tit">
          <div className="main_tit_wrap">
            <div class="lettering">
              <h2>Studio</h2>
              <h1>CodeOven</h1>
            </div>
          </div>
        </div> */}
      </section>
      {/* <section className="sec02">하이</section>
      <section className="sec03">하이2</section> */}
    </div>
  );
}

export default MainPage;
