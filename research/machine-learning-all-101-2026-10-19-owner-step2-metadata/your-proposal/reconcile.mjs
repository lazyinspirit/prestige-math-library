#!/usr/bin/env node
// Proposal generator / explicitly root-reviewed CAS application. No workflow transitions.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
const root=process.cwd(), args=process.argv.slice(2), run='machine-learning-all-101-2026-10-19';
const base=path.relative(root,path.dirname(new URL(import.meta.url).pathname));
const {yaml}=await import(pathToFileURL(path.join(root,'tools/pathway-lib.mjs')));
const {dependencyLevels}=await import(pathToFileURL(path.join(root,'tools/item-dependency-levels.mjs')));
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const inventory=()=>fs.readdirSync(path.join(root,'research')).filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n)).sort((a,b)=>Number(a.match(/-batch-(\d+)/)[1])-Number(b.match(/-batch-(\d+)/)[1]));
const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
function envelope(raw,subject){
 const m=raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/); if(!m)throw Error(`Missing frontmatter: ${subject}`);
 const fm=yaml().parse(m[1],{uniqueKeys:true});if(!fm||typeof fm!=='object'||Array.isArray(fm))throw Error(`Invalid frontmatter: ${subject}`);
 return {fm,header:m[0],body:raw.slice(m[0].length)};
}
function patchLevel(raw,level,subject){
 const {fm,header,body}=envelope(raw,subject);if(fm.dependency_level===level)return raw;
 const lines=header.split(/(?<=\n)/), found=[];
 // Change only the existing scalar line, preserving comment, newline and every other byte.
 for(let i=1;i<lines.length-1;i++)if(/^(?:dependency_level|"dependency_level"|'dependency_level')\s*:/.test(lines[i]))found.push(i);
 if(found.length>1)throw Error(`Duplicate dependency_level: ${subject}`);
 if(found.length){const i=found[0],m=lines[i].match(/^((?:dependency_level|"dependency_level"|'dependency_level')\s*:\s*)([^\r\n#]*?)([ \t]*(?:#[^\r\n]*)?)(\r?\n)?$/);if(!m||/[>|&*!{\[]/.test(m[2]))throw Error(`Non-scalar dependency_level: ${subject}`);lines[i]=m[1]+level+m[3]+(m[4]??'');}
 else {const newline=header.includes('\r\n')?'\r\n':'\n';const end=lines.findIndex((x,i)=>i>0&&/^---(?:\r?\n)?$/.test(x));if(end<0)throw Error(`Missing closing delimiter: ${subject}`);lines.splice(end,0,`dependency_level: ${level}${newline}`);}
 const result=lines.join('')+body;if(envelope(result,subject).fm.dependency_level!==level)throw Error(`Level patch did not parse: ${subject}`);if(envelope(result,subject).body!==body)throw Error(`Body changed: ${subject}`);return result;
}
function statement(body,kind,subject){
 let heading={definition:'Definition',algorithm:'Definition',theorem:'Statement',lemma:'Statement',proposition:'Statement',corollary:'Statement',example:'Example',counterexample:'Statement refuted','false-statement':'Statement','open-problem':'Open problem'}[kind];
 if(kind==='remark')heading=[...body.matchAll(/^## ([^\r\n]+)$/gm)].map(m=>m[1]).find(h=>!/(?: references|Facts & Assumptions|Proof|Verification|Source notes)$/.test(h));
 if(!heading)throw Error(`Cannot infer statement mirror heading for ${subject} (${kind})`);
 const sections=[...body.matchAll(/^## ([^\r\n]+)\r?\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)];const matches=sections.filter(m=>m[1]===heading);if(matches.length!==1)throw Error(`Expected one ${heading}: ${subject}`);return matches[0][2].trim();
}
function permittedChange(p,before,after,names){
 if(p.startsWith('items/')){const a=envelope(before,p),b=envelope(after,p);const {dependency_level:x,...af}=a.fm,{dependency_level:y,...bf}=b.fm;if(a.body!==b.body||!eq(af,bf)||!Number.isSafeInteger(y)||y<0)throw Error(`Forbidden source edit: ${p}`);if(after!==patchLevel(before,y,p))throw Error(`Source changed beyond literal level patch: ${p}`);return;}
 if(!names.some(n=>p===`research/${n}`))throw Error(`Outside scope write: ${p}`);
 const a=JSON.parse(before),b=JSON.parse(after),keys=new Set(['id','kind','title','deps','justified_by','forward_refs','statement','dependency_level']);if(a.length!==b.length)throw Error(`Manifest page inventory changed: ${p}`);
 for(let i=0;i<a.length;i++){const {items:ai,...ap}=a[i],{items:bi,...bp}=b[i];if(!eq(ap,bp)||ai.length!==bi.length)throw Error(`Manifest page changed: ${p}`);for(let j=0;j<ai.length;j++){if(ai[j].id!==bi[j].id)throw Error(`Manifest item identity changed: ${p}`);for(const k of new Set([...Object.keys(ai[j]),...Object.keys(bi[j])]))if(!keys.has(k)&&!eq(ai[j][k],bi[j][k]))throw Error(`Foreign item field changed: ${p} ${k}`);}}
}
function writeJSON(p,v){fs.mkdirSync(path.dirname(path.join(root,p)),{recursive:true});fs.writeFileSync(path.join(root,p),JSON.stringify(v,null,2)+'\n');}
if(args.includes('--apply-root-reviewed')){
 const i=args.indexOf('--plan');if(i<0||!args[i+1])throw Error('Apply requires --plan <previously reviewed plan.json>');
 const planPath=args[i+1],plan=JSON.parse(read(planPath));if(plan.schema!=='step2-metadata-cas-v1'||plan.run!==run||plan.errors.length)throw Error('Invalid or blocked plan');
 if(!eq(inventory(),plan.manifest_names))throw Error('Run manifest inventory changed');
 // Validate ALL inputs and proposed bytes before archiving or writing any actual carrier.
 for(const g of plan.guards)if(hash(read(g.path))!==g.sha256)throw Error(`CAS failed: ${g.path}`);
 for(const c of plan.changes){if(hash(read(c.proposed_path))!==c.after_sha256)throw Error(`Staged bytes changed: ${c.proposed_path}`);if(hash(read(c.path))!==c.before_sha256)throw Error(`Change CAS failed: ${c.path}`);permittedChange(c.path,read(c.path),read(c.proposed_path),plan.manifest_names);}
 const archive=path.join(path.dirname(planPath),'root-apply-archive');if(fs.existsSync(path.join(root,archive)))throw Error('Apply archive already exists');
 for(const c of plan.changes){const dest=path.join(root,archive,c.path);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,read(c.path),{flag:'wx'});}
 writeJSON(path.join(archive,'plan.json'),plan);
 // Recheck after archives; no writes on any preflight failure. Files replace via same-directory rename.
 for(const g of plan.guards)if(hash(read(g.path))!==g.sha256)throw Error(`Postarchive CAS failed: ${g.path}`);
 for(const c of plan.changes){const dest=path.join(root,c.path),tmp=dest+`.step2-metadata-${process.pid}.tmp`;fs.writeFileSync(tmp,read(c.proposed_path),{flag:'wx'});fs.renameSync(tmp,dest);}
 console.log(JSON.stringify({applied:plan.changes.length,archive,native_credit:false}));process.exit(0);
}
if(args.some(a=>!['--dry-run'].includes(a)))throw Error('Usage: reconcile.mjs [--dry-run] OR --apply-root-reviewed --plan PATH');
const names=inventory(),errors=[],guards=new Map(),changes=[],fields=[],pages=[],owned=new Map(),external=new Set(),pageInventory=[];
const guard=(p,raw)=>{const h=hash(raw);if(guards.has(p)&&guards.get(p)!==h)throw Error(`Input changed while reading: ${p}`);guards.set(p,h);};
if(names.length!==101||names.some((n,i)=>Number(n.match(/-batch-(\d+)/)[1])!==i+1))errors.push('Expected exactly batches1–101, no gaps/extras');
const stamp=new Date().toISOString().replace(/[:.]/g,'-'),out=`${base}/snapshots/${stamp}-${process.pid}`;
const documents=[];
for(const name of names){
 const p=`research/${name}`,raw=read(p);guard(p,raw);const doc=JSON.parse(raw);if(!Array.isArray(doc))throw Error(`Invalid manifest: ${p}`);documents.push({p,raw,doc});
 for(const page of doc){
  pages.push(page);if(!Array.isArray(page.items)||!page.items.length){errors.push(`Empty page: ${page.id}`);continue;}
  const pagePath=`library/${page.category}/${page.id}.md`;let actual;
  try{const pr=read(pagePath);guard(pagePath,pr);actual=envelope(pr,pagePath).fm;}catch(e){errors.push(e.message);continue;}
  const placed=[...(actual.items??[]),...(actual.examples??[])];if(actual.page!==page.id||new Set(placed).size!==placed.length)errors.push(`Invalid actual page identity/duplicate placement: ${pagePath}`);
  const expected=page.items.map(i=>i.id);const absent=expected.filter(id=>!placed.includes(id));if(absent.length)errors.push(`Page missing owned items ${page.id}: ${absent.join(',')}`);
  pageInventory.push({id:page.id,path:pagePath,manifest_ids:expected,actual_items:actual.items??[],actual_examples:actual.examples??[],extra_context:placed.filter(id=>!expected.includes(id))});
  for(const item of page.items){
   if(!item||typeof item.id!=='string'||!/^[a-zA-Z0-9_-]+$/.test(item.id)){errors.push(`Invalid manifest ID on ${page.id}`);continue;}
   if(owned.has(item.id)){errors.push(`Duplicate owned item: ${item.id}`);continue;}
   const sourcePath=`items/${item.id}.md`;try{
    const source=read(sourcePath);guard(sourcePath,source);const {fm,body}=envelope(source,sourcePath);
    if(fm.id!==item.id){errors.push(`Source identity mismatch: ${sourcePath}`);continue;}
    for(const k of ['deps','justified_by','forward_refs'])if(fm[k]!==undefined&&(!Array.isArray(fm[k])||fm[k].some(d=>typeof d!=='string'||!d))){errors.push(`Invalid source ${k}: ${item.id}`);}
    if(typeof fm.kind!=='string'||typeof fm.title!=='string'||!Array.isArray(fm.deps)){errors.push(`Missing source kind/title/deps: ${item.id}`);continue;}
    for(const k of ['id','kind','title','deps','justified_by','forward_refs']){
     const value=fm[k];if(!eq(item[k],value)){fields.push({path:p,id:item.id,key:k,before:item[k]??null,after:value??null,operation:value===undefined?'delete':'set'});if(value===undefined)delete item[k];else item[k]=structuredClone(value);}
    }
    if(Object.hasOwn(item,'statement')){const value=statement(body,fm.kind,item.id);if(item.statement!==value){fields.push({path:p,id:item.id,key:'statement',before:item.statement,after:value,operation:'set'});item.statement=value;}}
    owned.set(item.id,{item,sourcePath,source,fm});
   }catch(e){errors.push(`${item.id}: ${e.message}`);}
  }
 }
}
// Native levels: only in-run deps raise levels. justified_by/forward_refs stay mirrored, not reverse prerequisites.
const graph=dependencyLevels(pages,{validateLabels:false});errors.push(...graph.errors);
for(const [id,entry] of owned){
 for(const k of ['deps','justified_by','forward_refs'])for(const dep of entry.fm[k]??[])if(!owned.has(dep))external.add(dep);
 const level=graph.levels.get(id);if(!Number.isSafeInteger(level))continue;
 if(entry.item.dependency_level!==level){fields.push({id,path:documents.find(d=>d.doc.some(p=>p.items.includes(entry.item))).p,key:'dependency_level',before:entry.item.dependency_level??null,after:level,operation:'set'});entry.item.dependency_level=level;}
 try{const after=patchLevel(entry.source,level,id);if(after!==entry.source){fields.push({id,path:entry.sourcePath,key:'dependency_level',before:entry.fm.dependency_level??null,after:level,operation:'set'});changes.push({path:entry.sourcePath,before:entry.source,after});}}catch(e){errors.push(e.message);}
}
// Direct external existence only: no claim of external metadata, level or proof audit.
for(const id of external)if(!fs.existsSync(path.join(root,'items',`${id}.md`)))errors.push(`External target not canonical file (resolve alias manually): ${id}`);
for(const d of documents){const after=JSON.stringify(d.doc,null,2)+'\n';if(!eq(JSON.parse(d.raw),d.doc))changes.push({path:d.p,before:d.raw,after});}
for(const c of changes)permittedChange(c.path,c.before,c.after,names);
const staged=changes.map(c=>{const proposed_path=`${out}/proposed/${c.path}`,before_path=`${out}/before/${c.path}`;for(const [p,v]of[[proposed_path,c.after],[before_path,c.before]]){fs.mkdirSync(path.dirname(path.join(root,p)),{recursive:true});fs.writeFileSync(path.join(root,p),v,{flag:'wx'});}return{path:c.path,before_sha256:hash(c.before),after_sha256:hash(c.after),proposed_path,before_path};});
const plan={schema:'step2-metadata-cas-v1',run,created_at:new Date().toISOString(),mode:'proposal-only',manifest_names:names,scope:{batches:names.length,pages:pages.length,items:owned.size,external_context_not_audited:[...external].sort()},summary:{source_changes:staged.filter(c=>c.path.startsWith('items/')).length,manifest_changes:staged.filter(c=>c.path.startsWith('research/')).length,fields:fields.length},errors:[...new Set(errors)],guards:[...guards].map(([p,sha256])=>({path:p,sha256})),dependency_order:[...graph.levels].sort((a,b)=>a[1]-b[1]||a[0].localeCompare(b[0])).map(([id,level])=>({id,level})),field_operations:fields,actual_page_inventory:pageInventory,changes:staged,limitations:['No body edits, global plan, historical reports, readiness records, hash bindings or gates.','Source identity conflicts, dependency cycles and unresolved targets block apply.','Statement mirrors only where already present; complete exact primary section text.','All input files have full raw CAS; field operations separately record before/after values.','Apply requires writers drained/root coordination; filesystem cannot provide an atomic multifile transaction.']};
writeJSON(`${out}/plan.json`,plan);console.log(JSON.stringify({plan:`${out}/plan.json`,batches:plan.scope.batches,pages:plan.scope.pages,items:plan.scope.items,external_context_count:external.size,...plan.summary,errors:plan.errors},null,2));if(plan.errors.length)process.exitCode=1;
