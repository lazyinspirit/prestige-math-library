import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, chmodSync, symlinkSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { importMathematics, verifyMathematicsImports } from './physics-imports.mjs';
import { originalRenderingMaintenancePath, originalRenderingChanges } from './original-rendering-maintenance.mjs';
import { originalPresentationChanges } from './original-presentation-maintenance.mjs';
import { itemHashGuard } from '../item-hash.mjs';
import { gateReviewSnapshot } from '../physics-autopilot/src/owner-gate-recertification.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const exactNativeFixtures = JSON.parse(readFileSync(new URL('./fixtures/exact-native-presentation.json', import.meta.url)));
const counterexampleFixture = JSON.parse(readFileSync(new URL('./fixtures/counterexample-math-spelling.json', import.meta.url)));
// All receipts here are synthetic test fixtures; they confer no real review.
function fixture(t, { mode = 'technique', authored = false, presentationVersion = 1, definition = false, findingStatus = 'repaired', findingVerdict = 'confirmed', sourceExtra = '', exactNativeId = null, factLabel = String.raw`Evaluation at a point has kernel $(x_1-a_1, \ldots, x_n-a_n)$` } = {}) {
  const base = mkdtempSync(join(tmpdir(), 'original-rendering-'));
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const exactFixture = mode === 'exact-native' ? exactNativeFixtures.find(f => f.selector.id === exactNativeId) : null;
  const root = join(base, 'physics'), source = join(base, 'math'), run = 'demo', id = exactFixture ? exactFixture.selector.id : mode === 'counterexample-spelling' ? counterexampleFixture.option.id : definition ? 'def-supplier' : 'thm-supplier';
  for (const dir of [root, source]) for (const sub of ['items', 'library/math', 'research']) mkdirSync(join(dir, sub), { recursive: true });
  const save = (base, path, value) => { mkdirSync(resolve(base, path, '..'), { recursive: true }); writeFileSync(resolve(base, path), typeof value === 'string' || Buffer.isBuffer(value) ? value : JSON.stringify(value, null, 2) + '\n'); };
  let before = `---\nid: ${id}\nkind: ${definition ? 'definition' : 'theorem'}\ntitle: A theorem on R^n\nstatus: published\ndeps: []\naliases: [supplier-alias]\nprovenance: {statement: literature-derived, proof: ai-altered}\nverification:\n  precheck: pass\n  audited: 2026-09-30\n---\n\n## Statement\n\nFor the given object, $A=A$.\n\n## Facts & Assumptions\n\n[L1] Equality is reflexive. [given]\n\n## Proof\n\n**Proof technique:** direct on $A$.\n\n1.1 Reflexivity gives $A=A$. [L1]\n`;
  if (exactFixture) {
    const body = exactFixture.before.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)([\s\S]*)$/)[1];
    const kind = /^kind: (.+)$/m.exec(exactFixture.before)[1];
    before = before.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/)[0].replace('kind: theorem', 'kind: ' + kind) + body;
  }
  if (mode === 'counterexample-spelling') {
    before='---\nid: '+id+'\nkind: counterexample\ntitle: Exact known published body pair\nstatus: published\ndeps: '+JSON.stringify(counterexampleFixture.targets)+'\naliases: [supplier-alias]\nprovenance: {statement: ai-altered, proof: ai-altered}\nverification:\n  precheck: pass\n  audited: 2026-09-30\n---\n'+counterexampleFixture.before_body;
    for (const target of counterexampleFixture.targets) save(source,'items/'+target+'.md','---\nid: '+target+'\nkind: '+(target.startsWith('def-')?'definition':'lemma')+'\nstatus: published\ndeps: []\ntitle: Synthetic unchanged published target\n---\n## '+(target.startsWith('def-')?'Definition':'Statement')+'\nSynthetic unchanged pin, not a real target review.\n');
  }
  if (definition) before = before.replace('## Statement', '## Definition').replace(/\n## Facts & Assumptions[\s\S]*$/, '\n');
  if (mode === 'definition-display') before = before.replace('For the given object, $A=A$.', ()=>'For the object define\n$$A=A.$$\nThe zero convention is fixed.');
  if (mode === 'fact-label' || mode === 'reference-relocation' || mode === 'support-layout-labels') {
    before = before.replace('deps: []', 'deps: [lem-title-target]').replace('[L1] Equality is reflexive. [given]', '[L1] Equality is reflexive. [given]\n\n[F2] The evaluation kernel is maximal ([[lem-title-target]]).');
    before += '\n## Sources\n\nExact unchanged source section.\n';
    save(source, 'items/lem-title-target.md', '---\nid: lem-title-target\nkind: lemma\nstatus: published\ndeps: []\ntitle: "Evaluation at a point has kernel (x_1-a_1, ..., x_n-a_n)"\n---\n\n## Statement\nExact fixed evaluation-kernel supplier.\n');
  }
  if (mode === 'terminal-remarks') before = before.replace('1.1 Reflexivity gives $A=A$. [L1]\n', '1.1 Reflexivity gives $A=A$. [L1] ∎ ## Remarks\n\nExact unchanged Remarks cite [L1].\n');
  if (mode === 'terminal-heading') before = before.replace('1.1 Reflexivity gives $A=A$. [L1]\n', '1.1 Reflexivity gives $A=A$. [L1] $\\square$ ## Source qualification\n\nExact unchanged source qualification.\n');
  if (mode === 'reference-relocation') before = before.replace('1.1 Reflexivity gives $A=A$. [L1]', '1.1 The Evaluation theorem gives $A=A$. [L1, [[lem-title-target]]]');
  if (mode === 'support-consolidation-both') before = before.replace('1.1 Reflexivity gives $A=A$. [L1]\n', () => '1.1 Reflexivity gives [L1]\n\n$$ A=A. $$\n\n[L1]\n');
  if (mode.startsWith('support-consolidation')) before += '\n1.2 By [L1], [L1, step 1.1]\n\n$$ A=A, $$\n\nso equality holds. [L1]\n';
  if (mode.startsWith('support-layout')) before = before.replace('1.1 Reflexivity gives $A=A$. [L1]\n', ()=>'1.1 The identity follows [L1, construct]\n\n$$A=A.$$\n\nThe conclusion holds.\n');
  if (mode === 'paragraph-layout') before = before.replace('**Proof technique:** direct on $A$.', '**Proof technique:** Fubini followed by $L^2$ approximation.').replace('1.1 Reflexivity gives $A=A$. [L1]\n', ()=>'1.1 The identity follows. [L1]\n\n$$A=A.$$\n\nThe conclusion holds. [L1] ∎\n');
  before += sourceExtra;
  save(source, `items/${id}.md`, before);
  save(source, 'library/math/supplier.md', `---\npage: supplier\nstatus: published\nitems: [${id}${mode === 'counterexample-spelling' ? ',' + counterexampleFixture.targets.join(',') : ['fact-label', 'reference-relocation', 'support-layout-labels'].includes(mode) ? ', lem-title-target' : ''}]\n---\n`);
  importMathematics(root, source);
  const repairPath = `research/source-repair/receipts/${id}.json`;
  let after = before.replace(/verification:\n(?:  [^\n]*\n)*/, '').replace('---\n', `---\nverification:\n  repair: ${repairPath}\n  precheck: ${definition ? 'n/a' : 'pass'}\n`);
  if (exactFixture) after = after.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/)[0] + exactFixture.after.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)([\s\S]*)$/)[1];
  if (mode === 'definition-display') after = after.replace('\n$$A=A.$$\n', ()=>'\n\n$$\nA=A.\n$$\n\n');
  if (mode === 'counterexample-spelling') after = after.slice(0, after.length - counterexampleFixture.before_body.length) + counterexampleFixture.after_body;
  if (mode === 'technique') after = after.replace('**Proof technique:** direct on $A$.', '**Proof technique:** direct on A.');
  if (mode === 'title') after = after.replace('title: A theorem on R^n', () => "title: 'A theorem on $\\mathbb R^n$'");
  if (mode === 'step') after = after.replace('1.1 Reflexivity gives $A=A$. [L1]', '1.1 The identity map on the given object has equal domain and codomain; reflexivity gives $A=A$. [L1]');
  if (mode === 'remarks' || mode === 'remarks-tikz' || mode === 'step') after += '\n## Remarks\n\nThe following square displays the identity maps used in the unchanged argument.\n\n```tikzcd\nA \\arrow[r] \\arrow[d] & A \\arrow[d] \\\\\nA \\arrow[r] & A\n```\n';
  if (mode === 'remarks-tikz') after = after.replace(/```tikzcd[\s\S]*?```/, '```tikz\n\\begin{tikzpicture}\n\\node (A) {A};\n\\end{tikzpicture}\n```');
  if (mode === 'fact-label') after = after.replace('[[lem-title-target]]', `[[lem-title-target|${factLabel}]]`);
  if (mode === 'terminal-remarks') after = after.replace('∎ ## Remarks\n\n', '∎\n\n## Remarks\n\n');
  if (mode === 'terminal-heading') after = after.replace('$\\square$ ## Source qualification\n', '∎\n\n## Source qualification\n');
  if (mode === 'reference-relocation') after = after.replace('The Evaluation theorem gives', 'The [[lem-title-target|Evaluation theorem]] gives').replace('[L1, [[lem-title-target]]]', '[L1]');
  if (mode.startsWith('support-consolidation')) after = after.replace('[L1, step 1.1]\n\n$$ A=A, $$\n\nso equality holds. [L1]', '$A=A$, so equality holds. [L1, step 1.1]');
  if (mode === 'support-consolidation-both') after = after.replace('[L1]\n\n$$ A=A. $$\n\n[L1]', '$A=A$. [L1]');
  if (mode === 'support-consolidation-mixed') after = after.replace('1.1 Reflexivity gives', '1.1 The same reflexivity gives');
  if (mode.startsWith('support-layout')) after = after.replace(' [L1, construct]\n\n$$A=A.$$\n\nThe conclusion holds.', ()=>' $$A=A.$$ The conclusion holds. [L1, construct]');
  if (mode === 'support-layout-labels') after = after.replace('[[lem-title-target]]', '[[lem-title-target|Exact reviewed display label]]');
  if (mode === 'paragraph-layout') after = after.replace('**Proof technique:** Fubini followed by $L^2$ approximation.', '**Proof technique:** Fubini followed by square-integrable approximation.').replace('\n\n$$A=A.$$\n\n', ()=>'\n$$A=A.$$\n');
  save(source, `items/${id}.md`, after);
  const content = itemHashGuard(after), claim = { version: 1, run: 'source-repair', group: 'g', id, pre_sha256: itemHashGuard(before), claimed_at: '2026-10-23T00:00:00Z' };
  const claimLine = JSON.stringify(claim) + '\n', block = `\n${id}: exact fixture repair ${content}.\n`, marker = 'rendering:' + id;
  save(source, 'research/source-repair-step3-published-claims.jsonl', claimLine);
  save(source, 'research/published-consumer-supplier-ledger.md', `<!-- local-published-repair:${marker}:begin -->${block}<!-- local-published-repair:${marker}:end -->\n`);
  const beforePath = `research/source-repair/before/${id}.md`, adjudicationPath = `research/source-repair/adjudication/${id}.json`;
  save(source, beforePath, before);
  const adjudication = { id, changed: true, mathematical_meaning_preserved: true, proof_independent: true, diagram_mathematics_corrected: false,
    findings: [{ verdict: findingVerdict, status: findingStatus, reason: 'Synthetic recorded rendering finding for isolated structural tests only.' }] };
  save(source, adjudicationPath, adjudication);
  const check = tool => ({ command: ['node', tool === 'precheck' ? 'tools/precheck.mts' : 'tools/rendercheck.mjs', `items/${id}.md`, ...(definition && tool === 'precheck' ? ['--json'] : [])], exit_code: 0,
    output: tool === 'precheck' ? definition ? JSON.stringify({summary:{files:1,checked:0,failed:0},results:[{file:`items/${id}.md`,item_id:id,status:'not-applicable'}]}) : `PASS items/${id}.md\n1 checked, 0 failing` : 'OK — 1 file(s)', checked_at: '2026-10-23T00:00:01Z', content_sha256: content });
  const repair = { version: 1, kind: 'recorded-local-published-repair', id, run: 'source-repair', group: 'g', correction: 'Exact synthetic rendering presentation correction.', content_sha256: content,
    before_file: beforePath, before_raw_sha256: sha(before), pre_sha256: itemHashGuard(before), recorded_at: '2026-10-23T00:00:03Z', ledger_marker: marker, ledger_sha256: sha(block),
    local_checks: { precheck: check('precheck'), rendercheck: check('rendercheck') }, proof_layout: { command: ['node', 'tools/proof-layout.mjs', `items/${id}.md`], exit_code: 0, output: `proof-layout: 1 items, ${definition ? 0 : exactFixture ? [...before.matchAll(/^\d+\.\d+ /gm)].length : mode === 'counterexample-spelling' ? 3 : mode.startsWith('support-consolidation') ? 2 : 1} steps, 0 defects`, checked_at: '2026-10-23T00:00:02Z', content_sha256: content },
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
  const consolidation = mode.startsWith('support-consolidation') ? { version: 1, steps: mode === 'support-consolidation-both' ? ['1.1', '1.2'] : ['1.2'] } : undefined;
  const relocation = mode === 'reference-relocation' ? { version: 1, steps: [{ label: '1.1', target: 'lem-title-target' }] } : undefined;
  const displayLayout = mode === 'definition-display' ? {version:1,display:0} : undefined;
  const terminalHeading = mode === 'terminal-remarks' ? {version:1,step:'1.1'} : undefined;
  const supportLayout=mode.startsWith('support-layout')?{version:1,steps:['1.1']}:undefined,paragraphLayout=mode==='paragraph-layout'?{version:1,steps:['1.1'],technique:{before:'**Proof technique:** Fubini followed by $L^2$ approximation.',after:'**Proof technique:** Fubini followed by square-integrable approximation.'}}:undefined;
  const spelling = mode === 'counterexample-spelling' ? counterexampleFixture.option : undefined;
  const changes = presentationVersion === 2 ? originalPresentationChanges(Buffer.from(before), Buffer.from(after), consolidation, relocation, displayLayout, terminalHeading, supportLayout, paragraphLayout, spelling, exactFixture?.selector) : originalRenderingChanges(Buffer.from(before), Buffer.from(after));
  const scope = authored ? { kind: 'authored-frontier', frontier: Object.fromEntries(Array.from({ length: 7 }, (_, i) => { const path = `research/demo-batch-${i + 1}.pages.json`; return [path, hashFile(path)]; })) }
    : { kind: 'proposed-pages', selector: { path: selector, sha256: hashFile(selector) }, plan: { path: 'research/plan-spec.json', sha256: hashFile('research/plan-spec.json') }, pages: pages.map(p => p.id), declarations_sha256: sha(JSON.stringify(pages)) };
  const entry = { path: `items/${id}.md`, pinned_sha256: sha(before), original_path: join(source, `items/${id}.md`), original_sha256: sha(after), repair_receipt: { path: join(source, repairPath), sha256: hashFile(join(source, repairPath)) },
    ownership_evidence: { path: ownership, sha256: hashFile(ownership) }, ledger_evidence: { path: ledger, sha256: hashFile(ledger) }, changes,
    scientific_review: { statements: 'identical', facts: mode === 'fact-label' ? 'reference-labels-only' : 'identical', hypotheses: 'identical', proof: 'equivalent-presentation', new_premises: false, new_results: false,
      reason: 'Root fixture independently checks the exact listed source deltas and unchanged logical assumptions and result; this is not a general normalization or audit.', reading_limits: 'Only exact presentation deltas and declared consumer interfaces are fixture-reviewed; no full proof audit, reading coverage or native acceptance is inferred.' },
    proof_step_reviews: Object.fromEntries(changes.steps.filter(s => s.kind === 'equivalent-presentation').map(s => [s.label, 'Root fixture checks this exact numbered-step rewrite, its unchanged maps and support labels, and its equivalence without any new premise or result.'])),
    evidence: [{ path: evidence, sha256: hashFile(evidence) }], consumers: declarations.map(d => ({ id: d.id, decision: 'unaffected', declaration_sha256: sha(JSON.stringify(d)), source_sha256: authored ? hashFile(`items/${d.id}.md`) : null,
      reason: authored ? 'Root fixture reads this current authored consumer and exact declared use; the supplier presentation change does not alter its hypothesis or argument.' : 'Root fixture reads this nonempty planned declaration and supplier interface; absent source/proof is explicitly not claimed authored or reviewed.' })) };
  if (mode === 'fact-label' && presentationVersion !== 2) entry.fact_reference_reviews = entry.changes.fact_reference_labels.map(delta => ({
    fact_label: delta.fact_label, reference_index: delta.reference_index, target: delta.target,
    pinned_target: {path:'items/lem-title-target.md',sha256:hashFile('items/lem-title-target.md'),title:'Evaluation at a point has kernel (x_1-a_1, ..., x_n-a_n)'},
    reason:'Root fixture reviews this exact added reference display label against the pinned target title, with the same kernel assertion and target; this is no scientific acceptance.',
    reading_limits:'Only this exact presentation mapping and unchanged Fact assertion are fixture-reviewed; no full proof reading or independent source acceptance is claimed.',
  }));
  if (mode === 'terminal-heading') entry.terminal_source_heading_review = {kind:'terminal-source-heading',step_label:'1.1',
    reason:'Root fixture reviews this exact final-step end-marker and glued source heading presentation repair; all proof argument and entire source qualification text remain identical.',
    reading_limits:'Only this exact terminal heading presentation is fixture-reviewed, without new source retrieval, proof acceptance, additional premises or authored consumer coverage.'};
  if (presentationVersion === 2) {
    entry.presentation_version = 2;
    if (consolidation) entry.proof_support_consolidation = consolidation;
    if (relocation) entry.proof_reference_relocation = relocation;
    if (displayLayout) entry.definition_display_layout = displayLayout;
    if (terminalHeading) entry.terminal_remarks_heading = terminalHeading;
    if (supportLayout) entry.proof_support_relocation_layout=supportLayout;
    if (paragraphLayout) entry.proof_paragraph_join_layout=paragraphLayout;
    if (spelling) entry.counterexample_math_spelling=structuredClone(spelling);
    if (exactFixture) entry.exact_native_presentation=structuredClone(exactFixture.selector);
    Object.assign(entry.scientific_review, changes.review_classification);
    entry.presentation_reviews = changes.deltas.map(delta => ({...(exactFixture ? {reviewer:'/root',decision:'accepted',review_kind:delta.kind} : {}),delta_id:delta.id,delta_sha256:sha(JSON.stringify(delta)),
      reason:'Root synthetic fixture explicitly reviews this exact before/after title, interface, Fact or derived exposition pair; no real mathematical approval is granted by a fixture.',
      reading_limits:'Only this exact synthetic delta and declared fixture use are reviewed; no real paper reading, source approval, imported publication or native permission is claimed.',
      evidence:[{path:evidence,sha256:hashFile(evidence)}],
      ...(delta.target ? {pinned_target:{path:`items/${delta.target}.md`,sha256:hashFile(`items/${delta.target}.md`)}} : {})}));
  }
  const review = { version: 1, kind: 'root-reviewed-original-rendering-successors', run, reviewer: '/root', native_review: false,
    reason: 'Root fixture individually reviews the exact source successor and its consumer consequences; immutable imports remain authoritative local snapshots and all native duties remain.', import_receipt_sha256: hashFile('research/math-imports.json'), scope, entries: [entry], inputs: {} };
  function seal() {
    review.inputs = { 'research/math-imports.json': review.import_receipt_sha256,
      ...(authored ? scope.frontier : { [selector]: scope.selector.sha256, 'research/plan-spec.json': scope.plan.sha256 }),
      [entry.path]: entry.pinned_sha256, [entry.original_path]: entry.original_sha256, [entry.repair_receipt.path]: entry.repair_receipt.sha256,
      [join(source, beforePath)]: sha(before), [join(source, adjudicationPath)]: repair.adjudication_sha256,
      ...Object.fromEntries((entry.fact_reference_reviews ?? []).map(r => [r.pinned_target.path, r.pinned_target.sha256])),
      ...Object.fromEntries((entry.presentation_reviews ?? []).filter(r=>r.pinned_target).map(r=>[r.pinned_target.path,r.pinned_target.sha256])),
      ...(entry.changes.proof_support_parser_runtime?.inputs ?? {}),
      ...Object.fromEntries((entry.changes.counterexample_spelling_context?.reference_targets ?? []).map(id=>['items/'+id+'.md',hashFile('items/'+id+'.md')])),
      [ownership]: entry.ownership_evidence.sha256, [ledger]: entry.ledger_evidence.sha256, [evidence]: entry.evidence[0].sha256,
      ...(authored ? Object.fromEntries(entry.consumers.map(c => [`items/${c.id}.md`, c.source_sha256])) : {}) };
    save(root, originalRenderingMaintenancePath(root, run, authored ? null : selector), review);
  }
  const verify = options => verifyMathematicsImports(root, authored ? { run, ...options } : { planning: true, proposedPages: pages, maintenanceRun: run, maintenanceSelector: selector, ...options });
  return { root, source, run, id, before, after, repair, repairPath, adjudicationPath, beforePath, entry, review, pages, declarations, selector, evidence, ownership, ledger, seal, save, hashFile, verify };
}
for (const mode of ['technique', 'title', 'remarks', 'remarks-tikz', 'step', 'fact-label', 'terminal-heading']) test(`exact ${mode} successor accepts 21 planned absent carriers and preserves local pins`, t => {
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

test('Fact label successor keeps surrounding premises, ordered targets and unchanged Sources exact', t => {
  const f = fixture(t, {mode:'fact-label'});
  for (const edit of [
    s => s.replace('The evaluation kernel is maximal', 'The evaluation kernel is prime'),
    s => s.replace('[[lem-title-target|', '[[lem-different-target|'),
    s => s.replace('[F2] The evaluation', '[F3] The evaluation'),
    s => s.replace('Exact unchanged source section.', 'A changed source.'),
    s => s.replace('## Sources', '## Unsupported'),
  ]) assert.throws(() => originalRenderingChanges(Buffer.from(f.before),Buffer.from(edit(f.after))), /Fact|source|section/);
  const labeledBefore=f.before.replace('[[lem-title-target]]','[[lem-title-target|Existing label]]');
  assert.throws(() => originalRenderingChanges(Buffer.from(labeledBefore),Buffer.from(f.after)),/reference-label/);
});
test('Fact label review rejects missing review, false identical-facts claim, changed target binding or unapproved label transformations', t => {
  for (const mode of ['missing','facts-enum','target','title','hash','reason','reading','input']) {
    const f=fixture(t,{mode:'fact-label'}), review=f.entry.fact_reference_reviews[0];
    if(mode==='missing')f.entry.fact_reference_reviews=[];
    if(mode==='facts-enum')f.entry.scientific_review.facts='identical';
    if(mode==='target')review.target='lem-different-target';
    if(mode==='title')review.pinned_target.title+=' changed';
    if(mode==='hash')review.pinned_target.sha256='0'.repeat(64);
    if(mode==='reason')review.reason='stamp';
    if(mode==='reading')review.reading_limits='none';
    f.seal();
    if(mode==='input'){delete f.review.inputs['items/lem-title-target.md'];f.save(f.root,originalRenderingMaintenancePath(f.root,f.run,f.selector),f.review);}
    assert.throws(()=>f.verify(),/original rendering successor|mathematics import changed/i,mode);
  }
});

test('even fully authenticated Root fixture evidence cannot permit any extra Fact label normalization', t => {
  const label=String.raw`Evaluation at a point has kernel $(x_1-a_1, \ldots, x_n-a_n)$`;
  for(const invalid of [label.replace('x_1-a_1','x_2-a_2'),label.replace('Evaluation',String.raw`\mathrm{Evaluation}`),label.replace('$',''),label.replace(', ', ',  '),label.replace(String.raw`\ldots`,String.raw`\\ldots`)]) {
    const f=fixture(t,{mode:'fact-label',factLabel:invalid}); f.seal();
    assert.throws(()=>f.verify(),/Fact label|unpaired math/,invalid);
  }
});

test('terminal source heading repair rejects any other marker, heading, proof, source or movement changes', t => {
  const f=fixture(t,{mode:'terminal-heading'});
  for(const edit of [s=>s.replace('∎','QED'),s=>s.replace('∎\n\n','∎\n'),s=>s.replace('Source qualification','Sources'),s=>s.replace('Reflexivity gives','An added premise gives'),s=>s.replace('Exact unchanged source qualification.','Changed source qualification.')])
    assert.throws(()=>originalRenderingChanges(Buffer.from(f.before),Buffer.from(edit(f.after))),/terminal source heading/);
  for(const kind of ['missing','wrong-step','short-reason']) {
    const g=fixture(t,{mode:'terminal-heading'});
    if(kind==='missing')delete g.entry.terminal_source_heading_review;
    if(kind==='wrong-step')g.entry.terminal_source_heading_review.step_label='2.1';
    if(kind==='short-reason')g.entry.terminal_source_heading_review.reason='stamp';
    g.seal();assert.throws(()=>g.verify(),/terminal source heading review/);
  }
});

// V2 remains opt-in through the same authenticated source, scope and consumer guards.
for (const options of [{mode:'title'}, {mode:'remarks'}, {mode:'fact-label'}, {mode:'step'}, {mode:'title',definition:true}, {mode:'remarks',definition:true}]) test(`V2 authenticated ${options.mode} successor${options.definition?' definition':''} preserves pins`,t=>{
  const f=fixture(t,{...options,presentationVersion:2,authored:true}),pin=readFileSync(join(f.root,`items/${f.id}.md`)),receipt=readFileSync(join(f.root,'research/math-imports.json'));
  f.seal();assert.ok(f.verify()>0);assert.deepEqual(readFileSync(join(f.root,`items/${f.id}.md`)),pin);assert.deepEqual(readFileSync(join(f.root,'research/math-imports.json')),receipt);
  const bad=f.entry.presentation_reviews[0];bad.delta_sha256='0'.repeat(64);f.seal();assert.throws(()=>f.verify(),/unreviewed V2 delta/);
});
test('V2 cannot bypass authenticated original repairs, consumer hashes or owner tool bindings',t=>{
  for(const mode of ['consumer','claim','evidence','protocol','definition-precheck']){
    const f=fixture(t,{mode:'title',presentationVersion:2,authored:true,definition:mode==='definition-precheck'});f.seal();assert.ok(f.verify()>0);
    if(mode==='consumer') f.save(f.root,`items/${f.declarations[0].id}.md`,readFileSync(join(f.root,`items/${f.declarations[0].id}.md`),'utf8')+'\nChanged unreviewed authored consumer.\n');
    if(mode==='claim') f.save(f.source,'research/source-repair-step3-published-claims.jsonl','');
    if(mode==='evidence') f.save(f.root,f.evidence,'Changed unbound review.');
    if(mode==='protocol'){f.entry.presentation_version=3;f.seal();}
    if(mode==='definition-precheck') f.save(f.source,`items/${f.id}.md`,f.after.replace('precheck: n/a','precheck: pass'));
    assert.throws(()=>f.verify(),/changed input|authentication|unsupported presentation|mathematics import changed/i);
  }
});

test('native planning snapshot binds the V2 extractor bytes as an input',t=>{
  const f=fixture(t),tool='tools/physics-support/original-presentation-maintenance.mjs';
  f.save(f.root,tool,'Synthetic V2 helper bytes A.');
  const ctx={repo:f.root,run:f.run},gates=[{id:'planned',argv:['node','tools/physics-support/physics-check.mjs','--plan','research/plan-spec.json','--pages-file',f.selector,'--maintenance-run',f.run]}];
  f.seal();const a=gateReviewSnapshot(ctx,gates,['1-drift']);
  assert.equal(a.inputs.find(i=>i.path===join(f.root,tool)).sha256,f.hashFile(tool));
  f.save(f.root,tool,'Synthetic V2 helper bytes B.');
  assert.notEqual(gateReviewSnapshot(ctx,gates,['1-drift']).sha256,a.sha256);
});

// Exact authenticated completion vocabulary, never a substring or a visual-audit waiver.
for (const findingStatus of ['repaired', 'repaired-and-visually-verified', 'resolved']) test(`authenticated completed finding status ${findingStatus} retains all source guards`, t => {
  const f = fixture(t, { findingStatus, authored: true, presentationVersion: 2 });
  f.seal(); assert.ok(f.verify() > 0);
  f.entry.presentation_reviews[0].delta_sha256 = '0'.repeat(64); f.seal();
  assert.throws(() => f.verify(), /unreviewed V2 delta/);
});
test('unfinished, arbitrary, visual-only or unconfirmed findings are not completed repairs', t => {
  for (const findingStatus of ['pending', 'confirmed', 'visually-verified', 'not-repaired', 'repaired-but-pending', 'unresolved', 'resolved-but-pending', '', null]) {
    const f = fixture(t, { findingStatus }); f.seal();
    assert.throws(() => f.verify(), /main adjudication\/layout evidence/, String(findingStatus));
  }
  const f = fixture(t, { findingStatus: 'repaired-and-visually-verified', findingVerdict: 'unconfirmed' }); f.seal();
  assert.throws(() => f.verify(), /main adjudication\/layout evidence/);
});

test('V2 support consolidation stays inside genuine repair, exact option and per-delta review guards',t=>{
  const f=fixture(t,{mode:'support-consolidation',presentationVersion:2,authored:true});f.seal();assert.ok(f.verify()>0);
  delete f.entry.proof_support_consolidation;f.seal();assert.throws(()=>f.verify(),/support/);
  f.entry.proof_support_consolidation={version:1,steps:['1.2']};f.entry.presentation_reviews=[];f.seal();assert.throws(()=>f.verify(),/delta reviews/);
});
test('support consolidation opt-in is forbidden on legacy entries',t=>{
  const f=fixture(t);f.entry.proof_support_consolidation={version:1,steps:['1.2']};f.seal();assert.throws(()=>f.verify(),/requires V2/);
});
for(const mutation of [{proof_independent:false},{diagram_mathematics_corrected:true}])test(`new consolidation delta preserves diagram independence ${JSON.stringify(mutation)}`,t=>{
  const f=fixture(t,{mode:'support-consolidation',presentationVersion:2,authored:true});f.seal();assert.ok(f.verify()>0);
  const adjudication=JSON.parse(readFileSync(join(f.source,f.adjudicationPath),'utf8'));Object.assign(adjudication,mutation);f.save(f.source,f.adjudicationPath,adjudication);f.repair.adjudication_sha256=f.hashFile(join(f.source,f.adjudicationPath));f.save(f.source,f.repairPath,f.repair);f.entry.repair_receipt.sha256=f.hashFile(join(f.source,f.repairPath));f.seal();assert.throws(()=>f.verify(),/diagram independence/);
});

function fixtureDiagramFlags(f, flags) {
  const adjudication=JSON.parse(readFileSync(join(f.source,f.adjudicationPath),'utf8'));
  delete adjudication.proof_independent;delete adjudication.diagram_mathematics_corrected;Object.assign(adjudication,flags);
  f.save(f.source,f.adjudicationPath,adjudication);f.repair.adjudication_sha256=f.hashFile(join(f.source,f.adjudicationPath));f.save(f.source,f.repairPath,f.repair);f.entry.repair_receipt.sha256=f.hashFile(join(f.source,f.repairPath));f.seal();
}
test('both strict requested steps permit genuinely absent diagram keys with unchanged scientific tokens',t=>{
 const f=fixture(t,{mode:'support-consolidation-both',presentationVersion:2,authored:true});assert.deepEqual(f.entry.changes.deltas.map(d=>d.kind),['proof-support-consolidation','proof-support-consolidation']);fixtureDiagramFlags(f,{});assert.ok(f.verify()>0);
});
for(const flags of [{proof_independent:true},{diagram_mathematics_corrected:false},{proof_independent:false},{diagram_mathematics_corrected:true},{proof_independent:null,diagram_mathematics_corrected:null},{proof_independent:true,diagram_mathematics_corrected:null},{proof_independent:null,diagram_mathematics_corrected:false},{proof_independent:false,diagram_mathematics_corrected:false},{proof_independent:true,diagram_mathematics_corrected:true}])test(`strict support does not excuse partial/contradictory/null diagram keys ${JSON.stringify(flags)}`,t=>{
 const f=fixture(t,{mode:'support-consolidation-both',presentationVersion:2,authored:true});fixtureDiagramFlags(f,flags);assert.throws(()=>f.verify(),/diagram independence/);
});
for(const sourceExtra of ['\n## Remarks\n\nAn unchanged qualification.\n','\n## Remarks\n\n```tikzcd\nA \\arrow[r] & A\n```\n','\n## Background\n\n~~~text\nUnchanged code.\n~~~\n','\n## Background\n\n![diagram](figure.svg)\n','\n## Background\n\n<span>Unchanged HTML</span>\n','\n## Background\n\n\\includegraphics{figure.pdf}\n','\n## Background\n\n\\begin{tikzpicture}x\\end{tikzpicture}\n'])test(`unchanged Remarks/graphics keep the original native flag requirement ${sourceExtra.slice(0,55)}`,t=>{
 const f=fixture(t,{mode:'support-consolidation-both',presentationVersion:2,authored:true,sourceExtra});f.seal();assert.ok(f.verify()>0);fixtureDiagramFlags(f,{});assert.throws(()=>f.verify(),/diagram independence/);
});
test('mixed ordinary V2 proof deltas cannot acquire the strict absent-flag exception',t=>{
 const f=fixture(t,{mode:'support-consolidation-mixed',presentationVersion:2,authored:true});assert.deepEqual(f.entry.changes.deltas.map(d=>d.kind),['proof-step-presentation','proof-support-consolidation']);fixtureDiagramFlags(f,{});assert.throws(()=>f.verify(),/diagram independence/);
});
test('generic V2 steps and new Remarks still need both native flags',t=>{
 for(const mode of ['step','remarks']){const f=fixture(t,{mode,presentationVersion:2,authored:true});fixtureDiagramFlags(f,{});assert.throws(()=>f.verify(),/diagram independence/);}
});

test('typed runtime inputs are live-consumed and recursively included in native owner snapshots',t=>{
 const f=fixture(t,{mode:'support-consolidation-both',presentationVersion:2,authored:true});f.seal();assert.ok(f.verify()>0);const runtime=f.entry.changes.proof_support_parser_runtime,first=runtime.roots[0].entry;const ctx={repo:f.root,run:f.run},gates=[{id:'physics',argv:['node','tools/physics-support/physics-check.mjs','--run',f.run]}];const snapshot=gateReviewSnapshot(ctx,gates,['1-scaffold']);assert.equal(snapshot.inputs.find(i=>i.path===first)?.sha256,runtime.inputs[first]);delete f.review.inputs[first];f.save(f.root,originalRenderingMaintenancePath(f.root,f.run),f.review);assert.throws(()=>f.verify(),/unbound input/);
});

test('V2 reference relocation is authenticated and requires exact target review',t=>{
 const f=fixture(t,{mode:'reference-relocation',presentationVersion:2,authored:true});f.seal();assert.ok(f.verify()>0);assert.equal(f.entry.changes.deltas[0].kind,'proof-reference-relocation');delete f.entry.presentation_reviews[0].pinned_target;f.seal();assert.throws(()=>f.verify(),/unbound V2 reference target/);
});
test('reference relocation never obtains the support-only absent-diagram-keys exception',t=>{
 const f=fixture(t,{mode:'reference-relocation',presentationVersion:2,authored:true});f.seal();assert.ok(f.verify()>0);fixtureDiagramFlags(f,{});assert.throws(()=>f.verify(),/diagram independence/);
});
test('legacy entries reject reference relocation options',t=>{
 const f=fixture(t);f.entry.proof_reference_relocation={version:1,steps:[{label:'1.1',target:'lem-title-target'}]};f.seal();assert.throws(()=>f.verify(),/relocation requires V2/);
});

test('authenticated V2 definition display layout retains exact option, review, runtime and source guards',t=>{
 const f=fixture(t,{mode:'definition-display',definition:true,presentationVersion:2,authored:true});f.seal();assert.ok(f.verify()>0);assert.equal(f.entry.changes.deltas[0].kind,'definition-display-layout');delete f.entry.definition_display_layout;f.seal();assert.throws(()=>f.verify(),/scientific Definition/);
});
test('legacy entries cannot use the definition display selector',t=>{const f=fixture(t);f.entry.definition_display_layout={version:1,display:0};f.seal();assert.throws(()=>f.verify(),/definition display layout requires V2/);});

test('exact authenticated terminal Remarks boundary preserves old native absent keys and all repair/review guards',t=>{const f=fixture(t,{mode:'terminal-remarks',presentationVersion:2,authored:true});f.seal();assert.ok(f.verify()>0);fixtureDiagramFlags(f,{});assert.ok(f.verify()>0);delete f.entry.terminal_remarks_heading;f.seal();assert.throws(()=>f.verify(),/support|Remarks/);});
for(const flags of [{proof_independent:true},{diagram_mathematics_corrected:false},{proof_independent:false,diagram_mathematics_corrected:false},{proof_independent:true,diagram_mathematics_corrected:true},{proof_independent:null,diagram_mathematics_corrected:null}])test('terminal Remarks boundary rejects supplied false/partial/null flags '+JSON.stringify(flags),t=>{const f=fixture(t,{mode:'terminal-remarks',presentationVersion:2,authored:true});fixtureDiagramFlags(f,flags);assert.throws(()=>f.verify(),/native diagram flags/);});
for(const extra of ['```text\nunchanged graphic context\n```','![image](figure.svg)','<span>unchanged HTML</span>',String.raw`\includegraphics{figure}`])test('terminal Remarks absent flags require graphics-free source '+extra,t=>{const f=fixture(t,{mode:'terminal-remarks',presentationVersion:2,authored:true,sourceExtra:'\n'+extra+'\n'});f.seal();assert.ok(f.verify()>0);fixtureDiagramFlags(f,{});assert.throws(()=>f.verify(),/native diagram flags/);});
test('legacy entries cannot declare terminal Remarks boundary',t=>{const f=fixture(t);f.entry.terminal_remarks_heading={version:1,step:'1.1'};f.seal();assert.throws(()=>f.verify(),/requires V2/);});

for(const mode of ['support-layout','support-layout-labels','paragraph-layout'])test('strict authenticated format route accepts only true absent or original valid native pair '+mode,t=>{const f=fixture(t,{mode,presentationVersion:2,authored:true});f.seal();assert.ok(f.verify()>0);fixtureDiagramFlags(f,{});assert.ok(f.verify()>0);f.entry.presentation_reviews[0].delta_sha256='0'.repeat(64);f.seal();assert.throws(()=>f.verify(),/unreviewed V2 delta/);});
for(const mode of ['support-layout-labels','paragraph-layout'])for(const flags of [{proof_independent:true},{diagram_mathematics_corrected:false},{proof_independent:false,diagram_mathematics_corrected:false},{proof_independent:true,diagram_mathematics_corrected:true},{proof_independent:null,diagram_mathematics_corrected:null}])test('strict compound rejects partial/null/contradictory flags '+mode+JSON.stringify(flags),t=>{const f=fixture(t,{mode,presentationVersion:2,authored:true});fixtureDiagramFlags(f,flags);assert.throws(()=>f.verify(),/strict proof layout native\/purity/);});
test('strict support plus Fact labels retain exact published pin review and live runtime bindings',t=>{const f=fixture(t,{mode:'support-layout-labels',presentationVersion:2,authored:true});f.seal();assert.ok(f.verify()>0);const label=f.entry.presentation_reviews.find(r=>r.pinned_target);delete label.pinned_target;f.seal();assert.throws(()=>f.verify(),/unbound V2 reference target/);});
test('strict routes do not admit graphics or Remarks even with original valid native flags',t=>{for(const mode of ['support-layout','paragraph-layout'])for(const sourceExtra of ['\n## Remarks\n\nUnchanged qualification.\n','\n## Background\n\n```text\nunchanged\n```\n','\n## Background\n\n![image](figure.svg)\n','\n## Background\n\n<span>unchanged HTML</span>\n'])assert.throws(()=>fixture(t,{mode,presentationVersion:2,authored:true,sourceExtra}),/Remarks|graphics/);});
test('legacy cannot declare either strict format selector',t=>{for(const field of ['proof_support_relocation_layout','proof_paragraph_join_layout']){const f=fixture(t);f.entry[field]={version:1,steps:['1.1']};f.seal();assert.throws(()=>f.verify(),/strict proof layout requires V2/);}});

test('exact counterexample case retains authenticated source/pins and actual absent native keys',t=>{const f=fixture(t,{mode:'counterexample-spelling',presentationVersion:2,authored:true});f.seal();assert.ok(f.verify()>0);const local=readFileSync(join(f.root,f.entry.path));fixtureDiagramFlags(f,{});assert.ok(f.verify()>0);assert.deepEqual(readFileSync(join(f.root,f.entry.path)),local);f.entry.presentation_reviews[0].delta_sha256='0'.repeat(64);f.seal();assert.throws(()=>f.verify(),/unreviewed V2 delta/);});
for(const flags of [{proof_independent:true},{diagram_mathematics_corrected:false},{proof_independent:false,diagram_mathematics_corrected:false},{proof_independent:true,diagram_mathematics_corrected:true},{proof_independent:null,diagram_mathematics_corrected:null}])test('counterexample exact case rejects false/partial/null supplied flags '+JSON.stringify(flags),t=>{const f=fixture(t,{mode:'counterexample-spelling',presentationVersion:2,authored:true});fixtureDiagramFlags(f,flags);assert.throws(()=>f.verify(),/counterexample spelling native\/purity/);});
test('counterexample exact case never expands default or legacy kind support',t=>{const f=fixture(t,{mode:'counterexample-spelling',presentationVersion:2,authored:true});f.seal();assert.ok(f.verify()>0);delete f.entry.counterexample_math_spelling;f.seal();assert.throws(()=>f.verify(),/unsupported item kind/);const g=fixture(t);g.entry.counterexample_math_spelling=counterexampleFixture.option;g.seal();assert.throws(()=>g.verify(),/counterexample spelling requires V2/);});
test('counterexample unchanged published refs and runtime require actual authority input bindings',t=>{const f=fixture(t,{mode:'counterexample-spelling',presentationVersion:2,authored:true});f.seal();assert.ok(f.verify()>0);delete f.review.inputs['items/'+counterexampleFixture.targets[0]+'.md'];f.save(f.root,originalRenderingMaintenancePath(f.root,f.run),f.review);assert.throws(()=>f.verify(),/unbound input/);});


for (const id of ['lem-normal-density-has-total-mass-one', 'prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class']) {
  test(`exact native ${id} preserves honestly absent diagram flags and strict current evidence`, t => {
    const f = fixture(t, { mode: 'exact-native', exactNativeId: id, presentationVersion: 2, authored: true });
    const adjudication = JSON.parse(readFileSync(join(f.source, f.adjudicationPath)));
    delete adjudication.proof_independent; delete adjudication.diagram_mathematics_corrected;
    f.save(f.source, f.adjudicationPath, adjudication);
    f.repair.adjudication_sha256 = sha(readFileSync(join(f.source, f.adjudicationPath)));
    f.save(f.source, f.repairPath, f.repair); f.entry.repair_receipt.sha256 = f.hashFile(join(f.source, f.repairPath));
    f.seal(); assert.ok(f.verify() > 0);
    f.entry.presentation_reviews[0].decision = 'pending'; f.seal();
    assert.throws(() => f.verify(), /typed Root/);
  });
  test(`exact native ${id} rejects partial, null or contradictory supplied native flags`, t => {
    for (const flags of [{proof_independent:true}, {diagram_mathematics_corrected:false}, {proof_independent:null,diagram_mathematics_corrected:null}, {proof_independent:false,diagram_mathematics_corrected:false}, {proof_independent:true,diagram_mathematics_corrected:true}]) {
      const f = fixture(t, { mode: 'exact-native', exactNativeId: id, presentationVersion: 2, authored: true });
      const adjudication = JSON.parse(readFileSync(join(f.source, f.adjudicationPath)));
      delete adjudication.proof_independent; delete adjudication.diagram_mathematics_corrected; Object.assign(adjudication, flags);
      f.save(f.source, f.adjudicationPath, adjudication); f.repair.adjudication_sha256 = sha(readFileSync(join(f.source, f.adjudicationPath)));
      f.save(f.source, f.repairPath, f.repair); f.entry.repair_receipt.sha256 = f.hashFile(join(f.source, f.repairPath)); f.seal();
      assert.throws(() => f.verify(), /native\/purity guards/);
    }
  });
}

for (const id of ['cor-interval-uncountable', 'lem-equivalence-classes-partition']) test(`exact native ${id} existing Remarks additions retain explicit native diagram requirements`, t => {
  const f = fixture(t, { mode: 'exact-native', exactNativeId: id, presentationVersion: 2, authored: true });
  f.seal(); assert.ok(f.verify() > 0);
  const adjudication = JSON.parse(readFileSync(join(f.source, f.adjudicationPath)));
  delete adjudication.proof_independent; delete adjudication.diagram_mathematics_corrected;
  f.save(f.source, f.adjudicationPath, adjudication); f.repair.adjudication_sha256 = sha(readFileSync(join(f.source, f.adjudicationPath)));
  f.save(f.source, f.repairPath, f.repair); f.entry.repair_receipt.sha256 = f.hashFile(join(f.source, f.repairPath)); f.seal();
  assert.throws(() => f.verify(), /diagram independence/);
});
