# Batch 29 — `relative-smooth-triangulation-and-bundle-fitting` (frontier-44 appended pair)

Run `frontier-44-special-representation-examples-28`, role beta, one A/B pair. Orders
1794/1795, category `differential-topology`, companion `relative-smooth-triangulation-and-bundle-fitting-examples`,
`requires` unchanged and identical to the plan (`compactness-in-metric-spaces`,
`euclidean-ordinary-differential-equations-with-smooth-dependence`,
`homology-axioms-degree-and-classical-applications`, `picard-lindelof-and-first-order-odes`,
`relations-functions-and-quotients`, `rn-as-a-normed-space`,
`simplicial-complexes-and-simplicial-homology`,
`simplicial-subdivision-and-simplicial-approximation`, `the-total-derivative`).

Read before construction: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
(including its same-frontier extension section that adds this pair), the assigned design
`research/plan-klr-foundation-prerequisites.md` §"Relative smooth triangulation and bundle
fitting", the frozen proposal `research/...-klr-foundation-relative-triangulation-proposal.json`,
its source ledger, local checks and consumer check, all eight complete authoring drafts under
`research/...-klr-foundation-relative-triangulation-drafts/items/`, both draft library pages, and
the current `research/plan-spec.json` entries for both pages.

Scaffold written: **7 A items + 1 B item = 8 subjects**, all recorded `ready`, in-run
dependency levels 0,1,1,2,3,4,5 (A) and 1 (B), recomputed from the actual in-run graph. No item
was escalated, no page split was needed (far below the 100-item cap), no new prerequisite pair
was required. Written corpus: `research/frontier-44-special-representation-examples-28-batch-29.pages.json`,
`...-batch-29.coverage.json`, `...-batch-29.cross-batch-dependencies.json` (`[]`), the eight
`research/frontier-44-special-representation-examples-28-step1-<item>.json` records, this note,
and one appended section in `briefs/tasks/frontier-dependency-ledger.md`. No published content,
shared plan, engine state or verdict was edited.

## Design / plan comparison (conflicts recorded)

1. **Plan vs design: no item-level conflict.** `plan-spec.json` agrees with the batch task and
   the design on both page IDs, orders, titles, category, companion, `requires`, the seven A
   item IDs with their exact `deps` arrays, and the single B example with its `deps`. The
   proposal's `metadata_graph_frozen: true` inventory is implemented unchanged; no item was
   added, removed, renamed or re-homed, and no dependency edge was added or dropped.
2. **The design appears twice in `plan-klr-foundation-prerequisites.md`** (lines 23-109 and
   111-203). The two copies carry the same contracts, declared inputs and example; the only
   difference is the position of the corner-orthant lemma within the supplier list (after the
   two theorems in the first copy, before the fitting lemma in the second). No mathematical
   conflict; the plan-spec item order (corner lemma before the fitting lemma) controls and was
   used.
3. **Status labels vs actual draft content.** Four carriers are marked
   `open-construction-no-proof-claim` in the design (fitting lemma, corner theorem, bundle
   theorem, example) and two `full-local-draft-awaiting-check`. The carriers in fact contain
   complete local arguments for the fitting lemma and both theorems, built from the declared
   suppliers rather than by citing Munkres/Putz primitives; I read each full argument against
   the source proofs and recorded the routes in the manifest strategies. That is why they are
   recorded `ready` at scaffold level. This is **not** authored-proof acceptance: Step 3/5
   independent review and the authored item files remain outstanding.
4. **Frozen conservative AC edges.** The proposal flags `def-axiom-of-choice` on the two
   theorems as a frozen conservative edge needing later metadata cleanup. Kept in `deps`; the
   theorem statements say the ambient AC hypothesis is dispensable, and both `axiom_use` fields
   state precisely that no essential use is identified (finite choices only; the cited
   Picard-Lindelöf and smooth-dependence suppliers are choice-free). No scope change.
5. **Consumer direction (owned by other batches).** The unified ledger shows the page edge
   `complex-algebraic-stratified-topology` (batch 37) requires this A page; the owner
   consumer-check additionally names the future item consumers
   `lem-compact-semialgebraic-families-admit-compatible-finite-triangulations` and
   `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`
   with the exact literal uses F3/F4. Those consumer review rows are the consumer batch's own
   `cross-batch-dependencies.json` input; this batch's input is empty and this note does not
   verify them.
6. **B-page thinness (recorded, not changed).** The frozen B inventory is a single example.
   The natural second subject — a counterexample showing that plane-preserving approximation
   alone need not preserve a half-space (the Munkres 9.8(e) warning that motivates the
   corner-orthant lemma) — is deliberately **not** added, because it is not part of the frozen
   inventory and is not needed for closure. Recorded here for the owner if the B page is ever
   expanded.

## Mathematical closure (what was checked, item by item)

- Definition: the whole-star immersion/embedding contracts, strong $C^1$ approximation,
  fitting in a (full) subcomplex, the projection-preserving diagram and the corner-adapted
  tangent-orthant condition. Consistency of $df_b$ across faces and of the gluing is recorded
  in the strategy; the tangent-star (not simplexwise) formulation is used because Munkres
  Example 8.1 shows simplexwise injectivity is insufficient.
- Stability lemma: own finite-star separation-angle construction, angle approximation,
  two-segment path integration and the compact-cover embedding argument; no mesh or shape
  bound. Supplier use: extreme-value minima, FTC/Lipschitz integration. Route checked against
  the complete Munkres 8.8 proof.
- Shape-controlled secants: lattice-cell thickness construction (Munkres 9.4, with the
  9.4(a) failure of iterated barycentric subdivision explicitly excluded), the barycentre-ball
  secant bound with its $2/\theta$ derivative factor, the full-subcomplex cutoff version, and
  the tapered standard extension with shape-independent bounds and affine-plane preservation
  (9.8(c),(d)).
- Corner-orthant lemma: the zero set of a nonnegative supporting form on a tangent cone is a
  face, giving the distance-uniform lower bound $\rho_iF\ge a\,\mathrm{dist}(\cdot,Z)$; with
  $\delta<a/2$ the orthant side and the zero sets are preserved exactly. This supplies the side
  control that Munkres 9.8(e) shows plane preservation alone does not give. Statement is
  `ai-altered`, proof `ai-generated`, with the Munkres warning as the cited contrast.
- Fitting lemma: arbitrary-overlap Euclidean refinement by cutting a box by all support
  hyperplanes; controlled local fitting with positive-distance star supports; whole-star
  embedding of the union; exact bundle projection preserved in the affine-base case and by the
  secant-base shift/shift-back (embeddings proved on both sides, intersections identical after
  shift-back); finite simplex-order induction; support confined away from a closed protected
  region. The Putz 3.3/4.4 primitives are rebuilt locally, not imported by citation.
- Corner theorem: finite corner-chart boxes with adapted conditions verified across charts;
  total-boundary collar constructed from an inward field via the published Picard-Lindelöf and
  smooth-dependence suppliers, with the earliest-hit formula proving the tangent-star contract;
  coverage by the clipped-Brouwer core argument; relative extension keeping supplied boundary
  data and a protected smaller collar pointwise fixed. Munkres 10.6 covers the smooth-boundary
  case only; corners are additional.
- Bundle theorem: compact fibre triangulated by the corner theorem; product diagrams over
  finitely many genuine product charts; fitting with exact affine base map descending across
  overlaps; fibre-by-fibre coverage by the box fixed-point argument; relative clause requires
  the supplied projection-preserving collar/neighbourhood diagram (proper smoothness alone
  explicitly does not substitute).
- Example: explicit product-cell triangulation of a trivial bundle with $F=(h,g)$, $r=\mathrm{pr}_1$
  and tangent-star injectivity; does not invoke the general bundle theorem.

Review flags passed forward (not defects, not yet repaired because the manifest graph is
frozen): (i) the fitting/corner/bundle arguments use elementary metric separation facts
("positive distance from a compact image of a complement"), for which the authoring stage
should cite an appropriate published metric/compactness supplier if the frozen graph permits a
`deps` addition (with the matching readiness refresh); (ii) the two conservative AC edges
above.

## Source work

Authoritative treatments actually read, with full text verified:

- **James R. Munkres, Elementary Differential Topology, revised edition (1966).** Full 117-page
  scan fetched from `https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf`
  (stamp: 24,203,505 bytes, sha256_16 `7157fa3f5b9876d7`, 117 pages; identical to the owner
  source-ledger hash `7157fa3f...`). Read Chapter II §§7-10 (printed pp. 69-108): Definition
  8.1-8.4 (whole-star immersion; Example 8.1), 8.5 (strong $\delta$-approximation), 8.6-8.8
  (finite-star angles; Theorem 8.8 stability), 9.1-9.4 (secants, radius/diameter/thickness,
  the lattice subdivision, 9.4(a)), 9.6-9.8 (global and relative secants; tapered extension;
  9.8(c),(d) plane preservation and 9.8(e) the half-plane warning), 10.1-10.4 (fitting and the
  finite simplex-order proof; Exercise 10.4(a),(b)), 10.5-10.6 (triangulation and boundary
  extension), 10.11-10.14 (relative/transversal/neighbourhood problems). The OCR carrier used
  is `/tmp/klr-foundation-relative-triangulation/munkres-chapter-II.txt`
  (sha256 `15fbeb0bec98db2a...`); the critical pages 96, 99, 105, 106 of the scan were
  previously visually inspected by the owner's source author (recorded in the source ledger),
  and my reading of the theorem statements and proofs above is from the same actual text.
- **H. Putz, Triangulation of fibre bundles, Canad. J. Math. 19 (1967) 499-513.** Complete
  15-page article fetched from the Cambridge University Press full-text PDF
  (`https://www.cambridge.org/core/services/aop-cambridge-core/content/view/3C2209F15E20312654B3B2602314144D/S0008414X0005450Xa.pdf/triangulation-of-fibre-bundles.pdf`;
  stamp: 1,146,605 bytes, sha256_16 `da51ecbe601fc5bb`, 15 pages; identical to the owner
  source-ledger hash `da51ecbe...`). Read §§1-5 completely: 1.1-1.7 (definitions, diagrams,
  fitting in a full subcomplex, union), 1.3 (stability restated from Munkres 8.8), 1.6-1.10
  (product-chart differential, shift), 2.1-2.5 (diagram fitting; bundle triangulation over a
  fixed base; fibre boundary; compatible subbundle), 2.8-2.11, 3.1-3.4 (secants; fitting with a
  fixed linear subcomplex; commutativity-preserving extension), 4.1-4.4 (finite simplex-order
  proof), 5.1-5.2 (boundary retraction and product collar). Munkres primitives imported by
  Putz (8.8, 9.7, 9.8, 10.2, 10.4, 10.6, 5.9) are **not** discharged by citation: they are
  rebuilt locally in the draft arguments, and the two sources are used for the statements,
  conventions and the fitting strategy only.

Harvest and dispositions: 25 harvested source results across the two pages — 14 `included`,
9 `inline` (Munkres 7.x, 9.8(e), 10.11-10.14 and the B-page rows; Putz 2.8-2.9 and 4.1-4.4),
and 2 `out-of-scope` with written reasons (Putz 2.10-2.11 PL local triviality/submanifold extension;
Putz 5.1-5.2 boundary product collar existence). Deferred rows: none, so no destination claim.
Both sources are stamped and live; no source drop was needed and no retry allowance was used
(one attempt each, full text on the first fetch).

## Checks (actual results)

- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — 46 errors, all `empty scaffold inventory` for sibling batches not yet scaffolded at this
  writing (batches 11, 24, 25 and 30-49); **zero errors for the eight batch-29 items and all
  labels equal the computed levels** (0,1,1,2,3,4,5 / 1).
- `node tools/step1-decisions.mjs check --run frontier-44-special-representation-examples-28` —
  590 items, 570 ready, not closed overall; **zero work rows for batch 29** (all eight records
  current). The 20 open rows are pre-existing owner records of other batches invalidated by
  interface changes (same stalemate already recorded in the run blockers), not batch-29 work.
- `node tools/manifest-deps.mjs research/...-batch-*.pages.json` (whole run) —
  `manifest-deps: 590 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/...-batch-*.pages.json` (whole run) —
  `content-policy: 590 scoped item(s), 0 error(s), 0 warning(s)`; single-batch run is clean too.
- `node tools/coverage-checklist.mjs research/...-batch-29.coverage.json --require-destination`
  — `coverage-checklist: 2 page(s), 25 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/...-batch-29.coverage.json --stamp`
  — `4/4 source(s) fetch-verified (4 newly stamped)`; check mode re-run
  `4/4 source(s) fetch-verified`, `4/4 source(s) resolved (0 documented drops)`.
- `node tools/url-sweep.mjs --coverage research/...-batch-29.coverage.json --out /tmp/b29/url-liveness.json --recover --fail-on-dead`
  — `2/2 live; 0 failed; 2 citation decision(s)`.
- `node tools/source-backing.mjs --coverage research/...-batch-29.coverage.json --liveness /tmp/b29/url-liveness.json`
  — `6 authored result(s) across 1 file(s), every one still backed by an openable source or
  documented alternative argument`.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-...` — passes
  (exit 0): no item-level cycles, forward references, B-page dependencies or unresolved ids
  among the 52 pages with item lists. Advisory `redundant-prereq` rows are inherited from
  `plan-spec.json`; none concerns this pair.
- `node tools/manifest-integrity.mjs --run frontier-44-...` — `98 page(s) owed, 98 in the
  manifests; no scope drift`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-... --require-reviewed` —
  batch 29 is now a reviewed batch with an empty consumer input. The command still reports
  `Cross-batch review incomplete: supply every batch input and review every declared edge`
  because batches 11, 24, 25 and 30-49 have no input files and unreviewed edges at this
  construction boundary (expected; the run is mid-scaffold). The one edge whose supplier batch
  is 29 — page `complex-algebraic-stratified-topology` (batch 37) requires this A page — carries
  no review yet and is owned by batch 37.
- `extcheck` / `fwdcheck` in item mode (via `tools/frontier-item-gate.mjs --tool ...`) — fail at
  this boundary with 506 `[focus-item-unknown]` rows, including all eight scaffold IDs of this
  batch, because Step-1 item files are deliberately absent. This is the documented scaffold
  boundary; the Step-1 scaffold gate excludes these validators and the authoring stage re-runs
  them once item files exist. No `forward_refs`, `proved_here`, `external_refs` or
  `external_dependency` field is declared by this batch.
- Whole-run `source-fetch-check`/`url-liveness` gates over every batch cannot pass until the
  sibling batches 30-49 have coverage files; the batch-29 parts are green as recorded above.
- Engine `status` (read-only recomputation from disk, `.autopilot/.../status.md` text output):
  `1-scaffold 25/49 covered ... artifact missing for 10, 11, 24, 25, 30, ...49`. Batch 29 is
  **not** in the artifact-missing list, i.e. the engine's own `scaffoldArtifacts` predicate
  finds this batch's populated manifest, coverage record, correct dependency levels and all
  eight current Step-1 receipts; it remains uncovered only until this dispatch writes its
  result file. Batch 10's known artifact gap is the pre-existing unit-10 stalemate recorded in
  the run blockers, unrelated to this batch.

## Step-1 decisions

All eight items were recorded `ready` one at a time in prerequisite order, with the examined
dependency IDs and the evidence above; the record files are
`research/frontier-44-special-representation-examples-28-step1-<item>.json` for the eight IDs.
Every declared in-run dependency resolves to another batch-29 item scaffolded earlier on the
same A page; every other declared dependency resolves to a published item on disk (star
closure/link, extreme-value, vector FTC/Lipschitz, barycentric subdivision, convex-cell
triangulations, chain rule, Brouwer, Picard-Lindelöf, smooth dependence, Axiom of Choice).
No published defect was found in the interfaces read. Owner/operator reconciliation and the
engine's Step-1 gate follow; a readiness record is not independent mathematical approval
(Step 3 provides that review).

## Open items for the owner / later stages

1. Two frozen conservative `def-axiom-of-choice` edges (metadata-cleanup candidates).
2. Elementary metric-separation citation question flagged above.
3. The B page's single frozen example; a Munkres-9.8(e) half-plane counterexample is the
   natural addition if the owner expands the inventory.
4. Sibling consumer batches (30, 37) own the review rows for the page/item edges that name
   this batch's suppliers.
