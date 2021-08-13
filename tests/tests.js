
const matching = require('../code/MatchingBrackets');
const assert = require('assert');



describe("Matching Brackets", () =>{
    it("Matching should equal true", ()=>{
        let test1 = matching.isMatching("[()]{}{[()()]()}");
        assert.equal(test1, true);
    });

    it("Matching should equal true", ()=>{
        let test2 = matching.isMatching("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]");
        assert.equal(test2, true);
    });

    it("Matching should equal false", ()=>{
        let test2 = matching.isMatching("({(()))}}");
        assert.equal(test2, false);
    });

    it("Matching should equal true", ()=>{
        let test3 = matching.isMatching("");
        assert.equal(test3, true);
    });

    it('Matching Brakets in Text should equal true', () =>{
        let test4 = matching.isMatching("{Do I have Matching Brackets?}")
        assert.equal(test4, true);
    });

    it('Matching Brakets in Text should equal false', () =>{
        let test4 = matching.isMatching("{Do I have Matching Brackets?")
        assert.equal(test4, false);
    });
});


