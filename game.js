p1=document.querySelector('#p1')
const game=(name,type,weapon)=>{
    let health=20
    let ehealth=20
    const damage=()=>{
        let comment=document.querySelector('#commentary')
        let ran=Math.floor(Math.random()*10)
        console.log(ran)
        if(ran===3||ran===4||ran===5||ran===6){
            ehealth--
            document.getElementById('-4').textContent=`Health:${ehealth}`
            if(ehealth===0){
                alert("YOU WON,congrats you defied defying the odds")
            }
            comment.textContent="Nice hit"
        }
        else if(ran===7 || ran===8){
            health--
            document.getElementById('3').textContent=`Health:${health}`
            if(health===0){
                alert("YOU DIED...RELOAD PAGE")
            }
            comment.textContent="You got hit"
        }
        else{
            comment.textContent="You missed"
        }
    }
    const display=()=>{
        for(let i=0;i<4;i++){
            let text=document.createElement('div')
            let text2=document.createElement('div')
            text.setAttribute('id',i)
            text2.setAttribute('id',-i-1)
            p1.appendChild(text)
            p2.appendChild(text2)
        }
        document.getElementById('0').textContent=`Name:${name}`
        document.getElementById('1').textContent=`Type:${type}`
        document.getElementById('2').textContent=`Weapon:${weapon}`
        document.getElementById('3').textContent=`Health:${health}`
        document.getElementById('-1').textContent=`Name:Alidi`
        document.getElementById('-2').textContent=`Type:Slugger`
        document.getElementById('-3').textContent=`Weapon:He's got Heart`
        document.getElementById('-4').textContent=`Health:${ehealth}`
    }
    return {display,damage};
}
let p=game("Son of Anti","Irkli","Himself")
p.display()
const attack=document.querySelector('#attack')
attack.addEventListener('click',()=>{
    p.damage()
})