binary_search = (list, item) => {
    //low和high用于跟踪列表中查找的部分
    let low = 0;
    let high = list.length;
    while (low <= high) { //-------------------------只要范围没有缩小到只包含一个元素
        let mid = Math.floor((low + high) / 2); //---就查询中间的元素，js需要通过Math.floor方法向下取整
        let guess = list[mid];
        if (guess == item) { //----------------------找到元素，则return
            return mid;
        }
        if (guess > item) { //-----------------------找到的数字大了
            high = mid - 1;
        } else { //----------------------------------找到的数字小了
            low = mid + 1;
        };
    };
    return "none"; //--------------------------------若没找到指定元素
};

my_list = [1,3,5,7,9]
console.log(binary_search(my_list,3))
console.log(binary_search(my_list,-1))