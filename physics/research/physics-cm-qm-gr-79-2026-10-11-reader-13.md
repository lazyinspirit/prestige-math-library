# Reader report: physics-cm-qm-gr-79-2026-10-11, batch 13

Role: Step 3a reader. Scope: batch 13 only. No publication, adjudication, or self-certification was performed.

## Opened inventory

Page A, `cm-math-chaos`, at `library/non-relativistic-classical-mechanics-mathematics/cm-math-chaos.md`:

- `def-bilateral-symbol-and-bounded-sequence-space`
- `lem-bounded-bilateral-sequence-ball-is-complete`
- `lem-coded-quadratic-recurrence-is-a-contraction`
- `lem-symbol-locality-gives-coding-continuity`
- `thm-henon-coded-invariant-set-is-conjugate-to-shift`
- `lem-finite-word-deviations-give-homoclinic-orbits`
- `def-stable-unstable-cones-and-line-slopes`
- `lem-slope-graph-transforms-converge`
- `lem-weighted-tail-contractions-give-c-one-curves`
- `lem-tail-curve-tangents-and-homoclinic-transversality`
- `lem-close-map-first-component-has-uniform-inverse`
- `lem-perturbed-scalar-recurrence-root-bounds`
- `thm-explicit-perturbed-horseshoe-and-transversality`
- `def-smooth-periodic-oscillator-pulse-model`
- `lem-rescaled-pulse-map-is-c-one-close-to-kick`
- `thm-smooth-fixed-mass-mechanical-horseshoe`

Page B, `cm-math-chaos-examples`, at `library/non-relativistic-classical-mechanics-mathematics/cm-math-chaos-examples.md`:

- `ex-cm-chaos-contraction-and-coded-fixed-sequence-checks`
- `ex-cm-chaos-slope-transform-fixed-point-checks`
- `ex-cm-chaos-finite-word-homoclinic-code-checks`
- `ex-cm-chaos-pulse-and-rotation-endpoint-checks`
- `ex-cm-chaos-perturbed-root-and-margin-checks`

The assigned items were checked in dependency order. I opened the 95 unique direct prerequisite items appearing in the batch dependency inventory (14 are assigned here; 81 are external direct suppliers), including the exact statements and relevant proof passages used in the checks. This includes the eight other-batch current-run drafts: `def-cm-bilateral-shift-space-and-cylinders`, `lem-cm-bilateral-shift-metric-and-sequential-compactness`, `thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive`, `def-cm-topologically-mixing-dense-periodic-and-sensitive-maps`, `def-cm-phase-domain-and-standard-symplectic-two-form`, `prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart`, `def-cm-stroboscopic-map`, and `thm-cm-compact-continuation-for-locally-lipschitz-odes`. The relevant published sources also opened include `lem-of-triangle-inequality`, `lem-geometric-sequence-null`, `lem-of-square-monotone`, the ODE hypotheses and solution results, the cited integral-calculus results, and the cited trigonometric results.

### Direct prerequisite inventory

The 81 external direct suppliers opened from the batch manifest divide into 73 published items and eight current-run drafts. Published: cor-banach-error-estimates, cor-inverse-matrix-by-adjugate, cor-trigonometric-parity-and-pythagorean-identity, def-abs-value, def-bounded-set, def-cauchy-in-metric, def-ck-euclidean-maps-and-diffeomorphisms, def-complete-metric-space, def-complete-ordered-field, def-continuity-real, def-countable-choice, def-darboux-integral, def-dense-top, def-dependent-choice, def-derivative, def-directional-and-partial-derivatives, def-first-order-ode-initial-value-problem-and-solution, def-function-space, def-integer-power, def-interval, def-isometry-and-metric-embedding, def-jacobian-matrix-and-gradient, def-lipschitz-holder-contraction, def-locally-lipschitz-in-the-state-variable, def-maximal-ode-solution, def-metric-ball, def-metric-compactness, def-metric-compactness-variants, def-metric-continuity, def-metric-convergence, def-metric-space, def-metric-topology, def-sequence, def-series, def-sine-and-cosine-by-power-series, def-total-derivative-in-euclidean-space, lem-geometric-sequence-null, lem-limit-preserves-order, lem-metric-limits-unique, lem-newton-contraction-near-an-invertible-derivative, lem-of-abs-value, lem-sup-metric-is-a-metric, lem-sup-unique, lem-test-function-cutoffs-and-euclidean-localization, thm-algebra-of-limits, thm-banach-fixed-point, thm-c1-dependence-of-solutions-on-initial-data, thm-cauchy-criterion-via-lub, thm-chain-rule-for-total-derivatives, thm-continuous-image-of-a-compact-space-is-compact, thm-continuous-implies-integrable, thm-euclidean-implicit-function-theorem, thm-existence-and-uniqueness-of-a-maximal-ode-solution, thm-extreme-value-metric, thm-ftc-second-part, thm-geometric-series, thm-gronwall-integral-inequality, thm-heine-borel-rn, thm-higher-regularity-of-local-inverses, thm-intermediate-value, thm-linearity-of-the-integral, thm-mean-value-inequality, thm-mean-value-inequality-for-total-derivatives, thm-metric-sequential-closure, thm-monotonicity-of-the-integral, thm-nonnegative-series-bounded-partial-sums, thm-norm-inequality-for-the-vector-valued-integral, thm-of-square-roots, thm-real-square-matrix-invertible-iff-determinant-nonzero, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period, thm-smooth-dependence-of-ode-solutions-on-parameters. Current-run drafts: def-cm-bilateral-shift-space-and-cylinders, def-cm-phase-domain-and-standard-symplectic-two-form, def-cm-stroboscopic-map, def-cm-topologically-mixing-dense-periodic-and-sensitive-maps, lem-cm-bilateral-shift-metric-and-sequential-compactness, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive, thm-cm-compact-continuation-for-locally-lipschitz-odes.

The full recursive closure is much larger; I did not re-audit every transitive published proof. I checked direct statements and the further source passages needed for the reviewed deductions. The assigned material makes mathematical model claims, not experimental or statistical claims.

## Repairs made

- `def-stable-unstable-cones-and-line-slopes`: made the complex coordinate field, embedding, imaginary unit, modulus, and real-linear action explicit using the exact complex-field and square-root suppliers. Corrected the horizontal/vertical axis exclusions for the two slope charts, defined bilateral sequences as functions on `Z`, and stated tangent vectors as linearly independent vectors in `R^2`.
- `lem-coded-quadratic-recurrence-is-a-contraction`: defined `sign(x)` on the nonzero inputs used by the coding and defined all iterates of `T_s` after establishing its self-map property.
- `lem-symbol-locality-gives-coding-continuity`: removed the inaccurate statement that the coded-contraction clause itself supplied the Banach error estimate; attributed that estimate to the Banach error result. Added the absolute-value triangle inequality as an explicit dependency and Fact for the coding estimate.
- `lem-close-map-first-component-has-uniform-inverse`: repaired the C2 extension argument. The contraction is now applied on an open parameter rectangle contained in the padded square, and the `delta + epsilon < 1` bound is used to keep the image in the contraction interval.
- `lem-finite-word-deviations-give-homoclinic-orbits`: added the square-monotonicity dependency and used it to prove the square-root comparisons, positivity of `a + 2 r_u`, the signs of `r_u`, and the required bound placing the constant code in `B_R`.
- `thm-explicit-perturbed-horseshoe-and-transversality`: stated the local sign convention. Repaired the backward-orbit estimate to give an absolute margin while allowing the first-coordinate sign to vary with the orbit index; explicitly constructed the full `H` orbit and its scalar recurrence. The resulting proof steps are numbered and formatted canonically.
- `def-smooth-periodic-oscillator-pulse-model`: justified construction and normalization of the smooth pulse from a cutoff and integral bounds; used a primitive and the fundamental theorem of calculus for the pulse normalization; named the Hamiltonian separately from the conjugated map; and specified the maximal-solution domains for the period and rescaled endpoint maps, including their equality by time reparametrization and uniqueness.
- `ex-cm-chaos-pulse-and-rotation-endpoint-checks`: made the trigonometric endpoint and integral-function claims explicit using the cited trigonometric, integrability, and FTC results. The pulse step now uses the model's established support and normalization. Canonical step numbering is `1.1`, `1.2`, `2.1`, `3.1`.
- `lem-rescaled-pulse-map-is-c-one-close-to-kick`: removed the unsupported assertion that this lemma alone verifies every hypothesis of the perturbed-horseshoe theorem (it lacked the theorem's other hypotheses and its root constant). Replaced it with the proved componentwise C1 closeness bound; the assigned downstream theorem supplies the remaining bridge.

Regenerated the affected batch proof contracts for the seven proof-bearing repairs: `lem-coded-quadratic-recurrence-is-a-contraction`, `lem-symbol-locality-gives-coding-continuity`, `lem-close-map-first-component-has-uniform-inverse`, `lem-finite-word-deviations-give-homoclinic-orbits`, `thm-explicit-perturbed-horseshoe-and-transversality`, `ex-cm-chaos-pulse-and-rotation-endpoint-checks`, and `lem-rescaled-pulse-map-is-c-one-close-to-kick`. No changed item had a `verification.judge` record, so none was removed.

For all nine changed items, reflow completed unchanged and precheck passed. The final proof-layout run covered all nine items (53 proof steps) and reported zero defects.

## Defects not editable in this batch

1. `lem-cm-bilateral-shift-metric-and-sequential-compactness`, Proof 1.1: the metric triangle inequality uses `|s_j-t_j| <= |s_j-u_j| + |u_j-t_j|` without a dependency or Fact supplying the real absolute-value triangle inequality. The exact statement of `lem-of-triangle-inequality` supplies it; add/cite that result or prove the coordinate inequality locally. Assigned direct consumer: `def-bilateral-symbol-and-bounded-sequence-space`. Current item SHA-256: `777e4983655367cca9d193a94100bcb28ef8553a63ace4c485144e8877f93417`.
2. The same source, Proof 2.1 and Proof 2.2: the choices of `m` and the convergence conclusion require `2^{-m} -> 0`; the stated geometric-series tail identity does not itself state this sequence limit. `lem-geometric-sequence-null`, applied with `r=1/2`, supplies it. Add/cite that result or prove the decay. Assigned direct consumer: `def-bilateral-symbol-and-bounded-sequence-space`. Same current source hash as above.
3. The same source, Proof 2.2: `s_k := r_m(k)` is prescribed for every `m >= |k|`, including `m=0` when `k=0`, but `r_m` is constructed only for `m >= 1`. Thus `s_0` is not defined by the witness as written. Define using `m >= max(1, |k|)` or define `r_0`. Assigned direct consumer: `def-bilateral-symbol-and-bounded-sequence-space`. Same current source hash as above.
4. `thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive`, Proof 1.1 and Proof 1.4: the epsilon choices require `2^{1-m} -> 0` and `2^{-k} -> 0`, respectively. The geometric-series facts listed in the item do not state that decay. `lem-geometric-sequence-null` with `r=1/2` supplies it. Assigned direct consumer: `thm-henon-coded-invariant-set-is-conjugate-to-shift`. Current item SHA-256: `f8334a99d9b592ef3ec28bdf3307e3c87ff05786c419381893842c9ae6ffa8aa`.
5. Suspected definitional gap in `def-cm-stroboscopic-map`, Definition opening paragraph: it refers to “the hypotheses” of the maximal-solution theorem for “locally Lipschitz in the state variable,” while that theorem's Statement abbreviates them as “Picard-Lindelof hypotheses.” The exact earlier definition `def-locally-lipschitz-in-the-state-variable` states the locally uniform-on-compact-time-state-cylinders condition, but this Definition does not identify it or state that content. State/cite the cylinder condition to make the class of admissible fields explicit. Assigned direct consumer: `def-smooth-periodic-oscillator-pulse-model`. The current source bytes differ from the captured initial snapshot only in an unrelated Remarks paragraph; the opening condition above was read in the current version. Current item SHA-256: `897050042b2ef325041a6c11065eb526575b3aa2e3b2d6d00af335a1e8587ef2`.

These draft suppliers are outside batch 13 and were not edited.

## Page verdicts and blocker

- `cm-math-chaos` (A): no page-summary prose defect found. Its conclusions are consistent with the assigned results as repaired, but the shift metric/compactness and mixing prerequisite findings above remain unresolved in another batch and affect consumers on this page. Owner disposition of those supplier findings is needed before relying on the dependent results as fully reviewed.
- `cm-math-chaos-examples` (B): no page-summary prose defect found. The examples are exact mathematical checks and make no empirical claim; the pulse example's unsupported integral-function step was repaired.
- Blocker: none for completing the reader assignment. The uneditable draft-prerequisite findings above remain outstanding for their owners.
