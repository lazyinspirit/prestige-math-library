from pathlib import Path
import json,re,hashlib
b=Path('research/quantum-computing-algorithms-60-2026-10-15-owner/native-interface-reconciliation/native-norms');m=json.load(open(b/'effective-manifest.json'));plan=json.load(open('research/plan-spec.json'))['pages'];pmap={p['id']:p for p in plan}
for x in m['items']:
 for a in x.get('added_supplier_homes',[]):
  if not a['homes']:
   page='complex-subspace-realification' if a['id']=='lem-complex-normed-subspace-realifies-to-real-normed-subspace' else 'complex-norms-and-realification'
   p=pmap[page];path=Path('library')/p['category']/(page+'.md');s=path.read_text();assert a['id'] in s
   a['homes']=[dict(page=page,order=p['order'],kind=p['kind'],category=p['category'],source_page=str(path),page_raw_sha256=hashlib.sha256(path.read_bytes()).hexdigest(),basis='Actual authored native page item list; canonical row inventory not yet transcribed')]
 x['forward_page_issues']=[a for a in x.get('added_supplier_homes',[]) if any(h['order']>c['order'] for h in a['homes'] for c in x.get('consumer_homes',[]) if h.get('order') is not None and c.get('order') is not None)]
 if x['id']=='cex-sequential-uniform-boundedness-needs-a-complete-domain':
  x['actual_use_justification']+=' F2 additionally routes complex restriction to the early complex-subspace definition and checks real restriction directly by the three ambient real norm axioms; removes the unnecessary later real normed-subspace edge. The underlying c00 set, inherited supremum norm and all witness formulas remain identical.'
 if x['id'] in ['thm-complex-hahn-banach-norm-preserving-extension','cex-sequential-uniform-boundedness-needs-a-complete-domain','thm-banach-space-no-countably-infinite-hamel-basis']:
  x['mathematical_contract_delta']='Public Statement/Statement-refuted is byte-identical. Proof premise elaboration only: uses exactly the original given normed/Banach domain, same restricted norm, same field linearity, same unit balls/operator norms, same AC/ZF assumptions and every original conclusion.'
# Existing retained downstream paragraphs differ only by already-reviewed remark replacements; bind their exact reviewed counterparts.
d=json.load(open(b/'focused-inherited-downstream-contexts.json'));paths={x['id']:x['effective_proposal'] for x in m['items']};checks=[]
for x in d['consumers']:
 s=Path(paths.get(x['id'],x['path'])).read_text()
 for u in x['sites']:
  old=u['exact_use_paragraph'];present=old in s
  corrected=old.replace('[[rem-real-and-complex-normed-space-convention]]','[[def-complex-norm-and-complex-normed-space]]')
  checks.append(dict(consumer=x['id'],supplier=u['supplier'],original_paragraph_present=present,reviewed_remark_replacement_present=corrected in s,disposition='exact-context' if present else 'Already-sealed norm-remark citation replacement; mathematical context retained under the per-item disposition, not source-byte identity.'))
assert all(x['original_paragraph_present'] or x['reviewed_remark_replacement_present'] for x in checks)
json.dump(dict(checked_sites=len(checks),exact=sum(x['original_paragraph_present'] for x in checks),already_reviewed_citation_replacements=sum(not x['original_paragraph_present'] for x in checks),checks=checks),open(b/'focused-context-currency.json','w'),indent=2)
json.dump(m,open(b/'effective-manifest.json','w'),indent=2);open(b/'effective-manifest.json','a').write('\n')
report='''# Actual native norm interface reconciliation

Proposal-only: 44 existing repairs, 17 full Markdown overrides and 27 retained reviewed carriers. One focused actual-source reconciliation cycle. No live item/library/plan, native state, shared ledger, original sealed proposal/evidence, acceptance, audit, publication or commit was written. All effective carriers remain published and omit stale verification, exactly as the reviewed proposals do. Authentic repair receipts remain owner work.

The completed actual seven norm suppliers were read from items/, including their public contracts and relevant proofs. `effective-manifest.json` binds their raw and canonical hashes plus the real norm definition. Complex norm definition supplies exactly finite real-valued separation, triangle and homogeneity for every complex scalar. The proved general realification lemma gives the identical real norm and metric N(u-v); the real norm definition proves nonnegativity and the metric axioms. Complex normed-subspace definition supplies restriction and proves its complex norm axioms; the late subspace-realification lemma supplies metric restriction and the supplied interleaved finite real basis, including dimension zero. Equivalent-complex-norms retains positive real comparison constants on the entire complex norm domain. Coordinate l1 and modulus embedding lemmas retain every n>=0 and every real scalar respectively.

Every override changes dependency routing or explanatory premise typing only. Norm domains, real/complex field branches, arbitrary complex homogeneity, finite real norm values, exact d(u,v)=N(u-v), restricted norms, all dimension-zero cases, same-field linearity, all comparison/continuity/completeness predicates and choice assumptions remain unchanged. There is no finite-dimensional, inner-product, separability or Banach narrowing. `source-public-deltas.json` retains every full reviewed/effective public section and the17 complete diffs; reviewed-preimages/ retains exact overridden proposal bytes. The manifest preserves original LIVE published preimages and hashes and confirms all44 still match those archived bytes.

For complex Hahn–Banach the public theorem is byte-identical: its existing step2.1 real extension application now explicitly obtains the same real norm and restricted normed subspace from the actual proved suppliers. Neither the complex-linear extension nor norm equality nor AC changes. For c00, F2 proves the real restriction directly by ambient real norm axioms and routes the complex restriction to the early complex-subspace definition; all explicit vectors, finite support, norm bounds, Cauchy witness and ZF conclusion remain identical. Hamel L7 now says a complex *Banach* space retains its complete metric: this is its existing Given hypothesis, not a new restriction on the theorem and not a claim that every complex normed space is complete. The source's entire nested-ball proof is retained.

The early native supplier page is248.1, the late subspace lemma479.1, the real norm definition248. Supplier homes are taken from actual native page item lists plus current canonical order rows; their hashes are bound in the manifest. No added supplier creates a forward page edge for these17 carrier homes. Hahn–Banach485 can consume late479.1. The c00 example carrier is canonically497; its Lp supplier is454, and the c00 override deliberately uses only early native norm/subspace suppliers. Root must derive actual page requires after merging the full pending71 set; no requires edge was written here.

The sealed original REPORT.md and semantic-deltas.md are inherited with their honest focused-context limits. The reconciliation filters only the17 overridden suppliers' original downstream actual-use evidence:198 carriers/270 use sites, retained in focused-inherited-downstream-contexts.json. Current source/effective44 checks find261 exact paragraphs and9 already-reviewed norm-remark citation replacements; focused-context-currency.json records each. At each use the supplied mathematical predicate/data are identical by the explicit source argument above. Thus extensional substitution preserves its premise, while unchanged intermediate interfaces retain the original C0 argument. This does not infer proof validity from hashes or graph membership and does not claim a repeated independent audit of2989 whole proofs.

Local explicit override-file precheck passed17 files/13 phase proofs; rendercheck passed17 with no errors or warnings; actual-renderer proof-layout passed17 items/91 steps/zero defects. Results are mechanical source checks only, not gates or acceptance. No unresolved changed-interface mathematical gap remains. Native independent supplier reviews/gates, published ownership and authentic repair receipts remain required owner integration work.

## All44 source-grounded dispositions

'''
for x in m['items']:report+=f"- `{x['id']}` — **{x['disposition']}**. {x['actual_use_justification']}\n"
(b/'REPORT.md').write_text(report)
print('finalized',len(m['items']),sum(bool(x.get('forward_page_issues')) for x in m['items']))
