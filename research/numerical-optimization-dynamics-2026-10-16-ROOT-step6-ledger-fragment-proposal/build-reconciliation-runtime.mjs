// RESEARCH PROPOSAL ONLY. Author did not execute this program.
// Later root-only generation of a fresh, unapplied record-span proposal.
import {readFileSync,writeFileSync,mkdirSync,lstatSync,existsSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {runScope} from '../../tools/step6-lib.mjs';
import {git,textGit,indexEntries,treeEntries,preflightCloseoutScope} from '../../tools/run-commit-scope.mjs';
import {fragmentRecords,recordSignature,decodeLedger} from '../../tools/step6-ledger-fragment.mjs';
const args=process.argv.slice(2),has=x=>args.includes(x);
const arg=x=>{let i=args.indexOf(x);if(i<0||!args[i+1])throw Error(`required ${x}`);return args[i+1];};
if(!has('--root-build-reconciliation-runtime')||!has('--acknowledge-stable-repairs-and-claims'))
  throw Error('Explicit later root stable-boundary acknowledgment required; no canonical or runtime file written.');
const root=resolve(arg('--repo')),run=arg('--run'),output=resolve(arg('--runtime-output'));
if(!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(run))throw Error('invalid run');
if(output===root||['research','items','library','tools'].some(p=>output.startsWith(join(root,p)+'/')))
  throw Error('separate runtime output required');
const path='research/published-consumer-supplier-ledger.md',read=p=>readFileSync(join(root,p));
const parse=p=>JSON.parse(decodeLedger(read(p))),hash=x=>createHash('sha256').update(x).digest('hex');
const state=parse(`.autopilot/${run}/state.json`);
if(state.run!==run||state.paused!==true||Object.values(state.dispatches??{}).some(x=>x.startedAt&&!x.endedAt))
  throw Error('Actual paused/drained run required; this script controls no session.');
const policyPath=`research/${run}-closeout-scope.json`,claimsPath=`research/${run}-step3-published-claims.jsonl`;
const policyBytes=read(policyPath),claimsBytes=read(claimsPath),policy=JSON.parse(decodeLedger(policyBytes));
if(policy.shared_fragments?.length)throw Error('Reconciliation after authority sealing requires root recovery, not a fresh proposal.');
preflightCloseoutScope(root,run,`research/${run}-dispatch/tool-step6-finalize-v3.result.json`);
const scope=runScope(run,root),claims=decodeLedger(claimsBytes).split(/\r?\n/).filter(Boolean).map(JSON.parse);
const ids=new Set([...scope.items.map(x=>x.id),...scope.pages.map(x=>x.id),...claims.map(x=>x.id),
  ...policy.additional_paths.flatMap(x=>/^items\/([^/]+)\.md$/.exec(x.path)?.slice(1)??[])]);
const beforeHead=textGit(root,['rev-parse','HEAD']);
const headRow=treeEntries(root).find(x=>x.path===path),indexRow=indexEntries(root).find(x=>x.path===path);
if(!headRow||!indexRow||headRow.mode!=='100644'||indexRow.mode!=='100644'||indexRow.flags!=='0')
  throw Error('ordinary existing HEAD/index carrier required');
const head=decodeLedger(git(root,['cat-file','blob',headRow.oid]));
const beforeBytes=read(path),before=decodeLedger(beforeBytes),H=fragmentRecords(head,run,ids),W=fragmentRecords(before,run,ids);
const B=H.filter(x=>x.owned),base=B.map(x=>recordSignature(x.text));
const existing=W.filter(x=>x.owned).map(x=>recordSignature(x.text));
const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b),sig=x=>recordSignature(x.text);
const intent=parse(`research/${run}-ROOT-step6-ledger-fragment-proposal/historical-record-restoration-proposal-v2.json`);
const mustHistorical=[intent.future_fragment_base_owned_records[2],intent.future_fragment_base_owned_records[7]];
if(mustHistorical.some(x=>!base.includes(x))||!base.includes(intent.original_missing_owned_record))
  throw Error('Actual HEAD ownership/base changed from reviewed historical identities; new root reconciliation needed.');
const names=new Set(),markers=[];
for(const m of before.matchAll(/<!-- local-published-repair:([^\n]*?):begin -->/g)){
  if(names.has(m[1]))throw Error('duplicate repair marker');names.add(m[1]);
  const endText=`<!-- local-published-repair:${m[1]}:end -->`,end=before.indexOf(endText,m.index+m[0].length);
  if(end<0||before.indexOf(endText,end+1)>=0)throw Error('missing/duplicate marker end');
  markers.push({name:m[1],start:m.index+m[0].length,end,interior:before.slice(m.index+m[0].length,end)});
}
const ops=[];
const unique=(signature,rows)=>{const xs=rows.filter(x=>sig(x)===signature);if(xs.length!==1)throw Error('record/foreign anchor no longer exact unique');return xs[0];};
const op=(start,end,text,reason)=>{
  if(markers.some(m=>(start<m.end&&end>m.start)||(start===end&&m.start<start&&start<m.end)))
    throw Error('proposed operation touches a current repair-marker interior');
  ops.push({start,end,source_excerpt:before.slice(start,end),proposed_replacement:text,reason});
};
if(eq(existing.filter(x=>base.includes(x)),base))throw Error('Historical order already restored; no reapplication. Build fragment from the actual current additions instead.');
for(const signature of mustHistorical){
  const old=unique(signature,B),current=unique(signature,W);
  op(current.start,current.end,'','Relocate exact historical owned record outside every marker; retain its text verbatim.');
  const anchor=H.slice(H.indexOf(old)+1).find(x=>!x.owned);
  if(!anchor)throw Error('original next foreign anchor absent');
  const dest=unique(sig(anchor),W);
  op(dest.start,dest.start,old.text+'\n\n','Restore unchanged historical record before its freshly resolved original HEAD foreign anchor.');
}
const oldRat=unique(intent.original_missing_owned_record,B),replacement=unique(intent.retained_current_replacement,W);
if(W.some(x=>sig(x)===sig(oldRat)))throw Error('rat-field history already present; do not duplicate it');
op(replacement.start,replacement.end+(before[replacement.end]==='\n'?1:0),'','Retain the replaced row verbatim in the historical dated append below.');
// Restore before the next surviving HEAD-owned record, not a stale line/offset.
const next=B.slice(B.indexOf(oldRat)+1).find(x=>W.some(y=>sig(y)===sig(x)));
if(!next)throw Error('next surviving historical owned anchor absent');
const dest=unique(sig(next),W);op(dest.start,dest.start,oldRat.text+'\n','Restore the missing historical Frontier22 row in baseline owned order.');
const date=new Date().toISOString().slice(0,10),heading=`## ${run} historical record restoration and retained Step3a observation — ${date}`;
const pad=before.endsWith('\n\n')?'':before.endsWith('\n')?'\n':'\n\n';
op(before.length,before.length,pad+heading+'\n\n'+replacement.text+'\n\n','Retain the exact historical Step3a observation; its old pending wording does not describe current repair status.');
const sorted=[...ops].sort((a,b)=>a.start-b.start||a.end-b.end);
for(let i=1;i<sorted.length;i++)if(sorted[i].start<sorted[i-1].end)throw Error('overlapping operations');
let candidate=before;
for(const x of [...sorted].reverse())candidate=candidate.slice(0,x.start)+x.proposed_replacement+candidate.slice(x.end);
const C=fragmentRecords(candidate,run,ids),target=C.filter(x=>x.owned).map(sig);
if(!eq(target.filter(x=>base.includes(x)),base)||new Set(target).size!==target.length)
  throw Error('Actual whole owned base/order not restored; do not produce a candidate.');
// Compare exact record texts, not merely normalized signatures, for foreign data.
if(!eq(C.filter(x=>!x.owned).map(x=>x.text),W.filter(x=>!x.owned).map(x=>x.text)))
  throw Error('foreign record bytes/order changed');
for(const m of markers){
  const begin=`<!-- local-published-repair:${m.name}:begin -->`,end=`<!-- local-published-repair:${m.name}:end -->`;
  const at=candidate.indexOf(begin),finish=candidate.indexOf(end,at+begin.length);
  if(at<0||finish<0||candidate.slice(at+begin.length,finish)!==m.interior)throw Error('repair-marker interior changed');
}
if(!read(path).equals(beforeBytes)||!read(policyPath).equals(policyBytes)||!read(claimsPath).equals(claimsBytes)
  ||textGit(root,['rev-parse','HEAD'])!==beforeHead||!eq(runScope(run,root),scope))throw Error('live inputs changed; discard and regenerate');
const nowIndex=indexEntries(root).find(x=>x.path===path);if(!eq(nowIndex,indexRow))throw Error('index changed');
mkdirSync(output,{recursive:true});
writeFileSync(join(output,'ledger-reconciliation.preview.md'),candidate,{flag:'wx'});
writeFileSync(join(output,'record-span-operations.proposed.json'),JSON.stringify({run,runtime_candidate_only:true,
  canonical_ledger_changed:false,authority_sealed:false,before_head:beforeHead,before_head_blob:headRow.oid,
  before_index_blob:indexRow.oid,before_working_raw_sha256:hash(beforeBytes),claims_raw_sha256:hash(claimsBytes),
  policy_raw_sha256:hash(policyBytes),actual_owned_ids:[...ids].sort(),base_owned_records:base,target_owned_records:target,
  marker_count:markers.length,every_marker_interior_unchanged:true,foreign_record_texts_unchanged:true,
  operations:ops.map(x=>({...x,start_utf8_byte:Buffer.byteLength(before.slice(0,x.start)),end_utf8_byte:Buffer.byteLength(before.slice(0,x.end))})),
  note:'Root must review fresh spans and apply only through a guarded shared-carrier integration with the exact unchanged source bytes. No stale offsets, unchecked full-file copy, or marker-interior edit. After adoption root must regenerate the addition fragment separately against actual stable inputs.'},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({runtime_candidate_only:output,operations:ops.length,base_owned:base.length,target_owned:target.length,marker_interiors_preserved:markers.length}));
