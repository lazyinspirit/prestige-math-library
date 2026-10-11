// Run-local implementation of CLAUDE.md §7. This checks metadata and layout,
// never mathematical validity, and leaves every native gate in place.
import { runPages, orderedItems } from '../tools/item-dependency-levels.mjs';
import { readFileSync, writeFileSync, openSync, closeSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createHash, randomUUID } from 'node:crypto';

const [run, stage] = process.argv.slice(2);
if (run !== 'frontier-44-special-representation-examples-28-six-step' || !stage)
  throw Error('Exact run and native stage required');
const rows = orderedItems(runPages(process.cwd(), run));
if (!rows.length) throw Error('Empty frontier');
const paths = rows.map(row => `items/${row.id}.md`);
const hash = path => createHash('sha256').update(readFileSync(path)).digest('hex');
const before = paths.map(hash);
const directory = `.autopilot/${run}/pre-gate-recertification`;
mkdirSync(directory, { recursive: true });
const attempt = `${stage}-${randomUUID()}`;
const commands = [
  ['precheck', ['node', 'tools/tsx-run.mjs', 'tools/precheck.mts', ...paths]],
  ['proof-layout', ['node', 'tools/proof-layout.mjs', ...paths]],
];
const checks = [];
for (const [name, argv] of commands) {
  const output = `${directory}/${attempt}-${name}.log`;
  const fd = openSync(output, 'w');
  const result = spawnSync(argv[0], argv.slice(1), { stdio: ['ignore', fd, fd] });
  closeSync(fd);
  checks.push({ name, output, exit_code: result.status });
}
const records = rows.map((row, i) => ({ id: row.id, page: row.page,
  dependency_level: row.level, source_sha256: hash(paths[i]),
  stable_during_check: before[i] === hash(paths[i]) }));
const ok = checks.every(check => check.exit_code === 0)
  && records.every(row => row.stable_during_check);
writeFileSync(`${directory}/${attempt}.json`, JSON.stringify({
  run, stage, at: new Date().toISOString(),
  mode: 'dependency-ordered formatting/metadata/hash-only',
  mathematical_review: false, subjects: records.length, ok, checks, items: records,
}, null, 2) + '\n');
if (!ok) {
  for (const check of checks.filter(check => check.exit_code !== 0))
    process.stderr.write(readFileSync(check.output));
  for (const row of records.filter(row => !row.stable_during_check))
    console.error(`ERROR metadata-recert [${row.id}] content changed during recertification`);
  process.exitCode = 1;
}
console.log(`metadata-recert: ${records.length} subjects checked in dependency order; ${ok ? 'pass' : 'fail'}`);
