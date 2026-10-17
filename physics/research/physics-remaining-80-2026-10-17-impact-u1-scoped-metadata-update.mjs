import fs from 'node:fs';
const path='research/physics-remaining-80-2026-10-17-batch-23.pages.json';
const doc=JSON.parse(fs.readFileSync(path,'utf8'));
const item=fs.readFileSync('items/def-emg-xs-harmonic-mp.md','utf8');
const statement=item.split('## Definition\n')[1].trim();
let count=0;
function visit(x){if(Array.isArray(x)){x.forEach(visit);return;}if(!x||typeof x!=='object')return;if(x.id==='def-emg-xs-harmonic-mp'){if(typeof x.statement!=='string')throw Error('missing statement');x.statement=statement;count++;return;}Object.values(x).forEach(visit);}
visit(doc);if(count!==1)throw Error('ambiguous manifest ownership');
fs.writeFileSync(path,JSON.stringify(doc,null,2)+'\n');
const check=JSON.parse(fs.readFileSync(path,'utf8'));let matched=0;
function verify(x){if(Array.isArray(x))return x.forEach(verify);if(!x||typeof x!=='object')return;if(x.id==='def-emg-xs-harmonic-mp'){if(x.statement!==statement)throw Error('statement mismatch');matched++;}else Object.values(x).forEach(verify);}
verify(check);if(matched!==1)throw Error('verification failed');
console.log('Updated only harmonic definition statement mirror; exact equality verified.');
const pack=JSON.parse(fs.readFileSync('research/physics-remaining-80-2026-10-17-step5-v2/impact-initial-1.json','utf8'));
const owned=new Set(pack.assignments['1']);
const affected=new Map(pack.impacts.map(r=>[r.id,new Set(r.suppliers)]));
affected.get('post-emg-einstein-maxwell-action').add('post-emg-selected-matter-action');
const norm=s=>s.replace(/\s+/g,' ').trim();
function section(id,name){const s=fs.readFileSync(`items/${id}.md`,'utf8');const lines=s.split('\n');const at=lines.findIndex(l=>l.trim()===`## ${name}`);if(at<0)throw Error(`missing section ${id}/${name}`);let end=at+1;while(end<lines.length&&!lines[end].startsWith('## '))end++;return lines.slice(at+1,end).join('\n').trim();}
const changes=[];
for(const name of fs.readdirSync('research').filter(n=>/^physics-remaining-80-2026-10-17-batch-\d+\.proof-contracts\.json$/.test(n))){
 const p=`research/${name}`,d=JSON.parse(fs.readFileSync(p,'utf8'));let dirty=false;
 for(const [id,c] of Object.entries(d.contracts)){
  if(!owned.has(id))continue;
  for(const key of ['citations','supplier_excerpts'])for(const row of c[key]??[]){
   const supplier=row.source??row.supplier,field=key==='citations'?'quote':'exact_statement';
   if(!affected.get(id)?.has(supplier)||!row.source_section||!row[field])continue;
   const current=section(supplier,row.source_section);
   if(!norm(current).includes(norm(row[field]))){row[field]=current;dirty=true;changes.push({path:p,id,field:key,supplier,section:row.source_section});}
  }
  if(id==='post-emg-selected-matter-action'){
   const current='The Postulate selects a smooth section bundle, real functional domain, admissible compact curves with freezing and linear partial-derivative splitting, and supplied smooth pathwise matter transports, in the exact Noether convention. Its physical metric and connection variations retain the stated Hilbert/current normalization.';
   if(c.physics_review.formulation.evidence!==current){c.physics_review.formulation.evidence=current;dirty=true;changes.push({path:p,id,field:'physics_review.formulation'});}
  }
 }
 if(dirty){fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');JSON.parse(fs.readFileSync(p,'utf8'));}
}
const mp='research/physics-remaining-80-2026-10-17-batch-5.pages.json';
const md=JSON.parse(fs.readFileSync(mp,'utf8'));let updated=0;
function update(x){if(Array.isArray(x))return x.forEach(update);if(!x||typeof x!=='object')return;if(x.id==='post-emg-selected-matter-action'){x.statement=section(x.id,'Postulate');updated++;}else Object.values(x).forEach(update);}
update(md);if(updated!==1)throw Error('ambiguous selected-matter manifest ownership');fs.writeFileSync(mp,JSON.stringify(md,null,2)+'\n');
console.log(JSON.stringify({contract_changes:changes,manifest:mp}));
