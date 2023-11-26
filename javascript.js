//add event listener to Choose Your Weapon buttons
//store button selected in variable

ties = 0;
wins = 0;
losses = 0;

//    document.querySelectorAll('.weaponPics button').forEach(image => {
//    image.addEventListener('click', () => {
//        initUserAns = image.getAttribute('type');
//        initUserTieAns = image.getAttribute('id');

//                gameReset = document.querySelectorAll('.movePics button').forEach(image => {
//                image.style.visibility = 'hidden'
//        })
//    })

userAns = document.querySelectorAll('.weaponPics button').forEach(image => {
        image.addEventListener('click', () => {
            userAns = image.getAttribute('type');
            tieAns = image.getAttribute('id');
            x.replaceChildren()
            clearSummary = document.getElementById('summary')
            clearSummary.textContent = ''
            rps()
        })
    })

function rps() {
//generate selection for pc
    //use array to establish list of acceptable answers. use all caps to standardize for comparison
    let pcArray = ['ROCK', 'PAPER', 'SCISSORS'];
//create variable and use random function to generate/set an answer for the computer
    let pcAns = pcArray[Math.floor(Math.random() * pcArray.length)];
//compare answers
//convert user answer from global to local
//    let rsltMsg

    if(userAns == pcAns) {
        ties == ties++
        rsltMsg = 'You selected ' + userAns + '. The pc also selected ' + pcAns + '. The result is a tie.'
        rslt()
    }
    else if(userAns == 'ROCK' && pcAns == 'SCISSORS') {
        wins == wins++
        rsltMsg = 'You win!\nRock smashes Scissors'
        rslt()
    }    
    else if(userAns == 'PAPER' && pcAns == 'ROCK') {
        wins == wins++
        rsltMsg = 'You win!\nPaper covers Rock'
        rslt()
    }
    else if(userAns == 'SCISSORS' && pcAns == 'PAPER') {
        wins == wins++
        rsltMsg = 'You win!\nScissors cut Paper'
        rslt()
    }
    else if(userAns == 'ROCK' && pcAns == 'PAPER') {
        losses == losses++
        rsltMsg = 'You lose!\nPaper covers Rock'
        rslt()
    }    
    else if(userAns == 'PAPER' && pcAns == 'SCISSORS') {
        losses == losses++
        rsltMsg = 'You lose!\nScissors cut Paper'
        rslt()
    }    
    else if(userAns == 'SCISSORS' && pcAns == 'ROCK') {
        losses == losses++
        rsltMsg = 'You lose!\nRock smashes Scissors'
        rslt()
    }    
    function rslt() {
        var userImg = document.createElement("img")
        userImg.src = 'images/' + userAns.toLowerCase() + '.jpeg'; 
        var src = document.getElementById("x"); 
        src.appendChild(userImg); 
        
        var pcImg = document.createElement("img")
        pcImg.src = 'images/' + pcAns.toLowerCase() + '.jpeg'; 
        var src = document.getElementById("x"); 
        src.appendChild(pcImg); 
        
        x.style.display = 'flex';
        x.style.flexDirection = 'row';
        x.style.justifyContent = 'space-evenly';
        x.style.alignItems = 'center';
        x.style.paddingTop = '60px';
    
        var myH2 = document.getElementById('myRslt');
        myH2.textContent = rsltMsg
        myWins.textContent = wins
        myLosses.textContent = losses

        if(wins == 5) {
            var summary = document.getElementById('summary');
            summary.textContent = 'Congratulations! You have won 5 games. The pc only won ' + losses + '. You have bested the pc in this round of first-to-five.'
            ties = 0;
            wins = 0;
            losses = 0;
        }
        else if(losses == 5) {
            var summary = document.getElementById('summary');
            summary.textContent = 'Sorry! The pc has won 5 games. You only won ' + wins + '. The pc has bested you in this round of first-to-five.'
            ties = 0;
            wins = 0;
            losses = 0;
        }
    }    
};