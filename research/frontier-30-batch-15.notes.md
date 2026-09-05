# frontier-30 / Beta / batch-15 notes -- `distributions-integral-manifolds-and-the-frobenius-theorem`

Run `frontier-30`, batch `15`, one A/B pair, category `differential-geometry`.
Author: Beta. Session date: Saturday, September 5, 2026 (Australia/Sydney).

Artifacts owned by this batch at scaffold stage:

- `research/frontier-30-batch-15.pages.json`
- `research/frontier-30-batch-15.coverage.json`
- this file

Per the batch brief, I edited only those three scaffold artifacts.

---

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `WORKFLOW.md`, `SCHEMA.md`, the
dispatch prompt `research/frontier-30-dispatch/beta-batch-15.prompt.md`, the
generated task `research/frontier-30-beta-15.task.md`, the seed manifest
`research/frontier-30-batch-15.pages.json`, the controlling design block in
`research/plan-differential-geometry-track.md` at `DG-10`, the live plan
entries in `research/plan-spec.json`, and the already-published prerequisite DG
pages `tangent-cotangent-and-the-differential`,
`rank-theorems-and-embedded-submanifolds`,
`smooth-vector-bundles-and-sections`,
`euclidean-ordinary-differential-equations-with-smooth-dependence`, and
`vector-fields-flows-and-lie-derivatives`.

I also checked live autopilot state with:

- `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`

On current disk that reports **`frontier-23`** in stage `5-author`, not
`frontier-30`. Because workflow state is out of scope and this dispatch
explicitly assigns `frontier-30`, I edited only the three
`research/frontier-30-batch-15.*` scaffold artifacts and did not steer
`.autopilot/`.

## 2. Controlling design and design/spec drift

### Controlling design material

For this pair the controlling design material is
`research/plan-differential-geometry-track.md` section `DG-10`, including the
item inventory at lines `2537-2675` and the source/proof-strategy notes at
lines `2677-2721`.

### Design/spec drift recorded, not adjudicated

There is **no order drift**:

- the design gives `461/462`
- `research/plan-spec.json` gives `461/462`

There are **two literal design/spec mismatches** that I recorded here and then
followed the spec for:

1. **B-page id drift.**
   The design table and `DG-10` prose still name the companion as
   `distributions-and-foliations-examples`, while the live spec and this
   dispatch both name
   `distributions-integral-manifolds-and-the-frobenius-theorem-examples`.
   I kept the spec id.

2. **Prerequisite wording drift.**
   The design prose says DG-10 requires `DG-3`, `DG-4`, `DG-5`, `DG-8`,
   `DG-9`, and also the published page
   `inverse-and-implicit-function-theorems`, whereas the live spec lists only
   the five DG prerequisite pages. I did not add or remove plan edges locally.
   The scaffold follows the spec closure and records the difference here for
   the drift stage.

## 3. Scaffold shape and split check

The scaffold now has:

- `distributions-integral-manifolds-and-the-frobenius-theorem` (A): **38 items**
- `distributions-integral-manifolds-and-the-frobenius-theorem-examples` (B): **10 items**

The A page is below the `60`-item split threshold, so **no split is proposed**.

## 4. Route choices

The manifest follows the design route closely.

1. It begins with distributions as **smooth vector subbundles of `TM`**, not
   as arbitrary pointwise families with suppressed regularity.
2. It keeps integral manifolds **injectively immersed** and explicitly separates
   their intrinsic manifold topology from the subspace topology on the image.
3. It isolates the algebraic closure facts the proof needs before Frobenius:
   local frame characterization, locally free section module, annihilator
   bundle, double annihilator, dimension control, and local-diffeomorphism
   transport.
4. It keeps **integrable** and **involutive** as separate notions, proves the
   necessity direction first, then decomposes the sufficiency proof through
   frame reduction and the commuting-flow coordinate lemma.
5. It builds the global theorem from **flat charts and plaques** rather than
   pretending a reachability class already has the right topology.
6. It ends with maximal leaves, regular foliation atlases, the foliation /
   integrable-distribution correspondence, and the initial-property statement
   for leaf factorizations.

Important negative decisions, all required by the design:

- I did **not** add the Pfaffian or codimension-one differential-form criteria
  here. `DG-12` owns them after exterior derivative exists.
- I did **not** fold singular distributions or the Stefan-Sussmann orbit theorem
  into regular Frobenius. The design explicitly separates them.
- I did **not** weaken integral manifolds to embedded images or subspace
  topology statements. The dense irrational torus leaf is one of the page's
  intended traps.

## 5. Dependency closure decisions

The current library already exposes the exact prerequisite interfaces this page
needs from earlier DG pages:

- vector-subbundle and local-frame machinery from
  `smooth-vector-bundles-and-sections`
- immersed/embedded submanifold and regular-level-set machinery from
  `rank-theorems-and-embedded-submanifolds`
- tangent/cotangent bundle and differential machinery from
  `tangent-cotangent-and-the-differential`
- flow box, commuting flows, related brackets, and Lie-bracket product rules
  from `vector-fields-flows-and-lie-derivatives`

So no extra A-page prerequisite theorem had to be minted outside the design's
inventory.

The only batch-local decompositions are source-faithful refinements of the
named Frobenius results:

- `def-flat-chart-for-a-distribution`
- `def-plaque-of-a-flat-chart`
- `lem-integral-manifolds-are-locally-contained-in-plaques`
- `lem-overlapping-plaques-through-a-point-have-compatible-germs`

Those are not padding. They are the intermediate facts the global leaf
construction genuinely uses and the design explicitly calls for.

## 6. Source set actually recorded

I recorded three verified source rows for the A page:

1. John M. Lee, *Introduction to Smooth Manifolds*, 2nd ed.:
   `https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=w4bhBwAAQBAJ`
2. Will J. Merry, *Differential Geometry*:
   `https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf`
3. Keith Conrad, *Local and global Frobenius theorems*:
   `https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf`

This satisfies the standing source rule:

- Lee is the primary textbook treatment with a harvestable chapter contents
  view for exactly the DG-10 route.
- Merry is the independent full lecture-note treatment covering the detailed
  local/global theorem route.
- Conrad is an independent course-note treatment of the subbundle language and
  the local/global Frobenius statements, plus the Lie-subalgebra leaf example
  that the design wants on the B page.

What each source is doing:

- **Lee** supplies the textbook chapter structure: tangent distributions,
  involutivity, Frobenius, PDE boundary, and foliations.
- **Merry** supplies the detailed named definitions, lemmas, local theorem,
  global theorem, and the standard contact counterexample.
- **Conrad** supplies the local-free module framing, the alternative
  subbundle/integral-manifold phrasing, and the independent local/global
  theorem statements.

## 7. Convention and source-side corrections

Two convention issues matter enough to record explicitly.

1. **The page keeps the design's split between `integrable` and `involutive`.**
   Merry's Definition `14.9` and Conrad's Definition `2.3` use the
   bracket-closure notion as the main definition, with Merry even remarking
   that some authors call it `involutive`. The scaffold does not adopt that
   source terminology. Here:
   - `def-involutive-distribution` is bracket closure, and
   - `def-integrable-distribution` means full-dimensional integral manifolds
     through every point.

   The necessity theorem then proves `integrable => involutive`, matching the
   design.

2. **Lee's accessible Google Books preview is contents-level, not proof-level.**
   I still recorded it because the design explicitly wants Lee as the primary
   textbook treatment and the chapter headings are visible live. The detailed
   theorem/lemma harvest therefore comes from Merry and Conrad, not from a fake
   claim that the limited preview exposed the whole chapter text.

I also retained the design's standing distinctions:

- leaves need not be embedded;
- a leaf's manifold topology need not be its subspace topology;
- singular variable-rank families are not called smooth distributions here;
- the contact distribution is the standard nonintegrable counterexample; and
- Pfaffian criteria wait for exterior derivative.

## 8. B-page scope decisions

I kept the full ten-item B-page list from the design, including:

- the irrational torus foliation and Mobius-band foliation for topology traps,
- the standard contact-plane counterexample and the variable-rank singular
  counterexample for the false-statement boundary, and
- the Lie-subalgebra leaf example as the forward bridge to the later Lie block.

No extra Lie-group A item was minted here. The bridge remains an example rather
than a premature DG-25 theorem.

## 9. Fetch verification and source-liveness handling

I re-opened all three recorded sources in the web reader and wrote manual
`fetch_verified` receipts of the form

`{ at, kind, verified_via: "web-open", note }`

onto each source row. The exact UTC timestamp used in those receipts is
`2026-09-04T14:40:37Z`.

This workspace's shell network is restricted, so I did not obtain local byte
stamps with `source-fetch-check --stamp`. The manual receipts are therefore the
honest harvest-time evidence, and the local mechanical gate was run in
non-stamping mode after the edit.

## 10. Validator results

Batch-local green:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-15.coverage.json`
  -> `coverage-checklist: 1 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-15.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-15.pages.json`
  -> `content-policy: 48 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> final line `OK -- declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`

Whole-run manifest-only policy is currently red for another batch on disk:

- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  -> `content-policy: 526 scoped item(s), 34 error(s), 0 warning(s)`

All 34 reported errors come from `research/frontier-30-batch-16.pages.json`,
not from batch 15. The failing ids are Lie-theory items such as
`def-central-character-of-a-lie-algebra-module`,
`def-quadratic-casimir-element`, and `def-harish-chandra-projection`, each
depending on PBW / enveloping / root-theoretic suppliers that are neither on
disk nor declared by that foreign batch. Because this dispatch authorizes only
batch 15, I left that whole-run blocker recorded but untouched.

Local URL-liveness blocker:

- `node tools/url-sweep.mjs --coverage research/frontier-30-batch-15.coverage.json --out /tmp/frontier-30-batch-15.url-sweep.json --recover --fail-on-dead`
  -> `url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect`

Exact shell failures on this runner:

- `https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=w4bhBwAAQBAJ`
  -> `curl: (6) Could not resolve host: books.google.com`
- `https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf`
  -> `curl: (6) Could not resolve host: math.stanford.edu`
- `https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf`
  -> `curl: (6) Could not resolve host: www2.math.ethz.ch`

This is a **local DNS/network blocker**, not evidence that the sources are dead:
all three URLs were successfully re-opened in the web reader during this
dispatch and carry honest manual `fetch_verified` receipts. I therefore did not
re-source the page onto different treatments merely to respond to a shell-level
resolver failure.

## Step-3 fix pass

Reviewed `research/frontier-30-alpha-d-step3-scaffold-review.md` on Saturday,
September 5, 2026.

- Finding ids for batch `15`: none recorded.
- Disposition: explicit no-op. I did not edit the DG-10 manifest or coverage
  because the group-`d` review marks the pair `sufficient`, and its batch-15
  section records no scaffold defect to repair.
- Evidence: the sole batch-15 standing scope-decision row in
  `research/frontier-30-alpha-d-scope-decisions.json`,
  `8b30edf66ae68df4003cd503896744bf84677f633a564eabc2d1ab702eeb9616`,
  still stands on current bytes. Its out-of-scope Lee heading
  `Applications to Partial Differential Equations` matches both the coverage
  row in `research/frontier-30-batch-15.coverage.json` and the DG-10 design
  boundary that leaves Pfaffian and PDE applications to DG-12 and the PDE
  track.
- Evidence: `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-15.coverage.json`
  returned `coverage-checklist: 1 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-15.coverage.json`
  returned `source-fetch-check: 3/3 source(s) fetch-verified`.
- Evidence: `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  returned `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/validate-plan.mjs research/plan-spec.json` exited `0`
  and ended with `OK`; only the repository's standing out-of-batch
  `[redundant-prereq]` advisories remain.
- Evidence: I re-opened all three recorded source URLs in the web reader on
  Saturday, September 5, 2026: the Lee Google Books preview, Merry's ETH notes
  PDF, and Conrad's Stanford handout PDF. No URL recovery, harvest rewrite, or
  disposition change was required for this fix pass.
- Changed scaffold record: no change to `research/frontier-30-batch-15.pages.json`.
- Changed scaffold record: no change to `research/frontier-30-batch-15.coverage.json`.
- Changed scaffold record: appended this Step-3 fix-pass receipt in
  `research/frontier-30-batch-15.notes.md`.

## Scaffold-fix round

### SC15-1

- Disposition: **applied; insufficiency closed.**
- Evidence:
  - `research/frontier-30-scaffold-closure.json` records one batch-15 closure
    row for
    `distributions-integral-manifolds-and-the-frobenius-theorem`: add an
    earlier declared route to `the-seifert-van-kampen-theorem` for
    `def-two-dimensional-torus`, or reroute/remove that dependency from
    `ex-irrational-linear-foliation-of-the-two-torus`.
  - `research/frontier-30-alpha-d-recheck.md` on Saturday, September 5, 2026
    re-derived the same blocker from the merged-plan check: the B page still
    declared only its companion A page in `requires`, while
    `ex-irrational-linear-foliation-of-the-two-torus` depends on the published
    item `def-two-dimensional-torus`.
  - On current disk, `items/def-two-dimensional-torus.md` is
    `status: published`, and `library/topology/the-seifert-van-kampen-theorem.md`
    still homes that item on the topology A page
    `the-seifert-van-kampen-theorem` at order `297`, which is strictly earlier
    than the batch-15 B page at order `462`.
  - Because the retained example still honestly uses that published torus
    carrier, the minimal repair is page-level closure, not a duplicate local
    torus item and not a source rewrite.
  - I re-opened the three recorded DG-10 sources in the web reader on
    Saturday, September 5, 2026: Lee's Google Books contents page, Merry's ETH
    lecture-note PDF, and Conrad's Stanford Frobenius handout PDF. Their URLs
    still resolve in the reader, and no harvest row needed recovery or
    replacement.
  - After the manifest edit, the required gates reran cleanly:
    `coverage-checklist` still reports `31` harvested results with `0` errors,
    `source-fetch-check` still reports `3/3` fetch-verified sources,
    whole-run `content-policy --manifest-only research/frontier-30-batch-*.pages.json`
    reports `694` scoped items with `0` errors, and
    `node tools/validate-plan.mjs /tmp/frontier-30-batch-15-merged-plan.json`
    now ends in the standard `OK` line for `700` pages with item lists instead
    of the earlier `undeclared-prereq` failure.
- Change:
  - `research/frontier-30-batch-15.pages.json`: added
    `the-seifert-van-kampen-theorem` to
    `distributions-integral-manifolds-and-the-frobenius-theorem-examples`
    `requires`, preserving the existing dependency from
    `ex-irrational-linear-foliation-of-the-two-torus` to the published
    `def-two-dimensional-torus`.
  - `research/frontier-30-batch-15.coverage.json`: no change. No new scaffold
    item was added, so no new harvest row, locator, or `fetch_verified` block
    was owed; the repair consumes an already published item with its own source
    backing.
  - `research/frontier-30-batch-15.notes.md`: appended this scaffold-fix round
    record.

## Step-5 authoring

- Authored page files:
  `library/differential-geometry/distributions-integral-manifolds-and-the-frobenius-theorem.md`
  and
  `library/differential-geometry/distributions-integral-manifolds-and-the-frobenius-theorem-examples.md`.
- Authored all `48` batch-owned item files under `items/`, all kept
  `status: draft`:
  A-page definitions
  `def-smooth-distribution-on-a-manifold`,
  `def-vector-field-tangent-to-a-distribution`,
  `def-annihilator-bundle-of-a-distribution`,
  `def-integral-manifold-of-a-distribution`,
  `def-integrable-distribution`,
  `def-involutive-distribution`,
  `def-flat-chart-for-a-distribution`,
  `def-plaque-of-a-flat-chart`,
  `def-leaf-equivalence-relation-of-an-integrable-distribution`,
  `def-regular-foliation-atlas`,
  `def-leaf-of-a-regular-foliation`;
  proof-bearing A-page items
  `prop-local-frame-characterization-of-a-smooth-distribution`,
  `prop-sections-of-a-distribution-form-a-locally-free-module`,
  `prop-double-annihilator-recovers-a-finite-rank-distribution`,
  `prop-integral-manifolds-have-the-distribution-dimension`,
  `prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds`,
  `prop-involutivity-can-be-checked-on-a-local-frame`,
  `prop-integrable-distributions-are-involutive`,
  `lem-involutive-frame-reduction`,
  `lem-commuting-independent-vector-fields-give-a-coordinate-system`,
  `thm-frobenius-local-coordinate-theorem`,
  `cor-frobenius-local-first-integrals`,
  `cor-kernel-of-a-constant-rank-submersion-is-integrable`,
  `prop-level-set-distributions-are-involutive`,
  `lem-integral-manifolds-are-locally-contained-in-plaques`,
  `lem-overlapping-plaques-through-a-point-have-compatible-germs`,
  `lem-tangent-curve-reachability-is-an-equivalence-relation`,
  `thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds`,
  `cor-maximal-integral-manifolds-partition-the-manifold`,
  `thm-regular-foliations-and-integrable-distributions-correspond`,
  `prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution`,
  `prop-embedded-leaves-need-not-be-closed-and-leaves-need-not-be-embedded`,
  `fs-every-constant-dimensional-family-of-tangent-subspaces-is-a-smooth-distribution`,
  `fs-every-smooth-distribution-is-integrable`,
  `fs-involutivity-can-be-tested-on-the-pointwise-bracket-of-tangent-vectors`,
  `fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold`,
  `fs-the-subspace-topology-on-a-leaf-is-always-its-manifold-topology`,
  `fs-frobenius-applies-to-any-variable-rank-family-of-subspaces`;
  B-page items
  `ex-coordinate-plane-distribution-and-its-affine-leaves`,
  `ex-kernel-of-a-submersion-as-an-integrable-distribution`,
  `ex-level-set-foliation-of-a-regular-function`,
  `ex-product-foliation`,
  `ex-orbit-circles-of-rotation-as-a-foliation-away-from-the-origin`,
  `ex-irrational-linear-foliation-of-the-two-torus`,
  `ex-the-mobius-band-line-foliation`,
  `cex-the-standard-contact-plane-field-is-not-integrable`,
  `cex-a-variable-rank-involutive-family-outside-regular-frobenius`,
  `ex-leaves-of-a-lie-subalgebra-distribution`.
- Authored the required batch proof-contract file:
  `research/frontier-30-batch-15.proof-contracts.json`
  with scope `37` proof-bearing items, regenerated citations/derivations from
  the final on-disk item text, and completed all eight boundary rows per item.
- Provenance rationale kept truthful:
  standard definitions and named Frobenius results are tagged
  `literature-derived` at statement level; the local proofs/verifications and
  refutations written here are tagged `ai-generated`; the boundary false
  statements and a few witness formulations adapted to this library's wording
  are tagged `ai-altered`.
- Narrowed claim:
  `prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds`
  is written on an open set where the local diffeomorphism is actually a
  diffeomorphism onto its image, because global composition with an arbitrary
  local diffeomorphism need not preserve injectivity of an integral-manifold
  immersion.
- Narrowed claim:
  `prop-embedded-leaves-need-not-be-closed-and-leaves-need-not-be-embedded`
  is witnessed by an explicit spiral foliation on an annulus and the standard
  irrational linear torus foliation, rather than by a broader classification
  claim about all leaf pathologies.
- Dropped claims: none.
- Blockers: none on the authored batch scope.
- Checks run on Saturday, September 5, 2026 (Australia/Sydney):
  `node tools/tsx-run.mjs tools/precheck.mts <37 proof-bearing batch items>`
  -> `37 checked, 0 failing — all clean`.
- Checks run:
  `node tools/content-policy.mjs research/frontier-30-batch-15.pages.json`
  -> `content-policy: 48 scoped item(s), 0 error(s), 0 warning(s)`.
- Checks run:
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> exited `0` and ended with `OK`; only standing repository-wide
  `[redundant-prereq]` advisories remain.
- Checks run:
  `node tools/proof-contract.mjs research/frontier-30-batch-15.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 37/37 item(s) checked`.
