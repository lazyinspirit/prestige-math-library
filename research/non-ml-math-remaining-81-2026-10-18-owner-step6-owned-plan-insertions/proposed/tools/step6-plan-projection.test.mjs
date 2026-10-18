import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { commitStep6, preflightStep6 } from './step6-commit.mjs';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { composePlanProjection, planDocument, planForeignResidual, planProjectionPageIds,
  validatePlanProjection } from './step6-plan-projection.mjs';

const hash = value => createHash('sha256').update(value).digest('hex');
const clone = value => structuredClone(value);
function fixture(t, supporting = true) {
  const root = mkdtempSync(join(tmpdir(), 'step6-plan-support-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (path, value) => {
    mkdirSync(join(root, path, '..'), { recursive: true });
    writeFileSync(join(root, path), typeof value === 'string' ? value : JSON.stringify(value));
  };
  const run = 'demo', selectedIds = Array.from({ length: 162 }, (_, i) => `selected-${i}`);
  const oldSelected = selectedIds.map(id => ({ id, kind: 'A', category: 'test-category', requires: [], items: [`thm-old-${id}`] }));
  const selected = oldSelected.map(row => ({ ...row, items: [{ id: `thm-new-${row.id}`, kind: 'theorem' }] }));
  const moved = Array.from({ length: 5 }, (_, i) => `thm-moved-${i}`);
  const oldSupport = [
    { id: 'support-left', kind: 'A', category: 'test-category', requires: ['earlier-page'], items: ['def-left', ...moved] },
    { id: 'support-right', kind: 'A', category: 'test-category', requires: [], items: ['def-right'] },
  ];
  const support = [{ ...oldSupport[0], items: ['def-left'] }, { ...oldSupport[1], items: ['def-right', ...moved] }];
  const doc = (scientific, extra, label) => '{\n "foreign_top" : ' + JSON.stringify(label) + ',\n "pages" : [\n'
    + [JSON.stringify(extra[0]), ...scientific.map(JSON.stringify), JSON.stringify(extra[1]),
      ' { "id" : "foreign-numerical", "items" : [ ], "memo" : "' + label + ' \\u03b1 { raw }" } '].join(',\n') + '\n ]\n}\n';
  let head = doc(oldSelected, oldSupport, 'HEAD foreign bytes');
  let index = doc(oldSelected, oldSupport, 'INDEX independently staged bytes');
  let working = doc(selected, support, 'WORKING independently edited bytes');
  put(`research/${run}-scope-ledger.json`, { pages: selected.map(({ id, kind, category }) => ({ id, kind, category })) });
  put(`research/${run}-batch-1.pages.json`, selected);
  put('research/plan-spec.json', working);
  const ownership = `research/${run}-support-ownership.json`;
  const supportingPages = support.map((row, i) => {
    const path = `library/test-category/${row.id}.md`;
    const source = i === 0 ? `---\npage: ${row.id}\nstatus: published\nitems: [def-left]\nexamples: []\n---\nAccepted page.\n`
      : `---\npage: ${row.id}\nstatus: published\nitems:\n${row.items.map(id => '  - ' + id).join('\n')}\nexamples: []\n---\nAccepted page.\n`;
    put(path, source);
    return { id: row.id, path, sha256: hash(source), ownership_evidence: ownership };
  });
  const owner = { run, authorized_by: 'owner', authorization: 'Accept these exact supporting page repairs for scoped closeout.',
    owned_paths: supportingPages.map(({ path, sha256 }) => ({ path, sha256 })) };
  const resealOwner = () => {
    put(ownership, owner);
    for (const page of supportingPages) page.ownership_evidence_sha256 = hash(readFileSync(join(root, ownership)));
  };
  resealOwner();
  const additionalPaths = supportingPages.map(({ path, sha256, ownership_evidence }) =>
    ({ path, sha256, ownership_evidence, reason: 'Commit this accepted outside page repair with this run.' }));
  const spec = { version: 1, kind: 'plan-page-replacement-projection', run, path: 'research/plan-spec.json',
    authorized_by: 'owner', authorization: 'Replace exactly these selected and explicitly owned supporting plan rows.',
    original_head: 'a'.repeat(40), original_index_blob: 'b'.repeat(40), page_ids: selectedIds,
    ...(supporting ? { supporting_pages: supportingPages } : {}),
    evidence: [`research/${run}-scope-ledger.json`, `research/${run}-batch-1.pages.json`]
      .map(path => ({ path, sha256: hash(readFileSync(join(root, path))) })) };
  const replacementIds = new Set([...selectedIds, ...(supporting ? support.map(row => row.id) : [])]);
  const rows = text => planDocument(text).rows.filter(row => replacementIds.has(row.id)).map(({ id, raw }) => ({ id, raw }));
  const sealRows = () => {
    spec.base_head_owned_rows = rows(head); spec.base_index_owned_rows = rows(index); spec.target_owned_rows = rows(working);
  };
  sealRows();
  const validate = () => validatePlanProjection(spec, run, selected, working, head, index, root, { additionalPaths });
  const changeWorkingRow = (id, change, allBases = false) => {
    const update = text => {
      const row = planDocument(text).rows.find(row => row.id === id), value = clone(row.value);
      change(value); return text.slice(0, row.start) + JSON.stringify(value) + text.slice(row.end);
    };
    working = update(working);
    if (allBases) { head = update(head); index = update(index); }
    sealRows();
  };
  return { root, run, selected, selectedIds, support, spec, additionalPaths, owner, ownership, put, resealOwner,
    validate, changeWorkingRow, get head() { return head; }, get index() { return index; }, get working() { return working; } };
}

test('optional supporting replacements commit the exact 164-row union while preserving all foreign base bytes', t => {
  const f = fixture(t); assert.deepEqual(f.validate(), { pageIds: f.selectedIds, supportingPageIds: ['support-left', 'support-right'] });
  assert.equal(f.spec.page_ids.length, 162);
  const ids = planProjectionPageIds(f.spec); assert.equal(ids.length, 164);
  for (const [kind, base] of [['head', f.head], ['index', f.index]]) {
    const result = composePlanProjection(base, f.spec, kind);
    assert.equal(result.replacements.length, 164);
    assert.equal(planForeignResidual(result.text, ids), planForeignResidual(base, ids));
    const actual = planDocument(result.text).rows;
    for (const support of f.support) assert.deepEqual(actual.find(row => row.id === support.id).value.items, support.items);
    assert.ok(result.text.includes(kind === 'head' ? 'HEAD foreign bytes' : 'INDEX independently staged bytes'));
    assert.ok(!result.text.includes('WORKING independently edited bytes'));
    assert.deepEqual(composePlanProjection(result.text, f.spec, kind), { text: result.text, already_integrated: true, replacements: [] });
  }
  assert.equal(readFileSync(join(f.root, 'research/plan-spec.json'), 'utf8'), f.working, 'composition never writes working bytes');
});

test('existing no-support authority and return shape retain their exact 162-page behavior', t => {
  const f = fixture(t, false); assert.deepEqual(f.validate(), { pageIds: f.selectedIds });
  assert.equal(planProjectionPageIds(f.spec).length, 162);
  const result = composePlanProjection(f.head, f.spec, 'head');
  assert.equal(result.replacements.length, 162);
  assert.equal(planForeignResidual(result.text, f.selectedIds), planForeignResidual(f.head, f.selectedIds));
  assert.deepEqual(planDocument(result.text).rows.find(row => row.id === 'support-left').value.items,
    ['def-left', ...Array.from({ length: 5 }, (_, i) => `thm-moved-${i}`)], 'outside changes acquire no default ownership');
});

test('the supplement cannot alter the exact selected scope, scope ledger or manifests', t => {
  const f = fixture(t);
  f.spec.page_ids.push('support-left'); assert.throws(f.validate, /exact scope-ledger pages/); f.spec.page_ids.pop();
  f.put('research/demo-scope-ledger.json', { pages: f.selected.slice(1) }); assert.throws(f.validate, /scope ledger differs/);
  f.put('research/demo-scope-ledger.json', { pages: f.selected });
  f.put('research/demo-batch-1.pages.json', f.selected.slice(1)); assert.throws(f.validate, /manifests differ/);
});

for (const [name, mutate, error] of [
  ['missing policy ownership', f => f.additionalPaths.pop(), /exact policy additional ownership/],
  ['wrong policy page hash', f => { f.additionalPaths[0].sha256 = '0'.repeat(64); }, /exact policy additional ownership/],
  ['different policy evidence', f => { f.additionalPaths[0].ownership_evidence = 'research/demo-other.json'; }, /exact policy additional ownership/],
  ['missing page hash', f => { delete f.spec.supporting_pages[0].sha256; }, /invalid supporting page authority/],
  ['missing evidence hash', f => { delete f.spec.supporting_pages[0].ownership_evidence_sha256; }, /invalid supporting page authority/],
  ['changed evidence bytes', f => f.put(f.ownership, JSON.stringify(f.owner) + '\n'), /ownership evidence changed/],
  ['forged run', f => { f.owner.run = 'another-run'; f.resealOwner(); }, /owner-authorized supporting/],
  ['forged owner', f => { f.owner.authorized_by = 'worker'; f.resealOwner(); }, /owner-authorized supporting/],
  ['missing explicit acceptance', f => { delete f.owner.authorization; f.resealOwner(); }, /owner-authorized supporting/],
  ['missing exact ownership claim', f => { f.owner.owned_paths.shift(); f.resealOwner(); }, /owner-authorized supporting/],
  ['conflicting ownership claims', f => { f.owner.owned_paths.push({ ...f.owner.owned_paths[0], sha256: '0'.repeat(64) }); f.resealOwner(); }, /owner-authorized supporting/],
  ['stale page bytes', f => f.put(f.spec.supporting_pages[0].path, 'changed page'), /supporting page bytes changed/],
  ['unknown authority key', f => { f.spec.allow_all_pages = true; }, /invalid owner authority/],
  ['unknown supporting key', f => { f.spec.supporting_pages[0].trusted = true; }, /invalid supporting page authority/],
  ['duplicate supporting id', f => f.spec.supporting_pages.push(clone(f.spec.supporting_pages[0])), /unique and outside/],
  ['supporting id overlaps selected', f => { f.spec.supporting_pages[0].id = f.selectedIds[0]; }, /unique and outside/],
]) test(`supporting authority rejects ${name}`, t => { const f = fixture(t); mutate(f); assert.throws(f.validate, error); });

test('actual page frontmatter membership and category constrain supporting target rows', t => {
  const f = fixture(t);
  f.changeWorkingRow('support-left', row => { row.items.push('thm-not-on-page'); });
  assert.throws(f.validate, /target items differ from actual page/);
  const g = fixture(t); g.changeWorkingRow('support-left', row => { row.category = 'other-category'; }, true);
  assert.throws(g.validate, /category\/path differs/);
});

test('supporting authority cannot change other plan values, even when selected targets remain valid', t => {
  const f = fixture(t); f.changeWorkingRow('support-right', row => { row.requires = ['new-unowned-edge']; });
  assert.throws(f.validate, /may change only item membership/);
});

test('supporting carriers cannot be symlinks, including matching byte targets', t => {
  const f = fixture(t), row = f.spec.supporting_pages[0];
  f.put('copied-page.md', readFileSync(join(f.root, row.path), 'utf8')); rmSync(join(f.root, row.path));
  symlinkSync(join(f.root, 'copied-page.md'), join(f.root, row.path));
  assert.throws(f.validate, /regular nonsymlink/);
});

test('union rows remain exact and atomic: partial integration, reorder, missing and extra rows fail closed', t => {
  const f = fixture(t); f.validate();
  const before = f.spec.base_head_owned_rows[0], target = f.spec.target_owned_rows[0];
  const partial = f.head.replace(before.raw, target.raw);
  assert.throws(() => composePlanProjection(partial, f.spec, 'head'), /neither authorized original nor target/);
  const reordered = clone(f.spec); [reordered.target_owned_rows[0], reordered.target_owned_rows[1]]
    = [reordered.target_owned_rows[1], reordered.target_owned_rows[0]];
  assert.throws(() => validatePlanProjection(reordered, f.run, f.selected, f.working, f.head, f.index, f.root,
    { additionalPaths: f.additionalPaths }), /invalid ordered authority rows|relative order/);
  for (const rows of [f.spec.target_owned_rows.slice(1), [...f.spec.target_owned_rows, { id: 'foreign-numerical', raw: '{}' }]]) {
    const changed = { ...f.spec, target_owned_rows: rows };
    assert.throws(() => planProjectionPageIds(changed), /exact selected and supporting page union/);
  }
});

test('legacy malformed authority and foreign duplicate JSON keys remain rejected', t => {
  const f = fixture(t, false); f.spec.unrecognized = [];
  assert.throws(f.validate, /invalid owner authority/);
  assert.throws(() => planDocument('{"pages":[],"pages":[]}'), /duplicate object key/);
});


test('native temporary-Git transaction loads supporting policy and commits 164 rows with separate foreign index bytes', t => {
  const f = fixture(t);
  const git = args => {
    const result = spawnSync('git', args, { cwd: f.root, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr); return result.stdout.trimEnd();
  };
  git(['init', '-b', 'main']);
  git(['config', 'user.name', 'Projection fixture']); git(['config', 'user.email', 'fixture@example.invalid']);
  mkdirSync(join(f.root, 'empty-hooks')); git(['config', 'core.hooksPath', join(f.root, 'empty-hooks')]);
  f.put('research/plan-spec.json', f.head); f.put('foreign.md', 'foreign HEAD bytes\n');
  git(['add', '--', 'research/plan-spec.json', 'foreign.md']); git(['commit', '-m', 'fixture baseline']);
  f.spec.original_head = git(['rev-parse', 'HEAD']);
  f.put('research/plan-spec.json', f.index); f.put('foreign.md', 'foreign INDEX bytes\n');
  git(['add', '--', 'research/plan-spec.json', 'foreign.md']);
  f.spec.original_index_blob = git(['rev-parse', ':research/plan-spec.json']);
  const foreignIndex = git(['ls-files', '--stage', '--', 'foreign.md']);
  f.put('research/plan-spec.json', f.working); f.put('foreign.md', 'foreign WORKING bytes\n');
  for (const row of f.selected) {
    const id = row.items[0].id;
    f.put(`library/test-category/${row.id}.md`, `---\npage: ${row.id}\nitems: [${id}]\nexamples: []\n---\n`);
    f.put(`items/${id}.md`, `---\nid: ${id}\ndeps: []\n---\n## Statement\nFixture only.\n`);
  }
  f.put('research/published-consumer-supplier-ledger.md', '');
  f.put('research/defect-ledger.jsonl', '');
  for (const suffix of ['proof-layout.json', 'publication-readiness.json', 'step6-evidence.json',
    'step6-report-integrity.json', 'step6-report.response.json', 'step6-report.md', 'pathway-closure.json', 'judge-closure.json'])
    f.put(`research/demo-${suffix}`, '{}');
  const authority = 'research/demo-plan-projection.json'; f.put(authority, f.spec);
  const policy = { version: 1, run: f.run, authorized_by: 'owner',
    authorization: 'Authorize exactly the selected frontier and the two supporting fixture pages.',
    additional_paths: f.additionalPaths,
    plan_projection: { path: 'research/plan-spec.json', authority, sha256: hash(readFileSync(join(f.root, authority))) } };
  f.put('research/demo-closeout-scope.json', policy);
  const scope = preflightStep6(f.root, f.run);
  assert.equal(scope.planProjections.length, 1);
  assert.ok(scope.localPaths.includes(f.ownership));
  assert.ok(f.support.every(row => scope.localPaths.includes(`library/test-category/${row.id}.md`)));
  // This tests the transaction API after a caller's validation binding, not
  // production proof gates or a native scientific certification.
  let bindings = 0;
  const result = commitStep6(f.root, f.run, { assertValidated() { bindings++; } });
  assert.ok(bindings > 0); assert.equal(git(['rev-parse', 'HEAD']), result.commit);
  const committed = git(['show', 'HEAD:research/plan-spec.json']) + '\n';
  const indexed = git(['show', ':research/plan-spec.json']) + '\n';
  const ids = planProjectionPageIds(f.spec);
  assert.equal(committed, composePlanProjection(f.head, f.spec, 'head').text);
  assert.equal(indexed, composePlanProjection(f.index, f.spec, 'index').text);
  assert.equal(planForeignResidual(committed, ids), planForeignResidual(f.head, ids));
  assert.equal(planForeignResidual(indexed, ids), planForeignResidual(f.index, ids));
  assert.equal(readFileSync(join(f.root, 'research/plan-spec.json'), 'utf8'), f.working);
  assert.equal(git(['ls-files', '--stage', '--', 'foreign.md']), foreignIndex);
  assert.equal(git(['show', 'HEAD:foreign.md']), 'foreign HEAD bytes');
  assert.equal(readFileSync(join(f.root, 'foreign.md'), 'utf8'), 'foreign WORKING bytes\n');
  const receipt = JSON.parse(readFileSync(join(f.root, 'research/demo-dispatch/tool-step6-finalize-v3.result.json')));
  const projection = receipt.closeout_scope.plan_projections[0];
  assert.equal(receipt.ok, true); assert.deepEqual(projection.page_ids, f.selectedIds);
  assert.deepEqual(projection.supporting_page_ids, f.support.map(row => row.id));
  assert.equal(projection.head_foreign_raw_sha256, hash(planForeignResidual(f.head, ids)));
  assert.equal(projection.index_foreign_raw_sha256, hash(planForeignResidual(f.index, ids)));
});

function additionFixture(t) {
  const f = fixture(t), oldRows = new Map(planDocument(f.head).rows.map(row => [row.id,row.raw]));
  for (const suffix of ['third','fourth']) {
    const id='support-'+suffix, row={id,kind:'A',category:'test-category',requires:[],items:['def-'+suffix]};
    f.support.push(row);const path=`library/test-category/${id}.md`,source=`---\npage: ${id}\nstatus: published\nitems: [def-${suffix}]\nexamples: []\n---\nAccepted fixture page.\n`;f.put(path,source);
    f.spec.supporting_pages.push({id,path,sha256:hash(source),ownership_evidence:f.ownership});f.owner.owned_paths.push({path,sha256:hash(source)});f.additionalPaths.push({path,sha256:hash(source),ownership_evidence:f.ownership,reason:'Commit this exact accepted outside page repair.'});oldRows.set(id,JSON.stringify(row));
  }
  f.resealOwner();
  const added=f.selectedIds.slice(62), anchor='foreign-anchor', owned=new Set([...f.selectedIds,...f.support.map(r=>r.id)]);
  const raw=rows=>rows.map(row=>typeof row==='string'?row:JSON.stringify(row));
  const original=label=>raw([oldRows.get('support-left'),...f.selectedIds.slice(0,62).map(id=>oldRows.get(id)),...f.support.slice(1).map(r=>oldRows.get(r.id)),` { "id" : "${anchor}", "items" : [], "memo" : "${label} anchor body" }`]);
  const target=raw([f.support[0],...f.selected.slice(0,62),...f.support.slice(1),` { "id" : "${anchor}", "items" : [], "memo" : "WORKING anchor body" }`,...f.selected.slice(62)]);
  const foreign=label=>[` { "id" : "foreign-later-one", "items" : [], "memo" : "${label} first \u03b1 { raw }" } `,` { "id" : "foreign-later-two", "items" : [], "memo" : "${label} second" } `];
  const doc=(rows,label)=>'{\n "foreign_top" : '+JSON.stringify(label)+',\n "pages" : [\n  '+rows.join(',\n  ')+'\n ]\n}\n';
  const head=doc(original('HEAD'),'HEAD original'),index=doc(original('INDEX'),'INDEX original'),working=doc([...target,...foreign('WORKING')],'WORKING current');
  const currentHead=doc([...original('HEAD'),...foreign('HEAD')],'HEAD original'),currentIndex=doc([...original('INDEX'),...foreign('INDEX')],'INDEX original');
  const rows=text=>planDocument(text).rows.filter(row=>owned.has(row.id)).map(({id,raw})=>({id,raw}));
  const parsed=planDocument(working),a=parsed.rows.findIndex(row=>row.id===anchor),last=parsed.rows[a+added.length];
  Object.assign(f.spec,{version:2,kind:'plan-page-replacement-and-insertion-projection',added_page_ids:added,insertions:[{after_page_id:anchor,page_ids:added,raw:working.slice(parsed.rows[a].end,last.end)}],base_head_owned_rows:rows(head),base_index_owned_rows:rows(index),target_owned_rows:rows(working)});
  f.put('research/plan-spec.json',working);
  const validate=(h=head,i=index,w=working)=>validatePlanProjection(f.spec,f.run,f.selected,w,h,i,f.root,{additionalPaths:f.additionalPaths});
  return {...f,head,index,working,currentHead,currentIndex,validate,added,owned,anchor};
}
test('V2 authenticates 100 absent selected rows, 66 existing rows and four support rows without fake originals',t=>{
 const f=additionFixture(t),v=f.validate();assert.equal(v.pageIds.length,162);assert.equal(v.supportingPageIds.length,4);assert.equal(v.addedPageIds.length,100);assert.equal(f.spec.base_head_owned_rows.length,66);assert.equal(f.spec.target_owned_rows.length,166);
 for(const [kind,base]of [['head',f.currentHead],['index',f.currentIndex]]){const out=composePlanProjection(base,f.spec,kind),ids=planProjectionPageIds(f.spec);assert.equal(out.replacements.length,66);assert.equal(out.insertions.length,1);assert.equal(planForeignResidual(out.text,ids,f.spec.insertions),planForeignResidual(base,ids,f.spec.insertions));assert.ok(out.text.includes(kind==='head'?'HEAD first':'INDEX first'));assert.ok(!out.text.includes('WORKING first'));assert.deepEqual(composePlanProjection(out.text,f.spec,kind),{text:out.text,already_integrated:true,replacements:[],insertions:[]});}
});
for(const mode of ['missing-anchor','owned-anchor','duplicate-added','duplicate-block','unknown-added','one-original-present','reordered-added','payload-space','payload-comma','payload-foreign-row'])test(`V2 rejects ${mode}`,t=>{
 const f=additionFixture(t);
 if(mode==='missing-anchor')f.spec.insertions[0].after_page_id='absent-anchor';
 if(mode==='owned-anchor')f.spec.insertions[0].after_page_id=f.selectedIds[0];
 if(mode==='duplicate-added')f.spec.added_page_ids.push(f.added[0]);
 if(mode==='duplicate-block')f.spec.insertions.push(clone(f.spec.insertions[0]));
 if(mode==='unknown-added')f.spec.added_page_ids[0]='foreign-later-one';
 if(mode==='one-original-present'){const row=f.spec.target_owned_rows.find(r=>r.id===f.added[0]);const d=planDocument(f.head),a=d.rows.find(r=>r.id===f.anchor),h=f.head.slice(0,a.end)+','+row.raw+f.head.slice(a.end);assert.throws(()=>f.validate(h),/absent in both originals|relative order/);return;}
 if(mode==='reordered-added')f.spec.insertions[0].page_ids.reverse();
 if(mode==='payload-space')f.spec.insertions[0].raw=f.spec.insertions[0].raw.replace(',\n  ', ',\n   ');
 if(mode==='payload-comma')f.spec.insertions[0].raw=f.spec.insertions[0].raw.slice(1);
 if(mode==='payload-foreign-row')f.spec.insertions[0].raw+=',{"id":"foreign-forgery","items":[]}';
 assert.throws(f.validate);
});
test('V2 composition rejects missing actual anchor, partial additions/replacements and separator-only drift',t=>{
 const f=additionFixture(t);f.validate();
 const baseDoc=planDocument(f.currentHead),anchor=baseDoc.rows.find(r=>r.id===f.anchor),moved=f.currentHead.slice(0,anchor.start)+anchor.raw.replace(f.anchor,'changed-anchor')+f.currentHead.slice(anchor.end);assert.throws(()=>composePlanProjection(moved,f.spec,'head'),/anchor missing/);
 const row=f.spec.target_owned_rows.find(r=>r.id===f.added[0]),partial=f.currentHead.slice(0,anchor.end)+','+row.raw+f.currentHead.slice(anchor.end);assert.throws(()=>composePlanProjection(partial,f.spec,'head'),/neither authorized/);
 const before=f.spec.base_head_owned_rows[0],after=f.spec.target_owned_rows.find(r=>r.id===before.id);assert.throws(()=>composePlanProjection(f.currentHead.replace(before.raw,after.raw),f.spec,'head'),/neither authorized/);
 const done=composePlanProjection(f.currentHead,f.spec,'head').text,bad=done.replace(f.spec.insertions[0].raw,f.spec.insertions[0].raw.replace(',\n  ',',\n   '));assert.throws(()=>composePlanProjection(bad,f.spec,'head'),/leading-comma span/);assert.throws(()=>planForeignResidual(bad,planProjectionPageIds(f.spec),f.spec.insertions),/leading-comma span/);
});

test('native V2 temporary-Git transaction inserts only 100 owned rows and preserves separate foreign HEAD/index/working',t=>{
 const f=additionFixture(t),git=args=>{const r=spawnSync('git',args,{cwd:f.root,encoding:'utf8'});assert.equal(r.status,0,r.stderr);return r.stdout.trimEnd();};
 git(['init','-b','main']);git(['config','user.name','Projection fixture']);git(['config','user.email','fixture@example.invalid']);mkdirSync(join(f.root,'empty-hooks'));git(['config','core.hooksPath',join(f.root,'empty-hooks')]);
 f.put('research/plan-spec.json',f.head);f.put('foreign.md','Original foreign file\n');git(['add','--','research/plan-spec.json','foreign.md']);git(['commit','-m','genuine absent-row original']);f.spec.original_head=git(['rev-parse','HEAD']);
 f.put('research/plan-spec.json',f.index);git(['add','--','research/plan-spec.json']);f.spec.original_index_blob=git(['rev-parse',':research/plan-spec.json']);
 // A genuine unrelated commit adds foreign rows after the preserved anchor.
 f.put('research/plan-spec.json',f.currentHead);git(['add','--','research/plan-spec.json']);git(['commit','-m','unrelated foreign plan additions']);f.put('research/plan-spec.json',f.currentIndex);f.put('foreign.md','Separately staged foreign file\n');git(['add','--','research/plan-spec.json','foreign.md']);const foreignIndex=git(['ls-files','--stage','--','foreign.md']);
 f.put('research/plan-spec.json',f.working);f.put('foreign.md','Independent working foreign file\n');
 for(const row of f.selected){const id=row.items[0].id;f.put(`library/test-category/${row.id}.md`,`---\npage: ${row.id}\nitems: [${id}]\nexamples: []\n---\n`);f.put(`items/${id}.md`,`---\nid: ${id}\ndeps: []\n---\n## Statement\nFixture only.\n`);}
 f.put('research/published-consumer-supplier-ledger.md','');f.put('research/defect-ledger.jsonl','');for(const suffix of ['proof-layout.json','publication-readiness.json','step6-evidence.json','step6-report-integrity.json','step6-report.response.json','step6-report.md','pathway-closure.json','judge-closure.json'])f.put(`research/demo-${suffix}`,'{}');
 const authority='research/demo-plan-projection.json';f.put(authority,f.spec);f.put('research/demo-closeout-scope.json',{version:1,run:f.run,authorized_by:'owner',authorization:'Authorize exact selected and explicitly owned supporting plan rows only.',additional_paths:f.additionalPaths,plan_projection:{path:'research/plan-spec.json',authority,sha256:hash(readFileSync(join(f.root,authority)))}});
 assert.equal(preflightStep6(f.root,f.run).planProjections.length,1);const result=commitStep6(f.root,f.run,{assertValidated(){}});assert.equal(git(['rev-parse','HEAD']),result.commit);
 assert.equal(git(['show','HEAD:research/plan-spec.json'])+'\n',composePlanProjection(f.currentHead,f.spec,'head').text);assert.equal(git(['show',':research/plan-spec.json'])+'\n',composePlanProjection(f.currentIndex,f.spec,'index').text);assert.equal(readFileSync(join(f.root,'research/plan-spec.json'),'utf8'),f.working);assert.equal(git(['ls-files','--stage','--','foreign.md']),foreignIndex);assert.equal(readFileSync(join(f.root,'foreign.md'),'utf8'),'Independent working foreign file\n');
 const receipt=JSON.parse(readFileSync(join(f.root,'research/demo-dispatch/tool-step6-finalize-v3.result.json')));assert.equal(receipt.closeout_scope.plan_projections[0].added_page_ids.length,100);assert.equal(receipt.closeout_scope.plan_projections[0].supporting_page_ids.length,4);
});
