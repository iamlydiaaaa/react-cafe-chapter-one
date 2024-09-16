import { Spinner } from "react-bootstrap";

function LoadingEffect() {
  return (
    <Spinner animation="border" role="status" variant="info">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default LoadingEffect;
