// Read-only native status sampling; never dispatches workers or changes controls.
import {spawnSync} from 'node:child_process';
import {writeFileSync,readFileSync,existsSync,unlinkSync,appendFileSync,renameSync} from 'node:fs';
const run='frontier-44-special-representation-examples-28';
const base=`research/${run}-owner-native-status-watch`,pidFile=`${base}.pid`;
if(existsSync(pidFile)){
 const prior=Number(readFileSync(pidFile,'utf8'));
 try{process.kill(prior,0);throw Error(`Existing status watcher ${prior}`);}catch(e){if(e.code!=='ESRCH')throw e;}
 unlinkSync(pidFile);
}
writeFileSync(pidFile,String(process.pid),{flag:'wx'});
let stopped=false;
const stop=()=>{stopped=true;try{unlinkSync(pidFile);}catch{};process.exit(0);};
process.on('SIGTERM',stop);process.on('SIGINT',stop);
async function sample(){
 if(stopped||existsSync(`${base}.stop`))return stop();
 const startedAt=new Date().toISOString();
 const argv=['tools/tsx-run.mjs','tools/autopilot/bin/autopilot.mts','status','--run',run,'--state-dir',`.autopilot/${run}`];
 const result=spawnSync(process.execPath,argv,{encoding:'utf8',timeout:120000,maxBuffer:1024*1024});
 const receipt={run,started_at:startedAt,completed_at:new Date().toISOString(),pid:process.pid,argv,exit_code:result.status,stdout:result.stdout??'',stderr:result.stderr??'',error:result.error?.message??null,read_only:true,gate_attempt:false};
 writeFileSync(`${base}.latest.json.tmp`,JSON.stringify(receipt,null,2)+'\n');renameSync(`${base}.latest.json.tmp`,`${base}.latest.json`);
 appendFileSync(`${base}.observations.jsonl`,JSON.stringify({run,started_at:receipt.started_at,completed_at:receipt.completed_at,exit_code:receipt.exit_code,read_only:true})+'\n');
 if(process.argv.includes('--once'))return stop();
 setTimeout(sample,6*60*1000);
}
await sample();
