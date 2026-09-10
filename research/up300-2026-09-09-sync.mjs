// Root-only reconciliation of agent verdicts; never generates mathematical verdicts.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {spawnSync} from 'node:child_process';
const {structuredPatch}=createRequire(import.meta.url)('diff');
const path='research/published-consumer-supplier-ledger.md';
const old=fs.readFileSync(path,'utf8');
const marker='<!-- phase3-classification-index:start -->';
if(!old.includes(marker))throw Error('Missing index');
let [prefix,index]=old.split(marker);
const assignment=JSON.parse(fs.readFileSync('research/up300-2026-09-09-assignments.json'));
const results=[];
for(const group of assignment.groups){
 const file=`research/up300-2026-09-09-sol-${group.agent}.json`;
 if(!fs.existsSync(file))continue;
 const doc=JSON.parse(fs.readFileSync(file));
 if(doc.agent!==group.agent)throw Error('Agent mismatch');
 for(const row of doc.results){
  if(!group.items.some(x=>x.id===row.id)||!['clear','U-C'].includes(row.disposition))throw Error('Invalid result '+row.id);
  const sha=createHash('sha256').update(fs.readFileSync(`items/${row.id}.md`)).digest('hex');
  if(sha!==row.sha256){
   const line=index.match(new RegExp('^\\| `'+row.id+'` \\| .*$', 'm'));
   const headings=line?[...index.slice(0,line.index).matchAll(/^### (A-P|A-R|U-P|U-C) —|^### (Bounded no-repair-needed dispositions)/gm)]:[];
   const current=headings.at(-1)?.[1];
   if(!['A-R','A-P'].includes(current))throw Error('Stale receipt; reconcile manually: '+row.id);
   // Preserve historical scan evidence; a later root audit owns current bytes.
  }
  results.push({...row,agent:group.agent});
 }
}
if(new Set(results.map(x=>x.id)).size!==results.length)throw Error('Duplicate result');
const moved=[];
for(const r of results){
 const re=new RegExp('^\\| `'+r.id+'` \\| .*\\n','m');
 const match=index.match(re);if(!match)throw Error('Missing index row '+r.id);
 const priorHeadings=[...index.slice(0,match.index).matchAll(/^### (A-P|A-R|U-P|U-C) —|^### (Bounded no-repair-needed dispositions)/gm)];
 const previous=priorHeadings.at(-1)?.[1]??'clear';
 if(['A-P','A-R'].includes(previous))continue; // Later root repair/audit supersedes scan.
 if(previous===r.disposition)continue;
 if(previous!=='U-P'&&!match[0].includes('2026-09-09 scan'))throw Error('Conflicting prior disposition '+r.id);
 index=index.replace(re,'');
 const heading=r.disposition==='clear'?'### Bounded no-repair-needed dispositions':'### U-C —';
 const start=index.indexOf(heading);if(start<0)throw Error('Missing table');
 const separator=index.indexOf('|---|---|',start);if(separator<0)throw Error('Missing separator');
 const at=index.indexOf('\n',separator)+1;
 const verdict=r.disposition==='clear'?'Free of defects within item/used-interface scan; no repair':'Confirmed defect; repair audit pending';
 index=index.slice(0,at)+`| \`${r.id}\` | 2026-09-09 scan, Sol ${r.agent}: ${verdict}. Exact evidence and suppliers in the dated scan evidence above. |\n`+index.slice(at);
 moved.push(r.id);
}
const counts={'U-P':0,'U-C':0,'A-R':0,'A-P':0,clear:0},ids=new Set();let group;
for(const line of index.split('\n')){
 const h=line.match(/^### (A-P|A-R|U-P|U-C) —/);if(h)group=h[1];
 if(line.startsWith('### Bounded no-repair-needed'))group='clear';
 const m=line.match(/^\| `([^`]+)` \|/);if(m&&group){if(ids.has(m[1]))throw Error('Duplicate index');ids.add(m[1]);counts[group]++;}
}
const originalIds=[...old.split(marker)[1].matchAll(/^\| `([^`]+)` \|/gm)].map(m=>m[1]);
if(ids.size!==originalIds.length)throw Error('Changed index population');
for(const k of ['U-P','U-C','A-R','A-P'])index=index.replace(new RegExp('(^\\| '+k+' \\| [^|]+ \\| )\\d+( \\|)','m'),(_,a,b)=>a+counts[k]+b);
index=index.replace(/\d+ further reference-pool items have bounded no-repair-needed dispositions\nbelow, outside these four active defect classes\. Thus the four queues contain\n\d+ items and the expanded reference pool contains \d+ unique items\./,`${counts.clear} further reference-pool items have bounded no-repair-needed dispositions\nbelow, outside these four active defect classes. Thus the four queues contain\n${ids.size-counts.clear} items and the expanded reference pool contains ${ids.size} unique items.`);
const evidence='<!-- up300-2026-09-09-evidence:start -->\n## Dated U-P300 scan evidence — 2026-09-09\n\n'+
 `Reconciled ${results.length}/300 results: ${results.filter(r=>r.disposition==='clear').length} clear, ${results.filter(r=>r.disposition==='U-C').length} confirmed defective pending repair audit. Later A-R/A-P dispositions supersede scan findings.\n\n`+
 results.map(r=>`### ${r.id} — ${r.disposition}\n\nSol ${r.agent}; scanned SHA-256: \`${r.sha256}\`.\n\nScope: ${r.scope}\n\nFindings:\n\n${r.findings.map(x=>'- '+x).join('\n')}\n\nPublished interfaces: ${r.published_dependencies_checked.join('; ')||'none'}.\n\nImplicit dependencies: ${r.implicit_dependencies.join('; ')||'none'}.\n\nPhase-2 suppliers: ${r.phase2_suppliers.join('; ')||'none required/identified'}.\n\nRepair strategy: ${r.repair_strategy||'No repair required within scan scope.'}\n\nSource reading: ${r.source_reads.map(x=>x.url+' — '+x.locator).join('; ')||'No unfamiliar mathematics required new source research.'}\n\nLimitations: ${r.limitations}\n`).join('\n')+'\n<!-- up300-2026-09-09-evidence:end -->\n\n';
if(prefix.includes('<!-- up300-2026-09-09-evidence:start -->'))prefix=prefix.replace(/<!-- up300-2026-09-09-evidence:start -->[\s\S]*?<!-- up300-2026-09-09-evidence:end -->\n\n/,()=>evidence);else prefix+=evidence;
const next=prefix+marker+index;
if(process.argv.includes('--apply')&&next!==old){
 if(fs.readFileSync(path,'utf8')!==old)throw Error('Ledger changed during reconciliation');
 const hunks=structuredPatch(path,path,old,next,'','',{context:3}).hunks;
 const patch='*** Begin Patch\n*** Update File: '+path+'\n'+hunks.map(h=>'@@\n'+h.lines.join('\n')+'\n').join('')+'*** End Patch';
 const applied=spawnSync('apply_patch',[],{input:patch,encoding:'utf8',maxBuffer:4000000});
 if(applied.status!==0)throw Error(applied.stdout+applied.stderr);
}
console.log(JSON.stringify({completed:results.length,moved,counts,unique:ids.size}));
