//冒泡排序
function bubbleSort(arr) {
    console.time("耗时");
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.timeEnd("耗时");
    return arr;
}
console.log(bubbleSort([3, 2, 6, 7, 5, 9, 10]));

//改良版本
function bubbleSort2(arr){
    console.time("耗时");
    var i=arr.length-1;
    while(j<i){
        var pos=0;
        for(var j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                pos=j;
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        i=pos;
    }
    console.timeEnd("耗时");
    return arr;
}
console.log(bubbleSort2([3, 2, 6, 7, 5, 9, 10]));