import {readFileSync as rf,writeFileSync as wf,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {yaml} from '../../tools/physics-support/pathway-lib.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step2-escalations`,id='prop-fd-surrogate-law-shift-observable',out=`${base}/source-locator-integration.json`;
if(existsSync(out))throw Error('Already applied');
const path=`items/${id}.md`,raw=rf(path,'utf8'),m=raw.match(/^(---\n)([\s\S]*?)(\n---\n)([\s\S]*)$/),doc=yaml().parseDocument(m[2],{uniqueKeys:true});
const data=doc.toJS(),ref=data.sources.references.find(x=>x.title==='Sheldon Axler, Measure, Integration & Real Analysis');
const before=ref.locator;
if(before!=="§7.9, Theorem 7.9 and its proof, printed pp. 196–197 (PDF pp. 210–211): Hölder's inequality, including the p=2 case.")throw Error('Changed locator');
ref.locator="12 June 2026 edition, Section 7A, Theorem 7.9 and its proof, printed pp. 196–197 (one-based PDF pp. 211–212): Hölder's inequality, including the p=2 case.";
doc.set('sources',data.sources);
const writes=new Map([[path,m[1]+doc.toString().trimEnd()+m[3]+m[4]]]);
for(const file of [`research/${run}-batch-44.pages.json`,'research/plan-spec.json']){
 const d=JSON.parse(rf(file)),pages=Array.isArray(d)?d:d.pages;let count=0;
 for(const p of pages)for(const item of p.items??[])if(item.id===id){item.sources=data.sources;count++;}
 if(count!==1)throw Error('Wrong scope');writes.set(file,JSON.stringify(d,null,2)+'\n');
}
const sha=b=>createHash('sha256').update(b).digest('hex'),archive=`${base}/before-source-locator`;mkdirSync(archive,{recursive:false});const preimages=[];
for(const[p,after]of writes){const bytes=rf(p),dest=`${archive}/${p.replaceAll('/','__')}`;wf(dest,bytes,{flag:'wx'});preimages.push({path:p,archive:dest,sha256:sha(bytes),after_sha256:sha(after)});}
for(const[p,after]of writes)wf(p,after);
wf(out,JSON.stringify({run,owner:'/root',at:new Date().toISOString(),id,before,after:ref.locator,evidence:{path:`${base}/batch-44-resolution.json`,sha256:sha(rf(`${base}/batch-44-resolution.json`))},body_bytes_unchanged:true,preimages,scope:'Bibliographic locator correction using actual same-reviewer retrieved edition. No additional source retrieval or proof acceptance claimed.',complete:true,gates_attempted:0},null,2)+'\n',{flag:'wx'});
console.log('Corrected source locator in source, manifest and canonical plan; body bytes unchanged.');
