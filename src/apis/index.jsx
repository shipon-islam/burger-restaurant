import burger from "../assets/burger.png";
import leftImage from "../assets/burgerLeft.png";
import rightImageTop from "../assets/burgerRight1.png";
import rightImagebottom from "../assets/burgerRight2.png";
import heroImage from "../assets/burgerwithglass.png";
import discoverImage from "../assets/discoverburger.png";
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
  para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas eget fames amet platea nibh. Pulvinar augue id posuere lacus tempor condimentum a egestas. Enim habitasse sagittis enim magna neque suscipit amet amet dui. Commodo nunc id eget eu laoreet nulla feugiat nibh tellus.",
  burgerList:[
    {
      id:1,
      image:burger,
      cardHead:"delicious chese-burger",
      cardPara:"Lorem ipsum dolor sit amet, conset Lorem ipsum dolor sit amet, co"
    },
    {
      id:2,
      image:burger,
      cardHead:"delicious chese-burger",
      cardPara:"Lorem ipsum dolor sit amet, conset Lorem ipsum dolor sit amet, co"
    },
    {
      id:3,
      image:burger,
      cardHead:"delicious chese-burger",
      cardPara:"Lorem ipsum dolor sit amet, conset Lorem ipsum dolor sit amet, co"
    },
  ]
}
//discover section
export const discover={
  image:discoverImage,
  title:"discover",
  head:" upcomming events",
  para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae enim dolor gravida pellentesque cursus turpis quis dui a. Adipiscing in diam pretium adipiscing. Sed at sed congue et fermentum mi purus enim. Amet nec risus, cursus molestie placerat morbi."
}

//footer section
export const footer={

  headText:"burger hunt",
  para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur egestas massa integer nulla tempus purus aenean libero. Dignissim sed fermentum leo mattis. Lacus aliquam arcu, a in quis. Vivamus felis, ultrices augue scelerisque condimentum eu fames.',
  email:"shiponkhan566@gmail.com",
  address:"main read,jamalpur"
}
