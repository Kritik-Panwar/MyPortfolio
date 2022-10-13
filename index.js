a = document.getElementById('lines');

myfunc=()=>{
    a.classList.toggle("newline");
}


mystylefunc = ()=>{
mystyle =  document.getElementById('badge');
mystyle.style.opacity = "1";

setTimeout(() => {
mystyle.style.opacity = "0";

    
}, 6000);
}
mystylefunc();
