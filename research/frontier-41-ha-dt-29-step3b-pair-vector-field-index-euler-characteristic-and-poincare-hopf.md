# Step 3b — pair `vector-field-index-euler-characteristic-and-poincare-hopf` (batch 7)

Run `frontier-41-ha-dt-29`, role `alpha-high`, dispatch label
`step3b-pair-vector-field-index-euler-characteristic-and-poincare-hopf-cebe83f1c9a6e34d`
(attempt 2 after the 2026-10-05 attempt `326ca6070cee5b18`, which authored the
files but timed out before checks, decisions and this report). Date: 2026-10-06.

Owned A page `vector-field-index-euler-characteristic-and-poincare-hopf` and
owned B page `vector-field-index-euler-characteristic-and-poincare-hopf-examples`,
both in the shared manifest `research/frontier-41-ha-dt-29-batch-7.pages.json`
(batch 7 contains only this pair, so the whole manifest is owned here); coverage
`research/frontier-41-ha-dt-29-batch-7.coverage.json`; contracts
`research/frontier-41-ha-dt-29-batch-7.proof-contracts.json`; cross-batch input
`research/frontier-41-ha-dt-29-batch-7.cross-batch-dependencies.json`.

## 1. Owned inventory and decisions

33 owned items = 31 original scaffold IDs + 2 local-prerequisite additions
(the Step 3a confirmed `n=1`/`m=1` `S^0` gap). Decision receipts are
`research/frontier-41-ha-dt-29-step3b-review-<id>.json` (31 recorded; the two
additions are absent from the immutable pre-author baseline
`research/frontier-41-ha-dt-29-step3-auditor-baseline.json` and are certified
by the engine as auditor-created, so they carry no self-review receipt).

| level | item | decision |
|---|---|---|
| 0 | `def-euler-characteristic-of-a-compact-manifold` | accept |
| 0 | `def-nondegenerate-zero-of-a-vector-field` | accept |
| 0 | `def-reduced-degree-into-the-zero-sphere` (addition) | engine-certified; repaired during authoring |
| 0 | `lem-closed-connected-one-manifolds-are-circles` | repaired |
| 0 | `lem-degree-zero-unit-vector-field-on-a-sphere-extends-over-the-ball` | repaired |
| 0 | `lem-two-points-avoiding-a-finite-set-lie-in-a-common-embedded-ball` | accept |
| 1 | `def-isolated-zero-and-local-index-of-a-vector-field` | repaired |
| 1 | `lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative` (addition) | engine-certified |
| 2 | `lem-index-sum-of-an-outward-field-is-the-gauss-degree` | repaired |
| 2 | `lem-negation-scales-the-local-index-by-minus-one-to-the-dimension` | accept |
| 2 | `lem-vector-field-index-is-independent-of-chart-ball-and-trivialization` | accept |
| 3 | `lem-reflection-of-an-outward-field-extends-over-the-double` | accept |
| 3 | `thm-index-of-a-nondegenerate-vector-field-zero` | accept |
| 4 | `cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda` | repaired |
| 4 | `lem-local-index-is-additive-under-a-transverse-perturbation` | repaired |
| 4 | `prop-vector-field-zero-index-is-a-zero-section-intersection-number` | repaired |
| 4 | `ex-source-sink-and-saddle-indices-on-a-surface` (B) | accept |
| 5 | `cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic` | repaired |
| 5 | `lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball` | repaired |
| 5 | `thm-poincare-hopf-for-closed-manifolds` | accept |
| 6 | `cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic` | accept |
| 6 | `cor-morse-critical-point-sum-is-the-euler-characteristic` | repaired |
| 6 | `cor-nowhere-zero-vector-field-forces-zero-euler-characteristic` | accept |
| 6 | `prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions` | repaired |
| 7 | `lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold` | repaired |
| 7 | `thm-converse-poincare-hopf-for-nowhere-zero-fields` | repaired |
| 7 | `ex-hairy-ball-theorem-for-even-spheres` (B) | accept |
| 8 | `thm-poincare-hopf-with-outward-pointing-boundary` | repaired |
| 8 | `ex-a-nowhere-zero-vector-field-on-an-odd-sphere` (B) | accept |
| 9 | `rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary` | repaired |
| 9 | `cex-an-interval-has-nonzero-euler-characteristic-despite-being-odd-dimensional` (B) | accept |
| 9 | `cex-an-inward-radial-field-violates-the-outward-boundary-formula` (B) | accept |
| 9 | `ex-outward-radial-field-on-a-disk` (B) | accept |

Authoring/audit order followed the dispatch exactly (ascending recomputed
`dependency_level`, ties by page order and item ID). Scope decision refreshed
for the amended manifest (`sufficient`, receipt
`research/frontier-41-ha-dt-29-step3a-review-vector-field-index-euler-characteristic-and-poincare-hopf.json`,
recorded 2026-10-06 with the current scope hash).

## 2. Entry state audited

The previous attempt had written all 33 item files and the two library pages,
updated the manifest, coverage and contracts, but recorded no decisions, ran no
report checkpoint past item 8, and left no §4/§5. I re-read every owned item
against its declared suppliers, re-checked the mathematical step claims,
repaired the defects in §3, refreshed the manifest and contracts, and re-ran
every gate. The two library pages were re-read and left unchanged: the A-page
prose ("Every statement holds for all dimensions $n\ge1$") already matches the
delivered range conventions, and the B-page prose matches its six leaves.

## 3. Repairs made (exact)

1. `def-reduced-degree-into-the-zero-sphere` — removed the dependency on
   `cex-degree-is-not-defined-by-top-homology-for-self-maps-of-s-zero`, an item
   homed only on an examples page (depcheck `b-leaf-content`: a B-homed item
   cannot be an A-page dependency), and reworded the corresponding sentence to
   cite `def-degree-of-a-map-between-oriented-closed-manifolds` directly.
2. `lem-closed-connected-one-manifolds-are-circles` — added the missing
   `def-connected-space` dependency (depcheck `cited-not-in-deps`).
3. `lem-index-sum-of-an-outward-field-is-the-gauss-degree` — corrected the
   `m=1` Stokes step: as a piece of the boundary of `N'` each small sphere
   carries the orientation opposite to that of the removed ball, so the removed
   pairs contribute `f(p_i-delta_i)-f(p_i+delta_i) = -2 ind`; the text had
   written `+2 ind` while concluding the correct identity, and step 1.1's
   orientation sentence was corrected to match.
4. `lem-degree-zero-unit-vector-field-on-a-sphere-extends-over-the-ball` — the
   smooth clause "equal to u on a neighbourhood of the boundary" was ill-posed
   (u is defined only on `S^m`) and false for the cone construction; it now
   states the radial form `F(x)=u(x/|x|)` for `|x|>=2/3`, and step 4.1 no
   longer equates `u(x/|x|)` with `u(x)`.
5. `lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball` — rebuilt the
   gluing to match (4): the extension is applied to the inner sphere via its
   radial clause, the collar field is glued through a smooth radial
   reparametrization, and `X''=psi F` with `psi=|Y|` on the collar is smooth,
   nowhere zero and equal to `Y` there. This removes the previous step's use of
   an extension "equal to u on a collar" although only `F=Y/|Y|` on the collar
   supports the gluing.
6. `lem-local-index-is-additive-under-a-transverse-perturbation` — corrected
   (iii): the bump equal to 1 on `B_1` must be supported in a slightly *larger*
   ball `B_2` (`B_1` subset `B_2`, closure in `int B`, zero-free apart from p);
   the text had said "smaller".
7. `def-isolated-zero-and-local-index-of-a-vector-field` — removed the
   justification by the later same-level multiplicity lemma (an earlier item
   must not be justified by a later one); the sentence now defers to the
   `justified_by` independence lemma.
8. `prop-vector-field-zero-index-is-a-zero-section-intersection-number`,
   `cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda`,
   `cor-morse-critical-point-sum-is-the-euler-characteristic`,
   `cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic` — added
   the explicit range `n>=1`, which every use of the local index (defined on
   this page for `n>=1`) requires.
9. `prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions`
   — part (ii) now names its object (`A` subset `M` a compact smooth
   submanifold), because `chi(A)` was otherwise undefined; manifest strategy
   refreshed to the delivered route (the handle-correspondence items are no
   longer claimed).
10. `lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold` —
    repaired the garbled `[F1]` clause "hence by under (iii)".
11. `thm-converse-poincare-hopf-for-nowhere-zero-fields` — `[F5]`'s
    pairwise-disjoint ball selection now inducts inside the open submanifold
    obtained by deleting the previously chosen closed balls (connected for
    `n>=2`), which actually establishes disjointness.
12. `thm-poincare-hopf-with-outward-pointing-boundary` — the odd-dimensional
    case now rounds the two corner circles of `M x [0,1]` before applying the
    even-dimensional boundary lemma (a product of a manifold with boundary with
    an interval is a manifold with corners); added published deps
    `def-attaching-a-smooth-handle-with-corner-rounding`,
    `lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism`.
13. `rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary`
    — corrected the closing sentence: the general boundary term is the degree
    of the normalized field `x -> X(x)/|X(x)|` on `boundary M`, not "chi(M)
    plus the degree of the outward normal component".

Manifest statements, deps and (where stale) strategies were re-synced for every
touched item; `manifest`/file drift check reports 0 mismatches on all 33 items.
Contracts were updated: quotes refreshed for every citation whose source
section changed (including the batch-4 supplier
`cor-morse-euler-characteristic-identity`, whose statement text was revised by
its author during concurrent authoring), the new step 4.1 and the changed step
claims of `lem-opposite-index-...` recorded, two citations added for the two new
`thm-poincare-hopf-with-outward-pointing-boundary` dependencies, and the
citation `uses` lists recomputed against the new step tags.

## 4. Checks actually run (2026-10-06)

- `node tools/proof-layout.mjs <all 33 item paths>` — **33 items, 75 steps, 0 defects**.
- `node tools/tsx-run.mjs tools/precheck.mts <all 33 item paths>` — **28 checked, 0 failing** (definitions/remark are not proof-bearing).
- `node tools/rendercheck.mjs <all 33 item paths>` — OK, no wikilink-in-math, no multiline display, all math parses.
- `node tools/rendercheck.mjs` (repo-wide) — 7 errors, all in other pairs' foliation/holonomy items; none in this pair (focused run on the 33 files is clean).
- `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-7.pages.json` — **33 scoped items, 0 errors, 0 warnings**.
- `node tools/manifest-deps.mjs` (all manifests) — 903 items, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-7.coverage.json --require-destination` — 2 pages, 66 harvested results, 0 errors.
- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-7.coverage.json` — 7/7 sources resolved.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` — exit 1 run-wide on other pairs' labels; **no error mentions any of the 33 pair items** (levels 0–9 match the manifest).
- `node tools/depcheck.mjs` — exit 1 run-wide on other items; **no error and no warning on any pair item** (the two findings from the previous attempt, `def-connected-space` and the B-homed dependency, are cleared).
- `node tools/fwdcheck.mjs --quiet` — exit 1 run-wide; no finding on any pair item.
- `node tools/extcheck.mjs` — OK.
- `node tools/validate-plan.mjs research/plan-spec.json` — OK (page order acyclic and consistent).
- `node tools/manifest-integrity.mjs --run frontier-41-ha-dt-29` — 62 pages owed, 62 present, no scope drift.
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-7.proof-contracts.json --strict` — **0 errors, 0 warnings, 28/28 items**.
- `node tools/citation-fidelity.mjs <batch-7 contracts> --fail-on-missing-quote` — every recorded quote appears in its cited item; no widening candidates.
- `node tools/boundary-audit.mjs <batch-7 contracts> --fail-on-contradicted --fail-on-template --json` — no contradicted rows, no template rows.
- `node tools/finite-smoke.mjs <batch-7 contracts>` — 0 errors (0 obligation-bearing rows).
- `node tools/risk-report.mjs <batch-7 contracts>` — 0 errors, 28 items routed.
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` — all **31 original scaffold IDs closed**; only the two auditor additions await the engine's `auditor-created-certifications` gate.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` — **currently blocked by another writer's invalid input** `research/frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json` ("invalid review or consumer ownership"); retried three times over ~5 minutes. The batch-7 input itself is valid and updated.

## 5. Additions and registration

Two items absent from the immutable pre-author baseline were authored as local
prerequisites for the Step 3a-confirmed `S^0`/`n=1` gap:

- `def-reduced-degree-into-the-zero-sphere` (level 0, definition):
  balanced finite oriented 0-manifolds, the half signed count, its value set
  `{-1,0,+1}` on `S^0`, agreement with the reduced `H_0` generator, and the
  balanced boundary source.
- `lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative`
  (level 1, lemma): constancy of maps `S^0 x [0,1] -> S^0` in the time
  variable and multiplicativity of the reduced degree, with the three-case
  composition split.

Both are registered in the batch manifest (with matching `dependency_level`),
the coverage canonical rows, the page item lists and the proof contracts;
`content-policy` and `manifest-deps` pass. Their item and scope certifications
come from the engine after this dispatch (auditor-addition class); they were
deliberately not put through a self-review decision. `def-reduced-degree-...`
was additionally repaired as in §3.1 while the Step 3a/B-page dependency was
still present.

## 6. Open obligations and cross-batch flags

1. **Batch-4 supplier decision staleness.** `cor-morse-euler-characteristic-identity`
   (pair `morse-inequalities-and-the-handle-chain-complex`, batch 4) was
   authored in full and its current statement was re-read and used, but its own
   Step-3 receipt is currently stale ("changed inputs require a current owner
   decision" — its file was revised at 01:45 during concurrent authoring).
   Consumers here: `thm-poincare-hopf-for-closed-manifolds` ([F5], step 3.1)
   and `cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic`
   ([F3], steps 1.1/3.1). If the supplier file changes again, both consumer
   receipts and the two refreshed contract quotes must be re-recorded before
   the final Step-3 gate. Same class, page-level: the batch-4 page
   `morse-inequalities-and-the-handle-chain-complex` suppliers
   `prop-morse-handle-chain-complex-computes-singular-homology` ([F2]/step 1.1
   of `prop-euler-characteristic-additivity-...`) and
   `lem-exact-sequence-dimension-inequality` ([F4]/steps 2.1–3.1).
2. **Batch-8 contract gaps involving this pair.** The merged run contract
   reports
   `citation-fact-uncontracted [prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices]: F2 -> lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative`
   and, for `lem-diagonal-class-expansion-gives-the-alternating-trace`,
   `citation-source-not-in-fact`/`citation-undeclared-dependency` against
   `prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions`.
   Both items are batch-8 consumers and the repair belongs to their owner; the
   quoted statements of the two suppliers were unchanged by those findings.
3. **Scope-decline decisions (run-wide, not pair-specific).**
   `node tools/scope-decisions.mjs check --run frontier-41-ha-dt-29` reports
   457 pending decline rows run-wide, **9 of them on this A page** (all
   `deferred`/`out-of-scope` rows already dispositioned in the coverage file:
   the Lefschetz route rows deferred to `fixed-point-index-and-the-lefschetz-theorem`,
   the Gauss-Bonnet/curvatura-integra row, the planar index-2 pattern row, the
   de-Rham/connections row, the obstruction-theoretic converse row out of
   scope, and the Morse-inequality row deferred to batch 4). No group decision
   file exists for this run (batch 7 belongs to group `h` with batches 3 and
   15), so recording `stands` decisions is a run-level Step-8/owner action; the
   3a review's dispositions for these rows are recorded in
   `research/frontier-41-ha-dt-29-step3a-pair-vector-field-index-euler-characteristic-and-poincare-hopf.md` §2.
4. **Unified dependency ledger.** Refresh is blocked by batch 19's invalid
   input file (see §4); the batch-7 input is updated and valid.
5. **Nothing else outstanding for this pair.** No supplier ID is unauthored;
   every consumed in-run item is complete on disk and was read at its current
   revision.

## 7. Published concerns (unchanged from Step 3a; no new confirmed defects)

- Five published DT-11/one-manifold suppliers still carry depcheck
  `published-unaudited` debt: `def-local-oriented-intersection-sign`,
  `def-oriented-intersection-number`,
  `lem-compact-transverse-complementary-intersections-are-finite`,
  `thm-oriented-intersection-number-is-homotopy-invariant`,
  `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold`. Statements and
  proofs are unaffected; the fix is an owner audit/verification receipt through
  the published-repair process, routed once from the canonical ledger.
- The three undeclared statement wikilinks flagged at 3a are now all declared
  in `deps` (`thm-cellular-homology-computes-singular-homology`,
  `def-self-intersection-number-of-an-oriented-submanifold`,
  `thm-poincare-hopf-with-outward-pointing-boundary`), and the previous
  self-referential strategy link in
  `ex-source-sink-and-saddle-indices-on-a-surface` is gone; depcheck confirms.
- Batch-7 notes §5's Milnor byte-count nit (10,139,305 vs the stamped and
  re-verified 1,654,205) is a notes error only; the coverage stamp is correct.

## 8. Handoff

31 item decisions recorded for the 31 original scaffold IDs (15 `repaired`,
16 `accept`, confidence 1, dependency lists recorded); scope refreshed to the
amended manifest; the two auditor additions await engine certification. All
pair-scoped content, dependency, source, rendering, layout and contract checks
listed in §4 pass on the current files. The only open pair-relevant items are
the batch-4 supplier staleness and the batch-8 contract gaps in §6.1–6.2, both
recorded with exact supplier, consumer and consuming-step IDs; the run-wide
scope-decline and ledger-refresh items in §6.3–6.4 need the owner/serial
reconciler.
