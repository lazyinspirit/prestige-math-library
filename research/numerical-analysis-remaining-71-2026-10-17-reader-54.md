# Step 3a reader report — batch 54

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `54`  
Role: independent reader

## Opened inventory

Assigned pages:

- A page [adaptive-finite-element-methods](../library/numerical-pdes-and-spatial-discretization/adaptive-finite-element-methods.md).
- B page [adaptive-finite-element-methods-examples](../library/numerical-pdes-and-spatial-discretization/adaptive-finite-element-methods-examples.md).
- The A-page prerequisite [variational-crimes-and-strang-lemmas](../library/numerical-pdes-and-spatial-discretization/variational-crimes-and-strang-lemmas.md), including its `def-variational-crime-error-framework` supplier.

Assigned A-page items, in dependency-level order:

- Level 0: `cor-afem-constant-convection-weak-wellposedness`, `def-afem-local-moment-interpolant`, `def-afem-nvb-labelled-triangulation-family`, `def-afem-p1-residual-estimator-and-data-oscillation`, `lem-afem-vertex-patch-poincare`.
- Level 1: `alg-dorfler-marking-and-conforming-nvb-refinement`, `def-afem-p1-approximation-class`, `lem-afem-convection-quasi-orthogonality-under-fine-mesh`, `lem-afem-nvb-shape-regularity-and-three-generation-properties`, `lem-afem-p1-residual-representation`, `thm-afem-local-moment-interpolation-estimates`.
- Level 2: `lem-afem-common-refinement-overlay-and-cardinality`, `lem-afem-data-oscillation-reduction-under-marked-refinement`, `lem-afem-localized-galerkin-refinement-estimate`, `lem-afem-nvb-conforming-closure-and-cumulative-counting`, `thm-afem-p1-residual-reliability-and-local-efficiency`.
- Level 3: `lem-afem-dorfler-marking-cardinality`, `lem-afem-residual-estimator-reduction`.
- Level 4: `thm-afem-error-and-oscillation-contraction`.
- Level 5: `thm-afem-p1-poisson-optimal-complexity`.

Assigned B-page examples:

- `ex-afem-coefficient-jump-adds-flux-oscillation`.
- `ex-afem-coarse-convection-mesh-misses-smallness-condition`.
- `ex-afem-dorfler-marking-three-cells`.
- `ex-afem-data-oscillation-reduction-under-refinement`.

I opened the statements needed from the 24 external direct item suppliers listed by the manifest: `def-axiom-of-choice`, `def-bounded-coercive-and-symmetric-sesquilinear-forms`, `def-broken-and-conforming-polynomial-spaces`, `def-countable-choice`, `def-hilbert-space`, `def-matching-affine-simplicial-meshes`, `def-sobolev-space-wkp-and-its-norm`, `def-uniformly-elliptic-divergence-form-operator`, `def-wkp-zero-as-a-sobolev-closure`, `lem-galerkin-orthogonality-for-conforming-galerkin-approximations`, `lem-oriented-facet-cancellation-on-matching-meshes`, `lem-reference-polynomial-norm-equivalence`, `lem-shape-regular-affine-simplex-scaling`, `lem-w-one-two-is-a-hilbert-space`, `thm-cea-quasi-optimality-for-conforming-galerkin-approximations`, `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`, `thm-holder-inequality-for-integrals`, `thm-lax-milgram`, `thm-matching-continuous-piecewise-polynomials-are-wkp`, `thm-poincare-inequality-for-w-one-p-zero`, `thm-polynomial-inverse-and-discrete-trace-estimates`, `thm-reference-simplex-poincare-wirtinger`, `thm-reference-simplex-trace-and-gauss-green`, and `thm-zero-boundary-piecewise-polynomials-in-w10p`. Their exact statements and hypotheses were checked where used; their published proofs were treated as suppliers rather than re-proved wholesale.

I also opened batch 54's manifest, proof-contract file, cross-batch dependency record, source coverage record, and authoring notes as evidence. The run status was `running` with no dispatch in flight. The cross-batch dependency record is empty; all assigned items and direct dependencies used here are local to batch 54 or published suppliers.

## Review and verdicts

**A page — pass after the item repair below.** The scope summary matches the actual statements: the convergence and optimal-complexity claims are restricted to the stated P1, two-dimensional NVB setting; the optimal-complexity claim is Laplace with P0 initial data and an approximation-class hypothesis; the constant-convection branch has its explicit pickup/fineness condition; and the variable-coefficient interface claims no reliability or complexity theorem.

**B page — pass.** The four examples' exact arithmetic and geometric claims check: the projected flux variance is `1/12`, the prescribed convection vector gives `μ = 2`, the Dörfler prefix first crosses `42/5` at the first cell, and the reference-triangle projection and three-generation alignment give initial oscillation square `3/16` and refined oscillation zero. The examples do not overclaim general convergence behavior.

No additional defect remained in assigned page prose or in the other assigned items. No published or cross-batch dependency defect was confirmed. There are no uneditable findings.

## Repair and evidence

I repaired `thm-afem-p1-residual-reliability-and-local-efficiency`.

The original steps 1.2 and 2.1 used fine P1 bubble hats supplied by three-generation refinement, while the first two local-efficiency clauses of the theorem assumed only an arbitrary conforming shape-regular mesh. The cited refinement hypothesis was therefore unavailable in those clauses. Nochetto's *Adaptive Finite Element Methods*, Lecture 2, §2.1.2, Lemma 2.2, PDF pp. 13–15, explicitly assumes a refined neighborhood with interior nodes in each cell and side before constructing its discrete bubbles ([author-hosted PDF](https://www.math.umd.edu/~rhn/lectures/lecture2.pdf)).

For local efficiency on the original mesh, I replaced those tests with the cell bubble `27 λ₁ λ₂ λ₃` and the continuous two-cell edge bubble `4 λᵢ λⱼ`. Their positive integrals are computed directly, their norms follow by affine scaling, and their zero traces make them admissible `H₀¹` tests through the published matching-piecewise-polynomial and zero-boundary results in the residual-representation dependency closure. I retained fine P1 hats only for the marked-correction clause, which assumes three-generation refinement; the hats are taken on the intermediate three-generation mesh and prolonged to any finer `T_*`.

I also made the exact Galerkin orthogonality and the constant-convection skew identity explicit in step 1.1. The proof contract `research/numerical-analysis-remaining-71-2026-10-17-batch-54.proof-contracts.json` now matches the revised steps and includes the two zero-boundary membership suppliers. The item had no `verification.judge` record to remove. No page prose or other item was edited.

Other source checks relevant to this batch included Nochetto Lecture 3, §3.1, Lemma 3.1, which states the constant-convection quasi-orthogonality under a fine-mesh condition and an L2 pickup bound; and Bonito–Canuto–Nochetto–Veeser, *Adaptive Finite Element Methods* (2024), §§3.5–3.6 and §8.1.1–8.1.3, Lemmas 8.4–8.7. The latter gives the generation/distance and allocation argument for cumulative NVB closure complexity and cautions against a uniform one-call bound. These passages support the corresponding restricted claims in this batch.

## Validation and blocker

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-afem-p1-residual-reliability-and-local-efficiency.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-afem-p1-residual-reliability-and-local-efficiency.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-afem-p1-residual-reliability-and-local-efficiency.md` — 1 item, 4 steps, 0 defects.

Blocker: none. Coverage limitation: I checked the exact statements of every direct external item dependency and the relevant source arguments above, but did not independently re-read every transitive published proof or every source section listed in the author coverage ledger. In particular, I did not independently inspect the full Lecture 4 and Cascón–Kreuzer–Nochetto–Siebert source sections; the assigned optimal-complexity proof was checked from the current local dependency chain.
