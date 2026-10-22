import fs from 'node:fs';
const run='physics-non-fluid-129-2026-10-21-r2';
if(process.argv[2]==='consumer-quote'){
 const p=`research/${run}-batch-4.proof-contracts.json`,x=JSON.parse(fs.readFileSync(p,'utf8'));
 const s=fs.readFileSync('items/pthm-emx-weak-poynting-uniqueness.md','utf8');
 const quote=s.split('## Statement\n')[1].split('\n## ')[0].split('Here $E_')[0].trim();
 const row=x.contracts['ex-emx-impedance-sign-check'].citations.find(r=>r.fact==='F2');
 if(row.source!=='pthm-emx-weak-poynting-uniqueness'||!quote.includes('Green-compatible impedance branch'))throw Error('wrong affected quote');
 row.quote=quote;fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
 console.log('Reconciled impedance example F2 to the exact unchanged energy-balance excerpt');process.exit(0);
}
for (const [batch,id,step] of [[4,'pthm-emx-weak-poynting-uniqueness','5.1'],[6,'pthm-emx-lorentz-reciprocity','3.1']]) {
 const s=fs.readFileSync(`items/${id}.md`,'utf8');
 const sec=(body,name)=>body.split(`## ${name}\n`)[1].split(/^## /m)[0].trim();
 const pp=`research/${run}-batch-${batch}.pages.json`, cp=`research/${run}-batch-${batch}.proof-contracts.json`;
 const pages=JSON.parse(fs.readFileSync(pp,'utf8')), contract=JSON.parse(fs.readFileSync(cp,'utf8'));
 let count=0;for (const page of pages) for(const item of [...(page.items||[]),...(page.examples||[])]) if(item.id===id){item.statement=sec(s,'Statement');item.title=JSON.parse(s.match(/^title: (.*)$/m)[1]);item.physical_scope=JSON.parse(s.match(/^physical_scope: (.*)$/m)[1]);count++;}
 if(count!==1)throw Error(`manifest carrier count ${count}`);
 const c=contract.contracts[id];const para=sec(s,'Proof').split(/\n\s*\n/).find(p=>p.startsWith(step+' '));if(!para)throw Error('missing step');
 const row=c.derivations.find(r=>r.step===step);row.claim=para.slice(step.length+1).replace(/\s*\[[^\]]+\]\s*∎?\s*$/,'');
 if(batch===6){const d=sec(fs.readFileSync('items/def-emx-anisotropic-plane-symbol.md','utf8'),'Definition');const quote=d.split(/\n\s*\n/).find(p=>p.startsWith('Use a material-rest frame:'));c.citations.find(r=>r.fact==='L2').quote=quote;const ex=c.supplier_excerpts.find(r=>r.supplier==='def-emx-anisotropic-plane-symbol');if(ex)ex.exact_statement=quote;}
 for(const [p,x]of [[pp,pages],[cp,contract]])fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
 console.log(`Synchronized ${id} manifest and changed proof derivation`);
}
