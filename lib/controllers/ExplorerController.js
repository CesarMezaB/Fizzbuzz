const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorerMission = ExplorerService.filterByMission(explorers,mission);
        return explorerMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorerUserNames = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return explorerUserNames;

    }
    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const amountOfExplorer = ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return amountOfExplorer;
    }

    static getFizzbuzzNumber(number){
        const value = FizzbuzzService.applyValidationInNumber(number);
        return value;
    }
    static getListTelegram () {
        // replace the value below with the Telegram token you receive from @BotFather
        const token = process.env.TOKEN;

        // Create a bot that uses 'polling' to fetch new updates
        const bot = new TelegramBot(token, {polling: true});

        // Matches "/echo [whatever]"
        bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message

            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"

            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);
        });

        // Listen for any kind of message. There are different kinds of
        // messages.
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const message = parseInt(msg.text) || msg.text.toLowerCase().trim();

            if(typeof(message) === "number"){
                const fizzbuzzTrick = ExplorerController.getFizzbuzzNumber(message);
                const responseBot = `Tu número es: ${message}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } else if((typeof(message) === "string")){
                if(message === "node" || message === "java"){
                    const explorers = ExplorerController.getExplorersByMission(message);
                    let listExplorer = explorers.map(explorer =>{ 
                        return ` 
                Nombre de explorador: ${explorer.name}
                Mision: ${explorer.mission} 
                 `;
                    });
                    const responseBot = `Mision que se esta consultando: ${message}. 
                                    Explorers: ${listExplorer}`;
           
                    bot.sendMessage(chatId, responseBot );
                }else{
                    bot.sendMessage(chatId, "Envía un número válido o una mision");
                }   
            }
        });


    }
}


module.exports = ExplorerController;