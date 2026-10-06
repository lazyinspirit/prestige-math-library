# Step 3a scope review — handle-cancellation-slides-and-elementary-moves

- Run: `frontier-41-ha-dt-29` (batch 3), role alpha, label
  `step3a-pair-handle-cancellation-slides-and-elementary-moves-37d8817da534dddf`.
- A page: `handle-cancellation-slides-and-elementary-moves` (order 533,
  differential topology, 19 items).
- B page: `handle-cancellation-slides-and-elementary-moves-examples`
  (order 534, 5 items); companion pointers agree A↔B.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`,
  non-owner review, at the current pair scope hash). Scope only: no item
  approval, no owner record, no scaffold, plan, manifest or page edit.

## Evidence read

- `research/frontier-41-ha-dt-29-batch-3.pages.json` (19 A + 5 B items, every
  item with an explicit `deps` array), `.coverage.json` (36 harvested rows:
  11 `included`, 9 `inline`, 11 `deferred` with destinations, 5 `out-of-scope`),
  `.notes.md`, `.cross-batch-dependencies.json` (12 reviewed rows, all to
  batch-1 suppliers, all `status: open`); `research/frontier-41-ha-dt-29-scope-ledger.json`
  (pages 533/534 listed; 60 pages = 30 owed pairs) and the
  `drift-evidence.json` entry for the A page (declared `requires` = manifest
  `requires`, all six inside the page-level closure); `plan-spec.json` rows
  533/534 carry empty item arrays and the A→B edge, so the batch manifest is
  the current inventory, as in the sibling frontier-35 batches.
- Prose design: `research/plan-differential-topology-track.md` DT-7 (lines
  558–596: 15 A items, hard-proof closure lines 584–588, 5 B items), the
  per-pair source row (line 1657: DT-7 = W §5.4, pp. 143–148 + MH §§4–6,
  pp. 37–78), the exact reorder (line 2200: 533/534) and `requires` array
  (line 2225), the harvest rows H030–H034 (lines 1727–1731) and the
  Cerf/pseudo-isotopy exclusion (line 295).
- `research/frontier-41-ha-dt-29-owner-authoring-direction.md`: its clusters
  concern DT-19 and the added AT support pair; it names no change to this pair.
- Step-1 readiness records: all 24 pair items `ready`, and the six batch-1
  suppliers used by the pair `ready` (`def-handle-decomposition-relative-to-the-incoming-boundary`,
  `def-morse-function-adapted-to-a-cobordism`, `lem-a-handle-decomposition-gives-a-relative-cw-complex`,
  `lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type`,
  `lem-handles-of-equal-index-can-be-attached-on-one-level`, `lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods`).
- Checks I ran: `coverage-checklist.mjs … --require-destination` exit 0
  (1 page, 36 rows, 0 errors, 1 low-yield advisory); `manifest-deps.mjs` on the
  batch manifest exit 0 (24 items, 0 errors); `source-fetch-check.mjs` exit 0
  (3/3 fetch-verified and resolved); `item-dependency-levels.mjs check --run`
  exit 0 (883 items, 60 pages); a name-matched resolution scan of all 58 A-page
  and 17 B-page dependencies (37/58 published for A and 6/17 for B, all
  `status: published`, the rest current-run scaffolds, 0 missing), and a check
  that no pair item id already exists under `items/`.
- Source re-verification I performed for this review: I downloaded the three
  cited documents and they byte/hash-match the coverage stamps — Wall
  `e79dfa03bd1aa8a3`/3 365 978 B/354 pp., Milnor `658bfefbdfe7838b`/3 572 752 B/
  121 pp., Lück `ff8ccb8809443404`/1 474 199 B/197 pp. I read the load-bearing
  locators in the fetched texts: Wall §5.4, Lemma 5.4.2 (standard complementary
  pair, explicit confocal coordinates), Theorem 5.4.3 (single transverse
  a/b-sphere point cancels, no dimension or π₁ hypothesis), Theorem 5.4.4
  (creation at any point), Theorem 5.4.5 (handle addition, stated for
  `2 ≤ r ≤ m−2`, illustrated for `r = 1` in Figure 5.9, homology classes
  `ξ, η + εξ`), and Wall's §5.4 preamble that the section works in homology and
  reserves the general π₁ case for §5.7; Milnor §5 setup and Theorem 5.4
  (single transverse intersection ⇒ product cobordism, modification supported
  on a neighbourhood of the single trajectory); Lück Example 1.11
  (`0 ≤ q ≤ n−1`), Lemma 1.12 (Cancellation Lemma, relative to ∂₀W) with its
  Euler-characteristic remark that one handle alone can never be removed, and
  Lemma 1.13 (trivial embedding creates a cancelling (q+1)-handle). These match
  the scaffold's claims, endpoints included, at the scope level.

## Scope against the prose design

All 15 designed A identifiers are present, in design order, with design-matching
roles: the geometric criterion (`def-geometric-cancelling-handle-pair`, with the
k=0 and k=n−1 endpoint conventions printed); the local model
(`lem-one-intersection-gives-the-standard-local-cancelling-model`); cancellation
and creation (`thm-handle-cancellation`, `thm-creation-of-a-cancelling-handle-pair`);
the slide definition and its two lemmas
(`def-handle-slide-of-one-k-handle-over-another`,
`lem-handle-slides-preserve-the-relative-diffeomorphism-type`,
`lem-handle-slides-act-by-elementary-basis-change-on-handle-chains`); the matrix
packaging (`def-attaching-belt-intersection-matrix-of-adjacent-index-handles`,
`lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix`,
`prop-elementary-matrix-operations-are-realized-by-handle-slides`); the
algebraic/geometric gap and Morse form
(`lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation`,
`prop-morse-cancellation-criterion-via-a-unique-connecting-orbit`,
`lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood`);
and the two boundary remarks. All 5 designed B items are present unchanged
(0-1 endpoint, surface 1-2 pair, slide row operation, unit-entry-not-geometric
counterexample, zero-intersection counterexample).

Four local prerequisites beyond the design are added, each the well-definedness
input of a designed claim and each with a named source locator:
`lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type`
(Lück Lemma 1.8), `lem-transverse-complementary-spheres-have-product-charts`
(Wall Lemma 4.8.1), `lem-standard-complementary-pair-fills-an-n-ball`
(Wall Lemma 5.4.2), and `lem-embedded-bands-joining-two-framed-spheres-exist`
(the path/framing construction inside Wall's proof of Theorem 5.4.5). The
design's hard-proof closure is respected: local cancellation, algebraic matrix
simplification and the support-control lemma are all scaffolded, the excess
intersection step (Milnor Theorems 6.4/6.6 and §7, Lück Lemma 1.22, Wall
§§5.5–5.6) is deferred with resolving destinations
(`the-whitney-trick-and-surgery-below-the-middle-dimension`,
`the-smooth-h-cobordism-theorem`), and the "unit is not one geometric point"
point is carried by `lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation`
plus the B counterexample.

## Source coverage

The §8 two-independent-treatment requirement is met by Wall §5.4 and Milnor
§§4–6 (both read in full per the coverage, with the stamps above), with Lück
Ch. 1 as a third full treatment. All 36 harvested rows are mapped to existing
items or to resolved destinations, and every `out-of-scope` decline has a
specific reason. The low-yield advisory (11/36) is explained: the read ranges
contain the rearrangement, elimination, h-cobordism and Whitney-trick material
that the design assigns to other pairs.

## Prerequisites

The `requires` array equals §12.4 exactly, and all six pages are available:
`sublevel-deformation-and-the-handle-attachment-theorem`,
`oriented-and-mod-two-intersection-numbers`,
`whitney-embedding-tubular-neighbourhoods-and-approximation`,
`vector-fields-flows-and-lie-derivatives`,
`manifolds-with-boundary-collars-and-orientations` published, and
`handle-decompositions-duality-and-rearrangement` a 29-item ready in-run pair
(batch 1). Every declared dependency resolves: 15 within-pair + 6 batch-1 +
37 published for the A page, 11 within-pair + 6 published for the B page, with
all published suppliers carrying `status: published` and no name missing from
both the published library and the current scaffold. The six load-bearing
batch-1 items exist as ready scaffolds whose contracts match their use (stages
and outgoing boundary; adapted Morse data; relative CW comparison; disc
absorption; equal-index grouping; adjacent-level spheres). The 12 open
cross-batch rows are the batch-1 producer's Step-3 reconciliation duty, not a
scope gap here.

## Role in the library

The pair is the DT-7 elementary-moves page at design orders 533/534. Every
in-run consumer that names a pair item resolves to an item that exists:
`morse-inequalities-and-the-handle-chain-complex` (matrix definition, product
charts), `the-smooth-h-cobordism-theorem` (cancellation, creation, slides, the
band and isotopy lemmas, the matrix operations), `the-whitney-trick-and-surgery-below-the-middle-dimension`
(product charts), `whitehead-torsion-and-the-s-cobordism-theorem` (slides,
creation, cancellation, matrix definition, isotropic band lemma),
`codimension-one-foliations-and-secondary-classes` (Morse criterion and support
control), and the B page. No published page or item references the pair yet,
and no pair item id already exists under `items/`.

## Uncertainty and observations for the owner

1. **Group-ring/labelled slide refinement (uncertain, judged owned downstream).**
   The design's DT-7 items 7 and 9 say "signed/group-ring multiple" and
   "±1 (or the relevant group-ring unit)", while the scaffold states
   `lem-handle-slides-act-by-elementary-basis-change-on-handle-chains` over
   ℤ and the matrix/unit items over ℤ or ℤ₂. The s-cobordism pair (DT-24) does
   consume these items in labelled form: its
   `lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves`
   (entries ±g, `g ∈ π`, "each … realized geometrically") names
   `prop-elementary-matrix-operations-are-realized-by-handle-slides` and the
   chain lemma, and its published AT supplier
   `lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices`
   covers the CW-level group-ring algebra. My judgement: the labelled geometric
   refinement is the content of DT-24's own items and is not a prerequisite
   absent from the scaffold, and Wall's §5.4 (the design's primary treatment)
   is explicitly the homology version; so this is not counted as an omission
   of this pair. If the owner prefers the geometric labelled statement to live
   on this page, the minimal enrichment would be a group-ring clause in the
   chain-change lemma (coefficient ±g determined by the band path) — an owner
   enrich decision, not applied here.
2. **Stale Pajitnov citation in the design (confirmed record defect, not a
   scope gap).** DT-7's source line and harvest row H033 (line 1730) cite
   "P Ch. 4 §3, 'Rearrangement'" for the slide items, but the published table
   of contents of Pajitnov, *Circle-valued Morse Theory* has Ch. 4 =
   "The Kupka–Smale transversality theory for gradient flows" (pp. 111–162)
   and Ch. 5 = "Handles" (pp. 163–194); the design's own §8 row assigns
   P Ch. 5 to DT-6, and the batch-3 notes record a full-text search of the
   Chs. 4–5 range finding no cancellation/slide/handle-addition headings. The
   operative §8 two-treatment requirement does not use Pajitnov for DT-7, and
   the pair's three inspected treatments are verified, so no coverage is lost;
   the owner may want the stale H033 row and source line annotated.
3. **Coverage-row granularity (record keeping).** The band-existence lemma and
   the five B items have no per-heading coverage row; their backing is the
   fetched Wall/Lück/Milnor passages already recorded against sibling rows
   (Wall's Theorem 5.4.5 proof; the B locators printed in the design) and each
   named in its Step-1 record. Extending the rows would make the mapping
   auditable but is not a scope gap.
4. **Two source-fit flags for Step 3b item auditing (not scope; no action
   taken here).** (a) `lem-embedded-bands-joining-two-framed-spheres-exist`
   uses a transversality homotopy "relative to the endpoints"; the published
   relative form exists (`prop-relative-transversality-preserves-a-map-on-a-closed-good-region`)
   but is not in the item's declared `deps`. (b) The B example and the slide
   items use the k=1 slide; Wall states Theorem 5.4.5 for 2 ≤ r ≤ m−2 and
   illustrates the procedure for r = 1 in Figure 5.9, which Step 3b should
   cite when judging that case.
5. Statement-level fidelity, proof correctness and dependency minimality were
   **not** judged here; those belong to Step 3b and Step 5.

## Scope decision

The planned definitions, results and examples cover the pair's intended subject
at design breadth — local cancellation and creation of consecutive-index
handle pairs, handle slides with their diffeomorphism-invariance and matrix
realization, the attaching-belt intersection matrix with its unit-entry and
algebraic-not-geometric caveats, and the Morse-theoretic cancellation criterion
with its support control — with source backing for every designed row and for
the four added local prerequisites, correct deferral of the Whitney-trick
excess-intersection step, and all planned prerequisites available. Recorded:
**sufficient**.
