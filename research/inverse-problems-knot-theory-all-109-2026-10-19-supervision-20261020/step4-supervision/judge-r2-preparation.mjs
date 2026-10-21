// Root executes only after the native pre-battery hold and all reviews close.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {frontierInputs} from '/home/lazyinspirit/Projects/prestige-math-library/tools/owner-gate-supervision.mjs';
import {dependencyLevels} from '/home/lazyinspirit/Projects/prestige-math-library/tools/item-dependency-levels.mjs';
import {yaml} from '/home/lazyinspirit/Projects/prestige-math-library/tools/pathway-lib.mjs';
import {splitFrontmatter} from '/home/lazyinspirit/Projects/prestige-math-library/tools/step6-lib.mjs';
const root=process.cwd(),run='inverse-problems-knot-theory-all-109-2026-10-19',stateDir=join(root,'.autopilot',run),ctx={repo:root,run,stateDir};
const state=JSON.parse(readFileSync(join(stateDir,'state.json'))),request=JSON.parse(readFileSync(join(stateDir,'owner-gate-request.json')));
if(!process.argv.includes('--all-reviews-closed')||!state.paused||!request.stages.includes('4-judge'))throw Error('Actual Step4 judge native held boundary and explicit completed owner escalation review required');
const before=frontierInputs(ctx),graph=dependencyLevels(before.snapshot.pages),errors=[...graph.errors],rows=[];
if(!graph.items.size)errors.push('Empty frontier');
for(const[id,{item,page}]of [...graph.items].sort(([a],[b])=>graph.levels.get(a)-graph.levels.get(b)||a.localeCompare(b))){
 const path=`items/${id}.md`,raw=readFileSync(path,'utf8'),fm=yaml().parse(splitFrontmatter(raw).frontmatter);
 if(fm.id!==id||fm.kind!==item.kind||fm.title!==item.title||!['draft','published'].includes(fm.status)||fm.dependency_level!==graph.levels.get(id)||!Array.isArray(fm.deps)||JSON.stringify([...fm.deps].sort())!==JSON.stringify([...item.deps].sort()))errors.push(`Source/manifest metadata mismatch: ${id}`);
 rows.push({id,path,page:page.id,dependency_level:graph.levels.get(id),raw_sha256:createHash('sha256').update(raw).digest('hex')});
}
const out=`research/${run}-supervision-20261020/step4-supervision/judge-pre-battery-r2-${request.id}`;mkdirSync(out,{recursive:true});
writeFileSync(out+'/metadata-preparation.json',JSON.stringify({run,request_id:request.id,at:new Date().toISOString(),fingerprint:before.fingerprint,rows,errors,guards:before.guards,mathematical_review:false},null,2)+'\n');
if(errors.length)throw Error(`${errors.length} current metadata/ordering errors; see ${out}/metadata-preparation.json`);
const files=[...rows.map(r=>r.path),...before.snapshot.pages.map(p=>`library/${p.category}/${p.id}.md`)];
const command=['node','tools/rendercheck.mjs',...files],render=spawnSync(command[0],command.slice(1),{encoding:'utf8',maxBuffer:32*1024*1024});
writeFileSync(out+'/rendercheck.txt',render.stdout+render.stderr);const after=frontierInputs(ctx);
writeFileSync(out+'/preparation.json',JSON.stringify({run,request_id:request.id,at:new Date().toISOString(),dependency_ordered_item_count:rows.length,page_count:before.snapshot.pages.length,renderer_command:command,renderer_exit_code:render.status,fingerprint_before:before.fingerprint,fingerprint_after:after.fingerprint,unchanged:before.fingerprint===after.fingerprint,mathematical_review:false,gate_battery_attempted:false,remaining:'Existing native owner recertification supplies actual layout/hash/metadata permission after successful preparation; native fullbattery stillowed.'},null,2)+'\n');
if(render.status!==0||before.fingerprint!==after.fingerprint)throw Error('Actual render failed or inputs changed; no gate permission issued');console.log(JSON.stringify({preparation:out,items:rows.length,pages:before.snapshot.pages.length,render_exit:render.status,current_inputs_unchanged:true}));
