import React from 'react'
import "../src/components  /css/Project1.css"

//---------------------------------------IMAGES-------------------------------------
import p1 from "../src/components  /assets/Projects pictures/Cafeina.png";
import p2 from "../src/components  /assets/Projects pictures/Cheatsheet.png";
import p3 from "../src/components  /assets/Projects pictures/Coffee.png";
import p4 from "../src/components  /assets/Projects pictures/Haneefa.png";
import p5 from "../src/components  /assets/Projects pictures/meme.png";
import p6 from "../src/components  /assets/Projects pictures/Wordutil.png";
import p7 from "../src/components  /assets/Projects pictures/Portfolio.png";
import p8 from "../src/components  /assets/Projects pictures/WeatherAPI.png";
import p9 from "../src/components  /assets/Projects pictures/Rock,Paper and Scissors.png"
import { Link } from 'react-router-dom';


// ---------------------------WE HAVE CREATED AN ARRAY OF OBJECTS---------------------------
const cards = [
    {
      key: 1,
      images: p1,
      title: "Cafeina Cafe Website",
      desc: "Immerse yourself in the vibrant world of Cafeina Cafe through its captivating website. Discover crafted specialties, explore our menu, and book your reservation today.",
      url: "https://rijin1906-cafeina-cafe.netlify.app/",
    },
    {
      key: 3,
      images: p3,
      title: "Coffee Website",
      desc: "Aroma fills the air as you embark on a digital journey through my coffee website. Immerse yourself in the rich tapestry of flavours, from our robust dark roasts to our delicate light roasts.",
      url: "https://coffee-42499.firebaseapp.com/",
    },
    // {
    //   key: 4,
    //   images: p4,
    //   title: "Haneefa's Portfolio",
    //   desc: "My friend's portfolio website is a stunning showcase of their creative talent and professional expertise. The site features a sleek, modern design with high-quality visuals that immediately capture the viewer's attention.",
    //   url: "https://haneefa-s-portfolio.web.app/",
    // },
    {
      key: 5,
      images: p5,
      title: "Meme Generator",
      desc: "Create hilarious memes with ease using my user-friendly meme generator. With a wide variety of templates and customization options, you can create memes that are sure to get a laugh.",
      url: "https://meme-generator-rijin1906.netlify.app/",
    },
    {
      key: 6,
      images: p6,
      title: "Word Util",
      desc: "A word utility website is a valuable tool for writers,students, and anyone who works with the words.It can help you improve your writing skills and save your time and efforts.",
      url: "https://wordutil-2722f.firebaseapp.com/",
    },
    {
      key: 7,
      images: p2,
      title: "Cheatsheet",
      desc: "A cheatsheet website is a valuable resource for students,providing quickk access to key information and formulas for various subjects. It's like having a pocket tutor at your fingertip.",
      url: "https://rijin1906-cheetsheet.netlify.app/",
    },
    {
      key: 8,
      images: p7,
      title: "Portfolio",
      desc: "Passionate software developer with a proven track record of designing, developing, and implementing high-quality applications. Expertise in a variety of programming languages and frameworks, including JavaScript, React. Strong problem-solving skills and a commitment to delivering projects on time.",
      url: "https://portfolio-f0e33.firebaseapp.com/",
    },
     {
      key: 9,
      images: p8,
      title: "Weather App",
      desc: "Imagine a sleek and user-friendly React application that acts as your personal weather concierge. This weather app leverages the power of APIs to retrieve real-time weather data for any city you choose. Simply enter the city name, and the app displays current temperature, weather conditions, and other relevant information like humidity and wind speed. Built with React, the app boasts a dynamic and interactive interface, updating instantly as you explore different locations. So, whether you're planning a trip or just curious about the day's forecast, this weather app empowers you to stay informed with a touch of modern convenience.",
      url: "https://weather-app-using-api-9712b.web.app/",
    },
    {
      key: 10,
      images: p9,
      title: "Rock, Paper and Scissors Game",
      desc: "I crafted a simple Rock, Paper, Scissors game using JavaScript to refresh my grasp on fundamental coding concepts. By minimizing HTML and CSS, the project focused on core functionalities like DOM manipulation, event listeners, random number generation, and conditional logic. Choosing a familiar game allowed me to experiment with these building blocks in a practical and engaging way.",
      url: "https://rock-paper-scissors-game-rijin.netlify.app/",
    },
  ];

  const Card = ({ image, title, description,url }) => {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        {/* <p>{description}</p> */}
        <a href={url}>Click Me</a>
      </div>
    );
  };

  
export default function Project1() {
  return (
    <div>
       <div>
      <div classNmae="container-fluid">
        <div className="project-head alignments">
          <h2>PROJECT 📁</h2>
          <div>
            <q id="para">The best project you will ever work on is you.</q>
          </div>
        </div>
        {/* <div className="rowDiv1">
          {projects.map((items) => (
            <div className='divFullCard'>
              <div className='divImageSection'><img src={items.images}></img></div> 
              <div className='divTitlesection'></div>
              <div className='divParagraphSection'></div>
              <div className='divButtonSection'></div></div>
          ))}
        </div> */}
         <div className="card-container">
      {cards.map((card) => (
        <Card key={card.id} image={card.images} title={card.title} description={card.description} url={card.url}/>
      ))}
    </div>
        <hr></hr>
      </div>
    </div>
      
    </div>
  )
}
