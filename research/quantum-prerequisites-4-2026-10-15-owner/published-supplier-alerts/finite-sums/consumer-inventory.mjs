import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { frontmatterList } from '../../../../tools/frontmatter-list.mjs';
const base=fileURLToPath(new URL('.',import.meta.url));
const roots=['def-finite-sum','lem-finite-sum-laws'];
const sha=s=>createHash('sha256').update(s).digest('hex');
const rows=new Map(),aliases=new Map();
for (const name of readdirSync('items')) {
 if(!name.endsWith('.md'))continue;
 const path=join('items',name),raw=readFileSync(path,'utf8');
 const id=name.slice(0,-3),fm=raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'';
 rows.set(id,{id,path,raw,sha256:sha(raw),deps:frontmatterList(fm,'deps'),aliases:frontmatterList(fm,'aliases')});
}
for(const row of rows.values()) {aliases.set(row.id,row.id);for(const id of row.aliases)aliases.set(id,row.id);}
const canonical=id=>aliases.get(id)??id;
for(const row of rows.values())row.deps=row.deps.map(canonical);
const closure=new Set(roots),parent=new Map();
for(let changed=true;changed;) {changed=false;for(const row of rows.values())if(!closure.has(row.id)) {
 const supplier=row.deps.find(id=>closure.has(id));
 if(supplier){closure.add(row.id);parent.set(row.id,supplier);changed=true;}
}}
const chain=id=>{const out=[id];while(parent.has(id)){id=parent.get(id);out.push(id);}return out.reverse();};
const output=[];
for(const id of [...closure].sort()) {
 const row=rows.get(id);output.push({id,path:row.path,sha256:row.sha256,logical_path:chain(id),
 disposition:roots.includes(id)?'supplier proposal':row.deps.some(d=>roots.includes(d))?'direct consumer: extensional typed interface congruence':'indirect consumer: congruence propagated through unchanged supplier claims',
 coverage:'source bytes and dependency route bound; no whole-proof audit claimed; no consumer repair implied by identical typed input/output/domain/axioms'});
}
const mentions=[];
for(const row of rows.values()) {
 const linked=[...row.raw.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map(m=>canonical(m[1]));
 const used=roots.filter(id=>linked.includes(id));
 if(used.length)mentions.push({id:row.id,path:row.path,sha256:row.sha256,suppliers:used,
  disposition:closure.has(row.id)?'logical closure row covers typed interface congruence':'nonlogical/context link: same symbol meanings and claims retained; no proof supplier inferred'});
}
// Check only new edges' prerequisite closures. No whole-corpus cycle gate.
const added=['def-nat-order','def-nat-addition','lem-nat-add-commutative','lem-nat-add-cancellative'];
const prerequisiteGuards=[];
for(const seed of added) {
 const seen=new Set(),todo=[seed];while(todo.length){const id=todo.pop();if(seen.has(id))continue;seen.add(id);for(const dep of rows.get(id)?.deps??[])todo.push(dep);}
 if(roots.some(id=>seen.has(id)))throw Error('new supplier depends on repaired finite-sum supplier: '+seed);
 prerequisiteGuards.push({id:seed,closure_count:seen.size,finite_sum_back_edge:false,closure:[...seen].sort().map(id=>({id,sha256:rows.get(id)?.sha256??null}))});
}
writeFileSync(join(base,'consumer-inventory.json'),JSON.stringify({version:1,scope:'all current items through canonicalized deps and aliases; explicit root wikilinks also retained',classification:'public Definition notation clarified, not proof-only; congruence at every typed interface, not global proof audits',typed_interface_certificate:{prefix_domain:'a:N->R, n:N',inclusive_lower_domain:'m,n:N with m<=n+1',half_open_lower_domain:'m,r:N with m<=r; r=0 uses existing -1 endpoint label',gap:'unique d:N with m+d=endpoint; same admissible natural difference as original intended term count',codomain:'R for sums and products',empty_values:'sum 0, product 1, unchanged',sum_product_formulas:'unchanged',lemma_statement:'byte-identical',forbidden_expansion:'no total truncated subtraction, no new m>n+1 domain, no natural-valued sum redefinition'},counts:{items:rows.size,logical_closure:closure.size,direct:output.filter(x=>x.disposition.startsWith('direct')).length,root_wikilink_mentions:mentions.length},disposition_legend:{supplier:"supplier proposal",direct:"direct consumer: extensional typed interface congruence",indirect:"indirect consumer: congruence propagated through unchanged supplier claims"},coverage:"Every row binds source bytes and dependency route only; no whole-proof audit claimed. The single typed interface certificate applies by substitution at each edge.",consumers:output.map(row=>({id:row.id,sha256:row.sha256,via:parent.get(row.id)??null,disposition:roots.includes(row.id)?"supplier":row.disposition.startsWith("direct")?"direct":"indirect"})),root_wikilink_mentions:mentions,new_edge_cycle_checks:prerequisiteGuards})+'\n');
console.log(JSON.stringify({items:rows.size,logical_closure:closure.size,direct:output.filter(x=>x.disposition.startsWith('direct')).length,root_wikilink_mentions:mentions.length,new_edges_without_back_edge:added.length}));
