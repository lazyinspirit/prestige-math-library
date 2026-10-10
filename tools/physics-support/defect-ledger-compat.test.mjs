import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { taxonomyOwnership, rowSha256 } from './defect-ledger-taxonomy.mjs';

const tool = new URL('./defect-ledger.mjs', import.meta.url).pathname;
const original = {
  defect_id: 'physics-operational-objects', run: 'physics-run', at: '2026-10-09',
  class: 'accuracy', subclass: 'undefined-operational-terms', severity: 'nonfatal',
  location: 'Setup, Procedure and Uncertainty', subject: 'exp-test',
  caught_at_stage: '5a-adjudicate', caught_by_role: 'group-alpha', disposition: 'fixed',
};
const correction = {
  ...original, defect_id: 'physics-operational-objects-taxonomy',
  subclass: 'undefined-notation', location: 'definition',
  supersedes: [original.defect_id],
};

function fixture(t, rows) {
  const cwd = mkdtempSync(join(tmpdir(), 'physics-ledger-compat-'));
  t.after(() => rmSync(cwd, { recursive: true, force: true }));
  mkdirSync(join(cwd, 'research'));
  const ledger = join(cwd, 'research', 'defect-ledger.jsonl');
  writeFileSync(ledger, rows.map(row => JSON.stringify(row)).join('\n') + '\n');
  const run = args => spawnSync(process.execPath, [tool, ...args], { cwd, encoding: 'utf8' });
  return { cwd, ledger, run };
}

test('only a valid canonical successor admits original physics taxonomy as history', t => {
  const f = fixture(t, [original]);
  assert.match(f.run(['validate', '--run', original.run]).stderr, /outside the closed enum/);
  writeFileSync(join(f.cwd, 'incoming.json'), JSON.stringify(correction));
  const before = readFileSync(f.ledger, 'utf8');
  const appended = f.run(['append', '--file', 'incoming.json']);
  assert.equal(appended.status, 0, appended.stderr);
  assert.ok(readFileSync(f.ledger, 'utf8').startsWith(before), 'original bytes remain unchanged');
  const validated = f.run(['validate', '--run', original.run]);
  assert.equal(validated.status, 0, validated.stderr);
});

test('supersession cannot conceal unrelated subjects or malformed historical metadata', t => {
  const wrongSubject = fixture(t, [original, { ...correction, subject: 'exp-other' }]);
  const refused = wrongSubject.run(['validate']);
  assert.notEqual(refused.status, 0);
  assert.match(refused.stderr, /same run and subject/);
  assert.match(refused.stderr, /outside the closed enum/);
  const badHistory = fixture(t, [{ ...original, severity: 'imaginary' }, correction]);
  assert.match(badHistory.run(['validate']).stderr, /severity "imaginary" outside the closed enum/);
});

test('new appends cannot reuse noncanonical historical labels', t => {
  const f = fixture(t, [original, correction]);
  writeFileSync(join(f.cwd, 'incoming.json'), JSON.stringify({
    ...original, defect_id: 'new-physics-defect', supersedes: [correction.defect_id],
  }));
  const before = readFileSync(f.ledger, 'utf8');
  const refused = f.run(['append', '--file', 'incoming.json']);
  assert.notEqual(refused.status, 0);
  assert.match(refused.stderr, /outside the closed enum/);
  assert.equal(readFileSync(f.ledger, 'utf8'), before);
});

const metadataSuccessor = (prior, changes, id = `${prior.defect_id}-taxonomy`) => ({
  ...prior, ...changes, defect_id: id, supersedes: [prior.defect_id],
  metadata_correction: {
    kind: 'taxonomy-only', original_defect_id: prior.defect_id,
    original_row_sha256: rowSha256(prior), corrected_fields: Object.keys(changes),
  },
});

test('sealed IDs resolve through a valid taxonomy-only chain, retaining all substantive fields', () => {
  const first = metadataSuccessor(original, { subclass: 'undefined-notation', location: 'definition' });
  const second = metadataSuccessor(first, { location: 'statement' }, `${first.defect_id}-v2`);
  const errors = [];
  const ownership = taxonomyOwnership([original, first, second], errors);
  assert.deepEqual(errors, []);
  assert.equal(ownership.resolveDefectId(original.defect_id), second.defect_id);
  assert.equal(ownership.resolveDefectId(first.defect_id), second.defect_id);
  assert.deepEqual(ownership.activeRows, [second]);
});

test('forged hashes, substantive changes and invalid correction chains fail closed', () => {
  const valid = metadataSuccessor(original, { subclass: 'undefined-notation', location: 'definition' });
  const mutations = [
    row => { row.metadata_correction.original_row_sha256 = '0'.repeat(64); },
    row => { row.disposition = 'false-positive'; },
    row => { row.subject = 'exp-other'; },
    row => { row.evidence = [{ path: 'forged-report.md' }]; },
    row => { row.caught_by_role = 'owner'; },
    row => { row.at = '2026-10-10'; },
    row => { row.metadata_correction.kind = 'substantive-repair'; },
    row => { row.metadata_correction.corrected_fields.push('disposition'); },
    row => { row.supersedes = ['future-row']; },
  ];
  for (const mutate of mutations) {
    const changed = structuredClone(valid);
    mutate(changed);
    const errors = [];
    const ownership = taxonomyOwnership([original, changed], errors);
    assert.ok(errors.length, JSON.stringify(changed));
    assert.notEqual(ownership.resolveDefectId(original.defect_id), changed.defect_id);
  }
});

test('ordinary substantive supersession never supplies a sealed old-ID alias', () => {
  const substantive = { ...correction, disposition: 'narrowed' };
  const errors = [];
  const ownership = taxonomyOwnership([original, substantive], errors);
  assert.deepEqual(errors, []);
  assert.equal(ownership.resolveDefectId(original.defect_id), null);
  assert.equal(ownership.resolveDefectId(substantive.defect_id), substantive.defect_id);
});

test('native append rejects a forged taxonomy-only successor without changing ledger bytes', t => {
  const f = fixture(t, [original]);
  const forged = metadataSuccessor(original, { subclass: 'undefined-notation', location: 'definition' });
  forged.disposition = 'false-positive';
  writeFileSync(join(f.cwd, 'incoming.json'), JSON.stringify(forged));
  const before = readFileSync(f.ledger, 'utf8');
  const refused = f.run(['append', '--file', 'incoming.json']);
  assert.notEqual(refused.status, 0);
  assert.match(refused.stderr, /invalid or ambiguous taxonomy-only correction lineage/);
  assert.equal(readFileSync(f.ledger, 'utf8'), before);
});
