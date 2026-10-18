# Batch 58 — authoring notes

## Inventory, dependency order, and levels

Batch 58 owns one A/B pair and ten draft items. The A page has eight items, below the 100-item cap; the B page has two worked finite-rank items. The batch is level 2 and names Batch 57 as its prerequisite. Levels below are recomputed from the item dependency graph over Batch 57 plus Batch 58; published suppliers do not raise in-run levels.

| level | item | declared dependencies |
|---:|---|---|
| 2 | `def-temperley-lieb-link-state-standard-modules` | `def-temperley-lieb-diagram-category`, `thm-temperley-lieb-diagram-category-laws`, `def-free-module-on-a-set-and-standard-basis` |
| 3 | `lem-temperley-lieb-link-state-module-action-is-well-defined` | link-state definition, diagram-category definition, category laws |
| 3 | `thm-temperley-lieb-link-state-dimension-formula` | link-state definition, `def-binomial-coefficient` |
| 4 | `lem-temperley-lieb-link-state-gram-form-is-invariant` | link-state definition, action lemma, diagram-category definition, category laws |
| 4 | `lem-temperley-lieb-link-state-restriction-filtration` | link-state definition, action lemma, diagram-category definition, category laws, `thm-temperley-lieb-diagram-generators-span` |
| 5 | `prop-temperley-lieb-link-state-form-vanishes-exactly-at-zero-loop-without-defects` | link-state definition, Gram-form lemma |
| 5 | `thm-temperley-lieb-link-state-diagram-basis-is-cellular` | link-state definition, action lemma, Gram-form lemma, diagram-category definition, category laws, `def-cellular-algebra-basis-and-cell-module` |
| 5 | `cex-temperley-lieb-zero-cell-form-does-not-detect-module-head` | link-state definition, action lemma, Gram-form lemma, diagram-category definition, category laws |
| 6 | `cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules` | link-state definition, cellular-basis theorem, `thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra` |
| 7 | `ex-temperley-lieb-link-state-module-at-rank-three` | link-state definition, action lemma, dimension theorem, Gram-form lemma, diagram-category definition, cellular-basis theorem, simple-head corollary |

The definition’s `justified_by` points to the action lemma, which proves that its intended quotient action descends. Batch 57 supplier bodies and complete proofs were inspected before confirming readiness: `def-temperley-lieb-diagram-category`, `thm-temperley-lieb-diagram-category-laws`, and `thm-temperley-lieb-diagram-generators-span`. They fix the object/boundary conventions, arbitrary commutative-ring loop rule, left-factor-above-right product, associativity, and generator interface. Their draft status is preserved; no acceptance is inferred.

The cellular/simple-head route was checked through the actual published supplier bodies. The generic theorem’s transitive interfaces include the cellular definition, cell-form/radical lemma, simple-module and composition-series definitions, and Jordan–Hölder theorem. Its Murphy-basis dependency is used for its separate Hecke specialization, not for the abstract finite-dimensional cellular-algebra clause applied here. The local corollary requires a field and finite dimensionality; it preserves the theorem’s distinction between a zero cell-form quotient and the actual head.

## Convention and proof scope

The coefficient ring is a nonzero commutative ring with unit and the loop value `δ` is arbitrary. A link state is a diagram `n → t` with exactly `t` propagating strands; its defects are joined to the ordered top endpoints by noncrossing strands, so a defect cannot lie inside an arc. The number of arcs is `p=(n−t)/2`. The quotient by diagrams with fewer than `t` propagating strands has the stated link-state basis and a right action by stacking the state above the algebra diagram.

The A-page proves the ballot-number dimension, the reflection/capping form and its invariance, the two-step restriction short exact sequence, and the link-state diagram cellular datum. The cellular order is `λ_r ⪰ λ_t` iff `r≤t`; hence diagrams with fewer propagating strands have labels strictly greater than `λ_t` and form the ideal used in the cellular axiom. The restriction sequence is not claimed to split. The field-level simple-head corollary only applies the published generic cellular theorem after the TL basis and cell form have been identified.

The zero-form proposition is over the stated nonzero ring and proves that the form is identically zero exactly when `t=0`, `n>0`, and `δ=0`; for `n=t=0` it is the unit form. The rank-two B counterexample computes a one-dimensional simple module with zero cell form. The rank-three example computes the two generator actions and the Gram matrix, then proves simplicity at `δ=0`. The TikZ half-diagrams are explanatory; no proof depends on a drawing. No semisimplicity, Gram determinant formula, root-of-unity classification, Jones–Wenzl projector, trace descent, or physical claim is made.

## Plan and design comparison

The current task and controlling `plan-spec.json` require both `temperley-lieb-diagram-algebra-and-catalan-basis` and `type-a-hecke-specht-modules-and-cellular-bases`. The earlier PA-27 section in `research/physics-algebras-planning-2026-10-17/proposed-pages.json` formally listed only the TL diagram page and described the Hecke cellular page as navigation/context. This conflict is resolved in favor of the current plan/task: both page routes are kept in the A-page manifest. `plan-spec.json` has no item-level inventory for this page, so there is no competing item list to reconcile. PA-27 is marked `disposition: new`; it is not among the seven native-construction gateway exceptions, and this batch relies on none of those exceptions.

The direct page and item routes are recorded in `batch-58.cross-batch-dependencies.json`. The actual TL diagram supplier bodies are present and were read. The Hecke page and published generic cellular suppliers were also inspected. The Batch 57 page’s inherited reading-route mention of `algebraic-representation-and-tensor-symmetry-map` remains page-only: its current page body declares no exact item or hypotheses for that route. None of Batch 58’s items or claims depends on that route, so no affected claim is unresolved and no cross-pair file was edited.

## Sources read and harvest

The A page has three independent full-text treatments, including a book manuscript. The B page has two relevant treatments. Exact locators, source hashes, supported IDs, and per-result dispositions are in `batch-58.coverage.json`.

1. **Ridout–Saint-Aubin**, *Standard Modules, Induction and the Structure of the Temperley–Lieb Algebra*, complete 51-page article, [arXiv PDF](https://arxiv.org/pdf/1204.4505), §2 pp. 5–7, §3 pp. 11–15, and §4 Proposition 4.1 pp. 17–18. The complete module, form, zero-loop boundary, and restriction arguments were read. The source uses `p` for arcs and works over `C`; the local proofs state the `t`-defect convention and prove the needed claims over the declared ring. Verified fetch: 631,126 bytes, 51 pages, SHA-256 prefix `126aa444fd2076b9`; its prior successful fetch stamp from Batch 57 was reused.
2. **Enyang–Goodman**, *Cellular Bases for Algebras with a Jones Basic Construction*, complete 42-page article, [arXiv PDF](https://arxiv.org/pdf/1106.5339), §§5.2, 5.4 pp. 19–21 and §6.4.1–6.4.2 pp. 33–35, including Theorem 5.5 context, Propositions 6.22, Theorem 6.23 and Corollary 6.24. The tower-coherence context, dangle/path convention, explicit diagram basis, and restriction filtration were read in full. Proposition 6.22’s `δ`-invertible ground ring is explicitly excluded as a proof premise; Theorem 6.23’s diagram-basis identification is used as a convention comparison while the local cellular axioms are proved over arbitrary `R`. Verified fetch: 599,458 bytes, 42 pages, SHA-256 prefix `6e3142c2fd5f42eb`.
3. **Mathas**, *Hecke Algebras and Schur Algebras of the Symmetric Group*, complete 79-page manuscript, [author-hosted PDF](https://web.math.ucsb.edu/~bigelow/books/mathas.pdf), Chapter 2 §§1–2, pp. 9–18. The cellular axioms, cell module/form, radical, and simple-head classification arguments were read. The manuscript’s follow-up “non-degenerate” wording is not adopted; the published library theorem uses the proof-corrected condition “not identically zero” and makes no actual-head claim for a zero form. Verified fetch: 750,887 bytes, 79 pages, SHA-256 prefix `8cfeb611a95a3ff2`.

`source-fetch-check --stamp` verified all three unique source PDFs on their first recorded attempts (with the Ridout–Saint-Aubin stamp reused), with no retrieval failures, source drops, or owner escalations. The final two-page coverage file has five stamped source entries because two sources are also recorded for the B page. Its 21 harvested results all have explicit dispositions; the coverage checklist reports no errors or warnings.

## Scoped checks and readiness

The final scoped checks passed after the last carrier edit:

- Precheck: all 9 proof-bearing items passed; the definition was not applicable.
- Proof layout: 10 items, 30 numbered steps, 0 defects.
- Strict proof contracts: 10/10 items, 0 errors and 0 warnings. The contracts contain exact current supplier excerpts and each step’s claim and inputs.
- Dependency levels: all 21 items across prerequisite Batch 57 and Batch 58 checked with no errors; all ten Batch 58 labels match the computed levels above.
- Focused depcheck: 10 selected items and both pages, 0 errors or warnings. Extcheck: 10 items, 0 errors or warnings. Fwdcheck: selected pages and items, 0 errors or warnings.
- Content policy: 10 items, 0 errors or warnings. Rendercheck: all 10 items and both pages parsed; 12 files total, no math or frontmatter defects.
- Source fetch: all five source entries in the two-page coverage file are verified (three unique PDFs); no drops. Coverage checklist: two pages, 21 harvested results, 0 errors or warnings.
- Manual finite checks for the zero-loop boundary, rank-two counterexample, and rank-three module are captured in the proof contracts and item proofs. There is no separate executable TL finite-checker registered for this batch.
- `step1-decisions` records all ten items as `ready`, with their declared dependencies (including `justified_by` where applicable) listed as examined. A targeted hash check confirms 10/10 records are current. These are authoring-readiness records, not independent approval, upstream acceptance, or publication verdicts.

No unresolved item prerequisite remains. The inherited PA-01 reading-route ambiguity is only page-level context, names no item or hypotheses, and affects none of this batch’s claims. The page descriptions, batch manifest, coverage, proof contracts, cross-batch records, and readiness records remain aligned.
