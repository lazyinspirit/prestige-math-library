import {readFileSync,writeFileSync} from 'node:fs';import {createHash} from 'node:crypto';
const root=process.cwd(),run='inverse-problems-knot-theory-all-109-2026-10-19',base=`research/${run}-supervision-20261020/step3-supervision/gate-r1-accepted-continuities`,read=p=>JSON.parse(readFileSync(p,'utf8')),sha=x=>createHash('sha256').update(x).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x,hash=x=>sha(JSON.stringify(canonical(x))??'undefined');
const {sourceIdenticalAcceptanceContinuity}=await import(root+'/tools/step3-owner-source-identical-continuity.mjs'),{homeAlphaReviewIdentity}=await import(root+'/tools/step3-owner-home-alpha-continuations.mjs');
const registryPath=`research/${run}-step3-owner-repair-evidence.json`,registry=read(registryPath),templates=[...read(base+'/owner-evidence.new-only.pending.json').source_identical_acceptance_continuities,...read(base+'/owner-evidence.existing-nine.pending.json').source_identical_acceptance_continuities],entries=[],checks=[];templates.push(read(`research/${run}-supervision-20261020/step3-supervision/open-problem-acceptance-continuity/op52-entry-template/entry.template.json`));
writeFileSync(base+'/root-registry-before-round2-sealing.json',JSON.stringify(registry,null,2)+'\n');
for(const e of templates){
 const batch=e.obligation.split(':')[1],id=e.id,scope=read(`research/${run}-step3-scope-${batch}.json`),d=read(`research/${run}-alpha-batch-${batch}-3a-decisions.json`).decisions.find(d=>d.obligation===e.obligation);
 if(d?.verdict!=='accepted_repair')continue;
 const target={obligation:e.obligation,id,batch,route:'touched',added:(scope.added??[]).includes(id)};if(!scope.touched.includes(id)||target.added)throw Error('Not original touched');
 const before=read(`research/${run}-step3-hash-${batch}-post.json`).hashes[id],manifest=read(`research/${run}-batch-${batch}.pages.json`),rows=[];for(const p of Array.isArray(manifest)?manifest:manifest.pages)for(const i of p.items??[])if(i.id===id)rows.push({...i,__step4_page_id:p.id});if(rows.length!==1)throw Error('Manifest uniqueness '+id);
 const contract=read(`research/${run}-batch-${batch}.proof-contracts.json`).contracts?.[id]??null,current={item_sha256:sha(readFileSync(`items/${id}.md`)),contract_sha256:hash(contract),manifest_sha256:hash(rows[0])};
 const {risk_review,...withoutReview}=contract??{};const riskOnly=current.item_sha256===before.item_sha256&&current.manifest_sha256===before.manifest_sha256&&contract&&Object.hasOwn(contract,'risk_review')&&hash(withoutReview)===before.contract_sha256;
 const needed=hash(current)!==hash(before)&&!riskOnly,existing=registry.source_identical_acceptance_continuities.some(x=>x.obligation===e.obligation);
 if(!needed&&!existing){checks.push({id,needed:false,bypass:riskOnly?'existing-risk-review-only-path':'exact-reader-post-carrier'});continue;}
 e.native_result.path=homeAlphaReviewIdentity(root,run,batch).stable_path;
 for(const v of Object.values(e))if(v&&typeof v==='object'&&v.path)v.sha256=sha(readFileSync(v.path));
 const original=read(e.accepted_decision_archive.path).decisions.find(x=>x.id===id&&x.obligation===e.obligation&&x.verdict==='accepted_repair');if(!original)throw Error('Missing original accepted decision');
 e.post_reader_carrier_sha256=hash(before);e.target_sha256=hash(target);e.current_carrier_sha256=hash(current);e.accepted_decision_sha256=hash(original);
 const valid=sourceIdenticalAcceptanceContinuity(root,run,d,target,before,current,e);checks.push({id,needed,existing,valid,source_raw_equals_post:current.item_sha256===before.item_sha256});console.log(id,valid);if(valid)entries.push(e);
}
const failures=checks.filter(c=>c.valid===false);writeFileSync(base+'/root-round2-current-validation.json',JSON.stringify({run,owner:'/root',at:new Date().toISOString(),checks,failures,new_mathematical_acceptance:false,native_coverage_adopted:false},null,2)+'\n');
if(failures.length)throw Error(failures.length+' actual continuity failures; registry not replaced');
const handled=new Set(templates.map(e=>e.obligation));registry.source_identical_acceptance_continuities=[...registry.source_identical_acceptance_continuities.filter(e=>!handled.has(e.obligation)),...entries];writeFileSync(registryPath,JSON.stringify(registry,null,2)+'\n');console.log({entries:entries.length,bypasses:checks.filter(c=>c.needed===false).length,failures:0});
