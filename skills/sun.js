odule.exports = function (controller) {

    controller.hears([/^hello khajornsak$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
        
        });
    });
};
