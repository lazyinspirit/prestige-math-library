import{readFileSync,writeFileSync,mkdirSync,existsSync}from'node:fs';
import{spawnSync}from'node:child_process';
import{numberedProofSteps,sourceSectionText,splitFrontmatter}from'../../tools/facts-block.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,receipt=`${base}/step2-gate-contract-mirror-refresh.json`,archive=`${base}/step2-gate-contract-mirrors-before`;
if(existsSync(receipt))throw Error('Already refreshed');
if(!existsSync(`${base}/step2-gate-boundary-integration.json`))throw Error('Boundary integration not complete');
const rows=[];mkdirSync(archive,{recursive:true});
for(let batch=1;batch<=71;batch++){
 const path=`research/${run}-batch-${batch}.proof-contracts.json`,raw=readFileSync(path,'utf8'),doc=JSON.parse(raw),ids=[];
 for(const[id,c]of Object.entries(doc.contracts)){
  const source=readFileSync(`items/${id}.md`,'utf8'),steps=numberedProofSteps(splitFrontmatter(source).body),claims=new Map(steps.map(s=>[s.id,s.claim]));
  const staleSteps=(c.derivations??[]).some(d=>claims.get(d.step)!==d.claim);
  const staleQuotes=(c.citations??[]).some(q=>{const s=splitFrontmatter(readFileSync(`items/${q.source}.md`,'utf8')).body;return sourceSectionText(s,q.source_section)?.trim()!==q.quote;});
  if(staleSteps||staleQuotes){if(!steps.length)throw Error(`Unexpected nonproof mirror ${id}`);ids.push(id);rows.push({id,batch,stale_steps:staleSteps,stale_quotes:staleQuotes});}
 }
 if(!ids.length)continue;
 writeFileSync(`${archive}/batch-${batch}.json`,raw,{flag:'wx'});
 const result=spawnSync(process.execPath,['tools/regen-contract-entries.mjs',path,...ids],{encoding:'utf8',maxBuffer:8*1024*1024});
 if(result.status!==0||result.error)throw Error(result.stderr||result.error?.message||'Mirror refresh failed');
 const after=JSON.parse(readFileSync(path));
 for(const id of ids)for(const key of ['boundaries','finite_smoke','risk_review'])if(JSON.stringify(after.contracts[id][key])!==JSON.stringify(doc.contracts[id][key]))throw Error(`Unrelated worksheet changed ${id}/${key}`);
}
writeFileSync(receipt,JSON.stringify({run,at:new Date().toISOString(),archive,rows,source_edits:false,other_worksheets_preserved:true,native_gate_credit:false},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({refreshed:rows.length,batches:new Set(rows.map(r=>r.batch)).size}));
