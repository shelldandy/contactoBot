// Talk to botFather for your tg api
var tgAPI =   "124366207:AAGoUkin2w_kV_w-_JHmLdBuny8otC8whRU";
// To get your chat id talk to your bot on telegram then paste this on your browser

// https://api.telegram.org/bot<tgAPI>/getUpdates?offset=0

// it will return a JSON object find the one that has you in there and the get the id value from there
var chat_id =    "1297633";

// ID Mike 1297633
// ID Juan Pablo 49971304
// ID George 24968191
// ID Belleza 10699935
// ID Alan 50311106
// ID Luis 117934977
// ID Mamá 12899382

// The first part of the Telegram Bot url
var reqBase = "https://api.telegram.org/bot";



// The result we are trying to achieve is
// https://api.telegram.org/bot<tgAPI>/sendMessage?chat_id=chat_id&text=encodedMessage
// Ex. https://api.telegram.org/bot124366207:AAGoUkin2w_kV_w-_JHmLdBuny8otC8whRU/sendMessage?chat_id=1297633&text=Amigo+mu

var url = reqBase + tgAPI + "/sendMessage?chat_id=" + chat_id;

$(".contactoBot").submit(function(event) {
    var msg = $(".contactoBot__input").serialize();
    event.preventDefault();
    // $.ajax({
    //   url: url,
    //   type: 'GET',
    //   data: {text: msg},
    //   dataType: "json",
    //   crossDomain : true,
    //   success : function (data) {
    //     console.log(data);
    //   }
    // });
    $.getJSON(url, msg, function(data) {
      console.log(data.ok);
    });
    $(".contactoBot").fadeOut();
    var successMsg = "<h2>Gracias!</h2>" ;
    $("#response").html(successMsg);
    //$(".contactoBot__input").val("").focus();
});
