
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
    // let felix = new Man ('felix', 24, 'african', 'married', 'male');
    // console.log(felix.marryNow());
    // console.log(felix.getName());

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


export default {Human, Man, Woman};

