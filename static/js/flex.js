var html = document.getElementsByTagName('html')[0];
if(html){
    var w = window.innerWidth;
    var fontSize = (w>1200?1200:w)/1200 * 100;
    html.style.fontSize = fontSize + 'px';
}
window.onload = function(){
    window.onresize = function(){
        var w = window.innerWidth;
        var fontSize = (w>1200?1200:w)/1200 * 100;
        html.style.fontSize = fontSize + 'px';
    }
}