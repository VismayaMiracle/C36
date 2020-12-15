class Game{
    constructor(){
        
    }
    
    getstate(){

        var getstateRef=database.ref("gameState")  
        getstateRef.on("value",function(data){                   
          
            gameState=data.val()

        })
    }
    update(state){
        database.ref("/").update({      // '/' means referring to the main database 

            gameState:state
        })  


    }

    start(){

        if(gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()
        }
    }
}