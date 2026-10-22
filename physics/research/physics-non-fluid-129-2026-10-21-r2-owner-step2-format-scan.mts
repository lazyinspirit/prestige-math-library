// Read-only exact-frontier normative format observation; no gate or readiness assertion.
import {readFileSync,writeFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {precheckSource} from '../tools/physics-support/paths.mjs';
import {checkableText} from '../tools/physics-support/precheck-text.mjs';
import {readItem,NONPROOF_KINDS} from '../tools/physics-support/physics-content.mjs';
import {runPages,dependencyLevels} from '../tools/physics-support/item-dependency-levels.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',pages=runPages(process.cwd(),run),graph=dependencyLevels(pages),rows=[];
const {proposedPrecheck}=await import(pathToFileURL(precheckSource()).href);
for(const i of pages.flatMap(p=>p.items).sort((a,b)=>(graph.levels.get(a.id)??0)-(graph.levels.get(b.id)??0)||a.id.localeCompare(b.id))){
 const path=`items/${i.id}.md`,s=readItem(path),text=checkableText(s.raw);
 if(text===null||NONPROOF_KINDS.has(s.kind)||s.kind==='open-problem')continue;
 const r=proposedPrecheck(text,s.proof_strategy);
 if(r.err||r.repaired)rows.push({id:s.id,path,sha256:createHash('sha256').update(s.raw).digest('hex'),strategy:s.proof_strategy,...r});
}
const out=`research/${run}-owner-step2-root-adoption/format-scan.json`;writeFileSync(out,JSON.stringify({at:new Date().toISOString(),items:pages.flatMap(p=>p.items).length,graph_errors:graph.errors,rows},null,2)+'\n');console.log(JSON.stringify({out,issues:rows.length,errors:rows.filter(r=>r.err).length,repairs:rows.filter(r=>r.repaired).length}));
