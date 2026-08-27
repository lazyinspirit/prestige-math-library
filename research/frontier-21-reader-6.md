# Frontier-21 Reader-6 Report

## Opened scope

- Dispatch and control artifacts opened: `CLAUDE.md`, `README.md`, `research/frontier-21-reader.task.md`, `research/frontier-21-dispatch/reader-reader-6.attempt-1.prompt.md`, `research/frontier-21-beta-6.task.md`, `research/frontier-21-covers.json`, `research/frontier-21-batch-6.pages.json`, `research/frontier-21-batch-6.coverage.json`, `research/frontier-21-batch-6.proof-contracts.json`, `research/frontier-21-batch-6.notes.md`, and the live `tools/autopilot` status output.
- Design context opened: `research/plan-combinatorics-and-categories.md` at the CB-8 base block, the CB-8 enriched amendment, the CB-10 base block, and the CB-10 enriched amendment.
- Assigned page files opened: `library/combinatorics/integer-partitions-and-the-twelvefold-way.md`, `library/combinatorics/integer-partitions-and-the-twelvefold-way-examples.md`, `library/combinatorics/counting-up-to-symmetry-burnside-and-polya.md`, and `library/combinatorics/counting-up-to-symmetry-burnside-and-polya-examples.md`.
- Assigned batch items opened: 68.

```text
def-twelvefold-way-ball-box-conventions
def-ferrers-young-diagram-conjugate-partition-and-durfee-square
def-partition-counting-functions-and-restricted-families
lem-partition-conjugation-is-an-involution
thm-partitions-with-k-parts-equal-largest-part-k
cor-partitions-with-at-most-k-parts-equal-parts-at-most-k
thm-partitions-into-k-parts-recurrence
rem-euler-product-agrees-with-the-published-multiset-corollary
cor-distinct-partitions-have-product-generating-function
cor-odd-partitions-have-product-generating-function
thm-euler-distinct-parts-equal-odd-parts-by-generating-functions
thm-glaisher-bijection-between-odd-and-distinct-partitions
rem-distinct-odd-proof-agreement
thm-self-conjugate-partitions-correspond-to-distinct-odd-partitions
thm-durfee-square-identity
thm-unlabelled-unlabelled-placement-counts
thm-twelvefold-way
thm-euler-pentagonal-number-theorem-by-franklin
cor-pentagonal-recurrence-for-partition-numbers
fs-partitions-into-k-parts-are-counted-by-binomial-coefficients
fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions
ex-partitions-of-six-listed
ex-conjugation-of-the-partitions-of-six
ex-a-self-conjugate-partition-and-its-diagonal-hooks
ex-glaisher-bijection-on-an-odd-partition
ex-durfee-square-decomposition-of-five-three-three-two-one
ex-pentagonal-recurrence-computes-p-ten
ex-twelvefold-way-labelled-labelled-at-three-and-two
ex-twelvefold-way-unlabelled-to-labelled-at-three-and-two
ex-twelvefold-way-labelled-to-unlabelled-at-three-and-two
ex-twelvefold-way-unlabelled-unlabelled-at-three-and-two
ex-partitions-into-three-parts-of-five-from-the-recurrence
ex-distinct-and-odd-partitions-of-seven
cex-a-partition-that-is-not-self-conjugate
cex-conjugation-does-not-send-distinct-parts-to-odd-parts
cex-manipulating-the-euler-product-without-summability
rem-cycle-index-and-polya-naming-conventions
def-cycle-index-of-a-permutation-group
def-colouring-action-weight-function-and-pattern-inventory
def-cycle-index-series-of-a-graded-symmetric-family
lem-fixed-colourings-factor-by-cycle-type
thm-polya-enumeration-theorem
thm-weighted-pattern-inventory-formula
thm-cycle-index-of-cyclic-group
thm-cycle-index-of-dihedral-group
lem-permutations-with-a-given-cycle-type-count
thm-cycle-index-of-symmetric-group
thm-cycle-index-of-alternating-group
cor-necklace-count-via-cycle-index
rem-necklace-count-agrees-with-the-published-cycle-construction
cor-bracelet-count-via-cycle-index
thm-edge-set-orbits-on-two-subsets-by-polya
cor-symmetric-group-cycle-index-series-is-exponential
fs-distinct-groups-have-distinct-cycle-indices
fs-cycle-index-determines-the-abstract-group
fs-pattern-inventory-specialises-to-the-plain-count-under-every-weight-assignment
ex-cycle-index-of-c-four
ex-cycle-index-of-d-four
ex-cycle-index-of-s-three
ex-a-nonfree-action-with-three-orbits-on-four-points
ex-pattern-inventory-of-square-colourings-by-number-of-red-vertices
ex-two-colour-necklaces-of-length-six-by-polya
ex-two-colour-necklaces-of-length-six-by-the-cycle-construction
ex-two-colour-bracelets-of-length-six
ex-cube-face-colourings-under-rotations
ex-edge-set-orbits-on-four-vertices-by-polya
cex-c-four-and-v-four-can-share-a-nonfaithful-cycle-index
cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information
```

- Dependency items opened for verification: 31 unique published items.

```text
cor-alternating-group-is-normal-and-has-half-the-elements
cor-compositions-with-k-parts-are-counted-by-binomial-coefficients
cor-integer-partitions-have-euler-product
cor-necklaces-over-an-m-letter-alphabet
cor-sign-from-disjoint-cycle-structure
def-alternating-group
def-commutative-ring
def-finite-symmetric-group-and-permutation-notation
def-fixed-point-sets-of-a-group-action
def-formal-exponential-logarithm-and-powers
def-formal-power-series-and-coefficient-extraction
def-group-action
def-multivariate-polynomial-ring-by-iteration
def-partition-of-a-positive-integer
def-permutation-support-disjoint-cycles-and-cycle-type
def-power-sum-and-complete-homogeneous-symmetric-polynomials
def-stirling-second-kind-and-bell-number
def-unit-group-modulo-n-and-euler-totient
prop-coefficient-extraction-linearity-and-extensionality
thm-cardinality-of-a-set-of-functions
thm-cauchy-frobenius-orbit-counting
thm-formal-exponential-logarithm-identities
thm-multiset-product-formula
thm-number-of-bijections-of-a-finite-set
thm-number-of-injections
thm-powerset-product-formula
thm-product-rule
thm-stars-and-bars
thm-stirling-second-kind-inclusion-exclusion-formula
thm-summable-families-and-rearrangement
thm-two-element-subsets-count
```

## Confirmed defects repaired

1. Subject: `thm-cycle-index-of-alternating-group`
   Location: `items/thm-cycle-index-of-alternating-group.md`, Statement displays at lines `30` and `34`
   Defect: ill-formed theorem statement
   Severity: fatal
   Evidence: both displayed formulas omitted the equality sign after `Z(A_n)`, leaving the theorem's two asserted identities malformed on current disk.
   Repair: restored the missing `=` signs in both displayed formulas. The item has no `verification.judge` record, so no stale judge block needed removal.

2. Subject: `thm-edge-set-orbits-on-two-subsets-by-polya`
   Location: `items/thm-edge-set-orbits-on-two-subsets-by-polya.md`, Statement lines `33`-`37` and proof step `3.1`
   Defect: ill-formed notation / unbound representative
   Severity: fatal
   Evidence: the statement defined `F_n(x)=\sum_O x^{|A|}` without binding the edge-set representative `A` inside each orbit `O`, and the proof repeated the same unbound notation in step `3.1`.
   Repair: bound `A` explicitly as any member of the orbit `O` in both the statement and the closing proof step.

- These repairs did not change any fact labels, citations, derivation dependencies, or boundary dispositions, so `research/frontier-21-batch-6.proof-contracts.json` did not need byte edits. The strict contract checker remained clean on the repaired bytes.

## Uneditable artifact drift

- `research/frontier-21-batch-6.pages.json` is stale against the current item `deps` frontmatter for 5 ids:

```text
def-ferrers-young-diagram-conjugate-partition-and-durfee-square
thm-partitions-with-k-parts-equal-largest-part-k
thm-euler-pentagonal-number-theorem-by-franklin
thm-weighted-pattern-inventory-formula
thm-cycle-index-of-alternating-group
```

- Step 6a permits in-flight item repairs and A-page prose repairs, but not manifest edits. I verified the mathematics against the current item files and left this manifest drift out of the JSON findings because the schema has no manifest subject type.

## Page verdicts

- `library/combinatorics/integer-partitions-and-the-twelvefold-way.md`: pass unchanged. I checked the A-page summary against the current partition items and found no prose defect that required an edit.
- `library/combinatorics/integer-partitions-and-the-twelvefold-way-examples.md`: pass unchanged. I found no B-page defect and made no B-page edit.
- `library/combinatorics/counting-up-to-symmetry-burnside-and-polya.md`: pass unchanged. The A-page summary matches the repaired item set and needed no prose edit.
- `library/combinatorics/counting-up-to-symmetry-burnside-and-polya-examples.md`: pass unchanged. I found no B-page defect and made no B-page edit.

## Verification

Ran on Thursday, August 27, 2026:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-cycle-index-of-alternating-group.md items/thm-edge-set-orbits-on-two-subsets-by-polya.md`
  Result: both files were already canonical after the edits.

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-cycle-index-of-alternating-group.md items/thm-edge-set-orbits-on-two-subsets-by-polya.md`
  Result: `2 checked, 0 failing`.

- `node tools/rendercheck.mjs items/thm-cycle-index-of-alternating-group.md items/thm-edge-set-orbits-on-two-subsets-by-polya.md`
  Result: clean on both changed items.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-21-batch-6.coverage.json`
  Result: `coverage-checklist: 2 page(s), 55 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/proof-contract.mjs research/frontier-21-batch-6.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 36/36 item(s) checked`.

- `node tools/citation-fidelity.mjs research/frontier-21-batch-6.proof-contracts.json --json`
  Result: `63` citations checked, `0` `quote_not_found`, `0` widening candidates.

- `node tools/boundary-audit.mjs research/frontier-21-batch-6.proof-contracts.json --fail-on-contradicted --fail-on-template`
  Result: the checker still exits with `21` `CONTRADICTED DISPOSITIONS` candidates, all on `empty` or `zero` axes. I reopened every flagged item; in each case the displayed sum or product is indexed from positive integers or the denominator-bearing parameter is explicitly constrained away from `0`, so I did not confirm a contract defect and made no proof-contract edit.

- `node tools/content-policy.mjs research/frontier-21-batch-6.pages.json`
  Result: `content-policy: 68 scoped item(s), 0 error(s), 0 warning(s)`.

## Blocker

- None.
