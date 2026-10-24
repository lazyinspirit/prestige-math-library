import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import {itemHashGuard} from '../../tools/item-hash.mjs';
const B='research/math-library-rendering-repairs-2026-10-23';
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const file=B+'/visual-confirmations.json',v=JSON.parse(fs.readFileSync(file));
let n=0;
for(let batch=1;batch<=4;batch++){
 const evidence=B+'/diagram-quality/supervisor2-legacy-visual-qa'+batch+'.json';
 if(!fs.existsSync(evidence))continue;
 const q=JSON.parse(fs.readFileSync(evidence));
 const reviewer='/root/rendering_repair_supervisor2/legacy_visual_qa'+batch;
 if(q.reviewer!==reviewer)throw Error('Reviewer mismatch '+evidence);
 for(const r of q.rows){
  if(!r.result?.startsWith('pass'))throw Error('Unaccepted result '+r.id);
  if(r.reviewer&&r.reviewer!==reviewer)throw Error('Row reviewer mismatch '+r.id);
  const rec=JSON.parse(fs.readFileSync(B+'/receipts/'+r.id+'.json'));
  if(v[r.id]?.content_sha256===rec.content_sha256)continue;
  const m=JSON.parse(fs.readFileSync(r.preview_manifest));
  const e=m.items.find(x=>x.id===r.id);if(!e)throw Error('Missing manifest item '+r.id);
  const raw=fs.readFileSync(path.join(path.dirname(r.preview_manifest),e.snapshot));
  if(sha(raw)!==e.source_sha256||e.source_sha256!==(r.preview_source_raw_sha256??r.current_source_raw_sha256)||itemHashGuard(raw.toString())!==rec.content_sha256||itemHashGuard(fs.readFileSync(r.source,'utf8'))!==rec.content_sha256)throw Error('Source/content guard '+r.id);
  if(sha(fs.readFileSync(r.adjudication_file))!==r.adjudication_sha256||rec.adjudication_sha256!==r.adjudication_sha256)throw Error('Report guard '+r.id);
  const views=r.actual_original_resolution_views;if(!views?.length)throw Error('No actual views '+r.id);
  for(const image of views)if(sha(fs.readFileSync(image.path))!==image.sha256)throw Error('PNG guard '+r.id);
  if(v[r.id]){const h=B+'/visual-confirmation-history';fs.mkdirSync(h,{recursive:true});const old=h+'/'+r.id+'-'+v[r.id].content_sha256+'.json';if(!fs.existsSync(old))fs.writeFileSync(old,JSON.stringify(v[r.id],null,2)+'\n',{flag:'wx'});}
  const shots=views.map(x=>x.path.replace(/^research\//,''));
  v[r.id]={reviewer,checked_at:q.checked_at,scope:r.scope+' '+(r.scope_limit??'Bounded changed-region review; no whole-proof audit.'),content_sha256:rec.content_sha256,source_sha256:e.source_sha256,screenshots:shots,viewed_tiles:shots,preview_manifest:r.preview_manifest,quality_evidence:evidence};n++;
 }
}
fs.writeFileSync(file+'.tmp',JSON.stringify(v,null,2)+'\n');fs.renameSync(file+'.tmp',file);console.log('Integrated '+n+' genuine legacy QA confirmations; total '+Object.keys(v).length);
