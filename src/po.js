var arr = [9, 3, 7, 4, 6, 9, 3, 13, 5, 0];

const maxSequence = (arr) => {
  var seq_arr = [arr[0]];
  var tmp_arr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let lastOne = seq_arr[seq_arr.length - 1];

    if (arr[i] >= arr[i - 1] || arr[i] > lastOne) {
      tmp_arr.push(arr[i]);
    } else {
      if (tmp_arr.length > seq_arr.length) {
        seq_arr = tmp_arr;
      }
      tmp_arr = [arr[i]];
    }
  }

  if (tmp_arr.length > seq_arr.length) {
    seq_arr = tmp_arr;
  }

  return seq_arr;
};

// console.log(maxSequence(arr));
// document.write(maxSequence(arr));
