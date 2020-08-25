const sentence = "hello there from lighthouse labs";

let interval = 0;

for (const char of sentence) {

  const printCharacter = () => {
    setTimeout(() => {
      process.stdout.write(char);
    }, interval)
  }

  printCharacter();
  interval += 50;
}

setTimeout(() => {
  console.log('');
}, sentence.length * 50)