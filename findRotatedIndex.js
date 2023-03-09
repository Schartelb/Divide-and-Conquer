function findRotatedIndex(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal < val && arr[leftIdx] < val) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > val && arr[leftIdx] < val) {
            rightIdx = middleIdx - 1;
        } else if (middleVal < val && arr[leftIdx] < val) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > val && arr[leftIdx] < val) {
            rightIdx = middleIdx - 1;
        } else {
            // we found our value!
            return middleIdx;
        }
    }

    // left and right pointers crossed, val isn't in arr
    return -1;
}