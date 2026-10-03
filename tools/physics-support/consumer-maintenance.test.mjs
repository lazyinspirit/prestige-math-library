import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {freezeFrontier} from './step7-rounds.mjs';
import {statementHash} from './step7-statement.mjs';
import {syncMaintenance,prepareMaintenance,collectMaintenance,maintenanceStatus,maintenanceUnits} from './consumer-maintenance.mjs';

const run='fixture';
const carrier=(id,deps=[],status='draft',statement='Old statement.')=>`---\nid: ${id}\nstatus: ${status}\ndeps: [${deps.join(', ')}]\n---\n\n## Statement\n${statement}\n\n## Proof\nOriginal proof.\n`;
function setup(t){const root=mkdtempSync(join(tmpdir(),'consumer-maintenance-'));t.after(()=>rmSync(root,{recursive:true,force:true}));mkdirSync(join(root,'items'));mkdirSync(join(root,'research',`${run}-step7-v2`),{recursive:true});writeFileSync(join(root,'research',`${run}-step7-v2`,'frontier.json'),JSON.stringify(freezeFrontier({run,batches:[{id:'batch',items:['supplier','frontier','published-frontier']}]})));for(const [id,deps,status] of [['supplier',[]],['outside',['supplier'],'published'],['next',['outside']],['frontier',['outside']],['published-frontier',['supplier'],'published'],['unrelated',[]]])writeFileSync(join(root,'items',`${id}.md`),carrier(id,deps,status));return root;}
function change(root,id,before,after){const path=join(root,'items',`${id}.md`),text=readFileSync(path,'utf8'),changed=text.replace(before,after);writeFileSync(path,changed);return {id,before_statement_sha256:statementHash(text),after_statement_sha256:statementHash(changed)};}
function reports(root,pack,decisions={}){for(const lane of pack.lanes){const rows=lane.ids.map(id=>({id,disposition:'sound',reason:'The supplier conclusion used by this proof remains valid under its local hypotheses.',understanding:{basis:'familiarity',uncertainty:false,evidence:'Checked the specific conclusion against the locally assumed hypotheses.'},event_uses:Object.values(pack.obligations).filter(o=>o.id===id).map(o=>({event_key:o.event_key,affected_use:'Application of the supplier conclusion in the original proof.',reason:'Local hypotheses imply the new supplier hypotheses.'})),edits:[],...decisions[id]}));writeFileSync(join(root,lane.report),JSON.stringify({run,pack:pack.id,lane:lane.lane,input_sha256:createHash('sha256').update(readFileSync(join(root,lane.assignment),'utf8')).digest('hex'),decisions:rows}));}}
const repair=(before,after)=>({disposition:'repaired',affected_use:'The original proof applies the supplier without the new hypothesis.',invalidated_claim:'The unconditional conclusion no longer follows.',minimality:'Add exactly the missing hypothesis to the contract.',edits:[{before,after,necessity:'The new supplier hypothesis must be assumed.'}]});

test('all supplier origins, direct-only candidates, immutable frontier publication membership, no historical requeue',t=>{
  const root=setup(t),event=change(root,'supplier','Old statement.','New statement.');
  let state=syncMaintenance(root,run,[event]);assert.deepEqual(state.pending.map(o=>o.id),['outside']);assert.equal(state.frontier_events[0].consumer_id,'published-frontier');
  const {pack}=prepareMaintenance(root,run);assert.equal(maintenanceUnits(root,run,pack).length,3);assert.deepEqual(pack.ids,['outside']);reports(root,pack);assert.equal(collectMaintenance(root,run,pack).complete,true);
  state=syncMaintenance(root,run,[event]);assert.equal(state.complete,true);assert.equal(prepareMaintenance(root,run).complete,true);
  const proofEvent=change(root,'supplier','Original proof.','New proof.');assert.equal(syncMaintenance(root,run,[proofEvent]).complete,true);
  const publishedEvent=change(root,'outside','Old statement.','Published interface change.');state=syncMaintenance(root,run,[publishedEvent]);assert.deepEqual(state.pending.map(o=>o.id),['next']);assert.equal(state.frontier_events.at(-1).consumer_id,'frontier');
});

test('necessary consumer interface repairs propagate exactly one hop and preserve collected evidence',t=>{
  const root=setup(t);syncMaintenance(root,run,[change(root,'supplier','Old statement.','New statement.')]);const {pack}=prepareMaintenance(root,run);
  change(root,'outside','Old statement.','Restricted statement.');reports(root,pack,{outside:repair('Old statement.','Restricted statement.')});
  const state=collectMaintenance(root,run,pack);assert.deepEqual(state.pending.map(o=>o.id),['next']);assert.equal(state.completed_changes[0].id,'outside');assert.equal(state.frontier_events.at(-1).consumer_id,'frontier');
  const path=join(root,'research',`${run}-consumer-maintenance`,`${pack.id}-collection.json`),collected=readFileSync(path,'utf8');reports(root,pack,{outside:{reason:'tampered'}});assert.equal(readFileSync(path,'utf8'),collected);
  const second=prepareMaintenance(root,run).pack;assert.deepEqual(second.ids,['next']);reports(root,second);assert.equal(collectMaintenance(root,run,second).complete,true);
});

test('aggregates distinct supplier events and completes each target-event pair once',t=>{
  const root=setup(t);const first=change(root,'supplier','Old statement.','New statement.');syncMaintenance(root,run,[first]);const second=change(root,'supplier','New statement.','Newest statement.');syncMaintenance(root,run,[second]);const {pack}=prepareMaintenance(root,run);assert.equal(Object.keys(pack.obligations).length,2);assert.deepEqual(pack.ids,['outside']);reports(root,pack);collectMaintenance(root,run,pack);assert.equal(syncMaintenance(root,run,[first,second]).complete,true);
});

test('rejects unlisted cosmetic edits, missing necessity and mutated sound consumers without completing obligations',t=>{
  const root=setup(t);syncMaintenance(root,run,[change(root,'supplier','Old statement.','New statement.')]);const {pack}=prepareMaintenance(root,run);
  change(root,'outside','Old statement.','Restricted statement.');change(root,'outside','Original proof.','Cosmetic proof.');reports(root,pack,{outside:repair('Old statement.','Restricted statement.')});assert.throws(()=>collectMaintenance(root,run,pack),/unlisted edit/);
  change(root,'outside','Cosmetic proof.','Original proof.');reports(root,pack,{outside:{...repair('Old statement.','Restricted statement.'),minimality:''}});assert.throws(()=>collectMaintenance(root,run,pack),/necessity/);
  reports(root,pack);assert.throws(()=>collectMaintenance(root,run,pack),/sound consumer changed/);assert.equal(maintenanceStatus(root,run).active,pack.id);
});

test('rejects wrong identity, missing source understanding, unassigned writes and new items',t=>{
  const root=setup(t);syncMaintenance(root,run,[change(root,'supplier','Old statement.','New statement.')]);const {pack}=prepareMaintenance(root,run);reports(root,pack,{outside:{understanding:{basis:'sources',evidence:''}}});assert.throws(()=>collectMaintenance(root,run,pack),/understanding/);
  reports(root,pack);const lane=pack.lanes.find(l=>l.ids.length),path=join(root,lane.report),report=JSON.parse(readFileSync(path,'utf8'));report.pack='wrong';writeFileSync(path,JSON.stringify(report));assert.throws(()=>collectMaintenance(root,run,pack),/identity/);
  reports(root,pack);change(root,'unrelated','Original proof.','Changed proof.');assert.throws(()=>collectMaintenance(root,run,pack),/unassigned carrier/);change(root,'unrelated','Changed proof.','Original proof.');writeFileSync(join(root,'items','new.md'),carrier('new'));assert.throws(()=>collectMaintenance(root,run,pack),/inventory/);
});

test('explicit discoveries require exact use and do not requeue completed historical pairs',t=>{
  const root=setup(t),event=change(root,'supplier','Old statement.','New statement.');syncMaintenance(root,run,[event]);
  assert.throws(()=>syncMaintenance(root,run,[{...event,consumer_ids:['unrelated']}]),/discovery use/);
  const discovery={...event,consumer_ids:['unrelated'],discovery_evidence:{unrelated:'The consumer uses this supplier conclusion in its unrecorded third proof step.'}};
  syncMaintenance(root,run,[discovery]);const {pack}=prepareMaintenance(root,run);assert.deepEqual(pack.ids,['outside','unrelated']);reports(root,pack);collectMaintenance(root,run,pack);
  assert.equal(syncMaintenance(root,run,[discovery]).complete,true);assert.equal(collectMaintenance(root,run,pack).complete,true);
});

test('frozen task, assignment and frontier tampering blocks continuation',t=>{
  const root=setup(t);syncMaintenance(root,run,[change(root,'supplier','Old statement.','New statement.')]);const {pack}=prepareMaintenance(root,run),path=join(root,pack.lanes[0].task),original=readFileSync(path,'utf8');writeFileSync(path,original+'Tampering.');assert.throws(()=>prepareMaintenance(root,run),/frozen input changed/);writeFileSync(path,original);
  const frontierPath=join(root,'research',`${run}-step7-v2`,'frontier.json'),frozen=JSON.parse(readFileSync(frontierPath,'utf8'));frozen.ids.push('outside');writeFileSync(frontierPath,JSON.stringify(frozen));assert.throws(()=>syncMaintenance(root,run,[]),/original frontier changed/);
});

test('collection commit restart is idempotent and preserves one immutable evidence receipt',t=>{
  const root=setup(t);syncMaintenance(root,run,[change(root,'supplier','Old statement.','New statement.')]);const {pack}=prepareMaintenance(root,run),statePath=join(root,'research',`${run}-consumer-maintenance`,'state.json'),prior=readFileSync(statePath,'utf8');
  change(root,'outside','Old statement.','Restricted statement.');reports(root,pack,{outside:repair('Old statement.','Restricted statement.')});collectMaintenance(root,run,pack);
  // Simulate interruption after the immutable collection write but before the
  // atomic queue-state replacement, retaining the controller's prior state.
  writeFileSync(statePath,prior);let status=collectMaintenance(root,run,pack);assert.equal(status.completed_changes.length,1);assert.equal(status.collections.length,1);status=collectMaintenance(root,run,pack);assert.equal(status.completed_changes.length,1);
});

test('maintenance statement discoveries route missing edges while proof-only discoveries do not propagate',t=>{
  for(const interfaceChanged of [true,false]){
    const root=setup(t);syncMaintenance(root,run,[change(root,'supplier','Old statement.','New statement.')]);const {pack}=prepareMaintenance(root,run);
    const before=interfaceChanged?'Old statement.':'Original proof.',after=interfaceChanged?'Restricted statement.':'Corrected proof.';
    change(root,'outside',before,after);
    const discovery={consumer_ids:['unrelated','published-frontier'],discovery_evidence:{unrelated:'The unrecorded direct use applies this exact conclusion in the third proof step.','published-frontier':'The frontier proof directly invokes this changed conclusion without recording the dependency.'}};
    reports(root,pack,{outside:{...repair(before,after),...discovery}});let state=collectMaintenance(root,run,pack);
    if(interfaceChanged){assert.deepEqual(state.pending.map(o=>o.id).sort(),['next','unrelated']);assert.equal(state.frontier_events.some(e=>e.id==='outside'&&e.consumer_id==='published-frontier'),true);const nextPack=prepareMaintenance(root,run).pack;reports(root,nextPack);collectMaintenance(root,run,nextPack);const event={id:'outside',before_statement_sha256:pack.before.outside.statement_sha256,after_statement_sha256:statementHash(readFileSync(join(root,'items','outside.md'),'utf8')),...discovery};state=syncMaintenance(root,run,[event]);assert.equal(state.complete,true);assert.equal(prepareMaintenance(root,run).complete,true);}
    else {assert.equal(state.complete,true);assert.equal(state.frontier_events.some(e=>e.id==='outside'),false);}
  }
});
