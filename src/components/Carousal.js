import './Carousal.css';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Restaurant from './Restaurant'

const Arrow = styled.div`
&.slick-prev, &.slick-next {
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  border-radius: 50px;
  border: 1px solid #FF4500;
}

&.slick-prev {
  left: -25px;
}

&.slick-next {
    right: -25px;
  }
  

&.slick-prev::before, &.slick-next::before {
  display: none;
}

`


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center"}}
      onClick={onClick}
    >
      <ArrowForwardIosIcon style={{color: "#FF4500"}}/>
    </ Arrow>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{...style, display: "flex", justifyContent: "center", alignItems: "center", zIndex: "1"}}
      onClick={onClick}
    >
      <ArrowBackIosIcon style={{color: "#FF4500", marginLeft: "5px"}}/>
    </Arrow>
  );
}

function Carousal() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="carousal">
       <h3>MOST FREQUENTLY ORDERED</h3>
        <Slider {...settings}>
          <Restaurant name="Malabar Hotel" address="Korimangala" image="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"/>
          <Restaurant name="Barbeque Delight" address="Venkatapura" image="https://lh3.googleusercontent.com/mSYYT8VtXKcbUQbHDNVg2dfr05Wmm1_PfnZML9ETurINRPSbsaUedErsQGo6kRXRZm4LgS7rVHKdKTvBbXmrPF6kVO4=w1000"/>
          <Restaurant name="Punjabi Dhaba" address="Mattcolony" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksrxfm4vPlxBrVxs4hDS3AmYfKr_ACcQOng&usqp=CAU"/>
          <Restaurant name="Hotel Saravanna" address="Indra Nagar" image="https://static.toiimg.com/thumb/msid-58022721,width=1200,height=900/58022721.jpg"/>
          <Restaurant name="Malabar Hotel" address="Korimangala" image="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"/>
          <Restaurant name="Barbeque Delight" address="Venkatapura" image="https://lh3.googleusercontent.com/mSYYT8VtXKcbUQbHDNVg2dfr05Wmm1_PfnZML9ETurINRPSbsaUedErsQGo6kRXRZm4LgS7rVHKdKTvBbXmrPF6kVO4=w1000"/>
          <Restaurant name="Punjabi Dhaba" address="Mattcolony" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksrxfm4vPlxBrVxs4hDS3AmYfKr_ACcQOng&usqp=CAU"/>
          <Restaurant name="Hotel Saravanna" address="Indra Nagar" image="https://static.toiimg.com/thumb/msid-58022721,width=1200,height=900/58022721.jpg"/>
         
        </Slider>
    </div>
  );
}

export default Carousal;
