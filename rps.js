function win(user,computer){
    let winner;
    if(user==computer){
        winner="draw";
    }
    else{
        if(user=="rock"){
            if(computer=="paper"){
                winner="computer";
            }
            else{
                winner="user"
            }
        }
        else if(user=="paper"){
            if(computer=="scissor"){
                winner="computer";
            }
            else{
                winner="user"
            }
        }
        else if(user=="scissor"){
            if(computer=="rock"){
                winner="computer";
            }
            else{
                winner="user"
            }
        }
    }
    return winner;
}
let wins=0;
let loss=0;
let draw=0;
let btns=document.querySelectorAll(".user button");
let cbtns=document.querySelectorAll(".computer button");
let show=document.querySelector(".show");
let result=document.querySelector(".result");
for(let btn of btns){
    btn.addEventListener('click',start);
}
show.classList.add("showlg");
function start(){
    for(cbtn of cbtns){
            cbtn.style.boxShadow="";
    }
    let randbtn=["rock","paper","scissor"];
    let randIdx=Math.floor(Math.random()*3);
    let computer=randbtn[randIdx];
    let user=this.className;
    console.log(user);
    console.log(computer);
    let winner=win(user,computer);
    for(cbtn of cbtns){
        if(computer==cbtn.className){
            cbtn.style.boxShadow="5px 5px 10px green";
        }
    }
    // console.log(winner);
    show.classList.remove("showlg");
    if(winner=="user"){
        show.innerText="hurray You won";
        wins++;
        show.style.backgroundColor="green";
    }
    else if(winner=="computer"){
        show.innerText="You Lose try again";
        loss++;
        show.style.backgroundColor="red";
    }
    else{
        show.innerText="Draw";
        draw++;
        show.style.backgroundColor="gray";
    }
    result.innerText=`win:${wins} loss:${loss} draw:${draw}`;
}
