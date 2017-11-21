import Human from './OOP-challenge';


 /**
  * @class Man
  * @description creates a new Man instance and extends Human class
  */
class Man extends Human {

    /**
     * 
     * @param {String} name 
     * @param {Number} age 
     * @param {String} race
     * @param {String} relationshipStatus
     * @param {String} gender
     */
    constructor(name, age, race, relationshipStatus, gender) {
        super(name, age, race, relationshipStatus);
        this.gender = gender;
    }
    
    /**
     * Returns Man information
     */
    showManData() {
      return `Name: ${this.name}\nAge: ${this.age}
        \nRace: ${this.race}
        \nRelationship Status: ${this.relationshipStatus}
        \nGender: ${this.gender}`;
    }
    
     /**
     * Gets a guy married
     */
    marryNow(single, male){
      if (this.gender == 'male'){
        if(this.relationshipStatus == 'single'){
          return `${this.name} is getting married`; 
        }
        else if (this.relationshipStatus == 'married'){
          return`${this.name}, please stick to your wife`;
        }
      }
    }
}


export default Man;