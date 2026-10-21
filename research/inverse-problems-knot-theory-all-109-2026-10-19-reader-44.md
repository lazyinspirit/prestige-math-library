# Step 3a reader report — batch 44

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `44`  
Role: reader

## Opened inventory

Assigned pages:

- `library/inverse-problems/numerical-pde-inversion-and-adjoint-error-control.md` (A page; six items).
- `library/inverse-problems/numerical-pde-inversion-and-adjoint-error-control-examples.md` (B page; three examples/counterexamples).

Both pages have YAML frontmatter only, retain `page_layout: compact-v1`, and contain no summary body.

Assigned items reviewed in dependency order:

1. `def-ip-pde-solver-admissibility-contract`
2. `lem-ip-finite-element-reduced-gradient-from-discrete-adjoint`
3. `lem-ip-linear-finite-element-solve-residual-controls-state-error`
4. `prop-ip-discrete-adjoint-gradient-and-residual-status`
5. `alg-ip-finite-element-pde-tikhonov`
6. `thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination`
7. `ex-ip-pde-cfl-invalid-iterate`
8. `cex-ip-pde-biased-under-solved-adjoint-gradient`
9. `ex-ip-finite-element-mesh-error-at-zero-solve-residual`

I also opened batch 44's `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-44.proof-contracts.json` and reviewed all nine entries.

Direct item dependencies opened: `def-ip-nonlinear-forward-map`, `def-ip-nonlinear-tikhonov-functional`, `def-matching-affine-simplicial-meshes`, `def-reference-finite-element-and-unisolvent-dofs`, `def-euclidean-inner-product`, `thm-riesz-representation-in-finite-dimensions`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-nearest-point-in-a-nonempty-closed-convex-set`, `thm-chain-rule-for-total-derivatives`, `def-operator-norm`, `lem-projection-onto-closed-convex-set-is-nonexpansive`, `def-countable-choice`, `def-linear-elliptic-pde-constrained-control-problem`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-linear-elliptic-control-state-and-adjoint-wellposedness`, and `thm-zero-boundary-piecewise-polynomials-in-w10p`.

Selected second-level context opened for the inverse-map suppliers: `def-metric-space`, `def-ip-forward-map-and-solution-classes`, `def-hilbert-space`, `def-frechet-derivative-between-banach-spaces`, and `lem-the-frechet-derivative-is-unique`.

## Review and edit

The adjoint-gradient derivation, residual-to-error estimate, projection perturbation bound, finite-status branches, and termination argument are sound under their stated finite-dimensional model and certificate hypotheses. The forward-Euler mass/stiffness calculation and CFL interval are correct. The mesh example's integrals, Galerkin coefficient, two minimizers, and forward discrepancy (41/750) were recomputed; both square-fan TikZ diagrams correctly show the four triangular cells and the sole interior degree of freedom.

Repaired `cex-ip-pde-biased-under-solved-adjoint-gradient`. Its original false claim required a solver-contract-admitted output while also stipulating that no adjoint residual was checked. The displayed vector $\widetilde p=1$ has residual $2$ against tolerance $1$, so the contract-valid algorithm rejects it; that example did not refute the claim as written. The statement now concerns the sign obtained by substituting an arbitrary unchecked approximate adjoint, and the given data explicitly specify the scalar spaces and state branch. Step 3.1 now distinguishes the sign reversal from the algorithm's rejection of that invalid solver result.

Updated the counterexample's derivation and zero-case evidence in the batch proof contract. The item had no `verification.judge` record to remove. A search of `items/` and `library/` found no item consumers of this counterexample; only the assigned B page lists it.

Checks run after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/cex-ip-pde-biased-under-solved-adjoint-gradient.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-ip-pde-biased-under-solved-adjoint-gradient.md` — pass.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-44.proof-contracts.json --strict --items cex-ip-pde-biased-under-solved-adjoint-gradient --json` — pass.
- `node tools/proof-layout.mjs items/cex-ip-pde-biased-under-solved-adjoint-gradient.md` — one item, four steps, zero defects.

## Uneditable findings

The following published dependencies are outside this batch's write scope. Exact locations and evidence are also in the findings JSON.

- `def-euclidean-inner-product`, Definition lines 33–43 and 61–72 (also 100–103): the opening definition contains malformed title fragments such as “the function space of The vector space ...”. The zero-dimensional caveat later repeats the metric description and contains broken grammar, including duplicated “and $d_1,d_2,d_\infty$ are metrics” wording. The explicit inner-product formula remains visible, but the definition prose is ill-formed. Assigned consumer: `def-ip-pde-solver-admissibility-contract`.
- `def-metric-space`, Definition lines 44–46, 63–69, and 85–87: title-like parentheticals and the sentence beginning “Which metric axiom list...” leave the definition text malformed. The M1–M3 clauses themselves are clear. Assigned consumer: `def-ip-pde-solver-admissibility-contract`, through the assigned inverse-map dependencies.
- `def-hilbert-space`, Definition line 27: “(Banach space)” is a citation-only parenthetical after the complete term and duplicates the preceding phrase. Assigned consumer: `def-ip-pde-solver-admissibility-contract`.
- `def-frechet-derivative-between-banach-spaces`, Definition lines 27–47 and Remarks lines 64–75: internal wikilinks interrupt the definition and remark instead of appearing in following references sections. Assigned consumer: `def-ip-pde-solver-admissibility-contract`.
- `thm-cauchy-schwarz-and-the-euclidean-norm`, Statement lines 42–43: the statement inserts the referenced item's title after “as in” instead of using the mathematical convention directly. The theorem's inequalities are otherwise complete. Assigned consumer: `prop-ip-discrete-adjoint-gradient-and-residual-status`.
- `def-operator-norm`, Definition lines 34–42: wikilinks to the bounded-operator definition and least-upper-bound result remain inside the complete definition. Assigned consumer: `lem-ip-linear-finite-element-solve-residual-controls-state-error`.
- `def-linear-elliptic-pde-constrained-control-problem`, Definition lines 35–49: wikilinks to the zero-boundary, control-box, L2 Hilbert-space, and well-definedness suppliers remain inside the definition. Assigned consumer: `ex-ip-finite-element-mesh-error-at-zero-solve-residual`.
- `thm-linear-elliptic-control-state-and-adjoint-wellposedness`, Statement lines 39–41: “the setting of” an inline wikilink leaves the theorem statement dependent on a link instead of stating its hypotheses. The later Facts section gives the setting, but does not cure the interrupted statement. Assigned consumer: `ex-ip-finite-element-mesh-error-at-zero-solve-residual`.

## Page verdicts

- `numerical-pde-inversion-and-adjoint-error-control`: no page-level defect; the six-item inventory and compact frontmatter layout are correct. The published dependency defects above affect assigned item consumers.
- `numerical-pde-inversion-and-adjoint-error-control-examples`: no page-level defect; its three-item example inventory, compact frontmatter layout, and two diagrams are correct. The published dependency defects above affect assigned item consumers.

## Blocker and coverage note

No blocker remains for the assigned claims. I opened both assigned pages, all nine assigned items, their proof contracts, the direct supplier items listed above, and the selected second-level inverse-map context. The current `deps`/`justified_by` metadata closure has 1,106 item IDs; I did not independently inspect that entire foundational closure. This report therefore records only defects found in the assigned items and the relevant dependency text actually opened. No web search was needed: the checked computations and finite-dimensional arguments were derived directly, and no citation was called insufficient.
