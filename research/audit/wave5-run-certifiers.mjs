#!/usr/bin/env node
// wave5-run-certifiers.mjs — assemble and dispatch one read-only Sonnet
// certifier per repaired-but-unstamped item, at the lane's own concurrency.
//
// Same shape and the same reason as wave5-run-refuters.mjs: dispatch.mjs blocks
// on the cross-process slot pool (certifier cap 6), so N backgrounded dispatches
// would be N resident node processes waiting on 6 slots. One parent with at most
// `--concurrency` live children keeps the lane cap and the memory bill agreeing.
//
//   node research/audit/wave5-run-certifiers.mjs --items <ids.txt> [--concurrency 6]
//     [--base <sha>] [--head <sha>] [--skip-done]

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { spawn, execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const arg = (name, fallback) => {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : fallback;
};

const itemsFile = arg('--items');
const concurrency = Number(arg('--concurrency', '6'));
const base = arg('--base', '0649370');
const head = arg('--head', 'HEAD');
const prefix = arg('--prefix', 'a6cert');
const skipDone = process.argv.includes('--skip-done');
if (!itemsFile) {
  console.error('usage: wave5-run-certifiers.mjs --items <ids.txt> [--concurrency 6] [--base sha] [--head sha] [--skip-done]');
  process.exit(2);
}

const ids = readFileSync(itemsFile, 'utf8').trim().split('\n').map((s) => s.trim()).filter(Boolean);
const taskDir = join(REPO, 'research/audit/wave5-certifier-tasks');
const outDir = join(REPO, 'research/audit/wave5-dispatch');
mkdirSync(taskDir, { recursive: true });

const labelFor = (id, i) => `${prefix}-${String(i + 1).padStart(3, '0')}-${id}`.slice(0, 72).replace(/[^A-Za-z0-9._-]/g, '-');

const run = (cmd, args) => new Promise((resolve) => {
  const child = spawn(cmd, args, { cwd: REPO, stdio: ['ignore', 'pipe', 'pipe'] });
  let out = '';
  let err = '';
  child.stdout.on('data', (d) => { out += d; });
  child.stderr.on('data', (d) => { err += d; });
  child.on('close', (code) => resolve({ code, out, err }));
});

// The certifier CAN read disk, so the task file carries the pointer and the
// diff rather than the whole corpus: what changed, and where to look hardest.
function writeTask(id) {
  // head === 'worktree' diffs the CURRENT working tree against base, so a
  // re-certification after an uncommitted Alpha repair shows the repair.
  const range = head === 'worktree' ? [base] : [base, head];
  const diff = execFileSync('git', ['diff', ...range, '--', `items/${id}.md`], { cwd: REPO, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  const body = `# Certify the wave-5 repair of \`${id}\`

**Item file:** \`items/${id}.md\` — read it in full from disk, and read every
dependency in its \`deps:\` list that its Facts block actually cites.

**Status.** This item is \`status: published\`. It was repaired during wave 5 of
the published-page retro-audit. Its previous verification stamp was deleted
because the repair was a material rewrite, so the item currently carries **no**
verification stamp. Your independent reading is what licenses the new one.

**Who wrote the repair.** The wave-5 audit Alpha (\`claude-opus-5\`). It may not
certify its own repair, which is why you are reading it.

## The repair, as a diff from \`${base}\` to \`${head}\`

Read this to know what changed and where to look hardest. **You are certifying
the current text on disk, not the diff** — a defect that predates the repair is
still a defect you must report.

\`\`\`diff
${diff.trim() || '(no diff in this range — certify the current text as it stands)'}
\`\`\`

## Certify or refuse

Follow the brief exactly. Return the verdict block and nothing else.
`;
  const p = join(taskDir, `${id}.md`);
  writeFileSync(p, body);
  return p;
}

const queue = ids.map((id, i) => ({ id, i, label: labelFor(id, i) }));
let started = 0;
const done = [];

async function worker() {
  for (;;) {
    const job = queue.shift();
    if (!job) return;
    const { id, i, label } = job;
    const resultPath = join(outDir, `certifier-${label}.result.json`);
    if (skipDone && existsSync(resultPath)) {
      try {
        if (JSON.parse(readFileSync(resultPath, 'utf8')).ok) {
          console.log(`[skip ${++started}/${ids.length}] ${id} — already complete`);
          done.push({ id, label, ok: true, skipped: true });
          continue;
        }
      } catch { /* unreadable result: re-run it */ }
    }
    let taskPath;
    try {
      taskPath = writeTask(id);
    } catch (e) {
      console.error(`[FAIL ${++started}/${ids.length}] ${id} — assembly: ${String(e.message).slice(0, 200)}`);
      done.push({ id, label, ok: false, stage: 'assemble' });
      continue;
    }
    const n = ++started;
    console.log(`[run ${n}/${ids.length}] ${id}`);
    const t0 = Date.now();
    const d = await run('node', [
      'tools/dispatch.mjs',
      '--role', 'certifier',
      '--brief', 'research/audit/wave5-certifier.brief.md',
      '--label', label,
      '--run', 'wave5',
      '--task', taskPath,
      '--timeout', '2400',
    ]);
    const secs = Math.round((Date.now() - t0) / 1000);
    const ok = d.code === 0;
    console.log(`[${ok ? 'ok' : 'FAIL'} ${n}/${ids.length}] ${id} (${secs}s)${ok ? '' : ` — ${d.err.trim().slice(0, 300)}`}`);
    done.push({ id, label, ok, secs, index: i });
  }
}

await Promise.all(Array.from({ length: Math.max(1, concurrency) }, () => worker()));
const failed = done.filter((d) => !d.ok);
console.log(`\ncertifiers: ${done.length - failed.length}/${done.length} ok, ${failed.length} failed`);
for (const f of failed) console.log(`  FAILED ${f.id} (${f.stage ?? 'dispatch'})`);
