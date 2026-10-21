#!/usr/bin/env node
// Root-run append-only decision integration. Preview writes nothing; no hashes, ledger mutation or gates.
import {readFileSync,writeFileSync,mkdirSync,existsSync,renameSync,readdirSync} from 'node:fs';
import {resolve,dirname,join,relative} from 'node:path';
import {fileURLToPath} from 'node:url';
import {isDeepStrictEqual as eq} from 'node:util';
const dir=dirname(fileURLToPath(import.meta.url)),root=process.cwd(),args=process.argv.slice(2),apply=args.includes('--apply');
const requireTrue=(v,m)=>{if(!v)throw Error(m)};
const read=p=>readFileSync(resolve(root,p),'utf8'),parse=p=>JSON.parse(read(p));
const proposal=JSON.parse(readFileSync(join(dir,'guarded-proposal.json'),'utf8'));
const docs=new Map(Object.entries(proposal.full_decision_document_preimages).map(([p,s])=>[p,JSON.parse(s)]));
const ledgerText=read('research/defect-ledger.jsonl'),ledger=ledgerText.split('\n').filter(s=>s.trim()).map(s=>JSON.parse(s));
const allDecisions=readdirSync(resolve(root,'research')).filter(f=>f.startsWith(proposal.run+'-alpha-')&&f.endsWith('-3a-decisions.json')).flatMap(f=>parse('research/'+f).decisions??[]);
requireTrue(proposal.entries.length===25,'Unexpected entry count');
function guards(){
 for(const[p,before]of Object.entries(proposal.full_decision_document_preimages))requireTrue(read(p)===before,'Full current decisions changed: '+p);
 for(const[p,before]of Object.entries(proposal.source_preimages_for_guard_only))requireTrue(read(p)===before,'Current source guard changed: '+p);
 for(const[p,before]of Object.entries(proposal.original_report_preimages))requireTrue(read(p)===before,'Original report changed: '+p);
 const now=read('research/defect-ledger.jsonl').split('\n').filter(x=>x.trim()).map(x=>JSON.parse(x));
 for(const e of proposal.entries){const matches=now.filter(r=>r.defect_id===e.original_ledger_row.defect_id);requireTrue(matches.length===1&&eq(matches[0],e.original_ledger_row),'Original ledger row changed/duplicate: '+e.original_ledger_row.defect_id)}
}
guards();const unique=new Set();
for(const e of proposal.entries){
 const row=e.original_ledger_row,d=e.decision,doc=docs.get(e.file);
 requireTrue(!unique.has(d.obligation),'Duplicate new obligation '+d.obligation);unique.add(d.obligation);
 requireTrue(doc&&doc.run===proposal.run&&doc.group==='batch-'+e.batch,'Wrong group/run');
 requireTrue(row.run===proposal.run&&row.subject===d.id&&row.caught_at_stage==='3a-adjudicate'&&row.disposition==='fixed','Not a closed exact-subject repair '+row.defect_id);
 requireTrue(d.route==='gate'&&d.obligation==='gate:'+row.defect_id&&d.defect_ids.length===1&&d.defect_ids[0]===row.defect_id,'Incorrect exact route '+d.obligation);
 requireTrue(d.verdict===(row.severity==='fatal'?'confirmed_fatal':'confirmed_nonfatal'),'Severity changed '+d.obligation);
 requireTrue(!allDecisions.some(x=>x.obligation===d.obligation||(x.defect_ids??[]).includes(row.defect_id)),'Already referenced elsewhere; stop rather than double-own '+row.defect_id);
 const manifest=parse('research/'+proposal.run+'-batch-'+e.batch+'.pages.json');requireTrue(manifest.some(p=>(p.items??[]).some(i=>i.id===d.id)),'Subject outside its actual home manifest '+d.id);
 requireTrue(e.actual_report_passages?.length&&d.evidence.length>=80,'Missing actual report evidence');
 doc.decisions.push(structuredClone(d));
}
const summary={run:proposal.run,mode:apply?'apply':'preview',new_gate_decisions:25,existing_decisions_changed:0,new_ledger_rows:0,ledger_rows_modified:0,decision_documents:docs.size,original_rows_preserved:25,source_bodies_guarded_not_audited:Object.keys(proposal.source_preimages_for_guard_only).length,hashes_computed:false,gates_called:false,holds:[]};
if(!apply){console.log(JSON.stringify(summary,null,2));process.exit(0)}
requireTrue(args.includes('--approve-root-unowned25-only'),'Apply requires --approve-root-unowned25-only');
guards();
const at=new Date().toISOString(),archive=join(dir,'application-'+at.replaceAll(':','-'));requireTrue(!existsSync(archive),'Archive already exists');mkdirSync(archive,{recursive:true});
function archiveText(prefix,p,s){const dest=join(archive,prefix,p);mkdirSync(dirname(dest),{recursive:true});writeFileSync(dest,s)}
for(const[p,s]of Object.entries(proposal.full_decision_document_preimages))archiveText('before',p,s);
for(const[p,s]of Object.entries(proposal.source_preimages_for_guard_only))archiveText('source-guards',p,s);
for(const[p,s]of Object.entries(proposal.original_report_preimages))archiveText('original-reports',p,s);
writeFileSync(join(archive,'original-ledger-rows.json'),JSON.stringify(proposal.entries.map(e=>e.original_ledger_row),null,2)+'\n');
writeFileSync(join(archive,'guarded-proposal.json'),readFileSync(join(dir,'guarded-proposal.json')));
let receipt={...summary,at,archive:relative(root,archive),status:'prepared-not-completed',written:[],root_next:'Root must bind/stamp actual current carriers separately. No new native coverage or full proof reading is asserted by supplemental routing.'};
const save=()=>writeFileSync(join(archive,'application.json'),JSON.stringify(receipt,null,2)+'\n');save();
try{
 guards();
 for(const[p,doc]of docs){
  requireTrue(read(p)===proposal.full_decision_document_preimages[p],'Concurrent decision change '+p);
  const original=JSON.parse(proposal.full_decision_document_preimages[p]);requireTrue(eq(doc.decisions.slice(0,original.decisions.length),original.decisions),'Existing decision mutation');
  for(const d of doc.decisions.slice(original.decisions.length)){d.owner_routing_provenance.registered_at=at;d.owner_routing_provenance.by='/root';}
  const output=JSON.stringify(doc,null,2)+'\n',dest=resolve(root,p),tmp=dest+'.unowned25-root-tmp';requireTrue(!existsSync(tmp),'Temporary path exists '+tmp);writeFileSync(tmp,output,{flag:'wx'});renameSync(tmp,dest);archiveText('after',p,output);receipt.written.push(p);save();
 }
 requireTrue(read('research/defect-ledger.jsonl')===ledgerText,'Ledger changed concurrently during decision integration; inspect independently, script did not mutate it');
 receipt.status='applied-supplemental-owner-routing-only';save();console.log(JSON.stringify(receipt,null,2));
}catch(error){receipt.status='stopped-needs-root-inspection';receipt.error=String(error);save();throw error}
