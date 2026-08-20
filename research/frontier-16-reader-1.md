# Frontier 16 — independent reader 1 report

Run: `frontier-16`  
Role: Step 6a independent reader  
Batch: `1`  
Scope source: `research/frontier-16-batch-1.pages.json`

## Scope and method

This report is the durable record of the adversarial read of every item on the four pages assigned to batch 1. Each proof-bearing item is checked step by step against its explicit inputs and each cited dependency opened on disk; titles and Statements are checked separately against the proofs; all eight proof-contract boundary classes and both directions of each biconditional are instantiated where applicable; and component provenance is checked for every mathematical-content item. Findings retain their original identifiers permanently.

The batch contains 70 items, of which 61 are proof-bearing according to `research/frontier-16-batch-1.proof-contracts.json`. No Step-7 judging is performed in this role.

## Fatal findings

### R1-1 — `thm-parametrized-implicit-function-theorem-with-higher-regularity` — fatal

Exact location: Statement, opening quantifiers and final sentence; proof-contract `zero` boundary row. The Statement quantifies `k,m,n,p\ge1` but then asserts that the theorem includes the case with no parameter block, while the contract says that this is the `p=0` case. The quantified theorem excludes that case. This is a boundary defect in the Statement itself, not a proof-step gap. Repair: allow `p\in\mathbb N` while retaining `k,m,n\ge1`, and make the block-map argument explicitly cover the zero-dimensional parameter block.

### R1-2 — `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` — fatal

Exact location: frontmatter title and batch-manifest title. “Has finite diffeomorphic sheets over every target neighbourhood” says more than the Statement and proof: they establish that every target *point has some* evenly-sheeted open neighbourhood. An arbitrary target neighbourhood need not itself be evenly sheeted. Repair: narrow the title to “A proper Euclidean local diffeomorphism has finite diffeomorphic sheets near every target point.”

### R1-3 — `fs-an-open-c-one-map-has-invertible-derivative` — fatal

Exact location: Fact `[L1]` and proof step 1.1. `[L1]` attributes to `cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism` the stronger clause that the cube map is open and has derivative zero at the origin. The cited item’s `Statement refuted` witness clause says only that the cube map is a smooth bijection whose inverse is not differentiable at zero. The proof of the cited item discusses openness and the derivative, but those claims are absent from the cited Statement section and from the contract quote. This is an inflated load-bearing restatement. Repair: establish and state the full witness clause in the cited counterexample, then quote that clause faithfully here.

### R1-8 — `lem-convex-function-bound-on-an-interior-cube` — fatal

Exact location: Statement and proof-contract `zero` boundary row. The Statement uses `\|\cdot\|_\infty` without assuming `n\ge1`, while `def-p-norms-on-rn` explicitly says the maximum norm is undefined at `n=0` and that every statement mentioning it inherits `n\ge1`. The contract’s zero row discusses the radius rather than the zero-dimensional ambient space. Repair: add `n\ge1` to the Statement and record that exact domain restriction in the boundary row.

### R1-9 — `cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient` — fatal

Exact location: Statement, Fact `[L1]`, and proof step 1.1. This corollary assumes differentiability only at the fixed point `a`, but `[L1]` cites `thm-differentiable-convex-functions-and-gradient-inequality`, whose Statement assumes that `f` is differentiable on the whole open set. The cited theorem therefore does not license step 1.1 under the stated hypotheses. The local differentiability version is true, but needs the direct secant-limit proof. Repair: derive the subgradient inequality from convexity along `a+t(y-a)` and differentiability at `a`, then retain the two-sided coordinate argument for uniqueness.

### R1-10 — `def-semicontinuity-on-euclidean-subsets` — fatal

Exact location: Definition opening and every batch-1 Statement that invokes this definition on an arbitrary `\mathbb R^n`. The Definition uses Euclidean balls from `lem-metrics-on-rn`, whose Statement is explicitly restricted to `n\ge1`, but imposes no such hypothesis. Consequently the cited metric and `B_2` notation are not licensed at `n=0`. The affected general Statements are `thm-euclidean-semicontinuity-level-set-characterisations`, `thm-euclidean-semicontinuity-epigraph-characterisations`, `thm-euclidean-semicontinuous-extreme-value-theorem`, and `ex-characteristic-functions-of-open-and-closed-sets-are-semicontinuous`; their contracts’ zero rows discuss zero levels or values instead of ambient dimension. Repair: state `n\ge1` explicitly throughout this Euclidean-metric family and update each boundary disposition.

### R1-11 — `ex-finite-maximum-of-affine-functions-and-its-subdifferential` — fatal

Exact location: Example opening. The displayed claim never declares the ambient dimension, the domain of `x`, or the types of the coefficients `a_j` and `b_j`; only `m\ge1` is supplied. Thus the inner products, active-slope convex hull, and subdifferential are not a typed Statement. Repair: quantify `n,m\ge1`, `a_j\in\mathbb R^n`, `b_j\in\mathbb R`, and `x\in\mathbb R^n`.

### R1-12 — `cex-strictly-convex-function-with-a-singular-hessian` — fatal

Exact location: `Statement refuted` witness clause and downstream Fact `[L1]` in `fs-strict-convexity-gives-a-positive-definite-hessian`. The witness `f(x)=\sum_{j<n}x_j^4` omits `n\ge1`. At `n=0` its domain is a singleton and the `0\times0` Hessian is positive definite vacuously (and invertible), so the unqualified zero-dimensional reading does not witness the stated failure. Repair: type the witness as `f:\mathbb R^n\to\mathbb R` for `n\ge1` and preserve that hypothesis in the downstream citation.

### R1-18 — `def-ck-euclidean-maps-and-diffeomorphisms` — fatal

Exact location: both paragraphs of the Definition. The scalar `C^k` dependency `def-ck-and-multi-index-notation-in-several-variables` assumes positive source dimension, and the published local-inverse convention assumes positive square dimension, but this Definition omitted both restrictions. The omission propagated into several inverse-function Statements and contracts, whose zero rows discussed `k=0` or a radius rather than the zero-dimensional space. Repair: require `m\ge1` for componentwise `C^k` maps and `n\ge1` for diffeomorphisms, and make every dependent inverse-function Statement and boundary row preserve those hypotheses.

### R1-19 — finite-dimensional projection/separation chain — fatal

Item ids: `thm-nearest-point-in-a-nonempty-closed-convex-set`, `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`, `thm-strict-separation-of-a-point-from-a-closed-convex-set`, `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set`, and `thm-separating-hyperplane-theorem-for-disjoint-convex-sets`. Exact location: Statements, Facts `[L1]`/`[L2]`, and zero boundary rows. The nearest-point proof applies `thm-heine-borel-rn`, and the support proof applies `cor-bolzano-weierstrass-in-rn`; both cited Statements require `n\ge1`, but the authored restatements and consuming Statements omitted it. The later projection and separation results inherited the same unlicensed scope. Repair: state `n\ge1` throughout the chain and record that boundary explicitly in every affected contract.

### R1-20 — `ex-two-equation-implicit-system` — fatal

Exact location: Given paragraph and verification step 1.1. The Given says `thm-algebra-of-total-derivatives` supplies “polynomial derivative algebra,” but that theorem proves only sums and scalar multiples of totally differentiable maps; it has no product or power rule. The derivatives of `x^2`, `y^2`, and `(z+1)^3` were therefore unlicensed. Repair: add exact power, one-variable chain, and scalar derivative-algebra facts and map each to step 1.1.

### R1-21 — `cex-strictly-convex-function-with-a-singular-hessian` — fatal

Exact location: Given paragraph and proof step 1.1. The Given calls `thm-differentiable-convex-functions-and-monotone-derivatives` a “derivative criterion for strict convexity,” but its Statement proves only `f` convex iff `f'` is nondecreasing. It does not license the strict conclusion from a strictly increasing derivative. Repair: remove the inaccurate citation and prove the strict chord inequality by applying the mean value theorem on the two subintervals.

### R1-22 — `fs-invertible-derivative-everywhere-gives-a-global-inverse` — fatal

Exact location: Given paragraph and refutation step 1.1. The item attributes the derivatives of the polynomial products in `S(x,y)=(x^2-y^2,2xy)` to `thm-algebra-of-total-derivatives`, whose Statement contains no product rule. Repair: replace it with the scalar derivative-algebra theorem before invoking the continuous-partial criterion.

## Nonfatal findings

### R1-4 — `thm-parametrized-implicit-function-theorem-with-higher-regularity` — nonfatal

Exact location: proof steps 2.1–3.1 and their contract inputs. `[L1]`, the published implicit theorem’s Statement, does not identify its solution as “the inverse used in step 1.1,” so step 2.1 silently imports the cited theorem’s internal block-map construction. Step 3.1 invokes the chain rule without an explicit input, although the derivative formula was already supplied by `[L1]`. The standard block-map bridge is short, but the written inputs do not license the steps as written. Repair: cite the inverse function theorem directly, construct the local inverse of `H`, identify its zero-slice with the unique solution from `[L1]`, and retain `[L1]`’s derivative formula.

### R1-5 — `thm-ck-euclidean-maps-closed-under-algebra-and-composition` — nonfatal

Exact location: Facts and proof step 2.1. The step differentiates componentwise products, but its declared facts contain no product rule: `thm-algebra-of-total-derivatives` proves sums and scalar multiples only. It also uses the full chain-rule formula although `[L1]` restates only differentiability of the composite. These are standard substeps a competent reader can supply quickly, so the finding is nonfatal under the 30-second rule, but the proof-obligation map is not licensed as written. Repair: add the scalar derivative algebra theorem and the continuous-partial criterion as exact facts and spell out the first-partial induction.

### R1-6 — `cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism` — nonfatal

Exact location: proof step 1.1. `[L1]` gives first differentiability and the power rule, but the step jumps from this to “smooth” and “open.” Smoothness needs the finite repeated derivative argument; openness needs continuity plus continuity of the inverse of the strictly monotone bijection. Those bridges are routine but absent from the stated inputs. This also leaves the downstream citation in R1-3 unsupported at Statement level. Repair: state the exact stronger witness clause and give the short repeated-derivative and homeomorphism argument using explicit facts.

### R1-13 — `thm-convex-functions-on-open-convex-sets-are-locally-lipschitz` — nonfatal

Exact location: proof steps 1.1–3.1 and proof-contract `zero` row. The proof uses `\|\cdot\|_\infty` and closed sup-norm cubes without separating the case `n=0`, although that norm is defined only for `n\ge1`. The theorem itself remains true in zero dimension because every nonempty domain in `\mathbb R^0` is a singleton, so this is a short boundary branch rather than a false Statement. Repair: dispatch `n=0` explicitly before the cube argument and update the contract.

### R1-14 — `lem-convex-set-and-closure-have-same-interior-and-boundary` — nonfatal

Exact location: proof step 1.1 and contract `zero` row. The step says `[L5]` (norm equivalence) and `[L6]` (Euclidean completeness) prove that the affine hull is closed “including the zero-dimensional singleton case,” but both cited Statements require positive dimension. When the direction space is `{0}`, closedness is immediate, so the missing branch is within the 30-second rule. Repair: handle `W={0}` directly and apply `[L5]`/`[L6]` only when its dimension is positive.

### R1-15 — `cor-positive-definite-hessian-implies-strict-convexity` — nonfatal

Exact location: proof step 2.1. `[L1]` makes `\phi'` strictly increasing, but the next strict chord inequality is asserted by “comparing secant slopes” without a stated result or derivation. The listed differentiable-convexity theorem gives only the weak convexity equivalence, not the strict conclusion. The usual two applications of the mean value theorem close the gap quickly. Repair: cite the mean value theorem and compare the two secant slopes explicitly.

### R1-23 — `ex-x-xy-is-a-diffeomorphism-off-the-axis` — nonfatal

Exact location: Given paragraph and verification step 1.1. The displayed derivative of the product `xy` was attributed to `thm-algebra-of-total-derivatives`, which has no product clause. The missing computation is short enough for the 30-second rule. Repair: replace the citation with the explicit total-derivative remainder `(0,hk)` and its quadratic bound, and use the proved `C^k` product closure for smoothness.

### R1-24 — `ex-polar-coordinates-as-a-local-diffeomorphism` — nonfatal

Exact location: Fact list and verification step 1.1. The derivative matrix differentiates `r\sin\theta` and `r\cos\theta`, but only the sine/cosine derivative fact was declared; no product rule was in the inputs. Repair: add the exact scalar product-rule fact and contract row.

### R1-25 — `ex-euclidean-norm-and-squared-norm-are-convex` — nonfatal

Exact location: verification step 2.1. The gradient and Hessian of `\|x\|_2^2` were computed without any derivative fact. This is routine but unlicensed under the step-input rule. Repair: add the exact power and scalar derivative-algebra facts, and split the norm and Cauchy–Schwarz clauses into distinct facts so each use has its own contract entry.

### R1-26 — `cex-positive-semidefinite-hessian-without-strict-convexity` — nonfatal

Exact location: counterexample step 1.1. The Hessian of `x^2` was asserted with only the Hessian convexity theorem and algebra as inputs. Repair: add the power and scalar derivative-algebra facts before computing `\operatorname{diag}(2,0)`.

### R1-27 — `thm-separating-hyperplane-theorem-for-disjoint-convex-sets` — nonfatal

Exact location: proof step 1.1 and `nonempty-choice` contract row. The proof tried to reprove convexity of `\overline{C-D}` using paired sequences, which silently requires choosing a decomposition of every sequence element. The earlier same-page closure lemma already proves the needed claim directly. Repair: cite that lemma, delete the sequence dependency, and record that no decomposition sequence is selected.

## Polish findings

### R1-7 — `ex-two-equation-implicit-system` — polish

Exact location: Example display. The separator is written `=-1,qquad` rather than `=-1,\qquad`, so the intended spacing command is rendered as mathematical letters. Repair: restore the missing backslash.

### R1-16 — `prop-basic-operations-preserving-convexity` — polish

Exact location: Statement. The third numbered clause about a nonempty finite pointwise maximum is repeated verbatim as the next paragraph. Delete the duplicate sentence.

### R1-17 — `thm-euclidean-semicontinuity-epigraph-characterisations` — polish

Exact location: proof-contract `nonempty-choice` and `iff-reverse` rows. Both cite step 2.1 for the sequence used in the reverse epigraph implication, but that sequence is in step 1.2; the reverse row also says “Steps 2.1 and step 2.1.” The mathematical proof is clear, but these are not accurate anchored dispositions. Repair: point the epigraph reverse direction and sequence choice to step 1.2, and the hypograph reverse direction to step 2.1’s reduction to step 1.2.

### R1-28 — proof-contract citation and boundary anchors — polish

Item ids: `lem-matrix-inversion-preserves-ck-regularity` and `ex-euclidean-norm-and-squared-norm-are-convex`. The matrix contract referred to nonexistent step 3.1, while the norm contract attributed its subdifferential computation to step 2.1 and referred to a nonexistent step 3.1. Several exact quotes also stopped before the formula actually used. Repair: correct the anchors, separate the norm and Cauchy–Schwarz clauses, and quote the load-bearing formulas rather than their opening words.

## Changes made

All 13 fatal, 11 nonfatal, and 4 polish findings above were repaired in the assigned batch. No item was added or deleted, and no id was renamed.

Changed items, exhaustively by page:

- `the-inverse-function-theorem-completed`: `def-ck-euclidean-maps-and-diffeomorphisms`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `lem-matrix-inversion-preserves-ck-regularity`, `thm-higher-regularity-of-local-inverses`, `thm-regular-locus-is-open`, `cor-c-one-local-diffeomorphisms-are-open-maps`, `thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image`, `cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image`, `thm-parametrized-implicit-function-theorem-with-higher-regularity`, `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets`, `def-local-orientation-of-a-regular-c-one-map`, `thm-jacobian-sign-is-constant-on-a-connected-regular-domain`, and `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant`.

- `the-inverse-function-theorem-completed-examples`: `ex-polar-coordinates-as-a-local-diffeomorphism`, `ex-x-xy-is-a-diffeomorphism-off-the-axis`, `ex-two-equation-implicit-system`, `cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism`, `fs-invertible-derivative-everywhere-gives-a-global-inverse`, `fs-a-c-one-bijection-has-a-c-one-inverse`, and `fs-an-open-c-one-map-has-invertible-derivative`.

- `convex-and-semicontinuous-functions-on-rn`: `prop-basic-operations-preserving-convexity`, `lem-convex-function-bound-on-an-interior-cube`, `thm-convex-functions-on-open-convex-sets-are-locally-lipschitz`, `thm-nearest-point-in-a-nonempty-closed-convex-set`, `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`, `thm-strict-separation-of-a-point-from-a-closed-convex-set`, `lem-convex-set-and-closure-have-same-interior-and-boundary`, `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set`, `thm-separating-hyperplane-theorem-for-disjoint-convex-sets`, `cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient`, `cor-positive-definite-hessian-implies-strict-convexity`, `def-semicontinuity-on-euclidean-subsets`, `thm-euclidean-semicontinuity-level-set-characterisations`, `thm-euclidean-semicontinuity-epigraph-characterisations`, and `thm-euclidean-semicontinuous-extreme-value-theorem`.

- `convex-and-semicontinuous-functions-on-rn-examples`: `ex-euclidean-norm-and-squared-norm-are-convex`, `ex-finite-maximum-of-affine-functions-and-its-subdifferential`, `ex-characteristic-functions-of-open-and-closed-sets-are-semicontinuous`, `cex-positive-semidefinite-hessian-without-strict-convexity`, `cex-strictly-convex-function-with-a-singular-hessian`, and `fs-strict-convexity-gives-a-positive-definite-hessian`.

`research/frontier-16-batch-1.pages.json` now matches every item’s final title and dependency list exactly. `research/frontier-16-batch-1.proof-contracts.json` was synchronized to all changed facts, proof text, step inputs, citations, and boundary dispositions; it contains 61 contracts, 140 step mappings, and 147 exact citation rows. The cube-map counterexample’s expanded witness clause was retagged from `literature-derived` to `ai-altered`, and the final provenance ledger in `research/frontier-16-batch-1.notes.md` was updated accordingly. No `verification.judge` block existed in the batch, so none was left stale. `research/plan-spec.json` was not touched.

External provenance was checked against the official Lebl inverse/implicit-function chapter, Lee’s proper-local-diffeomorphism proposition, Boyd–Vandenberghe, and the MIT convex-analysis notes. All 70 items have both component provenance fields; no Statement or construction is `ai-generated`, and no dependency targets an AI-generated Statement.

## Coverage and per-page verdicts

Coverage is complete. I opened all 70 scoped items and checked all 140 numbered proof steps. I also opened every dependency behind the 147 `[F#]`/`[A#]`/`[L#]` contract rows: 95 distinct cited items, including 55 published items outside the batch and 40 earlier items inside it. Every title and Statement received a separate proof comparison; every one of the 488 boundary rows was read; every biconditional was checked in both directions; both A-page summaries satisfy the two-paragraph/under-150-word contract; and both B pages have no authored body.

Per-page verdicts:

- `the-inverse-function-theorem-completed` — 16/16 items opened; all findings repaired; clean on final reread.
- `the-inverse-function-theorem-completed-examples` — 10/10 items opened; all findings repaired; clean on final reread.
- `convex-and-semicontinuous-functions-on-rn` — 31/31 items opened; all findings repaired; clean on final reread.
- `convex-and-semicontinuous-functions-on-rn-examples` — 13/13 items opened; all findings repaired; clean on final reread.

Final local gates:

- Reflow reported every changed proof file unchanged; targeted precheck passed all 38 changed proof-bearing items.
- Strict proof contract: 61/61 items, 0 errors, 0 warnings.
- Boundary audit: 488 rows, no contradicted disposition and no template cluster.
- Citation fidelity: 147 rows, no missing quote and no widening candidate.
- Content policy: 70 scoped items, 0 errors, 0 warnings.
- Rendercheck and prosecheck: 74 files, 0 errors, 0 warnings.
- Audit manifest: 292 relationships over 70 items, 0 defects.
- Depcheck, forward-reference check, and external-dependency check all passed.
- Finite smoke had 0 applicable registered checks; that is not proof evidence. Risk routing completed without error and remains for Alpha’s required `risk_review` dispositions.
- Coverage checklist: 97 harvested rows, 0 errors. Its one low-yield warning is the already documented inverse-function reuse/defer pattern for Alpha confirmation, not a mathematical blocker.

There are no unresolved mathematical findings or batch-1 blockers. No judge was run.
