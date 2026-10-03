import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { validatePhysicsContent, PHYSICAL_PROOF_KINDS } from '../../physics-support/physics-content.mjs';
import { importMathematics, verifyMathematicsImports } from '../../physics-support/physics-imports.mjs';
import { physicsReviewErrors, reviewInstruction } from '../../physics-support/physics-review.mjs';
import { statementHash } from '../../physics-support/step7-statement.mjs';
import { interfaceText } from '../../physics-support/evidence-bundle.mjs';
import { experimentalEvidenceGuidance } from '../../physics-support/physics-guidance.mjs';
import { stages, workflowRevision } from '../stages/mathlib.mts';
const source = { sources: { references: [{ title: 'Source', url: 'https://example.org/source' }] }, provenance: { statement: 'literature-derived', proof: 'not-applicable' } };
const post = () => ({ id: 'post-state', kind: 'postulate', domain: 'physics', physical_scope: 'Ideal isolated systems', deps: [], body: '## Postulate\nThe stated assumption.', ...source });
const exp = () => ({ id: 'exp-observation', kind: 'experiment', domain: 'physics', physical_scope: 'Specified apparatus', deps: [], body: ['Setup', 'Procedure', 'Observations', 'Uncertainty', 'Interpretation'].map(h => `## ${h}\nSource-backed account.`).join('\n'), empirical_result: { observation: 'Reported observation', uncertainty: 'Reported resolution', conditions: 'Calibration conditions', source_url: 'https://example.org/source' }, ...source });
const physical = (kind = 'physics-theorem') => ({ id: kind === 'physics-theorem' ? 'pthm-result' : 'texp-result', kind, domain: 'physics', physical_scope: 'Conditional model', deps: ['post-state'], dependency_roles: { 'post-state': 'physical-assumption' }, proof_strategy: 'direct', body: '## Statement\nConditional conclusion.\n## Proof\nComplete argument.', ...source, provenance: { statement: 'literature-derived', proof: 'ai-altered' } });
const math = () => ({ id: 'thm-math', kind: 'theorem', domain: 'mathematics', deps: [], body: '## Statement\nMathematical conclusion.' });
const check = (items: any[], extra: any = {}) => validatePhysicsContent({ items, ...extra });
test('physics theorem and thought experiment require identical complete proofs', () => {
 for (const kind of PHYSICAL_PROOF_KINDS) {
  assert.deepEqual(check([post(), physical(kind)]), []);
  assert.ok(check([post(), { ...physical(kind), body: 'Only an imagined setup' }]).some(e => e.code === 'physical-proof'));
  assert.ok(check([post(), { ...physical(kind), proved_here: false }]).some(e => e.code === 'physical-proof-omitted'));
 }
});
test('all four physics classes validate', () => {
 assert.deepEqual(check([post(), exp(), physical(), physical('thought-experiment')]), []);
 const carrier = (item: any) => { const { body, ...meta } = item; return `---\n${JSON.stringify(meta)}\n---\n${body}\n`; };
 const p = post(), e = exp();
 assert.notEqual(statementHash(carrier(p)), statementHash(carrier({ ...p, body: p.body + ' Changed assumption.' })));
 assert.notEqual(statementHash(carrier(e)), statementHash(carrier({ ...e, empirical_result: { ...e.empirical_result, uncertainty: 'Changed bound' } })));
 assert.notEqual(statementHash(carrier(physical())), statementHash(carrier({ ...physical(), physical_scope: 'Changed regime' })));
 const stamped = { ...e, verification: { judge: { verdict: 'pass' } } };
 assert.equal(statementHash(carrier(e)), statementHash(carrier(stamped)));
 assert.equal(interfaceText(carrier(e)), interfaceText(carrier(stamped)));
});
test('math cannot use physical dependencies or aliases or justification', () => {
 const p = { ...post(), aliases: ['state-rule'] };
 for (const field of ['deps', 'justified_by', 'forward_refs']) assert.ok(check([p, { ...math(), [field]: ['state-rule'], dependency_roles: field === 'deps' ? { 'state-rule': 'physical-assumption' } : {} }]).some(e => e.code === 'math-physics-dependency'));
});
test('physics consumes mathematics and shared mathematics appears in both views', () => {
 const p = { ...physical(), deps: ['thm-math'], dependency_roles: { 'thm-math': 'mathematical-premise' } };
 assert.deepEqual(check([math(), p], { pages: [{ id: 'math-page', library: 'mathematics', items: ['thm-math'] }, { id: 'physics-page', library: 'physics', items: ['thm-math', p.id] }] }), []);
 assert.ok(check([p, math()], { pages: [{ id: 'bad', library: 'mathematics', items: [p.id] }] }).some(e => e.code === 'math-page-physics'));
});
test('dependency cycles fail while support cycles remain valid', () => {
 const p = { ...post(), relations: { supported_by: ['exp-observation'] } };
 const e = { ...exp(), deps: ['post-state'], dependency_roles: { 'post-state': 'operational-prerequisite' } };
 assert.deepEqual(check([p, e]), []);
 assert.ok(check([{ ...p, deps: [e.id], dependency_roles: { [e.id]: 'operational-prerequisite' } }, e]).some(e => e.code === 'item-cycle'));
});
test('postulates cannot use experimental support as deduction', () => assert.ok(check([{ ...post(), deps: ['exp-observation'], dependency_roles: { 'exp-observation': 'empirical-premise' } }, exp()]).some(e => e.code === 'nonproof-derivation')));
test('empirical qualifications carry through physical-result chains', () => {
 const premise = { experiment: 'exp-observation', conditions: 'Setting', uncertainty: 'Bound', use: 'Conditional estimate' };
 const p: any = { ...physical(), deps: ['exp-observation'], dependency_roles: { 'exp-observation': 'empirical-premise' }, empirical_premises: [premise] };
 const t: any = { ...physical('thought-experiment'), deps: [p.id], dependency_roles: { [p.id]: 'physical-result' }, empirical_premises: [premise] };
 assert.deepEqual(check([exp(), p, t]), []); delete t.empirical_premises;
 assert.ok(check([exp(), p, t]).some(e => e.code === 'empirical-qualification' && e.id === t.id));
});
test('domain required except for verified legacy imports', () => {
 const m: any = math(); delete m.domain;
 assert.ok(check([m]).some(e => e.code === 'domain-required'));
 assert.deepEqual(check([m], { importedIds: new Set([m.id]) }), []);
});
test('physics kinds cannot masquerade as mathematics', () => assert.ok(check([{ ...post(), domain: 'mathematics' }]).some(e => e.code === 'physical-kind-domain')));
test('physics-theorem is canonical and the retired physical-theorem kind is rejected', () => {
 assert.deepEqual(check([post(), physical('physics-theorem')]), []);
 assert.ok(check([post(), { ...physical(), kind: 'physical-theorem' }]).some(e => e.code === 'kind-prefix'));
});
test('experiment requires a matching empirical source and no observational proof', () => {
 const e: any = exp(); e.empirical_result.source_url = 'https://other.example/source';
 assert.ok(check([e]).some(e => e.code === 'empirical-source')); e.body += '\n## Proof\nInvented proof.';
 assert.ok(check([e]).some(e => e.code === 'nonproof-proof'));
});
test('nonproof contracts require actual review evidence', () => {
 assert.match(reviewInstruction('definition', 'physics'), /operational meaning/);
 const guidance = experimentalEvidenceGuidance();
 assert.match(guidance, /Classical waves also interfere/);
 assert.match(guidance, /nonzero probability/);
 assert.ok(physicsReviewErrors('experiment', { physics_review: {} }).some(message => message.includes('statistical_inference')));
 for (const kind of ['postulate', 'experiment']) { assert.ok(physicsReviewErrors(kind, {}).length); assert.match(reviewInstruction(kind), /Do not demand a proof/); }
});
test('every stage has an independent physics gate and no obsolete waiver', () => {
 assert.match(workflowRevision, /^physics-/);
 for (const stage of stages) {
  assert.match(stage.gates.toString(), /physics-check\.mjs/);
  assert.ok(!stage.gatesWaived);
 }
});
test('imports are byte-identical snapshots and source drift holds the run', t => {
 const dir = mkdtempSync(join(tmpdir(), 'physics-imports-')); t.after(() => rmSync(dir, { recursive: true, force: true }));
 const src = join(dir, 'math'), target = join(dir, 'physics');
 mkdirSync(join(src, 'items'), { recursive: true }); mkdirSync(join(src, 'library'), { recursive: true });
 const body = '---\nid: thm-math\nkind: theorem\nstatus: published\n---\n## Statement\nResult.\n';
 writeFileSync(join(src, 'items/thm-math.md'), body); importMathematics(target, src);
 assert.equal(readFileSync(join(target, 'items/thm-math.md'), 'utf8'), body); assert.equal(verifyMathematicsImports(target), 1);
 writeFileSync(join(src, 'items/thm-math.md'), body + 'Changed'); assert.throws(() => verifyMathematicsImports(target), /import changed/);
 assert.equal(readFileSync(join(target, 'items/thm-math.md'), 'utf8'), body);
});
test('CLI refuses the mathematical workspace', () => {
 const entry = resolve('bin/autopilot.mts');
 const r = spawnSync(process.execPath, ['--import', 'tsx', entry, 'status', '--repo', resolve('../..')], { encoding: 'utf8' });
 assert.notEqual(r.status, 0); assert.match(r.stderr, /refuses the mathematics repository/);
});
test('real planning entrypoint preserves physics library and kind metadata', t => {
 const dir = mkdtempSync(join(tmpdir(), 'physics-planning-')); t.after(() => rmSync(dir, { recursive: true, force: true }));
 const repo = join(dir, 'physics'), src = join(dir, 'math');
 for (const base of [repo, src]) for (const name of ['items', 'library', 'research']) mkdirSync(join(base, name), { recursive: true });
 const fs = requireForFixture();
 fs.symlinkSync(resolve('..'), join(repo, 'tools'), 'dir');
 fs.cpSync(resolve('../../physics/briefs'), join(repo, 'briefs'), { recursive: true });
 importMathematics(repo, src);
 const pages = [
  { id: 'states', title: 'States', category: 'quantum-mechanics', library: 'physics', kind: 'A', order: 1, companion: 'states-examples', requires: [], items: [{ id: 'post-state', kind: 'postulate', domain: 'physics', deps: [] }] },
  { id: 'states-examples', title: 'State examples', category: 'quantum-mechanics', library: 'physics', kind: 'B', order: 2, requires: ['states'], items: [{ id: 'texp-result', kind: 'thought-experiment', domain: 'physics', deps: ['post-state'], dependency_roles: { 'post-state': 'physical-assumption' } }] },
 ];
 writeFileSync(join(repo, 'research/plan-spec.json'), JSON.stringify({ pages }));
 const r = spawnSync(process.execPath, ['--import', 'tsx', resolve('bin/autopilot.mts'), 'plan', '--repo', repo, '--run', 'physics-smoke', '--pairs', 'states'], { encoding: 'utf8', env: { ...process.env, PHYSICS_REPO: repo }, timeout: 60000 });
 assert.equal(r.status, 0, r.stdout + r.stderr);
 const manifest = JSON.parse(readFileSync(join(repo, 'research/physics-smoke-batch-1.pages.json'), 'utf8'));
 assert.equal(manifest[0].library, 'physics');
 const task = readFileSync(join(repo, 'research/physics-smoke-beta-1.task.md'), 'utf8');
 assert.match(task, /Physics content contract/);
});
// Node's fs namespace keeps fixture construction readable without affecting live paths.
import * as fixtureFs from 'node:fs';
function requireForFixture() { return fixtureFs; }
