# frontier-23 · Beta-1 · batch notes — `decision-problems-for-finitely-presented-groups` and `graphs-of-groups-and-bass-serre-theory`

## Scope, order, and design control

This batch owns the two group-theory pairs `decision-problems-for-finitely-presented-groups` / `-examples` and `graphs-of-groups-and-bass-serre-theory` / `-examples`. Both A pages stay well below the 60-item split ceiling:

- `decision-problems-for-finitely-presented-groups` carries 27 A-page items, counting its five `fs-` items.
- `graphs-of-groups-and-bass-serre-theory` carries 26 A-page items, counting its five `fs-` items.

No split is proposed.

Controlling design blocks used here:

- `decision-problems-for-finitely-presented-groups`: the controlling block is the single `GT-7` design beginning at `research/plan-group-theory-track.md:1114`. The dispatch's second hit at line `1188` is only the B-page heading within that same block, not a later amendment.
- `graphs-of-groups-and-bass-serre-theory`: the controlling block is the single `GT-15` design beginning at `research/plan-group-theory-track.md:1971`. The dispatch's second hit at line `2047` is only the B-page heading inside that same block, not a second design pass.

Recorded design/spec drift, with the manifest kept aligned to the live `research/plan-spec.json` as instructed:

- `decision-problems-for-finitely-presented-groups`
  - Design `requires`: `free-groups-and-presentations`, `subgroups-of-free-groups-and-schreier-rewriting`.
  - Live `research/plan-spec.json` `requires`: `hnn-extensions-and-brittons-lemma-examples`.
  - Action taken here: the manifest keeps the spec edge and records the mismatch. Alpha step 0 already recorded that the current closure through `hnn-extensions-and-brittons-lemma-examples` reaches the design's earlier free-group and subgroup suppliers, and also the published free-product page used by this scaffold. The finitely generated abelian route is now closed locally inside GT-7 by a cited same-page normal-form remark, so the scaffold no longer reaches forward to the later PID-module page.
- `graphs-of-groups-and-bass-serre-theory`
  - Design `requires`: `simplicial-trees-and-group-actions`, `hnn-extensions-and-brittons-lemma`, `free-products-and-amalgamation`.
  - Live `research/plan-spec.json` `requires`: `hnn-extensions-and-brittons-lemma`, `simplicial-trees-and-group-actions-examples`.
  - Action taken here: the manifest keeps the spec edges, including the drift-applied HNN edge that step 0 added, and records the omission of the direct free-product edge from the live plan. The closure still reaches the published amalgam page through the HNN chain.

The design orders agree with the live spec:

- `71.013/71.014` for the decision-problems pair.
- `302.011/302.012` for the Bass-Serre pair.

## Source verification and URL discipline

The recorded source URLs were fetch-verified through the web reader and written with durable `fetch_verified` stamps in the coverage file so that `source-fetch-check` can run offline in check mode.

Source decisions for the decision-problems page:

- Miller's survey is the main structural control for the algorithmic vocabulary, recursive-versus-r.e. distinction, algebraic invariance of solvability, Novikov-Boone, and the unsolvable-conjugacy existence statements.
- Bishop's minicourse page gives an independent open-access control point for the Markov-property seam and the choice to treat Adian-Rabin as an exact cited boundary theorem rather than a synthetic reconstruction.
- Jack Jeffries's open algebra notes supply the exact invariant-factor normal form needed to close the finitely generated abelian word-problem theorem without borrowing the later PID-module page.
- The MacTutor word-problems survey keeps the Adian-Rabin corollaries for triviality, finiteness, and the isomorphism problem explicit on an open page.
- The Wilton/Chua notes and Meier's textbook supply the Dehn-function and word-problem route that the design wants kept separate from the deep negative boundary results.

Source decisions for the Bass-Serre page:

- Serre's `Trees` remains the controlling monograph for the two-way presentation: graph of groups to tree action and tree action back to graph of groups.
- Loh's notes are the direct open lecture-note source for the deferred GT-6 and GT-14 rows that this page now picks up: the Bass-Serre placement of HNN extensions, `Trees -> free groups`, and `Free groups and actions on trees`.
- Lyndon-Schupp is used here only for the one-edge comparison seam with published amalgam and HNN constructions.
- Meier is used as an independent textbook control for the free-action, free-product, and virtually free applications, not for the core converse theorem.

## Decision-problems scaffold decisions

### Route and conventions

- The page starts with encodings, algorithms, and recursive versus recursively enumerable languages. That vocabulary is local because the page order is earlier than the planned computability track and the design explicitly says algorithms must be defined before solvability is discussed.
- The fixed-presentation and uniform word problems are scaffolded as separate items from the beginning. They are not merged later by prose.
- Positive algorithms are scaffolded as actual proofs or proof plans: free groups, finitely generated abelian groups, and the free-product / amalgam normal-form route with explicit decidable-membership hypotheses.
- The negative boundary results are retained as exact source-backed statements. The scaffold does not attempt to imitate Novikov-Boone, Adian-Rabin, or the isomorphism-undecidability constructions.
- The Dehn-function seam is kept algebraic. The page defines relator area as the minimum number of conjugates of defining relators and their inverses, proves the minimum exists, and uses that to derive a word-problem algorithm from a recursive Dehn function without importing van Kampen diagrams before the next page.

### Dependency choices

- `thm-word-problem-for-free-groups` depends on the already published reduced-word normal form, not on an unplanned recomputation of the free-group model.
- `thm-word-problem-for-finitely-generated-abelian-groups` now depends on the same-page cited remark `rem-finitely-generated-abelian-groups-admit-invariant-factor-normal-form`, so the page no longer spends the later `modules-over-a-pid-and-canonical-forms` dependency.
- `thm-word-problem-for-free-products-and-amalgams-with-decidable-membership` is stated with the factor and subgroup hypotheses visible. The page does not overclaim a blanket algorithm for arbitrary amalgams.
- `prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set` is phrased as a presentation-translation result using published Tietze machinery, exactly as the design prescribes.

### Boundary-carrier repair

The cited-only GT-7 boundary chain is now schema-legal on the current scaffold bytes:

- `rem-novikov-boone-undecidability-of-the-word-problem`
- `rem-adian-rabin-undecidability-for-markov-properties`
- `rem-triviality-and-finiteness-are-undecidable-for-finite-presentations`
- `rem-undecidability-of-the-isomorphism-problem-for-finitely-presented-groups`

These replace the earlier `thm-` / `cor-` placeholders that would have required `proved_here: false` with incompatible id prefixes. The page still keeps the same mathematical boundary: exact cited results, ordered so that the Adian-Rabin consequences remain visible, but without pretending that GT-7 locally proves the classical undecidability constructions.

## Bass-Serre scaffold decisions

### Route and conventions

- The page is kept explicitly bidirectional. It first builds the path group, fundamental group, normal form, Bass-Serre tree, and the canonical action; only then does it reconstruct a graph of groups from a tree action and prove the structure theorem.
- The incidence maps in the Bass-Serre tree are treated as load-bearing. The definition item is written so the representative-independence check is part of the construction, not a silent convention.
- The converse construction keeps the change-of-representative conjugacies visible in `lem-boundary-monomorphisms-from-stabilizers-are-well-defined`. This is one of the design's explicit traps.
- The one-segment and one-loop theorems are scaffolded as separate comparison theorems rather than buried inside the structure theorem.
- Kurosh is planned as a direct restriction of the Bass-Serre action of a free product, and Grushko is planned from free splittings plus Kurosh. Neither is left as a citation-shaped epilogue.

### Dependency choices

- `cor-a-group-acting-freely-without-inversions-on-a-tree-is-free` is placed before `cor-fundamental-group-of-a-graph-with-trivial-groups-is-free`, and the second is derived from the Bass-Serre action plus the first. That preserves a clean same-page dependency order.
- `thm-normal-form-for-fundamental-groups-of-graphs-of-groups` depends on the published amalgam and HNN normal forms rather than reproving them in the graph-of-groups setting from scratch.
- `thm-one-segment-graph-of-groups-is-an-amalgamated-free-product` and `thm-one-loop-graph-of-groups-is-an-hnn-extension` point back to the already published algebraic constructions, exactly matching the design seam.
- `thm-grushko-decomposition-and-rank-additivity` stays a single scaffold item because the design names one item id, but the step-5 author should still split the written proof spine into existence, terminal freely indecomposable factors, and uniqueness/rank clauses inside that item, as the design explicitly directs.

## Known limits and explicit non-actions

- I did not alter `research/plan-spec.json`, the run state, or any other batch artifact. The live spec already contains the step-0 drift repair adding `hnn-extensions-and-brittons-lemma` to the Bass-Serre page's `requires`.
- The original StudyLib mirror for Miller's survey returned HTTP 403. It has been replaced by the complete archived CiteSeerX PDF, with the failed StudyLib URL retained as `original_url`; the replacement has a current mechanical full-text stamp.
- The decision-problems page still carries lighter direct source control on the full witness-group formulation than on the rest of the page. The scaffold now has explicit open support for the recognisability corollaries and the same-page abelian normal-form route, but step-6 reading should still recheck the final authored wording of the Adian-Rabin boundary remarks against the exact Miller/Adian statements.
- The Bass-Serre page uses Serre, Loh, Lyndon-Schupp, and Meier for the structural and application seams, but Kurosh and Grushko are planned as local consequences rather than as separate cited theorems from those sources. That is deliberate and matches the design route.

## Validation

Checks run on the current scaffold bytes:

- `node -e "JSON.parse(require('node:fs').readFileSync('research/frontier-23-batch-1.pages.json','utf8')); JSON.parse(require('node:fs').readFileSync('research/frontier-23-batch-1.coverage.json','utf8'))"`
  - Pass: both JSON files parse cleanly.
- `node tools/coverage-checklist.mjs research/frontier-23-batch-1.coverage.json --require-destination`
  - Pass: `2 page(s), 59 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-1.coverage.json`
  - Pass: `10/10 source(s) fetch-verified`.
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
  - Pass: `504 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-1.pages.json`
  - Pass: `66 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  - Pass: the run ends `OK` and reports only the repo's standing `redundant-prereq` warnings outside this batch.
  - Important scope note: because this batch is not yet spliced into `research/plan-spec.json`, the validator still reports `0 items` for the two frontier-23 pages themselves. The pass is therefore a clean live-plan pass, not a claim that step 4 has already classified these new ids.
- `node tools/prosecheck.mjs research/frontier-23-batch-1.notes.md`
  - Pass: `1 file(s) checked. 0 error(s), 6 warning(s).`
  - Warning class: `count-in-prose` only; the warnings are heuristic.

## Full-text source intervention

Date: Friday, August 28, 2026.

- Web search located the complete Miller survey in CiteSeerX and a stable
  Wayback capture of that PDF. The replacement is the same 1992 survey, not a
  different treatment, so the harvested contents and item dispositions did
  not change.
- `source-fetch-check --stamp` downloaded the replacement as a substantive
  PDF and wrote its byte/hash/page receipt into the coverage row.
- At that intervention, the full-run source checks reported `47/47 source(s)`
  fetch-verified, `43/43 live`, and every authored result still backed by an
  openable source.

## Step-3 fix pass

- `A1-1` — disposition: **accepted and repaired on current bytes**.
  Evidence: `research/frontier-23-batch-1.pages.json` now adds the same-page cited carrier `rem-finitely-generated-abelian-groups-admit-invariant-factor-normal-form`, rewires `thm-word-problem-for-finitely-generated-abelian-groups` away from the later `cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules` dependency, and replaces the cited-only undecidability placeholders with schema-legal boundary remarks `rem-novikov-boone-undecidability-of-the-word-problem`, `rem-adian-rabin-undecidability-for-markov-properties`, `rem-triviality-and-finiteness-are-undecidable-for-finite-presentations`, and `rem-undecidability-of-the-isomorphism-problem-for-finitely-presented-groups`.
  Changed scaffold record: `research/frontier-23-batch-1.pages.json` only for the manifest repair; the GT-15 page pair remained unchanged.

- Source verification for this fix pass:
  I re-opened the recorded live HTML/PDF batch-1 source stack through the web reader at the stated headings or contents blocks, verified the two new GT-7 rows against Jack Jeffries's Chapter 7 abelian-group notes and the MacTutor word-problems survey, and preserved the existing Miller `original_url` provenance plus the archived Meier mirror swap. The post-fix batch check `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-1.coverage.json` now passes `10/10 source(s) fetch-verified`.
  Changed scaffold record: `research/frontier-23-batch-1.coverage.json` adds the Jeffries and MacTutor source rows, rewrites the GT-7 boundary-result item mappings to the new `rem-` ids, and leaves the GT-15 harvest mathematically unchanged apart from refreshed fetch dates within the batch-owned file.

- Validator rerun for this fix pass:
  `node tools/coverage-checklist.mjs research/frontier-23-batch-1.coverage.json --require-destination`
  Result: **pass** — `2 page(s), 59 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
  Result: **pass** — `504 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  Result: **pass** — the run ends `OK` with only the standing repository-wide `redundant-prereq` advisories outside batch `1`.
