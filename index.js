console.log("index.js")

const sectionOne = document.getElementById('section-1')
const sectionTwo = document.getElementById('section-2')
const sectionThree = document.getElementById('section-3')
const sectionFour = document.getElementById('section-4')

const handleScreenChange = () => {
    if ((window.innerWidth > window.innerHeight ) && (window.innerHeight < 412)) {
        sectionOne.style.display="none"
        sectionTwo.style.display="none"
        sectionThree.style.display="none"
        sectionFour.style.display="none"
    } else {
        sectionOne.style.display=""
        sectionTwo.style.display=""
        sectionThree.style.display=""
        sectionFour.style.display=""
    }
}


window.addEventListener('resize', handleScreenChange);
// screenOrientation.onchange=function(){body.style.display="none"}

// function handleScreenChange(){
// const body = document.getElementById('body')
// body.style.display="none"
// }

// if ((window.innerWidth > window.innerHeight ) && (window.innerWidth > 412)) {
// body.style.display="none"
// } else {}

// if (window.innerWidth < '412px') {
// body.style.display="none";
// } 





// LottieInteractivity.create({
//     mode: 'scroll',
//     player:'#paintball',
//     actions: [
//         {
//             visibility: [0.2, 0.03],
//             type: 'stop',
//             frames: [0]
//         },
//         {
//             visibility: [0.1, 1],
//             type: 'seek',
//             frames: [0, 64]
//         }
//     ]
// });


// LottieInteractivity.create({
//     mode: 'scroll',
//     player:'#paintbrush',
//     actions: [
//         {
//             visibility: [0.2, 0.2],
//             type: 'stop',
//             frames: [0]
//         },
//         {
//             visibility: [0.1, 2],
//             type: 'seek',
//             frames: [0, 64]
//         }
//     ]
// });

LottieInteractivity.create({
    mode: 'scroll',
    player:'#contact-animation',
    actions: [
        {
            visibility: [0.2, 0.2],
            type: 'stop',
            frames: [0]
        },
        {
            visibility: [0.1, 2],
            type: 'seek',
            frames: [0, 64]
        }
    ]
});


const colors = document.getElementsByClassName("color")
colorArray=Array.from(colors)

//quick way to create random rgb values
function randomize(n) {
    return Math.floor(Math.random() * Math.floor(n))
}

//creates random color when user mouses over the header 
colorArray.map(colorBox=>{
    colorBox.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor=`rgb(${randomize(255)}, ${randomize(255)}, ${randomize(255)})`;
        setTimeout(function(){
            e.target.style.backgroundColor="";
            }, 150)
        })
    })



   
    
    // const div1=document.getElementById('div-1')
    // const div2=document.getElementById('div-2')
    // const div3=document.getElementById('div-3')
    // const div4=document.getElementById('div-4')
    // const leftButton=document.getElementById('left-button')
    // const rightButton=document.getElementById('right-button')
    // const numArray = [div1, div2, div3, div4];
   
    // let i=0
    // let hasFocus = numArray[i]
    // console.log(numArray[i])
   
    // const increment = () => {
    //     if (i < numArray.length-1) {
    //         // console.log(numArray[i])
    //         i++
    //        console.log(i)
    //     } else {
    //         i = 0;
    //     } 
        
    // }
 
    // const decrement = () => {
    //     if ( !(i == 0) && i <= numArray.length-1) {
    //         i --; 
    //      console.log(i)
    // } else {
    //     i = numArray.length-1;
    //     console.log(i)
    // }


    // leftButton.addEventListener('click', decrement)
    // rightButton.addEventListener('click', increment)
    
  

    //add carousel
   

    

    

    // function carouselScroll(){
    //     numArray.map(div=>{
    //         if (div === hasFocus) {
    //             div.style.background="blue"
    //         } else {
    //             div.style.background = ""
    //         }           
    //     })
        // if(!(i==hasFocus)) {
        //     i.style.display="none"
        // }
        // for(i=0; i < numArray.length; carouselScroll()) {
    
        // }

  

    // const leftButton = document.getElementById('left-button')
    // const rightButton = document.getElementById('right-button')
    // leftButton.addEventListener('click', carouselScroll)
    // rightButton.addEventListener('click', carouselScroll)

    

    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    const bars = document.getElementById('bars')
    const headSub = document.getElementById('head-subhead')
    const subHead = document.getElementById('subhead')
    const banner = document.getElementById('banner')
    const topNav = document.getElementById('topnav')
    const links = document.getElementById("myLinks");


function myFunction() {
    const navBox = document.querySelector('.topnav')
    if (links.style.display === "block") {
      links.style.display = "none";
      navBox.style.backgroundColor=""
      bars.className="fa fa-bars";
      banner.style.zIndex="400"
      headSub.style.filter=""
      topNav.style.zIndex="5"
      
    } else {
      links.style.display = "block";
      navBox.style.backgroundColor="rgba(237, 221, 206, 0.75)"
      bars.className="fa fa-times";
      headSub.style.filter="blur(9px)"
      banner.style.zIndex="-25"
      topNav.style.zIndex="500"
    }
  } 

  links.addEventListener('click', function(){
     bars.click();
  })


  let safariAgent = navigator.userAgent.indexOf("Safari") > -1;
  console.log(safariAgent)

  const igWrapper=document.querySelector('#ig-wrapper')
  const contactPara=document.querySelector('#contact-para')


//   if (window.width < ) {
//     igWrapper.innerHTML="";
//   } else {}