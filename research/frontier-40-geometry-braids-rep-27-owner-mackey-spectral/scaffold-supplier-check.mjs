import {readFileSync,existsSync} from 'node:fs';
import {dependencyLevels} from '../../tools/item-dependency-levels.mjs';
const pages=JSON.parse(readFileSync('research/frontier-40-geometry-braids-rep-27-batch-3.pages.json','utf8'));
const {items,levels,errors}=dependencyLevels(pages);
const external=new Set();
for(const [id,{item}] of items)for(const dep of item.deps){if(items.has(dep))continue;external.add(dep);const path='items/'+dep+'.md';if(!existsSync(path)){errors.push(id+': missing '+dep);continue;}const text=readFileSync(path,'utf8').split('---')[1];if(!/^status:\s*["']?published["']?\s*$/m.test(text))errors.push(id+': supplier not published '+dep);if(/^  statement:\s*["']?ai-generated["']?\s*$/m.test(text))errors.push(id+': AI-generated logical supplier '+dep);if(/^proved_here:\s*false\s*$/m.test(text))errors.push(id+': recorded unproved logical supplier '+dep);}
console.log(JSON.stringify({batch:3,items:items.size,externalPublishedSuppliers:external.size,maxLevel:Math.max(...levels.values()),errors},null,2));process.exitCode=errors.length?1:0;
