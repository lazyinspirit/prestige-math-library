import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
import {numberedProofSteps,splitFrontmatter} from '../../../tools/facts-block.mjs';
const base='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011';
const out=base+'/restored-partitions-06-10';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const raw=p=>fs.readFileSync(p,'utf8');
const hash=s=>createHash('sha256').update(s).digest('hex');
const get=(d,p)=>p.split('/').slice(1).reduce((a,k)=>a[k.replace(/~1/g,'/').replace(/~0/g,'~')],d);
const packet={version:1,run:'frontier-44-special-representation-examples-28',by:'/root/restore_boundary_06_10',recorded_at:new Date().toISOString(),scope:'Current exact assigned boundary cases and two retained focused source repair successors; no new whole-item audit or canonical writes',source_operations:[],json_operations:[],seals:[],coverage:[],holds:[],stale_guards:[],supplier_guards:[],consumer_review:[]};
function addOp(o,origin){
 const p=o.path??o.batch_contract_path;
 const before=o.before_row??o.before;
 const after=o.after_row??o.after;
 const currentRaw=raw(p),current=get(JSON.parse(currentRaw),o.pointer);
 if(JSON.stringify(current)!==JSON.stringify(before))packet.stale_guards.push({path:p,pointer:o.pointer,kind:'before_value_mismatch',proposal_origin:origin,current});
 const guard=o.contract_raw_sha256??o.batch_contract_raw_sha256;
 if(guard&&guard!==hash(currentRaw))packet.stale_guards.push({path:p,kind:'contract_raw_mismatch',saved:guard,current:hash(currentRaw),proposal_origin:origin});
 packet.json_operations.push({path:p,pointer:o.pointer,before,after,before_file_raw_sha256:hash(currentRaw),proposal_origin:origin,id:o.id??o.item_id??o.pointer.split('/')[2],case:o.case??before?.case});
}
function sourceOp(o,origin){
 const afterPath=o.after_archive??o.after_file;
 const current=raw(o.path),after=raw(afterPath);
 if(hash(current)!==o.before_raw_sha256)packet.stale_guards.push({path:o.path,kind:'source_before_raw_mismatch',saved:o.before_raw_sha256,current:hash(current)});
 if(hash(after)!==o.after_raw_sha256)throw Error('Proposed after bytes mismatch '+afterPath);
 packet.source_operations.push({path:o.path,before_raw_sha256:hash(current),after_path:afterPath,after_raw_sha256:hash(after),before_guard_sha256:itemHashGuard(current),after_guard_sha256:itemHashGuard(after),proposal_origin:origin,actual_after_binding:false});
}
for(let n=6;n<=10;n++){
 const invPath=`${base}/boundary-template-inventory/partition-${String(n).padStart(2,'0')}.json`;
 const inv=read(invPath),dir=`${base}/boundary-template-partition-${String(n).padStart(2,'0')}`;
 const origin=dir+'/'+(n===6?'proposal-final-formatted.json':'proposal.json');
 const proposal=read(origin);
 let ops=proposal.operations;
 if(n===10){const successor=dir+'/repaired-source/proposal.json',d=read(successor);ops=ops.filter(o=>o.id!==d.subject);sourceOp(d.source_operation,successor);for(const o of [...d.operations,...d.contract_derivation_field_operations])addOp(o,successor);packet.supplier_guards.push(...d.suppliers.map(g=>({...g,proposal_origin:successor,current_raw_sha256:hash(raw(g.path))})));}
 for(const o of ops)addOp(o,origin);
 const assigned=inv.items.flatMap(i=>i.rows.flatMap(r=>r.batch_locations.map(l=>l.path+'#'+l.pointer)));
 const covered=packet.json_operations.filter(o=>o.pointer.includes('/boundaries/')).map(o=>o.path+'#'+o.pointer);
 packet.coverage.push({partition:String(n).padStart(2,'0'),inventory:{path:invPath,raw_sha256:hash(raw(invPath))},authoritative_proposal:{path:origin,raw_sha256:hash(raw(origin))},items:inv.item_ids,assigned_rows:inv.counts.flagged_rows,missing:assigned.filter(k=>!covered.includes(k)),current_item_guards:inv.items.map(i=>({path:i.current_item_path,saved_raw_sha256:i.current_item_raw_sha256,current_raw_sha256:hash(raw(i.current_item_path)),current_guard_sha256:itemHashGuard(raw(i.current_item_path)),matches_inventory:hash(raw(i.current_item_path))===i.current_item_raw_sha256}))});
 for(const f of fs.readdirSync(dir).filter(f=>f.startsWith('SEALED')&&f.endsWith('.json')))packet.seals.push({path:dir+'/'+f,raw_sha256:hash(raw(dir+'/'+f)),historical:f!==(n===6?'SEALED-FINAL-FORMATTED-PYRAMID.json':'SEALED-PROPOSAL.json')});
}
const pyramidPath=base+'/boundary-template-partition-06/pyramid-final-source-repair-proposal.json';
const pyramid=read(pyramidPath);sourceOp(pyramid.source_operation,pyramidPath);
for(const o of [...pyramid.contract_quote_operations,...pyramid.source_contract_field_operations])addOp(o,pyramidPath);
packet.supplier_guards.push(...pyramid.supplier_guards.map(g=>({...g,current_raw_sha256:hash(raw(g.path)),proposal_origin:pyramidPath})));
const consumerPath=base+'/boundary-template-partition-06/pyramid-final-direct-consumer-inspection.json';
const consumers=read(consumerPath);
const mentions=fs.readdirSync('items').filter(f=>f.endsWith('.md')&&f!==pyramid.subject+'.md'&&raw('items/'+f).includes(pyramid.subject)).map(f=>f.slice(0,-3));
packet.consumer_review.push({supplier:pyramid.subject,retained_review:{path:consumerPath,raw_sha256:hash(raw(consumerPath))},actual_direct_dependency_or_citation_consumers:mentions,missing:mentions.filter(id=>!consumers.consumers.some(c=>c.id===id)),consumers:consumers.consumers.map(c=>({...c,current_raw_sha256:hash(raw(c.path)),saved_guard_current:hash(raw(c.path))===c.raw_sha256})),focused_repair_acceptance:'The corrected Definition distinguishes nonzero degree-one nilpotents from degree-two Dynkin convention, identifies the trivial zero grading, and proves injectivity by the nonnegative centralizer basis and surjectivity through the perfect trace pairing. This preserves all box, shift, centralizer, character and J/K formulas. Direct consumers use these retained formulas or doubled grading; none uses the false unconditional Dynkin distinction.'});
packet.focused_source_acceptance={pyramid:'Accepted proposed local proof repair after reading current and final proposed source and consumed supplier clauses; not a whole-proof acceptance.',empty_tensor_unit:'Accepted proposed empty-unit proof: counit gives the trivial integrable unit, positive-root components vanish, Laurent regularity at both charts forces integer constants, and the balanced residue map is evaluation at zero. Statement is unchanged; no direct-consumer propagation is opened.'};
for(const g of packet.supplier_guards)if(g.raw_sha256!==g.current_raw_sha256)packet.stale_guards.push({path:g.path,kind:'supplier_raw_mismatch',saved:g.raw_sha256,current:g.current_raw_sha256});
packet.actual_after_binding=false;
// One authorized focused pass for actual coefficient defects observed in partition 08.
const cexId='cex-bar-invariance-and-mod-q-congruence-without-balancedness';
const cexPath='items/'+cexId+'.md',cexBefore=raw(cexPath);
const replacements=[
 ['so $L\'=A_0a\\oplus qA_0t$ and $V_A=Av\\oplus Aw=\\mathbb Q(q)$-span; since $w=a-t$ and $v=t$.','so $L\'=A_0a\\oplus qA_0t$ and $V_A=Av\\oplus Aw=Aa\\oplus At$, while $V=\\mathbb Q(q)a\\oplus\\mathbb Q(q)t$; these identities follow from $w=a-t$ and $v=t$.'],
 ['exactly when $q^{-1}f\\in A_\\infty$, i.e. when $f\\in q\\mathbb Z[q]$','exactly when $q^{-2}f\\in A_\\infty$, i.e. when $f=0$ or $\\deg f\\le2$'],
 ['$E_{\\mathbb Z}\\to(V_A\\cap L\'\')/(V_A\\cap qL\'\')=\\mathbb Z[q]v/q\\mathbb Z[q]v$ is $(a_{-1}q^{-1}+a_0+a_1q)v\\mapsto a_{-1}[v]$','$E_{\\mathbb Z}\\to(V_A\\cap L\'\')/(V_A\\cap qL\'\')=q^{-1}\\mathbb Z[q]v/\\mathbb Z[q]v$ is $(a_{-1}q^{-1}+a_0+a_1q)v\\mapsto a_{-1}[q^{-1}v]$']
];
let cexAfter=cexBefore;
for(const [before,after] of replacements){if(cexAfter.split(before).length!==2)throw Error('cex literal not unique');cexAfter=cexAfter.replace(before,()=>after);}
fs.writeFileSync(out+'/cex-before.md',cexBefore);fs.writeFileSync(out+'/cex-after.md',cexAfter);
const cexOrigin=out+'/cex-focused-repair.json';
packet.source_operations.push({path:cexPath,before_raw_sha256:hash(cexBefore),after_path:out+'/cex-after.md',after_raw_sha256:hash(cexAfter),before_guard_sha256:itemHashGuard(cexBefore),after_guard_sha256:itemHashGuard(cexAfter),proposal_origin:cexOrigin,actual_after_binding:false});
const cexCpath='research/frontier-44-special-representation-examples-28-batch-8.proof-contracts.json',cexContract=read(cexCpath).contracts[cexId];
const cexSteps=numberedProofSteps(splitFrontmatter(cexAfter).body);
const repairOps=[];
for(let i=0;i<cexContract.derivations.length;i++){
 const before=cexContract.derivations[i];
 if(!['1.1','1.2','2.2'].includes(before.step))continue;
 const after={...before,claim:cexSteps.find(s=>s.id===before.step).claim};
 const o={path:cexCpath,pointer:`/contracts/${cexId}/derivations/${i}`,before,after,contract_raw_sha256:hash(raw(cexCpath))};
 addOp(o,cexOrigin);repairOps.push(o);
}
for(const o of packet.json_operations.filter(o=>o.id===cexId&&o.pointer.includes('/boundaries/'))){o.after.template_review.item_sha256=itemHashGuard(cexAfter);o.proposed_source_repair=cexOrigin;}
fs.writeFileSync(cexOrigin,JSON.stringify({version:1,run:packet.run,by:packet.by,subject:cexId,repair_round:1,maximum_rounds:2,authority:'Root authorized the three exact coefficient corrections in one focused pass; no public interface change.',source_operation:packet.source_operations.at(-1),replacements,json_operations:repairOps,mathematical_review:'An A-basis change with determinant minus one preserves the integral two-dimensional lattice. For the trivial witness, q^{-1}f belongs to qA_infinity precisely when q^{-2}f is regular at infinity, equivalently degree at most two. The residue quotient is the actual scaled polynomial lattice modulo the unscaled polynomial lattice, with generator the class of q^{-1}v; the same computed kernel and two lifts persist.',statement_unchanged:true,consumer_propagation:false,actual_after_binding:false},null,2)+'\n');
packet.focused_source_acceptance.cex='Accepted one local coefficient correction pass: repair integral/field span confusion, degree-two infinity regularity, and scaled residue generator. Both original witness conclusions and public Statement are unchanged.';
fs.writeFileSync(out+'/integration-packet.json',JSON.stringify(packet,null,2)+'\n');
console.log(JSON.stringify({source_operations:packet.source_operations.length,json_operations:packet.json_operations.length,coverage:packet.coverage.map(c=>({partition:c.partition,rows:c.assigned_rows,missing:c.missing.length})),stale:packet.stale_guards,consumer_missing:packet.consumer_review[0].missing}));
