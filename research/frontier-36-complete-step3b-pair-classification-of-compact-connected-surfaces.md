# Step 3b pair report — `classification-of-compact-connected-surfaces`

- Run: `frontier-36-complete` · role `alpha-high` · dispatch
  `step3b-pair-classification-of-compact-connected-surfaces-a7fdaaae3f53aef1`
  (launched 2026-09-29T02:13:21Z).
- Pair: A `classification-of-compact-connected-surfaces` (order 444.1,
  category `topology`, 14 items) + B `classification-of-compact-connected-surfaces-examples`
  (order 444.2, 6 items). Batch 10 contains only this pair, so no sibling rows
  needed preserving.
- Output manifest `research/frontier-36-complete-batch-10.pages.json`; proof
  contracts `research/frontier-36-complete-batch-10.proof-contracts.json`; pages
  `library/topology/classification-of-compact-connected-surfaces.md` and
  `library/topology/classification-of-compact-connected-surfaces-examples.md`.
- This report replaces the earlier in-progress version of the same file. The
  transfer history of the missing carriers lives in
  `research/frontier-36-complete-operator-record.md` and is not a mathematical
  input here.

## Outcome

All 20 manifested items are fully authored on disk under their promised IDs,
kinds and dependency levels; both pages exist and list exactly the manifested
inventories (A page 14 under `items:`, B page 6 under `examples:`). Every check
demanded by this dispatch passes on the current bytes, all 20 Step-3b item
decisions are current and closed, and the pair scope decision is the owner's
current `proceed` (sha `60acdc6f…`, 2026-09-29T02:02:05Z).

**No item, page, manifest or contract byte was changed by this dispatch.** The
stable carrier set was authored/repaired by owner lanes at 01:56–02:08Z
(manifest 02:01, contract 02:08, item decisions 02:04–02:12) and is re-verified
here rather than re-authored. Consequently **no new item decisions were
recorded**: re-authoring unchanged completed items is forbidden, and no change
invalidated a receipt. This is also load-bearing mechanically — editing any
owner-receipted item makes it owner-held (`tools/step3-decisions.mjs`
`itemDecision`, stale-owner branch: "changed inputs require a current owner
decision"), and a non-owner `record-item` receipt cannot close a stale owner
row because the owner row shadows it.

## Completed IDs (dispatch order, scaffold dependency level)

| level | item ID | kind | current decision receipt |
|---|---|---|---|
| 0 | `def-connected-sum-of-compact-surfaces` | definition | review `repaired`, conf 1 — baseline-absent (auditor-created) |
| 0 | `def-klein-bottle` | definition | review `repaired`, conf 1 — baseline-absent (auditor-created) |
| 0 | `def-polygonal-schema-and-edge-pairing` | definition | review `repaired`, conf 1 |
| 0 | `lem-plane-arc-complements-and-accessible-jordan-points` | lemma | review `accept`, conf 1 |
| 1 | `lem-finite-plane-graph-ear-and-face-facts` | lemma | owner `repaired` |
| 1 | `lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema` | lemma | owner `repaired` |
| 1 | `lem-polygonal-schema-reduction-moves` | lemma | owner `repaired` |
| 1 | `ex-projective-plane-polygonal-schema` | example (B) | owner `repaired` |
| 1 | `ex-torus-polygonal-schema` | example (B) | owner `repaired` |
| 2 | `lem-jordan-schoenflies-extension-for-plane-curves` | lemma | owner `repaired` |
| 2 | `ex-genus-two-orientable-surface-polygonal-schema` | example (B) | owner `repaired` |
| 2 | `ex-klein-bottle-polygonal-schema` | example (B) | owner `repaired` |
| 2 | `ex-sphere-polygonal-schema` | example (B) | owner `repaired` |
| 3 | `lem-planar-facial-graph-isomorphism-extension` | lemma | owner `repaired` |
| 3 | `cex-euler-characteristic-alone-does-not-classify-compact-surfaces` | counterexample (B) | owner `repaired` |
| 4 | `lem-compact-surface-admits-a-finite-triangulation` | lemma | owner `repaired` |
| 5 | `thm-polygonal-normal-form-for-compact-connected-surfaces` | theorem | owner `repaired` |
| 6 | `thm-classification-of-compact-connected-surfaces` | theorem | owner `repaired` |
| 7 | `cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g` | corollary | owner `repaired` |
| 7 | `cor-orientability-and-euler-characteristic-determine-a-compact-connected-surface` | corollary | owner `repaired` |

Decision inventory: 16 current owner receipts (`owner: true`,
`decision: repaired`, `confidence: null` — owner-receipt class) and 4 current
review receipts (`confidence: 1`): `def-connected-sum-of-compact-surfaces`
(repaired), `def-klein-bottle` (repaired), `def-polygonal-schema-and-edge-pairing`
(repaired), `lem-plane-arc-complements-and-accessible-jordan-points` (accept).
`def-connected-sum-of-compact-surfaces` and `def-klein-bottle` are absent from
the immutable Step-3 baseline (`research/frontier-36-complete-step3-auditor-baseline.json`,
921 items) and are the pair's auditor-created class: the engine's
`auditor-created-certifications` gate (`tools/step3-auditor-items.mjs certify`)
binds them to this dispatch's successful result — label prefix
`step3b-pair-classification-of-compact-connected-surfaces-` with
`covers: [classification-of-compact-connected-surfaces]`, all proof-input
mtimes before the dispatch end.

## Checks actually run (this dispatch, current bytes)

- Explicit-path `precheck` on all 20 item files: **PASS** (17 proof-bearing
  items plus 3 proof-free definitions; no failures).
- `rendercheck` on the 20 items + both pages: **OK 22/22** (KaTeX parse, YAML
  parse, no wikilink in math, no unbalanced delimiters).
- `content-policy research/frontier-36-complete-batch-10.pages.json` (item
  mode): **20 scoped items, 0 errors, 0 warnings**.
- `proof-contract …batch-10.proof-contracts.json --strict`: **20/20 items
  checked, 0 errors, 0 warnings**.
- `tools/manifest-deps.mjs research/frontier-36-complete-batch-10.pages.json`:
  **20 items, 0 normalized, 0 errors** — the manifest direct-dep rows are
  consistent with the authored frontmatter (the owner reconciled them at
  02:01Z; the earlier report's "rows should gain deps" notes are stale).
- `item-dependency-levels check --run frontier-36-complete`: **exit 0**, 979
  items across 60 pages, maximum level 18.
- `validate-plan research/plan-spec.json --repo .`: **exit 0** (acyclic; the
  note about 378 item-list-free planned pages includes ours pre-splice).
- `step3-decisions check --run frontier-36-complete --phase final`: **all 20
  items closed**, no scope rows for either page. The 45 open rows in the run
  are other batches/pairs and were not touched.
- Dependency closure audit of the 20 items: **1251 reachable item IDs, 0
  missing, 0 suppliers belonging to any other `frontier-36-complete` batch**;
  every external supplier is a `status: published` item.
- AC propagation: `[A1]`/`def-axiom-of-choice` is declared on
  `lem-jordan-schoenflies-extension-for-plane-curves` and on every downstream
  consumer (`lem-planar-facial-graph-isomorphism-extension`,
  `lem-compact-surface-admits-a-finite-triangulation`,
  `thm-polygonal-normal-form-for-compact-connected-surfaces`,
  `thm-classification-of-compact-connected-surfaces`, and both corollaries) —
  verified in frontmatter.
- `depcheck` (run-wide, **not** in this dispatch's mandated list but part of the
  stage gate): exit 1, **70 hard errors** (66 `b-leaf-content`, 4
  `page-cycle`) plus warnings (140 `multi-home`, 139 `cited-not-in-deps`, 1
  `orphan`). This pair accounts for 4 `b-leaf-content` rows and 1
  `page-cycle`; details and owner-routed repair strategy below.

Honesty note: I did not re-derive every proof from scratch. Confidence rests on
(a) the owner-lane reaudits recorded in the 16 owner receipts and 4 review
receipts (hash-bound to the current bytes), (b) the gate runs above, and
(c) my own reads of `thm-classification-of-compact-connected-surfaces` and
`ex-projective-plane-polygonal-schema` while characterizing the dependency
uses below. I did not independently verify, e.g., the Jordan–Schönflies
refinement scheme end-to-end (see open qualification 4).

## Local suppliers added

None. No new items were needed and none were minted; the definitions and lemmas
consumed from outside the pair are all already published upstream items. The
pair's own supplier chain is entirely in-pair and level-ordered; no earlier
item rests on a later one.

## Owner-routed findings and open obligations

1. **CONFIRMED structural — A page consumes its own B-page examples.**
   `thm-classification-of-compact-connected-surfaces` (A, level 6) declares
   `deps: ex-sphere-polygonal-schema, ex-torus-polygonal-schema,
   ex-projective-plane-polygonal-schema` (all B page 444.2). Evidence:
   `depcheck` emits three `b-leaf-content` errors naming this item, and
   `content-policy --manifest-only` emits three `batch-b-leaf-target` plus
   three `batch-forward-dependency` errors, producing the
   `[page-cycle] classification-of-compact-connected-surfaces ->
   classification-of-compact-connected-surfaces-examples -> classification-of-compact-connected-surfaces`
   row. None of the six examples is multi-homed, so this is a genuine A→B
   content edge, **not** a directory-ordering artifact (the page graph is
   induced by actual home-of item deps). The uses are load-bearing:
   [L2] and steps 1.1, 5.1, 6.1 use the three examples for the base-block
   identifications (digon → `S^2`, one-handle block → `T^2`, one-square block
   → `RP^2`) and their cell counts. This violates the stated rule that B/examples
   content may not enter the theorem spine (depcheck comment: "an item that
   lives only on B/examples pages may be used by an earlier item on that same
   B page, but never by another page").
   *Repair strategy* (owner lane, because the item carries a current owner
   receipt): remove the three B deps from frontmatter and the manifest row,
   then either (a) prove the three base-block identifications inside the A item
   (owner precedent: the batch-14 Jacobi/cut-locus A-item repair recorded in the
   operator record removed three B-example deps and proved the clauses inside
   the A item; the explicit homeomorphisms already written in the three
   examples compress to a short block-level argument), or (b) add one fully
   authored A-page lemma carrying those identifications and have the theorem
   depend on it (register in manifest, coverage, contracts and page). A-side
   references available for either route: `def-connected-sum-of-compact-surfaces`
   (A page), published `def-two-dimensional-torus`,
   `def-euclidean-spheres-and-closed-balls`, `thm-quotient-universal-property`,
   `thm-compactness-under-continuous-maps`.
   `research/b-leaf-legacy-allowlist.json` is *not* an appropriate remedy (it is
   for published legacy edges; adding in-run examples to it would re-open the
   "examples in the theorem spine" hole by decree). Confidence: confirmed rule
   violation; the mathematics itself is sound either way.
2. **CONFIRMED structural — B example consumes another pair's B example.**
   `ex-projective-plane-polygonal-schema` declares
   `ex-continuous-inverse-gives-the-nth-root` (published B page
   `monotone-functions-and-discontinuities-examples`) and cites it in [L7] for
   continuity of the square root used in the radial map
   `u ↦ (u, sqrt(1-|u|^2))`. Evidence: one `b-leaf-content` `depcheck` error
   naming this item. *Repair strategy* (owner lane for the same receipt
   reason): swap the dependency and citation to the published **A-page**
   `thm-continuous-inverse`
   (`library/real-analysis/monotone-functions-and-discontinuities.md`) applied
   to `x ↦ x^2` on `[0,1]` (continuity by `thm-algebra-of-continuous-functions`,
   strict monotonicity on `[0,∞)` by `lem-power-monotone` /
   `thm-continuous-injection-on-an-interval-is-strictly-monotone`), or to the
   already-used `thm-continuous-bijection-from-a-compact-space-has-continuous-inverse`
   for the inverse of the squaring map on the compact interval. The [L7]
   mathematics is unchanged by the swap. Confidence: confirmed.
3. **Run-wide context (not batch-10-specific, owner decision required).**
   The same `depcheck` run reports 66 `b-leaf-content` edges across 48 source
   items and 4 page cycles; three of the four cycles involve in-run pairs'
   own examples pages (this pair, `flat-smooth-and-etale-morphisms`,
   `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`).
   This is systemic scaffolding/authoring debt that needs one owner-level pass
   (repair vs. published-allowlist policy) rather than one-off per-pair edits;
   batch-10's share is the 4 `b-leaf-content` edges above (3 + 1) and its one
   cycle. `depcheck` is a stage-3b gate (`repoWide` includes `gate('depcheck',
   …)`), so the stage will not transition until this run-wide red is resolved;
   do not read that red as batch-10 incompleteness — every mandated batch-10
   check is green.
4. **Open qualification (no confirmed defect).** The prior author flagged that
   step 7.1 of `lem-jordan-schoenflies-extension-for-plane-curves` compresses
   the source's §9 refinement scheme: the case analysis is written out, but a
   reviewer may legitimately ask for a finer expansion of 7.1(i). Carried
   forward unchanged; I found no concrete gap while re-reading the item, and
   the owner receipt records the step as checked.
5. **Consumers of this pair in other batches (Step 5b / serial reconciler).**
   The run-wide cross-batch ledger has item-level edges with this pair's items
   as suppliers:
   `thm-classification-of-compact-connected-surfaces` →
   `thm-topological-classification-compact-riemann-surfaces` (batch 28);
   `cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g` →
   `def-genus-and-euler-characteristic-compact-riemann-surface` (batch 28);
   `def-klein-bottle`, `def-polygonal-schema-and-edge-pairing`,
   `ex-klein-bottle-polygonal-schema`, `ex-torus-polygonal-schema` →
   `fs-classical-gauss-bonnet-by-itself-classifies-compact-surfaces` (batch 15);
   `lem-finite-plane-graph-ear-and-face-facts`,
   `lem-jordan-schoenflies-extension-for-plane-curves` →
   `lem-finite-planar-graph-disk-cuts-and-euler-count` (batch 15), plus
   page-level rows for the two pages. Two of those edges are themselves
   `b-leaf-content` errors on the consumer side (batch 15 relying on this
   pair's B examples) and belong to batch 15's B-leaf debt, already tracked in
   the operator record. The consumer-side batch-10 input
   `research/frontier-36-complete-batch-10.cross-batch-dependencies.json` is
   `[]`, which I re-verified is correct and complete: no batch-10 item consumes
   an item homed in another in-run batch.

## Pre-splice plan mismatch (for Step 4)

`research/plan-spec.json` already carries both page records (444.1 kind A with
`requires` the five published pages: `smooth-manifolds-and-smooth-maps`,
`simplicial-subdivision-and-simplicial-approximation`,
`cw-complexes-and-cellular-homology`,
`orientations-poincare-lefschetz-and-alexander-duality`,
`the-fundamental-group`; 444.2 kind B with `requires`
`classification-of-compact-connected-surfaces`) but **0 items on both pages**
until the Step 4 splice reads the batch manifest. Expected and reported, not a
defect. Note for Step 4: the spliced A page will inherit the three B-page
dependencies of `thm-classification-of-compact-connected-surfaces`, so the
induced plan graph will contain the A→B→A page cycle and `validate-plan` will
report it once item lists exist. Resolve finding 1 before (or as part of) the
splice pass, or expect that failure in the Step 4 gate run.

## Checkpoint for continuation

- State: 20/20 items authored; pages A/B present; all mandated gates green;
  20/20 item decisions closed (16 owner + 4 review receipts); owner scope
  `proceed` current; batch-10 cross-batch input `[]`; no local additions.
- Outstanding for the owner: findings 1 and 2 (confirmed `b-leaf-content` in
  this pair, with ready repair strategies and the receipt-ownership reason this
  dispatch could not edit them), finding 3 (run-wide red `depcheck` and the
  stage-gate consequence), finding 4 (honest qualification), finding 5
  (cross-batch consumers). None of these blocks registration of this pair's
  authored content; findings 1–3 do block the stage transition until resolved.
- Next mechanical step: let this dispatch exit so its result record lands
  (`research/frontier-36-complete-dispatch/alpha-high-step3b-pair-classification-of-compact-connected-surfaces-a7fdaaae3f53aef1.result.json`),
  which covers batch 10 and lets `tools/step3-auditor-items.mjs certify` bind
  `def-connected-sum-of-compact-surfaces` and `def-klein-bottle` to it.
- Do not re-author any of the 16 owner-receipted items from this dispatch; any
  content change hands the item back to the owner ("changed inputs require a
  current owner decision").
