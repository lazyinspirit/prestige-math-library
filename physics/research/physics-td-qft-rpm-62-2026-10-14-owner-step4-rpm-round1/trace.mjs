import fs from 'node:fs';
import path from 'node:path';
import {frontmatterList as list} from '../../../tools/physics-support/frontmatter-list.mjs';
const R='research/physics-td-qft-rpm-62-2026-10-14-owner-step4-rpm-round1';
const proposed=new Map(fs.readdirSync(R+'/proposed').filter(x=>x.endsWith('.md')).map(x=>[x.slice(0,-3),fs.readFileSync(R+'/proposed/'+x,'utf8')]));
const items=new Map(fs.readdirSync('items').filter(x=>x.endsWith('.md')).map(x=>[x.slice(0,-3),fs.readFileSync('items/'+x,'utf8')]));
const aliases=new Map(); for(const[id,s]of items)for(const a of list(s,'aliases'))aliases.set(a,id);
function refs(s){return [...new Set([...list(s,'deps'),...list(s,'justified_by'),...[...s.matchAll(/\[\[([^|\]#]+)(?:[^\]]*)\]\]/g)].map(m=>m[1].trim())].map(x=>aliases.get(x)||x))]}
function publicPart(s){return s.split(/(?=^## )/m).find(x=>/^## (Definition|Statement|Postulate|Example)/.test(x))||'';}
const seeds=[...proposed].filter(([id,s])=>{let old=items.get(id);let a=publicPart(old),b=publicPart(s);return a!==b || old.match(/^physical_scope:.*$/m)?.[0]!==s.match(/^physical_scope:.*$/m)?.[0]}).map(([id])=>id);
function graph(current){const refsMap=new Map([...items].map(([id,s])=>[id,refs(current&&proposed.has(id)?proposed.get(id):s)]));const out={};for(const seed of seeds){const direct=[...refsMap].filter(([id,r])=>id!==seed&&r.includes(seed)).map(([id])=>id);const found=new Set();const stack=[...direct];while(stack.length){let x=stack.pop();if(found.has(x)||x===seed)continue;found.add(x);for(const[id,r]of refsMap)if(r.includes(x)&&id!==seed)stack.push(id);}out[seed]={direct,indirect:[...found].filter(x=>!direct.includes(x)),all:[...found].sort()};}return out}
const old=graph(false),current=graph(true),consumers=[...new Set(seeds.flatMap(x=>[...old[x].all,...current[x].all]))].sort();
const rows=consumers.map(id=>{const s=proposed.get(id)||items.get(id);const changed=seeds.filter(x=>old[x].all.includes(id)||current[x].all.includes(id));const direct=refs(s).filter(x=>seeds.includes(x));const sections=s.split(/(?=^## )/m);const claim=sections.find(x=>/^## (Definition|Statement|Postulate|Example)/.test(x))||'';const facts=sections.find(x=>/^## Facts/.test(x))||'';const proof=sections.find(x=>/^## (Proof|Verification)/.test(x))||'';const uses=proof.split('\n').filter(x=>changed.some(c=>x.includes(c)));return{id,changed_suppliers:changed,direct_changed_suppliers:direct,claim,facts,explicit_proof_uses:uses,private_candidate:proposed.has(id)}});
fs.writeFileSync(R+'/old-current-consumer-trace.json',JSON.stringify({seeds,old,current,consumers},null,2)+'\n');
fs.writeFileSync(R+'/consumer-use-extracts.json',JSON.stringify(rows,null,2)+'\n');
console.log(JSON.stringify({seeds,consumer_count:consumers.length,consumers}));
