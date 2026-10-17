# Step 3a reader report — batch 65

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `65`  
Role: reader

## Verdict

Reviewed both assigned pages and all 20 assigned items, following the manifest's dependency levels. I also opened the direct suppliers and claim-relevant transitive targets before making final defect decisions. A few outside-batch supplier carriers were opened after their assigned consumers, so I do not claim a strictly supplier-first read order across the full transitive closure. I repaired two confirmed defects in assigned items. No uneditable defect remains in the reviewed scope. No judgment or certification was added.

## Opened inventory

- Batch manifest: `research/numerical-optimization-dynamics-2026-10-16-batch-65.pages.json`.
- Proof contracts: `research/numerical-optimization-dynamics-2026-10-16-batch-65.proof-contracts.json`.
- Assigned A page: `library/numerical-differential-equations-and-stochastic-dynamics/implicit-stiff-time-stepping-and-algebraic-error.md`.
- Assigned B page: `library/numerical-differential-equations-and-stochastic-dynamics/implicit-stiff-time-stepping-and-algebraic-error-examples.md`.
- Assigned items: `def-implicit-residual-and-algebraic-error-units`; `lem-strongly-monotone-continuous-map-is-bijective`; `def-backward-euler-step-equation`; `def-implicit-runge-kutta-stage-equations`; `def-two-stage-sdirk-tableau`; `def-two-stage-radau-iia-tableau`; `def-scalar-rk-a-and-l-stability`; `lem-small-step-implicit-rk-branch-and-residual-error`; `alg-newton-chord-implicit-residual-with-factorization-reuse`; `thm-backward-euler-dissipative-resolvent-contraction`; `prop-two-stage-sdirk-order-two-and-l-stability`; `prop-two-stage-radau-iia-order-three-and-l-stability`; `thm-backward-euler-algebraic-update-residual-error-budget`; `thm-implicit-rk-global-order-with-stage-residual-control`; `cor-constant-step-bdf2-order-two-with-consistent-start`; `alg-implicit-stiff-time-stepper-with-consistent-starts`; `ex-newton-budget-exhaustion-with-a-unique-backward-euler-root`; `ex-stiff-scalar-decay-and-trapezoid-ringing`; `ex-dissipative-backward-euler-residual-contraction`; `ex-robertson-reaction-system-newton-work`.
- Direct suppliers opened: `alg-finite-budget-newton-for-vector-residuals`; `alg-newton-correction-for-vector-residuals`; `alg-variable-step-bdf2-with-selected-implicit-branch`; `def-c-one-map-and-local-inverse`; `def-complete-metric-space`; `def-complex-conjugate-real-imaginary-part-and-modulus`; `def-complex-numbers-and-arithmetic`; `def-euclidean-inner-product`; `def-first-order-ode-initial-value-problem-and-solution`; `def-jacobian-matrix-and-gradient`; `def-metric-space`; `lem-discrete-one-step-error-recurrence-bound`; `lem-of-square-monotone`; `thm-banach-fixed-point`; `thm-brouwer-fixed-point-theorem`; `thm-cauchy-schwarz-and-the-euclidean-norm`; `thm-euclidean-space-complete`; `thm-global-error-from-one-step-defect-and-stability`; `thm-multivariable-taylor-formula-with-lagrange-remainder`; `thm-of-square-roots`; `thm-total-derivative-computes-directional-and-partial-derivatives`; `thm-variable-step-bdf2-order-two-under-ratio-bound`.
- Additional claim-relevant suppliers opened: `thm-cauchy-schwarz-finite`; `lem-a-fixed-point-free-ball-map-produces-a-boundary-retraction`; `thm-no-retraction-from-a-disk-onto-its-boundary`; `thm-complex-numbers-form-a-field`; `def-one-step-ode-method-local-defect-order-and-stability`; `lem-variable-step-bdf2-interpolation-and-local-defect`; `lem-variable-step-bdf2-increment-ratio-recurrence`; `lem-exponential-dominates-one-plus-x`; `thm-exponential-addition-formula`; `def-invertible-euclidean-linear-map`; `lem-finite-budget-newton-work-and-status`; `def-linear-multistep-method-consistency-order-and-root-condition`.

## Repairs

1. In `cor-constant-step-bdf2-order-two-with-consistent-start`, the optional backward Euler startup proof cited the invariant-ball lemma while its Facts & Assumptions silently required the startup ball to be centered at `y(0)`. The statement did not impose that center. I made the exact root and the ODE endpoint's membership in the closed ball explicit, retained arbitrary invariant contractive balls, and rewrote Proof 2.1 by translating the invariant stage map to the ball's center. In that representation the translated map is bounded by `R/h` and remains `L_2`-Lipschitz, so the cited one-stage lemma applies. The Taylor estimate gives the unscaled endpoint residual `O(h^2)`, and the lemma gives the same starter error; the coordinate bound transfers it to the max norm. Updated the contract's step 2.1 derivation. No judge record was present. Reflow and precheck passed; final proof-layout reported 0 defects.

2. In `alg-implicit-stiff-time-stepper-with-consistent-starts`, the Definition had no explicit output record or BE/Runge–Kutta grid loop, and did not say how a BE startup feeds BDF2. I specified the status/prefix/log output, the `n=0,...,N-1` BE/RK loop, BDF2 startup and later-step behavior, and the exact-root versus residual-tolerance completion labels. I also corrected the forward-error note: `thm-backward-euler-algebraic-update-residual-error-budget` is the BE estimate; the cited stage-residual lemma is the RK estimate. Updated the contract's endpoint boundary evidence. The only item consumer is `ex-robertson-reaction-system-newton-work`; its finite-precision trace and explicit disclaimer remain consistent with the updated procedure. No judge record was present. Reflow and precheck passed; final proof-layout reported 0 defects.

The Robertson binary64 residual sequences were independently recomputed using partial-pivoting Gaussian elimination and matched the displayed values to their printed precision. No page prose was edited.

## Unedited defects

None identified in the assigned items, pages, or inspected suppliers.

## Page verdicts

- `implicit-stiff-time-stepping-and-algebraic-error` (A): sound. Its summary accurately distinguishes scalar L-stability from nonlinear contractivity and residual size from forward error. The BDF2 summary's selected-root, smooth-tube, and consistent-start qualifications match the theorem.
- `implicit-stiff-time-stepping-and-algebraic-error-examples` (B): sound. The three scalar examples match their computations and hypotheses. The Robertson work summary is supported by the independently reproduced binary64 trace and the item explicitly limits what that trace establishes.

## Blocker and coverage note

There is no batch-65 review blocker. The live run status reports an unrelated `3a-split` blocker: `split-25 failed 3x` for batch 25. I did not intervene in that stage.

No file matching `reader-65`, `bundle`, or `rendered` was found in the run's runtime tree, so I used the current source carriers directly. I checked the direct suppliers and the additional transitive statements/proofs listed above, but did not recursively audit every foundation beneath the published suppliers or independently revalidate their external bibliography URLs. No reviewed inference required an unresolved external citation.
