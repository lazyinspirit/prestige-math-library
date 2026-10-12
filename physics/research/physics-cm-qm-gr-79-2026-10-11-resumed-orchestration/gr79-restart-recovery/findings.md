# Native 79 restart geometry — cycle 1, cap 2

Research-only replacement for `lem-gr-spacelike-restart-hypersurface`. No active author, production carrier, production metadata, readiness, import snapshot, engine state or gate was changed. The parent remains sole owning reviewer for this supplier and its consumer cone. `candidate.md` is a proposed complete carrier, not an acceptance certificate.

## Raw freeze and current guard

`archive/` contains 30 raw source/context files. `frozen-context.json` records exact paths, raw SHA-256 hashes, the original cycle/cap and git HEAD `753c7941ab3974e7827f151085d6547469b90b66`. `currentguard.json` binds the candidate hash and compares current source bytes and archived source bytes against every frozen hash. At guard generation all 30 archives matched and all 30 current sources matched. This reports the observed snapshot, not a lock on concurrent writers; the parent must recheck before integration.

## Confirmed defects and exact repairs

1. **An arbitrary continuous positive width is not Lipschitz or smooth.** Multiplying a positive function with a square-root cusp by any nonzero constant preserves its non-Lipschitz cusp. Taking a minimum with a constant does not fix it if the cusp is below the cap. A separate assertion that a single global epsilon keeps every noncompact base point inside its flow interval is also unsupported by an arbitrary distance ceiling. The candidate first proves a uniform extended flow bound around the compact ambient closure A of S, then builds a smooth positive width from a countable locally finite partition with explicit coefficient constraints. Each compact-support derivative norm M_i is finite, and coefficients satisfy a_i M_i <= 2^(-i)/(8 sqrt(2)). This proves the actual global derivative estimate while a second bound keeps the width under the flow, open-neighbourhood and arbitrary positive ceiling constraints.

2. **The metric comparison was used backwards.** From q_t <= C q0 one cannot upper-bound q0-length using a causal q_t-length bound. The candidate proves the needed lower bound q_t >= q0/2, as well as the upper bound, using smooth dependence on a compact neighbourhood of the extended radial level. Causality now gives |s'|_q0 <= sqrt(2)|t'|. It also proves q0 >= c h on the base tangent spaces, so finite base length produces ambient Cauchy tails and endpoint limits in compact A. The whole S remains noncompact and need not be complete intrinsically.

3. **The lower signed face needs its correct monotonic direction.** For a future avoiding curve, t decreases and its past limit H is a supremum. Inside the tube r=t+delta(s)>0. The quantitative derivative estimate makes r strictly decrease toward the future. Hence its past-end limit cannot be zero: it is at least its positive value at any fixed later parameter. This excludes H=-delta(e) without reversing inequalities or inventing a second lower-face endpoint. If the base endpoint leaves S, the width tends to zero, H=0 and the curve converges to e in the ambient closure. Such e lies on partial W, is chronologically before q and after Sigma, and the exposed-point containment forces e in U. Thus every avoiding curve has an endpoint in U union N, contradicting inextendibility. A maximal U-portion then supplies the exact once-only Cauchy visit.

4. **The gradient/time orientation was wrong.** For tau_q(r) equal to proper time from r to q, Gauss' differential gives grad R=-P(q,r)/R, a future unit vector on the past radial cone. X=grad R/g(grad R,grad R)=-grad R is a past unit vector, with dR(X)=1. The candidate derives these signs and the unit affine radial flow rather than quoting the former incorrect assertion that the gradient is past directed and its increasing-t flow goes toward q. The pulled-back metric is exactly -dt^2+q_t.

5. **Inclusive clause (c)3 is false at a boundary base.** Take s in S intersect partial U, which is nonempty by (b). Every sufficiently small positive-t flow point y lies in U by (a). The radial segment including s cannot lie in U, because s is on its boundary. The candidate states and proves the punctured radial interior, together with the stronger inclusive assertion when s belongs to U. For negative t_y and y in U, past convexity from Sigma to y actually forces the base s and the entire segment into U. The map-equality consequence is conditional on the local uniqueness isometry Theta agreeing with the smooth extension Phi on S; its first jet then agrees on the normal, so uniqueness of affine geodesics gives Theta=varphi on N intersect U. This removes an undeclared dependence on the consuming no-corresponding-boundary theorem.

## Preserved interfaces and exact consuming uses

- (a) and (b) retain the maximum, all boundary-location claims and the entire connected level component S, including its nonempty boundary intersection. The regular level is used only where tau0>0; the candidate does not claim smooth time separation on unrelated zero/null regions.
- (c)'s tube is smooth and positive on the whole S, lies in W, has the exact flow parameter and is an open diffeomorphic variable-width neighbourhood. No uniform lower width or compact-S hypothesis is introduced.
- (c)1 retains finite length in the actual induced q0 metric, the time graph and at most one visit to S.
- (c)2 retains the exact no-U-avoiding assertion and once-only Sigma Cauchy property for U union N.
- (c)3 is repaired to the radial **interior** statement actually consumed in `lem-gr-no-corresponding-boundary-points` step 2.2, which already says “excluding s”. The base first jet is supplied by the smooth extension, not by falsely putting a boundary point in U.
- New quantitative (c)4 supplies the exact whole-surface re-shrink used by that consumer step 2.1: perform the partition construction inside its prescribed open local-uniqueness neighbourhood O and under its previous positive width ceiling. A generic pointwise smaller continuous minimum is insufficient. Any smaller smooth positive width with the explicit derivative bound retains the endpoint proof; arbitrary narrower tubes with unbounded derivatives are not certified.

The parent should replace that consumer's step 2.1 use of an arbitrary scaled continuous minimum with clause (c)4 and update L6's generic “Lipschitz-small” shorthand to the actual quantitative admissibility conditions. Its current radial-geodesic comparison already has the right excluded-base form. These are consumer findings only; this worker did not integrate them.

## Prerequisite disposition

The missing geometry is supplied locally in the candidate: compact extended radial-level control, a smooth admissible width with a proved derivative bound, and the correct endpoint analysis. No new unproved fallback, global smoothing theorem, complete induced S metric or compact S is assumed. The relevant published coordinate-refinement, locally finite shrinking and smooth partition carriers were read directly. Their IDs and the absolute-continuous fundamental theorem already occur in `physics/research/math-imports.json`; no import was changed. Added purely mathematical dependency roles identify the suppliers actually used.

The proof still consumes the actual global time-separation/maximizer, normal-geometry, subdevelopment-convexity and corresponding-extension suppliers. This focused repair is not an audit or acceptance of their entire dependency closures. No external full text was newly retrieved/read; external references retain the frozen carrier's provenance. Any independent defect in those suppliers remains a parent-owned prerequisite finding. The restart proof itself requires no additional M0 coupled existence assertion: local uniqueness is used only in the separately stated conditional map comparison, not assumed to construct the tube.

## Actual local checks

After adopting the valid canonical phase proposal, its reordering and reference renumbering, and correcting the frozen source's two multiline display formulas, all final explicit checks passed:

- `node tools/tsx-run.mjs tools/precheck.mts physics/research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/gr79-restart-recovery/candidate.md --json`: exit 0; one file and one proof checked, zero failures. Receipt: `precheck-final.json`.
- `node tools/rendercheck.mjs physics/research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/gr79-restart-recovery/candidate.md --json`: exit 0; one file checked, zero errors and warnings. Receipt: `render-final.json`.
- `node tools/proof-layout.mjs physics/research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/gr79-restart-recovery/candidate.md`: exit 0; one item, 10 steps, zero defects. Receipt: `proof-layout-final.txt`.

Pending candidate verification metadata was retained. These are actual local format and layout checks, not an independent audit, acceptance stamp, readiness change or gate attempt.
