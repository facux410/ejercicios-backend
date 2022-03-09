const pwd = () => {
    process.stdout.write(process.cwd());
  };
  const date = () => {
    process.stdout.write(Date());
  };
 const echo = (resp) => {
    const resp2 = (resp.toString()) ;

    const resp3 = resp2.replace('echo' , ' ')

    const resp4 = resp3.replace(',' , ' ')

      process.stdout.write(resp4)
 }

  
  const ls = () => {
    const fs = require("fs");
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  };
  
  const cat = () => {
    process.stdout.write(cat)
  }

module.exports = {
date,pwd,ls,echo,
}