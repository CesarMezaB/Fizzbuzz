class ExplorerService{

    static filterByMission(explorers,mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersAmountOfMisssion = ExplorerService.filterByMission(explorers, mission);
        return explorersAmountOfMisssion.length;
        
    }
    static getExplorersUsernamesByMission(explorers, mission){

    }
}

module.exports = ExplorerService;