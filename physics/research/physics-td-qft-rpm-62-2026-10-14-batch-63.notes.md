# Batch 63 authoring notes

Run `physics-td-qft-rpm-62-2026-10-14`, beta scope, pair `qft-ir05` only. The authored pages, item drafts, source ledger, proof contracts, coverage, cross-batch inputs, and Step 1 records are limited to this assigned pair. All four items and both pages remain draft.

## Plan and interface review

The complete QFT-IR05 design section (track plan, lines 974–999) and `plan-spec.json` agree on the pair IDs, titles, order 565/566, category `quantum-field-theory-mathematics`, library `mathematics`, inventory of three A items and one B example, and the page prerequisite `qft-ir04`. The design's formal power-counting scope and caveat are preserved: zero superficial degree is graph bookkeeping and does not establish convergence or divergence of a graph integral. Engineering dimensions are labeled only by the declared classical/tree-level dilation.

A related historical prerequisite discrepancy is recorded without editing the shared plan or QFT-IR04: the QFT-IR04 track-design reservation at lines 929–954 lists `approximation-and-compactness-in-ck`, `distributions-test-functions-and-differentiation`, and `relations-functions-and-quotients`; current `plan-spec.json` and the inspected current QFT-IR04 A page also require `countability-and-uncountability`. QFT-IR04 is a present draft page with its current four-input interface. The QFT-IR05 page edge remains to that page; this note does not accept its proofs.

The actual `prop-qft-four-dimensional-log-scale-anomaly` supplier was read at its statement and complete proof, along with its direct suppliers. Its statement assumes AC and uses `u=C0^2` on punctured Euclidean `R^4`, a smooth compact cutoff equal to one near zero, and positive scales; it asserts scaling degree 4, the exact `(8π²)⁻¹ log(μ/ν) δ₀` scale difference, and no same-degree homogeneous extension. The carrier and its local extension/counterterm suppliers are draft and unreviewed. The B example therefore gives the full consuming argument conditionally and identifies this proof status; it does not infer an accepted theorem or an integrated graph amplitude. Because AC is an explicit actual hypothesis, `def-axiom-of-choice` is an additional direct mathematical-premise edge in the B item and manifest. This repairs a planned inventory omission; it does not increase an in-run dependency level.

## Inventory, dependencies, and levels

- `def-qft-quartic-graph-power-counting`: `deps: []`, level 0.
- `prop-qft-quartic-superficial-degree`: depends on the graph definition, level 1.
- `prop-qft-scalar-engineering-dilation`: `deps: []`, level 0.
- `ex-qft-four-point-one-loop-log-degree`: depends on `def-axiom-of-choice`, the draft QFT-IR04 anomaly proposition, and the quartic-degree proposition, level 5. In the inspected QFT-IR04 dependency closure the anomaly proposition is level 4; AC is out of this run and does not raise the level.

The two pages retain their planned page prerequisites (`qft-ir05` requires `qft-ir04`; the B page requires `qft-ir05`). The actual interface and draft proof status of the QFT-IR04 carrier are also recorded in `batch-63.cross-batch-dependencies.json`. The pair's scoped level calculation over batches 62–63 checked ten items including that supplier closure and had no errors; it returned the levels above. No cycle was found.

## Source review and resolution

Full-text source inventory and dispositions are in `batch-63.coverage.json`:

- QFT.org, Lesson 39, “One-loop divergences and power counting,” full HTML: superficial degree, quartic example, and engineering-dimension sections support the graph definition, quartic-degree proposition, scalar-dilation proposition, and example. The source describes its lessons as reconstructed from Jie Ren's notes for Polyakov courses and independently edited/expanded.
- Mark Srednicki, author-posted *Quantum Field Theory* prepublication draft, §§12 and 18 (printed pp. 104–105 and 129–132): an independent textbook treatment for the scalar dimensions and superficial graph degree/caveat; supports the definition and example's graph calculation.
- David Tong, QFT lecture notes, §3, equations (3.202)–(3.204): supports four-dimensional engineering dimensions and states the quantum-correction caveat; the local proof supplies general `D` and its tree-level scope.
- David McGreevy, Physics 215B QFT Part 2, §1.5.2, PDF pp. 34–36, and Hendrik van Hees, *Introduction to Relativistic Quantum Field Theory*, §5.5, printed pp. 155–156: both full documents and relevant passages were readable in the browser. Each PDF route failed the source-fetch page-count check on the initial attempt and five retries (`compressed PDF page count could not be verified with mutool`). Both routes are recorded as dropped only from fetch-stamped coverage, with searches and complete per-item local alternative arguments/dependencies preserved in `source_resolution`. No mathematical claim or harvested result was dropped.

`source-fetch-check --stamp` reports 5/8 sources fetch-verified (0 newly stamped) and 8/8 resolved (3 documented source-route drops). `coverage-checklist` reports 2 pages, 17 harvested results, 0 errors, and 0 warnings.

## Checks and unresolved corpus-wide gates

The final scoped checks passed: `author-check.mts RUN 63` (precheck 3 checked/0 failing; rendercheck 6 files; content policy 4 items/0 errors/0 warnings; proof contract 4/4/0 errors/0 warnings); `proof-layout.mjs` on the four explicit item files (4 items, 11 steps, 0 defects); `manifest-deps.mjs` (4 items, 0 missing dependencies); scoped `depcheck` (the four assigned item checks plus 1,046 prerequisite items and 134 pages; 0 errors and 0 warnings); and the batch 62–63 dependency-level calculation above. The proof-layout renderer needed a temporary `/private/tmp` Node alias/extension resolver for the existing app `@/` paths; no renderer, app, or other repo files were changed.

Two run-wide checks remain blocked by unrelated corpus state. `item-dependency-levels.mjs check --run physics-td-qft-rpm-62-2026-10-14` parses the run but reports 78 empty scaffold inventories and 32 stale `dependency_level` labels on other pages/items; none names this pair or its four items. `proof-contract-coverage.mjs` reports `Empty or invalid frontier page inventory td-cycles-and-low-temperature`. A full-corpus `depcheck` scan during this pass reported 5,670 errors and 907 warnings across 29,821 items/2,113 pages; none of its errors names an assigned item. Its errors comprised 3 `kind-prefix`, 1 `dep-unresolved`, 2 `link-unresolved`, 5,596 `published-unaudited`, and 68 `published-unchecked`. The shared corpus inventory changed during validation: a later focused scan enumerated 29,828 items/2,119 pages while still finding 0 scoped errors or warnings. Thus the corpus-wide counts are a scan-time snapshot; the focused checks for this pair and its prerequisite closure are clean. These whole-run diagnostics are recorded, not repaired, because they are outside the assigned pair.

The four Step 1 records are `ready` for scaffolding only, each with its examined dependency IDs and current item/dependency hash; the B record explicitly records the conditional draft supplier. A final hash check found that the B record's transitive QFT-IR04 input changed when its current batch manifest appeared; the supplier statement and complete proof were rechecked against the consuming use, and the B record was refreshed without `--owner`. All four records now verify current. Readiness is not proof acceptance or independent approval.
