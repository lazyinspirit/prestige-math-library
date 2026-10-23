import fs from 'node:fs';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';import {isDeepStrictEqual as same} from 'node:util';
import {splitFrontmatter,sourceSectionText} from '../../tools/physics-support/facts-block.mjs';import {itemHashGuard} from '../../tools/physics-support/item-hash.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step3-escalations`,out=`${base}/current-boundary-integration.json`,sha=x=>createHash('sha256').update(x).digest('hex'),read=p=>JSON.parse(fs.readFileSync(p)),norm=x=>String(x).replace(/\s+/g,' ').trim();
assert.ok(!fs.existsSync(out));const docs=new Map(),owners=new Map(),changes=[];
for(let b=1;b<=47;b++){const path=`research/${run}-batch-${b}.proof-contracts.json`,d=read(path);for(const id of Object.keys(d.contracts))owners.set(id,path);}
const numeric=read(`${base}/root-numeric-levels.json`);
for(const name of ['source3/current-boundary-review.json','weak8/current-boundary-review.json','fourier43/current-boundary-review.json']){
 const path=`${base}/${name}`,report=read(path),evidence={path,sha256:sha(fs.readFileSync(path))};
 for(const r of report.rows){
  const id=r.item??r.id,cp=owners.get(id);assert.ok(cp,`No owner ${id}`);if(!docs.has(cp))docs.set(cp,{before:fs.readFileSync(cp,'utf8'),after:read(cp)});
  const c=docs.get(cp).after.contracts[id],b=c.boundaries.find(x=>x.case===r.case);assert.ok(b);
  const raw=fs.readFileSync(`items/${id}.md`,'utf8'),expected=r.current_source_rawsha??r.current_raw_sha256;
  if(sha(raw)!==expected){const ctl=numeric.before.find(x=>x.path===`items/${id}.md`);assert.ok(ctl&&ctl.sha256===expected&&ctl.after_sha256===sha(raw));assert.equal(splitFrontmatter(raw).body,splitFrontmatter(fs.readFileSync(ctl.archive,'utf8')).body);}
  const old=r.actual_row??r.current_boundary??r['prior_review/basis']?.actual_boundary_rows?.batch17;
  assert.ok(old);for(const[k,v]of Object.entries(old))assert.ok(same(b[k],v),`Reviewed preimage differs ${id}/${r.case}/${k}`);
  const proposal=r.proposed_boundary??r.proposed_boundary_scientific_fields??r.exact_proposed_rows?.batch17;
  if(proposal){for(const key of ['status','reason','evidence','case_scope'])if(Object.hasOwn(proposal,key))b[key]=structuredClone(proposal[key]);if(b.status==='checked')delete b.reason;else delete b.evidence;}
  if(b.case_scope?.source_section==='Facts & Assumptions'&&r.case==='nonempty-choice'){
   const heading=id.startsWith('cex-')?'Statement refuted':'Statement',actual=sourceSectionText(raw,heading),anchor='Assume Countable Choice: every sequence of nonempty sets admits a choice function.';
   assert.ok(actual.includes(anchor));b.case_scope={source_section:heading,source_excerpt:anchor};
  }
  if(b.case_scope){const actual=sourceSectionText(raw,b.case_scope.source_section);assert.ok(actual&&norm(actual).includes(norm(b.case_scope.source_excerpt)),`Stale semantic case anchor ${id}/${r.case}`);}
  const text=b.reason??b.evidence??'',rowSha=sha(JSON.stringify({case:b.case,status:b.status,text}));assert.ok(r.reason.length>=40);
  // Previous complete worksheets are archived before replacement. This current
  // stamp adopts the genuine same-owner row review, not the historical stamp.
  b.template_review={upheld:true,by:'/root',reason:r.reason,item_sha256:itemHashGuard(raw),row_sha256:rowSha,current_scientific_review:evidence};
  changes.push({id,case:r.case,decision:r.decision,source_sha256:sha(raw),row_sha256:rowSha,review:evidence});
 }
}
assert.equal(changes.length,96);const archive=`${base}/before-current-boundary-integration`;fs.mkdirSync(archive);const preimages=[];
for(const[path,d]of docs){assert.equal(fs.readFileSync(path,'utf8'),d.before);const dest=`${archive}/${path.replaceAll('/','__')}`;fs.writeFileSync(dest,d.before,{flag:'wx'});preimages.push({path,archive:dest,sha256:sha(d.before)});}
for(const[path,d]of docs){assert.equal(fs.readFileSync(path,'utf8'),d.before);fs.writeFileSync(path,JSON.stringify(d.after,null,2)+'\n');}
fs.writeFileSync(out,JSON.stringify({version:1,run,owner:'/root',at:new Date().toISOString(),operation:'Root adopts96 actual current same-owner scientific boundary rows; exact prior worksheets retained in archives. Only three source3/weak/Fourier scientific scopes; no other review coverage claimed.',changes,preimages,gates_attempted:0},null,2)+'\n',{flag:'wx'});console.log({rows:changes.length,files:docs.size});
