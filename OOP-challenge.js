
 /**
  * @class Human
  */
 class Human {
    /**
     * initializes the class props
     * @param {String} name 
     * @param {Number} age 
     * @param {String} race
     * @param {String} relationshipStatus
     */
    constructor(name, age, race, relationshipStatus) { 
        this.name = name;
        this.age = age;
        this.race = race;
        this.relationshipStatus = relationshipStatus;
        
    }
    
    /**
     * returns gender 
     * @return {String} gender 
     */
    getGender() {
       return this.gender; 
    }
    
    getRelationshipStatus(){
      return this.relationshipStatus;
    }
    
    getName (){
      return this.name;
    }
}



export default Human;

