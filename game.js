let zek=document.querySelector('#text')
const game=(name,type,weapon)=>{
    let health=20
    const damage=()=>{
        if(Math.floor(Math.random())>0.5){
            health--
            if(health===0){
                alert("YOU DIED...RELOAD PAGE")
            }
        }
    }
    const display=()=>{
        zek.textContent=`Name:${name} \n Type:${type} \n Weapon:${weapon} \n Health:${health}`
    }
    return {display,damage};
}
let p=game("anasito","ogre","mi cerebro")
p.display()
const attack=document.querySelector('#attack')
attack.addEventListener('click',()=>{
    p.damage()
    p.display()
})