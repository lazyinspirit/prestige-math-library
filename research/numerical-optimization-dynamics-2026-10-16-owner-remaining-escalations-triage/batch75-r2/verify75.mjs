// Read only. Default verifies projected output; --current verifies canonical metadata.
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';import {yaml,split} from '../../../tools/pathway-lib.mjs';
const base=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(base,'../../..');
assert(process.argv.slice(2).every(x=>x==='--current'));const current=process.argv.includes('--current');
const read=p=>fs.readFileSync(p,'utf8'),projection=JSON.parse(read(path.join(base,'projection.json')));
for(const rel of projection.guards)if(!current||!projection.outputs.includes(rel))assert.equal(read(path.join(root,rel)),read(path.join(base,'before',rel)),`Changed complete guarded input ${rel}`);
const output=rel=>JSON.parse(read(current?path.join(root,rel):path.join(base,'proposed',path.basename(rel))));
const contracts=output(projection.outputs[0]).contracts,pages=output(projection.outputs[1]);
function section(raw,title){const sections=[...raw.matchAll(/^## ([^\n]+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)];const matches=sections.filter(x=>x[1]===title);assert.equal(matches.length,1,`Unique section ${title}`);return matches[0][2].trim();}
function steps(raw){const entries=[...raw.matchAll(/^(\d+\.\d+) ([\s\S]*?)(?=^\d+\.\d+ |^## |$(?![\s\S]))/gm)];return entries.map(m=>{const text=m[2].trim();const end=/\s+\[([^\]\n]*)\](?:\s*∎)?$/.exec(text);assert(end,`Trailing tags ${m[1]}`);return {id:'step-'+m[1].replaceAll('.','-'),step:m[1],claim:text.slice(0,end.index).trim(),inputs:end[1].split(',').map(x=>x.trim())};});}
let citations=0,rows=0;
for(const [id,c]of Object.entries(contracts)){
 const raw=read(path.join(root,'items',id+'.md')),actual=steps(raw);assert.equal(c.derivations.length,actual.length,id+' step count');
 for(let i=0;i<actual.length;i++){for(const key of ['id','step','claim','inputs'])assert.deepEqual(c.derivations[i][key],actual[i][key],id+' '+key);rows++;}
 for(const s of actual)for(const ref of (s.claim+' '+s.inputs.join(',')).matchAll(/\bstep\s+(\d+\.\d+)\b/g))assert(actual.some(x=>x.step===ref[1]),id+' dangling '+ref[1]);
 const facts=raw.includes('## Facts & Assumptions')?section(raw,'Facts & Assumptions'):'';
 for(const cite of c.citations){const supplier=read(path.join(root,'items',cite.source+'.md'));assert.equal(cite.quote,section(supplier,cite.source_section),id+' quote '+cite.source);
 const fact=new RegExp('^\\['+cite.fact+'\\] ([\\s\\S]*?)(?=^\\[[A-Z]\\d+\\]|$(?![\\s\\S]))','m').exec(facts);assert(fact,id+' fact '+cite.fact);assert(fact[1].includes('[['+cite.source+']]')||fact[1].includes('[['+cite.source+'|'),id+' fact/source mismatch');assert.deepEqual(cite.uses,actual.filter(s=>s.inputs.includes(cite.fact)).map(s=>s.step),id+' uses');citations++;}
}
for(const p of pages)for(const item of p.items??[]){const meta=yaml().parse(split(read(path.join(root,'items',item.id+'.md'))).fm);for(const key of ['kind','title','deps','justified_by','dependency_level'])assert.deepEqual(item[key],meta[key],item.id+' page mirror '+key);}
console.log(JSON.stringify({mode:current?'current':'proposed',items:Object.keys(contracts).length,derivations:rows,citations,complete_guarded_inputs:projection.guards.length,pass:true}));
