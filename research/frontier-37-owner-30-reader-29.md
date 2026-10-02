# Step 5a Reader Report — Batch 29

Run: `frontier-37-owner-30`  
Role: reader  
Batch: `29`

## Opened inventory

Pages:

- A page: `library/complex-analysis/hormander-estimates-and-the-levi-problem.md`
- B page: `library/complex-analysis/hormander-estimates-and-the-levi-problem-examples.md`

All 25 manifest-listed item files were opened in their current form. The 19 A-page items were `lem-smooth-regularization-of-psh-exhaustion`, `def-meromorphic-function-in-several-complex-variables`, `def-weighted-l2-spaces-dbar-forms`, `lem-maximal-distributional-dbar-operator-is-closed`, `thm-basic-bochner-kodaira-morrey-estimate-cn`, `lem-hilbert-complex-solver-from-coercive-estimate`, `lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains`, `lem-hormander-solver-on-smooth-pseudoconvex-domain`, `thm-pseudoconvex-domain-smooth-psh-exhaustion`, `thm-hormander-l2-dbar-existence`, `cor-dolbeault-vanishing-pseudoconvex-domain`, `lem-local-boundary-separator-for-strongly-pseudoconvex-domain`, `lem-boundary-peak-function-by-dbar-correction`, `lem-oka-weil-on-domain-of-holomorphy`, `thm-levi-problem`, `thm-behnke-stein-increasing-union`, `thm-oka-weil-approximation-pseudoconvex-domain`, `lem-locally-finite-smooth-partition-of-unity-on-domain`, and `cor-first-cousin-problem-pseudoconvex-domain`.

The six B-page items were `ex-hormander-estimate-with-gaussian-weight`, `ex-levi-form-of-the-unit-ball`, `ex-explicit-dbar-solution-with-l2-estimate`, `ex-strictly-psh-exhaustion-of-a-convex-domain`, `ex-pseudoconvexity-of-a-hartogs-domain`, and `ex-first-cousin-gluing-on-a-pseudoconvex-domain`. All assigned items were draft items.

For dependency statements, I opened the current in-batch suppliers and the cited statement sections for `thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity`, `thm-decreasing-limits-of-plurisubharmonic-functions`, `thm-cartan-thullen-theorem`, `thm-domains-of-holomorphy-are-hartogs-pseudoconvex`, `def-levi-pseudoconvex-domain`, `def-levi-form-and-strict-plurisubharmonicity`, `thm-stability-operations-for-plurisubharmonic-functions`, `cor-regular-values-have-null-complement-and-are-dense`, `def-regular-and-critical-points-and-values`, `thm-cauchy-riemann-characterization-in-several-complex-variables`, `lem-smooth-bump-between-concentric-euclidean-balls`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `def-polar-surface-measure-on-the-unit-sphere`, `thm-disc-area-is-pi-r-squared`, `cor-one-dimensional-change-of-variables-with-absolute-derivative`, `cor-real-gamma-positive-integer-values`, `def-real-gamma-function-by-the-euler-integral`, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables`, and `thm-power-series-define-holomorphic-functions-in-several-variables`. I also opened `cor-regular-level-set-local-graph-theorem` while checking the regular-level argument.

## Repairs made

- `items/lem-oka-weil-on-domain-of-holomorphy.md`: replaced the expanded graph-lift proof with the directly applicable Oka–Weil theorem and its complete cited proof. The former proof used `-log(r-|w|^2)` on `|w|<r`, where the logarithm's argument is not positive throughout, and its cutoff construction did not establish the claimed lower bound for `|g_1|` on the derivative support. Boas, Theorem 21, §3.3.2, printed p. 79 and proof pp. 79–80, states exactly the needed domain-of-holomorphy and compact `O(D)`-convex approximation theorem. I opened the full cited passage in Harold P. Boas's author-hosted [lecture notes](https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf).
- `items/lem-boundary-peak-function-by-dbar-correction.md`: restricted `Omega_1` in step 6.1 to points where `c+v` is nonzero. The previous definition used `1/(c+v)` on all of `D''\supp(beta)`, although `c` was bounded only using `sup_{Dbar}|v|`; this establishes nonvanishing only on the part needed over `Dbar`. The reciprocal is now defined on an open set where its denominator is nonzero, and the real-part bound is used only on `D`.
- `items/def-meromorphic-function-in-several-complex-variables.md`: clarified that a representative with domain `D` can have removable omissions and is holomorphic on `U` precisely when it extends; the old sentence conflated this with the special representation whose domain is `U`. Also repaired the pole-set remark: the extension locus is open, so its complement (the pole set) is closed; containment in `U\\D` then gives empty interior.
- `items/lem-locally-finite-smooth-partition-of-unity-on-domain.md`: separated the `Omega=C^n` case, where the defined boundary-distance function is constantly `+infinity`, from the finite-distance Lipschitz proof for a nonempty complement.
- `items/ex-pseudoconvexity-of-a-hartogs-domain.md`: handled `t=0` separately in the star-shapedness proof; the strict estimate `t|w| < t e^{-|z|^2}` is only used for `t>0`.
- `items/thm-levi-problem.md`: changed the path exit bound from `t_1<1` to `t_1<=1`; the first-exit time may be the path endpoint.

Updated the affected entries in `research/frontier-37-owner-30-batch-29.proof-contracts.json`. No changed item had a `verification.judge` record to remove.

## Checks

Reflow and precheck were run for each changed item. `lem-boundary-peak-function-by-dbar-correction`, `lem-oka-weil-on-domain-of-holomorphy`, `lem-locally-finite-smooth-partition-of-unity-on-domain`, `ex-pseudoconvexity-of-a-hartogs-domain`, and `thm-levi-problem` all passed precheck after their final edits. `def-meromorphic-function-in-several-complex-variables` is definition-only; reflow reported unchanged and precheck reported 0 proof-bearing files checked, 0 failing. A mechanical proof-contract check of the six changed items reported 0 errors and 0 warnings (6/6 checked).

## Findings not repaired

The B-page prose is not editable under this dispatch. Its first paragraph names the Hartogs domain `{(z,w): |z|^2 e^{2|z|^2}<1}`; the assigned example instead defines `Omega={(z,w): |w|<e^{-|z|^2}}` and supplies an exhaustion involving `|w|^2e^{2|z|^2}`. The page summary therefore describes the wrong domain. This is the sole finding in the JSON artifact.

## Page verdicts

- `hormander-estimates-and-the-levi-problem` (A): no page-prose defect found.
- `hormander-estimates-and-the-levi-problem-examples` (B): one nonfatal false claim in the Hartogs-domain summary, reported above; not edited because B-page prose is outside the authorized write scope.

## Blocker and coverage limit

The final status recomputation at 2026-10-01 11:49 UTC showed no worker running. The run reports 26/30 `5a-read` and `5a-split` artifacts, with batch 29 still listed as missing; `5a-refute` and `5a-collect` report 22/30 and also list 29 as missing, despite the requested report and findings JSON now existing on disk. The returned reader artifact may be needed for the engine to register batch 29; no stage transition was taken. This is an outstanding run-level workflow blocker, not a mathematical repair blocker.

I read every assigned page and item, plus the cited statement sections listed above. I did not independently read every transitive published dependency proof body; routine supplier statements were checked from the exact clauses in the current batch proof-contract bundle. For the Richberg input, I fetched the author-hosted PDF and inspected the complete theorem and proof: Demailly, *Complex Analytic and Differential Geometry*, Ch. I §5.E, Theorem 5.21, printed pp. 43–44. It states that if $u\in\operatorname{Psh}(X)$ is continuous and strictly plurisubharmonic on an open $\Omega\subset X$ with $H_u\ge\gamma$ for a continuous positive Hermitian form $\gamma$, then for every continuous $\lambda>0$ on $\Omega$ there is $\widetilde u\in C^0(X)\cap C^\infty(\Omega)$ with $u\le\widetilde u\le u+\lambda$ on $\Omega$, $H_{\widetilde u}\ge(1-\lambda)\gamma$, and strict plurisubharmonicity on $\Omega$; when $u$ is strictly plurisubharmonic on all of $X$, $\widetilde u$ can be chosen strictly plurisubharmonic on all of $X$. The proof uses local convolution, positive quadratic corrections, and regularized maxima. [Demailly's author-hosted PDF](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf).
