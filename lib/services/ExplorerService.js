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
        const explorersInNodeToGetUsernames = ExplorerService.filterByMission(explorers, mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
}

module.exports = ExplorerService;

