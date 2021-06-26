const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myname;
let new_head;
let button=document.querySelector('button')
new_head=document.querySelector('#head')

function setuser(){
    myname=prompt('Enter your name')
    localStorage.setItem('name',myname)
    new_head.textContent='Welocme '+ myname

}
if(!localStorage.getItem('name'))
{
    setuser()
}
else
{
let storedname= localStorage.getItem('name')
new_head.textContent='Welcome '+storedname
}
button.onclick= function (){
    setuser()
}