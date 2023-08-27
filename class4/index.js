// exercise1
// function insert(arr:string[],value:string) {
//     let i=2
//     arr.splice(i,0,value)
//     return arr
// }
// var myarr:string[]=['one','two','three','four']
// var value:string='khizar'
// const modarr=insert(myarr,value)
// console.log(modarr)
// let findex=myarr.findIndex(e=>e===value)
// console.log(findex)
// exercise2
// to add item
// let myarrs:string[]=['milk','eggs','almonds','oil','apples']
// function additem(arrs:string[]) {
// console.log(myarrs)
//     myarrs.unshift('vegetables')
//     console.log(myarrs)
// }
// additem(myarrs);
// to remove item
// function removeitem(arrs:string[]) {
//     console.log(myarrs)
//     myarrs.pop()
//     console.log(myarrs)
// }
// removeitem(myarrs)
// to update
// function updateitem(arrs:string[]) {
//     console.log(myarrs)
// arrs.splice(2,1,'ghee')
//     console.log(myarrs)
// }
// updateitem(myarrs)
// exercise3
// var i=0
// while (i<=25) {
//     console.log(i)
//     i++
// }
// exercise 4
// let number=0
// while (number<=20) {
//     console.log(number)
//     number=number+2
// }
// exercise 5
// function calfac(posinum:number) {
//     if (posinum<0) {
//         console.log('invalid value')
// }
// else{
//         let n:number=1
//         let result:number=1
//         while(n<=posinum){
//          result=result*n
//         n++
//     }
//         return result}
// }
// let factorial=calfac(4)
// console.log(factorial)
// exercise 6
var arrnum = [1, 2, 3, 4, 5, -6, -8];
for (var index = 0; index < arrnum.length; index++) {
    var element = arrnum[index];
    if (element < 0) {
        arrnum.splice(index, 1);
        index--;
    }
}
console.log(arrnum);
// exercise 7
// let temparr:number[]=[50,30,80,150]
// for (let index = 0; index <temparr.length; index++) {
//     let tempcel=temparr[index]
// let tempfar=(tempcel*9/5)+32
// console.log(`${tempcel} celcius is equal to ${tempfar} faranheit`)    
// }
