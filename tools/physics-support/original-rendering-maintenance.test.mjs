import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, chmodSync, symlinkSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { importMathematics, verifyMathematicsImports } from './physics-imports.mjs';
import { originalRenderingMaintenancePath, originalRenderingChanges } from './original-rendering-maintenance.mjs';
import { itemHashGuard } from '../item-hash.mjs';
import { gateReviewSnapshot } from '../physics-autopilot/src/owner-gate-recertification.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
// All receipts here are synthetic test fixtures; they confer no real review.
function fixture(t, { mode = 'technique', authored = false } = {}) {
  const base = mkdtempSync(join(tmpdir(), 'original-rendering-'));
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const root = join(base, 'physics'), source = join(base, 'math'), run = 'demo', id = 'thm-supplier';
  for (const dir of [root, source]) for (const sub of ['items', 'library/math', 'research']) mkdirSync(join(dir, sub), { recursive: true });
  const save = (base, path, value) => { mkdirSync(resolve(base, path, '..'), { recursive: true }); writeFileSync(resolve(base, path), typeof value === 'string' || Buffer.isBuffer(value) ? value : JSON.stringify(value, null, 2) + '\n'); };
  const before = `---\nid: ${id}\nkind: theorem\ntitle: A theorem on R^n\nstatus: published\ndeps: []\naliases: [supplier-alias]\nprovenance: {statement: literature-derived, proof: ai-altered}\nverification:\n  precheck: pass\n  audited: 2026-09-30\n---\n\n## Statement\n\nFor the given object, $A=A$.\n\n## Facts & Assumptions\n\n[L1] Equality is reflexive. [given]\n\n## Proof\n\n**Proof technique:** direct on $A$.\n\n1.1 Reflexivity gives $A=A$. [L1]\n`;
  save(source, `items/${id}.md`, before);
  save(source, 'library/math/supplier.md', `---\npage: supplier\nstatus: published\nitems: [${id}]\n---\n`);
  importMathematics(root, source);
  const repairPath = `research/source-repair/receipts/${id}.json`;
  let after = before.replace(/verification:\n(?:  [^\n]*\n)*/, '').replace('---\n', `---\nverification:\n  repair: ${repairPath}\n  precheck: pass\n`);
  if (mode === 'technique') after = after.replace('**Proof technique:** direct on $A$.', '**Proof technique:** direct on A.');
  if (mode === 'title') after = after.replace('title: A theorem on R^n', () => "title: 'A theorem on $\\mathbb R^n$'");
  if (mode === 'step') after = after.replace('1.1 Reflexivity gives $A=A$. [L1]', '1.1 The identity map on the given object has equal domain and codomain; reflexivity gives $A=A$. [L1]');
  if (mode === 'remarks' || mode === 'remarks-tikz' || mode === 'step') after += '\n## Remarks\n\nThe following square displays the identity maps used in the unchanged argument.\n\n```tikzcd\nA \\arrow[r] \\arrow[d] & A \\arrow[d] \\\\\nA \\arrow[r] & A\n```\n';
  if (mode === 'remarks-tikz') after = after.replace(/```tikzcd[\s\S]*?```/, '```tikz\n\\begin{tikzpicture}\n\\node (A) {A};\n\\end{tikzpicture}\n```');
  save(source, `items/${id}.md`, after);
  const content = itemHashGuard(after), claim = { version: 1, run: 'source-repair', group: 'g', id, pre_sha256: itemHashGuard(before), claimed_at: '2026-10-23T00:00:00Z' };
  const claimLine = JSON.stringify(claim) + '\n', block = `\n${id}: exact fixture repair ${content}.\n`, marker = 'rendering:' + id;
  save(source, 'research/source-repair-step3-published-claims.jsonl', claimLine);
  save(source, 'research/published-consumer-supplier-ledger.md', `<!-- local-published-repair:${marker}:begin -->${block}<!-- local-published-repair:${marker}:end -->\n`);
  const beforePath = `research/source-repair/before/${id}.md`, adjudicationPath = `research/source-repair/adjudication/${id}.json`;
  save(source, beforePath, before);
  const adjudication = { id, changed: true, mathematical_meaning_preserved: true, proof_independent: true, diagram_mathematics_corrected: false,
    findings: [{ verdict: 'confirmed', status: 'repaired', reason: 'Synthetic recorded rendering finding for isolated structural tests only.' }] };
  save(source, adjudicationPath, adjudication);
  const check = tool => ({ command: ['node', tool === 'precheck' ? 'tools/precheck.mts' : 'tools/rendercheck.mjs', `items/${id}.md`], exit_code: 0,
    output: tool === 'precheck' ? `PASS items/${id}.md\n1 checked, 0 failing` : 'OK — 1 file(s)', checked_at: '2026-10-23T00:00:01Z', content_sha256: content });
  const repair = { version: 1, kind: 'recorded-local-published-repair', id, run: 'source-repair', group: 'g', correction: 'Exact synthetic rendering presentation correction.', content_sha256: content,
    before_file: beforePath, before_raw_sha256: sha(before), pre_sha256: itemHashGuard(before), recorded_at: '2026-10-23T00:00:03Z', ledger_marker: marker, ledger_sha256: sha(block),
    local_checks: { precheck: check('precheck'), rendercheck: check('rendercheck') }, proof_layout: { command: ['node', 'tools/proof-layout.mjs', `items/${id}.md`], exit_code: 0, output: 'proof-layout: 1 items, 1 steps, 0 defects', checked_at: '2026-10-23T00:00:02Z', content_sha256: content },
    adjudication_file: adjudicationPath, adjudication_sha256: sha(readFileSync(join(source, adjudicationPath))) };
  save(source, repairPath, repair);
  const pages = [];
  for (let n = 1; n <= 7; n++) for (const kind of ['A', 'B']) pages.push({ id: `proposed-${n}${kind === 'B' ? '-examples' : ''}`, kind, library: 'mathematics', category: 'math', order: n + 10,
    companion: `proposed-${n}${kind === 'A' ? '-examples' : ''}`, requires: ['supplier'], items: Array.from({ length: kind === 'A' ? 2 : 1 }, (_, i) => ({ id: `def-local-${n}-${kind.toLowerCase()}-${i}`, kind: 'definition', domain: 'mathematics', statement: 'A declared fixture object with the exact supplied input.', deps: ['supplier-alias'], dependency_roles: { 'supplier-alias': 'mathematical-premise' }, provenance: { statement: 'literature-derived', proof: 'not-applicable' }, sources: { references: [{ title: 'Fixture source', url: 'https://example.invalid/fixture.pdf' }] } })) });
  const declarations = pages.flatMap(p => p.items);
  save(root, 'research/plan-spec.json', { pages: [{ id: 'supplier', category: 'math', kind: 'P', order: 0, requires: [], items: [] }, ...pages] });
  for (let n = 1; n <= 7; n++) save(root, `research/demo-batch-${n}.pages.json`, pages.slice(2 * n - 2, 2 * n));
  const selector = 'research/demo-frontier-append-2/new-pages.json'; save(root, selector, pages.map(p => p.id));
  if (authored) for (const item of declarations) save(root, `items/${item.id}.md`, `---\nid: ${item.id}\nkind: definition\ndomain: mathematics\nstatus: draft\ndeps: [supplier-alias]\ndependency_roles: {supplier-alias: mathematical-premise}\n---\n## Definition\nA fixed fixture object.\n`);
  const evidence = 'research/demo-source-successor/root-review.md', ownership = 'research/demo-source-successor/ownership.json', ledger = 'research/demo-source-successor/ledger-block.md';
  save(root, evidence, 'Root fixture review of exact scientific hypotheses, proof presentation equivalence and every actual declared consumer use. No real scientific approval is issued by this test.');
  save(root, ownership, claimLine); save(root, ledger, block);
  const hashFile = path => sha(readFileSync(resolve(root, path)));
  const changes = originalRenderingChanges(Buffer.from(before), Buffer.from(after));
  const scope = authored ? { kind: 'authored-frontier', frontier: Object.fromEntries(Array.from({ length: 7 }, (_, i) => { const path = `research/demo-batch-${i + 1}.pages.json`; return [path, hashFile(path)]; })) }
    : { kind: 'proposed-pages', selector: { path: selector, sha256: hashFile(selector) }, plan: { path: 'research/plan-spec.json', sha256: hashFile('research/plan-spec.json') }, pages: pages.map(p => p.id), declarations_sha256: sha(JSON.stringify(pages)) };
  const entry = { path: `items/${id}.md`, pinned_sha256: sha(before), original_path: join(source, `items/${id}.md`), original_sha256: sha(after), repair_receipt: { path: join(source, repairPath), sha256: hashFile(join(source, repairPath)) },
    ownership_evidence: { path: ownership, sha256: hashFile(ownership) }, ledger_evidence: { path: ledger, sha256: hashFile(ledger) }, changes,
    scientific_review: { statements: 'identical', facts: 'identical', hypotheses: 'identical', proof: 'equivalent-presentation', new_premises: false, new_results: false,
      reason: 'Root fixture independently checks the exact listed source deltas and unchanged logical assumptions and result; this is not a general normalization or audit.', reading_limits: 'Only exact presentation deltas and declared consumer interfaces are fixture-reviewed; no full proof audit, reading coverage or native acceptance is inferred.' },
    proof_step_reviews: Object.fromEntries(changes.steps.filter(s => s.kind === 'equivalent-presentation').map(s => [s.label, 'Root fixture checks this exact numbered-step rewrite, its unchanged maps and support labels, and its equivalence without any new premise or result.'])),
    evidence: [{ path: evidence, sha256: hashFile(evidence) }], consumers: declarations.map(d => ({ id: d.id, decision: 'unaffected', declaration_sha256: sha(JSON.stringify(d)), source_sha256: authored ? hashFile(`items/${d.id}.md`) : null,
      reason: authored ? 'Root fixture reads this current authored consumer and exact declared use; the supplier presentation change does not alter its hypothesis or argument.' : 'Root fixture reads this nonempty planned declaration and supplier interface; absent source/proof is explicitly not claimed authored or reviewed.' })) };
  const review = { version: 1, kind: 'root-reviewed-original-rendering-successors', run, reviewer: '/root', native_review: false,
    reason: 'Root fixture individually reviews the exact source successor and its consumer consequences; immutable imports remain authoritative local snapshots and all native duties remain.', import_receipt_sha256: hashFile('research/math-imports.json'), scope, entries: [entry], inputs: {} };
  function seal() {
    review.inputs = { 'research/math-imports.json': review.import_receipt_sha256,
      ...(authored ? scope.frontier : { [selector]: scope.selector.sha256, 'research/plan-spec.json': scope.plan.sha256 }),
      [entry.path]: entry.pinned_sha256, [entry.original_path]: entry.original_sha256, [entry.repair_receipt.path]: entry.repair_receipt.sha256,
      [join(source, beforePath)]: sha(before), [join(source, adjudicationPath)]: repair.adjudication_sha256,
      [ownership]: entry.ownership_evidence.sha256, [ledger]: entry.ledger_evidence.sha256, [evidence]: entry.evidence[0].sha256,
      ...(authored ? Object.fromEntries(entry.consumers.map(c => [`items/${c.id}.md`, c.source_sha256])) : {}) };
    save(root, originalRenderingMaintenancePath(root, run, authored ? null : selector), review);
  }
  const verify = options => verifyMathematicsImports(root, authored ? { run, ...options } : { planning: true, proposedPages: pages, maintenanceRun: run, maintenanceSelector: selector, ...options });
  return { root, source, run, id, before, after, repair, repairPath, adjudicationPath, beforePath, entry, review, pages, declarations, selector, evidence, ownership, ledger, seal, save, hashFile, verify };
}
for (const mode of ['technique', 'title', 'remarks', 'remarks-tikz', 'step']) test(`exact ${mode} successor accepts 21 planned absent carriers and preserves local pins`, t => {
  const f = fixture(t, { mode }), local = readFileSync(join(f.root, `items/${f.id}.md`)), pin = readFileSync(join(f.root, 'research/math-imports.json'));
  assert.throws(() => f.verify(), /mathematics import changed/); f.seal(); assert.ok(f.verify() > 0);
  assert.deepEqual(readFileSync(join(f.root, `items/${f.id}.md`)), local); assert.deepEqual(readFileSync(join(f.root, 'research/math-imports.json')), pin);
  assert.throws(() => verifyMathematicsImports(f.root), /mathematics import changed/);
  assert.throws(() => f.verify({ maintenanceRun: null, maintenanceSelector: null }), /mathematics import changed/);
  const cli = spawnSync(process.execPath, [new URL('./physics-check.mjs', import.meta.url).pathname, '--root', f.root, '--plan', 'research/plan-spec.json', '--pages-file', f.selector, '--maintenance-run', f.run], { encoding: 'utf8' });
  assert.equal(cli.status, 0, cli.stdout + cli.stderr);
});
test('planning review does not bind mutable new manifests but strictly binds selector, declarations, identity and absence', t => {
  const f = fixture(t); f.seal(); f.save(f.root, 'research/demo-batch-1.pages.json', []); assert.ok(f.verify() > 0);
  for (const mode of ['selector', 'plan', 'carrier', 'run']) {
    const g = fixture(t); g.seal();
    if (mode === 'selector') f.save(g.root, g.selector, JSON.stringify(g.pages.map(p => p.id)));
    if (mode === 'plan') g.save(g.root, 'research/plan-spec.json', { pages: g.pages });
    if (mode === 'carrier') g.save(g.root, `items/${g.declarations[0].id}.md`, `---\nid: ${g.declarations[0].id}\nkind: definition\ndomain: mathematics\nstatus: draft\ndeps: [supplier-alias]\n---\n## Definition\nNew unreviewed authored carrier.\n`);
    assert.throws(() => g.verify(mode === 'run' ? { maintenanceRun: 'different' } : {}), /original rendering|mathematics import changed/i);
  }
});
test('unrelated global ledger/claim appends remain allowed; changed exact rows, blocks and extracts fail', t => {
  const f = fixture(t); f.seal();
  f.save(f.source, 'research/source-repair-step3-published-claims.jsonl', readFileSync(join(f.source, 'research/source-repair-step3-published-claims.jsonl'), 'utf8') + JSON.stringify({ id: 'thm-other' }) + '\n');
  f.save(f.source, 'research/published-consumer-supplier-ledger.md', readFileSync(join(f.source, 'research/published-consumer-supplier-ledger.md'), 'utf8') + '\nUnrelated later repair.\n');
  assert.ok(f.verify() > 0);
  for (const mode of ['claim', 'duplicate', 'block', 'extract']) {
    const g = fixture(t); g.seal();
    if (mode === 'claim') g.save(g.source, 'research/source-repair-step3-published-claims.jsonl', readFileSync(join(g.source, 'research/source-repair-step3-published-claims.jsonl'), 'utf8').replace('"group":"g"', '"group":"other"'));
    if (mode === 'duplicate') g.save(g.source, 'research/source-repair-step3-published-claims.jsonl', readFileSync(join(g.source, 'research/source-repair-step3-published-claims.jsonl'), 'utf8').repeat(2));
    if (mode === 'block') g.save(g.source, 'research/published-consumer-supplier-ledger.md', 'Changed canonical item block.');
    if (mode === 'extract') g.save(g.root, g.ownership, '{}\n');
    assert.throws(() => g.verify(), /original rendering successor/i);
  }
});
test('source equality rejects statement, facts, dependencies, support labels, step sequence and noncosmetic title changes', t => {
  const f = fixture(t, { mode: 'step' });
  for (const edit of [s => s.replace('For the given object, $A=A$.', 'For some object, $A=A$.'), s => s.replace('[L1] Equality is reflexive.', '[L1] An additional hypothesis.'), s => s.replace('deps: []', 'deps: [thm-new]'), s => s.replace('1.1 The identity', '1.2 The identity'), s => s.replace('[L1]\n\n## Remarks', '[L2]\n\n## Remarks'), s => s.replace('title: A theorem on R^n', 'title: A theorem on C^n')])
    assert.throws(() => originalRenderingChanges(Buffer.from(f.before), Buffer.from(edit(f.after))), /original rendering successor/i);
});
test('wrong owner, unreviewed deltas, missing step review, stale evidence and actual source changes fail closed', t => {
  for (const mode of ['owner', 'native', 'delta', 'step', 'consumer', 'declaration', 'layout', 'adjudication', 'before', 'pin', 'original', 'verification', 'symlink', 'input-extra']) {
    const f = fixture(t, { mode: 'step' });
    if (mode === 'owner') f.review.reviewer = 'agent';
    if (mode === 'native') f.review.native_review = true;
    if (mode === 'delta') f.entry.changes.steps = [];
    if (mode === 'step') f.entry.proof_step_reviews = {};
    if (mode === 'consumer') f.entry.consumers.pop();
    if (mode === 'declaration') f.entry.consumers[0].declaration_sha256 = '0'.repeat(64);
    if (mode === 'verification') {
      const after = f.after.replace('  precheck: pass', '  precheck: pass\n  audited: 2026-10-24');
      f.save(f.source, `items/${f.id}.md`, after); f.entry.original_sha256 = sha(after);
      f.entry.changes = originalRenderingChanges(Buffer.from(f.before), Buffer.from(after));
    }
    f.seal();
    if (mode === 'layout') { f.repair.proof_layout.exit_code = 1; f.save(f.source, f.repairPath, f.repair); }
    if (mode === 'adjudication') f.save(f.source, f.adjudicationPath, '{}');
    if (mode === 'before') f.save(f.source, f.beforePath, f.before + '\n');
    if (mode === 'pin') { const path = join(f.root, `items/${f.id}.md`); chmodSync(path, 0o644); writeFileSync(path, f.before + '\n'); }
    if (mode === 'original') f.save(f.source, `items/${f.id}.md`, f.after + '\n');
    if (mode === 'symlink') { const path = join(f.source, `items/${f.id}.md`); f.save(f.source, 'research/linked-original.md', f.after); rmSync(path); symlinkSync(join(f.source, 'research/linked-original.md'), path); }
    if (mode === 'input-extra') { f.review.inputs['unrelated'] = '0'.repeat(64); f.save(f.root, originalRenderingMaintenancePath(f.root, f.run, f.selector), f.review); }
    assert.throws(() => f.verify(), /original rendering successor|mathematics import changed/i, mode);
  }
});
test('authored mode requires actual consumers and exact authored frontier; planning authority cannot cover it', t => {
  const f = fixture(t, { authored: true, mode: 'step' }); f.seal(); assert.ok(f.verify() > 0);
  f.save(f.root, `items/${f.declarations[0].id}.md`, readFileSync(join(f.root, `items/${f.declarations[0].id}.md`), 'utf8') + '\nChanged actual consumer.\n'); assert.throws(() => f.verify(), /original rendering successor/);
  const g = fixture(t); g.seal(); assert.throws(() => verifyMathematicsImports(g.root, { run: g.run }), /missing current item/);
});
test('native planning snapshots bind review presence, exact evidence and actual source without whole mutable global logs', t => {
  const f = fixture(t), ctx = { repo: f.root, run: f.run }, gates = [{ id: 'planned', argv: ['node', 'tools/physics-support/physics-check.mjs', '--plan', 'research/plan-spec.json', '--pages-file', f.selector, '--maintenance-run', f.run] }];
  const path = originalRenderingMaintenancePath(f.root, f.run, f.selector);
  const absent = gateReviewSnapshot(ctx, gates, ['1-drift']); assert.equal(absent.inputs.find(i => i.path === path).sha256, null);
  f.seal(); const snapshot = gateReviewSnapshot(ctx, gates, ['1-drift']);
  for (const input of [path, f.entry.original_path, f.entry.repair_receipt.path, join(f.source, f.beforePath), join(f.source, f.adjudicationPath), join(f.root, f.evidence), join(f.root, f.ownership), join(f.root, f.ledger)]) assert.equal(snapshot.inputs.find(i => i.path === input).sha256, f.hashFile(input));
  assert.ok(!snapshot.inputs.some(i => i.path === join(f.source, 'research/published-consumer-supplier-ledger.md')));
  assert.ok(!snapshot.inputs.some(i => i.path === join(f.source, 'research/source-repair-step3-published-claims.jsonl')));
  f.save(f.root, f.evidence, 'Changed actual Root review.'); assert.notEqual(gateReviewSnapshot(ctx, gates, ['1-drift']).sha256, snapshot.sha256);
});

test('added Remarks requires a complete standalone tikz or tikzcd fence, never an inline or misleading language token', t => {
  const f = fixture(t, { mode: 'remarks-tikz' });
  assert.ok(originalRenderingChanges(Buffer.from(f.before), Buffer.from(f.after)).remarks);
  for (const edit of [
    s => s.replace('```tikz\n', '```tikzpicture\n'),
    s => s.replace('```tikz\n', 'Text ```tikz\n'),
    s => s.replace(/\n```\n$/, '\n'),
    s => s.replace('```tikz\n', '```javascript\n'),
  ]) assert.throws(() => originalRenderingChanges(Buffer.from(f.before), Buffer.from(edit(f.after))), /unsupported added remarks/);
});
