import * as fs from 'node:fs/promises';

async function main() {
  const stats = await fs.stat('./calculator.png');
  console.log(stats);
}

main();
