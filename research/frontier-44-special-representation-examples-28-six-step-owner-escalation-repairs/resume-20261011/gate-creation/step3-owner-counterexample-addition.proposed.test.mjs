import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  writeAuditorCreatedBaseline, recordOwnerCreation, certifyAuditorCreatedItems,
} from './auditor-created-items.mjs';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { isCertifiedOwnerCounterexampleAddition as allowed } from './step3-owner-counterexample-addition.mjs';
import { isCertifiedOwnerContextAddition } from './step3-owner-context-addition.mjs';

const sha = value => createHash('sha256').update(value).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])]))
    : value;
const hashValue = value => sha(JSON.stringify(canonical(value)));

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'owner-cex-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const directory of ['items', 'research']) mkdirSync(join(root, directory));
  const write = (path, value) => writeFileSync(join(root, path),
    typeof value === 'string' ? value : JSON.stringify(value));
  const id = 'cex-genuine';
  const entry = {
    id, kind: 'counterexample', deps: [],
    provenance: { statement: 'ai-generated', proof: 'ai-generated' },
    generation: { role: 'counterexample' },
  };
  const text = `---
id: ${id}
kind: counterexample
status: draft
pipeline_run: r
deps: []
provenance: {statement: ai-generated, proof: ai-generated}
generation: {role: counterexample}
---
## Statement refuted

Every integer is zero.

## Counterexample

**Given:** The integer 1.

1.1 The integer 1 is nonzero. [given]

2.1 Therefore the universal assertion fails. [step 1.1] ∎
`;
  write('research/r-batch-1.pages.json', [{ id: 'p', items: [] }]);
  writeAuditorCreatedBaseline(root, 'r', 3);
  const baseline = JSON.parse(readFileSync(join(root, 'research/r-step3-auditor-baseline.json')));
  write(`items/${id}.md`, text);
  write('research/r-batch-1.pages.json', [{ id: 'p', items: [entry] }]);
  const contract = { claim: 'Every integer is zero', derivation: [{ claim: '1 is nonzero' }] };
  write('research/r-batch-1.proof-contracts.json', { contracts: { [id]: contract } });
  const carriers = {
    guard_sha256: itemHashGuard(text), judge_sha256: itemHashJudge(text),
    item_file_sha256: sha(text), manifest_sha256: hashValue({ ...entry, __step4_page_id: 'p' }),
    contract_sha256: hashValue(contract),
  };
  carriers.step3_subject_sha256 = hashValue({
    item_sha256: sha(text), manifest_sha256: carriers.manifest_sha256,
    contract_sha256: carriers.contract_sha256,
  });
  const sources = ['assignment', 'authorship', 'escalation'].map(role => {
    const path = `research/${role}.txt`, bytes = `r ${id} /root/author held-gap ${role}`;
    write(path, bytes);
    return { role, path, sha256: sha(bytes) };
  });
  write('research/evidence.json', {
    version: 1, policy: 'owner-spawned-step3-creation-v1',
    evidence_class: 'owner-spawned-creation', run: 'r', step: 3, id,
    owner: true, owner_identity: '/root',
    author: { identity: '/root/author', timeline: {
      mode: 'unknown', after_baseline: true, reason: 'Unknown exact original timeline',
    } },
    attested_at: new Date().toISOString(), reason: 'Actual local owner creation',
    owner_held_escalation: 'held-gap', baseline_sha256: sha(JSON.stringify(baseline)),
    page: 'p', batch: '1', carriers, sources,
  });
  recordOwnerCreation(root, 'r', 3, id, 'research/evidence.json');
  certifyAuditorCreatedItems(root, 'r', 3);
  const args = { root, run: 'r', id, batch: '1', manifestRows: [{ ...entry, batch: '1' }] };
  return { root, write, id, text, entry, args };
}

test('accepts genuinely registered owner counterexample with exact native current certificates', t => {
  const f = fixture(t);
  assert.equal(allowed(f.args), true);
});

test('cannot use wrong run, batch, role, kind, or provenance as an exception', t => {
  const f = fixture(t);
  assert.equal(allowed({ ...f.args, run: 'other' }), false);
  assert.equal(allowed({ ...f.args, batch: '2' }), false);
  for (const delta of [
    { generation: {} }, { kind: 'theorem' }, { provenance: { statement: 'literature-derived' } },
  ]) {
    assert.equal(allowed({ ...f.args,
      manifestRows: [{ ...f.entry, batch: '1', ...delta }],
    }), false);
  }
});

test('rejects manifest or source-only logical consumers', t => {
  const f = fixture(t);
  f.write('items/lem-consumer.md', '---\nid: lem-consumer\nkind: lemma\ndeps: []\n---\n');
  assert.equal(allowed({ ...f.args, manifestRows: [
    ...f.args.manifestRows, { id: 'lem-consumer', deps: [f.id], batch: '1' },
  ] }), false);
  f.write('items/lem-consumer.md', `---\nid: lem-consumer\nkind: lemma\ndeps: [${f.id}]\n---\n`);
  assert.equal(allowed({ ...f.args, manifestRows: [
    ...f.args.manifestRows, { id: 'lem-consumer', deps: [], batch: '1' },
  ] }), false);
});

test('stale carrier or origin evidence fails native validation', t => {
  const f = fixture(t);
  f.write(`items/${f.id}.md`, `${f.text}\nChanged.\n`);
  assert.throws(() => allowed(f.args), /stale/);
  f.write(`items/${f.id}.md`, f.text);
  f.write('research/authorship.txt', 'changed origin');
  assert.throws(() => allowed(f.args), /stale owner creation source/);
});

test('missing or fabricated native certificate cannot confer acceptance', t => {
  const f = fixture(t);
  rmSync(join(f.root, 'research/r-step3-auditor-certifications.json'));
  assert.equal(allowed(f.args), false);
  f.write('research/r-step3-auditor-certifications.json', {
    version: 1, run: 'r', step: 3, policy: 'auditor-created-stage-bypass-v2',
    baseline_sha256: '0'.repeat(64), items: [{ id: f.id, evidence_class: 'owner-spawned-creation' }],
  });
  assert.throws(() => allowed(f.args), /identity/);
});

test('an empty or unproved refutation and published carrier cannot qualify', t => {
  const f = fixture(t);
  for (const text of [
    f.text.replace('## Counterexample', '## Remarks'), f.text.replace('∎', ''),
    f.text.replace('status: draft', 'status: published'),
    f.text.replace('proof: ai-generated', 'proof: not-supplied'),
  ]) {
    f.write(`items/${f.id}.md`, text);
    assert.equal(allowed(f.args), false);
  }
});

test('existing owner Remark exception retains its separate restrictions', () => {
  const id = 'rem-context';
  const input = {
    id, batch: '2', run: 'r',
    item: { id, kind: 'remark', status: 'draft', pipeline_run: 'r', proved_here: false,
      provenance: { proof: 'not-supplied' } },
    certificates: [{ id, batch: '2', evidence_class: 'owner-spawned-creation',
      owner_creation: { path: `research/r-step3-owner-creation-${id}.json`, sha256: 'a'.repeat(64) } }],
  };
  assert.equal(isCertifiedOwnerContextAddition(input), true);
  assert.equal(isCertifiedOwnerContextAddition({ ...input, certificates: [] }), false);
  assert.equal(isCertifiedOwnerContextAddition({ ...input, item: { ...input.item, kind: 'counterexample' } }), false);
  assert.equal(isCertifiedOwnerContextAddition({ ...input, item: { ...input.item, pipeline_run: 'other' } }), false);
});
