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