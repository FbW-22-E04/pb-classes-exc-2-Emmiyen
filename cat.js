class Cat {
    constructor(tiredness, hunger, lonliness, happiness) {
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.lonliness = lonliness;
    this.happiness = happiness;
    }
    
    feed () {
    if(this.hunger > 0 && this.hunger <= 10){
        this.hunger -- 
        console.log(`The cat needs food now the value is ${this.hunger} `);
    }else if (this.hunger === 0){
        console.log(`Im full!`);
    }
    }
    
    sleep () {
    if(this.tiredness > 0 && this.tiredness <= 10){
this.tiredness -=3
console.log(`I slept now, play with me !`);
    }else if(this.tiredness ==0 ){
        console.log(`im sleepy`);
    }
    }
    
    pet () {

        if(this.happiness > 0 && this.happiness <= 10){
            this.happiness -=3
            console.log(`I want to play!`);

                }
                else if(this.happiness == 0 ){
                    console.log(`Dont touch me`);
                }
                }
    
    }
    
    play () {
    
    }
    
    }
    // 1 is lowest
    // 10 is highest
    
    const brunno = new Cat(5, 7, 4, 6);
    
    console.log(brunno); 
    brunno.feed()
    brunno.feed()
    
    