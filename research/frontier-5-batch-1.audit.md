# Frontier 5, batch 1 Step-6 Beta audit

Audit scope: the newly authored `filters-and-ultrafilters-examples` page, the
`congruences-and-the-chinese-remainder-theorem` A/B pair, and the
`incidence-algebras-and-mobius-inversion` A/B pair. The published Filters A
page was read only as dependency context and was not edited.

## Changes made

1. `items/cor-classical-mobius-inversion.md`
   - Fatal dependency-citation defect: the proof applied lower-finite Möbius
     inversion to the positive-integer divisibility poset without citing the
     result that establishes lower-finiteness.
   - Added `lem-divisibility-poset-is-lower-finite-and-factorises` to `deps`,
     stated its lower-finiteness conclusion as `[L3]`, and cited it at step 1.1.

2. `items/thm-totient-of-a-prime-power.md`
   - Nonfatal proof-scope defect: steps 1.1 and 1.2 classified a standard
     representative `r`, but `r` was not bound in `Given`.
   - Bound an arbitrary standard representative `0 <= r < p^k` in `Given` and
     made the universal use explicit at step 2.1.

3. `items/lem-wilson-inverse-pairing.md`
   - Nonfatal citation-fidelity defect: `[L3]` attributed involutivity of
     inversion directly to `lem-inverse-unique`, whose Statement gives
     uniqueness of inverses rather than the involutivity formula itself.
   - Replaced `[L3]` with the cited Statement and derived
     `(u^{-1})^{-1}=u` explicitly from uniqueness at step 2.1.

4. `items/fs-every-poset-has-an-incidence-algebra.md`
   - Nonfatal proof-scope defect: the endpoint sum used `1_R` without binding
     the coefficient ring in `Given`.
   - Added a nonzero commutative ring `R` to `Given`.

5. `items/cex-a-non-locally-finite-poset.md`
   - Nonfatal proof-scope defect: the endpoint sum used `1_R` without binding
     the coefficient ring in `Given`.
   - Added a nonzero commutative ring `R` to `Given`.

6. `library/number-theory/congruences-and-the-chinese-remainder-theorem.md`
   - Nonfatal natural-prose defect: the two summary paragraphs began with the
     canned labels `Objective` and `The main results`.
   - Removed the labels without changing the mathematical claims or the
     required two-paragraph structure.

No result was added or deleted. No item id, title, Statement, example witness,
or page membership was changed. No proof was added.

## Proof-step and semantic-citation findings

- The missing lower-finiteness edge in `cor-classical-mobius-inversion` was the
  only publish-blocking mathematical defect. The inversion theorem requires a
  lower-finite poset, and neither the original Facts nor the original direct
  dependencies supplied that hypothesis.
- The standard-representative classification in
  `thm-totient-of-a-prime-power` was mathematically correct, but the proof did
  not bind its representative variable before using it.
- The inverse-pairing argument in `lem-wilson-inverse-pairing` was correct, but
  one fact row stated a one-line consequence as though it were the literal
  Statement of `lem-inverse-unique`. The repaired version states the source
  proposition and performs the deduction in the proof.
- The two non-locally-finite incidence refutations were correct, but their
  `1_R` notation lacked a locally bound coefficient ring. Binding a nonzero
  commutative ring makes the constant-one witness and the undefined infinite
  sum precise.
- All remaining proof steps, example verifications, counterexample witnesses,
  false-statement refutations, Remarks, and dependency fact rows were checked
  against the cited items on disk. No other false claim, missing hypothesis,
  invalid witness, wrong-direction citation, or out-of-scope dependency was
  found.

## Unresolved or outside the write boundary

- `research/plan-spec.json` still has the pre-audit dependency list for
  `cor-classical-mobius-inversion`. The orchestrator must mirror the newly
  required `lem-divisibility-poset-is-lower-finite-and-factorises` edge into the
  machine scaffold during its post-Beta synchronization. This Beta was
  explicitly forbidden to edit the plan.
- Nothing else is unresolved. Published dependencies were read-only and no
  defect was found in them that requires an owner-bound edit.

## Coverage

Every proof step and every dependency citation in every assigned item was read.
Every distinct published dependency target cited by the assigned files was
opened on disk and checked for the exact domain, hypotheses, conclusion, and
direction used. There were no coverage exceptions.

### Filters B

- `ex-principal-filter-generated-by-a-set`
- `ex-principal-ultrafilter`
- `ex-frechet-filter`
- `ex-free-ultrafilter-on-naturals`
- `ex-ultrafilter-selects-a-cell-of-a-finite-partition`
- `cex-union-of-filters-not-filter`
- `cex-intersection-of-ultrafilters-not-ultrafilter`
- `cex-improper-filter`

### Congruences and CRT A

- `def-congruence-modulo-an-integer`
- `lem-congruence-is-an-equivalence-relation`
- `lem-congruence-respects-integer-arithmetic`
- `def-integers-modulo-n`
- `thm-standard-representatives-modulo-n`
- `def-addition-and-multiplication-modulo-n`
- `thm-integers-modulo-n-basic-algebra`
- `def-unit-group-modulo-n-and-euler-totient`
- `thm-unit-criterion-modulo-n`
- `cor-totient-at-one-and-at-a-prime`
- `lem-multiples-below-a-prime-power`
- `thm-totient-of-a-prime-power`
- `lem-linear-congruence-reduction-by-the-gcd`
- `thm-linear-congruence-solvability-and-solution-count`
- `lem-pairwise-coprime-divisibility`
- `lem-chinese-remainder-two-moduli`
- `thm-chinese-remainder-theorem`
- `cor-euler-totient-is-multiplicative`
- `thm-euler-totient-product-formula`
- `thm-sum-of-totients-over-divisors`
- `thm-z-mod-p-is-a-field`
- `lem-wilson-inverse-pairing`
- `thm-wilsons-theorem`

### Congruences and CRT B

- `ex-chinese-remainder-system-worked`
- `ex-linear-congruence-worked`
- `ex-units-and-totient-modulo-twelve`
- `ex-chinese-remainder-map-modulo-twelve`
- `ex-units-modulo-eight-are-not-cyclic`
- `ex-euler-totient-product-formula-worked`
- `cex-chinese-remainder-without-coprimality`
- `ex-zero-divisors-modulo-composites`
- `fs-zero-product-property-modulo-n`
- `cex-z-mod-one-is-not-a-field`

### Incidence algebras and Möbius inversion A

- `def-poset-interval-and-finiteness-conditions`
- `def-finite-sum-in-a-commutative-monoid`
- `lem-finite-sum-reindexing-and-fubini`
- `def-incidence-algebra-and-convolution`
- `def-delta-and-zeta-incidence-functions`
- `lem-incidence-convolution-associative-and-distributive`
- `thm-incidence-functions-form-a-ring`
- `lem-incidence-convolution-inverses-by-recursion`
- `thm-incidence-algebra-invertibility-criterion`
- `def-poset-mobius-function`
- `lem-poset-mobius-recurrence`
- `thm-mobius-inversion-for-lower-finite-posets`
- `cor-mobius-inversion-for-finite-posets`
- `thm-mobius-function-of-a-product-poset`
- `thm-mobius-function-of-a-boolean-lattice`
- `cor-inclusion-exclusion-is-boolean-mobius-inversion`
- `thm-mobius-function-of-a-finite-chain`
- `def-divisibility-poset-on-positive-integers`
- `lem-divisibility-poset-is-lower-finite-and-factorises`
- `def-number-theoretic-mobius-function`
- `thm-number-theoretic-and-poset-mobius-agree`
- `cor-classical-mobius-inversion`
- `cor-number-theoretic-mobius-is-multiplicative`
- `fs-every-poset-has-an-incidence-algebra`
- `fs-mobius-depends-only-on-interval-cardinality`
- `fs-classical-mobius-inversion-is-unrelated-to-inclusion-exclusion`

### Incidence algebras and Möbius inversion B

- `ex-mobius-on-the-boolean-lattice-b3`
- `ex-mobius-on-a-four-element-chain`
- `ex-mobius-on-the-divisor-lattice-of-twelve`
- `ex-mobius-on-the-diamond-poset`
- `ex-euler-totient-recovered-by-mobius-inversion`
- `cex-a-non-locally-finite-poset`
- `cex-an-incidence-function-with-nonunit-diagonal`
- `cex-equal-size-intervals-with-different-mobius-values`

The CRT and incidence A-page summaries each have exactly two nonempty prose
paragraphs, each below 150 words. All three assigned B pages have no authored
body.

## Gate evidence

- `reflow.mts`: unchanged on every modified proof-bearing item.
- `precheck.mts`: pass on all 59 proof-bearing assigned items.
- `prosecheck.mjs --warnings`: 75 assigned items and five assigned pages, zero
  errors and zero warnings.
- `rendercheck.mjs`: 75 assigned items and five assigned pages, all math parsed
  by the real KaTeX gate.
- `citecheck.mjs`: 75 assigned items, no warning.
- Full-corpus `depcheck.mjs --quiet`, `fwdcheck.mjs --quiet`, and
  `extcheck.mjs --quiet`: exit 0.
- Full-corpus `depsource.mjs`: exit 0 with zero unresolved dependencies.

## Fatal-error ledger for Step 10

| Item | Defect type | Location | Defect | Fix disposition |
|---|---|---|---|---|
| `cor-classical-mobius-inversion` | dependency citation / missing hypothesis | Facts/dependencies and proof step 1.1 | Applied the lower-finite inversion theorem without establishing that positive-integer divisibility is lower-finite | Corrected dependencies and hypotheses by adding and citing `lem-divisibility-poset-is-lower-finite-and-factorises` |

The other repairs were nonfatal proof-scope, citation-fidelity, and prose
clarifications under the audit triage rule.
