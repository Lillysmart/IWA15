
const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first =  data.lists [0][1];
console.log (first )
const second =  data.lists[1][1]
console.log (second)
const  third = data.lists [2][1]
console.log (third)

const result = [first,second,third]

console.log (result)
//console.log (first[first.length-1])
//console.log (second[second.length-1])

const extractBiggest = () => {
	if (first [first.length-1] > second[second.length-1] ) {
		return first.pop()}

	else if(second [second.length-1]>third [third.length-1] ){
	return  second.pop ()}

else if ( third [third.length-1] > [second.length-1] ){
	     return third.pop()}

}
//const removeValue =(second.pop())
//console.log (removeValue)

/*console.log (result.push (extractBiggest()))
console.log (result)
console.log (result.push (extractBiggest()))
console.log (result)*/

// Only edit above



result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)