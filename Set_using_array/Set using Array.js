class UniqueSet{
    constructor(array){
        this.ar=[]
    this.store={}
    for(let i=0;i<array.length;i++){
         
     if(this.ar.indexOf(array[i])==-1){
         this.store[i]=array[i]
     }
     this.ar.push(array[i])
    }
     return this.store
    }

}

class MySet{
    constructor(array){
       this.store=new UniqueSet(array)
        
    }
   

   size(){
       let count=0
       for(let v in this.store){
           count++
       }
       console.log(count)
   }
   
   has(val){
       for(let v in this.store){
           if(this.store[v]==val){
               return true
           }
       }
       return false
   }
   add(val){
       let ischeck=null
       let counter=0       
       for(let v in this.store){
           if(this.store[v]==val){
               ischeck=true
           }
           counter++
       }
        console.log(counter)
       if(!ischeck){
           this.store[counter]=val
       }
   }

   delete(val){
       let obj={};
       let counter=0
       for(let v in this.store){
           if(this.store[v]!=val){
               obj[counter]=this.store[v]
               counter++
           }
       }
       this.store=obj
   }
}

const s=new MySet([1,2,3,4,3])
console.log(s)
s.size()
console.log(s.has(3))
s.add(5)
console.log(s)
s.delete(3)
s.delete(1)
console.log(s)
