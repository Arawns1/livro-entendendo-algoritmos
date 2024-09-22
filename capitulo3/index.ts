
function fatorialRecursivo(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n * fatorialRecursivo(n - 1);
}

const result = fatorialRecursivo(3);
console.log(result);