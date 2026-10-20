import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {freezeFrontier} from './step5-rounds.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {MODELS} from './models.mjs';
import {loadReaderConcerns} from './step5-reader-concerns.mjs';
const hash=s=>createHash('sha256').update(typeof s==='string'?s:JSON.stringify(s)).digest('hex');
const run='related-fixture',parent='alg-fixture',id='thm-companion',dir=`research/${run}-step5-v2`,dispatch=`research/${run}-dispatch`;
const reason='Root confirms the existing two soundness arguments must be moved from the concerned algorithm into its direct companion theorem without changing either public interface.';
function fixture(t){
 const root=mkdtempSync(join(tmpdir(),'proof-companion-'));t.after(()=>rmSync(root,{recursive:true,force:true}));for(const p of ['items',dir,dispatch,`.autopilot/${run}`])mkdirSync(join(root,p),{recursive:true});
 const files=new Set(),put=(p,v)=>{writeFileSync(join(root,p),typeof v==='string'?v:JSON.stringify(v));if(p.startsWith('research/'))files.add(p);};
 const first='1.1 Bound both coordinate approximation errors and add them using the triangle inequality. [given]';
 const second='2.1 The rational test dominates the operator norm, so passing certifies the strict bound. [step 1.1] ∎';
 const carrier=(which,kind,body)=>`---\nid: ${which}\nkind: ${kind}\nstatus: draft\n${which===id?'deps:\n  - '+parent:'deps: []'}\n---\n\n${body}`;
 const pb=carrier(parent,'algorithm',`## Definition\n\nPerform the rational test procedure.\n\n## Proof\n\n${first}\n\n${second}\n`),before=carrier(id,'theorem','## Statement\n\nThe procedure terminates and returns a certified result.\n\n## Proof\n\n1.1 Density gives an eventual candidate. [given]\n\n2.1 Enumeration returns it. [step 1.1] ∎\n');
 const pp=pb.slice(0,pb.indexOf('## Proof')).trimEnd()+'\n',proposed=before.replace('1.1 Density',first+'\n\n'+second.replace('2.1','1.2').replace(' ∎','')+'\n\n2.1 Density').replace('2.1 Enumeration','3.1 Enumeration');
 put(`items/${parent}.md`,pb);put(`items/${id}.md`,before);
 const frontier=freezeFrontier({run,batches:[{id:'1',items:[parent,id]}]}),baseline={[parent]:itemHashGuard(pb),[id]:itemHashGuard(before)},initial={version:2,repair_scope:'frontier',run,phase:'initial',round:1,adjudicationSchemaVersion:1,frontier_ids:frontier.ids,units:['1'],assignments:{'1':[]},before:baseline,rejected:[]};
 initial.judge_model=MODELS.luna.id;initial.input_evidence={[join(root,dir,'step4-verdicts.json')]:hash([parent,id].map(id=>({id,model:MODELS.luna.id,keep:true,item_sha256:baseline[id],context_sha256:'a'.repeat(64)})))};
 for(const [n,v]of Object.entries({'frontier.json':frontier,'baseline.json':baseline,'initial-1.json':initial,'step4-verdicts.json':[parent,id].map(id=>({id,model:MODELS.luna.id,keep:true,item_sha256:baseline[id],context_sha256:'a'.repeat(64)}))}))put(`${dir}/${n}`,v);
 put(`research/${run}-batch-1.pages.json`,[{items:[{id:parent},{id}]}]);
 const label='step5-v2-empty-initial-r1-u1',native={run,role:'tool',label,covers:['1'],ok:true,written_by:'autopilot',ended_at:'2026-10-01T10:00:00Z'};
 put(`${dispatch}/tool-${label}.result.json`,native);put(`${dir}/step5-v2-initial-r1-u1.json`,{run,phase:'initial',round:1,unit:'1',input_sha256:hash(initial),completion:'mechanical-zero-work',written_by:'step5-workflow',mathematical_review:false,reviews:[],decisions:[],created_items:[],downstream:[],ledger_updates:[],gate_resolutions:[]});
 const state={run,stage:'5.1-adjudicate',paused:true,dispatches:{[`5.1-adjudicate:${label}`]:{stage:'5.1-adjudicate',role:'tool',label,covers:['1'],lastExitOk:true,startedAt:'2026-10-01T09:59:00Z',endedAt:'2026-10-01T10:01:00Z'}}};put(`.autopilot/${run}/state.json`,state);put('research/creation.json',state);put('research/request.json',{version:1,run,id:'actual-fixture-hold',group:'5.1-adjudicate',stages:['5.1-adjudicate'],at:'2026-10-01T10:02:00Z'});
 const concern={id:parent,concern:reason,severity:'presentation'},document={batches:['1'],items_read:[parent],concerns:[concern]},reader={run,role:'alpha-batch-read',label:'1',covers:['1'],ok:true,model:MODELS.sol61.id,provider_effort:'medium',attempt:1,evidence_tag:'.attempt-1',started_at:'2026-10-01T08:00:00Z',ended_at:'2026-10-01T09:00:00Z',process_exit_code:0,exit_code:0,timed_out:false,terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true,error_events:0}};
 put(`research/${run}-batch-1-step5-context.json`,document);for(const suffix of ['.result.json','.attempt-1.result.json'])put(`${dispatch}/alpha-batch-read-1${suffix}`,reader);put(`${dispatch}/alpha-batch-read-1.attempt-1.last-message.json`,document);
 put('research/root.md',reason);for(const [p,s]of Object.entries({'parent-before.md':pb,'before.md':before,'parent-proposed.md':pp,'proposed.md':proposed}))put('research/'+p,s);
 const owner=(s,companion=false)=>({reviewed_by:'root',...(companion?{necessary_related_work:true}:{confirmed_defect:true}),reviewed_at:'2026-10-01T10:04:00Z',reason,evidence_file:'research/root.md',scientific_owner:'/root/scientific_owner',full_current_source_read:true,source_raw_sha256:hash(s),proposed_edits:[{source_excerpt:companion?'1.1 Density gives an eventual candidate. [given]':first,proposed_replacement:companion?first:'Move this entire step into the companion theorem.'}]});
 const pentry={id:parent,batch:'1',reader_batch:'1',source_kind:'concern',concern_index:0,concern,before_guard_sha256:baseline[parent],owner_review:owner(pb)};
 const entry={id,batch:'1',reader_batch:'1',source_kind:'proof-companion',before_guard_sha256:baseline[id],owner_review:owner(before,true),related_work:{parent_id:parent,parent_before_file:'research/parent-before.md',before_file:'research/before.md',parent_proposed_file:'research/parent-proposed.md',proposed_file:'research/proposed.md',review_file:'research/related-review.json'}};
 const review={version:1,run,parent_id:parent,id,reviewed_by:'root',authorized_by:'owner',scientific_owner:'/root/scientific_owner',parent_full_source_read:true,companion_full_source_read:true,native_execution_coverage_adopted:false,native_full_read_adopted:false,original_finding_is_parent_only:true,unchanged_public_interfaces:true,parent_before_raw_sha256:hash(pb),before_raw_sha256:hash(before),parent_proposed_raw_sha256:hash(pp),proposed_raw_sha256:hash(proposed),reviewed_at:'2026-10-01T10:03:00Z',reason,relocations:[{source_step:first,target_step:first,reason},{source_step:second,target_step:second.replace('2.1','1.2').replace(' ∎',''),reason}]};review.existing_proof_steps=[{source_step:'1.1 Density gives an eventual candidate. [given]',target_step:'2.1 Density gives an eventual candidate. [given]',reason},{source_step:'2.1 Enumeration returns it. [step 1.1] ∎',target_step:'3.1 Enumeration returns it. [step 1.1] ∎',reason}];put('research/related-review.json',review);
 const row={version:3,kind:'owner-confirmed-step4-reader-concerns',run,authorized_by:'owner',owner_identity:'/root',native_coverage_adopted:false,recorded_at:'2026-10-01T10:05:00Z',original_count:2,creation_state:{file:'research/creation.json',captured_at:'2026-10-01T10:02:30Z'},owner_gate_request:{file:'research/request.json',id:'actual-fixture-hold'},entries:[pentry,entry],bindings:{}};
 const save=()=>{row.bindings=Object.fromEntries([...files].filter(p=>!p.endsWith('reader-concern-admissions.json')).map(p=>[p,hash(readFileSync(join(root,p),'utf8'))]));put(`research/${run}-step5-reader-concern-admissions.json`,row);};save();
 return {root,row,entry,pentry,review,put,save,state,initial,before,pb,proposed,pp,document};
}
test('v3 admits authentic existing proof companion without inventing its reader concern or coverage',t=>{const f=fixture(t);const result=loadReaderConcerns(f.root,run,{requireCollection:false});assert.equal(result.entries.length,2);assert.equal(result.entries[1].source_kind,'proof-companion');assert.equal(Object.hasOwn(f.entry,'concern'),false);assert.deepEqual(f.document.items_read,[parent]);});
for(const defect of ['v2','missing-parent','fake-concern','other-parent-kind','parent-not-read','other-owner','no-full-read','native-coverage','bad-before','changed-interface','no-dependency','retained-proof','bad-relocation','wrong-hash','assigned','rejected','changed-current','missing-root','wrong-stage','active','impact','bad-native','missing-handoff'])test(`proof companion rejects ${defect}`,t=>{
 const f=fixture(t);
 if(defect==='v2')f.row.version=2;
 if(defect==='missing-parent')f.row.entries.shift();
 if(defect==='fake-concern')f.entry.concern={id,concern:'invented'};
 if(defect==='other-parent-kind')f.pentry.source_kind='alert';
 if(defect==='parent-not-read'){f.document.items_read=[];f.put(`research/${run}-batch-1-step5-context.json`,f.document);f.put(`${dispatch}/alpha-batch-read-1.attempt-1.last-message.json`,f.document);}
 if(defect==='other-owner')f.pentry.owner_review.scientific_owner='/root/other';
 if(defect==='no-full-read')f.review.companion_full_source_read=false;
 if(defect==='native-coverage')f.review.native_full_read_adopted=true;
 if(defect==='bad-before')f.put('research/before.md',f.before+'forged');
 if(defect==='changed-interface')f.put('research/proposed.md',f.proposed.replace('certified result','weakened result'));
 if(defect==='no-dependency')f.put('research/proposed.md',f.proposed.replace('  - '+parent,'  - def-other'));
 if(defect==='retained-proof')f.put('research/parent-proposed.md',f.pb);
 if(defect==='bad-relocation')f.review.relocations[0].source_step='Invented original proof step.';
 if(defect==='wrong-hash')f.review.before_raw_sha256='0'.repeat(64);
 if(defect==='assigned'){f.initial.assignments['1']=[{id}];f.put(`${dir}/initial-1.json`,f.initial);}
 if(defect==='rejected'){f.initial.rejected=[{id}];f.put(`${dir}/initial-1.json`,f.initial);}
 if(defect==='changed-current')f.put(`items/${id}.md`,f.before+'changed');
 if(defect==='missing-root')f.entry.owner_review.necessary_related_work=false;
 if(defect==='wrong-stage'){f.state.stage='5.3-certify';f.put(`.autopilot/${run}/state.json`,f.state);}
 if(defect==='active'){f.state.dispatches.live={startedAt:'now'};f.put(`.autopilot/${run}/state.json`,f.state);}
 if(defect==='impact')f.put(`${dir}/impact-initial-1.json`,{});
 if(defect==='bad-native')f.put(`${dispatch}/tool-step5-v2-empty-initial-r1-u1.result.json`,{ok:false});
 if(defect==='missing-handoff')delete f.row.bindings[`${dir}/step5-v2-initial-r1-u1.json`];
 f.put('research/related-review.json',f.review);f.save();if(defect==='missing-handoff'){delete f.row.bindings[`${dir}/step5-v2-initial-r1-u1.json`];f.put(`research/${run}-step5-reader-concern-admissions.json`,f.row);}assert.throws(()=>loadReaderConcerns(f.root,run,{requireCollection:false}));
});
test('normal initial collection routes both admitted sources into genuine 5.2 owner review',async t=>{
 const f=fixture(t),{collect,prepareImpact}=await import('./step5-workflow.mjs');
 const initialBytes=readFileSync(join(f.root,dir,'initial-1.json'),'utf8');
 const result=collect(f.root,run,'initial',1);assert.deepEqual(result.decisions,[]);assert.deepEqual(result.reviews,[]);
 const pack=prepareImpact(f.root,run,'impact-initial',1);assert.deepEqual(Object.values(pack.assignments).flat().sort(),[parent,id].sort());assert.ok(pack.reader_concern_owners[parent]);assert.ok(pack.reader_concern_owners[id]);assert.equal(pack.reader_concerns.find(e=>e.id===id).source_kind,'proof-companion');assert.equal(readFileSync(join(f.root,dir,'initial-1.json'),'utf8'),initialBytes);
});
