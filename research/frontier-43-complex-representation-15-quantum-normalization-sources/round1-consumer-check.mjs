import fs from 'node:fs';
import {frontmatterList} from '../../tools/frontmatter-list.mjs';
const path='research/frontier-43-complex-representation-15-quantum-normalization-sources';
const changed=JSON.parse(fs.readFileSync(path+'/round1-ids.json','utf8'));
const batch=new Set(JSON.parse(fs.readFileSync(path+'/round1-batch-items.json','utf8')));
const reverse=new Map();
for(const file of fs.readdirSync('items').filter(f=>f.endsWith('.md'))){
 const s=fs.readFileSync('items/'+file,'utf8');const fm=s.match(/^---\n([\s\S]*?)\n---/)?.[1]??'';const id=file.slice(0,-3);
 for(const dep of frontmatterList(fm,'deps')){
  if(!reverse.has(dep))reverse.set(dep,new Set());reverse.get(dep).add(id);
 }
}
const direct=Object.fromEntries(changed.map(id=>[id,[...(reverse.get(id)??[])].sort()]));
const closure=new Set();const queue=[...changed];
for(let n=0;n<queue.length;n++)for(const id of reverse.get(queue[n])??[])if(!closure.has(id)){closure.add(id);queue.push(id);}
const outside=[...closure].filter(id=>!batch.has(id)).sort();
const out={direct,closure:[...closure].sort(),outside_batch_consumers:outside};
fs.writeFileSync(path+'/round1-consumers.json',JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify(out,null,2));
