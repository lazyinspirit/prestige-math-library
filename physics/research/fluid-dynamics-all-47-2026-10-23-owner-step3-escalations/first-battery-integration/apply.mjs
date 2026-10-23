// Root-executed draft. Does not stamp current scientific reviews or invoke native tools.
import {readFileSync,writeFileSync,mkdirSync,lstatSync,realpathSync,renameSync} from 'node:fs';
import {dirname,resolve,relative,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash,randomUUID} from 'node:crypto';
import {isDeepStrictEqual as same} from 'node:util';
const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,'../../..');
const check=(ok,why)=>{if(!ok)throw Error(why);},hash=x=>createHash('sha256').update(x).digest('hex');
const args=process.argv.slice(2),apply=args.includes('--apply');
check(args.includes('--stage')!==apply,'Use --stage OR --apply --root-reviewed --writers-drained');
if(apply)for(const flag of ['--root-reviewed','--writers-drained'])check(args.includes(flag),`Missing ${flag}`);
const planBytes=readFileSync(join(here,'plan.json'));
check(hash(planBytes)==='221b605db16b49a1e0ca8533901463f577e8885212c3e2edfb86a383d399b39d','Draft plan changed: root must review the actual new proposal and helper binding');
const p=JSON.parse(planBytes),run='fluid-dynamics-all-47-2026-10-23';
check(p.version===1&&p.run===run&&p.operations.length===68&&p.root_only_boundary_review_proposals.length===143,'Unexpected joined proposal');
function guarded(path){
 const full=resolve(root,path),rel=relative(root,full);
 check(rel&&!rel.startsWith('..')&&!rel.startsWith('/')&&lstatSync(full).isFile()&&realpathSync(full)===full,`Not regular local exact realpath: ${path}`);
 const bytes=readFileSync(full);check(hash(bytes)===p.preimage_guards[path],`Stale exact input ${path}; stop for root reconciliation`);return bytes;
}
for(const path of Object.keys(p.preimage_guards))guarded(path);
const originals=new Map(),staged=new Map(),counts={},seen=new Set();
function locate(doc,pointer){const bits=pointer.split('/').slice(1);check(bits.length>=3&&!bits.some(k=>['__proto__','constructor','prototype'].includes(k)),'Invalid pointer');const last=bits.pop();let parent=doc;for(const bit of bits){check(parent!=null&&Object.hasOwn(parent,bit),'Missing pointer parent');parent=parent[bit];}return[parent,last];}
for(const o of p.operations){
 check(new RegExp(`^research/${run}-batch-(?:[1-9]|[1-3][0-9]|4[0-7])\\.proof-contracts\\.json$`).test(o.path),'Only selected batch worksheets may change');
 check(o.pointer.startsWith(`/contracts/${o.item}/`),'Item/pointer identity mismatch');
 check(!seen.has(o.path+'\0'+o.pointer),'Duplicate operation');seen.add(o.path+'\0'+o.pointer);
 if(!staged.has(o.path)){const text=guarded(o.path).toString();originals.set(o.path,text);staged.set(o.path,JSON.parse(text));}
 const [parent,key]=locate(staged.get(o.path),o.pointer),present=Object.hasOwn(parent,key),before=present?parent[key]:null;
 check(same(before,o.before),'Operation preimage changed');
 if(o.kind==='citation-quote'){
  check(/\/citations\/\d+$/.test(o.pointer),'Wrong citation location');
  const b={...o.before},a={...o.after};delete b.quote;delete a.quote;
  check(same(a,b)&&typeof o.after.quote==='string'&&o.after.quote.length>0,'Only literal quotation may change');
  const raw=guarded(`items/${o.after.source}.md`).toString(),escaped=o.after.source_section.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const section=raw.match(new RegExp(`^## ${escaped}\\s*\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`,'m'));
  check(section&&section[1].includes(o.after.quote),'Replacement not exact current public supplier excerpt');
 }else if(o.kind==='derivation-inputs'){
  check(/\/derivations\/\d+$/.test(o.pointer)&&o.item==='prop-fd-profile-functional-bootstrap','Outside actual four bootstrap rows');
  const b={...o.before},a={...o.after};delete b.inputs;delete a.inputs;check(same(a,b)&&Array.isArray(o.after.inputs),'Only derivation input tokens may change');
 }else if(o.kind==='risk-review'){
  check(o.pointer.endsWith('/risk_review')&&present===o.before_present,'Risk field presence mismatch');
  check(o.after.status==='complete'&&typeof o.after.notes==='string'&&o.after.notes.length>40&&!o.after.reviewer.includes('alpha-batch-'),'Actual owner attribution required; no native Alpha impersonation');
 }else{
  check(['boundary-row','boundary-wording'].includes(o.kind)&&/\/boundaries\/\d+$/.test(o.pointer),'Unlicensed contract field');
  check(o.before.case===o.case&&o.after.case===o.case,'Boundary case identity changed');
  for(const k of new Set([...Object.keys(o.before),...Object.keys(o.after)]))if(!['status','reason','evidence','case_scope'].includes(k))check(same(o.before[k],o.after[k]),`Historical boundary field changed: ${k}`);
 }
 parent[key]=structuredClone(o.after);counts[o.kind]=(counts[o.kind]??0)+1;
}
check(same(counts,{'boundary-row':43,'boundary-wording':2,'citation-quote':12,'risk-review':7,'derivation-inputs':4}),'Exact reviewed operation counts changed');
const changed=[...staged].map(([path,doc])=>[path,JSON.stringify(doc,null,2)+'\n']);
console.log(JSON.stringify({root_execution_only:true,apply,operations:counts,changed_files:changed.map(([path])=>path),current_review_stamps_written:false,native_aggregate_touched:false,native_tools_invoked:false},null,2));
if(apply){
 const archive=join(here,'before-root-apply-'+randomUUID());mkdirSync(archive);
 // Archive every complete original worksheet before the first live write.
 for(const[path]of changed){const target=join(archive,path);mkdirSync(dirname(target),{recursive:true});writeFileSync(target,guarded(path),{flag:'wx'});}
 writeFileSync(join(archive,'plan.json'),planBytes,{flag:'wx'});
 for(const path of Object.keys(p.preimage_guards))guarded(path);
 for(const[path,text]of changed){guarded(path);const full=resolve(root,path),temp=full+'.root-first-battery-'+randomUUID();writeFileSync(temp,text,{flag:'wx'});renameSync(temp,full);}
 console.log(`Complete original worksheets archived in ${archive}. Root separately adopts/stamps current scientific reviews, regenerates native aggregate and performs required recertification.`);
}
