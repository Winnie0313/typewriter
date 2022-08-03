
const typeWriter = function(sentence) {
  let duration = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (i === sentence.length - 1) {
      setTimeout(() => {
        // print the char here
        process.stdout.write(sentence[i] + "\n");
      }, duration);
    } else {
      setTimeout(() => {
        // print the char here
        process.stdout.write(sentence[i]);
      }, duration);
    }
    duration += 50;
  }
};

// test
const sentence1 = "hello there from lighthouse labs";
typeWriter(sentence1);