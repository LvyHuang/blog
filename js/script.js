var index=0,
    banner=document.getElementById("banner"),
    timer=null,
    list=banner.getElementsByTagName("img"),
    size=list.length;



function changeImg(){
    for(var i=0; i<size; i++){
        list[i].style.display="none";
    }
    list[index].style.display="block";
}
function startAutoPlay(){
    timer=setInterval(function(){
        index++;
        if(index>=size) index=0;
        changeImg();
    },4000)
}
startAutoPlay();

//注册登录部分
var btn=document.getElementById("btn");
btn.addEventListener('click',function () {
     var username = document.getElementById("username").value;
     var password = document.getElementById("password").value;
     if(!username && password){
         alert("用户名为空，请输入用户名！");
     }else if(!password && username){
         alert("密码为空，请输入密码！");
     }else if(!username && !password){
         alert("请输入用户名和密码！");
     }else{
         window.location.href = "index.html";
     }
});
