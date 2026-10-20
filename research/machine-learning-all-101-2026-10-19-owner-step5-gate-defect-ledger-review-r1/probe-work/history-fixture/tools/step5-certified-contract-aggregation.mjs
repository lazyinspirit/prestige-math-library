// Native certification stages a complete immutable cache intent before touching
// the live derivative. A saved certificate can finish that exact interrupted write.
import {readFileSync,writeFileSync,mkdirSync,existsSync,renameSync,lstatSync,realpathSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const need=(v,m)=>{if(!v)throw Error('Step 5 certified aggregation: '+m);};
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const cache=(root,run)=>join(resolve(root),'research',`${run}-proof-contracts.json`);
const directory=(root,run,round)=>join(resolve(root),'research',`${run}-step5-v2`,'certified-contract-aggregations',`gate-${round}`);
function merged(run,inputs){
 const scope=[],contracts={};
 for(const bytes of inputs){const d=JSON.parse(bytes);need(d.version===1&&Array.isArray(d.scope)&&d.contracts&&typeof d.contracts==='object'&&!Array.isArray(d.contracts),'invalid contract input');
  need(Object.keys(d.contracts).every(id=>d.scope.includes(id)),'out-of-scope contract');
  for(const id of d.scope){need(typeof id==='string'&&!scope.includes(id),'duplicate aggregate subject');scope.push(id);if(d.contracts[id]!=null)contracts[id]=d.contracts[id];}}
 return JSON.stringify({version:1,level:run,scope,contracts},null,2)+'\n';
}
function archive(dir,bytes){mkdirSync(dir,{recursive:true});const path=join(dir,`${hash(bytes)}.json`);if(existsSync(path))need(readFileSync(path,'utf8')===bytes,'immutable archive conflict');else writeFileSync(path,bytes,{flag:'wx'});return {path,sha256:hash(bytes)};}
export function stageCertifiedContractAggregation(root,run,round,prior){
 need(prior?.run===run&&prior.phase==='gate'&&prior.round===round-1&&Number.isSafeInteger(round)&&round>=2,'not a consecutive native gate certificate');
 const path=cache(root,run),before=readFileSync(path,'utf8');need(prior.evidence?.[path]===hash(before),'prior current cache pin does not match actual preimage');
 const native=join(resolve(root),'research',`${run}-step5-v2`,`certification-${prior.phase}-${prior.round}.json`),nativeBytes=readFileSync(native,'utf8');
 need(JSON.stringify(read(native))===JSON.stringify(prior),'prior immutable native certificate differs');
 const frontier=read(join(resolve(root),'research',`${run}-step5-v2`,'frontier.json'));
 const batches=frontier.batches.map(b=>String(b.id)).sort((a,b)=>Number(a)-Number(b));
 need(frontier.run===run&&batches.length===81&&batches.every((b,i)=>b===String(i+1)),'not the complete 81-batch frontier');
 const dir=directory(root,run,round),inputs=batches.map(batch=>{
  const path=join(resolve(root),'research',`${run}-batch-${batch}.proof-contracts.json`),bytes=readFileSync(path,'utf8');return {path,...archive(dir,bytes),carrier:path};
 });
 // Archive.path is deliberately distinct from the mutable carrier.
 const after=merged(run,inputs.map(i=>readFileSync(i.path,'utf8')));
 const beforeFile=archive(dir,before),afterFile=archive(dir,after),priorFile=archive(dir,nativeBytes);
 const record={version:1,kind:'native-certified-contract-aggregation',run,phase:'gate',round,cache_path:path,before:beforeFile,after:afterFile,prior_certificate:{path:native,sha256:hash(nativeBytes),archive:priorFile.path},inputs:inputs.map(i=>({carrier:i.carrier,archive:i.path,sha256:i.sha256})),current_source_review_granted:false};
 const evidence=Object.fromEntries([beforeFile,afterFile,priorFile,...inputs.map(i=>({path:i.path,sha256:i.sha256})),{path:native,sha256:hash(nativeBytes)}].map(i=>[i.path,i.sha256]));
 // The snapshot must still be the actual producer input after all archives exist.
 for(const i of record.inputs)need(hash(readFileSync(i.carrier,'utf8'))===i.sha256,'input changed while staging');
 return {record,evidence};
}
export function validateCertifiedContractAggregation(root,run,certificate,{current=true,installed=false}={}){
 const r=certificate.contract_aggregation;
 need(r?.version===1&&r.kind==='native-certified-contract-aggregation'&&r.run===run&&r.phase==='gate'&&certificate.phase==='gate'&&r.round===certificate.round&&r.round>=2
  &&r.current_source_review_granted===false&&r.cache_path===cache(root,run),'malformed aggregation intent');
 const dir=directory(root,run,r.round),bytes=entry=>{
  const p=resolve(entry.path??entry.archive);need(p.startsWith(dir+'/')&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()&&realpathSync(p).startsWith(realpathSync(dir)+'/'),'outside/nonregular immutable aggregate archive');
  const value=readFileSync(p,'utf8');need(hash(value)===entry.sha256&&certificate.evidence?.[p]===entry.sha256,'changed/unbound immutable aggregation bytes');return value;
 };
 const before=bytes(r.before),after=bytes(r.after),prior=bytes({path:r.prior_certificate.archive,sha256:r.prior_certificate.sha256});
 const previous=JSON.parse(prior),{sha256,...payload}=previous;
 need(sha256===hash(payload)&&previous.version===2&&previous.run===run&&previous.phase==='gate'&&previous.round===r.round-1
  &&previous.evidence?.[r.cache_path]===r.before.sha256&&r.prior_certificate.path===join(resolve(root),'research',`${run}-step5-v2`,`certification-gate-${r.round-1}.json`)
  &&readFileSync(r.prior_certificate.path,'utf8')===prior&&certificate.evidence?.[r.prior_certificate.path]===r.prior_certificate.sha256,'unbound exact prior native certificate/cache');
 need(Array.isArray(r.inputs)&&r.inputs.length===81,'missing aggregate inputs');
 for(const [i,input]of r.inputs.entries())need(input.carrier===join(resolve(root),'research',`${run}-batch-${i+1}.proof-contracts.json`)
  &&(!current||hash(readFileSync(input.carrier,'utf8'))===input.sha256),'current aggregate input changed');
 need(merged(run,r.inputs.map(i=>bytes({path:i.archive,sha256:i.sha256})))===after
  &&certificate.evidence?.[r.cache_path]===r.after.sha256,'non-deterministic output or missing current cache pin');
 const live=readFileSync(r.cache_path,'utf8');need(installed?live===after:live===before||live===after,'arbitrary cache edit is not a resumable native write');
 const evidence={...certificate.evidence};delete evidence[r.cache_path];
 return {record:r,before,after,evidence,alreadyInstalled:live===after};
}
export function completeCertifiedContractAggregation(root,run,certificate,{verifyOtherEvidence}={}){
 const value=validateCertifiedContractAggregation(root,run,certificate);
 need(typeof verifyOtherEvidence==='function','ordinary evidence verifier is required');verifyOtherEvidence(value.evidence);
 // The immutable NEW certificate is the write-ahead intent, not a replacement
 // for source/context/closure checks performed by the caller before this step.
 const saved=join(resolve(root),'research',`${run}-step5-v2`,`certification-gate-${certificate.round}.json`);
 need(existsSync(saved)&&JSON.stringify(read(saved))===JSON.stringify(certificate),'missing exact frozen native certificate intent');
 if(!value.alreadyInstalled){const tmp=`${value.record.cache_path}.${process.pid}.tmp`;writeFileSync(tmp,value.after,{flag:'wx'});renameSync(tmp,value.record.cache_path);}
 return value.record;
}
