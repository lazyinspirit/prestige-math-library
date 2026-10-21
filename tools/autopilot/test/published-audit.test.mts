// Focused regressions for the changed behavior; not an end-to-end audit run.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { MODELS } from '../../models.mjs';
import { APP_DIR } from '../../paths.mjs';
import { prepareAdjudication, emptyAdjudicationAssignment, closeEmptyAdjudication, digest, workerReport, workerLabel, collect, reviewContextHashes } from '../../step5-workflow.mjs';
import { frontierGateBattery } from '../../step5-frontier-gate.mjs';
import { stagesForRun as auditStages, auditProfile } from '../stages/mathlib.audit.mts';
import { stagesForRun as nativeStages } from '../stages/owner-supervised.mts';
import { renderAuditPages } from '../src/audit-render.mts';
import { auditClaimText } from '../src/audit-editorial.mts';
import { prepareAuditCarrier, handoffAudit } from '../bin/audit.mts';
import { split, yaml } from '../../pathway-lib.mjs';
import { sol61Effort } from '../../math-workflow-effort.mjs';

function fixture(omitPublished = false) {
  const root = mkdtempSync(join(tmpdir(), 'published-adjudication-'));
  mkdirSync(join(root, 'items')); mkdirSync(join(root, 'research'));
  const run = 'published-fixture', ids = ['thm-published', 'thm-draft', 'thm-published-clean'];
  for (const [index, id] of ids.entries()) {
    writeFileSync(join(root, 'items', `${id}.md`), `---\nid: ${id}\nkind: theorem\nstatus: ${index === 1 ? 'draft' : 'published'}\ndeps: []\n---\n\n## Statement\n\nFixture ${index}.\n`);
    writeFileSync(join(root, 'research', `${run}-batch-${index + 1}.pages.json`), JSON.stringify([
      { id: `page-${index + 1}`, items: [{ id, deps: [] }] },
    ]));
  }
  const verdicts = ids.filter(id => !omitPublished || id !== 'thm-published').map(id => ({
    id, model: MODELS.luna.id, context_sha256: 'a'.repeat(64), keep: id.endsWith('-clean'),
  }));
  writeFileSync(join(root, 'research', `${run}-judge.jsonl`), verdicts.map(v => JSON.stringify(v)).join('\n') + '\n');
  return { root, run, ids, cleanup: () => rmSync(root, { recursive: true, force: true }) };
}

test('published rejections owe real adjudication and retain native gate scope/status', () => {
  const f = fixture();
  try {
    const before = readFileSync(join(f.root, 'items/thm-published.md'), 'utf8');
    const pack = prepareAdjudication(f.root, f.run, 'initial', 1);
    assert.deepEqual(pack.assignments['1'].map(row => row.id), ['thm-published']);
    assert.deepEqual(pack.assignments['2'].map(row => row.id), ['thm-draft']);
    assert.equal(emptyAdjudicationAssignment(pack, '1'), false);
    assert.equal(emptyAdjudicationAssignment(pack, '3'), true);
    assert.throws(() => closeEmptyAdjudication(f.root, f.run, 'initial', 1, '1', digest(pack)), /nonempty|empty/i);
    const [gate] = frontierGateBattery({ repo: f.root, run: f.run }, [{ id: 'precheck', argv: ['node', 'tools/precheck.mts'] }]);
    assert.ok(gate.argv.includes('items/thm-published.md'));
    assert.ok(gate.argv.includes('items/thm-draft.md'));
    assert.ok(gate.argv.includes('items/thm-published-clean.md'));
    assert.equal(readFileSync(join(f.root, 'items/thm-published.md'), 'utf8'), before);
  } finally { f.cleanup(); }
});

test('a published subject cannot evade adjudication by having no Step-4 verdict', () => {
  const f = fixture(true);
  try { assert.throws(() => prepareAdjudication(f.root, f.run, 'initial', 1), /missing Step 4 verdict: thm-published/); }
  finally { f.cleanup(); }
});

test('audit skips independent review and preserves the remaining native controls', () => {
  const ctx: any = { repo: resolve('.'), run: 'audit-composition-probe', doctor: true };
  const original = nativeStages(ctx), first = original.findIndex(stage => stage.id === '2-scope-review');
  const composed = auditStages(ctx), suffix = composed.slice(2);
  const retained = original.slice(first).filter(s => !/^3(?:[ab]|-)/.test(s.id));
  assert.ok(original.some(s => s.id === '3a-read'), 'ordinary builds retain independent review');
  assert.deepEqual(suffix.map(s => s.id), retained.map(s => s.id));
  assert.deepEqual(suffix.slice(0, 3).map(s => s.id), ['2-scope-review', '4-scope', '4-judge']);
  assert.ok(!composed.some(s => /^3(?:[ab]|-)/.test(s.id)));
  assert.deepEqual([...new Set(composed.map(s => /^Step (\d):/.exec(s.label)?.[1]))], ['1', '2', '3', '4', '5']);
  assert.equal(suffix[1].plan!(ctx, ['all'])[0].argv?.at(-3), 'handoff');
  for (let n = 0; n < suffix.length; n++) {
    const expected = retained[n], actual = suffix[n];
    for (const key of ['concurrency', 'pipeline', 'maxFixRounds', 'maxAttempts', 'perItemFixBudget', 'finalValidation'])
      assert.deepEqual(actual[key], expected[key], `${actual.id}: ${key}`);
    const profile = (stage, role) => typeof stage.modelProfile === 'function' ? stage.modelProfile({ role }) : stage.modelProfile;
    for (const role of ['tool', 'reader', 'refuter', 'alpha-batch-read', 'alpha-adjudicate']) assert.equal(profile(actual, role), auditProfile(profile(expected, role)));
    assert.equal(actual.terminalTransaction?.validatedStage, expected.terminalTransaction?.validatedStage);
    if (expected.terminalTransaction) assert.equal(actual.terminalTransaction.receipt(ctx), expected.terminalTransaction.receipt(ctx));
  }
  assert.equal(suffix.at(-1)?.id, '6-finalize-v3');
});

test('audit handoff checks acceptance and the plan before freezing and rendering scope', () => {
  const calls: string[][] = [];
  handoffAudit('/unused', 'audit-test', (_root, argv) => { calls.push(argv); return ''; });
  assert.deepEqual(calls.map(argv => argv[1]), ['tools/tsx-run.mjs', 'tools/batch-scope-review.mjs',
    'tools/splice-plan.mjs', 'tools/touchlog.mjs', 'tools/step5-scope.mjs']);
  assert.ok(calls[2].includes('--verify'));
  assert.ok(calls[3].includes('audit-after-scope-review'));
  assert.ok(calls[4].includes('render'));
  for (const failed of [0, 1, 2, 3]) {
    let count = 0;
    assert.throws(() => handoffAudit('/unused', 'audit-test', () => {
      if (count++ === failed) throw Error('handoff held');
      return '';
    }), /handoff held/);
    assert.equal(count, failed + 1, 'failed prerequisites cannot render the review scope');
  }
});

test('audit-only medium effort is selected and accepted by native Step-5 collection', () => {
  const f = fixture();
  const put = (path: string, data: any) => { mkdirSync(join(path, '..'), { recursive: true }); writeFileSync(path, JSON.stringify(data)); };
  try {
    assert.equal(sol61Effort(f.root, f.run), 'high', 'ordinary builds retain high effort');
    put(join(f.root, 'research', `${f.run}-audit`, 'origin.json'), {
      version: 1, run: f.run, kind: 'published-math-category-audit', workflowRevision: 'published-math-audit-v2',
      sol61_effort: 'medium', historical_execution_coverage_adopted: false,
    });
    assert.equal(sol61Effort(f.root, f.run), 'medium');
    const pack = prepareAdjudication(f.root, f.run, 'initial', 1);
    const evidence = { reason: 'This fixture tests routing and model identity rather than mathematical acceptance.', uncertain: false, source_urls: [], familiar: true };
    const before = readFileSync(join(f.root, 'items/thm-published.md'), 'utf8');
    for (const unit of ['1', '2']) {
      const ids = pack.assignments[unit].map(row => row.id), contexts = reviewContextHashes(f.root, ids);
      put(workerReport(f.root, f.run, 'initial', 1, unit), { run: f.run, phase: 'initial', round: 1, unit, input_sha256: digest(pack),
        decisions: pack.assignments[unit].map(row => ({ ...row, outcome: 'false_positive', ...evidence })),
        reviews: ids.map(id => ({ id, disposition: 'unaffected', ...contexts[id], ...evidence })), created_items: [], downstream: [], ledger_updates: [] });
      put(join(f.root, 'research', `${f.run}-dispatch`, `alpha-adjudicate-${workerLabel('initial', 1, unit)}.result.json`), {
        run: f.run, role: 'alpha-adjudicate', label: workerLabel('initial', 1, unit), covers: [unit], ok: true,
        model: MODELS.sol61.id, provider_effort: 'medium',
      });
    }
    closeEmptyAdjudication(f.root, f.run, 'initial', 1, '3', digest(pack));
    put(join(f.root, 'research', `${f.run}-dispatch`, 'tool-step5-v2-empty-initial-r1-u3.result.json'), {
      run: f.run, role: 'tool', label: 'step5-v2-empty-initial-r1-u3', covers: ['3'], ok: true,
      written_by: 'autopilot', ended_at: new Date().toISOString(),
    });
    const result = collect(f.root, f.run, 'initial', 1);
    assert.equal(result.decisions.length, 2);
    assert.equal(readFileSync(join(f.root, 'items/thm-published.md'), 'utf8'), before);
  } finally { f.cleanup(); }
});

test('actual renderer keeps nonlandmark isolated examples and prerequisites default closed', async () => {
  assert.ok(APP_DIR, 'application renderer required');
  const items = new Map(['def-a', 'thm-b', 'ex-c'].map((id, index) => [id, {
    id, kind: ['definition', 'theorem', 'example'][index], title: id, landmark: index < 2, deps: [],
  }]));
  const ids = [...items.keys()];
  const output = renderAuditPages([{ page: 'fixture', ids, items: [...items.values()] }]);
  const chart = output.graphs[0].chart;
  for (const id of ids) assert.ok(chart.includes(id.replaceAll('-', '_') + '["'));
  const html = output.prerequisites_html;
  assert.match(html, /^<details><summary/);
  assert.doesNotMatch(html, /<details[^>]*\bopen\b/);
});

test('statement hyperlinks move after complete claims and cannot silently disappear', async () => {
  const before = '## Statement\n\nFor a [[def-space|space]] $X$, the property holds. See [a source](https://example.org).\n';
  const repaired = '## Statement\n\nFor a space $X$, the property holds.\n\n## Statement references\n\n[[def-space|Spaces]]\n\n[a source](https://example.org)\n';
  assert.deepEqual(await auditClaimText('thm-fixture', 'theorem', repaired, before), []);
  assert.ok((await auditClaimText('thm-fixture', 'theorem', before)).some(e => e.includes('contains hyperlinks')));
  assert.ok((await auditClaimText('thm-fixture', 'theorem', '## Statement\n\nThe property holds.\n', before)).some(e => e.includes('deleted instead of moved')));
  for (const hyperlink of ['[source][ref]', '<https://example.org>', 'https://example.org', '<a href="https://example.org">source</a>']) {
    const body = `## Statement\n\nA claim using ${hyperlink}.\n\n## Remarks\n\n[ref]: https://example.org\n`;
    assert.ok((await auditClaimText('thm-fixture', 'theorem', body)).some(e => e.includes('contains hyperlinks')), hyperlink);
  }
});

test('mechanical preparation deletes page summaries without demotion or item-body deletion', () => {
  const pageFm = 'page: fixture\ntitle: Fixture\nstatus: published\nitems: [thm-fixture]\nexamples: []\n';
  const pageSource: any = { path: 'library/test/fixture.md', data: yaml().parse(pageFm), doc: yaml().parseDocument(pageFm), body: '## Summary\n\nOld summary.\n' };
  const page = prepareAuditCarrier(pageSource), parsed = split(page);
  assert.equal(parsed.body.trim(), '');
  assert.equal(yaml().parse(parsed.fm).status, 'published');
  assert.equal(yaml().parse(parsed.fm).audit_layout, 'statement-first-v1');
  assert.deepEqual(yaml().parse(parsed.fm).items, ['thm-fixture']);
  const itemFm = 'id: thm-fixture\npage: fixture\nstatus: published\nverification: {audited: 2026-01-01}\n';
  const itemSource: any = { path: 'items/thm-fixture.md', data: yaml().parse(itemFm), doc: yaml().parseDocument(itemFm), body: '## Statement\n\nClaim.\n\n## Proof\n\nArgument.\n' };
  const item = split(prepareAuditCarrier(itemSource, 3));
  assert.equal(item.body.trim(), itemSource.body.trim());
  assert.equal(yaml().parse(item.fm).status, 'published');
  assert.equal(yaml().parse(item.fm).dependency_level, 3);
  assert.deepEqual(yaml().parse(item.fm).verification, itemSource.data.verification);
});
