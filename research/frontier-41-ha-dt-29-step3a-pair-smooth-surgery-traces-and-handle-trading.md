# Step 3a — pair scope review: `smooth-surgery-traces-and-handle-trading`

- Run: `frontier-41-ha-dt-29`; dispatch `step3a-pair-smooth-surgery-traces-and-handle-trading-c3b6dca24cd7db80`.
- A page: `smooth-surgery-traces-and-handle-trading` (order 557, differential topology, batch 13).
- B page: `smooth-surgery-traces-and-handle-trading-examples` (order 558).
- Decision recorded: **sufficient** (one scope decision, A page; nothing edited).

## Inputs read

- Manifest/scaffold: `research/frontier-41-ha-dt-29-batch-13.pages.json` (all 17 A + 5 B items, statements, deps, sources read in full).
- Step-1 notes and evidence: `research/frontier-41-ha-dt-29-batch-13.notes.md`; `research/frontier-41-ha-dt-29-batch-13.coverage.json` (3 treatments, 53 harvested rows); `research/frontier-41-ha-dt-29-batch-13.cross-batch-dependencies.json` (19 reviewed incoming edges); `research/frontier-41-ha-dt-29-batch-13.cross-batch…` supplier inventories (batches 1, 2, 3).
- Plan/prose design: `research/plan-differential-topology-track.md` DT-21 L1128–1159 (A + hard-proof closure), B L1161–1167, summary row L50, `requires` row L2237, and the binding §12.5 DT-21 repair L2292–2294; `research/plan-spec.json` pages 1200/1201; `research/frontier-41-ha-dt-29-scope-ledger.json` (pair listed, batch 13); `research/frontier-41-ha-dt-29-owner-authoring-direction.md` (no item-level clause touches DT-21; §12 dim/regularity preservation applies).
- Published suppliers: statements checked directly in `items/` for the load-bearing published dependencies (`def-attaching-a-smooth-handle-with-corner-rounding`, `def-k-handle-core-cocore-attaching-region-and-belt-sphere`, `def-oriented-smooth-cobordism`, `def-stable-normal-bundle-of-a-compact-smooth-manifold`, `thm-the-double-has-a-well-defined-smooth-structure`, `lem-collar-gluing-and-corner-smoothing-give-transitivity`, `prop-first-stiefel-whitney-class-classifies-orientability`, etc.).
- Downstream consumers inspected: `research/frontier-41-ha-dt-29-batch-14.pages.json` (10 item-level edges into this page) and batch-15 page edge.

## Design match (scope)

All 15 designed DT-21 A items (L1139–1153) are present **in design order** with their intended roles, plus 2 documented local-closure additions; all 5 designed B items (L1163–1167) are present in order:

| Design promise | Scaffold realisation |
| --- | --- |
| 1–2 surgery datum + construction, §12.5 range repair `0≤p≤m−1`, `q≥1`, dual sphere dim `q−1`, no `S^{−1}` | `def-framed-embedded-surgery-sphere`, `def-p-surgery-on-a-smooth-m-manifold` (range, endpoint cases and no `S^{−1}` printed) |
| 3 well-definedness | `lem-surgery-gluing-…` (collars, seam, isotopy invariance) |
| 4 trace, index shift `p+1` | `def-surgery-trace-cobordism` |
| 5 handle boundary trading `S^p×D^q ↔ D^{p+1}×S^{q−1}` | `lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors` + `thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold` |
| 6–7 dual sphere, reversal | `def-dual-surgery-sphere`, `thm-surgery-is-reversed-by-dual-surgery` |
| 8–9 kill-class below middle, homological effect | `lem-attaching-a-single-cell-…` (added closure), `lem-p-surgery-kills-…`, `prop-homology-effect-…` |
| 10 framing obstruction | `lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere` |
| 11–12 normal maps | `def-degree-one-normal-map-for-the-surgery-program`, `prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class` |
| 13–15 boundaries: middle obstruction, L-groups sequel (P: not-supplied), dimension 4 | the three closing remarks, present |
| B1–B5 | `ex-zero-surgery-on-the-circle`, `ex-surgery-on-s-p-times-s-q…`, `ex-one-surgery-on-a-three-manifold-as-framed-knot-surgery`, the two counterexamples — all in order, with `H_1`/form computations rather than knot classification |

The two additions are genuine closure of the design's own proof routes, not scope growth: the outgoing-boundary trade (published attachment definition gives the glued handle but not `∂N′`) and the single-cell kernel statement (published AT items give connectivity/cell bases but not the kernel verbatim). §12.5 is implemented exactly (no `p=−1`; the source's allowed `r=−1` case, e.g. Wall survey Def. 3.1, is deliberately excluded by the binding repair).

"Handle trading" terminology check (web + plan): the standard h-cobordism use is index trading (Milnor h-cobordism Thm. 8.1; cancelling-pair trading k→k+2). The design uses "handle boundary trading" for this page (L1143) and places the index-trading lemma on DT-23 (`lem-handle-trading-concentrates-…`, plan L1225). The scaffold realises the boundary trade plus the dual-surgery reversal (trace as supporting manifold of both operations, Ranicki Prop. 10.2; Wall §7.1 "same boundary"); the plan's own scope summary (L50) is "framed sphere surgery, trace cobordisms, duality and homological effects". No omission against the intended role.

## Source coverage

- 3 treatments fetch-verified and stamped (`fetch_verified` present in `…batch-13.coverage.json`): Lück Ch. 3 §3.3 tail–§3.4 (+Ch. 4 §4.1), Ranicki Ch. 10 §§10.1–10.4 (+Ch. 7 §§7.2–7.3), Wall Ch. 7 §§7.1–7.2. All 53 harvested rows are dispositioned (33 included, 5 inline, 12 deferred with named in-run destinations: DT-22, DT-12, the signature page, DT-23; 3 out-of-scope with reasons).
- Every scaffolded item is `included`-backed; the deep kernel-module/regular-homotopy machinery is correctly deferred, matching the design's "hard-proof closure" (items 8–12 are the load-bearing content; middle obstruction and exact sequence are boundaries).
- Documented limitation (not an omission): the design's fourth source "MH §3, pp. 20–36" was not readable in this environment (image-only scan, no OCR) and is not claimed; its advertised content (elementary cobordisms, surgery on products of spheres) is covered by the three read treatments. Uncertain, not confirmed-absent.

## Prerequisites

- All dependency ids of the 22 items resolve: 45 distinct ids to `status: published` item files, 24 to current-run scaffolds (batches 1, 2, 13 itself); **0 missing** from both published library and current scaffold (independent script + `manifest-deps`).
- All 14 `requires` pages resolve: 11 published; `handle-decompositions-duality-and-rearrangement` (batch 1), `intersection-pairings-self-intersection-and-euler-classes` (batch 2), `handle-cancellation-slides-and-elementary-moves` (batch 3) are scaffold-ready in-run. Load-bearing in-run claims were read and match their consumers (`def-smooth-cobordism-triad-for-morse-theory`, `lem-product-cobordisms-have-critical-point-free-presentations`, `lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy`, and the batch-2 intersection/Euler items).
- Downstream consumers batch 14 consume `def-degree-one-normal-map-…`, `prop-surgery-on-a-normal-map-…`, `lem-attaching-a-single-cell-…`, `def-framed-embedded-surgery-sphere`, `lem-framing-obstruction-…`; all are in the scaffold with the exact required interfaces. Batch 15 consumes the page at reading-order level only.
- Two published-supplier gaps found with evidence, both closed inside the current scaffold (hence not "absent from both"): (i) `def-attaching-a-smooth-handle-with-corner-rounding` defines the attachment but states no boundary decomposition — read in item; closed by the in-pair trade lemma; (ii) the published AT cell items state connectivity and cell bases but not the kernel of the attachment map on `π_p` — closed by the in-pair cell-killing lemma. No published defect blocks this pair.

## Checks run (this session)

- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-13.coverage.json` → 1 page, 53 harvested, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-13.pages.json` → 22 items, 0 errors; whole run (all batch manifests) → 883 items, 0 errors.
- `node tools/drift-review-check.mjs --run frontier-41-ha-dt-29` → 30 pages, no blocked edges; every owed A/B page above 95 % published-or-earlier-in-run.
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase scope` → this pair listed as "current scope review required" (no prior review/owner record; none exists on disk).
- Independent dependency resolution script over all run manifests + `items/` → 0 unresolved ids; published deps all `status: published`.

## Flags for the owner/author (non-scope; no edits made)

1. **Statement-level wording flag (F1).** `def-p-surgery-on-a-smooth-m-manifold` closes with "The case $p=m-1$ ($q=1$) replaces an open product neighbourhood $S^{m-1}\times(-1,1)$ by one disk $D^m$." The displayed formula glues `D^{p+1}×S^{q−1} = D^m×S^0`, i.e. **two** disks (one per boundary sphere), and the page's own B item `ex-zero-surgery-on-the-circle` computes the `m=1` case as `S^1 ⊔ S^1`. Recommend correcting the sentence at authoring stage ("two disks" / "`D^m×S^0`"). This is a wording inaccuracy in an included case, not a scope omission; it does not affect the scope decision.
2. **Authoring-stage dependency risk.** The three in-run suppliers (batches 1–3) are scaffold-only; all 19 batch-13 cross-batch edges are reviewed and `open` pending authoring. Scope is fine; the claims must be authored before downstream authoring/verification.
3. **Source limitation (uncertain).** MH §3 unreadable here (see above); recommend treating it as unclaimed evidence, as the batch-13 notes already do.

## Decision

Scope is **sufficient**: the planned definitions, results, and examples cover the intended subject (single-step surgery, trace, boundary/dual handle trading, homological and normal-map effects, with the middle-dimension and low-dimensional boundaries recorded), source coverage is complete at the claimed locators, and no prerequisite is missing from the published library and the current scaffold. Recorded with:

```
node tools/step3-decisions.mjs record-scope --run frontier-41-ha-dt-29 \
  --page smooth-surgery-traces-and-handle-trading --decision sufficient \
  --reason "…; report: research/frontier-41-ha-dt-29-step3a-pair-smooth-surgery-traces-and-handle-trading.md"
```
