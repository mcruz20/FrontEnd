new Vue({
    el: '#app',
    data:{
        nome:'matrix',
        monstro:'godzilla',
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        round:0,
        plwin:0,
        cpuwin:0,
        turns: [],
        toggle: false
    },
    methods:{
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns=[];
            this.round+=1;
            document.getElementById("hide").style.display = "none";
            
            


               
        },

        restart: function(){
           this.gameIsRunning = true; 
           document.getElementById("hide").style.display = "none";
           this.playerHealth = 100;
           this.monsterHealth = 100;
           this.round=0;
           this.plwin=0;
           this.cpuwin=0;
        },

        attack: function(){
            var punch= new Audio();
            punch.src="punch.mp3";
            punch.play();
                document.getElementById("hide").style.display = "block";
           
                var damage = this.calculateDamage(3, 10,"monster");
                this.turns.unshift({
                    isPlayer: true,
                    text: this.nome  + " hits "+ this.monstro +" for " + damage+" HP"
                    
                });

                var damage=this.calculateDamage(5,15,"player");
                this.turns.unshift({
                    isPlayer: false,
                    text: this.monstro + " hits "+ this.nome +" for " + damage+" HP"
                });
                if(this.monsterHealth<=0){
                    punch.pause();
                    this.checkstatus("monster");
                }
                else if(this.playerHealth<=0){
                    punch.pause();
                    this.checkstatus("player");
                }

                
                },
            
            
            calculateDamage: function(min,max,whom){

            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            if (whom=="monster"){
                this.monsterHealth -=damage;
                return damage;
            }
            else if(whom=="player"){
                this.playerHealth -=damage;
                return damage;
            }
        },

        checkstatus: function(who){
            var ko = new Audio();
            ko.src="./KO.mp3";
            ko.play();  
            if (who=="monster"){
                
                alert(this.nome + ' Won!');  
                this.playerHealth=100;
                this.monsterHealth=100;
                this.plwin+=1;
                this.round+=1;
                this.gameIsRunning = true;
                document.getElementById("hide").style.display = "none";

            }
            else if(who=="player"){

                

                alert(this.monstro + ' Won!');
                ko.play();
                this.playerHealth=100;
                this.monsterHealth=100;
                this.cpuwin+=1;
                this.round+=1;
                this.gameIsRunning = true;
                document.getElementById("hide").style.display = "none";
            }
            else if(who=='gave'){
                alert(this.nome + " gave Up!")
                this.playerHealth=0;
                document.getElementById("hide").style.display = "none";
                this.cpuwin=0;
                this.plwins=0;
                this.round=0;
                this.gameIsRunning = false;
            }
                
                
                this.turns=[];
                return;
            
        },
        specialAttack: function(){
            var sp= new Audio();
            sp.src="sp.mp3";
            sp.play();
            


            document.getElementById("hide").style.display = "block";
            var damage=this.calculateDamage(20,35,"monster");
                this.turns.unshift({
                    isPlayer: true,
                    text: this.nome + ' GAVE HIS ULTIMATE SKILL!!!! Hitting '+ this.monstro +' for ' + damage +" HP"
                });
    
                var damage=this.calculateDamage(5,15,"player");
                this.turns.unshift({
                    isPlayer: false,
                    text: this.monstro + ' hits '+ this.nome + ' for ' + damage+" HP"
                });

                if(this.monsterHealth<=0){
                    sp.pause();
                    this.checkstatus("monster");
                }
                else if(this.playerHealth<=0){
                    sp.pause();
                    this.checkstatus("player");
                }
            },
        heal: function(){
            var heal= new Audio();
            heal.src="heal.wav";
            heal.play();
            document.getElementById("hide").style.display = "block";
                if(this.monsterHealth<=0){
                    this.checkstatus("monster");
                }
                
                if(this.playerHealth==100){
                  this.turns.unshift({
                    systeminfo:true,
                    text: this.nome + ' already has full Health!'
                });}

                else{
                    var heal=this.calculateHeal(5,15);
                this.turns.unshift({
                    systeminfo:true,
                    text: this.nome + ' prayed for the gods and healed up  ' + heal+" HP"
                });
                } 
                var damage=this.calculateDamage(5,15,"player");
                this.turns.unshift({
                    isPlayer: false,
                    text: this.monstro + ' hits '+this.nome+' for ' + damage
                });

                if(this.playerHealth<=0){
                    this.checkstatus("player");
                }

        },


        giveUp: function(){
            
            this.checkstatus("gave");
            return;

        },

        calculateHeal: function(min,max){
            var heal = Math.max(Math.floor(Math.random() * max) + 1, min)
            if (this.playerHealth+heal>=100){
                this.playerHealth=100;
            }
            else{
                this.playerHealth +=heal;
            }
                return heal;

        },
        beforeEnter(el){
            console.log('beforeEnter');
            this.elementWidth=100;
            el.style.width = this.elementWidth + 'px';
        },
        enter(el, done){
            console.log('enter');
            let round = 1;
            const interval = setInterval(() => {
                el.style.width = (this.elementWidth + round * 10) + 'px';
                round++;
                if(round > 20){
                    clearInterval(interval);
                    done();
                }
            }, 20);
        }
    }
});