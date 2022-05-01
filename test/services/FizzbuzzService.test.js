const FizzbuzzService = require("../../lib/services/FizzbuzzService");
describe("Test para FizzbuzzService", () =>{ 
    test("Requerimiento 1", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorerFizz = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorerFizz).toMatchObject({name: "Explorer1", score: 1, trick: 1});
    });


    test("Requerimiento 2", () => {
        const explorer3 = {name: "Explorer3", score: 3}
        const explorerFizz = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorerFizz).toMatchObject({name: "Explorer3", score: 3, trick: "FIZZ"});
    });

});