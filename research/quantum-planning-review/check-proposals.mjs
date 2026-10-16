/** Scoped mechanical proposal check; never a mathematical acceptance gate. */
import {readFileSync,readdirSync,existsSync,writeFileSync} from 'node:fs';
import {yaml,split,loadCorpus} from '../../tools/pathway-lib.mjs';
const folders=['research/quantum-computing-planning','research/quantum-algorithms-planning'];
const problems=[],warnings=[];
const fail=(code,subject,detail)=>problems.push({code,subject,detail});
const warn=(code,subject,detail)=>warnings.push({code,subject,detail});
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const corpus=loadCorpus(),root=new Map(),aliases=new Map();
for(const f of readdirSync('items').filter(x=>x.endsWith('.md'))){
 const {fm}=split(readFileSync(`items/${f}`,'utf8')); let y;
 try{y=yaml().parse(fm);}catch{continue;}
 if(!y?.id)continue;root.set(y.id,y);for(const a of y.aliases??[])aliases.set(a,y.id);
}
const itemMap=new Map(),pageMap=new Map();
for(const folder of folders){
 for(const [file,key,map] of [['pages.json','pages',pageMap],['proposed-items.json','items',itemMap]]){
  const path=`${folder}/${file}`; if(!existsSync(path)){fail('proposal-missing',path,'Required planning artifact absent');continue;}
  const data=read(path);if(data.status!=='draft-planning')fail('planning-status',path,data.status);
  if(!Array.isArray(data[key])||!data[key].length){fail('empty-proposal',path,key);continue;}
  for(const row of data[key]){
   const id=key==='pages'?row.page:row.id;
   if(typeof id!=='string'||!id){fail('identity-missing',path,row);continue;}
   if(map.has(id))fail('duplicate-identity',id,path);
   map.set(id,{...row,_file:path,_category:data.category});
  }
 }
}
const canonical=id=>itemMap.has(id)||root.has(id)?id:aliases.get(id);
const prefix={definition:'def-',algorithm:'alg-',theorem:'thm-',lemma:'lem-',proposition:'prop-',corollary:'cor-',example:'ex-',counterexample:'cex-',remark:'rem-','false-statement':'fs-','open-problem':'op-'};
for(const [id,row]of itemMap){
 if(root.has(id)||aliases.has(id))fail('item-collision',id,'Existing root identity or alias');
 if(!prefix[row.kind]||!id.startsWith(prefix[row.kind]))fail('kind-prefix',id,row.kind);
 const p=pageMap.get(row.page);if(!p)fail('missing-home',id,row.page);
 if(!Array.isArray(row.deps))fail('deps-not-array',id,row.deps);
 if(!Array.isArray(row.justified_by))fail('justified-by-not-array',id,row.justified_by);
 if(!row.statement_or_definition?.trim())fail('empty-contract',id,'Need mathematical statement or definition');
 if(!Array.isArray(row.proof_obligations)||!row.proof_obligations.length)fail('missing-obligations',id,'Need exact proof or definition well-definedness obligations');
 if(!Array.isArray(row.sources)||!row.sources.some(s=>s.url&&s.locator))fail('missing-source-locator',id,'Need full-text URL and exact locator');
 for(const raw of row.deps??[]){
  const d=canonical(raw);if(!d){fail('unresolved-dependency',id,raw);continue;}
  const supplier=itemMap.get(d)??root.get(d);
  if(['remark','open-problem','physics-theorem','postulate','experiment','observation'].includes(supplier.kind))fail('forbidden-logical-supplier',id,d);
  if(/^(pthm-|post-|texp-|obs-)|^physics\//.test(d))fail('physics-dependency',id,d);
  const sp=itemMap.has(d)?pageMap.get(supplier.page):corpus.byPage.get(corpus.homeOf.get(d));
  if(!itemMap.has(d)&&supplier.status!=='published')warn('draft-existing-supplier',id,d);
  if((sp?.kind==='B'||sp?.page?.endsWith('-examples'))&&supplier.page!==row.page)fail('b-page-supplier',id,d);
  if(row._category==='quantum-computing'&&itemMap.get(d)?._category==='quantum-algorithms')fail('qc-back-edge',id,d);
 }
 for(const raw of row.justified_by??[]){
  const d=canonical(raw);if(!d){fail('unresolved-justification',id,raw);continue;}
  const supplier=itemMap.get(d)??root.get(d);
  if(['remark','open-problem'].includes(supplier.kind))fail('forbidden-justification',id,d);
  const depends=(from,target,seen=new Set())=>{if(from===target)return true;if(seen.has(from))return false;seen.add(from);return (itemMap.get(from)??root.get(from))?.deps?.some(x=>depends(canonical(x),target,seen))??false;};
  if(!depends(d,id))fail('justification-does-not-consume-definition',id,d);
  if(row.deps?.some(x=>canonical(x)===d))fail('justification-reverse-edge',id,d);
 }
}
const homes=new Map();
for(const [id,p]of pageMap){
 if(corpus.byPage.has(id))fail('page-collision',id,'Existing library page');
 if(!['A','B'].includes(p.kind))fail('invalid-page-kind',id,p.kind);
 if(p.category!==p._category)fail('category-mismatch',id,p.category);
 const comp=pageMap.get(p.companion);if(!comp||comp.companion!==id||comp.kind===p.kind)fail('companion-mismatch',id,p.companion);
 if(!Array.isArray(p.items)||!p.items.length)fail('empty-page-inventory',id,'Each proposed page needs inventory');
 if((p.items??[]).length>(p.kind==='A'?60:100))fail('page-capacity',id,p.items.length);
 for(const raw of p.items??[]){for(const d0 of itemMap.get(raw)?.deps??[]){const d=canonical(d0);if(itemMap.get(d)?.page===id&&p.items.indexOf(d)>=p.items.indexOf(raw))fail('same-page-item-order',raw,d);}
  if(!itemMap.has(raw))fail('page-item-missing',id,raw);else if(itemMap.get(raw).page!==id)fail('item-home-mismatch',raw,id);if(homes.has(raw))fail('duplicate-item-placement',raw,id);homes.set(raw,id);}
 for(const d of p.requires??[]){
  const sp=pageMap.get(d)??corpus.byPage.get(d);if(!sp)fail('missing-required-page',id,d);
  else if(sp.kind==='B'||d.endsWith('-examples'))fail('b-page-prerequisite',id,d);
 }
}
for(const id of itemMap.keys())if(!homes.has(id))fail('unplaced-item',id,'No proposed page inventory');
const checkDAG=(nodes,deps,code)=>{
 const state=new Map(),stack=[],levels=new Map();
 const visit=id=>{if(state.get(id)===2)return levels.get(id)??0;if(state.get(id)===1){fail(code,id,stack.slice(stack.indexOf(id)).concat(id));return 0;}
 state.set(id,1);stack.push(id);let level=0;
 for(const d of deps(id).filter(x=>nodes.has(x)))level=Math.max(level,visit(d)+1);
 stack.pop();state.set(id,2);levels.set(id,level);return level;};
 for(const id of nodes.keys())visit(id);return levels;
};
const levels=checkDAG(itemMap,id=>(itemMap.get(id).deps??[]).map(canonical),'item-cycle');
checkDAG(pageMap,id=>pageMap.get(id).requires??[],'page-cycle');
const reachable=(from,target,seen=new Set())=>{if(from===target)return true;if(seen.has(from))return false;seen.add(from);return (pageMap.get(from)?.requires??[]).some(x=>reachable(x,target,seen));};
for(const [id,row]of itemMap){
 if(row.dependency_level!=null&&row.dependency_level!==levels.get(id))fail('dependency-level',id,{declared:row.dependency_level,computed:levels.get(id)});
 for(const raw of row.deps??[]){const d=canonical(raw),s=itemMap.get(d),home=s?.page??corpus.homeOf.get(d);if(home&&home!==row.page&&!reachable(row.page,home))fail('undeclared-page-dependency',id,{supplier:d,supplier_page:home});}
}
const closure=new Set();
const scan=id=>{id=canonical(id);if(!id||closure.has(id))return;closure.add(id);const row=itemMap.get(id)??root.get(id);if(root.has(id)&&['remark','open-problem','physics-theorem','postulate','experiment','observation'].includes(row.kind))fail('forbidden-transitive-supplier',id,row.kind);for(const d of row.deps??[]){if(!canonical(d))fail('unresolved-root-closure-dependency',id,d);else scan(d);}};
for(const id of itemMap.keys())scan(id);
const report={status:problems.length?'fail':'pass',scope:'Two explicit draft-planning proposals and their consumed root prerequisite closure; no proof acceptance or engine gate',categories:folders.map(x=>x.split('/').pop()),proposed_pages:pageMap.size,proposed_items:itemMap.size,root_prerequisites:closure.size-itemMap.size,max_item_dependency_level:Math.max(0,...levels.values()),errors:problems,warnings};
writeFileSync('research/quantum-planning-review/mechanical-check.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,errors:problems.slice(0,30)},null,2));
process.exitCode=problems.length?1:0;
