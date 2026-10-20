// Read-only mathematical proposal checking: overlays only exact proposed item bytes.
// Never use this wrapper for a run loader, gate, readiness or state operation.
const fs = require('node:fs');
const path = require('node:path');
const { syncBuiltinESMExports } = require('node:module');
const repo = process.cwd();
const proposal = path.join(repo, 'research/machine-learning-all-101-2026-10-19-initialization-signal-proposal/proposed');
const originalRead = fs.readFileSync;
fs.readFileSync = function(file, ...args) {
  if (typeof file === 'string' && file.startsWith(path.join(repo, 'items') + path.sep)) {
    const replacement = path.join(proposal, path.relative(repo, file));
    if (fs.existsSync(replacement)) return originalRead.call(this, replacement, ...args);
  }
  return originalRead.call(this, file, ...args);
};
syncBuiltinESMExports();
