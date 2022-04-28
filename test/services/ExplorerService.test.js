const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");

describe("Test para ExplorerService", () =>{ 
  const explorers= Reader.readJsonFile("./explorers.json")
  test('Requerimiento 1: Calcular todos los explorer en una mision', () => {
      //const explorers = [{mission : "node"}];
      const explorersInNode = ExplorerService.filterByMission(explorers, "node")
      expect(explorersInNode.length).toBe(10);
})

test('Requerimiento 1: Calcular todos los explorer en una mision', () => {
  //const explorers = [{mission : "node"}];
  const explorersInNode = ExplorerService.filterByMission(explorers, "node")
  expect(explorersInNode.length).toBe(10);
})
});