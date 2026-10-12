import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',dir=path.join(root,'research',run+'-qm-composites-repair');
const statePath=path.join(root,'.physics-autopilot',run,'state.json');
const state=JSON.parse(fs.readFileSync(statePath,'utf8'));
if(state.paused!==true) throw new Error('Production formatting held: actual paused state is not true');
const writerRows=Object.values(state.dispatches);
for(const n of ['35','36']){
 const row=state.dispatches[`1-scaffold:batch-${n}`];
 if(!row?.endedAt||row.lastExitOk!==true)throw Error('Batch writer not ended successfully: '+n);
}
const active=writerRows.filter(r=>!r.endedAt && (r.covers??[]).some(c=>['35','36','batch-35','batch-36'].includes(String(c))));
if(active.length)throw Error('Active writer still covers 35/36');
const ids=['lem-nrqm-composites-separable-partial-trace','thm-nrqm-composites-infinite-schmidt-decomposition','lem-nrqm-composites-continuous-measurable-kraus-instrument'];
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const beforeDir=path.join(dir,'before-format');fs.mkdirSync(beforeDir,{recursive:true});
const rows=[];
for(const id of ids){
 const file=path.join(root,'items',id+'.md'),before=fs.readFileSync(file,'utf8');
 const at=before.indexOf('\n## Proof\n');if(at<0)throw Error('No proof section: '+id);
 const head=before.slice(0,at+'\n## Proof\n'.length),proof=before.slice(head.length);
 const labels=[...proof.matchAll(/^(\d+\.\d+) /gm)].map(x=>x[1]);
 const mapping=Object.fromEntries(labels.map((s,k)=>[s,`${k+1}.1`]));
 const inverse=Object.fromEntries(Object.entries(mapping).map(([a,b])=>[b,a]));
 const mapped=proof.replace(/\b\d+\.\d+\b/g,s=>mapping[s]??s);
 const first=mapped.search(/^\d+\.\d+ /m);if(first<0)throw Error('No numbered paragraphs');
 const parts=mapped.slice(first).split(/\n\n(?=\d+\.\d+ )/);
 const afterProof=mapped.slice(0,first)+parts.map(s=>s.trim().replace(/\s*\n\s*/g,' ')).join('\n\n')+'\n';
 const compare=s=>s.replace(/\s+/g,'');
 const unmap=afterProof.replace(/\b\d+\.\d+\b/g,s=>inverse[s]??s);
 if(compare(unmap)!==compare(proof))throw Error('Non-label/non-whitespace proof change detected: '+id);
 const after=head+afterProof;
 if(after.slice(0,head.length)!==head)throw Error('Public interface/Facts changed');
 const backup=path.join(beforeDir,id+'.md');if(fs.existsSync(backup))throw Error('Formatting preimage already exists; do not overwrite history');
 fs.writeFileSync(backup,before);fs.writeFileSync(file,after);
 rows.push({id,mapping,before_sha256:hash(before),after_sha256:hash(after),non_label_non_whitespace_proof_content_unchanged:true,statement_definition_facts_unchanged:true});
}
const contractFile=path.join(root,'research',run+'-batch-35.proof-contracts.json');
fs.copyFileSync(contractFile,path.join(beforeDir,path.basename(contractFile)));
const contracts=JSON.parse(fs.readFileSync(contractFile,'utf8'));
for(const row of rows){
 const c=contracts.contracts[row.id],mapText=s=>typeof s==='string'?s.replace(/\b\d+\.\d+\b/g,t=>row.mapping[t]??t):s;
 for(const citation of c.citations)citation.uses=citation.uses.map(t=>row.mapping[t]??t);
 for(const key of ['derivations','routine_steps'])for(const d of c[key]??[]){d.step=row.mapping[d.step]??d.step;d.id='step-'+d.step.replace('.','-');d.claim=mapText(d.claim);d.inputs=d.inputs.map(mapText);}
 for(const boundary of c.boundaries)for(const key of ['evidence','reason'])if(boundary[key])boundary[key]=mapText(boundary[key]);
 c.formatting_integration={cycle:1,evidence:'research/'+path.basename(dir)+'/formatting-receipt.json',change:'Source-order phase renumbering and paragraph flattening; no mathematical text change'};
}
fs.writeFileSync(contractFile,JSON.stringify(contracts,null,2)+'\n');
fs.writeFileSync(path.join(dir,'formatting-receipt.json'),JSON.stringify({version:1,run,batches:[35,36],formatting_cycle:1,substantive_cycles_unchanged:true,paused_verified:true,writer_dispatches:[state.dispatches['1-scaffold:batch-35'],state.dispatches['1-scaffold:batch-36']],items:rows,checks_pending:true},null,2)+'\n');
console.log(`Applied ${rows.length} source-order-preserving mechanical proof normalizations; public interfaces and non-label proof content unchanged`);
