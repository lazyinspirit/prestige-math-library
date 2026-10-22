import {readFileSync,writeFileSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
const here=dirname(fileURLToPath(import.meta.url)),repo=resolve(here,'../../..'),root=join(repo,'physics'),run='physics-non-fluid-129-2026-10-21-r2';
const hash=b=>createHash('sha256').update(b).digest('hex');
const params={boundary:['research/'+run+'-proof-contracts.json','--fail-on-contradicted','--fail-on-template','--json'],ledger:['check','--run',run,'--adjudications','research/'+run+'-judge-adjudications.jsonl','--reader-decisions','research/'+run+'-step5-alert-decisions.jsonl','--closure','research/'+run+'-judge-closure.json','--frontier','research/'+run+'-step5-v2/frontier.json']};
const result={at:new Date().toISOString(),scope:'Targeted read-only CLI captures. No live battery, metadata, ledger, source or native evidence edits.',checks:{}};
for(const [key,name]of [['boundary','boundary-audit'],['ledger','defect-ledger']]){
 const args=params[key],originalFile=join(repo,'tools/physics-support',name+'.mjs'),candidateFile=join(here,'candidate/tools/physics-support',name+'.mjs');
 const outputs={};
 for(const [kind,file]of [['original',originalFile],['candidate',candidateFile]]){
  const r=spawnSync(process.execPath,[file,...args],{cwd:root,encoding:'utf8',timeout:120000,maxBuffer:32*1024*1024});
  writeFileSync(join(here,name+'.'+kind+'-pipe.stdout'),r.stdout??'');writeFileSync(join(here,name+'.'+kind+'-pipe.stderr'),r.stderr??'');
  let parsed=null,error=null;try{parsed=key==='boundary'?JSON.parse(r.stdout):null;}catch(e){error=e.message;}
  outputs[kind]={status:r.status,error:r.error?.message??null,stdoutBytes:Buffer.byteLength(r.stdout??''),stderrBytes:Buffer.byteLength(r.stderr??''),sha256:hash(r.stdout??''),jsonError:error,...(parsed?{summary:parsed.summary}:{}),summaryMatch:key==='ledger'?r.stdout?.match(/(\d+) defect row\(s\) checked/)?.[0]??null:null,tail:r.stdout?.slice(-170)};
 }
 result.checks[name]=outputs;
}
writeFileSync(join(here,'capture-current.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
