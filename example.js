function makearray(num){

    let result = num.toString();
    let result2 = result.split('');
    console.log(result2);

}

makearray(405);

function pairs(arr, n) {
    const pairs = [];
    const diff = {};
  
    for (let i = 0; i < arr.length; i++) {
      const ans = n - arr[i];
      if (diff[ans] !== undefined) {
        pairs.push([diff[ans], i]);
      }
  
      diff[arr[i]] = i;
    }
  
    return pairs;
  }
  
  let result =pairs(['1','2','3'],4);
  console.log(result);
  
