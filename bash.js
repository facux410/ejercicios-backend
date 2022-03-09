const index = require("./commands/index");
// Output un prompt
process.stdout.write("prompt > ");

// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", function (data) {
  //    cmd = data.toString().trim(); // remueve la nueva línea
  let cmd = data.toString().trim(); // remueve la nueva línea
  const resp = cmd.split(" ");

  if (cmd === "date") {
    index[cmd]();
  }
  if (cmd === "pwd") {
    index[cmd]();
  }
  if (cmd === "ls") {
    index[cmd]();
  }
  if (resp[0] === "echo") {
    index[resp[0]](resp);
  }

  //   }
  //   if (cmd === "curl") {
  //     index[cmd]();
  //   }
  //   if (cmd === "cat") {
  //     index[cmd]();
  //   }
  process.stdout.write("\nprompt > ");
});
