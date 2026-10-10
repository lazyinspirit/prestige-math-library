import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { writeProofLayout } from './proof-layout.mjs';

const tool = fileURLToPath(new URL('./step8-report.mjs', import.meta.url));
const original = {
  defect_id: 'demo-original', run: 'demo', at: '2026-10-10',
  subject: 'thm-a', class: 'accuracy', subclass: 'invalid-inference',
  severity: 'fatal', location: 'proof-step', disposition: 'open',
  caught_at_stage: '7-adjudicate', caught_by_role: 'judge-terra',
};

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'physics-step8-history-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['research', 'items', 'library/analysis']) mkdirSync(join(root, dir), { recursive: true });
  const json = (name, value) => writeFileSync(join(root, 'research', name), JSON.stringify(value));
  json('demo-scope-ledger.json', { pages: [{ id: 'page-a', kind: 'A', batch: '1' }] });
  writeFileSync(join(root, 'library/analysis/page-a.md'), '---\npage: page-a\nitems: [thm-a]\n---\nPage\n');
  writeFileSync(join(root, 'items/thm-a.md'), '---\nid: thm-a\nkind: theorem\nstatus: draft\n---\n## Proof\n\n1.1 A fixture argument. [given]\n\n1.2 Its conclusion. [step 1.1] ∎\n');
  json('demo-publication-readiness.json', {
    run: 'demo', verdict: 'publishable-pending-owner-approval', workflow_owned_blockers: [],
    owner_actions_remaining: [], content_sha256: 'fixture-content',
  });
  json('demo-judge-closure.json', { judge_lineup: 'sol', closed: true,
    scope: 1, verdicts_complete: 1, needs_rejudge: [], unadjudicated: [], open_fatal: [] });
  json('demo-pathway-closure.json', { briefs: [] });
  json('demo-touches.json', { snapshots: [{ hashes: { 'thm-a': 'fixture' } }] });
  for (const name of ['demo-judge.jsonl', 'demo-judge-adjudications.jsonl']) writeFileSync(join(root, 'research', name), '');
  writeProofLayout('demo', root);
  return {
    root,
    ledger: join(root, 'research/defect-ledger.jsonl'),
    setRows(rows) {
      writeFileSync(this.ledger, rows.map(row => JSON.stringify(row)).join('\n') + '\n');
    },
    run(command) {
      return spawnSync(process.execPath, [tool, command, '--run', 'demo', '--root', root], { encoding: 'utf8' });
    },
    evidence() { return JSON.parse(readFileSync(join(root, 'research/demo-step8-evidence.json'))); },
  };
}

test('evidence and rendering preserve every fatal history row and its literal disposition', t => {
  const f = fixture(t);
  for (const disposition of ['deferred', 'fixed']) {
    const binding = { ...original, defect_id: 'demo-binding', supersedes: [original.defect_id] };
    const current = { ...original, defect_id: 'demo-current', supersedes: [binding.defect_id], disposition };
    const outside = { ...original, defect_id: 'outside-current', subject: 'thm-outside', disposition: 'deferred' };
    f.setRows([original, binding, current, outside]);
    const before = readFileSync(f.ledger);
    const built = f.run('evidence');
    assert.equal(built.status, 0, built.stderr);
    const e = f.evidence();
    assert.equal(e.defects.total_rows, 4);
    assert.equal(e.defects.fatal_count, 4);
    assert.equal(e.defects.active_rows, 2);
    assert.equal(e.defects.historical_rows, 2);
    assert.equal(e.defects.active_fatal_count, 2);
    assert.equal(e.defects.historical_fatal_count, 2);
    const historical = e.defects.fatal.find(row => row.defect_id === original.defect_id);
    assert.equal(historical.disposition, 'open');
    assert.equal(historical.ownership_status, 'superseded');
    assert.deepEqual(historical.current_owners, ['demo-current']);
    assert.equal(e.defects.fatal.find(row => row.defect_id === 'outside-current').disposition, 'deferred');
    assert.equal(f.run('check-evidence').status, 0);
    writeFileSync(join(f.root, 'research/demo-step8-report.response.json'), JSON.stringify({
      version: 2, readiness_verdict: 'publishable-pending-owner-approval',
      executive_summary: 'The fixture preserves the complete defect history and current ownership.',
      caveats: [], owner_reading_priorities: [], recommendations: [],
    }));
    const rendered = f.run('render');
    assert.equal(rendered.status, 0, rendered.stderr);
    const report = readFileSync(join(f.root, 'research/demo-step8-report.md'), 'utf8');
    assert.match(report, /recorded 4 fatal defect row/);
    assert.match(report, /demo-original.*\| open \| historical; superseded by demo-current/);
    assert.match(report, /outside-current.*\| deferred \| active/);
    assert.equal(report.split('\n').filter(line => /^\| (demo-original|demo-binding|demo-current|outside-current) \|/.test(line)).length, 4);
    assert.deepEqual(readFileSync(f.ledger), before);
  }
});

test('active fatal and nonfatal open rows still reject evidence despite a closed readiness receipt', t => {
  const f = fixture(t);
  for (const severity of ['fatal', 'nonfatal']) {
    f.setRows([{ ...original, severity }]);
    const built = f.run('evidence');
    assert.notEqual(built.status, 0);
    assert.match(built.stderr, /open active row/);
  }
});

test('invalid supersession cannot hide an open observation', t => {
  const f = fixture(t);
  for (const changes of [{ subject: 'thm-other' }, { supersedes: ['future-row'] },
    { supersedes: [original.defect_id, original.defect_id] }]) {
    f.setRows([original, { ...original, defect_id: 'demo-current',
      supersedes: [original.defect_id], disposition: 'fixed', ...changes }]);
    const built = f.run('evidence');
    assert.notEqual(built.status, 0);
    assert.match(built.stderr, /defect ledger validation failed/);
    assert.match(built.stderr, /same run and subject|supersedes/);
  }
});

test('malformed historical rows remain errors even after a valid repaired successor', t => {
  const f = fixture(t);
  for (const changes of [{ subject: '' }, { at: '' }, { severity: 'imaginary' }]) {
    const previous = { ...original, ...changes };
    f.setRows([previous, { ...previous, defect_id: 'demo-current',
      supersedes: [original.defect_id], disposition: 'fixed', at: original.at, severity: 'fatal' }]);
    const built = f.run('evidence');
    assert.notEqual(built.status, 0);
    assert.match(built.stderr, /defect ledger validation failed/);
  }
});
