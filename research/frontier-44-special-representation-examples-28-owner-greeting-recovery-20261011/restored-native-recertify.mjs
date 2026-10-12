import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {loadStep3,itemDecision,scopeDecision,itemHash,recordStep3,checkStep3} from '../../tools/step3-decisions.mjs';
import {dependencyLevels} from '../../tools/item-dependency-levels.mjs';

const run='frontier-44-special-representation-examples-28';
const root=process.cwd();
const out=`research/${run}-owner-greeting-recovery-20261011/restored-native-recertification`;
const authorityPath=process.argv[2];
if(!authorityPath) throw Error('Explicit sealed current whole-closure authority required');
const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const authority=JSON.parse(fs.readFileSync(authorityPath));
if(authority.run!==run||authority.remaining_genuine_mathematical_holds?.length||authority.unresolved_known_original_whole_hold_ids?.length) throw Error('Wrong authority run or unresolved holds');
if(authority.restored_current_reviews?.length!==3) throw Error('Require three genuine integrated review reports');
for(const marker of authority.restored_current_reviews) if(sha(marker.path)!==marker.sha256) throw Error(`Review report drift ${marker.path}`);
for(const marker of authority.current_integrated_carriers) if(sha(marker.path)!==marker.sha256) throw Error(`Current carrier drift ${marker.path}`);

const provenancePath=`research/${run}-owner-one-time-exhausted-exception-20261011/exception_ground_corner_constructor/final-provenance-eligibility.json`;
if(sha(provenancePath)!=='97779c80e9d4c165703269425d477ef33bb3fe513f8b96cd71fdb2fac12e9a34')throw Error('Provenance evidence changed');
const additions=new Map(JSON.parse(fs.readFileSync(provenancePath)).rows.filter(r=>r.origin_class==='postbaseline-addition').map(r=>[r.id,r]));
fs.mkdirSync(out,{recursive:true});
const s=loadStep3(root,run);
const graph=dependencyLevels(s.pages);
if(graph.errors.length||s.items.size!==875||s.pairs.size!==50) throw Error('Invalid current complete frontier');
const ids=[...s.items.keys()].sort((a,b)=>graph.levels.get(a)-graph.levels.get(b)||a.localeCompare(b));
const fmtPath=`${out}/dependency-ordered-format-check.json`;
const fmtFd=fs.openSync(fmtPath,'w');
const fmt=spawnSync(process.execPath,['tools/tsx-run.mjs','tools/precheck.mts','--json',...ids.map(id=>`items/${id}.md`)],{cwd:root,encoding:'utf8',stdio:['ignore',fmtFd,'pipe'],maxBuffer:32*1024*1024});
fs.closeSync(fmtFd);
if(fmt.status!==0)throw Error(`Frontier format check failed: ${(fmt.stderr||'').slice(-1200)}`);
const fmtResult=JSON.parse(fs.readFileSync(fmtPath,'utf8'));
if(fmtResult.summary.files!==ids.length||fmtResult.summary.failed!==0)throw Error('Incomplete frontier formatting pass');

const carriers=new Map(ids.map(id=>[`items/${id}.md`,sha(`items/${id}.md`)]));
for(const p of s.pages) carriers.set(`research/${run}-batch-${p.batch}.pages.json`,sha(`research/${run}-batch-${p.batch}.pages.json`));
const scopes=[],items=[],retained=[],beforeHashes=[];
for(const page of s.pairs.keys()){
  if(scopeDecision(s,page).closed)continue;
  const prior=`research/${run}-step3a-owner-${page}.json`;
  if(fs.existsSync(prior))fs.copyFileSync(prior,`${out}/before-scope-${page}.json`);
  scopes.push(recordStep3(root,{run,phase:'scope',page,owner:true,decision:'proceed',reason:'The approved mathematical scope is preserved by the actual reviewed final repairs and exact canonical metadata reconciliation'},s));
}
for(const id of ids){
  const current=itemDecision(s,id),hash=itemHash(s,id);
  beforeHashes.push({id,sha256:hash});
  if(current.closed){retained.push({id,sha256:hash});continue;}
  const prior=current.decision??(fs.existsSync(`research/${run}-step3b-review-${id}.json`)?JSON.parse(fs.readFileSync(`research/${run}-step3b-review-${id}.json`)):null);
  const addition=!prior?additions.get(id):null;
  if(addition){
    const author=addition.latest_covering_native_author;
    if(addition.late_own_item||!addition.own_file_candidates.length||!author.author_artifacts_ok||sha(addition.item_file.path)!==addition.item_file.raw_sha256||sha(author.evidence.path)!==author.evidence.raw_sha256)throw Error(`Native addition origin changed ${id}`);
  }else if(!prior||!['accept','repaired','hold'].includes(prior.decision))throw Error(`Missing genuine retained verdict for ${id}`);
  if(prior?.decision==='hold'&&id!=='cex-specializing-v-to-one-forgets-graded-decomposition-information'&&!authority.resolved_item_holds.includes(id))throw Error(`Unresolved hold ${id}`);
  items.push(recordStep3(root,{run,phase:'item',item:id,owner:true,decision:'repaired',reason:addition?'Rebound the genuinely native-authored supplier addition to its current approved proof inputs while preserving its authenticated creation origin':id==='cex-specializing-v-to-one-forgets-graded-decomposition-information'?'The same lead proved the actual full counterexample and its current qualified prerequisites and bound the complete integrated argument':'Bound retained acceptance and the actual completed supplier and affected consumer repairs to stable current proof inputs and canonical metadata',defects:['final-proof-input-and-metadata-currency']},s));
}
for(const[p,h]of carriers)if(sha(p)!==h)throw Error(`Midpass content mutation ${p}`);
fs.writeFileSync(`${out}/writer-pass.json`,JSON.stringify({version:1,run,at:new Date().toISOString(),authority:{path:authorityPath,raw_sha256:sha(authorityPath)},dependency_order:ids,scope_writes:scopes,item_writes:items,retained,final_expected_hashes:beforeHashes,stable_carriers:[...carriers].map(([path,raw_sha256])=>({path,raw_sha256})),history_preserved:true,counters_reset:false,gate_attempt:false},null,2)+'\n');
console.log(JSON.stringify({phase:'writer-pass',scope_writes:scopes.length,item_writes:items.length,retained:retained.length}));
const fresh=loadStep3(root,run);
if(JSON.stringify([...fresh.items.keys()].sort())!==JSON.stringify([...s.items.keys()].sort()))throw Error('Inventory drift');
for(const{id,sha256}of beforeHashes)if(itemHash(fresh,id)!==sha256)throw Error(`Fresh current input changed ${id}`);
const check=checkStep3(fresh,'final');
fs.writeFileSync(`${out}/fresh-complete-frontier-check.json`,JSON.stringify({version:1,run,at:new Date().toISOString(),authority:{path:authorityPath,raw_sha256:sha(authorityPath)},...check},null,2)+'\n');
console.log(JSON.stringify({phase:'fresh-full-frontier',items:check.items,accepted:check.accepted,pairs:check.pairs,closed:check.closed,work:check.work.length}));
if(!check.closed)throw Error('Fresh full frontier not closed');
