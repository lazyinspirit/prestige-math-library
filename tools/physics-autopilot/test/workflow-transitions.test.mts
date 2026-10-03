import { spawnSync } from './fixture-process.mts';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { fileURLToPath } from 'node:url';
import { stages, step3Plan, workflowRevision } from '../stages/mathlib.mts';
import { assertWorkflowRevision } from '../src/workflow-revision.mts';
import { recordStep3 } from '../../physics-support/step3-decisions.mjs';
import { MAX_RUN_BATCHES } from '../src/capacity.mjs';

const repo = fileURLToPath(new URL('../../..', import.meta.url));
const stage = (id: string): any => stages.find(s => s.id === id);

test('author, splice, the reader pipeline, cross-closure and judgment keep their order', () => {
  const ids = stages.map(s => s.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every(id => /^[1-9](?:\.\d+)?[ab]?-/.test(id)));
  assert.deepEqual(ids.slice(ids.indexOf('3a-scope'), ids.indexOf('6-judge') + 1), [
    '3a-scope', '3-baseline', '3b-author', '4-splice', '4-baseline',
    '5a-prepare', '5a-read', '5a-split', '5a-refute', '5a-collect',
    '5a-adjudicate', '5a-baseline', '5b-edges', '5b-cross', '5b-close',
    '6-scope', '6-judge',
  ]);
  assert.ok(ids.includes('7.4-rejudge') && ids.includes('8-receipt') && ids.includes('9-close-v2'));
  // Only the reader pipeline overlaps; everything else in Steps 3-6 is a barrier.
  const pipelined = new Set(['5a-read', '5a-split', '5a-refute', '5a-collect']);
  for (const s of stages.filter(s => /^[3456]/.test(s.id) && !pipelined.has(s.id)))
    assert.equal(s.pipeline, undefined, `${s.id} must be a whole-frontier barrier`);
  const ctx = { repo, run: 'test' };
  assert.equal(stage('3-baseline').plan(ctx)[0].argv.at(-1), 'pre-author');
  assert.equal(stage('4-baseline').plan(ctx)[0].argv.at(-1), 'post-author');
  assert.ok(stage('5b-cross').gates(ctx).some(g => g.id === 'impact-audit'
    && g.argv.includes('pre-author') && g.argv.includes('post-5a')));
  assert.ok(!stage('5b-close').pattern.test('alpha-5b-lead.result.json'));
});

test('the production Steps 1 through 9 require owner repair, recertification and a gate retry', () => {
  const config = JSON.parse(readFileSync(join(repo, 'physics/physics-autopilot.config.json'), 'utf8'));
  assert.equal(config.gateFailurePolicy, 'owner-recertify');
  assert.ok(stages.length > 0);
  assert.ok(stages.every(s => /^[1-9](?:\.\d+)?[ab]?-/.test(s.id)));
});

test('pair authoring has no capacity queue within the run ceiling', () => {
  const config = JSON.parse(readFileSync(join(repo, 'physics/physics-autopilot.config.json'), 'utf8'));
  assert.equal(stage('3b-author').concurrency, MAX_RUN_BATCHES);
  assert.ok(config.globalConcurrency >= MAX_RUN_BATCHES);
  const dispatch = spawnSync(process.execPath, [join(repo, 'tools/physics-support/dispatch.mjs'), '--help'],
    { cwd: repo, encoding: 'utf8' });
  assert.match(dispatch.stderr, new RegExp(`alpha-high \\(workspace-write, cap ${MAX_RUN_BATCHES}\\)`));
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
  mkdirSync(join(root, 'research'), { recursive: true }); mkdirSync(join(root, 'items'), { recursive: true });
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
  const splice = () => spawnSync(process.execPath, [join(repo, 'tools/physics-support/splice-plan.mjs'), '--run', 'r', '--batch', '1'],
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

test('Step 4 licenses an A-page lemma used on its B companion, but not an unrelated B page', t => {
  const make = (consumer: 'companion' | 'other') => {
    const root = mkdtempSync(join(tmpdir(), 'paired-local-addition-'));
    t.after(() => rmSync(root, { recursive: true, force: true }));
    mkdirSync(join(root, 'research'), { recursive: true }); mkdirSync(join(root, 'items'), { recursive: true });
    const put = (name: string, data: any) => writeFileSync(join(root, 'research', name), JSON.stringify(data));
    const original: any[] = [
      { id: 'a', kind: 'A', companion: 'b', order: 1, requires: [],
        items: [{ id: 'thm-consumer', kind: 'theorem', statement: 'C', deps: [] }] },
      { id: 'b', kind: 'B', companion: 'a', order: 2, requires: ['a'],
        items: [{ id: 'ex-leaf', kind: 'example', statement: 'E', deps: ['thm-consumer'] }] },
      { id: 'other-a', kind: 'A', companion: 'other-b', order: 3, requires: [],
        items: [{ id: 'thm-other', kind: 'theorem', statement: 'Other', deps: [] }] },
      { id: 'other-b', kind: 'B', companion: 'other-a', order: 4, requires: ['other-a'],
        items: [{ id: 'ex-other', kind: 'example', statement: 'Other example', deps: [] }] },
    ];
    put('plan-spec.json', { pages: original });
    const current = structuredClone(original);
    current[0].items.unshift({ id: 'lem-local', kind: 'lemma', statement: 'L', deps: [] });
    const consumerPage = current[consumer === 'companion' ? 1 : 3];
    consumerPage.items[0].deps.push('lem-local');
    put('r-batch-1.pages.json', current);

    for (const page of current.filter(page => page.kind === 'A')) recordStep3(root, {
      run: 'r', phase: 'scope', page: page.id, decision: 'sufficient',
      reason: 'The existing pair scope supports the local prerequisite.',
    } as any);
    const itemIds = current.flatMap(page => page.items.map((item: any) => item.id).filter(id => id !== 'physics-content'));
    for (const id of itemIds) writeFileSync(join(root, 'items', `${id}.md`),
      `---\nid: ${id}\nstatus: draft\ndeps: []\n---\nComplete fixture argument.\n`);
    for (const id of itemIds) recordStep3(root, {
      run: 'r', phase: 'item', item: id, decision: 'accept', confidence: 1,
      dependencies: [], reason: 'Fixture item and all current inputs were examined.',
    } as any);
    return { root, original, result: spawnSync(process.execPath,
      [join(repo, 'tools/physics-support/splice-plan.mjs'), '--run', 'r', '--batch', '1', '--dry-run'],
      { cwd: root, encoding: 'utf8' }) };
  };

  const paired = make('companion');
  assert.equal(paired.result.status, 0, paired.result.stderr + paired.result.stdout);
  assert.match(paired.result.stdout, /UPDATING a/);

  const unrelated = make('other');
  assert.equal(unrelated.result.status, 1, 'an unrelated B-page consumer does not license an A-page addition');
  assert.match(unrelated.result.stderr, /Refusing to overwrite/);
  assert.doesNotMatch(unrelated.result.stdout, /UPDATING a/);
  assert.deepEqual(JSON.parse(readFileSync(join(unrelated.root, 'research/plan-spec.json'), 'utf8')).pages,
    unrelated.original, 'the refused dry-run must not alter the plan');
});

test('all dispatches and standalone item judges require honest source verification', () => {
  const dispatch = readFileSync(join(repo, 'tools/physics-support/dispatch.mjs'), 'utf8');
  const judge = readFileSync(join(repo, 'tools/physics-support/judge.mts'), 'utf8');
  assert.match(dispatch, /Be honest about your understanding/);
  assert.match(dispatch, /consult authoritative sources/);
  assert.match(judge, /Be honest about your mathematical understanding/);
  assert.match(judge, /tools\.web_search=true/);
  const brief = readFileSync(join(repo, 'briefs/group-author.md'), 'utf8');
  assert.match(brief, /potentially defective published item/);
  assert.match(brief, /Escalate substantial unmet prerequisites/);
  assert.match(brief, /fully author/);
});
