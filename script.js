var score = [0, 0]

function rpsgame(choice){
    var playerChoice, computerChoice;

    playerChoice = choice.id
    computerChoice = randomChoice(randomChoiceNumber());
    
    // console.log(playerChoice);
    // console.log(computerChoice);

    var result = devideWinner(playerChoice, computerChoice);
    var message = resultMessage(result);
    // console.log(result);
    // console.log(message['message']);

    rpsFrontend(message, playerChoice, computerChoice);

    updateScore(score,result);
    displayScore(score);

}

function randomChoiceNumber(){
    return Math.floor(Math.random() * 3);
}

function randomChoice(numberChoice){
    return ['rock', 'paper', 'scissors'][numberChoice]
}

function devideWinner(playerChoice,computerChoice){
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0,},
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0,},
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0,}
    }

    return rpsDatabase[playerChoice][computerChoice];
}

function resultMessage(result){
    if (result === 0){
        return {'message': 'YOU LOST', 'color': 'red'};
    } else if (result === 0.5){
        return {'message': 'DRAW', 'color': 'black'};
    } else{
        return {'message': 'YOU WON', 'color': 'green'};
    }
}

function rpsFrontend(message, playerChoice, computerChoice){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var playerdiv = document.createElement('div');
    var messagediv = document.createElement('div');
    var computerdiv = document.createElement('div');

    playerdiv.style = 'display: flex; align-items: center; flex-direction: column;';
    computerdiv.style = 'display: flex; align-items: center; flex-direction: column;';
    messagediv.style = 'display: flex; align-items: center;';

    playerdiv.id = 'pdiv';
    computerdiv.id = 'cdiv';
    messagediv.id = 'mdiv';


    computerdiv.innerHTML = "<img src='" + imageDatabase[computerChoice] + "' height=200px style='box-shadow: 0px 10px 50px blue;'>";
    computerdiv.innerHTML += "<h2 style= 'font-size: 25pt; font-weight: 600;'> Computer </h2>";
    messagediv.innerHTML = "<h1 style= 'color: " + message['color'] + "; font-size: 25pt; font-weight: 600;'>" + message['message'] + "</h1>";
    playerdiv.innerHTML = "<img src='" + imageDatabase[playerChoice] + "' height=200px style='box-shadow: 0px 10px 50px green;'>";
    playerdiv.innerHTML += "<h2 style= 'font-size: 25pt; font-weight: 600;'> Player </h2>";

    document.getElementById('container-div').appendChild(computerdiv);
    document.getElementById('container-div').appendChild(messagediv);
    document.getElementById('container-div').appendChild(playerdiv);
}

function reload(){
    location.reload();
}

function onceAgain(){
    document.getElementById('pdiv').remove();
    document.getElementById('mdiv').remove();
    document.getElementById('cdiv').remove();

    var rock = document.createElement('img');
    var paper = document.createElement('img');
    var scissors = document.createElement('img');

    rock.id = 'rock';
    paper.id = 'paper';
    scissors.id = 'scissors';

    rock.src = 'assets/rock.png';
    paper.src = 'assets/paper.png';
    scissors.src = 'assets/scissors.png';

    rock.style.height = '200px';
    paper.style.height = '200px';
    scissors.style.height = '200px';

    rock.onclick = function() { rpsgame(this); };
    paper.onclick = function() { rpsgame(this); };
    scissors.onclick = function() { rpsgame(this); };

    document.getElementById('container-div').appendChild(rock);
    document.getElementById('container-div').appendChild(paper);
    document.getElementById('container-div').appendChild(scissors);
}

function updateScore(score, result){
    if (result === 1){
        score[0]++;
    }else if (result === 0){
        score[1]++;
    }
}

function displayScore(score){
    document.getElementById('pscore').remove();
    document.getElementById('cscore').remove();

    var pscore = document.createElement('div');
    var cscore = document.createElement('div');

    pscore.id = 'pscore';
    cscore.id = 'cscore';

    pscore.innerHTML = "<h1>" + score[0] + "</h1>"
    cscore.innerHTML = "<h1>" + score[1] + "</h1>"

    document.getElementById('computer-score').appendChild(cscore);
    document.getElementById('player-score').appendChild(pscore);

}