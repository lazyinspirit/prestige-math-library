import {readFileSync,writeFileSync} from 'node:fs';
import {spawn} from 'node:child_process';
const dir='research/physics-non-fluid-129-2026-10-21-r2-owner-qft-graph-scaling';
const ids=JSON.parse(readFileSync(`${dir}/items.json`)),files=ids.map(id=>`items/${id}.md`);
const prefix='research/physics-non-fluid-129-2026-10-21-r2-batch-60';
const tasks=[
['precheck',['tools/tsx-run.mjs','tools/physics-support/precheck.mts','--json',...files]],
['proof-contract',['tools/physics-support/proof-contract.mjs',prefix+'.proof-contracts.json','--strict','--json']],
['proof-layout',['tools/physics-support/proof-layout.mjs',...files]],
['rendercheck',['tools/physics-support/rendercheck.mjs',...files,'library/quantum-field-theory-mathematics/qftx-causal-renormalization.md','library/quantum-field-theory-mathematics/qftx-causal-renormalization-examples.md','--json']],
['content-policy',['tools/physics-support/content-policy.mjs',prefix+'.pages.json','--json']],
['depcheck',['tools/physics-support/depcheck.mjs','--items-file',dir+'/items.json','--json']],
['coverage-checklist',['tools/physics-support/coverage-checklist.mjs',prefix+'.coverage.json','--json']],
['source-fetch-check',['tools/physics-support/source-fetch-check.mjs','--coverage',prefix+'.coverage.json']],
];
const results=await Promise.all(tasks.map(async([name,args])=>await new Promise(resolve=>{const at=new Date().toISOString();const child=spawn('node',args,{cwd:process.cwd(),stdio:['ignore','pipe','pipe']});let stdout='',stderr='';child.stdout.on('data',b=>stdout+=b);child.stderr.on('data',b=>stderr+=b);child.on('close',exit_code=>{const row={name,command:['node',...args],started_at:at,ended_at:new Date().toISOString(),exit_code,stdout,stderr};writeFileSync(`${dir}/${name}-final-result.json`,JSON.stringify(row,null,2)+'\n');resolve(row);});})));
writeFileSync(`${dir}/focused-check-results.json`,JSON.stringify(results,null,2)+'\n');
for(const row of results)console.log(row.name,row.exit_code,row.stdout.slice(0,350),row.stderr.slice(0,350));
if(results.some(r=>r.exit_code!==0))process.exitCode=1;
