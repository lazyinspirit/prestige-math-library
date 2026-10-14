// DRAFT ONLY. Never executed by preparer. ROOT review/execution after full drain.
// Requires the capture-only receipt made BEFORE any metadata changes/stamping.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {dirname,basename} from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {runPages,dependencyLevels} from '../../tools/item-dependency-levels.mjs';
import {splitFrontmatter,sectionText,sourceSectionText,SOURCE_SECTIONS} from '../../tools/facts-block.mjs';
import {yaml} from '../../tools/pathway-lib.mjs';
const run='mathematical-statistics-foundations-37';
const arg=name=>process.argv[process.argv.indexOf(name)+1];
if(!process.argv.includes('--root-execute-after-drain')||!process.argv.includes('--capture-dir')||!process.argv.includes('--reviewed-quote-sources'))throw Error('ROOT-only draft: explicit drain flag, capture directory and JSON reviewed-source allowlist required');
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const rawHash=x=>createHash('sha256').update(x).digest('hex');
const norm=x=>String(x??'').replace(/\s+/g,' ').trim();
const assertDrained=()=>{
 if(read(`.autopilot/${run}/state.json`).paused!==true)throw Error('Run must be paused');
 if(execFileSync('ps',['-eo','args='],{encoding:'utf8'}).split('\n').some(s=>s.includes('tools/dispatch.mjs')&&s.includes(`--run ${run}`)))throw Error('Dispatcher live; root must also attest descendants drained');
};
assertDrained();
const captureDir=arg('--capture-dir'),capture=read(`${captureDir}/capture.json`);
if(capture.version!==1||capture.run!==run||capture.mode!=='capture-only')throw Error('Wrong pre-edit capture');
// Capture must be immutable, genuinely bound to current post-reader sources.
// A nonmatching source is BLOCKED, never represented by a convenient current copy.
const blockedAccepted=[];
for(const r of capture.records??[]){
 if(r.route!=='touched')continue;
 if(!r.source_metadata_before){blockedAccepted.push({id:r.id,reason:r.source_capture_refused});continue;}
 const archived=readFileSync(r.source_metadata_before.path),current=readFileSync(`items/${r.id}.md`);
 if(rawHash(archived)!==r.source_metadata_before.sha256||rawHash(current)!==r.source_metadata_before.sha256)blockedAccepted.push({id:r.id,reason:'Accepted preimage archive/current source mismatch; requires real owner route'});
}
const allowed=new Set(read(arg('--reviewed-quote-sources')));
const pages=runPages(process.cwd(),run),graph=dependencyLevels(pages,{validateLabels:false});
if(!graph.items.size||graph.errors.length)throw Error(graph.errors.join('\n')||'Empty frontier');
const changes=[],blockedClaims=[],pendingQuotes=[],staged=[];
for(let batch=1;batch<=37;batch++){
 const manifestPath=`research/${run}-batch-${batch}.pages.json`,contractPath=`research/${run}-batch-${batch}.proof-contracts.json`;
 const manifest=read(manifestPath),contracts=read(contractPath);
 // runPages uses the canonical manifest representation; documents may be arrays
 // or {pages:[...]}. Refuse unknown shape rather than empty-success.
 const pp=Array.isArray(manifest)?manifest:manifest.pages;
 if(!Array.isArray(pp))throw Error(`Unknown manifest shape: ${manifestPath}`);
 let mfChanged=false,contractChanged=false;
 for(const page of pp)for(const item of page.items??[]){
  const raw=readFileSync(`items/${item.id}.md`,'utf8'),{fm,body}=splitFrontmatter(raw),meta=yaml().parse(fm);
  const expected=['definition','algorithm'].includes(meta.kind)?'Definition':meta.kind==='example'?'Example':meta.kind==='counterexample'?'Statement refuted':'Statement';
  const claim=sectionText(body,expected)?.trim();
  if(!claim){blockedClaims.push({id:item.id,expected_heading:expected,reason:'Expected current claim heading absent; no source rewrite or invented claim'});continue;}
  if(item.statement!==claim){changes.push({kind:'manifest.statement',batch,id:item.id,heading:expected,before:item.statement,after:claim});item.statement=claim;mfChanged=true;}
 }
 for(const [id,entry] of Object.entries(contracts.contracts??{}))for(const citation of entry.citations??[]){
  const {source,source_section:section,quote}=citation;
  if(!SOURCE_SECTIONS.has(section))throw Error(`${id}: invalid existing citation section ${section}; no inferred repair`);
  const supplier=splitFrontmatter(readFileSync(`items/${source}.md`,'utf8')).body;
  const actual=sourceSectionText(supplier,section)?.trim();
  if(!actual||!norm(quote))throw Error(`${id}: empty existing quote/actual section; requires focused owner review`);
  if(norm(actual).includes(norm(quote)))continue;
  if(!allowed.has(source)){pendingQuotes.push({batch,id,source,source_section:section,reason:'Stale quote not on root independently-reviewed-source allowlist'});continue;}
  changes.push({kind:'citation.quote',batch,id,fact:citation.fact,source,source_section:section,before:quote,after:actual});
  citation.quote=actual;contractChanged=true; // ONLY this property changes.
 }
 if(mfChanged)staged.push([manifestPath,manifest]);
 if(contractChanged)staged.push([contractPath,contracts]);
}
assertDrained();
const dir=`${captureDir}/projection-${new Date().toISOString().replace(/[:.]/g,'-')}`;
mkdirSync(dir,{recursive:true});
for(const [path,doc]of staged){
 const original=readFileSync(path),archive=`${dir}/${basename(path)}.before.json`;
 writeFileSync(archive,original,{flag:'wx'});
 writeFileSync(path,JSON.stringify(doc,null,2)+'\n');
}
writeFileSync(`${dir}/projection.json`,JSON.stringify({version:1,run,changes,blockedAccepted,blockedClaims,pendingQuotes,source_edits:[],native_decision_edits:[],risk_review_edits:[],root_next:'Resolve every blocked row honestly. Aggregate projection and eligible real-guard continuities only AFTER all per-batch edits; preserve pre-edit capture.'},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({dir,changed_files:staged.length,blockedAccepted:blockedAccepted.length,blockedClaims:blockedClaims.length,pendingQuotes:pendingQuotes.length}));
