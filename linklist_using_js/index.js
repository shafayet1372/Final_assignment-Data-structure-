const { count } = require("console");



class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next
    }
}



class LinkedList{
    constructor(){
         this.head=null
         this.index=0
    }
    
    insertNodeFirst(data){
    this.head=new Node(data,this.head)
    this.index++
    }
    insertNodeLast(data){
        
        let temp=this.head
        while(temp.next!=null){
            temp=temp.next
        }
        temp.next=new Node(data)
     this.index++
        
    }

    insertSpecificPos(data,pos){
       if(pos==1){
          
           let newNode=new Node(data)
           
           newNode.next=this.head
           this.head=newNode
           this.index++
       }else if(pos==this.index){
        this.insertNodeLast(data)
        
       }else{
         let temp=this.head
         let counter=1
         while(temp!=null && counter<(pos-1)){
             
             counter++
             temp=temp.next
         }
         let newNode=new Node(data)
      
         let connectNode=temp.next
         newNode.next=connectNode
         temp.next=newNode
         this.index++
        //  console.log(temp)
        console.log(temp)
       }
    }
    printList(){
       let temp=this.head
      while(temp !=null){
        console.log(temp.data)
        temp=temp.next
      }
    }

    getvalueAtIndex(pos){
        let counter=1
        let temp=this.head
        while(temp!=null && counter<pos){
              temp=temp.next
              counter++
        }
        console.log(temp.data)
    }

    removeSpecific(pos){
        let counter=1
        let temp=this.head
        let temp1;
        while(temp.next!=null && counter<pos-1){
              temp1=temp
              temp=temp.next
              counter++
        }
        console.log(temp)
        console.log(temp)
        if(pos==1){
            
            let connectNode=temp.next
        this.head=connectNode
       
        this.index--
        }else {
              let newList=temp.next.next
              temp.next=newList
              this.index--
              console.log(temp)
        }
    }
}

const l=new LinkedList()
l.insertNodeFirst(100)
l.insertNodeFirst(200)
l.insertNodeFirst(210)
l.insertNodeLast(300)

l.insertSpecificPos(400,3)
l.insertSpecificPos(700,3)

l.getvalueAtIndex(2)
l.removeSpecific(3)
console.log(l)
l.printList()