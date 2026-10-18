// Concrete root-only builder/recorder. Author did not execute this script.
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {validateStep3LedgerNormalizationHistory,recordStep3LedgerNormalizationHistory} from '../../tools/step3-ledger-normalization-history.mjs';
const root=process.cwd(),run='numerical-analysis-remaining-71-2026-10-17',D=`research/${run}-owner-planning-integration`;
const mode=process.argv[2],need=(v,m)=>{if(!v)throw Error(m);};
need(['--prepare','--record'].includes(mode),'Root must choose --prepare or --record at actual paused/drained own5.9');
const bytes=p=>readFileSync(resolve(root,p),'utf8'),read=p=>JSON.parse(bytes(p));
const sha=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const ref=p=>({path:p,sha256:sha(bytes(p))});
const beforePath=`${D}/step5-step3-ledger-original-reconstructed.json`,afterPath=`${D}/step5-step3-ledger-current-selected.json`;
const before=read(beforePath),after=read(afterPath);
need(before.length===390&&sha(before)==='916d7a72ca183b1004a2694e4c53e471c6d5de750011e2dd500ab7620ea841fa','Original immutable selected rows changed');
need(after.length===390&&sha(after)==='a9caa02dfb15b5a0d7980f185e969f8aa884769e092fbc704a070a46ee28471c','Actual17-row normalized endpoint changed; investigate rather than refresh');
const proposals=[`${D}/step5-legacy-ledger-shape-proposal.json`,`${D}/step5-ledger-shape-all-own-proposal.json`];
const reasons=new Map(proposals.flatMap(p=>read(p).migrations).map(m=>[m.defect_id,m.reason??m.proposed_row.subclass_note]));
const deltas=[];
for(let i=0;i<before.length;i++)if(JSON.stringify(before[i])!==JSON.stringify(after[i])){
 const old=before[i],now=after[i];need(old.defect_id===now.defect_id,'Selected inventory changed');
 deltas.push({defect_id:old.defect_id,before_sha256:sha(old),after_sha256:sha(now),
 fields:[...new Set([...Object.keys(old),...Object.keys(now)])].filter(k=>JSON.stringify(old[k])!==JSON.stringify(now[k])).sort(),reason:reasons.get(old.defect_id)});
}
need(deltas.length===17,'Not the actual17 normalization deltas');
const stateBytes=bytes(`.autopilot/${run}/state.json`),state=JSON.parse(stateBytes);
need(state.run===run&&state.stage==='5.9-repair'&&state.paused===true
 &&Object.values(state.dispatches??{}).every(d=>!d.startedAt||Boolean(d.endedAt)),'Not actual paused/drained own5.9');
const stateArchive=`${D}/step3-ledger-normalization-creation-${sha(stateBytes)}.json`;
if(existsSync(resolve(root,stateArchive)))need(bytes(stateArchive)===stateBytes,'Immutable state archive conflict');
else writeFileSync(resolve(root,stateArchive),stateBytes,{flag:'wx'});
const closure=read(`research/${run}-step3-closure.json`),payload={version:1,kind:'owner-step3-ledger-schema-normalization-history',run,
 authorized_by:'owner',owner_identity:'/root',historical_only:true,mathematical_acceptance:false,native_coverage_adopted:false,
 recorded_at:new Date().toISOString(),reason:'The genuine unchanged Step3 closure pins the exact reconstructed390 original rows. Seventeen root-applied closed-schema normalizations preserve their recorded mathematical evidence, severity, identities, references and existing dispositions except the already-superseded escalated/open alias. This receipt preserves only historical metadata compatibility and grants no new review or resolution.',
 closure:ref(`research/${run}-step3-closure.json`),native_close_result:ref(`research/${run}-dispatch/tool-step3-close.result.json`),
 original_rows:ref(beforePath),normalized_rows:ref(afterPath),creation_state:ref(stateArchive),
 preimages:[`${D}/step5-four-legacy-ledger-originals.jsonl`,`${D}/step5-ledger-shape-all-own-originals.jsonl`].map(ref),
 normalization_evidence:[`${D}/step5-four-legacy-ledger-normalization-applied.json`,`${D}/step5-ledger-shape-all-own-applied.json`].map(ref),
 proposal_evidence:proposals.map(ref),deltas};
validateStep3LedgerNormalizationHistory(root,run,{...payload,sha256:sha(payload)},closure,after);
const request=`${D}/step3-ledger-normalization-root-request-${sha(payload)}.json`;
if(!existsSync(resolve(root,request)))writeFileSync(resolve(root,request),JSON.stringify(payload,null,2)+'\n',{flag:'wx'});
need(bytes(`.autopilot/${run}/state.json`)===stateBytes,'Recording state changed');
console.log(JSON.stringify(mode==='--record'?recordStep3LedgerNormalizationHistory(root,run,payload):{request,prepared_only:true,native_receipt_written:false},null,2));
