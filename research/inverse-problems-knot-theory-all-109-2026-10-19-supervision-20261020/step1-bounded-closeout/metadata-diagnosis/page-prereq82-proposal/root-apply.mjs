#!/usr/bin/env node
// ROOT-ONLY exact82-page-prerequisite metadata application. Not executed by author.
import fs from'node:fs';import path from'node:path';import assert from'node:assert/strict';
const args=process.argv.slice(2),v=k=>{const i=args.indexOf(k);return i<0?undefined:args[i+1];};assert(v('--plan')&&v('--archive-dir'));
const p=JSON.parse(fs.readFileSync(v('--plan'),'utf8'));assert.equal(p.authorized_by,'/root');assert.equal(p.items,1471);assert.equal(p.pages,218);assert.equal(p.batches,109);assert.equal(p.witnesses.length,82);assert.equal(Object.keys(p.requires_overrides).length,49);assert.equal(Object.keys(p.page_order_overrides).length,0);
for(const c of p.changes){const actual=fs.readFileSync(c.file,'utf8');assert(actual===c.before||actual===c.after,`Changed input ${c.file}`);}
console.log(JSON.stringify({mode:args.includes('--apply')?'root-apply':'proposal-only',edges:82,pages:49,files:p.changes.length,order_changes:0,remaining:p.remaining_separate},null,2));
if(!args.includes('--apply'))process.exit(0);assert(args.includes('--battery-drained'),'Root attests completed diagnostic/native battery before metadata writes');
for(const c of p.changes){if(fs.readFileSync(c.file,'utf8')===c.after)continue;
 const archive=path.join(v('--archive-dir'),c.file);fs.mkdirSync(path.dirname(archive),{recursive:true});
 if(fs.existsSync(archive))assert.equal(fs.readFileSync(archive,'utf8'),c.before,'Archive preimage must remain exact');else fs.writeFileSync(archive,c.before,{flag:'wx'});
 assert.equal(fs.readFileSync(c.file,'utf8'),c.before,'Concurrent metadata writer');
 const tmp=c.file+`.root-page-prereqs-${process.pid}.tmp`;fs.writeFileSync(tmp,c.after,{flag:'wx'});fs.renameSync(tmp,c.file);
}
