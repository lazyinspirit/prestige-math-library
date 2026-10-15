# Step 3a reader report — batch 13

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Scope: batch `13`

## Opened inventory

Assigned pages opened:

- `td-phases-and-limits` — `library/thermodynamics/td-phases-and-limits.md`.
- `td-phases-and-limits-examples` — `library/thermodynamics/td-phases-and-limits-examples.md`.

All assigned items were opened and reviewed, in supplier-before-consumer order:

- A page: `def-td-thermodynamic-limit-contract`; `pthm-td-fixed-tp-reaction-potential-minimum`; `def-td-phase-and-coexistence-domain`; `pthm-td-intensive-coexistence-conditions`; `pthm-td-reaction-boundary-equilibrium`; `pthm-td-clapeyron-local`; `pthm-td-compact-continuous-phase-mixture`; `pthm-td-regular-gibbs-phase-rule`; `rem-td-nonsmooth-phase-scope`.
- Examples page: `ex-td-reaction-boundary-example`; `cex-td-noncompact-phase-mixture-no-attained-maximum`; `ex-td-finite-two-state-partition-smooth`; `ex-td-vdw-positive-slope`; `ex-td-phase-fraction-lever-rule`; `ex-td-compact-continuous-phase-mixture`; `ex-td-phase-rule-single-component`; `ex-td-reactive-phase-rule-three-component`; `ex-td-clapeyron-linear-branches`; `cex-td-clapeyron-zero-volume-jump`.

The required page-context summaries were opened: `td-math-mixture-dynamics-and-shells`, `td-potentials-and-responses`, and `td-math-continuum-pressure`. Their unrelated item inventories were not audited. I treated the batch manifest, proof contracts, notes, and coverage record as context, then checked the current item carriers independently.

Claim-relevant direct suppliers opened:

- Thermodynamic definitions and model premises: `def-td-equilibrium-state-domain`, `def-td-isolated-compound-feasible-set`, `def-td-legendre-potentials`, `def-td-process-and-protocol`, `def-td-response-functions`, `def-td-reversible-process`, `def-td-si-quantities`, `def-td-temperature-pressure-chemical-potential`, `def-td-system-and-permitted-exchanges`, `def-td-galilean-rest-frame`, `post-td-bulk-additivity`, `post-td-concave-fundamental-entropy`, `post-td-entropy-maximum`, `post-td-first-law-energy`, and `post-td-macroscopic-second-law`.
- Thermodynamic result suppliers: `pthm-td-local-energy-representation`, `pthm-td-potential-differentials`, and `pthm-td-euler-and-gibbs-duhem`.
- Measure and integration suppliers: `def-borel-sigma-algebra`, `def-probability-measure`, `def-tdmath-measure-integral`, `lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-measure`, `def-measure-space`, `def-nonnegative-lebesgue-integral`, `def-nonnegative-simple-measurable-function`, `def-simple-function-and-canonical-representation`, `def-integral-of-a-nonnegative-simple-function`, `lem-well-definedness-of-the-simple-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, and `thm-integral-triangle-inequality`.
- Other mathematical suppliers: `def-ck-euclidean-maps-and-diffeomorphisms`, `def-finite-sum`, `def-natural-logarithm`, `def-natural-numbers`, `def-real-exponential-function-and-e`, `def-tdmath-countable-canonical-model`, `lem-tdmath-stoichiometric-tangent-cone`, `lem-tdmath-smooth-partial-legendre-transform-differential`, `lem-tdmath-euler-identity-for-degree-one-homogeneous-function`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `thm-chain-rule-for-total-derivatives`, `thm-chain-sum-product-and-composition-rules-for-banach-derivatives`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `thm-compact-subset-is-closed-and-bounded`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-derivative-of-exponential`, `thm-euclidean-inverse-function-theorem`, `thm-extreme-value-metric`, `thm-heine-borel-rn`, `thm-logarithm-derivative-and-integral`, `thm-rank-nullity`, `thm-real-power-continuity-and-derivatives`, `thm-tdmath-local-implicit-rank`, `thm-tdmath-phase-dimension`, and `lem-closed-subset-of-a-compact-space-is-compact`.
- The optional common-law homogeneity branch used by the page context was checked at its exact supplier: `post-td-common-bulk-constitutive-law`.

## Repairs

1. `def-td-thermodynamic-limit-contract`, Definition: the original text called `\mathbb N` the positive-integer index set, but its exact supplier `def-natural-numbers` defines `\mathbb N` with zero. I now define `\mathbb N_{>0}:=\mathbb N\setminus\{0\}` before use and index the sequence by that set. The contract still makes no limit-existence or derivative-interchange claim.

2. `ex-td-finite-two-state-partition-smooth`, Example: the original text called a single two-state model “one finite-state model from” the thermodynamic-limit contract, although it does not specify the contract’s sequence, volume, amount, or boundary data. I clarified that it illustrates the contract’s finite-state canonical-sum clause and makes no sequence claim. I checked this direct consumer and `rem-td-nonsmooth-phase-scope`; the latter's account of the contract remains accurate. No proof-contract derivation changed for this example.

3. `pthm-td-reaction-boundary-equilibrium`, Proof 4.1: the original substitution `h=-\nu^{\mathsf T}\mu` mixed extent units (mol) with chemical-potential units (J mol\(^{-1}\)). It also covered only `J_*=\varnothing`, which does not follow from the Statement's weaker condition that `\xi_*` is interior when a zero-amount constraint is redundant. The repaired step uses the stated interior condition to obtain the full tangent space and tests both directions `\pm(1\,\mathrm{mol})e_k` in each reaction coordinate. Their pairings with `\nu^{\mathsf T}\mu` have units joules and force every component to vanish. The affected step-4.1 proof-contract derivation was updated. The item had no `verification.judge` record to remove.

4. `ex-td-reactive-phase-rule-three-component`, Verification 3.1: the original displayed derivative minor omitted the derivatives of the coexistence equations with respect to `x_1^\alpha`, so it was not the derivative matrix of the stated equation map. Differentiating the chemical-potential formulas in step 2.1 gives the composition derivative matrix and pressure derivative recorded in the repair. The corrected minor includes its nonzero alpha-phase column; expansion along the last row gives determinant `(-5a_\alpha/6)q(\eta^2/3)\ne0`. The affected step-3.1 proof-contract derivation was updated. The item had no `verification.judge` record to remove.

No page prose was edited. No other confirmed defect remained in the assigned carriers or the suppliers needed for these claims.

## Page verdicts

- `td-phases-and-limits`: no remaining confirmed defect in the assigned page summary. It accurately limits its claims to declared smooth charts, exact process and feasible-set data, local same-tag homogeneity, and the compact-mixture assumptions. The repaired positive-index convention agrees with the mathematical supplier. Page remains a draft.
- `td-phases-and-limits-examples`: no remaining confirmed defect in the assigned page summary. It distinguishes constructed model values from measurements and does not transfer the A-page's equilibrium assumptions to every example. The finite two-state summary remains a finite-model calculation without a limit claim. Page remains a draft.

## Validation and blocker

- Reflow returned exit code 0 and `unchanged` for all four changed items: `def-td-thermodynamic-limit-contract`, `ex-td-finite-two-state-partition-smooth`, `pthm-td-reaction-boundary-equilibrium`, and `ex-td-reactive-phase-rule-three-component`.
- Precheck passed for the three proof-bearing changed items; the definition had zero proof steps to check.
- The required single proof-layout invocation covered all four changed paths, but the renderer failed before checking them: `ERR_MODULE_NOT_FOUND: Cannot find package '@/components' imported from .../prestige-intelligence/web/components/library/ItemBody.tsx`. This is an environment/tool blocker; proof-layout status is unresolved. I did not alter the external web checkout.
- No uneditable defect was confirmed in the assigned scope.
