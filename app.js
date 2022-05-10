
// function warning() {
//     alert("warning!")
// }


// let a = prompt('enter your name')
// let b = prompt('enter your company')
// let c = prompt('enter your designation')


// let d = document.getElementById('name')
// d.innerHTML= a

// let e = document.getElementById('company')
// e.innerHTML= b

// let f = document.getElementById('designation')
// f.innerHTML= c


// const arr = ['name', 'company', 'designation' , 'salary' ]
// const arr2 = [];
// for (let i = 0; i<arr.length; i++ ){
//     const a = prompt('enter your ' + arr[i])
//     arr2.push(a)
    
    
// }

// let d = document.getElementById('name')
//     d.innerHTML= arr2[0]
    
//     let e = document.getElementById('company')
//     e.innerHTML= arr2[1]
    
//     let f = document.getElementById('designation')
//     f.innerHTML= arr2[2]

//     let g = document.getElementById('salary')
//     g.innerHTML= arr2[3]


const arr = ['name', 'company', 'designation' , 'salary' ]
const arr2 = [];
for (let i = 0; i<arr.length; i++ ){
    const a = prompt('enter your ' + arr[i])
    arr2.push(a)
    
    
}


let d = document.getElementById('list')

for (let j = 0; j<arr2.length; j++ ){


    const li = document.createElement('li');
const liText = document.createTextNode(arr2[j])
li.appendChild(liText)

d.appendChild(li)

}




