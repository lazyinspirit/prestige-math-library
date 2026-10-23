import {readFileSync as rf,writeFileSync as wf,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {runPages} from '../../tools/physics-support/item-dependency-levels.mjs';
import {itemHashGuard} from '../../tools/physics-support/item-hash.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step2-escalations`,out=`${base}/first-battery-boundary-integration.json`,read=p=>JSON.parse(rf(p)),sha=b=>createHash('sha256').update(b).digest('hex'),assert=(v,m)=>{if(!v)throw Error(m);};
assert(!existsSync(out),'Already integrated');
const old=read(`${base}/first-boundary-failure-full.json`).contradicted,request=read(`.physics-autopilot/${run}/owner-gate-history/f845cd03-700b-46c1-8800-6cec6469c95c.json`).request,rawGuards=new Map(request.snapshot.items.map(x=>[x.id,x.carrierSha256])),homes=new Map(runPages(process.cwd(),run).flatMap(p=>p.items.map(i=>[i.id,p.batch]))),docs=new Map(),changes=[],seen=new Set();
for(const suffix of ['5-11','25','39','44','47']){
 const reportPath=`${base}/first-boundary-resolution-${suffix}.json`,report=read(reportPath);
 for(const r of report.rows){
  const key=r.id+'\0'+r.case;assert(!seen.has(key)&&old.some(x=>x.id===r.id&&x.case===r.case),'Unknown or duplicate candidate');seen.add(key);
  const raw=rf(`items/${r.id}.md`,'utf8');assert(sha(raw)===rawGuards.get(r.id),'Source changed since actual gate/review');
  const cp=`research/${run}-batch-${homes.get(r.id)}.proof-contracts.json`;if(!docs.has(cp))docs.set(cp,read(cp));const c=docs.get(cp).contracts[r.id],b=c.boundaries.find(b=>b.case===r.case);assert(b,'Missing actual row');
  const proposal=r.proposed_boundary??r.exact_repair_proposal??r.proposed_boundary_repair;
  if(proposal)for(const field of ['status','reason','evidence','case_scope'])if(field in proposal){if(proposal[field]===null)delete b[field];else b[field]=structuredClone(proposal[field]);}
  if(b.status==='checked'){delete b.reason;delete b.reviewed;}else{delete b.evidence;b.reviewed={upheld:true,by:'/root',reason:r.reason,evidence:{path:reportPath,sha256:sha(rf(reportPath))},item_sha256:itemHashGuard(raw)};}
  if(b.template_review){b.template_review.reason=r.reason;b.template_review.item_sha256=itemHashGuard(raw);b.template_review.row_sha256=sha(JSON.stringify({case:b.case,status:b.status,text:b.reason??b.evidence??''}));b.template_review.current_scientific_review={path:reportPath,sha256:sha(rf(reportPath))};}
  changes.push({id:r.id,case:r.case,decision:r.decision,status:b.status,source_sha256:sha(raw),reason:r.reason,evidence:{path:reportPath,sha256:sha(rf(reportPath))}});
 }
}
assert(seen.size===11&&old.length===11,'Incomplete actual gate resolution');
const archive=`${base}/before-first-battery-boundaries`;mkdirSync(archive,{recursive:false});const preimages=[];
for(const[path,d]of docs){const before=rf(path),target=`${archive}/${path.replaceAll('/','__')}`;wf(target,before,{flag:'wx'});preimages.push({path,archive:target,sha256:sha(before)});}
for(const[path,d]of docs)wf(path,JSON.stringify(d,null,2)+'\n');
wf(out,JSON.stringify({run,owner:'/root',at:new Date().toISOString(),native_failure:`${base}/first-native-battery.json`,changes,preimages,source_changes:[],complete:true,gates_attempted:0},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({reviewed_candidates:changes.length,files:docs.size,source_changes:0}));
