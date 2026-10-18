# Batch 41 authoring notes — PA-10

Run: `non-ml-math-remaining-81-2026-10-18`  
Pair: `dg-and-homological-algebra-foundations` / `dg-and-homological-algebra-foundations-examples`  
Batch dependency level: 1; prerequisite batch: 32.

## Scope and plan reconciliation

- The controlling owner direction requires authoring this pair as part of the exact 81-pair frontier and forbids replacing a required pair with an empty summary. This overrides the historical PA-10 `disposition: reuse`, `native_batch_candidate: false`, and “no new mathematical items” language in `research/physics-algebras-planning-2026-10-17/proposed-pages.json` (PA-10 A/B entries at lines 1490–1623). The audited scope still controls the narrow mathematical content: route readers through existing chain, derived, and Hochschild results; add only the missing signed DG algebra/module interfaces; give worked examples and failure cases.
- The current `research/plan-spec.json` preserves empty page `items` arrays as the authoring starting point. Batch 41's scaffold manifest now records the five smallest local definitions/examples/counterexample needed to fulfill the assigned A/B duties; the shared plan was left unchanged.
- The task and current `research/plan-spec.json` require three pages: `algebraic-representation-and-tensor-symmetry-map`, `derived-categories`, and `hochschild-homology-and-diagonal-koszul-resolutions`. The original PA-10 design listed only the PA-01 page in `requires_proposed_pages`; it listed the latter two as existing navigation pages. Per the current plan, all three remain in the batch-41 page `requires` arrays. These page edges are reading-order context, not automatic item-level logical dependencies.
- The two existing derived-category and Hochschild pages are published. Their current summaries were checked: derived-category localization depends on its exact category and quasi-isomorphism hypotheses; the Hochschild page is for unital algebras over a field and does not supply a Gerstenhaber bracket or formality. Batch-41 items do not claim either result.
- The PA-01 supplier page is a current draft with empty item inventories. Its planned module/tensor interfaces have not been supplied or accepted. The batch-41 DG module definition is written directly with left/right action and differential signs and does not quote or depend on a PA-01 item. The unresolved page-level reading route remains recorded for owner reconciliation; no PA-01 supplier excerpt, proof, or acceptance is claimed.

## Item inventory and logical dependencies

The scaffold manifest `research/non-ml-math-remaining-81-2026-10-18-batch-41.pages.json` records five items before item carriers were written. The two A-page definitions are `def-differential-graded-algebra` (level 0; external published dependencies only) and `def-differential-graded-module` (level 1; depends on the local algebra definition). The B-page items are `ex-polynomial-forms-on-the-line-form-a-differential-graded-algebra` and `cex-a-degree-one-derivation-need-not-square-to-zero` (level 1), and `ex-a-differential-graded-algebra-is-its-own-left-dg-module` (level 2). Levels count only logical suppliers in this run; external suppliers do not raise them.

The DGA definition uses the published algebra-over-a-commutative-ring and cochain-complex definitions. The DG module definition uses the published left/right module and bimodule definitions and the local DGA definition. No theorem about derived categories, Hochschild cohomology, tensor products, or A-infinity structures is added or used as a premise.

## Source and sign conventions

- Use cohomological grading: `d:A^n→A^{n+1}`. The signed Leibniz rule for homogeneous `a` is `d(ab)=d(a)b+(-1)^{|a|}a d(b)`. The DGA axiom includes `d²=0`; the B-page verifications test it explicitly.
- A-page source records are in `research/non-ml-math-remaining-81-2026-10-18-batch-41.source-coverage.json`. They cover the Stacks Project book chapter on DG algebras/modules (§§22.2–22.4 and 22.11) and Keller’s independent A-infinity notes (§3.1 and the strict DG special case). Both source bodies were fetched on the initial attempt, inspected in full-text view at the recorded sections, and stamped; no retrieval recovery or `source_resolution` exception was needed.
- The referenced dossier `dossiers/06-other-physics-algebras.md` and its source manifest are present. Dossier §4 identifies the existing signed graded/homological base and treats an ordinary DGA as the strict case; it is scope guidance, not a local proof or acceptance record.

## Readiness and unresolved checks

The mathematical item dependencies are listed in each carrier and manifest entry. The unresolved declared page prerequisite is the PA-01 interface (`algebraic-representation-and-tensor-symmetry-map`), whose current draft has no authored items. For `def-differential-graded-module` and its consumer `ex-a-differential-graded-algebra-is-its-own-left-dg-module`, the reconciliation check is whether the future PA-01 graded-module/action interface uses compatible cohomological grading and Koszul signs. The proposed supplier placement is an A-page graded-module interface item on PA-01; no item ID or supplier excerpt is invented. The local module definition and example are complete from published module conventions and Stacks §§22.4/22.11, but their Step-1 decisions remain escalated until this planned cross-page interface is checked. The polynomial DGA and derivation counterexample do not use PA-01 and can be recorded ready. The A page's overall required route remains open until the page-level prerequisite is reconciled.

## Final validation and blockers

Batch-local checks passed:

- `node tools/tsx-run.mjs tools/precheck.mts <five item paths>`: all three proof-bearing items pass; definitions are not applicable.
- `node tools/proof-layout.mjs <five item paths>`: 5 items, 10 proof steps, 0 defects.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-41.proof-contracts.json --strict`: 3/3 proof-bearing items, 0 errors/warnings.
- `node tools/content-policy.mjs research/non-ml-math-remaining-81-2026-10-18-batch-41.pages.json`: 5 items, 0 errors/warnings.
- Focused `depcheck` on the five item IDs and their actual prerequisite closure: 0 errors/warnings; 78 dependency-closure items and 101 pages checked.
- `node tools/rendercheck.mjs` on the five items and two PA-10 pages: 7 files pass YAML, KaTeX, and render-structure checks.
- Source `--stamp` fetched and stamped both independent A-page texts on their initial attempts; check mode confirms 2/2 sources. Full-text locators, page counts, and hashes are in source coverage.
- Batch-local `dependencyLevels` recomputation has no errors: DGA definition 0; DG module definition 1; polynomial example 1; derivation counterexample 1; regular-module example 2. No item cycle. The only in-run batch supplier remains batch 32, so the declared batch level remains 1.
- All six batch manifest, coverage, source, contract, and validation-scope JSON files parse. A/B placements are 2 A items and 3 B examples/counterexamples, below the 100-item cap.

Run-wide checks remain blocked by other batch manifests and were not repaired here:

- `node tools/item-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` reports 134 issues across 162 pages: 123 empty inventories, 3 duplicate IDs, and 8 declared-level mismatches; no dependency cycles. The duplicate IDs are `lem-it-quantum-relative-entropy-support-regularization`, `lem-it-quantum-relative-entropy-isometric-invariance`, and `thm-it-holevo-measurement-bound`, each claimed in batches 21 and 22. The level mismatches are `def-positive-energy-unitary-affine-module` (declared 0, computed 1), `lem-irreducible-affine-module-has-irreducible-ground-space` (1, 2), `lem-relative-surface-collars-and-elementary-decomposition` (1, 7), `def-relative-open-closed-surface-normal-form` (3, 8), `lem-boundary-relative-two-dimensional-surface-normal-form` (4, 9), `thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras` (5, 10), `thm-knowledgeable-frobenius-data-classify-open-closed-sewing` (5, 10), and `ex-group-algebra-is-symmetric-but-not-closed-sector` (6, 11). These occur in batches 21, 22, 47 and 81 and are outside this assignment.
- `node tools/batch-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` stops on the batch-21/batch-22 duplicate `lem-it-quantum-relative-entropy-support-regularization`; no other pair or the shared scheduling input was changed.
- Run-wide `proof-contract-coverage` cannot initialize because `stationary-ergodic-sources-and-universal-coding` still has an empty inventory. Batch-local strict contract validation covers all three PA-10 proof-bearing items.
- `step1-decisions record` was attempted for `def-differential-graded-algebra`, but `loadStep3` stops before writing because of the same batch-21/batch-22 duplicate ID. No PA-10 readiness receipt was written or overwritten. The intended item dispositions for reconciliation are ready for `def-differential-graded-algebra`, the polynomial DGA example, and the derivation counterexample; escalated for `def-differential-graded-module` and its regular-module example pending the PA-01 interface comparison above. Official Step-1 records for every item await owner resolution of the run-wide duplicate.

The run was observed paused with no in-flight dispatch at the start of this authoring pass. No engine state, shared plan, verdict, or foreign pair files were changed.

## Owner focused supplier reconciliation (supersedes pending PA-01 comparison)

The actual batch-32 A definition and full representation/module proof are now authored and were read completely in the focused owner reconciliation. PA-01 uses ordinary unital associative algebras over a field and bilinear left module actions; it does not promise a graded-module/sign interface. PA-10 directly uses the published unital module definitions over a commutative base ring and adds the cohomological signs locally. These conventions agree on their common domain; no missing PA-01 graded supplier or extra logical dependency is required. The DG module definition and regular-module example are checked against the actual suppliers. The earlier empty-inventory and pending-interface statements above describe the authoring-time observation and are superseded by this reconciliation, not new readiness.

The regular-module proof had one narrow source-attribution defect: step 1.2 assigned the square-zero differential axiom to a multiplication-only fact. Added F4 quotes the actual DGA differential axiom and its contract now records that use. No Definition, Statement, dependency or placement changed. See `research/non-ml-math-remaining-81-2026-10-18-owner-dg-interface-reconciliation/source-review.md` and `repair.json` for exact focused coverage and current local check evidence. Native readiness remains the owner’s separate duty after shared run blockers are resolved.
