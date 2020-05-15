// deno run --allow-net .\simple-tcp-server.ts

const sender = Deno.
//listen({ port: 8080 });

console.log("listening on 0.0.0.0:8080");

for await (const conn of listener) {
  Deno.copy(conn, conn);
}
