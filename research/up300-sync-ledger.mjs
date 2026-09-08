// Apply only agent-authored U-P300 verdicts to the canonical ledger.
// No mathematical classification is inferred. Use --apply for a locked update.
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const {structuredPatch}=createRequire(import.meta.url)('diff');
const apply=process.argv.includes('--apply');
if(apply&&!process.argv.includes('--locked')){
 const r=spawnSync('flock',['-x','/tmp/prestige-up300-ledger.lock',process.execPath,fileURLToPath(import.meta.url),'--apply','--locked'],{stdio:'inherit'});
 process.exit(r.status??1);
}
const path='research/published-consumer-supplier-ledger.md',old=readFileSync(path,'utf8');
const assignment=JSON.parse(readFileSync('research/up300-sol-scan-assignments.json'));
const all=[];
for(const g of assignment.groups){
 const p=`research/up300-sol-agent-${g.agent}.json`;if(!existsSync(p))continue;
 const r=JSON.parse(readFileSync(p,'utf8'));if(r.agent!==g.agent)throw Error('agent mismatch');
 for(const x of r.results){if(!g.items.some(y=>y.id===x.id)||!['clear','U-C'].includes(x.disposition))throw Error('Invalid result '+x.id);all.push({...x,agent:g.agent});}
}
if(new Set(all.map(x=>x.id)).size!==all.length)throw Error('duplicate result');
let t=old;const start=t.indexOf('<!-- phase3-classification-index:start -->');if(start<0)throw Error('index marker');
let prefix=t.slice(0,start),index=t.slice(start);const moved=[];const stale=[];
for(const r of all){
 const hash=createHash('sha256').update(readFileSync(`items/${r.id}.md`)).digest('hex');if(hash!==r.sha256){stale.push(r.id);continue;}
 const row=new RegExp('^\\| `'+r.id+'` \\| .*\\n','m');const m=index.match(row);if(!m)throw Error('No row '+r.id);
 const pos=index.indexOf(m[0]);
const before=index.slice(0,pos);const headings=[...before.matchAll(/^### (A-P|A-R|U-P|U-C) —|^### (Bounded no-repair-needed dispositions)/gm)];
const previous=headings.at(-1)?.[1]??'clear';
if(previous===r.disposition)continue;
if(!['U-P','U-C','clear'].includes(previous))throw Error('Manual reconciliation required for '+r.id);

 index=index.replace(row,'');
 const heading=r.disposition==='clear'?'### Bounded no-repair-needed dispositions':'### U-C —';
 const at=index.indexOf('|---|---|',index.indexOf(heading))+10;if(at<10)throw Error('table missing');
 const label=r.disposition==='clear'?'Free of defects within item/dependency-interface scan; no repair':'Confirmed defect; repair audit pending';
 const added=`| \`${r.id}\` | U-P300 Sol ${r.agent}: ${label}. Full findings, exact suppliers, sources and strategy in U-P300 scan evidence above. |\n`;
 index=index.slice(0,at)+added+index.slice(at);moved.push(r.id);
}
if(stale.length)throw Error('Changed scanned bytes; rescan before reconciliation: '+stale.join(', '));
const counts={'U-P':0,'U-C':0,'A-R':0,'A-P':0,clear:0};let kind;
const seen=new Set();for(const l of index.split('\n')){const h=l.match(/^### (A-P|A-R|U-P|U-C) —/);if(h)kind=h[1];if(l.startsWith('### Bounded no-repair-needed'))kind='clear';const m=l.match(/^\| `([^`]+)` \|/);if(m&&kind){if(seen.has(m[1]))throw Error('duplicate index '+m[1]);seen.add(m[1]);counts[kind]++;}}
if(seen.size!==2185)throw Error('index size '+seen.size);
for(const k of ['U-P','U-C','A-R','A-P'])index=index.replace(new RegExp('(^\\| '+k+' \\| [^|]+ \\| )\\d+( \\|)','m'),'$1'+counts[k]+'$2');
index=index.replace(/(?:Two further|\d+ further) reference-pool items have bounded no-repair-needed dispositions\nbelow, outside these four active defect classes\. Thus the four queues contain\n\d+ items and the reconciled reference pool still contains 2185 unique items\./,`${counts.clear} further reference-pool items have bounded no-repair-needed dispositions\nbelow, outside these four active defect classes. Thus the four queues contain\n${2185-counts.clear} items and the reconciled reference pool still contains 2185 unique items.`);
const accepted=all.filter(r=>!stale.includes(r.id));
const evidence='<!-- up300-evidence:start -->\n## U-P300 scan evidence\n\n'+accepted.map(r=>`### ${r.id} — ${r.disposition}\n\nSol ${r.agent}; scanned SHA-256: \`${r.sha256}\`.\n\nScope: ${r.scope}\n\nFindings:\n\n${r.findings.map(x=>'- '+x).join('\n')}\n\nPublished interfaces checked: ${r.published_dependencies_checked.join('; ')||'none'}.\n\nImplicit dependencies: ${r.implicit_dependencies.join('; ')||'none identified'}.\n\nPhase-2 suppliers: ${r.phase2_suppliers.join('; ')||'none required/identified'}.\n\nRepair strategy: ${r.repair_strategy||'No repair required within the scanned scope.'}\n\nSource reading: ${r.source_reads.map(s=>s.url+' — '+s.locator).join('; ')||'No unfamiliar result required new source research.'}\n\nLimitations: ${r.limitations}\n`).join('\n')+'\n<!-- up300-evidence:end -->\n\n';
if(prefix.includes('<!-- up300-evidence:start -->'))prefix=prefix.replace(/<!-- up300-evidence:start -->[\s\S]*?<!-- up300-evidence:end -->\n\n/,evidence);else prefix+=evidence;
const progress='Reconciled U-P300 results: '+accepted.length+'/300 ('+accepted.filter(r=>r.disposition==='clear').length+' clear, '+accepted.filter(r=>r.disposition==='U-C').length+' confirmed defective). '+(300-accepted.length)+' remain.';
if(prefix.includes('Reconciled U-P300 results:'))prefix=prefix.replace(/^Reconciled U-P300 results:.*$/m,progress);else prefix=prefix.replace('## U-P300 Sol scan — active, 2026-09-08','## U-P300 Sol scan — active, 2026-09-08\n\n'+progress);
if(accepted.length===300)prefix=prefix.replace('## U-P300 Sol scan — active, 2026-09-08','## U-P300 Sol scan — complete, 2026-09-08');
t=prefix+index;
// Generate only changed hunks; no direct repository writes.
const hunks=structuredPatch(path,path,old,t,'','',{context:3}).hunks;
const patch=t===old?null:'*** Begin Patch\n*** Update File: '+path+'\n'+hunks.map(h=>'@@\n'+h.lines.join('\n')+'\n').join('')+'*** End Patch';
if(apply&&patch){const r=spawnSync('apply_patch',[],{input:patch,encoding:'utf8',maxBuffer:4000000});if(r.status!==0){process.stderr.write(r.stdout+r.stderr);process.exit(r.status??1);}}
console.log(JSON.stringify({...(!apply?{patch}:{}),moved,stale,counts,completed:accepted.length}));

