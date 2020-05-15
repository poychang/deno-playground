// deno run --allow-net=example.com .\http-request.ts https://example.com
// 執行時要設定 --allow-net 權限標籤，才有權限使用執行環境的網路
// 此權限標籤可以限定網域

const url = Deno.args[0];
const res = await fetch(url);
const body = new Uint8Array(await res.arrayBuffer());

await Deno.stdout.write(body);
