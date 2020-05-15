// deno run --allow-read .\reading-file.ts .\demo-file.txt
// --allow-read 權限標籤後面可以設定指定的檔案或路徑，做權限開放
// --allow-write 和 --allow-read 用法一樣


for (let i = 0; i < Deno.args.length; i++) {
  let filename = Deno.args[i];
  let file = await Deno.open(filename);

  await Deno.copy(file, Deno.stdout);

  file.close();
}
