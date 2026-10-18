import{readFileSync,writeFileSync,mkdirSync,existsSync,renameSync}from'node:fs';
import{spawnSync}from'node:child_process';
import{runPages,dependencyLevels}from'../../tools/item-dependency-levels.mjs';
import{yaml}from'../../tools/pathway-lib.mjs';
import{splitFrontmatter,SOURCE_SECTIONS,sourceSectionText}from'../../tools/facts-block.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,archive=`${base}/frontier-format-metadata-before`;
if(existsSync(archive))throw Error('already repaired');
const inspection=JSON.parse(readFileSync(`${base}/post-review-frontier-metadata-inspection.json`)),render=JSON.parse(JSON.parse(readFileSync(`${base}/post-review-frontier-render-inspection.json`)).stdout),pages=runPages(process.cwd(),run),graph=dependencyLevels(pages),sources=new Map(),originals=new Map(),changes=[];
if(graph.errors.length||inspection.errors.some(e=>!['title','kind','dependency_level'].includes(e.key)))throw Error('unexpected metadata defect');
const source=id=>{const p=`items/${id}.md`;if(!sources.has(id)){const text=readFileSync(p,'utf8'),m=yaml().parse(splitFrontmatter(text).fm);if(m.pipeline_run!==run||m.status!=='draft')throw Error('outside draft ownership '+id);sources.set(id,text);originals.set(p,text);}return sources.get(id);};
for(const row of inspection.errors.filter(e=>e.key==='dependency_level')){let text=source(row.id),value=graph.levels.get(row.id);const pattern=/^---\r?\n([\s\S]*?)\r?\n---/;text=text.replace(pattern,(full,fm)=>{if(/^dependency_level:/m.test(fm))return full.replace(/^dependency_level:.*$/m,`dependency_level: ${value}`);return full.replace(/\r?\n---$/,`\ndependency_level: ${value}\n---`);});sources.set(row.id,text);changes.push({id:row.id,operation:'source dependency-level mirror',value});}
for(const path of new Set(render.errors.filter(e=>e.code==='multiline-display').map(e=>e.file))){const id=path.slice(6,-3),old=source(id);const text=old.replace(/\$\$([\s\S]*?)\$\$/g,(full,math)=>{if(/(?<!\\)%/.test(math))throw Error('unescaped TeX comment '+id);return `$$${math.split(/\r?\n/).join(' ').trim()}$$`;});sources.set(id,text);changes.push({id,operation:'display source line breaks joined only'});}
const replace=(id,old,replacement)=>{const text=source(id);if(!text.includes(old))throw Error('format guard '+id);sources.set(id,text.replace(old,replacement));changes.push({id,operation:'exact delimiter/diagram notation repair'});};
replace('lem-finite-node-equation-reconstruction-equivalence','and $f$ lie in $X.','and $f$ lie in $X$.');
replace('lem-half-order-product-integration-stability-and-consistency','\\le h^2\\|g\'\'\\|_\\infty/8.','\\le h^2\\|g\'\'\\|_\\infty/8$.');
replace('lem-half-order-product-integration-stability-and-consistency','$A:=\\|a\\|_\\infty<\\infty.','$A:=\\|a\\|_\\infty<\\infty$.');
replace('ex-square-root-kalman-singular-prior-positive-innovation','$[[L_R^{\\mathrm{pad}},HL^-],[0,L^-]]$','$\\begin{bmatrix}L_R^{\\mathrm{pad}}&HL^-\\\\0&L^-\\end{bmatrix}$');
replace('def-phase-field-discrete-realizations',String.raw`  \foreach \x/\lab in {0.5/K_1,1.5/K_2,2.5/K_3,3.5/K_4} {
    \fill (\x,0) circle (2pt);
    \node[above] at (\x,0.05) {$\lab$};
  }`,String.raw`  \foreach \x in {0.5,1.5,2.5,3.5} {
    \fill (\x,0) circle (2pt);
  }
  \node[above] at (0.5,0.05) {$K_1$};
  \node[above] at (1.5,0.05) {$K_2$};
  \node[above] at (2.5,0.05) {$K_3$};
  \node[above] at (3.5,0.05) {$K_4$};`);
const changedClaims=new Set();for(const[id,text]of sources){const old=originals.get(`items/${id}.md`);for(const heading of SOURCE_SECTIONS){const before=sourceSectionText(splitFrontmatter(old).body,heading)?.trim(),after=sourceSectionText(splitFrontmatter(text).body,heading)?.trim();if(before&&after&&before!==after){changedClaims.add(id);break;}}}
const manifests=new Map();for(const p of pages){const path=`research/${run}-batch-${p.batch}.pages.json`;if(!manifests.has(path))manifests.set(path,JSON.parse(readFileSync(path,'utf8')));}
const mirrored=[];
for(const[path,list]of manifests){let edited=false;for(const p of list)for(const item of p.items){const relevant=inspection.errors.filter(e=>e.id===item.id&&['title','kind'].includes(e.key));if(relevant.length){const m=yaml().parse(splitFrontmatter(sources.get(item.id)??readFileSync(`items/${item.id}.md`,'utf8')).fm);for(const e of relevant)item[e.key]=m[e.key];edited=true;mirrored.push({id:item.id,fields:relevant.map(e=>e.key)});}if(changedClaims.has(item.id)){const body=splitFrontmatter(sources.get(item.id)).body;for(const heading of SOURCE_SECTIONS){const value=sourceSectionText(body,heading)?.trim();if(value){item.statement=value;edited=true;break;}}}}
 if(edited){originals.set(path,readFileSync(path,'utf8'));manifests.set(path,list);}else manifests.delete(path);
}
for(const[path,text]of originals){const dest=`${archive}/${path}`;mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});writeFileSync(dest,text,{flag:'wx'});}
for(const[id,text]of sources)writeFileSync(`items/${id}.md`,text);
for(const[path,list]of manifests){const tmp=path+'.owner-tmp';writeFileSync(tmp,JSON.stringify(list,null,2)+'\n');renameSync(tmp,path);}
const bodyChanged=new Set([...sources].filter(([id,text])=>splitFrontmatter(text).body!==splitFrontmatter(originals.get(`items/${id}.md`)).body).map(([id])=>id)),regenerated=[];
for(let batch=1;batch<=71;batch++){const path=`research/${run}-batch-${batch}.proof-contracts.json`,doc=JSON.parse(readFileSync(path,'utf8')),ids=Object.keys(doc.contracts).filter(id=>bodyChanged.has(id)||(doc.contracts[id].citations??[]).some(c=>changedClaims.has(c.source)));if(!ids.length)continue;const dest=`${archive}/${path}`;mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});writeFileSync(dest,readFileSync(path),{flag:'wx'});const result=spawnSync(process.execPath,['tools/regen-contract-entries.mjs',path,...ids],{encoding:'utf8'});if(result.status!==0)throw Error(result.stderr||result.stdout);regenerated.push({batch,ids,output:result.stdout});}
writeFileSync(`${base}/frontier-format-metadata-reconciliation.json`,JSON.stringify({run,at:new Date().toISOString(),archive,changes,manifest_metadata_mirrors:mirrored,manifest_files:[...manifests.keys()],canonical_sources:sources.size,body_changed:[...bodyChanged],citable_source_whitespace_or_diagram_changed:[...changedClaims],regenerated,mathematical_claims_changed:false,proof_acceptance_or_gate_permission:false},null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({source_files:sources.size,body_changed:bodyChanged.size,manifest_files:manifests.size,contract_batches:regenerated.length}));
