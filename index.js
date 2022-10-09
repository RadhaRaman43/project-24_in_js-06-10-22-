/*let course={Book:"JavaScript",BookId:10,BookPrice:400,
books:["Java","C","C++"],
Address:{                                               //nested method
    company:"Google",
    Country:"India"
},
showbooks()
{
    let msg=this.Book
    let s=this.books.forEach(function(value){
        console.log(value)
    })
    console.log(msg)
}
}
course.showbooks()*/
/*
let obj={sen:{sen1:"Javascript is a object-based language. Learning Nested Data Structures."},
showSentence(){
    let msg=this.sen.sen1
    console.log(msg)
}
}
obj.showSentence()*/



/*let array={
    key1:["title: Ramayan", "author: Valmiki", "bookId: 24"],
    //key2:["title: Mahabharat","author: Vedvyas","bookId: 25" ],
    //key3:["title: Geeta","author: Krishna","bookId: 26"]
    showData(){
    let msg=this.key1.forEach(function(value,index){
        console.log(index,value)
    })
    }
 }
 array.showData()*/

 
 let codeLan={
              lan:["Python","Java","Ruby","Go"],
              key1:"languagea",key2:"is challanging",key3:"isRewarding",key4:"difficulty",
              key5:"isFun",key6:true,key7:7,key8:true,
showValue()
{
    for(i=0;i<this.lan.length;i++){
        let msg=this.lan[i]
        console.log(msg)
    }
    console.log(this.key1)
    console.log(this.key2)
    console.log(this.key3)
    console.log(this.key4)
    console.log(this.key5)
    console.log(this.lan)
    console.log(this.key6)
    console.log(this.key7)
    console.log(this.key8)

}
}
codeLan.showValue()



/*var a=prompt()
var sum=0
while(a>0){
    var r=a%10
    sum+=r
    a=a/10
}

console.log(parseInt(sum))*/

/*let obj=[{k1:"Kamal", key2:"Seeta"},
         {key3:"Hello",key4:"Hi"},
        {key6:"Ice",key7:"cream"} ]

let arr=obj.map(function(item){
    return item;
})
console.log(arr)*/










