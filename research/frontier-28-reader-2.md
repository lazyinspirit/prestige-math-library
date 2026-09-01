# frontier-28 reader-2 report

Date: Tuesday, September 1, 2026.
Batch: `research/frontier-28-batch-2.pages.json`

## Opened scope

- Control artifacts opened: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-28-reader.task.md`, `research/frontier-28-beta-2.task.md`, `research/frontier-28-batch-2.pages.json`, `research/frontier-28-batch-2.coverage.json`, `research/frontier-28-batch-2.proof-contracts.json`, `research/frontier-28-batch-2.notes.md`, `research/frontier-28-step6-hash-2-pre.json`, `research/frontier-28-splice-2.json`, `research/frontier-28-covers.json`, `research/frontier-28-scope-ledger.json`, `research/frontier-28-step0-notes.md`, `research/frontier-28-alpha-step0-drift.md`, `research/frontier-28-alpha-a-step3-scaffold-review.md`, `research/frontier-28-alpha-a-recheck.md`, `research/frontier-28-alpha-a-scope-decisions.json`, `research/frontier-28-alpha-step4.md`, and the live run state from `.autopilot/frontier-28/status.md`, `.autopilot/frontier-28/state.json`, and `.autopilot/frontier-28/autopilot.log`.
- Governing design slices opened: `research/plan-commutative-algebra-track.md` around CA-11 and CA-12, `research/plan-algebraic-geometry-track.md` around the flatness cross-track note, and the relevant `research/plan-spec.json` entries.
- Assigned page paths checked: `library/commutative-algebra/rees-modules-artin-rees-and-hilbert-samuel-theory.md`, `library/commutative-algebra/rees-modules-artin-rees-and-hilbert-samuel-theory-examples.md`, `library/commutative-algebra/flatness-and-faithful-flatness.md`, and `library/commutative-algebra/flatness-and-faithful-flatness-examples.md`.
- Dependency page paths opened for verification context: `library/abstract-algebra/the-field-of-fractions-and-localisation.md`, `library/abstract-algebra/free-modules-and-exact-sequences.md`, `library/abstract-algebra/tensor-products-of-modules.md`, `library/abstract-algebra/chain-conditions-and-semisimple-modules.md`, `library/commutative-algebra/noetherian-rings-and-hilbert-basis.md`, `library/commutative-algebra/localisation-of-modules-and-support.md`, `library/commutative-algebra/valuation-rings-and-discrete-valuation-rings.md`, and `library/commutative-algebra/krull-dimension-and-height-theorems.md`.
- Assigned item scope: opened all `46` batch-owned item files on the current bytes (`32` A-page proof/definition items and `14` B-page examples).
- Dependency items opened for verification: `24`.

```text
cor-free-modules-are-projective-and-flat
cor-length-is-additive-in-short-exact-sequences
cor-local-rings-have-only-trivial-idempotents
cor-nakayama-generators-modulo-an-ideal
def-composition-series-and-length-of-a-module
def-flat-and-faithfully-flat-modules-and-ring-maps
def-localisation-at-a-prime-ideal
def-system-of-parameters-and-parameter-ideal
lem-determinant-trick-for-nakayama
prop-extension-of-scalars-preserves-flat-modules
prop-transitivity-of-flatness-under-change-of-rings
thm-dimension-as-minimal-number-of-radical-generators
thm-dvr-ideal-and-module-length
thm-finite-generation-and-finite-presentation-over-a-noetherian-ring
thm-flatness-criteria-by-injections-and-ideals
thm-jacobson-radical-unit-characterisation
thm-localisation-of-modules-is-exact
thm-localisation-of-modules-is-tensor-product
thm-nakayama-lemma
thm-noetherian-ring-ideal-characterisations
thm-projective-module-characterizations
thm-projective-modules-are-flat
thm-tensor-products-commute-with-arbitrary-direct-sums
thm-unit-isomorphisms-for-module-tensor-products
```

## Confirmed defects

1. `items/thm-krull-intersection-theorem.md`
   Disposition: repaired in the owned A-page item.
   Severity: nonfatal.
   Evidence: the proof carried two broken references and one malformed sentence at the load-bearing transition from `IK=K` to the Jacobson-radical vanishing clause. The intended mathematics was standard, but the current bytes were ill-formed.

2. `items/cor-parameter-ideal-multiplicity-positive.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: step 1.1 wrongly replaced an arbitrary ideal of definition by a parameter ideal and step 2.1 concluded `e_I(M)=e_Q(M)` without proof. That argument does not establish positivity for the stated `e_I(M)`.

3. `items/thm-equational-criterion-for-flatness.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: the forward implication invoked the meaningless tensor `a\otimes 1` for a coefficient vector `a\in R^n`, so the claimed passage from flatness to the relation-lifting decomposition was invalid on the current text.

4. `items/cor-faithfully-flat-ring-maps-are-injective.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: the old proof claimed that an ideal extending to `0` must already be `0` from the proper-ideal criterion for faithful flatness. That criterion does not imply the stated conclusion.

5. `items/thm-localisations-are-flat.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: the proof used exactness of localization in step 1.1 without tracing it to either an earlier cited theorem or an elementary derivation. I repaired the item by citing the published localization-exactness theorem explicitly and updating the contract boundary evidence to the new step numbering.

6. `items/lem-rees-module-finiteness-and-stable-filtrations.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: nonfatal.
   Evidence: the displayed formula for the Rees algebra and Rees module was split across multiple source lines inside a single `$$...$$` block and failed the real renderer.

7. `items/thm-existence-of-hilbert-samuel-polynomial.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: nonfatal.
   Evidence: the Facts block contained multiline `$$...$$` displays for the associated graded data and cumulative-sum identity, which mis-rendered under the real renderer.

8. `items/thm-flat-going-down.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: nonfatal.
   Evidence: the three-prime setup in the Statement was written as a multiline display block and failed `rendercheck`.

## Boundary-audit candidates read and dismissed

- `thm-krull-intersection-theorem`: the `empty` candidate is not a live defect. The indexed intersection is fixed over `n\ge 0`, so there is no missing empty-family branch.
- `thm-existence-of-hilbert-samuel-polynomial`: the `empty` candidate is not a live defect. The cumulative-sum notation does not create a separate empty-family branch beyond the stated `n\ge 0` indexing.
- `thm-equational-criterion-for-flatness`: the `empty` candidate is not a live defect. The `n=0` relation is vacuous and does not force a separate proof branch.
- `ex-hilbert-series-of-a-polynomial-ring`: the `zero` candidate is not a live defect. The statement works over a field and the symbolic denominators are formal power-series identities, not division by a possibly zero ring element inside the proof.

## Edits

- Patched `items/thm-krull-intersection-theorem.md`.
- Patched `items/cor-parameter-ideal-multiplicity-positive.md`.
- Patched `items/thm-equational-criterion-for-flatness.md`.
- Patched `items/cor-faithfully-flat-ring-maps-are-injective.md`.
- Patched `items/thm-localisations-are-flat.md`.
- Patched `items/lem-rees-module-finiteness-and-stable-filtrations.md`.
- Patched `items/thm-existence-of-hilbert-samuel-polynomial.md`.
- Patched `items/thm-flat-going-down.md`.
- Regenerated the proof-contract derivation/citation entries for all eight changed proof-bearing items in `research/frontier-28-batch-2.proof-contracts.json`.
- Updated the stale `iff-reverse` boundary-evidence row for `thm-localisations-are-flat` in `research/frontier-28-batch-2.proof-contracts.json` from deleted step `1.2` to current step `2.1`.
- No stale `verification.judge` record required removal.
- Wrote this report.
- Wrote `research/frontier-28-reader-findings-2.json`.

## Page verdicts

- `library/commutative-algebra/rees-modules-artin-rees-and-hilbert-samuel-theory.md`: sufficient on the current bytes after the Krull-intersection, Hilbert-Samuel-positivity, Rees-display, and Hilbert-Samuel-display repairs.
- `library/commutative-algebra/rees-modules-artin-rees-and-hilbert-samuel-theory-examples.md`: sufficient on the current bytes after the batch-local render repair to `thm-flat-going-down` was irrelevant to this page and no further example defect remained.
- `library/commutative-algebra/flatness-and-faithful-flatness.md`: sufficient on the current bytes after the equational-criterion, faithfully-flat-injective, localization, and going-down repairs.
- `library/commutative-algebra/flatness-and-faithful-flatness-examples.md`: sufficient on the current bytes; no uneditable defect remains in the B-page prose or its owned examples.

## Verification

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-rees-module-finiteness-and-stable-filtrations.md items/thm-existence-of-hilbert-samuel-polynomial.md items/thm-krull-intersection-theorem.md items/cor-parameter-ideal-multiplicity-positive.md items/thm-equational-criterion-for-flatness.md items/cor-faithfully-flat-ring-maps-are-injective.md items/thm-localisations-are-flat.md items/thm-flat-going-down.md`
  Result: all eight changed items were stable after the manual repairs (`unchanged` on the final rerun).
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-rees-module-finiteness-and-stable-filtrations.md items/thm-existence-of-hilbert-samuel-polynomial.md items/thm-krull-intersection-theorem.md items/cor-parameter-ideal-multiplicity-positive.md items/thm-equational-criterion-for-flatness.md items/cor-faithfully-flat-ring-maps-are-injective.md items/thm-localisations-are-flat.md items/thm-flat-going-down.md`
  Result: `8 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-28-batch-2.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 40/40 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-28-batch-2.proof-contracts.json`
  Result: `89 citation(s) over 40 authored item(s)` with no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-28-batch-2.proof-contracts.json`
  Result: `320 rows` with `4` heuristic candidates. I re-read all four and did not confirm a live defect on the current text.
- `node tools/rendercheck.mjs ...batch-2 item/page file list...`
  Result: `OK — 50 file(s)`.
- `node tools/content-policy.mjs research/frontier-28-batch-2.pages.json`
  Result: `content-policy: 46 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-2.coverage.json`
  Result: `coverage-checklist: 2 page(s), 70 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-2.coverage.json`
  Result: `source-fetch-check: 13/13 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: `OK`, with only the standing repository-wide `redundant-prereq` notes outside this batch and the usual note that many planned pages still carry no item list.
- `git diff --check`
  Result: clean.

## Blockers

- No mathematical blocker remains on the current batch-2 page/item bytes.
- No uneditable in-flight-item, page, or published-dependency defect remains after the eight batch-local repairs.
