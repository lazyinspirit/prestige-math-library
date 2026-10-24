# Lane 03 rendering audit

Audit: math-library-rendering-audit-2026-10-23; category: **numerical-differential-equations-and-stochastic-dynamics**; lane: **03**.

Assignment research/math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/assignment-03.json (SHA256 93d148dcbee4fdb6c32d09e00b8f6063ec4cf3477e241a4504da0582b30b5c95). Reviewed 67 assigned items and opened all 95 receipt-listed PNG tiles individually with detail: original. Every tile is explicitly attested in the JSON coverage ledger. Titles and complete frozen ItemBodies were reviewed against the assigned snapshots.

## Findings

No confirmed LaTeX/TikZ rendering defects, mathematical diagram defects, or screenshot clipping defects. Receipts report zero TikZ render failures; no receipt-listed tile contains a rendered TikZ diagram. Findings array is empty.

## Existing diagram checks

All assigned receipts report `tikz_count: 0` and `diagram_failures: []`; no rendered diagrams were present to audit. Per-item receipt evidence is recorded in `existing_diagram_checks` in the JSON ledger.

## Editorial diagram candidates

These are high-likelihood explanatory candidates, not rendering defects. Preserve the stated hypotheses and avoid turning a schematic into an additional proof claim.

### alg-age-cohort-characteristic-quadrature

- Source: snapshots/alg-age-cohort-characteristic-quadrature.md, lines 40–48; frozen snapshot SHA256 4e2c11526ef29ebf93326afa0355a30939e2f9775124a09d5c911639ca7c8c4d.
- Kind: age-time characteristic/cohort diagram.
- Claim: Each initial cohort moves on the exact characteristic a_i^{k+1}=a_i^k+Δt, loses survival mass, and may leave at cutoff A; each step inserts a newborn at age 0 with mass Δt B_h^k.
- Draw/check: Plot age a against time t with initial cohorts on lines a=a_i^0+t, the newborn boundary a=0 at each step, survival-mass labels, cutoff crossing/outflow at a=A, and labels for birth rate B_h^k. Distinguish discrete step updates from exact characteristic paths.
- Evidence tile: research/math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/screenshots/alg-age-cohort-characteristic-quadrature--01.png, SHA256 9a32a242acaeaeb6db113da2e56dd31fdf525fa550be1de49d3a25965bf96e47.

### thm-age-structured-renewal-characteristic-solution

- Source: snapshots/thm-age-structured-renewal-characteristic-solution.md, lines 36–46, 58, 74; frozen snapshot SHA256 3329e09452de530de3cb976ded14657459f01e1002a4420f209f9e12c58a5920.
- Kind: characteristic regions in the time-age plane.
- Claim: The density has an old-cohort branch for a≥t and a newborn branch for 0≤a<t, split along the diagonal a=t; newborns enter at the renewal boundary and survive along characteristics.
- Draw/check: Show the time-age quadrant, diagonal a=t, characteristic lines of slope one, initial-data contributions from t=0, boundary births from a=0, and the survival factors. Label which branch supplies each part of n(t,a), and the Volterra birth-rate relation.
- Evidence tile: research/math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/screenshots/thm-age-structured-renewal-characteristic-solution--01.png, SHA256 ff2a712ff8ae88055b32fdcd09eec2a13d716d68e84f62b21bb2cf392549c5c2.

### def-hybrid-mode-guard-reset-system

- Source: snapshots/def-hybrid-mode-guard-reset-system.md, lines 29–33; frozen snapshot SHA256 e1016fc202da6fd8db9257cd37c68b4d1f80468478cc0248b386e106b6478bd4.
- Kind: directed hybrid mode/guard/reset graph.
- Claim: A transition (m,n) has a guard g_mn=0, signed crossing orientation σ_mn, and reset R_mn mapping the event state into the destination domain D_n; simultaneous first events use a fixed priority order.
- Draw/check: Use mode nodes m,n with within-mode flow y′=f_m(t,y), a directed edge labeled g_mn=0 and σ_mn·d(g_mn)/dt>0, and a reset arrow y(τ−)↦R_mn(τ,y(τ−)) in D_n. Add a small priority annotation for tied first guard zeros; avoid implying every trajectory has detected or finite events.
- Evidence tile: research/math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/screenshots/def-hybrid-mode-guard-reset-system--01.png, SHA256 5f37a8d4d78bb80866a8ac87728c8c5c867cc59d786f53ff9db754d6eb96540a.

### alg-mgrit-multilevel-recursive-cycle

- Source: snapshots/alg-mgrit-multilevel-recursive-cycle.md, lines 34–44; frozen snapshot SHA256 a1f5d628ccae7ba6ab94ac440c435a2465c2d1b4c3c406510c3bfa89f27eb292.
- Kind: multilevel time-grid and recursive correction schematic.
- Claim: The recursive cycle partitions each level into F/C points, restricts residuals, solves recursively on the coarse level, prolongs corrections, and applies pre/post-relaxation; ν_ℓ controls recursive visits.
- Draw/check: Show nested time grids with C points aligned to the next coarser grid, F points between them, restriction R_ℓ of residuals, prolongation P_ℓ of correction, and the repeated recursive call ν_ℓ times. Mark exact coarsest solve and outer residual check. Keep transfers and coarse matrix labeled as supplied inputs.
- Evidence tile: research/math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/screenshots/alg-mgrit-multilevel-recursive-cycle--01.png, SHA256 01cfa74b63d79af396ad97fb5ee5f9f1e59cceb8ec41574ef0ddd80f1cebaee1.

### ex-pseudo-arclength-crosses-x-squared-fold

- Source: snapshots/ex-pseudo-arclength-crosses-x-squared-fold.md, lines 48–58; frozen snapshot SHA256 0d42df1b2b3a3295ecf027c6a1bd499666acc6fe828553f90e8ad424a9e2f1ff.
- Kind: solution-curve and pseudo-arclength predictor/corrector diagram.
- Claim: For F(x,λ)=x²−λ=0, the curve λ=x² folds at (0,0); the finite certified step starts at x=−α and reaches x=α+α²>0 across the fold using an x-directed pseudo-arclength section.
- Draw/check: Plot λ=x² with fold at (0,0), seed (−α,α²), positive-x tangent/predictor, transverse section x=α+α², and corrected root on the positive branch. Annotate λ′(0)=0 and that the claim is one finite local certified step, not global continuation.
- Evidence tile: research/math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/screenshots/ex-pseudo-arclength-crosses-x-squared-fold--01.png, SHA256 cb42d39fa566b6c5204995c439e1161edb8ec194638d133b7b473eef7e9ecc32.

### thm-hopf-local-branch-and-stability

- Source: snapshots/thm-hopf-local-branch-and-stability.md, lines 50–58; frozen snapshot SHA256 f3545f126da6807a4c40ba3eda42acf8b40c58638df58078178af6190f4f6c83.
- Kind: local Hopf amplitude/parameter bifurcation sketch.
- Claim: Small periodic orbits exist only for βℓ₁<0 with r²=−β/(ω₀ℓ₁)+O(|β|^{3/2}); the radial multiplier and transverse spectrum determine local stability under the stated conditions.
- Draw/check: Plot amplitude r≥0 against β, indicate only the local branch on βℓ₁<0 with leading square-root scaling, phase multiplier 1, radial multiplier μ_rad, and mark stability only when all transverse eigenvalues have the required sign. Label the sketch local and distinguish parameter orientation from the existence side.
- Evidence tile: research/math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/screenshots/thm-hopf-local-branch-and-stability--01.png, SHA256 89279a4cd9bccecb3e2cd03696c40acd7ed7fa060c127d7d5e0e39768c40df6e.

## Coverage

The JSON ledger gives each assigned item’s title, frozen source/snapshot/HTML hashes, receipt hash, every receipt-listed tile path and hash, and an explicit individual original-resolution viewing attestation.

| Item | Tile count | Tile files opened individually at original resolution |
|---|---:|---|
| alg-age-cohort-characteristic-quadrature | 1 | alg-age-cohort-characteristic-quadrature--01.png |
| alg-certified-projected-euler-method | 1 | alg-certified-projected-euler-method--01.png |
| alg-euler-maruyama-autonomous | 1 | alg-euler-maruyama-autonomous--01.png |
| alg-frozen-slow-explicit-fast-euler | 1 | alg-frozen-slow-explicit-fast-euler--01.png |
| alg-mgrit-multilevel-recursive-cycle | 1 | alg-mgrit-multilevel-recursive-cycle--01.png |
| alg-one-dimensional-first-impact-with-restitution | 1 | alg-one-dimensional-first-impact-with-restitution--01.png |
| alg-rosenbrock-shifted-qr-solver-with-residual-certificate | 2 | alg-rosenbrock-shifted-qr-solver-with-residual-certificate--01.png, alg-rosenbrock-shifted-qr-solver-with-residual-certificate--02.png |
| alg-validated-euler-flow-and-monodromy-enclosure | 1 | alg-validated-euler-flow-and-monodromy-enclosure--01.png |
| cex-forward-euler-negative-concentration-despite-stability | 1 | cex-forward-euler-negative-concentration-despite-stability--01.png |
| cex-unrestricted-variable-step-ratios-amplify-bdf2-starter-error | 1 | cex-unrestricted-variable-step-ratios-amplify-bdf2-starter-error--01.png |
| def-absolute-stability-regions-for-one-step-and-multistep-methods | 1 | def-absolute-stability-regions-for-one-step-and-multistep-methods--01.png |
| def-certified-ivp-approximation-and-sensitivity-interface | 1 | def-certified-ivp-approximation-and-sensitivity-interface--01.png |
| def-exact-split-flows-lie-strang-and-bracket | 1 | def-exact-split-flows-lie-strang-and-bracket--01.png |
| def-hybrid-mode-guard-reset-system | 1 | def-hybrid-mode-guard-reset-system--01.png |
| def-matrix-contractivity-and-logarithmic-norm | 1 | def-matrix-contractivity-and-logarithmic-norm--01.png |
| def-reaction-network-propensity-system-and-generator | 1 | def-reaction-network-propensity-system-and-generator--01.png |
| def-simple-fold-complement-splitting-and-projection | 1 | def-simple-fold-complement-splitting-and-projection--01.png |
| def-xd-countable-l1-distance | 1 | def-xd-countable-l1-distance--01.png |
| ex-box-muller-finite-midpoint-tail | 1 | ex-box-muller-finite-midpoint-tail--01.png |
| ex-constant-mortality-and-age-localized-fertility | 1 | ex-constant-mortality-and-age-localized-fertility--01.png |
| ex-dissipative-backward-euler-residual-contraction | 1 | ex-dissipative-backward-euler-residual-contraction--01.png |
| ex-fast-decay-problem-rejects-at-minimum-step | 1 | ex-fast-decay-problem-rejects-at-minimum-step--01.png |
| ex-half-size-division-numerical-moment-budget | 1 | ex-half-size-division-numerical-moment-budget--01.png |
| ex-lcg-low-bit-alternation | 1 | ex-lcg-low-bit-alternation--01.png |
| ex-near-unit-floquet-multiplier-is-inconclusive | 1 | ex-near-unit-floquet-multiplier-is-inconclusive--01.png |
| ex-one-pass-pece-differs-from-implicit-adams-stability | 1 | ex-one-pass-pece-differs-from-implicit-adams-stability--01.png |
| ex-pseudo-arclength-crosses-x-squared-fold | 2 | ex-pseudo-arclength-crosses-x-squared-fold--01.png, ex-pseudo-arclength-crosses-x-squared-fold--02.png |
| ex-rkc-stage-roundoff-quadratic-amplification | 1 | ex-rkc-stage-roundoff-quadratic-amplification--01.png |
| ex-simple-unit-circle-roots-give-bounded-oscillation | 1 | ex-simple-unit-circle-roots-give-bounded-oscillation--01.png |
| ex-symplectic-euler-harmonic-oscillator | 1 | ex-symplectic-euler-harmonic-oscillator--01.png |
| ex-van-der-pol-stability-conditional-on-validated-enclosure | 1 | ex-van-der-pol-stability-conditional-on-validated-enclosure--01.png |
| ex-zero-denominator-corner-and-factorized-extension | 1 | ex-zero-denominator-corner-and-factorized-extension--01.png |
| lem-baoab-one-step-error-moment-bounds | 2 | lem-baoab-one-step-error-moment-bounds--01.png, lem-baoab-one-step-error-moment-bounds--02.png |
| lem-canonical-kick-and-drift-shears-have-symplectic-jacobians | 1 | lem-canonical-kick-and-drift-shears-have-symplectic-jacobians--01.png |
| lem-column-stochastic-l1-nonexpansive | 1 | lem-column-stochastic-l1-nonexpansive--01.png |
| lem-convergent-power-series-termwise-differentiation | 1 | lem-convergent-power-series-termwise-differentiation--01.png |
| lem-equi-lipschitz-curves-in-compact-euclidean-set-have-uniformly-convergent-subsequence | 2 | lem-equi-lipschitz-curves-in-compact-euclidean-set-have-uniformly-convergent-subsequence--01.png, lem-equi-lipschitz-curves-in-compact-euclidean-set-have-uniformly-convergent-subsequence--02.png |
| lem-finite-coagulation-fragmentation-event-moments | 1 | lem-finite-coagulation-fragmentation-event-moments--01.png |
| lem-frozen-slow-euler-local-defect-bound | 2 | lem-frozen-slow-euler-local-defect-bound--01.png, lem-frozen-slow-euler-local-defect-bound--02.png |
| lem-index-one-dae-algebraic-residual-to-state-error | 1 | lem-index-one-dae-algebraic-residual-to-state-error--01.png |
| lem-mgrit-exact-coarse-elimination | 1 | lem-mgrit-exact-coarse-elimination--01.png |
| lem-normal-cone-maximal-monotone-and-projection-resolvent | 2 | lem-normal-cone-maximal-monotone-and-projection-resolvent--01.png, lem-normal-cone-maximal-monotone-and-projection-resolvent--02.png |
| lem-poisson-tau-leap-moment-and-covariance-identities | 1 | lem-poisson-tau-leap-moment-and-covariance-identities--01.png |
| lem-regular-curve-chart-and-pseudo-arclength-predictor-defect | 2 | lem-regular-curve-chart-and-pseudo-arclength-predictor-defect--01.png, lem-regular-curve-chart-and-pseudo-arclength-predictor-defect--02.png |
| lem-rosenbrock-shifted-inverse-perturbation | 1 | lem-rosenbrock-shifted-inverse-perturbation--01.png |
| lem-simple-fold-complement-restriction-is-an-isomorphism | 2 | lem-simple-fold-complement-restriction-is-an-isomorphism--01.png, lem-simple-fold-complement-restriction-is-an-isomorphism--02.png |
| lem-strongly-monotone-continuous-map-is-bijective | 1 | lem-strongly-monotone-continuous-map-is-bijective--01.png |
| lem-variable-step-bdf2-interpolation-and-local-defect | 1 | lem-variable-step-bdf2-interpolation-and-local-defect--01.png |
| prop-explicit-rk-order-conditions-through-four | 3 | prop-explicit-rk-order-conditions-through-four--01.png, prop-explicit-rk-order-conditions-through-four--02.png, prop-explicit-rk-order-conditions-through-four--03.png |
| prop-shooting-residual-zero-iff-bvp-solution | 1 | prop-shooting-residual-zero-iff-bvp-solution--01.png |
| thm-age-structured-renewal-characteristic-solution | 2 | thm-age-structured-renewal-characteristic-solution--01.png, thm-age-structured-renewal-characteristic-solution--02.png |
| thm-backward-euler-cq-compatible-quadratic-first-order-error | 2 | thm-backward-euler-cq-compatible-quadratic-first-order-error--01.png, thm-backward-euler-cq-compatible-quadratic-first-order-error--02.png |
| thm-centered-difference-dirichlet-second-order-error | 2 | thm-centered-difference-dirichlet-second-order-error--01.png, thm-centered-difference-dirichlet-second-order-error--02.png |
| thm-continuous-flow-log-density-equation | 3 | thm-continuous-flow-log-density-equation--01.png, thm-continuous-flow-log-density-equation--02.png, thm-continuous-flow-log-density-equation--03.png |
| thm-euler-maruyama-strong-rate-for-square-integrable-initial-data | 4 | thm-euler-maruyama-strong-rate-for-square-integrable-initial-data--01.png, thm-euler-maruyama-strong-rate-for-square-integrable-initial-data--02.png, thm-euler-maruyama-strong-rate-for-square-integrable-initial-data--03.png, thm-euler-maruyama-strong-rate-for-square-integrable-initial-data--04.png |
| thm-finite-markov-closed-class-decomposition-correctness | 2 | thm-finite-markov-closed-class-decomposition-correctness--01.png, thm-finite-markov-closed-class-decomposition-correctness--02.png |
| thm-floquet-multiplier-cluster-certificate-soundness | 2 | thm-floquet-multiplier-cluster-certificate-soundness--01.png, thm-floquet-multiplier-cluster-certificate-soundness--02.png |
| thm-hopf-local-branch-and-stability | 3 | thm-hopf-local-branch-and-stability--01.png, thm-hopf-local-branch-and-stability--02.png, thm-hopf-local-branch-and-stability--03.png |
| thm-index-one-dae-finite-budget-solvers-terminate | 2 | thm-index-one-dae-finite-budget-solvers-terminate--01.png, thm-index-one-dae-finite-budget-solvers-terminate--02.png |
| thm-local-hopf-certificate-is-sound | 2 | thm-local-hopf-certificate-is-sound--01.png, thm-local-hopf-certificate-is-sound--02.png |
| thm-modified-patankar-euler-global-first-order-error | 1 | thm-modified-patankar-euler-global-first-order-error--01.png |
| thm-parareal-binomial-error-bound | 2 | thm-parareal-binomial-error-bound--01.png, thm-parareal-binomial-error-bound--02.png |
| thm-projected-euler-square-root-global-error | 2 | thm-projected-euler-square-root-global-error--01.png, thm-projected-euler-square-root-global-error--02.png |
| thm-retarded-delay-method-of-steps-well-posedness | 2 | thm-retarded-delay-method-of-steps-well-posedness--01.png, thm-retarded-delay-method-of-steps-well-posedness--02.png |
| thm-sdc-sweep-contraction-and-error-bound | 2 | thm-sdc-sweep-contraction-and-error-bound--01.png, thm-sdc-sweep-contraction-and-error-bound--02.png |
| thm-trapezoidal-a-stable-not-l-stable | 1 | thm-trapezoidal-a-stable-not-l-stable--01.png |
| thm-xd-finite-budget-adaptive-projection-soundness | 1 | thm-xd-finite-budget-adaptive-projection-soundness--01.png |

