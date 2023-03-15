
var send_button = document.getElementById('submit');

function testTop(){
    


var name = document.getElementById('name');

var email = document.getElementById('email');





if(name.value === "") {

  name.style.borderBottom = "#e75f5f 1px solid";


  return false;


}else if (email.value === "") {


  email.style.borderBottom = "#e75f5f 1px solid";

  return false;

}else {

sendTop();

}

}

function sendTop() {
    $('#signup-top').on('submit',function (e) {

              $.ajax({
                type: 'post',
                url: './send.php',
                data: $('#signup-top').serialize(),
                success: function () {
                  $('.thank-you-message-top').css('display', 'flex');
                }
              });
          e.preventDefault();
    });
};

send_button.onclick = testTop;




