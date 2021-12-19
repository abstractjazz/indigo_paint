console.log("index.js")

const colors = document.getElementsByClassName("color")
colorArray=Array.from(colors)

colorArray.map(colorBox=>{
    colorBox.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor=`rgb(${randomize(255)}, ${randomize(255)}, ${randomize(255)})`;
        setTimeout(function(){
            e.target.style.backgroundColor="";
            }, 150)
        })
    })


    function randomize(n) {
        return Math.floor(Math.random() * Math.floor(n))
    }


    // const logo = document.getElementById("indigo")
    // console.log(logo)
    // logo.addEventListener('click', function(e){
    //     e.target.style.color=`rgb(${randomize(255)}, ${randomize(255)}, ${randomize(255)})`
    // })

    const indigo = document.querySelector('#indigo')
    indigoArray=indigo.innerHTML.split("")
    // console.log(indigoArray)
    const noSpaceArray = indigoArray.filter(item => item !== " ")
    console.log(noSpaceArray)
    // noSpaceArray.map(letter => {
    //    let div = document.createElement('div')
    //    const body = document.querySelector('body')
    //    div.innerHTML=letter
    //    body.appendChild(div)
    //    div.className = "letter";  
    //    div.style.display = "inline" 
    //    div.style.color = "white" 
    //    div.style.fontFamily="arial"  
    // })

    const collection = document.getElementsByClassName('letter')
    const letters = Array.from(collection);
    letters.map(letter=>{
        letter.addEventListener('click',function(e){
            div.innerHTML=letter;
            e.target.style.color=`rgb(${randomize(255)}, ${randomize(255)}, ${randomize(255)})`;
        })
    })
    
        // addEventListener('click', function(){
        //     const div = document.createElement('div')
        //     div.style.backgroundColor = `rgb(${randomize(255)}, ${randomize(255)}, ${randomize(255)})`;
        //     div.style.width = 5;
        //     div.style.height = 5;
        //     document.appendChild;
        // })

   