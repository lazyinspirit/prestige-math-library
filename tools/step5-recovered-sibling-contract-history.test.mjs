import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync,existsSync} from 'node:fs';
import {join,dirname,relative} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import {itemHashGuard} from './item-hash.mjs';
import {previewRecoveredSiblingContractHistory,recordSiblingContractHistory,supportingSiblingContractHistory} from './step5-sibling-contract-history.mjs';
const run='inverse-problems-knot-theory-all-109-2026-10-19',phase='impact-initial';
const sha=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const deltas=[
 [45,'lem-ip-calderon-higher-dimensional-cgo-fourier-logarithmic-stability','citations',2,'quote'],
 [45,'thm-ip-calderon-logarithmic-l2-stability','citations',1,'quote'],
 [45,'lem-ip-calderon-rough-alessandrini-and-quotient-norm','citations',0,'quote'],
 [48,'prop-ip-finite-unrolling-does-not-imply-regularization-convergence','citations',0,'quote'],
 [73,'lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy','citations',0,'quote'],
 [73,'lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy','citations',4,'quote'],
 [73,'lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy','derivations',0,'claim'],
 [73,'lem-smooth-hyperbolic-dehn-filling-from-trivial-peripheral-holonomy','citations',0,'quote'],
 [73,'lem-smooth-hyperbolic-dehn-filling-from-trivial-peripheral-holonomy','citations',1,'quote'],
 [75,'thm-levine-algebraic-concordance-surjection-proof','citations',11,'quote'],
 [75,'thm-levine-algebraic-concordance-surjection-proof','citations',14,'source'],
 [75,'thm-levine-algebraic-concordance-surjection-proof','citations',14,'source_section'],
 [75,'thm-levine-algebraic-concordance-surjection-proof','citations',14,'quote'],
 [91,'lem-pointed-spherical-recharting-preserves-odd-barnatan-complexes','citations',1,'quote'],
 [99,'thm-enhanced-a-polynomial-newton-edge-is-strict-boundary-slope','citations',7,'quote'],
];
function fixture(t){
 const root=mkdtempSync(join(tmpdir(),'recovered-sibling-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const put=(p,v)=>{const f=join(root,p);mkdirSync(dirname(f),{recursive:true});writeFileSync(f,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');return f;};
 const get=p=>JSON.parse(readFileSync(join(root,p),'utf8')),d=`research/${run}-step5-v2`;
 const ids=[...new Set(deltas.map(x=>x[1]))],supplier='lem-fixture-supplier',source=id=>`---\nid: ${id}\nkind: lemma\n---\n## Statement\nCurrent source statement.\n## Proof\n1.1 New actual proof step. [given]\n`;
 for(const id of ids)put(`items/${id}.md`,source(id));
 put(`items/${supplier}.md`,`---\nid: ${supplier}\n---\n## Definition\nCurrent supplier statement.\n`);
 const assignments={'1':Array.from({length:128},(_,i)=>`lem-origin-${i}`),'2':[],
  '3':[...ids,...Array.from({length:125-ids.length},(_,i)=>`lem-successor-${i}`),'lem-kontsevich-configuration-integral-convergence-needle-estimates']};
 const pack={run,phase,round:1,repair_scope:'frontier',units:['1','2','3'],assignments,before:{}};put(`${d}/impact-initial-1.json`,pack);
 const payload={version:2,mode:'exact-first-impact-six-recovered-preimages',reason:'Authenticate only the exact original native unit1 supporting bytes after the separately recorded sibling updates, without granting current source or mathematical review credit.',carriers:[]};
 const pins={};
 for(const batch of [45,48,73,75,91,99]){
  const path=`research/${run}-batch-${batch}.proof-contracts.json`,cs={};
  for(const id of ids.filter(id=>deltas.some(x=>x[0]===batch&&x[1]===id)))cs[id]={citations:Array.from({length:15},()=>({source:supplier,source_section:'Definition',quote:'Current supplier statement.',uses:['1.1']})),derivations:[{step:'1.1',claim:'New actual proof step.'}]};
  const after={version:1,contracts:cs},before=structuredClone(after);
  for(const [,id,field,index,key]of deltas.filter(x=>x[0]===batch))before.contracts[id][field][index][key]=key==='source'?'lem-old-supplier':key==='source_section'?'Statement':key==='claim'?'Old proof step.':'Old supplier statement.';
  const archive=`research/preimages/${batch}.json`,current_archive=`research/current/${batch}.json`;put(archive,before);put(current_archive,after);put(path,after);
  pins[path]=sha(readFileSync(join(root,archive),'utf8'));payload.carriers.push({path,archive,current_archive});
 }
 const state={run,stage:'5.2-impact',stageRounds:{'5.2-impact':1},paused:true,dispatches:{}};
 const native=(unit)=>{
  const label=`step5-v2-${phase}-r1-u${unit}`,rp=`${d}/${label}.json`,base=`research/${run}-dispatch/alpha-repair-${label}`,time=unit==='1'?'2026-01-01T01:00:00.000Z':'2026-01-01T01:01:00.000Z';
  const reviews=assignments[unit].filter(id=>!id.includes('needle-estimates')).map(id=>({id,uncertain:false,disposition:unit==='3'&&ids.includes(id)?'repaired':'unaffected',post_sha256:unit==='3'&&ids.includes(id)?itemHashGuard(source(id)):'a'.repeat(64)}));
  const report={run,phase,round:1,unit,input_sha256:sha(pack),reviews,decisions:[],created_items:[],supporting_evidence:unit==='1'?pins:{[`${d}/impact-initial-1.json`]:sha(pack),'research/fixture.pdf':'f'.repeat(64)}};put(rp,report);
  const n={run,role:'alpha-repair',label,covers:[unit],runner:'codex',model:'gpt-6.1-sol',provider_effort:'high',ok:true,exit_code:0,process_exit_code:0,timed_out:false,attempt:1,evidence_tag:'.attempt-1',started_at:time,ended_at:time,session_id:'genuine-fixture-'+unit,session_home:join(root,'.autopilot',run,'step5-reader-owner-sessions','u'+unit),prompt:join(root,base+'.attempt-1.prompt.md'),log:join(root,base+'.attempt-1.log'),terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true,error_events:0}};
  put(base+'.result.json',n);put(base+'.attempt-1.result.json',n);
  put(base+'.attempt-1.prompt.md',`run: ${run}\nrole: alpha-repair\nlabel: ${label}\ncovers: ${unit}\noutput: ${rp}\ninput_sha256:"${sha(pack)}"\n`);
  put(base+'.attempt-1.log',`native fixture\nmodel: gpt-6.1-sol\nreasoning effort: high\nsession id: ${n.session_id}\nexec\nactual locked metadata write\n${JSON.stringify({files:31,paths:payload.carriers.map(c=>c.path)})}\ncodex\n[Original detailed report](${join(root,rp)})\ntokens used\n100\n`);
  state.dispatches[`5.2-impact:${label}`]={stage:'5.2-impact',role:'alpha-repair',label,covers:[unit],attempt:1,lastExitOk:true,startedAt:time,endedAt:time};
 };
 native('1');native('3');put(`.autopilot/${run}/state.json`,state);
 const report1=`${d}/step5-v2-impact-initial-r1-u1.json`,report3=`${d}/step5-v2-impact-initial-r1-u3.json`,marker=`${d}/impact-initial-1-owner-sibling-contract-history.json`;
 return{root,put,get,payload,ids,supplier,d,state,report1,report3,marker,preview:()=>previewRecoveredSiblingContractHistory(root,run,payload)};
}
test('manual paused boundary authenticates six exact preimages and returns old bytes, without current coverage',t=>{
 const f=fixture(t),original=readFileSync(join(f.root,f.report1)),other=readFileSync(join(f.root,f.report3));
 assert.equal(f.preview().metadata_deltas,15);assert.ok(!existsSync(join(f.root,f.marker)));
 recordSiblingContractHistory(f.root,run,f.payload);assert.deepEqual(readFileSync(join(f.root,f.report1)),original);assert.deepEqual(readFileSync(join(f.root,f.report3)),other);
 for(const c of f.payload.carriers){const expected=sha(readFileSync(join(f.root,c.archive),'utf8')),h=supportingSiblingContractHistory({root:f.root,run},c.path,expected);assert.equal(readFileSync(h.archive,'utf8'),readFileSync(join(f.root,c.archive),'utf8'));assert.notEqual(sha(readFileSync(h.archive,'utf8')),sha(readFileSync(join(f.root,c.path),'utf8')));}
 const receipt=f.get(f.marker);assert.equal(receipt.historical_only,true);assert.equal(receipt.current_review_granted,false);assert.equal(receipt.current_snapshot_origin,'owner-recording-not-native-support-pins');
 // Later live changes cannot acquire source/current-review credit from an old
 // archive resolver. The captured event remains authentic historical evidence.
 f.put(`items/${f.ids[0]}.md`,'Later source repair needing ordinary fresh context checks.');
 const c=f.payload.carriers[0];assert.ok(supportingSiblingContractHistory({root:f.root,run},c.path,sha(readFileSync(join(f.root,c.archive),'utf8'))));
});
for(const mode of ['wrong-before','current-as-history','extra-carrier','missing-carrier','foreign-delta','bad-quote','bad-proof-claim','source-drift','wrong-owner','fake-support','native-attempt','native-session','native-session-id','native-prompt','native-log','active','not-paused','wrong-stage','already-collected','wrong-run'])test(`recovered mode rejects ${mode}`,t=>{
 const f=fixture(t),c=f.payload.carriers[0],dp=`research/${run}-dispatch/alpha-repair-step5-v2-impact-initial-r1-u3.result.json`;
 if(mode==='wrong-before')f.put(c.archive,{contracts:{}});
 if(mode==='current-as-history')c.archive=c.current_archive;
 if(mode==='extra-carrier')f.payload.carriers.push({...c,path:'research/arbitrary.json'});
 if(mode==='missing-carrier')f.payload.carriers.pop();
 if(mode==='foreign-delta'){const v=f.get(c.current_archive);v.extra='unbound edit';f.put(c.current_archive,v);f.put(c.path,v);}
 if(mode==='bad-quote'){const v=f.get(c.current_archive);v.contracts[f.ids[0]].citations[2].quote='Unsupported current claim';f.put(c.current_archive,v);f.put(c.path,v);}
 if(mode==='bad-proof-claim'){const q=f.payload.carriers.find(x=>x.path.includes('batch-73.')),v=f.get(q.current_archive);v.contracts['lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy'].derivations[0].claim='Unproved new argument';f.put(q.current_archive,v);f.put(q.path,v);}
 if(mode==='source-drift')f.put(`items/${f.ids[0]}.md`,'Unreviewed current source');
 if(mode==='wrong-owner'){const p=f.get(`${f.d}/impact-initial-1.json`);p.assignments['3'][0]='lem-other';f.put(`${f.d}/impact-initial-1.json`,p);}
 if(mode==='fake-support'){const r=f.get(f.report3);r.supporting_evidence[c.path]=sha(readFileSync(join(f.root,c.current_archive),'utf8'));f.put(f.report3,r);}
 if(mode.startsWith('native-')){const n=f.get(dp);if(mode==='native-attempt')f.put(dp.replace('.result.json','.attempt-1.result.json'),{...n,ok:false});if(mode==='native-session-id'){n.session_id='forged-session';f.put(dp,n);f.put(dp.replace('.result.json','.attempt-1.result.json'),n);}if(mode==='native-session'){n.session_home=join(f.root,'.autopilot',run,'other-session');f.put(dp,n);f.put(dp.replace('.result.json','.attempt-1.result.json'),n);}if(mode==='native-prompt')f.put(relative(f.root,n.prompt),'wrong native prompt');if(mode==='native-log')f.put(relative(f.root,n.log),'missing original execution log');}
 if(['active','not-paused','wrong-stage'].includes(mode)){const s=f.get(`.autopilot/${run}/state.json`);if(mode==='active')s.dispatches.extra={startedAt:'2026-01-01T01:00:00Z'};if(mode==='not-paused')s.paused=false;if(mode==='wrong-stage')s.stage='5.1-adjudicate';f.put(`.autopilot/${run}/state.json`,s);}
 if(mode==='already-collected')f.put(`${f.d}/impact-initial-1-collected.json`,{});
 assert.throws(()=>mode==='wrong-run'?previewRecoveredSiblingContractHistory(f.root,'other',f.payload):f.preview());assert.ok(!existsSync(join(f.root,f.marker)));
});
test('post-record archive and original report tampering fail closed; wrong current hash is never historical support',t=>{
 const f=fixture(t);recordSiblingContractHistory(f.root,run,f.payload);const c=f.payload.carriers[0],old=sha(readFileSync(join(f.root,c.archive),'utf8'));
 assert.equal(supportingSiblingContractHistory({root:f.root,run},c.path,sha(readFileSync(join(f.root,c.current_archive),'utf8'))),null);
 f.put(c.archive,'changed authentic preimage');assert.throws(()=>supportingSiblingContractHistory({root:f.root,run},c.path,old));
});
