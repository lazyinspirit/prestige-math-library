import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { repairGateBatch } from '../stages/step56-repairs.mts';

test('an open defect in the failing detector holds instead of redispatching content repair', async () => {
  const repo = mkdtempSync(join(tmpdir(), 'step56-tool-hold-'));
  try {
    mkdirSync(join(repo, 'research'));
    writeFileSync(join(repo, 'research', 'defect-ledger.jsonl'), JSON.stringify({
      defect_id: 'detector-bug', run: 'r', disposition: 'open', location: 'tool-code',
      subject: 'tools/boundary-audit.mjs', subclass_note: 'Review normalization collision',
    }) + '\n');
    let started = 0;
    const result = await repairGateBatch({ ctx: { repo, run: 'r' }, round: 2,
      stage: { id: '6b-import-join', gates: () => [{ id: 'import-5-author-boundary-audit', argv: ['node', 'tools/boundary-audit.mjs'] }] },
      failure: { id: 'boundary-audit' }, executor: { start() { started++; } } }, {});
    assert.equal(started, 0);
    assert.match(result?.owner?.reason ?? '', /detector-bug/);
  } finally { rmSync(repo, { recursive: true, force: true }); }
});

test('a repair wave gives one group every overlapping gate and disjoint groups separate writers', async () => {
  const repo = mkdtempSync(join(tmpdir(), 'step56-repair-'));
  try {
    mkdirSync(join(repo, 'research'));
    for (const batch of ['1', '2']) writeFileSync(join(repo, 'research', `r-batch-${batch}.pages.json`),
      JSON.stringify([{ id: `page-${batch}`, items: [{ id: `thm-item-${batch}` }] }]));
    const plans: any[] = [];
    const first = { id: 'depcheck', output: 'ERROR missing [thm-item-1]: missing dependency', liveItems: ['thm-item-1'] };
    const second = { id: 'rendercheck', output: 'ERROR render [thm-item-1]: bad math\nERROR render [thm-item-2]: bad math', liveItems: ['thm-item-1','thm-item-2'] };
    await repairGateBatch({ ctx: { repo, run: 'r' }, stage: { id: '5-author' }, round: 1,
      failure: { ...first, advisory: [second] }, executor: { start(_s: any, plan: any) { plans.push(plan); } } },
    { alphaGroups: () => [{ label: 'a', covers: ['1'] }, { label: 'b', covers: ['2'] }], MECHANICAL_REPAIRS: {} });
    assert.equal(plans.length, 2);
    assert.match(readFileSync(join(repo, plans[0].task), 'utf8'), /thm-item-1/);
    assert.doesNotMatch(readFileSync(join(repo, plans[0].task), 'utf8'), /thm-item-2/);
    const evidence = JSON.parse(readFileSync(join(repo, 'research/r-5-author-gate-batch-1.json'), 'utf8'));
    assert.deepEqual(evidence.failures.map((entry: any) => entry.id), ['depcheck','rendercheck']);
    writeFileSync(join(repo, 'research/r-batch-2.pages.json'), JSON.stringify([{ id:'page-2', items:[{id:'thm-item-1'}] }]));
    plans.length = 0;
    await repairGateBatch({ ctx:{repo,run:'r'},stage:{id:'5-author'},round:2,
      failure:first,executor:{start(_s: any,plan: any){plans.push(plan);}} },
    {alphaGroups:()=>[{label:'a',covers:['1']},{label:'b',covers:['2']}],MECHANICAL_REPAIRS:{}});
    assert.equal(plans.length,1);
    assert.equal(plans[0].label,'gate-batch-2-all','ambiguous ownership needs one serial writer');
  } finally { rmSync(repo, { recursive: true, force: true }); }
});
