import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, mkdtempSync, mkdirSync, copyFileSync, symlinkSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { WEB_DIR } from './paths.mjs';
import { originalPresentationChanges, validateOriginalPresentationReviews } from './original-presentation-maintenance.mjs';
const sha = x => createHash('sha256').update(x).digest('hex');
const option = { version: 1, steps: ['2.2'] };
const before = `---\nid: thm-fixture\nkind: theorem\ntitle: A fixed theorem\nstatus: published\ndeps: []\n---\n\n## Statement\n\nA fixed conditional conclusion.\n\n## Facts & Assumptions\n\n[F2] A fixed premise.\n\n[F4] Another fixed premise.\n\n## Proof\n\n1.1 A fixed earlier step. [F2]\n\n2.2 By [F2], [F2, F4, step 1.1]\n\n$$ x=y, $$\n\nso the conclusion holds. [F2, F4]\n`;
const after = before.replace('[F2, F4, step 1.1]\n\n$$ x=y, $$\n\nso the conclusion holds. [F2, F4]', '$x=y$, so the conclusion holds. [F2, F4, step 1.1]');
const extract = (a=before,b=after,o=option) => originalPresentationChanges(Buffer.from(a),Buffer.from(b),o);
function reviewed() {
  const changes=extract(),evidence={path:'research/exact-fixture-review.json',sha256:sha('exact fixture evidence')};
  const explanation='Synthetic exact byte-bound support consolidation review only, preserving the same premise set and all surrounding scientific expressions; no real scientific acceptance.';
  const entry={presentation_version:2,proof_support_consolidation:structuredClone(option),pinned_sha256:sha(before),original_sha256:sha(after),changes,
    scientific_review:{...changes.review_classification,hypotheses:'identical',new_premises:false,new_results:false,reason:explanation,reading_limits:explanation},
    presentation_reviews:changes.deltas.map(d=>({delta_id:d.id,delta_sha256:sha(JSON.stringify(d)),reason:explanation,reading_limits:explanation,evidence:[evidence]}))};
  return {changes,entry,validate:()=>validateOriginalPresentationReviews(entry,changes,{bind:(path,hash)=>{const b=readFileSync(path);assert.equal(sha(b),hash);return b;},localEvidence:e=>{assert.deepEqual(e,evidence);return Buffer.from('exact fixture evidence');}})};
}
test('exact per-step opt-in consolidates one actual prose cluster and preserves scientific tokens',()=>{
  assert.throws(()=>originalPresentationChanges(Buffer.from(before),Buffer.from(after)),/support/);
  const r=reviewed(),d=r.changes.deltas[0];assert.equal(d.kind,'proof-support-consolidation');assert.equal(d.label,'2.2');assert.deepEqual(d.support_consolidation.support_union,['F2','F4','step 1.1']);assert.equal(d.support_consolidation.removed_cluster.text,'[F2, F4, step 1.1]');assert.equal(d.support_consolidation.display_before,'$$ x=y, $$');assert.equal(d.support_consolidation.inline_after,'$x=y$,');assert.ok(r.validate());
});
for(const [name,edit] of [
 ['added support',s=>s.replace('[F2, F4, step 1.1]','[F2, F4, step 1.1, F9]')],
 ['lost support',s=>s.replace('[F2, F4, step 1.1]','[F2, step 1.1]')],
 ['duplicate support',s=>s.replace('[F2, F4, step 1.1]','[F2, F4, F4, step 1.1]')],
 ['changed formula',s=>s.replace('$x=y$','$x=z$')],
 ['changed prose',s=>s.replace('conclusion holds','stronger conclusion holds')],
 ['changed punctuation',s=>s.replace('$x=y$,','$x=y$;')],
 ['new QED',s=>s.replace('[F2, F4, step 1.1]\n','[F2, F4, step 1.1] ∎\n')],
 ['arbitrary QED macro',s=>s.replace('[F2, F4, step 1.1]\n','[F2, F4, step 1.1] \\qedsymbol\n')],
 ['changed step',s=>s.replace('2.2 By','2.3 By')],
]) test(`support consolidation rejects ${name}`,()=>assert.throws(()=>extract(before,edit(after)),/Invalid original presentation successor/));
for(const [name,edit] of [
 ['inline code',s=>s.replace('[F2, F4, step 1.1]\n\n$$','`[F2, F4, step 1.1]`\n\n$$')],
 ['fenced code',s=>s.replace('2.2 By [F2], ', '2.2 By [F2],\n```text\n').replace('so the conclusion holds.','```\nso the conclusion holds.')],
 ['wikilink',s=>s.replace('[F2, F4, step 1.1]\n\n$$','[[F2, F4, step 1.1]]\n\n$$')],
 ['math index',s=>s.replace('[F2, F4, step 1.1]\n\n$$','$a[F2, F4, step 1.1]$\n\n$$')],
 ['math delimiter around cluster',s=>s.replace('[F2, F4, step 1.1]\n\n$$','\\([F2, F4, step 1.1]\\)\n\n$$')],
 ['comment',s=>s.replace('[F2, F4, step 1.1]\n\n$$','<!--[F2, F4, step 1.1]-->\n\n$$')],
 ['two removed clusters',s=>s.replace('[F2, F4, step 1.1]\n\n$$','[F2, F4, step 1.1]\n\n$$ a=b, $$\n\n[F2, F4, step 1.1]\n\n$$')],
]) test(`support consolidation never mines ${name}`,()=>assert.throws(()=>extract(edit(before),after),/Invalid original presentation successor/));
test('protected math, code and wikilinks outside the moved display remain exact',()=>{
  for(const [old,newText]of [['$a_b$','$a_c$'],['`fixed text`','`changed text`'],['[[def-fixed]]','[[def-other]]'],['$\\text{a b}$','$\\text{ab}$']]){
    const a=before.replace('2.2 By','2.2 '+old+' By'),b=after.replace('2.2 By','2.2 '+newText+' By');assert.throws(()=>extract(a,b),/scientific tokens/);
  }
});
test('a removed cluster inside an unchanged raw HTML attribute is not prose support',()=>{
  const cluster='[F2, F4, step 1.1]\n\n$$ x=y, $$',inline='$x=y$,';
  const a=before.replace(cluster,()=>'<span title="'+cluster+'">'),b=after.replace(inline,()=>'<span title="'+inline+'">');
  assert.throws(()=>extract(a,b),/Markdown node html/);
});
test('same terminal QED may remain, but marker deletion and replacement fail',()=>{
  const a=before.replace('holds. [F2, F4]\n','holds. [F2, F4] ∎\n'),b=after.replace('holds. [F2, F4, step 1.1]\n','holds. [F2, F4, step 1.1] ∎\n');assert.equal(extract(a,b).deltas[0].support_consolidation.qed,'∎');assert.throws(()=>extract(a,after),/QED/);assert.throws(()=>extract(a,b.replace('∎','\\qed')),/terminal support/);
});
test('cross-step support cannot replace the required removed same-step cluster',()=>{
 const a=before.replace('1.1 A fixed earlier step. [F2]','1.1 A fixed earlier step. [F2, F4, step 1.1]').replace('By [F2], [F2, F4, step 1.1]','By [F2],');const b=after.replace('1.1 A fixed earlier step. [F2]','1.1 A fixed earlier step. [F2, F4, step 1.1]');assert.throws(()=>extract(a,b),/pre-display/);
});
test('malformed, unknown, duplicate and unused opt-ins fail closed',()=>{
 for(const o of [null,{}, {version:2,steps:['2.2']},{version:1,steps:[]},{version:1,steps:['2.2','2.2']},{version:1,steps:['2.3']},{version:1,steps:['2.2','1.1']},{version:1,steps:['2.2'],extra:true}])assert.throws(()=>extract(before,after,o));
 assert.throws(()=>extract(before,before,option),/unused/);
});
test('new support delta needs exact entry opt-in and every hash-bound substantive review',()=>{
 for(const mutate of [r=>delete r.entry.proof_support_consolidation,r=>r.entry.proof_support_consolidation={version:1,steps:['1.1']},r=>r.entry.presentation_reviews=[],r=>r.entry.presentation_reviews[0].delta_sha256='0'.repeat(64),r=>r.entry.presentation_reviews[0].evidence=[],r=>r.entry.scientific_review.new_premises=true,r=>r.entry.original_sha256='0'.repeat(64)]){const r=reviewed();mutate(r);assert.throws(r.validate);}
});
test('Statement, Facts, dependency and scientific metadata mutations stay rejected',()=>{
 for(const edit of [s=>s.replace('A fixed conditional conclusion.','A stronger conclusion.'),s=>s.replace('[F4] Another fixed premise.','[F4] A new premise.'),s=>s.replace('deps: []','deps: [def-new]')])assert.throws(()=>extract(before,edit(after)),/scientific/);
});

test('an explicitly requested same-terminal step must pass the strict period-fold parser',()=>{
  const a=before.replace('[F2, F4, step 1.1]\n\n$$ x=y, $$',()=> '[F2, F4]\n\n$$ x=y. $$');
  const b=after.replace('$x=y$,',()=>'$x=y$.').replace('[F2, F4, step 1.1]\n','[F2, F4]\n');
  const c=extract(a,b);assert.equal(c.deltas[0].kind,'proof-support-consolidation');assert.deepEqual(c.deltas[0].support_consolidation.support_union,['F2','F4']);assert.equal(c.deltas[0].support_consolidation.inline_after,'$x=y$.');
  assert.throws(()=>extract(a,b.replace('conclusion holds','stronger conclusion holds')),/scientific tokens/);
  assert.throws(()=>extract(a,b.replace('$x=y$',()=>'$x=z$')),/scientific tokens|inline math range/);
});
test('the strict payload punctuation whitelist excludes semicolons and unpunctuated folds',()=>{
 for(const mark of [';',':','']){const a=before.replace('$$ x=y, $$',()=>`$$ x=y${mark} $$`),b=after.replace('$x=y$,',()=>`$x=y$${mark}`);assert.throws(()=>extract(a,b),/display payload/);}
});

test('actual Markdown link titles cannot supply removed or terminal support',()=>{
  const a=before.replace(/2\.2 [\s\S]*$/,()=> '2.2 [Fixed text](https://example.org "By [F2], [F2, F4, step 1.1]\n$$ x=y, $$\nso the conclusion holds.") [F2, F4]\n');
  const b=after.replace(/2\.2 [\s\S]*$/,()=> '2.2 [Fixed text](https://example.org "By [F2], $x=y$, so the conclusion holds.") [F2, F4, step 1.1]\n');
  assert.throws(()=>extract(a,b),/Markdown node link/);
});
for(const markup of ['### A heading','> A block quotation','- A list entry','a | b\n--- | ---\nx | y','    Indented code'])test(`strict changed-step AST rejects non-allowlisted syntax ${markup}`,()=>{
 const a=before.replace('2.2 By',()=> '2.2 Introduction.\n\n'+markup+'\n\nBy'),b=after.replace('2.2 By',()=> '2.2 Introduction.\n\n'+markup+'\n\nBy');assert.throws(()=>extract(a,b),/Markdown node/);
});
test('reference definitions elsewhere in the source cannot change step-local link roles',()=>{
 const context='\n## Sources\n\n[F2]: https://example.org "A shortcut reference"\n';assert.throws(()=>extract(before+context,after+context),/reference definition context/);
});
test('actual AST protects double-backtick and multiline inline-code bytes',()=>{
 for(const [old,next]of [['``code  text``','``code text``'],['``alpha\nbeta``','``alpha beta``']]){
   const a=before.replace('2.2 By',()=> '2.2 '+old+' By'),same=after.replace('2.2 By',()=> '2.2 '+old+' By'),b=after.replace('2.2 By',()=> '2.2 '+next+' By');assert.equal(extract(a,same).deltas[0].kind,'proof-support-consolidation');assert.throws(()=>extract(a,b),/scientific tokens/);
 }
});
test('recorded roles use actual standalone double-dollar inlineMath and plaintext offsets',()=>{
 const c=extract(),d=c.deltas[0].support_consolidation;assert.equal(d.markdown_roles.old_display.type,'inlineMath');assert.equal(d.markdown_roles.old_display.role,'standalone-double-dollar');assert.equal(d.markdown_roles.new_inline.type,'inlineMath');assert.equal(d.markdown_roles.removed_cluster.type,'text');assert.equal(d.markdown_roles.terminal_before.type,'text');assert.equal(d.markdown_roles.terminal_after.type,'text');assert.equal(d.markdown_roles.offset_unit,'UTF-16');
});
test('parser runtime descriptor is exact, separately cloned and mandatory for typed reviews',()=>{
 const first=extract(),truth=structuredClone(first.proof_support_parser_runtime),path=Object.keys(truth.inputs)[0];first.proof_support_parser_runtime.inputs[path]='0'.repeat(64);first.proof_support_parser_runtime.packages[0].version='not-the-live-version';const again=extract();assert.deepEqual(again.proof_support_parser_runtime,truth);
 for(const mutate of [r=>delete r.changes.proof_support_parser_runtime,r=>r.changes.proof_support_parser_runtime.inputs[path]='0'.repeat(64),r=>r.changes.proof_support_parser_runtime.runtime.node='stale-node']){const r=reviewed();mutate(r);assert.throws(r.validate,/parser runtime/);}
});

for(const scenario of ['cached-lock-drift','initial-load-race','parse-race','resolution-context','missing-parser'])test(`lazy parser lifecycle fails closed: ${scenario}`,t=>{
 const base=mkdtempSync(join(tmpdir(),'parser-lifecycle-')),app=join(base,'app'),web=join(app,'web');t.after(()=>rmSync(base,{recursive:true,force:true}));mkdirSync(web,{recursive:true});copyFileSync(join(WEB_DIR,'package.json'),join(web,'package.json'));copyFileSync(join(WEB_DIR,'package-lock.json'),join(web,'package-lock.json'));
 if(scenario==='missing-parser'){mkdirSync(join(web,'node_modules'));symlinkSync(join(WEB_DIR,'node_modules/yaml'),join(web,'node_modules/yaml'),'dir');}else symlinkSync(join(WEB_DIR,'node_modules'),join(web,'node_modules'),'dir');
 const script=`import assert from 'node:assert/strict';import{readFileSync,writeFileSync}from'node:fs';import{createRequire,syncBuiltinESMExports}from'node:module';import{join}from'node:path';import{originalPresentationChanges}from${JSON.stringify(new URL('./original-presentation-maintenance.mjs',import.meta.url).href)};const a=Buffer.from(${JSON.stringify(before)}),b=Buffer.from(${JSON.stringify(after)}),o=${JSON.stringify(option)},web=${JSON.stringify(web)},app=${JSON.stringify(app)},scenario=${JSON.stringify(scenario)},lock=join(web,'package-lock.json'),originalLock=readFileSync(lock),writeLock=()=>writeFileSync(lock,Buffer.concat([originalLock,Buffer.from('\\n')])),run=()=>originalPresentationChanges(a,b,o),req=createRequire(join(web,'package.json'));if(scenario==='missing-parser'){assert.equal(originalPresentationChanges(a,a).proof_support_parser_runtime,undefined);assert.throws(run,/unresolved parser runtime|parser unavailable/);}else if(scenario==='initial-load-race'){const mod=req('node:module'),old=mod.createRequire;mod.createRequire=(...args)=>{const r=old(...args);return new Proxy(r,{apply(target,self,args){const value=Reflect.apply(target,self,args);if(args[0]==='remark-math')writeLock();return value;}});};syncBuiltinESMExports();assert.throws(run,/runtime changed during load; restart required/);}else if(scenario==='parse-race'){const unified=req('unified').unified,proto=Object.getPrototypeOf(unified()),parse=proto.parse;proto.parse=function(...args){const tree=parse.apply(this,args);writeLock();return tree;};assert.throws(run,/runtime changed during parse; restart required/);}else{run();if(scenario==='resolution-context')process.env.PRESTIGE_APP_DIR=app+'-different';else writeLock();assert.throws(run,/changed; restart required/);}console.log('PASS '+scenario);`;
 const result=spawnSync(process.execPath,['--input-type=module','-e',script],{env:{...process.env,PRESTIGE_APP_DIR:app},encoding:'utf8',timeout:60000});assert.equal(result.status,0,result.stderr);assert.match(result.stdout,/PASS/);
});

const referenceOption={version:1,steps:[{label:'2.2',target:'thm-target'}]};
const referenceBefore=before.replace('deps: []','deps: [thm-target]').replace(/2\.2 [\s\S]*$/,()=> '2.2 The Existing target theorem gives $x=y$. [F2, F4, [[thm-target]]]\n');
const referenceAfter=referenceBefore.replace('Existing target theorem',()=> '[[thm-target|Existing target theorem]]').replace('[F2, F4, [[thm-target]]]',()=> '[F2, F4]');
const relocate=(a=referenceBefore,b=referenceAfter,o=referenceOption)=>originalPresentationChanges(Buffer.from(a),Buffer.from(b),undefined,o);
function reviewedRelocation(){
 const changes=relocate(),targetPath='items/thm-target.md',target=Buffer.from('---\nid: thm-target\nkind: theorem\nstatus: published\ntitle: Existing target theorem\n---\n## Statement\nA fixed target conclusion.\n'),pin={path:targetPath,sha256:sha(target)},evidence={path:'research/exact-relocation-fixture.json',sha256:sha('fixture evidence')},explanation='Synthetic exact source, target and reference-relocation review; unchanged conditional hypotheses, no new premise/result, and no real mathematical acceptance.';
 const entry={presentation_version:2,proof_reference_relocation:structuredClone(referenceOption),pinned_sha256:sha(referenceBefore),original_sha256:sha(referenceAfter),changes,scientific_review:{...changes.review_classification,hypotheses:'identical',new_premises:false,new_results:false,reason:explanation,reading_limits:explanation},presentation_reviews:changes.deltas.map(d=>({delta_id:d.id,delta_sha256:sha(JSON.stringify(d)),reason:explanation,reading_limits:explanation,evidence:[evidence],...(d.target?{pinned_target:{...pin}}:{})}))};
 const context={target,receipt:{files:[pin]},scope:{importedItems:new Set(['thm-target']),paths:new Set([targetPath])},bind:(path,h)=>{const b=path===targetPath?context.target:readFileSync(path);assert.equal(sha(b),h);return b;},localEvidence:e=>{assert.deepEqual(e,evidence);return Buffer.from('fixture evidence');}};
 return{entry,changes,context,validate:()=>validateOriginalPresentationReviews(entry,changes,context)};
}
test('explicit relocation uses one existing plain phrase and the same predeclared pinned target',()=>{
 assert.throws(()=>originalPresentationChanges(Buffer.from(referenceBefore),Buffer.from(referenceAfter)),/support/);const r=reviewedRelocation(),d=r.changes.deltas[0];assert.equal(d.kind,'proof-reference-relocation');assert.equal(d.target,'thm-target');assert.equal(d.reference_relocation.label,'Existing target theorem');assert.deepEqual(d.reference_relocation.ordinary_support,['F2','F4']);assert.ok(r.validate());
});
for(const [name,edit]of [['math',s=>s.replace('$x=y$',()=>'$x=z$')],['prose',s=>s.replace(' gives ',' proves ')],['label',s=>s.replace('|Existing target theorem', '|A different theorem')],['support',s=>s.replace('[F2, F4]','[F2, F9]')],['support spacing',s=>s.replace('[F2, F4]','[F2,F4]')],['QED',s=>s.replace('[F2, F4]','[F2, F4] ∎')],['target',s=>s.replace('[[thm-target|','[[thm-other|')],['duplicate target',s=>s.replace(' gives ',' [[thm-target|Existing target theorem]] gives ')]])test(`relocation rejects changed ${name}`,()=>assert.throws(()=>relocate(referenceBefore,edit(referenceAfter))));
test('relocation requires a unique old plain phrase, not protected math/code or a link title',()=>{
 for(const [old,next]of [['`Existing target theorem`','`[[thm-target|Existing target theorem]]`'],['$Existing target theorem$','$[[thm-target|Existing target theorem]]$'],['[label](https://example.org "Existing target theorem")','[label](https://example.org "[[thm-target|Existing target theorem]]")'],['Existing target theorem then Existing target theorem','[[thm-target|Existing target theorem]] then Existing target theorem']]){assert.throws(()=>relocate(referenceBefore.replace('Existing target theorem',()=>old),referenceAfter.replace('[[thm-target|Existing target theorem]]',()=>next)));}
});
test('relocation cannot mine a terminal nested wiki from inline code, math or HTML',()=>{
 const old='[F2, F4, [[thm-target]]]',next='[F2, F4]';for(const [left,right]of [['`','`'],['$','$'],['<span>','</span>']])assert.throws(()=>relocate(referenceBefore.replace(old,()=>left+old+right),referenceAfter.replace(next,()=>left+next+right)));
});
test('relocation requires an old unlabelled unique target and literal dependency declaration',()=>{
 assert.throws(()=>relocate(referenceBefore.replace('[[thm-target]]','[[thm-target|Old label]]'),referenceAfter));assert.throws(()=>relocate(referenceBefore.replace('The Existing','The [[thm-target]] Existing'),referenceAfter));assert.throws(()=>relocate(referenceBefore.replace('deps: [thm-target]','deps: []'),referenceAfter.replace('deps: [thm-target]','deps: []')),/predeclared/);
});
test('relocation label has actual pure text, with no entity, escape or math normalization',()=>{
 for(const label of ['*Existing target theorem*','Existing target theorem $x$','Existing &amp; target theorem','Existing \\* target theorem'])assert.throws(()=>relocate(referenceBefore,referenceAfter.replace('|Existing target theorem',()=> '|'+label)));
});
test('relocation selectors are exact, nonoverlapping and cannot be unused',()=>{
 for(const o of [null,{}, {version:2,steps:referenceOption.steps},{version:1,steps:[]},{version:1,steps:[...referenceOption.steps,...referenceOption.steps]},{version:1,steps:[{label:'9.9',target:'thm-target'}]},{version:1,steps:[{label:2.2,target:'thm-target'}]},{version:1,steps:[{label:'2.2',target:'thm-target',extra:true}]}])assert.throws(()=>relocate(referenceBefore,referenceAfter,o));assert.throws(()=>relocate(referenceBefore,referenceBefore),/unused/);assert.throws(()=>originalPresentationChanges(Buffer.from(referenceBefore),Buffer.from(referenceAfter),{version:1,steps:['2.2']},referenceOption),/overlapping/);
});
test('relocation keeps trailing separator whitespace as a separately reviewed delta',()=>{
 const c=relocate(referenceBefore,referenceAfter+'\n');assert.deepEqual(c.deltas.map(d=>d.kind),['proof-reference-relocation','separator-spacing']);
});
test('relocation needs exact option, target publication/pin, runtime and individual evidence review',()=>{
 for(const mutate of [r=>delete r.entry.proof_reference_relocation,r=>delete r.entry.presentation_reviews[0].pinned_target,r=>r.entry.presentation_reviews[0].pinned_target.sha256='0'.repeat(64),r=>r.context.scope.importedItems.clear(),r=>r.entry.presentation_reviews=[],r=>r.entry.presentation_reviews[0].delta_sha256='0'.repeat(64),r=>delete r.changes.proof_support_parser_runtime]){const r=reviewedRelocation();mutate(r);assert.throws(r.validate);}
 const r=reviewedRelocation();r.context.target=Buffer.from(r.context.target.toString().replace('status: published','status: draft'));const hash=sha(r.context.target);r.context.receipt.files[0].sha256=hash;r.entry.presentation_reviews[0].pinned_target.sha256=hash;assert.throws(r.validate,/invalid V2 reference target/);
});
