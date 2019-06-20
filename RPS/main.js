var userChoice = prompt("choise one of 'sang' 'kaqaz' 'gheychi'?");
var random = Math.floor(Math.random()*3);
var computer;
switch(random){
    case 0 :
        computer = 'sang';
        break;
    case 1 :
        computer = 'kaqaz';
        break;
    case 2 :
        computer = 'gheychi';
        break;
}
console.log(computer);
if(userChoice == 'sang'){
    if(computer == 'kaqaz'){
        document.getElementById('content').innerText = 'YOU LOOSE HA HA:D';
    }
    else if(computer == 'gheychi'){
        document.getElementById('content').innerText = 'YOU WIN';
    }
    else{
        document.getElementById('content').innerText = 'EQ';
    }
}
if(userChoice == 'kaqaz'){
    if(computer == 'gheychi'){
        document.getElementById('content').innerText = 'YOU LOOSE HA HA:D';
    }
    else if(computer == 'sang'){
        document.getElementById('content').innerText = 'YOU WIN';
    }
    else{
        document.getElementById('content').innerText = 'EQ';
    }
}
if(userChoice == 'gheychi'){
    if(computer == 'sang'){
        document.getElementById('content').innerText = 'YOU LOOSE HA HA:D';
    }
    else if(computer == 'kaqaz'){
        document.getElementById('content').innerText = 'YOU WIN';
    }
    else{
        document.getElementById('content').innerText = 'EQ';
    }
}

