setTimeout(function(){
    if(localStorage.getItem('newUser') == 'false'){
 
        document.getElementById('orderNumber').innerHTML = localStorage.getItem('orderNumber');
    }else{
        localStorage.setItem('newUser', 'false');
       localStorage.setItem('orderNumber', Math.floor(100000 + Math.random() * 900000));
       document.getElementById('orderNumber').innerHTML = localStorage.getItem('orderNumber');
    }
} ,3000)
