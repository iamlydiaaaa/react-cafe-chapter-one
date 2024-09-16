import { Link,  Outlet } from "react-router-dom";

function Event() {
    return (
      <div className='sub_wrap'>
        <span>
          <Link to="/event/one">one</Link> /{" "}
        </span>
        <span>
          <Link to="/event/two">two</Link>{" "}
        </span>
        <h2>Today's Event</h2>
        <Outlet></Outlet>
      </div>
    );
  }

export default Event