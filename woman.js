import Human from './OOP-challenge';


/**
 * @class Woman
 * @description creates a new woman instance and extends the Human class 
 */
class Woman extends Human {
    /**
     * 
     * @param {String} name 
     * @param {Number} age 
     * @param {String} race
     * @param {String} relationshipStatus
     * @param {String} gender
     */
    constructor(name, age, race, relationshipStatus, gender){
      super(name, age, race, relationshipStatus);
      this.gender = gender;
    }
    
    
    /**
     * Returns Woman's information
     */
    showWomanData() {
      return `Name: ${this.name}
        \nAge: ${this.age}
        \nRace: ${this.race}
        \nRelationship Status: ${this.relationshipStatus}
        \nGender: ${this.gender}`;
    }
    
    /**
     * Gets a lady married
     */
    marryNow(){
      if (this.gender == 'female'){
        if(this.relationshipStatus == 'single'){
          return `${this.name} is getting married`; 
        }
        else if (this.relationshipStatus == 'married'){
          return `${this.name}, please stick to your hubbie`;
        }
      }
    }
}


export default Woman;