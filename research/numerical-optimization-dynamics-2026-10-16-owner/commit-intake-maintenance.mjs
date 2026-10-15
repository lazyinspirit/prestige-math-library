// Commit only the already-recorded intake maintenance; preserve foreign staging
// and every byte of the working shared ledger. Not a native build transition.
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {recordedPublishedRepair} from '../../tools/published-repair-policy.mjs';
import {sharedWriteLock} from '../../tools/step5-shared-write-lock.mjs';
const root=process.cwd(), ledgerPath='research/published-consumer-supplier-ledger.md';
const runtime='.autopilot/numerical-optimization-dynamics-2026-10-16/intake-commit';
const reportPath='research/numerical-optimization-dynamics-2026-10-16-owner/intake-maintenance-commit.json';
const sha=b=>createHash('sha256').update(b).digest('hex');
function git(args,env={},input){const r=spawnSync('git',args,{env:{...process.env,...env},input,maxBuffer:256*1024*1024});if(r.status!==0)throw Error(`git ${args[0]}: ${r.error?.message??r.stderr.toString().slice(-2000)}`);return r.stdout;}
const olds=['numerical-analysis-48-2026-10-16','numerical-analysis-comprehensive-2026-10-16'];
const summaries=JSON.parse(fs.readFileSync(`research/${olds[0]}-owner-supplier-repair-summary.json`)).repairs;
const more=JSON.parse(fs.readFileSync(`research/${olds[1]}-owner-repair-checks/policy-results.json`));
const receipts=[...summaries,...more].map(row=>({receipt:row.receipt,record:JSON.parse(fs.readFileSync(row.receipt))}));
if(receipts.length!==23||new Set(receipts.map(r=>r.record.id)).size!==23)throw Error('expected 23 distinct recorded repairs');
let files=new Set([ledgerPath,'research/numerical-optimization-dynamics-2026-10-16-owner/commit-intake-maintenance.mjs']);
for(const {receipt,record} of receipts){files.add(receipt);files.add(record.before_file);files.add(`items/${record.id}.md`);files.add(`research/${record.run}-step3-published-claims.jsonl`);const check=recordedPublishedRepair(root,record.id,fs.readFileSync(`items/${record.id}.md`,'utf8'),receipt);if(!check.ok)throw Error(`${record.id}: ${check.reason}`);}
function addTree(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())addTree(p);else if(entry.isFile())files.add(p);else throw Error(`unexpected nonregular evidence ${p}`);}}
for(const dir of ['research/numerical-analysis-2026-10-16-supplier-intake',`research/${olds[1]}-owner-complex-repair`,`research/${olds[1]}-owner-repair-checks`,`research/${olds[1]}-intake/supplier-closure`])addTree(dir);
for(const p of [`research/${olds[0]}-owner-initial-claim-registration-original.jsonl`,`research/${olds[0]}-owner-initial-claim-registration-reconciliation.json`,`research/${olds[0]}-owner-supplier-repair-summary.json`]){if(!fs.existsSync(p))throw Error(`missing ${p}`);files.add(p);}
const workingLedger=fs.readFileSync(ledgerPath), working=workingLedger.toString('utf8');
const blocks=receipts.map(({record})=>{const a=`<!-- local-published-repair:${record.ledger_marker}:begin -->`,b=`<!-- local-published-repair:${record.ledger_marker}:end -->`;if(working.split(a).length!==2||working.split(b).length!==2)throw Error('ambiguous owned ledger marker');const inner=working.split(a)[1].split(b)[0];if(sha(inner)!==record.ledger_sha256)throw Error('ledger receipt mismatch');return a+inner+b+'\n';});
function append(base){const text=base.toString('utf8');for(const {record}of receipts)if(text.includes(`<!-- local-published-repair:${record.ledger_marker}:begin -->`))throw Error('owned repair already present in base');const addition=(text.endsWith('\n\n')?'':text.endsWith('\n')?'\n':'\n\n')+blocks.join('\n');return Buffer.concat([base,Buffer.from(addition)]);}
const head=git(['rev-parse','HEAD']).toString().trim(),branch=git(['symbolic-ref','HEAD']).toString().trim();if(branch!=='refs/heads/main')throw Error('expected main');
const indexPath=path.resolve(git(['rev-parse','--git-path','index']).toString().trim());const indexBefore=fs.readFileSync(indexPath), headLedger=git(['show',`${head}:${ledgerPath}`]),indexLedger=git(['show',`:${ledgerPath}`]);
const headProjection=append(headLedger),indexProjection=append(indexLedger);const guarded=new Map();
for(const p of files){if(p===ledgerPath)continue;const raw=fs.readFileSync(p);guarded.set(p,sha(raw));const indexed=spawnSync('git',['ls-files','--stage','-z','--',p],{maxBuffer:1024*1024});if(indexed.status!==0)throw Error('index lookup failed');if(indexed.stdout.length){const committed=spawnSync('git',['rev-parse',`${head}:${p}`],{encoding:'utf8'});const row=indexed.stdout.toString().split('\t')[0].split(' ');if(row[2]!=='0'||committed.status!==0||row[1]!==committed.stdout.trim())throw Error(`preexisting foreign staging on owned path ${p}`);}}
const outside=env=>git(['ls-files','--stage','-v','-z'],env).toString().split('\0').filter(Boolean).filter(r=>!files.has(r.split('\t').at(-1))).join('\0');
const outsideBefore=outside({});
if(!process.argv.includes('--apply')){console.log(JSON.stringify({mode:'inspect',head,owned_files:files.size,repairs:receipts.length,working_ledger_sha256:sha(workingLedger),foreign_index_sha256:sha(outsideBefore),all_current_repair_receipts_valid:true},null,2));process.exit(0);}
fs.mkdirSync(runtime,{recursive:true});const commitIndex=path.resolve(runtime,'commit.index'),newIndex=path.resolve(runtime,'next-user.index');
if(fs.existsSync(commitIndex))fs.unlinkSync(commitIndex);fs.copyFileSync(indexPath,newIndex);
const commitEnv={GIT_INDEX_FILE:commitIndex},userEnv={GIT_INDEX_FILE:newIndex};git(['read-tree',head],commitEnv);
const sourceRows=[];for(const p of files){if(p===ledgerPath)continue;const raw=fs.readFileSync(p),hash=git(['hash-object','-w','--stdin'],{},raw).toString().trim();sourceRows.push(`100644 ${hash}\t${p}\0`);}
for(const [env,projection] of [[commitEnv,headProjection],[userEnv,indexProjection]]){const hash=git(['hash-object','-w','--stdin'],{},projection).toString().trim();git(['update-index','-z','--index-info'],env,sourceRows.join('')+`100644 ${hash}\t${ledgerPath}\0`);}
if(outside(userEnv)!==outsideBefore)throw Error('prepared index changes foreign entries');
const tree=git(['write-tree'],commitEnv).toString().trim();const commit=git(['commit-tree',tree,'-p',head,'-m','Record scoped numerical prerequisite intake repairs']).toString().trim();
const owner='numerical-intake-maintenance-commit';if(!sharedWriteLock(root,'acquire',owner).acquired)throw Error('shared metadata busy');let held=false,refChanged=false;
try{
 const fd=fs.openSync(indexPath+'.lock','wx');held=true;try{fs.writeFileSync(fd,fs.readFileSync(newIndex));fs.fsyncSync(fd);}finally{fs.closeSync(fd);}
 if(sha(fs.readFileSync(indexPath))!==sha(indexBefore)||git(['rev-parse','HEAD']).toString().trim()!==head||git(['symbolic-ref','HEAD']).toString().trim()!==branch)throw Error('concurrent Git mutation');
 if(!fs.readFileSync(ledgerPath).equals(workingLedger))throw Error('working ledger changed');
 for(const [p,hash]of guarded)if(sha(fs.readFileSync(p))!==hash)throw Error(`owned input changed ${p}`);
 git(['update-ref','-m','scoped numerical intake maintenance',branch,commit,head]);refChanged=true;fs.renameSync(indexPath+'.lock',indexPath);held=false;
 if(outside({})!==outsideBefore||!fs.readFileSync(ledgerPath).equals(workingLedger))throw Error('outside preservation failed');
 fs.writeFileSync(reportPath,JSON.stringify({version:1,kind:'scoped-prebuild-maintenance-commit',commit,parent:head,tree,repairs:receipts.length,paths:[...files].sort(),working_ledger_preserved:true,foreign_index_preserved:true,foreign_index_sha256:sha(outsideBefore),head_ledger_base_sha256:sha(headLedger),index_ledger_base_sha256:sha(indexLedger),head_ledger_projection_sha256:sha(headProjection),index_ledger_projection_sha256:sha(indexProjection),method:'HEAD/index each receive only exact 23 owned marker blocks as suffix insertions; all other staged entries retained with flags; current working ledger left byte-identical. Private commit tree based on HEAD, never user staging.',native_coverage:false,tests_run:false},null,2)+'\n');console.log(JSON.stringify({commit,repairs:23,owned_files:files.size,foreign_index_preserved:true,working_ledger_preserved:true}));
}catch(e){if(refChanged)throw Error('Ref changed; inspect before retry: '+e.message);throw e;}finally{if(held&&!refChanged)fs.unlinkSync(indexPath+'.lock');sharedWriteLock(root,'release',owner);}
