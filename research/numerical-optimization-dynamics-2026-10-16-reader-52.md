# Step 3a reader report — batch 52

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `52`

## Opened inventory

### Pages

- Assigned A page: `stability-regions-and-stiff-equations`.
- Assigned B page: `stability-regions-and-stiff-equations-examples`.
- A-page prerequisites: `runge-kutta-methods-and-order` and `linear-multistep-methods-and-dahlquist-equivalence`.
- Linked context page: `positive-conservative-production-destruction-integrators`.

### Dependency items

Opened the first-order IVP convention and the linear-multistep convention; the variable-step BDF2 interpolation lemma and selected-branch algorithm; the complex-number arithmetic, field, conjugate, real/imaginary-part and modulus definitions; the published complex modulus-law lemmas `lem-complex-conjugation-and-modulus-laws` and `lem-complex-modulus-of-real-embedding-equals-real-absolute-value`; the explicit RK tableau definition, Euler/midpoint/RK4 tableaus, and their orders/stability-functions proposition; and the cited real-exponential and calculus items: `def-real-exponential-function-and-e`, `thm-derivative-of-exponential`, `thm-chain-rule`, `thm-exponential-limits-and-range`, `thm-algebra-of-derivatives`, `thm-algebra-of-continuous-functions`, `cor-zero-derivative-implies-constant`, `cor-exponential-reciprocal-and-positivity`, `def-continuity-real`, `def-derivative`, and `thm-composition-of-continuous-functions`. The last three were opened while checking the exact-solution proof; the repair now establishes the needed affine-composition continuity locally and uses existing direct dependencies.

### Assigned items

Reviewed all 12 assigned items in supplier-before-consumer order:

1. `def-matrix-contractivity-and-logarithmic-norm`.
2. `def-absolute-stability-regions-for-one-step-and-multistep-methods`.
3. `thm-backward-euler-a-and-l-stability` and `thm-trapezoidal-a-stable-not-l-stable`.
4. `lem-bdf2-root-locus-location`.
5. `thm-explicit-euler-absolute-stability-disk`, `thm-bdf2-is-a-stable`, and `prop-bdf2-roots-vanish-in-stiff-limit`.
6. `cex-backward-euler-scalar-stability-not-matrix-contractivity`, `ex-forward-euler-frequency-step-restriction`, `ex-diagonal-fast-slow-system-restricts-explicit-step`, and `ex-stiff-decay-mode-damping-comparison`.

The batch manifest, batch notes, and relevant proof-contract entries were consulted as evidence, not accepted as mathematical verdicts.

## Edits and evidence

- In `def-matrix-contractivity-and-logarithmic-norm`, made the dimension a positive integer and stated that the inner-product vector space is `R^d` and the matrices in the operator-norm, logarithmic-norm, and normality definitions are in `R^{d×d}`. This closes the undefined-dimension and incompatible-matrix cases in the formulas. Its only item consumer in the assigned dependency graph is the 2-by-2 counterexample; that witness and its norm computations remain valid. Updated the definition contract note. No `verification.judge` record was present.
- In `ex-stiff-decay-mode-damping-comparison`, made the affine-map continuity and derivative facts explicit, and added an epsilon-delta argument for continuity of `t ↦ exp(±ρt)` on `[0,h]`. The earlier proof attributed continuity of the constructed trajectory to the exponential definition, which only gives its value at zero. The repaired steps now use the smoothness statement for `exp`, the existing product rules and chain rule, the directly computed affine derivative, and the epsilon-delta continuity argument before applying the zero-derivative corollary. Updated the proof-contract derivations and inputs. No `verification.judge` record was present.
- In `lem-bdf2-root-locus-location` and `prop-bdf2-roots-vanish-in-stiff-limit`, added the published complex modulus laws used for multiplicativity and triangle estimates. The root-locus proof now explicitly derives the reciprocal-modulus relation and the equality case in coordinates. The stiff-limit proof derives reverse triangle from the cited triangle inequality and uses an epsilon bound for every root instead of leaving the square-root limit implicit. Updated the two item dependency lists, their batch-52 manifest rows, and their proof-contract citations and derivations. No `verification.judge` record was present.

Validation for the changed items:

- `reflow.mts`: unchanged for all four changed items.
- `precheck.mts`: matrix definition, 0 proof checks and 0 failures (not applicable); both BDF2 items and the stiff-decay example, 3 proofs checked and 0 failures.
- Final `proof-layout.mjs` run on all four changed item paths: 4 items, 9 steps, 0 defects.

## Other findings and page verdicts

- No confirmed defect remains unedited in the assigned items or pages.
- A page `stability-regions-and-stiff-equations`: its summary matches the checked scalar stability, BDF2 root, and matrix counterexample results. No page-prose repair was needed.
- B page `stability-regions-and-stiff-equations-examples`: its summary matches the checked frequency restriction, diagonal fast/slow restriction, matrix witness, and stiff-mode comparison. No page-prose repair was needed.

## Blocker and coverage limit

There is no batch-52 blocker. The live run status separately reports a `3a-split` blocker: `split-6` failed three times for batch 6.

I checked the assigned items and the direct dependency statements needed for their cited inferences, but did not audit the entire transitive dependency closure or re-prove every published calculus and exponential supplier from its own foundations. No external web search was needed for the direct algebraic and calculus arguments reviewed here.
