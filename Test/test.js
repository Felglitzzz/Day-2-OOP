import chai, {expect} from "chai";
//import {Human, Man, Woman} from "../OOP-challenge.js";
import Human from "../OOP-challenge";
import Woman from "../OOP-challenge";
import Man from "../OOP-challenge";



describe('Human', function(){
    it('Should initialize human with the right name', function(){
        let human = new Human('amande');
        expect(human.name).to.equal('amande');
    });

    it('Should initialize man with the right age', function(){
        let man = new Man ('felix', 24, 'african', 'married', 'male');
        expect(man.name).to.equal('felix');
    });    

    it('Should initialize man with the right age', function(){
        let man = new Man ('felix', 24, 'african', 'married', 'male');
        expect(man.age).to.equal(24);
    });

    it('Should initialize man with the right race', function(){
        let man = new Man ('felix', 24, 'african', 'married', 'male');
        expect(man.race).to.equal('african');
    });

    it('Should initialize man with the right status', function(){
        let man = new Man ('felix', 24, 'african', 'married', 'male');
        expect(man.relationshipStatus).to.equal('married');
    });

    it('Should initialize woman with the right age', function(){
        let woman = new Woman ('felicia', 29, 'caucasian', 'single', 'female');
        expect(woman.age).to.equal(29);
    });

    it('Should initialize woman with the right race', function(){
        let woman = new Woman ('felicia', 29, 'caucasian', 'single', 'female');
        expect(woman.race).to.equal('caucasian');
    });

    it('Should initialize woman with the right name', function(){
        let woman = new Woman ('felicia', 29, 'caucasian', 'single', 'female');
        expect(woman.name).to.equal('felicia');
    });

    it('Should initialize woman with the right status', function(){
        let woman = new Woman ('felicia', 29, 'caucasian', 'single', 'female');
        expect(woman.relationshipStatus).to.equal('single');
    });

});