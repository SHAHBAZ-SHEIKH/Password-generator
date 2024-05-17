function passwordGenerate(){
    var password = document.getElementById("password").value
    var headDiv = document.getElementById("headDiv")
    var str = "@#$%^&()765$#^21ASDTHJ#&%*GHNasbg$#@!*&()134asf*&%"
    var randomPassword =''
    var message = "Password Should be less than 13"
    var flag = true
    for(var i=0; i<=password -1; i++){
        var randomIndex = Math.floor(Math.random() * str.length)
        randomPassword +=str[randomIndex]
        if(password >12){
            headDiv.innerHTML=`<h2>${message}</h2>`
            flag=false

        }
    }
    if(flag===true){
        headDiv.innerHTML =`<h2>${randomPassword}</h2>`

    }
    

}
 
