import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import { precheckSource } from '../../tools/physics-support/paths.mjs';
const { proposedPrecheck }=await import(pathToFileURL(precheckSource()).href);
const ids=['lem-nrqm-composites-separable-partial-trace','thm-nrqm-composites-infinite-schmidt-decomposition','lem-nrqm-composites-continuous-measurable-kraus-instrument'];
const out=[];
for(const id of ids){
 const md=fs.readFileSync(`items/${id}.md`,'utf8');
 const text=md.split('\n## Facts & Assumptions\n').at(-1)!.replace(/^## .*$/gm,'').trim();
 const labels=[...text.matchAll(/^(\d+\.\d+) /gm)].map(x=>x[1]);
 const mapping=Object.fromEntries(labels.map((s,k)=>[s,`${k+1}.1`]));
 const proposed=text.replace(/\b\d+\.\d+\b/g,s=>mapping[s]??s);
 const flat=proposed.replace(/^(\d+\.\d+ [\s\S]*?)(?=^\d+\.\d+ |$$(?![\s\S]))/gm,s=>s.replace(/\n+/g,' ').trim()+'\n\n');
 // Reliably collapse each complete numbered row to one paragraph/physical line,
 // keeping the first fact declarations unchanged.
 const first=proposed.search(/^\d+\.\d+ /m);
 const rows=proposed.slice(first).split(/\n\n(?=\d+\.\d+ )/);
 const normalized=proposed.slice(0,first)+rows.map(s=>s.replace(/\s*\n\s*/g,' ')).join('\n\n');
 const r=proposedPrecheck(normalized,'direct');
 out.push({id,mapping,memory_candidate:{error:r.err??null,repaired:!!r.repaired},format_only:'Sequential source-order phase numbers, references changed simultaneously; numbered paragraphs joined without changing words or formulas'});
}
fs.writeFileSync('research/physics-cm-qm-gr-79-2026-10-11-qm-composites-repair/memory-format-diagnostic.json',JSON.stringify(out,null,2)+'\n');
console.log(JSON.stringify(out,null,2));
