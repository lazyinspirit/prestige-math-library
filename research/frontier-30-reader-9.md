# frontier-30 reader-9 report

Date: 2026-09-04.
Run: `frontier-30`
Batch: `9`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `research/frontier-30-reader.task.md`, `research/frontier-30-dispatch/reader-reader-9.prompt.md`, `research/frontier-30-batch-9.pages.json`, `research/frontier-30-batch-9.coverage.json`, `research/frontier-30-batch-9.proof-contracts.json`, `research/frontier-30-batch-9.notes.md`, `research/frontier-30-splice-9.json`, `research/frontier-30-step6-hash-9-pre.json`, and the live controller state via `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`.
- Assigned pages: `library/category-theory/enriched-categories.md` and `library/category-theory/enriched-categories-examples.md`.
- Assigned A-page items: `def-enriched-category`, `rem-the-order-of-the-tensor-factors-in-composition`, `def-enriched-functor`, `rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness`, `def-enriched-natural-transformation`, `thm-the-compact-square-form-of-enriched-naturality`, `rem-enriched-naturality-is-strictly-stronger-than-ordinary-naturality`, `thm-enriched-categories-functors-and-natural-transformations-form-a-two-category`, `def-the-underlying-ordinary-category-of-an-enriched-category`, `thm-the-underlying-category-construction-is-a-two-functor`, `rem-the-underlying-category-can-lose-information`, `thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs`, `thm-a-category-enriched-in-a-preorder-is-a-preorder-and-one-enriched-in-sets-is-an-ordinary-category`, `thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category`, `cor-an-additive-category-is-an-ab-enriched-category-with-a-zero-object-and-finite-biproducts`, `rem-the-commutative-monoid-case`, `thm-a-closed-monoidal-category-is-enriched-in-itself`, `def-representable-enriched-functor`, `thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set`, `thm-weak-enriched-yoneda-lemma`, `thm-strong-enriched-yoneda-lemma-as-a-particular-end`, `rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims`, `cor-the-enriched-yoneda-embedding-is-fully-faithful`, `def-cotensor-and-tensor`, `cex-a-bijection-of-underlying-hom-sets-does-not-establish-a-cotensor`, `def-enriched-weighted-limit`, `thm-the-free-enriched-category-two-adjunction`, `def-conical-limit-in-an-enriched-category`, `thm-there-is-in-general-no-constant-enriched-functor`, `thm-conical-limits-do-not-suffice-in-the-enriched-setting`, `thm-a-conical-limit-is-stronger-than-a-limit-in-the-underlying-category`, `thm-when-a-category-is-tensored-every-limit-in-it-is-a-conical-enriched-limit`, `thm-enriched-completeness-is-cotensors-plus-small-conical-limits`, `rem-this-does-not-reduce-indexed-limits-to-conical-ones`, `thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories`, `thm-change-of-base-extends-to-functors-and-natural-transformations-and-is-a-two-functor`, `cor-the-underlying-ordinary-category-is-an-instance-of-change-of-base`, `rem-what-is-not-proved-about-change-of-base`, `def-enriched-adjunction`, `thm-a-right-enriched-adjoint-preserves-weighted-limits`, `thm-enriched-adjoint-functor-theorem-for-cotensored-categories`, `thm-a-category-is-tensored-exactly-when-every-covariant-hom-has-a-left-enriched-adjoint`, and `thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables`.
- Assigned B-page items: `ex-a-two-category-as-a-cat-enriched-category`, `ex-a-preordered-set-as-a-category-enriched-in-the-two-element-lattice`, `ex-a-metric-space-as-an-enriched-category`, `ex-a-ring-as-a-one-object-ab-enriched-category`, `ex-the-underlying-category-of-a-cat-enriched-category-forgets-the-two-cells`, `ex-a-cotensor-computed-in-sets`, `cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor`, `ex-change-of-base-along-the-underlying-set-functor`, `fs-a-conical-limit-in-an-enriched-category-is-just-a-limit-in-the-underlying-category`, `fs-every-enriched-category-has-constant-enriched-functors`, `fs-the-underlying-ordinary-category-determines-the-enriched-category`, `fs-a-cat-enriched-category-is-the-same-thing-as-a-strict-two-category`, `fs-an-enriched-natural-transformation-is-a-natural-transformation-of-the-underlying-functors`, `fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category`, and `fs-a-monoidal-category-carries-at-most-one-symmetry`.
- Published dependency items opened for verification: `def-additive-category`, `def-category`, `def-end-and-coend`, `def-functor-category`, `def-lax-strong-and-strict-monoidal-functor`, `def-left-closed-and-right-closed-monoidal-category`, `def-metric-space`, `def-monoidal-category`, `def-power-and-copower-by-a-set`, `def-preadditive-category`, `def-preorder`, `def-semiadditive-category`, `def-set-weighted-limit-and-weighted-colimit`, `def-strict-two-category`, `def-symmetric-monoidal-category`, `def-the-internal-hom-and-its-evaluation-morphism`, `thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids`, `thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring`, `thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product`, `thm-the-category-of-small-categories-is-cartesian-closed`, `thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups`, `thm-the-internal-hom-composition-morphism`, and `thm-the-unit-is-an-internal-hom-unit`.
- Primary-source rereads used where the enriched-limit and adjunction statements were too compressed to trust from memory alone: Kelly's TAC reprint via the same-text Scribd mirror around `(1.39)`, `(1.46)` to `(1.48)`, `(2.40)`, and `(3.56)`; Riehl `cathtpy.pdf` around Proposition `3.5.10`, Remark `3.5.11`, and the Chapter 7 weighted-limit sections; Bayeh-Hess-Karpova-Kedziorek-Riehl-Shipley `arXiv:1401.3651` Appendix `A.3`.

## Confirmed defects and edits

1. Repaired render-breaking multiline display math in `items/def-enriched-category.md`.
   Two displayed formulas in the definition body were split across source lines inside `$$...$$`, which `rendercheck` flags as a real mis-render. I collapsed each display to one source line without changing the mathematics.
2. Repaired the same multiline-display defect in `items/def-enriched-functor.md`.
   The composition axiom display was hard-wrapped inside `$$...$$`; I flattened it to the renderer's canonical one-line form.
3. Repaired the same multiline-display defect in `items/def-enriched-natural-transformation.md`.
   Both defining lozenge composites were hard-wrapped inside display delimiters; I collapsed them to one-line displays.
4. Repaired the same multiline-display defect in `items/def-the-underlying-ordinary-category-of-an-enriched-category.md`.
   The displayed composite defining ordinary composition was hard-wrapped inside `$$...$$`; I flattened it to a single line.
5. Repaired the same multiline-display defect in `items/thm-the-compact-square-form-of-enriched-naturality.md`.
   The displayed square in the statement was hard-wrapped inside one display block; I rewrote it onto one source line and then reflowed the file.
6. Repaired stale boundary contracts in `research/frontier-30-batch-9.proof-contracts.json`.
   The `iff-forward` and `iff-reverse` rows for `thm-the-compact-square-form-of-enriched-naturality`, `thm-weak-enriched-yoneda-lemma`, `thm-enriched-completeness-is-cotensors-plus-small-conical-limits`, and `thm-enriched-adjoint-functor-theorem-for-cotensored-categories` incorrectly said that biconditional claims were not biconditionals. I rewrote those boundary rows to match the current proofs.
7. Regenerated the batch-9 citation and derivation entries after the definition-display repairs.
   Because the proof-contract quotes are exact excerpts from the cited items' current statement sections, the definition-format repairs changed the source text that many contracts quote. I ran `tools/regen-contract-entries.mjs` across all `41` scoped proof-bearing items so the contract evidence matches current disk again.

No repaired item carried a `verification.judge` block, so there was no stale judge record to remove.

## Per-page verdicts

- `enriched-categories`: pass after the five render repairs and the proof-contract cleanup above. I re-read the current A-page summary, definitions, theorems, counterexample, and remarks against the opened dependency closure and the primary-source spots noted above.
- `enriched-categories-examples`: pass. I re-read all fifteen example, counterexample, and false-statement items against the current A-page claims; no B-page-body edit was needed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/def-enriched-category.md items/def-enriched-functor.md items/def-enriched-natural-transformation.md items/thm-the-compact-square-form-of-enriched-naturality.md items/def-the-underlying-ordinary-category-of-an-enriched-category.md`
  Result: only `items/thm-the-compact-square-form-of-enriched-naturality.md` needed canonical reflow; the other four files were already stable after the manual repair.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-enriched-category.md items/def-enriched-functor.md items/def-enriched-natural-transformation.md items/thm-the-compact-square-form-of-enriched-naturality.md items/def-the-underlying-ordinary-category-of-an-enriched-category.md`
  Result: `1 checked, 0 failing`; the only proof-bearing changed item passed.
- `node tools/tsx-run.mjs tools/precheck.mts` over the remaining proof-bearing assigned batch-9 items
  Result: `40 checked, 0 failing`.
- `node tools/rendercheck.mjs` over all `58` assigned items plus both assigned pages
  Result: `60` files passed YAML, KaTeX, and display-shape checks after the repairs.
- `node tools/proof-contract.mjs research/frontier-30-batch-9.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 41/41 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-9.proof-contracts.json`
  Result: `97` citations checked; no missing quotes and no widening candidates.
- `node tools/content-policy.mjs research/frontier-30-batch-9.pages.json`
  Result: `58 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/boundary-audit.mjs research/frontier-30-batch-9.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: one advisory candidate remained on `thm-the-compact-square-form-of-enriched-naturality` for the `empty` axis. I re-opened the item and kept the current `not_applicable` row: the theorem quantifies over a family of components but does not split into an independent empty-family branch.
- `node tools/citecheck.mjs` over the assigned batch-9 items
  Result: one heuristic warning on `items/ex-a-preordered-set-as-a-category-enriched-in-the-two-element-lattice.md`. I re-read it and treated it as a false positive: `[L1]` already packages the preorder/enrichment equivalence that step `1.1` instantiates.
- `node tools/prosecheck.mjs` over both page summaries and the assigned remarks with `--warnings`
  Result: one heuristic warning on `items/rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims.md` for the phrase "two claims". I re-read it and left it unchanged; it is accurate local orientation prose, not a false count about the library.
- `git diff --check -- items/def-enriched-category.md items/def-enriched-functor.md items/def-enriched-natural-transformation.md items/thm-the-compact-square-form-of-enriched-naturality.md items/def-the-underlying-ordinary-category-of-an-enriched-category.md research/frontier-30-batch-9.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
