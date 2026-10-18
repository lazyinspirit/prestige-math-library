import{readFileSync,writeFileSync,mkdirSync,existsSync,openSync,closeSync}from'node:fs';
import{spawnSync}from'node:child_process';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,archive=`${base}/phase-source-lines-before`;
if(existsSync(archive))throw Error('already normalized');
const rows=JSON.parse(readFileSync(`${base}/frontier-precheck-full-output.json`)).results.filter(x=>['fail','repair'].includes(x.status)),pending=[];
for(const row of rows){const text=readFileSync(row.file,'utf8');let count=0;let next=text.replace(/(^## (?:Proof|Refutation|Verification|Counterexample)\s*\n)([\s\S]*?)(?=^## |$(?![\s\S]))/gm,(full,header,body)=>{
 const matches=[...body.matchAll(/^\d+\.\d+\s+/gm)];if(!matches.length)return full;count++;if(body.includes('```'))throw Error('proof code fence '+row.item_id);
 const blocks=matches.map((m,i)=>body.slice(m.index,matches[i+1]?.index??body.length).trim().split(/\r?\n/).map(x=>x.trim()).join(' '));return header+body.slice(0,matches[0].index)+blocks.join('\n\n')+'\n\n';});
 if(count!==1)throw Error('expected one proof section '+row.item_id);
 if(row.item_id==='lem-adjacent-window-divided-difference-recurrence'){
  const old='The denominator is positive because the nodes are strictly ordered. Rearranging gives the stated identity. [F1, F2, F3, algebra] ∎';
  if(!next.includes(old))throw Error('one-step recurrence guard');next=next.replace(old,'[F1, F2, F3, algebra]\n\n2.1 The denominator in step 1.1 is positive because the nodes are strictly ordered. Rearranging that identity gives the stated identity. [given, step 1.1, algebra] ∎');
 }
 if(row.item_id==='lem-floater-hormann-local-mesh-ratio-bounded-by-global'){
  const old='Their minimum is therefore in $[0,\\rho]$, and the maximum of these minima also lies in $[0,\\rho]$. When $n\\le2$, $\\beta=0\\le\\rho$. [given, F1, algebra] ∎';
  if(!next.includes(old))throw Error('one-step mesh-ratio guard');next=next.replace(old,'[given, F1, algebra]\n\n2.1 By step 1.1, their minimum is in $[0,\\rho]$, and the maximum of these minima also lies in $[0,\\rho]$. When $n\\le2$, $\\beta=0\\le\\rho$. [given, F1, step 1.1, algebra] ∎');
 }
 pending.push({row,old:text,next});
}
for(const{row,old,next}of pending){const dest=`${archive}/${row.file}`;mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});writeFileSync(dest,old,{flag:'wx'});writeFileSync(row.file,next);}
const output=`${base}/phase-source-lines-precheck-output.json`,fd=openSync(output,'w'),result=spawnSync(process.execPath,['tools/tsx-run.mjs','tools/precheck.mts',...rows.map(r=>r.file),'--json'],{stdio:['ignore',fd,'pipe'],encoding:'utf8'});closeSync(fd);const check=JSON.parse(readFileSync(output));
writeFileSync(`${base}/phase-source-lines-reconciliation.json`,JSON.stringify({run,at:new Date().toISOString(),archive,files:rows.map(x=>x.file),operation:'Fold numbered proof continuations onto their existing tagged source row. Split two existing one-step arguments into their existing calculation and concluding inference to meet normative minimum-two-step format. Claims/hypotheses unchanged; no new prerequisite.',precheck:{exit_code:result.status,summary:check.summary,output,stderr:result.stderr},mathematical_acceptance:false},null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({summary:check.summary,failures:check.results.filter(x=>x.status==='fail').map(x=>({id:x.item_id,error:x.error})),repairs:check.results.filter(x=>x.status==='repair').length}));
