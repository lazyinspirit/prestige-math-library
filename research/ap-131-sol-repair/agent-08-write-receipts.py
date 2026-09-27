from pathlib import Path
import hashlib,json,difflib,re
D=Path('research/ap-131-sol-repair'); I=Path('items')
shard=json.loads((D/'shard-08.json').read_text())
evidence={
'cor-lacunary-series-lp-membership-is-coefficient-ell-two':'Completeness suppliers require Choice; added AC to the convergence contract and repaired malformed proof steps with explicit two-sided finite tail estimates.',
'cor-annihilator-detects-closure':'Reverse inclusion invokes geometric Hahn–Banach; added its AC premise.',
'def-radon-nikodym-derivative':'Complex density existence cited from an AC-qualified corollary; clause 2 now states that premise.',
'def-reflexive-banach-space':'Surjectivity remains the definition; auxiliary bidual isometry is now explicitly conditional on AC.',
'lem-transpose-range-membership-by-domination':'Reverse implication extends a functional from ran T, which needs HB under AC.',
'thm-hahn-banach-norm-preserving-extension':'Dominated extension supplier assumes AC via Zorn; premise now appears in this theorem.',
'thm-canonical-bidual-map-is-an-isometry':'Norming functional supplier requires AC in this proof route.',
'lem-elementary-kernel-range-annihilator-identities':'Preannihilator and primal closure identities invoke norming/HB separation; added AC.',
'thm-complex-hahn-banach-norm-preserving-extension':'Complex extension invokes AC-qualified real extension.',
'thm-dual-norms-every-vector':'Norming functional construction invokes AC-qualified extension.',
'lem-transpose-is-bounded-and-has-the-same-norm':'Reverse norm inequality uses a norming functional, supplied under AC.',
'thm-dual-of-a-closed-subspace-is-a-dual-quotient':'Surjectivity and quotient isometry invoke norm-preserving extension under AC.',
'thm-geometric-hahn-banach-for-subspaces':'Point-separating functional invokes norm-preserving extension under AC.',
'thm-kernel-range-annihilator-identities':'The package includes a primal identity invoking HB separation; added AC.',
'thm-norm-preserving-extension-from-any-subspace':'Both real and complex suppliers require AC.',
'rem-hahn-banach-discontinuous-additive-open':'Removed unsupported current-open, no-functional-analysis, and strict-strength assertions; retained a dated recorded question and a verified 2026 separation result without claiming it settles HB.',
'thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric':'Countable representatives in completeness proof use AC; explicitly selected them and proved the pointwise limit is measurable and p-integrable.',
'thm-lebesgue-criterion':'Replaced AC_omega countable-null-union appeal by new ZF lemma selecting least coded rational covers for compact content-zero oscillation sets; restored choice-free iff.'}
actual_sources={'rem-hahn-banach-discontinuous-additive-open':['Larson–Shelah, arXiv:2606.08384v2, abstract, introduction, Theorem 3.3 (PDF read)','Karagila, arXiv:2010.15632 (PDF searched; no relevant implication-status claim found)'], 'thm-lebesgue-criterion':['John K. Hunter, An Introduction to Real Analysis, Chapter 11, §11.8 pp. 238–239 (PDF read; criterion stated without proof)']}
def sha(x):return hashlib.sha256(x.encode()).hexdigest()
def sec(s):
 m=re.search(r'^## (Statement|Definition)\s*\n',s,re.M)
 if not m:return None
 n=re.search(r'^## ',s[m.end():],re.M)
 return s[m.start():m.end()+n.start()] if n else s[m.start():]
with (D/'agent-08-receipts.jsonl').open('w') as out:
 for x in shard:
  id=x['id'];old=(D/'before'/f'{id}.md').read_text();cur=(I/f'{id}.md').read_text()
  row={'id':id,'decision':'repair','evidence':evidence[id], 'sources_actually_read':actual_sources.get(id,[]),'library_suppliers_examined':'Relevant cited suppliers and affected consumer uses described in agent-08-report.md','files_changed':[f'items/{id}.md'],'before_sha256':sha(old),'current_sha256':sha(cur),'statement_changed':sec(old)!=sec(cur),'before_section':sec(old),'current_section':sec(cur),'impact_file':f'research/ap-131-sol-repair/agent-08-impact-{id}.jsonl','unresolved':(['Current HB-to-discontinuous-additive implication status and exact Howard–Rubin catalogue wording were not verified; the revised item makes no current-status assertion.'] if id=='rem-hahn-banach-discontinuous-additive-open' else [])}
  out.write(json.dumps(row,ensure_ascii=False)+'\n')
 id='lem-countable-union-of-compact-content-zero-sets-is-null-in-zf';cur=(I/f'{id}.md').read_text()
 out.write(json.dumps({'id':id,'decision':'new_item','evidence':'ZF canonical rational-cover lemma supplies Lebesgue criterion forward union without AC_omega. Full proof and contract published; root registered its page and plan home.','sources_actually_read':['John K. Hunter, An Introduction to Real Analysis, Chapter 11, §11.8 pp. 238–239 (PDF read; criterion stated without proof)'],'library_suppliers_examined':['def-measure-zero-and-content-zero','def-rationals','lem-of-q-dense','thm-n-cross-n-countable','thm-well-ordering-principle'],'files_changed':[f'items/{id}.md'],'before_sha256':None,'current_sha256':sha(cur),'statement_changed':True,'impact_file':f'research/ap-131-sol-repair/agent-08-impact-{id}.jsonl','unresolved':[]},ensure_ascii=False)+'\n')
 bull_new={
  'lem-replicating-a-vertex-of-a-perfect-graph-preserves-perfection':'Induction on induced subgraphs; if replication does not enlarge the clique number, recolor after deleting the original color class except its replicated vertex.',
  'thm-lovasz-perfect-graph-criterion-and-complement-invariance':'Gasparian incidence-matrix proof of the numerical perfection criterion; complement invariance follows by swapping clique and stable-set numbers.',
  'thm-substituting-perfect-graphs-preserves-perfection':'Replace the inserted perfect graph by a clique of true twins of size its chromatic number; transfer an optimal coloring to every induced substituted subgraph.'}
 for id,ev in bull_new.items():
  cur=(I/f'{id}.md').read_text()
  out.write(json.dumps({'id':id,'decision':'new_item','evidence':ev,'sources_actually_read':['Reinhard Diestel, Graph Theory, 5th ed., Chapter 5, pp. 142–145 and Exercise 51 p. 152 (full PDF proof passages read)','Maria Chudnovsky and Shmuel Safra, The Erdős–Hajnal conjecture for bull-free graphs, Theorems 1.5, 4.3, 5.1 (PDF passages read)'],'library_suppliers_examined':['def-perfect-graph-for-the-bull-route','def-clique-stable-set-and-numbers','def-proper-vertex-colouring-and-chromatic-number','def-substitution-of-a-graph-for-a-vertex'],'files_changed':[f'items/{id}.md'],'before_sha256':None,'current_sha256':sha(cur),'statement_changed':True,'impact_file':f'research/ap-131-sol-repair/agent-08-impact-{id}.jsonl','unresolved':[]},ensure_ascii=False)+'\n')

outside=[
('cor-distance-to-subspace-by-annihilating-functionals','Bidual norm equality now requires AC','Added AC to corollary and Given so the cited bidual supplier applies.'),
('cor-distance-to-annihilator-is-restriction-norm','Dual-quotient restriction isometry now requires AC','Added AC to corollary and Given.'),
('cor-norm-recovered-from-the-dual-unit-ball','Norming functional now requires AC','Added AC to corollary and Given.'),
('cor-dual-separates-points','Norming functional now requires AC','Added AC to corollary and Given.'),
('cor-finite-dimensional-subspaces-are-complemented','Coordinate functional extensions use HB under AC','Added AC to corollary and Given; finite-dimensional basis selection itself remains finite.'),
('cor-dense-range-iff-transpose-is-injective','Converse uses primal closure identity under AC','Added AC to corollary and Given.'),
('cor-density-characterised-by-annihilator-zero','Converse invokes AC-qualified annihilator closure','Added AC to corollary and Given.'),
('thm-closed-hyperplanes-are-kernels-of-nonzero-functionals','Original proof appealed to AC-qualified geometric HB although codimension one permits a direct proof','Replaced HB dependency and proof by explicit coefficient functional bounded by distance from closed hyperplane; Statement unchanged.'),
('thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one','Proof borrowed a scalar inequality from the now AC-qualified Lp metric theorem','Proved scalar inequality directly from normalized sum and real powers; removed AC-dependent edge; Statement unchanged.'),
('def-l-p-space-as-a-quotient-by-null-functions','Definition orientation referred to metric structure supplied by now AC-qualified theorem','Clarified that the later metric theorem applies under its own stated choice hypothesis; quotient definition unchanged.'),
('cor-separable-reflexive-space-has-separable-dual','Fact F2 attributed isometry to a definition whose auxiliary isometry assertion now carries AC','Added existing HB-relative bidual isometry as exact supplier; retains weaker AC_omega+HB Statement.'),
('def-split-banach-submanifold','Remarks claimed automatic finite-dimensional complementation without the new AC premise','Qualified only the automatic-case prose under AC; split-submanifold definition unchanged.'),
('rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel','Remarks claimed automatic finite-dimensional complementation without the new AC premise','Qualified only the automatic-case prose under AC; core regular-value warning unchanged.'),
('rem-riemann-integral-choice-ledger','The ledger attributed AC_omega to the Lebesgue criterion forward implication after the new ZF proof removed that cost','Replaced the stale premise table and explanation with the exact ZF proof ledger; downstream prose uses were checked and repaired.'),
('def-darboux-integral','Remarks attributed AC_omega to the Lebesgue criterion through a stale ledger citation','Changed only the choice-cost remark to identify the ZF proof.'),
('fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set','Remarks said only the converse Lebesgue criterion was choice-free','Changed only the orientation remark; false statement and counterexample are unchanged.'),
('rem-integral-conventions-and-scope','Scope note attributed AC_omega to the Lebesgue criterion forward implication','Changed only the page choice-cost prose to cite the ZF canonical-cover lemma.'),
('cor-riemann-integrability-and-lebesgue-null-discontinuity-sets','Statement explanatory paragraph attributed AC_omega to the one-dimensional criterion instead of only measure translation','Corrected the exact choice-cost paragraph while retaining the AC_omega premise and both Lebesgue-measure equivalences.')]
with (D/'agent-08-outside-receipts.jsonl').open('w') as out:
 for id,affected,minimal in outside:
  bp=D/'before'/f'agent-08-outside-{id}.md';p=I/f'{id}.md';old=bp.read_text();cur=p.read_text()
  dif=''.join(difflib.unified_diff(old.splitlines(True),cur.splitlines(True),fromfile='before/'+id,tofile='items/'+id))
  out.write(json.dumps({'id':id,'decision':'repair','affected_use':affected,'invalidated_claim':affected,'minimality':minimal,'before_sha256':sha(old),'current_sha256':sha(cur),'statement_changed':sec(old)!=sec(cur),'before_section':sec(old),'current_section':sec(cur),'exact_diff':dif,'snapshot_file':str(bp),'impact_file':(f'research/ap-131-sol-repair/agent-08-impact-{id}.jsonl' if (D/f'agent-08-impact-{id}.jsonl').exists() else None)},ensure_ascii=False)+'\n')
