# Batch 75 — Mirror descent and adaptive regularization

Run: `machine-learning-all-101-2026-10-19` · role: beta · batch: 75 · pair: `mirror-descent-and-adaptive-regularization`.

## Scope, plan comparison, and inventory

- Read the canonical repository instructions, `SCHEMA.md`, `WORKFLOW.md`, the beta scaffold brief, the exact batch task and dependency-order task, the complete ML-67 section, the current owner directions, the ML-67 rows of `plan-spec.json`, the current batch-75 scaffold manifest, and `research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json`.
- The ML-67 design and matching `plan-spec.json` description agree on A/B identities, title, order 2837, category, direct page prerequisites, interfaces, examples, and source locators. The direct page prerequisites are `convex-and-semicontinuous-functions-on-rn` and `hedge-and-online-gradient-descent`. ML-65 is a transitive prerequisite through the Hedge/OGD page and also supplies protocol/regret items used directly below; no extra page edge is added.
- The current published-supplier reconciliation at `research/plan-machine-learning-track.md` L52–71 lists existing AdaGrad interfaces for ML-66–67. The actual published `alg-diagonal-adagrad-online-regret` and `thm-diagonal-adagrad-regret-bound` were inspected. They require finite coordinate diameters and `epsilon > 0`, use `A_t = diag(s_{t,j})` with `s_{t,j}=sqrt(epsilon^2+sum_{k<=t}g_{k,j}^2)`, and prove a regret bound for that regularized diagonal procedure. ML-67 instead requests the epsilon-free Gram-matrix update, an optional full-matrix scale, a Moore–Penrose update, and a singular-metric example, while forbidding a rate unless its optimizer argument is completed. These are different interfaces. This batch authors the assigned update-only variant and does not depend on or change the published procedure or theorem.
- The initial scaffold had empty inventories. The four proposed interfaces and three required examples were inventoried before carrier authoring. Mathematical review then added four local suppliers (the Bregman identity, Bregman nonnegativity, negative-entropy geometry, and the finite-dimensional PSD matrix-root result); the manifest was recomputed, and the final algorithm consumers cite these suppliers. The inventory remains within the page cap.

| Item | Page | Level | Principal in-run suppliers |
|---|---|---:|---|
| `def-mirror-map-and-bregman-divergence` | A | 0 | none |
| `lem-psd-matrix-has-unique-psd-square-root` | A | 0 | real spectral theorem, scalar square roots |
| `lem-bregman-three-point-identity` | A | 1 | mirror-map definition |
| `lem-bregman-divergence-nonnegative` | A | 1 | mirror-map definition |
| `lem-negative-entropy-geometry-of-simplex` | A | 1 | mirror-map definition |
| `alg-adagrad` | A | 2 | protocol and feedback definitions (batch 73), PSD-root lemma |
| `alg-online-mirror-descent` | A | 2 | mirror-map definition, protocol and feedback definitions (batch 73) |
| `lem-adagrad-projection-exists` | A | 3 | `alg-adagrad` |
| `lem-adagrad-diagonal-scale-coordinatewise` | A | 3 | `alg-adagrad`, matrix product and transpose conventions |
| `lem-mirror-descent-bregman-projection-exists` | A | 3 | `alg-online-mirror-descent`, three-point identity |
| `thm-mirror-descent-regret` | A | 4 | OMD, projection and Bregman support lemmas, regret definition (batch 73) |
| `ex-adagrad-singular-adaptive-metric` | B | 4 | AdaGrad and its two local support lemmas |
| `ex-negative-entropy-mirror-descent-on-simplex` | B | 4 | OMD, entropy geometry, Hedge (batch 74) |
| `ex-euclidean-mirror-descent-is-projected-ogd` | B | 4 | OMD, projection, projected OGD (batch 74) |

Levels use actual item `deps`: 0 without in-run suppliers, otherwise one plus the largest supplier level. Batch 75 remains dependency level 2. Its dispatched scheduling input is `eb472780d9ed71408293c2054e81e740ae221a7286d7632380f58809e240aced`, which recorded batch 74 as the page-level prerequisite. The authored item graph also has direct ML-65 item edges to batch 73; batch 73 is already reached through the required ML-66 page, and the maximum batch level remains 2. A local recomputation over all available run manifests confirms every batch-75 item label; the run-global item and batch gate results and their unrelated blockers are recorded below. The owner-controlled shared dependency artifact was not changed.

## Actual prerequisite inspection

- Read the current published convex/semicontinuity page and the actual bodies of `def-convex-and-strictly-convex-functions-on-euclidean-sets`, `def-convex-subset-of-euclidean-space`, `def-subgradient-and-subdifferential`, `thm-differentiable-convex-functions-and-gradient-inequality`, `thm-heine-borel-rn`, and `thm-euclidean-semicontinuous-extreme-value-theorem`. The strong-convexity, supporting-gradient, compactness, and minimizer hypotheses used by this pair are stated explicitly.
- Read the current ML-65 page and the actual Batch 73 bodies of `def-online-decision-protocol`, `def-adversary-and-feedback-model`, and `def-static-dynamic-and-strongly-adaptive-regret`. Their levels are 0, 1, and 2. The round timing, full-information feedback, and pointwise comparator regret conventions match the use here.
- Read the current ML-66 page and the actual Batch 74 bodies of `alg-hedge` and `alg-online-gradient-descent`. Both are draft in-run suppliers; their update conventions match the entropy and Euclidean examples. Their status alone is not acceptance or current Step-1 readiness.
- Read the relevant current linear-algebra suppliers for the full-matrix AdaGrad definition: the real finite-dimensional spectral theorem, the local PSD matrix-root lemma, the scalar square-root theorem, the Moore–Penrose definition and existence/uniqueness theorem, the SVD interface used by that theorem, and the real matrix transpose convention. The full-matrix scale is only defined; no regret property of it is claimed.
- Published-supplier editorial observations: the read-only published definitions `def-convex-and-strictly-convex-functions-on-euclidean-sets`, `def-convex-subset-of-euclidean-space`, `def-subgradient-and-subdifferential`, and `def-euclidean-inner-product`, and the Statement of `thm-differentiable-convex-functions-and-gradient-inequality`, contain inline item links in their statement/definition sections. They are outside batch 75's write scope and remain untouched; this batch records the exact affected items for owner routing.

## Source reading and disposition

- Elad Hazan, *Introduction to Online Convex Optimization*, second edition, `https://arxiv.org/pdf/1909.05207`: §5.1 regularizers, Bregman divergence, Hessian local norms and diameter; §5.3 Algorithm 14, Theorem 5.6 and its complete displayed proof; §5.4.1–5.4.2 Euclidean and entropy reductions; §5.6 Algorithm 19 and the AdaGrad discussion; Proposition 5.16. The Bregman definitions, OMD update, Euclidean/Hedge reductions, and both AdaGrad update variants support assigned items. Hazan's Theorem 5.6 final bound is **refuted under its stated hypotheses** below. The AdaGrad rate and the full-matrix optimizer proof (left as an exercise) are not claimed. The diagonal update is supplied with a complete local coordinatewise optimization proof.
- Sébastien Bubeck, *Convex Optimization: Algorithms and Complexity*, Berkeley lecture notes, `https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf`: pp. 23–30 (OMD update, entropy/exponential-weights reduction, mirror-descent regret theorem and full proof). This is a separate full lecture-note treatment; its hypotheses and its standard regret expression were checked independently.
- Francesco Orabona, *Introduction to Online Learning* lecture-note posts: OMD I `https://parameterfree.com/2019/09/26/online-mirror-descent-i-bregman-version/`, OMD II `https://parameterfree.com/2019/10/01/online-mirror-descent-ii-regret-and-mirror-version/`, OMD III `https://parameterfree.com/2019/10/03/online-mirror-descent-iii-examples-and-learning-with-expert-advice/`, and AdaGrad `https://parameterfree.com/2019/09/20/adaptive-algorithms-l-bounds-and-adagrad/`. The full OMD one-step proof and variable-step regret derivation were read; OMD III gives the normalized negative-entropy update; the AdaGrad prose derives the coordinatewise adaptive update and explicitly limits that analysis to hyperrectangles/diagonal updates. Its displayed AdaGrad figure could not be fetched from the direct image link, so its update is not relied on as sole evidence; the same diagonal procedure was recovered in Duchi–Hazan–Singer below and the assigned coordinatewise formula is proved locally.
- John Duchi, Elad Hazan, and Yoram Singer, “Adaptive Subgradient Methods for Online Learning and Stochastic Optimization,” JMLR 12 (2011), `https://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf`: §2 and Figure 1/Algorithm 1, PDF pp. 8–10. The diagonal proximal function is `delta I + diag(s_t)` with `s_{t,i}=||g_{1:t,i}||_2`; the source permits `delta >= 0` and its composite update is not the same as the currently published positive-epsilon procedure or the ML-67 pseudoinverse/full-matrix formulation. It is an independent convention check, not a dependency or source for an AdaGrad rate here.
- Retrieval history: the direct Hazan PDF browser open returned an internal error, while the complete author text was successfully inspected through the ar5iv HTML conversion. The prior batch-74 fetch record for the same Hazan PDF is reused. A direct Orabona AdaGrad figure click returned no image; an alternative search found the JMLR full-text PDF and its algorithm/prose was inspected. Both retrieval issues were resolved without dropping a source. `source-fetch-check --stamp` completed: all 8 page/source entries are fetch-verified, with no documented drops.

## Mathematics and plan/source conflict

The prescribed Hazan/Theorem 5.6 constants in the plan are false as stated. The source proof first obtains

`Regret <= B_R(u || x_1)/eta + sum_t B_R(x_t || y_{t+1})/eta`

and bounds each local divergence by `eta^2 ||g_t||_{*,t}^2 / 2`; its last displayed inequality then inserts an unjustified factor `1/2` in front of both the initial and per-round terms. The source's preceding equation does not yield that factor.

A direct admissible counterexample is `K=[0,1]`, `R(x)=x^2/2`, `x_1=0` (the minimizer of R on K), `T=1`, `f_1(x)=-x`, `g_1=-1`, `eta=1`, and comparator `u=1`. The agile update has `y_2=1` and `x_2=1`; the realized pointwise regret is `f_1(0)-f_1(1)=1`. Here `D_R^2=1/2` and the local dual norm is `1`, so the planned bound gives `1/4+1/4=1/2`, a contradiction. The plan's tuned corollary is also false: with `eta=D_R/(G_R sqrt(T))=1/sqrt(2)`, its stated `D_R G_R sqrt(T)=1/sqrt(2)` is still below the regret `1`.

The assigned theorem carrier will contain the sound per-comparator bound proved locally from the same agile update:

`R_T(u) <= (R(u)-R(x_1))/eta + (eta/2) sum_t ||g_t||_{*,z_t}^2`,

where `z_t` is chosen on `[x_t,y_{t+1}]` by `2 B_R(y_{t+1} || x_t)=||x_t-y_{t+1}||_{z_t}^2`. For `D_R^2=max_{x,y in K}(R(x)-R(y))` and `||g_t||_{*,z_t}<=G_R`, the design's step `eta=D_R/(G_R sqrt(T))` yields `3 D_R G_R sqrt(T)/2`, and optimizing the corrected expression yields `sqrt(2) D_R G_R sqrt(T)`. This necessary correction is an explicit conflict with the controlling prose and matching `plan-spec`; `thm-mirror-descent-regret` will be recorded escalated for owner reconciliation, not ready. No source statement is treated as proof acceptance.

## Progress and next action

- The batch-75 page manifest now contains 14 items, including four locally required Bregman/entropy/AdaGrad support lemmas, with direct `deps` and recomputed levels.
- Authoring is complete: all 14 item carriers, both frontmatter-only pages, the proof contracts, source coverage/evidence, dependency inputs, and cross-batch sidecar are present. Scoped content, proof, source, and local dependency checks passed; Step 1 records are current, and the live run/git snapshot is recorded below.
- Run state last observed before authoring: `.autopilot/machine-learning-all-101-2026-10-19` running at `1-scaffold`, with its owner repair hold outside this pair and no workers in flight. HEAD was `50139bdcb6` (`Defer compact construction artifact scans until author drain`). This batch has not edited runtime state, plans, published items, or verdicts.

### Author checkpoint — `def-mirror-map-and-bregman-divergence`

- Claim/conventions: defined a mirror regularizer on compact convex $K$ using a continuous boundary extension and a $C^2$ open convex domain $U$ containing $\operatorname{int}K$; stated strong convexity explicitly; defined oriented Bregman divergence and primal/dual Hessian norms.
- Dependencies: the five manifest suppliers on convex sets/functions, Euclidean inner product, gradient/Hessian notation, and metric topology. No in-run supplier.
- Sources: Hazan §5.1, PDF pp. 93–99; Bubeck §§4–5, PDF pp. 23–25. Full texts were inspected; current item source locators are recorded in frontmatter.
- Decision: draft definition; no acceptance claim. Its continuous boundary convention allows the negative-entropy example while keeping gradients on the relative interior represented in affine coordinates.
- Validation: frontmatter/YAML and render checks passed; proof format is not applicable to this definition.
- Next: prove the Bregman three-point identity and the simplex entropy geometry before writing consumers.

### Author checkpoint — `lem-bregman-three-point-identity`

- Claim/conventions: proved the oriented three-point identity for $a\in K\cup U$ and gradient base points $b,c\in U$; orientation matches $B_R(x\|y)=R(x)-R(y)-\langle\nabla R(y),x-y\rangle$.
- Dependencies: `def-mirror-map-and-bregman-divergence` (level 0); this item is level 1 and is an explicit supplier for the projection and regret proofs.
- Sources: Hazan §5.3.2, PDF pp. 100–103; Bubeck mirror descent regret proof, PDF pp. 27–30.
- Decision: complete local algebra proof; no unresolved supplier check.
- Validation: precheck and proof contract passed; final proof-layout pass is listed below.
- Next: prove entropy geometry, then author the two update definitions.

### Author checkpoint — `lem-negative-entropy-geometry-of-simplex`

- Claim/conventions: in $n-1$ independent coordinates, negative entropy is continuous on the closed simplex, 1-strongly convex in Euclidean norm, and has range $[-\log n,0]$; the minimum and maximum are attained as stated. The proof handles $p_i=0$ by a continuity estimate and does not import the book's exercise.
- Dependencies: mirror-map definition, convex-set convention, derivative/logarithm suppliers, one-dimensional second-derivative criterion, finite Jensen, logarithm bound, and square monotonicity (all manifest edges; level 1). Actual statements of the logarithm/convexity/Jensen suppliers were inspected; Jensen transitively uses finite-sum definitions and laws.
- Sources: Hazan §5.4.2, PDF pp. 103–105 (diameter left as an exercise); Bubeck PDF p. 26. Full texts were inspected; all entropy geometry claims are proved locally.
- Decision: complete local proof, including boundary cases; no unresolved supplier check.
- Validation: precheck and proof contract passed; final proof-layout pass is listed below.
- Next: author the update definitions and well-definedness lemmas.

### Author checkpoint — `alg-adagrad`

- Claim/conventions: defined the epsilon-free Gram accumulation, full PSD-root and coordinatewise diagonal scales, pseudoinverse step, and possibly nonunique metric projection. Explicitly says no regret rate is claimed; the diagonal formula is not identified with $\operatorname{diag}(G_t^{1/2})$.
- Dependencies: Batch 73 protocol/feedback, Euclidean and matrix definitions, spectral/root facts, and Moore–Penrose existence. Manifest level 2; its local projection existence is separately justified by `lem-adagrad-projection-exists`.
- Sources: Hazan §5.6 Algorithm 19, PDF pp. 113–118; Duchi–Hazan–Singer §2, PDF pp. 8–10. The published epsilon-positive diagonal procedure is a different interface and supplies no claim here.
- Decision: update-only carrier; no optimizer or regret theorem imported.
- Validation: scoped dependency labels, content policy, precheck, proof contract where applicable, and proof-layout checks passed.
- Next: define agile mirror descent under explicit gradient-inverse and interior-projection hypotheses.

### Author checkpoint — `alg-online-mirror-descent`

- Claim/conventions: defined the agile dual update and Bregman projection; requires a unique dual solution and each projected iterate to remain in the regularizer's differentiability domain. Includes the smooth gradient case from the design and a separately explicit supporting-subgradient case, which is justified locally by the same proof.
- Dependencies: mirror geometry, protocol/feedback timing, convexity and gradient conventions, subgradient definition, and differentiable-convex gradient inequality. Level 2; the compact projection result is identified as `justified_by` and proved next.
- Sources: Hazan §5.3 Algorithm 14, PDF pp. 100–103; Bubeck mirror descent algorithm, PDF pp. 25–26.
- Decision: definition is fully conditional on update well-definedness; no unstated inverse-gradient existence is claimed.
- Validation: scoped dependency labels, content policy, render, precheck where applicable, and proof-layout checks passed.
- Next: prove the AdaGrad and Bregman projection existence results and the coordinatewise diagonal identity.

### Author checkpoint — `lem-adagrad-projection-exists`

- Claim/conventions: proved attainment for the fixed quadratic metric objective on nonempty bounded closed $K$, including singular $H$, and made no uniqueness claim. The proof gives an explicit continuity bound for the quadratic on bounded $K$.
- Dependencies: `alg-adagrad`, Euclidean norm, semicontinuity definition/characterization, compact semicontinuous extreme-value theorem, and choice-free Heine–Borel. Level 3.
- Sources: Hazan §5.6, PDF pp. 113–118; Duchi–Hazan–Singer §2, PDF pp. 8–10. Existence is proved locally.
- Decision: complete well-definedness proof; no determinant, inverse, or strict-convexity assumption on $H$.
- Validation: precheck and proof contract passed; final proof-layout pass is listed below.
- Next: prove the diagonal scale formula and Bregman projection lemma.

### Author checkpoint — `lem-adagrad-diagonal-scale-coordinatewise`

- Claim/conventions: proved $(H_t)_{ii}=\sqrt{\sum_{s\le t}g_{s,i}^2}$ from the assigned diagonal-scale definition. This resolves the source notation locally; it does not equate this scale with $\operatorname{diag}(G_t^{1/2})$.
- Dependencies: `alg-adagrad`, matrix-product entries, and the real transpose convention; level 3.
- Sources: Hazan §5.6 Algorithm 19, PDF pp. 113–118; Duchi–Hazan–Singer §2, PDF pp. 8–10.
- Decision: complete coordinate calculation; no AdaGrad optimizer or regret conclusion.
- Validation: precheck and proof contract passed; final proof-layout pass is listed below.
- Next: prove existence, uniqueness, and the Pythagorean inequality for Bregman projection.

### Author checkpoint — `lem-mirror-descent-bregman-projection-exists`

- Claim/conventions: proved existence and uniqueness of the regularizer minimizer and Bregman projection on compact $K$; when the projection lies in $U$, derived its variational inequality and the Bregman Pythagorean inequality.
- Dependencies: agile OMD interface, mirror definition, compactness and semicontinuous extreme-value suppliers, convex segments, and the three-point identity. Level 3.
- Sources: Hazan §5.3 Algorithm 14 and projection inequality, PDF pp. 100–103; Bubeck projection/regret proof, PDF pp. 25–29. Full proof is local.
- Decision: complete local proof. OMD separately requires projected iterates to be in $U$; the lemma does not falsely claim that every projection is interior.
- Validation: precheck and proof contract passed; final proof-layout pass is listed below.
- Next: prove the corrected regret theorem and then the three finite examples.

### Author checkpoint — `lem-bregman-divergence-nonnegative`

- Claim/conventions: proved strict nonnegativity for two points in the open differentiability domain by Taylor's Hessian remainder, and the stronger $m\|x-y\|^2/2$ bound when the comparator and base point lie in $K$.
- Dependencies: mirror-map definition and the published multivariable Taylor formula with Lagrange remainder; level 1.
- Sources: Hazan §§5.1, 5.3.2, PDF pp. 93–103; Bubeck mirror descent proof, PDF pp. 27–30. Local boundary/interior cases are explicit.
- Decision: complete local prerequisite; no unstated nonnegativity assumption is used by the regret argument.
- Validation: precheck and proof contract passed; final proof-layout pass is listed below.
- Next: state and prove the corrected regret theorem.

### Author checkpoint — `thm-mirror-descent-regret`

- Claim/conventions: proved the sound bound $R_T(u)\le [R(u)-R(x_1)]/\eta+(\eta/2)\sum_t\|g_t\|_{*,z_t}^2$, including the Taylor-defined intermediate Hessian point and both gradient/subgradient feedback cases. The design's eta choice yields the valid $3D_RG_R\sqrt T/2$; optimizing the corrected expression yields $\sqrt2D_RG_R\sqrt T$.
- Dependencies: OMD update, mirror/Bregman definitions, regret convention, three-point identity, Bregman positivity, compact projection/Pythagorean result, differentiable convex gradient inequality, subgradient definition, multivariable Taylor remainder, Heine–Borel, and semicontinuous extreme values. Level 4.
- Sources: Hazan §5.3.2 Theorem 5.6 complete proof, PDF pp. 100–103; Berkeley/Bubeck mirror descent theorem proof, PDF pp. 27–30; Orabona OMD II full one-step/regret proof, lines 113–132.
- Conflict/evidence: Hazan's displayed proof reaches $R_T\le D_R^2/\eta+\sum B_R(x_t\|y_{t+1})/\eta$ and bounds each local term by $\eta^2\|g_t\|_*^2/2$ (ar5iv §5.3.2 lines 1877–1886), but line 1889 inserts an unjustified factor $1/2$. Counterexample: $K=[0,1]$, $R(x)=x^2/2$, $x_1=0$, $T=1$, $f_1(x)=-x$, $g_1=-1$, $\eta=1$, $u=1$. Then $y_2=x_2=1$, regret is $1$, $D_R^2=1/2$, local dual norm is $1$, while the design right side is $1/2$. At its tuned $\eta=1/\sqrt2$, the design also asserts $1/\sqrt2<1$. The theorem remains owner-escalated.
- Decision: complete proof of corrected result; original planned constants are mathematically refuted, so no readiness claim.
- Validation: proof contract and proof-layout passed; scoped dependency labels and content checks passed; Step 1 owner escalation recorded.
- Next: author the three assigned examples and complete pages/evidence/contracts.

### Author checkpoint — `ex-adagrad-singular-adaptive-metric`

- Claim/conventions: computed one diagonal AdaGrad round on $[-1,1]^2$ with $g_1=(1,0)$; $H_1=H_1^\dagger=\mathrm{diag}(1,0)$, $y_2=(-1,0)$, and the projection minimizer set is $\{(-1,s):s\in[-1,1]\}$.
- Dependencies: AdaGrad update, singular projection existence, coordinatewise scale lemma, and Euclidean coordinates; level 4.
- Sources: Hazan §5.6 Algorithm 19, PDF pp. 113–118; Duchi–Hazan–Singer §2, PDF pp. 8–10.
- Decision: explicit nonunique singular-metric calculation; no regret-rate claim.
- Validation: finite contract, precheck, and proof-layout checks passed; source and content checks passed.
- Next: verify the entropy-to-Hedge and quadratic-to-projected-gradient examples.

### Author checkpoint — `ex-negative-entropy-mirror-descent-on-simplex`

- Claim/conventions: represented the simplex in $n-1$ independent coordinates, derived the gradient differences $\ell_i-\ell_n$, solved the dual update, proved the Bregman projection is the identity on the positive simplex, and matched normalized distributions to Hedge by induction. Hedge's random expert samples are distinguished from mirror descent's distribution outputs.
- Dependencies: OMD/projection, local entropy geometry, Bregman definition/nonnegativity, actual Batch 74 `alg-hedge`, logarithm/exponential definitions and laws, and Euclidean coordinates. Level 4.
- Sources: Hazan §5.4.2, PDF pp. 103–105; Bubeck PDF p. 26; Orabona OMD III full example section.
- Decision: complete finite-dimensional derivation; no regret bound is imported.
- Validation: precheck and proof contract passed; final proof-layout pass is listed below.
- Next: finish the quadratic example, pages, and evidence contracts.

### Author checkpoint — `ex-euclidean-mirror-descent-is-projected-ogd`

- Claim/conventions: derived $\nabla R(x)=x-x_0$, $B_R(x\|y)=\|x-y\|_2^2/2$, and the exact single-step map $P_K(x_t-\eta g_t)$. The comparison is per-round with the same step; substituting OGD's current $\eta_t$ identifies its displayed map.
- Dependencies: OMD/projection, mirror and Euclidean definitions, actual Batch 74 projected OGD update, convexity and metric topology. Level 4.
- Sources: Hazan §5.4.1, PDF pp. 103–104; Bubeck PDF pp. 25–26.
- Decision: complete algebraic example; no OGD regret statement is imported.
- Validation: finite contract, precheck, and proof-layout checks passed; source and content checks passed.
- Next: write frontmatter-only pages and reconcile all evidence files.

### Author checkpoint — `lem-psd-matrix-has-unique-psd-square-root`

- Claim/conventions: proved that a real symmetric PSD Gram matrix has a unique symmetric PSD square root. The proof diagonalizes the Gram matrix, takes scalar roots of its nonnegative eigenvalues, and proves uniqueness by showing any PSD root preserves each eigenspace and acts by the unique nonnegative scalar root there.
- Dependencies: real spectral theorem, matrix adjoint/transpose, matrix products, scalar square roots, and Euclidean inner product; level 0.
- Sources: Hazan §5.6 full-matrix scale, PDF pp. 113–118; Duchi–Hazan–Singer §2, PDF pp. 8–10. The matrix existence/uniqueness argument is local and choice-free; the separate compact-operator square-root theorem was not imported because it assumes Countable Choice.
- Decision: complete local prerequisite; `alg-adagrad` now accurately distinguishes the scalar root theorem from the matrix-root lemma.
- Validation: proof contract, precheck, proof-layout, scoped dependency labels, content policy, render, and statement-first checks passed.
- Next: owner reconciliation of the original false regret-bound target; all batch-75 authoring and scoped checks are complete.


## Final validation and handoff

- `node tools/tsx-run.mjs tools/precheck.mts <the 11 proof-bearing batch-75 items>`: 11 checked, 0 failing.
- `node tools/proof-layout.mjs <the 14 explicitly changed item files>`: 14 items, 46 steps, 0 defects.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-75.proof-contracts.json --strict`: 11/11 proof-bearing items, 0 errors/warnings, 63 exact supplier citations.
- `node tools/content-policy.mjs research/machine-learning-all-101-2026-10-19-batch-75.pages.json`: 14 scoped items, 0 errors/warnings.
- `node tools/rendercheck.mjs <14 item files and 2 library pages>`: 16 files; real KaTeX/YAML checks passed. The scoped statement-first check covered all 14 item statements and found 0 defects.
- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-75.coverage.json`: 8/8 sources fetch-verified and resolved, 0 documented drops.
- Recomputed the assigned 14-item graph against all currently available run manifests: 0 batch-75 level mismatches. The assigned batch graph is 73 level 0, 74 level 1, 75 level 2.
- `node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` is blocked by 38 empty inventories in other pages; no batch-75 item has a level mismatch. Empty pages: `distribution-shift-and-domain-adaptation, distribution-shift-and-domain-adaptation-examples, stochastic-gradient-descent-for-learning, stochastic-gradient-descent-for-learning-examples, momentum-and-accelerated-training, momentum-and-accelerated-training-examples, adaptive-gradient-optimizers, adaptive-gradient-optimizers-examples, overparameterized-training-and-interpolation, overparameterized-training-and-interpolation-examples, norm-and-margin-generalization-for-neural-networks, norm-and-margin-generalization-for-neural-networks-examples, algorithmic-stability-of-stochastic-training, algorithmic-stability-of-stochastic-training-examples, self-supervised-and-contrastive-representation-learning, self-supervised-and-contrastive-representation-learning-examples, generative-adversarial-networks, generative-adversarial-networks-examples, score-sdes-and-reverse-time-generation, score-sdes-and-reverse-time-generation-examples, multimodal-contrastive-alignment-and-transfer, multimodal-contrastive-alignment-and-transfer-examples, foundation-models-transfer-and-scaling-evidence, foundation-models-transfer-and-scaling-evidence-examples, predictive-calibration-and-uncertainty-under-shift, predictive-calibration-and-uncertainty-under-shift-examples, contextual-expert-bandits, contextual-expert-bandits-examples, constrained-mdps-and-policy-safety, constrained-mdps-and-policy-safety-examples, monotone-risk-calibration-and-deployment-guarantees, monotone-risk-calibration-and-deployment-guarantees-examples, verifiable-generation-and-test-time-sampling, verifiable-generation-and-test-time-sampling-examples, active-querying-version-spaces-and-abstention, active-querying-version-spaces-and-abstention-examples, semi-supervised-graph-propagation-and-pseudolabeling-limits, semi-supervised-graph-propagation-and-pseudolabeling-limits-examples`.
- `node tools/batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` is blocked because the recorded run-wide schedule artifact is stale. Current recomputation adds batch 101 at level 2 with prerequisites 2 and 21; batch 75 remains level 2 via batch 74. The shared artifact was left unchanged.
- Step 1 records are fresh for all 14 items: 13 `ready`, and `thm-mirror-descent-regret` `escalated` for owner reconciliation of the false prescribed constants. These are author records, not independent approval or publication.
- Live status at handoff: `.autopilot/machine-learning-all-101-2026-10-19` remains `running` at `1-scaffold`, 69/101 assignments covered, no workers in flight, with the existing owner repair/recertification hold in `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. Latest observed status timestamp: `2026-10-18T23:16:38.218Z`. HEAD remains `50139bdcb619a39f8d99e13d17d846b8628e7312` (`Defer compact construction artifact scans until author drain`).
- Batch 75 did not modify shared plans, published content, `.autopilot` engine state, or verdicts.
