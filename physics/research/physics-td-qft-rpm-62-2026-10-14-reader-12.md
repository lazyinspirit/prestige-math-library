# Step 3a reader report — batch 12

- Run: `physics-td-qft-rpm-62-2026-10-14`
- Role: independent reader
- Scope: batch `12`

## Opened inventory

Pages:

- `td-math-mixture-dynamics-and-shells` — `library/thermodynamics-mathematics/td-math-mixture-dynamics-and-shells.md`
- `td-math-mixture-dynamics-and-shells-examples` — `library/thermodynamics-mathematics/td-math-mixture-dynamics-and-shells-examples.md`

Assigned items (13 A-page items and 4 B-page items):

- `def-tdmath-mixture-generator-space-and-energy`
- `def-tdmath-elastic-collision-kernel`
- `def-tdmath-finite-site-shell-and-canonical-law`
- `def-tdmath-ornstein-uhlenbeck-equation`
- `def-tdmath-regular-energy-shell`
- `thm-tdmath-continuous-ideal-gas-block-limit`
- `thm-tdmath-hamiltonian-measure-and-recurrence`
- `thm-tdmath-compact-continuous-mixture-attainment`
- `thm-tdmath-independent-microcanonical-block-limit`
- `thm-tdmath-ornstein-uhlenbeck-model`
- `thm-tdmath-regular-collision-entropy`
- `thm-tdmath-regular-energy-shell-measure`
- `thm-tdmath-discrete-quantum-cesaro-dephasing`
- `cex-tdmath-noncompact-mixture-nonattainment`
- `cex-tdmath-nonconcave-ensemble-inequivalence`
- `cex-tdmath-nonergodic-volume-flow`
- `ex-tdmath-pure-state-versus-average-entropy`

Relevant direct dependency interfaces opened in dependency order included:

- Measure, integration, products, and logarithms: `def-borel-probability-law-on-a-polish-space`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-measure`, `def-measure-space`, `def-probability-measure`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-dominated-convergence`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-logarithm-derivative-and-integral`, `thm-natural-logarithm-laws`, `cor-integral-logarithm-is-strictly-increasing`, `def-natural-logarithm`, `def-real-exponential-function-and-e`, and `def-finite-sum`.
- Compactness and calculus: `thm-heine-borel-rn`, `thm-extreme-value-metric`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-euclidean-implicit-function-theorem`, `thm-chain-rule`, `cor-mean-value-theorem`, `thm-integration-by-parts`, `thm-gaussian-integral`, `thm-of-square-roots`, `thm-exponential-beats-every-polynomial`, `lem-distance-to-set-is-lipschitz`, `lem-finite-measure-uniqueness-on-a-pi-system`, and `thm-metric-closure-characterisation`.
- Symplectic volume and ergodic theory: `def-axiom-of-choice`, `def-symplectic-form-and-symplectic-manifold`, `def-hamiltonian-vector-field-and-hamiltonian-function`, `cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form`, `thm-liouville-volume-preservation`, `def-measure-preserving-transformation-and-system`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-poincare-recurrence-for-finite-measure-preserving-systems`, `def-ergodic-measure-preserving-system`, `thm-birkhoff-ergodic-theorem`, and `cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems`.
- Stochastic calculus: `def-brownian-motion`, `def-elementary-predictable-brownian-integrand`, `def-ito-integral-for-square-integrable-predictable-processes`, `thm-existence-of-continuous-brownian-motion`, `thm-ito-integral-process-has-a-continuous-martingale-version`, `thm-ito-isometry-and-linearity-in-predictable-l2`, and `cor-deterministic-ito-integrals-are-gaussian`.
- Complex analysis and trace class: `def-complex-exponential`, `thm-complex-exponential-addition-and-real-extension`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-derivative-of-exponential`, `thm-ftc-second-part`, `def-real-and-complex-inner-product-space`, `def-trace-class-operator`, `lem-finite-rank-compressions-converge-in-trace-norm`, `thm-cyclicity-of-the-trace`, `thm-trace-class-is-a-two-sided-banach-operator-ideal`, `thm-trace-is-absolutely-convergent-and-basis-independent`, and `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues`.
- Current-run draft dependency: `thm-tdmath-general-trace-gibbs-model` was read with its current statement and complete proof. Its use by `thm-tdmath-discrete-quantum-cesaro-dephasing` remains explicitly conditional; no acceptance was inferred.

For the public-interface clarifications, I also opened `def-td-regular-hamiltonian-shell-preparation`, `pthm-td-invariant-regular-microcanonical-shell`, and `pthm-td-collision-h-theorem` to check their uses of the repaired batch-12 suppliers. No consumer repair was required.

## Reader findings and repairs

1. `thm-tdmath-independent-microcanonical-block-limit`, step 1.2, had the direction of the logarithm inequality wrong: `log u <= u-1` does not yield the displayed lower bound on relative entropy. I replaced it with `log u >= 1-1/u`, derived by applying the published logarithm inequality to `1/u`, and stated the equality case. I also made the endpoint continuity of `-x log x`, compact-simplex argument, bounded-expectation step, and `log(N+1)/N -> 0` estimate explicit so no sequential-compactness or growth result is silently assumed.

2. `thm-tdmath-compact-continuous-mixture-attainment`, steps 1.1, 2.1, 3.1, 4.1, and 5.1, used sequential compactness without an exact supplier. I replaced those appeals with closed-and-bounded arguments from `thm-heine-borel-rn`, coordinate extrema from `thm-extreme-value-metric`, a direct closed-graph proof, an open-cover proof that the convex-combination image is compact, and a liminf subsequence whose pair converges by construction. The finite partition in step 4.1 now follows from a finite cover of compact `G`, without an unproved uniform-continuity premise.

3. `thm-tdmath-hamiltonian-measure-and-recurrence`, Statement, now says the sampled region `R` must be measurable and invariant under `T=phi_tau`; it identifies the restriction as a self-map preserving `m|_R`. This supplies the self-map hypothesis in `def-measure-preserving-transformation-and-system`. The recurrence and Birkhoff conclusions already used an invariant region in Facts & Assumptions. I checked the assigned shell theorem and nonergodic-flow example, plus the downstream invariant-shell consumer; their uses satisfy the clarified condition.

4. `thm-tdmath-regular-collision-entropy`, Statement, Facts & Assumptions, and step 2.1, now define the periodic spatial domain as a product of quotient intervals with its quotient Lebesgue measure, specify `f_ref` as a positive constant, and state the time-derivative and transport hypotheses explicitly, together with per-time measurability and spatial $L^1$ integrability of the collision-production integrand. Step 2.1 establishes measurability of the velocity integral from the regularity and sigma-finite Lebesgue factor, then uses the stated spatial $L^1$ hypothesis; it does not presume integrability of an unstated product measure. I also wrote the production factor as `log(A/B)`, so the logarithm is applied to a dimensionless ratio. The downstream kinetic-theorem consumer states compatible integrability envelopes, absolute convergence, and constant reference density; no repair was required.

5. `thm-tdmath-regular-energy-shell-measure`, Statement, now states `n >= 1`, matching the cited regular-shell definition's ambient-dimension hypothesis `m >= 2`. Its downstream shell-preparation definition already states `n >= 1`.

6. `thm-tdmath-continuous-ideal-gas-block-limit`, step 2.1, now gives the integral bound showing `log(N+1)/N -> 0` before using the factorial error as `o(N)`.

7. `cex-tdmath-nonconcave-ensemble-inequivalence`, step 3.1, now handles the empty compact-set case and gives the logarithmic growth estimate needed for the polynomial type count to be dominated by the exponential gap.

8. `cex-tdmath-noncompact-mixture-nonattainment`, Example, now states only that the unconstrained noncompact example demonstrates failure of general attainment. It no longer suggests that the example tests removal of the barycenter-feasibility conditions in the separate compact theorem.

The batch-12 proof contract was updated for the changed derivations and assumptions. No changed item carried a `verification.judge` record; no verification stamp was added. No library page prose, other batch item, plan, or published item was edited.

## Page verdicts

- `td-math-mixture-dynamics-and-shells`: Reader verdict — no remaining defect found after the repairs above. Its summary accurately limits the mixture, collision, stochastic, Hamiltonian, and shell conclusions to their stated assumptions.
- `td-math-mixture-dynamics-and-shells-examples`: Reader verdict — no remaining defect found. Its examples and counterexamples are mathematical constructions, not reported experiments.

## Validation and blockers

- Reflow and precheck passed for all eight changed items; reflow reported them unchanged.
- Final batched proof-layout: 8 items, 43 proof steps, 0 defects.
- The first proof-layout invocation could not resolve the web renderer's `@/components` alias. Re-running with the workspace's prepared temporary app-alias configuration resolved the renderer and completed the required check. No blocker remains.
- Uneditable defects: none identified. Findings JSON therefore has an empty `findings` array.

Coverage note: I reviewed both assigned pages, all 17 assigned items, and the direct supplier interfaces used by their arguments, including the current-run draft Gibbs supplier. I did not independently re-audit every published supplier's own transitive proof closure; no unresolved uncertainty in those supplier interfaces affected these verdicts.
