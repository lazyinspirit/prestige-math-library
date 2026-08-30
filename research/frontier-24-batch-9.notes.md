# frontier-24 · Beta · batch-9 notes — `smooth-partitions-of-unity-and-exhaustions` and `tangent-cotangent-and-the-differential`

Run `frontier-24`, batch `9`, two A/B pairs, category `differential-geometry`.
Author: Beta. Session date: Saturday, August 29, 2026.

Artifacts owned by this batch:
`research/frontier-24-batch-9.pages.json`,
`research/frontier-24-batch-9.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and resulting shape

Design locations opened:

- `research/plan-differential-geometry-track.md` lines `668-854` for DG-2
- `research/plan-differential-geometry-track.md` lines `905-1113` for DG-3

Controlling design calls:

- For `smooth-partitions-of-unity-and-exhaustions`, the controlling design is
  the DG-2 section itself, including its explicit traps about the
  `\mathrm{AC}_\omega` route, the stronger "equal to one on a neighbourhood of
  A" form of smooth Urysohn, and the proper-exhaustion proof by locally finite
  cutoff sums.
- For `tangent-cotangent-and-the-differential`, the controlling design is the
  DG-3 section itself, including its derivations-first route, the Hadamard
  factorization bottleneck, the requirement that the tangent and cotangent
  bundles get their topology from chart transitions, and the warning that the
  cotangent transition is inverse transpose rather than the tangent Jacobian.

Shape after scaffolding:

- `smooth-partitions-of-unity-and-exhaustions` (A): **33 items**
- `smooth-partitions-of-unity-and-exhaustions-examples` (B): **9 items**
- `tangent-cotangent-and-the-differential` (A): **49 items**
- `tangent-cotangent-and-the-differential-examples` (B): **10 items**

Neither A page crosses the 60-item split ceiling, so no split is proposed.

---

## 2. Design-vs-spec drift I did not settle

The dispatch says to record drift and follow `research/plan-spec.json` rather
than adjudicating locally.

### Finding 1 — no order drift

- DG-2 is `445/446` in both the design and `research/plan-spec.json`.
- DG-3 is `447/448` in both the design and `research/plan-spec.json`.

### Finding 2 — DG-2 prerequisite drift is real

The DG-2 design declares:

- `smooth-manifolds-and-smooth-maps`
- `partitions-of-unity-and-paracompactness`
- `compactness`
- `countability-axioms-and-cardinal-functions`
- `the-exponential-function`
- `darboux-lhopital-and-taylor`

The live spec declares only:

- `smooth-manifolds-and-smooth-maps-examples`
- `the-exponential-function`

I followed the spec and did **not** edit the page-level `requires` list inside
this batch. The DG-2 item graph still lands inside the spec's transitive
closure through `smooth-manifolds-and-smooth-maps-examples` and its A-page
prerequisite, so the scaffold remains dependency-closed without locally
resolving the drift.

### Finding 3 — DG-3 prerequisite drift is narrow

The DG-3 design declares:

- `smooth-manifolds-and-smooth-maps`
- `the-total-derivative`
- `dual-spaces-bilinear-forms-and-inertia`
- `the-determinant-of-a-linear-operator`
- `the-fundamental-theorems-of-calculus`

The live spec omits only `the-total-derivative`.

I again followed the spec and left the page-level `requires` list unchanged.
The missing page is already reached transitively through
`smooth-manifolds-and-smooth-maps`, so no local repair of the canonical plan
was necessary or permitted.

### Finding 4 — no hidden page prerequisite surfaced beyond the recorded drift

I did not surface any extra page prerequisite outside the two design-vs-spec
conflicts above. In particular, the DG-3 scaffold does not force any later
rank-theorem or embedded-submanifold page, and the DG-2 scaffold does not force
the general AC+DC paracompact partition theorem as a page prerequisite.

---

## 3. Source choices and coverage boundaries

Only the A pages need harvest ledgers.

### 3.1 Sources actually read and recorded

For DG-2 and DG-3, I used these three treatments:

1. John M. Lee, *Introduction to Smooth Manifolds*:
   `https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC`
2. Will J. Merry, *Differential Geometry*:
   `https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf`
3. Nigel Hitchin, *Differentiable Manifolds*:
   `https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf`
   with original live provenance
   `https://people.maths.ox.ac.uk/joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf`

Why these three:

- Lee is the qualifying textbook treatment with a harvestable contents map for
  the exact chapter/section route the design names.
- Merry is the independent full lecture-note treatment with direct, readable
  text for the tangent-space, derivative, tangent-bundle, and partition-of-
  unity constructions.
- Hitchin is the design-listed independent lecture-note treatment that
  cross-checks the coordinate-free differential language and the partition /
  bundle constructions.

### 3.2 Coverage boundaries I kept explicit

For DG-2:

- I kept the flat-function, Euclidean-bump, chart-bump, locally finite smooth
  sum, normalization, smooth Urysohn, extension, compact exhaustion, and proper
  exhaustion steps as **canonical** scaffold rows, because the sources support
  them but do not expose every one of them as a named theorem heading.
- I kept the published general topological partition theorem only in the DG-2
  remark. The scaffold does **not** duplicate the AC+DC paracompact theorem and
  does **not** claim that its stronger choice cost is inherited by the manifold
  proof.

For DG-3:

- I kept the germ algebra, Hadamard factorization, curve-contact well-
  definedness, the derivation/curve identification, the zero-differential
  connected-component proposition, the tangent-bundle projection, the cotangent
  transition computation, and the product splittings as **canonical** scaffold
  rows for the same reason: they are genuine intermediate results but not all
  source headings name them individually.
- I did **not** use later regular-level-set or embedded-submanifold results to
  support the sphere tangent example or the bundle smooth-structure proofs.

### 3.3 Source repairs and verification status

The first recorded URL set was too fragile for shell-side fetch checks:

- the Lee row used a `123dok` mirror,
- the Merry row used a Scribd mirror, and
- the Hitchin row used the current Oxford URL.

I repaired those URLs on current bytes to:

- a live Google Books contents page for Lee,
- Merry's direct ETH PDF, and
- the full-text Wayback copy of Hitchin already used successfully in earlier
  differential-geometry batch work.

I also re-opened those current URLs through the web reader on Saturday,
August 29, 2026. So the coverage ledger now records only URLs whose contents I
actually opened and read in this dispatch.

---

## 4. Local scaffold decisions

### Decision 1 — DG-2 keeps the full countable-manifold route

The scaffold retains the design's chosen layering:

- flat one-variable function,
- Euclidean bumps,
- chart and manifold bumps,
- locally finite smooth algebra,
- countable relatively compact coordinate covers and shrinkings,
- smooth partitions,
- smooth Urysohn separation and extension,
- compact exhaustions and proper exhaustion functions.

I did not collapse that into one imported partition theorem, because the design
explicitly rejects that shortcut.

### Decision 2 — DG-2 keeps the exact support and properness traps visible

I preserved the two places where the design says wording matters:

- `thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set` is scaffolded in
  the stronger neighbourhood-of-`A` form needed for extension by zero.
- `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function` is
  scaffolded from the locally finite cutoff-sum proof, so properness is forced
  by compact sublevel sets rather than asserted from a picture.

### Decision 3 — DG-3 stays derivations-first, not picture-first

The scaffold defines tangent vectors intrinsically as derivations on smooth
germs, proves the coordinate basis theorem, then introduces curve contact
classes and proves the canonical identification. The bundle constructions come
only after those identifications are in place.

### Decision 4 — DG-3 keeps the bundle and cotangent traps explicit

I retained the exact route the design chose:

- the tangent-bundle disjoint union carries no automatic topology,
- the smooth structure is generated from the induced bundle charts,
- the cotangent transition law is inverse transpose,
- the global differential is a smooth bundle map, not merely a pointwise family
  of linear maps.

### Decision 5 — no foreign B-page dependency was introduced

The example pages use only their own A-page results and earlier A-page
prerequisites. I did not route any example through an earlier B page, so the
batch stays clear of the `b-leaf` failure class that `validate-plan` enforces.

---

## 5. Known limits and caution points

- The Lee row is a textbook contents-map witness rather than the sole detailed
  proof witness. The detailed live mathematics in this pass is carried by Merry
  and Hitchin.
- Several core intermediate results on both A pages are recorded in the
  coverage ledger as `canonical` rows because the sources support them without
  exposing each one as a separately named theorem heading.
- The DG-2 design names `darboux-lhopital-and-taylor` as a prerequisite but the
  live spec does not. I did not resolve that drift locally; the current item
  graph avoids requiring that page explicitly.
- Shell-side network resolution is currently broken in this runner. That blocks
  `source-fetch-check --stamp` and `url-sweep` from confirming the same URLs
  that the web reader opened successfully on the same day.

---

## 6. Validator results

Actual results run on Saturday, August 29, 2026:

- `node -e "JSON.parse(...pages...)"` ->
  `pages-json: ok`

- `node -e "JSON.parse(...coverage...)"` ->
  `coverage-json: ok`

- `node tools/coverage-checklist.mjs research/frontier-24-batch-9.coverage.json --require-destination` ->
  `coverage-checklist: 2 page(s), 69 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs research/frontier-24-batch-*.pages.json --manifest-only` ->
  `content-policy: 294 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json` ->
  **pass with the standing repo-wide warnings only**. The validator ended with:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 512 page(s) with item lists.`
  The warning stream was the usual run-wide `redundant-prereq` noise, not a
  batch-9 failure.

- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-9.coverage.json --stamp` ->
  **failed mechanically in this runner**:
  `source-fetch-check: 0/6 source(s) fetch-verified (0 newly stamped), 6 FAILED`
  with `ENOTFOUND` on:
  `books.google.com`,
  `www2.math.ethz.ch`,
  and `web.archive.org`.

- `node tools/url-sweep.mjs --coverage research/frontier-24-batch-9.coverage.json --out /tmp/frontier-24-batch-9-url-liveness.json --recover --fail-on-dead` ->
  **failed mechanically in the same way**:
  `url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect`
  with each row reporting `curl: (6) Could not resolve host`.

- The first attempted `url-sweep` wrapper using `timeout 30s ...` was itself
  unavailable in this runner because `timeout` is not installed. I reran the
  command directly, and the direct run produced the DNS failure result recorded
  above.

Orchestrator resolution on Saturday, August 29, 2026:

- `source-fetch-check --stamp` passed from the network-enabled parent with
  `6/6 source(s) fetch-verified (6 newly stamped)`.
- `url-sweep --recover --fail-on-dead` passed with all three unique URLs live,
  zero failures, and zero suspects.

The batch-9 shell-DNS blocker is resolved.

## Step-3 fix pass

Alpha group `b`'s Step-3 review still reads correctly on the current Saturday,
August 29, 2026 bytes. Both batch-local findings are already reflected in the
live batch-9 manifest, so this fix pass accepts them as already repaired and
records fresh validation on the current scaffold state.

### B9-1

- Disposition: accepted as already repaired on current disk; no further
  manifest edit was needed in this fix pass.
- Evidence: `research/plan-spec.json` still declares
  `smooth-partitions-of-unity-and-exhaustions` with direct prerequisites
  `smooth-manifolds-and-smooth-maps-examples` and
  `the-exponential-function`, and the live batch manifest now matches that
  list exactly. The first three DG-2 A-page items still spend
  `def-real-exponential-function-and-e`,
  `thm-exponential-beats-every-polynomial`, and
  `thm-derivative-of-exponential`, so keeping
  `the-exponential-function` direct remains required by the current item
  graph. I re-read the DG-2 design block in
  `research/plan-differential-geometry-track.md` and re-opened the recorded
  Lee, Merry, and Hitchin source URLs on August 29, 2026.
- Changed scaffold record: `research/frontier-24-batch-9.notes.md` only in
  this dispatch; the repaired scaffold record remains the DG-2 page entry in
  `research/frontier-24-batch-9.pages.json`.

### B9-2

- Disposition: accepted as already repaired on current disk; no further
  manifest edit was needed in this fix pass.
- Evidence: `research/plan-spec.json` still declares
  `tangent-cotangent-and-the-differential` with direct prerequisites
  `smooth-manifolds-and-smooth-maps`,
  `dual-spaces-bilinear-forms-and-inertia`,
  `the-determinant-of-a-linear-operator`, and
  `the-fundamental-theorems-of-calculus`; the live batch manifest now keeps
  those four pages and also the additional earlier prerequisite
  `the-inverse-function-theorem-completed`. The current DG-3 A-page items
  still spend `def-algebraic-dual-and-linear-functional`,
  `thm-newton-leibniz-with-interior-derivative`,
  `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, and
  `lem-matrix-inversion-preserves-ck-regularity`, so the fuller `requires`
  list remains load-bearing on current bytes. I re-read the DG-3 design block
  in `research/plan-differential-geometry-track.md` and re-opened the
  recorded Lee, Merry, and Hitchin source URLs on August 29, 2026.
- Changed scaffold record: `research/frontier-24-batch-9.notes.md` only in
  this dispatch; the repaired scaffold record remains the DG-3 page entry in
  `research/frontier-24-batch-9.pages.json`.

- Fresh checks on the current bytes:
  `node tools/coverage-checklist.mjs research/frontier-24-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 69 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  -> `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with the repository's standing `redundant-prereq` advisories only.
  `node tools/validate-plan.mjs /tmp/frontier-24-batch-9-spliced-plan.json`
  -> `OK`; the freshly regenerated temp splice contains the current batch-9
  manifest entries and reports no page-order, item-cycle, forward-reference,
  B-page-dependency, unresolved-id, or over-cap failure.

## Step-3 gate blocker resolution

After recheck, the `scaffold-verdicts` gate correctly blocked on two unresolved
page-level prerequisite adjudications. The orchestrator resolved them on
Saturday, August 29, 2026:

- `smooth-partitions-of-unity-and-exhaustions` now directly requires
  `smooth-manifolds-and-smooth-maps`, replacing the incorrect B-page edge.
- `tangent-cotangent-and-the-differential` now has authoritative acceptance of
  the already-manifested direct prerequisite
  `the-inverse-function-theorem-completed`, required by its matrix-inversion
  regularity dependencies.

The plan, differential-geometry design, batch manifest, and Alpha verdicts now
agree on these edges.

## Scaffold-fix round

`research/frontier-24-scaffold-closure.json` still lists two batch-9 closure
rows, but on the current Saturday, August 29, 2026 bytes both rows are stale.
No scaffold item, coverage row, or source locator changed in this dispatch, so
the manifest and coverage artifacts stay as-is and this round records the
current-byte pushback only.

### B9-1

- Disposition: pushback; the closure row is stale on current disk.
- Evidence: `research/frontier-24-batch-9.pages.json` now gives
  `smooth-partitions-of-unity-and-exhaustions` the direct prerequisites
  `smooth-manifolds-and-smooth-maps` and `the-exponential-function`, not the
  earlier B-page edge `smooth-manifolds-and-smooth-maps-examples`.
- Evidence: the current DG-2 item graph still spends DG-1 results such as
  `def-smooth-manifold`, `prop-smoothness-is-local-on-the-source`, and
  `lem-coordinate-balls-form-a-basis-of-a-topological-manifold`, so the
  restored A-page prerequisite is still the honest page-level closure named by
  `research/plan-differential-geometry-track.md` §DG-2.
- Evidence: `node tools/splice-plan.mjs --run frontier-24 --batch 9 --dry-run`
  now succeeds with `splice-plan: batch 9 — 4 page(s) spliced, 0 already
  correct, 101 item(s)`, so the undeclared-prerequisite blocker described in
  the closure file is no longer present on current bytes.
- Evidence: I re-read the recorded DG-2 source route on August 29, 2026 from
  Lee's contents page (`Partitions of Unity` and `The Whitney Embedding
  Theorem`), Merry's Lecture 3 `Partitions of Unity` / Theorem 3.11, and
  Hitchin's §6.2 / §10.4 partition-of-unity sections; the existing coverage row
  locators and `fetch_verified` stamps remain current and batch-local.
- Change: notes only. The current manifest already carries the repaired DG-2
  prerequisite set, and coverage needed no edit because no scaffold item or
  source row changed.

### B9-2

- Disposition: pushback; the closure row is stale on current disk.
- Evidence: `research/frontier-24-batch-9.pages.json` still gives
  `tangent-cotangent-and-the-differential` the direct prerequisites
  `smooth-manifolds-and-smooth-maps`,
  `dual-spaces-bilinear-forms-and-inertia`,
  `the-determinant-of-a-linear-operator`,
  `the-fundamental-theorems-of-calculus`, and
  `the-inverse-function-theorem-completed`.
- Evidence: the current DG-3 bundle-transition items still cite
  `lem-matrix-inversion-preserves-ck-regularity`, so the inverse-function page
  remains a load-bearing prerequisite rather than a stale extra edge.
- Evidence: `node tools/splice-plan.mjs --run frontier-24 --batch 9 --dry-run`
  now succeeds instead of withholding
  `tangent-cotangent-and-the-differential -> the-inverse-function-theorem-completed`,
  so the adjudication blocker described in the closure file is not present on
  current bytes.
- Evidence: I re-read the recorded DG-3 source route on August 29, 2026 from
  Lee's contents page (`Tangent Vectors`, `Pushforwards`, `The Tangent Bundle`,
  `The Cotangent Bundle`, `The Differential of a Function`, `Pullbacks`),
  Merry's Lectures 2, 4, and 5, and Hitchin's §§3.2, 3.3, and 4.1; the
  existing coverage row locators and `fetch_verified` stamps remain current and
  batch-local.
- Change: notes only. The current manifest already carries the accepted DG-3
  prerequisite set, and coverage needed no edit because no scaffold item or
  source row changed.

- Fresh checks on the current bytes:
  `node tools/coverage-checklist.mjs research/frontier-24-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 69 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  -> `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with the repository's standing `redundant-prereq` advisories only.
  `node tools/splice-plan.mjs --run frontier-24 --batch 9 --dry-run`
  -> `splice-plan: batch 9 — 4 page(s) spliced, 0 already correct, 101 item(s)`.

## Step-5 authoring

- Authored all batch-9 page files as `draft`:
  `library/real-analysis/differential-geometry/smooth-partitions-of-unity-and-exhaustions.md`,
  `library/real-analysis/differential-geometry/smooth-partitions-of-unity-and-exhaustions-examples.md`,
  `library/real-analysis/differential-geometry/tangent-cotangent-and-the-differential.md`,
  and `library/real-analysis/differential-geometry/tangent-cotangent-and-the-differential-examples.md`.
- Authored all `101` batch-9 item files listed in `research/frontier-24-batch-9.pages.json`:
  `33` A-page items and `9` B-page items for `smooth-partitions-of-unity-and-exhaustions`,
  and `49` A-page items and `10` B-page items for
  `tangent-cotangent-and-the-differential`.
- Wrote `research/frontier-24-batch-9.proof-contracts.json` for the `83`
  proof-bearing batch items, then regenerated its `citations` and
  `derivations` entries from the final on-disk item text with
  `node tools/regen-contract-entries.mjs research/frontier-24-batch-9.proof-contracts.json ...83 ids...`.

- Provenance rationale:
  source-backed A-page definitions, lemmas, theorems, propositions, corollaries,
  and remarks were tagged `ai-altered` / `ai-generated` because the claims are
  standard or source-supported but phrased in the library's local dependency and
  proof grammar;
  B-page examples and counterexamples were tagged `ai-generated` with the
  required `generation.role` because they are non-load-bearing concrete
  witnesses built from the authored A-page machinery.
- Narrowed claims recorded in the authored text:
  `thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity`
  is stated for real-valued functions, matching the affine-target restriction
  called out in the DG-2 design;
  `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking`
  is written as a countable locally finite `W_k \\Subset V_k` refinement, which
  is the exact shape later used by the partition proof;
  `prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component`
  is proved by path-connectedness of manifold components and the curve
  compatibility of the differential rather than by importing a later rank or
  submanifold theorem.
- Dropped claims: none.
- Blockers: none remained after authoring. No `verification.judge` records were
  created on in-flight items.

- Checks run on the authored bytes on Saturday, August 29, 2026:
  `node tools/tsx-run.mjs tools/precheck.mts $(batch-9 item files)` ->
  DG-2 `37 checked, 0 failing — all clean`; DG-3 `46 checked, 0 failing — all clean`.
  `node tools/rendercheck.mjs $(batch-9 item files)` ->
  DG-2 `OK — 42 file(s)` and DG-3 `OK — 59 file(s)`.
  `node tools/rendercheck.mjs library/real-analysis/differential-geometry/smooth-partitions-of-unity-and-exhaustions.md library/real-analysis/differential-geometry/smooth-partitions-of-unity-and-exhaustions-examples.md library/real-analysis/differential-geometry/tangent-cotangent-and-the-differential.md library/real-analysis/differential-geometry/tangent-cotangent-and-the-differential-examples.md`
  -> `OK — 4 file(s)`.
  `node tools/proof-contract.mjs research/frontier-24-batch-9.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 83/83 item(s) checked`.
  `node tools/content-policy.mjs research/frontier-24-batch-9.pages.json`
  -> `content-policy: 101 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK — declared page order is acyclic and consistent ...`, with only the
  repository's standing `redundant-prereq` advisories.
  `git diff --check`
  -> clean.
