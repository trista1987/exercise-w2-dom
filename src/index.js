console.log("Start Here 😉");

/*const darkColor = document.getElementById("dark");
const lightColor = document.getElementById("light")
const crazyColor = document.getElementById("crazy")
/*const darkColorTest = document.getElementById("boxColor")
const radios = document.querySelectorAll('input[type="radio"]');
//darkColor.style.background = "brown"

//box.style.backgroundColor = "grey";

if(darkColor.checked){
    darkColorTest.style.backgroundColor = "brown"
}

function changeColor (){
    if (darkColor){
        box.style.backgroundColor = "brown"
    }else if(lightColor){
        box.style.backgroundColor = "yellow"
    }else if (crazyColor){
        box.style.backgroundColor = "purple"
    }
}

radios.addEventListener("click", changeColor); */
const darkColor = document.getElementById("dark")
const lightColor = document.getElementById("light")
const crazyColor = document.getElementById("crazy")
const boxColor = document.getElementsByClassName("box")

function changeColor(event){
    const chooseColor = event.target.id

    if (chooseColor === darkColor){
        boxColor.style.backgroundcolor = "brown"
    }else if(chooseColor === lightColor){
        boxColor.style.backgroundcolor = "yellow"
    }else if (chooseColor === crazyColor){
        boxColor.style.backgroundcolor = "red"
    }
}

darkColor.addEventListener("click", changeColor)
lightColor.addEventListener("click", changeColor)
crazyColor.addEventListener("click", changeColor)


//make 3 different ones, without if-else. because the evenListener is an event ==> action*/