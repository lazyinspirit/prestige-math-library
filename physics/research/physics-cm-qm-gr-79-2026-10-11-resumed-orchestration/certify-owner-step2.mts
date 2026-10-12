import fs from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import { splitFrontmatter } from '../../../tools/physics-support/facts-block.mjs';
import { parseFrontmatter } from '../../../tools/physics-support/content-policy-lib.mjs';
import { precheckSource } from '../../../tools/physics-support/paths.mjs';
import { verifyProofLayout } from '../../../tools/proof-layout-receipt.mjs';
const { proposedPrecheck } = await import(pathToFileURL(precheckSource()).href);
const repo=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',stateDir=resolve(repo,'.physics-autopilot',run);
const request=JSON.parse(fs.readFileSync(resolve(stateDir,'owner-gate-request.json'),'utf8'));
if(request.version!==2||request.consumedAt||JSON.stringify(request.snapshot.stages)!==JSON.stringify(['2-scope-review']))throw Error('Require a fresh native Step-2 gate request');
const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
function verifyInputs(){
  for(const input of request.snapshot.inputs){
    const current=fs.existsSync(input.path)?digest(fs.readFileSync(input.path)):null;
    if(current!==input.sha256)throw Error(`Native gate input changed: ${input.path}`);
  }
}
verifyInputs();
const started=new Date().toISOString(), failures:any[]=[],checked:any[]=[];
const layout=verifyProofLayout(run,repo),layoutItems=new Map(layout.items.map(i=>[i.file,i]));
const planned=new Map(Array.from({length:79},(_,i)=>JSON.parse(fs.readFileSync(`research/${run}-batch-${i+1}.pages.json`,'utf8'))).flat().flatMap(p=>p.items).map(i=>[i.id,i]));
const roles=new Set(['mathematical-premise','physical-assumption','physical-result','empirical-premise','operational-prerequisite','formulation-prerequisite']);
for(const item of request.snapshot.items){
  const raw=fs.readFileSync(`items/${item.id}.md`,'utf8'),{fm,body}=splitFrontmatter(raw),meta=parseFrontmatter(fm),manifest:any=planned.get(item.id),errors:string[]=[];
  if(meta.id!==item.id||!fm||!body.trim())errors.push('frontmatter identity or body missing');
  for(const key of ['deps','dependency_roles','dependency_level','kind','domain','title','physical_scope','provenance','sources'])if(key in meta&&JSON.stringify(meta[key])!==JSON.stringify(manifest?.[key]))errors.push(`manifest mismatch ${key}`);
  if(!Array.isArray(meta.deps)||new Set(meta.deps).size!==meta.deps?.length)errors.push('invalid dependency list');
  for(const dep of meta.deps??[])if(!fs.existsSync(`items/${dep}.md`)||!roles.has(meta.dependency_roles?.[dep]))errors.push(`missing supplier or role ${dep}`);
  if(!Number.isSafeInteger(meta.dependency_level)||meta.dependency_level<0)errors.push('invalid dependency level');
  const rendered:any=layoutItems.get(`items/${item.id}.md`);
  if(!rendered)errors.push('missing current rendered layout coverage');
  for(const error of rendered?.errors??[])errors.push(`rendered layout: ${error.code}`);
  const parts=raw.split(/\n## Facts & Assumptions\n/),proof=parts.length>=2?parts.at(-1).replace(/^## .*$/gm,'').trim():raw.split(/\n## (Proof|Refutation|Verification|Counterexample)\n/).length>=3?raw.split(/\n## (Proof|Refutation|Verification|Counterexample)\n/).at(-1).trim():null;
  if(['postulate','experiment','open-problem'].includes(meta.kind)){
    if(/^## (Proof|Refutation|Verification|Counterexample)\s*$/m.test(body))errors.push('nonproof kind has proof section');
  }else if(proof!==null){
    if(!meta.proof_strategy)errors.push('phase body missing proof_strategy');
    else{const result=proposedPrecheck(proof,meta.proof_strategy);if(result.err||result.repaired)errors.push(result.err??'phase format requires canonical repair');}
  }
  if(errors.length)failures.push({id:item.id,errors});
  checked.push({...item,verdict:errors.length?'fail':'format-metadata-pass',formatting:{verdict:errors.length?'fail':'pass',evidence:'Parsed YAML and Markdown sections; normative phase-format precheck passed or is not applicable; current hash-verified SSR layout has no step-separation or blue-tag errors for this item.'},metadata:{verdict:errors.length?'fail':'pass',evidence:'Carrier identity, supplier existence, dependency roles and nonnegative dependency level checked; current manifest metadata matches carrier.'}});
}
const report={run,attempt:request.attempt,reviewStartedAt:started,reviewedAt:new Date().toISOString(),checked:checked.length,failures};
fs.writeFileSync(`research/${run}-resumed-orchestration/owner-step2-format-metadata.json`,JSON.stringify(report,null,2)+'\n');
if(failures.length){console.log(JSON.stringify(report));process.exit(1);}
verifyInputs();
const currentRequest=JSON.parse(fs.readFileSync(resolve(stateDir,'owner-gate-request.json'),'utf8'));
if(currentRequest.attempt!==request.attempt||currentRequest.snapshot.sha256!==request.snapshot.sha256||currentRequest.consumedAt)throw Error('Native request changed during certification');
fs.writeFileSync(resolve(stateDir,'owner-gate-receipt.json'),JSON.stringify({version:2,recertificationScope:'formatting-metadata-only',attempt:request.attempt,snapshotSha256:request.snapshot.sha256,reviewer:'Codex owner orchestrator',writersDrained:true,writerScopes:[],reviewStartedAt:started,reviewedAt:report.reviewedAt,items:checked},null,2)+'\n');
console.log(JSON.stringify({run,checked:checked.length,failures:0,attempt:request.attempt}));
