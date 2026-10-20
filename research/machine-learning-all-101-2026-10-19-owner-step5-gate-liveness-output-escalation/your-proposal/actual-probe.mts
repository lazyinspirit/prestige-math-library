import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { runGate } from '/tmp/ledger-output-proposal-MxSz4k/tools/autopilot/src/gates.mts';
import { frontierGateBattery } from '/tmp/ledger-output-proposal-MxSz4k/tools/step5-frontier-gate.mjs';
const repo = process.cwd(), run = 'machine-learning-all-101-2026-10-19';
const outDir = `${repo}/research/${run}-owner-step5-gate-liveness-output-escalation/your-proposal`;
const hash = x => createHash('sha256').update(x).digest('hex');
const summaries = [];
for (const [label, tool, scoped] of [
  ['baseline-scoped', 'tools/defect-ledger.mjs', true],
  ['proposed-scoped', '/tmp/ledger-output-proposal-MxSz4k/tools/defect-ledger.mjs', true],
  ['baseline-unscoped', 'tools/defect-ledger.mjs', false],
]) {
  const original = { id: 'defect-ledger', argv: [process.execPath, tool, 'check', '--run', run,
    '--adjudications', `research/${run}-judge-adjudications.jsonl`,
    '--reader-decisions', `research/${run}-step5-alert-decisions.jsonl`,
    '--closure', `research/${run}-judge-closure.json`],
    liveness: { pattern: /(\d+) defect row\(s\) checked/.source, min: 1, unit: 'defect rows' } };
  const gate = scoped ? frontierGateBattery({ repo, run }, [original])[0] : original;
  const result = await runGate(gate, { cwd: repo });
  writeFileSync(`${outDir}/${label}-gate-result.json`, JSON.stringify(result));
  const prefix = 'Step 5 outside findings excluded, not passed: ';
  let excluded = null;
  try { excluded = JSON.parse(result.output.split('\n').find(x => x.startsWith(prefix)).slice(prefix.length)); } catch {}
  summaries.push({ label, ok: result.ok, code: result.code, checked: result.checked,
    why: result.why, output_chars: result.output.length, output_sha256: hash(result.output),
    exact_raw_output: result.rawOutput === result.output, summary: result.output.match(/defect-ledger: \d+ defect row\(s\) checked[^\n]*/)?.[0] ?? null,
    excluded_count: excluded?.length ?? null,
    excluded_kinds: excluded?.reduce((acc, x) => { acc[x.kind] = (acc[x.kind] ?? 0) + 1; return acc; }, {}) ?? null });
  writeFileSync(`${outDir}/actual-probe-summary.json`, JSON.stringify(summaries, null, 2));
  console.log(JSON.stringify(summaries.at(-1)));
}
