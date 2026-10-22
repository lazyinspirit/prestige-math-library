// Root current-source transcription proposal. Does not edit production records or assert proof acceptance.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {readItem,NONPROOF_KINDS} from '../tools/physics-support/physics-content.mjs';
import {numberedProofSteps,factParagraphs,sourceSectionText,SOURCE_SECTIONS} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-step3-root-adoption/contracts-current-round3`,sha=x=>createHash('sha256').update(x).digest('hex');
const read=p=>JSON.parse(readFileSync(p)),norm=s=>String(s??'').replace(/\s+/g,' ').trim();
mkdirSync(base,{recursive:true});
const guards=new Map(),diagnostics=[],all={version:1,scope:[],contracts:{}},changed=[];
const item=id=>{const p=`items/${id}.md`,s=readItem(p);guards.set(p,sha(s.raw));return s;};
function tokens(s,steps){return [...new Set([...s.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)].filter(m=>m[2]||/^step\s/.test(m[0])||steps.has(m[1])).map(m=>m[2]??`step ${m[1]}`))];}
function pub(s,preferred){const headings={definition:'Definition',example:'Example',remark:'Remark',postulate:'Postulate',counterexample:'Statement refuted','false-statement':'Statement refuted'};for(const h of [...new Set([preferred,headings[s.kind]??'Statement',...SOURCE_SECTIONS])]){if(!SOURCE_SECTIONS.has(h))continue;const q=sourceSectionText(s.body,h)?.trim();if(q)return {section:h,quote:q};}throw Error('No public supplier '+s.id);}
const semantic=read(`research/${run}-owner-step3-qft58-global-calculus/semantic-proof-contract-proposal.json`);
const boundaries={};
for(let batch=1;batch<=129;batch++){
 const p=`research/${run}-batch-${batch}.proof-contracts.json`,raw=readFileSync(p),doc=JSON.parse(raw),manifest=read(`research/${run}-batch-${batch}.pages.json`);
 guards.set(p,sha(raw));
 if(batch===58){for(const id of ['lem-qftx-global-microlocal-pullback','lem-qftx-microcausal-contraction-compatibility']){if(!doc.contracts[id]){doc.scope.push(id);doc.contracts[id]=structuredClone(semantic.contracts[id]);}}}
 for(const[id,entry]of Object.entries(doc.contracts)){
  const s=item(id),steps=numberedProofSteps(s.body),byId=new Map(steps.map(s=>[s.id,s]));
  if(typeof entry.definition_interface==='string'){
   const current=sourceSectionText(s.body,'Definition');
   if(current?.trim()&&!norm(current).includes(norm(entry.definition_interface))){entry.historical_definition_interface=entry.definition_interface;entry.definition_interface=current.trim();}
  }
  if(NONPROOF_KINDS.has(s.kind)||s.kind==='open-problem')continue;
  const oldRows=[...(entry.derivations??[]).map(r=>({field:'derivations',r})),...(entry.routine_steps??[]).map(r=>({field:'routine_steps',r}))];
  const exact=new Map(),mapping={};for(const x of oldRows){const matches=steps.filter(s=>norm(s.claim)===norm(x.r.claim));if(matches.length===1){exact.set(matches[0].id,x);mapping[x.r.step]=matches[0].id;}}
  const sourceChanged=oldRows.length!==steps.length||exact.size!==steps.length;
  for(const b of entry.boundaries??[]){if(b.evidence){const refs=[...b.evidence.matchAll(/\b(\d+\.\d+)\b/g)].map(m=>m[1]);const unresolved=refs.filter(n=>!mapping[n]&&oldRows.some(x=>x.r.step===n)&&sourceChanged);if(unresolved.length)diagnostics.push({id,batch,case:b.case,evidence:b.evidence,unresolved_step_references:unresolved});
   b.evidence=b.evidence.replace(/\bsteps?\s+\d+\.\d+(?:(?:\s*[,;–—-]\s*|\s+(?:and|through|to)\s+)\d+\.\d+)*/gi,chunk=>chunk.replace(/\d+\.\d+/g,n=>mapping[n]??n));}
  }
  entry.derivations=[];entry.routine_steps=[];
  for(const step of steps){const match=exact.get(step.id),same=oldRows.find(x=>x.r.step===step.id),inputs=[...new Set([...step.inputs,...tokens(step.text,byId)])];if(!inputs.length)throw Error('Unjustified current step '+id+' '+step.id);
   const row={...(match?.r??{}),id:`step-${step.id.replace('.','-')}`,step:step.id,claim:step.claim,inputs};
   // A changed paragraph is transcribed as a derivation; routine status is retained only for an exact actual claim.
   entry[match?.field??'derivations'].push(row);
  }

  for(const excerpt of entry.supplier_excerpts??[]){
   if(!excerpt.supplier||typeof excerpt.exact_statement!=='string')continue;
   const supplier=item(excerpt.supplier),st=pub(supplier,excerpt.source_section);
   if(!norm(st.quote).includes(norm(excerpt.exact_statement))){
    excerpt.historical_source_interface={source_section:excerpt.source_section,exact_statement:excerpt.exact_statement,status:excerpt.status,supplier_proof_status:excerpt.supplier_proof_status};
    excerpt.source_section=st.section;excerpt.exact_statement=st.quote;
    excerpt.status='Exact current public interface transcribed for root Step3 proposal; original substantive source-use review retained in historical_source_interface and native/same-owner reports. No renewed full supplier-proof reading asserted.';
    excerpt.supplier_proof_status=`${supplier.status}; this exact-quote refresh does not grant independent proof acceptance`;
   }
  }
  for(const boundary of entry.boundaries??[]){
   const scope=boundary.case_scope;if(!scope?.source_excerpt)continue;
   if(![...SOURCE_SECTIONS].some(h=>sourceSectionText(s.body,h)?.trim())){boundary.historical_case_scope=scope;delete boundary.case_scope;continue;}
   const st=pub(s,scope.source_section);
   if(!norm(st.quote).includes(norm(scope.source_excerpt))){boundary.historical_case_scope=scope;boundary.case_scope={source_section:st.section,source_excerpt:st.quote};}
  }
  const previous=entry.citations??[];entry.citations=[];
  for(const f of factParagraphs(s.body).values())for(const supplier of new Set(f.links)){
   const old=previous.find(c=>c.fact===f.label&&c.source===supplier),st=pub(item(supplier),old?.source_section);entry.citations.push({...old,fact:f.label,source:supplier,source_section:st.section,quote:old?.quote&&norm(st.quote).includes(norm(old.quote))?old.quote:st.quote,uses:steps.filter(s=>tokens(s.text,byId).includes(f.label)).map(s=>s.id)});
  }
 }
 const after=JSON.stringify(doc,null,2)+'\n';if(after!==raw.toString())changed.push({path:p,before_sha256:sha(raw),after_sha256:sha(after)});
 writeFileSync(`${base}/batch-${batch}.proposal.json`,after);all.scope.push(...doc.scope);Object.assign(all.contracts,doc.contracts);
}
writeFileSync(`${base}/merged.proposal.json`,JSON.stringify(all,null,2)+'\n');writeFileSync(`${base}/${process.argv.includes('--final')?'diagnosis.final.json':'diagnosis.json'}`,JSON.stringify({at:new Date().toISOString(),run,scope:all.scope.length,changed,diagnostics,guards:[...guards].map(([path,sha256])=>({path,sha256})),qualification:'Reviewable current-source worksheet proposal. No production edits, new source-reading claims for unchanged author rows, boundary waivers, readiness or gate acceptance.'},null,2)+'\n');
console.log(JSON.stringify({scope:all.scope.length,changed:changed.length,boundary_reference_review:diagnostics.length}));
