function CreateObject(arr) {
    // Write your code here
    var d ={};
    for (let i =1; i<arr.length;i+=2){
        d[arr[i-1]] = arr[i];
    }
    return d;
}

module.exports = CreateObject;
