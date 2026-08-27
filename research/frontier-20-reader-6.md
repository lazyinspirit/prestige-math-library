# Frontier-20 Reader-6 Report

## Opened scope

- Dispatch and control artifacts opened: `CLAUDE.md`, `README.md`, `briefs/reader.md`, `research/frontier-20-reader.task.md`, `research/frontier-20-dispatch/reader-reader-6.prompt.md`, `research/frontier-20-batch-6.pages.json`, `research/frontier-20-batch-6.coverage.json`, `research/frontier-20-batch-6.proof-contracts.json`, `research/frontier-20-batch-6.notes.md`, and `.autopilot/status.md`.
- Assigned page files opened: `library/commutative-algebra/prime-spectra-and-radicals.md`, `library/commutative-algebra/prime-spectra-and-radicals-examples.md`.
- Page-level prerequisite pages opened: `library/commutative-algebra/localisation-of-modules-and-support-examples.md`, `library/abstract-algebra/algebraic-extensions-degree-and-finite-fields.md`.
- Assigned batch items opened: 56.

```text
def-radical-of-an-ideal
lem-radical-membership-by-a-power
lem-radical-is-an-ideal
lem-radical-of-an-intersection
lem-radical-of-a-product
def-nilradical-and-reduced-ring
lem-radical-commutes-with-quotient-correspondence
lem-radical-commutes-with-localisation
cor-reduced-quotient-by-the-nilradical
lem-prime-containing-a-multiplicative-set-disjoint-ideal
cor-prime-containing-an-ideal-avoiding-an-element
lem-radical-intersection-proof-forward-inclusion
lem-radical-intersection-proof-separating-prime
thm-radical-as-intersection-of-primes
cor-nilradical-as-intersection-of-primes
cor-ring-reduced-iff-zero-is-an-intersection-of-primes
def-prime-spectrum-and-vanishing-sets
def-krull-dimension-of-a-ring
def-height-of-a-prime-ideal
lem-vanishing-set-reverses-inclusions
lem-vanishing-set-of-an-arbitrary-sum
lem-vanishing-set-of-a-finite-product
lem-vanishing-set-identities
lem-vanishing-sets-detect-radicals
def-principal-distinguished-subset-of-spectrum
lem-distinguished-subset-identities
lem-distinguished-subset-cover-detects-radical
lem-spectrum-map-respects-composition-and-identities
lem-spectrum-map-preimage-of-vanishing-set
thm-prime-spectrum-map-by-contraction
lem-primes-of-a-quotient-are-primes-over-the-kernel
thm-prime-spectrum-of-a-quotient-bijection
lem-primes-of-a-localisation-avoid-the-multiplicative-set
cor-primes-of-a-prime-local-ring
cor-primes-of-a-principal-localisation
thm-prime-spectrum-of-a-localisation-bijection
cor-prime-spectrum-insensitive-to-nilpotents
lem-minimal-prime-over-an-ideal-exists
lem-noetherian-minimal-primes-induction-split
thm-nilradical-of-a-noetherian-ring-is-nilpotent
cor-radical-ideal-has-finitely-many-minimal-primes-noetherian
thm-noetherian-ring-has-finitely-many-minimal-primes
lem-height-equals-local-dimension
cor-dimension-of-a-quotient-as-chains-above-an-ideal
ex-prime-sets-of-a-field-and-the-integers
ex-prime-spectrum-set-of-a-product-ring
ex-prime-spectrum-set-of-dual-numbers
ex-prime-ideals-of-a-node
ex-distinguished-subset-and-localisation-primes
ex-radical-intersection-computation
ex-radical-of-a-product-and-intersection
ex-separating-prime-for-a-missing-radical-element
ex-spectrum-of-a-zero-ring-empty
ex-primes-in-a-prime-localisation
ex-noetherian-nilradical-common-exponent
ex-nilradical-need-not-be-nilpotent-nonnoetherian
```

- Dependency items opened for verification: 28 unique non-batch items.

```text
def-commutative-ring
def-field
def-generated-and-principal-ideals
def-integers
def-left-right-and-two-sided-ideal
def-localisation-at-a-prime-ideal
def-multiplicative-subset-and-localisation
def-polynomial-ring-over-a-commutative-ring
def-prime
def-prime-and-maximal-ideals
def-principal-localisation
def-product-ring
def-quotient-ring
def-ring-homomorphism
def-sum-and-product-of-ideals
lem-every-integer-above-one-has-a-prime-divisor
thm-binomial-theorem-over-a-commutative-ring
thm-correspondence-theorem-ideals
thm-division-algorithm-in-z
thm-ideal-correspondence-for-localisation
thm-integers-modulo-n-basic-algebra
thm-noetherian-induction
thm-noetherian-ring-ideal-characterisations
thm-proper-ideal-contained-in-maximal-ideal
thm-quotient-is-domain-iff-ideal-prime
thm-well-ordering-principle
thm-z-mod-p-is-a-field
thm-zorn
```

## Confirmed defects repaired

1. Subject: `lem-distinguished-subset-cover-detects-radical`
   Location: `items/lem-distinguished-subset-cover-detects-radical.md`, fact line `L2`
   Defect: citation inaccurate
   Severity: nonfatal
   Evidence: `L2` claimed that `D(h)` is the complement of `V((h))` but cited only `def-generated-and-principal-ideals` and `lem-distinguished-subset-identities`; neither source states that complement relation. The actual carrier is `def-principal-distinguished-subset-of-spectrum`, which I opened on disk before editing.
   Repair: added `def-principal-distinguished-subset-of-spectrum` to `deps`, removed the unused `lem-distinguished-subset-identities` edge, rewrote `L2` to cite the correct definition, and regenerated the matching contract entry.

2. Subject: `ex-prime-sets-of-a-field-and-the-integers`
   Location: `items/ex-prime-sets-of-a-field-and-the-integers.md`, proof steps `1.2` and `1.3`
   Defect: unlicensed inference
   Severity: nonfatal
   Evidence: the proof said "Division with remainder shows..." but cited no division-algorithm item and omitted the remainder computation needed to prove `I=(n)` for a nonzero ideal of `\mathbb Z`.
   Repair: added `thm-division-algorithm-in-z` to `deps`, introduced fact `L4`, wrote the remainder argument explicitly, split the old overloaded step into `1.2` and `1.3`, and regenerated the contract entry.

3. Subject: `ex-radical-of-a-product-and-intersection`
   Location: `items/ex-radical-of-a-product-and-intersection.md`, proof step `1.1`
   Defect: unlicensed inference
   Severity: nonfatal
   Evidence: the original step invoked the UFD property of `k[x,y]` to infer `y | g` from `g^m \in (y^3)` without a cited UFD dependency.
   Repair: replaced that appeal with a direct decomposition `g=a(x)+yh(x,y)` and a constant-term-in-`y` contradiction, then regenerated the contract entry.

- Contract sync: refreshed the three affected entries in `research/frontier-20-batch-6.proof-contracts.json`.
- No repaired item carried a `verification.judge` block, so no stale judge record needed removal.

## Uneditable artifact drift

- `research/frontier-20-batch-6.pages.json` is stale against current item `deps` frontmatter for 19 ids:

```text
cor-reduced-quotient-by-the-nilradical
lem-distinguished-subset-cover-detects-radical
lem-primes-of-a-quotient-are-primes-over-the-kernel
cor-prime-spectrum-insensitive-to-nilpotents
lem-minimal-prime-over-an-ideal-exists
lem-noetherian-minimal-primes-induction-split
thm-nilradical-of-a-noetherian-ring-is-nilpotent
cor-radical-ideal-has-finitely-many-minimal-primes-noetherian
ex-prime-sets-of-a-field-and-the-integers
ex-prime-spectrum-set-of-a-product-ring
ex-prime-spectrum-set-of-dual-numbers
ex-prime-ideals-of-a-node
ex-distinguished-subset-and-localisation-primes
ex-radical-intersection-computation
ex-radical-of-a-product-and-intersection
ex-separating-prime-for-a-missing-radical-element
ex-primes-in-a-prime-localisation
ex-noetherian-nilradical-common-exponent
ex-nilradical-need-not-be-nilpotent-nonnoetherian
```

- Step 6a permits item repairs and assigned A-page prose repairs, but not manifest edits. The current mathematics is verified against the item files themselves, so this drift did not block the read. I did not duplicate it in the findings JSON because the required schema has no manifest subject type.

## Page verdicts

- `library/commutative-algebra/prime-spectra-and-radicals.md`: pass. I confirmed the page summary against the current item body set and found no A-page prose defect requiring an edit.
- `library/commutative-algebra/prime-spectra-and-radicals-examples.md`: pass unchanged. I confirmed no B-page body defect and made no B-page edit.

## Verification

Ran on Wednesday, August 26, 2026:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-distinguished-subset-cover-detects-radical.md items/ex-prime-sets-of-a-field-and-the-integers.md items/ex-radical-of-a-product-and-intersection.md`
  Result: all three files were already canonical after the repairs.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-distinguished-subset-cover-detects-radical.md items/ex-prime-sets-of-a-field-and-the-integers.md items/ex-radical-of-a-product-and-intersection.md`
  Result: `3 checked, 0 failing`.
- `node tools/rendercheck.mjs items/lem-distinguished-subset-cover-detects-radical.md items/ex-prime-sets-of-a-field-and-the-integers.md items/ex-radical-of-a-product-and-intersection.md`
  Result: clean on all three changed items.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-6.proof-contracts.json lem-distinguished-subset-cover-detects-radical ex-prime-sets-of-a-field-and-the-integers ex-radical-of-a-product-and-intersection`
  Result: regenerated `3`, skipped `0`.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-6.proof-contracts.json ex-prime-sets-of-a-field-and-the-integers`
  Result: regenerated `1`, skipped `0` after the final step split that cleared the contract warning.
- `node tools/proof-contract.mjs research/frontier-20-batch-6.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 50/50 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-20-batch-6.proof-contracts.json --json`
  Result: `96` citations checked, `0` quote-not-found rows, `0` widening candidates.
- `node tools/boundary-audit.mjs research/frontier-20-batch-6.proof-contracts.json --fail-on-contradicted --json`
  Result: `0` contradicted candidates.
- `node tools/content-policy.mjs research/frontier-20-batch-6.pages.json`
  Result: `56 scoped item(s), 0 error(s), 0 warning(s)`.

## Blocker

- None.
