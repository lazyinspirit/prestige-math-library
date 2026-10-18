import {readFileSync,writeFileSync} from 'node:fs';
import {loadCorpus} from '../../tools/pathway-lib.mjs';
const b='research/quantum-algorithms-planning',q='research/quantum-computing-planning';
const read=p=>JSON.parse(readFileSync(p,'utf8'));const write=(p,v)=>writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const qa=read(`${b}/proposed-items.json`),qc=read(`${q}/proposed-items.json`),pages=read(`${b}/pages.json`),cp=read(`${q}/pages.json`);const corpus=loadCorpus();
const im=new Map([...qa.items,...qc.items].map(x=>[x.id,x])),pm=new Map([...pages.pages,...cp.pages].map(x=>[x.page,x]));
const state=new Map(),lev=new Map();function visit(id){if(state.get(id)===1)throw Error(`cycle ${id}`);if(state.get(id)===2)return lev.get(id);state.set(id,1);const x=im.get(id);const ds=x.deps.filter(d=>im.has(d));const l=ds.length?1+Math.max(...ds.map(visit)):0;state.set(id,2);lev.set(id,l);return l;}for(const id of im.keys())visit(id);
for(const x of qa.items)x.dependency_level=lev.get(x.id);
for(const pg of pages.pages){const xs=qa.items.filter(x=>x.page===pg.page);const previous=new Map(pg.items.map((id,i)=>[id,i]));xs.sort((a,b)=>lev.get(a.id)-lev.get(b.id)||(previous.get(a.id)??999)-(previous.get(b.id)??999));pg.items=xs.map(x=>x.id);xs.forEach((x,i)=>x.local_order=i+1);
 for(const x of xs)for(const dep of x.deps){const home=im.get(dep)?.page??corpus.homeOf.get(dep);if(home&&home!==pg.page&&!pg.requires.includes(home))pg.requires.push(home);}
}
write(`${b}/proposed-items.json`,qa);write(`${b}/pages.json`,pages);
for(let n=1;n<=6;n++){let f=`${b}/qa_r${n}-items.json`,a=read(f);const arr=Array.isArray(a)?a:a.items;arr.forEach((x,i)=>arr[i]=im.get(x.id));write(f,a);f=`${b}/qa_r${n}-pages.json`;a=read(f);for(let i=0;i<a.pages.length;i++)a.pages[i]=pm.get(a.pages[i].page);write(f,a);}
const sm=read(`${b}/source-manifest.json`);sm.scaffold_audit={report:'research/scaffold-audit-2026-10-14/quantum-algorithms.md',items:qa.items.length,source_ledgers_unchanged:true,new_source_full_document_reading_claim:false,proof_acceptance:false};for(const row of sm.page_coverage??[]){const pg=pm.get(row.page);if(pg){row.item_count=pg.items.length;row.items=pg.items;}}write(`${b}/source-manifest.json`,sm);
console.log(JSON.stringify({items:qa.items.length,pages:pages.pages.length,max_level:Math.max(...qa.items.map(x=>x.dependency_level)),max_A:Math.max(...pages.pages.filter(x=>x.kind==='A').map(x=>x.items.length))}));
