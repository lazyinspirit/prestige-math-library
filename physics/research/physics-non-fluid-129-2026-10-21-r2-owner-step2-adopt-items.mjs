// Root adoption of exactly seven authorized same-pair sources. No acceptance.
import {readFileSync,writeFileSync,readdirSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {dirname} from 'node:path';
import {yamlCandidates} from '../tools/physics-support/paths.mjs';
import {splitFrontmatter} from '../tools/physics-support/facts-block.mjs';
import {readItem} from '../tools/physics-support/physics-content.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-step2-`;
const sha=b=>createHash('sha256').update(b).digest('hex'),original=new Map(),docs=new Map(),guards=new Map();
const read=p=>{const b=readFileSync(p);guards.set(p,sha(b));return JSON.parse(b);};
const load=p=>{if(!docs.has(p)){const b=readFileSync(p);original.set(p,b);docs.set(p,JSON.parse(b));}return docs.get(p);};
const additions=[];
for(const d of ['emg26-choice','nrqm51-simplex','tgr126-chain-area-successor']){
 const x=read(`${base}${d}/metadata-proposal.json`).new_item;
 additions.push({page:x.page,before:x.insert_before,row:x.manifest_row,source_sha256:x.source.sha256});
}
for(const x of read(`${base}qsm102-clustering/root-adoption-item-proposals.json`)){
 const {placement,binding,verification,status,origin,pipeline_run,...row}=x;
 additions.push({page:placement.page,before:placement.before,after:placement.after,row,source_sha256:binding.rawSha256});
}
if(additions.length!==7||new Set(additions.map(a=>a.row.id)).size!==7)throw Error('Unexpected new scope');
const paths=readdirSync('research').filter(n=>n.startsWith(run+'-batch-')&&n.endsWith('.pages.json')).map(n=>`research/${n}`);
const pages=paths.flatMap(path=>load(path).map(page=>({page,path}))),byPage=new Map(pages.map(x=>[x.page.id,x]));
if(pages.length!==258||new Set(pages.map(x=>x.page.batch??x.path)).size!==129)throw Error('Pair/page scope differs');
const existing=new Set(pages.flatMap(x=>x.page.items.map(i=>i.id)));if(existing.size!==845)throw Error('Expected exact pre-adoption845');
const pageBefore=new Map(pages.map(x=>[x.page.id,x.page.items.map(i=>i.id)]));
for(const a of additions){
 const s=readItem(`items/${a.row.id}.md`);if(sha(s.raw)!==a.source_sha256||existing.has(s.id))throw Error('New source guard/identity differs '+a.row.id);
 guards.set(`items/${s.id}.md`,sha(s.raw));
 const own=byPage.get(a.page);if(!own)throw Error('Missing approved page '+a.page);
 let index=a.before?own.page.items.findIndex(i=>i.id===a.before):own.page.items.findIndex(i=>i.id===a.after)+1;
 if(index<0||!a.before&&index===0)throw Error('Missing exact placement anchor '+s.id);
 if(a.after&&own.page.items.findIndex(i=>i.id===a.after)>=index)throw Error('Conflicting placement '+s.id);
 a.row.reference=`items/${s.id}.md`;delete a.row.placement;delete a.row.binding;
 a.row.design_state='Step 2 owner-authorized same-pair local proof; source release recorded, ordinary native gates pending.';
 for(const k of ['id','kind','title','domain','library','physical_scope','deps','dependency_roles','dependency_level','provenance','sources'])if(s[k]!==undefined)a.row[k]=s[k];
 own.page.items.splice(index,0,a.row);existing.add(s.id);
}
if(existing.size!==852)throw Error('Exact final852 scope differs');
const require_=createRequire(import.meta.url);let YAML;for(const p of yamlCandidates()){try{YAML=require_(p);break;}catch{}}
if(!YAML?.parseDocument)throw Error('YAML unavailable');
const pending=new Map();
for(const id of new Set(additions.map(a=>a.page))){
 const {page}=byPage.get(id),path=`library/${page.category}/${id}.md`,before=readFileSync(path),parts=splitFrontmatter(before.toString()),doc=YAML.parseDocument(parts.fm),old=doc.toJS();
 const oldIds=[...(old.items??[]),...(old.examples??[])],wanted=pageBefore.get(id);
 if(oldIds.length!==wanted.length||oldIds.some(x=>!wanted.includes(x)))throw Error('Unexplained old page inventory '+id);
 if(page.kind==='A'){if(old.examples?.length)throw Error('Inspect mixed A inventory '+id);doc.set('items',page.items.map(i=>i.id));}
 else {if(old.items?.length)throw Error('Inspect mixed B inventory '+id);doc.set('examples',page.items.map(i=>i.id));}
 const after=Buffer.from(`---\n${doc.toString().trimEnd()}\n---\n${parts.body}`);if(splitFrontmatter(after.toString()).body!==parts.body)throw Error('Page body changed');
 original.set(path,before);pending.set(path,after);
}
for(const path of new Set(additions.map(a=>byPage.get(a.page).path))){const after=Buffer.from(JSON.stringify(docs.get(path),null,2)+'\n');if(!original.get(path).equals(after))pending.set(path,after);}
function verify(){
 if(existsSync(`.physics-autopilot/${run}/controller.lock`)||Object.values(read(`.physics-autopilot/${run}/state.json`).dispatches).some(d=>!d.endedAt))throw Error('Native writers active');
 for(const[p,h]of guards)if(sha(readFileSync(p))!==h)throw Error('Input changed '+p);
 for(const[p,b]of original)if(!readFileSync(p).equals(b))throw Error('Metadata preimage changed '+p);
}
verify();const summary={at:new Date().toISOString(),run,pairs:129,pages:258,items:852,additions:additions.map(a=>({id:a.row.id,page:a.page,before:a.before,after:a.after,source_sha256:a.source_sha256})),scientific_acceptance:false,native_gate:false,source_body_edits:false,changes:[...pending].map(([path,b])=>({path,before_sha256:sha(original.get(path)),after_sha256:sha(b)}))};
if(process.argv.includes('--apply')){
 if(!process.argv.includes('--outside-writers-drained'))throw Error('Require actual outside writer release');
 const n=process.argv.indexOf('--out'),out=process.argv[n+1];if(n<0||!out||existsSync(out))throw Error('Require unused archive');
 mkdirSync(out,{recursive:true});for(const[p,b]of original)if(pending.has(p)){const a=`${out}/before/${p}`;mkdirSync(dirname(a),{recursive:true});writeFileSync(a,b);}
 verify();for(const[p,b]of pending)writeFileSync(p,b);writeFileSync(`${out}/receipt.json`,JSON.stringify({...summary,guards:[...guards].map(([path,sha256])=>({path,sha256}))},null,2)+'\n');
}
console.log(JSON.stringify(summary,null,2));
