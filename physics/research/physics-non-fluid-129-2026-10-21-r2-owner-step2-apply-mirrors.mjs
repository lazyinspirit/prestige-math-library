// Exact current-source mirrors only; no mathematical acceptance or source edit.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname} from 'node:path';
import {readItem} from '../tools/physics-support/physics-content.mjs';
import {sourceSectionText} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2';
const opt=k=>{const n=process.argv.indexOf(k);return n<0?null:process.argv[n+1];};
const input=opt('--proposal');if(!input)throw Error('Require exact --proposal');
const sha=b=>createHash('sha256').update(b).digest('hex'),read=p=>JSON.parse(readFileSync(p));
const proposal=read(input),original=new Map(),docs=new Map(),sourceGuards=new Map(),changes=[],manual=[];
function doc(p){if(!docs.has(p)){const b=readFileSync(p);original.set(p,b);docs.set(p,JSON.parse(b));}return docs.get(p);}
function subject(p,id){const rows=doc(p).flatMap(page=>page.items).filter(i=>i.id===id);if(rows.length!==1)throw Error('Nonunique subject '+id);return rows[0];}
for(const row of proposal.rows){
 const item=subject(row.manifest,row.id),source=readFileSync(row.source);
 if(sha(original.get(row.manifest))!==row.manifest_sha256||sha(source)!==row.source_sha256)throw Error('Exact input differs '+row.id);
 sourceGuards.set(row.source,row.source_sha256);
 for(const[k,v]of Object.entries(row.fields)){
  if(JSON.stringify(item[k])!==JSON.stringify(v.before))throw Error('Field preimage differs '+row.id+' '+k);
  item[k]=v.proposed;changes.push({id:row.id,path:row.manifest,field:k,basis:v.basis});
 }
}
const headings={definition:'Definition',algorithm:'Definition',example:'Example',counterexample:'Statement refuted','false-statement':'Statement refuted',remark:'Remark',postulate:'Postulate',experiment:'Observations'};
const normalize=s=>String(s??'').replace(/\s+/g,' ').trim();
for(const row of proposal.manual){
 const path=`items/${row.id}.md`,source=readItem(path),old=readItem(`research/${run}-owner-step2-baseline/${path}`),item=subject(row.path,row.id);
 const heading=headings[source.kind]??'Statement',current=sourceSectionText(source.body,heading),previous=sourceSectionText(old.body,heading);
 if(!current?.trim())throw Error('Missing canonical public section '+row.id+' '+heading);
 sourceGuards.set(path,sha(source.raw));
 if(normalize(current)===normalize(previous)){manual.push({...row,disposition:'Canonical public section unchanged; other section caused observation, existing manifest retained',heading});continue;}
 const before=item.statement;item.statement=current;
 changes.push({id:row.id,path:row.path,field:'statement',basis:`Explicit current ${heading} of scientifically reviewed current carrier; successful-Step1 manifest was not a literal public-section quote`,before_sha256:sha(before??''),after_sha256:sha(current)});
 manual.push({...row,disposition:'Canonical current public section mirrored',heading,source_sha256:sha(source.raw)});
}
const pending=[...docs].filter(([p,d])=>JSON.stringify(JSON.parse(original.get(p)))!==JSON.stringify(d)).map(([path,d])=>({path,before:original.get(path),after:Buffer.from(JSON.stringify(d,null,2)+'\n')}));
function verify(){
 if(existsSync(`.physics-autopilot/${run}/controller.lock`)||Object.values(read(`.physics-autopilot/${run}/state.json`).dispatches).some(d=>!d.endedAt))throw Error('Native writer/controller active');
 for(const[p,h]of sourceGuards)if(sha(readFileSync(p))!==h)throw Error('Source changed '+p);
 for(const[p,b]of original)if(!readFileSync(p).equals(b))throw Error('Manifest changed '+p);
}
verify();const result={at:new Date().toISOString(),run,source_body_edits:false,scientific_acceptance:false,native_gate:false,changes,manual,files:pending.map(({path,before,after})=>({path,before_sha256:sha(before),after_sha256:sha(after)}))};
if(process.argv.includes('--apply')){
 if(!process.argv.includes('--outside-writers-drained'))throw Error('Root actual outside release required');
 const out=opt('--out');if(!out||existsSync(out))throw Error('Require unused archive');mkdirSync(out,{recursive:true});writeFileSync(`${out}/proposal.json`,readFileSync(input));
 for(const row of pending){const p=`${out}/before/${row.path}`;mkdirSync(dirname(p),{recursive:true});writeFileSync(p,row.before);}
 verify();for(const row of pending)writeFileSync(row.path,row.after);
 writeFileSync(`${out}/receipt.json`,JSON.stringify({...result,source_guards:[...sourceGuards].map(([path,sha256])=>({path,sha256}))},null,2)+'\n');
}
console.log(JSON.stringify(result,null,2));
