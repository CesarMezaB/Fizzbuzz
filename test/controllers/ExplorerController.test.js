const ExplorerController = require("../../lib/controllers/ExplorerController")
describe("Test para ExplorerService", () =>{ 
   
    
    test("Requerimiento 1: Regresando lista de explorers", () => {
        const explorerByMission = ExplorerController.getExplorersByMission("node");
        expect(explorerByMission[0].name).toBe("Woopa1");  
    });

    test("Requerimiento 2: Regresa la lista de usernames de los explorers filtrados por la misión enviada", () => {
        const explorerByMission = ExplorerController.getExplorersByMission("node");
        expect(explorerByMission[1].githubUsername).toBe("ajolonauta2");  
    });
    test("Requerimiento 3: cantidad de explorers que están en node", () => {
        const explorersInMission = ExplorerController.getExplorersAmonutByMission("node")
        expect(explorersInMission).toBe(10);
    });
    
});
