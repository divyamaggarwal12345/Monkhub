
import './App.css';

function App() {
  return (
  <div className="App">
      
		<header>
			
			<div id="top-header">
				<div className="container">
					<ul className="header-links pull-left">
						<li><a href="#">+021-95-51-84</a></li>
						<li><a href="#">email@email.com</a></li>
						<li><a href="#">1734 Stonecoal Road</a></li>
					</ul>
					<ul className="header-links pull-right">
						<li><a href="#">USD</a></li>
						<li><a href="#">My Account</a></li>
					</ul>
				</div>
			</div>
			

			{/* main Header */}
			<div id="header">
				{/* container */}
				<div className="container">
					{/* row */}
					<div className="row">
						{/* logo */}
						<div className="col-md-3">
							<div class="header-logo">
								<a href="#" className="logo">
									<img src="./images/logo.png" alt=""/>
								</a>
							</div>
						</div>
						

						{/* search */}
						<div className="col-md-6">
							<div className="header-search">
								<form>
									<select className="input-select">
										<option value="0">All Categories</option>
									</select>
									<input className="input" placeholder="Search here"/>
									<button className="search-btn">Search</button>
								</form>
							</div>
						</div>
						

						
						<div className="col-md-3">
							<div className="header-rightside">
							
								<ul className="header-links pull-right">
						<li><a href="#">Your wishlist</a></li>
						<li><a href="#">Your Cart</a></li>
				     	</ul>
								

								
								
													
							</div>
						</div>
						
					</div>
					
				</div>
				
			</div>
			
		</header>
		


    
		<nav id="navigation">
			
			<div className="container">
				
				<div id="responsive-nav">
					
					<ul className="main-nav nav navbar-nav">
						<li className="active"><a href="#">Home</a></li>
						<li><a href="#">Hot Deals</a></li>
						<li><a href="#">Categories</a></li>
						<li><a href="#">Laptops</a></li>
						<li><a href="#">Smartphones</a></li>
						<li><a href="#">Cameras</a></li>
						<li><a href="#">Accessories</a></li>
					</ul>
			
				</div>
				
			</div>
			
		</nav>
		
    {/* productsection */}
		<div className="productsection">
			
			<div className="container">
				
				<div className="row">

					
					<div className="col-md-12">
						<div className="productsection-title">
							<h3 className="title">New Products</h3>
							<div className="productsection-nav">
								<ul className="productsection-tab-nav tab-nav">
									<li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
									<li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
									<li><a data-toggle="tab" href="#tab1">Cameras</a></li>
									<li><a data-toggle="tab" href="#tab1">Accessories</a></li>
								</ul>
							</div>
						</div>
					</div>
          
          <div class="row">
  <div class="col-md-3 col-sm-12">
  <div className="card">
  <img src="./images/product01.png" className="card-image" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Catogory</h5>
    <p className="card-text">Product name goes here</p>
    
  </div>
</div>
  </div>
  <div class="col-md-3 col-sm-12">
  <div className="card">
  <img src="./images/product02.png" className="card-image" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Catogory</h5>
    <p className="card-text">Product name goes here</p>
    
  </div>
</div>
  </div>
  <div class="row">
  <div class="col-md-3 col-sm-12">
  <div className="card">
  <img src="./images/product03.png" className="card-image" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Catogory</h5>
    <p className="card-text">Product name goes here</p>
    
  </div>
</div>
  </div>
  <div class="col-md-3 col-sm-12">
  <div className="card">
  <img src="./images/product04.png" className="card-image" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Catogory</h5>
    <p className="card-text">Product name goes here</p>
    
  </div>
</div>
  </div>
</div>
</div>

					
				</div>
      </div>



  </div>
  </div>
  );
}

export default App;
