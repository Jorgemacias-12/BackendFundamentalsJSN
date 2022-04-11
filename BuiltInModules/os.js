const os = require('os');

// info about the current user
console.log(os.userInfo());

// get system uptime seconds

console.log(`System uptime: ${(os.uptime() / 3600).toPrecision(6)} Hours`);

const currentOS = 
{
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  Arch: os.arch(),
  cores: os.cpus(),
  hostname: os.hostname(),
  version: os.version()
}
console.log(currentOS);