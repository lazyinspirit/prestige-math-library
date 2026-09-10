# Phase 2 nine-step 25 — Step 5b cross-batch audit and closure

Role: Alpha `5b-lead`

Run: `phase-2-nine-step-25`

Date: 2026-09-10

## Computed scope and migration evidence

`node tools/cross-group-edges.mjs list --run phase-2-nine-step-25` rederived six cross-batch item edges, zero forward references, and zero post-5a additions, removals, item changes, page changes, or reading-order changes over 760 in-scope items. The six edges all run from batch 3 to batch 1 inside group a. No page-scope owner decision is required.

This is a migrated run. I read `research/phase-2-nine-step-25-checkpoint-import.json` and its source export `research/phase-2-merged-25-migration-export.json`. The source export SHA256 is `afd2af3c9045d650e0c3f47c3e2c42a509165c3ecb9f07736abb6e4f2cb44125`, exactly the import's declared hash. All 968 files bound by the source export still match their exported hashes. The source records 760 items, 50 pages, 17 manifests, 15 historical review receipts and 23 historical defects. Those receipts were retained as historical source evidence, not treated as new review attribution.

All 760 current item files and all 50 current page files match the raw file hashes in the 17 post-5a carrier snapshots. The cross-group rederivation reports zero composite-carrier changes. Of the import's 137 initially bound target artifacts, 131 remain byte-identical. The six current-run workflow outputs that differ are the batch 4, 15, and 16 coverage receipts, `research/phase-2-nine-step-25-touches.json`, `research/phase-2-nine-step-25-step5-published-claims.jsonl`, and `research/phase-2-nine-step-25-step7-published-repairs.jsonl`. The last two changes are the claim and handoff for the assigned published repair; none of the six paths is a page or one of the 760 post-5a item carriers. The frozen source export remains independently intact at all 968 file hashes.

The published-repair handoff at `research/phase-2-nine-step-25-step7-published-repairs.jsonl` now has six rows and SHA256 `146f77d7e8ba16663523eeef1f1b8f9d328163b708193027f0db6eda287f2b40`. The first five rows are preserved byte-for-byte; the sixth records the assigned reflection-degree repair, its exact pre/post item guards, and `repair_confidence: 1`. Every row remains owed an independent later judgment.

The current items and complete local supplier proofs were sufficient to resolve the mathematics. Historical authoritative-source evidence was checked at its exact recorded locations: Durrett, Lemma 6.2.2 p.335 and Theorem 6.2.1 pp.335–337; Einsiedler–Ward, Definition 2.1 pp.13–14 and Lemma 2.6 pp.15–16; Cichon, Section 1, Definition 1 and the following paragraph; Touikan, Section 3.4 including Lemma 3.4.3, and Section 3.5 including Proposition 3.5.5 and the general-diagram discussion after Corollary 3.5.8. For the reflection item, the canonical published ledger preserves Hatcher, *Algebraic Topology*, Chapter 2 pp.134–137, and May, *A Concise Course in Algebraic Topology*, Chapter 8 §4 pp.59–60. This source-reading attribution is preserved historical evidence; a fresh network fetch was attempted, but DNS resolution was unavailable in the sandbox, so I do not claim a fresh external-source reading. The complete current reflection argument and its two local published supplier proofs were read directly, and no unresolved source-dependent inference remains.

## Edge dispositions

### `cor-birkhoff-strong-law-for-iid-coordinate-shifts` → `def-ergodic-measure-preserving-system`

Disposition: `accurate`; defects: none. Current carrier hashes are `744984881d94f4d8ccf345bf6897f6355eac2a0f7728e262bfafe8144bf928e7` for the consumer and `bd9b58ff81692c5ac55d71b0395d6d036161e47c7b4b82f8f6460cc106a00096` for the supplier.

Evidence: proof step 1.3 uses strict invariance to put the event in every coordinate tail and Kolmogorov zero-one to obtain probability zero or one. This is exactly the probability clause of the cited definition. No invertibility or unstated completeness hypothesis is used.

Edits: none. Remaining blocker: none.

### `cor-birkhoff-strong-law-for-iid-coordinate-shifts` → `thm-measure-preservation-on-a-generating-pi-system`

Disposition: `accurate`; defects: none. Current carrier hashes are `744984881d94f4d8ccf345bf6897f6355eac2a0f7728e262bfafe8144bf928e7` and `527e142c8e901b8d7b21dc8147c109aec41d20e42ad8325265f7a0aa08ed4ed3`.

Evidence: the finite-coordinate cylinders are a generating pi-system, their shift pullbacks are cylinders with unchanged product probability, and the theorem's finite-measure clause permits adjoining the whole probability space as the exhaustion. The cited hypotheses and conclusion match step 1.2 exactly.

Edits: none. Remaining blocker: none.

### `lem-finite-probability-maximal-ergodic-inequality` → `def-measure-preserving-transformation-and-system`

Disposition: `accurate`; defects: none. Current carrier hashes are `c879dbd7800aa0411ad8af4d746dfb347945332223891729ac7b6676503a3e35` and `cc1167edcaac45afdc5de287221472ee37f3b370ad5168c5105066fb3b2544e3`.

Evidence: the definition supplies the measurable self-map and preservation identity used for the iterates in step 1.1. The proof correctly requires neither invertibility nor completeness, and the probability hypothesis supplies finite total mass.

Edits: none. Remaining blocker: none.

### `lem-finite-probability-maximal-ergodic-inequality` → `thm-integrals-are-invariant-under-measure-preserving-maps`

Disposition: `accurate`; defects: none. Current carrier hashes are `c879dbd7800aa0411ad8af4d746dfb347945332223891729ac7b6676503a3e35` and `7c9b96dd1da2c3574e4f91b3d829afdd0555ed405dd79adc59d543553583a4f6`.

Evidence: step 1.1 uses the supplier to prove integrability of the finite maximum; step 2.1 uses it to cancel the finite integrals of `M_N` and `M_N` composed with `T`. The on/off-`E_N` inequality and the `N=1` case were checked directly.

Edits: none. Remaining blocker: none.

### `thm-birkhoff-ergodic-probability-case-for-strong-laws` → `def-ergodic-measure-preserving-system`

Disposition: `accurate`; defects: none. Current carrier hashes are `16a1d61d83af5232d1e60f8cbf7c2e32e7407fa6d5d35d603b7a5ef54345fe76` and `bd9b58ff81692c5ac55d71b0395d6d036161e47c7b4b82f8f6460cc106a00096`.

Evidence: the measurable limsup set `D` is proved strictly invariant before step 3.1 invokes the definition. Its probability-zero-or-one conclusion, followed by exclusion of the mass-one case through the maximal inequality, is precisely licensed.

Edits: none. Remaining blocker: none.

### `thm-birkhoff-ergodic-probability-case-for-strong-laws` → `thm-integrals-are-invariant-under-measure-preserving-maps`

Disposition: `accurate`; defects: none. Current carrier hashes are `16a1d61d83af5232d1e60f8cbf7c2e32e7407fa6d5d35d603b7a5ef54345fe76` and `7c9b96dd1da2c3574e4f91b3d829afdd0555ed405dd79adc59d543553583a4f6`.

Evidence: integral invariance of every iterate and the triangle inequality give the `L^1` contraction used in step 5.1. This controls the truncation tail uniformly in `n`; it does not require an inverse transformation.

Edits: none. Remaining blocker: none.

## Imported gate outcomes

### `def-metric-continuity` — `impact-audit`

Disposition: `confirmed_fatal` for the imported original finding; the repair is sound on current content. Defect: `phase-2-nine-step-25-import-phase-2-merged-25-import-2-hgp-6c-impact-def-metric-choice-scope`. Current carrier hash: `f3eb3abf4f1f5d1136c80b6d5ac8d453c6371990ad663156b092fdd879476b06`.

Evidence: the old Remark's unqualified sequential equivalence was defective. The current Remark exactly follows `thm-metric-continuity-characterisations`: the epsilon-delta/open/closed/closure-image cycle is choice free, it implies sequential continuity, and Countable Choice is stated only for the reverse implication. The canonical published-consumer ledger already contains the deduplicated A-R record.

Edits: no new repair; only the required current-hash gate verdict. Remaining blocker: later independent published-repair judgment remains owed through the preserved handoff.

### `cex-separately-continuous-not-jointly-continuous` — `impact-audit`

Disposition: `confirmed_fatal` for the imported original finding; the repair is sound on current content. Defect: `phase-2-nine-step-25-import-phase-2-merged-25-import-2-hgp-6c-impact-cex-separate-continuity-iff`. Current carrier hash: `6af37fb3722f3a49e3ffc86784614be0ca329f047692216c61c36ecaa2f58061`.

Evidence: current L1 uses only continuity implying preservation of convergent sequences, and step 4.1 takes its contrapositive. The diagonal points converge to the origin while their images stay at one half; no sequential converse or choice principle is consumed. The canonical published-consumer ledger already contains the deduplicated A-R record.

Edits: no new repair; only the required current-hash gate verdict. Remaining blocker: later independent published-repair judgment remains owed through the preserved handoff.

### `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group` — `impact-audit-6c`

Disposition: `confirmed_fatal` for the imported original finding; the later repair is sound on current content. Defect: `phase-2-nine-step-25-import-phase-2-merged-25-import-2-hgp-6c-impact6c-vk-boundary-singular-proof`. Current carrier hash: `bb759643f868a0b8477338ba9cce0dfb4782fcaa0b539a94a62d7d0b2c70f974`.

Evidence: the current proof no longer assumes a disc. It proves a free edge from the planar frontier, gives an explicit elementary collapse including monogons, proves the zero-face graph is a tree, handles a closed walk based at a pruned leaf, and replaces both orientations of each free edge by the complementary face path. The result therefore applies to literal outer walks with bridges, repeated vertices and arbitrary start points. The canonical ledger already contains the deduplicated A-R record and exact later receipt.

Edits: no new repair; only the required current-hash gate verdict. Remaining blocker: later independent published-repair judgment remains owed through the preserved handoff.

### `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams` — `impact-audit-6c`

Disposition: `confirmed_fatal` for the imported original finding; the later repair is sound on current content. Defect: `phase-2-nine-step-25-import-phase-2-merged-25-import-2-hgp-6c-impact6c-vk-curvature-singular-proof`. Current carrier hash: `842b8b5d9c1c631149c118a78064f3dfd8192830963149ea009b531876df3dab`.

Evidence: the proof now uses the published arbitrary-diagram toolkit. The original and toolkit piece notions agree here because a literal prefix determines its suffix; reducedness conventions match. The finite block tree has an end disc even when one end bridge survives at the linear boundary word's basepoint. The two-shell clause selects an exterior arc avoiding the attachment, and expanding suppressed degree-two vertices preserves the selected face and the bound of three maximal internal arcs. The canonical ledger already contains the deduplicated A-R record and later basepoint-repair receipt.

Edits: no new repair; only the required current-hash gate verdict. Remaining blocker: later independent published-repair judgment remains owed through the preserved handoff.

### `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps` — `step5-routing-final`

Disposition: `confirmed_nonfatal`; the imported dependency finding was sound and the current repair is complete. Defect: `phase-2-nine-step-25-5b-step5-routing-final-reflection-deps`. Current composite carrier hash: `0cc887e0c2c6aa7c9accce50b09028ceffd888c8d7dcf52ca8ddf18bffbc0b99`.

Evidence: former proof step 1.2 used undeclared CW excision, pair exactness, and reduced augmentation. The repaired step instead gives the circle two vertices and two semicircle edges, both oriented left-to-right. The published cellular-boundary theorem gives both boundaries as right minus left, hence cellular first homology is generated by the edge difference. Horizontal reflection swaps the two equally oriented edges and therefore negates that generator. Naturality in the published cellular-to-singular comparison transfers the computation to singular first homology, so the reflection has degree minus one. The suspension, conjugacy, composition, and antipodal clauses then use the already declared suppliers. No choice principle is used. Repair cycle 3 rederived the carrier after the obsolete 2026-09-07 verification stamps were removed: the full current item SHA-256 is `44cabace3af3e0c1778166a1fbb62ce16cee5624cf3c4e3268e5aeef73f3ec4e`, while the mathematical repair guard and exact Step-7 handoff remain `dba1c0250e69bfbe953e0cdeca9c4eaafd856349fcfcab9ecc303ec36e0e4b99`. The metadata-only change required a new composite binding, not a new mathematical verdict.

Edits: added the two exact published suppliers and their statements to the item, replaced step 1.2, and synchronized the target's dependency array and proof strategy in `research/plan-spec.json`. The published claim, six-row repair handoff, canonical A-R published-consumer classification, current defect disposition, new closed `5b-cross` defect row, and current-hash gate verdict were recorded. Repair cycle 3 updated only that gate verdict's composite binding and this evidence after the metadata reconciliation; it did not alter the proof or its dependencies. Item statement, provenance, page membership, reading order, Phase-2 carriers, manifests, contracts, and frontier records are unchanged. Remaining blocker: the repair still requires its downstream independent published-repair judgment; no Step-5 mathematical blocker remains.

## Closure summary

Recorded eleven current-hash verdict rows: six `edge` rows with `accurate` and empty `defect_ids`, four imported `gate` rows bound one-to-one to existing closed `5b-cross` defect-ledger rows, and the assigned `step5-routing-final` gate row bound to its new closed `5b-cross` row. No forward, structural-change, page, addition, removal, strike, drop, reversion, or clean-gate row is computed. The assigned published item and its canonical plan record were repaired; the supporting claim, handoff, defect records, generated defect view, published-consumer ledger, verdict file, and this report were updated. No page, manifest, contract, provenance, frontier input, Phase-2 carrier, scope, or reading order changed.

The exact shared-plan amendment is limited to adding `thm-cellular-boundary-is-the-incidence-degree-matrix` and `thm-cellular-homology-computes-singular-homology` to this item's dependency list and replacing its proof strategy with the cellular calculation. No Phase-2 amendment is needed. The only remaining obligations are the explicitly preserved later judgments for the six published-repair handoff rows. They are downstream workflow obligations, not unresolved Step-5b mathematics.

## Local validation

- `node tools/step5-scope.mjs check --run phase-2-nine-step-25 --phase final`: 760 items routed, 784 adjudication obligations, zero errors.
- `node tools/cross-group-edges.mjs check --run phase-2-nine-step-25`: six edges, zero forward references, zero post-5a changes, zero errors.
- `node tools/defect-ledger.mjs validate --run phase-2-nine-step-25`: 24 rows, zero errors.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed.
- `node tools/depcheck.mjs --quiet`: no cycles, all references resolve, and no draft item appears on a published page; the command also reports the repository's existing non-fatal warnings.
- Targeted `tools/precheck.mts` and `tools/rendercheck.mjs` on the repaired reflection item: one checked, zero failures in each check.
- Scoped whitespace/error scan over the changed repair artifacts: clean.

These are local reproductions and scoped checks, not an engine transition.
