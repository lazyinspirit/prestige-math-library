import {readFileSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {gateReviewSnapshot} from '../../tools/physics-autopilot/src/owner-gate-recertification.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',stateDir=join(root,'.physics-autopilot',run),req=JSON.parse(readFileSync(join(stateDir,'owner-gate-request.json'))),old=req.snapshot,now=gateReviewSnapshot({repo:root,run,config:{stateDir}},old.battery,old.stages),a=new Map(old.inputs.map(x=>[x.path,x.sha256])),b=new Map(now.inputs.map(x=>[x.path,x.sha256]));
const result={at:new Date().toISOString(),attempt:req.attempt,request_snapshot:old.sha256,recomputed_snapshot:now.sha256,changed_top_fields:Object.keys(now).filter(k=>k!=='inputs'&&JSON.stringify(old[k])!==JSON.stringify(now[k])),changed_inputs:[...new Set([...a.keys(),...b.keys()])].filter(p=>a.get(p)!==b.get(p)).map(path=>({path,before:a.get(path),after:b.get(path)})),old_input_count:a.size,new_input_count:b.size};
writeFileSync(join(stateDir,'owner-snapshot-probe.json'),JSON.stringify({result,request:old,recomputed:now},null,2)+'\n');console.log(JSON.stringify(result));
