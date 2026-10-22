// Root invokes after adopting proposal.json. No hashes, validators or gates.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {yaml} from '../../../../tools/pathway-lib.mjs';
assert.deepEqual(process.argv.slice(2),['--root-adopts-knot-page-prerequisites']);
const out=path.dirname(fileURLToPath(import.meta.url)),run='inverse-problems-knot-theory-all-109-2026-10-19',YAML=yaml();
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),proposal=read(path.join(out,'proposal.json'));
assert.equal(proposal.run,run);assert.equal(proposal.order_problems.length,0);
const manifests=new Map(),homes={},pageRecords=new Map(),modifiedManifests=new Set();
for(const n of fs.readdirSync('research').filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n))){const file=`research/${n}`,text=fs.readFileSync(file,'utf8'),data=JSON.parse(text);manifests.set(file,{text,data});for(const p of data){assert(!pageRecords.has(p.id));pageRecords.set(p.id,p);for(const it of p.items){const id=typeof it==='string'?it:it.id;assert(!Object.hasOwn(homes,id));homes[id]=p.id;}}}
assert.equal(pageRecords.size,218);assert.equal(Object.keys(homes).length,1471);assert.deepEqual(homes,read(path.join(out,'expected-item-homes.json')));
const planFile='research/plan-spec.json',planText=fs.readFileSync(planFile,'utf8'),plan=JSON.parse(planText),planPages=new Map(plan.pages.map(p=>[p.id,p])),mutations=[];
for(const u of proposal.updates){
 const m=pageRecords.get(u.page),p=planPages.get(u.page);assert(m&&p);assert.deepEqual(m.requires??[],u.existing.manifest_requires);assert.deepEqual(p.requires??[],u.existing.plan_requires);assert.equal(m.order,u.existing.manifest_order);assert.equal(p.order,u.existing.plan_order);
 const text=fs.readFileSync(u.source,'utf8'),parts=text.match(/^(---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))([\s\S]*)$/);assert(parts,'Missing frontmatter '+u.source);const doc=YAML.parseDocument(parts[2]);assert.equal(doc.errors.length,0);const fm=doc.toJS();assert.equal(fm.page,u.page);assert.deepEqual(fm.requires??[],u.existing.source_requires);assert.equal(fm.order,u.existing.source_order);
 for(const target of u.requires_additions){const q=planPages.get(target);assert(q&&q.order<p.order);}
 doc.set('requires',u.desired_requires);const eol=parts[1].includes('\r\n')?'\r\n':'\n';let front=doc.toString({lineWidth:0}).replace(/[\r\n]*$/,'');if(eol==='\r\n')front=front.replace(/\r?\n/g,eol);const next=parts[1]+front+parts[3]+parts[4];assert.equal(next.match(/^(---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))([\s\S]*)$/)[4],parts[4]);mutations.push({file:u.source,before:text,after:next});m.requires=u.desired_requires;p.requires=u.desired_requires;modifiedManifests.add(u.manifest);
}
for(const[file,x]of manifests){if(!modifiedManifests.has(file))continue;const after=JSON.stringify(x.data,null,2)+'\n';if(after!==x.text)mutations.push({file,before:x.text,after});}
const afterPlan=JSON.stringify(plan,null,2)+'\n';if(afterPlan!==planText)mutations.push({file:planFile,before:planText,after:afterPlan});
// Validate every before byte immediately before any archive/write; no hash used.
for(const m of mutations)assert.equal(fs.readFileSync(m.file,'utf8'),m.before,'Concurrent source change '+m.file);
const archive=path.join(out,'root-apply-before');assert(!fs.existsSync(archive),'Root application archive already exists; do not repeat');fs.mkdirSync(archive);
for(const m of mutations){const saved=path.join(archive,m.file);fs.mkdirSync(path.dirname(saved),{recursive:true});fs.writeFileSync(saved,m.before);}
for(const m of mutations){const temp=m.file+'.root-knot-prereq.tmp';fs.writeFileSync(temp,m.after);fs.renameSync(temp,m.file);}
fs.writeFileSync(path.join(out,'root-application-record.json'),JSON.stringify({run,scope:'Root-adopted requires metadata only; no proof, logical-edge, home, item-list or order changes',pages:proposal.updates.length,added_declared_edges:proposal.updates.reduce((n,u)=>n+u.requires_additions.length,0),changed_files:mutations.map(m=>m.file),archive,limits:'No hashes, validators, gates, readiness or native controls.'},null,2)+'\n');
console.log(`Root applied ${proposal.updates.length} page requires updates in ${mutations.length} metadata files; no validator run.`);
