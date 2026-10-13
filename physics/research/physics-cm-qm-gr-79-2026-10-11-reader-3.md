# Reader report — physics-cm-qm-gr-79-2026-10-11, batch 3

Role: reader-3. Scope: assigned batch 3 only.

## Opened inventory

### Page A: `cm-math-dynamics`

Opened `library/non-relativistic-classical-mechanics-mathematics/cm-math-dynamics.md` and all 23 assigned items:

- `def-cm-local-flow-of-an-autonomous-system`
- `lem-cm-local-flow-composition-law`
- `lem-cm-continuous-dependence-on-initial-data`
- `thm-cm-smooth-dependence-and-the-variational-equation`
- `cor-cm-flow-domain-open-and-flow-is-c1`
- `prop-cm-first-return-map-is-a-local-c1-diffeomorphism`
- `def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent`
- `def-cm-bilateral-shift-space-and-cylinders`
- `lem-cm-bilateral-shift-metric-and-sequential-compactness`
- `def-cm-topologically-mixing-dense-periodic-and-sensitive-maps`
- `thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive`
- `rem-cm-recurrence-scope-for-mechanical-systems`
- `thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism`
- `thm-cm-exponential-stability-by-a-lyapunov-quadratic-form`
- `thm-cm-instability-of-a-hyperbolic-saddle`
- `def-cm-mechanical-vector-field-and-energy-in-a-chart`
- `lem-cm-energy-conservation-for-the-mechanical-system`
- `lem-cm-positive-definite-matrix-square-roots`
- `lem-cm-strict-minimum-has-positive-semidefinite-hessian`
- `thm-cm-quadratic-mode-decomposition`
- `thm-cm-energy-stability-of-a-strict-minimum`
- `prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium`
- `rem-cm-scope-of-energy-stability-and-quadratic-modes`

### Page B: `cm-math-dynamics-examples`

Opened `library/non-relativistic-classical-mechanics-mathematics/cm-math-dynamics-examples.md` and all 6 assigned items:

- `ex-cm-flow-of-a-linear-system-is-the-matrix-exponential`
- `ex-cm-coupled-oscillator-modes`
- `ex-cm-planar-harmonic-oscillator-return-map`
- `ex-cm-bilateral-shift-finite-checks`
- `ex-cm-jordan-block-dichotomy-computed`
- `cex-cm-nonhyperbolic-equilibria-defeat-exponential-conclusions`

Also opened the two current-run draft suppliers reached by assigned dependency closures: batch 1 `def-cm-equilibrium-and-lyapunov-stability` and batch 2 `thm-cm-compact-continuation-for-locally-lipschitz-odes`. For the reviewed claims I checked the invoked published mathematical statements, including the real spectral theorem, complexification and exponential-series results, Euclidean norm/Cauchy–Schwarz and Heine–Borel results, the sine zero-set result, and the inverse/implicit-function and mean-value results. No defect in those supplier statements was found in the portions needed here.

## Repairs

1. **`thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism`** — Made the real inner-product structure and the complexified Hermitian norm explicit in the statement and Facts & Assumptions. Added the finite-dimensional completeness and matrix-boundedness justifications needed to apply the exponential-series result. Replaced the infinite-series rearrangement on a generalized eigenspace by a finite partial-sum rearrangement using nilpotence, supplied the real/complexified kernel equality in Step 2.2, and defined the block operator norm used in Step 2.3. The added suppliers are recorded in the item and proof contract. Evidence: the complex norm used in the estimates is now defined in F1 and Steps 1.2–3.1; the kernel identification is proved from real and imaginary parts in Step 2.2; the finite rearrangement is displayed in Step 1.2.

2. **`thm-cm-exponential-stability-by-a-lyapunov-quadratic-form`** — Added the spectral eigenvalue bounds and operator-norm identity for the positive definite matrix in F5, and the Heine–Borel compactness premise in F6. Replaced the transpose-operator-norm estimate in Step 1.1 by an entrywise Cauchy–Schwarz estimate. Step 3.1 now cites F6 for compactness of the Lyapunov sublevel set. Evidence: the proof uses the exact bounds in Steps 1.1, 2.1, 3.1, 4.1, and 6.1.

3. **`thm-cm-instability-of-a-hyperbolic-saddle`** — Defined the complexification and its norm in F1, including why an unstable complex eigenvector yields a nonzero real vector with backward decay. Made finite-dimensional operator-norm boundedness explicit in F3; added the spectral eigenvalue bound in F6 and Heine–Borel to justify compact-ball continuation. Rebuilt the two quadratic forms and their Lyapunov equations locally in Step 1.1, avoiding reliance on a separate theorem’s proof. The zero-dimensional stable-subspace case is stated explicitly. Evidence: F1, F3, F5–F6, and Steps 1.1–5.1 now provide the definitions and estimates used in the instability argument.

4. **`thm-cm-quadratic-mode-decomposition`** — Specified the curve domain as an order-convex subset of `R` with at least two points and containing `0`, and stated continuity of the first and second domain-relative derivatives. This makes the interval and endpoint convention explicit without changing the modal conclusion. Evidence: the statement now defines `I` and its domain-relative regularity before the system is used.

5. **`prop-cm-first-return-map-is-a-local-c1-diffeomorphism`** — Repaired the section-chart argument in Step 4.1 for `n=1`, where the cited implicit-function theorem has no positive-dimensional horizontal variable. Continuity of `h'` gives a fixed nonzero sign locally; the mean-value theorem gives strict monotonicity and a local singleton chart. For `n≥2`, the existing implicit-function chart applies. The proof also verifies the ambient `C^1` regularity of `P` and `Q` before restriction to the section. Evidence: Step 4.1 separates the two dimensions and Steps 3.3–5.1 retain the inverse identities after shrinking neighborhoods.

6. **`ex-cm-planar-harmonic-oscillator-return-map`** — Added the sine zero-set theorem as a direct prerequisite and cited it for the positive return time and the open-segment exclusion. Evidence: F3 and Verification Steps 2.1 and 3.1 establish that the first positive hit is at `pi/omega`.

7. **`def-cm-topologically-mixing-dense-periodic-and-sensitive-maps`** — Removed the false remark that mixing and transitivity are equivalent under compactness/no-isolated-point hypotheses. The replacement states only the valid implication from mixing to transitivity and makes no converse claim. Evidence: the revised first remark states this distinction.

8. **`thm-cm-energy-stability-of-a-strict-minimum`** — Narrowed the energy-conservation remark. It now explains non-attraction for nearby non-equilibrium data in this strict-minimum mechanical setting, without making the false general claim that a conserved-energy system cannot have an asymptotically stable equilibrium. Evidence: the revised remark uses strict-minimum energy positivity and conservation, and the theorem itself asserts Lyapunov stability only.

The proof contract at `research/physics-cm-qm-gr-79-2026-10-11-batch-3.proof-contracts.json` was synchronized for the six contracted proofs/examples: derivation claims and input tags match their final numbered paragraphs, citation-use records match the tagged facts, and the quadratic-mode endpoint boundary record reflects the explicit interval convention. No changed item contained a stale `verification.judge` record.

## Validation

- Reflow ran on all eight changed items and reported `unchanged` for each.
- Precheck passed for the seven proof-bearing items. The definition-only `def-cm-topologically-mixing-dense-periodic-and-sensitive-maps` had `0 checked, 0 failing`.
- The required single proof-layout invocation reported: `8 items, 44 steps, 0 defects`.

## Manifest reconciliation blocker

The frozen author-time batch-3 manifest at `research/physics-cm-qm-gr-79-2026-10-11-batch-3.pages.json` does not match the repaired direct dependencies in four items. Reader scope permits item/A-page prose and proof-contract repair, not manifest edits. Before a manifest-sync gate, an authorized owner must reconcile:

- `thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism`: add `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-euclidean-space-complete`, `thm-complex-numbers-are-the-real-coordinate-plane`, `thm-cauchy-schwarz-and-the-euclidean-norm`, and `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`; remove `def-series-of-vectors-and-rearrangement`.
- `thm-cm-exponential-stability-by-a-lyapunov-quadratic-form`: add `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-heine-borel-rn`, and `thm-cauchy-schwarz-and-the-euclidean-norm`.
- `thm-cm-instability-of-a-hyperbolic-saddle`: add `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-heine-borel-rn`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-complexification-of-a-real-vector-space`, `def-complexification-of-a-real-linear-map`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-euclidean-space-complete`, and `thm-complex-numbers-are-the-real-coordinate-plane`; remove `thm-cm-exponential-stability-by-a-lyapunov-quadratic-form` and `thm-extreme-value-metric`.
- `ex-cm-planar-harmonic-oscillator-return-map`: add `thm-sine-cosine-zero-sets-and-fundamental-period`.

The manifest was left unchanged as required by the reader scope. This is a workflow reconciliation blocker, not a remaining mathematical defect in the reviewed items.

## Uneditable defects and page verdicts

- No confirmed mathematical defect remains unedited in the assigned items or pages. No proposed withdrawal was present.
- `cm-math-dynamics` — **pass after the listed repairs**; its summary matches the assigned dynamics content.
- `cm-math-dynamics-examples` — **pass after the listed repairs**; its summary matches the assigned example content.

## Coverage limitation

All 29 assigned items and both assigned pages were opened, along with the two current-run draft suppliers identified above and the published statements needed for the reviewed proof steps. I did not re-audit every unrelated proof in the published suppliers’ transitive closures. The frozen manifest reconciliation remains outstanding and must be completed by an authorized owner before any manifest-sync gate.
