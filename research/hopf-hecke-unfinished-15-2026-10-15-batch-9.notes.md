# Batch 9 — Step 1 authoring evidence

Run `hopf-hecke-unfinished-15-2026-10-15`; assigned A/B pair `drinfeld-doubles-and-yetter-drinfeld-module-constructions`; batch dependency level 7; prerequisite batches 2, 3, 4, 5, 7, and 8. The dispatch supplied scheduling input `58cf41778ca737ce2c4e0a45aba6eaf8476b4c24fb4e64f5f1794e1d28217856`.

## Plan comparison and scope

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the complete HH-10 section of `research/plan-hopf-hecke-algebras-track.md`, `research/plan-spec.json`, and the owner authoring direction. The page IDs, order 1706/1707, category, titles, A/B pairing, and page-level `requires` match the HH-10 design. `plan-spec.json` has empty item inventories in this pre-authoring slot; it supplies no competing item list. The owner direction and complete HH-10 design specify six A items and three B items, and those exact IDs are used here.

The design's suggested prose sequence starts with the candidate double and places the Yetter–Drinfeld definition later. The batch instruction requires construction in ascending item dependency level; the current item graph therefore puts the level-3 Yetter–Drinfeld definition first, before the level-8 double definition. The scope and claims are unchanged.

The HH-10 prose writes the quasitriangular hexagons without explicit associators. The current HH-8 leg-notation definition types its second hexagon as `alpha^{-1}_{H,H,H}(id tensor Delta)(R)=R_13 R_12` in the fixed left-associated tensor. The HH-10 theorem states and proves the corresponding typed `alpha^{-1}_{D,D,D}` identity. This follows the actual supplier convention and records the necessary typing refinement.

## Inventory and dependency levels

The A page contains six items and the B page three, well below the 100-item page cap. Manifest dependencies, carrier `deps`, `justified_by`, `dependency_level`, and page reading lists are synchronized.

| Page | Item | Kind | Level | In-run suppliers determining the level |
|---|---|---|---:|---|
| A | `def-hh-left-left-yetter-drinfeld-module` | definition | 3 | `def-hh-bialgebra-and-bialgebra-map` (1), `def-hh-hopf-algebra-and-antipode` (2), `lem-hh-convolution-algebra-associativity-and-unit` (1) |
| A | `def-hh-finite-double-cross-relations` | definition | 8 | `lem-hh-convolution-algebra-associativity-and-unit` (1), `def-hh-bialgebra-and-bialgebra-map` (1), `def-hh-hopf-algebra-and-antipode` (2), `thm-hh-finite-dimensional-dual-hopf-algebra` (3), `thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective` (7) |
| A | `lem-hh-double-crossing-map-and-associativity` | lemma | 9 | finite-double definition (8), Hopf definition (2), convolution lemma (1), antipode anti-map theorem (3) |
| A | `lem-hh-double-coalgebra-and-antipode-descent` | lemma | 10 | finite-double definition (8), crossing lemma (9), bialgebra/Hopf definitions (1/2), antipode anti-map theorem (3), finite-dual Hopf theorem (3), finite-integrals theorem (7) |
| A | `thm-hh-double-modules-and-yetter-drinfeld-modules` | theorem | 11 | finite-double definition (8), Yetter–Drinfeld definition (3), crossing/coalgebra lemmas (9/10), module-action definition (2), tensor-coherence theorem (3), Hopf definition (2), finite-integrals theorem (7), antipode anti-map theorem (3), braiding definition (4) |
| A | `thm-hh-finite-double-hopf-structure-and-canonical-r` | theorem | 12 | finite-double definition (8), double Hopf lemma (10), module/Yetter–Drinfeld theorem (11), leg/braiding definitions (3/4), module-action definition (2), finite-integrals theorem (7), antipode anti-map theorem (3) |
| B | `cex-full-dual-of-infinite-group-algebra-has-no-algebraic-coproduct` | counterexample | 1 | `def-hh-finite-dual-of-an-associative-algebra` (0) |
| B | `ex-drinfeld-double-of-a-finite-group` | example | 13 | finite-double definition (8), double Hopf lemma (10), group-Hopf lemma (3), module theorem (11), canonical-R theorem (12) |
| B | `ex-a-nonabelian-double-has-noncommutative-cross-relations` | example | 14 | finite-group example (13), module theorem (11) |

The module level calculation checks 138 run items across 30 pages; maximum level is 14. The page-level batch graph still calculates batch 9 at level 7 with prerequisites 2, 3, 4, 5, 7, and 8. The candidate double's later associativity/Hopf results are recorded as nonlogical `justified_by` discharges, not scheduling edges; this avoids a dependency cycle.

## Mathematical conventions and supplier checks

The construction uses finite-dimensional `H`, the ordinary dual coproduct `Delta(f)(x,y)=f(xy)`, ordinary convolution `*`, opposite product `f odot g = g*f`, and normal order `fh` in `H*op tensor H`. It does not import an `H*cop` formula. The candidate item proves algebraic well-definedness; the separate crossing lemma proves both distributive laws, associativity, and factor embeddings. The structural lemma proves the opposite-dual Hopf structure, coproduct/counit multiplicativity, inverse crossing, and both antipode contractions. The module theorem reconstructs coactions from finite dual bases and verifies both action directions, tensor compatibility, inverse braiding, linearity/colinearity, and hexagons. The R theorem proves inverse, quasitriangular intertwining, and both hexagons on regular modules. The finite-group formulas and the infinite full-dual row-rank obstruction are checked locally.

All direct cross-batch item edges and page prerequisites are enumerated in `research/hopf-hecke-unfinished-15-2026-10-15-batch-9.cross-batch-dependencies.json`: 35 rows for the six declared cross-page edges and every cross-item edge. A read-only comparison with current manifests found no missing or extra rows. Their current carrier bodies and relevant proofs were inspected. Transitive suppliers include the HH-2 finite algebra-coalgebra duality, the HH-1 coalgebra equations, the HH-4 finite-dual coalgebra/Hopf descent theorem, the HH-6 Hopf-module theorem and finite-dual regular Hopf module, and the HH-7 integral proof; the full arguments and their finite-dimensional/nonzero hypotheses were checked. No formula is used with the wrong left/right coaction direction. Finite bases are selected only in finite-dimensional spaces; no Axiom of Choice is used.

One upstream authoring note needs owner reconciliation: `items/thm-hh-finite-dimensional-dual-hopf-algebra.md` Facts [F1] and [F2] still say their supplier bodies are unavailable. The actual `def-hh-hopf-algebra-and-antipode` and `thm-hh-finite-algebra-coalgebra-duality` carriers are now present; I read their statements and proofs and checked the exact equations used by the finite-dual theorem. The affected HH-10 claims are the algebraic dual Hopf structure in `def-hh-finite-double-cross-relations` and `lem-hh-double-coalgebra-and-antipode-descent`, and the transitive HH-8 bijective-antipode discharge. Proposed owner placement: replace the stale [F1]/[F2] availability text in the HH-4 theorem Facts with the exact present supplier statements, retaining its local proof. This repair is outside batch 9; the current bodies suffice to verify the formulas here. Batch-2 and batch-3 notes also retain initial missing-supplier snapshots; their current manifests/carriers have since appeared and were inspected. These discrepancies do not leave an unresolved mathematical prerequisite for this pair.

## Source record

The A page uses two independent complete treatments, including full lecture notes and a monograph, plus a third convention check. Full relevant reasoning was read; the source records and all result dispositions are in `research/hopf-hecke-unfinished-15-2026-10-15-batch-9.coverage.json`.

| Source | Locator inspected | `source-fetch-check` stamp |
|---|---|---|
| Kalle Kytölä, *Introduction to Hopf algebras and representations* ([full PDF](https://math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf)) | §4.3, printed pp. 70–74 (Theorem 4.15, proof, equations 4.14–4.18, Theorem 4.18); Exercise 42, pp. 75–76. | PDF, 91 pages, 494,761 bytes, SHA-256 prefix `aaaa6fb83bac7aa8`. |
| Etingof–Gelaki–Nikshych–Ostrik, *Tensor Categories* ([full author PDF](https://math.mit.edu/~etingof/egnobookfinal.pdf)) | §7.14, pp. 163–165 (equation 7.46, Propositions 7.14.6/7.14.8); §7.15. | PDF, 362 pages, 3,067,397 bytes, SHA-256 prefix `a40d076197b666d8`. |
| García–Vay, *Simple modules of small quantum groups at dihedral groups*, *Documenta Mathematica* 29 (2024) ([full PDF](https://ems.press/content/serial-article-files/42618)) | §3.1.3, pp. 5–6: `H*op`, inverse crossing, canonical R, Yetter–Drinfeld action and braiding. | PDF, 38 pages, 786,147 bytes, SHA-256 prefix `5292a0b52cc04649`. |

All three first retrieval attempts succeeded and received full-text stamps; no recovery retry, source drop, or owner-escalation disposition was needed. The infinite-dual result is proved locally and is not presented as a source-derived theorem.

## Scoped checks

- `node tools/proof-contract.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-9.proof-contracts.json --strict`: 9/9 contracts checked, 0 errors, 0 warnings; 50 exact supplier citations and 46 numbered-step contracts.
- `node tools/tsx-run.mjs tools/precheck.mts` on the nine assigned items: 9 checked, 0 failures. The precheck's canonical layered numbering was adopted; references and contracts were regenerated from the resulting proofs.
- `node tools/proof-layout.mjs` on the nine assigned items: 9 items, 46 steps, 0 defects.
- `node tools/item-dependency-levels.mjs check --run hopf-hecke-unfinished-15-2026-10-15`: 138 items across 30 pages checked, maximum level 14; pass.
- `node tools/content-policy.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-9.pages.json`: 9 scoped items, 0 errors, 0 warnings.
- Focused `depcheck` on the nine assigned IDs: 437 prerequisite items and 286 prerequisite pages checked, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs` on the nine carriers and two assigned pages: 11 files, no delimiter, KaTeX, wikilink-in-math, or YAML errors.
- `node tools/manifest-deps.mjs` on the batch-9 manifest: 9 items, 0 missing dependency arrays, 0 errors.
- `node tools/coverage-checklist.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-9.coverage.json --json --require-destination`: 1 A page, 16 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/hopf-hecke-unfinished-15-2026-10-15-batch-9.coverage.json`: 3/3 sources fetch-verified; 0 documented drops.
- Carrier/manifest/page-order comparison: all nine IDs, kinds, titles, dependency arrays/levels and provenance values match; A/B page lists follow ascending level.

The batch dependency-level cache is stale after concurrent upstream manifest changes and this batch's completed inventory edits. The dispatch used digest `58cf41778ca737ce2c4e0a45aba6eaf8476b4c24fb4e64f5f1794e1d28217856`; the cache later reflected `5b9b1551a3e5e92a86d1a4749c8ad12e8ba5bb4bc9ece1276257c539250bb988`, and currently stores `af174adebd9c7757f619129f8c23dd9db949b50f57fb82ef23457433b3dfd119`. A read-only recomputation gives `a63185472fa07740b0e4982de4874724c3a62c6b94139d7c87a43e032fcae869`. The dispatch and recomputation both calculate batch 9 at level 7 with the same prerequisite batches. `node tools/batch-dependency-levels.mjs check --run hopf-hecke-unfinished-15-2026-10-15` reports `Stale batch dependency levels ...; recompute before authoring`. This shared engine artifact was left to the owner as instructed; there is no cycle or item-level mismatch.

## Readiness and run status

All nine assigned items have complete local proofs/definitions, direct supplier placement, source coverage and contracts. Their Step 1 records are `ready` and current; each of the nine item-specific checks returns ready. The run-wide Step 1 check reports 59/138 items ready and remains open on other pages. The live autopilot still reports scaffold coverage 12/15 with batches 4, 9, and 14 missing; its artifact-missing list excludes batch 9 even though the stage still lists it as missing. Batch 9's item records and batch evidence are present. The run also retains the owner-controlled `step1-blockers.json` hold for owner repair/recertification. The stale supplier wording, stale shared batch-level cache, and run-level coverage discrepancy are surfaced for owner reconciliation; no shared engine state or blocker was modified. Readiness records certify authoring completeness, not independent mathematical approval.
