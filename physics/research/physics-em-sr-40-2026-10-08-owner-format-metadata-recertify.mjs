// Run-local owner receipt helper. Execute only after native and helper writers drain.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {readItem,PREFIXES,DEPENDENCY_ROLES} from '../../tools/physics-support/physics-content.mjs';
import {sectionText} from '../../tools/physics-support/facts-block.mjs';
import {scanProofFiles} from '../../tools/proof-layout.mjs';

const run='physics-em-sr-40-2026-10-08';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const repo=path.join(root,'physics'),research=path.join(repo,'research');
const state=path.join(repo,'.physics-autopilot',run);
const read=file=>JSON.parse(fs.readFileSync(file,'utf8'));
const sha=value=>crypto.createHash('sha256').update(value).digest('hex');
const nonempty=value=>typeof value==='string' && value.trim().length>0;
const request=read(path.join(state,'owner-gate-request.json'));
if(request.version!==2 || request.consumedAt || request.snapshot.recertificationScope!=='formatting-metadata-only') throw Error('Await a current unconsumed version-2 gate request');
if(!process.argv.includes('--helpers-drained')) throw Error('Root must independently verify helper writers drained');

function liveNativeWriters(){
 const found=[];
 for(const pid of fs.readdirSync('/proc').filter(name=>/^\d+$/.test(name))){
  let args;
  try{args=fs.readFileSync(`/proc/${pid}/cmdline`).toString().split('\0').filter(Boolean);}
  catch(error){if(error.code==='ENOENT'||error.code==='ESRCH')continue;throw error;}
  const position=args.indexOf('--run');
  if(position>=0 && args[position+1]===run && args.some(arg=>path.basename(arg)==='dispatch.mjs')) found.push({pid:Number(pid),label:args[args.indexOf('--label')+1]});
 }
 return found;
}
if(liveNativeWriters().length) throw Error('Live native dispatch writers remain');
// Interrupted pre-crash dispatch records remain history, not writer handles.
const started=new Date().toISOString(),entries=new Map(),pages=new Set();
for(const name of fs.readdirSync(research).filter(name=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(name))){
 for(const page of read(path.join(research,name))){
  if(pages.has(page.id)) throw Error(`Duplicate page ${page.id}`);
  pages.add(page.id);
  if(!page.items?.length) throw Error(`Empty selected page ${page.id}`);
  for(const item of page.items){if(entries.has(item.id))throw Error(`Duplicate item ${item.id}`);entries.set(item.id,item);}
 }
}
const owed=new Set(read(path.join(research,`${run}-scope-ledger.json`)).pages.map(page=>page.id));
if(!entries.size || entries.size!==request.snapshot.items.length || pages.size!==owed.size || [...owed].some(id=>!pages.has(id))) throw Error('Exact current approved frontier mismatch');
function rehash(){for(const input of request.snapshot.inputs){const actual=fs.existsSync(input.path)?sha(fs.readFileSync(input.path)):null;if(actual!==input.sha256)throw Error(`Changed gate input ${input.path}`);}}
rehash();
const headings={definition:['Definition'],theorem:['Statement','Proof'],lemma:['Statement','Proof'],proposition:['Statement','Proof'],corollary:['Statement','Proof'],example:['Example'],counterexample:['Statement refuted','Counterexample'],'false-statement':['Statement','Refutation'],'physics-theorem':['Statement','Proof'],'thought-experiment':['Statement','Proof'],postulate:['Postulate'],experiment:['Setup','Procedure','Observations','Uncertainty','Interpretation']};
const provenance=new Set(['ai-generated','ai-altered','literature-derived']);
const seen=new Set(),items=[],failures=[],files=[];
for(const binding of request.snapshot.items){
 const manifest=entries.get(binding.id),file=path.join(repo,'items',`${binding.id}.md`),issues=[];
 try{
  if(!manifest || sha(JSON.stringify(manifest))!==binding.manifestSha256)throw Error('Current manifest digest mismatch');
  const authored=Boolean(binding.carrierSha256);
  let item=manifest;
  if(authored){if(!fs.existsSync(file)||sha(fs.readFileSync(file))!==binding.carrierSha256)throw Error('Current authored carrier absent or changed');item=readItem(file);files.push(file);}
  else if(fs.existsSync(file))throw Error('Unexpected unbound authored carrier');
  if(item.id!==binding.id || !PREFIXES[item.kind] || !item.id.startsWith(`${PREFIXES[item.kind]}-`) || !['physics','mathematics'].includes(item.domain))issues.push('Invalid identity, kind prefix or domain');
  if(!nonempty(item.title))issues.push('Missing title');
  if(!Array.isArray(item.deps)||new Set(item.deps).size!==item.deps.length)issues.push('Invalid or duplicate deps');
  for(const dep of item.deps??[]){if(!nonempty(dep)||!DEPENDENCY_ROLES.has(item.dependency_roles?.[dep]))issues.push(`Missing or invalid role ${dep}`);if(entries.has(dep)&&!seen.has(dep))issues.push(`Supplier not before consumer ${dep}`);}
  for(const dep of Object.keys(item.dependency_roles??{}))if(!item.deps?.includes(dep))issues.push(`Extra dependency role ${dep}`);
  if(item.domain==='physics'&&!nonempty(item.physical_scope))issues.push('Missing physical scope');
  if(authored){
   if(item.kind!==manifest.kind||item.domain!==manifest.domain||item.status!=='draft')issues.push('Authored classification mismatch or non-draft owned content');
   if(!nonempty(item.body)||/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/u.test(item.raw))issues.push('Empty body or forbidden control characters');
   for(const heading of headings[item.kind]??[])if(!sectionText(item.body,heading).trim())issues.push(`Missing or empty ## ${heading}`);
   if((headings[item.kind]??[]).some(heading=>['Proof','Refutation','Counterexample'].includes(heading))&&!nonempty(item.proof_strategy))issues.push('Missing proof_strategy');
   if(!provenance.has(item.provenance?.statement)||!new Set([...provenance,'not-applicable','not-supplied']).has(item.provenance?.proof))issues.push('Invalid provenance');
   const references=item.sources?.references??[];
   if(!Array.isArray(references))issues.push('Invalid source-reference list');
   const urls=(Array.isArray(references)?references:[]).filter(reference=>reference&&typeof reference==='object'&&nonempty(reference.url));
   if(['statement','proof'].some(part=>['literature-derived','ai-altered'].includes(item.provenance?.[part]))&&!urls.length)issues.push('Source-backed provenance requires reference URL');
   for(const reference of Array.isArray(references)?references:[]){if(typeof reference==='string')continue;if(!nonempty(reference?.title))issues.push('Invalid reference title');if(reference?.url&&!/^https?:$/u.test(new URL(reference.url).protocol))issues.push('Invalid reference URL');}
   const roles={corollary:'direct-corollary',example:'example',counterexample:'counterexample'};
   if(item.provenance?.statement==='ai-generated'&&(!roles[item.kind]||item.generation?.role!==roles[item.kind]))issues.push('Invalid generated-claim role');
   if(item.provenance?.statement!=='ai-generated'&&item.generation!==undefined)issues.push('Unexpected generation metadata');
  }else for(const key of ['statement','strategy'])if(!nonempty(item[key])||/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/u.test(item[key]))issues.push(`Invalid scaffold ${key}`);
 }catch(error){issues.push(error.message);}
 seen.add(binding.id);
 if(issues.length)failures.push({id:binding.id,issues});
 items.push({...binding,verdict:'format-metadata-pass',formatting:{verdict:'pass',evidence:'Current claim/carrier parsed; nonempty fields, declared class headings and control-character hygiene checked in the current dependency order. Authored carriers also undergo exact selected-file proof-layout rendering below. No deduction is assessed.'},metadata:{verdict:'pass',evidence:'Current manifest/carrier digests, identity/classification tags, provenance/source shapes, draft status and dependency-role syntax checked. All local logical suppliers precede this item. Exact-run structural diagnostics are collected below; cross-domain mathematical constraints remain native content-gate decisions, not mathematical attestations. Unrelated items remain prerequisite context.'}});
}
let structural=null,layout=null;
{
 const preAuthor=new Set(['1-drift','1-drift-apply','1-scaffold','2-assign','3a-scope','3-baseline']);
 const planMode=request.snapshot.stages.every(stage=>preAuthor.has(stage));
 if(!planMode && files.length!==items.length)failures.push({id:'frontier',issues:['Authored gate contains absent item carriers']});
 {
  const command=[path.join(root,'tools/physics-support/physics-check.mjs'),'--run',run,'--json',...(planMode?['--plan','research/plan-spec.json']:[])];
  const checked=spawnSync(process.execPath,command,{cwd:root,encoding:'utf8',maxBuffer:8*1024*1024,timeout:300000});
  if(checked.error)failures.push({id:'native-structural-metadata',issues:[checked.error.message]});
  else{
   try{
    structural=JSON.parse(checked.stdout);
    if(structural.items!==entries.size)failures.push({id:'native-structural-metadata',issues:['Incomplete current selection']});
    // The full native battery still enforces these constraints. Determining
    // whether a mathematical claim uses a physical premise belongs to its
    // failed content-gate review, not this formatting/metadata-shape receipt.
    const contentGateCodes=new Set(['math-physics-dependency','mathematical-role']);
    const metadataErrors=(structural.errors??[]).filter(error=>!contentGateCodes.has(error.code));
    if(metadataErrors.length)failures.push({id:'native-structural-metadata',issues:metadataErrors});
    if(checked.status!==0&&!structural.errors?.length)failures.push({id:'native-structural-metadata',issues:[checked.stderr||'Native structural checker failed without item diagnostics']});
   }catch(error){failures.push({id:'native-structural-metadata',issues:[error.message,checked.stdout+checked.stderr]});}
  }
 }
}
if(files.length===items.length&&files.length){try{layout=scanProofFiles(files,root);for(const item of layout)if(item.errors.length)failures.push({id:item.file,issues:item.errors});}catch(error){failures.push({id:'proof-layout-renderer',issues:[error.message]});}}
rehash();
if(liveNativeWriters().length)throw Error('A native writer appeared during recertification');
const latest=read(path.join(state,'owner-gate-request.json'));
if(latest.attempt!==request.attempt||latest.snapshot.sha256!==request.snapshot.sha256||latest.consumedAt)throw Error('Gate request changed or consumed');
const evidence=path.join(research,`${run}-gate-${request.attempt}-format-metadata-pass.json`);
if(failures.length){fs.writeFileSync(evidence,JSON.stringify({attempt:request.attempt,status:'Formatting/metadata failed; no receipt issued',reviewStartedAt:started,reviewedAt:new Date().toISOString(),failures},null,2)+'\n');throw Error(`Formatting/metadata defects; see ${evidence}`);}
const receipt={version:2,recertificationScope:'formatting-metadata-only',attempt:request.attempt,snapshotSha256:request.snapshot.sha256,reviewer:'/root',writersDrained:true,writerScopes:[],reviewStartedAt:started,reviewedAt:new Date().toISOString(),items};
fs.writeFileSync(evidence,JSON.stringify({...receipt,status:'Actual formatting/metadata/hash pass only; no mathematical or physical acceptance',structuralMetadata:structural,proofLayoutFiles:layout?.length??0},null,2)+'\n');
if(process.argv.includes('--submit')){const target=path.join(state,'owner-gate-receipt.json'),temporary=target+'.root-tmp';fs.writeFileSync(temporary,JSON.stringify(receipt,null,2)+'\n');fs.renameSync(temporary,target);}
console.log(JSON.stringify({attempt:request.attempt,items:items.length,evidence,submitted:process.argv.includes('--submit')}));
