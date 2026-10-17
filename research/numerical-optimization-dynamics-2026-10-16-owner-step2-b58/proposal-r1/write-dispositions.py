from pathlib import Path
import re,json,hashlib
B=Path(__file__).resolve().parent
r={
'alg-ctrl1-finite-budget-transcription-solver-dispatch':'Dispatch selects a finite solver budget and propagates its finite-prefix status; no successful line-search or local-rate conclusion is inferred from the Newton definition. The explicit search cause refines the existing failure payload.',
'alg-full-memory-bfgs-with-curvature-safeguards':'Before search, its direction check or negative-gradient reset establishes strict descent. Its accepted update still uses the same checked Wolfe conditions; the broader arbitrary-direction input imposes no new duty.',
'alg-lbfgs-two-loop-with-curvature-filter':'The inverse-action direction is checked and reset before the unchanged checked search. Stored-pair filtering and resets do not depend on Newton or the added local-radius hypotheses.',
'alg-nonlinear-conjugate-gradient-methods':'Its descent safeguard precedes the bounded search and it propagates failure. The exact-SPD-quadratic mode is separate; changing the search input to arbitrary p preserves both modes.',
'cex-raw-prplus-loses-descent-and-safeguard-restarts':'Its explicit accepted unit step satisfies the unchanged strong Wolfe inequalities. The subsequent raw ascent and restart calculations depend on those inequalities, not any search success theorem.',
'cor-uniform-descent-angle-implies-gradient-vanishing':'Uses the unchanged Zoutendijk finite sum and a fixed positive cosine bound; defining the ray derivative on an open set at zero justifies the already-used initial directional derivative.',
'ex-bfgs-powell-damping-after-negative-curvature':'The negative-curvature step is explicitly outside accepted Wolfe BFGS. Damping arithmetic and skipped-pair comparison do not import search termination or Newton forcing.',
'ex-bfgs-secant-on-a-strongly-convex-quadratic':'Direct quadratic calculations verify its chosen step and secant equation. The Wolfe inequalities and BFGS update are unchanged.',
'ex-lbfgs-memory-dependent-cost':'Its stored-pair/two-loop arithmetic count depends on the unchanged L-BFGS recurrence; no changed Newton hypothesis or initial ray endpoint is used.',
'ex-rosenbrock-fr-prplus-trace':'Its directly calculated short Wolfe trial and FR/PR+ trace retain the same inequalities. It does not require a budgeted search to find an arbitrary preselected step.',
'ex-spd-quadratic-nonlinear-cg-matches-linear-cg':'Uses the exact-SPD-quadratic mode and explicit positive-curvature formula, independent of bounded search success and local Newton rates.',
'lem-fr-descent-and-direction-growth-bound':'Its recurrence uses the unchanged strong-curvature inequality and c2<1/2; the open derivative parameter domain includes zero, so the ratio and initial directional derivative remain defined.',
'lem-full-memory-bfgs-dennis-more-condition':'Its secant/trace argument uses unchanged positive Wolfe curvature and BFGS updates, not finite-budget success or Newton local-tube assumptions.',
'lem-lbfgs-curvature-bounds-imply-uniform-spectrum':'The stored-pair bounds and inverse-BFGS recursion are unchanged; no search existence or Newton result supplies its spectral estimate.',
'lem-lbfgs-two-loop-equals-stored-updates-and-cost':'Algebraic equivalence and vector-operation count concern the unchanged stored L-BFGS updates; the new finite-search lemmas add no premise to that calculation.',
'lem-safeguarded-pr-plus-uniform-angle':'Its accepted/restarted direction inequalities use the unchanged angle definition and safeguard threshold; strict descent already excludes zero denominators.',
'lem-strong-wolfe-step-exists-on-a-bounded-below-ray':'Assumes an entire feasible descent ray and uses phi prime at zero. The open parameter extension gives this ordinary derivative and leaves its positive-ray IVT inequalities unchanged.',
'lem-wolfe-step-lower-bound-from-the-descent-angle':'Uses the same Wolfe curvature inequality and a Lipschitz gradient on the relevant segment. The gradient inner product at zero is now explicitly an ordinary derivative; all constants persist.',
'lem-wolfe-steps-give-positive-bfgs-curvature':'Uses s=t p, t>0 and the unchanged weak Wolfe curvature bound; its strictly positive yTs proof remains valid for every accepted strong Wolfe step.',
 'thm-ctrl1-local-sqp-kkt-convergence-on-a-transcription':'Its local finite-dimensional KKT map is differentiable with locally Lipschitz derivative on the stated C3 transcription tube and nonsingular KKT derivative. Restrict to a positive-radius closed ball inside the open tube. Positive primal dimension gives positive combined dimension, so the clarified forcing theorem applies.',
 'thm-fem-control-active-set-sqp-finite-budget-certificate':'The local exact active-KKT/SQP branch uses the same positive-dimensional map, invertibility and local regularity. The finite-budget certificate branch does not infer convergence from the Newton algorithm; its certificate checks remain separate.',
 'thm-fletcher-reeves-liminf-gradient-under-strong-wolfe':'Uses the unchanged FR descent/growth bounds and Zoutendijk sum on an infinite successful sequence, not finite-search success. The same c2<1/2 premise remains.',
 'thm-fr-and-raw-prplus-exact-line-search-match-linear-cg':'Works in exact line-search SPD-quadratic mode; its recurrence and exact orthogonality do not use the bounded search or Newton algorithm.',
 'thm-full-memory-bfgs-global-linear-convergence':'Conditional on the successful accepted BFGS sequence and its uniform positive-curvature bounds. The Wolfe tests are unchanged; no unconditional finite-search success is added.',
 'thm-full-memory-bfgs-local-superlinear-convergence':'The local full-unit-step acceptance proof uses both explicit Wolfe inequalities at the first trial and the unchanged Dennis-More condition. The search still tests unit length first and retains those tests.',
 'thm-lbfgs-fixed-memory-linear-convergence':'Uses the successful sequence, uniform stored-pair spectral bounds and unchanged Wolfe decrease. Its fixed-memory rate is not transferred from the Newton theorem or a budget-only guarantee.',
 'thm-safeguarded-pr-plus-gradient-norms-converge':'Its infinite successful sequence has the uniform-angle safeguard, so the unchanged angle/Zoutendijk corollary applies; no finite-budget success claim occurs.',
 'thm-sqp-exact-hessian-local-quadratic-convergence':'The active KKT variable dimension is n plus equality/active multipliers with n>=1 from the constrained-program definition. Its open C3 local model and nonsingular KKT derivative give the positive closed-ball Lipschitz setting. It uses general F, not the new optimization-specific Hessian identification.',
 'thm-sqp-reduced-bfgs-superlinear-under-dm':'Uses the positive-dimensional active KKT residual map and its local Lipschitz/invertibility hypotheses; a small positive closed ball lies in the open tube. The residual ratios are nonnegative and the eventual forcing bound is below one. It invokes the general F forcing result, not F=gradient f.',
 'thm-zoutendijk-summability-for-wolfe-steps':'Its gradient-Lipschitz lower-step and Armijo telescoping proof uses the unchanged Wolfe inequalities and descent angle. The open ray parameter set now includes zero without altering the argument.'}
proposal=json.loads((B/'proposal.json').read_text());roots={Path(x['path']).stem for x in proposal['files'] if x['path'].startswith('items/') and x['exists_before']}
g={}
for p in Path('items').glob('*.md'):
 h=p.read_text().split('---',2)[1];m=re.search(r'^deps:\s*\n((?:[ \t]+.*\n)*)',h,re.M)
 if m:ds=re.findall(r'^\s+-\s+(\S+)',m[1],re.M)
 else:
  m=re.search(r'^deps:\s*\[(.*?)\]',h,re.M);ds=[x.strip() for x in m[1].split(',')] if m else []
 g[p.stem]=ds
c=set(roots)
while True:
 n=c|{k for k,v in g.items() if set(v)&c}
 if n==c:break
 c=n
assert set(r)==c-roots,(set(r)^(c-roots))
rows=[]
for id in sorted(c):
 p=Path('items/'+id+'.md');s=p.read_bytes()
 rows.append({'consumer':id,'path':str(p),'sha256':hashlib.sha256(s).hexdigest(),'direct_affected_suppliers':[d for d in g[id] if d in c],'status':'proposed_focused_repair' if id in roots else 'verified_unchanged','inspection':'Full current Statement/Definition and complete Proof/Verification read; focused actual interface check.','disposition':r.get(id,'Exact full-before/proposed focused repair in proposal.json; preserve rich calculation and scope while discharging the recorded finding.')})
(B/'consumer-dispositions.json').write_text(json.dumps({'scope':'Same-owner direct and indirect item closure from all ten existing proposed item changes; 40 current items total. New lemmas have no current canonical consumers.','closure_count':len(c),'unchanged_verified_count':len(r),'proposed_existing_repairs_count':len(roots),'items':rows,'pages':[{'path':'library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonconvex-line-search-and-inexact-newton-methods.md','disposition':'Full read; proposed placement adds the two proof results without changing the conditional convergence scope.'},{'path':'library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonconvex-line-search-and-inexact-newton-methods-examples.md','disposition':'Full read; summary still describes explicit Newton step, indefinite safeguard and tolerance trade-off, and preserves finite-budget caveat. No page change needed.'}],'additional_supplier_context':['items/def-inequality-constrained-program-and-kkt-geometry.md','items/thm-total-derivative-computes-directional-and-partial-derivatives.md','items/thm-continuous-partial-derivatives-imply-total-differentiability.md','items/thm-symmetry-of-higher-mixed-partials.md','items/def-hessian-and-euclidean-critical-point.md','items/def-krylov-subspace-of-a-matrix-and-start-vector.md','items/lem-vector-newton-correction-error-under-lipschitz-jacobian.md','items/lem-newton-contraction-near-an-invertible-derivative.md'],'unresolved_math_gaps':[]},indent=2)+'\n')
print('40 item dispositions: 30 unchanged, 10 focused proposed repairs')
