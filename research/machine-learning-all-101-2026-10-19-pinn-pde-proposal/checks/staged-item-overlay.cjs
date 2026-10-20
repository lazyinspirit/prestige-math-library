// Read-only test adapter: the unmodified native checker sees proposed item bytes
// before real repository suppliers. This grants no actual-run gate credit.
const fs = require('node:fs');
const path = require('node:path');
const { syncBuiltinESMExports } = require('node:module');
const repo = path.resolve(__dirname, '../../..');
const proposal = path.resolve(__dirname, '../items');
const read = fs.readFileSync;
const exists = fs.existsSync;
function proposed(file) {
  if (typeof file !== 'string') return file;
  const full = path.resolve(file);
  if (path.dirname(full) !== path.join(repo, 'items')) return file;
  const candidate = path.join(proposal, path.basename(full));
  return exists(candidate) ? candidate : file;
}
fs.readFileSync = function(file, ...args) { return read.call(this, proposed(file), ...args); };
fs.existsSync = function(file) { return exists.call(this, proposed(file)); };
syncBuiltinESMExports();
