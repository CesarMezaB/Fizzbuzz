const ExplorerService = require("../../lib/services/ExplorerService");


describe("Test para ExplorerService", () =>{   
  test('Requerimiento 1: Calcular todos los explorer en una mision', () => {
      const explorers = [{mission : "node"}];
      const explorersInNode = ExplorerService.filterByMission(explorers, "node")
      expect(explorersInNode.length).toBe(1);
})

});