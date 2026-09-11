import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, utimesSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

import {
  writeAuditorCreatedBaseline,
  certifyAuditorCreatedItems,
} from '../../auditor-created-items.mjs';
import { itemHashJudge } from '../../item-hash.mjs';

const REPO = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

const item = (id: string) => `---\nid: ${id}\nkind: lemma\ntitle: "${id}"\nstatus: draft\ndeps: []\njustified_by: []\nforward_refs: []\n---\n\n## Statement\n\n${id}.\n\n## Proof\n\nImmediate.\n`;

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'auditor-created-'));
  for (const dir of ['items', 'research', 'research/r-dispatch']) mkdirSync(join(root, dir), { recursive: true });
  writeFileSync(join(root, 'items', 'lem-base.md'), item('lem-base'));
  writeFileSync(join(root, 'research', 'r-batch-1.pages.json'), JSON.stringify([
    { id: 'page-a', category: 'cat', items: [{ id: 'lem-base', deps: [] }] },
  ]));
  writeFileSync(join(root, 'research', 'r-batch-1.proof-contracts.json'), JSON.stringify({
    version: 1, contracts: { 'lem-base': { risk: 'low' } },
  }));
  return root;
}

test('auditor-created certification is baseline-exclusive, dispatch-backed, and hash-bound', () => {
  const root = fixture();
  writeAuditorCreatedBaseline(root, 'r', 8);
  const created = item('lem-created');
  writeFileSync(join(root, 'items', 'lem-created.md'), created);
  writeFileSync(join(root, 'research', 'r-batch-1.pages.json'), JSON.stringify([
    { id: 'page-a', category: 'cat', items: [
      { id: 'lem-base', deps: [] }, { id: 'lem-created', deps: ['lem-base'] },
    ] },
  ]));
  writeFileSync(join(root, 'research', 'r-batch-1.proof-contracts.json'), JSON.stringify({
    version: 1, contracts: { 'lem-base': { risk: 'low' }, 'lem-created': { risk: 'low' } },
  }));
  const authoredAt = new Date('2025-01-01T00:00:00.000Z');
  utimesSync(join(root, 'items', 'lem-created.md'), authoredAt, authoredAt);
  utimesSync(join(root, 'research', 'r-batch-1.pages.json'), authoredAt, authoredAt);
  writeFileSync(join(root, 'research', 'r-dispatch', 'alpha-step8-lead.result.json'), JSON.stringify({
    run: 'r', role: 'alpha', label: 'step8-lead', covers: ['all'], ok: true,
    started_at: '2020-01-01T00:00:00.000Z', ended_at: '2030-01-01T00:00:00.000Z',
  }));
  const receipt = certifyAuditorCreatedItems(root, 'r', 8);
  assert.deepEqual(receipt.items.map((row: any) => row.id), ['lem-created']);
  assert.equal(receipt.items[0].judge_sha256, itemHashJudge(created));

  writeFileSync(join(root, 'items', 'lem-created.md'), `${created}\nLater unreviewed edit.\n`);
  const staleAt = new Date('2040-01-01T00:00:00.000Z');
  utimesSync(join(root, 'items', 'lem-created.md'), staleAt, staleAt);
  assert.throws(() => certifyAuditorCreatedItems(root, 'r', 8), /no successful Step 8/);
});

test('an item file already present at the baseline cannot be relabelled auditor-created', () => {
  const root = fixture();
  writeFileSync(join(root, 'items', 'lem-preexisting.md'), item('lem-preexisting'));
  writeAuditorCreatedBaseline(root, 'r', 7);
  const manifest = JSON.parse(readFileSync(join(root, 'research', 'r-batch-1.pages.json'), 'utf8'));
  manifest[0].items.push({ id: 'lem-preexisting', deps: [] });
  writeFileSync(join(root, 'research', 'r-batch-1.pages.json'), JSON.stringify(manifest));
  writeFileSync(join(root, 'research', 'r-dispatch', 'alpha-adjudicate-step7-a.result.json'), JSON.stringify({
    run: 'r', role: 'alpha-adjudicate', label: 'step7-a', covers: ['1'], ok: true,
    started_at: '2000-01-01T00:00:00.000Z', ended_at: '2100-01-01T00:00:00.000Z',
  }));
  assert.throws(() => certifyAuditorCreatedItems(root, 'r', 7), /existed on disk before Step 7/);
});

test('judge closure counts a current auditor-created receipt without fabricating a verdict', () => {
  const root = mkdtempSync(join(tmpdir(), 'auditor-closure-'));
  const id = 'def-algebra-of-subsets';
  const source = readFileSync(join(REPO, 'items', `${id}.md`), 'utf8');
  const manifest = join(root, 'scope.pages.json');
  const ledger = join(root, 'judge.jsonl');
  const cert = join(root, 'cert.json');
  const out = join(root, 'closure.json');
  writeFileSync(manifest, JSON.stringify([{ id: 'page', items: [{ id }] }]));
  writeFileSync(ledger, '');
  writeFileSync(cert, JSON.stringify({
    version: 1, run: 'r', step: 8, policy: 'auditor-created-stage-bypass-v1',
    items: [{ id, judge_sha256: itemHashJudge(source), author_result: 'alpha-step8-lead.result.json' }],
  }));
  const result = spawnSync(process.execPath, [join(REPO, 'tools', 'level-coverage.mjs'),
    '--judge-only', '--verify-current-context', '--judge-ledger', ledger,
    '--auditor-certifications', cert, '--out', out, manifest],
  { cwd: REPO, encoding: 'utf8', timeout: 60_000 });
  assert.equal(result.status, 0, result.stderr);
  const closure = JSON.parse(readFileSync(out, 'utf8'));
  assert.equal(closure.closed, true);
  assert.deepEqual(closure.auditor_certified, [id]);
  assert.equal(closure.verdicts_complete, 1);
  assert.deepEqual(closure.needs_rejudge, []);
});
