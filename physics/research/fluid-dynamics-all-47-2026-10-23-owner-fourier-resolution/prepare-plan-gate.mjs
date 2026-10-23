import {readFileSync,writeFileSync,existsSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {validateDriftOwnerResolutions} from '../../tools/physics-support/drift-owner-resolutions.mjs';
const run='fluid-dynamics-all-47-2026-10-23',stateDir=`.physics-autopilot/${run}`,requestPath=`${stateDir}/owner-gate-request.json`;
const read=p=>JSON.parse(readFileSync(p)),hash=b=>createHash('sha256').update(b).digest('hex');
const request=read(requestPath),snapshot=request.snapshot,reviewStartedAt=new Date().toISOString();
if(snapshot.run!==run||snapshot.scopeKind!=='plan'||snapshot.items.length||snapshot.stages.some(s=>!['1-drift','1-drift-apply'].includes(s))||request.consumedAt)throw Error('Wrong current plan-only request');
function inputsCurrent(){for(const input of snapshot.inputs){const actual=existsSync(input.path)?hash(readFileSync(input.path)):null;if(actual!==input.sha256)throw Error('Stale gate input '+input.path);}}
inputsCurrent();const state=read(`${stateDir}/state.json`);if(Object.values(state.dispatches).some(d=>!d.endedAt))throw Error('Native writers not drained');
if(validateDriftOwnerResolutions(process.cwd(),run).resolved.size!==11)throw Error('Escalation resolution incomplete');
const spec=read('research/plan-spec.json'),canonical=new Map(spec.pages.map(p=>[p.id,p]));
const names=readdirSync('research').filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n));
const pages=names.flatMap(n=>read('research/'+n));if(names.length!==47||pages.length!==94||new Set(pages.map(p=>p.id)).size!==94)throw Error('Changed scope');
const ids=new Set(pages.map(p=>p.id));if(snapshot.pages.length!==94||snapshot.pages.some(id=>!ids.has(id)))throw Error('Wrong request page selection');
const pending=[];
for(const p of pages){
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.id)||!['A','B'].includes(p.kind)||!['fluid-dynamics','fluid-dynamics-mathematics'].includes(p.category)||p.library!==(p.category==='fluid-dynamics'?'physics':'mathematics')||!p.title?.trim()||!Number.isFinite(p.order)||!Array.isArray(p.items)||p.items.length)throw Error('Invalid current planning row '+p.id);
 const c=canonical.get(p.id);if(!c||c.kind!==p.kind||c.category!==p.category||c.library!==p.library||c.order!==p.order||c.companion!==p.companion)throw Error('Wrong plan identity '+p.id);
 const partner=canonical.get(p.companion);if(!partner||partner.companion!==p.id||partner.kind===p.kind)throw Error('Wrong companion '+p.id);
 for(const row of [p,c]){if(!Array.isArray(row.requires)||new Set(row.requires).size!==row.requires.length)throw Error('Bad prerequisite list '+p.id);for(const id of row.requires){const supplier=canonical.get(id);if(!supplier||supplier.order>=row.order)throw Error('Forward or absent prerequisite '+p.id+' -> '+id);}}
 if(JSON.stringify(p.requires)!==JSON.stringify(c.requires)){
  if(p.id!=='fd-s01'||JSON.stringify(c.requires.filter(id=>id!=='orthonormal-bases-parseval-and-fourier-series'))!==JSON.stringify(p.requires)||snapshot.stages.includes('1-drift-apply'))throw Error('Unresolved manifest difference '+p.id);
  pending.push('fd-s01: accepted Fourier page edge awaits native drift materialization');
 }
 if(!existsSync(c.scaffold))throw Error('Missing controlling scaffold '+p.id);
}
inputsCurrent();if(read(requestPath).attempt!==request.attempt)throw Error('Request changed');
const formatting=`Parsed all 47 current manifest JSON files and canonical plan; checked 94 unique A/B rows, nonempty titles, valid IDs, arrays, paired page structure and existing controlling scaffold. No authored item or page body is represented as checked.`;
const metadata=`Checked all 94 current A/B identity, category/library, companion, order and prerequisite metadata in dependency order against the canonical plan; all prerequisite targets exist and precede consumers. Eleven native drift holds have current root-owned resolutions. ${pending.length?pending.join('; ')+'.':'Current manifest prerequisites match the corrected canonical plan.'} All request inputs rehashed unchanged; native writers drained.`;
const receipt={version:2,recertificationScope:'formatting-metadata-only',attempt:request.attempt,snapshotSha256:snapshot.sha256,reviewer:'/root',writersDrained:true,writerScopes:[],reviewStartedAt,reviewedAt:new Date().toISOString(),items:[],planChecks:{formatting:{verdict:'pass',evidence:formatting},metadata:{verdict:'pass',evidence:metadata}}};
writeFileSync(`${stateDir}/owner-gate-receipt.json`,JSON.stringify(receipt,null,2)+'\n');
writeFileSync(`research/${run}-owner-fourier-resolution/plan-check-${request.attempt}.json`,JSON.stringify({version:1,run,request_attempt:request.attempt,checks:receipt.planChecks,pages:94,pairs:47,mathematical_review:false,native_battery_pass:false,at:receipt.reviewedAt},null,2)+'\n');console.log(JSON.stringify({attempt:request.attempt,stages:snapshot.stages,checked_pages:94,pending_native_sync:pending}));
