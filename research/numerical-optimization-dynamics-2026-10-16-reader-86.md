# Step 3a reader report — batch 86

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `86`

## Opened inventory

### Assigned pages

- `constrained-dynamics-shake-and-rattle` — `library/numerical-differential-equations-and-stochastic-dynamics/constrained-dynamics-shake-and-rattle.md` (A page).
- `constrained-dynamics-shake-and-rattle-examples` — `library/numerical-differential-equations-and-stochastic-dynamics/constrained-dynamics-shake-and-rattle-examples.md` (B page).

### Assigned items

All 13 A-page items and all four B-page examples were opened and reviewed. Items were read in dependency order.

- A page: `def-regular-holonomic-phase-space-and-dynamics`; `lem-smooth-residual-quotient-extension`; `lem-regular-holonomic-phase-space-is-symplectic-cotangent`; `lem-regular-holonomic-phase-residuals-control-distance-to-phase-manifold`; `def-regular-classical-rattle-step-map`; `thm-local-holonomic-constrained-hamiltonian-flow`; `lem-rattle-scaled-position-and-momentum-branches`; `alg-finite-budget-rattle-step-with-scaled-residuals`; `thm-rattle-exact-constraint-preservation-and-reversibility`; `thm-rattle-symplecticity-on-regular-constraint-phase-space`; `thm-finite-budget-rattle-solver-returns-status`; `thm-rattle-second-order-global-accuracy-on-compact-tubes`; `thm-rattle-scaled-solve-residual-error-budget`.
- B page: `ex-constrained-pendulum-equations-and-multiplier`; `ex-rigid-bond-rattle-free-rotor`; `ex-nearly-dependent-constraints-amplify-rattle-residuals`; `ex-rattle-residual-budget-and-global-trajectory-drift`.

### Dependencies opened

- Published dependencies used by the assigned items: `thm-multivariable-taylor-formula-with-lagrange-remainder`; `thm-chain-rule-for-total-derivatives`; `thm-mean-value-inequality-for-total-derivatives`; `def-symplectic-form-and-symplectic-manifold`; `def-symplectic-vector-space`; `thm-parametrized-implicit-function-theorem-with-higher-regularity`; `def-leapfrog-step-map`; `thm-picard-lindelof-local-existence-and-uniqueness`.
- Published prerequisites needed to interpret the cross-batch procedures: `def-first-order-ode-initial-value-problem-and-solution`; `def-invertible-euclidean-linear-map`; `def-c-one-map-and-local-inverse`; `def-jacobian-matrix-and-gradient`; `thm-total-derivative-computes-directional-and-partial-derivatives`.
- Current-run dependencies outside batch 86: batch 3 items `alg-newton-correction-for-vector-residuals` and `alg-finite-budget-newton-for-vector-residuals`; batch 65 items `def-implicit-residual-and-algebraic-error-units` and `alg-newton-chord-implicit-residual-with-factorization-reuse`. Their definitions were checked for the uses made by the assigned RATTLE algorithm; no defect was found.

## Repairs and evidence

1. `items/lem-smooth-residual-quotient-extension.md`: changed the title to say the extension is `C^k`, added `k ∈ N`, `k ≥ 1`, and `δ > 0` to the statement, and restricted proof step 1.1 to `|β| ≤ k`. The old title claimed smooth (`C^∞`) extension although the statement assumes only `C^{k+r}`. The previous proof sentence quantified over all parameter multi-indices even though derivatives beyond order `k+r` need not exist; the restricted range supplies exactly the mixed derivatives used later. Updated its contract and the direct consumer contract for `lem-rattle-scaled-position-and-momentum-branches`. No `verification.judge` record was present.

2. `items/alg-finite-budget-rattle-step-with-scaled-residuals.md`: clarified that the `h=0` branch returns only the identity state and `exact-identity` status, without multipliers or residual norms. The general success-output sentence now applies to nonzero steps, resolving its conflict with the explicit zero-step return. Updated the algorithm’s boundary contract and regenerated the contracts for its direct theorem consumers. No `verification.judge` record was present.

3. `items/thm-finite-budget-rattle-solver-returns-status.md`: clarified that its termination conclusion returns `exact-identity` when `h=0`, and a success or failure status for nonzero steps. The previous statement named only success or failure statuses even though the algorithm has a separate zero-step status. Updated the item contract. No `verification.judge` record was present.

No other assigned item or page required repair. The four cross-batch current-run dependencies listed above had no confirmed defects, so no uneditable finding remains.

## External source check

The RATTLE literature check used McLachlan, Modin, Verdier, and Wilkins, [“Geometric Generalisations of SHAKE and RATTLE”](https://arxiv.org/pdf/1207.3367): §5.1.3 (printed p. 24) for the classical RATTLE updates; §4.4, Corollary 4.8 (printed p. 21) for symplecticity; §4.5, Proposition 4.9 (printed pp. 21–22) for symmetry; and §4.3, Proposition 4.4 (printed p. 20) for first-order convergence. The assigned proofs provide the additional local arguments for the exact regular holonomic setting and the second-order global bound. The cited Hairer–Lubich–Wanner PDF host returned a browser parsing error, so that book was not independently opened.

## Page verdicts

- `constrained-dynamics-shake-and-rattle` — pass after the listed item repairs. Its summary matches the reviewed local branch, exact-map, second-order, and finite-residual results; its energy-conservation caveat is accurate.
- `constrained-dynamics-shake-and-rattle-examples` — pass, no page edits. The summary matches the pendulum calculation, the regular but ill-conditioned constraint family, and the restored-trajectory residual estimate.

## Remaining defects and blockers

- Uneditable defects: none found.
- Batch 86 blocker: none. The run status at close still showed the run active, with no worker in flight and no listed stage blocker.
- Coverage limit: I checked the dependency statements and proof portions needed for the assigned uses, but did not independently re-audit every transitive proof dependency of the published suppliers. The cited Hairer PDF limitation is recorded above; the relevant RATTLE source argument was available in the authors’ arXiv paper.

## Validation

- Reflow: all three changed items were unchanged by reflow.
- Precheck: `lem-smooth-residual-quotient-extension` and `thm-finite-budget-rattle-solver-returns-status` passed direct precheck; the algorithm item had zero proof sections to check and exited cleanly.
- Proof-contract check: strict check for the repaired items and affected direct consumers passed with zero errors and warnings.
- Proof layout: `node tools/proof-layout.mjs items/lem-smooth-residual-quotient-extension.md items/alg-finite-budget-rattle-step-with-scaled-residuals.md items/thm-finite-budget-rattle-solver-returns-status.md` — 3 items, 6 steps, 0 defects.
