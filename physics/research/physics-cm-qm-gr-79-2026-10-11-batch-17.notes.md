# Batch 17 notes — `cm01-framework-quantities-and-geometry` / `cm01-framework-quantities-and-geometry-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-17, covers 17.
Step 1 complete initial authoring only; no readiness record is independent
mathematical approval (Step 3 review follows).

## Scope built

- A page `cm01-framework-quantities-and-geometry` (order 113, category
  `non-relativistic-classical-mechanics`, `library: physics`), 8 items:
  3 postulates (`post-cm01-spacetime`, `post-cm01-frames`,
  `post-cm01-worldlines`), 3 physics-domain definitions (`def-cm01-units`,
  `def-cm01-configuration`, `def-cm01-velocity-acceleration`), 1 physics
  theorem (`pthm-cm01-galilean-kinematics`) and 1 remark
  (`rem-cm01-model-limit`). This is the design's contract
  `cm01-spacetime(P1), cm01-frames(P2), cm01-worldlines(P3), cm01-units(def),
  cm01-configuration(def), cm01-velocity-acceleration(def),
  cm01-galilean(pthm), cm01-model-limit(rem)`, kept in the design's order.
- B page `cm01-framework-quantities-and-geometry-examples` (order 114), 6 leaf
  items: 5 examples (`ex-cm01-galilean-boost-of-a-free-motion`,
  `ex-cm01-rotating-basis-of-a-free-motion`,
  `ex-cm01-two-particle-rigid-rod-configuration`,
  `ex-cm01-dimension-bookkeeping`,
  `ex-cm01-worldline-parameter-condition`) and 1 counterexample
  (`cex-cm01-coordinate-velocity-is-frame-dependent`). Nothing outside the
  pair depends on them.
- Category `library/non-relativistic-classical-mechanics/` created with
  `_category.md` (`library: physics`); no `_pathway.md` is created here (the
  pathway is a closeout artifact; its absence is a warning, not an error).
- Page `requires`, order, kind, category, library, companion and titles are
  unchanged from the plan record; the only edits to the manifest are the two
  `items` arrays and the `dependency_level` labels computed mechanically from
  the in-run graph (see below).

## Dependency graph, levels and construction order

Authored in prerequisite order; each item built once. In-run levels (as
computed by `tools/physics-support/item-dependency-levels.mjs` over the run
manifests including this batch, and recorded in the manifest):

| item | level | in-run suppliers |
|---|---|---|
| `def-cm01-units` | 1 | `def-cm-affine-time-space` (batch 1) |
| `post-cm01-spacetime` | 3 | `def-cm-affine-time-space`, `lem-cm-adapted-charts-and-galilean-transformations` |
| `post-cm01-frames` | 4 | `post-cm01-spacetime`, `def-cm-affine-time-space`, `lem-cm-adapted-coordinates-exist-and-are-unique` |
| `post-cm01-worldlines` | 5 | `post-cm01-frames`, `lem-cm-adapted-charts-and-galilean-transformations` |
| `def-cm01-configuration` | 6 | `post-cm01-worldlines`, `def-cm-constrained-configuration-and-mass-metric` |
| `def-cm01-velocity-acceleration` | 6 | `post-cm01-worldlines`, `lem-cm-adapted-charts-and-galilean-transformations`, `lem-cm-adapted-coordinates-exist-and-are-unique` |
| `pthm-cm01-galilean-kinematics` | 7 | `post-cm01-worldlines`, `def-cm01-velocity-acceleration`, `lem-cm-adapted-charts-and-galilean-transformations`, `lem-cm-so3-is-a-matrix-group` |
| `rem-cm01-model-limit` | 8 | all of the above |
| `ex-cm01-galilean-boost-of-a-free-motion` | 8 | `pthm-cm01-galilean-kinematics`, `def-cm01-velocity-acceleration` |
| `ex-cm01-rotating-basis-of-a-free-motion` | 8 | `def-cm01-velocity-acceleration`, `pthm-cm01-galilean-kinematics`, `lem-cm-moving-frame-acceleration-identity` |
| `cex-cm01-coordinate-velocity-is-frame-dependent` | 9 | `ex-cm01-galilean-boost-of-a-free-motion`, `pthm-cm01-galilean-kinematics` |
| `ex-cm01-two-particle-rigid-rod-configuration` | 7 | `def-cm01-configuration`, `def-cm-constrained-configuration-and-mass-metric` |
| `ex-cm01-dimension-bookkeeping` | 8 | `pthm-cm01-galilean-kinematics`, `def-cm01-configuration` |
| `ex-cm01-worldline-parameter-condition` | 6 | `post-cm01-worldlines`, `lem-cm-adapted-charts-and-galilean-transformations` |

`node tools/physics-support/item-dependency-levels.mjs check --run
physics-cm-qm-gr-79-2026-10-11` reports **no finding for any of these 14
items**; the remaining errors of that run belong to other batches' empty
scaffold inventories (`cm-math-dynamics`, `qm-*`, `gr-*`, ...). No
dependency cycle, forward edge or missing supplier was introduced; every
in-run supplier is on `cm-math-geometry` (order 81) or on this page.

## Design versus plan-spec, and how the design's local sections were delivered

- `research/plan-spec.json`, the generated batch manifest and
  `research/plan-non-relativistic-classical-mechanics-track.md` L437 agree on
  page id, title, orders 113/114, category, library, companion and the
  `requires` list (`cm-math-geometry`). No page-edge or order conflict to
  record.
- The design's supplier list for this page names five published canonical
  items and the local mathematical sections `E1`, `M1`. Dispositions:
  - `M1` ("affine time, Euclidean slices, curves and Galilean
    transformations") is homed on `cm-math-geometry` and was delivered by
    batch 1 as `def-cm-affine-time-space`,
    `lem-cm-adapted-coordinates-exist-and-are-unique`,
    `lem-cm-adapted-charts-and-galilean-transformations` and
    `lem-cm-moving-frame-acceleration-identity`. This batch consumes those
    items (declared `deps`; not re-authored).
  - `E1` is likewise homed on `cm-math-geometry` (batch 1). Its
    regular-`SO(3)` and stabilizer content is not needed here; the parts of it
    that this page needs (`def-euclidean-inner-product` and
    `thm-a-regular-level-set-is-an-embedded-submanifold`) are used directly
    and declared.
  - Of the five named published suppliers,
    `def-euclidean-inner-product` and
    `thm-a-regular-level-set-is-an-embedded-submanifold` are direct `deps`;
    `thm-chain-rule-for-total-derivatives` and `def-cross-product-in-r3`
    enter transitively through the batch-1 items; `def-countable-choice` is
    not in the closure of any item of this batch (its use in `E1`'s
    regular-`SO(3)` compactness argument belongs to batch 1's carriers, which
    are the ones that state the choice cost).
- No new local mathematical item was needed: every physical claim of the pair
  is either an adopted postulate, a definition, a verification on explicit
  data, or a deduction from a batch-1 item whose statement and proof were
  read. No item of the pair depends on a physical item for a mathematical
  result.

## Sources, harvest and fetch status

All external suppliers of the physical claims are the four complete
treatments of the design plus Lee for the regular-level theorem:

1. D. Tong, *Classical Dynamics* (author-hosted complete PDF), §1.2 pp. 2-5,
   §1.3 pp. 5-9, §3.1.1 pp. 47-49; fetched and stamped (1 093 743 bytes,
   sha256_16 `b65ba2b0399df6b0`, 139 pages — the same bytes as the reader
   copy preserved by the source research).
2. D. Tong, *Dynamics and Relativity* (author-hosted complete PDF),
   §1.1-§1.2.1 pp. 2-7, §1.3-§1.4 pp. 8-10, §6.1-§6.2 pp. 93-95; fetched and
   stamped (1 245 028 bytes, sha256_16 `a741d3efc098467d`, 166 pages).
3. K. K. Likharev, *Essential Graduate Physics, CM* (complete 252-page
   volume), §1.1-§1.2 chapter pp. 1-3; fetched and stamped.
4. Sussman and Wisdom, *Structure and Interpretation of Classical Mechanics*,
   2nd ed., §1.1-§1.2 and §1.4; fetched and stamped (official publisher
   archive).
5. J. M. Lee, *Introduction to Smooth Manifolds* (2003), Level Sets
   pp. 104-105; fetched and stamped.

The coverage file `...-batch-17.coverage.json` records each source's exact
locator, the source's own section/named-result headings over the range read,
and a disposition for every harvested result (25 results, 0 errors,
0 warnings under `coverage-checklist.mjs`); `source-fetch-check.mjs` reports
**8/8 source entries fetch-verified** (0 documented drops).

**Alternate-location recovery (recorded).** The item files initially cited
the departmental copies at `www.damtp.cam.ac.uk`. `source-fetch-check --stamp`
failed on both with `UNABLE_TO_VERIFY_LEAF_SIGNATURE` (an incomplete TLS chain
served to Node's fetch), six attempts per URL (initial failure plus the five
permitted retries, timestamped 2026-10-10T20:26:39Z-20:26:46Z). Per the
retry policy the search moved to alternate locations: the author's own site
serves byte-identical copies (`classical-dynamics/clas.pdf` matches the
reader copy hash `b65ba2b0399df6b0`; `dynamics-and-relativity/dynrel.pdf`
matches the copy read here, `a741d3efc098467d`, 166 pages, text-identical on
every page). The cited URLs were switched to those author-hosted copies and
all eight source entries now carry fetch stamps. The failed departmental
attempts are preserved here and in the working record
`/tmp/b17/damtp-attempts.json`; no source was dropped, so no
`source_resolution` record is required.

## Local closure decisions worth surfacing to reviewers

- **Definitions versus postulates.** `def-cm01-units` is conventions only; it
  asserts no measured value. `def-cm01-configuration` records the
  degree-of-freedom count as the content of the published regular-level
  theorem under its stated nonemptiness and rank hypotheses (the theorem is a
  declared `mathematical-premise` dep, cited inside the Definition, since the
  theorem is an upstream supplier and cannot be a `justified_by` target).
- **The physics theorem** `pthm-cm01-galilean-kinematics` is a conditional
  deduction from P1-P3 and the batch-1 transformation law: clauses 1-2
  instantiate the lemma, clause 3 is its zero-acceleration equivalence in
  model notation, and clause 4 (group closure) is computed from the matrix
  laws and the `SO(3)` closure lemma. It deliberately does **not** identify
  zero coordinate acceleration with the motion of an unforced particle: that
  identification is the dynamics postulate of the next page. The theorem
  therefore carries no empirical content and no conservation claim.
- **Moving basis is not a frame.** The rotating-basis example defines a
  time-dependent orthonormal basis field of $K$ and its coordinate curve, and
  shows (via the contrapositive of clause 3) that it is not an inertial frame.
  It deliberately uses no fictitious-force language: with no force law
  adopted yet, the two extra terms are kinematic coordinate effects. This
  matches the design's "moving chart; no relativity theorem" instruction and
  the frame/observer-congruence distinction required by the content model.
- **No relativity, no dynamics, no empirical claims.** The remark
  `rem-cm01-model-limit` records the primitive/adopted/constructed status of
  the page's objects and the deliberate omissions (force law, conservation,
  gravitation, EM coupling, Lorentz structure, quantum correspondence,
  thermodynamics, measurements).
- **Dimension example.** `ex-cm01-dimension-bookkeeping` verifies the
  dimensional consistency of the page's quantities, frame parameters and
  displayed laws under `def-cm01-units`; it fixes no measured value.

## Checks actually run (on the final carriers)

- `precheck.mts` on all 14 items: **0 failing** (10 checkable; 3 postulates
  pass nonproof structure; definitions/remark have no phase body). Two
  repair rounds were adopted first: every numbered step was put on one line
  and renumbered into the canonical citation-layer scheme
  (`1.1, ..., 2.1, ...`), which is what the normative checker requires.
- `proof-layout.mjs` on the 7 proof-bearing items: `7 items, 37 steps,
  0 defects`.
- `rendercheck.mjs` on the 14 items, the two page files and `_category.md`:
  clean (KaTeX, YAML, wikilink/math nesting).
- `depcheck.mjs` (whole repository): **0 findings attributable to this
  batch** (the two `cm01` lines it prints are the dependency summaries of the
  two pages; the remaining output is pre-existing corpus findings).
- `content-policy.mjs` on the batch manifest: `14 scoped item(s), 0 error(s),
  0 warning(s)`.
- `manifest-deps.mjs` on the batch manifest: `14 item(s), 0 error(s)`.
- `fwdcheck.mjs`: **0 errors for these 14 items** (the run-wide listing marks
  them "inherited" under items resting on later material — a marker inherited
  from published suppliers in the wider corpus's load-bearing forward edges,
  not produced by this batch, which declares no `forward_refs`); `extcheck.mjs`:
  0 findings attributable to this batch.
- `physics-check.mjs` scoped to an overlay root whose only current manifest is
  this batch's: `physics-content: 0 error(s), 14 items checked` (domains,
  dependency roles, physical scope, body requirements and the scoped import
  verification). The run-wide invocation aborts on other batches'
  pre-authoring empty inventories (`Invalid or empty current page in
  physics-cm-qm-gr-79-2026-10-11-batch-10.pages.json`), a run-level blocker
  outside this batch.
- `proof-contract.mjs --strict` on the batch proof contracts: `11/11 items
  checked, 0 error(s), 0 warning(s)` — the 7 proof-bearing items carry
  citations with exact quotes, per-step derivations with stated inputs, and
  the eight boundary dispositions; the 3 postulates carry `physics_review`;
  the remark carries boundary dispositions. `proof-contract-coverage.mjs`
  (overlay root): `14 item(s), 7/7 supplied argument(s) covered`. The
  run-wide invocation aborts on another batch's empty inventory
  (`cm-math-numerical`).
- `coverage-checklist.mjs`: `2 page(s), 25 harvested result(s), 0 error(s),
  0 warning(s)`. `source-fetch-check.mjs`: `8/8 source(s) fetch-verified`.
- `item-dependency-levels.mjs check`: no finding for these 14 items (see
  above); `validate-plan.mjs research/plan-spec.json --run ...` reports
  exactly **one** error on this batch's pages, the missing-requires edge
  escalated below, and no other finding on either of them (a sibling batch's
  `cm-math-rigid-examples` acquired a same-class finding for its own page
  during this batch's authoring window; it is not attributable here).
- Cross-batch review input: `...-batch-17.cross-batch-dependencies.json`
  records all 30 cross-batch consumer edges of this batch (7 supplier items
  of `cm-math-geometry` plus the page edge), each with `status: verified` and
  the evidence actually checked; the unified ledger
  `...-cross-batch-dependencies.json` was refreshed with no orphaned review.
- Readiness records: one per item, recorded after the final carrier edits
  (see the `*-step1-*.json` records).

## Escalation (owner action): one missing `requires` edge

`validate-plan --run` rule 15 requires every page home reached by a current
page's item `deps` to lie in the closure of that page's declared `requires`.
The single finding of this class on this batch is:

| consumer page | missing home page | order | supplier items used | consumer item |
|---|---|---|---|---|
| `cm01-framework-quantities-and-geometry-examples` | `sine-cosine-and-the-definition-of-pi` | 80.7073 | `def-sine-and-cosine-by-power-series`, `thm-sine-and-cosine-derivatives`, `cor-trigonometric-parity-and-pythagorean-identity` | `ex-cm01-rotating-basis-of-a-free-motion` |

The target is a declared `kind: P` page with order far below 114 (a backward
edge; it satisfies `prereq-order` and cannot create a `requires-cycle`), and
the page already appears in the plan as a declared prerequisite of
`cm-math-geometry-examples` (order 82) but not of the A page (order 81) or of
this batch's B page. The dependency is load-bearing: the rotating-basis
example verifies the moving-frame identity on explicit trigonometric data.
No plan, manifest `requires`, engine state or verdict was edited by this
worker. Owner options: (a) add `sine-cosine-and-the-definition-of-pi` to
`cm01-framework-quantities-and-geometry-examples.requires` in `plan-spec.json`
(then re-sync this batch's manifest, which the Step-3 splice requires), or
(b) direct a reformulation of the example on algebraic rotation data, which
would remove the edge at the cost of the clearest worked instance of the
design's "moving chart" instruction. Precedent for (a): the owner
reconciled the identical class of escalation from batch 1 by adding the
required supplier pages to the plan's `requires` lists.

No item is escalated: every item carrier is complete, every prerequisite used
was read at the level of the claim used, and no promised claim was dropped.
The single finding is a plan-metadata declaration gap outside this worker's
write scope, so all 14 readiness records stay `ready` with this page-level
finding open for owner/operator reconciliation.

## Run-level notes for the owner

- The design's page carries no `no_readiness_claim` caveat beyond the
  scaffold's own (removed on authoring); the pair is draft content and
  nothing here is publication or empirical evidence.
- `validate-plan --run` reports exactly one error attributable to this batch
  (the edge above) plus one same-class finding on another batch's
  `cm-math-rigid-examples` page that appeared during the concurrent authoring
  window; the owner reconciliation of batch 1's escalation is present in
  the current plan (`cm-math-geometry.requires` carries the 25 supplier
  pages, `cm-math-geometry-examples.requires` the three B-only pages).
- Pre-existing corpus findings observed but not attributable to this batch:
  large numbers of `published-unaudited` imports, and the wide-corpus
  forward-marker list; none of the affected items is a supplier of this
  batch except transitively through published root mathematics.

## Final refinement pass (after the first verification round)

Three refinements were made after the checks above and every affected check was
re-run; no claim, hypothesis or scope was changed.

1. `def-cm01-units` clause (c) now reads the slice distance $d_{g}$ of the
   adapted-chart definition explicitly ("the slice distance $d_{g}$ of
   [[def-cm-affine-time-space]] between simultaneous events is read in
   metres") instead of the loose earlier phrasing. Wording only.
2. `pthm-cm01-galilean-kinematics` and
   `ex-cm01-rotating-basis-of-a-free-motion` now declare
   `thm-chain-rule-for-total-derivatives` as a `mathematical-premise` dep and
   cite it through the new facts [L5] / [L7] at their differentiation steps,
   so that the only analytic tool used implicitly before (the chain rule for
   the affine/linear inner map) is an explicit, quoted prerequisite. The
   supplier's home page (`the-total-derivative`) is already inside the closure
   of `cm-math-geometry.requires`, so this adds no plan edge.
3. `def-cm01-velocity-acceleration` declares `post-cm01-frames` as a
   formulation prerequisite (its clause (e) cites it), and
   `cex-cm01-coordinate-velocity-is-frame-dependent` declares
   `post-cm01-spacetime` (its Statement names the model). These close the
   three `cited-not-in-deps` warnings `depcheck` reported on this batch; the
   final `depcheck` run reports **0 findings** for all 14 items. The citation
   of the physics theorem inside the definition was reworded to a link-free
   forward mention, because a `dep` edge from the definition to the theorem
   would have been circular (the theorem depends on the definition).

Re-run results on the final carriers: `precheck` 10 checked, 0 failing;
`proof-layout` 7 items, 37 steps, 0 defects; `rendercheck` clean;
`depcheck` 0 findings for this batch; `fwdcheck` 0 errors and 0 warnings for
this batch; `extcheck` 0 errors; `content-policy` 14/0/0; `manifest-deps`
14/0; `proof-contract --strict` 11/11 items, 0 errors, 0 warnings;
`proof-contract-coverage` 7/7; `physics-check` (overlay) 0 errors,
14 items; `item-dependency-levels check` no finding for these 14 items;
`coverage-checklist` 25 results 0 errors 0 warnings; `source-fetch-check`
8/8 fetch-verified. The 14 readiness records were re-recorded where their
input closure changed (6 records; the other 8 were already current and the
recorder correctly refused to rewrite them); `step1-decisions check` reports
**0 work items for `cm01`**. The cross-batch ledger was refreshed again with
all 30 batch-17 consumer edges reviewed and no orphaned review.
