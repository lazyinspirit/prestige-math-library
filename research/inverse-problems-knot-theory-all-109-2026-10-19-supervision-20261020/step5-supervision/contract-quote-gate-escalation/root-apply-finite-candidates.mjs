// Finite root application, deliberately outside native tooling. Default: preview only.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {pathToFileURL} from 'node:url';
const root=process.cwd(),run='inverse-problems-knot-theory-all-109-2026-10-19';
const base=`research/${run}-supervision-20261020/step5-supervision`,home=`${base}/contract-quote-gate-escalation`;
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const need=(x,m)=>{if(!x)throw Error(m);};
const read=p=>fs.readFileSync(path.resolve(root,p),'utf8'),json=p=>JSON.parse(read(p));
const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const args=process.argv.slice(2),apply=args.includes('--apply-root');
need(args.every((x,i)=>['--apply-root','--output','--root-level-evidence'].includes(x)||['--output','--root-level-evidence'].includes(args[i-1])),'unknown argument');
const opt=k=>args.includes(k)?args[args.indexOf(k)+1]:null;
const {yaml}=await import(pathToFileURL(path.join(root,'tools/pathway-lib.mjs')));
const {splitFrontmatter,sourceSectionText}=await import(pathToFileURL(path.join(root,'tools/facts-block.mjs')));
const {sharedWriteLock}=await import(pathToFileURL(path.join(root,'tools/step5-shared-write-lock.mjs')));
const inputPath=`${home}/accepted-finite-inputs.json`;
need(hash(read(inputPath))==='8483754843a7ef92e326cc513885b5eedbf8699166f500e566493e17b46a6e68','accepted input inventory changed');
const accepted=json(inputPath);
for(const [p,h]of Object.entries(accepted.files))need(hash(read(p))===h,`accepted review/candidate changed: ${p}`);
const evidence={...accepted.files,[inputPath]:hash(read(inputPath))},sourceBindings={},before=new Map(),after=new Map(),ops=[];
const bind=(p,h)=>{need(hash(read(p))===h,`stale reviewed source/carrier: ${p}`);need(!sourceBindings[p]||sourceBindings[p]===h,'conflicting guard');sourceBindings[p]=h;};
function get(p){if(!before.has(p)){const b=read(p);before.set(p,b);after.set(p,b);}return after.get(p);}
// JSON token spans retain untouched bytes, including strings and whitespace.
function spans(text){let i=0;const map=new Map(),ws=()=>{while(/\s/.test(text[i]??'')&&i<text.length)i++;};
 const string=()=>{const start=i++;while(i<text.length){if(text[i]==='\\'){i+=2;continue;}if(text[i++]==='"')return JSON.parse(text.slice(start,i));}throw Error('unterminated JSON string');};
 const value=p=>{ws();const start=i,c=text[i];if(c==='{'){i++;ws();if(text[i]!=='}')while(true){ws();const key=string();ws();need(text[i++]===':','JSON colon');value([...p,key]);ws();if(text[i]!==',')break;i++;}need(text[i++]==='}','JSON object close');}
 else if(c==='['){i++;ws();let n=0;if(text[i]!==']')while(true){value([...p,n++]);ws();if(text[i]!==',')break;i++;}need(text[i++]===']','JSON array close');}
 else if(c==='"')string();else {while(i<text.length&&!/[\s,}\]]/.test(text[i]))i++;need(i>start,'JSON scalar');}
 map.set(JSON.stringify(p),{start,end:i});};value([]);ws();need(i===text.length,'JSON trailing bytes');return map;}
function patch(file,p,old,next,kind){const text=get(file),doc=JSON.parse(text);let parent=doc;for(const k of p.slice(0,-1)){need(parent[k]!==undefined,`missing path ${file}/${p}`);parent=parent[k];}
 const k=p.at(-1),exists=Object.hasOwn(parent,k);need(equal(exists?parent[k]:null,old),`old field differs ${file}/${p}`);
 if(equal(old,next)&&exists)return;
 const map=spans(text),span=map.get(JSON.stringify(p));let updated;
 if(span){const indent=' '.repeat(span.start-text.lastIndexOf('\n',span.start)-1);const prefix=text.slice(text.lastIndexOf('\n',span.start)+1,span.start).match(/^ */)[0];const token=JSON.stringify(next,null,2).replace(/\n/g,'\n'+prefix);updated=text.slice(0,span.start)+token+text.slice(span.end);}
 else {need(!exists&&!Array.isArray(parent)&&k==='risk_review','only missing risk_review insertion permitted');const par=map.get(JSON.stringify(p.slice(0,-1))),close=par.end-1,line=text.lastIndexOf('\n',close)+1,indent=text.slice(line,close);need(/^ *$/.test(indent),'object closing indent');const prior=text.slice(0,line).replace(/\s+$/,'');const insertion=(Object.keys(parent).length?',':'')+'\n'+indent+'  '+JSON.stringify(k)+': '+JSON.stringify(next,null,2).replace(/\n/g,'\n'+indent+'  ')+'\n'+indent;updated=prior+insertion+text.slice(close);}
 parent[k]=next;need(equal(JSON.parse(updated),doc),'token edit residual');after.set(file,updated);ops.push({kind,file,path:p,before:old,after:next});}
function literal(file,old,next,kind){const text=get(file);need(text.split(old).length===2,`literal not unique ${file}`);after.set(file,text.replace(old,next));ops.push({kind,file,before:old,after:next});}
function fm(text){return yaml().parse(splitFrontmatter(text).fm);}
const inv=json(`${home}/candidate-inventory.json`);
for(const [p,h]of Object.entries(inv.source_bindings))bind(p,h);
for(const f of inv.files)bind(f.path,f.before_sha256);
const quoteOps=json(`${home}/literal-operations.json`);need(quoteOps.length===29,'quote count');
for(const o of quoteOps){need(o.path.length===5&&o.path[2]==='citations'&&o.path[4]==='quote','nonquote operation');need(sourceSectionText(splitFrontmatter(read(o.source_path)).body,o.source_section).trim()===o.after,'quote section changed');patch(o.file,o.path,o.before,o.after,'citation-quote-mirror');}
const ip=json(`${base}/risk-ip-pl-gate-escalation/report.json`);
for(const row of ip.items)bind(`items/${row.id}.md`,row.source_raw_sha256);
for(const [p,h]of Object.entries(ip.supplier_before_raw_sha256))bind(p,h);
const riskIp=json(`${base}/risk-ip-pl-gate-escalation/field-candidates.json`).patches;
need(riskIp.length===3,'IP risk count');for(const o of riskIp){bind(o.path,o.before_file_sha256);patch(o.path,['contracts',o.id,'risk_review'],o.before,o.after,'focused-risk-review');}
const knot=json(`${base}/risk-knot-gate-escalation/knot-three/review.json`);
for(const g of knot.before_guards){bind(g.path,g.raw_sha256);need(hash(read(g.snapshot))===g.raw_sha256,'risk snapshot changed');}
const riskKnot=json(`${base}/risk-knot-gate-escalation/knot-three/risk-field-candidates.json`).operations;
need(riskKnot.length===3,'knot risk count');for(const o of riskKnot){need(o.path.length===3&&o.path[2]==='risk_review','nonrisk operation');patch(o.file,o.path,o.before,o.value,'focused-risk-review');}
const locator=json(`${base}/risk-knot-gate-escalation/knot-three/locator-candidates.json`).operations;need(locator.length===7,'locator count');
for(const o of locator){if(o.kind==='manifest-source-locator-only')patch(o.file,o.path,o.before,o.value,o.kind);
 else if(o.kind==='item-source-locator-only'){const text=get(o.file),meta=fm(text);need(meta.sources.references[o.reference_index].locator===o.before_locator,'wrong locator identity');const lines=text.split('\n').filter(l=>/^      locator: /.test(l)&&yaml().parse(l.trim()).locator===o.before_locator);need(lines.length===1,'locator line identity');literal(o.file,lines[0],`      locator: ${JSON.stringify(o.after_locator)}`,o.kind);const next=fm(after.get(o.file));meta.sources.references[o.reference_index].locator=o.after_locator;need(equal(meta,next),'locator metadata residual');}
 else {need(o.kind==='bibliographic-reference-label-only','unknown locator operation');literal(o.file,o.before,o.value,o.kind);}}
// Root approved level7 after full1472-subject graph calculation. Never copy the candidate's stale16.
const fwd=`${base}/forward-gate-escalation`,forward=json(`${fwd}/candidate-manifest.json`),fwdPath=forward.canonical_path;
bind(fwdPath,forward.before_raw_sha256);const fwdBefore=read(`${fwd}/before/cex-knot-kt-05-boundary-case.md`),fwdCandidate=read(`${fwd}/candidate/cex-knot-kt-05-boundary-case.md`);
need(hash(fwdBefore)===forward.before_raw_sha256&&hash(fwdCandidate)===forward.candidate_raw_sha256,'forward archive changed');
need(splitFrontmatter(fwdBefore).body===splitFrontmatter(fwdCandidate).body,'forward body changed');
const fwdMeta=fm(fwdCandidate),oldMeta=fm(fwdBefore);need(oldMeta.deps.length===15&&fwdMeta.deps.length===8&&fwdMeta.forward_refs.length===7,'forward scope');
const expected=structuredClone(oldMeta);expected.deps=fwdMeta.deps;expected.forward_refs=fwdMeta.forward_refs;need(equal(expected,fwdMeta),'forward metadata residual');
const corrected=fwdCandidate.replace(/^dependency_level: 16$/m,'dependency_level: 7');need(corrected!==fwdCandidate,'forward level original');get(fwdPath);after.set(fwdPath,corrected);ops.push({kind:'forward-reference-classification-and-root-level',file:fwdPath,before:{deps:oldMeta.deps,forward_refs:oldMeta.forward_refs,dependency_level:16},after:{deps:fwdMeta.deps,forward_refs:fwdMeta.forward_refs,dependency_level:7}});
const mirror=`research/${run}-batch-60.pages.json`,pages=JSON.parse(get(mirror));const hits=[];pages.forEach((p,i)=>(p.items??[]).forEach((x,j)=>{if(x.id===oldMeta.id)hits.push([i,'items',j]);}));need(hits.length===1,'forward manifest identity');
const row=hits[0].reduce((v,k)=>v[k],pages);need(equal(row.deps,oldMeta.deps)&&equal(row.forward_refs,oldMeta.forward_refs)&&row.dependency_level===16,'forward manifest preimage');
for(const [k,v]of Object.entries({deps:fwdMeta.deps,forward_refs:fwdMeta.forward_refs,dependency_level:7}))patch(mirror,[...hits[0],k],row[k],v,'forward-manifest-mirror');
const splice=json(`${base}/splice-gate-escalation/adjoint-source-title-one-field-patch.json`);bind(splice.path,splice.before_sha256);bind(splice.canonical_source_file,splice.canonical_source_sha256);
const sp=JSON.parse(get(splice.path)),matches=[];sp.forEach((p,i)=>(p.items??[]).forEach((x,j)=>{if(x.id===splice.item_id)matches.push([i,'items',j,'sources','references',1,'title']);}));need(matches.length===1,'adjoint mirror identity');need(fm(read(splice.canonical_source_file)).sources.references[1].title===splice.after,'source title differs');patch(splice.path,matches[0],splice.before,splice.after,'adjoint-source-title-mirror');
// Mathematical bodies remain identical; the sole permitted body delta is the explicit Cha Sources link label.
for(const [p,b]of before)if(p.startsWith('items/')){let body=splitFrontmatter(after.get(p)).body;const label=locator.find(o=>o.kind==='bibliographic-reference-label-only'&&o.file===p);if(label)body=body.replace(label.value,label.before);need(body===splitFrontmatter(b).body,`mathematical body changed ${p}`);}
function boundary(){const s=json(`.autopilot/${run}/state.json`);need(s.run===run&&s.stage==='5.9-repair'&&s.paused===true&&Object.values(s.dispatches??{}).every(x=>!x.startedAt||x.endedAt),'requires actual paused/drained5.9');return s;}
boundary();
const levelPath=opt('--root-level-evidence');
if(levelPath){need(levelPath===`${fwd}/root-level-calculation.json`&&hash(read(levelPath))==='98969c60799567c01ab3693325fe17925ca25a237d9c3c0fbb6ab5fcc30480de','root level evidence changed');const level=json(levelPath);need(level.run===run&&level.reviewer==='/root'&&level.items===1472&&level.errors.length===0&&level.authorized_dependency_level===7&&equal(level.changed_levels,[{id:oldMeta.id,before:16,after:7}])&&Object.keys(level.bindings).length===109,'wrong level evidence');for(const [p,h]of Object.entries(level.bindings))bind(p,h);evidence[levelPath]=hash(read(levelPath));}
if(apply)need(levelPath,'application requires --root-level-evidence PATH to root actual1472-graph level7 calculation');
const files=[...before].map(([p,b])=>({path:p,before_sha256:hash(b),after_sha256:hash(after.get(p))})).filter(f=>f.before_sha256!==f.after_sha256);
need(ops.filter(o=>o.kind==='citation-quote-mirror').length===29&&ops.filter(o=>o.kind==='focused-risk-review').length===6,'finite operation counts');
const id=hash(JSON.stringify({evidence,files,ops})).slice(0,16),dest=opt('--output')??`${home}/composed-preview-${id}`;
need(path.resolve(root,dest).startsWith(path.resolve(root,'research')+'/'),'output must be inside research');
function archive(){fs.mkdirSync(dest,{recursive:true});for(const f of files){for(const [phase,text]of [['before',before.get(f.path)],['candidate',after.get(f.path)]]){const p=path.join(dest,phase,f.path);fs.mkdirSync(path.dirname(p),{recursive:true});if(fs.existsSync(p))need(read(p)===text,'archive conflict');else fs.writeFileSync(p,text,{flag:'wx'});}}}
const receipt={version:1,kind:'root-finite-5.8-failure-reconciliation',run,performed_by:apply?'/root':null,applied:false,native_coverage_granted:false,root_level:7,root_level_basis:'Root authorization states actual full1472-subject graph yields7; candidate16 is not authority.',root_level_evidence:levelPath,accepted_evidence:evidence,source_bindings:sourceBindings,files,operations:ops,separate_root_commands:['native plan splice','merge-contracts','defect-ledger99 append and archive restore','guard code application','native collection/certification/full battery']};
if(!apply){need(!fs.existsSync('.autopilot/step5-shared-write.lock'),'shared writer exists');archive();fs.writeFileSync(path.join(dest,'preview.json'),JSON.stringify(receipt,null,2)+'\n');console.log(JSON.stringify({preview:true,path:dest,files:files.length,operations:ops.length,level_evidence:levelPath}));}
else {const owner=`/root/finite-5.8-${id}`,lock=sharedWriteLock(root,'acquire',owner);need(lock.acquired,'shared write lock busy');try{boundary();for(const [p,h]of Object.entries(evidence))need(hash(read(p))===h,'accepted evidence changed under lock');for(const [p,h]of Object.entries(sourceBindings))need(hash(read(p))===h,'reviewed input changed under lock');for(const [p,b]of before)need(read(p)===b,'live preimage changed under lock');archive();
 const statePath=`.autopilot/${run}/state.json`,stateBytes=read(statePath),requestPath=`.autopilot/${run}/owner-gate-request.json`,requestBytes=read(requestPath);fs.writeFileSync(path.join(dest,'creation-state.json'),stateBytes,{flag:'wx'});fs.writeFileSync(path.join(dest,'creation-request.json'),requestBytes,{flag:'wx'});
 receipt.started_at=new Date().toISOString();receipt.state_sha256=hash(stateBytes);receipt.request_sha256=hash(requestBytes);fs.writeFileSync(path.join(dest,'application-intent.json'),JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});
 need(read(statePath)===stateBytes&&read(requestPath)===requestBytes,'boundary changed');for(const f of files){need(hash(read(f.path))===f.before_sha256,'preimage changed during application');const tmp=`${f.path}.${process.pid}.finite-root-tmp`;fs.writeFileSync(tmp,after.get(f.path),{flag:'wx'});fs.renameSync(tmp,f.path);}
 for(const f of files)need(hash(read(f.path))===f.after_sha256,'postimage mismatch');receipt.applied=true;receipt.completed_at=new Date().toISOString();fs.writeFileSync(path.join(dest,'application.json'),JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({applied:true,path:dest,files:files.length,operations:ops.length}));
 }finally{sharedWriteLock(root,'release',owner);}}
