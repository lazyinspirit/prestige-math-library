import fs from 'node:fs';
const run='physics-remaining-80-2026-10-17';
const reportPath=`research/${run}-step5-v2/step5-v2-impact-initial-r1-u2.json`;
const report=JSON.parse(fs.readFileSync(reportPath));
const ids=new Set(report.reviews.map(x=>x.id));
const changed=new Set(report.reviews.filter(x=>x.disposition==='repaired').map(x=>x.id));
const norm=s=>s.replace(/\s+/g,' ').trim();
function section(t,name){const escaped=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');const m=t.match(new RegExp('^## '+escaped+'\\s*\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))','m'));if(!m)throw Error(`Missing section ${name}`);return m[1].trim();}
const updates=[];
for(let b=1;b<=80;b++){
 const cp=`research/${run}-batch-${b}.proof-contracts.json`;
 if(!fs.existsSync(cp))continue;
 // Reread every owning file after lock acquisition; never use cached pre-lock data.
 const raw=fs.readFileSync(cp,'utf8'),x=JSON.parse(raw);let touched=false;
 for(const id of ids){const c=x.contracts[id];if(!c)continue;let changes=[];
  for(const cite of c.citations||[]){const source=`items/${cite.source}.md`;if(!fs.existsSync(source))throw Error(`Missing supplier ${source}`);const body=section(fs.readFileSync(source,'utf8'),cite.source_section);if(!norm(body).includes(norm(cite.quote))){const simple=cite.quote.replace('\\times\\mathbb T^3','\\times\\Sigma');cite.quote=norm(body).includes(norm(simple))?simple:body;changes.push(`exact ${cite.fact} quotation from ${cite.source}`);}}
  if(changed.has(id)){
   const text=fs.readFileSync(`items/${id}.md`,'utf8');const proof=section(text,/^## Proof\s*$/m.test(text)?'Proof':'Verification');
   for(const d of c.derivations||[]){const m=proof.match(new RegExp('^'+d.step.replace('.','\\.')+'\\s+([\\s\\S]*?)(?=^\\d+\\.\\d+\\s|$(?![\\s\\S]))','m'));if(!m)throw Error(`Missing ${id} ${d.step}`);const claim=m[1].trim().replace(/\s*\[[^\]\n]+\]\s*(?:∎)?\s*$/,'').trim();if(d.claim!==claim){d.claim=claim;changes.push(`derivation ${d.step}`);}}
  }
  if(changes.length){touched=true;updates.push({path:cp,id,changes});}
 }
 if(touched)fs.writeFileSync(cp,JSON.stringify(x,null,2)+'\n');
 const mp=`research/${run}-batch-${b}.pages.json`;if(!fs.existsSync(mp))continue;
 const mr=fs.readFileSync(mp,'utf8'),pages=JSON.parse(mr);let mt=false;
 for(const page of pages)for(const row of page.items||[]){if(!changed.has(row.id))continue;const text=fs.readFileSync(`items/${row.id}.md`,'utf8');const name=/^## Statement\s*$/m.test(text)?'Statement':'Example';const current=section(text,name);if(typeof row.statement==='string'&&row.statement!==current){row.statement=current;mt=true;updates.push({path:mp,id:row.id,changes:[`${name} mirror`]});}}
 if(mt)fs.writeFileSync(mp,JSON.stringify(pages,null,2)+'\n');
}
if(updates.length)report.repair_notes.metadata_updates=[...(report.repair_notes.metadata_updates??[]),...updates];
report.repair_notes.metadata_pending=[];
for(const review of report.reviews){if(updates.some(x=>x.id===review.id)&&review.disposition==='unaffected'){review.metadata_repair_only=true;review.reason+=' Carrier unchanged; only its owning exact supplier quotations were refreshed.';}}
fs.writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({updated:updates.length,files:[...new Set(updates.map(x=>x.path))]},null,2));
// The scoped validator requires the newly cited earlier variation steps as inputs.
{
 const cp=`research/${run}-batch-4.proof-contracts.json`;
 const x=JSON.parse(fs.readFileSync(cp));
 const d=x.contracts['lem-emg-charged-scalar-variation'].derivations.find(d=>d.step==='3.1');
 for(const input of ['step 1.1','step 1.2','step 1.3'])if(!d.inputs.includes(input))d.inputs.push(input);
 fs.writeFileSync(cp,JSON.stringify(x,null,2)+'\n');
}

// Final owning check runs while the same shared lock is held.
const {spawnSync}=await import("node:child_process");
const checked=spawnSync(process.execPath,["tools/physics-support/proof-contract.mjs",`research/${run}-batch-4.proof-contracts.json`,"--strict","--items","lem-emg-charged-scalar-variation,lem-emg-maxwell-stress-divergence,ex-emgmath-scalar-plane-wave,ex-emgmath-eh-boundary-derivative","--json"],{encoding:"utf8"});
if(checked.status!==0)throw Error(checked.stdout+checked.stderr);
console.log("Final batch-4 owning contract check passed under lock");
