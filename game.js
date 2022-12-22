const buttonColours = ["red", "blue", "green", "yellow"]
const userClickedPattern = [];
const computer_pattern = [];
var level = 0;
var index = 0;
var started = 0;
function animate_press(currentcolour)
{
    
    $('#'+currentcolour).addClass("pressed");
    setTimeout(function(){
        $('#'+currentcolour).removeClass("pressed");
    },100);
}

  
document.addEventListener("keypress",function()
{
    if(event.key === 'a')
    {
        if(started === 0)
        {
            started = 1;
            nextSequence(); 
        }
        
    }
   
})

function nextSequence()
{
    let x = Math.floor( Math.random()*4);
    var randomChosenColour = buttonColours[x];
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    computer_pattern.push(randomChosenColour);
    playsound(randomChosenColour);

    level++;
    document.getElementById("level-title").innerHTML = 'LEVEL' +level;
    index = 0;
    
}


document.getElementById('green').addEventListener("click",function ()
{
    userClickedPattern.push('green');
    playsound('green');
    animate_press('green');
    game('green');
} );
document.getElementById('blue').addEventListener("click",function ()
{
    userClickedPattern.push('blue');
    playsound('blue');
    animate_press('blue');
    game('blue');
} );
document.getElementById('red').addEventListener("click",function ()
{
    userClickedPattern.push('red');
    playsound('red');
    animate_press('red');
    game('red');
} );
document.getElementById('yellow').addEventListener("click",function ()
{
    userClickedPattern.push('yellow');
    
    playsound('yellow');
    animate_press('yellow');
    game('yellow');
} );

function game(currentlevel)
{
    if(currentlevel !== computer_pattern[index])
    {
        document.getElementById("level-title").innerHTML = 'Game Over, Press A to Restart';
        document.body.classList.add('game-over');
        playsound('wrong')
        startover();
        setTimeout(function () {
            rem();
        }, 200);

    }else{
        index++;
        if(index === computer_pattern.length)
        {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
}
function rem()
{
    
    document.body.classList.remove('game-over');
}
function playsound(x)
{
    var audio = new Audio(x+'.mp3');
    audio.play();
}
function startover()
{
    level = 0;
    index = 0;
    started = 0;
    computer_pattern.splice(0,computer_pattern.length);
    userClickedPattern.splice(0,userClickedPattern.length);
}
