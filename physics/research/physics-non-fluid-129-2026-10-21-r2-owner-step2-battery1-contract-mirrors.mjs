// Root exact alpha-equivalent source/manifest/worksheet mirror and guard refresh.
import{readFileSync,writeFileSync,mkdirSync,existsSync}from'node:fs';import{createHash}from'node:crypto';
const run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-step2-battery1-findings`,out=`${base}/mirrors`,read=p=>JSON.parse(readFileSync(p)),sha=x=>createHash('sha256').update(x).digest('hex'),receipt=read(`${base}/application/receipt.json`),byId=new Map(receipt.source_alpha_renames.map(r=>[r.id,r])),rename=s=>s.replaceAll('\\iota','\\jmath');if(existsSync(out))throw Error('Preserve prior mirror operation');if(existsSync(`.physics-autopilot/${run}/controller.lock`))throw Error('Native active');const pending=[];
for(let batch=1;batch<=129;batch++){
 const manifestPath=`research/${run}-batch-${batch}.pages.json`,mb=readFileSync(manifestPath),manifest=JSON.parse(mb);for(const p of manifest)for(const i of p.items)if(byId.has(i.id)&&typeof i.statement==='string')i.statement=rename(i.statement);const ma=Buffer.from(JSON.stringify(manifest,null,2)+'\n');if(!mb.equals(ma))pending.push({path:manifestPath,before:mb,after:ma});
 const path=`research/${run}-batch-${batch}.proof-contracts.json`,before=readFileSync(path),doc=JSON.parse(before);for(const[id,e]of Object.entries(doc.contracts)){
  const own=byId.get(id);
  if(own){for(const field of ['derivations','routine_steps'])for(const d of e[field]??[])d.claim=rename(d.claim);
   for(const b of e.boundaries??[]){for(const k of ['evidence','reason'])if(typeof b[k]==='string')b[k]=rename(b[k]);if(b.case_scope?.source_excerpt)b.case_scope.source_excerpt=rename(b.case_scope.source_excerpt);
    for(const k of ['template_review','reviewed'])if(b[k]){if(typeof b[k].reason==='string')b[k].reason=rename(b[k].reason);if(b[k].item_sha256){if(b[k].item_sha256!==own.before_item_guard)throw Error('Prior review currency differs '+id);b[k].item_sha256=own.after_item_guard;}if(b[k].row_sha256)b[k].row_sha256=sha(JSON.stringify({case:b.case,status:b.status,text:b.reason??b.evidence}));b[k].alpha_rebinding_receipt=`${base}/application/receipt.json`;}
   }
   if(e.current_boundary_worksheet){if(e.current_boundary_worksheet.source_sha256!==own.before_sha256)throw Error('Prior source binding differs '+id);e.current_boundary_worksheet.previous_source_sha256=own.before_sha256;e.current_boundary_worksheet.source_sha256=own.after_sha256;e.current_boundary_worksheet.alpha_rebinding_receipt=`${base}/application/receipt.json`;}
   e.notation_rebinding_receipt=`${base}/application/receipt.json`;
  }
  for(const c of e.citations??[])if(byId.has(c.source))c.quote=rename(c.quote);
  for(const x of e.supplier_excerpts??[])if(byId.has(x.supplier)&&typeof x.exact_statement==='string')x.exact_statement=rename(x.exact_statement);
 }
 const after=Buffer.from(JSON.stringify(doc,null,2)+'\n');if(!before.equals(after))pending.push({path,before,after});
}
mkdirSync(`${out}/before`,{recursive:true});for(const r of pending){if(!readFileSync(r.path).equals(r.before))throw Error('Input changed');const p=`${out}/before/${r.path}`;mkdirSync(p.slice(0,p.lastIndexOf('/')),{recursive:true});writeFileSync(p,r.before);}for(const r of pending)writeFileSync(r.path,r.after);writeFileSync(`${out}/receipt.json`,JSON.stringify({at:new Date().toISOString(),qualification:'Only alpha-renamed current public interfaces/own proof claims/exact source quotes and their active byte guards mirrored; all original history preserved, no new independent proof acceptance.',changes:pending.map(r=>({path:r.path,before_sha256:sha(r.before),after_sha256:sha(r.after)})),native_gate:false},null,2)+'\n');console.log(JSON.stringify({files:pending.length,manifest_batches:pending.filter(r=>r.path.endsWith('.pages.json')).map(r=>r.path.match(/batch-(\d+)/)[1])}));
