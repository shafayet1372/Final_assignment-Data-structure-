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
         this.rear=[]
         this.front=[]
        
    }
    
    enqueue(data){
     
    if(this.size<this.max){
        if(!this.head){
            this.head=new Node(data,this.head)
            let objCopy = Object.assign({}, this.head);
            this.front[0]=objCopy
            this.rear[0]=objCopy
        }else{
            let newNode=new Node(data)
            this.rear[0]=newNode
          
            let temp=this.head
            while(temp.next!=null){
                temp=temp.next
            }
            temp.next=newNode
           
        }
         
        this.size++
    }else{
        console.log("The Queue is full")
    }
    }
    
    isFull(){
        if(this.size==this.max){
            return true
        }
        return false
    }

    isEmpty(){
        if(this.size==0){
            return true
        }
        return false
    }

    Front(){
        return this.front[0]
    }
    Rear(){
        return this.rear[0]
    }
    print(){
        console.log(this.head)
    }
   
    dequeue(){
       let newNode=this.head.next
       this.head=newNode
       let front={data:this.head.data,next:null}
       this.front[0]=front
       let temp=this.head
       while(temp.next !=null){
           temp=temp.next
       }
      let rear={...temp}
      this.rear[0]=rear
    }
  

  
   
   
}

const l=new LinkedList()
console.log(l.isEmpty())
l.enqueue(100)
l.enqueue(200)
l.enqueue(300)

l.print()
console.log(l.isFull())
console.log(l.Front())
console.log(l.Rear())
l.dequeue()
console.log(l.Front())
console.log(l.Rear())