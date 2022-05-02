const ExplorerController = require("../../lib/controllers/ExplorerController")
describe("Test para ExplorerService", () =>{ 
   
    
    test("Requerimiento 1: Calcular todos los explorer en una mision", () => {
        //const explorers = [{mission : "node"}];
        const explorerByMission = ExplorerController.getExplorersByMission("node");
        expect(explorerByMission[0].name).toBe("Woopa1");  
    });
    
});
