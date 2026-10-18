import{readFileSync,writeFileSync,mkdirSync,existsSync,openSync,closeSync}from'node:fs';
import{spawnSync}from'node:child_process';
import{numberedProofSteps,splitFrontmatter}from'../../tools/facts-block.mjs';
import{yaml}from'../../tools/pathway-lib.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,archive=`${base}/pressure-cycle4-canonical-phase-before`;
if(existsSync(archive))throw Error('Preserve prior reconciliation');
const input=JSON.parse(readFileSync(`${base}/pressure-cycle4-folded-precheck-inspection.json`,'utf8'));
if(input.results.some(r=>r.status==='fail'))throw Error('Unresolved non-canonical format failure');
const rows=input.results.filter(r=>r.status==='repair'),pending=[],maps=new Map();
const pattern=/(steps?\s+)((?:\d+\.\d+)(?:(?:\s*,\s*|\s+and\s+|\s*&\s*)\d+\.\d+)*)/gi;
const normalize=s=>s.replace(pattern,(_,p,l)=>p+l.replace(/\d+\.\d+/g,'REF')).replace(/\s+/g,'');
const refs=(s,map)=>s.replace(pattern,(_,p,l)=>p+l.replace(/\d+\.\d+/g,x=>map[x]??x));
for(const row of rows){const old=readFileSync(row.file,'utf8'),match=/^## (Proof|Refutation|Verification|Counterexample)\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m.exec(old);if(!match)throw Error('Proof missing');const body=match[2],oldSteps=numberedProofSteps(`## Proof\n${body}`),first=row.proposed_proof.search(/^\d+\.\d+\s+/m),suffix=row.proposed_proof.slice(first).trim(),newSteps=numberedProofSteps(`## Proof\n${suffix}`),map={};if(oldSteps.length!==newSteps.length)throw Error('Step count changed');
 for(const n of newSteps){const matches=oldSteps.filter(o=>normalize(o.claim)===normalize(n.claim));if(matches.length!==1)throw Error('Claim changed or ambiguous '+row.item_id);map[matches[0].id]=n.id;}
 for(const n of newSteps){const o=oldSteps.find(o=>map[o.id]===n.id);if(refs(o.text,map).replace(/\s+/g,'')!==n.text.replace(/\s+/g,''))throw Error('Non-label token changed '+row.item_id);}
 const originalFirst=body.search(/^\d+\.\d+\s+/m),replacement=match[0].slice(0,match[0].length-body.length)+body.slice(0,originalFirst)+suffix+'\n\n';pending.push({row,old,next:old.slice(0,match.index)+replacement+old.slice(match.index+match[0].length)});maps.set(row.item_id,map);
}
const save=(p,raw)=>{const out=`${archive}/${p}`;mkdirSync(out.slice(0,out.lastIndexOf('/')),{recursive:true});writeFileSync(out,raw,{flag:'wx'});};
for(const{row,old,next}of pending){save(row.file,old);writeFileSync(row.file,next);}
const cp=`research/${run}-batch-41.proof-contracts.json`,contracts=JSON.parse(readFileSync(cp,'utf8'));save(cp,readFileSync(cp));
for(const[id,map]of maps)for(const b of contracts.contracts[id].boundaries??[])if(typeof b.evidence==='string')b.evidence=b.evidence.replace(/\b\d+\.\d+\b/g,x=>map[x]??x);
writeFileSync(cp,JSON.stringify(contracts,null,2)+'\n');
const regen=spawnSync(process.execPath,['tools/regen-contract-entries.mjs',cp,...maps.keys()],{encoding:'utf8'});if(regen.status!==0)throw Error(regen.stderr||regen.stdout);
const mf=`research/${run}-batch-41.pages.json`,pages=JSON.parse(readFileSync(mf,'utf8'));save(mf,readFileSync(mf));
const metadataSubjects=new Set(['lem-na-solenoidal-scalar-equations-give-weak-continuity','ex-na-zero-mean-pressure-gauge','ex-na-mini-backward-euler-energy-budget','ex-na-periodic-taylor-green-vortex','ex-na-unit-square-mini-mesh-family','ex-na-conditional-three-dimensional-flow-computation']);
for(const row of pages.flatMap(p=>p.items))if(metadataSubjects.has(row.id)){const m=yaml().parse(splitFrontmatter(readFileSync(`items/${row.id}.md`,'utf8')).fm);row.provenance=m.provenance;if(m.generation)row.generation=m.generation;row.sources=m.sources??{references:[]};}
writeFileSync(mf,JSON.stringify(pages,null,2)+'\n');
const itemPaths=pages.flatMap(p=>p.items).sort((a,b)=>a.dependency_level-b.dependency_level).map(i=>`items/${i.id}.md`),out=`${base}/pressure-cycle4-canonical-precheck-inspection.json`,fd=openSync(out,'wx');const child=spawnSync(process.execPath,['tools/tsx-run.mjs','tools/precheck.mts','--json',...itemPaths],{stdio:['ignore',fd,'pipe'],encoding:'utf8'});closeSync(fd);const inspected=JSON.parse(readFileSync(out,'utf8'));
writeFileSync(`${base}/pressure-cycle4-canonical-phase-reconciliation.json`,JSON.stringify({version:1,run,recorded_at:new Date().toISOString(),archive,maps:[...maps].map(([id,map])=>({id,map})),guard:'Every mathematical claim and non-label token matches its existing proof; only phase labels/references/order/whitespace adopted from the normative checker.',contract_regeneration:regen.stdout,precheck:{exit_code:child.status,summary:inspected.summary,out},native_gate_attempted:false},null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({canonical_labels:rows.length,summary:inspected.summary,failures:inspected.results.filter(r=>['fail','repair'].includes(r.status)).map(r=>({id:r.item_id,status:r.status,error:r.error}))}));
