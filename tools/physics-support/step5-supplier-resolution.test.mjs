import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdirSync,mkdtempSync,writeFileSync,readFileSync} from 'node:fs';
import {dirname,join,relative} from 'node:path';
import {tmpdir} from 'node:os';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {supplierResolvedNonfatal} from './step5-supplier-resolution.mjs';
import {reviewContextHashes,reviewMatchesCurrent,validateReports,advanceAdjudicationCorrection,workerLabel,workerReport} from './step5-workflow.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';
import {freezeFrontier} from './step5-rounds.mjs';
const here=dirname(fileURLToPath(import.meta.url)),base=process.env.SUPPLIER_RESOLUTION_TEST_ROOT??join(tmpdir(),'physics-step5-supplier-resolution-tests');mkdirSync(base,{recursive:true});
const hash=x=>createHash('sha256').update(x).digest('hex'),json=x=>JSON.stringify(x);
const reason='The actual supplier definition now licenses this exact unchanged consumer use without any claim narrowing.';
const ev={reason,uncertain:false,source_urls:[],familiar:true};
const source=(id,body,deps=[])=>`---\nid: ${id}\nkind: definition\nstatus: draft\ndeps: [${deps.join(', ')}]\n---\n\n## Definition\n\n${body}\n`;
function fixture(){
  const root=mkdtempSync(join(base,'case-')),run='fixture-supplier-resolution';
  mkdirSync(join(root,'items'));const dir=join(root,'research',run+'-step5-v2');mkdirSync(dir,{recursive:true});
  mkdirSync(join(root,'research',run+'-dispatch'));
  const before=source('def-supplier','Only compact surfaces are permitted.'),after=source('def-supplier','All nonempty surfaces are permitted; compact surfaces remain included.');
  const consumer=source('def-consumer','Use the supplier on arbitrary nonempty surfaces.',['def-supplier']);
  const unrelated=source('def-unrelated','An unrelated definition.');
  for(const [id,text]of [['def-supplier',after],['def-consumer',consumer],['def-unrelated',unrelated]])writeFileSync(join(root,'items',id+'.md'),text);
  const tuple=id=>({id,model:'gpt-6-luna',context_sha256:hash(id),reason:id==='def-consumer'?'The current use cites [[def-supplier]] outside its supplied interface.':'Repair this assigned definition domain omission.'});
  const assignments={'1':[tuple('def-supplier'),tuple('def-consumer')]};
  const pack={run,phase:'initial',round:1,units:['1'],assignments,rejected:structuredClone(assignments['1']),before:{'def-supplier':itemHashGuard(before),'def-consumer':itemHashGuard(consumer),'def-unrelated':itemHashGuard(unrelated)},before_statements:{'def-supplier':statementHash(before),'def-consumer':statementHash(consumer),'def-unrelated':statementHash(unrelated)}};
  const now={'def-supplier':itemHashGuard(after),'def-consumer':itemHashGuard(consumer),'def-unrelated':itemHashGuard(unrelated)};
  const contexts=reviewContextHashes(root,['def-consumer','def-supplier']);
  const report={run,phase:'initial',round:1,unit:'1',input_sha256:hash(json(pack)),decisions:assignments['1'].map(row=>({id:row.id,model:row.model,context_sha256:row.context_sha256,outcome:'confirmed_nonfatal',...ev})),reviews:[{id:'def-supplier',disposition:'repaired',...contexts['def-supplier'],...ev},{id:'def-consumer',disposition:'unaffected',metadata_repair_only:true,...contexts['def-consumer'],...ev}],created_items:[],downstream:[],repair_notes:{consumer_uses:[{supplier:'def-supplier',id:'def-consumer',path:'items/def-consumer.md',observed_raw_sha256:hash(consumer),affected_use:reason,invalidated_claim:reason,minimality:reason,disposition:'assigned_review_completed'}]}};
  const dispatch={ok:true,run,role:'alpha-adjudicate',label:'step5-v2-initial-r1-u1',model:'gpt-6.1-sol',provider_effort:'high',covers:['1'],ended_at:'2026-10-22T00:00:00Z'};
  const f={root,run,dir,pack,now,report,dispatch,consumer,after,before,decision:report.decisions[1]};
  f.save=()=>{report.input_sha256=hash(json(pack));writeFileSync(join(dir,'initial-1.json'),json(pack));writeFileSync(join(dir,'step5-v2-initial-r1-u1.json'),json(report));writeFileSync(join(root,'research',run+'-dispatch','alpha-adjudicate-step5-v2-initial-r1-u1.result.json'),json(dispatch));};
  f.allowed=()=>supplierResolvedNonfatal({root,pack,reports:[report],now,decision:f.decision,matchesCurrent:reviewMatchesCurrent});f.save();return f;
}
test('unchanged assigned consumer resolved through actual same-unit supplier interface repair',()=>{const f=fixture();assert.equal(f.allowed(),true);assert.deepEqual(validateReports(f.pack,[f.report],f.now,{root:f.root}).errors,[]);});
const cases={
  'unchanged fatal consumer':f=>f.decision.outcome='confirmed_fatal',
  'metadata flag alone without supplier repair':f=>{f.now['def-supplier']=f.pack.before['def-supplier'];},
  'unrelated repaired supplier':f=>{f.pack.assignments['1'][1].reason='The citation mismatch instead identifies [[def-unrelated]] as the offending supplier.';},
  'supplier assigned to a different unit':f=>{f.pack.assignments['2']=[f.pack.assignments['1'].shift()];f.pack.units.push('2');},
  'missing supplier review post hash':f=>delete f.report.reviews[0].post_sha256,
  'stale supplier review post hash':f=>f.report.reviews[0].post_sha256=hash('stale'),
  'supplier changes only proof with unchanged public interface':f=>f.pack.before_statements['def-supplier']=statementHash(f.after),
  'forged duplicate ownership':f=>{f.pack.assignments['2']=[f.pack.assignments['1'][0]];f.pack.units.push('2');},
  'forged consumer tuple identity':f=>f.decision.context_sha256=hash('forged'),
  'original rejection missing from frozen inventory':f=>f.pack.rejected=f.pack.rejected.filter(r=>r.id!=='def-consumer'),
  'supplier decision false positive':f=>f.report.decisions[0].outcome='false_positive',
  'supplier review unaffected':f=>f.report.reviews[0].disposition='unaffected',
  'consumer has no metadata-only flag':f=>delete f.report.reviews[1].metadata_repair_only,
  'consumer source changed':f=>{writeFileSync(join(f.root,'items/def-consumer.md'),f.consumer+'\nChanged.\n');f.now['def-consumer']=itemHashGuard(f.consumer+'\nChanged.\n');},
  'consumer current context stale':f=>f.report.reviews[1].review_context_sha256=hash('stale'),
  'supplier current context stale':f=>f.report.reviews[0].review_context_sha256=hash('stale'),
  'missing actual-use review':f=>f.report.repair_notes.consumer_uses=[],
  'actual-use review observed stale source':f=>f.report.repair_notes.consumer_uses[0].observed_raw_sha256=hash('stale'),
  'supplier not an actual direct logical dependency':f=>{const text=source('def-consumer','Use the supplier on arbitrary nonempty surfaces.',['def-unrelated']);writeFileSync(join(f.root,'items/def-consumer.md'),text);f.pack.before['def-consumer']=f.now['def-consumer']=itemHashGuard(text);Object.assign(f.report.reviews[1],reviewContextHashes(f.root,['def-consumer'])['def-consumer']);f.report.repair_notes.consumer_uses[0].observed_raw_sha256=hash(text);},
  'wrong native dispatch owner':f=>f.dispatch.covers=['2'],
  'failed native dispatch':f=>f.dispatch.ok=false,
  'gate waves cannot use assigned adjudication exception':f=>f.pack.phase='gate',
};
for(const [name,mutate]of Object.entries(cases))test('blocks '+name,()=>{const f=fixture();mutate(f);f.save();assert.equal(f.allowed(),false);});
test('blocks projected report row absent from genuine on-disk native report',()=>{const f=fixture();f.report.reviews[1].reason+=' A fabricated projection.';assert.equal(f.allowed(),false);});
test('ordinary unassigned source change remains unlicensed',()=>{const f=fixture();const text=source('def-unrelated','Unassigned changed definition.');writeFileSync(join(f.root,'items/def-unrelated.md'),text);f.now['def-unrelated']=itemHashGuard(text);assert.ok(validateReports(f.pack,[f.report],f.now,{root:f.root}).errors.includes('unlicensed or unreviewed change def-unrelated'));});
test('changed assigned consumer still needs actual repaired review',()=>{const f=fixture();f.now['def-consumer']=hash('changed');assert.ok(validateReports(f.pack,[f.report],f.now,{root:f.root}).errors.includes('unlicensed or unreviewed change def-consumer'));});

test('composes through authenticated native owner-finding parent collection when another same-unit false-positive subject is repaired',()=>{
  const f=fixture(),{root,run,dir,pack,report}=f,id='def-focal';
  f.dispatch.ended_at='2026-10-22T00:00:00Z';
  const save=(p,value)=>writeFileSync(p,JSON.stringify(value,null,2)+'\n');
  const ref=p=>({path:relative(root,p),sha256:hash(readFileSync(p))});
  const before=source(id,'This original notation has an independent endpoint defect.');
  writeFileSync(join(root,'items',id+'.md'),before);
  const tuple={id,model:'gpt-6-luna',context_sha256:hash(id),item_sha256:hash(before),reason:'The alleged original proof objection is false positive; distinct endpoint notation is referred.',keep:false};
  pack.assignments['1'].push(tuple);pack.rejected.push(structuredClone(tuple));
  pack.before[id]=f.now[id]=itemHashGuard(before);pack.before_statements[id]=statementHash(before);
  pack.version=2;pack.repair_scope='frontier';pack.frontier_ids=Object.keys(pack.before);pack.judge_model='gpt-6-luna';
  const originalDecision={id,model:tuple.model,context_sha256:tuple.context_sha256,outcome:'false_positive',...ev};
  report.downstream=['def-consumer'];report.decisions.push(originalDecision);report.reviews.push({id,disposition:'unaffected',...reviewContextHashes(root,[id])[id],...ev});
  f.save();const originalBytes=readFileSync(join(dir,'step5-v2-initial-r1-u1.json'));
  save(join(dir,'frontier.json'),freezeFrontier({run,batches:[{id:'1',items:pack.frontier_ids}]}));
  save(join(dir,'baseline.json'),pack.before);save(join(dir,'step4-verdicts.json'),pack.rejected);
  writeFileSync(join(dir,'step5-v2-initial-r1-u1.task.md'),'Frozen inputs: '+join(dir,'initial-1.json')+'\n');
  const evidenceDir=join(root,'research',run+'-science');mkdirSync(evidenceDir);
  const beforePath=join(evidenceDir,'focal-before.md');writeFileSync(beforePath,before);
  const record={run,subject:id,defect_id:'owner-endpoint',disposition:'open',caught_by_role:'owner',severity:'nonfatal'};
  const findingPath=join(evidenceDir,'finding.json');save(findingPath,record);
  writeFileSync(join(root,'research','defect-ledger.jsonl'),JSON.stringify(record)+'\n');
  const science=join(evidenceDir,'science.json'),proposal=join(evidenceDir,'proposal.json');
  save(science,{finding:'The separately reviewed endpoint notation defect requires this exact focused correction.'});
  save(proposal,{proposal:'Unapplied minimal endpoint correction, preserving the original false-positive tuple.'});
  const entry={subject:id,owner_lane:'1',mode:'native-referral',original_tuple:tuple,
    root_finding:{defect_id:record.defect_id,record:ref(findingPath)},before_source:ref(beforePath),
    before_content_sha256:f.now[id],before_statement_sha256:statementHash(before),science:[ref(science)],proposals:[ref(proposal)],
    native_outcome:ref(join(dir,'step5-v2-initial-r1-u1.json'))};
  const requestPath=join(dir,'owner-finding-queue-current.json');
  save(requestPath,{version:1,run,phase:'initial',round:1,reviewer:'/root',entries:[entry]});
  save(join(dir,'owner-finding-queue-request.json'),{version:1,run,request:ref(requestPath)});
  const stateDir=join(root,'.physics-autopilot',run);mkdirSync(stateDir,{recursive:true});
  save(join(stateDir,'state.json'),{run,stage:'5.1-adjudicate',stages:{'5.1-adjudicate':{}},dispatches:{original:{startedAt:'earlier',endedAt:'now'}}});
  const progress=advanceAdjudicationCorrection(root,run,'initial',1),phase='owner-finding-correction-initial';
  assert.deepEqual(progress.assignments,{'1':[id],'2':[],'3':[]});
  const childPack=JSON.parse(readFileSync(join(dir,phase+'-1.json')));
  writeFileSync(join(root,'items',id+'.md'),source(id,'This endpoint notation is explicitly corrected without changing the proof conclusion.'));
  for(const lane of ['1','2','3']){
    const label=workerLabel(phase,1,lane),entries=lane==='1'?[entry]:[];
    save(workerReport(root,run,phase,1,lane),{run,phase,round:1,unit:lane,input_sha256:hash(json(childPack)),decisions:[],created_items:[],downstream:[],
      reviews:entries.map(()=>({id,disposition:'repaired',...reviewContextHashes(root,[id])[id],...ev})),
      root_finding_resolutions:entries.map(()=>({defect_id:record.defect_id,status:'fixed',subjects:[id],...ev})),
      scientific_correction_adjudications:entries.map(()=>originalDecision)});
    save(join(root,'research',run+'-dispatch','alpha-repair-'+label+'.result.json'),{ok:true,run,role:'alpha-repair',label,model:'gpt-6.1-sol',provider_effort:'high',covers:[phase+':'+lane],ended_at:'2026-10-22T00:01:00Z'});
  }
  // An arbitrary same-unit projection has no source-change authority. The
  // real controller below authenticates the child and supplies its private token.
  const projected=structuredClone(report),current={...f.now,[id]:itemHashGuard(readFileSync(join(root,'items',id+'.md'),'utf8'))};
  Object.assign(projected.reviews.find(row=>row.id===id),{disposition:'repaired',...reviewContextHashes(root,[id])[id]});
  assert.ok(validateReports(pack,[projected],current,{root}).errors.includes('change without confirmed adjudication '+id));
  assert.equal(advanceAdjudicationCorrection(root,run,'initial',1).parent_collected,true);
  const collected=JSON.parse(readFileSync(join(dir,'initial-1-collected.json')));
  assert.deepEqual(collected.errors,[]);assert.equal(collected.native_owner_finding_corrections.completion.decisions[0].outcome,'false_positive');
  assert.equal(collected.reviews.find(row=>row.id==='def-consumer').disposition,'unaffected');
  assert.equal(collected.decisions.find(row=>row.id==='def-consumer').outcome,'confirmed_nonfatal');
  assert.deepEqual(readFileSync(join(dir,'step5-v2-initial-r1-u1.json')),originalBytes);
});
