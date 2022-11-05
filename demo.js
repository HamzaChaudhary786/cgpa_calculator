const call=()=>{
    let grade="";
    let wd= document.getElementById('wd').value;
    let mth= document.getElementById('mth').value;
    let phy= document.getElementById('phy').value;
    let comp= document.getElementById('comp').value;
    let ans=parseFloat(wd) + parseFloat(mth) + parseFloat(phy) + parseFloat(comp);
    alert(ans);
    let perc = (ans/400)*100;
    alert(perc);

    if(perc<=100 && perc>=80)
    {
        grade='A';
        alert(grade);
    }
    else if(perc<80 && perc>=60)
    {
        grade='B';
        alert(grade);
    }
    else if(perc<60 && perc>=50)
    {
        grade='C';
        alert(grade);
    }
    else
    {
        alert("you are fail")
    }

    document.getElementById('showData').innerHTML=`Out Of 400 Your's Total is ${ans} and Percentage is ${perc}%. <br> Your Grade is ${grade}.  `
   
}