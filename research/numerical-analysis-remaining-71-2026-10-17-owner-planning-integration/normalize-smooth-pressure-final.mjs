import{readFileSync,writeFileSync,mkdirSync,existsSync}from'node:fs';
import{createHash}from'node:crypto';import{spawnSync}from'node:child_process';
import{numberedProofSteps}from'../../tools/facts-block.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,id='cex-na-graded-mini-mass-initialization-pressure-rate',path=`items/${id}.md`,archive=`${base}/smooth-pressure-final-before-format`,receipt=`${base}/smooth-pressure-final-format-normalization.json`,cp=`research/${run}-batch-41.proof-contracts.json`;
if(existsSync(receipt)||existsSync(archive))throw Error('Preserve actual format history');
const input=JSON.parse(readFileSync(`${base}/smooth-pressure-final-precheck-output.json`,'utf8')),row=input.results.find(r=>r.item_id===id);
if(row.status!=='repair')throw Error('No canonical proposal');
const old=readFileSync(path,'utf8'),match=/^## Counterexample\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m.exec(old);if(!match)throw Error('No argument');
const body=match[1],first=row.proposed_proof.search(/^\d+\.\d+\s+/m),suffix=row.proposed_proof.slice(first).trim(),oldSteps=numberedProofSteps(`## Counterexample\n${body}`),newSteps=numberedProofSteps(`## Counterexample\n${suffix}`),map={};
const pattern=/(steps?\s+)((?:\d+\.\d+)(?:(?:\s*,\s*|\s+and\s+|\s*&\s*)\d+\.\d+)*)/gi;
const normalize=s=>s.replace(pattern,(_,p,l)=>p+l.replace(/\d+\.\d+/g,'REF')).replace(/\s+/g,'');
const refs=(s,map)=>s.replace(pattern,(_,p,l)=>p+l.replace(/\d+\.\d+/g,x=>map[x]??x));
if(oldSteps.length!==144||newSteps.length!==144)throw Error('Actual step inventory changed');
for(const n of newSteps){const matches=oldSteps.filter(o=>normalize(o.claim)===normalize(n.claim));if(matches.length!==1)throw Error('Changed/ambiguous mathematical claim '+n.id);map[matches[0].id]=n.id;}
for(const n of newSteps){const o=oldSteps.find(o=>map[o.id]===n.id);if(refs(o.text,map).replace(/\s+/g,'')!==n.text.replace(/\s+/g,''))throw Error('Changed non-label token '+n.id);}
const originalFirst=body.search(/^\d+\.\d+\s+/m),replacement=match[0].slice(0,match[0].length-body.length)+body.slice(0,originalFirst)+suffix+'\n\n';
let next=old.slice(0,match.index)+replacement+old.slice(match.index+match[0].length);
const normSpaces=s=>s.replace(/\bL1\b/g,'L¹').replace(/\bL2\b/g,'L²');
next=normSpaces(next).replace(/\b([Pp])hase(s)?(?=\s+\d)/g,(_,p,s)=>`${p==='P'?'P':'p'}art${s??''}`);
const sha=s=>createHash('sha256').update(s).digest('hex');
for(const f of [path,cp]){const d=`${archive}/${f}`;mkdirSync(d.slice(0,d.lastIndexOf('/')),{recursive:true});writeFileSync(d,readFileSync(f),{flag:'wx'});}
writeFileSync(path,next);
const contracts=JSON.parse(readFileSync(cp,'utf8'));for(const b of contracts.contracts[id].boundaries??[])if(typeof b.evidence==='string')b.evidence=b.evidence.replace(/\b\d+\.\d+\b/g,x=>map[x]??x);contracts.contracts[id].boundaries.find(b=>b.case==='endpoints').evidence='The Statement and named construction parts26–28 use s=1/8<s-prime=3/16<1/5, retain finite-time Laplace tails, and select positive BE steps satisfying tau-max Lambda<=1/2; actual mass-limit lower semicontinuity replaces terminal-map iteration.';
writeFileSync(cp,JSON.stringify(contracts,null,2)+'\n');
const regen=spawnSync(process.execPath,['tools/regen-contract-entries.mjs',cp,id],{encoding:'utf8'});if(regen.status!==0)throw Error(regen.stderr||regen.stdout);
writeFileSync(receipt,JSON.stringify({version:1,run,at:new Date().toISOString(),id,archive,before_raw_sha256:sha(old),current_raw_sha256:sha(next),map,guard:'All144 complete numbered mathematical rows match verbatim modulo whitespace, numeric step labels/references and order BEFORE notation normalization. Bare L1/L2 become L¹/L² to distinguish spaces from declared facts; named construction phases2–28 become parts2–28 to distinguish them from canonical depth labels. No claim or hypothesis change.',canonical_audit_basis:`research/${run}-ROOT-mini-pressure-direct-dual-cycle5/independent-canonical-proof-consumer-audit-smooth-fresh-c4.md`,contract_regeneration:regen.stdout,mathematical_re_review_claimed:false,native_gate_attempted:false},null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({steps:144,normalized:true,receipt}));
