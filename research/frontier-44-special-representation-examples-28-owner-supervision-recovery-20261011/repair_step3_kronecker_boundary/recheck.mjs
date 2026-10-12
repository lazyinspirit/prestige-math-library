import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {yaml} from '../../../tools/pathway-lib.mjs';
import {itemHashGuard,itemSurfaceHash} from '../../../tools/item-hash.mjs';
import {loadStep3,itemDecision,itemHash} from '../../../tools/step3-decisions.mjs';
const run='frontier-44-special-representation-examples-28';
const base=`research/${run}-owner-supervision-recovery-20261011/repair_step3_kronecker_boundary`;
const prior=`research/${run}-owner-step3-kronecker-boundary-round1`;
const hash=b=>createHash('sha256').update(b).digest('hex');
const bind=path=>{let b=readFileSync(path);return {path,raw_sha256:hash(b),...(path.startsWith('items/')?{content_sha256:itemHashGuard(b.toString()),surface_sha256:itemSurfaceHash(b.toString())}:{})}};
const final=JSON.parse(readFileSync(`${prior}/final-current-after-binding-round1.json`));
let comparisons=[];
function visit(v){if(!v||typeof v!=='object')return;if(v.path&&v.raw_sha256){const now=bind(v.path);comparisons.push({...now,previous_raw_sha256:v.raw_sha256,unchanged:now.raw_sha256===v.raw_sha256});}for(const value of Object.values(v))if(typeof value==='object')visit(value)}
visit(final);
const ids=['lem-kronecker-reduction-lemma','thm-row-gap-reduction-and-conditional-k-stability','cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability'];
const reverse=new Map(),texts=new Map();let parsed=0;
for(const f of readdirSync('items').filter(f=>f.endsWith('.md'))){const id=f.slice(0,-3), t=readFileSync(`items/${f}`,'utf8'),fm=/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(t);if(!fm)throw Error(`no fm ${id}`);let d=yaml().parse(fm[1]);if(!d||typeof d!=='object')throw Error(`bad fm ${id}`);parsed++;texts.set(id,t);for(const dep of d.deps??[]){if(!reverse.has(dep))reverse.set(dep,[]);reverse.get(dep).push(id)}}
function closure(id){let seen=new Set(),q=[...(reverse.get(id)??[])];for(let i=0;i<q.length;i++){if(seen.has(q[i]))continue;seen.add(q[i]);q.push(...(reverse.get(q[i])??[]))}return [...seen].sort()}
const inventory=ids.map(id=>({id,direct:(reverse.get(id)??[]).sort(),transitive:closure(id),citations:[...texts].filter(([x,t])=>x!==id&&t.includes(`[[${id}`)).map(([x])=>x).sort()}));
const s=loadStep3(process.cwd(),run),decisions=ids.map(id=>({id,...itemDecision(s,id),current_native_input_sha256:itemHash(s,id),binding:bind(`research/${run}-step3b-owner-${id}.json`)}));
const result={version:1,run,recorded_at:new Date().toISOString(),reviewer:'/root/repair_step3_kronecker_boundary',recovery_reviewer_inherits_original_scope:true,prior_evidence:[bind(`${prior}/review.json`),bind(`${prior}/final-current-after-binding-round1.json`),bind(`${prior}/root-integration-round1/normal-owner-registration.json`)],current_carriers:[...ids,'rem-no-general-positive-combinatorial-rule-for-kronecker-coefficients-is-known'].map(id=>bind(`items/${id}.md`)),saved_binding_comparisons:comparisons,changed_saved_bindings:comparisons.filter(x=>!x.unchanged),consumer_inventory:{method:'Complete current item metadata parsed with actual renderer YAML parser; reverse dependency closure and exact citations; inventory discovery only, not unrelated audit',parsed_items:parsed,subjects:inventory},current_native_decisions:decisions,new_math_repair_cycle:false,counter_reset:false,canonical_writes:false,gate_attempt:false};
writeFileSync(`${base}/current-binding-and-decisions.json`,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({changed:result.changed_saved_bindings,inventory,decisions:decisions.map(d=>({id:d.id,closed:d.closed,reason:d.reason,current:d.current_native_input_sha256,registered:d.decision?.sha256}))},null,2));
