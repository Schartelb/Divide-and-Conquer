function sortedFrequency(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (val>=arr[0] && val<=arr[arr.length - 1]) {
      // find the middle value
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
    console.log("pre ", leftIdx, middleIdx, rightIdx)
      if (middleVal < val) {
        // middleVal is too small, look at the right half
        leftIdx = middleIdx + 1;
      } else if (middleVal > val) {
        // middleVal is too large, look at the left half
        rightIdx = middleIdx - 1;
      } else {
        // we found our value!
        if(arr[leftIdx] !== val){leftIdx = Math.floor((leftIdx + middleIdx) / 2)}
        if(arr[rightIdx] !== val){rightIdx = Math.ceil((middleIdx + rightIdx) / 2)}
      console.log(leftIdx, middleIdx, rightIdx)
      }
      if(arr[leftIdx] == val && arr[rightIdx]==val){
        return console.log(arr.slice(leftIdx, rightIdx+1).length)
      }
    }
    return -1
  }

  //has issues with lowest values