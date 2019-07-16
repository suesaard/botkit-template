module.exports = function (controller) {

    controller.hears([/^Hi$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            var question = "Please select menu.:";
            question += "<br/> `1)` **Math Question**";
            question += "<br/> `2)` **Cisco WebEX Question**";
            question += "<br/> `3)` **INFO**";
            question += "\n\nWhat do you want to do ?<br/>_(type a number, a **bold keyword** or `cancel`)_";
            convo.ask(question, [
            {
                    pattern: "1|community|communities",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_1');
                    },
                }
                , {
                    pattern: "2|lab|track|learn",
                    callback: function (response, convo) {                     
                        convo.next();
                    },
                }
                , {
                    pattern: "3|event|express",
                    callback: function (response, convo) {
                     convo.say("Mr.Khajornsak Sua-sa-ard<br/>_Date7/16/2019_");                                                 
                        convo.next();
                    },
                }
                , {
                    pattern: "cancel|stop",
                    callback: function (response, convo) {
                        convo.say("Got it, cancelling...");
                        convo.next();
                    },
                }
                , {
                    default: true,
                    callback: function (response, convo) {
                        convo.gotoThread('bad_response');
                    }
                }
            ]);
            
            
            
           
            
            convo.addMessage("Let's start", "quiz");
            var challenge = pickChallenge();
            convo.addQuestion("Question: " + challenge.question, [
                {
                    pattern: "^"+ challenge.answer + "$",
                    callback: function (response, convo) {
                        convo.gotoThread('success');                      
                    },
                }
                , {
                    pattern: "cancel|stop|exit",
                    callback: function (response, convo) {
                        convo.gotoThread('cancel');                 
                    },
                }
                , {
                    default: true,
                    callback: function (response, convo) {
                        convo.say("Sorry, wrong answer. Try again!");
                        convo.repeat();
                        convo.next();
                    }
                }
            ], {}, 'menu_1');
            
            
            convo.addMessage({
                text: "Congrats, you did it!",
                action: 'default'
            }, 'success');
            
              convo.addMessage({
                text: "Congrats, you did it!",
                action: 'default'
            }, 'success1');
           

            
            convo.addMessage({
                text: "Time elapsed! you missed it, sorry.",
                action: 'default'
            }, 'missed');
            
            
            
            convo.addMessage({
                 text:"Pass",
                action: 'default'
            }, 'menu_2');
            
          convo.ask("What is the Maximum Resolution", [
                {
                    pattern: "1080|1080p",
                    callback: function (response, convo) {
                    convo.gotoThread('success1'); 
                    convo.next();
                    },
                }
                , {
                    pattern: "cancel|stop|exit",
                    callback: function (response, convo) {
                        convo.say("Got it, cancelling...");
                        convo.next();
                    },
                }
                , {
                    default: true,
                    callback: function (response, convo) {
                        convo.say("Sorry, you missed it. Try again!");
                        convo.repeat();
                        convo.next();
                    }
                }
            ]);
            
            
    function pickChallenge() {
    var a = Math.round(Math.random()*5) + 4;
    var b = Math.round(Math.random()*5) + 4;
    return {
        question : "" + a + " x " + b + " =",
        answer : "" + (a * b)
    }
}

            // Bad response
            convo.addMessage({
                text: "Sorry, I did not understand.",
                action: 'default',
            }, 'bad_response');
        
        });
    });
};
