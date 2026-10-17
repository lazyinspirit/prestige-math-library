# Step 3a reader report — batch 36

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `36`

## Opened inventory

Assigned pages:

- A page: `library/numerical-differential-equations-and-stochastic-dynamics/linear-multistep-methods-and-dahlquist-equivalence.md`
- B page: `library/numerical-differential-equations-and-stochastic-dynamics/linear-multistep-methods-and-dahlquist-equivalence-examples.md`

All 16 manifest items were opened and reviewed in supplier-first order.

| Level | Assigned items |
|---:|---|
| 0 | `def-linear-multistep-method-consistency-order-and-root-condition`; `lem-variable-step-adams-lagrange-weights` |
| 1 | `alg-adams-pece-one-correction`; `lem-companion-powers-bounded-under-root-condition`; `lem-linear-multistep-order-conditions-from-taylor`; `lem-variable-step-bdf2-interpolation-and-local-defect` |
| 2 | `alg-variable-step-bdf2-with-selected-implicit-branch`; `thm-dahlquist-equivalence-for-linear-multistep-methods`; `cex-repeated-unit-root-causes-linear-parasitic-growth`; `ex-one-pass-pece-differs-from-implicit-adams-stability`; `ex-repeated-interior-root-preserves-bounded-powers`; `ex-simple-unit-circle-roots-give-bounded-oscillation` |
| 3 | `lem-variable-step-bdf2-increment-ratio-recurrence`; `ex-uniform-step-bdf2-satisfies-dahlquist-conditions` |
| 4 | `thm-variable-step-bdf2-order-two-under-ratio-bound`; `cex-unrestricted-variable-step-ratios-amplify-bdf2-starter-error` |

Direct dependency items opened:

- `def-first-order-ode-initial-value-problem-and-solution`
- `def-complex-numbers-and-arithmetic`; `thm-complex-numbers-form-a-field`; `def-complex-conjugate-real-imaginary-part-and-modulus`
- `def-companion-matrix-of-a-linear-recurrence`; `prop-companion-matrix-iterates-a-linear-recurrence`; `thm-characteristic-polynomial-of-a-recurrence-companion-matrix`
- `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`; `def-algebraically-closed-field`; `cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form`; `def-jordan-block-and-jordan-string`; `def-jordan-canonical-form`; `lem-characteristic-polynomial-of-block-triangular-matrix`
- `thm-multivariable-taylor-formula-with-lagrange-remainder`
- `lem-exponential-dominates-one-plus-x`; `thm-exponential-addition-formula`
- `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`; `thm-complex-exponential-addition-and-real-extension`; `thm-quarter-turn-values-and-shift-formulas`

Additional suppliers opened for those interfaces were `lem-complex-polynomial-growth-and-minimum-modulus`, `lem-dalembert-minimum-modulus-descent`, and `thm-jordan-form-exists-iff-the-characteristic-polynomial-splits`.

After the definition repair, I read the two direct batch-52 consumers `def-absolute-stability-regions-for-one-step-and-multistep-methods` and `lem-bdf2-root-locus-location` to check impact. Their mathematical uses of the coefficient convention and root condition remain supported.

I read the batch-36 proof contracts, batch notes, cross-batch dependency record, and source locators as evidence, then checked their supplier interfaces and mapped steps against the current item text. Author decisions and validator records were not treated as mathematical verdicts.

## Mathematical review and edit

### Repaired: `def-linear-multistep-method-consistency-order-and-root-condition`

The order definition introduced an exact solution `y` after fixing `f`, but did not say that method order had to hold across all IVPs and their smooth exact solutions. The reverse implication in `lem-linear-multistep-order-conditions-from-taylor` tests `y(t)=t^m` for each `m`; these are exact solutions of different right-hand sides. Without the universal quantifier, that coefficient test does not follow for a fixed IVP. I made the definition require the residual bound for every open domain, every right-hand side of the stated type, and every corresponding smooth exact solution.

This matches the standard method-level local-truncation-error convention in Driscoll and Braun, *Fundamentals of Numerical Computation*, §6.6.2, Definition 6.6.3: the formula's order is read from the local residual evaluated on an exact solution. The universal test is also what makes the moment proof's polynomial solutions admissible. The coefficient identities `rho(1)=0` and `rho'(1)=sigma(1)` then follow from the moments as stated.

I updated the batch-36 proof-contract excerpt for this Definition in the three consumer contracts that quote it, and the definition's finite-smoke assertion. The item had no `verification.judge` record to remove. No other item or page prose was edited.

Required checks on the final item text:

- `node tools/tsx-run.mjs tools/reflow.mts items/def-linear-multistep-method-consistency-order-and-root-condition.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-linear-multistep-method-consistency-order-and-root-condition.md` — 0 checked, 0 failing.
- `node tools/proof-layout.mjs items/def-linear-multistep-method-consistency-order-and-root-condition.md` — 1 item, 0 steps, 0 defects.

### Other mathematical claims

The Lagrange-weight lemma and PECE algorithm use the actual grid nodes and keep one corrector pass distinct from solving the implicit Adams equation. The Taylor moment expansion, companion-power/root-condition equivalence, and constant-step Dahlquist necessity/sufficiency arguments preserve their stated hypotheses. The variable-step BDF2 derivation cancels the constant, first-derivative, and second-derivative terms correctly; its local defect bound uses both ratio bounds. The convergence theorem separately states starter accuracy, the Lipschitz tube, and the selected-root existence/uniqueness conditions. Its increment estimate and discrete Grönwall bound are sound under those hypotheses.

The examples and counterexamples check out: repeated interior roots decay polynomially times geometrically; repeated unit roots produce unbounded modes; the PECE and implicit trapezoidal multipliers differ at `z=-3`; uniform-step BDF2 satisfies the stated order/root tests; and the explicit nonuniform grid gives a starter perturbation tending to zero while `Y_2` tends to `1/2`.

## Source checks

- Driscoll and Braun, *Fundamentals of Numerical Computation*, [§6.6](https://fncbook.com/multistep/): Definition 6.6.3 gives the local truncation-error convention; §6.6.3 derives Adams formulas by integrating interpolants. In [§6.8.1](https://fncbook.com/zerostability/), Theorem 6.8.1 states the root-condition equivalence for zero-stability. These support the fixed-step conventions; the assigned items supply the local proofs, including repeated roots.
- Söderlind, Fekete, and Faragó, [BIT Numerical Mathematics §4](https://link.springer.com/article/10.1007/s10543-018-0716-y), equations (4.1)–(4.4), PDF pp. 12–13: the variable-step BDF2 homogeneous recurrence factors into a first-difference update with multiplier `r^2/(1+2r)`. The threshold `r <= 1+sqrt(2)` follows by solving `r^2 <= 1+2r`; the assigned lemma proves this directly and does not infer arbitrary-grid stability from a single-step factor.
- The cited Hairer–Wanner course-notes PDF and Hairer–Nørsett–Wanner textbook PDF timed out in the web reader. I did not treat the authors' source-coverage record as a substitute for independent reading of those full sections. The assigned interpolation and error calculations were checked locally, and the nonuniform BDF2 recurrence was cross-checked against the accessible BIT article.

## Page verdicts

- **A page — `linear-multistep-methods-and-dahlquist-equivalence`:** supported after the order-quantifier repair. Its summary accurately states the constant-step results and the separate variable-step BDF2 hypotheses; the PECE procedure makes no inherited stability or convergence claim.
- **B page — `linear-multistep-methods-and-dahlquist-equivalence-examples`:** supported. The examples match their computations and distinguish simple unit roots, repeated interior roots, repeated unit roots, and one-pass PECE from the implicit corrector.

## Uneditable finding and blocker

The batch-52 contract for `lem-bdf2-root-locus-location` still stores the pre-edit Definition excerpt at `research/numerical-optimization-dynamics-2026-10-16-batch-52.proof-contracts.json`, `contracts.lem-bdf2-root-locus-location.citations[fact=F2].quote`. Its F2 use of the unchanged `rho`/`sigma` convention remains mathematically valid, but the copied full Definition section no longer matches the current batch-36 supplier. Refreshing this excerpt belongs to batch 52 and was not edited here. This is the sole uneditable finding.

## Coverage limitation

All 16 assigned items and both assigned pages were opened, along with their 19 direct dependency items and the three additional supporting items listed above. I did not independently re-audit the entire 704-item transitive prerequisite closure of those published suppliers. The two Hairer PDF retrievals also failed in the web reader; the accessible FNC and BIT sources and the local derivations resolved the mathematical points reviewed here. No other blocker or unresolved mathematical uncertainty remains for batch 36.
