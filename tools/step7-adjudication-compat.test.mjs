import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {adjudicationTypeResolver} from './step7-adjudication-compat.mjs';
import {MODELS} from './models.mjs';
const hash=x=>createHash('sha256').update(x).digest('hex');
function fixture(t){
  const root=mkdtempSync(join(tmpdir(),'adjudication-compat-'));
  t.after(()=>rmSync(root,{recursive:true,force:true}));
  const dir=join(root,'research','demo-step7-v2'),dispatch=join(root,'research','demo-dispatch');
  mkdirSync(dir,{recursive:true});mkdirSync(dispatch);
  const save=(p,r)=>writeFileSync(p,JSON.stringify(r)+'\n');
  const decision={id:'thm-example',model:MODELS.sol.id,context_sha256:'a'.repeat(64),outcome:'confirmed_fatal',reason:'The actual evidence describes a fatal defect without assigning a legacy category.',uncertain:false,familiar:true,source_urls:[]};
  const pack={version:2,run:'demo',phase:'initial',round:1,units:['1'],assignments:{1:[decision]},before:{'thm-example':'b'.repeat(64)}};
  const label='step7-v2-initial-r1-u1',packPath=join(dir,'initial-1.json'),reportPath=join(dir,`${label}.json`),dispatchPath=join(dispatch,`alpha-adjudicate-${label}.result.json`),receiptPath=join(dir,'initial-1-collected.json');
  save(packPath,pack);
  save(reportPath,{run:'demo',phase:'initial',round:1,unit:'1',input_sha256:hash(JSON.stringify(pack)),decisions:[decision]});
  save(dispatchPath,{run:'demo',role:'alpha-adjudicate',label,ok:true,model:MODELS.sol.id,provider_effort:'xhigh'});
  const receipt={version:2,run:'demo',phase:'initial',round:1,errors:[],decisions:[decision],evidence:Object.fromEntries([packPath,reportPath,dispatchPath].map(p=>[p,hash(readFileSync(p,'utf8'))]))};
  save(receiptPath,receipt);
  const row={...decision,run:'demo',step7_phase:'initial',step7_round:1,item_sha256:pack.before[decision.id],at:'2026-09-22'};
  return{root,pack,packPath,reportPath,dispatchPath,receiptPath,receipt,row,save};
}
test('exact historical V2 decisions retain fatal outcome with explicitly unclassified category',t=>{
  const f=fixture(t),before=readFileSync(f.receiptPath,'utf8');
  assert.equal(adjudicationTypeResolver(f.root)(f.row),'unclassified');
  assert.equal(f.row.outcome,'confirmed_fatal');assert.equal(Object.hasOwn(f.row,'defect_type'),false);
  assert.equal(readFileSync(f.receiptPath,'utf8'),before);
});
for(const [name,mutate] of [
  ['reason',f=>f.row.reason='Invented classification evidence'],
  ['guard hash',f=>f.row.item_sha256='c'.repeat(64)],
  ['round',f=>f.row.step7_round=2],
  ['explicit invalid category',f=>f.row.defect_type='unclassified'],
  ['missing receipt',f=>rmSync(f.receiptPath)],
  ['changed report',f=>f.save(f.reportPath,{decisions:[]})],
  ['failed author',f=>f.save(f.dispatchPath,{ok:false})],
  ['tampered collection decision',f=>{f.receipt.decisions=[];f.save(f.receiptPath,f.receipt);}],
  ['new schema pack',f=>{f.pack.adjudicationSchemaVersion=1;f.save(f.packPath,f.pack);}],
])test(`rejects ${name} rather than waiving fatal evidence`,t=>{const f=fixture(t);mutate(f);assert.equal(adjudicationTypeResolver(f.root)(f.row),null);});
test('legacy missing categories remain invalid; explicit categories remain supported',()=>{
  const resolve=adjudicationTypeResolver('/no-fixture');
  assert.equal(resolve({outcome:'confirmed_fatal'}),null);
  for(const defect_type of ['logic','dependency_citation','other'])assert.equal(resolve({defect_type}),defect_type);
});
test('judge statistics count authentic missing categories separately, not as other or nonfatal',t=>{
  const f=fixture(t),ledger=join(f.root,'judge.jsonl'),adjudications=join(f.root,'adjudications.jsonl');
  f.save(ledger,{id:f.row.id,model:f.row.model,context_sha256:f.row.context_sha256,keep:false});f.save(adjudications,f.row);
  const result=spawnSync(process.execPath,[new URL('./judge-compare.mjs',import.meta.url).pathname,ledger,'--adjudications',adjudications],{cwd:f.root,encoding:'utf8',env:{...process.env,JUDGE_LINEUP:'sol'}});
  assert.equal(result.status,0,result.stderr);
  const counts=JSON.parse(result.stdout).adjudicated_detection_effectiveness.models[MODELS.sol.id];
  assert.equal(counts.confirmed_fatal,1);assert.equal(counts.fatal_unclassified,1);assert.equal(counts.fatal_other,0);assert.equal(counts.confirmed_nonfatal,0);
});
