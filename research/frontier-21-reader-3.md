# Frontier-21 Reader-3 Report

## Opened scope

- Dispatch and control artifacts opened: `CLAUDE.md`, `README.md`, `research/frontier-21-reader.task.md`, `research/frontier-21-dispatch/reader-reader-3.prompt.md`, `research/frontier-21-beta-3.task.md`, `research/frontier-21-covers.json`, `research/frontier-21-batch-3.pages.json`, `research/frontier-21-batch-3.coverage.json`, `research/frontier-21-batch-3.proof-contracts.json`, `research/frontier-21-batch-3.notes.md`, and the live `tools/autopilot` status output.
- Design and prerequisite context opened: `research/plan-commutative-algebra-track.md` at CA-4, `library/commutative-algebra/prime-spectra-and-radicals.md`, and `library/commutative-algebra/prime-spectra-and-radicals-examples.md`.
- Assigned page files opened: `library/commutative-algebra/artinian-rings-and-length.md` and `library/commutative-algebra/artinian-rings-and-length-examples.md`.
- Assigned batch items opened: 18.

```text
lem-artinian-domain-is-a-field
thm-artinian-ring-primes-are-maximal
thm-artinian-ring-has-finitely-many-maximal-ideals
thm-nilradical-of-artinian-ring-is-nilpotent
thm-chinese-remainder-theorem-for-comaximal-ideals
thm-artinian-ring-is-noetherian
thm-artinian-ring-has-finite-length
thm-artinian-local-ring-has-nilpotent-maximal-ideal
thm-structure-theorem-for-artinian-rings
cor-prime-set-of-an-artinian-ring
thm-artinian-ring-characterisation-by-primes
cor-artinian-quotients-and-localisations
ex-artinian-truncated-polynomial-ring
ex-artinian-product-of-local-rings
ex-field-is-artinian
ex-noetherian-not-artinian
ex-length-of-a-truncated-local-module
ex-zero-dimensional-nonnoetherian-ring
```

- Dependency items opened for verification: 28 unique published items.

```text
cor-length-is-additive-in-short-exact-sequences
cor-maximal-ideals-are-prime
cor-nilradical-as-intersection-of-primes
cor-polynomial-ring-over-a-field-is-a-pid
cor-product-of-two-noetherian-rings-is-noetherian
def-artinian-ring
def-composition-series-and-length-of-a-module
def-field
def-generated-and-principal-ideals
def-krull-dimension-of-a-ring
def-left-right-and-two-sided-ideal
def-local-ring
def-nilradical-and-reduced-ring
def-noetherian-ring
def-zero-divisor-and-integral-domain
lem-subgroups-of-z-are-cyclic
thm-chain-conditions-in-short-exact-sequences
thm-composition-series-iff-noetherian-and-artinian
thm-correspondence-theorem-ideals
thm-equivalent-characterizations-of-artinian-modules
thm-finitely-generated-modules-over-noetherian-rings-are-noetherian
thm-noetherian-ring-has-finitely-many-minimal-primes
thm-noetherian-ring-ideal-characterisations
thm-nilradical-of-a-noetherian-ring-is-nilpotent
thm-prime-spectrum-of-a-quotient-bijection
thm-quotient-is-domain-iff-ideal-prime
thm-quotient-ring-universal-property
thm-universal-property-of-localisation
```

## Confirmed defects repaired

1. Subject: `thm-artinian-ring-has-finitely-many-maximal-ideals`
   Location: `items/thm-artinian-ring-has-finitely-many-maximal-ideals.md`, statement note and proof steps `1.1`-`2.1`
   Defect: missing proof-strength hypothesis / unlicensed inference
   Severity: fatal
   Evidence: the old proof began with an enumerated infinite family `\mathfrak m_1,\mathfrak m_2,\ldots` without licensing a countable extraction from an arbitrary infinite set, while the library already records the minimum-condition route for Artinian modules.
   Repair: added `thm-equivalent-characterizations-of-artinian-modules`, recorded the dependent-choice cost explicitly, and rewrote the proof through a minimal finite intersection of maximal ideals.

2. Subject: `thm-nilradical-of-artinian-ring-is-nilpotent`
   Location: `items/thm-nilradical-of-artinian-ring-is-nilpotent.md`, statement note and proof step `2.1`
   Defect: missing proof-strength hypothesis / unlicensed inference
   Severity: fatal
   Evidence: the old proof chose a minimal ideal among those with nonzero `N^n`-action without citing the published minimum-condition theorem for Artinian modules.
   Repair: added the Artinian minimum-condition dependency, recorded the dependent-choice cost, and made the nonempty-family argument explicit.

3. Subject: `thm-artinian-ring-is-noetherian`, `thm-artinian-local-ring-has-nilpotent-maximal-ideal`, `thm-structure-theorem-for-artinian-rings`, `thm-artinian-ring-characterisation-by-primes`, `cor-artinian-quotients-and-localisations`
   Location: each item's Statement / Given block
   Defect: missing hypothesis
   Severity: fatal
   Evidence: each proof cites `cor-nilradical-as-intersection-of-primes`, whose published Statement begins `Assume the Axiom of Choice.`; the batch items had silently widened that source.
   Repair: added `Assume the Axiom of Choice.` to each Statement and aligned the Given blocks.

4. Subject: `thm-artinian-ring-has-finite-length`
   Location: `items/thm-artinian-ring-has-finite-length.md`, `deps`, Statement, and proof steps `1.2`-`3.1`
   Defect: missing hypothesis and forward same-batch dependency
   Severity: fatal
   Evidence: the old reverse direction cited `thm-structure-theorem-for-artinian-rings` and `thm-artinian-local-ring-has-nilpotent-maximal-ideal`, which come later in the batch, and after the choice repair to `thm-artinian-ring-is-noetherian` it also needed the Axiom of Choice explicitly.
   Repair: rebuilt the reverse direction from the earlier `thm-artinian-ring-is-noetherian` plus `thm-composition-series-iff-noetherian-and-artinian`, removed the forward dependencies, added the Choice hypothesis, and refreshed the contract entry.

5. Subject: `ex-artinian-product-of-local-rings` and `ex-field-is-artinian`
   Location: `items/ex-artinian-product-of-local-rings.md`, `items/ex-field-is-artinian.md`
   Defect: unnecessary later / stronger dependency
   Severity: nonfatal
   Evidence: both examples cited later or stronger theorems even though their displayed conclusions were already proved directly in the example body.
   Repair: removed the unnecessary dependencies and kept the examples direct.

6. Subject: `ex-length-of-a-truncated-local-module`
   Location: `items/ex-length-of-a-truncated-local-module.md`, proof step `2.1`
   Defect: inaccurate proof step
   Severity: nonfatal
   Evidence: the old text said "multiplication by `x^m` gives" the displayed short exact sequence, but the exact sequence actually comes from the natural projection `R/(x^{m+1}) -> R/(x^m)` with kernel `(x^m)/(x^{m+1})`.
   Repair: rewrote step `2.1` with the correct projection-and-kernel justification.

7. Subject: `ex-zero-dimensional-nonnoetherian-ring`
   Location: `items/ex-zero-dimensional-nonnoetherian-ring.md`, statement and proof step `3.1`
   Defect: overstrong example body relative to the title
   Severity: nonfatal
   Evidence: the old proof established only "every prime ideal is maximal" and "not Noetherian", but it never derived the title's zero-dimensional conclusion.
   Repair: added `def-krull-dimension-of-a-ring`, exhibited the coordinate-kernel prime `\mathfrak p_0`, and concluded `\dim R = 0`.

8. Subject: `research/frontier-21-batch-3.proof-contracts.json`
   Location: contract entries for `thm-artinian-ring-has-finitely-many-maximal-ideals`, `thm-nilradical-of-artinian-ring-is-nilpotent`, `thm-artinian-ring-has-finite-length`, `ex-artinian-product-of-local-rings`, `ex-field-is-artinian`, and `ex-zero-dimensional-nonnoetherian-ring`
   Defect: stale contract derivations / citations
   Severity: fatal
   Evidence: after the item repairs, `proof-contract --strict` first reported six errors from the two newly added fact lines and the changed finite-length derivation map.
   Repair: regenerated the two new fact-bearing entries, patched the remaining changed derivations manually where the helper refuses factless items, and restored a clean strict contract run.

- No repaired item carried a `verification.judge` block, so no stale judge record needed removal.

## Uneditable artifact drift

- `research/frontier-21-batch-3.pages.json` is stale against the current item `deps` frontmatter for 16 ids:

```text
lem-artinian-domain-is-a-field
thm-artinian-ring-primes-are-maximal
thm-artinian-ring-has-finitely-many-maximal-ideals
thm-artinian-ring-is-noetherian
thm-artinian-ring-has-finite-length
thm-artinian-local-ring-has-nilpotent-maximal-ideal
thm-structure-theorem-for-artinian-rings
cor-prime-set-of-an-artinian-ring
thm-artinian-ring-characterisation-by-primes
cor-artinian-quotients-and-localisations
ex-artinian-truncated-polynomial-ring
ex-artinian-product-of-local-rings
ex-field-is-artinian
ex-noetherian-not-artinian
ex-length-of-a-truncated-local-module
ex-zero-dimensional-nonnoetherian-ring
```

- Step 6a permits in-flight item repairs and A-page prose repairs, but not manifest edits. I verified the mathematics against the current item files and left this manifest drift out of the JSON findings because the required schema has no manifest subject type.

## Page verdicts

- `library/commutative-algebra/artinian-rings-and-length.md`: pass unchanged. I confirmed the A-page summary against the repaired item set and found no page-prose defect that required an edit.
- `library/commutative-algebra/artinian-rings-and-length-examples.md`: pass unchanged. I confirmed no B-page body defect and made no B-page edit.

## Verification

Ran on Thursday, August 27, 2026:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-artinian-ring-has-finitely-many-maximal-ideals.md items/thm-nilradical-of-artinian-ring-is-nilpotent.md items/thm-artinian-ring-is-noetherian.md items/thm-artinian-ring-has-finite-length.md items/thm-artinian-local-ring-has-nilpotent-maximal-ideal.md items/thm-structure-theorem-for-artinian-rings.md items/thm-artinian-ring-characterisation-by-primes.md items/cor-artinian-quotients-and-localisations.md items/ex-artinian-product-of-local-rings.md items/ex-field-is-artinian.md items/ex-length-of-a-truncated-local-module.md items/ex-zero-dimensional-nonnoetherian-ring.md`
  Result: `4` files reflowed, `8` already canonical.

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-artinian-ring-has-finitely-many-maximal-ideals.md items/thm-nilradical-of-artinian-ring-is-nilpotent.md items/thm-artinian-ring-is-noetherian.md items/thm-artinian-ring-has-finite-length.md items/thm-artinian-local-ring-has-nilpotent-maximal-ideal.md items/thm-structure-theorem-for-artinian-rings.md items/thm-artinian-ring-characterisation-by-primes.md items/cor-artinian-quotients-and-localisations.md items/ex-artinian-product-of-local-rings.md items/ex-field-is-artinian.md items/ex-length-of-a-truncated-local-module.md items/ex-zero-dimensional-nonnoetherian-ring.md`
  Result: `12 checked, 0 failing`.

- `node tools/rendercheck.mjs items/thm-artinian-ring-has-finitely-many-maximal-ideals.md items/thm-nilradical-of-artinian-ring-is-nilpotent.md items/thm-artinian-ring-is-noetherian.md items/thm-artinian-ring-has-finite-length.md items/thm-artinian-local-ring-has-nilpotent-maximal-ideal.md items/thm-structure-theorem-for-artinian-rings.md items/thm-artinian-ring-characterisation-by-primes.md items/cor-artinian-quotients-and-localisations.md items/ex-artinian-product-of-local-rings.md items/ex-field-is-artinian.md items/ex-length-of-a-truncated-local-module.md items/ex-zero-dimensional-nonnoetherian-ring.md`
  Result: clean on all 12 changed items.

- `node tools/regen-contract-entries.mjs research/frontier-21-batch-3.proof-contracts.json thm-artinian-ring-has-finitely-many-maximal-ideals thm-nilradical-of-artinian-ring-is-nilpotent thm-artinian-ring-is-noetherian thm-artinian-ring-has-finite-length thm-artinian-local-ring-has-nilpotent-maximal-ideal thm-structure-theorem-for-artinian-rings thm-artinian-ring-characterisation-by-primes cor-artinian-quotients-and-localisations ex-artinian-product-of-local-rings ex-field-is-artinian ex-length-of-a-truncated-local-module ex-zero-dimensional-nonnoetherian-ring`
  Result: regenerated `2`, skipped `10` because the helper only rewrites entries when it can parse both fact lines and proof steps from disk; I manually synced the remaining changed derivations in the contract file.

- `node tools/proof-contract.mjs research/frontier-21-batch-3.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 18/18 item(s) checked`.

- `node tools/citation-fidelity.mjs research/frontier-21-batch-3.proof-contracts.json --json`
  Result: `2` citations checked, `0` quote-not-found rows, `0` widening candidates.

- `node tools/boundary-audit.mjs research/frontier-21-batch-3.proof-contracts.json --fail-on-contradicted --fail-on-template`
  Result: no contradicted dispositions and no template-reuse cluster at the configured threshold.

- `node tools/content-policy.mjs research/frontier-21-batch-3.pages.json`
  Result: `content-policy: 18 scoped item(s), 0 error(s), 0 warning(s)`.

## Blocker

- None.
