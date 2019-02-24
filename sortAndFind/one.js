// 把一个有序数组[1, 2, 3, 4, 5, 6, 7] 以某一个节点翻转。比如 [5, 6, 7, 1, 2, 3, 4]. 在这个数组中找给定的某一个值， 找不到则返回 -1. leetcode 33题。

function searchNumber(nums, target) {
    var length = nums.length;
    if (length == 0) {
        return -1;
    }        
    if (nums[0] == target) {
        return 0;
    } else if (nums[0] < target) {
        if (target - nums[0] >= length) {
            return -1;
        } else {
            if (nums[target - nums[0]] == target) {
                return target - nums[0];
            } else {
                return -1;
            }
        }
    } else {
        var begin = 0;
        var end = length - 1;
        var mid = begin + parseInt((end - begin) / 2);        
        if (mid == begin) {
            mid++;
        }
        while(end > begin) {
            if ((nums[mid] - nums[begin]) == mid - begin) {
                begin = mid;
                mid = begin + parseInt((end - begin) / 2);
                if (mid == begin) {
                    mid++;
                }
            } else {
                if (nums[mid] == target) {
                    return mid;
                } else if(nums[mid] < target) {
                    var diff = target - nums[mid];
                    if (diff >= length - mid) {
                        return -1;
                    } else {
                        if (nums[mid + diff] == target) {
                            return mid + diff;
                        } else {
                            return -1;
                        }
                    }
                } else if(nums[mid] > target) {
                    var diff = nums[mid] - target;
                    if (diff >= mid) {
                        return -1;
                    } else {
                        if (nums[mid - diff] == target) {
                            return mid - diff;
                        } else {
                            return -1;
                        }
                    }
                }
            }
        }      
        return -1;
    }
}

var arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];

for(var m = 0; m<arr.length; m++) {
    var result = searchNumber(arr, arr[m]);
    console.log("查找 " + arr[m] + " 的结果 为 "+result+" index="+m);
}