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

    test("Requerimiento 3", () => {
        const explorer5 = {name: "Explorer5", score: 5}
        const explorerFizz = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorerFizz).toMatchObject({name: "Explorer5", score: 5, trick: "BUZZ"});
    });

    test("Requerimiento 4", () => {
        const explorer15 = {name: "Explorer1", score: 15};
        const explorerFizz = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorerFizz).toMatchObject({name: "Explorer1", score: 15, trick: "FIZZBUZZ"});
    });

});