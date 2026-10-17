from pathlib import Path
import json,re,shutil
R='numerical-optimization-dynamics-2026-10-16';b=Path('research')/(R+'-owner-reader1-26-qr-proof-proposal');roots={'thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number','thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts'}
texts={p.stem:p.read_text() for p in Path('items').glob('*.md')}
def deps(text):
 fm=text.split('---',2)[1] if text.startswith('---') else '';lines=fm.splitlines();value=''
 for i,line in enumerate(lines):
  if line.startswith('deps:'):
   value=line.split(':',1)[1].strip()
   if not value:
    for z in lines[i+1:]:
     if re.match(r'^\s+- ',z):value+=' '+z.strip()[2:]
     else:break
   break
 return set(re.findall(r'\b(?:alg|thm|lem|prop|def|cor|ex|cex|rem|fs)-[a-z0-9-]+',value))
graph={id:deps(s) for id,s in texts.items()};closure=set(roots);changed=True
while changed:
 new={id for id,ds in graph.items() if ds&closure};old=len(closure);closure|=new;changed=len(closure)>old
why={
'alg-gauss-newton-qr-svd-step-with-rank-safeguard':'F2 and Proof2.1 use only the unchanged exact full-rank minimizer characterization; exact supplied QR is separated from rounded reports and its full-rank branch is explicit.',
'alg-pade-denominator-solve-by-householder-qr':'The exact construction is a dependency/convention; its algorithm already stores a zero-column identity marker and skips its replay. It makes no standard dense operation-count assertion and budgets each actual rounded primitive.',
'ex-full-rank-least-squares-normal-equations-versus-qr':'F1/Proof3.1 use unchanged exact full-rank least squares; the explicit binary64 Gram-rounding example and conditional computed guarantee are unaffected.',
'ex-givens-qr-on-a-sparse-matrix':'L2/Verification3.1 use unchanged exact QR construction. Its two nonzero annihilating pairs are explicitly computed; identity skips neither change its R nor Q.',
'ex-householder-qr-factorisation-by-hand':'L1/Verification2.1 use existence/construction only; its supplied nonzero reflector and explicit2x2 product are unchanged.',
'ex-ill-conditioned-design-stability-versus-forward-error':'F1/Proof1.1 use unique minimization for a nonsingular diagonal design. Its full-rank hypothesis and data/solution sensitivity arithmetic remain unchanged.',
'ex-reduced-qr-least-squares-versus-normal-equations':'L1/Verification2.1 use the same exact minimizer/condition-number Statement for its given thin factorization; the repaired completion explicitly preserves that very factorization.',
 'thm-computed-full-rank-least-squares-backward-stability':'F3/Proof3.1 apply the supplier to Atilde=Qhat(Rhat+DeltaR), only under explicit nonsingularity. This supplies full column rank; the arbitrary given orthonormal Qhat is precisely covered by the repaired completion.',
 'thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block':'L2 supports unitary elimination/triangular structure, including its zero trailing residuals after rank r; the new identity branch closes rather than changes that case. Greedy selection/rank arguments are not revised.',
 'thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model':'L1/Proof2.1 use only embedded orthogonal products and the separately assumed local perturbations. Identity steps are orthogonal and permit local error0; no operation-count or automatic local stability guarantee is imported.',
 'thm-scaled-householder-qr-backward-stability':'F2/Proof2.1 use exact product/triangular-block conventions. Zero markers from its own algorithm represent identity, compatible with the repaired construction; its quantitative bounds still come from F1.',
 'alg-revised-simplex-qr-basis-recompute-and-audit':'Indirect via computed LS. Definition Step2 already explicitly saves/skips an identity marker for x=0; actual basis validity is separately certified. Residual status does not require exact least-squares uniqueness of the perturbed factor.',
 'thm-revised-simplex-qr-basis-residual-status-sound':'Indirect via computed LS and its algorithm. F2/Proof2.1 explicitly require the perturbation equations only, not nonsingularity of the perturbed R. Square orthogonal representatives and independent residual/validity witnesses remain unchanged.'}
rows=[]
for id,reason in why.items():
 path=Path('items')/(id+'.md');(b/'context/items').mkdir(parents=True,exist_ok=True);shutil.copyfile(path,b/'context/items'/path.name)
 rows.append({'consumer':id,'kind':'direct' if graph[id]&roots else 'focused indirect native26','suppliers':sorted(graph[id]&roots),'status':'checked-unaffected','source_change_required':False,'actual_reason':reason,'inspection':'Full current item body inspected for this focused repair.'})
for root in roots:
 if graph[root]&roots:rows.append({'consumer':root,'kind':'supplier also direct consumer','suppliers':sorted(graph[root]&roots),'status':'repaired-before-consumers','actual_reason':'LS completion/diagonal proof repaired after general QR zero-branch supplier; Statement unchanged.'})
page=Path('library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md');(b/'context/library/linear-algebra').mkdir(parents=True,exist_ok=True);shutil.copyfile(page,b/'context'/page)
(b/'consumer-dispositions.json').write_text(json.dumps({'direct_and_focused_indirect_actual_reviews':rows,'page_context':{'path':str(page),'status':'checked-unaffected','reason':'Full page read; inventory and summary promise only computational QR, conditional stability and the unchanged least-squares claim; no proof-step or dense-Q formation cost asserted.'},'transitive_metadata_closure':{'ids':sorted(closure-roots),'count':len(closure-roots),'disposition':'Public Statements and Definitions of both suppliers are byte-identical. No changed mathematical interface propagates. This list is dependency-metadata reachability only; full independent readings of these additional descendants are NOT claimed, and no descendant source edit is proposed.'}},indent=2)+'\n')
context=['thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries','def-full-reduced-and-column-pivoted-computational-qr-factorisations','thm-qr-factorisation-over-r-or-c','thm-least-squares-solutions-and-normal-equation','thm-normal-equations-square-the-spectral-condition-number','def-condition-number-of-a-nonsingular-linear-system','thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison','thm-dimension-of-a-linear-subspace','thm-gram-schmidt-orthonormalisation','thm-finite-dimensional-orthogonal-decomposition','cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases','def-householder-reflector','def-real-and-complex-givens-transformations']
for id in context:shutil.copyfile('items/'+id+'.md',b/'context/items'/(id+'.md'))
print({'full_consumer_reads':len(why),'metadata_only_descendants':len(closure-roots)})
