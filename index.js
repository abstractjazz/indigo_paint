console.log("index.js")


LottieInteractivity.create({
    mode: 'scroll',
    player:'#paintball',
    actions: [
        {
            visibility: [0.7, 0.03],
            type: 'stop',
            frames: [0]
        },
        {
            visibility: [0.3, 1],
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

    

    
