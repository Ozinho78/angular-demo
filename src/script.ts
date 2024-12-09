greet('Michael');

async function greet(n: string){
  return 'Hello ' + n;
}


// Compilieren in JS von 2017, enthält bereits async
// tsc script.ts --target es2017