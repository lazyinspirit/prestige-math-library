# Step 3a reader report — batch 15

Run: `mathematical-statistics-foundations-37`  
Role: reader  
Scope: batch `15` only

## Review result

I reviewed both assigned pages and all 18 assigned items against their current text. I repaired five assigned items and synchronized their proof-contract entries in the batch-15 and run-level contract files. No assigned claim remains defective, no out-of-scope content was edited, and there is no blocker.

## Opened inventory

### Assigned pages

- `library/mathematical-statistics/symmetrization-rademacher-complexity-and-covering-entropy.md` (A page, draft).
- `library/mathematical-statistics/symmetrization-rademacher-complexity-and-covering-entropy-examples.md` (B page, draft).

### Page prerequisites opened as context

- `library/mathematical-statistics/concentration-inequalities-and-tail-bounds.md` (draft).
- `library/mathematical-statistics/asymptotic-convergence-consistency-and-identification.md` (draft).
- `library/probability/independence-borel-cantelli-and-zero-one-laws.md` (published).
- `library/combinatorics/linear-algebra-methods-in-combinatorics.md` (published).

The current cross-batch dependency record identifies the first two as page-context prerequisites only; no batch-15 item has a logical item dependency on their items.

### Assigned items, reviewed in manifest dependency order

- Level 0: `def-empirical-process-and-rademacher-process`; `def-vc-class-of-sets-and-index`; `lem-bounded-variable-hoeffding-mgf`; `lem-finite-grid-interval-discrepancy`; `lem-real-power-preserves-measurability`.
- Level 1: `def-covering-packing-bracketing-number-and-metric-entropy`; `def-one-sided-empirical-rademacher-complexity`; `def-vc-subgraph-class-and-index`; `thm-finite-class-uniform-deviation`; `thm-independent-process-symmetrization`.
- Level 2: `lem-packing-covering-number-comparison`; `thm-one-sided-coordinate-rademacher-contraction`.
- Level 3: `lem-vc-set-covering-entropy`; `thm-absolute-rademacher-contraction`.
- Level 4: `thm-vc-covering-entropy`.
- B-page items: `cex-uncountable-class-has-nonmeasurable-empirical-supremum`; `cex-vc-entropy-exponent-cannot-be-uniform-in-r`; `ex-finite-class-rademacher-and-uniform-deviation`.

### Direct published dependency statements and definitions opened

I opened the exact Statements or Definitions used by all current direct suppliers (including the seven additional suppliers introduced by the Hoeffding repair). Their IDs are:

```text
cor-archimedean-reciprocal, cor-expectation-linearity-monotonicity-and-modulus-bound,
cor-exponential-reciprocal-and-positivity, cor-integral-over-a-null-set-vanishes,
cor-interval-uncountable, cor-markov-inequality-for-random-variables,
cor-mean-value-theorem, def-binomial-coefficient, def-canonical-natural,
def-countable, def-countable-choice,
def-expectation-of-a-nonnegative-or-integrable-random-variable,
def-finite-sum, def-identically-distributed-and-iid-random-variables,
def-independent-random-elements, def-integer-power,
def-integrable-real-and-complex-functions-and-their-integrals,
def-integral-of-a-nonnegative-simple-function, def-integral-over-a-measurable-set,
def-law-or-distribution-of-a-random-element,
def-measurable-function-between-measurable-spaces, def-measure,
def-measure-null-set-and-almost-everywhere, def-measure-with-density,
def-natural-logarithm, def-natural-numbers,
def-nonnegative-lebesgue-integral, def-ordered-field, def-probability-measure,
def-product-sigma-algebra-and-finite-product-sigma-algebras,
def-random-element-and-real-random-variable, def-rational-power, def-real-exponential-function-and-e,
def-real-power, def-shattering-and-vc-dimension, def-sigma-algebra,
lem-exponential-dominates-one-plus-x, lem-finite-sum-laws, lem-integer-part,
lem-measurable-functions-preserve-independence, lem-power-monotone,
lem-probability-measure-basic-identities, lem-rational-power-laws,
lem-subset-of-countable, prop-order-and-scalar-rules-for-the-nonnegative-integral,
thm-algebra-of-continuous-functions, thm-algebra-of-derivatives,
thm-arithmetic-and-lattice-operations-preserve-measurability,
thm-binomial-theorem, thm-chain-rule, thm-change-of-variables-for-expectation,
thm-composition-with-borel-functions-preserves-measurability,
thm-countable-union-of-countable, thm-derivative-of-exponential,
thm-exponential-addition-formula, thm-exponential-is-strictly-increasing,
thm-exponential-two-point-convexity,
thm-factorization-of-expectations-for-independent-variables, thm-ftc-second-part,
thm-indefinite-integral-of-a-nonnegative-function-is-a-measure,
thm-independent-random-elements-have-product-joint-law,
thm-induction-principle, thm-jensen-inequality-for-expectation,
thm-logarithm-derivative-and-integral, thm-minkowski-inequality-for-integrals,
thm-monotone-convergence-for-the-integral, thm-natural-logarithm-laws,
thm-of-archimedean, thm-real-power-agrees-with-rational-exponent,
thm-real-power-continuity-and-derivatives, thm-real-power-laws,
thm-sauer-shelah,
thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique,
thm-threshold-characterisations-of-real-and-extended-real-measurability,
thm-tonelli-theorem-for-sigma-finite-product-spaces
```

For choice-sensitive uses, I also inspected the relevant proof sections of `thm-intermediate-value`, `cor-exponential-is-a-bijection-onto-positive-reals`, `thm-derivative-of-exponential`, `thm-uniform-derivative-limit-on-a-closed-interval`, `lem-real-and-metric-notions-agree`, `lem-compactness-is-intrinsic`, `lem-finite-choice`, and `thm-sequential-criterion-for-continuity`. At the exact uses in the A-page arguments, the intermediate-value proof invokes only the choice-free forward direction of the sequential criterion; the finite-choice lemma appearing in the broad dependency metadata is itself proved by induction in ZF. The countable-choice converse and arbitrary-index choice are not used by the A-page proofs. The B-page nonmeasurability counterexample explicitly assumes Countable Choice.

## Repairs and evidence

- `lem-bounded-variable-hoeffding-mgf`, Proof 2.1: explicitly established integrability before using the expectation monotonicity corollary. The proof now uses the measurable set `A := {ω : |Y(ω)| ≤ 1}`, the measure `ν(B) := ∫_B |Y| dP`, monotonicity on `A`, and vanishing of the integral over the null complement. Added the exact integral and almost-everywhere suppliers to `deps` and Fact [F9].
- `lem-real-power-preserves-measurability`, Fact [F1] and Proof 1.1: stated the continuity on `(0,∞)` supplied by `thm-real-power-continuity-and-derivatives`, so the cited mean value theorem's closed-interval continuity hypothesis is explicit.
- `thm-independent-process-symmetrization`, Facts and Proofs 1.1, 3.1, and 4.1: supplied product measurability of the finite statistics and their Phi-compositions, and proved the interior continuity of finite convex nondecreasing Phi directly from convexity and monotonicity. The endpoint right-continuity argument remains explicit. Added the exact measurability suppliers to `deps` and Fact [F8].
- `cex-uncountable-class-has-nonmeasurable-empirical-supremum`, Proof 3.1: identified the observation space with `(Ω, A, P)`, stated that the identity random element has law `P`, and proved the indexed functions are distinct. Since `U` is uncountable, this verifies the claimed class itself is uncountable.
- `cex-vc-entropy-exponent-cannot-be-uniform-in-r`: changed the title to “Finite thresholds rule out an r-independent VC covering bound” and narrowed Proof 4.1's closing claim to the exact obstruction proved. The witness rules out a right-hand side independent of (r); it does not establish that every possible VC entropy exponent must depend on (r) if (r)-dependent prefactors are allowed.

Updated the affected contracts for these items in `research/mathematical-statistics-foundations-37-batch-15.proof-contracts.json` and `research/mathematical-statistics-foundations-37-proof-contracts.json`. The five edited items had no `verification.judge` record, so there was no stale judge record to remove.

## Page verdicts

- A page `symmetrization-rademacher-complexity-and-covering-entropy`: **no remaining defect**. Its summaries of outer-probability conventions, one-sided versus absolute contraction, finite-class deviation, independent-copy symmetrization, and the finite-r VC entropy bound agree with the checked items.
- B page `symmetrization-rademacher-complexity-and-covering-entropy-examples`: **no remaining defect**. Its summaries of the finite Bernoulli calculation, threshold witness, and uncountable nonmeasurable supremum agree with the checked examples. No page prose was edited.

No defect remained in an uneditable assigned or published dependency; the final findings array is empty. No blocker remains.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts` was run for all five edited item paths; all five reported `unchanged` after reflow.
- `node tools/tsx-run.mjs tools/precheck.mts` passed for all five edited items. Hoeffding reflow and precheck were repeated after its final Fact [F9] clarification; precheck again passed.
- Final batched command `node tools/proof-layout.mjs items/lem-bounded-variable-hoeffding-mgf.md items/lem-real-power-preserves-measurability.md items/thm-independent-process-symmetrization.md items/cex-uncountable-class-has-nonmeasurable-empirical-supremum.md items/cex-vc-entropy-exponent-cannot-be-uniform-in-r.md` reported `5 items, 20 steps, 0 defects`.

## Coverage note

All assigned pages, all assigned items, and the direct dependency Statements/Definitions needed to check their inferences were opened. Published supplier proofs were not comprehensively re-audited beyond the exact source sections needed for these applications and the choice-sensitive proof routes noted above. External bibliography PDFs were not re-fetched because the assigned arguments were checkable from local proofs and supplier statements; no source-dependent mathematical uncertainty remains.
