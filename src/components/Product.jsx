const Product = () => {
  return (
    <main className='product container'>
      <div className='product-content'>
        <h1>YOUR FEET DESERVE <br />THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      
        
        <div className='product-btn'>
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className='shopping'>
          <p>Also Available On</p>
          <div className='brand-icons'>
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className='product-image'>
        <img src="/images/shoe_image.png" alt="product-shoe" />
      </div>
    </main>
  );
};

export default Product