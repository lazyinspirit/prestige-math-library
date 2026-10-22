import fs from 'node:fs';
import crypto from 'node:crypto';
import {syncBuiltinESMExports} from 'node:module';
import {performance} from 'node:perf_hooks';
import {pathToFileURL} from 'node:url';
const [modulePath,root,mode='plain']=process.argv.slice(2),run='inverse-problems-knot-theory-all-109-2026-10-19';
const {loadPnpClassificationMigration}=await import(pathToFileURL(modulePath));
const originalRead=fs.readFileSync,originalStringify=JSON.stringify;let reads=0,readBytes=0,packHashes=0,packHashBytes=0;const trace=crypto.createHash('sha256');
if(mode==='instrumented'){
 fs.readFileSync=function(path,...args){const result=originalRead(path,...args);if(String(path).startsWith(root+'/')){const size=typeof result==='string'?Buffer.byteLength(result):result.byteLength;reads++;readBytes+=size;trace.update(String(path)+'\0'+size+'\n');}return result;};syncBuiltinESMExports();
 JSON.stringify=function(value,...args){const result=originalStringify(value,...args);if(value?.run===run&&value?.phase==='repeat'&&value?.round===1&&value?.assignments&&value?.before&&value?.units?.length===109){packHashes++;packHashBytes+=Buffer.byteLength(result);}return result;};
}
const beforeCPU=process.cpuUsage(),start=performance.now();let h;
try{h=loadPnpClassificationMigration(root,run,{current:true});}finally{fs.readFileSync=originalRead;JSON.stringify=originalStringify;syncBuiltinESMExports();}
const wallMs=performance.now()-start,cpu=process.cpuUsage(beforeCPU),output=crypto.createHash('sha256').update(JSON.stringify({original_id:h.original_id,current_id:h.current_id,before_guard:h.before_guard,after_guard:h.after_guard,evidence:h.evidence,targets:h.targets,metadata:[...h.metadata]})).digest('hex');
console.log(JSON.stringify({mode,modulePath,wall_ms:wallMs,cpu_ms:(cpu.user+cpu.system)/1000,max_rss_KiB:process.resourceUsage().maxRSS,reads,readBytes,packHashes,packHashBytes,read_trace_sha256:mode==='instrumented'?trace.digest('hex'):null,output_sha256:output,canonical_application_performed:false,receipt_written:false,native_credit:false}));
