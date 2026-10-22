import fs from 'node:fs';
import assert from 'node:assert/strict';
const run='physics-non-fluid-129-2026-10-21-r2';
const id='thm-csm-frontier-finite-jarzynski';
const cp=`research/${run}-batch-94.proof-contracts.json`;
const mp=`research/${run}-batch-94.pages.json`;
const c=JSON.parse(fs.readFileSync(cp,'utf8'));
const m=JSON.parse(fs.readFileSync(mp,'utf8'));
const supplier=fs.readFileSync('items/thm-ftc-second-part.md','utf8');
const quote=supplier.split('## Statement\n')[1].split('**Both hypotheses')[0].trim();
assert(quote.includes('Let $a < b$'));
const f=c.contracts[id].citations.find(x=>x.fact==='F4');
assert(['thm-ftc-first-part','thm-ftc-second-part'].includes(f.source));
f.source='thm-ftc-second-part';f.source_section='Statement';f.quote=quote;
let count=0;
for(const page of m)for(const item of [...(page.items??[]),...(page.examples??[])])if(item.id===id){
 count++;
 item.deps=item.deps.map(x=>x==='thm-ftc-first-part'?'thm-ftc-second-part':x);
 delete item.dependency_roles['thm-ftc-first-part'];
 item.dependency_roles['thm-ftc-second-part']='mathematical-premise';
 assert(item.deps.includes('thm-ftc-second-part'));
}
assert.equal(count,1);
fs.writeFileSync(cp,JSON.stringify(c,null,2)+'\n');
fs.writeFileSync(mp,JSON.stringify(m,null,2)+'\n');
console.log('Updated only Jarzynski F4 citation and owning dependency mirrors.');

// Reread the current batch-6 manifest under the same short lock.
const up=`research/${run}-batch-6.pages.json`;
const um=JSON.parse(fs.readFileSync(up,'utf8'));
const us=fs.readFileSync('items/pthm-emx-uniaxial-dispersion.md','utf8');
const statement=us.split('## Statement\n')[1].split('## Statement references')[0].trim();
const scope=us.match(/physical_scope: "([\s\S]*?)"\n/)[1].replace(/\s+/g,' ').trim();
let uc=0;
for(const page of um)for(const item of [...(page.items??[]),...(page.examples??[])])if(item.id==='pthm-emx-uniaxial-dispersion'){
 uc++;item.statement=statement;item.physical_scope=scope;
}
assert.equal(uc,1);
assert(statement.includes('For physical interpretation, declare a finite band'));
fs.writeFileSync(up,JSON.stringify(um,null,2)+'\n');
console.log('Updated uniaxial Statement and physical_scope mirrors.');
