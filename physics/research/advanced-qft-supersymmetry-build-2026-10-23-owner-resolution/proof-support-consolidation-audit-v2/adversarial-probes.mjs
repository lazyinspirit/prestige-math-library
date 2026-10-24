// Independent synthetic rejection probes plus exact observed source extraction.
// No native/main authentication, review acceptance, source or authority writes.
import{readFileSync,writeFileSync}from'node:fs';import{createHash}from'node:crypto';import{originalPresentationChanges as extract,validateOriginalPresentationReviews as validate}from'/home/lazyinspirit/Projects/prestige-math-library-aqft-20261023/tools/physics-support/original-presentation-maintenance.mjs';
const O='research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/proof-support-consolidation-audit-v2/',id='thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage',imports=JSON.parse(readFileSync('research/math-imports.json')),pin='items/'+id+'.md',current=imports.source_root+'/'+pin,before=readFileSync(pin),after=readFileSync(current),option={version:1,steps:['1.2','2.2']},sha=x=>createHash('sha256').update(x).digest('hex'),rows=[];
function reject(name,fn){try{fn();rows.push({name,expected:'reject',passed:false,error:'unexpected acceptance'});}catch(error){rows.push({name,expected:'reject',passed:!error.message.startsWith('Probe anchor absent:'),message:error.message});}}
function accept(name,fn){try{fn();rows.push({name,expected:'accept extraction only',passed:true});}catch(error){rows.push({name,expected:'accept extraction only',passed:false,error:error.message});}}
const edit=(s,a,b)=>{s=s.toString();if(!s.includes(a))throw Error('Probe anchor absent:'+a);return Buffer.from(s.replace(a,b));};
accept('observed exact2.2 consolidation emits typed support delta',()=>{const c=extract(before,after,option);if(c.deltas.length!==2||c.deltas.some(d=>d.kind!=='proof-support-consolidation'))throw Error('Both actual steps must be strict');const d=c.deltas.find(d=>d.label==='2.2');if(d?.kind!=='proof-support-consolidation'||JSON.stringify(d.support_consolidation.support_union)!==JSON.stringify(['F2','F4','step 1.1']))throw Error('Wrong exact delta');});
reject('observed change has no implicit optin',()=>extract(before,after));
for(const [name,opt]of[['empty steps',{version:1,steps:[]}],['unknown version',{version:2,steps:['2.2']}],['unknown key',{...option,allow_any:true}],['duplicate step',{version:1,steps:['2.2','2.2']}],['unknown step',{version:1,steps:['9.9']}],['crossstep target',{version:1,steps:['2.1']}],['extra unused target',{version:1,steps:['1.2','2.2','3.1']}],['bad step type',{version:1,steps:[2.2]}]])reject(name,()=>extract(before,after,opt));
for(const [name,old,next]of[
 ['missing transferred tag','[F2, F4, step 1.1]','[F2, F4]'],['missing original fact tag','[F2, F4, step 1.1]','[F2, step 1.1]'],['extra fact tag','[F2, F4, step 1.1]','[F2, F4, F9, step 1.1]'],['duplicate tag','[F2, F4, step 1.1]','[F2, F2, F4, step 1.1]'],['changed tag order','[F2, F4, step 1.1]','[F4, F2, step 1.1]'],
 ['math index change',String.raw`$\theta(g_z)=\theta(g)-\delta z=0$`,String.raw`$\theta(g_y)=\theta(g)-\delta z=0$`],['math sign change',String.raw`$\theta(g_z)=\theta(g)-\delta z=0$`,String.raw`$\theta(g_z)=\theta(g)+\delta z=0$`],['prose change','2.2 Fix $g','2.2 Choose $g'],['code introduction','a stationary prior-stage homotopy','a `stationary` prior-stage homotopy'],['wikilink introduction','a stationary prior-stage homotopy','a [[def-target|stationary]] prior-stage homotopy'],['added QED','so $g_z\\in\\mathscr E_n(a)$. [F2, F4, step 1.1]','so $g_z\\in\\mathscr E_n(a)$. [F2, F4, step 1.1] ∎'],['deleted narrative fact','By [F2], $\\theta','By , $\\theta']
])reject(name,()=>extract(before,edit(after,old,next),option));
// Use the exact observed pre-display group and verify protected placement cannot
// be mistaken for a removable prose justification occurrence.
const group='[F2, F4, step 1.1]',display='$$ \\theta(g_z)=\\theta(g)-\\delta z=0, $$';
for(const [name,fragment]of[
 ['inline-code hidden group','`'+group+'`\n\n'+display],['fenced-code hidden group','```text\n'+group+'\n\n'+display+'\n```'],['wikilink hidden group','[[def-target|'+group+'\n\n'+display+']]'],['math hidden group','$$ '+group+'\n\n'+display+' $$']
])reject(name,()=>extract(edit(before,group+'\n\n'+display,fragment),after,option));
reject('old QED changed',()=>extract(edit(before,'so $g_z\\in\\mathscr E_n(a)$. [F2, F4]','so $g_z\\in\\mathscr E_n(a)$. [F2, F4] ∎'),after,option));
reject('new QED macro',()=>extract(before,edit(after,'so $g_z\\in\\mathscr E_n(a)$. [F2, F4, step 1.1]','so $g_z\\in\\mathscr E_n(a)$. [F2, F4, step 1.1] \\qed'),option));
const changes=extract(before,after,option),reason='Synthetic independent audit fixture only: this exact byte-bound presentation delta has no new claim or source permission and is not an actual scientific acceptance.',limits='Synthetic validator tests only, with authenticated source/consumer/main records deliberately outside this fixture; no new paper reading or native gate is claimed.',evidence={path:'research/fixture-bound-review.json',sha256:sha('fixture-review')};
function reviewed(){const entry={presentation_version:2,proof_support_consolidation:structuredClone(option),pinned_sha256:sha(before),original_sha256:sha(after),changes:structuredClone(changes),scientific_review:{...changes.review_classification,hypotheses:'identical',new_premises:false,new_results:false,reason,reading_limits:limits},presentation_reviews:changes.deltas.map(d=>({delta_id:d.id,delta_sha256:sha(JSON.stringify(d)),reason,reading_limits:limits,evidence:[evidence]}))};const ctx={bind:(path,hash)=>{if(sha(readFileSync(path))!==hash)throw Error('unbound runtime input');return readFileSync(path)},localEvidence:r=>{if(JSON.stringify(r)!==JSON.stringify(evidence))throw Error('unbound fixture evidence');return Buffer.from('fixture-review')}};return{entry,ctx};}
accept('exact typed per-delta review fixture validates structural binding only',()=>{const r=reviewed();validate(r.entry,changes,r.ctx);});
for(const[name,mutate]of[
 ['entry optin absent',r=>delete r.entry.proof_support_consolidation],['entry optin differs',r=>r.entry.proof_support_consolidation.steps=['1.2']],['per-delta review missing',r=>r.entry.presentation_reviews.pop()],['per-delta hash stale',r=>r.entry.presentation_reviews.at(-1).delta_sha256='0'.repeat(64)],['duplicate per-delta review',r=>r.entry.presentation_reviews[1]=r.entry.presentation_reviews[0]],['evidence missing',r=>r.entry.presentation_reviews.at(-1).evidence=[]],['unbound evidence hash',r=>r.entry.presentation_reviews.at(-1).evidence=[{...evidence,sha256:'0'.repeat(64)}]],['false overall proof classification',r=>r.entry.scientific_review.proof='unchanged'],['new premise asserted',r=>r.entry.scientific_review.new_premises=true]
])reject(name,()=>{const r=reviewed();mutate(r);validate(r.entry,changes,r.ctx);});

// Exact HTML/Markdown counterexamples from the rejected lexical boundaries.
for(const [name,file] of [['actual ordinary Markdown link title','research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/proof-support-consolidation-audit-v2/markdown-title-preview.json'],['Root HTML attribute','research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/private-preparation/proof-support-consolidation-v2/root-html-reproduction.json']]) {
 if (file) { const f=JSON.parse(readFileSync(file)); reject(name,()=>extract(Buffer.from(f.before),Buffer.from(f.after),{version:1,steps:['2.2']})); }
}
for(const[name,wrap]of[
 ['ordinary inline link',x=>'[label](https://example.invalid "'+x+'")'],
 ['HTML attribute',x=>'<span title="'+x+'">label</span>'],
 ['blockquote',x=>'> '+x.split('\n').join('\n> ')],
 ['list',x=>'\n\n- '+x.split('\n').join('\n  ')],
 ['double-backtick code',x=>'``'+x+'``'],
 ['heading',x=>'\n\n### '+x],
])reject(name+' cannot supply support',()=>{
 const old=group+'\n\n'+display;
 const next='$\\theta(g_z)=\\theta(g)-\\delta z=0$, ';
 const a=before.toString().replace(old,()=>wrap(old));
 const b=after.toString().replace(next,()=>wrap(next));
 if(a===before.toString()||b===after.toString())throw Error('Probe anchor absent: wrapped display');
 extract(Buffer.from(a),Buffer.from(b),option);
});
reject('source-wide reference definition',()=>extract(Buffer.concat([before,Buffer.from('\n[extra]: https://example.invalid\n')]),Buffer.concat([after,Buffer.from('\n[extra]: https://example.invalid\n')]),option));
accept('descriptor output cannot mutate cached parser',()=>{const c=extract(before,after,option);c.proof_support_parser_runtime.inputs={};const d=extract(before,after,option);if(Object.keys(d.proof_support_parser_runtime.inputs).length<100)throw Error('descriptor cache corrupted');});
for(const[name,mutate]of[
 ['runtime descriptor absent',r=>delete r.entry.changes.proof_support_parser_runtime],
 ['runtime input absent',r=>delete r.entry.changes.proof_support_parser_runtime.inputs[Object.keys(r.entry.changes.proof_support_parser_runtime.inputs)[0]]],
 ['runtime hash stale',r=>r.entry.changes.proof_support_parser_runtime.inputs[Object.keys(r.entry.changes.proof_support_parser_runtime.inputs)[0]]='0'.repeat(64)],
])reject(name,()=>{const r=reviewed();mutate(r);validate(r.entry,r.entry.changes,r.ctx);});
reject('runtime binding callback rejects input',()=>{const r=reviewed();r.ctx.bind=()=>{throw Error('unbound runtime input')};validate(r.entry,changes,r.ctx);});

const failed=rows.filter(r=>!r.passed);writeFileSync(O+'adversarial-results.json',JSON.stringify({kind:'Independent private focused protocol probes; no authority or scientific acceptance',source_guards:{pin:{path:pin,sha256:sha(before)},current:{path:current,sha256:sha(after)}},rows,failed:failed.length},null,2)+'\n');console.log(JSON.stringify({probes:rows.length,failed:failed.length,failures:failed}));if(failed.length)process.exitCode=1;
