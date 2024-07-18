let btnEl=document.getElementById("btn")
let emojiNameEl=document.getElementById('emoji-name')
let emoji=[];
async function getEmoji(){
    let response=await fetch("https://emoji-api.com/emojis?access_key=2f32dbdbad00bcd656adaf8ed37217ec955b110b")
    let data=await response.json()
    console.log(data)
    for(let i=0;i<1860;i++){
        emoji.push({
            emojiName:data[i].character,
            emojiCode:data[i].unicodeName,
        })
    }
}
getEmoji()
btnEl.addEventListener("click",()=>{
    let randomNum= Math.floor(Math.random()*emoji.length)
    btnEl.innerText=emoji[randomNum].emojiName
    emojiNameEl.innerText=emoji[randomNum].emojiCode
})