let spawnEl = document.getElementById('spawn');
let btnEl = document.getElementById('btn');
let timerEl = document.getElementById('timer');
let inputContainerEl = document.getElementById('input-container')
let resultEl = document.getElementById('result');
let time = 10;

let numbers = generateNumbers(1,100);
console.log(numbers);

for(let i=0 ; i<5 ; i++){

    let newEl = document.createElement('li');

    newEl.innerHTML = numbers[i];

    spawnEl.append(newEl);
}


const clock = setInterval(timer , 1000);

btnEl.addEventListener('click' , function(){

    let userNumbers = document.querySelectorAll('.your-number');

    index = 0;

    let rightNumbers =[];
    
    for(i= 0 ; i<5; i++){

        if(numbers.includes(parseInt(userNumbers[i].value))){

            rightNumbers.push(parseInt(userNumbers[i].value))

            index++
            
        }
        
    }


    resultEl.innerHTML = `Hai indovinato ${index} numero/i : ${rightNumbers}`
    
})















// ------------------------------FUNCTIONS----------------------------------
function generateNumbers(min, max){

    let numbers = [];
    let i = 0;
    let n;
    
    do{ 
        do{
            n = Math.floor(Math.random() * (max - min + 1) + min)
    
            }while(numbers.includes(n))
    
        numbers.push(n);
    
        i++;
    }while(i < 5);
    
    return numbers
    }





    function timer(){

            
            timerEl.innerHTML = `COUNTDOWN <br> ${time}`;
            
            if(time == 0){
                clearInterval(clock);

                spawnEl.style.display = 'none';

                timerEl.style.display = 'none';

                btnEl.style.display = 'flex';

                inputContainerEl.style.display = 'flex';


                
            }else{
                
                time--;
            }
            
        }

    