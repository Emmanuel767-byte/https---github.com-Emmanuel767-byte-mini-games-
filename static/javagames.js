let TitleH1Tag =document.getElementById("header");
console.log(TitleH1Tag);
TitleH1Tag.innerHTML="Its Game Timee";
document.getElementById("results-div").style.display='none'
// var textAnswer= document.createTextNode('Your are'+ AgeIndays+ 'Old!!)
//      YOUR AGE IN DAYS


// Create elements and attach content to it

//  
/*

var h1= document.createElement('h1');// Create element
var textAnswer = document.createTextNode('Your are' + AgeIndays+ 'Days Old!!')
h1.setAttribute('id', 'ageInDays');// apply an attribute to an element basically --> <h1 id="ageInDays"></h1>
h1.appendChild(textAnswer)//applying text content to element -->  <h1>
document.getElementById('results-div').appendChild(h1)// apply h1 to the results div container


*/

AgeinDaysFunction=()=>{
    var AgeIndays=0;
    var age = prompt("what is your age?");
    var AgeIndays= age*365;
    document.getElementById("ageindays").append(AgeIndays);
    document.getElementById("results-div").style.display='inline-block';
}

reset=()=>{
    var AgeIndays=0;
    document.getElementById("ageindays").nodeValue=' '
  //  document.getElementById("ageindays").remove();
    document.getElementById("Results-output").remove();
    
}


//<------------------------CAT GENERATOR-------------------->

GenerateCat=()=>{
    
    // const request = async () => {
    //     url ='http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    //     const response = await fetch(url);
    //     //const json = await JSON.stringify(response.json());
    //     return response;
    // }
    ImgUrl ='http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    var Catdiv =document.getElementById("cat-pics-div");
    var image = document.createElement('img');
    image.src=ImgUrl;
    image.setAttribute('id', 'catImg');
    Catdiv.appendChild(image);
}
RemoveCats=()=>{
    document.getElementById('cat-pics-div').remove();
}


// <------------------------- Rock Paper Scissors ---------------------------------->
// Computer player Bot has to choose randomly 



RpsGame=(yourChoice)=>{// passing in user choice
     console.log(yourChoice);
// we need human choice and a bot choice / Pc 
    var humanChoice, botChoice;
    humanChoice= yourChoice.id
    //<------BOT CHOICE------->
    botChoice= numberToChoice(randToRpsIntNumba());
    console.log('Computer Choice -->', botChoice);
    console.log('humanChoice-->', yourChoice);

 results = decideWinner(humanChoice, botChoice)// state wether winner is the bot or human/User
 console.log(results)
   resultsMessage = finalMessage(results);
   console.log(resultsMessage);
  rspFrontEnd(humanChoice, botChoice,resultsMessage )
}

randToRpsIntNumba=()=>(// a simple function to return the result of random Math integer
     Math.floor(Math.random() * 3)
)

numberToChoice=(number)=>(// takes in a number returns the choice of that number/integer
    ['rock', 'paper', ' scissors',][number]
)

/*
 this function is the backbone of the RPS game  
 THIS FUNCTION decides the lOGIC & Possible outcome of each action taken , like an IF eLSE STATEMNT
 For example :
 *if user choose 'rock' ,and Computer choose 'scissors'   return 'Player win!'
 *if user choose 'rock' ,and Computer choose 'paper'   return 'Computer win!'
 * if user choose 'rock' ,and Computer choose 'rock'   return 'Draw!'
*/

decideWinner=(yourChoice,computerChoice)=>{//function to decide winner Bot or Human
 var RpsGameplayData = {//--->Is an object variable which contains all functionality possible outcomes
   /* based on  the id  rock ,paper or scissors is chosen
    *number 1 represents a 'win' & number 0 respresents a 'lose'
        Each key id has an object dictionary wit an if else output set up
    */  
    'rock': {'scissors':1, 'rock':0.5, 'paper':0},
    'paper': {'rock': 1,'paper': 0.5, 'scissors':0},
    'scissors':{'paper': 1, 'scissors': 0.5, 'rock':0}
 }
 /*  */
  var yourScore= RpsGameplayData[yourChoice][computerChoice];
  var computerScore= RpsGameplayData[computerChoice][yourChoice];

  return [yourScore, computerScore]
}

finalMessage=(yourScore,computerScore)=>{
    if (yourScore === 1) {   
        return{'message': 'You Win!', 'color': 'green'}
    } else if (yourScore === 0) {
        return {'message': 'Its a Tie!', 'color': 'yellow'} 
    } else  {
        return {'message':'You Lose!', 'color': 'red' }
    }
}


rspFrontEnd=(humanImageChoice, botImageChoice,resultsMessage )=>{
    var imagesDataBase = {
        "rock": document.getElementById('rock').src,
        "paper": document.getElementById('paper').src,
        "scissors": document.getElementById('scissors').src
    }
    //   imagesDataBase["paper"], imagesDataBase["rock"]

    //  Lets remove all images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //  Create divs for the images using javascript screatElememt
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div'); 

    // Later in the course we will see the ADVACE way of styling img tage but for now the Raw way of doing using images in Js 

    humanDiv.innerHTML= "<img src='" + imagesDataBase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    botDiv.innerHTML= "<img src='" + imagesDataBase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 30, 24, 1);'>"
    messageDiv.innerHTML= "<h1 style='color:" + resultsMessage['color']+ "; font-size: 40px; padding: 20px; '>" + resultsMessage['message'] + "</h1>"
    
    document.getElementById('RocPapScis-div').appendChild(humanDiv);
    document.getElementById('RocPapScis-div').appendChild(messageDiv);
    document.getElementById('RocPapScis-div').appendChild(botDiv);
} 

var NayMessage =(` 
    <div className="mainCnter">
        <center style="padding: 2; border-radius: 8px; border:2px groove green;"><h1 style="text-decoration: underline; font-weight:700;">Welcome to all</h1>
        <img src="https://s3.amazonaws.com/images.seroundtable.com/google-images-1548419288.jpg" width="600" height="220" alt="">
        </center>
    </div>` );

//    document.getElementById("testing").innerHTML=NayMessage;

//    Challenge 4: CHange the Colors of All Buttons

    let all_btns = document.getElementsByTagName("button");
    // Before we reset all the button colors , we have to create a var a copy of it to remember it
    let copyAllBtns =[];
    for (let i=0;i < all_btns.length; i++){  //as long as i is less than the amount (length) of buttons we have find more, basically get all the buttons
      // since there are 7 buttons this loop will run 7 times
        
      copyAllBtns.push(all_btns[i].classList[1]) //Since its in an Array[] we can access all btns the all btns classnames (classList[1])

    }
    console.log(copyAllBtns);

    BtnColorChanger=(buttonThingy)=>{
        if (buttonThingy.value === 'red') {
            buttonRed();
        }   else if (buttonThingy.value === 'green'){
            buttonGreen();
        }   else if (buttonThingy.value === 'random'){
            buttonRandom();
        }   else if (buttonThingy.value === 'reset') {
            buttonColorReset();
        }
    }


//  All the Color Functions

    buttonRed=()=>{
       for (let i=0;i < all_btns.length; i++) {

       
        all_btns[i].classList.remove(all_btns[i].classList[1])//Access all btns and remove the 2nd classnames classlist[1]= class="btn  btn-primary" 
        all_btns[i].classList.add("btn-danger");
       }
    }

    buttonGreen=()=>{
        for (let i=0;i < all_btns.length; i++) {

       
            all_btns[i].classList.remove(all_btns[i].classList[1])//Access all btns and remove the 2nd classnames classlist[1]= class="btn  btn-primary" 
            all_btns[i].classList.add("btn-success");
           }
    }

    buttonColorReset=()=>{
        for (let i=0;i < all_btns.length; i++) {

       
            all_btns[i].classList.remove(all_btns[i].classList[1])//Access all btns and remove the 2nd classnames classlist[1]= class="btn  btn-primary" 
            all_btns[i].classList.add(copyAllBtns[i]);
           }
    }
/*
let ConsoleExample= (
    Array(8)0: button#cickmeBtn.btn.btn-primary1: button#resetBtn.btn.btn-danger2: button#cat-get-btn.btn.btn-success3: button#catImg.btn.btn-danger4: button.btn.btn-primary5: button.btn.btn-success6: button.btn.btn-danger7: button.btn.btn-warninglength: 8[[Prototype]]: Array(0)
IndexPage.html:89 Live reload enabled.
copyAllBtns[0]
<button id=​"cickmeBtn" onclick=​"{AgeinDaysFunction()​}​" class=​"btn btn-primary">​Click Me​</button>​
copyAllBtns[0].classList
DOMTokenList(2) ["btn", "btn-primary", value: "btn btn-primary"]0: "btn"1: "btn-primary"length: 2value: "btn btn-primary"[[Prototype]]: DOMTokenList
copyAllBtns[0].classList.remove("btn-primary");
copyAllBtns[0].classList.add("btn-success"); //put back element (button)
)
*/

buttonRandom=()=>{
    // create a Var with all the colors to be selected from randomly
    let Choices= ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger']

    for (i=0; i < all_btns.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4);// Get a random number from 1-4
        all_btns[i].classList.remove(all_btns[i].classList[1]) //Remove all secondary classnames
        all_btns[i].classList.add(Choices[randomNumber])

    }
}


//  <------------Black Jack ------------>
/* 
* Activate all buttons witha functonality respectively 
* Have sound effects for diffent aspects of * buttons of the game,  like when a player wins/lose i\u
* display card when a button is clicked
* Make results visisble int results table 
* Create computer player gameplay  (Bot Player)
* if Player score is more than 21 dont show cards and Score above 21
* Once a player hits "Stand" they should not be able to press "Hit"  or "Stand" afterwards
* HIT buttonn should only work if "Stand" button isnt pressed yet
*After "Deal" button is hit all buttons are able again
*/



let BlackJackgame= {
"you": {'Resultspan': '#Your-result' , 'Div': '.Your-Bx' ,'Score': 0},
"dealer": {'Resultspan': '#Dealer-result' , 'Div': '.Dealer-Bx','Score': 0},
"cards": ['2','3','4','5','6','7','8','9','10','A','J','K','Q'],
"cardsMap": {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'A':[1,11],'J':10,'K':10,'Q':10},
"Wins" : 0,
"Losses": 0,
"Draws": 0,
"IsStand?": false,
"TurnsOver?": false,

};
const YOU = BlackJackgame["you"];
const DEALER = BlackJackgame["dealer"];
const CARD = BlackJackgame["cards"];
const HitSound = new Audio('/static/sounds/swish.m4a');
const winSound = new Audio('/static/sounds/cash.mp3');
const lossSound = new Audio('/static/sounds/aww.mp3')


Blackjackhit=()=>{
    
    if (BlackJackgame["IsStand?"]===false){
        /* Show a random card when User or Pc selects Hit button  */
    let card=RandomCard();
    showCard(card,YOU);
    updateScore(card, YOU);
    //console.log(YOU["Score"]);
    showScore(YOU)
    }    
}
RandomCard=()=>{//
    let randomIndex= Math.floor(Math.random() * 13);
   // return BlackJackgame["cards"][randomIndex];
    return CARD[randomIndex];
 }
showCard=(card, activePlayer)=>{
    if (activePlayer["Score"] <= 21 ) {
        
    let CardImg = document.createElement("img");
    CardImg.src= `/static/images/${card}.png`;
    CardImg.style.height ='120px';
    document.querySelector(activePlayer["Div"]).appendChild(CardImg);
    HitSound.play();
    }
    
}

BlackjackDeal=()=>{
    
    if (BlackJackgame["TurnsOver?"]===true){
        
        BlackJackgame["IsStand?"]= false;
        // find all images withing Your Box div
    let YourImages = document.querySelector('.Your-Bx').querySelectorAll('img');
    // find all images within Dealer Box div
    let DealerImages = document.querySelector(".Dealer-Bx").querySelectorAll("img");
    //YourImages[0].remove()// to remove each card in order of the first card [0] , one by one

    for (i=0; i< YourImages.length; i++) {// this loop removes all cards at once
        YourImages[i].remove();
    }

    for (i=0; i< DealerImages.length; i++) {// this loop removes all cards at once
        DealerImages[i].remove();
    }
    // Reset scores to zero 0
    YOU["Score"]=0;
    DEALER["Score"]=0;
    let  YourResult= document.querySelector("#Your-result");
    let DealerResult= document.querySelector("#Dealer-result");
    YourResult.textContent=0;
    YourResult.style.color="#fff";
    DealerResult.textContent=0;
    DealerResult.style.color="#fff";

    document.querySelector("#blackjack-Result").textContent='Lets Play!';
    document.querySelector("#blackjack-Result").style.color="black";
    
    BlackJackgame["TurnsOver?"]=true;
    }
    
}


/*
Get activePlayer Score
Increment score by cardsMap object using the keyds given
*/

updateScore=(card, activePlayer)=>{
    //get activeplayer score then add it by card number
    // for ACE Card [1 ,11]
    // if adding 11 keeps me under 21 then add , other wise add 1
    // BlackJackgame["cardsMap"][card][1]  = array of A 
    //activePlayer['Score'] += BlackJackgame["cardsMap"][card];
    if (card === 'A'){
        if (activePlayer["Score"] + BlackJackgame["cardsMap"][card][1] <= 21) {
          return  activePlayer["Score"] += BlackJackgame["cardsMap"][card][1];//ADD 11 from A= ACE card
        }   else{
            return activePlayer["Score"] += BlackJackgame["cardsMap"][card][0];//ADD  from A=ACE card
        }
         
    } else {
         activePlayer["Score"] += BlackJackgame["cardsMap"][card];
    };


  
}

showScore=(activePlayer)=>{
    if (activePlayer["Score"]  > 21 ){
        document.querySelector(activePlayer["Resultspan"]).textContent = 'BUST!';
        document.querySelector(activePlayer["Resultspan"]).style.color= "red";
    } else{
         document.querySelector(activePlayer["Resultspan"]).textContent = activePlayer["Score"] ;
    };
}

DealerLogic=()=>{
    BlackJackgame["IsStand?"]=true;
    let card=RandomCard();
    showCard(card,DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
   // ShowResult();
   if (DEALER["Score"] > 16){
       BlackJackgame["TurnsOver?"]= true;
    ShowResult(ComputeWinner()); 
   }
}

/* BJ-hitBtn listen for event, if someone clicks this id (BJ-hitBtn) run fucntion Blackjackhit */
document.querySelector('#BJ-hitBtn').addEventListener("click", Blackjackhit);

document.querySelector('#BJDeal-Btn').addEventListener("click", BlackjackDeal);

document.querySelector("#BJ-StandBtn").addEventListener("click", DealerLogic);


/* Compute the winner and return who won 
Lets Compute the Wins , Losses and Draws 
* And show it in the Results table
*/

ComputeWinner=()=>{
    let Winner;

    if (YOU["Score"]<=21){
        //  Condition: if your Score have a higher score than Dealer OR || the Dealer bust and you're under 21
        if(YOU["Score"] > DEALER["Score"] || DEALER["Score"] > 21 ) { 
                BlackJackgame["Wins"]++;    
                Winner= YOU;
                } else if (YOU["Score"]< DEALER["Score"]) {
                    BlackJackgame["Losses"]++;
                    Winner=DEALER;
                } else if (YOU["Score"] === DEALER["Score"]) {
                    BlackJackgame["Draws"]++;
               
                }
                // Condition: If you bust and the  dealer doesnt
                if (YOU["Score"] > 21 && DEALER["Score" <=21]) {
                    BlackJackgame["Losses"]++;
                    Winner= DEALER;
                
                // Condition: if Both you and Dealer bust/go over 21
                } else if (YOU["Score"] > 21 && DEALER["Score" > 21]) {
                    BlackJackgame["Draws"]++;
                }
               // console.log('Winner is',Winner);
        return Winner;
        
}
    
}

ShowResult =(Winner)=>{

    let message, messageColor;
    if (BlackJackgame["TurnsOver?"]===true) {
        if(Winner===YOU){
            document.querySelector("#wins").textContent=BlackJackgame["Wins"];
            message='YOU WIN!';
            messageColor='green';
            winSound.play();
        } else if (Winner===DEALER){
            document.querySelector("#losses").textContent=BlackJackgame["Losses"];
            message="You Lose";
            messageColor='red';
            lossSound.play();
        } else {
            document.querySelector("#draws").textContent=BlackJackgame["Draws"];
            message= "Its a Draw";
            messageColor="yellow";
        }
    
        document.querySelector("#blackjack-Result").textContent= message;
        document.querySelector("#blackjack-Result").style.color= messageColor;
    }
   
}