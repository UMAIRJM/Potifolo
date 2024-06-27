import Carousel from 'react-bootstrap/Carousel';
import './mainScreen.css'; 
function DarkVariantExample() {
  return (
    <Carousel  >
      <Carousel.Item >
        <img
          className="imageStyle d-block w-100 imageStyle"
          src='/assets/images/webLight4.png'
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Web Developmeny</h5>
          <p>Web development using Node.js,React,HTML,CSS,Mongo,Express</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imageStyle d-block w-100 "
          src="/assets/images/carr3.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Mobile Application Development</h5>
          <p>Mobile Application developement using Flutter and React Native</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imageStyle d-block w-100 "
          src="/assets/images/carr2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Game Development</h5>
          <p>
            Game Developemnt using Unity Engine
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;