const date=new Date();

const showcal=()=>{
date.setDate(1);
console.log(date)
const month=document.querySelector(".days");

const last=new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

const prevlast=new Date(date.getFullYear(),date.getMonth(),0).getDate();
console.log(prevlast)

const firstdayindex=date.getDay();

const lastdayindex=new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
console.log(lastdayindex);

const nextD=7-lastdayindex-1;
const month_list=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.querySelector(".date h1").innerHTML=month_list[date.getMonth()];
document.querySelector(".date p").innerHTML=new Date().toDateString();

let days="";

for(let i=(prevlast-firstdayindex+1);i<=prevlast;i++)
{
    days+=`<div class="prev-date">${i}</div>`;
}
for(let i=1;i<=last;i++)
{
    if(i===new Date().getDate() && date.getMonth()===new Date().getMonth())
    {
        days+=`<div class="today">${i}</div>`;
    }
    else{
        days+=`<div>${i}</div>`;
    }
}
for(let i=1;i<=nextD;i++)
{
    days+=`<div class="next-date">${i}</div>`;
}
month.innerHTML=days;
};

document.querySelector(".prev").addEventListener("click",()=>{
    date.setMonth(date.getMonth()-1);
    showcal();
});
document.querySelector(".next").addEventListener("click",()=>{
    date.setMonth(date.getMonth()+1);
    showcal();
});

showcal();