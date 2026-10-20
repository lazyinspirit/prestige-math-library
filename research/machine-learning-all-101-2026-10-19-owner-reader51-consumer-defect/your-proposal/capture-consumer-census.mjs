import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
const root=process.cwd(),base=path.join(root,'research/machine-learning-all-101-2026-10-19-owner-reader51-consumer-defect/your-proposal');
const {frontmatterList}=await import(path.join(root,'tools/frontmatter-list.mjs'));
const {splitFrontmatter}=await import(path.join(root,'tools/facts-block.mjs'));
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const nodes={},aliases=new Map(),edges=[],fields=['deps','justified_by','forward_refs'],seed='lem-partial-energy-continuous-under-w2';
for(const name of fs.readdirSync('items').filter(x=>x.endsWith('.md'))){const text=fs.readFileSync('items/'+name,'utf8'),id=name.slice(0,-3);nodes[id]={text,fm:splitFrontmatter(text).fm};for(const a of frontmatterList(nodes[id].fm,'aliases'))aliases.set(a,id);}
for(const [id,{fm}] of Object.entries(nodes))for(const field of fields)for(const literal of frontmatterList(fm,field))edges.push({supplier:aliases.get(literal)??literal,consumer:id,field,literal});
const closure=new Set([seed]);let changed=true;while(changed){changed=false;for(const e of edges)if(closure.has(e.supplier)&&!closure.has(e.consumer)){closure.add(e.consumer);changed=true;}}
const names=[...closure].flatMap(id=>[id,...[...aliases].filter(([a,t])=>t===id).map(([a])=>a)]),mentions=[];
for(const [id,{text}] of Object.entries(nodes))for(const name of names)if(text.includes(name))mentions.push({item:id,name});
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):e.name.endsWith('.md')?[path.join(d,e.name)]:[]),pages=[];
for(const p of walk('library')){const text=fs.readFileSync(p,'utf8'),hits=names.filter(n=>text.includes(n));if(hits.length)pages.push({path:p,hits,sha256:sha(text)});}
// Page dependency/companion closure as nonlogical context, not a mathematical supplier claim.
const pageDocs=walk('library').map(p=>({path:p,text:fs.readFileSync(p,'utf8')}));
let pageSet=new Set(pages.map(p=>path.basename(p.path,'.md'))),pChanged=true;while(pChanged){pChanged=false;for(const p of pageDocs){const fm=splitFrontmatter(p.text).fm,requires=frontmatterList(fm,'requires');if(requires.some(r=>pageSet.has(r))&&!pageSet.has(path.basename(p.path,'.md'))){pageSet.add(path.basename(p.path,'.md'));pChanged=true;}}}
const dependentPages=pageDocs.filter(p=>pageSet.has(path.basename(p.path,'.md'))).map(p=>({path:p.path,sha256:sha(p.text),body_empty:!splitFrontmatter(p.text).body.trim()}));
const x={scanned_item_count:Object.keys(nodes).length,seed,fields,alias_resolution:true,closure:[...closure].sort(),edges:edges.filter(e=>closure.has(e.supplier)),literal_and_alias_mentions:mentions,direct_page_mentions:pages,dependent_and_companion_pages:dependentPages};fs.writeFileSync(path.join(base,'actual-consumer-census.json'),JSON.stringify(x,null,2)+'\n');console.log(JSON.stringify(x,null,2));
