// Run-specific owner authoring-readiness closure, never an independent review.
import {readFileSync,existsSync,mkdirSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {recordStep1} from '../../tools/physics-support/step1-decisions.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17';
if(existsSync(join(root,'research',run+'-owner-matrix-readiness-before','owner-current-checks.json')))throw Error('Readiness closure already recorded; use an explicit fresh amendment after new review');
const state=JSON.parse(readFileSync(join(root,'.physics-autopilot',run,'state.json')));
const dispatch=state.dispatches['1-scaffold:batch-36'];
if(!dispatch.endedAt||dispatch.lastExitOk!==true)throw Error('Native writer not successfully drained');
const pages=JSON.parse(readFileSync(join(root,'research',run+'-batch-36.pages.json')));
const targets=['lem-qsm-matrix-state-calculus','lem-qsm-finite-matrix-cstar-and-state-duality'];
const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const checks=targets.map(id=>{
 const item=readItem(join(root,'items',id+'.md')),manifest=pages.flatMap(p=>p.items).find(x=>x.id===id);
 if(!manifest||item.id!==id||item.kind!==manifest.kind||item.title!==manifest.title||item.domain!==manifest.domain
 ||!equal([...item.deps].sort(),[...manifest.deps].sort())||!equal(item.dependency_roles,manifest.dependency_roles)
 ||!Number.isSafeInteger(item.dependency_level))throw Error('Current metadata mismatch: '+id);
 return {id,item,raw_sha256:createHash('sha256').update(item.raw).digest('hex')};
});
const dir=join(root,'research',run+'-owner-matrix-readiness-before');mkdirSync(dir,{recursive:true});
for(const check of checks){
 const old=join(root,'research',run+'-step1-'+check.id+'.json'),backup=join(dir,check.id+'.json');
 if(existsSync(old)&&!existsSync(backup))writeFileSync(backup,readFileSync(old));
 const row=recordStep1(root,{run,item:check.id,decision:'ready',owner:true,dependencies:check.item.deps,
 reason:'Current authored supplier proof and interface reviewed; identity, kind, title, domain, dependency roles and manifest dependencies match actual source. Scientific repair and actual focused format/render checks: research/'+run+'-owner-qsm-round2/resolution.json. Matrix Statement preserved; separate finite C-star/state-duality lemma supplies all missing finite clauses. Authoring readiness only; no independent review, publication or native gate pass. Full drained construction reconciliation remains required.'});
 console.log(JSON.stringify({item:row.item,decision:row.decision,sha256:row.sha256}));
}
writeFileSync(join(dir,'owner-current-checks.json'),JSON.stringify({run,recorded_at:new Date().toISOString(),qualification:'Actual scoped source/manifest metadata comparison plus referenced scientific-owner proof/format checks; no gate attempted.',items:checks.map(({id,raw_sha256})=>({id,raw_sha256}))},null,2)+'\n');
