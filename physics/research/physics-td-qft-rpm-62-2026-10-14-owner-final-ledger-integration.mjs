// Root-owned schema/ownership reconciliation after all source writers drain.
// OPEN metadata rows bind declarations and genuine prior evidence, not acceptance.
import {readFileSync,writeFileSync,mkdirSync,renameSync,existsSync}from'node:fs';
import {createHash}from'node:crypto';
const run='physics-td-qft-rpm-62-2026-10-14',base=`research/${run}-owner-native-gate-preparation`;
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const proposal=read(`${base}/ledger-proposal.json`),docs=new Map();
for(let batch=1;batch<=64;batch++)docs.set(String(batch),read(`${base}/proposed-ledgers/batch-${batch}.json`));
const newRows=[];
const repairEvidence={
 '2':'td8-tagged-homogeneity/source-integration-round-2.json',
 '5':'td5-supplier-readiness/final-round-2/repair.json',
 '6':'td4-unit-compound-interface/round2-final-consumer-closure.json',
 '7':'td4-unit-compound-interface/round2-final-consumer-closure.json',
 '8':'td8-m2-m3-supplier-readiness/final-round-2/repair.json',
 '9':'td8-tagged-homogeneity/consumer-closure-complete-round-2.json',
 '45':'qft45-q8-polar-input/final-round-2/repair.json',
 '47':'qft47-inverse-coefficient/final-round-2/repair.json',
 '55':'qft38-supplier-readiness/final-round-2/consumer-handoff-55/resolution.json',
 '56':'qft38-supplier-readiness/final-round-2/consumer-handoff-56/resolution.json',
};
for(const edge of proposal.missing_current_edge_reviews){
 const note=`research/${run}-batch-${edge.consumer_batch}.notes.md`;
 if(!existsSync(note))throw Error(`Missing genuine author evidence ${note}`);
 const declarations=edge.declarations.map(x=>x.split('#')[0]);
 for(const path of declarations)if(!existsSync(path))throw Error(`Missing declaration ${path}`);
 const repair=repairEvidence[edge.consumer_batch]?`research/${run}-owner-escalations/${repairEvidence[edge.consumer_batch]}`:null;
 if(repair&&!existsSync(repair))throw Error(`Missing existing repair evidence ${repair}`);
 const evidence=`Root metadata reconciliation records the actual declared ${edge.kind} edge ${edge.consumer} -> ${edge.supplier} from ${edge.declarations.join(', ')}. Historical batch-author record: ${note}.${repair?` Existing owning repair evidence: ${repair}.`:''} This OPEN row records dependency availability and existing evidence only; it does not attest a new interface inspection, independent review, mathematical acceptance, or publication. Subsequent native scope/prerequisite review remains required.`;
 const row={kind:edge.kind,consumer:edge.consumer,supplier:edge.supplier,status:'open',evidence,metadata_reconciliation:{owner:'/root',at:new Date().toISOString(),evidence_sha256:createHash('sha256').update(readFileSync(note)).digest('hex'),declarations:edge.declarations}};
 docs.get(edge.consumer_batch).push(row);newRows.push({batch:edge.consumer_batch,...row});
}
// Stage and validate ownership/status/unique rows before any shared mutation.
const keys=new Set();
for(const[batch,rows]of docs)for(const row of rows){
 const key=JSON.stringify([row.kind,row.consumer,row.supplier]);
 if(keys.has(key))throw Error(`Duplicate proposed edge ${key}`);keys.add(key);
 if(!['item','page'].includes(row.kind)||!['open','verified','removed'].includes(row.status)||!String(row.evidence??'').trim())throw Error(`Invalid staged edge ${key}`);
}
const stamp=new Date().toISOString().replace(/[:.]/g,'-'),archive=`research/${run}-owner-final-ledger-integration/${stamp}`;mkdirSync(archive,{recursive:true});
const files=[];
for(const[batch,rows]of docs){
 const path=`research/${run}-batch-${batch}.cross-batch-dependencies.json`,data=JSON.stringify(rows,null,2)+'\n';
 if(existsSync(path))writeFileSync(`${archive}/batch-${batch}.before.json`,readFileSync(path));
 else writeFileSync(`${archive}/batch-${batch}.previously-absent.json`,JSON.stringify({path,previously_absent:true,note:'No previously recorded batch input; current declarations and any genuinely rerouted rows retained.'})+'\n');
 writeFileSync(`${path}.tmp`,data);renameSync(`${path}.tmp`,path);files.push({path,sha256:createHash('sha256').update(data).digest('hex')});
}
writeFileSync(`${archive}/receipt.json`,JSON.stringify({run,owner:'/root',at:new Date().toISOString(),normalizations:proposal.actions,new_open_rows:newRows,context_archive:`${base}/historical-context-rows.json`,files,mathematical_review:false,independent_acceptance:false,gate_authorization:false},null,2)+'\n');
console.log(JSON.stringify({files:files.length,new_open_rows:newRows.length,receipt:`${archive}/receipt.json`}));
