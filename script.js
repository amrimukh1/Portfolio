const greetingElement= document.getElementById('greeting');
const currenthour = new Date().getHours();
//8AM-8
//2:14

let greetingMessage;
if(currenthour<12){
 
greetingMessage = 'Good Morning !!' ;


}
else if(currenthour<18 && currenthour>12){
    greetingMessage = 'Good Afternoon !!'

}else{

greetingMessage = 'Good Evening !!';

}

greetingElement.textContent = greetingMessage;


    function scrollToTop()
      {
        window.scrollTo({
        top:0,
        behaviour:'smooth',
      })
    }
       //Greeting Message */