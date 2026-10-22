// Exact missing prerequisite declarations on current frontier pages.
import {readFileSync,writeFileSync,mkdirSync,existsSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {parseFrontmatter} from '../tools/physics-support/content-policy-lib.mjs';
import {splitFrontmatter} from '../tools/physics-support/facts-block.mjs';
const option=flag=>{const i=process.argv.indexOf(flag);return i<0?null:process.argv[i+1];};
const run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-first-native-battery-findings`,out=option('--out')??`${base}/page-prerequisite-application`;
const read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(out)||existsSync(`.physics-autopilot/${run}/controller.lock`))throw Error('Archive exists or controller active');
if(Object.values(read(`.physics-autopilot/${run}/state.json`).dispatches).some(d=>!d.endedAt))throw Error('Native workers active');
const original=new Map(),pending=new Map(),load=p=>{const b=readFileSync(p);original.set(p,b);return JSON.parse(b);},put=(p,d)=>pending.set(p,Buffer.from(JSON.stringify(d,null,2)+'\n'));
const planPath='research/plan-spec.json',plan=load(planPath),byId=new Map(plan.pages.map(p=>[p.id,p])),home=new Map();
for(const c of readdirSync('library')){let fs;try{fs=readdirSync(`library/${c}`);}catch{continue;}for(const f of fs)if(f.endsWith('.md'))home.set(f.slice(0,-3),`library/${c}/${f}`);}
const manifestByPage=new Map(),manifests=new Map();
for(const f of readdirSync('research').filter(f=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(f))){const path=`research/${f}`,d=load(path);manifests.set(path,d);for(const page of d)manifestByPage.set(page.id,{page,path});}
const edges=read(option('--diagnosis')??`${base}/page-edge-diagnosis.json`).missing_edges,additions=[],wrappers=[];
for(const edge of edges){
 if(edge.supplier==='qftx-finite-group-bf'){
  if(edge.consumer!=='gr-fx14-holonomy-and-discrete-geometric-interface')throw Error('Unreviewed forward home');
  // Exact CW placement repair moved the actual supplier onto this GR page.
  continue;
 }
 if(!byId.has(edge.supplier)){
  const path=home.get(edge.supplier);if(!path)throw Error('Missing existing home '+edge.supplier);
  const meta=parseFrontmatter(splitFrontmatter(readFileSync(path,'utf8')).fm);
  if(meta.status!=='published')throw Error('Context home is not published '+path);
  const p={id:edge.supplier,title:meta.title,kind:'P',category:path.split('/')[1],library:meta.library??'mathematics',order:0,requires:[],items:[]};
  if(!p.title)throw Error('Missing context title '+path);
  plan.pages.push(p);byId.set(p.id,p);wrappers.push({page:p,path,sha256:sha(readFileSync(path))});
 }
 const page=manifestByPage.get(edge.consumer)?.page;
 if(!page||!byId.has(edge.consumer))throw Error('Outside frontier consumer');
 if(!page.requires.includes(edge.supplier)){page.requires.push(edge.supplier);additions.push(edge);}
}
const changedPageIds=new Set(additions.map(e=>e.consumer));
for(const id of changedPageIds){
 const row=manifestByPage.get(id),planned=byId.get(id);planned.requires=[...row.page.requires];
 const path=`library/${row.page.category}/${id}.md`,before=readFileSync(path);original.set(path,before);
 const text=before.toString(),replacement='requires:\n'+row.page.requires.map(v=>`  - ${v}\n`).join(''),front=text.match(/^(---\r?\n)([\s\S]*?)(\r?\n---)/);
 if(!front)throw Error('Missing frontmatter '+path);
 const pattern=/^requires:[^\n]*\n(?:[ \t]+[^\n]*\n)*/gm;
 const fm=front[2]+'\n',matches=[...fm.matchAll(pattern)];if(matches.length>1)throw Error('Ambiguous requires '+path);
 const changed=matches.length?fm.replace(pattern,()=>replacement):fm+replacement;
 pending.set(path,Buffer.from(front[1]+changed.replace(/\n$/,'')+front[3]+text.slice(front[0].length)));
}
for(const[path,pages]of manifests)if(pages.some(p=>changedPageIds.has(p.id))&&JSON.stringify(JSON.parse(original.get(path)))!==JSON.stringify(pages))put(path,pages);
put(planPath,plan);
mkdirSync(`${out}/before`,{recursive:true});const changes=[];
for(const[path,after]of pending){const before=original.get(path);if(!readFileSync(path).equals(before))throw Error('Metadata changed '+path);if(before.equals(after))continue;const archive=`${out}/before/${path}`;mkdirSync(archive.slice(0,archive.lastIndexOf('/')),{recursive:true});writeFileSync(archive,before);changes.push({path,before_sha256:sha(before),after_sha256:sha(after)});}
for(const c of changes)writeFileSync(c.path,pending.get(c.path));
writeFileSync(`${out}/receipt.json`,JSON.stringify({at:new Date().toISOString(),run,added_requires:additions,existing_published_wrappers:wrappers,changed_pages:[...changedPageIds],changes,source_item_changes:false,frontier_pairs:129,frontier_pages:258},null,2)+'\n');
console.log(JSON.stringify({added_requires:additions.length,new_existing_P_wrappers:wrappers.length,changed_frontier_pages:changedPageIds.size,changed_metadata_files:changes.length}));
