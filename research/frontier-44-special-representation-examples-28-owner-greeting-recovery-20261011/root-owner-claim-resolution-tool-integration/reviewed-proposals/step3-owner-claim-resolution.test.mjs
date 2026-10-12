import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
const moduleURL = process.env.STEP3_OWNER_CREATION_TEST_MODULE
  ? pathToFileURL(resolve(process.env.STEP3_OWNER_CREATION_TEST_MODULE)).href
  : new URL('./step3-owner-creation.mjs', import.meta.url).href;
const { recordStep3OwnerCreation, recordStep3OwnerClaimResolution,
  loadStep3OwnerCreation, loadStep3OwnerClaimResolution, step3OwnerCreationClaim } = await import(moduleURL);
const decisionsURL = process.env.STEP3_OWNER_CREATION_TEST_MODULE
  ? pathToFileURL(resolve('tools/step3-decisions.mjs')).href
  : new URL('./step3-decisions.mjs', import.meta.url).href;
const { loadStep3, itemHash } = await import(decisionsURL);
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const bytes = path => readFileSync(path);
const json = path => JSON.parse(bytes(path));
const write = (path, value) => writeFileSync(path, typeof value === 'string' ? value : JSON.stringify(value));
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'step3-owner-claim-resolution-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['items', 'research']) mkdirSync(join(root, dir));
  const run = 'fixture', id = 'def-owner-helper', consumer = 'def-helper-consumer';
  const itemPath = join(root, 'items', `${id}.md`), consumerPath = join(root, 'items', `${consumer}.md`);
  const manifestPath = join(root, 'research', `${run}-batch-1.pages.json`);
  const itemText = statement => `---\nid: ${id}\nkind: definition\ntitle: Owner helper\ndeps: []\n---\n\n## Definition\n\n${statement}\n`;
  const pages = [{ id: 'a-page', kind: 'A', companion: 'b-page', order: 1, requires: [],
    items: [{ id, kind: 'definition', title: 'Owner helper', statement: 'Original claim', deps: [] },
      { id: consumer, kind: 'definition', title: 'Consumer', statement: 'Uses helper', deps: [id] }] },
  { id: 'b-page', kind: 'B', companion: 'a-page', order: 2, requires: [], items: [] }];
  write(itemPath, itemText('Original claim'));
  write(consumerPath, `---\nid: ${consumer}\nkind: definition\ndeps: [${id}]\n---\n\n## Definition\n\nUses [[${id}]].\n`);
  write(manifestPath, pages); write(join(root, 'research', 'plan-spec.json'), { pages: [] });
  const baseline = { version: 1, run, policy: 'auditor-authored-step3-bypass-v1', at: '2020-01-01T00:00:00Z',
    items: [], existing_item_files: [], scopes: [] };
  const baselinePath = join(root, 'research', `${run}-step3-auditor-baseline.json`); write(baselinePath, baseline);
  const claim = step3OwnerCreationClaim(loadStep3(root, run), id);
  const mark = path => ({ path: path.slice(root.length + 1), sha256: sha(bytes(path)) });
  const research = (name, value) => { const path = join(root, 'research', name); write(path, value); return mark(path); };
  const originalItem = research('original-item.md', bytes(itemPath).toString());
  const originalManifest = research('fixture-batch-1.pages.json.archive', pages);
  const actor = '/root/fixture_author', escalation = 'fixture-escalation';
  const origin = { version: 1, policy: 'owner-spawned-step3-creation-v1', evidence_class: 'owner-spawned-creation',
    run, step: 3, id, owner: true, owner_identity: '/root', author: { identity: actor,
      timeline: { mode: 'known', started_at: '2020-01-02T00:00:00Z', ended_at: '2020-01-03T00:00:00Z' } },
    attested_at: '2020-01-04T00:00:00Z', reason: 'Fixture creation origin', owner_held_escalation: escalation,
    baseline_sha256: sha(JSON.stringify(baseline)), baseline_file_sha256: sha(bytes(baselinePath)), ...claim,
    sources: [{ role: 'assignment', ...research('assignment.txt', `${run} ${id} /root ${actor}`) },
      { role: 'authorship', ...research('authorship.txt', `${run} ${id} ${actor} ${claim.claim_sha256} ${claim.item_file_sha256}`) },
      { role: 'escalation', ...research('escalation.txt', `${run} ${escalation}`) }] };
  const originEvidence = research('creation-evidence.json', origin);
  recordStep3OwnerCreation(root, run, id, originEvidence.path);
  const originPath = join(root, 'research', `${run}-step3-owner-creation-${id}.json`);
  const originalOriginBytes = bytes(originPath), originalBaselineBytes = bytes(baselinePath);
  const authority = research('authority.json', { run, authorized_by: 'owner', authorization: 'Owner authorizes this fixture claim correction' });
  function update(statement = 'Corrected claim') {
    pages[0].items[0].statement = statement; write(itemPath, itemText(statement)); write(manifestPath, pages);
    const s = loadStep3(root, run), nextClaim = step3OwnerCreationClaim(s, id);
    const review = research('whole-review.json', { version: 1, run, reviewer: '/root/fixture_reviewer',
      current_actual_direct_supplier_guards: { ['items/'+id+'.md']: sha(bytes(itemPath)) },
      current_subject_decisions: [id, consumer].map(key => ({ id: key,
        current_raw_sha256: sha(bytes(join(root, 'items', `${key}.md`))),
        verdict: 'SUFFICIENT_WHOLE_ACTUAL_SUPPLIER_AND_CONSUMER', decision_eligible: true })) });
    const ownerPath = join(root, 'research', `${run}-step3b-owner-${id}.json`);
    write(ownerPath, { version: 2, run, phase: 'item', target: id, decision: 'repaired', owner: true,
      sha256: itemHash(s, id), at: new Date().toISOString(), reason: 'Accepted fixture claim repair', defects: ['claim-correction'] });
    return { version: 1, policy: 'owner-held-step3-creation-claim-resolution-evidence-v1', run, id,
      owner: true, owner_identity: '/root', authorization: authority,
      reason: 'Resolve the corrected fixture claim while retaining the actual immutable original author and baseline',
      origin: mark(originPath), original_item: originalItem, original_manifest: originalManifest,
      current_claim_sha256: nextClaim.claim_sha256, current_item_file_sha256: nextClaim.item_file_sha256,
      supplier_review: review, consumers: [{ id: consumer, item_file_sha256: sha(bytes(consumerPath)), review }],
      owner_decision: mark(ownerPath), previous_resolution: null };
  }
  const evidence = update();
  const record = value => { const source = research('resolution-evidence.json', value); return recordStep3OwnerClaimResolution(root, run, id, source.path); };
  return { root, run, id, consumer, itemPath, consumerPath, manifestPath, baselinePath, originPath,
    originalOriginBytes, originalBaselineBytes, evidence, mark, research, record, update };
}
test('resolution retains actual original author/baseline and binds current repair; reuse is immutable', t => {
  const f = fixture(t);
  assert.throws(() => loadStep3OwnerCreation(f.root, f.run, f.id), /stale owner creation claim identity/);
  const result = f.record(f.evidence); assert.equal(result.reused, false);
  const before = bytes(result.path);
  assert.deepEqual(loadStep3OwnerCreation(f.root, f.run, f.id), json(f.originPath));
  assert.equal(loadStep3OwnerClaimResolution(f.root, f.run, f.id).resolved.claim_sha256, f.evidence.current_claim_sha256);
  assert.deepEqual(bytes(f.originPath), f.originalOriginBytes); assert.deepEqual(bytes(f.baselinePath), f.originalBaselineBytes);
  assert.equal(f.record(f.evidence).reused, true); assert.deepEqual(bytes(result.path), before);
});
test('later proof-only repair uses ordinary current bookkeeping and frozen historical review', t => {
  const f = fixture(t); f.record(f.evidence);
  write(f.itemPath, bytes(f.itemPath).toString() + '\n## Remarks\n\nLater proof-context annotation.\n');
  const s = loadStep3(f.root, f.run), owner = json(resolve(f.root, f.evidence.owner_decision.path));
  owner.sha256 = itemHash(s, f.id); owner.at = new Date().toISOString(); write(resolve(f.root, f.evidence.owner_decision.path), owner);
  write(resolve(f.root, f.evidence.supplier_review.path), { rewritten: true });
  assert.deepEqual(loadStep3OwnerCreation(f.root, f.run, f.id), json(f.originPath));
  owner.decision = 'hold'; write(resolve(f.root, f.evidence.owner_decision.path), owner);
  assert.throws(() => loadStep3OwnerCreation(f.root, f.run, f.id), /ordinary current repaired bookkeeping/);
});
test('subsequent claim changes require a linked immutable resolution and cannot branch', t => {
  const f = fixture(t), first = f.record(f.evidence), firstBytes = bytes(first.path);
  const next = f.update('Second corrected claim');
  assert.throws(() => loadStep3OwnerCreation(f.root, f.run, f.id), /stale owner creation claim identity/);
  assert.throws(() => f.record(next), /previous immutable claim resolution required/);
  next.previous_resolution = f.mark(first.path); const second = f.record(next);
  assert.notEqual(first.path, second.path); assert.deepEqual(bytes(first.path), firstBytes);
  assert.deepEqual(loadStep3OwnerCreation(f.root, f.run, f.id), json(f.originPath));
  const third = f.update('Third corrected claim'); third.previous_resolution = f.mark(first.path);
  assert.throws(() => f.record(third), /refusing a claim resolution branch/);
});
test('an existing resolution cannot be replaced by different owner evidence for the same claim', t => {
  const f = fixture(t), result = f.record(f.evidence), before = bytes(result.path);
  f.evidence.reason = 'A different owner resolution explanation cannot overwrite the already recorded immutable claim history';
  assert.throws(() => f.record(f.evidence), /refusing to replace immutable owner claim resolution/);
  assert.deepEqual(bytes(result.path), before); assert.deepEqual(bytes(f.originPath), f.originalOriginBytes);
});
test('an unchanged original claim cannot obtain a redundant resolution', t => {
  const f = fixture(t), unchanged = f.update('Original claim');
  assert.throws(() => f.record(unchanged), /stale or unchanged resolved claim/);
});
test('matching current and preserved review views agree without inventing another audit', t => {
  const f = fixture(t), review = json(resolve(f.root, f.evidence.supplier_review.path));
  review.original_subjects = [{ id: f.id, current_raw_sha256: f.evidence.current_item_file_sha256,
    preserved_disposition: 'SUFFICIENT_WHOLE_ACTUAL_REVIEW_CURRENT_INPUTS_BOUND', mathematical_hold: false }];
  f.evidence.supplier_review = f.research('matching-review-views.json', review);
  f.record(f.evidence); assert.deepEqual(loadStep3OwnerCreation(f.root, f.run, f.id), json(f.originPath));
});
test('changed original origin is rejected even after a valid current resolution', t => {
  const f = fixture(t); f.record(f.evidence); const origin = json(f.originPath);
  origin.author.timeline.started_at = '2020-01-02T01:00:00Z'; write(f.originPath, origin);
  assert.throws(() => loadStep3OwnerCreation(f.root, f.run, f.id), /Stale resolution source/);
});
test('a later claim cannot silently roll back to original provenance or an older resolution', t => {
  const f = fixture(t), first = f.record(f.evidence);
  const second = f.update('Second corrected claim'); second.previous_resolution = f.mark(first.path); f.record(second);
  f.update('Corrected claim');
  assert.throws(() => loadStep3OwnerCreation(f.root, f.run, f.id), /complete immutable resolution-chain tip/);
  f.update('Original claim');
  assert.throws(() => loadStep3OwnerCreation(f.root, f.run, f.id), /claim reverted to the original/);
});
for (const [name, mutate, error] of [
  ['missing owner authorization', f => { f.evidence.authorization = f.research('bad-authority.json', { run: 'foreign', authorized_by: 'owner', authorization: 'unrelated' }); }, /owner authorization/],
  ['original authored source cannot be substituted', f => { f.evidence.original_item = f.research('wrong-original.md', 'different original'); }, /original authored claim reconstruction/],
  ['original manifest claim cannot be substituted', f => { const pages = json(resolve(f.root, f.evidence.original_manifest.path)); pages[0].items[0].statement = 'invented origin'; f.evidence.original_manifest = f.research('fixture-batch-1.pages.json.fake', pages); }, /original authored claim reconstruction/],
  ['whole supplier acceptance required', f => { const r = json(resolve(f.root, f.evidence.supplier_review.path)); r.current_subject_decisions[0].verdict = 'FORMAT_PASS'; f.evidence.supplier_review = f.research('bad-review.json', r); }, /whole-current mathematical acceptance/],
  ['accepted current source must match', f => { f.evidence.current_item_file_sha256 = '0'.repeat(64); }, /stale or unchanged resolved claim/],
  ['missing direct consumer rejects', f => { f.evidence.consumers = []; }, /missing actual direct-consumer review/],
  ['stale consumer rejects', f => { f.evidence.consumers[0].item_file_sha256 = '0'.repeat(64); }, /unrelated or stale affected consumer/],
  ['unrelated consumer rejects', f => { f.evidence.consumers.push({ id: f.id, item_file_sha256: f.evidence.current_item_file_sha256, review: f.evidence.supplier_review }); }, /unrelated or stale affected consumer/],
  ['stale ordinary input receipt rejects', f => { const d = json(resolve(f.root, f.evidence.owner_decision.path)); d.sha256 = '0'.repeat(64); write(resolve(f.root, f.evidence.owner_decision.path), d); f.evidence.owner_decision = f.mark(resolve(f.root, f.evidence.owner_decision.path)); }, /ordinary current owner repaired receipt/],
  ['home change rejects', f => { const pages = json(f.manifestPath); pages[0].id = 'different-page'; pages[1].companion = 'different-page'; write(f.manifestPath, pages); }, /stale or unchanged resolved claim/],
  ['baseline rewrite rejects', f => { const b = json(f.baselinePath); b.existing_item_files.push(f.id); write(f.baselinePath, b); }, /immutable baseline binding/],
  ['original authorship source tampering rejects', f => { const o = json(f.originPath); write(resolve(f.root, o.sources[1].path), 'invented later authorship'); }, /stale owner creation source/],
  ['original creator cannot be relabelled', f => { const o = json(f.originPath); o.author.identity = '/root/invented_creator'; write(f.originPath, o); f.evidence.origin = f.mark(f.originPath); }, /incomplete owner creation assignment\/authorship\/escalation evidence/],
  ['conflicting preserved review cannot shadow a current approval', f => { const r = json(resolve(f.root, f.evidence.supplier_review.path)); r.original_subjects = [{ id: f.id, current_raw_sha256: f.evidence.current_item_file_sha256, preserved_disposition: 'SUFFICIENT_WHOLE_ACTUAL_REVIEW_CURRENT_INPUTS_BOUND', mathematical_hold: true }]; f.evidence.supplier_review = f.research('conflicting-review.json', r); }, /review does not bind exact accepted current source/],
]) test(name, t => {
  const f = fixture(t); mutate(f); assert.throws(() => f.record(f.evidence), error);
  assert.equal(existsSync(join(f.root, 'research', `${f.run}-step3-owner-claim-resolution-${f.id}-${f.evidence.current_claim_sha256}.json`)), false);
});

test('authentic prerequisite guard rejects new current dependency with stale whole review', t => {
  const f = fixture(t), pages = json(f.manifestPath);
  pages[0].items[0].deps = ['def-prerequisite']; write(f.manifestPath, pages);
  write(join(f.root, 'items', 'def-prerequisite.md'), '---\nid: def-prerequisite\nkind: definition\ndeps: []\n---\n## Definition\nNew unreviewed supplier.\n');
  const ownerPath = resolve(f.root, f.evidence.owner_decision.path), owner = json(ownerPath);
  owner.sha256 = itemHash(loadStep3(f.root, f.run), f.id); write(ownerPath, owner);
  f.evidence.owner_decision = f.mark(ownerPath);
  assert.throws(() => f.record(f.evidence), /missing authentic supplier guard/);
});
test('authentic path-keyed guards reject changed prerequisite bytes despite current owner bookkeeping', t => {
  const f = fixture(t), pages = json(f.manifestPath), supplier = join(f.root, 'items', 'def-prerequisite.md');
  pages[0].items[0].deps = ['def-prerequisite']; write(f.manifestPath, pages);
  write(supplier, '---\nid: def-prerequisite\nkind: definition\ndeps: []\n---\n## Definition\nReviewed supplier.\n');
  const reviewPath = resolve(f.root, f.evidence.supplier_review.path), review = json(reviewPath);
  review.current_actual_direct_supplier_guards['items/def-prerequisite.md'] = sha(bytes(supplier));
  f.evidence.supplier_review = f.research('authentic-input-review.json', review);
  write(supplier, bytes(supplier).toString() + '\nChanged prerequisite.\n');
  const ownerPath = resolve(f.root, f.evidence.owner_decision.path), owner = json(ownerPath);
  owner.sha256 = itemHash(loadStep3(f.root, f.run), f.id); write(ownerPath, owner);
  f.evidence.owner_decision = f.mark(ownerPath);
  assert.throws(() => f.record(f.evidence), /stale actual supplier guard/);
});
test('nested retained acceptance archives survive later shared reviewer rewrites', t => {
  const f = fixture(t), original = f.evidence.supplier_review;
  f.evidence.supplier_review = f.research('expanded-review.json', { run: f.run, reviewer: '/root/fixture_reviewer',
    expanded_current_whole_accepted_subjects: [{ id: f.id, current_raw_sha256: f.evidence.current_item_file_sha256,
      mathematical_hold: false, current_direct_supplier_guards: {},
      retained_whole_actual_review_packet: { path: original.path, raw_sha256: original.sha256 } }] });
  f.record(f.evidence); write(resolve(f.root, original.path), { later: 'rewritten shared review' });
  assert.deepEqual(loadStep3OwnerCreation(f.root, f.run, f.id), json(f.originPath));
});

test('an authenticated current supplier hold cannot be waived by retained whole-review evidence', t => {
  const f = fixture(t), pages = json(f.manifestPath), supplier = join(f.root, 'items', 'def-prerequisite.md');
  pages[0].items[0].deps = ['def-prerequisite'];
  pages[0].items.push({ id: 'def-prerequisite', kind: 'definition', title: 'Prerequisite', statement: 'Supplier', deps: [] });
  write(f.manifestPath, pages); write(supplier, '---\nid: def-prerequisite\nkind: definition\ndeps: []\n---\n## Definition\nReviewed but now held supplier.\n');
  const reviewPath = resolve(f.root, f.evidence.supplier_review.path), review = json(reviewPath);
  review.current_actual_direct_supplier_guards['items/def-prerequisite.md'] = sha(bytes(supplier));
  f.evidence.supplier_review = f.research('authentic-held-input-review.json', review);
  const state = loadStep3(f.root, f.run), ownerPath = resolve(f.root, f.evidence.owner_decision.path), owner = json(ownerPath);
  owner.sha256 = itemHash(state, f.id); write(ownerPath, owner); f.evidence.owner_decision = f.mark(ownerPath);
  write(join(f.root, 'research', f.run+'-step3b-owner-def-prerequisite.json'), { version: 2, run: f.run, phase: 'item', target: 'def-prerequisite',
    decision: 'hold', owner: true, sha256: itemHash(state, 'def-prerequisite'), at: new Date().toISOString(),
    reason: 'Actual prerequisite mathematical defect remains unresolved', defects: ['proof'] });
  assert.throws(() => f.record(f.evidence), /unresolved actual proof input def-prerequisite: hold/);
});

test('removing a frozen nested review binding fails closed even when the live source remains', t => {
  const f = fixture(t), original = f.evidence.supplier_review;
  f.evidence.supplier_review = f.research('expanded-review.json', { run: f.run, reviewer: '/root/fixture_reviewer',
    expanded_current_whole_accepted_subjects: [{ id: f.id, current_raw_sha256: f.evidence.current_item_file_sha256,
      mathematical_hold: false, current_direct_supplier_guards: {},
      retained_whole_actual_review_packet: { path: original.path, raw_sha256: original.sha256 } }] });
  const result = f.record(f.evidence), record = json(result.path);
  record.review_archives = record.review_archives.filter(row => row.original.path !== original.path);
  write(result.path, record);
  assert.throws(() => loadStep3OwnerCreation(f.root, f.run, f.id), /missing immutable nested whole-review archive/);
});
