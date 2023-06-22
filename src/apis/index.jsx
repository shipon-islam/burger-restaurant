import cheseburger from "../assets/burger.png";
import leftImage from "../assets/burgerLeft.png";
import rightImageTop from "../assets/burgerRight1.png";
import rightImagebottom from "../assets/burgerRight2.png";
import friesburger from "../assets/burger_fries.png";
import heroImage from "../assets/burgerwithglass.png";
import discoverImage from "../assets/discoverburger.png";
import meatburger from "../assets/meat_burger.png";
import nav_logo from "../assets/navlogo.png";



//hearder

export const navbar = {
  nav_logo: nav_logo,
  links: [
    {
      id: 1,
      name: "home",
      path: "/",
      my: 0,
    },
    {
      id: 2,
      name: "menu",
      path: "/menu",
      my: 3,
    },
    {
      id: 3,
      name: "our story",
      path: "/ourstoty",
      my: 0,
    },
    {
      id: 4,
      name: "contact us",
      path: "/contactus",
      my: 3,
    },
   
  ],
};

//hero section
export const hero={
  image:heroImage,
  title:"it’ is a good time for the geat taste of burger",
  mainHeading:"burger",
  subHeading:"week"
}

//bottom hero section
export const bottomHero={
  leftArea:{
    image:leftImage,
    title:"try it today",
    header:"most popular burger"
  },
  rightAreaTop:{
    image:rightImageTop,
    title:"try it today",
    header:"more fun more taste"
  },
  rightAreabottom:{
    image:rightImagebottom,
    title:"try it today",
    header:"fresh and chill"
  }

}
//taste burger section
export const tasteBurger={
  titleButton:"always taste burger",
  topHead:"choose & enjoy",
  para:"A hamburger, or simply burger, is a food consisting of fillings .burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor with vegetables. our burger is good for health and mind",
  burgerList:[
    {
      id:1,
      image:cheseburger,
      cardHead:"delicious chese-burger",
      cardPara:"cheese burger is very teste and suitable for health,so ready to taste"
    },{
      id:2,
      image:friesburger,
      cardHead:"delicious fries-burger",
      cardPara:"more highlighting, more spicy burger that's fries burger"
    },
    {
      id:3,
      image:meatburger,
      cardHead:"delicious meat-burger",
      cardPara:"meat flavour with best taste that's meat buger"
    },
    
  ]
}
//discover section
export const discover={
  image:discoverImage,
  title:"discover",
  head:" upcomming events",
  para:`We are thrilled to announce our upcoming event, "Flavors Unleashed: A Gastronomic Adventure." Get ready to embark on a culinary journey like no other, as we bring together the finest chefs, exquisite flavors, and a vibrant atmosphere that will leave your taste buds dancing with delight. we are getting ready to serve you`
}

//footer section
export const footer={

  headText:"burger hunt",
  para:`Explore our wide selection of mouthwatering burgers crafted with the finest ingredients.
  From classic beef patties to delectable vegetarian and vegan options, we have something for everyone.
  Discover hidden gems and local favorites that will take your burger experience to the next level.
  Customize your burger with a variety of toppings, sauces, and buns to create your perfect meal.
  Join our vibrant community of burger enthusiasts and share your love for this iconic food.
  Ordering is fast and convenient, with options for delivery or takeout. Start your burger hunt today!`,
  email:"shiponkhan566@gmail.com",
  address:"main read,jamalpur"
}
