window.addEventListener('keydown', (e) => {
    document.getElementById('key').style.display = 'inline-flex';
    document.getElementById('keyCode').style.display = 'inline-flex';
    document.getElementById('keyValue').style.display = 'inline-flex';
    
    
    
    document.getElementById('key').innerHTML = (e.key === " " ? "Space":e.key);
    document.getElementById('keyCode').innerHTML = e.keyCode;
    document.getElementById('keyValue').innerHTML = e.code;
   
    console.log(e);
});