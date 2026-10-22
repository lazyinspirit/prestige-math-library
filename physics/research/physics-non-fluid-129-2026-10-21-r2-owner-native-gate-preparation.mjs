// Actual native formatting/metadata preparation, only at a genuine drained
// native request. This does not grant scientific acceptance or change policy.
import {readFileSync,writeFileSync,mkdirSync,existsSync,renameSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {join,resolve} from 'node:path';
import {readItem,loadPhysicsRepository,validatePhysicsContent} from '../tools/physics-support/physics-content.mjs';
import {runPages,dependencyLevels} from '../tools/physics-support/item-dependency-levels.mjs';
import {scanProofFiles} from '../tools/physics-support/proof-layout.mjs';
import {loadStep1Record} from '../tools/physics-support/frontier-snapshot.mjs';
import {checkStep1} from '../tools/physics-support/step1-decisions.mjs';
const root=resolve(import.meta.dirname,'..'),run='physics-non-fluid-129-2026-10-21-r2',stateDir=join(root,'.physics-autopilot',run);
process.chdir(root);
const read=p=>JSON.parse(readFileSync(p,'utf8')),sha=b=>createHash('sha256').update(b).digest('hex');
const requestPath=join(stateDir,'owner-gate-request.json'),request=read(requestPath),snapshot=request.snapshot;
const expectedAt=process.argv.indexOf('--expect-stages'),expectedStages=expectedAt<0?null:JSON.parse(process.argv[expectedAt+1]);
if(!Array.isArray(expectedStages)||!expectedStages.length||JSON.stringify(snapshot.stages)!==JSON.stringify(expectedStages))throw Error('Require the exact current genuine --expect-stages JSON');
if(!process.argv.includes('--outside-writers-drained'))throw Error('Root must first verify all adopted scientific source owners have released their source scopes');
if(request.version!==2||request.consumedAt||snapshot.scopeKind!=='items'||snapshot.run!==run||!snapshot.items.length)throw Error('Requires a genuine unconsumed nonempty native item request');
const assertDrained=()=>{const s=read(join(stateDir,'state.json'));if(Object.values(s.dispatches).some(d=>!d.endedAt))throw Error('Native writers not drained');};
const verifyInputs=()=>{assertDrained();const latest=read(requestPath);if(latest.attempt!==request.attempt||latest.snapshot.sha256!==snapshot.sha256||latest.consumedAt)throw Error('Native request changed');for(const row of snapshot.inputs){const h=existsSync(row.path)?sha(readFileSync(row.path)):null;if(h!==row.sha256)throw Error('Native request input changed: '+row.path);}};
verifyInputs();
const started=new Date().toISOString();if(Date.parse(started)<Date.parse(request.createdAt))throw Error('Future request');
const archive=join(stateDir,'owner-format-metadata',request.attempt,started.replace(/[:.]/g,'-'));mkdirSync(archive,{recursive:true});
writeFileSync(join(archive,'request.json'),JSON.stringify(request,null,2)+'\n');
const readiness=checkStep1(loadStep1Record(root,run));
writeFileSync(join(archive,'readiness-currency.json'),JSON.stringify(readiness,null,2)+'\n');
if(!readiness.closed)throw Error('Resolve all current authoring readiness holds before preparing the native gate');
const pages=runPages(root,run),graph=dependencyLevels(pages),byId=new Map(pages.flatMap(p=>p.items.map(i=>[i.id,i])));
if(pages.length!==258||new Set(pages.map(p=>p.batch)).size!==129)throw Error('Approved frontier differs');
const requestedIds=snapshot.items.map(r=>r.id),ids=new Set(requestedIds);
if(ids.size!==requestedIds.length||ids.size!==byId.size||[...byId.keys()].some(id=>!ids.has(id)))throw Error('Native request differs from current manifest subjects');
const failures=graph.errors.map(message=>({code:'dependency-level',message})),checks=[];
const orderedItems=[...snapshot.items].sort((a,b)=>graph.levels.get(a.id)-graph.levels.get(b.id)||a.id.localeCompare(b.id));
const files=orderedItems.map(row=>`items/${row.id}.md`),pageFiles=pages.map(p=>`library/${p.category}/${p.id}.md`);
function command(name,args){const r=spawnSync(process.execPath,args,{cwd:root,encoding:'utf8',maxBuffer:64*1024*1024,timeout:300000});const path=join(archive,`${name}.log`);writeFileSync(path,(r.stdout??'')+(r.stderr??''));const row={name,argv:['node',...args],exit_code:r.status,error:r.error?.message,path,sha256:sha(readFileSync(path))};checks.push(row);if(r.status!==0||r.error)failures.push({code:name,evidence:path});console.log(JSON.stringify({check:name,exit_code:r.status}));}
// Precheck is read-only, including its suggested repairs. Use small groups so
// its immediate process.exit cannot truncate JSON on a large output pipe.
for(let n=0;n<files.length;n+=16)command(`precheck-${n/16+1}`,['tools/tsx-run.mjs','tools/physics-support/precheck.mts',...files.slice(n,n+16),'--json']);
command('render',['tools/physics-support/rendercheck.mjs',...files,...pageFiles,'--json']);
const layout=scanProofFiles(files,root);writeFileSync(join(archive,'layout.json'),JSON.stringify(layout,null,2)+'\n');
for(const row of layout)for(const error of row.errors)failures.push({code:'proof-layout',file:row.file,error});
const repository=loadPhysicsRepository(root,null,new Set(snapshot.pages));
const metadata=validatePhysicsContent({...repository,selectedItems:ids,selectedPages:new Set(snapshot.pages),requireBodies:true});
writeFileSync(join(archive,'metadata.json'),JSON.stringify(metadata,null,2)+'\n');failures.push(...metadata);
const results=[];
for(const row of orderedItems){const item=readItem(join(root,'items',`${row.id}.md`)),manifest=byId.get(row.id),errors=[];
 if(sha(item.raw)!==row.carrierSha256||sha(JSON.stringify(manifest))!==row.manifestSha256)errors.push('Carrier/manifest binding differs');
 if(item.id!==row.id||item.kind!==manifest.kind||!item.title?.trim()||!['draft','published'].includes(item.status)||!['mathematics','physics'].includes(item.domain))errors.push('Invalid current identity/kind/title/status/domain');
 if(!Number.isSafeInteger(item.dependency_level)||item.dependency_level!==graph.levels.get(row.id))errors.push('Source numeric dependency level differs');
 if(manifest.domain!==undefined&&manifest.domain!==item.domain)errors.push('Manifest/source domain differs');
 if(errors.length)failures.push({id:row.id,errors});
 results.push({...row,verdict:'format-metadata-pass',formatting:{verdict:'pass',evidence:`${archive}: current read-only normative precheck logs, real YAML/KaTeX renderer, and exact normative proof-layout renderer; original unmarked runtime conventions retained.`},metadata:{verdict:'pass',evidence:`${archive}/metadata.json plus direct exact source/manifest identity, kind, domain, valid publication-status and dependency-level bindings checked in the native request order. Current scoped class/dependency metadata checked with the native validator; outside suppliers retained as context.`}});
}
verifyInputs();
const reviewedAt=new Date().toISOString(),report={run,attempt:request.attempt,scope:'formatting-metadata-only',reviewStartedAt:started,reviewedAt,preparation_script:{path:import.meta.filename,sha256:sha(readFileSync(import.meta.filename))},checks,layout_items:layout.length,items:requestedIds,failures,scientific_acceptance:false,policy_migration:false};
writeFileSync(join(archive,'report.json'),JSON.stringify(report,null,2)+'\n');
if(failures.length){console.log(JSON.stringify({passed:false,failures:failures.length,report:join(archive,'report.json')}));process.exitCode=1;}
else{const receipt={version:2,recertificationScope:'formatting-metadata-only',attempt:request.attempt,snapshotSha256:snapshot.sha256,reviewer:'/root',writersDrained:true,writerScopes:[],reviewStartedAt:started,reviewedAt,items:snapshot.items.map(row=>results.find(checked=>checked.id===row.id))};writeFileSync(join(archive,'receipt.proposed.json'),JSON.stringify(receipt,null,2)+'\n');
 if(process.argv.includes('--write-receipt')){verifyInputs();const target=join(stateDir,'owner-gate-receipt.json'),temp=`${target}.${process.pid}.tmp`;if(existsSync(target))writeFileSync(join(archive,'receipt.previous.json'),readFileSync(target));writeFileSync(temp,JSON.stringify(receipt,null,2)+'\n');renameSync(temp,target);}
 console.log(JSON.stringify({passed:true,items:ids.size,receipt:join(archive,'receipt.proposed.json'),written:process.argv.includes('--write-receipt')}));}
