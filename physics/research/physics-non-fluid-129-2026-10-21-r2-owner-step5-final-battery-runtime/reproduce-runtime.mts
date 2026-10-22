import {readFileSync,writeFileSync} from 'node:fs';
import {resolve,dirname,join} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
const here=dirname(fileURLToPath(import.meta.url)),repo=resolve(here,'../../..'),root=join(repo,'physics'),run='physics-non-fluid-129-2026-10-21-r2';
const {stages}=await import(pathToFileURL(join(repo,'tools/physics-autopilot/stages/mathlib.mts')).href);
const {runGate}=await import(pathToFileURL(join(repo,'tools/physics-autopilot/src/gates.mts')).href);
const gates=stages.find((s:any)=>s.id==='5.8-gate').gates({repo:root,run});
const hash=(b:any)=>createHash('sha256').update(b).digest('hex');
const inputPaths=[join(root,'research',run+'-proof-contracts.json'),join(root,'research/defect-ledger.jsonl'),join(root,'research/DEFECT-LEDGER.md'),join(repo,'tools/physics-support/boundary-audit.mjs'),join(repo,'tools/physics-support/defect-ledger.mjs'),join(repo,'tools/physics-autopilot/src/gates.mts')];
const inputHashes=Object.fromEntries(inputPaths.map(path=>[path.slice(repo.length+1),hash(readFileSync(path))]));
const outputs:any={};
for(const id of ['boundary-audit','defect-ledger']){
 const gate=gates.find((g:any)=>g.id===id);outputs[id]={argv:gate.argv,liveness:gate.liveness??null};
 for(const kind of ['original','candidate']){
  const copy={...gate,argv:gate.argv.map((arg:any)=>arg==='tools/physics-support/'+id+'.mjs'?join(kind==='candidate'?join(here,'candidate'):repo,'tools/physics-support',id+'.mjs'):arg)};
  const result=await runGate(copy,{cwd:root});
  writeFileSync(join(here,id+'.'+kind+'-native-capture.json'),JSON.stringify(result,null,2)+'\n');
  let summary=null,clusters=null;try{const report=JSON.parse(result.rawOutput??result.output);summary=report.summary;clusters=report.templates.map((t:any)=>({members:t.members,reviewed_members:t.reviewed_members,items:t.items,cases:t.cases}));}catch{}
  outputs[id][kind]={ok:result.ok,code:result.code,rawCode:result.rawCode,checked:result.checked??null,why:result.why,rawBytes:Buffer.byteLength(result.rawOutput??result.output),sha256:hash(result.rawOutput??result.output),summary,clusters};
 }
}
const inputChanges=inputPaths.filter(path=>hash(readFileSync(path))!==inputHashes[path.slice(repo.length+1)]);
const result={run,at:new Date().toISOString(),scope:'Targeted read-only capture using the actual two descriptor commands and native runGate pipe/project/liveness code. Not a live battery or native stage attempt; no state, report history, metadata or source writes.',outputs,inputHashes,inputChanges};
writeFileSync(join(here,'reproduction.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
