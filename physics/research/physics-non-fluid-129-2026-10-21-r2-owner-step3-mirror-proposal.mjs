// Root mechanical proposal only. Scientific/native dispositions remain separate.
import {readFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {readItem} from '../tools/physics-support/physics-content.mjs';
import {sourceSectionText,sectionText,SOURCE_SECTIONS} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',sha=x=>createHash('sha256').update(x).digest('hex');
const headings={definition:'Definition',algorithm:'Definition',example:'Example',counterexample:'Statement refuted','false-statement':'Statement refuted',remark:'Remark',postulate:'Postulate',experiment:'Observations'};
const rows=[],manual=[],equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
for(const name of readdirSync('research').filter(n=>n.startsWith(run+'-batch-')&&n.endsWith('.pages.json'))){
 const path=`research/${name}`,bytes=readFileSync(path),pages=JSON.parse(bytes);
 for(const page of pages)for(const item of page.items){
  const sourcePath=`items/${item.id}.md`,s=readItem(sourcePath),fields={};
  for(const k of ['deps','dependency_roles','justified_by','physical_scope','sources','provenance']){
   if(k==='justified_by'&&!item.justified_by&&!s.justified_by?.length)continue;
   if(s[k]!==undefined&&!equal(item[k],s[k]))fields[k]={before:item[k],proposed:s[k],basis:'Exact current source declaration; scientific source review and native acceptance are separate evidence.'};
  }
  if(typeof item.statement==='string'){
   let section=s.kind==='open-problem'?'Open problem':headings[s.kind]??'Statement';
   let quote=section==='Open problem'?sectionText(s.body,section):sourceSectionText(s.body,section);
   if(s.kind==='remark'&&!quote?.trim()){section='Remarks';quote=sectionText(s.body,section);}
   if(!quote?.trim()){
    const available=[...SOURCE_SECTIONS].map(h=>({h,q:sourceSectionText(s.body,h)})).filter(x=>x.q?.trim());
    const existing=available.filter(x=>x.q.trim()===item.statement.trim());
    const chosen=existing.length===1?existing[0]:available.length===1?available[0]:null;
    if(chosen){section=chosen.h;quote=chosen.q;}
   }
   if(!quote?.trim())manual.push({id:item.id,path,reason:`Missing canonical public ${section}; no inferred substitute`});
   else if(item.statement.trim()!==quote.trim())fields.statement={before:item.statement,proposed:quote.trim(),basis:`Exact current complete ${section}; source and physical qualifications preserved; no acceptance asserted by transcription.`};
  }
  if(Object.keys(fields).length)rows.push({id:item.id,page:page.id,manifest:path,manifest_sha256:sha(bytes),source:sourcePath,source_sha256:sha(s.raw),fields});
 }
}
console.log(JSON.stringify({run,at:new Date().toISOString(),purpose:'Current-source metadata transcription proposal; no production writes or scientific acceptance.',rows,manual},null,2));
