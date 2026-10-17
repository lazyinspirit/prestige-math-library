import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {pathToFileURL} from 'node:url';
const root=process.cwd();
const {splitFrontmatter,sectionText,sourceSectionText,factParagraphs,numberedProofSteps}=await import(pathToFileURL(path.join(root,'tools/facts-block.mjs')));
const {frontmatterList}=await import(pathToFileURL(path.join(root,'tools/frontmatter-list.mjs')));
const base=path.dirname(new URL(import.meta.url).pathname);
const run='numerical-optimization-dynamics-2026-10-16';
const manifest=`research/${run}-batch-17.pages.json`, contract=`research/${run}-batch-17.proof-contracts.json`, outside=`research/${run}-batch-33.proof-contracts.json`;
const changes=[],sources=new Map();
const corId='cor-computed-singular-values-absolute-error-from-backward-stability', corPath=`items/${corId}.md`, direct='alg-implicit-shifted-bidiagonal-qr-with-deflation';
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const source=id=>{const p=`items/${id}.md`;if(!sources.has(p))sources.set(p,fs.readFileSync(p));return splitFrontmatter(sources.get(p).toString());};
const norm=s=>s.replace(/\s+/g,' ').trim();
const statement=body=>['Statement','Statement refuted','Definition','Example'].map(k=>sectionText(body,k).trim()).find(Boolean)||'';
function change(p,owner,field,before,after){if(JSON.stringify(before)!==JSON.stringify(after))changes.push({path:p,id:owner,field,before,after});return after;}
const m=JSON.parse(fs.readFileSync(manifest));
for(const page of m)for(const row of page.items??[]){const {fm,body}=source(row.id);const projectedDeps=frontmatterList(fm,'deps');if(row.id===corId&&!projectedDeps.includes(direct))projectedDeps.push(direct);row.deps=change(manifest,row.id,'deps',row.deps,projectedDeps);if(Object.hasOwn(row,'statement'))row.statement=change(manifest,row.id,'statement',row.statement,statement(body));if(Object.hasOwn(row,'strategy')){const next=/^kind:\s*(algorithm|definition)\s*$/m.test(fm)?sectionText(body,'Definition').trim():['Proof','Refutation','Counterexample','Verification'].map(k=>sectionText(body,k).trim()).find(Boolean)||row.strategy;row.strategy=change(manifest,row.id,'strategy',row.strategy,next);}}
const c=JSON.parse(fs.readFileSync(contract));
for(const [id,entry]of Object.entries(c.contracts)){if(!entry)continue;const{body}=source(id);const steps=numberedProofSteps(body);const uses=fact=>steps.filter(s=>new RegExp(`\\b${fact}\\b`).test(s.text)).map(s=>s.id);
 for(const citation of entry.citations??[]){const sb=source(citation.source).body;const current=sourceSectionText(sb,citation.source_section)?.trim();if(!current)throw Error(`Missing source ${citation.source}/${citation.source_section}`);if(!norm(current).includes(norm(citation.quote)))citation.quote=change(contract,id,`citations.${citation.fact}:${citation.source}.quote`,citation.quote,current);citation.uses=change(contract,id,`citations.${citation.fact}:${citation.source}.uses`,citation.uses,uses(citation.fact));}
 for(const[fact,record]of factParagraphs(body))for(const target of record.links){if(entry.citations.some(x=>x.fact===fact&&x.source===target))continue;const sb=source(target).body;const source_section=['Statement','Definition','Statement refuted','Example'].find(k=>sectionText(sb,k).trim());if(!source_section)throw Error(`Missing section ${target}`);const next={fact,source:target,source_section,quote:sectionText(sb,source_section).trim(),uses:uses(fact)};entry.citations.push(change(contract,id,`citations.add.${fact}:${target}`,null,next));}
 const oldByStep=new Map([...entry.derivations??[],...entry.routine_steps??[]].map(d=>[d.step,d]));
 for(const field of ['derivations','routine_steps']){const old=entry[field]??[];const selected=field==='derivations'?steps.filter(s=>!(entry.routine_steps??[]).some(r=>r.step===s.id)):steps.filter(s=>old.some(r=>r.step===s.id));const next=selected.map(s=>{const old=oldByStep.get(s.id);return {...old,id:old?.id??`step-${s.id.replace('.','-')}`,claim:s.claim,step:s.id,inputs:s.inputs};});entry[field]=change(contract,id,field,old,next);}}
const o=JSON.parse(fs.readFileSync(outside));
for(const citation of o.contracts['thm-computed-pseudospectrum-membership-enclosure'].citations){if(!c.scope.includes(citation.source))continue;const current=sourceSectionText(source(citation.source).body,citation.source_section).trim();if(!norm(current).includes(norm(citation.quote)))citation.quote=change(outside,'thm-computed-pseudospectrum-membership-enclosure',`citations.${citation.fact}:${citation.source}.quote`,citation.quote,current);}
const corBefore=fs.readFileSync(corPath,'utf8');const corDeps=frontmatterList(splitFrontmatter(corBefore).fm,'deps');if(corDeps.includes(direct))throw Error('Direct dependency already applied; review baseline');const corAfter=corBefore.replace(/^deps: \[(.*)\]$/m,(_,v)=>`deps: [${v}, ${direct}]`);if(corAfter===corBefore)throw Error('Unexpected corollary deps format');changes.push({path:corPath,id:corId,field:'deps.append',before:corDeps,after:[...corDeps,direct]});
const files=[manifest,contract,outside,corPath];const values=[m,c,o,corAfter];const guards=[];
for(let i=0;i<files.length;i++){const p=files[i],before=fs.readFileSync(p),proposed=Buffer.from(i===3?values[i]:JSON.stringify(values[i],null,2)+'\n');for(const name of ['before','proposed'])fs.mkdirSync(path.join(base,name,path.dirname(p)),{recursive:true});fs.writeFileSync(path.join(base,'before',p),before);fs.writeFileSync(path.join(base,'proposed',p),proposed);guards.push({path:p,before_raw_sha256:sha(before),proposed_raw_sha256:sha(proposed),optional_batch33:i===2,source_frontmatter_only:i===3});}
for(const[p,bytes]of sources){fs.mkdirSync(path.join(base,'context',path.dirname(p)),{recursive:true});fs.writeFileSync(path.join(base,'context',p),bytes);}
fs.writeFileSync(path.join(base,'source-raw-guards.json'),JSON.stringify([...sources].map(([p,v])=>({path:p,raw_sha256:sha(v)})),null,2)+'\n');
fs.writeFileSync(path.join(base,'metadata-raw-guards.json'),JSON.stringify(guards,null,2)+'\n');
fs.writeFileSync(path.join(base,'field-deltas.json'),JSON.stringify(changes,null,2)+'\n');
fs.writeFileSync(path.join(base,'summary.json'),JSON.stringify({mode:'ROOT-ONLY proposal, not applied; no validators/gates/levels/recertification',metadata_paths:guards,source_context_count:sources.size,field_delta_count:changes.length,delta_by_path:Object.fromEntries(files.map(p=>[p,changes.filter(x=>x.path===p).length])),unchanged_fields:'All scope, risk/acceptance/boundary/finite-check metadata and absent mirrors retained; only existing source mirrors, deps, citation quotes/uses and proof derivations projected.',batch33:'Only pseudospectrum A1 quote of batch17 absolute-error corollary changes. Optional separate target; coordinate root batch33 metadata proposal.'},null,2)+'\n');
console.log(JSON.stringify({source_context_count:sources.size,field_deltas:changes.length,by_path:Object.fromEntries(files.map(p=>[p,changes.filter(x=>x.path===p).length]))}));
