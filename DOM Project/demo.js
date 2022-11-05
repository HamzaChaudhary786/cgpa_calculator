const labelinputfield=document.querySelector('#labelvalue')
const form=document.querySelector('#form')
const inputtype=document.querySelector('#inputtype')
labelinputfield.addEventListener('keyup',(event)=>{
    const keypress=event.key
    console.log(keypress)
    if(keypress==="enter")
    {
        const type =labelinputfield.value
        console.log(type);
    }

})
