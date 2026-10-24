import fs from 'node:fs';
const run='advanced-qft-supersymmetry-build-2026-10-23';
const pack=JSON.parse(fs.readFileSync(`research/${run}-step5-v2/impact-initial-1.json`));
const owned=new Set(pack.assignments['3']);
const norm=s=>s.replace(/\s+/g,' ').trim();
const source=id=>fs.readFileSync(`items/${id}.md`,'utf8');
function section(s,h){const m=s.match(new RegExp('^## '+h+'\\s*\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))','m'));if(!m)throw Error('Missing section '+h);return m[1].trim();}
if(process.argv.includes('--titles-only')){
 const changed=[];
 for(const [batch,id]of [[47,'ex-qftx-susy-round-s4-localization-data'],[48,'pthm-qftx-qexact-localization-ward-identity']]){
  const path=`research/${run}-batch-${batch}.pages.json`,pages=JSON.parse(fs.readFileSync(path));
  const item=pages.flatMap(p=>p.items??[]).find(i=>i.id===id);if(!item)throw Error('Missing source-title owner');
  const ref=item.sources.references.find(r=>r.url==='https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf');
  const title='Wolfger Peelaers (lectures), Bruno Le Floch (notes), 4d N=2 Localization';
  if(ref.title!==title){ref.title=title;fs.writeFileSync(path,JSON.stringify(pages,null,2)+'\n');changed.push({id,field:'manifest.sources.references title'});}
 }
 console.log(JSON.stringify({edits:changed}));process.exit(0);
}
const edits=[];
for(const f of fs.readdirSync('research').filter(f=>new RegExp('^'+run+'-batch-\\d+\\.proof-contracts\\.json$').test(f))){
 const path='research/'+f,d=JSON.parse(fs.readFileSync(path));let changed=false;
 for(const[id,c]of Object.entries(d.contracts??{})){
  if(!owned.has(id))continue;
  for(const row of c.citations??[]){if(!row.source||!row.quote||!fs.existsSync(`items/${row.source}.md`))continue;
   const current=source(row.source);if(norm(current).includes(norm(row.quote)))continue;
   // Only current owning citation records of this assigned consumer are changed.
   let quote=section(current,row.source_section);
   if(id==='pthm-qftx-n2-monopole-condensation-after-n1-perturbation'&&row.fact==='F2'){
    const start=quote.indexOf('A **classical supersymmetric vacuum configuration**');const end=quote.indexOf('For a **specified, already constructed quantum theory**');if(start<0||end<0)throw Error('Missing compact-orbit paragraphs');quote=quote.slice(start,end).trim();
   }
   row.quote=quote;changed=true;edits.push({id,field:`citations.${row.fact}`,source:row.source});
  }
  const step=id==='pthm-aqft-heavy-chiral-threshold-wess-zumino-match'?'1.2':id==='pthm-qftx-n2-monopole-condensation-after-n1-perturbation'?'1.1':null;
  if(step){const proof=section(source(id),'Proof');const re=new RegExp('^'+step.replace('.','\\.')+' ([\\s\\S]*?)(?=\\n\\n|$(?![\\s\\S]))','m');const m=proof.match(re);if(!m)throw Error('Missing repaired step');const claim=m[1].replace(/\s*\[[^\]\n]+\](?:\s*∎)?\s*$/,'');const row=c.derivations.find(x=>x.step===step);if(!row)throw Error('Missing derivation');if(row.claim!==claim){row.claim=claim;changed=true;edits.push({id,field:`derivations.${step}`});}}
  if(id==='pthm-aqft-heavy-chiral-threshold-wess-zumino-match'&&c.risk_review?.notes?.includes('Corrected gamma5 to +i upper-index product, hence -i lower-index product')){
   c.risk_review.notes=c.risk_review.notes.replace('Corrected gamma5 to +i upper-index product, hence -i lower-index product','The current convention is gamma5 with -i upper-index product, hence +i lower-index product');changed=true;edits.push({id,field:'risk_review.notes chirality convention'});
  }
 }
 if(changed){fs.writeFileSync(path,JSON.stringify(d,null,2)+'\n');JSON.parse(fs.readFileSync(path));}
}
const manifest=`research/${run}-batch-44.pages.json`,pages=JSON.parse(fs.readFileSync(manifest));const item=pages.flatMap(p=>p.items??[]).find(x=>x.id==='pthm-aqft-heavy-chiral-threshold-wess-zumino-match');if(!item)throw Error('Missing owned manifest row');
const claim=section(source(item.id),'Statement');if(item.statement!==claim){item.statement=claim;fs.writeFileSync(manifest,JSON.stringify(pages,null,2)+'\n');edits.push({id:item.id,field:'manifest.statement'});}
console.log(JSON.stringify({edits},null,2));
