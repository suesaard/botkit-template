odule.exports = function (controller) {

    controller.hears([/^hello khajornsak$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            var question = "Please select menu.:";
            question += "<br/> `1)` join a Community Of Interest (**communities**)";
            question += "<br/> `2)` take a Learning Lab (**labs**)";
            question += "<br/> `3)` check Upcoming Events (**events**)";
            question += "\n\nWhat do you want to do ?<br/>_(type a number, a **bold keyword** or `cancel`)_";
            convo.ask(question, [
            ]
        
        });
    });
};
