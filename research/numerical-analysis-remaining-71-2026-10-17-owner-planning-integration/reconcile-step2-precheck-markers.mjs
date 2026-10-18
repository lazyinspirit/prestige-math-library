import{readFileSync as read,writeFileSync as write,mkdirSync,existsSync}from'node:fs';
import{splitFrontmatter}from'../../tools/facts-block.mjs';
import{yaml}from'../../tools/pathway-lib.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,receipt=`${base}/step2-precheck-verification-marker-reconciliation.json`;
if(existsSync(receipt))throw Error('Already reconciled');
const p=JSON.parse(read(`${base}/step2-current-precheck-inspection.json`));if(p.summary.failed||p.summary.files!==1467)throw Error('Missing actual full precheck');
const rows=[];
for(const r of p.results){
 if(!['pass','not-applicable'].includes(r.status))throw Error('Check not passed');
 const raw=read(r.file,'utf8'),{fm,body}=splitFrontmatter(raw),meta=yaml().parse(fm),value=r.status==='pass'?'pass':'n/a',dest=`${base}/step2-verification-markers-before/${r.file}`;
 if(meta.verification?.precheck===value&&!existsSync(dest))continue;
 mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});if(!existsSync(dest))write(dest,raw,{flag:'wx'});
 if(splitFrontmatter(read(dest,'utf8')).body!==body)throw Error('Body changed since actual check');
 if(meta.verification?.precheck!==value){const doc=yaml().parseDocument(fm);doc.set('verification',doc.createNode({...((meta.verification&&typeof meta.verification==='object'&&!Array.isArray(meta.verification))?meta.verification:{}),precheck:value}));const next=raw.replace(/^---\r?\n[\s\S]*?\r?\n---/,`---\n${String(doc).trimEnd()}\n---`);if(splitFrontmatter(next).body!==body)throw Error('Body changed');write(r.file,next);}
 rows.push({file:r.file,precheck:value,basis:r.status});
}
write(receipt,JSON.stringify({run,at:new Date().toISOString(),actual_check:`${base}/step2-current-precheck-inspection.json`,source_bodies_unchanged:true,rows,native_coverage_granted:false},null,2)+'\n',{flag:'wx'});
console.log('Actual precheck markers reconciled',rows.length);
