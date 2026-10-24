// Root's mechanical local-repair recorder. No agent dispatch or native build transitions.
import fs from 'node:fs';import path from'node:path';import {spawn} from'node:child_process';
import {itemHashGuard}from'../../tools/item-hash.mjs';
const root=process.cwd(),d='research/math-library-rendering-repairs-2026-10-23';const statusPath=d+'/recording-status.json',stopPath=d+'/stop-recording';const prior=fs.existsSync(statusPath)?JSON.parse(fs.readFileSync(statusPath,'utf8')):{results:{}};const results=prior.results??{};const attempts=new Map(Object.entries(results).map(([id,v])=>[id,v.guard]));let stopping=false;process.on('SIGTERM',()=>{stopping=true});process.on('SIGINT',()=>{stopping=true});fs.mkdirSync(d+'/recording-logs',{recursive:true});
const save=()=>{const p=statusPath+'.tmp-'+process.pid;fs.writeFileSync(p,JSON.stringify({pid:process.pid,updated_at:new Date().toISOString(),running:!stopping,scope:'Actual guarded per-item format/render checks and local published repair recording only; no native workflow transitions or proof-audit claims.',results},null,2)+'\n');fs.renameSync(p,statusPath)};
const queuePath=d+'/queue.json';let cachedQueue=null,cachedQueueKey=null,cachedEntries=null;
const readQueue=()=>{const stat=fs.statSync(queuePath,{bigint:true}),key=String(stat.ino)+':'+String(stat.mtimeNs)+':'+String(stat.size);if(!cachedQueue||key!==cachedQueueKey){const raw=fs.readFileSync(queuePath,'utf8'),parsed=JSON.parse(raw);cachedQueue=parsed;cachedQueueKey=key;cachedEntries=new Map(parsed.entries.map(e=>[e.id,e]));}return cachedQueue;};
const run=(id,refresh)=>new Promise(resolve=>{const args=[d+'/record-local-repair.mjs',id,...(refresh?['--refresh']:[])];const child=spawn(process.execPath,args,{cwd:root,stdio:['ignore','pipe','pipe']});let output='';child.stdout.on('data',b=>output+=b);child.stderr.on('data',b=>output+=b);child.on('close',code=>resolve({exit_code:code,output,command:['node',...args]}));child.on('error',error=>resolve({exit_code:-1,output:String(error),command:['node',...args]}));});
save();console.log('Local repair recorder started',process.pid);
while(!stopping&&!fs.existsSync(stopPath)){
 let q;try{q=readQueue()}catch{await new Promise(r=>setTimeout(r,1000));continue;}
 let didWork=false;
 for(const queued of q.entries){
  readQueue();const e=cachedEntries.get(queued.id);if(!e||e.followup_pending||e.continuation_pending||e.mathematical_correction_acceptance_pending)continue;
  if(stopping||fs.existsSync(stopPath))break;
  if(!['adjudicated','ready-for-receipt-refresh'].includes(e.status))continue;
  const reportPath=d+'/adjudications/'+e.id+'.json';if(!fs.existsSync(reportPath))continue;const report=JSON.parse(fs.readFileSync(reportPath,'utf8'));if(!report.changed)continue;
  const raw=fs.readFileSync(e.source,'utf8'),guard=itemHashGuard(raw),receiptPath=d+'/receipts/'+e.id+'.json';let refresh=false;
  if(fs.existsSync(receiptPath)){const old=JSON.parse(fs.readFileSync(receiptPath,'utf8'));if(old.content_sha256===guard)continue;refresh=e.status==='ready-for-receipt-refresh'&&e.continuation_before_file&&e.continuation_before_raw_sha256&&!e.continuation_pending;if(!refresh)continue;}
  if(attempts.get(e.id)===guard)continue;attempts.set(e.id,guard);didWork=true;const checked_at=new Date().toISOString();const r=await run(e.id,refresh);const logPath=d+'/recording-logs/'+e.id+'-'+guard.slice(0,16)+'.json';fs.writeFileSync(logPath,JSON.stringify({id:e.id,guard,checked_at,...r},null,2)+'\n');results[e.id]={guard,checked_at,exit_code:r.exit_code,log:logPath,refresh};save();console.log(r.exit_code===0?'RECORDED':'FAILED',e.id);if(r.exit_code!==0)console.log(r.output.slice(-1500));
 }
 if(!didWork)await new Promise(r=>setTimeout(r,3000));
}
stopping=true;save();console.log('Local repair recorder stopped after current item');
