# Step 3a reader report — batch 65

Run: `physics-non-fluid-129-2026-10-21-r2`

Role: reader; scope: batch `65` only.

## Inventory opened

Read the required workspace instructions (`../CLAUDE.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`), `briefs/reader.md`, the batch-65 manifest, and the batch-65 proof contracts. Contracts and manifests were treated as evidence, not verdicts.

Assigned pages:

- `library/quantum-field-theory-mathematics/qftx-scale-cocycles.md`
- `library/quantum-field-theory-mathematics/qftx-scale-cocycles-examples.md`

Assigned items, in dependency order:

- `items/def-qftx-scaling-cocycle.md`
- `items/prop-qftx-scale-cocycle-law.md`
- `items/thm-qftx-truncated-rg-ode.md`
- `items/ex-qftx-truncation-landau-pole.md`

Opened direct page prerequisites `qftx-causal-renormalization` and `qftx-heavy-field-eft`. Opened the ODE suppliers `def-countable-choice`, `def-first-order-ode-initial-value-problem-and-solution`, `def-locally-lipschitz-in-the-state-variable`, and `thm-picard-lindelof-local-existence-and-uniqueness`. For the scale-cocycle chain, opened `def-qftx-local-time-ordered-system`, `prop-qftx-finite-renormalization-composition`, and their relevant local-functional, wavefront, Fourier, and point-supported-distribution suppliers, including `def-qftx-off-shell-local-polynomial-functionals`, `lem-qftx-balanced-local-functional-representatives`, `lem-qftx-local-polynomial-functionals-are-microcausal`, `def-qftx-distributions-on-smooth-manifolds`, `def-qftx-local-wavefront-set`, `def-qftx-wavefront-hadamard`, `def-qftx-polynomial-microcausal-functionals`, `def-qft-distribution-scaling-degree`, `lem-qftx-wavefront-chart-invariance`, `thm-qftx-wavefront-product`, `lem-qftx-microcausal-star-product`, `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets`, and `thm-distributions-supported-at-one-point`. Also opened the cited contextual item `thm-qftx-heavy-derivative-bound`.

No TikZ or tikzcd diagrams occur in the assigned items or pages.

## Review and edits

- `thm-qftx-truncated-rg-ode`: the explicit constant/rational solutions, local Lipschitz estimate for `F(t,x)=bx^2`, uniqueness-based maximality argument, and formal re-expansion all follow from the stated hypotheses. The result concerns only the prescribed truncated ODE and the quadratic coefficient under the displayed formal reparameterization. Renamed the title from “scheme invariance” to “leading beta-coefficient invariance” to match that limited claim. The frozen batch manifest retains its earlier title; manifests were outside this reader's write scope.
- `ex-qftx-truncation-landau-pole`: the endpoint limit follows from the theorem for `b>0`, `g_0>0`; the item correctly makes no claim about a continuum theory or omitted terms.
- `def-qftx-scaling-cocycle`: the field dilation, mass relabeling, pullback composition, and scale-admissibility condition are explicit. The comparison map is conditional on supplied time-ordered systems and the finite-renormalization proposition; the item does not assert existence for a particular model.
- `prop-qftx-scale-cocycle-law`: direct substitution and uniqueness give the stated twisted law. Replaced the undefined phrase “renormalization subgroup” in the special case with the explicit condition `σ_ρ Z_τ σ_ρ^{-1}=Z_τ` for every `ρ,τ>0`. Updated the batch-65 proof contract's step-2.1 derivation to match. Neither edited item had a `verification.judge` record.

Source checks: Fredenhagen–Rejzner, [*Perturbative algebraic quantum field theory*](https://arxiv.org/html/1208.1428), §7, equations (79)–(80), gives the coefficientwise formal S-map and finite renormalization composition; Brunetti–Dütsch–Fredenhagen, [*Perturbative Algebraic Quantum Field Theory and the Renormalization Groups*](https://arxiv.org/html/0901.2038), §4.2 equations (60)–(65) and §5.1 equations (68)–(70), gives the mass-indexed scale action and twisted cocycle convention. The UT Austin QFT II notes, [“Renormalization Scheme Dependence”](https://web2.ph.utexas.edu/~vadim/Classes/2022f/ms.pdf), pp. 1–2, equations (2)–(9), support the leading beta-coefficient invariance under a formal coupling redefinition. The item correctly limits its claim to the quadratic coefficient rather than the higher-order coefficients discussed in that source.

After edits, reflow reported both changed items unchanged; scoped precheck passed for each. The required final proof-layout run reported `2 items, 5 steps, 0 defects`.

## Unedited findings

Both remaining defects are in current-run suppliers outside batch 65 and are recorded in the findings JSON. `def-qftx-wavefront-hadamard` (batch 58) uses a torsion-free metric-compatible connection without citing or depending on a result that supplies its existence and uniqueness. The available published supplier `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` states the needed result for smooth nondegenerate metrics, but it carries an explicit `AC_ω` hypothesis; this assumption is absent from the defective item's prerequisites. Closing this needs either that hypothesis and dependency or a local construction under the stated assumptions.

`lem-qftx-local-polynomial-functionals-are-microcausal` (batch 60) proves its wavefront inclusion in the fixed Minkowski coordinates in step 2.1, while its statement uses the global wavefront set defined from all charts. Its dependency list omits `lem-qftx-wavefront-chart-invariance`, or an equivalent all-chart argument, needed to pass from the coordinate estimate to the global statement. Both supplier items are outside the assigned write scope.

## Page verdicts

- `qftx-scale-cocycles`: pass. Its three item placements and direct page prerequisites are consistent with the assigned material; its frontmatter-only body is expected by the current workflow.
- `qftx-scale-cocycles-examples`: pass. It places the assigned truncation example and requires its A-page supplier; its frontmatter-only body is expected.

Blocker: none.

## Coverage note

All four assigned items and both assigned pages were opened, together with the direct dependencies and the supplier statements used in the reviewed arguments. I did not independently re-audit every further mathematical foundation behind the general distribution and wavefront suppliers; the report does not claim that broader foundational audit.
