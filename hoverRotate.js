
const btn = document.querySelector("button");


const h1 = document.querySelector("h1");

btn.addEventListener('click', () =>{
    const randNum = Math.floor(Math.random() * 100);
    console.log(randNum);

    const userInput = window.prompt();

        if(userInput === randNum){
            console.log("Right");
        }else{
            console.log("wrong");
        }

});




