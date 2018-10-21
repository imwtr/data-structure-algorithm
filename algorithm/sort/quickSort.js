
# 快速排序算法

## 时间复杂度

O(nlog(n))

## 空间复杂度

## 说明
快速排序算法在数组中选择一个称为主元(pivot)的元素，将数组分为两部分，使得 第一部分中的所有元素都小于或等于主元，而第二部分的所有元素都大于主元。

对第一部分递归地应用快速排序算法，然后对第二部分递归地应用快速排序算法


## 实现
```javascript
// 分治法快排
function quickSort(arr, low, high) {
    // 递归边界
    if (low >= high) {
        return arr;
    }

    var left = low,
        right = high,
        // 判断基准值，每一轮比较后，左边的值都比key小，右边的值都比key大
        key = arr[low];

    while (left < right) {
        // 从右边递减，直到值小于基准值
        while (left < right && arr[right] >= key) {
            right--;
        }
        
        // 则将此值赋值给左边的left值
        arr[left] = arr[right];
        
        // 从左边递增，直到值大于基准值
        while (left < right && arr[left] <= key) {
            left++;
        }
        
        // 则将此值赋值给右边的right值
        arr[right] = arr[left];
    }
    
    // 此处已经将数组分为左小右大的两部分，更新基准值位置，继续分解排序
    arr[left] = key;

    quickSort(arr, low, left - 1);
    quickSort(arr, left + 1, high);
}

var arr = [1, 2, 4, 5, 2, 1, 5, 6, 77];

quickSort(arr, 0, arr.length - 1);

arr // [1, 1, 2, 2, 4, 5, 5, 6, 77]
```
