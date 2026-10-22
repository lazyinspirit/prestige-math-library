// Root observation/proposal only. Never writes production metadata or readiness.
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {readItem} from '../tools/physics-support/physics-content.mjs';
import {sourceSectionText,SOURCE_SECTIONS} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-step2-baseline`;
const read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const rows=[],manual=[];
for(const n of readdirSync('research').filter(n=>n.startsWith(run+'-batch-')&&n.endsWith('.pages.json'))){
 const path=`research/${n}`,pages=read(path),oldPages=read(`${base}/${path}`);
 for(const page of pages)for(const item of page.items){
  const sourcePath=`items/${item.id}.md`,source=readItem(sourcePath),oldPath=`${base}/${sourcePath}`;
  const old=existsSync(oldPath)?readItem(oldPath):null;
  const oldItem=oldPages.flatMap(p=>p.items).find(i=>i.id===item.id);
  const fields={};
  for(const k of ['deps','dependency_roles','physical_scope','sources','provenance','proof_strategy']){
   if(source[k]!==undefined&&old&&!equal(old[k],source[k])&&!equal(item[k],source[k]))fields[k]={before:item[k],proposed:source[k],basis:'Exact current source declaration changed since successful Step1; substantive provenance and owner release must be reviewed before adoption'};
  }
  if(typeof item.statement==='string'){
   const headings=[...SOURCE_SECTIONS].filter(h=>sourceSectionText(source.body,h)!=null);
   const direct=headings.find(h=>sourceSectionText(source.body,h).trim()===item.statement.trim());
   if(!direct){
    const previous=old&&[...SOURCE_SECTIONS].find(h=>(sourceSectionText(old.body,h)??'').trim()===oldItem?.statement?.trim());
    if(previous&&oldItem.statement===item.statement){
     const proposed=sourceSectionText(source.body,previous);
     if(proposed!=null)fields.statement={before:item.statement,proposed,basis:`Exact successful-Step1 manifest/source ${previous} correspondence; current substantive source change requires scientific release`};
     else manual.push({id:item.id,path,reason:'Original public section missing',previous});
    }else if(old&&headings.some(h=>sourceSectionText(source.body,h)!==sourceSectionText(old.body,h)))manual.push({id:item.id,path,reason:'Changed public section has no exact successful-Step1 public section mapping; inspect manually'});
   }
  }
  if(Object.keys(fields).length)rows.push({id:item.id,page:page.id,manifest:path,manifest_sha256:sha(readFileSync(path)),source:sourcePath,source_sha256:sha(source.raw),fields});
 }
}
console.log(JSON.stringify({at:new Date().toISOString(),purpose:'Proposed exact-source mirrors only. Live writers may change inputs; no scientific acceptance, production edits or certification.',rows,manual},null,2));
