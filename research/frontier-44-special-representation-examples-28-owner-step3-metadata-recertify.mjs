// Run-local pre-gate pass: metadata and hashes only, never a mathematical audit.
import {readFileSync,writeFileSync,existsSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {loadStep3,itemHash,scopeHash,checkStep3} from '../tools/step3-decisions.mjs';
import {dependencyLevels,orderedItems} from '../tools/item-dependency-levels.mjs';
const run='frontier-44-special-representation-examples-28', root=process.cwd();
const [phase,output]=process.argv.slice(2);
if(!['scope','final'].includes(phase)||!output?.startsWith(`research/${run}-`)||existsSync(output))
  throw Error('Specify scope/final and a fresh run-local report path');
const state=JSON.parse(readFileSync(`.autopilot/${run}/state.json`,'utf8'));
if(state.run!==run||!state.paused)throw Error('Matching run must be paused');
// State may retain authentic reservations the stopped controller never launched.
// Process discovery and terminal receipts distinguish those from actual writers.
const ps=spawnSync('ps',['-eo','comm,args'],{encoding:'utf8'});
if(ps.status!==0)throw Error('Native writer discovery failed');
if(ps.stdout.split('\n').some(line=>/^\s*node\s/.test(line)
  && /(?:^|\s)(?:\S*\/)?tools\/dispatch\.mjs(?:\s|$)/.test(line)
  && line.includes(`--run ${run}`)))throw Error('Actual native writer remains');
const events=readFileSync(`.autopilot/${run}/events.jsonl`,'utf8').split('\n').filter(Boolean).map(JSON.parse);
for(const [key,d] of Object.entries(state.dispatches)){
  if(d.endedAt)continue;
  const terminal=`research/${run}-dispatch/${d.role}-${d.label}.result.json`;
  if(existsSync(terminal)){
    const result=JSON.parse(readFileSync(terminal,'utf8'));
    if(result.run===run&&result.role===d.role&&result.label===d.label&&result.ended_at
      && Number.isInteger(result.exit_code))continue;
  }
  const reserved=events.some(e=>e.type==='dispatch'&&e.stage===d.stage&&e.label===d.label&&e.role===d.role&&e.attempt===d.attempt);
  const launched=events.some(e=>e.type==='exec'&&(e.label===d.label
    ||typeof e.command==='string'&&e.command.includes(`--label ${d.label}`)));
  if(d.stage!=='3b-author'||!reserved||launched)throw Error(`Unresolved real dispatch: ${key}`);
}
const sha=b=>createHash('sha256').update(b).digest('hex');
const paths=readdirSync('research').filter(p=>new RegExp(`^${run}-batch-\\d+\\.(pages|coverage)\\.json$`).test(p)).map(p=>`research/${p}`);
const guards=paths.map(path=>({path,sha256:sha(readFileSync(path))}));
const snapshot=loadStep3(root,run);
if(snapshot.pairs.size!==50||snapshot.pages.length!==100||snapshot.pages.some(p=>!p.items?.length))
  throw Error('Current original50-pair inventory must be complete and nonempty');
const closure=checkStep3(snapshot,phase);
if(!closure.closed)throw Error(JSON.stringify(closure.work));
const levels=dependencyLevels(snapshot.pages);
if(levels.errors.length)throw Error(levels.errors.join('\n'));
const rows=[];
for(const {id,item,page,level} of orderedItems(snapshot.pages)){
  if(!item.kind||!item.title?.trim()||!Array.isArray(item.deps))throw Error(`Malformed metadata: ${id}`);
  const canonical=`items/${id}.md`;
  if(!item.statement?.trim()&&!existsSync(canonical))throw Error(`Missing statement carrier: ${id}`);
  if(phase==='final'&&!existsSync(canonical))throw Error(`Missing authored item: ${id}`);
  if(!item.strategy?.trim()&&!existsSync(canonical)){
    const notes=`research/${run}-batch-${snapshot.items.get(id).page.batch}.notes.md`;
    if(!existsSync(notes)||!readFileSync(notes,'utf8').trim())throw Error(`Missing strategy carrier: ${id}`);
    if(!guards.some(g=>g.path===notes))guards.push({path:notes,sha256:sha(readFileSync(notes))});
  }
  rows.push({id,page,dependency_level:level,current_input_sha256:itemHash(snapshot,id)});
}
const scopes=[...snapshot.pairs.keys()].map(page=>({page,sha256:scopeHash(snapshot,page)}));
for(const g of guards)if(sha(readFileSync(g.path))!==g.sha256)throw Error(`Carrier drift: ${g.path}`);
const fresh=loadStep3(root,run);
if(fresh.items.size!==rows.length||!checkStep3(fresh,phase).closed)throw Error('Fresh inventory/decision closure changed');
for(const row of rows)if(itemHash(fresh,row.id)!==row.current_input_sha256)throw Error(`Fresh input drift: ${row.id}`);
for(const row of scopes)if(scopeHash(fresh,row.page)!==row.sha256)throw Error(`Fresh scope drift: ${row.page}`);
const report={version:1,run,at:new Date().toISOString(),phase,subjects:rows.length,pages:100,
  mode:'dependency-ordered formatting/metadata/hash-only; existing decisions reused',
  dependency_ordered_pass:rows,scope_guards:scopes,manifest_guards:guards,
  mathematical_rereview:false,gate_attempt:false,engine_gate_stamps_written:false};
writeFileSync(output,JSON.stringify(report,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({subjects:rows.length,pages:100,report:output,mathematical_rereview:false}));
