# Batch 11 scaffold notes — phase-2-next-21

Role: beta

Label: batch-11

Coverage: two Foundations A/B pairs, orders 683–686

## Controlling design and plan comparison

I read the complete SET-15 and SET-16 design sections in `research/plan-set-theory-completion-track.md` (beginning at lines 606 and 620), the assigned dispatch, and the current `research/plan-spec.json` entries. The page IDs, titles, category, orders, companions, and ordered `requires` arrays agree exactly. There is **no design conflict**. The plan's four `items` arrays are empty because this run has not spliced the Step 1 overlay; that representational difference is not a design conflict, and the current plan remains controlling.

The scaffold preserves the design boundary: SET-15 separates closure, distributivity, chain conditions, nice-name counts, Cohen/collapse forcing, semantic generic extensions, and PA-formalized consistency transfer; SET-16 treats only two-step and finite-support ccc iterations, the omega-two MA construction, and the listed MA consequences. Easton's theorem, singular-cardinal continuum control, proper forcing, and countable-support iteration are not claimed.

## Inventory and construction order

All 42 IDs were unused. No selected pair changed and no page split was required.

- `preservation-cohen-forcing-and-the-continuum`: 15 items.
- `preservation-cohen-forcing-and-the-continuum-examples`: 4 items.
- `finite-support-iterations-and-martins-axiom`: 19 items.
- `finite-support-iterations-and-martins-axiom-examples`: 4 items.

Items are in prerequisite order. SET-15 defines the forcing properties and named orders before the preservation, collapse, continuum, and formal-transfer consumers. SET-16 defines two-step and finite-support iterations before restriction, ccc, capture, size, bookkeeping, formal-transfer, and MA-consequence consumers. B items are leaves and are never used by another B item.

Two overstatements found during the final proof audit were corrected before readiness was recorded:

- `lem-iteration-restrictions-and-complete-embeddings` now reflects incompatibility only for two conditions embedded from an earlier stage; arbitrary restrictions of incompatible later conditions need not be incompatible. Its proof strategy uses the correct reduction property.
- `lem-finite-support-iteration-size-bound` now asserts a forcing-equivalent coherently coded presentation, equivalently a dense suborder of size at most `mu`. It does not bound a raw presentation containing redundant names.

## Proof-dependency audit

I read the statements and proofs of the actual load-bearing published suppliers, including the forcing theorem and truth lemma, ordinal preservation, finite-fragment forcing transfer, PA proof-code reduction, finite and regular delta-system lemmas, cofinality/cardinal arithmetic, product topology and topological ccc, complete metrizability/Baire definitions, and the Lebesgue-measure regularity/completeness interfaces. Page membership and publication state were not used as substitutes for proof checks.

The following proof boundaries are explicit:

- `kappa`-closure is kept separate from `kappa`-cc. Countably closed means `aleph_1`-closed under the strict `<kappa` convention, whereas ccc means `aleph_1`-cc.
- Closure decides short names by recursion; chain-condition preservation uses maximal deciding antichains. Ordinal preservation is not silently promoted to cardinal preservation.
- `Col(kappa,lambda)` and the finite-condition `Lv(theta)` are distinct: the former adds one surjection from `kappa` onto `lambda`, while the latter collapses every nonzero ordinal below a regular uncountable `theta` and preserves `theta` by `theta`-cc.
- The exact Cohen continuum computation uses both the lower bound from distinct coordinate generics and the upper bound from nice names. The higher Cohen argument uses below-`kappa` supports and antichains of size at most `kappa`; it does not reuse the ccc count without generalizing it.
- Finite-support iteration restrictions use complete embeddings/reductions. At limit stages the ccc proof delta-systems finite supports and amalgamates only after compatible root restrictions have been found.
- The omega-two bookkeeping proof captures final small coded orders and dense families at a bounded stage. If such an order were non-ccc at that earlier stage, its uncountable antichain would remain uncountable through the later ccc tail; this is the direction of the ccc absoluteness argument actually used.
- The meagre and null union results have separate constructions. Neither is inferred from the other, and the category proof avoids the defective published sigma-ideal item described below.
- The formal negative-CH, negative-GCH, and MA-plus-not-CH conclusions consume explicit PA-verified finite-fragment proof-code compilers. A semantic forcing extension or a countable transitive model is never treated as a formal relative-consistency proof.

The Recorded targets `rem-independence-of-ch-and-gch` and `rem-martins-axiom` are not dependencies. They remain publication targets only.

## Choice and deferred-set-theory boundary

Ordinary forcing is over ZFC grounds and preserves AC. Every theorem using maximal antichains, simultaneous name choices, well-ordering, delta-system thinning, cardinal arithmetic, or bookkeeping explicitly declares `def-axiom-of-choice` and identifies the use. Pure definitions and the explicit almost-disjoint-family construction do not pretend to need a stronger principle than their construction uses.

Choice-free and incompatible-axiom branches are not joined. The whole-run plan validator and external-reference check both passed their Foundations boundary rules: no owned item or prerequisite path reaches `deferred-set-theory-beyond-choice`.

## Sources and dispositions

Two independent complete treatments were used for each A page:

1. Asaf Karagila, *Lecture Notes: Forcing & Symmetric Extensions*, full 90-page author-hosted PDF: <https://karagila.org/files/Forcing-2023.pdf>. For SET-15 I read Chapters 3–5 at the exact theorem locators recorded in coverage; for SET-16 I read Chapters 6–7, including the complete two-step, finite-support ccc, and MA arguments.
2. Kenneth Kunen, *Set Theory: An Introduction to Independence Proofs*, full 325-page book PDF: <https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf>. For SET-15 I read Chapter II §1 and Chapter VII §§5–6, 8–9; for SET-16 I read Chapter II §§1–3 and Chapter VIII §§5–6, at the exact locators recorded in coverage.

The coverage ledger contains 83 harvested rows: SET-15 has 40 rows (37 included, 1 inline, 2 out of scope), and SET-16 has 43 rows (40 included, 3 out of scope). Every row has a valid disposition and, where applicable, an item destination. The out-of-scope rows identify their specific later-theory boundary; there are no deferred rows without destinations.

`source-fetch-check --stamp` fetched and inspected all four source occurrences. Karagila was recorded as 971,052 bytes, 90 pages, SHA-256 prefix `5907564aba34aea9`; Kunen as 6,612,361 bytes, 325 pages, prefix `5344616b5b4b639c`. The final check-only pass reports 4/4 fetch-verified and 4/4 resolved. There were no retrieval failures, retries beyond the successful initial attempts, source drops, or owner source escalations.

## Published defect evidence

One published prerequisite-area defect was found and is recorded here for the canonical ledger:

- Item: `prop-meagre-subsets-form-a-sigma-ideal`.
- Publication state: published on `complete-metrizability-and-baire`.
- Exact evidence: its Statement says countable-union closure assumes the Axiom of Countable Choice and explains that Countable Choice selects one nowhere-dense witnessing sequence for each member of the family. Its frontmatter deps are only `def-nowhere-dense-meagre-and-residual-subsets` and `thm-n-cross-n-countable`; `def-countable-choice` is absent. Proof step 2.1 then flattens the unrecorded chosen family.
- Planned supplier: none; `def-countable-choice` is already published, so this is a dependency/axiom-frontmatter repair rather than a new supplier request.
- Repair strategy: add `def-countable-choice` to the item's deps and make the proof step cite that selection explicitly; retain the choice-free empty/subset clauses separately if desired.
- Effect on this batch: no block. `thm-ma-small-unions-of-meagre-sets` proves the required ZFC+MA statement directly, declares full AC, and deliberately does not consume the defective proposition. The defect is therefore unrelated published consumer debt, not an actual inadequate prerequisite of the new supplier.

No defective actual prerequisite remains in either owned dependency chain.

## Cross-batch dependencies and readiness

`research/phase-2-next-21-batch-11.cross-batch-dependencies.json` is `[]`. Every external item supplier is already published; SET-16 consumes SET-15 within this batch and at a later page order. No planned supplier is treated as published. The canonical frontier ledger refresh completed and deduplicated successfully.

All 42 items have hash-current Step 1 `ready` records written in prerequisite order with `tools/step1-decisions.mjs record`, explicit examined-dependency arrays, and source/proof-strategy evidence. There are 0 owned escalations and 0 owned open records. These construction records are not independent mathematical approval; owner/operator reconciliation and Step 3 review remain required.

## Gate results

Checks were rerun after the two final statement repairs. Whole-run values are a concurrent-run snapshot.

| Check | Exit | Actual result |
|---|---:|---|
| Owned `manifest-deps.mjs` | 0 | 42 items, 0 normalized, 0 errors. |
| Owned `content-policy.mjs --manifest-only` | 0 | 42 scoped items, 0 errors, 0 warnings. |
| `coverage-checklist.mjs ...batch-11.coverage.json --require-destination` | 0 | 2 A pages, 83 harvested results, 0 errors, 0 warnings. |
| Final check-only `source-fetch-check.mjs` | 0 | 4/4 source occurrences fetch-verified and resolved; 0 documented drops. |
| Whole-run `manifest-deps.mjs research/phase-2-next-21-batch-*.pages.json` | 0 | 745 items, 0 normalized, 0 errors. |
| Whole-run `content-policy.mjs --manifest-only research/phase-2-next-21-batch-*.pages.json` | 0 | 745 scoped items, 0 errors, 0 warnings. |
| `validate-plan.mjs research/plan-spec.json` | 0 | Declared page order is acyclic and consistent; no item cycle, forward reference, B-page dependency, unresolved ID, or Foundations-to-deferred-set-theory path among 1,056 pages with item lists. 563 planned pages still have no item list. |
| `manifest-integrity.mjs --run phase-2-next-21` | 0 | 42 pages owed, 42 present in manifests; no scope drift. |
| `splice-plan.mjs --run phase-2-next-21 --batch 11 --dry-run` | 0 | Exactly 4 owned pages and 42 new items would splice; the dry run made no plan write. |
| `extcheck.mjs --quiet` | 0 | 55 pre-existing published Recorded-material warnings; every recorded-not-proved statement remains a cited no-proof remark and every consequence is marked. No warning names an owned item, and no Foundations deferred dependency was reported. |
| Owned readiness reconciliation | 0 | 42/42 records ready and hash-current; 0 escalated, 0 open. The whole-run Step 1 gate remains open for other live batches. |
| `frontier-dependency-ledger.mjs refresh --run phase-2-next-21` | 0 | Canonical derived ledger refreshed and deduplicated from the empty batch-11 input. |

There are no unresolved owned gate findings.
