import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mergeCycleReceipts, cycleCounts } from '../../step7-rejudge-cycle.mjs';
import { itemVerdict, scopedIntegrityErrors, contractContainsItem } from '../bin/complete-step7-item.mjs';
import { stages } from '../stages/mathlib.mts';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const receipt = (cycles: any[]) => ({run:'test', cycles, initial_fatal_contexts:{}});
const cycle = (id: string, item: string, completed_at: string | null = null) =>
  ({cycle_id:id,kind:'repair',items:[item],completed_at});

test('dependency mentions do not make a contract own the item', () => {
  assert.equal(contractContainsItem({scope:['consumer'],contracts:{consumer:{deps:['supplier']}}},'supplier'),false);
  assert.equal(contractContainsItem({scope:['supplier']},'supplier'),true);
});

test('concurrent item reservations retain both paid cycles', () => {
  const a=receipt([cycle('a','one')]), b=receipt([cycle('b','two')]);
  const merged=mergeCycleReceipts(a,b);
  assert.equal(cycleCounts(merged).get('one'),1);
  assert.equal(cycleCounts(merged).get('two'),1);
});
test('completion from an old snapshot cannot erase another completed cycle', () => {
  const old=receipt([cycle('a','one'),cycle('b','two')]);
  const current=receipt([cycle('a','one','done'),cycle('b','two')]);
  old.cycles[1].completed_at='later';
  assert.deepEqual(mergeCycleReceipts(current,old).cycles.map((x:any)=>x.completed_at),['done','later']);
});
test('concurrent duplicate payment is refused', () => {
  assert.throws(()=>mergeCycleReceipts(receipt([cycle('a','one')]),receipt([cycle('b','one')])),/exhausted/);
});
test('a different run cannot merge receipts', () => {
  assert.throws(()=>mergeCycleReceipts(receipt([]),{...receipt([]),run:'other'}),/run mismatch/);
});
test('item check excludes unrelated work but retains unscoped integrity failures', () => {
  const errors=[{id:'one'},{id:'two'},{id:null}];
  assert.deepEqual(scopedIntegrityErrors({errors},'one'),[errors[0],errors[2]]);
  assert.throws(()=>scopedIntegrityErrors({},'one'),/missing/);
});
test('handoff never accepts an old context or another item verdict', () => {
  const hashes={context_sha256:'now',item_sha256:'text'};
  const rows=[{id:'one',...hashes,keep:false},{id:'two',...hashes,keep:true},
    {id:'one',context_sha256:'old',item_sha256:'text',keep:true}];
  assert.equal(itemVerdict(rows,'one',hashes)?.keep,false);
  assert.equal(itemVerdict(rows,'missing',hashes),undefined);
});

test('controller dispatches an item while its Alpha is waiting, once only', async () => {
  const repo=mkdtempSync(join(tmpdir(),'step7-handoff-test-'));
  try {
    mkdirSync(join(repo,'research'));
    const key='a'.repeat(24), label=`step7-item-${key}`;
    const path=join(repo,`research/demo-step7-handoff-request-${key}.json`);
    writeFileSync(path,JSON.stringify({run:'demo',id:'thm-demo-item',group:'a',key}));
    const started:any[]=[];
    const executor={state:{data:{dispatches:{} as any}},start:(s:any,p:any)=>{
      started.push(p);executor.state.data.dispatches[`${s.id}:${p.label}`]={};
    }};
    const stage:any=stages.find(s=>s.id==='7-adjudicate');
    const ctx:any={repo,run:'demo',config:{stateDir:'.autopilot/demo'}};
    await stage.onProgress({ctx,executor,stage});
    await stage.onProgress({ctx,executor,stage});
    assert.equal(started.length,1);
    assert.equal(started[0].label,label);
    assert.equal(started[0].role,'tool');
    assert.ok(started[0].argv.includes('--execute'));
    assert.deepEqual(started[0].covers,[]);
    delete executor.state.data.dispatches[`7-adjudicate:${label}`];
    writeFileSync(join(repo,`research/demo-step7-handoff-response-${key}.json`),'{}');
    await stage.onProgress({ctx,executor,stage});
    assert.equal(started.length,1);
  } finally {rmSync(repo,{recursive:true,force:true});}
});
