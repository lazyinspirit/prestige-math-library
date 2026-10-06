import fs from 'node:fs';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {loadStep3,itemHash} from '../../tools/step3-decisions.mjs';
import {recordStep1,step1Decision} from '../../tools/step1-decisions.mjs';
const run='frontier-40-geometry-braids-rep-27',base=`research/${run}`,dir=`${base}-owner-group-actions`;
const commands=[['tools/manifest-deps.mjs',`${base}-batch-15.pages.json`],['tools/content-policy.mjs','--manifest-only',`${base}-batch-13.pages.json`,`${base}-batch-15.pages.json`],['tools/coverage-checklist.mjs',`${base}-batch-15.coverage.json`,'--require-destination'],['tools/source-fetch-check.mjs','--coverage',`${base}-batch-15.coverage.json`],['tools/item-dependency-levels.mjs','check','--run',run]];
const checks=commands.map(args=>{const r=spawnSync('node',args,{encoding:'utf8'});return {command:['node',...args].join(' '),exit_code:r.status,output:r.stdout+r.stderr}});
if(checks.slice(0,4).some(r=>r.exit_code!==0)||checks[4].output.split('\n').some(l=>l.startsWith('ERROR')&&JSON.parse(fs.readFileSync(`${base}-batch-15.pages.json`)).flatMap(p=>p.items).some(i=>l.includes(i.id))))throw Error('Scoped checks failed');
const pages=JSON.parse(fs.readFileSync(`${base}-batch-15.pages.json`));const rows=pages.flatMap(p=>p.items).sort((a,b)=>a.dependency_level-b.dependency_level);const held=['lem-projective-space-action-from-linear-representation','lem-orbit-map-faithfully-flat-and-orbit-locally-closed'];
// Refresh all changed dependency closures, keeping the two owner holds until last.
for(const i of [...rows.filter(i=>!held.includes(i.id)),...rows.filter(i=>held.includes(i.id))])recordStep1(process.cwd(),{run,item:i.id,decision:'ready',owner:true,dependencies:i.deps,reason:`Owner-delegated Step1 source/interface repair completed on stable batch15 manifest. Full mathematical strategy and exact suppliers reviewed; source-reading.json and review.md in ${dir} record quotient-convention, nonreduced stabilizer, residue-field torsor, choice and orbit descent reconciliation. Local manifest/policy/source/coverage checks passed; normal author/review gates remain required.`});
const s=loadStep3(process.cwd(),run),readiness=rows.map(i=>({id:i.id,dependency_level:i.dependency_level,closed:step1Decision(s,i.id).closed,closure_sha256:itemHash(s,i.id,i.deps)}));if(readiness.some(i=>!i.closed))throw Error('Readiness not current');
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const paths=[`${base}-batch-15.pages.json`,`${base}-batch-15.coverage.json`,`${base}-batch-15.notes.md`,`${base}-batch-15.cross-batch-dependencies.json`,`${dir}/source-reading.json`,`${dir}/review.md`];
fs.writeFileSync(`${dir}/checks.json`,JSON.stringify({run,recorded_at:new Date().toISOString(),scope:'Step1 batch15 local repair; no proof audit or native dispatch success',checks,readiness,carriers:paths.map(path=>({path,sha256:sha(path)}))},null,2)+'\n');
console.log(`batch15: ${readiness.length}/${readiness.length} current-ready; scoped checks passed; other batch level errors retained`);
