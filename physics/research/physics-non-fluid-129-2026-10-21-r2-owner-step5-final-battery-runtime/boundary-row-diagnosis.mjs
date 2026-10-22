import {readFileSync,writeFileSync} from 'node:fs';
import {dirname,resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {itemHashGuard} from './candidate/tools/physics-support/item-hash.mjs';
const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,'../..'),run='physics-non-fluid-129-2026-10-21-r2';
const report=JSON.parse(readFileSync(join(here,'boundary.complete-original-file.json'),'utf8'));
const contracts=JSON.parse(readFileSync(join(root,'research',run+'-proof-contracts.json'),'utf8')).contracts;
const hash=x=>createHash('sha256').update(x).digest('hex');
const rows=[];
for(const [clusterIndex,cluster]of report.templates.entries())for(const row of cluster.rows){
 const contract=contracts[row.id].boundaries.find(b=>b.case===row.case),review=contract.template_review;
 const raw=readFileSync(join(root,'items',row.id+'.md'),'utf8');
 const reasons=[];
 if(review?.upheld!==true)reasons.push('missing upheld template_review');
 if(typeof review?.by!=='string'||!review.by.trim())reasons.push('missing template reviewer');
 if(typeof review?.reason!=='string'||review.reason.trim().length<40)reasons.push('missing concrete template review reason');
 if(review?.item_sha256!==itemHashGuard(raw))reasons.push('stale or absent item_sha256');
 if(review?.row_sha256!==row.row_sha256)reasons.push('stale or absent row_sha256');
 rows.push({cluster:clusterIndex,id:row.id,case:row.case,mechanicalCurrent:reasons.length===0,reasons,current_item_sha256:itemHashGuard(raw),review_item_sha256:review?.item_sha256??null,current_row_sha256:row.row_sha256,review_row_sha256:review?.row_sha256??null,reviewer:review?.by??null,review_reason:review?.reason??null,boundary_text:row.text});
}
const out={run,scope:'Mechanical comparison of existing template review bindings only. No review acceptance, scientific check, metadata repair or digest refresh.',summary:report.summary,templates:report.templates,rows,requiringReview:rows.filter(row=>!row.mechanicalCurrent)};
writeFileSync(join(here,'boundary-row-diagnosis.json'),JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({summary:out.summary,requiringReview:out.requiringReview.map(r=>({id:r.id,case:r.case,reasons:r.reasons})),count:out.requiringReview.length},null,2));
