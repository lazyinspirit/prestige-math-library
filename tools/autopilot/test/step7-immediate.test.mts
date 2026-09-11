import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mergeCycleReceipts, cycleCounts } from '../../step7-rejudge-cycle.mjs';
import { itemVerdict, scopedIntegrityErrors, contractContainsItem, requiresOwningContract } from '../bin/complete-step7-item.mjs';
import { stages } from '../stages/mathlib.mts';

const receipt = (cycles: any[]) => ({run:'test', cycles, initial_fatal_contexts:{}});
const cycle = (id: string, item: string, completed_at: string | null = null) =>
  ({cycle_id:id,kind:'repair',items:[item],completed_at});

test('dependency mentions do not make a contract own the item', () => {
  assert.equal(contractContainsItem({scope:['consumer'],contracts:{consumer:{deps:['supplier']}}},'supplier'),false);
  assert.equal(contractContainsItem({scope:['supplier']},'supplier'),true);
});
test('contract requirement respects quoted metadata and proof-free definitions', () => {
  const definition='---\nkind: "definition"\nstatus: "draft"\nprovenance:\n  proof: "not-applicable"\n---\n## Definition\nText';
  assert.equal(requiresOwningContract(definition,true),false);
  assert.equal(requiresOwningContract(definition+'\n## Proof\nArgument',true),true);
  const published='---\nkind: theorem\nstatus: "published"\n---\n## Proof\nArgument';
  assert.equal(requiresOwningContract(published,false),false);
  assert.equal(requiresOwningContract(published,true),true);
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

test('Step 7 has no immediate handoff hook and permits one terminal pass', () => {
  const adjudicate:any=stages.find(s=>s.id==='7-adjudicate');
  const terminal:any=stages.find(s=>s.id==='7-rejudge');
  assert.equal(adjudicate.onProgress,undefined);
  assert.equal(terminal.maxFixRounds,1);
  assert.equal(terminal.terminalFixBudget,true);
});
