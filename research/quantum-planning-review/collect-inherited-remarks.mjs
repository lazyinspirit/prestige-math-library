import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadCorpus} from '../../tools/pathway-lib.mjs';
const corpus=loadCorpus();
const proposals=new Map(['quantum-computing','quantum-algorithms'].flatMap(c=>JSON.parse(readFileSync(`research/${c}-planning/proposed-items.json`,'utf8')).items).map(r=>[r.id,r]));
const canon=id=>proposals.has(id)?id:corpus.resolve(id);
const seen=new Set();
function visit(id){id=canon(id);if(!id||seen.has(id))return;seen.add(id);for(const d of (proposals.get(id)??corpus.items.get(id)).deps??[])visit(d);}
for(const id of proposals.keys())visit(id);
const rootClosure=[...seen].filter(id=>!proposals.has(id));
writeFileSync('research/quantum-planning-review/root-prerequisite-closure.json',JSON.stringify(rootClosure,null,2)+'\n');
const errors=JSON.parse(readFileSync('research/quantum-planning-review/mechanical-check.json','utf8')).errors;
const targets=errors.filter(x=>x.code==='forbidden-transitive-supplier').map(x=>x.subject);
const rows=targets.map(remark=>({remark,source:`items/${remark}.md`,direct_logical_consumers:rootClosure.filter(id=>!id.startsWith('rem-')&&(corpus.items.get(id).deps??[]).some(d=>canon(d)===remark)).map(id=>({id,path:`items/${id}.md`,status:corpus.items.get(id).status,current_deps:corpus.items.get(id).deps,source_raw_sha256:createHash('sha256').update(readFileSync(`items/${id}.md`)).digest('hex')}))}));
writeFileSync('research/quantum-planning-review/inherited-remark-edges.json',JSON.stringify({scope:'Only inherited root logical consumers in the two commissioned proposals prerequisite closure; no source changes',remarks:rows},null,2)+'\n');
console.log(JSON.stringify(rows.map(r=>({remark:r.remark,consumers:r.direct_logical_consumers.map(x=>x.id)})),null,2));
