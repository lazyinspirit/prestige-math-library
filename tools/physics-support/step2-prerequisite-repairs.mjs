// Root-only repair receipts. No source writes, acceptance, state edits or backups.
import {readFileSync,lstatSync,realpathSync,openSync,writeFileSync,fsyncSync,closeSync,readdirSync} from 'node:fs';
import {resolve,relative,join,basename} from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {prerequisiteRegistry,prerequisiteBoundary,assertNoPrerequisiteTransaction} from './step2-prerequisites.mjs';
import {readItem} from './physics-content.mjs';
import {consumers} from './batch-scope-review.mjs';
import {sectionText,splitFrontmatter} from './facts-block.mjs';
import {physicalInterface} from './physics-interface.mjs';
import {parseFrontmatter} from './content-policy-lib.mjs';
import {runPages,dependencyLevels} from './item-dependency-levels.mjs';
import {checkBatchDependencyLevels} from './batch-dependency-levels.mjs';
import {frontmatterList} from './frontmatter-list.mjs';
import {checkedAuthoredMetadata,authoredMetadataPath} from './step2-authored-metadata.mjs';
import {yaml} from './pathway-lib.mjs';
import {importedPlanPage} from './imported-plan-pages.mjs';
import {nativePrerequisiteLifecycle} from './step2-prerequisite-lifecycle.mjs';

const assert=(ok,message)=>{if(!ok)throw Error(`Prerequisite repair: ${message}`);};
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const text=value=>typeof value==='string'&&value.trim().length>=40;
function file(root,path) {
  assert(typeof path==='string'&&!path.startsWith('/')&&!path.includes('\\')&&!path.split('/').includes('..'),'nonlocal path');
  const full=resolve(root,path);assert(full.startsWith(resolve(root)+'/'),'escaping path');
  const stat=lstatSync(full);assert(stat.isFile()&&!stat.isSymbolicLink()&&realpathSync(full)===full,`nonregular path ${path}`);return full;
}
const raw=(root,path)=>readFileSync(file(root,path),'utf8');
const digest=(root,path)=>hash(readFileSync(file(root,path)));
const json=(root,path)=>JSON.parse(raw(root,path));
function absent(root,path){try{file(root,path);return false;}catch(error){if(error.code==='ENOENT')return true;throw error;}}
function writeOnce(root,path,value){
  assert(absent(root,path),`receipt already exists ${path}`);
  const parent=resolve(root,path,'..');assert(realpathSync(parent)===parent,'redirected receipt parent');
  const fd=openSync(join(root,path),'wx');try{writeFileSync(fd,JSON.stringify(value,null,2)+'\n');fsyncSync(fd);}finally{closeSync(fd);}
  const dir=openSync(parent,'r');try{fsyncSync(dir);}finally{closeSync(dir);}
}
function ref(root,run,value){assert(value?.path?.startsWith(`research/${run}-`)&&/^[a-f0-9]{64}$/.test(value.sha256??'')&&digest(root,value.path)===value.sha256,'stale/nonlocal evidence');return value;}
function gitSource(root,commit,path){
  assert(/^[a-f0-9]{40}$/.test(commit??''),'exact Git commit required');
  const prefix=spawnSync('git',['rev-parse','--show-prefix'],{cwd:root,encoding:'utf8'});
  assert(prefix.status===0,'Git prefix unavailable');
  const result=spawnSync('git',['show',`${commit}:${prefix.stdout.trim()}${path}`],{cwd:root,maxBuffer:32*1024*1024});
  assert(result.status===0,`committed preimage unavailable ${path}`);return result.stdout;
}
export const repairPaths=(run,number)=>{
  assert(/^[A-Za-z0-9_-]+$/.test(run)&&Number.isSafeInteger(Number(number))&&Number(number)>0,'invalid identity');
  const stem=`research/${run}-prerequisite-${number}-owner-repair`;
  return {authorization:`${stem}-authorization.json`,completion:`${stem}-completion.json`};
};
function evidenceInputs(row){return [row.request?.path,...(row.evidence??[]).map(ref=>ref.path)].filter(Boolean);}
export function repairReviewInputs(root,run,number){
  const paths=repairPaths(run,number),inputs=Object.values(paths);
  for(const path of Object.values(paths))if(!absent(root,path)){
    const row=json(root,path);inputs.push(...evidenceInputs(row),...Object.keys(row.sources??{}),...Object.keys(row.page_sources??{}),...Object.keys(row.page_context??{}),...Object.keys(row.metadata??{}));
    if(path===paths.completion&&row.request?.path)for(const review of json(root,row.request.path).reviews??[])for(const consumer of review.consumer_checks??[])inputs.push(`items/${consumer.id}.md`);
  }
  return [...new Set(inputs)];
}
function entryAt(root,run,number){const registry=prerequisiteRegistry(root,run),entry=registry?.generations.find(row=>row.number===Number(number));assert(entry&&registry.generations.at(-1)===entry&&entry.batches.length,'latest supplemental generation required');return entry;}
function boundary(root,run,stateDir,scan,entry){
  assertNoPrerequisiteTransaction(stateDir);
  assert(relative(root,resolve(stateDir))===entry.state_dir,'different state directory');
  const state=prerequisiteBoundary(root,run,stateDir,scan,{stage:`2-prerequisite-construct-${entry.number}`});
  assert(same(state.stages['1-scaffold'],entry.original_step1),'original Step-1 history changed');
  assert(digest(root,'research/math-imports.json')===entry.import_receipt_sha256,'import receipt changed');
  for(const [path,expected] of Object.entries(entry.protected_native))assert(digest(root,path)===expected,`native history changed ${path}`);
  return digest(root,`${entry.state_dir}/state.json`);
}
function request(root,run,path){const row=json(root,path);assert(path.startsWith(`research/${run}-`)&&row.version===1&&row.run===run&&row.reviewer==='/root'&&text(row.reason)&&row.writers_drained===true&&Array.isArray(row.writer_scopes)&&!row.writer_scopes.length&&Array.isArray(row.evidence)&&row.evidence.length,'invalid Root request');row.evidence.forEach(value=>ref(root,run,value));return row;}
const headings={definition:'Definition',algorithm:'Definition',lemma:'Statement',theorem:'Statement',proposition:'Statement',corollary:'Statement',example:'Example',counterexample:'Statement refuted','false-statement':'Statement',remark:'Remark','open-problem':'Open problem',postulate:'Postulate','physics-theorem':'Statement','thought-experiment':'Statement',experiment:'Observations'};
export function repairPublicSection(source){const {body,fm}=splitFrontmatter(source),kind=parseFrontmatter(fm).kind;assert(headings[kind],`unsupported public section kind ${kind}`);const value=sectionText(body,headings[kind]).trim();assert(value,`missing canonical ${headings[kind]} section`);return value;}
function contract(source){const {body,fm}=splitFrontmatter(source),meta=parseFrontmatter(fm);return {identity:Object.fromEntries(['id','kind','domain','library','aliases'].map(key=>[key,meta[key]??null])),premises:{deps:meta.deps??[],dependency_roles:meta.dependency_roles??{}},section:repairPublicSection(source),physical:physicalInterface(source)};}
function graphRow(path,source){const {fm}=splitFrontmatter(source);return {id:basename(path,'.md'),identity:fm.match(/^id:[ \t]*(.*)$/m)?.[1]??null,aliases:frontmatterList(fm,'aliases'),deps:[...new Set(['deps','justified_by','forward_refs'].flatMap(key=>frontmatterList(fm,key)))],references:[...new Set([...source.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)].map(match=>match[1]))]};}
function currentGraph(root){return readdirSync(join(root,'items')).filter(name=>name.endsWith('.md')).sort().map(name=>graphRow(name,raw(root,`items/${name}`)));}
function affectedConsumers(root,auth,id,current=currentGraph(root)){
  const before=auth.before_consumer_cones?.[id];assert(Array.isArray(before),'missing authorized before consumer cone');
  return [...new Set([...before.map(row=>row.id),...consumers(root,[id],[],current).map(row=>row.id)])].sort();
}
// Gate argv carries this lightweight graph digest, avoiding unrelated proof-body binding.
export function repairGraphFingerprint(root,run,number){
  const paths=repairPaths(run,number),authored=authoredMetadataPath(run,number),ids=new Set(),before=new Set();
  if(!absent(root,paths.authorization)){const auth=json(root,paths.authorization);for(const path of Object.keys(auth.sources))ids.add(basename(path,'.md'));for(const page of runPages(root,run))if(Object.hasOwn(auth.page_sources??{},`library/${page.category}/${page.id}.md`))for(const item of page.items)ids.add(item.id);for(const rows of Object.values(auth.before_consumer_cones??{}))for(const row of rows)before.add(row.id);}
  if(!absent(root,authored))for(const id of json(root,json(root,authored).request.path).items)ids.add(id);
  if(!ids.size)return null;
  const graph=currentGraph(root),selected=new Set([...ids,...before,...consumers(root,[...ids],[],graph).map(row=>row.id)]);
  return hash(JSON.stringify(graph.filter(row=>selected.has(row.id))));
}
// Digests distinguish absent fields from present JSON null without storing preimages.
export const repairValueDigest=value=>hash(JSON.stringify(value===undefined?{present:false}:{present:true,value}));
function pagePath(root,id){const pages=json(root,'research/plan-spec.json').pages.filter(page=>page.id===id);assert(pages.length===1,'ambiguous/missing planned page');return `library/${pages[0].category}/${id}.md`;}
function pageRequires(source){
  const {fm}=splitFrontmatter(source),doc=yaml().parseDocument(fm),pairs=doc.contents?.items?.filter(pair=>pair.key?.value==='requires')??[];
  assert(!doc.errors.length&&pairs.length===1&&yaml().isSeq(pairs[0].value),'page requires must be an explicit sequence');
  const meta=parseFrontmatter(fm),start=source.match(/^---\r?\n/)?.[0].length;
  assert(start&&Array.isArray(meta.requires)&&meta.requires.every(id=>/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))&&new Set(meta.requires).size===meta.requires.length,'invalid page requires');
  const begin=start+pairs[0].key.range[0],end=start+pairs[0].value.range[2];
  return {meta,requires:meta.requires,rest:source.slice(0,begin)+'requires: <guarded>\n'+source.slice(end)};
}
function libraryHomes(root){
  const walk=dir=>readdirSync(join(root,dir),{withFileTypes:true}).flatMap(row=>row.isDirectory()?walk(`${dir}/${row.name}`):row.name.endsWith('.md')&&!row.name.startsWith('_')?[`${dir}/${row.name}`]:[]);
  return walk('library').map(path=>{const source=raw(root,path),{fm}=splitFrontmatter(source),id=fm.match(/^page:[ \t]*['"]?([^\s'"\r\n]+)['"]?[ \t]*$/m)?.[1]??basename(path,'.md');return {path,id,source,items:[...frontmatterList(fm,'items'),...frontmatterList(fm,'examples')]};});
}
function reviewedPages(root,run,req,auth){
  const authorized=auth.page_sources??{},reviews=req.page_reviews??[];
  assert(Array.isArray(reviews)&&reviews.length===Object.keys(authorized).length&&new Set(reviews.map(row=>row.id)).size===reviews.length,'exact page context reviews required');
  const sources={},context={},graph=currentGraph(root),aliases=new Map(),canonical=new Set(graph.map(row=>row.id)),homes=reviews.length?libraryHomes(root):[],pages=runPages(root,run),planned=json(root,'research/plan-spec.json').pages;
  for(const row of graph)for(const alias of row.aliases)if(!canonical.has(alias)){assert(!aliases.has(alias)||aliases.get(alias)===row.id,'ambiguous page supplier alias');aliases.set(alias,row.id);}
  for(const review of reviews){
    const path=pagePath(root,review.id),expected=authorized[path],before=pageRequires(gitSource(root,auth.base_commit,path).toString()),after=pageRequires(raw(root,path));
    assert(expected&&review.before_sha256===expected&&review.after_sha256===digest(root,path)&&review.after_sha256!==expected&&text(review.scoped_use_justification)&&text(review.focused_checks),'missing/stale page context review');
    assert(after.meta.page===review.id&&after.meta.status==='draft'&&(!after.meta.pipeline_run||after.meta.pipeline_run===run)&&before.rest===after.rest,'page body, identity, inventory and other metadata must remain exact');
    const retained=after.requires.filter(id=>before.requires.includes(id));assert(same(retained,before.requires)&&after.requires.length>before.requires.length,'page requires must only add context, preserving old order');
    const page=pages.find(row=>row.id===review.id);assert(page&&path===`library/${page.category}/${page.id}.md`,'page repair is outside registered ownership');
    const used=new Set();for(const item of page.items){const itemPath=`items/${item.id}.md`,source=readItem(file(root,itemPath));assert(Array.isArray(source.deps),'page item deps missing');for(const dep of source.deps)used.add(aliases.get(dep)??dep);context[itemPath]=digest(root,itemPath);}
    for(const target of after.requires.filter(id=>!before.requires.includes(id))){
      const candidates=homes.filter(home=>home.id===target);assert(candidates.length===1,'added page context home missing/ambiguous');
      const home=candidates[0],meta=parseFrontmatter(splitFrontmatter(home.source).fm),current=pages.find(row=>row.id===target);
      const declared=planned.some(page=>page.id===target)||importedPlanPage(root,target,json(root,'research/math-imports.json'),[home.path.slice('library/'.length)]);
      assert(declared&&(meta.library??'mathematics')==='mathematics'&&(meta.status==='published'||current&&current.library==='mathematics'&&home.path===`library/${current.category}/${current.id}.md`),'added page context must be planned published mathematics, authenticated import, or current registered mathematics carrier');
      const suppliers=home.items.filter(id=>used.has(id));assert(suppliers.length,'added page context is not an actual item dependency home');context[home.path]=digest(root,home.path);
      for(const id of suppliers)context[`items/${id}.md`]=digest(root,`items/${id}.md`);
    }
    sources[path]=review.after_sha256;
  }
  return {sources,context};
}
function pointer(root,path,key,commit){
  assert(/^\/(?:pages\/)?\d+\/(?:items\/\d+\/(?:deps|dependency_roles|statement)|requires)$/.test(key??''),'unsupported metadata pointer');
  const doc=commit?JSON.parse(gitSource(root,commit,path)):json(root,path),parts=key.slice(1).split('/'),field=parts.pop();
  let row=doc;for(const part of parts){assert(row&&Object.hasOwn(row,part),'missing metadata pointer parent');row=row[part];}
  return {row,field,value:row[field]};
}
function changes(root,auth,ids,{current=false}={}){
  assert(Array.isArray(auth.metadata_changes??[]),'metadata_changes must be an array');
  const selected=new Set();
  for(const change of auth.metadata_changes??[]){
    const key=`${change.path}#${change.pointer}`;assert(!selected.has(key)&&Object.hasOwn(auth.metadata,change.path)&&!change.path.endsWith('-batch-dependency-levels.json'),'invalid/duplicate metadata change');selected.add(key);
    const before=pointer(root,change.path,change.pointer,auth.base_commit);
    const page=before.field==='requires',owned=page?Object.hasOwn(auth.page_sources??{},pagePath(root,before.row.id)):ids.has(before.row.id);
    assert(owned&&repairValueDigest(before.value)===change.before_sha256&&/^[a-f0-9]{64}$/.test(change.after_sha256??''),'metadata change not bound to authorized preimage');
    if(current){
      const after=pointer(root,change.path,change.pointer),source=readItem(file(root,page?pagePath(root,before.row.id):`items/${before.row.id}.md`));
      const expected=after.field==='statement'?repairPublicSection(source.raw):source[after.field];
      assert(after.row.id===before.row.id&&repairValueDigest(after.value)===change.after_sha256&&same(after.value,expected),`metadata pointer is not exact repaired source mirror ${key}`);
    }
  }
}
function checkAuthorization(root,run,entry,auth){
  assert(auth.version===1&&auth.run===run&&auth.generation===entry.number&&auth.reviewer==='/root'&&auth.scientific_acceptance===false,'invalid repair authorization');
  ref(root,run,auth.request);auth.evidence.forEach(value=>ref(root,run,value));
  const req=json(root,auth.request.path);
  assert(same(Object.keys(auth.sources).sort(),req.items.map(id=>`items/${id}.md`).sort()),'authorization source inventory changed');
  assert(same(Object.keys(auth.page_sources??{}).sort(),(req.pages??[]).map(id=>pagePath(root,id)).sort()),'authorization page inventory changed');
  const effective={...entry.manifest_sha256,...checkedAuthoredMetadata(root,run,entry).manifests};
  const keys=[...Object.keys(effective),'research/plan-spec.json',`research/${run}-batch-dependency-levels.json`].sort();
  assert(same(Object.keys(auth.metadata).sort(),keys),'authorization metadata inventory changed');
  for(const [path,expected] of Object.entries({...auth.sources,...auth.page_sources}))assert(entry.protected_sources[path]===expected&&hash(gitSource(root,auth.base_commit,path))===expected,`authorization preimage changed ${path}`);
  for(const [path,expected] of Object.entries(auth.metadata))assert((!effective[path]||effective[path]===expected)&&hash(gitSource(root,auth.base_commit,path))===expected,`authorization metadata preimage changed ${path}`);
  assert(same(auth.metadata_changes,req.metadata_changes??[]),'authorization metadata pointers changed');
  assert(same(Object.keys(auth.before_consumer_cones??{}).sort(),[...req.items].sort()),'authorized consumer inventory changed');
  for(const rows of Object.values(auth.before_consumer_cones))assert(Array.isArray(rows)&&new Set(rows.map(row=>row.id)).size===rows.length&&rows.every(row=>row.path===`items/${row.id}.md`&&/^[a-f0-9]{64}$/.test(row.sha256??'')),'invalid authorized before consumer cone');
  changes(root,auth,new Set(req.items));
}
export function authorizePrerequisiteRepairs(root,run,stateDir,requestPath,{scan}={}){
  const req=request(root,run,requestPath),entry=entryAt(root,run,req.generation),paths=repairPaths(run,entry.number);
  const stateHash=boundary(root,run,stateDir,scan,entry);
  assert(absent(root,paths.authorization)&&absent(root,paths.completion),'repair generation already authorized');
  assert(Array.isArray(req.items)&&req.items.length&&new Set(req.items).size===req.items.length,'exact repair items required');
  const sources={};
  for(const id of req.items){
    assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id),'invalid repair ID');
    const path=`items/${id}.md`,before=entry.protected_sources[path],item=readItem(file(root,path));
    assert(before&&item.id===id&&item.status==='draft'&&(!item.pipeline_run||item.pipeline_run===run),'only current-run original draft carriers may be repaired');
    assert(digest(root,path)===before&&hash(gitSource(root,req.base_commit,path))===before,`preimage not original committed source ${id}`);sources[path]=before;
  }
  const page_sources={},ownedPages=runPages(root,run);
  assert(Array.isArray(req.pages??[])&&new Set(req.pages??[]).size===(req.pages??[]).length,'invalid/duplicate repair pages');
  for(const id of req.pages??[]){
    const owned=ownedPages.find(page=>page.id===id),path=owned?`library/${owned.category}/${id}.md`:null;
    assert(path&&!entry.pages.includes(id)&&Object.hasOwn(entry.protected_sources,path)&&pagePath(root,id)===path,'only original registered protected pages may be repaired');
    const source=raw(root,path),before=pageRequires(source);
    assert(before.meta.page===id&&before.meta.status==='draft'&&(!before.meta.pipeline_run||before.meta.pipeline_run===run),'only current-run draft pages may be repaired');
    assert(digest(root,path)===entry.protected_sources[path]&&hash(gitSource(root,req.base_commit,path))===entry.protected_sources[path],'page preimage not original committed source');page_sources[path]=entry.protected_sources[path];
  }
  const metadata={...entry.manifest_sha256,...checkedAuthoredMetadata(root,run,entry).manifests,'research/plan-spec.json':digest(root,'research/plan-spec.json'),[`research/${run}-batch-dependency-levels.json`]:digest(root,`research/${run}-batch-dependency-levels.json`)};
  for(const [path,expected] of Object.entries({...entry.protected_sources,...metadata}))assert(digest(root,path)===expected&&hash(gitSource(root,req.base_commit,path))===expected,`uncommitted or changed preimage ${path}`);
  const graph=currentGraph(root),before_consumer_cones=Object.fromEntries(req.items.map(id=>[id,consumers(root,[id],[],graph).map(row=>({id:row.id,path:`items/${row.id}.md`,sha256:digest(root,`items/${row.id}.md`)}))]));
  const value={version:1,run,generation:entry.number,reviewer:'/root',request:{path:requestPath,sha256:digest(root,requestPath)},evidence:req.evidence,base_commit:req.base_commit,reason:req.reason,sources,page_sources,metadata,before_consumer_cones,metadata_changes:req.metadata_changes??[],scientific_acceptance:false};
  changes(root,value,new Set(req.items));
  assert(boundary(root,run,stateDir,scan,entry)===stateHash,'boundary changed before authorization');
  writeOnce(root,paths.authorization,value);return value;
}
function validateMetadata(root,run,entry,auth,ids){
  const current=runPages(root,run),levels=dependencyLevels(current);assert(!levels.errors.length,levels.errors.join('; '));
  changes(root,auth,ids,{current:true});
  for(const [path] of Object.entries(auth.metadata)){
    if(path.endsWith('-batch-dependency-levels.json'))continue;
    const before=JSON.parse(gitSource(root,auth.base_commit,path)),after=json(root,path);
    // Only declared source-mirror pointers and computed current-run levels differ.
    const normalize=value=>{
      const clone=structuredClone(value),pages=Array.isArray(clone)?clone:clone.pages;
      assert(Array.isArray(pages),'unsupported planning shape');
      for(const page of pages)for(const item of page.items??[]){
        if(levels.items.has(item.id))delete item.dependency_level;
      }
      for(const change of auth.metadata_changes??[])if(change.path===path){
        const parts=change.pointer.slice(1).split('/'),field=parts.pop();let row=clone;
        for(const part of parts){assert(row&&Object.hasOwn(row,part),'metadata pointer structure changed');row=row[part];}delete row[field];
      }
      return clone;
    };
    assert(same(normalize(before),normalize(after)),`unapproved metadata change ${path}`);
    const pages=Array.isArray(after)?after:after.pages;
    for(const page of pages)for(const item of page.items??[]){
      const owned=levels.items.get(item.id)?.item;
      if(!owned)continue; // Foreign plan context remains byte-for-byte structurally exact above.
      assert(owned&&same(item.deps,owned.deps)&&item.dependency_level===levels.levels.get(item.id),`metadata mirror/level mismatch ${item.id}`);
      if(ids.has(item.id))assert(same(readItem(file(root,`items/${item.id}.md`)).deps,item.deps),`source deps mismatch ${item.id}`);
    }
  }
  checkBatchDependencyLevels(root,run);
  for(const path of Object.keys(auth.page_sources??{})){
    const source=readItem(file(root,path)),owned=current.find(page=>page.id===source.page),planned=json(root,'research/plan-spec.json').pages.find(page=>page.id===source.page);
    assert(owned&&planned&&same(source.requires,owned.requires)&&same(source.requires,planned.requires),'page requires mirrors do not match current source');
  }
}
function reviewedSources(root,run,req,entry,auth,lifecycle=null){
  assert(auth.run===run&&auth.generation===entry.number&&Array.isArray(req.reviews)&&req.reviews.length===Object.keys(auth.sources).length,'exact source reviews required');
  const sources={},ids=new Set(Object.keys(auth.sources).map(path=>path.slice(6,-3)));
  const graph=currentGraph(root);
  assert(new Set(req.reviews.map(row=>row.id)).size===ids.size,'duplicate reviews');
  for(const review of req.reviews){
    const path=`items/${review.id}.md`;assert(ids.has(review.id)&&review.before_sha256===auth.sources[path]&&review.after_sha256===digest(root,path)&&review.after_sha256!==review.before_sha256&&text(review.scientific_review)&&text(review.focused_checks),'missing/stale actual source review');
    const item=readItem(file(root,path));assert(item.id===review.id&&item.status==='draft'&&(!item.pipeline_run||item.pipeline_run===run),'repaired identity/status changed');
    const before=contract(gitSource(root,auth.base_commit,path).toString()),after=contract(raw(root,path));
    assert(same(before.identity,after.identity),'source identity/kind/domain/library/aliases must remain immutable');
    const changed=!same(before,after);
    assert(review.interface_changed===changed,'interface change classification mismatch');
    assert(Array.isArray(review.consumer_checks)&&text(review.scoped_use_justification),'scoped supplier-use justification required');
    const affected=affectedConsumers(root,auth,review.id,graph);
    if(changed)assert(same(review.consumer_checks.map(row=>row.id).sort(),affected),'changed interface requires full same-owner consumer cone');
    assert(review.consumer_checks.every(row=>affected.includes(row.id)&&['accept','unaffected'].includes(row.decision)&&text(row.reason)&&(row.sha256===digest(root,`items/${row.id}.md`)||lifecycle&&row.sha256===lifecycle.atAdmission(`items/${row.id}.md`)&&lifecycle.owns(`items/${row.id}.md`))),'stale/invalid consumer checks');
    sources[path]=review.after_sha256;
  }
  return {sources,ids};
}
export function completePrerequisiteRepairs(root,run,stateDir,requestPath,{scan,validate}={}){
  const req=request(root,run,requestPath),entry=entryAt(root,run,req.generation),paths=repairPaths(run,entry.number),auth=json(root,paths.authorization);
  const stateHash=boundary(root,run,stateDir,scan,entry);assert(absent(root,paths.completion),'repair completion already exists');
  checkAuthorization(root,run,entry,auth);
  const reviewed=reviewedSources(root,run,req,entry,auth),pages=reviewedPages(root,run,req,auth),sources={...reviewed.sources,...pages.sources},ids=reviewed.ids;
  for(const [path,expected] of Object.entries(entry.protected_sources))if(!sources[path])assert(digest(root,path)===expected,`unlisted source changed ${path}`);
  validateMetadata(root,run,entry,auth,ids);
  assert(typeof validate==='function','native full plan/graph validator required');validate();
  const metadata=Object.fromEntries(Object.keys(auth.metadata).map(path=>[path,digest(root,path)]));
  const value={version:1,run,generation:entry.number,reviewer:'/root',authorization:{path:paths.authorization,sha256:digest(root,paths.authorization)},request:{path:requestPath,sha256:digest(root,requestPath)},evidence:req.evidence,sources,page_context:pages.context,metadata,scientific_acceptance:false};
  assert(boundary(root,run,stateDir,scan,entry)===stateHash,'boundary changed before completion');
  for(const [path,expected] of Object.entries({...sources,...metadata}))assert(digest(root,path)===expected,'repair inputs changed before completion');
  ref(root,run,value.authorization);ref(root,run,value.request);value.evidence.forEach(value=>ref(root,run,value));
  writeOnce(root,paths.completion,value);return value;
}
export function checkedRepairOverlay(root,run,entry){
  const paths=repairPaths(run,entry.number);
  if(absent(root,paths.authorization)){assert(absent(root,paths.completion),'orphan repair completion');return {sources:{},metadata:{}};}
  const auth=json(root,paths.authorization);checkAuthorization(root,run,entry,auth);
  assert(!absent(root,paths.completion),'authorized repair incomplete; full battery blocked');
  const done=json(root,paths.completion);ref(root,run,done.authorization);ref(root,run,done.request);done.evidence.forEach(value=>ref(root,run,value));
  const lifecycle=nativePrerequisiteLifecycle(root,run,entry);
  if(lifecycle)for(const path of [paths.authorization,paths.completion,auth.request.path,done.request.path,...auth.evidence.map(ref=>ref.path),...done.evidence.map(ref=>ref.path)])lifecycle.bind(path);
  assert(done.version===1&&done.scientific_acceptance===false&&done.authorization.path===paths.authorization&&done.run===run&&done.generation===entry.number&&done.reviewer==='/root'&&same(Object.keys(done.sources).sort(),Object.keys({...auth.sources,...auth.page_sources}).sort())&&same(Object.keys(done.metadata).sort(),Object.keys(auth.metadata).sort()),'invalid repair completion');
  for(const [path,expected] of Object.entries({...done.sources,...done.metadata}))assert(digest(root,path)===expected,`repair receipt stale ${path}`);
  const req=json(root,done.request.path),reviewed=reviewedSources(root,run,req,entry,auth,lifecycle),pages=reviewedPages(root,run,req,auth);
  assert(same({...reviewed.sources,...pages.sources},done.sources)&&same(pages.context,done.page_context??{}),'completion source/context review map changed');
  return done;
}
// Shared only by the bounded physics author-metadata admission protocol.
export function prerequisiteRepairProtocol(){return {assert,hash,same,text,file,raw,digest,json,absent,writeOnce,ref,gitSource,entryAt,boundary,request,currentGraph};}
