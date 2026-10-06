import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { recordOwnerCreation } from './auditor-created-items.mjs';
import { recordOwnerIdMigrations, loadOwnerIdMigrations } from './step5-owner-id-migrations.mjs';
const sha = x => createHash('sha256').update(x).digest('hex');
const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
const hash = x => sha(JSON.stringify(canonical(x)));
const run = 'r', old = 'thm-original-orientation', id = 'rem-recorded-orientation', page = 'orientation';
function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'step5-owner-id-'));
  for (const dir of ['research', 'items']) mkdirSync(join(root, dir));
  const put = (path, x) => writeFileSync(join(root, path), typeof x === 'string' ? x : JSON.stringify(x, null, 2) + '\n');
  const link = path => ({ path, sha256: sha(readFileSync(join(root, path))) });
  const claim = 'The complete original classification claim.\nIncluding the full second line and hypotheses.';
  const source = 'sources:\n  references:\n    - title: Original source\n      url: https://example.org/source\n';
  const original = `---\nid: ${old}\nkind: theorem\nprovenance:\n  statement: literature-derived\n  proof: not-supplied\nverification:\n  precheck: n/a\n${source}---\n\n## Statement\n\n${claim}\n\n## Remarks\n\nNo proof supplied.\n`;
  put('research/original.md', original);
  const text = `---\nid: ${id}\nkind: remark\npipeline_run: r\nproved_here: false\naliases: [${old}]\nprovenance:\n  statement: literature-derived\n  proof: not-supplied\nverification:\n  precheck: n/a\n${source}external_dependency:\n  source_url: https://example.org/source\n  exact_statement: ${JSON.stringify(claim)}\n  local_proof_attempt: No proof supplied; exact unmet prerequisites.\n  necessity: Orientation with no logical consumers.\n---\n\n## Remark\n\n${claim}\n\nRecorded without proof.\n`;
  put(`items/${id}.md`, text);
  const entry = { id, kind: 'remark', proved_here: false, aliases: [old], statement: claim };
  put('research/r-batch-1.pages.json', [{ id: page, category: 'test', items: [entry] }]);
  put('research/r-batch-1.proof-contracts.json', { scope: [id], contracts: { [id]: {} } });
  const before = { page, batch: '1', item_file_sha256: sha(original), manifest_sha256: 'a'.repeat(64), contract_sha256: 'b'.repeat(64) };
  const baseline = { version: 1, run, step: 5, policy: 'auditor-created-stage-bypass-v1', at: '2026-01-01T00:00:00Z', items: [{ id: old, page, batch: '1' }], existing_item_files: [old], item_carriers: { [old]: before } };
  put('research/r-step5-auditor-baseline.json', baseline);
  for (const label of ['pre', 'post']) put(`research/r-step5-hash-1-${label}.json`, { version: 2, run, batch: '1', label, manifest: [old], hashes: { [old]: { item_sha256: sha(original), manifest_sha256: before.manifest_sha256, contract_sha256: before.contract_sha256 } } });
  put('research/evidence.md', `Actual owner assignment and authorship evidence for r ${id}, /root/author, reader:1:1. Explicit creation after baseline.`);
  const carrier = { item_sha256: sha(text), manifest_sha256: hash({ ...entry, __step6_page_id: page }), contract_sha256: hash({}) };
  const creation = { version: 1, policy: 'owner-spawned-step5-creation-v1', evidence_class: 'owner-spawned-creation', run, step: 5, id, page, batch: '1', owner: true, owner_identity: '/root', author: { identity: '/root/author', timeline: { mode: 'unknown', after_baseline: true, reason: 'No exact interval recorded.' } }, attested_at: '2026-01-02T00:00:00Z', reason: 'Actual owner source-only correction.', owner_held_escalation: 'reader:1:1', baseline_sha256: sha(JSON.stringify(baseline)), carriers: { guard_sha256: itemHashGuard(text), judge_sha256: itemHashJudge(text), item_file_sha256: carrier.item_sha256, manifest_sha256: carrier.manifest_sha256, contract_sha256: carrier.contract_sha256, step5_subject_sha256: hash(carrier) }, sources: ['assignment', 'escalation', 'authorship'].map(role => ({ role, ...link('research/evidence.md') })) };
  put('research/creation.json', creation);
  recordOwnerCreation(root, run, 5, id, 'research/creation.json');
  const doc = { version: 1, policy: 'owner-step5-unproved-orientation-id-migration-v1', run, step: 5, owner: true, owner_identity: '/root', authorized_at: '2026-01-03T00:00:00Z', reason: 'Explicit owner schema-only unproved orientation correction after readers, preserving the entire claim.', baseline: link('research/r-step5-auditor-baseline.json'), migrations: [{ old_id: old, new_id: id, page, batch: '1', source_only: true, after_readers: true, logical_consumers: [], exact_statement: claim, original: link('research/original.md'), current_item_sha256: sha(text), pre_reader: link('research/r-step5-hash-1-pre.json'), post_reader: link('research/r-step5-hash-1-post.json'), owner_creation: link(`research/r-step5-owner-creation-${id}.json`) }] };
  put('research/migration.json', doc);
  recordOwnerIdMigrations(root, run, 'research/migration.json');
  return { root, put, link, doc, original, text, cleanup: () => rmSync(root, { recursive: true, force: true }) };
}
test('valid owner correction preserves historical IDs and stamps their current Remark carrier', () => {
  const f = fixture(); try {
    assert.equal(loadOwnerIdMigrations(f.root, run)[0].new_id, id);
    f.put('research/r-alpha-groups.json', [{ label: 'a', covers: ['1'] }]);
    f.put('research/r-step5-scope-1.json', { version: 2, touched: [], pages_touched: [], reader_findings: [{ obligation: 'reader:1:1', id: old }], refuter_findings: [] });
    f.put('research/r-alpha-batch-1-5a-decisions.json', { decisions: [{ obligation: 'reader:1:1', id: old, route: 'reader' }] });
    const result = spawnSync(process.execPath, [join(import.meta.dirname, 'step5-scope.mjs'), 'stamp', '--root', f.root, '--run', run], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const decision = JSON.parse(readFileSync(join(f.root, 'research/r-alpha-batch-1-5a-decisions.json'))).decisions[0];
    assert.equal(decision.id, old);
    const entry = JSON.parse(readFileSync(join(f.root, 'research/r-batch-1.pages.json')))[0].items[0];
    assert.equal(decision.subject_sha256, hash({ item_sha256: sha(f.text),
      manifest_sha256: hash({ ...entry, __step6_page_id: page }), contract_sha256: hash({}) }));
    assert.deepEqual(JSON.parse(readFileSync(join(f.root, 'research/r-step5-hash-1-post.json'))).manifest, [old]);
    rmSync(join(f.root, 'research/r-step5-owner-id-migrations.json'));
    const unregistered = spawnSync(process.execPath, [join(import.meta.dirname, 'step5-scope.mjs'), 'stamp', '--root', f.root, '--run', run], { encoding: 'utf8' });
    assert.notEqual(unregistered.status, 0);
    assert.match(unregistered.stderr, /has no current carrier/);
  } finally { f.cleanup(); }
});
for (const [name, mutate, pattern] of [
  ['lost full claim', f => { const text = f.text.replaceAll('complete original', 'weakened'); f.put(`items/${id}.md`, text); f.doc.migrations[0].current_item_sha256 = sha(text); }, /lost claim/],
  ['actual proved theorem', f => { f.put('research/original.md', f.original.replace('not-supplied', 'literature-derived')); f.doc.migrations[0].original = f.link('research/original.md'); }, /original is not/],
  ['logical consumer', f => f.put('items/lem-consumer.md', `---\nid: lem-consumer\ndeps: [${id}]\n---\n`), /logical consumer/],
  ['logical consumer through old alias', f => f.put('items/lem-consumer.md', `---\nid: lem-consumer\ndeps: [${old}]\n---\n`), /logical consumer/],
  ['undeclared linked mention', f => f.put('items/rem-mention.md', `---\nid: rem-mention\n---\n\n[[${id}]]\n`), /mention must use external_refs/],
  ['tampered old archive', f => f.put('research/original.md', f.original + 'tampered'), /Tampered migration source/],
  ['wrong-run creation', f => { const p = `research/r-step5-owner-creation-${id}.json`; const x = JSON.parse(readFileSync(join(f.root, p))); x.run = 'wrong'; f.put(p, x); f.doc.migrations[0].owner_creation = f.link(p); }, /invalid owner creation attestation/],
  ['lost alias', f => { const text = f.text.replace(`aliases: [${old}]`, 'aliases: []'); f.put(`items/${id}.md`, text); f.doc.migrations[0].current_item_sha256 = sha(text); }, /lost claim/],
  ['reader deletion', f => { const p = 'research/r-step5-hash-1-post.json'; const x = JSON.parse(readFileSync(join(f.root, p))); x.manifest = []; f.put(p, x); f.doc.migrations[0].post_reader = f.link(p); }, /cannot excuse a reader deletion/],
  ['unregistered migration', f => { f.doc.owner = false; }, /Invalid owner Step5/],
]) test(`migration fails closed for ${name}`, () => {
  const f = fixture(); try {
    mutate(f); f.put('research/r-step5-owner-id-migrations.json', f.doc);
    assert.throws(() => loadOwnerIdMigrations(f.root, run), pattern);
  } finally { f.cleanup(); }
});
