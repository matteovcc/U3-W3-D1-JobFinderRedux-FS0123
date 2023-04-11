import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ButtonFavourite = () => {
  const navigate = useNavigate();

  return (
    <Button variant="success" onClick={() => navigate("/favourites")}>
      Preferiti
    </Button>
  );
};

export default ButtonFavourite;
