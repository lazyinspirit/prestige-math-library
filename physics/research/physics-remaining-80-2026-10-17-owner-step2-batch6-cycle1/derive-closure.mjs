import {readFileSync,readdirSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {consumers} from '/home/lazyinspirit/Projects/prestige-math-library/physics/tools/batch-scope-review.mjs';
import {frontmatterList} from '/home/lazyinspirit/Projects/prestige-math-library/physics/tools/frontmatter-list.mjs';
const root='/home/lazyinspirit/Projects/prestige-math-library/physics',run='physics-remaining-80-2026-10-17',out=root+'/research/'+run+'-owner-step2-batch6-cycle1';
const pre=root+'/research/'+run+'-owner-step2-source-preimages-60/items',prepared=JSON.parse(readFileSync(root+'/research/'+run+'-scope-review/batch-6/repair-1.input.json'));
const pub=text=>[...text.replace(/^---\r?\n[\s\S]*?\r?\n---/,'').matchAll(/^##[ \t]+(?:Statement|Definition|Postulate|Observations|Uncertainty|Setup|Procedure|Interpretation)[ \t]*\r?\n([\s\S]*?)(?=^##[ \t]+|(?![\s\S]))/gm)].map(m=>m[0].replace(/\r\n/g,'\n').trim());
const parse=(dir)=>readdirSync(dir).filter(x=>x.endsWith('.md')).map(name=>{let text=readFileSync(dir+'/'+name,'utf8'),fm=text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'';return {id:name.slice(0,-3),deps:[...new Set(['deps','justified_by','forward_refs'].flatMap(k=>frontmatterList(fm,k)))],references:[...text.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)].map(m=>m[1]),aliases:frontmatterList(fm,'aliases')};});
const old=parse(pre),originalSeeds=[],preparedSeeds=[];
for(const id of prepared.inventory.items){const current=pub(readFileSync(root+'/items/'+id+'.md','utf8')),prior=pub(readFileSync(pre+'/'+id+'.md','utf8'));
 if(JSON.stringify(current)!==JSON.stringify(prior))originalSeeds.push(id);
 if(JSON.stringify(current)!==JSON.stringify(prepared.before_interfaces[id]))preparedSeeds.push(id);
}
const seeds=[...new Set([...originalSeeds,...preparedSeeds])];const cone=consumers(root,seeds,old);const by=new Map();for(let i=1;i<=80;i++)for(const p of JSON.parse(readFileSync(root+'/research/'+run+'-batch-'+i+'.pages.json')))for(const v of p.items??[])by.set(v.id??v,{batch:i,page:p.id,category:p.category});
const binding=id=>{const p=root+'/items/'+id+'.md';return {path:'physics/items/'+id+'.md',sha256:createHash('sha256').update(readFileSync(p)).digest('hex')};};
const result={method:'Exact physics/tools/batch-scope-review.mjs consumers() invoked with all genuine Step1 preimages60 as extra old graph, current entire physics/items incl imports; deps+justified_by+forward_refs+aliases+every wikilink/nonlogical reference; seeds full canonical publicInterface versus genuinepreimages and native prepared interfaces.',canonical_tool_binding:{path:'physics/tools/batch-scope-review.mjs',sha256:createHash('sha256').update(readFileSync(root+'/tools/batch-scope-review.mjs')).digest('hex')},originalSeeds,preparedSeeds,seeds,currentInventory:by.size,oldInventory:old.length,consumer_count:cone.length,carriers:[...new Set([...seeds,...cone.map(x=>x.id)])].sort().map(id=>({id,...by.get(id),binding:binding(id),seed:seeds.includes(id),paths:cone.find(x=>x.id===id)?.paths??[]}))};
writeFileSync(out+'/closure-graph.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({originalSeeds,preparedSeeds,seeds:seeds.length,consumers:cone.length,carriers:result.carriers.length,batches:[...new Set(result.carriers.map(x=>x.batch))]}));
