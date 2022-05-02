const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");

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
}


module.exports = ExplorerController;