// Actual fresh formatting/metadata pass for a current Steps1–5 native request.
import {readFileSync,writeFileSync,mkdirSync,existsSync,renameSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {gateReviewSnapshot} from '../../tools/physics-autopilot/src/owner-gate-recertification.mjs';
import {runPages,dependencyLevels} from '../../tools/physics-support/item-dependency-levels.mjs';
import {readItem,PREFIXES,loadPhysicsRepository,validatePhysicsContent} from '../../tools/physics-support/physics-content.mjs';
import {scanProofFiles} from '../../tools/physics-support/proof-layout.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',stateDir=join(root,'.physics-autopilot',run),requestPath=join(stateDir,'owner-gate-request.json');
const json=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(!existsSync(join(root,'research',run+'-owner-final80-readiness-47/completion.json')))throw Error('Await actual final readiness47 completion');
if(existsSync(join(root,'research',run+'-owner-role-metadata-48/completion.json'))&&!existsSync(join(root,'research',run+'-owner-role-readiness-49/completion.json')))throw Error('Await actual repaired-role readiness49 completion');
const req=json(requestPath),snapshot=req.snapshot,state=json(join(stateDir,'state.json'));
if(req.version!==2||req.consumedAt||existsSync(join(stateDir,'owner-gate-history',req.attempt+'.json'))||snapshot.run!==run||snapshot.recertificationScope!=='formatting-metadata-only'||!snapshot.items.length||snapshot.stages.some(s=>s.startsWith('6-')))throw Error('Require fresh nonempty Steps1–5 request');
if(Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Native writer still active');
// Serialized battery omits descriptor-only ownerReviewInputs. Preserve EVERY
// native request input explicitly, and still rediscover the current full scope.
const descriptors=snapshot.battery.map((g,i)=>({...g,ownerReviewInputs:i===0?snapshot.inputs.map(r=>r.path):[],...(g.projection?{projectResult:{toString:()=>g.projection}}:{})}));
const ctx={repo:root,run,config:{stateDir}},fresh=()=>gateReviewSnapshot(ctx,descriptors,snapshot.stages);
if(fresh().sha256!==snapshot.sha256)throw Error('Request inputs stale; wait for current native request');
const reviewStartedAt=new Date().toISOString();if(Date.parse(reviewStartedAt)<Date.parse(req.createdAt))throw Error('Request timestamp in future');
const graph=dependencyLevels(runPages(root,run));if(graph.errors.length)throw Error(graph.errors.join('\n'));
const sorted=x=>[...x].sort(),seen=new Set(),checks=[];
for(const row of snapshot.items){
 const item=readItem(join(root,'items',row.id+'.md')),manifest=graph.items.get(row.id)?.item;
 if(!['mathematics','physics'].includes(item.domain)||!PREFIXES[item.kind]||!item.id.startsWith(PREFIXES[item.kind]+'-')||!['ai-generated','ai-altered','literature-derived'].includes(item.provenance?.statement)||!['ai-generated','ai-altered','literature-derived','not-supplied','not-applicable'].includes(item.provenance?.proof))throw Error('Malformed classification/provenance metadata '+row.id);
 if(manifest?.provenance&&JSON.stringify(item.provenance)!==JSON.stringify(manifest.provenance))throw Error('Current provenance/manifest mismatch '+row.id);
 if(sha(item.raw)!==row.carrierSha256||item.id!==row.id||!item.kind||!item.title?.trim()||!['draft','published'].includes(item.status)||!Array.isArray(item.deps)||item.deps.some(d=>typeof d!=='string'||!d))throw Error('Malformed current source metadata '+row.id);
 for(const dep of item.deps)if(snapshot.items.some(r=>r.id===dep)&&!seen.has(dep))throw Error('Native request not supplier-before-consumer '+row.id+' -> '+dep);
 if(manifest&&(sha(JSON.stringify(manifest))!==row.manifestSha256||item.kind!==manifest.kind||item.title!==manifest.title||item.dependency_level!==graph.levels.get(row.id)||JSON.stringify(sorted(item.deps))!==JSON.stringify(sorted(manifest.deps))||(manifest.domain!==undefined&&item.domain!==manifest.domain)))throw Error('Current manifest/source metadata mismatch '+row.id);
 checks.push({...row,metadataCheck:{id:item.id,kind:item.kind,title:item.title,status:item.status,domain:item.domain,provenance:item.provenance,dependency_level:item.dependency_level,deps:item.deps,manifestMatched:Boolean(manifest)}});seen.add(row.id);
}
const repository=loadPhysicsRepository(root,null,new Set(snapshot.pages));
const metadataErrors=validatePhysicsContent({...repository,requireBodies:false,selectedItems:new Set(snapshot.items.map(r=>r.id)),selectedPages:new Set(snapshot.pages)});
if(metadataErrors.length)throw Error('Canonical metadata checks: '+metadataErrors.map(e=>e.code+' ['+e.id+']: '+e.message).join('; '));
const layout=scanProofFiles(snapshot.items.map(row=>'items/'+row.id+'.md'),root),failures=layout.flatMap(item=>item.errors.map(e=>({file:item.file,...e}))),out=join(stateDir,'owner-gate-checks',req.attempt+'.json');
mkdirSync(join(stateDir,'owner-gate-checks'),{recursive:true});
if(failures.length){writeFileSync(out,JSON.stringify({version:1,run,attempt:req.attempt,reviewStartedAt,reviewedAt:new Date().toISOString(),metadata:checks,formatting:layout,failures,receipt_written:false},null,2)+'\n');throw Error('Actual formatting failures '+failures.length+'; see '+out);}
const after=json(requestPath);if(after.attempt!==req.attempt||after.consumedAt||fresh().sha256!==snapshot.sha256)throw Error('Current request/context changed during actual checks');
const reviewedAt=new Date().toISOString();writeFileSync(out,JSON.stringify({version:1,run,attempt:req.attempt,recertificationScope:'formatting-metadata-only',mathematical_review:false,reviewStartedAt,reviewedAt,metadata:checks,formatting:layout,complete_dependency_ordered_scope:true},null,2)+'\n');
const evidence=out+' (fresh real renderer and current identity/kind/domain/provenance carrier, source/manifest, dependency-role schema and numeric-level metadata checks; no mathematical acceptance)';
const receipt={version:2,run,recertificationScope:'formatting-metadata-only',attempt:req.attempt,snapshotSha256:snapshot.sha256,reviewer:'/root',writersDrained:true,writerScopes:[],reviewStartedAt,reviewedAt,items:checks.map(r=>({id:r.id,carrierSha256:r.carrierSha256,manifestSha256:r.manifestSha256,verdict:'format-metadata-pass',formatting:{verdict:'pass',evidence},metadata:{verdict:'pass',evidence}}))};
const path=join(stateDir,'owner-gate-receipt.json');if(existsSync(path))writeFileSync(join(stateDir,'owner-gate-checks',req.attempt+'-prior-receipt.json'),readFileSync(path));const temp=path+'.owner-temp';writeFileSync(temp,JSON.stringify(receipt,null,2)+'\n');renameSync(temp,path);
console.log(JSON.stringify({run,attempt:req.attempt,subjects:checks.length,proof_steps:layout.reduce((n,i)=>n+i.rows.reduce((m,r)=>m+r.sourceSteps,0),0),formatting_defects:0,receipt_written:true,gate_attempt_executed_by_owner:false}));
