class Node{
    constructor(data,next=null){
      
     if(!next){
        this.data=data
        this.next=next
     }
      
    }
}



class LinkedList{
    constructor(){
         this.head=null
         this.size=0
         this.max=5
    }
    
    push(data){
     
    if(this.size<this.max){
        if(!this.head){
            this.head=new Node(data,this.head)
        }else{
            let newNode=new Node(data)
            let temp=this.head
            while(temp.next!=null){
                temp=temp.next
            }
            temp.next=newNode
           
        }
        this.size++
    }else{
        console.log("The stack is full")
    }

  
    }
    

    pop(){
      if(this.size>1){
        let counter=1
        let temp=this.head
        while(counter<(this.size-1)){
            temp=temp.next
            counter++
           
        }
        temp.next=null
       
      }else{
          this.head={}
          
      }
      this.size--
    }
   
    peek(){
        if(this.size>0){
          
            let temp=this.head
            while(temp.next!=null){
                temp=temp.next
            }
            console.log(temp.data)
             
        }
        else{
            console.log(-1)
        }
    }
    

  
   
   
}

const l=new LinkedList()
l.push(100)
l.push(200)
l.push(300)
l.push(400)
l.pop()
l.pop()
l.pop()
l.push(400)
l.push(500)


l.peek()