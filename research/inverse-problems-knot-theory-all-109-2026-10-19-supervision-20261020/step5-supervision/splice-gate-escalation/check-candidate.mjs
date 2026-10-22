// Read-only root review guard. Never applies the candidate or changes live inputs.
import {readFileSync as read} from 'node:fs';
import {createHash} from 'node:crypto';
const sha=x=>createHash('sha256').update(x).digest('hex'),base=new URL('.',import.meta.url),inventory=JSON.parse(read(new URL('inventory.json',base))),need=(v,m)=>{if(!v)throw Error(m)};
for(const [path,hash]of Object.entries(inventory.bindings))need(sha(read(path))===hash,'Stale bound carrier: '+path);
const candidate=read(new URL('candidate/research/plan-spec.json',base));need(sha(candidate)===inventory.candidate_sha256,'Candidate bytes changed');
const before=JSON.parse(read('research/plan-spec.json')),after=JSON.parse(candidate),changes=new Map(inventory.changes.map(p=>[p.page,p]));
need(before.pages.length===after.pages.length,'Page inventory changed');
for(let k=0;k<before.pages.length;k++){
 const a=before.pages[k],b=after.pages[k],licensed=changes.get(a.id);need(a.id===b.id,'Page order changed');
 const want=structuredClone(a);if(licensed)want.items=licensed.items.reduce((items,change)=>{const ix=items.findIndex(i=>i.id===change.id);need(ix>=0,'Missing item');items[ix]=change.after;return items;},want.items);
 need(JSON.stringify(want)===JSON.stringify(b),'Unlicensed candidate delta on '+a.id);
}
console.log(`PASS exact candidate: ${inventory.changed_pages} pages / ${inventory.changed_items} existing records; foreign rows and plan metadata preserved; no live writes`);
