console.log("index.js")


LottieInteractivity.create({
    mode: 'scroll',
    player:'#paintball',
    actions: [
        {
            visibility: [0.2, 0.03],
            type: 'stop',
            frames: [0]
        },
        {
            visibility: [0.1, 1],
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



    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    const navBox = document.querySelector('.topnav')
    const links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
      navBox.style.backgroundColor=""
    } else {
      links.style.display = "block";
      navBox.style.backgroundColor="rgba(0,0,0,0.25)"
    }
  } 



//   const IG = document.querySelector('.instagram-media');
//   IG.style.display="none";

    // const pb = document.querySelector('#paintball-2');
    // document.addEventListener('scroll',function(e) {
    //     pb.animate(
    //         [
    //                     {transform:`translateY(-5vh) translateX(0%) translate3D(0,0,0)`},
                
    //                     // {transform: 'translate3D(0,0,0)' },
                        
    //                     // {transform: 'translate3D(0,0,0)' },
                        
    //                     {transform: ` translateY(0.3vh) translateX(0%) translate3D(0,0,0)` }
    //                 ],
    //                 {
    //                     duration: 2000,
    //                     iterations: 1,
    //                     easing: 'ease-in-out'
    //                 }
    //     )
    // })

    

    
