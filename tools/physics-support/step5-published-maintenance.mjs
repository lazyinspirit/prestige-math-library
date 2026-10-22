// Root-scoped local published maintenance; never a native review or decision.
import {readFileSync,existsSync,realpathSync} from 'node:fs';
import {join,resolve,relative,isAbsolute} from 'node:path';
import {createHash} from 'node:crypto';
import {recordedPublishedRepair} from './published-repair-policy.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';
import {validateFrontier} from './step5-rounds.mjs';

const hash=value=>createHash('sha256').update(value).digest('hex');
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const need=(ok,message)=>{if(!ok)throw Error('published maintenance: '+message);};
const authenticated=new WeakSet();
const scalar=(text,key)=>new RegExp(`^${key}:\\s*["']?([^\\n"']+?)["']?\\s*$`,'m').exec(/^---\r?\n([\s\S]*?)\r?\n---/.exec(text)?.[1]??'')?.[1];
export const isPublishedMaintenance=value=>value!==null&&typeof value==='object'&&authenticated.has(value);

/** Explicit root opt-in for first local corrections against the original frozen
 * initial snapshot. Existing policy validates real claims, audits, ledger and
 * focused checks. This route supplies neither author/reviewer nor judge tuples.
 * Receipt/preimage/owner evidence are immutable; canonical ledger marker and
 * exact claim row are checked separately, so unrelated appends remain legal. */
export function publishedMaintenance(root,run,pack,current,{replay=null}={}){
  const dir=join(root,'research',run+'-step5-v2'),path=join(dir,'owner-published-maintenance.json');
  if(!existsSync(path)){
    need(!replay?.length,'missing bound owner request');
    return {repairs:[],guards:{},evidence:{}};
  }
  need(pack.run===run&&pack.phase==='initial'&&pack.round===1&&Array.isArray(pack.rejected)
    &&pack.repair_scope==='frontier','only original initial adjudication is eligible');
  const request=read(path),evidence={},guards={},repairs=[];
  need(request.version===1&&request.run===run&&request.phase==='initial'&&request.round===1
    &&request.reviewer==='/root'&&request.native_review===false&&request.native_adjudication===false
    &&typeof request.reason==='string'&&request.reason.trim().length>=40
    &&Array.isArray(request.entries)&&request.entries.length>0,'invalid root-scoped request');
  const bound=ref=>{
    need(ref&&typeof ref.path==='string'&&!isAbsolute(ref.path)&&/^[a-f0-9]{64}$/.test(ref.sha256??''),'invalid evidence reference');
    const file=resolve(root,ref.path),rel=relative(realpathSync(join(root,'research')),realpathSync(file));
    need(!isAbsolute(rel)&&!rel.startsWith('..')&&rel.startsWith(run+'-'),'evidence is outside run research');
    need(hash(readFileSync(file))===ref.sha256,'evidence changed: '+ref.path);
    evidence[file]=ref.sha256;return file;
  };
  const state=read(bound(request.drained_state));
  need(state.run===run&&state.stage==='5.1-adjudicate'&&state.paused===true&&!state.finishedAt
    &&!state.stages?.['5.1-adjudicate']?.doneAt&&state.dispatches&&typeof state.dispatches==='object'
    &&Object.values(state.dispatches).every(row=>!row.startedAt||row.endedAt),'not an actual paused/drained initial boundary');
  if(!replay){
    const live=read(join(root,'.physics-autopilot',run,'state.json'));
    need(live.run===run&&live.stage==='5.1-adjudicate'&&!live.finishedAt
      &&!live.stages?.['5.1-adjudicate']?.doneAt&&live.dispatches&&typeof live.dispatches==='object'
      &&Object.values(live.dispatches).every(row=>!row.startedAt||row.endedAt)
      &&!existsSync(join(root,'.physics-autopilot','step5-shared-write.lock')),'initial writers are not drained');
  }
  const frontierPath=join(dir,'frontier.json'),frontier=validateFrontier(read(frontierPath));
  need(frontier.run===run&&JSON.stringify(pack.frontier_ids)===JSON.stringify(frontier.ids),'wrong frozen frontier');
  const importsPath=join(root,'research/math-imports.json');
  const imported=new Set(existsSync(importsPath)?read(importsPath).files.map(row=>row.path):[]);
  const assigned=new Set(Object.values(pack.assignments).flat().map(row=>typeof row==='string'?row:row.id)),seen=new Set();
  for(const entry of request.entries){
    const id=entry.id;
    need(typeof id==='string'&&!seen.has(id)&&frontier.ids.includes(id)&&pack.frontier_ids?.includes(id)
      &&pack.before[id]&&!assigned.has(id)&&!imported.has('items/'+id+'.md'),'duplicate, outside, new, imported or assigned published target: '+id);seen.add(id);
    const text=readFileSync(join(root,'items',id+'.md'),'utf8'),receiptPath=bound(entry.receipt),receipt=read(receiptPath);
    need(scalar(text,'status')==='published'&&scalar(text,'id')===id,
      'not the current published carrier: '+id);
    // Read repair only inside verification; unrelated frontmatter cannot supply it.
    const verification=/^verification:[ \t]*\r?\n((?:[ \t]+[^\n]*\n?)*)/m.exec(/^---\r?\n([\s\S]*?)\r?\n---/.exec(text)?.[1]??'')?.[1]??'';
    const repair=/^ {2}repair:[ \t]*["']?([^\n"']+?)["']?[ \t]*$/m.exec(verification)?.[1];
    need(repair===entry.receipt.path&&!/^ {2}(?:audited|verified):/m.test(verification),
      'receipt is not the sole current publication repair evidence: '+id);
    const policy=recordedPublishedRepair(root,id,text,repair);
    need(policy.ok,`${id}: ${policy.reason??'local repair rejected'}`);
    const beforeFile=bound({path:receipt.before_file,sha256:receipt.before_raw_sha256}),before=readFileSync(beforeFile,'utf8');
    need(receipt.run===run&&receipt.group===entry.group&&receipt.pre_sha256===pack.before[id]
      &&itemHashGuard(before)===pack.before[id]&&statementHash(before)===pack.before_statements?.[id]
      &&current[id]===receipt.content_sha256&&current[id]===itemHashGuard(text)
      &&current[id]!==pack.before[id],'wrong original/current source or ownership: '+id);
    need(Array.isArray(entry.scientific_evidence)&&entry.scientific_evidence.length>0,'missing actual scientific evidence: '+id);
    entry.scientific_evidence.forEach(bound);
    const claims=readFileSync(join(root,'research',run+'-step3-published-claims.jsonl'),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
    const claim=claims.find(row=>row.id===id);
    repairs.push({id,group:receipt.group,receipt:entry.receipt,before_sha256:pack.before[id],after_sha256:current[id],
      claim_sha256:hash(JSON.stringify(claim)),ledger_marker:receipt.ledger_marker,ledger_sha256:receipt.ledger_sha256,
      attribution:'Recorded local published repair only; no native review or adjudication'});
    guards[id]=current[id];
  }
  if(replay)need(JSON.stringify(repairs)===JSON.stringify(replay),'recorded published repair/claim changed');
  evidence[path]=hash(readFileSync(path));evidence[frontierPath]=hash(readFileSync(frontierPath));
  repairs.forEach(Object.freeze);Object.freeze(repairs);Object.freeze(guards);Object.freeze(evidence);
  const result=Object.freeze({repairs,guards,evidence});authenticated.add(result);return result;
}
