import {readFileSync as rf,writeFileSync as wf,mkdirSync,existsSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual as same} from 'node:util';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {sourceSectionText} from '../../tools/physics-support/facts-block.mjs';
import {itemHashGuard} from '../../tools/physics-support/item-hash.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step2-escalations`,out=`${base}/current-boundary-integration.json`,read=p=>JSON.parse(rf(p)),sha=b=>createHash('sha256').update(b).digest('hex'),assert=(v,m)=>{if(!v)throw Error(m);};
assert(!existsSync(out),'Already integrated');
const input=read(`${base}/current-boundary-review-inputs.json`),reports=['1-6-and37','7-14','15-20-and36','21-24','25-31','32-35-and-newcor','38-42','43-47'].map(s=>`${base}/current-boundary-review-${s}.json`),reviews=new Map();
for(const path of reports)for(const row of read(path).rows){const key=row.id+'\0'+row.case;assert(!reviews.has(key),'Duplicate review');assert(row.reason?.length>=40,'Missing individual reason');reviews.set(key,{...row,evidence:{path,sha256:sha(rf(path))}});}
assert(reviews.size===426,'Expected exact418 old +8new cases');
const controlled=new Map(),attribution=read(`${base}/current-fact-attribution-13.json`),meta=read(`${base}/fact-attribution-metadata-integration.json`);
for(const r of attribution.rows){const current=readItem(`items/${r.id}.md`),before=readItem(meta.preimages.find(x=>x.path===`items/${r.id}.md`).archive);assert(current.body===before.body,'Uncontrolled body after scientific attribution');assert(before.raw===r.after_source,'Attribution metadata preimage mismatch');controlled.set(r.id,{before:r.before_source,after:current.raw,evidence:[`${base}/current-fact-attribution-13.json`,`${base}/fact-attribution-metadata-integration.json`],review:'Root read each exact scientific diff: chart/SI use is explicit, circulation uses the existing closed-loop integral, Cartesian rotation curl is (0,0,2Omega), and smooth-potential curl is zero by mixed-partial equality. Public claims, hypotheses and every boundary axis remain unchanged.'});}
const gaugeReport=read(`${base}/current-fact-attribution-gauge-reynolds.json`);
for(const id of ['prop-fd-pressure-gauge-observables','ex-fd-reynolds-stress-sign-and-units']){const before=rf(`${gaugeReport.preimages}/${id}.md`,'utf8'),after=rf(`items/${id}.md`,'utf8');controlled.set(id,{before,after,evidence:[`${base}/current-fact-attribution-gauge-reynolds.json`],review:'Root read the exact attribution/context relocation. Countable Choice was already a stated premise and is now tagged at its actual use. The readiness observation remains verbatim outside calculation Facts; no numerical verification or public claim changed.'});}
const bgk=read(`${base}/current-fact-attribution-26.json`).authorized_repair;controlled.set(bgk.item,{before:bgk.source_preimage,after:bgk.source_after,evidence:[`${base}/current-fact-attribution-26.json`],review:'Root adopts the exact context-only relocation: actual physical supplier claim and proof are unchanged; mathematical supplier/readiness observations and both links are retained verbatim as ordinary Remarks.'});
const docs=new Map(),changes=[],scopeUpdates=[],sourceCurrency=[];
function doc(path){if(!docs.has(path))docs.set(path,read(path));return docs.get(path);}
function checkCurrency(id,expected){const current=rf(`items/${id}.md`,'utf8');if(sha(current)===expected)return current;const c=controlled.get(id);assert(c&&sha(c.before)===expected&&c.after===current,'Unreviewed source change '+id);sourceCurrency.push({id,reviewed_preimage_sha256:expected,current_sha256:sha(current),...c, before:undefined,after:undefined});return current;}
const selected=new Map(input.rows.map(x=>[x.id,x]));
for(const[key,r]of reviews){
 const found=selected.get(r.id),batch=found?.batch??33,path=`research/${run}-batch-${batch}.proof-contracts.json`,c=doc(path).contracts[r.id];assert(c,'Missing current contract');
 const raw=checkCurrency(r.id,r.current_source_rawsha),item=readItem(`items/${r.id}.md`),b=c.boundaries.find(x=>x.case===r.case);assert(b,'Missing current boundary');
 if(found){const old=found.stale_rows.find(x=>x.case===r.case);assert(old&&same(old,b),'Historical row changed since actual review '+key);}
 if(r.decision!=='uphold'&&r.decision!=='upheld'){
  const proposal=r.repair_proposal??r.exact_repair_proposal??r.proposal;assert(proposal?.status,'Missing exact repair proposal');
  for(const field of ['status','reason','evidence','case_scope'])if(field in proposal){if(proposal[field]===null)delete b[field];else b[field]=structuredClone(proposal[field]);}
  if(b.status==='checked')delete b.reason;else delete b.evidence;
 }
 const heading=({definition:'Definition',algorithm:'Definition',example:'Example',remark:'Remark',postulate:'Postulate',counterexample:'Statement refuted','false-statement':'Statement refuted'}[item.kind]??'Statement');
 if(b.case_scope?.source_section){const section=sourceSectionText(raw,b.case_scope.source_section);assert(section?.trim(),'Missing actual public section');const excerpt=b.case_scope.source_excerpt;if(!excerpt||!section.replace(/\s+/g,' ').includes(excerpt.replace(/\s+/g,' '))){b.case_scope.source_excerpt=section.trim().slice(0,240);scopeUpdates.push({id:r.id,case:r.case,source_section:b.case_scope.source_section,source_excerpt:b.case_scope.source_excerpt});}}
 else b.case_scope={source_section:heading,source_excerpt:sourceSectionText(raw,heading).trim().slice(0,240)};
 const text=b.reason??b.evidence??'',rowHash=sha(JSON.stringify({case:b.case,status:b.status,text}));
 b.template_review={upheld:true,by:'/root',reason:r.reason,item_sha256:itemHashGuard(raw),row_sha256:rowHash,current_scientific_review:r.evidence};
 const preservation=controlled.get(r.id);if(preservation)b.template_review.controlled_attribution_evidence=preservation.evidence.map(path=>({path,sha256:sha(rf(path))}));
 changes.push({id:r.id,case:r.case,decision:r.decision,source_sha256:sha(raw),row_sha256:rowHash,review:r.evidence});
}
for(const row of input.rows)for(const b of row.stale_rows)assert(reviews.has(row.id+'\0'+b.case),'Missing actual selected review');
const archive=`${base}/before-current-boundary-integration`;mkdirSync(archive,{recursive:false});const preimages=[];
for(const[path,d]of docs){const before=rf(path),target=`${archive}/${path.replaceAll('/','__')}`;wf(target,before,{flag:'wx'});preimages.push({path,archive:target,sha256:sha(before)});}
for(const[path,d]of docs)wf(path,JSON.stringify(d,null,2)+'\n');
wf(out,JSON.stringify({run,owner:'/root',at:new Date().toISOString(),operation:'Adopt actual individualized current boundary reviews, preserving every previous raw contract in archive. Root refreshes only the exact reviewed rows and new corollary worksheet; no blanket semantic certification.',old_selected_cases:418,new_corollary_cases:8,changes,case_scope_locator_updates:scopeUpdates,controlled_after_review_attributions:sourceCurrency,preimages,complete:true,gates_attempted:0},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({individual_cases:changes.length,files:docs.size,scope_locators:scopeUpdates.length,controlled_source_rows:sourceCurrency.length}));
