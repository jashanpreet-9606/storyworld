// import Home from './pages/home';
import React from 'react';
import './App.css';

function App() {

  return(
    <div>
    <center><h1 style={{color: "red"}}>OUR VISION</h1></center>
    <center><p style={{textAlign: "justify"}}>An e-book is a digital version of a regular print book that can be read on a computer or through an e-book reader. To begin, e-books are electronic books that can be read on a tablet, smartphone, computer, or another digital device. Users can also buy an e-book on a diskette or CD, but the most common option is to buy a digital version of the e-book from a website, which can then be read on the user's computer or reading device.There are several benefits of e-books that make them so popular and convenient for both students and professors alike.
For students, purchasing and downloading e-books is now straightforward, thanks to the internet connection. There are countless benefits of eBooks. In truth, it's the same as purchasing any other item or a printed book from a store. You can purchase your appropriate e-book by paying online, after which you will be able to download a single page or the entire book rather than going to a shop and buying the same.
A table of contents, numbered pages, photographs, and graphics can all be found in an e-book, just like they would in a traditional printed textbook. For people who don't have the time to attend a traditional classroom, the online or distant learning environment is currently a very popular and well-liked option. E-books are quite popular among students in our technological era, and they have made online learning even more exciting, convenient, and economical.</p></center>
    </div>
  );
   
}

export default App;


// import React from 'react';

// import ReactBlog from './awz';

// import './App.css';

// function App() {

//  const BlogArr = [

//  {

//  id: 1,

//  title: 'Blog Title 1',

//  description: 'This is a msg',
//  url: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-1995.png"

//  },

//  {

//  id: 2,

//  title: 'Blog Title 2',

//  description: 'This is a msg',
//  url: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-1995.png"

//  },

//  {

//  id: 3,

//  title: 'Blog Title 3',

//  description: 'This is a msg',
//  url:"https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-1995.png"

//  }

//  ]

//  const BlogCard = BlogArr.map((item, pos)=>{

//  console.log(item);

//  return(

//   <ReactBlog key={pos} title={item.title} description={item.description} url={item.url} />

//  )

//  })

//  return (

//  <div className="App">

//  {BlogCard}

//  </div>

//  );

//  }

// export default App;



// import React from 'react';

// import classes from './App.module.css';

// import ProductData from './ProductData';

// function App() {

//  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();

//  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes(): '0' + new Date().getMinutes();

//  return (

//   <div className="App">

//    <header className="App-header">

//     <nav className={classes.Topbar}>

//      <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon logo"/>

//     </nav>

//    </header>

//    <div className={classes.MainContainer}>

//     <div>

//     <div className={classes.ProductPreview}>

//      <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview"/>

//      {/*<div className={classes.TimeSection}>

//       <p>{`${currentHour}:${currentMinute}`}</p>

//      </div>*/}

//      <div className={classes.HeartBeatSection}>

//       <i class="https://t3.ftcdn.net/jpg/02/19/09/72/360_F_219097249_cA4IH9taEthxiIOgRimr53aOstdlhUW9.jpg"></i>

//       <p>78</p>

//      </div>

//     </div>

//     </div>

//     <div className={classes.ProductData}>

//      <h1 className={classes.ProductTitle}>{ProductData.title}</h1>

//      <p className={classes.ProductDescription}>{ProductData.description}</p>

//      <h3 className={classes.SectionHeading}>Select Color</h3>

//      <div>

//       <img className={classes.ProductImage} src="https://imgur.com/iOeUBV7.png" alt="Black Colored Watch"/>

//       <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Colored Watch"/>

//       <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Colored Watch"/>

//       <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colored Watch"/>

//      </div>

//      <h3 className={classes.SectionHeading}>Features</h3>

//      <div>

//       <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>

//       <button className={classes.FeatureItem}>Heart Rate</button>

//      </div>

//      <button className={classes.PrimaryButton}>Buy Now</button>

//     </div>

//    </div>

//   </div>

//  );

// }

// export default App;

