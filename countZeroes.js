function countZeroes(array) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;

    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = array[middleIdx];
        if (middleVal > 0) {
            // middleVal is too small, look at the right half
            leftIdx = middleIdx + 1;
        } else if (middleVal = 0) {
            // middleVal is too large, look at the left half
            rightIdx = middleIdx - 1;
        } else {
            // we found our value!
            return array.slice(middleIdx, array.length + 1).length
        }
    }

    // left and right pointers crossed, val isn't in arr
    return -1;
}