class Form {

    constructor(){

     this.input_name=createInput("Enter your name");
     this.input_target=createInput("Enter your target to reduce weight");
     this.button=createButton("Start you journey")
     this.heading=createElement("h1")


    }
    
    display(){
       this.heading.html("Welcome to Healthy Run ");
       this.heading.position(width/2,50);
       this.input_name.position(width/2,150);
       this.input_target.position(width/2,220);
       this.button.position(500,300);
         
       this.button.mousePressed(() => {
           gameState=1;
           targetWeight=this.input_target.value()
           this.input_name.hide();
           this.input_target.hide();
           this.button.hide();
           this.heading.hide();
       })
    }

}
