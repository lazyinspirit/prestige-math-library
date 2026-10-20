#!/usr/bin/env node
// Read-only identity evidence. Never applies metadata, rewrites source, hashes, or runs gates.
import {readFileSync,readdirSync,mkdirSync,writeFileSync,lstatSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {pathToFileURL} from 'node:url';
const RUN='machine-learning-all-101-2026-10-19',args=process.argv.slice(2);
const option=k=>{const i=args.indexOf(k);return i<0?undefined:args[i+1];};
const root=resolve(option('--root')??process.cwd());
const need=(b,m)=>{if(!b)throw Error(m);};
const guards=new Map();
function read(p){need(!p.includes('..')&&!p.startsWith('/'),'unsafe input '+p);const full=join(root,p);need(lstatSync(full).isFile()&&!lstatSync(full).isSymbolicLink(),'nonregular '+p);const raw=readFileSync(full,'utf8');need(!guards.has(p)||guards.get(p)===raw,'input race '+p);guards.set(p,raw);return raw;}
const {numberedProofSteps,splitFrontmatter}=await import(pathToFileURL(join(root,'tools/facts-block.mjs')));
read('tools/facts-block.mjs');
const phaseGroup=/\b[Ss]teps?\s+\d+\.\d+(?:\s*(?:[–—-]|,|and)\s*\d+\.\d+)*/g;
const tagGroup=/(?<!\[)\[([^\[\]]+)\](?!\])/g;
const validTag=t=>/^(?:[FAL]\d+|step\s+\d+\.\d+|given|algebra|choose|construct|induction|IH|cases|contradiction|assume-contra|suffices|definition|by definition)$/i.test(t.trim());
// Operate only outside dollar math. Explicit phase references are placeholders;
// never replace an unprefixed decimal or any mathematical token/constant.
export function identityNormalise(text,{phaseReferences=true}={}){
 let result='',chunk='',math=null;
 const flush=()=>{const withoutTags=chunk.replace(tagGroup,(whole,content)=>content.split(',').every(validTag)?'':whole);result+=phaseReferences?withoutTags.replace(phaseGroup,'<PHASE-REFERENCE>'):withoutTags;chunk='';};
 for(let i=0;i<text.length;i++){
  const c=text[i];if(c==='$'&&text[i-1]!=='\\'){
   const marker=text[i+1]==='$'?'$$':'$';if(math===null){flush();math=marker;result+=marker;if(marker==='$$')i++;}
   else if(math===marker){result+=marker;math=null;if(marker==='$$')i++;}else result+=c;
  }else if(math!==null)result+=c;else chunk+=c;
 }
 flush();return result.replace(/\s+/g,' ').trim();
}
function protectedStrings(entry){const out=[];function visit(v,p){if(typeof v==='string')out.push({pointer:p,text:v});else if(Array.isArray(v))v.forEach((x,i)=>visit(x,p+'/'+i));else if(v&&typeof v==='object')for(const[k,x]of Object.entries(v))visit(x,p+'/'+k.replaceAll('~','~0').replaceAll('/','~1'));}
 for(const[k,v]of Object.entries(entry))if(/boundar|risk/i.test(k))visit(v,'/'+k);return out;}
function references(text){const out=[];for(const group of text.matchAll(phaseGroup))for(const token of group[0].matchAll(/\d+\.\d+/g))out.push(token[0]);return [...new Set(out)];}
let oldSnapshot=null, oldByPath=new Map();
if(option('--old-contract-plan')){const p=option('--old-contract-plan');oldSnapshot=JSON.parse(read(p));need(oldSnapshot.run===RUN&&Array.isArray(oldSnapshot.guards),'invalid old byte snapshot plan');oldByPath=new Map(oldSnapshot.guards.filter(x=>new RegExp(`^research/${RUN}-batch-\\d+\\.proof-contracts\\.json$`).test(x.path)).map(x=>[x.path,x.raw]));}
const names=readdirSync(join(root,'research')).filter(n=>new RegExp(`^${RUN}-batch-\\d+\\.pages\\.json$`).test(n)).sort();need(names.length===101,'not actual101 manifest inventory');
const maps=[],ambiguous=[],unmatched=[],impacts=[],seen=new Set(),sameStep=[];
for(const name of names){const batch=name.match(/-batch-(\d+)\.pages/)[1],path=`research/${RUN}-batch-${batch}.proof-contracts.json`,live=JSON.parse(read(path)),old=oldByPath.has(path)?JSON.parse(oldByPath.get(path)):live;const pages=JSON.parse(read('research/'+name));
 for(const item of pages.flatMap(p=>p.items)){const id=item.id;need(!seen.has(id),'duplicate owned id '+id);seen.add(id);const sourcePath=`items/${id}.md`,source=read(sourcePath),currentSteps=numberedProofSteps(splitFrontmatter(source).body),oldEntry=old.contracts?.[id];if(!oldEntry)continue;
  const oldSteps=[...(oldEntry.derivations??[]),...(oldEntry.routine_steps??[])],oldCounts=new Map(),newIndex=new Map();
  for(const s of oldSteps){const n=identityNormalise(s.claim??'');oldCounts.set(n,(oldCounts.get(n)??0)+1);}
  for(const s of currentSteps){const n=identityNormalise(s.claim);newIndex.set(n,[...(newIndex.get(n)??[]),s]);}
  const itemMap=new Map();
  for(const s of oldSteps){const n=identityNormalise(s.claim??''),matches=newIndex.get(n)??[];
   if(!n||matches.length===0){unmatched.push({id,old_step:s.step});continue;}
   if(matches.length!==1||oldCounts.get(n)!==1){ambiguous.push({id,old_step:s.step,current_candidates:matches.map(m=>m.id),old_duplicate_count:oldCounts.get(n)});continue;}
   const m={id,old_step:s.step,new_step:matches[0].id,old_claim:s.claim,current_claim:matches[0].claim,normalised_identity:n,old_contract_path:path,source_path:sourcePath};itemMap.set(s.step,m);(s.step===matches[0].id?sameStep:maps).push(m);
  }
  for(const row of protectedStrings(live.contracts?.[id]??{}))for(const ref of references(row.text)){const m=itemMap.get(ref);if(m&&m.new_step!==ref)impacts.push({id,path,pointer:'/contracts/'+id+row.pointer,expected_value:row.text,old_step:ref,proved_new_step:m.new_step,disposition:'Unique paragraph identity proves changed label; report only. Root must preserve conclusion/status and apply individually if appropriate.'});}
 }
}
// A separately authenticated source split, not inferred from the older contract's
// prose summary. Verify literal body equality except added tags/whitespace.
const specialId='lem-policy-score-has-zero-conditional-mean',specialOld='research/'+RUN+'-owner-unused-fact-format/your-proposal/before/'+specialId+'.md';
const oldSource=read(specialOld),oldSourceSteps=numberedProofSteps(splitFrontmatter(oldSource).body),currentSource=read(`items/${specialId}.md`),newSourceSteps=numberedProofSteps(splitFrontmatter(currentSource).body);
const old21=oldSourceSteps.find(s=>s.id==='2.1'),new21=newSourceSteps.find(s=>s.id==='2.1'),new31=newSourceSteps.find(s=>s.id==='3.1');
// Here allow only valid bracket tags and whitespace removal; no phase-text change.
const splitNorm=s=>identityNormalise(s,{phaseReferences:false});
const splitVerified=!!old21&&!!new21&&!!new31&&splitNorm(old21.claim)===splitNorm(new21.claim+' '+new31.claim);
const policyPath=`research/${RUN}-batch-84.proof-contracts.json`,policy=JSON.parse(read(policyPath)),specialOps=[];
for(const row of protectedStrings(policy.contracts[specialId]??{}))if(references(row.text).includes('2.1')){
 if(splitVerified){const replacement=row.text.replace(phaseGroup,g=>g.replace(/(?<!\d)2\.1(?!\d)/g,'2.1–3.1'));specialOps.push({path:policyPath,pointer:'/contracts/'+specialId+row.pointer,expected_value:row.text,replacement_value:replacement,proof:'Actual pre-split source2.1 matches concatenated current2.1+3.1 after valid tag groups and whitespace only. Conservative range preserves referenced argument; no claim of independent re-review.'});}
}
for(const[p,s]of guards)need(readFileSync(join(root,p),'utf8')===s,'final input race '+p);
const result={version:1,run:RUN,kind:'read-only-step-anchor-identity-map',manifest_count:names.length,item_count:seen.size,normalization:'Only explicit step/steps phase references outside dollar math, valid bracket tag lists outside dollar math, and whitespace. Mathematical tokens/constants and all prose retained; unprefixed decimal references not guessed.',renumbered_unique_matches:maps,same_step_identity_count:sameStep.length,ambiguous_matches:ambiguous,unmatched_old_claims:unmatched,protected_anchor_impacts:impacts,special_policy_split:{id:specialId,old_source:specialOld,old_step:'2.1',current_steps:['2.1','3.1'],exact_split_verified:splitVerified,old_claim:old21?.claim,current_claims:[new21?.claim,new31?.claim],protected_reference_operations:specialOps,disposition:splitVerified&&specialOps.length===0?'No protected boundary/risk string currently references old2.1; truthful no-op.':'Review listed exact CAS only; no automatic application.'},guard_inputs:[...guards].map(([path,raw])=>({path,raw})),limits:'No math acceptance, boundary conclusion/status rewrite, metadata application, hashes, gate execution or native credit. Unmatched/ambiguous mappings are not inferred.'};
if(option('--out')){const out=resolve(option('--out'));need(out.startsWith(join(root,'research')+'/'),'output outside research');mkdirSync(out,{recursive:false});writeFileSync(join(out,'anchor-identity-report.json'),JSON.stringify(result,null,2)+'\n',{flag:'wx'});}
console.log(JSON.stringify({run:RUN,items:seen.size,unique_renumberings:maps.length,same_step_identities:sameStep.length,ambiguous:ambiguous.length,unmatched:unmatched.length,protected_anchor_impacts:impacts.length,policy_split_verified:splitVerified,policy_split_cas:specialOps.length,out:option('--out')??null,applied:false}));
