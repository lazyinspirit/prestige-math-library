import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../tools/physics-support/item-hash.mjs';
const out='research/physics-non-fluid-129-2026-10-21-r2-owner-qft-tgr-boundaries';
const scope=JSON.parse(readFileSync(`${out}/scope.json`));
const evidence=JSON.parse(readFileSync(`${out}/item-evidence.json`));
const gaussian=JSON.parse(readFileSync(`${out}/gaussian-boundaries.json`));
const by='same-owner-qft-green-maps scoped boundary review';
const sha=x=>createHash('sha256').update(x).digest('hex');
const changes=[];
mkdirSync(`${out}/proposed-contracts`,{recursive:true});
for(const batch of scope.batches){
 const doc=JSON.parse(readFileSync(batch.contract));
 for(const flagged of batch.rows){
  const entry=doc.contracts[flagged.id],row=entry.boundaries.find(r=>r.case===flagged.case);if(!row)throw Error('missing row');
  const before=structuredClone(row);let reason=evidence[flagged.id];if(!reason)throw Error('no evidence '+flagged.id);
  if(gaussian[flagged.id]?.[flagged.case]){
   const [status,text]=gaussian[flagged.id][flagged.case];delete row.reason;delete row.evidence;delete row.reviewed;delete row.template_review;row.status=status;row[status==='checked'?'evidence':'reason']=text;
  }
  if(flagged.id==='def-qftx-finite-flat-connection-groupoid'&&flagged.case==='empty'){
   row.status='checked';delete row.reason;row.evidence='The Definition assigns the terminal groupoid to the empty complex, and step 3.1 explicitly retains the empty component product. Its groupoid cardinality is one.';
  }
  if(flagged.id==='def-qftx-scaling-cocycle'&&flagged.case==='empty'){
   row.status='checked';delete row.reason;row.evidence='The Definition permits N=0 integral summands, leaving the constant functional; step 1.1 preserves that class under dilation. The formal S-map still has its prescribed unit term, and the mass family includes m=0.';
  }
  if(flagged.id==='lem-qftx-anyonic-vacuum-reverse-adjacent-relation'&&flagged.case==='empty'){
   row.status='checked';delete row.reason;row.evidence='In step 1.1 the fixed-boundary path space may have no spectator blocks; all local projectors are then the zero operator. The blockwise equality in step 3.1 and its rescaling in step 4.1 both read zero equals zero.';
  }
  if(flagged.id==='def-qftx-cpt-spin-statistics-interface'&&flagged.case==='empty'){
   row.status='checked';delete row.reason;row.evidence='The Definition includes the distinguished unit vacuum in the cyclic field-vector span, corresponding to the zero-insertion product. The Hilbert space and component space remain nonzero specified inputs, not an empty field-system existence claim.';
  }
  if(flagged.contradicted&&row.status==='not_applicable')row.reviewed={upheld:true,by,reason};
  if(flagged.template){
   // Exact guard form, not raw source hash; this is a scoped owner use disposition.
   const item=readFileSync(`items/${flagged.id}.md`,'utf8');
   row.template_review={upheld:true,by,reason:gaussian[flagged.id]?.[flagged.case]?gaussian[flagged.id][flagged.case][1]:reason,item_sha256:itemHashGuard(item),row_sha256:sha(JSON.stringify({case:row.case,status:row.status,text:row.reason??row.evidence??''}))};
  }
  changes.push({batch:batch.batch,id:flagged.id,case:flagged.case,before,after:row});
 }
 writeFileSync(`${out}/proposed-contracts/batch-${batch.batch}.proof-contracts.json`,JSON.stringify(doc,null,2)+'\n');
}
writeFileSync(`${out}/proposed-row-changes.json`,JSON.stringify(changes,null,2)+'\n');
console.log(`${changes.length} item-specific row dispositions prepared; production untouched; batch78 remains held.`);
