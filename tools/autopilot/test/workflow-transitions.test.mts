import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { stages, step3Plan, workflowRevision } from '../stages/mathlib.mts';
import { assertWorkflowRevision } from '../src/workflow-revision.mts';
import { recordStep3 } from '../../step3-decisions.mjs';

const repo = fileURLToPath(new URL('../../..', import.meta.url));
const stage = (id: string): any => stages.find(s => s.id === id);

test('author, splice, review, cross-closure and judgment are ordered barriers', () => {
  const ids = stages.map(s => s.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every(id => /^[1-9][ab]?-/.test(id)));
  assert.deepEqual(ids.slice(ids.indexOf('3a-scope'), ids.indexOf('6-judge') + 1), [
    '3a-scope', '3-baseline', '3b-author', '4-splice', '4-baseline',
    '5a-prepare', '5a-adjudicate', '5a-baseline', '5b-edges', '5b-cross',
    '5b-close', '6-scope', '6-judge',
  ]);
  assert.ok(ids.includes('7-rejudge') && ids.includes('8-receipt') && ids.includes('9-close-v2'));
  for (const s of stages.filter(s => /^[3456]/.test(s.id))) assert.equal(s.pipeline, undefined);
  const ctx = { repo, run: 'test' };
  assert.equal(stage('3-baseline').plan(ctx)[0].argv.at(-1), 'pre-author');
  assert.equal(stage('4-baseline').plan(ctx)[0].argv.at(-1), 'post-author');
  assert.ok(stage('5b-cross').gates(ctx).some(g => g.id === 'impact-audit'
    && g.argv.includes('pre-author') && g.argv.includes('post-5a')));
  assert.ok(!stage('5b-close').pattern.test('alpha-5b-lead.result.json'));
});

test('the production Steps 1 through 9 escalate every gate failure to the owner', () => {
  const config = JSON.parse(readFileSync(join(repo, 'autopilot.config.json'), 'utf8'));
  assert.equal(config.gateFailurePolicy, 'owner');
  assert.ok(stages.length > 0);
  assert.ok(stages.every(s => /^[1-9][ab]?-/.test(s.id)));
});

test('workflow revision rejects historical state/results without changing them', () => {
  const old = { stage: 'historical-stage', stages: { prior: {} }, dispatches: {} };
  const bytes = JSON.stringify(old);
  assert.throws(() => assertWorkflowRevision(old, workflowRevision), /fresh run/);
  assert.equal(JSON.stringify(old), bytes);
  assert.throws(() => assertWorkflowRevision({}, workflowRevision, true), /Historical receipts/);
  assert.doesNotThrow(() => assertWorkflowRevision({}, workflowRevision));
  assert.doesNotThrow(() => assertWorkflowRevision({ ...old, workflowRevision }, workflowRevision, true));
});

test('group authors can add proved local prerequisites before the unchanged Step 4 splice', t => {
  const root = mkdtempSync(join(tmpdir(), 'group-author-transition-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'research')); mkdirSync(join(root, 'items'));
  const put = (name: string, data: any) => writeFileSync(join(root, 'research', name), JSON.stringify(data));
  const original: any[] = [
    { id: 'a', kind: 'A', category: 'algebra', companion: 'b', order: 1, requires: [],
      items: [{ id: 'thm-consumer', kind: 'theorem', statement: 'C', deps: [] }] },
    { id: 'b', kind: 'B', category: 'algebra', companion: 'a', order: 2, requires: ['a'],
      items: [{ id: 'ex-leaf', kind: 'example', statement: 'E', deps: ['thm-consumer'] }] },
  ];
  put('plan-spec.json', { pages: original });
  const current = structuredClone(original);
  current[0].items.unshift({ id: 'lem-local', kind: 'lemma', statement: 'L', deps: [] });
  current[0].items[1].deps = ['lem-local'];
  put('r-batch-1.pages.json', current);
  put('r-alpha-groups.json', [{ label: 'a', covers: ['1'] }]);
  const ctx = { repo: root, run: 'r' };
  const author = step3Plan(ctx, { label: 'a', covers: ['1'] }, 'final');
  assert.equal(author.job, 'authoring');
  assert.equal(author.brief, 'briefs/group-author.md');
  assert.deepEqual(author.covers, ['1']);
  assert.ok(stage('3b-author').artifacts(ctx, '1').includes('items/lem-local.md'));
  const splice = () => spawnSync(process.execPath, [join(repo, 'tools/splice-plan.mjs'), '--run', 'r', '--batch', '1'],
    { cwd: root, encoding: 'utf8' });
  assert.notEqual(splice().status, 0, 'an unreviewed inventory insertion cannot splice');
  recordStep3(root, { run: 'r', phase: 'scope', page: 'a', decision: 'sufficient', reason: 'Same claims, necessary local lemma.' } as any);
  for (const id of ['lem-local', 'thm-consumer', 'ex-leaf']) {
    writeFileSync(join(root, 'items', `${id}.md`), `---\nid: ${id}\nstatus: draft\ndeps: []\n---\nComplete fixture argument.\n`);
  }
  for (const id of ['lem-local', 'thm-consumer', 'ex-leaf']) recordStep3(root, {
    run: 'r', phase: 'item', item: id, decision: 'accept', confidence: 1,
    dependencies: [], reason: 'Fixture authored and examined.',
  } as any);
  const done = splice();
  assert.equal(done.status, 0, done.stderr + done.stdout);
  assert.deepEqual(JSON.parse(readFileSync(join(root, 'research/plan-spec.json'), 'utf8')).pages[0].items.map(i => i.id),
    ['lem-local', 'thm-consumer']);
});

test('all dispatches and standalone item judges require honest source verification', () => {
  const dispatch = readFileSync(join(repo, 'tools/dispatch.mjs'), 'utf8');
  const judge = readFileSync(join(repo, 'tools/judge.mts'), 'utf8');
  assert.match(dispatch, /Be honest about your understanding/);
  assert.match(dispatch, /consult authoritative sources/);
  assert.match(judge, /Be honest about your mathematical understanding/);
  assert.match(judge, /tools\.web_search=true/);
  const brief = readFileSync(join(repo, 'briefs/group-author.md'), 'utf8');
  assert.match(brief, /potentially defective published item/);
  assert.match(brief, /Escalate substantial unmet prerequisites/);
  assert.match(brief, /fully author/);
});
