import { Button, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";


export default function AboutPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate('/catalog');
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            src="/images/abtpg.jpg"
            alt="book1"
            style={{ display: 'block', width: '100%', maxHeight: 500 }}
          />
        </div>
      </Slider>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        <Typography variant="h4" gutterBottom style={{fontFamily: 'Lustria'}}>
          About us
        </Typography>
        <Typography variant="body1" paragraph style={{fontFamily: 'Lustria'}}>
          At our Book Online shop, we are passionate about connecting book lovers with their favorite reads. We believe in the power of books to inspire, educate, and entertain. Whether you're searching for the latest bestsellers, timeless classics, or niche genres,
           we have a wide selection to cater to every reader's taste. Our dedicated team is committed to curating a diverse collection of books, ensuring there's something for everyone.
            We take pride in offering a seamless and user-friendly browsing experience, making it easy for you to explore our catalog and find your next literary adventure. With our Book Online shop, you can discover new authors, uncover hidden gems, 
            and dive into captivating narratives. You can order now!!
        </Typography>
        <Button variant="contained"  onClick={handleOrderNowClick} style={{fontFamily: 'Lustria'}}>
          Order now
        </Button>
      </Container>
    </>
  );
}


