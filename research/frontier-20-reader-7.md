# Frontier-20 Reader-7 Report

## Opened scope

- Dispatch and control artifacts opened: `research/frontier-20-dispatch/reader-reader-7.prompt.md`, `research/frontier-20-beta-7.task.md`, `research/plan-algebra-track.md` II.8, `research/frontier-20-batch-7.pages.json`, `research/frontier-20-batch-7.coverage.json`, `research/frontier-20-batch-7.proof-contracts.json`, `research/frontier-20-batch-7.notes.md`, and `.autopilot/status.md`.
- Assigned page files opened: `library/abstract-algebra/the-fundamental-theorem-of-algebra.md`, `library/abstract-algebra/the-fundamental-theorem-of-algebra-examples.md`.
- Assigned batch items opened: 23.

```text
thm-odd-degree-real-polynomial-has-a-real-root
cor-irreducible-real-polynomial-has-degree-one-or-even-degree
lem-real-polynomial-splitting-suffices-for-the-fundamental-theorem-of-algebra
lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root
prop-algebraically-closed-splitting-and-finite-extension-criteria
thm-the-complex-numbers-are-algebraically-closed
cor-every-complex-polynomial-splits-into-linear-factors
cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals
cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q
lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs
cor-irreducible-real-polynomials-have-degree-one-or-two
cor-every-real-polynomial-factors-into-linear-and-irreducible-quadratic-factors
thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
ex-x-cubed-minus-two-over-r-and-c
ex-x-four-plus-one-factors-into-two-real-quadratics
ex-x-squared-plus-one-is-irreducible-over-r-and-split-over-c
ex-x-fifth-minus-x-minus-one-has-a-real-root
ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals
fs-every-real-polynomial-has-a-real-root
fs-the-real-numbers-are-algebraically-closed
fs-every-irreducible-real-polynomial-has-degree-one
fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals
rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra
```

- Dependency items opened for verification: 43 unique non-batch items.

```text
cor-algebraic-extensions-of-perfect-fields-are-separable
cor-complex-numbers-are-a-quadratic-real-extension
cor-element-algebraic-iff-simple-extension-finite
cor-every-nonconstant-polynomial-has-a-root-in-an-extension
cor-factor-theorem-over-a-commutative-ring
cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
cor-splitting-fields-exist-for-finite-families
cor-universal-property-of-the-complex-numbers
def-algebraic-closure
def-algebraically-closed-field
def-polynomial-degree-leading-coefficient-and-monic
def-polynomials-that-split-and-splitting-fields
def-solvable-by-radicals
lem-complex-conjugation-and-modulus-laws
lem-derivative-of-a-power
lem-polynomial-factorisation-into-irreducibles
lem-x-squared-plus-one-is-irreducible-over-the-reals
prop-algebraic-splitting-extensions-are-normal
thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable
thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p
thm-algebra-of-continuous-functions
thm-algebra-of-derivatives
thm-algebraic-elements-form-a-subfield
thm-complex-numbers-form-a-field
thm-eisenstein-irreducibility-criterion
thm-evaluation-kernel-and-minimal-polynomial
thm-every-complex-number-has-a-square-root
thm-finite-field-extensions-are-algebraic
thm-finitely-generated-algebraic-extensions-are-finite
thm-fundamental-theorem-of-finite-galois-theory
thm-index-p-subgroup-existence-in-finite-p-groups
thm-intermediate-value
thm-irreducible-separable-polynomial-iff-galois-group-transitive
thm-monotonicity-from-the-derivative
thm-nth-roots-exist
thm-of-square-roots
thm-polynomial-ring-over-a-field-is-a-ufd
thm-real-automorphisms-of-the-complex-numbers
thm-reals-ordered-field
thm-simple-algebraic-extension-quotient-power-basis-and-degree
thm-solvable-by-radicals-implies-a-solvable-galois-group
thm-sylow-first-theorem
thm-tower-law-for-finite-field-extensions
```

## Confirmed defects repaired

1. Subject: `prop-algebraically-closed-splitting-and-finite-extension-criteria`
   Location: `items/prop-algebraically-closed-splitting-and-finite-extension-criteria.md`, proof step `1.2`
   Defect: unlicensed inference
   Severity: nonfatal
   Evidence: the proof appealed to the minimal polynomial of `alpha` without citing the item that supplies its existence, irreducibility, and divisibility property.
   Repair: added `thm-evaluation-kernel-and-minimal-polynomial` to `deps`, inserted fact line `L7`, and rewrote step `1.2` to invoke that published theorem explicitly.

2. Subject: `thm-the-complex-numbers-are-algebraically-closed`
   Location: `items/thm-the-complex-numbers-are-algebraically-closed.md`, proof step `2.2`
   Defect: unlicensed inference
   Severity: fatal
   Evidence: the argument used oddness of `[\mathbb R(\alpha):\mathbb R]` to conclude that the minimal polynomial of `alpha` over `\mathbb R` has odd degree, but it never cited the simple-extension degree formula that identifies those two numbers.
   Repair: added `cor-element-algebraic-iff-simple-extension-finite` to `deps`, inserted fact line `L14`, and rewrote step `2.2` so the odd-degree conclusion now runs through the published degree formula.

3. Subject: `ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals`
   Location: `items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md`, proof steps `3.1` and `4.1`
   Defect: false proof step and unlicensed inference
   Severity: fatal
   Evidence: step `3.1` treated complex conjugation as an automorphism of an abstract splitting field without first choosing that field inside `\mathbb C`; step `4.1` claimed separability after excluding only the real critical points `\pm a`, but `f'(x)=5x^4-6` also has the nonreal roots `\pm ia`.
   Repair: added `def-polynomials-that-split-and-splitting-fields` to `deps`, rebuilt step `3.1` by choosing all five roots inside `\mathbb C` and defining the splitting field there, and rewrote step `4.1` to check `f(\pm ia) \ne 0` as well as `f(\pm a) \ne 0`.

4. Subject: `research/frontier-20-batch-7.proof-contracts.json`
   Location: batch proof contract, 22 proof-bearing entries
   Defect: stale contract artifacts
   Severity: fatal
   Evidence: before repair, `node tools/proof-contract.mjs research/frontier-20-batch-7.proof-contracts.json --strict` reported `86` errors, and `node tools/citation-fidelity.mjs research/frontier-20-batch-7.proof-contracts.json --fail-on-missing-quote` reported `81` quote mismatches, all caused by citations and step-input maps that no longer matched the current item text.
   Repair: regenerated all 22 citation / derivation entries with `tools/regen-contract-entries.mjs`, then tightened the flagged boundary rows for `thm-odd-degree-real-polynomial-has-a-real-root` and `thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity` so `proof-contract --strict`, `citation-fidelity`, and `boundary-audit --fail-on-contradicted` are now clean.

No batch-7 draft item carried a `verification.judge` block, so no stale judge record had to be removed.

## Uneditable artifact drift

- `research/frontier-20-batch-7.pages.json` is stale against the current authored item dependency lists for 7 ids:

```text
prop-algebraically-closed-splitting-and-finite-extension-criteria
thm-the-complex-numbers-are-algebraically-closed
cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q
ex-x-cubed-minus-two-over-r-and-c
ex-x-four-plus-one-factors-into-two-real-quadratics
ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals
fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals
```

- This is outside the Step-6a repair authority, which permits item repairs and A-page prose repairs but not manifest edits. I did not record it in the JSON findings file because the required schema only covers `in-flight-item`, `page`, and `published-dependency` subjects. It is not a math blocker on current bytes: the authored items, pages, and refreshed proof contract are internally consistent and gate clean.

## Page verdicts

- `library/abstract-algebra/the-fundamental-theorem-of-algebra.md`: pass after the repaired in-flight item defects; no A-page prose edit was needed.
- `library/abstract-algebra/the-fundamental-theorem-of-algebra-examples.md`: pass unchanged; no B-page prose defect was confirmed, and I did not edit B-page body text.

## Verification

Ran on Wednesday, August 26, 2026:

- `node tools/tsx-run.mjs tools/reflow.mts items/prop-algebraically-closed-splitting-and-finite-extension-criteria.md items/thm-the-complex-numbers-are-algebraically-closed.md items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md`
  Result: all three files already canonical after the repair edits.
- `node tools/tsx-run.mjs tools/precheck.mts items/prop-algebraically-closed-splitting-and-finite-extension-criteria.md items/thm-the-complex-numbers-are-algebraically-closed.md items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md`
  Result: `3 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-7.proof-contracts.json <all 22 proof-bearing batch ids>`
  Result: regenerated `22`, skipped `0`.
- `node tools/proof-contract.mjs research/frontier-20-batch-7.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 22/22 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-20-batch-7.proof-contracts.json --fail-on-missing-quote`
  Result: no quote-not-found rows and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-20-batch-7.proof-contracts.json --fail-on-contradicted`
  Result: no contradicted dispositions; remaining output is only the existing template-reuse candidate clusters, which I read and did not confirm as additional defects.
- `node tools/rendercheck.mjs items/prop-algebraically-closed-splitting-and-finite-extension-criteria.md items/thm-the-complex-numbers-are-algebraically-closed.md items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md`
  Result: clean on all 3 changed items.
- `node tools/content-policy.mjs research/frontier-20-batch-7.pages.json`
  Result: `23 scoped item(s), 0 error(s), 0 warning(s)`.

## Blocker

- None.
