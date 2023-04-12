import { TbStarsFilled } from "react-icons/tb"

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <TbStarsFilled />
            <h2>Dom B.</h2>
            <p>"Really enjoyed the food."</p>
          </div>
          <div className="review">
            <TbStarsFilled />
            <h2>Carter J.</h2>
            <p>"The greek salad was excellent!"</p>
          </div>

          <div className="review">
            <TbStarsFilled />
            <h2>Christian R.</h2>
            <p>"The bruchetta was the best"</p>
          </div>

          <div className="review">
            <TbStarsFilled />
            <h2>Cameron M.</h2>
            <p>"Awesome place peaceful atmosphere with delicious food"</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;