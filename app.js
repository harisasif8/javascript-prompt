// #

const arr = ['name', 'company', 'designation', 'salary']
const arr2 = [];
// Take values from user through prompt
for (let i = 0; i < arr.length; i++) {
    const a = prompt('enter your ' + arr[i])
    arr2.push(a)
}


const d = document.getElementById('list')

for (let j = 0; j < arr2.length; j++) {
    const li = document.createElement('li');
    const liText = document.createTextNode(arr2[j])
    li.appendChild(liText)
    d.appendChild(li)
}




