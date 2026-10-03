# Frontier 38, owner 30 — batch 12 scaffold notes

Run `frontier-38-owner-30`, role beta, batch 12. One owned A/B pair in
`differential-topology`: A `oriented-and-mod-two-intersection-numbers`
(order 529, 20 items) with B `oriented-and-mod-two-intersection-numbers-examples`
(order 530, 5 items). Read before construction: `AGENTS.md`, `CLAUDE.md`,
`SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the generated task
`research/frontier-38-owner-30-beta-12.task.md`, the complete DT-11 design in
`research/plan-differential-topology-track.md` (L719–L757, including its
"Hard-proof closure" paragraph and both B-page locators), the plan-spec entries
529/530, and the run's binding
`research/frontier-38-owner-30-owner-authoring-direction.md` (read first; no
selected pair changed, no unbuilt/unselected pair consumed, no page split
needed, no published content, shared plan, engine state or verdict edited).

Written by this batch only: `research/frontier-38-owner-30-batch-12.pages.json`,
`research/frontier-38-owner-30-batch-12.coverage.json`, this notes file,
`research/frontier-38-owner-30-batch-12.cross-batch-dependencies.json` (empty
array — this batch declares no cross-batch edges), and the 25
`research/frontier-38-owner-30-step1-<item>.json` readiness records.

## Scope and plan comparison

`research/plan-spec.json` entries 529 (A) and 530 (B) match the manifest exactly
on `id`, `kind`, `category`, `title`, `order`, `companion` and `requires`; the
plan's item inventories are empty shells, so there is no item-level
plan-versus-design text to conflict with. The design's 16 A items and 5 B items
are preserved verbatim in id and claim, in the design's order, with four local
prerequisite items inserted before their consumers (see the inventory). No
result was dropped or weakened and no page split is required (20 and 5 items
against the hard 100-item cap).

Recorded observations and reconciliations (the plan controls; no scope change):

1. **Design `Requires` versus the plan page edge.** The design header keeps the
   algebraic-topology page `orientations-poincare-lefschetz-and-alexander-duality`
   for "the later algebraic identification, not for the geometric definition".
   The plan's page-level `requires` includes it, and the manifest keeps that page
   edge unchanged. No item of this batch consumes that page: the algebraic
   identification (geometric pairing equals the Poincaré-dual cup pairing) is
   DT-12's commission, and the harvested Stanford 215B material on Thom classes
   and Poincaré duality is explicitly deferred to
   `intersection-pairings-self-intersection-and-euler-classes` in the coverage
   file. The other five page edges (`sard-theorem-and-transversality`,
   `whitney-embedding-tubular-neighbourhoods-and-approximation`,
   `manifolds-with-boundary-collars-and-orientations`,
   `integration-of-forms-and-the-general-stokes-theorem`,
   `the-de-rham-theorem-and-degree`) are all published differential-geometry
   pages, and their published items are consumed directly by this batch.
2. **Source substitution (recorded uncertainty, not a scope conflict).** The
   design's `[H]` locator is Hirsch, *Differential Topology*, Ch. 5 §2,
   pp. 131–140. The design URL `https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf`
   returns HTTP 404 (2026-10-03, initial retrieval failure). Recovery attempts:
   `https://people.dm.unipi.it/benedett/HIRSCH.pdf` (complete 119-page scan
   downloaded, but image-only with no text layer and no OCR available in this
   environment — not readable), `https://zaco.au/lib/math/text/differential-geometry/difftop.pdf`
   (HTTP 404), `https://www.maths.ed.ac.uk/~v1ranick/papers/hirsch.pdf`
   (36-page image-only scan, no text layer). Hirsch is therefore **not** cited as
   a source or coverage row. This does not block the pair: the two books
   Guillemin–Pollack and Milnor plus the Stanford 215B course notes are three
   independent treatments, fetched in full and stamped in the coverage file
   (6/6 source entries), and every design item has a locator in at least one of
   them. The design's H locator remains unverified in this environment and is
   recorded here, not silently dropped.
3. **Convention alignment.** The design's convention audit (plan
   `plan-differential-topology-track.md` §2) fixes: positive local sign when
   $T_xA\oplus T_xB\to T_xM$ preserves orientation in that order; swapping
   factors multiplies by $(-1)^{ab}$; outward-normal-first boundary orientation;
   mod-2 counts without orientability. The manifest carries exactly these
   conventions, with the normal-first quotient convention stated in
   `lem-preimage-orientation-agrees-with-the-local-intersection-sign` so that the
   "exact-sequence" preimage sign and the direct-sum sign agree (the reverse
   order would introduce an extra $(-1)^{xz}$, which is exactly what
   `thm-intersection-number-under-factor-interchange` measures). The local
   sign computation in
   `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs` is
   flagged below as the load-bearing convention check for Step 3.
4. **AC placement.** Countable Choice is declared exactly where the route uses
   it: the transversality homotopy theorem, the strong/relative Whitney
   approximation, the Riemannian-metric existence theorem, and the slice-chart
   constructions for the boundary trace. The parity and sign computations
   themselves, the determinant-line computations, and the finite topology
   arguments are choice-free. No item reaches any Recorded/unproved material.

## Inventory, order and dependency levels

A page, in dependency order (all explicit `deps`):
`def-transverse-complementary-dimensional-intersection-set`,
`lem-compact-transverse-complementary-intersections-are-finite`,
`def-mod-two-intersection-number`,
`lem-overlap-of-arc-length-parametrizations-of-a-one-manifold`,
`lem-boundary-of-a-compact-one-manifold-has-even-cardinality`,
`lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count`,
`thm-transverse-preimage-for-manifolds-with-boundary`,
`thm-mod-two-intersection-number-is-homotopy-invariant`,
`lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign`,
`def-local-oriented-intersection-sign`, `def-oriented-intersection-number`,
`lem-preimage-orientation-agrees-with-the-local-intersection-sign`,
`lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs`,
`thm-oriented-intersection-number-is-homotopy-invariant`,
`cor-oriented-intersection-reduces-to-mod-two-intersection`,
`thm-intersection-number-under-factor-interchange`,
`prop-two-map-intersection-as-a-diagonal-preimage`,
`cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary`,
`cor-negative-expected-dimension-generic-intersections-are-empty`,
`rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact`.
B page: the design's five examples and counterexamples in their design order.

The four local prerequisites satisfy the closure directions the design flagged:
`lem-overlap-of-arc-length-parametrizations-of-a-one-manifold` carries Milnor's
appendix lemma so the 1-manifold classification is dependency-closed (the corpus
had no prior compact-1-manifold classification);
`lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count`
supplies the oriented boundary count that Milnor's Lemma 1 uses;
`thm-transverse-preimage-for-manifolds-with-boundary` supplies the trace lemma
GP and Milnor use implicitly; `lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign`
supplies the $(-1)^{kl}$ block-swap sign used by the factor-interchange and
diagonal items.

Levels (in-run dependencies only, computed after the final manifest edit),
A page 0–6: level 0 beginnings at the intersection-set definition, the arc-length
overlap lemma, the boundary trace theorem and the swap lemma; maximum level 6 at
`prop-two-map-intersection-as-a-diagonal-preimage` and
`cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary`.
B page levels 4–7, maximum 7 at `ex-degree-as-intersection-with-a-regular-value`.
There are no cycles, no missing or forward `deps`, and no duplicate arrays.
`node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` was run
after the final edit: its only error lines were `empty scaffold inventory` for
pages of other batches still being scaffolded concurrently (14 lines), and none
mentions a batch-12 item, so every label matches the recomputed level.

## Mathematical dependency audit

Actual transitive proof dependencies were checked, not page membership. The
manifest declares 61 distinct external dependency targets (103 external edges);
each was confirmed to be a **published** item on disk with its statement read and
matched to the use: transversality definitions, the transverse preimage,
intersection, fibre-product, parametric and stability theorems and the Whitney
approximation/transversality-homotopy items (Sard/Whitney pages); determinant-line
and product orientations, oriented manifolds, induced boundary orientation and
its independence, transverse normal-bundle orientation (DG orientation page);
slice charts, neat submanifolds, boundary submanifold charts, collars and doubles
(DG boundary page); regular-level and graph submanifold items; the degree
definition, its proper-homotopy invariance, the regular-value formula and the
local preimage sign (de Rham/degree page); the Riemannian metric existence
theorem (covers boundaries), components-of-a-manifold, the boundary-as-manifold
theorem and the euclidean inverse function theorem; the compact/discrete and
preimage-continuity facts; the torus, circle, sphere, great-circle, real
projective space, nonorientability, flat-torus and Euclidean-space items for the
B page. 0 missing, 0 unpublished, 0 forward targets, 0 duplicate edges; no dep
points at a B-page item from outside that B page, and no dep is a `proved_here:
false` remark.

Well-definedness is placed before its consumers: the mod-2 and oriented
definitions are `justified_by` their homotopy-invariance theorems (which depend
on them); the preimage orientation is settled in
`lem-preimage-orientation-agrees-with-the-local-intersection-sign` before the
trace sign computation; the diagonal orientation and the $(-1)^{z}$ sign are
settled before the degree example; the finiteness of the counted sets is a
separate lemma. The convention-sensitive point for Step 3 is
`lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs`: the
claim "initial end opposite, terminal end same, sum $=I(F_1,Z)-I(F_0,Z)$" is the
computation of GP Ch. 3 §3 p. 108 and Milnor §5 Lemma 1 pp. 28–29, and it must be
verified against the normal-first convention fixed in the A8 item; the scaffold
states the conventions and the locators rather than asserting a sign silently.

The design's hypotheses are preserved: compact source, closed embedded target
submanifold, complementary dimensions; the mod-2 theory assumes no orientability;
the oriented theory assumes all four orientations; the B-page counterexamples
display (i) a cancelling pair of transverse intersections with opposite signs and
(ii) an intersection escaping to infinity across an improper homotopy, with the
half-line boundary-escape variant named in the item statement.

## Sources and harvest

Three complete treatments were fetched in full-text form, text-extracted and
read; each URL carries a `fetch_verified` stamp in the coverage file
(6/6 source entries resolved, 0 drops):

- **Guillemin–Pollack, *Differential Topology*** (complete 236-page PDF,
  3,472,576 bytes, sha256_16 `e4d815443ae77128`). Read Ch. 2 §4 on printed
  pp. 77–84 in full (mod 2 intersection number, invariance, Boundary Theorem,
  mod 2 degree, exercises on the diagonal and on failed hypotheses) and Ch. 3 §3
  on printed pp. 107–118 in full (oriented local sign and order convention,
  preimage orientation, $X=\partial W$ and homotopy invariance, degree,
  map–map intersection, the diagonal lemma and its sign, factor interchange,
  Euler characteristic).
- **Milnor, *Topology from the Differentiable Viewpoint*** (complete 76-page PDF,
  1,654,205 bytes, sha256_16 `2c3b7412deda8aa9`). Read §4 on printed pp. 20–25
  (the Homotopy Lemma reducing parity to the boundary of a compact 1-manifold,
  Figure 6, mod 2 degree), §5 on printed pp. 26–31 (orientations, boundary
  orientation and the sign of $df_x$, Lemmas 1–2 with Figure 9, examples), the
  classification citation on printed p. 14, and the appendix *Classifying
  1-manifolds* on printed pp. 56–57 in full.
- **Stanford Math 215B (Ionel, notes by Lin)** (complete 63-page PDF, 543,433
  bytes, sha256_16 `7ac76c813f493ed7`). Read Lectures 14–15 on document pp. 43–49
  (Thom/Euler class interface, the Poincaré-dual intersection product, Theorem
  140 with the orientation $TM=T(P\cap Q)\oplus N_P\oplus N_Q$, the diagonal sign
  $(-1)^m$, shriek maps and degree).

The two independent book treatments plus the lecture-note set cover every
harvested result; the A-page harvest rows and the B-page harvest rows in the
coverage file give every heading a disposition (51 rows: 36 included/inline,
13 deferred with a resolvable plan destination, 2 out-of-scope with a specific
reason; 0 warnings from `coverage-checklist`). The defers name DT-12
(`intersection-pairings-self-intersection-and-euler-classes`), DT-13
(`vector-field-index-euler-characteristic-and-poincare-hopf`), DT-15
(`smooth-cobordism-relations-groups-and-rings`) and DT-18
(`the-hopf-degree-theorem`); the out-of-scope rows are the Fundamental Theorem of
Algebra applications, which complex analysis owns.

## Cross-batch dependencies

`research/frontier-38-owner-30-batch-12.cross-batch-dependencies.json` is `[]`:
none of the 25 items or 2 pages has an in-run supplier (all six page-level
`requires` are published out-of-run pages), and no in-run consumer requires this
pair's pages (the DT-12/13/14/15/17 batches depend on published DG/AT pages, not
on order 529). `node tools/frontier-dependency-ledger.mjs refresh --run
frontier-38-owner-30` was run after writing the input: the unified ledger lists
batch 12 among the reviewed batches, 7 edges overall (none involving batch 12),
0 orphaned reviews; the unreviewed batches are other concurrent batches (11, 13,
17, 20, 26, 27, 4, 8) and are not this batch's work.

## Checks run (actual results)

- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-12.pages.json`
  → 25 item(s), 0 missing, 0 error(s).
- Whole-run `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-*.pages.json`
  → 659 item(s), 0 missing, 0 error(s) (run over all then-current batch
  manifests; the count moves while other batches are still being scaffolded).
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-12.pages.json`
  → 25 scoped item(s), 0 error(s), 0 warning(s); whole-run form over all batch
  manifests → 659 scoped item(s), 0 error(s), 0 warning(s).
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-12.coverage.json --require-destination`
  → 2 page(s), 51 harvested result(s), 0 error(s), 0 warning(s).
- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-12.coverage.json --stamp`
  → 6/6 source(s) fetch-verified (6 newly stamped); check mode → 6/6 resolved.
- `node tools/url-sweep.mjs --coverage research/frontier-38-owner-30-batch-12.coverage.json --out /tmp/batch12-url-liveness.json --recover --fail-on-dead`
  → 3/3 live, 0 failed, 0 recoverable, exit 0.
- `node tools/step1-decisions.mjs check --run frontier-38-owner-30` → 624 item(s),
  596 ready at the time of writing; the remaining work rows are empty-scaffold
  inventories and item rows of other, still-running batches (the run-wide item
  count had grown to 659 by the final re-check as concurrent batches landed);
  **0 rows mention a batch-12 page or item** in either reading.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` → exit 1
  at the time of writing with 14 error lines, **all** of them
  `empty scaffold inventory` for other batches' pages; 0 errors mention a batch-12
  item, so the batch-12 labels match the recomputed levels.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (declared page
  order acyclic and consistent; 289 planned pages elsewhere still carry no item
  list — none of them is a batch-12 page).
- `node tools/manifest-integrity.mjs --run frontier-38-owner-30` → 60 page(s)
  owed, 60 in the manifests, no scope drift.
- `node tools/drift-review-check.mjs --run frontier-38-owner-30` → 30 page(s)
  reviewed, 6 spec edits applied, no blocked edges, all owed pages above 95%
  published-or-earlier-in-run.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
  → refreshed and deduplicated; batch 12 input reviewed (empty), 0 orphaned.
  The gate form with `--require-reviewed` currently exits 1 with "Cross-batch
  review incomplete": other concurrently running batches have not yet written
  their inputs and 3 of the 7 run-wide edges have no review row. Batch 12's own
  input is present and empty, which is valid because the batch declares no
  cross-batch edge; the join is a whole-run gate, not a batch-12 defect.
- `node tools/extcheck.mjs` → exit 0; its 40 `unproved-on-published` warnings are
  pre-existing published remarks elsewhere in the corpus (Hahn–Banach,
  Carleson–Hunt, Moore spaces, word problem), none in differential topology and
  none touched by this batch.

## Unresolved findings and honest uncertainty

1. **Hirsch not readable here** (details in §1.2 above): the design's H locator is
   unverified; the pair is backed instead by three other full treatments. This is
   recorded as a source uncertainty for owner reconciliation, not a claim of
   permanent unavailability.
2. **Trace-sign convention** (see the audit section): the A9 sign relation must be
   checked at Step 3 against the normal-first convention; the manifest gives the
   conventions and the exact source locators (GP p. 108, Milnor Lemma 1) so the
   check is mechanical but load-bearing.
3. **Levels and readiness are provisional**: readiness records are hash-bound to
   the current manifest; any later manifest edit by another writer invalidates
   them mechanically, and Step 3 provides the mathematical review. This batch
   records no independent approval.

## Step 3b closure addendum (pair author, 2026-10-03)

- **Hirsch uncertainty**: unchanged as a source note. The authored pair is
  backed throughout by the three full texts whose local hashes were re-verified
  against the coverage stamps in this pass (GP `e4d815443ae77128`, Milnor
  `2c3b7412deda8aa9`, Stanford 215B `7ac76c813f493ed7`); every citation quote is
  mechanically checked against the cited item by the strict contract, and no
  item in the pair rests on an unverified locator.
- **Trace-sign convention (finding 2)**: resolved in
  `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs`. The
  trace is parametrized `[0,1]×X` with the library product boundary orientation
  (matching `prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary`);
  the outward-normal-first boundary signs are `ε_W = −ε_{F_0}` at `t=0` and
  `ε_W = +ε_{F_1}` at `t=1`, giving `Σ_{∂W} ε_W = I(F_1,Z) − I(F_0,Z)`, which
  the oriented invariance theorem consumes against the vanishing signed
  boundary count. This is repair #4 (refresh #2) plus the AF-9 reconciliation in
  the Step 3b report.
- **Provisional levels (finding 3)**: verified after all Step 3b dependency
  additions; `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
  exits 0 with every one of the 25 manifest labels equal to the recomputed level.
- **Readiness records**: the manifest was edited during Step 3b (two statements
  in the B-page examples, four dependency lists) and the current Step 3 evidence
  is the scope receipt refresh #3 (sha256 `f1c4833e…`) in
  `research/frontier-38-owner-30-step3a-review-oriented-and-mod-two-intersection-numbers.json`,
  plus the 25 item decision receipts and the handoff section of
  `research/frontier-38-owner-30-step3b-pair-oriented-and-mod-two-intersection-numbers.md`.
