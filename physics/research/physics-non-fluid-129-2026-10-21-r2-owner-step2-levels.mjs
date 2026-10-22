// Root numeric labels from the actual adopted dependency graph.
import {readFileSync,writeFileSync,readdirSync,mkdirSync,existsSync} from 'node:fs';
import {dirname} from 'node:path';
import {createHash} from 'node:crypto';
import {dependencyLevels} from '../tools/physics-support/item-dependency-levels.mjs';
import {readItem} from '../tools/physics-support/physics-content.mjs';
import {splitFrontmatter} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',out=`research/${run}-owner-step2-root-adoption/levels`;
const sha=b=>createHash('sha256').update(b).digest('hex'),read=p=>JSON.parse(readFileSync(p));
if(!process.argv.includes('--outside-writers-drained')||existsSync(out))throw Error('Require actual release and unused archive');
const original=new Map(),docs=new Map(),pending=new Map();
for(const name of readdirSync('research').filter(n=>n.startsWith(run+'-batch-')&&n.endsWith('.pages.json'))){const p=`research/${name}`,b=readFileSync(p);original.set(p,b);docs.set(p,JSON.parse(b));}
const pages=[...docs.values()].flat(),graph=dependencyLevels(pages,{validateLabels:false});
if(graph.errors.length||graph.items.size!==852||pages.length!==258)throw Error('Actual graph differs '+JSON.stringify(graph.errors));
const rows=[];
for(const[id,{item}]of graph.items){
 const path=`items/${id}.md`,before=readFileSync(path),source=readItem(path),level=graph.levels.get(id);
 if(JSON.stringify([...(source.deps??[])].sort())!==JSON.stringify([...item.deps].sort()))throw Error('Source/manifest deps differ '+id);
 const old=item.dependency_level;item.dependency_level=level;
 if(source.dependency_level===level&&old===level)continue;
 const text=before.toString(),parts=splitFrontmatter(text),matches=[...parts.fm.matchAll(/^dependency_level:\s*\d+\s*$/gm)];if(matches.length!==1)throw Error('Nonunique source label '+id);
 const after=Buffer.from(`---\n${parts.fm.replace(/^dependency_level:\s*\d+\s*$/m,`dependency_level: ${level}`)}\n---\n${parts.body}`);
 if(splitFrontmatter(after.toString()).body!==parts.body)throw Error('Source body changed');
 if(!before.equals(after)){original.set(path,before);pending.set(path,after);}
 rows.push({id,old_source_level:source.dependency_level,old_manifest_level:old,new_level:level,source_body_unchanged:true});
}
for(const[p,d]of docs)if(JSON.stringify(JSON.parse(original.get(p)))!==JSON.stringify(d))pending.set(p,Buffer.from(JSON.stringify(d,null,2)+'\n'));
function verify(){if(existsSync(`.physics-autopilot/${run}/controller.lock`)||Object.values(read(`.physics-autopilot/${run}/state.json`).dispatches).some(d=>!d.endedAt))throw Error('Native writers active');for(const[p,b]of original)if(!readFileSync(p).equals(b))throw Error('Input changed '+p);}
verify();mkdirSync(out,{recursive:true});for(const[p,b]of pending){const a=`${out}/before/${p}`;mkdirSync(dirname(a),{recursive:true});writeFileSync(a,original.get(p));}
verify();for(const[p,b]of pending)writeFileSync(p,b);
writeFileSync(`${out}/receipt.json`,JSON.stringify({at:new Date().toISOString(),run,items:852,pages:258,maximum_level:Math.max(...graph.levels.values()),changes:rows,files:[...pending].map(([path,b])=>({path,before_sha256:sha(original.get(path)),after_sha256:sha(b)})),source_bodies_unchanged:true,scientific_acceptance:false,native_gate:false},null,2)+'\n');
console.log(JSON.stringify({items:852,maximum_level:Math.max(...graph.levels.values()),labels:rows.length,files:pending.size,source_bodies_unchanged:true}));
