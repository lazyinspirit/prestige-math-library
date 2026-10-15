// Root formatting/metadata authorization, never scientific acceptance.
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
import {step3Escalations} from '../../tools/physics-support/step3-escalations.mjs';
const run='physics-td-qft-rpm-62-2026-10-14',root=process.cwd(),state=`.physics-autopilot/${run}`,args=process.argv.slice(2);
const archive=args[args.indexOf('--archive')+1];if(!args.includes('--archive')||!args.includes('--writers-drained')||![`research/${run}-owner-format-recertification/`,`${state}/owner-format-recertification/`].some(prefix=>archive?.startsWith(prefix))||archive.includes('..'))throw Error('Exact archive and released writer handoff required');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex'),read=p=>JSON.parse(fs.readFileSync(p)),eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const requestPath=`${state}/owner-gate-request.json`,requestRaw=fs.readFileSync(requestPath),request=JSON.parse(requestRaw),receipt=read(`${archive}/receipt.proposed.json`),report=read(`${archive}/report.json`);
if(request.consumedAt||receipt.version!==2||receipt.recertificationScope!=='formatting-metadata-only'||!receipt.writersDrained||receipt.attempt!==request.attempt||receipt.snapshotSha256!==request.snapshot.sha256||report.attempt!==request.attempt||report.failures.length||report.globalFailure||!report.inputsCurrent||report.checks.some(x=>x.exit_code!==0)||Date.parse(receipt.reviewStartedAt)<Date.parse(request.createdAt))throw Error('Incomplete/stale formatting and metadata pass');
if(!request.snapshot.items.length||receipt.items.length!==request.snapshot.items.length||!eq(report.items,receipt.items))throw Error('Empty or incomplete frontier');
for(let i=0;i<receipt.items.length;i++){const a=receipt.items[i],z=request.snapshot.items[i];for(const [k,v] of Object.entries(z))if(!eq(a[k],v))throw Error('Ordered frontier mismatch '+z.id);if(a.verdict!=='format-metadata-pass'||a.formatting?.verdict!=='pass'||a.metadata?.verdict!=='pass')throw Error('Failed item '+z.id);}
const {sha256:expected,...snapshot}=request.snapshot;if(sha(JSON.stringify(snapshot))!==expected)throw Error('Native snapshot digest invalid');
const s=read(`${state}/state.json`);if(s.run!==run||Object.values(s.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Native source writers not drained');
const escalations=step3Escalations(root,run);if(escalations.length)throw Error('Native Step3 escalations remain '+escalations.length);
const allowed=['/Users/ianx/Projects/prestige-math-library/','/Users/ianx/Projects/prestige-intelligence/','/tmp/prestige-physics-renderer-runtime/'];const checks=[];
for(const input of request.snapshot.inputs){if(!allowed.some(p=>input.path.startsWith(p)))throw Error('Unexpected input boundary '+input.path);let hash;try{hash=sha(fs.readFileSync(input.path));}catch(e){if(e.code!=='ENOENT')throw e;hash=null;}if(hash!==input.sha256)throw Error('Input changed '+input.path);checks.push({path:input.path,sha256:hash});}
if(!fs.readFileSync(requestPath).equals(requestRaw))throw Error('Request changed during rehash');
const target=`${state}/owner-gate-receipt.json`;if(fs.existsSync(target))fs.writeFileSync(`${archive}/owner-gate-receipt.before.json`,fs.readFileSync(target));
fs.writeFileSync(`${archive}/root-publication.json`,JSON.stringify({run,root:true,at:new Date().toISOString(),attempt:request.attempt,snapshotSha256:request.snapshot.sha256,items:receipt.items.length,source_writers_drained:true,native_escalated:0,checks,recertificationScope:'formatting-metadata-only'},null,2)+'\n');
const tmp=target+'.root-tmp';fs.writeFileSync(tmp,JSON.stringify(receipt,null,2)+'\n');if(!fs.readFileSync(requestPath).equals(requestRaw))throw Error('Request changed before publish');fs.renameSync(tmp,target);
console.log(JSON.stringify({published:true,attempt:request.attempt,items:receipt.items.length,independently_rehashed:checks.length}));
