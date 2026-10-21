// Isolated proposal tests, not a gate. All tool filesystem writes are mocked.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { SOURCE_SECTIONS, factParagraphs, numberedProofSteps, sourceSectionText, splitFrontmatter } from '../../../../tools/facts-block.mjs';
const here = fileURLToPath(new URL('.', import.meta.url));
const checker = fs.readFileSync(here + 'proof-contract-after.mjs', 'utf8');
const records = [];
const check = (name, fn) => { fn(); records.push({ name, outcome: 'pass' }); };
// Exercise the exact proposed uses-validation block with the actual token rule.
const usesBlock = checker.slice(checker.indexOf('    if (!Array.isArray(uses))'), checker.indexOf('    citedFactKeys.add(key);'));
const explicitTokens = (text, steps) => {
  const out = new Set();
  for (const m of text.matchAll(/\b(?:[Ss]teps?\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)) {
    if (m[2]) out.add(m[2]); else if (/^steps?\s/i.test(m[0]) || steps.has(m[1])) out.add(m[1]);
  }
  return out;
};
const validateUses = new Function('uses', 'steps', 'explicitTokens', 'error', `const fact='F1', source='lem-fixture', id='consumer'; ${usesBlock}`);
const errorsFor = (uses, rows) => { const errors = []; validateUses(uses, new Map(rows.map(([id, text]) => [id, { id, text }])), explicitTokens, (code) => errors.push(code)); return errors; };
check('empty uses accepted exactly when actual proof uses are empty', () => assert.deepEqual(errorsFor([], [['1.1', 'Uses [F2].']]), []));
check('empty uses rejects an omitted real proof citation', () => assert.deepEqual(errorsFor([], [['1.1', 'Uses [F1].']]), ['citation-use-unmapped']));
check('complete nonempty use set remains valid', () => assert.deepEqual(errorsFor(['1.1'], [['1.1', 'Uses [F1].']]), []));
check('an unsupported claimed use remains rejected', () => assert.deepEqual(errorsFor(['1.1'], [['1.1', 'Uses [F2].']]), ['citation-use-not-supported']));
check('a missing claimed step remains rejected', () => assert.deepEqual(errorsFor(['9.1'], []), ['citation-use-step-missing']));
check('nonarray uses remains rejected', () => assert.deepEqual(errorsFor(null, []), ['citation-uses']));

const sourceBlock = checker.slice(checker.indexOf('    if (!sourceItem) {'), checker.indexOf('    // An exact empty set'));
const validateSource = new Function('sourceItem', 'acceptedReviewedLocalSource', 'error', 'SOURCE_SECTIONS', 'sourceSectionText', 'normalise', `const fact='F1',source='lem-fixture',id='consumer',section='Statement',quote='correct quote'; ${sourceBlock}`);
const sourceErrors = (eligible, actualQuote) => { const errors=[]; validateSource({statementProvenance:'ai-generated',body:'fixture'}, () => eligible, code=>errors.push(code), SOURCE_SECTIONS, ()=>actualQuote, s=>s); return errors; };
check('eligible bounded local source still undergoes exact quote checking', () => assert.deepEqual(sourceErrors(true, 'wrong quote'), ['citation-quote-mismatch']));
check('eligible bounded local source accepts its actual quote', () => assert.deepEqual(sourceErrors(true, 'correct quote'), []));
check('noneligible generated source remains rejected', () => assert.deepEqual(sourceErrors(false, 'correct quote'), ['citation-ai-generated-statement']));
const fn = checker.slice(checker.indexOf('function acceptedReviewedLocalSource('), checker.indexOf('// Declarations, not'));
check('adapter delegates full metadata/body to the existing bounded validator', () => {
  const errors=[]; let called=false;
  const adapted=new Function('reviewedLocalLemmaAcceptance','parseFrontmatter','REPO','error',`${fn}; return acceptedReviewedLocalSource;`)((meta,body,repo)=>{called=true;assert.deepEqual(meta,{id:'fixture'});assert.equal(body,'exact-body');assert.equal(repo,'fixture-root');return {eligible:true,errors:[]};}, fm=>{assert.equal(fm,'exact-fm');return {id:'fixture'};},'fixture-root',code=>errors.push(code));
  assert.equal(adapted({id:'fixture',fm:'exact-fm',body:'exact-body'}),true);assert(called);assert.deepEqual(errors,[]);
});
check('invalid bounded acceptance remains an explicit error', () => {
  const errors=[];const adapted=new Function('reviewedLocalLemmaAcceptance','parseFrontmatter','REPO','error',`${fn}; return acceptedReviewedLocalSource;`)(()=>({eligible:false,errors:['invalid evidence']}),()=>({}),'fixture-root',code=>errors.push(code));
  assert.equal(adapted({id:'fixture',fm:'',body:''}),false);assert.deepEqual(errors,['citation-local-proof-acceptance-invalid']);
});

const regen = fs.readFileSync(here + 'regen-contract-entries-after.mjs', 'utf8')
  .replace(/^import \{ readFileSync, writeFileSync, existsSync \} from 'fs';\n/m, '')
  .replace(/^import \{[\s\S]*?\} from '\.\/facts-block\.mjs';\n/m, '');
function regenerate(item, entry) {
  const input={contracts:{'def-fixture':entry}}, files={'contract.json':JSON.stringify(input),'items/def-fixture.md':item,'items/lem-fixture.md':'---\nid: lem-fixture\n---\n## Statement\n\nExact fixture statement.\n'}, writes={}, logs=[];
  const context={ readFileSync:p=>{assert(p in files,p);return files[p];}, existsSync:p=>p in files, writeFileSync:(p,text)=>{writes[p]=text;}, SOURCE_SECTIONS, factParagraphs, numberedProofSteps, sourceSectionText, splitFrontmatter, process:{argv:['node','tool','contract.json','def-fixture'],exit:()=>{throw Error('unexpected exit');}}, console:{log:s=>logs.push(s),error:s=>logs.push(s)} };
  vm.runInNewContext(regen,context);
  return {entry:JSON.parse(writes['contract.json']).contracts['def-fixture'],logs};
}
const definition='---\nid: def-fixture\n---\n## Definition\n\nA fixture.\n\n## Facts & Assumptions\n\n[F1] Exact supplier. [[lem-fixture]]\n';
check('proof-free entry regenerates exact citations with empty uses and preserves risk/history', () => {
  const old={citations:[],derivations:[],routine_steps:[],risk_review:{status:'existing'},boundaries:[{case:'historical'}]};const result=regenerate(definition,old).entry;
  assert.deepEqual(result.citations,[{fact:'F1',source:'lem-fixture',source_section:'Statement',quote:'Exact fixture statement.',uses:[]}]);assert.deepEqual(result.risk_review,old.risk_review);assert.deepEqual(result.boundaries,old.boundaries);
});
check('no-step entry with historical proof rows is skipped rather than silently deleted', () => {
  const old={citations:[],derivations:[{step:'1.1',claim:'old obligation'}],routine_steps:[]};const result=regenerate(definition,old);assert.deepEqual(result.entry,old);assert(result.logs.some(s=>s.includes('explicit root migration required')));
});
check('ordinary proof regeneration retains routine classification and extra fields', () => {
  const old={citations:[],derivations:[],routine_steps:[{id:'routine-original',step:'1.1',claim:'old',inputs:['F1'],note:'retain'}]};const result=regenerate(definition+'\n## Proof\n\n1.1 Apply [F1]. [F1, given]\n',old).entry;
  assert.deepEqual(result.derivations,[]);assert.equal(result.routine_steps[0].id,'routine-original');assert.equal(result.routine_steps[0].note,'retain');assert.deepEqual(result.citations[0].uses,['1.1']);
});
fs.writeFileSync(here+'focused-test-results.json',JSON.stringify({kind:'isolated proposed-tool tests, not a gate',tests:records,canonical_writes:false,real_hashes_computed:false,limits:'All generator filesystem operations were mocked. The reviewed-local adapter uses a stub of the existing authoritative validator; this does not validate or rehash any real accepted body.'},null,2)+'\n');
console.log(`${records.length} isolated focused tests passed; no canonical writes, gates or real hashes.`);
