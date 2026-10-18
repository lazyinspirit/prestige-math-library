import {readFileSync,readdirSync,writeFileSync} from 'node:fs';
import {readRunManifestPages} from '../../../tools/run-manifest-pages.mjs';
import {frontmatterList} from '../../../tools/frontmatter-list.mjs';
const root=new URL('../../../',import.meta.url); // archive is three levels below repo
const read=p=>readFileSync(new URL(p,root),'utf8');
const plan=JSON.parse(read('research/plan-spec.json'));
const current=readRunManifestPages(root.pathname,'non-ml-math-remaining-81-2026-10-18',{allowEmptyItems:true});
const currentById=new Map(current.map(p=>[p.id,p]));
plan.pages=plan.pages.map(p=>currentById.has(p.id)?{...p,items:currentById.get(p.id).items}:p);
const A='duality-and-rigidity-in-monoidal-categories',T='tensor-and-fusion-categories';
const moved=['def-spherical-structure','rem-pivotal-and-spherical-structures-vary-by-monoidal-automorphisms-of-the-identity','thm-in-a-spherical-category-the-left-and-right-traces-agree','fs-the-left-and-right-traces-always-agree','fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure'];
const home=new Map(plan.pages.flatMap(p=>(p.items??[]).map(i=>[i.id,p.id]))), edges=new Map(), authored=new Map();
for(const f of readdirSync(new URL('items/',root))){if(!f.endsWith('.md'))continue;const s=read('items/'+f); authored.set(f.slice(0,-3),[...frontmatterList(s,'deps'),...frontmatterList(s,'justified_by')]);}
for(const p of plan.pages)for(const i of p.items??[])edges.set(i.id,[...new Set([...(i.deps??[]),...(i.justified_by??[]),...(authored.get(i.id)??[])])]);
for(const [i,d] of authored)if(!edges.has(i))edges.set(i,d);
const reverse=new Map();for(const [i,ds] of edges)for(const d of ds){if(!reverse.has(d))reverse.set(d,[]);reverse.get(d).push(i)}
const direct=[...new Set(moved.flatMap(i=>reverse.get(i)??[]))].filter(i=>!moved.includes(i));
const seen=new Set(moved),queue=[...moved];for(let k=0;k<queue.length;k++)for(const i of reverse.get(queue[k])??[])if(!seen.has(i)){seen.add(i);queue.push(i)}
const all=queue.filter(i=>!moved.includes(i));
const pageEdges=new Map(plan.pages.map(p=>[p.id,new Set(p.requires??[])]));for(const [i,ds] of edges)for(const d of ds)if(home.has(i)&&home.has(d)&&home.get(i)!==home.get(d))pageEdges.get(home.get(i)).add(home.get(d));
const revPages=new Map();for(const [p,ds] of pageEdges)for(const d of ds){if(!revPages.has(d))revPages.set(d,[]);revPages.get(d).push(p)}
const pSeen=new Set([A,T]),pq=[A,T];for(let k=0;k<pq.length;k++)for(const p of revPages.get(pq[k])??[])if(!pSeen.has(p)){pSeen.add(p);pq.push(p)}
const output={moved,direct_item_consumers:direct.map(id=>({id,page:home.get(id)??null})),indirect_and_direct_item_consumers:all.map(id=>({id,page:home.get(id)??null})),direct_page_consumers:[...new Set([...(revPages.get(A)??[]),...(revPages.get(T)??[])])].sort(),all_affected_page_consumers:pq.sort(),cross_edges:[]};
for(const [i,ds]of edges)for(const d of ds)if([A,T].includes(home.get(i))&&[A,T].includes(home.get(d))&&home.get(i)!==home.get(d))output.cross_edges.push({item:i,dep:d,from:home.get(i),to:home.get(d)});
writeFileSync(new URL('inventory.json',import.meta.url),JSON.stringify(output,null,2)+'\n');
console.log(JSON.stringify({direct:direct.length,closure:all.length,pageClosure:pq.length}));
function induced(h){const out=new Map(plan.pages.map(p=>[p.id,new Set()])); for(const [i,ds]of edges)for(const d of ds)if(h.has(i)&&h.has(d)&&h.get(i)!==h.get(d))out.get(h.get(i)).add(h.get(d));return out}
function reachable(g,s){const seen=new Set([s]),q=[s];for(let k=0;k<q.length;k++)for(const p of g.get(q[k])??[])if(!seen.has(p)){seen.add(p);q.push(p)}return seen}
const before=induced(home),newHome=new Map(home);for(const id of moved)newHome.set(id,T);const after=induced(newHome);after.get(T).add(A);
const components=g=>[...g.keys()].filter(p=>reachable(g,A).has(p)&&reachable(g,p).has(A)).sort();
const consequence={kind:'read-only focused graph computation, not a native gate',current_run_manifest_overlay:true,item_edges:'union of current plan/current-run inventory and actual deps+justified_by; conservative logical graph',before_component_containing_duality:components(before),after_component_containing_duality:components(after),after_duality_to_tensor:reachable(after,A).has(T),after_tensor_to_duality:reachable(after,T).has(A),no_external_consumers_of_moved_items:!all.length};
writeFileSync(new URL('graph-consequence.json',import.meta.url),JSON.stringify(consequence,null,2)+'\n');console.log(JSON.stringify(consequence));
