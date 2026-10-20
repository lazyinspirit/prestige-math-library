import fs from 'node:fs';
import childProcess from 'node:child_process';
import { syncBuiltinESMExports } from 'node:module';
import { join } from 'node:path';
process.argv[1] = 'tools/step6-finalize.mjs';
const root = process.cwd(), run = 'machine-learning-all-101-2026-10-19';
const destination = new URL('./', import.meta.url);
const receiptPath = `research/${run}-step6-report-integrity.json`, absolute = join(root, receiptPath);
if (fs.existsSync(absolute)) throw Error('Future probe expects absent production snapshot');
const { scopedReportTree } = await import('./tools/step6-report-scope.mjs');
const { sourceState } = await import('./tools/step6-prepared.mjs');
let started = Date.now();
const report = scopedReportTree(run, root);
fs.writeFileSync(new URL('actual-generated-report.json', destination), JSON.stringify(report));
const emit = record => {
  fs.appendFileSync(new URL('current-and-future-results.jsonl', destination), JSON.stringify(record) + '\n');
  console.log(JSON.stringify(record));
};
emit({ consumer: 'scopedReportTree', realRoot: root, defaultOwnedPaths: true,
  elapsedMs: Date.now()-started, sha256: report.sha256, rows: Object.keys(report.protected_tree).length,
  ownedPaths: report.selectors.owned_paths.length });
started = Date.now();
const current = sourceState(root, run);
emit({ consumer: 'sourceState', includeDerived: true, receipt: 'actual-current',
  elapsedMs: Date.now()-started, sha256: current.sha256, rows: Object.keys(current.tree).length,
  readinessSealed: Object.hasOwn(current.tree,`research/${run}-publication-readiness.json`),
  evidenceSealed: Object.hasOwn(current.tree,`research/${run}-step6-evidence.json`) });
// Model only the absent future generated receipt, using the genuine result
// above. No real carrier or Git state is modified. This is diagnostic coverage,
// not native preparation/gate credit. All other filesystem/Git reads are real.
const bytes = Buffer.from(JSON.stringify(report)), originalRead = fs.readFileSync,
  originalLstat = fs.lstatSync, originalSpawn = childProcess.spawnSync;
fs.readFileSync = function(path, options) {
  if (String(path) === absolute) return typeof options === 'string' || options?.encoding
    ? bytes.toString(typeof options === 'string' ? options : options.encoding) : Buffer.from(bytes);
  return originalRead.apply(this, arguments);
};
fs.lstatSync = function(path) {
  if (String(path) === absolute) return { isSymbolicLink: () => false, isFile: () => true, isDirectory: () => false };
  return originalLstat.apply(this, arguments);
};
childProcess.spawnSync = function(command, argv, options) {
  const result = originalSpawn.apply(this, arguments);
  if (command === 'git' && argv[0] === 'ls-files' && argv.includes('--others') && result.status === 0) {
    if (options?.cwd !== root || !argv.includes('-z')) throw Error('Unexpected virtual inventory request');
    const entry = receiptPath + '\0';
    if (Buffer.isBuffer(result.stdout)) result.stdout = Buffer.concat([result.stdout, Buffer.from(entry)]);
    else result.stdout += entry;
  }
  return result;
};
syncBuiltinESMExports();
try {
  started = Date.now();
  const future = sourceState(root, run);
  emit({ consumer: 'sourceState', includeDerived: true, receipt: 'virtual-genuine-future-snapshot',
    elapsedMs: Date.now()-started, sha256: future.sha256, rows: Object.keys(future.tree).length,
    sameSelectedTree: JSON.stringify(future.tree) === JSON.stringify(current.tree),
    snapshotSha256: report.sha256, diagnosticOnly: true });
} finally {
  fs.readFileSync = originalRead; fs.lstatSync = originalLstat; childProcess.spawnSync = originalSpawn;
  syncBuiltinESMExports();
}
