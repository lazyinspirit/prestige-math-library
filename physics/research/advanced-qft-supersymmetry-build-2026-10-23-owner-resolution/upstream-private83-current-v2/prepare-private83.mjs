import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual as equal} from 'node:util';
import {splitFrontmatter} from '../../../tools/physics-support/facts-block.mjs';
import {yaml} from '../../../tools/physics-support/pathway-lib.mjs';
import {recordedPublishedRepair} from '../../../tools/published-repair-policy.mjs';
import {originalPresentationChanges,validateOriginalPresentationReviews} from '../../../tools/physics-support/original-presentation-maintenance.mjs';

const run='advanced-qft-supersymmetry-build-2026-10-23',owner=`research/${run}-owner-resolution`,out=`${owner}/upstream-private83-current-v2`,prep=`${owner}/private-preparation`,sha=b=>createHash('sha256').update(b).digest('hex');
if(fs.existsSync(out+'/private83-authority-proposal.json'))throw Error('unique version required');
const guards=new Map(),watch=f=>{const b=fs.readFileSync(f),h=sha(b);if(guards.has(f)&&guards.get(f)!==h)throw Error('input changed '+f);guards.set(f,h);return b;},json=f=>JSON.parse(watch(f));
const code={extractor:{path:'tools/physics-support/original-presentation-maintenance.mjs',sha256:'af89ee14796ddd2136066f7a417c1786b3282fa71ce28c8e66ddf0d7b877e866'},wrapper:{path:'tools/physics-support/original-rendering-maintenance.mjs',sha256:'99f428f207735490068e108766cc0a9af3f2731a8e933b3d101b3c629a89ed9f'}};
for(const r of Object.values(code))if(sha(watch(r.path))!==r.sha256)throw Error('Root-cleared code changed');
const bp=`research/${run}-original-rendering-maintenance.json`,baseBytes=watch(bp),base=JSON.parse(baseBytes);
if(sha(baseBytes)!=='819455fafb5604b39c1ef8e09d935dcf9b499aeed9e7077993ba9d2c8bac5a2a'||base.entries.length!==53)throw Error('validated exact53 base');
const receipt=json('research/math-imports.json'),root=receipt.source_root,inventory=json(`${owner}/upstream-private77-current-v1/observation.json`);
if(inventory.installed_authority.sha256!==sha(baseBytes)||inventory.new_reached_items.length!==30||inventory.installed_current_versions!==53||inventory.scope.pages!==138||inventory.scope.owned!==442||inventory.scope.reached_paths!==6629)throw Error('exact current30 inventory required');
const definitions=[
 ['upstream-drift-post53-current-v2','scientific-and-use-proposals.json','root-prospective-new3-science-v1.json','8a8b7c928e5bc3e9da4961ee3e2a5b6391f540f4c25e6067d6c452b39068a211'],
 ['upstream-drift-post53-extra6-v1','new7-scientific-and-use-proposals.json','root-prospective-new7-science-v1.json','efb41a53c62b22865ea42f561a471ba84e05d1b72ddb9469bd4e6bc4d44f2f1d'],
 ['upstream-post53-new5-v1','scientific-and-use-proposals.json','root-prospective-new5-science-v1.json','b3c60a99f34028e32ec60a94432bc4c8dcda2f94b7c3a6eb3c7525cf351fdad0'],
 ['upstream-post53-new9-v1','scientific-and-use-proposals.json','root-prospective-new9-science-v1.json','35ad3bd7ae64b0bc7926dae614002e5830f3a0d655a0e06134e75d5b779f0bc8'],
 ['upstream-post53-new6-v1','scientific-and-use-proposals.json','root-prospective-new6-science-v1.json','cb0911fd23f88036633eeda7edaaf46cb14a4895a770a6b1b21f55b531ca0290'],
];
const groups=new Map(),sourceReviews=[];
for(const [dir,scienceName,rootName,rootHash]of definitions){const group=`${owner}/${dir}`,sciencePath=group+'/'+scienceName,s=json(sciencePath),evidenceNames=['report.md',scienceName,dir==='upstream-drift-post53-extra6-v1'?'new7-direct-use-excerpts-v2.json':dir==='upstream-drift-post53-current-v2'?'direct-use-excerpts.json':'direct-use-excerpts.json'];
 const evidence=evidenceNames.map(n=>{const f=group+'/'+n;return{path:f,sha256:sha(watch(f))};});
 if(rootName){const f=prep+'/'+rootName;if(sha(watch(f))!==rootHash)throw Error('Root scientific record drift '+f);evidence.push({path:f,sha256:rootHash});}
 for(const entry of s.entries){if(groups.has(entry.id))throw Error('duplicate scientific owner');groups.set(entry.id,{group,science:entry,evidence});}
 sourceReviews.push({group,science:{path:sciencePath,sha256:sha(watch(sciencePath))},root_science:rootName?{path:prep+'/'+rootName,sha256:rootHash}:'ROOT_DECISION_REQUIRED'});
}
if(groups.size!==30)throw Error('exact30 scientific review scope');
const rootCode={path:prep+'/proof-support-consolidation-v2/ast-final/root-code-review.json',sha256:'ec6e0f3a850312f4601cf5a04c3df4eafce2953ce4aea2f8830af85324732ad9'};
if(sha(watch(rootCode.path))!==rootCode.sha256)throw Error('code-review guard');
const transitionPath=`${owner}/upstream-new10-combined25-rebinding-v1/rebinding.json`,transition=json(transitionPath);
if(sha(watch(transitionPath))!=='bd445a3d62ec795d25023650a6cf2a84a8f9b8986aac8492e692b63075b19ef4'||transition.consumer_pairs!==811)throw Error('exact reviewed new10 transition');
if(sha(watch(transition.application.path))!==transition.application.sha256)throw Error('Root combined25 receipt');
const current10=new Map(transition.entries.map(e=>[e.id,e.consumers]));
const declarations=new Map();
for(const[f,h]of Object.entries(base.scope.frontier)){const b=watch(f);if(sha(b)!==h)throw Error('current frontier drift '+f);for(const pg of JSON.parse(b))for(const d of pg.items)declarations.set(d.id,d);}
if(declarations.size!==442||Object.keys(base.scope.frontier).length!==69)throw Error('exact69/442');
const required=new Map(Object.entries(base.inputs)),add=(f,h)=>{if(sha(watch(f))!==h)throw Error('unbound/stale input '+f);if(required.has(f)&&required.get(f)!==h)throw Error('conflicting input '+f);required.set(f,h);},bind=(f,h)=>{if(required.get(f)!==h)throw Error('missing consumed binding '+f);return watch(f);},localEvidence=r=>bind(r.path,r.sha256);
for(const[f,h]of required)if(sha(watch(f))!==h)throw Error('existing53 input drift '+f);
const entries=[],rows=[],runtimeInputs=new Map(),pending=[];
for(const item of inventory.new_reached_items){const id=item.id,g=groups.get(id);if(!g)throw Error('unreviewed source '+id);
 const before=watch(item.path),after=watch(item.original_path),observed=splitFrontmatter(watch(g.group+'/observed/'+id+'.original.md').toString()),oldPin=watch(g.group+'/observed/'+id+'.pinned.md'),parts=splitFrontmatter(after.toString()),md=yaml().parse(parts.fm);
 if(!before.equals(oldPin)||sha(before)!==item.pinned_sha256||sha(after)!==item.original_sha256||parts.body!==observed.body||md.title!==yaml().parse(observed.fm).title)throw Error('unreviewed exact source version '+id);
 const loc=md.verification?.repair,auth=loc&&recordedPublishedRepair(root,id,after.toString(),loc);if(!auth?.ok)throw Error('not genuinely finalized '+id);
 const rp=path.resolve(root,loc),rb=watch(rp),record=JSON.parse(rb),ap=path.resolve(root,record.adjudication_file),ab=watch(ap),adjudication=JSON.parse(ab);
 const readAdjudication=g.group.endsWith('/upstream-drift-post53-current-v2')?g.group+'/finalized-evidence-2/'+id+'/adjudication.json':g.group+'/prospective-main-evidence/'+id+'.json';
 if(record.before_raw_sha256!==sha(before)||!watch(path.resolve(root,record.before_file)).equals(before)||sha(ab)!==record.adjudication_sha256||!ab.equals(watch(readAdjudication))||adjudication.id!==id||adjudication.changed!==true||adjudication.mathematical_meaning_preserved!==true||!adjudication.findings.some(f=>f.verdict==='confirmed'&&['repaired','repaired-and-visually-verified','resolved'].includes(f.status)))throw Error('exact native provenance '+id);
 const claimLines=fs.readFileSync(path.resolve(root,`research/${record.run}-step3-published-claims.jsonl`),'utf8').split('\n').filter(Boolean).filter(l=>JSON.parse(l).id===id),claim=claimLines.length===1&&JSON.parse(claimLines[0]),check=record.proof_layout;
 if(!claim||claim.pre_sha256!==record.pre_sha256||claim.run!==record.run||claim.group!==record.group||check.exit_code!==0||check.content_sha256!==record.content_sha256||!/^proof-layout: 1 items, \d+ steps, 0 defects(?:\s|$)/m.test(check.output??'')||Date.parse(check.checked_at)<Date.parse(claim.claimed_at)||Date.parse(check.checked_at)>Date.parse(record.recorded_at)||!check.command.includes('tools/proof-layout.mjs')||!check.command.includes('items/'+id+'.md'))throw Error('claim/layout chronology '+id);
 const ledger=fs.readFileSync(path.resolve(root,'research/published-consumer-supplier-ledger.md'),'utf8'),start=`<!-- local-published-repair:${record.ledger_marker}:begin -->`,end=`<!-- local-published-repair:${record.ledger_marker}:end -->`;
 if(ledger.split(start).length!==2||ledger.split(end).length!==2)throw Error('ambiguous ledger '+id);const block=ledger.split(start)[1].split(end)[0];if(sha(block)!==record.ledger_sha256)throw Error('ledger extraction '+id);
 const ed=out+'/native-evidence/'+id;fs.mkdirSync(ed,{recursive:true});for(const[n,b]of[['source.md',after],['receipt.json',rb],['adjudication.json',ab],['ownership.json',claimLines[0]+'\n'],['ledger.md',block]])fs.writeFileSync(ed+'/'+n,b,{flag:'wx'});
 const support=id==='thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage'?{version:1,steps:['1.2','2.2']}:undefined,relocation=id==='thm-collar-neighborhood-theorem'?{version:1,steps:[{label:'1.1',target:'thm-euclidean-inverse-function-theorem'}]}:undefined;
 const changes=originalPresentationChanges(before,after,support,relocation),science=g.science,evidence=[...g.evidence,rootCode];
 if(current10.has(id))evidence.push({path:transitionPath,sha256:sha(watch(transitionPath))},{path:transition.application.path,sha256:transition.application.sha256});
 const ownership={path:ed+'/ownership.json',sha256:sha(watch(ed+'/ownership.json'))},ledgerEvidence={path:ed+'/ledger.md',sha256:sha(watch(ed+'/ledger.md'))};
 const consumers=current10.get(id)??science.consumer_pairs;
 if(!consumers||consumers.length!==item.consumers.length||consumers.some(c=>!item.consumers.some(d=>d.id===c.id)))throw Error('consumer set drift '+id);
 for(const c of consumers){if(sha(watch(c.source_path))!==c.source_sha256||sha(JSON.stringify(declarations.get(c.id)))!==c.declaration_sha256)throw Error('consumer source/declaration drift '+id+'/'+c.id);add(c.source_path,c.source_sha256);}
 const entry={id,path:item.path,pinned_sha256:sha(before),original_path:item.original_path,original_sha256:sha(after),presentation_version:2,...(support?{proof_support_consolidation:support}:{}),...(relocation?{proof_reference_relocation:relocation}:{}),repair_receipt:{path:rp,sha256:sha(rb)},ownership_evidence:ownership,ledger_evidence:ledgerEvidence,changes,scientific_review:{statements:changes.review_classification.statements,facts:changes.review_classification.facts,hypotheses:'identical',proof:changes.review_classification.proof,new_premises:false,new_results:false,reason:science.reason,reading_limits:science.reading_limits},presentation_reviews:changes.deltas.map(d=>({delta_id:d.id,delta_sha256:sha(JSON.stringify(d)),reason:science.reason+' The exact individual '+d.kind+' delta is included in the complete source/delta and actual-use reading recorded here.',reading_limits:science.reading_limits,evidence,...(d.target?{pinned_target:{path:'items/'+d.target+'.md',sha256:sha(watch('items/'+d.target+'.md'))}}:{})})),proof_step_reviews:{},evidence,consumers:consumers.map(c=>({...c,decision:'ROOT_DECISION_REQUIRED',proposed_decision:'unaffected',reason:c.reason??science.reason,reading_limits:c.reading_limits??science.reading_limits,evidence})),root_decision:'ROOT_DECISION_REQUIRED'};
 for(const[f,h]of[[entry.path,entry.pinned_sha256],[entry.original_path,entry.original_sha256],[rp,sha(rb)],[path.resolve(root,record.before_file),sha(before)],[ap,sha(ab)],[ownership.path,ownership.sha256],[ledgerEvidence.path,ledgerEvidence.sha256]])add(f,h);
 for(const r of evidence)add(r.path,r.sha256);for(const r of entry.presentation_reviews)if(r.pinned_target)add(r.pinned_target.path,r.pinned_target.sha256);
 if(changes.proof_support_parser_runtime){for(const[f,h]of Object.entries(changes.proof_support_parser_runtime.inputs)){add(f,h);if(runtimeInputs.has(f)&&runtimeInputs.get(f)!==h)throw Error('runtime conflict');runtimeInputs.set(f,h);}}
 const valid=validateOriginalPresentationReviews(entry,changes,{receipt,scope:{importedItems:new Set(receipt.files.filter(f=>f.path.startsWith('items/')).map(f=>f.path.slice(6,-3))),paths:new Set(receipt.files.map(f=>f.path))},bind,localEvidence});
 rows.push({id,actual_typed_review_validator:valid,auth,original_sha256:entry.original_sha256,deltas:changes.deltas.map(d=>({id:d.id,kind:d.kind,target:d.target??null})),runtime_inputs:changes.proof_support_parser_runtime?Object.keys(changes.proof_support_parser_runtime.inputs).length:0,consumers:entry.consumers.length});entries.push(entry);
}
if(entries.length!==30||runtimeInputs.size!==403)throw Error('exact30/403');
const candidate=structuredClone(base);candidate.entries.push(...entries);if(candidate.entries.length!==83||!equal(candidate.entries.slice(0,53),base.entries))throw Error('first53 not preserved');
candidate.inputs=Object.fromEntries(required);candidate.private_candidate=true;candidate.authoritative=false;candidate.reviewer='ROOT_DECISION_REQUIRED';candidate.root_decision='ROOT_REVIEW_AND_ADOPTION_REQUIRED';candidate.adopted_at='ROOT_REAL_ADOPTION_TIME_REQUIRED';candidate.installed_authority_guard={path:bp,sha256:sha(baseBytes)};candidate.reason='Private83 proposal preserves all53 validated entries exactly and appends30 genuinely finalized, same-owner source/use-reviewed exact versions. Root science adoption, current broad source-currency check and production authority/native validation remain separate. No native acceptance or fresh whole-closure proof audit is asserted.';candidate.current_source_supplement={reviews:sourceReviews,consumer_transition:{path:transitionPath,sha256:sha(watch(transitionPath))},code_review:rootCode,code_guards:code};candidate.full_current_original_frontier_complete=false;candidate.fresh_broad_currency_check_required=true;candidate.unresolved_original_drift='ROOT_FRESH_BROAD_CURRENT_SCAN_REQUIRED_AFTER_PRIVATE83';
for(const[f,h]of guards)if(sha(fs.readFileSync(f))!==h)throw Error('input changed at final guard '+f);
fs.writeFileSync(out+'/private83-authority-proposal.json',JSON.stringify(candidate,null,2)+'\n',{flag:'wx'});
const result={at:new Date().toISOString(),kind:'private typed/source/native/use preparation only; not source adoption or native gate',code,base:{path:bp,sha256:sha(baseBytes)},first53_entries_exact:true,new_finalized_entries:30,total:83,new_consumer_pairs:entries.reduce((n,e)=>n+e.consumers.length,0),runtime_inputs:runtimeInputs.size,total_inputs:required.size,rows,root_decisions_pending:true,current_frontier_guarded:{manifests:69,owned:442},full_current_original_frontier_complete:false,fresh_broad_currency_check_required:true,proposal_sha256:sha(fs.readFileSync(out+'/private83-authority-proposal.json')),production_written:false};
fs.writeFileSync(out+'/preparation-checks.json',JSON.stringify(result,null,2)+'\n',{flag:'wx'});fs.writeFileSync(out+'/input-guards.json',JSON.stringify(Object.fromEntries(guards),null,2)+'\n',{flag:'wx'});console.log({proposal:out+'/private83-authority-proposal.json',sha256:result.proposal_sha256,new_entries:entries.length,new_consumer_pairs:result.new_consumer_pairs,runtime_inputs:runtimeInputs.size,total_inputs:required.size,typed_reviews:rows.length,first53_exact:true});
