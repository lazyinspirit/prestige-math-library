import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { resolve, join } from 'node:path';
import { yamlCandidates } from '../../tools/physics-support/paths.mjs';
const require=createRequire(import.meta.url);
let YAML;let parser;
for(const candidate of yamlCandidates()){try{YAML=require(candidate);parser=require.resolve(candidate);break;}catch{}}
if(!YAML)throw Error('actual renderer YAML unavailable');
const root=resolve('physics'), supplier='def-inertial-frame-and-inertial-chart', all=new Map();
const hash=raw=>createHash('sha256').update(raw).digest('hex');
for(const filename of readdirSync(join(root,'items')).filter(f=>f.endsWith('.md'))){
 const path=join(root,'items',filename),raw=readFileSync(path,'utf8');
 const match=raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
 if(!match)throw Error(`malformed frontmatter ${filename}`);
 const fm=YAML.parse(match[1]);if(!fm?.id)throw Error(`no id ${filename}`);
 const body=match[2],links=[...body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map(m=>m[1]);
 all.set(fm.id,{id:fm.id,path,raw_sha256:hash(raw),deps:fm.deps??[],justified_by:fm.justified_by??[],body_links:[...new Set(links)],body,raw,status:fm.status,domain:fm.domain});
}
const reverse=new Map();
for(const item of all.values())for(const [kind,targets] of [['deps',item.deps],['justified_by',item.justified_by],['body',item.body_links]])for(const target of targets){
 if(!reverse.has(target))reverse.set(target,[]);reverse.get(target).push({consumer:item.id,kind});
}
const seen=new Set([supplier]),queue=[supplier],reach=[];
while(queue.length){const id=queue.shift();for(const edge of reverse.get(id)??[]){reach.push({supplier:id,...edge});if(!seen.has(edge.consumer)){seen.add(edge.consumer);queue.push(edge.consumer);}}}
const rows=[...seen].map(id=>{const i=all.get(id);const relevant=[...new Set(reach.filter(e=>e.consumer===id).map(e=>e.supplier))];return {id,path:i.path,raw_sha256:i.raw_sha256,status:i.status,domain:i.domain,deps:i.deps,justified_by:i.justified_by,relevant_body_uses:i.raw.split('\n').flatMap((line,index)=>relevant.some(t=>line.includes(`[[${t}`))?[{line:index+1,text:line}]:[]),coordinate_mentions:i.raw.split('\n').flatMap((line,index)=>/M\^\{-1\}|M\^\{?−1|x\(o'\)|x'\(p\)|inverse transition|reverse direction/.test(line)?[{line:index+1,text:line}]:[])}});
const output={version:1,run:'physics-em-sr-40-2026-10-08',snapshot_at:new Date().toISOString(),yaml_parser:parser,supplier,selection:'cycle-safe reverse closure of renderer-parsed deps and justified_by plus actual body wikilinks; body edges include contextual citations conservatively',direct_edges:reverse.get(supplier)??[],edges:reach,items:rows};
writeFileSync(process.argv[2] ?? 'physics/research/physics-em-sr-40-2026-10-08-inertial-chart-inverse-cone.json',JSON.stringify(output,null,2)+'\n');
console.log(JSON.stringify({parser,all_items:all.size,cone:rows.length,direct_consumers:new Set(output.direct_edges.map(e=>e.consumer)).size,coordinate_mentions:rows.filter(i=>i.coordinate_mentions.length).map(i=>({id:i.id,count:i.coordinate_mentions.length}))}));
