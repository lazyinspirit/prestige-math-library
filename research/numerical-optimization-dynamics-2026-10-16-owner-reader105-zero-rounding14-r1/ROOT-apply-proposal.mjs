// ROOT ONLY. Unexecuted proposal. Root must first confirm Reader105 post/split drain
// and approve the concrete source/metadata diff. No native control or gates here.
import fs from 'node:fs';
const base = new URL('./', import.meta.url);
const read = name => JSON.parse(fs.readFileSync(new URL(name, base), 'utf8'));
const mode = process.argv[2];
if (!['--source', '--metadata'].includes(mode)) throw Error('Use --source or --metadata after root approval and actual Reader105 drain.');
const sourceOps = read('source-operations.json');
const closure = read('consumer-closure.json');
for (const row of closure.rows) {
  if (fs.readFileSync(row.current_source, 'utf8') !== fs.readFileSync(row.current_snapshot, 'utf8')) {
    throw Error(`Current consumer context drifted; root must reconcile before application: ${row.current_source}`);
  }
}
if (mode === '--source') {
  for (const op of sourceOps) {
    if (fs.readFileSync(op.target, 'utf8') !== op.before) throw Error(`Source before guard failed: ${op.target}`);
  }
  for (const op of sourceOps) fs.writeFileSync(op.target, op.after);
  process.stdout.write('Applied exactly two approved source carriers. Root still owns explicit layout checks and native/metadata acceptance.\n');
} else {
  for (const op of sourceOps) {
    if (fs.readFileSync(op.target, 'utf8') !== op.after) throw Error(`Approved final source guard failed: ${op.target}`);
  }
  const ops = read('metadata-operations.json');
  const carriers = new Map();
  for (const op of ops) {
    if (!carriers.has(op.target)) carriers.set(op.target, JSON.parse(fs.readFileSync(op.target, 'utf8')));
    let parent = carriers.get(op.target);
    for (const key of op.path.slice(0, -1)) parent = parent[key];
    const key = op.path.at(-1);
    if (JSON.stringify(parent[key]) !== JSON.stringify(op.before)) throw Error(`Metadata field guard failed: ${op.target} ${JSON.stringify(op.path)}`);
    parent[key] = op.after;
  }
  for (const [path, carrier] of carriers) fs.writeFileSync(path, `${JSON.stringify(carrier, null, 2)}\n`);
  process.stdout.write(`Applied ${ops.length} surgical fields in ${carriers.size} metadata carriers. No native control, hashes or gates.\n`);
}
