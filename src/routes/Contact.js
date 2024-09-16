import "./../css/contact.css";

function Contact() {
  return (
    <div>
      <div className="sec_tit">
        <h2>Contact Us</h2>
        <span>Booking, Catering, Private Function, Party & Conference</span>
      </div>
      <section className="board_contact">
        <form action="/" method="post">
          <div className="board_write">
              <p className="row">
                <input type="text" name="username" id="username" placeholder="*Name" />
              </p>
              <p className="row">
                <input type="email" name="email" id="email" placeholder="*Email" />
              </p>
              <p className="row">
                <input type="phone" name="phone" id="phone" placeholder="*Phone" />
              </p>
              <p className="row board_txt">
                <textarea
                  name="content"
                  id="content"
                  className="txt_area"
                  placeholder="*Message"
                ></textarea>
              </p>
          </div>
          <div className="submit_wrap">
            <button type="submit" className="btn_2">
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact;
