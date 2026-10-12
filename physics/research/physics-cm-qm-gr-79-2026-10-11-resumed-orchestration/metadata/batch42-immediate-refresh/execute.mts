import {readFileSync,writeFileSync,statSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {recordStep1} from '../../../../../tools/physics-support/step1-decisions.mjs';
const run='physics-cm-qm-gr-79-2026-10-11',root=process.cwd(),base=`research/${run}-resumed-orchestration/metadata`,out=`${base}/batch42-immediate-refresh`;
const hash=(b:any)=>createHash('sha256').update(b).digest('hex'),json=(p:string)=>JSON.parse(readFileSync(p,'utf8'));
const requestPath=`${out}/current85-release-request.json`,releasePath=`${out}/root-release.json`,request=json(requestPath),release=json(releasePath);
if(release.run!==run||release.authorizedExact85!==true||release.requestRawSha256!==hash(readFileSync(requestPath)))throw Error('Exact root release missing/stale');
if(request.rows.length!==85||request.rows.some((r:any)=>r.category!=='stale-authentic-ready'))throw Error('Exact authentic85 scope required');
const guards=request.inputGuards.map((g:any)=>{if(hash(readFileSync(g.path))!==g.rawSha256)throw Error(`Guard changed before refresh ${g.path}`);const stat=statSync(g.path);return {...g,stamp:`${stat.size}:${stat.mtimeMs}:${stat.ctimeMs}`};});
function checkGuards(){for(const g of guards){const stat=statSync(g.path),stamp=`${stat.size}:${stat.mtimeMs}:${stat.ctimeMs}`;if(stamp!==g.stamp){if(hash(readFileSync(g.path))!==g.rawSha256)throw Error(`Actual frozen input changed ${g.path}`);g.stamp=stamp;}}}
const changes:any[]=[],skipped:any[]=[];
writeFileSync(`${out}/execution-progress.json`,JSON.stringify({at:new Date().toISOString(),run,changes,skipped},null,2)+'\n');
for(const r of request.rows){
 checkGuards();
 const bytes=readFileSync(r.path),current=JSON.parse(bytes.toString());
 if(current.decision==='ready'&&current.sha256===r.nativeSha256){skipped.push({id:r.id,reason:'External current row preserved'});continue;}
 if(hash(bytes)!==r.beforeRawSha256)throw Error(`External changed target row ${r.id}; preserve without overwrite`);
 const reason=`${r.row.reason} Root-authorized immediate exact85 context hash restoration after metadata42 manifest edge/role and native derivation1.5 source-input mapping only; actual ready-before85, unchanged carrier/Statement/Definition/public interface, current native42 author-check fingerprint ${request.authorCheckFingerprint} with actual four local checks pass. Evidence ${base}/batch42-momentum-applied/applied-impact.json and final-local-checks.json. Valid frozen imported snapshot context retained; current-original raw drift remains explicitly separate at ${request.sourceOriginalRawDriftDisclosure}, not reconciled or independently accepted here. User new-pair dispatch priority permits this necessary incremental readiness restoration before seven approved overlays at their later natural writer-free join. No new mathematical audit, gate acceptance, review-history/cycle reset or hold release;37current rows and all other receipts preserved.`;
 const next=recordStep1(root,{run,item:r.id,decision:'ready',owner:true,dependencies:r.row.dependencies,reason});
 if(next.sha256!==r.nativeSha256){writeFileSync(r.path,bytes);throw Error(`Native observed input changed for ${r.id}; exact before row restored`);}
 changes.push({id:r.id,beforeRawSha256:r.beforeRawSha256,afterRawSha256:hash(readFileSync(r.path)),nativeSha256:next.sha256});
 writeFileSync(`${out}/execution-progress.json`,JSON.stringify({at:new Date().toISOString(),run,changes,skipped},null,2)+'\n');
}
checkGuards();
for(const g of guards)if(hash(readFileSync(g.path))!==g.rawSha256)throw Error(`Final full input hash changed ${g.path}`);
const final=request.rows.map((r:any)=>{const row=json(r.path);return {id:r.id,closed:row.decision==='ready'&&row.sha256===r.nativeSha256};});
const prior37=json(`${base}/batch37-refresh-result.json`).updated;
const source37Preserved=prior37.every((r:any)=>hash(readFileSync(`research/${run}-step1-${r.id}.json`))===r.after_raw_sha256);
const result={at:new Date().toISOString(),run,changes,skipped,current:final.filter(r=>r.closed).length,total:85,source37NineRawPreserved:source37Preserved,inputGuardsUnchanged:true,importsWritten:false,carriersWritten:false,mirrorsWritten:false,engineControlsWritten:false,independentAudit:false,gateAcceptance:false};
writeFileSync(`${out}/result.json`,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({at:result.at,updated:changes.length,skipped:skipped.length,current:result.current,source37NineRawPreserved:source37Preserved},null,2));
