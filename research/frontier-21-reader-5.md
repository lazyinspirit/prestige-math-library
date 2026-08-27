# frontier-21 reader-5 report

Date: Thursday, August 27, 2026.
Batch: `research/frontier-21-batch-5.pages.json`

## Opened scope

- Control artifacts opened: `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `.autopilot/status.md`, `research/frontier-21-reader.task.md`, `research/frontier-21-beta-5.task.md`, `research/frontier-21-batch-5.pages.json`, `research/frontier-21-batch-5.coverage.json`, `research/frontier-21-batch-5.notes.md`, `research/frontier-21-batch-5.proof-contracts.json`, `research/frontier-21-step6-hash-5-pre.json`, `research/frontier-21-alpha-step4.md`, `research/plan-algebra-track-expansion.md`, and `research/plan-spec.json`.
- Assigned page paths checked: `library/abstract-algebra/the-group-algebra-and-representations.md` and `library/abstract-algebra/the-group-algebra-and-representations-examples.md`.
- Assigned item scope: opened all `35` batch-5 item files (`24` A-page items and `11` B-page items).
- Dependency items opened for verification: `45`.

```text
cor-endomorphisms-over-an-algebraically-closed-field-are-triangularisable
cor-every-complex-polynomial-splits-into-linear-factors
cor-independent-set-is-no-larger-than-a-finite-spanning-set
def-algebra-over-a-commutative-ring
def-algebraically-closed-field
def-commutative-ring
def-complex-numbers-and-arithmetic
def-coset
def-dimension
def-endomorphism-ring-of-a-module
def-exponent-of-a-finite-group
def-field
def-free-module-on-a-set-and-standard-basis
def-generated-subgroup
def-group
def-group-action
def-group-homomorphism
def-group-power
def-invertible-element
def-left-and-right-modules
def-linear-isomorphism-and-invertible-linear-map
def-linear-map
def-linear-subspace
def-module-homomorphism-kernel-image-and-cokernel
def-quaternion-group-of-order-eight
def-quaternions
def-ring-homomorphism
def-roots-of-unity-in-a-field
def-simple-module
def-subgroup
def-symmetric-group
def-vector-space
def-vector-space-of-linear-maps
lem-of-square-positive
lem-ring-units-form-a-group
prop-endomorphisms-form-a-ring
prop-linear-maps-form-a-vector-space
thm-derived-subgroup-is-characteristic-and-abelianization-is-universal
thm-quaternions-form-a-division-ring
thm-reals-ordered-field
thm-ring-homomorphism-kernel-is-an-ideal
thm-schurs-lemma-for-modules
thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity
thm-sign-is-a-homomorphism
thm-universal-property-of-free-modules
```

## Confirmed defects

1. `research/frontier-21-batch-5.pages.json:371-420`
   Disposition: report-only control-artifact drift; uneditable in this Step 6a role.
   Severity: nonfatal.
   Defect: the batch manifest's dependency lists are stale against the current B-page item frontmatter on three items.
   Evidence: `ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c` still lists `cor-schurs-lemma-for-irreducible-representations` and `prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra` in the manifest, but the current file at `items/ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c.md:10` instead depends on `def-intertwiner-equivalent-and-faithful-representations`, `def-subrepresentation-and-irreducible-representation`, and `thm-complex-numbers-form-a-field`. `fs-the-group-algebra-of-a-nontrivial-finite-group-is-a-field` omits `def-field` from the manifest at `research/frontier-21-batch-5.pages.json:399-400`, but the current file cites it at `items/fs-the-group-algebra-of-a-nontrivial-finite-group-is-a-field.md:10,36`. `fs-schurs-lemma-over-an-arbitrary-field-still-forces-scalars` still lists `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars` at `research/frontier-21-batch-5.pages.json:417-419`, but the current file's dependency list at `items/fs-schurs-lemma-over-an-arbitrary-field-still-forces-scalars.md:10` no longer uses that item.

2. `research/plan-spec.json:41758-42128`
   Disposition: report-only control-artifact drift; uneditable because this task forbids plan edits.
   Severity: nonfatal.
   Defect: the live plan spec still carries pre-repair batch-5 RT-1 records on seven items.
   Evidence: the current `research/plan-spec.json` entries for `def-augmentation-map-and-augmentation-ideal-of-a-group-ring`, `thm-group-actions-and-group-ring-modules-correspond`, `def-trivial-regular-and-permutation-representations`, `cor-irreducible-representations-have-degree-at-most-the-group-order`, `cor-schurs-lemma-for-irreducible-representations`, `thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group`, and `ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters` still show the older titles, strategies, and/or dependency lists rather than the current batch-5 manifest and item bytes. `node tools/validate-plan.mjs research/plan-spec.json` still returns `OK`, so this is sync drift rather than a live plan-shape failure.

3. No mathematical, citation, proof-contract, render, or page-summary defect was confirmed on the current assigned item/page bytes after the independent read and scoped checks.

## Edits

- Wrote this report.
- Wrote `research/frontier-21-reader-findings-5.json`.
- No batch item, page, manifest, proof-contract, or plan bytes were changed in this pass.
- No `verification.judge` record appears on the `35` batch-5 item files, so no stale judge record needed removal.

## Page verdicts

- `library/abstract-algebra/the-group-algebra-and-representations.md`: pass on current bytes.
- `library/abstract-algebra/the-group-algebra-and-representations-examples.md`: pass on current bytes.

## Verification

- `node tools/tsx-run.mjs tools/precheck.mts ...35 batch-5 item files...`
  Result: `25 checked, 0 failing — all clean`.
- `node tools/rendercheck.mjs ...37 batch-5 page/item files...`
  Result: `OK — 37 file(s): no wikilink inside math, no nested or unbalanced delimiters, no multiline display block, every math span parses under the real KaTeX, and every frontmatter block parses under the renderer's YAML parser.`
- `node tools/proof-contract.mjs research/frontier-21-batch-5.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 25/25 item(s) checked`.
- `node tools/boundary-audit.mjs research/frontier-21-batch-5.proof-contracts.json --fail-on-contradicted --fail-on-template`
  Result: no template reuse cluster at or above size `3`, and no contradicted dispositions.
- `node tools/citation-fidelity.mjs research/frontier-21-batch-5.proof-contracts.json --fail-on-missing-quote`
  Result: `citation-fidelity: 80 citation(s) over 25 authored item(s)` with no missing quotes and no widening candidates.
- `node tools/content-policy.mjs research/frontier-21-batch-5.pages.json`
  Result: `content-policy: 35 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-21-batch-5.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 49 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: `OK`; the output still contains only repository-wide `redundant-prereq` advisories outside batch-5 scope.

## Blockers

- No mathematical blocker remains on the current batch-5 page or item bytes.
- Control-artifact sync remains open: `research/frontier-21-batch-5.pages.json` and `research/plan-spec.json` still need an owner-authorized sync pass outside this Step 6a edit envelope.
