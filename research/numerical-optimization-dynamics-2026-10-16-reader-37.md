# Step 3a reader report — batch 37

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `37`  
Role: reader  

## Opened inventory

Read the batch manifest and the 12 proof contracts in `research/numerical-optimization-dynamics-2026-10-16-batch-37.proof-contracts.json`, using them as evidence rather than verdicts. Opened both assigned pages:

- `parabolic-finite-difference-methods` (A): `library/numerical-pdes-and-spatial-discretization/parabolic-finite-difference-methods.md`.
- `parabolic-finite-difference-methods-examples` (B): `library/numerical-pdes-and-spatial-discretization/parabolic-finite-difference-methods-examples.md`.

Read all 13 assigned items, in supplier-before-consumer order, and the two additional item suppliers in their dependency closure:

1. `def-rectangular-grid-and-dirichlet-flux-stencil` (supplier).
2. `lem-discrete-summation-by-parts-poincare-and-inverse-bound` (supplier).
3. `def-parabolic-theta-finite-difference-scheme`.
4. `lem-parabolic-dirichlet-laplacian-is-positive-selfadjoint`.
5. `lem-periodic-heat-difference-amplification-symbol`.
6. `thm-parabolic-theta-scheme-local-truncation-error`.
7. `lem-parabolic-theta-step-exists-uniquely`.
8. `thm-forward-euler-heat-cfl-and-nyquist-instability`.
9. `thm-parabolic-theta-l2-stability-for-half-theta`.
10. `thm-parabolic-theta-scheme-global-error-bound`.
11. `thm-theta-scheme-discrete-maximum-principle`.
12. `ex-backward-euler-damps-high-frequencies`.
13. `ex-crank-nicolson-preserves-high-frequency-amplitude`.
14. `ex-forward-euler-parabolic-cfl-threshold-and-nyquist-growth`.
15. `ex-continuous-and-discrete-heat-maximum-principles`.

Also opened the three page prerequisites listed by the A-page manifest: `heat-equation-maximum-principles-duhamel-and-smoothing`, `linear-scheme-stability-and-lax-equivalence`, and `elliptic-finite-difference-methods`. For the summary claims, also read `thm-weak-parabolic-maximum-principle` and `lem-grid-stability-transfers-under-uniform-norm-comparison`; the grid definition and summation-by-parts supplier above cover the relevant elliptic-page claims.

## Review and edit

Found a proof gap in `thm-theta-scheme-discrete-maximum-principle`, Proof step 1.1. The former rearrangement placed future-time neighboring values on the right while describing that side as known and nonnegative. Future interior values are unknown at that point, so this did not establish the positivity needed by step 1.2.

Rewrote step 1.1 using full-grid values: future-time neighbors remain on the implicit left side, while the right side contains only old interior and boundary values. Its old-center coefficient is nonnegative under the stated condition, and its neighbor coefficients are nonnegative. Step 1.2's negative-minimum argument then compares the full future stencil with this genuinely known nonnegative right side. Updated the corresponding step 1.1 derivation in the batch proof contract. The item had no `verification.judge` record to remove.

Validation after the final edit: `reflow.mts` reported unchanged; `precheck.mts` passed (1 checked, 0 failing); `proof-layout.mjs` reported 1 item, 4 steps, 0 defects.

No other defect was found in the assigned items, their dependency closure, or the two page summaries. No repair was made to either page.

## Page verdicts

- `parabolic-finite-difference-methods` (A): no remaining defect identified after the local maximum-principle proof repair. Its summaries of the endpoint-weighted boundary treatment, residual/error orders, and separate grid-norm stability claim are supported by the reviewed items.
- `parabolic-finite-difference-methods-examples` (B): no defect identified. The Fourier examples match their periodic hypotheses; the sampled heat example satisfies the stated continuous and discrete bounds under its CFL condition.

## Uneditable defects and blockers

No confirmed uneditable defect remains. The run status read during this review showed an existing `3a-split` blocker for batch 6; it is outside batch 37 and did not block this review. No batch-37 blocker was encountered.

## Coverage limitation

The listed external bibliography URLs and source locators were not independently reopened. The reviewed finite-grid arguments were checked from their local definitions, cited item statements, and elementary calculations; no external source was needed to resolve a proof step.
