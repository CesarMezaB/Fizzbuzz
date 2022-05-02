const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorerMission = ExplorerService.filterByMission(explorers,mission);
        return explorerMission;
    }
}


module.exports = ExplorerController;