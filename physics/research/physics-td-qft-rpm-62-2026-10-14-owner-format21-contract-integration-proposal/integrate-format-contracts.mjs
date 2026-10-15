// Root-executed21format-repair contract metadata integration only. No source/MF/plan/native controls.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {loadStep1Record} from '../../../tools/physics-support/frontier-snapshot.mjs';
import {splitFrontmatter,sourceSectionText,numberedProofSteps,SOURCE_SECTIONS} from '../../../tools/physics-support/facts-block.mjs';
const here=path.dirname(fileURLToPath(import.meta.url)), root=path.resolve(here,'../..');
const args=new Set(process.argv.slice(2));
for(const a of args)if(!['--apply','--verify-guards','--dry-run','--writers-drained'].includes(a))throw Error(`Unknown option ${a}`);
if(args.has('--apply')&&(args.has('--verify-guards')||args.has('--dry-run')))throw Error('Choose one mode');
if((args.has('--apply')||args.has('--verify-guards'))&&!args.has('--writers-drained'))throw Error('Root must explicitly supply --writers-drained');
const sha=b=>createHash('sha256').update(b).digest('hex');
const absolute=p=>{const q=path.resolve(root,p);if(!q.startsWith(root+path.sep))throw Error(`Outside physics root: ${p}`);return q;};
const inputBytes=new Map(), guardRecords=new Map(), contextIdentities=new Map();
const sharedPath=p=>p.endsWith('.proof-contracts.json');
const uncachedRaw=p=>fs.readFileSync(absolute(p));
const raw=p=>{if(sharedPath(p))return uncachedRaw(p);if(!inputBytes.has(p)){const before=identity(p);inputBytes.set(p,uncachedRaw(p));const after=identity(p);if(before!==after)throw Error(`Input changed while reading ${p}`);contextIdentities.set(p,after);}return inputBytes.get(p);};
const identity=p=>{const s=fs.statSync(absolute(p),{bigint:true});return [s.dev,s.ino,s.size,s.mtimeNs,s.ctimeNs].map(String).join(':');};
const json=p=>JSON.parse(raw(p));
const indexPath=path.relative(root,path.join(here,'integration-index.json')), indexBytes=raw(indexPath), index=JSON.parse(indexBytes);
const errors=[], suppression=[], applied=[];
const guard=(p,h)=>{try{
 if(!guardRecords.has(p)){const before=identity(p), bytes=raw(p), actual=sha(bytes), after=identity(p);if(before!==after)throw Error('Input changed while reading');guardRecords.set(p,{sha256:actual,identity:after});}
 const actual=guardRecords.get(p).sha256;if(actual!==h)errors.push(`RAW_GUARD ${p}: expected ${h}, actual ${actual}`);
}catch(e){errors.push(`RAW_GUARD ${p}: ${e.message}`);}};
function currencyGuards(){for(const [p,record]of guardRecords){try{
 if(sharedPath(p)){const actual=sha(uncachedRaw(p));if(actual!==record.sha256)errors.push(`RAW_GUARD ${p}: shared preimage changed since initial validation`);}
 else if(identity(p)!==record.identity)errors.push(`INPUT_CURRENCY ${p}: stat identity changed after exact initial hash; integration refused`);
}catch(e){errors.push(`INPUT_CURRENCY ${p}: ${e.message}`);}}for(const[p,observed]of contextIdentities)if(!guardRecords.has(p))try{if(identity(p)!==observed)errors.push(`INPUT_CURRENCY ${p}: quote-provider context changed after read`);}catch(e){errors.push(`INPUT_CURRENCY ${p}: ${e.message}`);}}
function guards(){
 for(const p of [...index.packets,...(index.supplements??[])]){guard(p.path,p.sha256);guard(p.release,p.release_sha256);if(p.guard_evidence)guard(p.guard_evidence.path,p.guard_evidence.sha256);}
 for(const g of index.source_guards){guard(g.path,g.sha256);guard(g.before_path,g.before_sha256);}
 for(const g of index.evidence_guards??[])guard(g.path,g.sha256);
 for(const g of index.provider_guards??[])guard(g.path,g.sha256);
 for(const [p,h] of Object.entries(index.shared_contract_before_guards))guard(p,h);
}
guards();
const assertClean=()=>{if(errors.length){
 const grouped=new Map();
 for(const evidence of errors){const type=evidence.split(' ',1)[0],target=evidence.slice(type.length+1).split(':',1)[0];const subject=target.startsWith('items/')?target.slice(6).replace(/\.md$/,''):target.split('/')[0];const key=`${type} ${subject}`;if(!grouped.has(key))grouped.set(key,{type,subject,count:0,evidence:[]});const row=grouped.get(key);row.count++;if(!row.evidence.includes(evidence))row.evidence.push(evidence);}
 const at=new Date().toISOString(),report={run:index.run,at,errors,groups:[...grouped.values()],shared_writes:false,source_writes:false,native_gate:false};
 const archive=path.join(here,'validation-reports');fs.mkdirSync(archive,{recursive:true});
 const full=path.join(archive,at.replace(/[:.]/g,'-')+'.json');fs.writeFileSync(full,JSON.stringify(report,null,2)+'\n',{flag:'wx'});
 fs.writeFileSync(path.join(here,'root-validation-failure.json'),JSON.stringify(report,null,2)+'\n');
 const totals={};for(const row of grouped.values())totals[row.type]=(totals[row.type]??0)+1;
 throw Error(`Integration refused: ${errors.length} metadata observations, ${grouped.size} subject/type groups ${JSON.stringify(totals)}; full evidence ${full}`);
}};
assertClean();
if(args.has('--verify-guards')){
 console.log(JSON.stringify({mode:'verify-guards',run:index.run,index_sha256:sha(indexBytes),sources:index.source_guards.length,contract_documents:Object.keys(index.shared_contract_before_guards).length,shared_writes:false,proof_acceptance:false},null,2));
 process.exit(0);
}
const snapshot=loadStep1Record(root,index.run);
const sourceIds=new Set(index.source_guards.map(g=>g.id));
if(index.packets.length!==3||sourceIds.size!==21||index.source_guards.length!==21)errors.push('SCOPE format integration requires exactly three final owner packets and21 unique source guards');
for(const g of index.source_guards){
 const before=raw(g.before_path).toString(),after=raw(g.path).toString();
 const frontmatterBytes=text=>/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/.exec(text)?.[0]??null;
 if(frontmatterBytes(before)===null||frontmatterBytes(before)!==frontmatterBytes(after))errors.push(`FRONTMATTER_PRESERVATION ${g.id}: archived/final frontmatter bytes differ`);
 const oldBody=splitFrontmatter(before).body,newBody=splitFrontmatter(after).body;
 for(const section of SOURCE_SECTIONS){const oldText=sourceSectionText(oldBody,section),newText=sourceSectionText(newBody,section);if(oldText===null&&newText===null)continue;
 const normalize=t=>String(t??'').replace(/\s+/g,' ').trim();
 if(g.public_preservation==='byte'?(oldText!==newText):(g.public_preservation==='whitespace-only'?normalize(oldText)!==normalize(newText):true))errors.push(`PUBLIC_PRESERVATION ${g.id}/${section}: does not match owner-approved ${g.public_preservation}`);
 }
}
const docs=new Map(), changedIds=new Map();
const getDoc=p=>{if(!Object.hasOwn(index.shared_contract_before_guards,p))throw Error(`Unapproved contract target ${p}`);if(!docs.has(p)){const d=json(p);if(!d.contracts||!Array.isArray(d.scope))throw Error(`Malformed contract document ${p}`);docs.set(p,d);}return docs.get(p);};
const rows=p=>p.by_path?Object.entries(p.by_path).flatMap(([target,d])=>Object.entries(d.contracts).map(([id,c])=>({target,id,c}))):p.proposals?p.proposals.flatMap(d=>Object.entries(d.contracts).map(([id,c])=>({target:d.target,id,c}))):Object.entries(p.contracts??{}).map(([id,c])=>({id,c}));
const keyOf=x=>{for(const k of ['id','check','case','model'])if(x&&typeof x==='object'&&x[k]!==undefined)return `${k}:${JSON.stringify(x[k])}`;return JSON.stringify(x);};
function manualMerge(old=[], incoming=[]){const out=structuredClone(old);for(const x of incoming){const key=keyOf(x),i=out.findIndex(y=>keyOf(y)===key);if(i<0)out.push(structuredClone(x));else out[i]=(typeof x==='object'&&x!==null&&!Array.isArray(x))?{...out[i],...structuredClone(x)}:structuredClone(x);}return out;}
function merge(old={},incoming={},id){
 const out={...old,...structuredClone(incoming)};
 for(const k of ['finite_checks','historical_boundary_worksheets'])if(Object.hasOwn(incoming,k))out[k]=manualMerge(old[k]??[],incoming[k]??[]);
 if(Array.isArray(old.finite_smoke)&&old.finite_smoke.length===0){out.finite_smoke=[];if(incoming.finite_smoke?.length)suppression.push({id,field:'finite_smoke',reason:'Preserve explicitly cleared current field'});}
 else if(Object.hasOwn(incoming,'finite_smoke')){
  if(!Array.isArray(incoming.finite_smoke))errors.push(`FINITE_SMOKE ${id}: expected array`);
  else if(incoming.finite_smoke.length===0)out.finite_smoke=[];
  else {for(const row of incoming.finite_smoke)if(typeof row.check!=='string'||!row.check.trim())errors.push(`FINITE_SMOKE ${id}: missing registered check name; manual worksheets cannot enter this field`);out.finite_smoke=manualMerge(old.finite_smoke??[],incoming.finite_smoke);}
 }
 return out;
}
for(const packet of [...index.packets,...(index.supplements??[])]){const entries=rows(json(packet.path));if(entries.length!==packet.contract_entries)errors.push(`PACKET ${packet.name}: expected ${packet.contract_entries}, got ${entries.length}`);
 for(const {target,id,c}of entries){if(packet.quote_only&&Object.keys(c).some(k=>k!=='citations'))errors.push(`SUPPLEMENT_FIELD ${id}: quote-only supplement cannot alter other contract fields`);if(!sourceIds.has(id)){errors.push(`SCOPE ${id}: outside released21format inputs`);continue;}const owner=snapshot.items.get(id);if(snapshot.invalidItems.has(id))errors.push(`OWNERSHIP ${id}: ${snapshot.invalidItems.get(id)}`);if(!owner){errors.push(`OWNERSHIP ${id}: absent concrete current run inventory`);continue;}
  const destination=`research/${index.run}-batch-${owner.page.batch}.proof-contracts.json`;
  if(target&&target!==destination){errors.push(`OWNERSHIP ${id}: packet target ${target} != current ${destination}`);continue;}
  const allowed=new Set(['citations','derivations','routine_steps','boundaries','risk_review','supplier_excerpts','finite_checks']);for(const key of Object.keys(c))if(!allowed.has(key))errors.push(`PARTIAL_FIELD ${id}/${key}: format helper refuses unrelated field`);
  const d=getDoc(destination);if(!Object.hasOwn(d.contracts,id)||!d.scope.includes(id)){errors.push(`EXISTING_SCOPE ${id}: must already exist in both current contract and scope of ${destination}`);continue;}d.contracts[id]=merge(d.contracts[id],c,id);changedIds.set(id,destination);applied.push({id,target:destination,packet:packet.name});
 }
}
if(changedIds.size!==18)errors.push(`SCOPE expected18 existing partial-contract subjects, got ${changedIds.size}`);
const norm=s=>String(s).replace(/\s+/g,' ').trim();
function quote(id,label,provider,section,excerpt){
 if(!SOURCE_SECTIONS.has(section)){errors.push(`SOURCE_SECTION ${id}/${label}: illegal ${section}`);return;}
 if(typeof excerpt!=='string'||!excerpt.trim()){errors.push(`QUOTE ${id}/${label}: empty exact quote`);return;}
 try{const sectionText=sourceSectionText(splitFrontmatter(raw(`items/${provider}.md`).toString()).body,section);if(!sectionText||!norm(sectionText).includes(norm(excerpt)))errors.push(`STALE_QUOTE ${id}/${label}: items/${provider}.md ${section}; expected ${JSON.stringify(excerpt)}`);}catch(e){errors.push(`QUOTE ${id}/${label}: ${e.message}`);}
}
const canonicalCases=new Set(['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']);
for(const [id,p]of changedIds){const c=docs.get(p).contracts[id],body=splitFrontmatter(raw(`items/${id}.md`).toString()).body,steps=new Set(numberedProofSteps(body).map(s=>s.id));
 const anchor=(s,label)=>{if(typeof s==='string'&&/^\d+\.\d+$/.test(s)&&!steps.has(s))errors.push(`STALE_STEP ${id}/${label}: ${s}; current steps ${[...steps].join(',')}`);};
 for(const citation of c.citations??[]){quote(id,citation.fact,citation.source,citation.source_section,citation.quote);if(!Array.isArray(citation.uses)||citation.uses.length===0)errors.push(`CITATION_USES ${id}/${citation.fact}: nonempty uses required`);for(const use of citation.uses??[])anchor(use,`citation ${citation.fact}`);}
 for(const boundary of c.boundaries??[]){if(!canonicalCases.has(boundary.case)||!['checked','not_applicable'].includes(boundary.status))errors.push(`BOUNDARY ${id}: illegal case/status ${boundary.case}/${boundary.status}`);if(boundary.case_scope){const b=boundary.case_scope;quote(id,`boundary ${boundary.case}`,id,b.source_section,b.source_excerpt);if(b.current_raw_sha256)guard(`items/${id}.md`,b.current_raw_sha256);}}
 // Explicit proof-reference fields and literal "step N.N" only. Do not parse provider quotes or historical worksheets as consumer steps.
 function refs(v,label){if(Array.isArray(v)){v.forEach((x,i)=>refs(x,`${label}[${i}]`));return;}if(v&&typeof v==='object'){for(const[k,x]of Object.entries(v)){if(['quote','source_excerpt','historical_boundary_worksheets','source_section','source','supplier_excerpts'].includes(k))continue;if(k==='step')anchor(x,label);if(k==='uses'&&Array.isArray(x))x.forEach(y=>anchor(y,label));refs(x,`${label}.${k}`);}return;}if(typeof v==='string')for(const m of v.matchAll(/\bstep\s+(\d+\.\d+)\b/g))anchor(m[1],label);}
 refs(c,id);

}
assertClean();
const writes=[...docs].map(([p,d])=>({path:p,before_sha256:index.shared_contract_before_guards[p],bytes:Buffer.from(JSON.stringify(d,null,2)+'\n')}));
const summary={run:index.run,index_sha256:sha(indexBytes),proposals:applied.length,items:changedIds.size,documents:writes.length,source_guards:index.source_guards.length,suppressed_stale_fields:suppression,shared_writes:false,source_writes:false,gate_execution:false,proof_acceptance:false};
if(!args.has('--apply')){console.log(JSON.stringify({...summary,mode:'dry-run',targets:writes.map(w=>({path:w.path,before_sha256:w.before_sha256,after_sha256:sha(w.bytes)}))},null,2));process.exit(0);}
// Root explicitly asserts all relevant writers drained. Check every byte guard again immediately before staging/commit.
currencyGuards();assertClean();
const stamp=new Date().toISOString().replace(/[:.]/g,'-'), archive=path.join(here,'root-executions',stamp);fs.mkdirSync(archive,{recursive:true});
const committed=[], staged=[], before=new Map();
try{
 for(const w of writes){const b=raw(w.path);if(sha(b)!==w.before_sha256)throw Error(`Concurrent contract mutation ${w.path}`);before.set(w.path,b);fs.writeFileSync(path.join(archive,w.path.replaceAll('/','__')+'.before'),b,{flag:'wx'});const temp=absolute(w.path)+`.step2-${process.pid}.tmp`;fs.writeFileSync(temp,w.bytes,{flag:'wx'});staged.push(temp);w.temp=temp;}
 currencyGuards();assertClean();
 for(const w of writes){if(sha(raw(w.path))!==w.before_sha256)throw Error(`Concurrent contract mutation before rename ${w.path}`);fs.renameSync(w.temp,absolute(w.path));committed.push(w);}
 const receipt={...summary,mode:'apply',shared_writes:true,at:new Date().toISOString(),writers_drained_asserted:true,applied,files:writes.map(w=>({path:w.path,before_sha256:w.before_sha256,after_sha256:sha(w.bytes)}))};
 fs.writeFileSync(path.join(archive,'receipt.json'),JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({...summary,shared_writes:true,receipt:path.relative(root,path.join(archive,'receipt.json'))},null,2));
}catch(e){const rollback=[];for(const w of committed.reverse()){if(sha(raw(w.path))!==sha(w.bytes)){rollback.push({path:w.path,restored:false,reason:'Concurrent mutation; manual recovery required'});continue;}const temp=absolute(w.path)+`.rollback-${process.pid}.tmp`;fs.writeFileSync(temp,before.get(w.path),{flag:'wx'});fs.renameSync(temp,absolute(w.path));rollback.push({path:w.path,restored:true});}fs.writeFileSync(path.join(archive,'failure.json'),JSON.stringify({error:e.message,rollback},null,2)+'\n');throw e;
}finally{for(const temp of staged)if(fs.existsSync(temp))fs.unlinkSync(temp);}
