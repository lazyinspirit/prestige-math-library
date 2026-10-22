// Root-only placement maintenance. Item source files are NEVER written.
import fs from'node:fs';import path from'node:path';import assert from'node:assert/strict';import{fileURLToPath}from'node:url';import{split,yaml}from'../../../../tools/pathway-lib.mjs';
assert.deepEqual(process.argv.slice(2),['--root-adopts-seven-existing-placement-moves']);const out=path.dirname(fileURLToPath(import.meta.url)),p=JSON.parse(fs.readFileSync(path.join(out,'proposal.json'),'utf8')),Y=yaml(),changes=[];
const read=f=>JSON.parse(fs.readFileSync(f,'utf8')),planFile='research/plan-spec.json',planText=fs.readFileSync(planFile,'utf8'),plan=JSON.parse(planText);
// Each plan update is confined to exact existing page records; unrelated IP
// requires changes made by root since authoring are preserved.
for(const u of p.plan_page_updates){const i=plan.pages.findIndex(x=>x.id===u.page);assert(i>=0);assert.deepEqual(plan.pages[i],u.before,'Plan source changed '+u.page);plan.pages[i]=u.desired;}
for(const u of p.canonical_page_updates){const text=fs.readFileSync(u.file,'utf8'),m=text.match(/^(---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))([\s\S]*)$/);assert(m);const doc=Y.parseDocument(m[2]);assert.equal(doc.errors.length,0);assert.deepEqual(doc.toJS(),u.before,'Page header changed '+u.file);for(const k of['items','examples'])if(Object.hasOwn(u.desired,k))doc.set(k,u.desired[k]);let front=doc.toString({lineWidth:0}).replace(/[\r\n]*$/,'');if(m[1].includes('\r\n'))front=front.replace(/\r?\n/g,'\r\n');const after=m[1]+front+m[3]+m[4];assert.equal(split(after).body,m[4]);changes.push({file:u.file,before:text,after});}
for(const u of p.manifest_updates){const text=fs.readFileSync(u.file,'utf8');assert.deepEqual(JSON.parse(text),u.before,'Manifest changed '+u.file);changes.push({file:u.file,before:text,after:JSON.stringify(u.desired,null,2)+'\n'});}
// Guard the moved source contracts at their literal metadata scope; do not
// reconstruct or reread proofs, do not change kind/body/verification/deps.
for(const m of p.moves){const fm=Y.parse(split(fs.readFileSync(`items/${m.id}.md`,'utf8')).fm);assert.equal(fm.kind,m.kind);assert.equal(fm.status,m.status);assert.deepEqual(fm.deps??[],m.deps);}
// Root amendment: replace only the ten authorized page objects, preserving
// every unrelated plan byte (and retaining draft Step2 item arrays unchanged).
const spans=[];const starts=[];let quoted=false,escaped=false;
for(let n=0;n<planText.length;n++){const c=planText[n];if(quoted){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')quoted=false;continue;}if(c==='"'){quoted=true;continue;}if(c==='{')starts.push(n);else if(c==='}'){const start=starts.pop();if(starts.length===1){const raw=planText.slice(start,n+1);let obj;try{obj=JSON.parse(raw)}catch{};if(obj?.id&&p.plan_page_updates.some(u=>u.page===obj.id)){const row=p.plan_page_updates.find(u=>u.page===obj.id);assert.deepEqual(obj,row.before);const prefix=planText.slice(planText.lastIndexOf('\n',start)+1,start);assert(/^ *$/.test(prefix));spans.push({start,end:n+1,text:JSON.stringify(row.desired,null,2).replace(/\n/g,'\n'+prefix)});}}}}
assert.equal(spans.length,p.plan_page_updates.length);let planAfter=planText;for(const x of spans.sort((a,b)=>b.start-a.start))planAfter=planAfter.slice(0,x.start)+x.text+planAfter.slice(x.end);assert.deepEqual(JSON.parse(planAfter),plan);
changes.push({file:planFile,before:planText,after:planAfter});
for(const c of changes)assert.equal(fs.readFileSync(c.file,'utf8'),c.before,'Concurrent change '+c.file);
const archive=path.join(out,'root-placement-before');assert(!fs.existsSync(archive),'Root archive exists: do not repeat');fs.mkdirSync(archive);
for(const c of changes){const f=path.join(archive,c.file);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,c.before);}
for(const c of changes){const tmp=c.file+'.root-seven-placement.tmp';fs.writeFileSync(tmp,c.after);fs.renameSync(tmp,c.file);}
fs.writeFileSync(path.join(out,'root-application-record.json'),JSON.stringify({run:p.run,adopted_by:'/root',kind:'seven-existing-placement-only-moves',moves:p.moves.map(({id,from,to,status,kind})=>({id,from,to,status,kind})),changed_files:changes.map(c=>c.file),archive,limits:'Item files, IDs, kind, body, dependencies, statements, proofs and verification stamps untouched. No hashes, validator, gates or native state control.'},null,2)+'\n');console.log('Root applied7existing placement-only moves; item files untouched; no validator run.');
