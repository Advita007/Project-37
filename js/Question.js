class Question{
    constructor(){
    this.input1 = createInput("Enter your name here");
    this.input2 = createInput("Enter your choice here");
    this.title = createElement("h1");
    this.question = createElement("h2");
    this.option1 = createElement("h2");
    this.option2 = createElement("h2");
    this.option3 = createElement("h2");
    this.option4 = createElement("h2");
    this.button = createButton("Submit");

    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(400,0);
       
        this.button.position(700,300);

        this.question.html("Question :- What starts and ends with the letter 'E', but has only one letter?");
        this.question.position(150,80);

        this.option1.html("1: Everyone");
        this.option1.position(150,120);

        this.option2.html("2: Envelope");
        this.option2.position(150,150);

        this.option3.html("3: Estimate");
        this.option3.position(150,180);

        this.option4.html("4: Example");
        this.option4.position(150,210);

        this.input1.position(150,300);
        this.input2.position(525,300);

        this.button.mousePressed(()=>{
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            this.title.hide();

            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount += 1;
            contestant.index = contestantCount
            contestant.update();
            contestant.updateCount(contestantCount);

        });
        

    }
}

      
