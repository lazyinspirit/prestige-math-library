# Batch 1 notes — `sr-spacetime-primitives` / `sr-spacetime-primitives-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, label batch-1, covers 1.
Step 1 scaffold construction only; no item was authored and no readiness record is
independent mathematical approval (Step 3 review follows).

## Scope built

- A page `sr-spacetime-primitives` (order 209, `special-relativity`,
  `library: physics`), 19 items: 15 local mathematical items, one physics-domain
  units definition, two postulates, one physics-domain status remark. No item
  depends on a physical item.
- B page `sr-spacetime-primitives-examples`, 8 leaf items (5 examples,
  3 counterexamples), all domain mathematics, computed from the A-page
  definitions. Nothing outside the pair depends on them.
- Page `requires`, order, kind, category, library, companion and titles are
  unchanged from the plan record; the only edits are the two `items` arrays.
- Dependency levels computed from in-run deps only; run
  `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`
  (see below).

## Design vs plan-spec

- `research/plan-spec.json` and the generated batch manifest agree with
  `research/plan-special-relativity-track.md` L14 and with the full source design
  (`research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md`)
  on page id, title, order 209/210, category, library, companion, `requires: []`
  and "published finite algebra" as the only declared source class. No page-edge
  or order conflict to record.
- Granularity conflict resolved locally: the design inventory (`SR01`) is prose
  ("def affine action/displacement; def Lorentz form/future cone;
  inertia/orthogonal-basis suppliers; def events/inertial affine frames;
  post spacetime/light/clock interpretation; def units; M01 geometry") and
  carries no item ids. The stable ids that do exist, in
  `research/first-principles-2026-10-03/relativity/scaffold/expanded-item-inventory.json`
  and `research/prose-scaffold-splice.json` (`proposed_item_homes`), are
  `def-sr-affine-minkowski-model`, `post-sr-inertial-covariance` and
  `post-sr-ideal-clocks-and-light`; all three are minted here with exactly those
  ids and homes, and the remaining inventory is supplied by the local items.
- Both S1 postulates are preserved. The SR01 plan line names a single
  "post spacetime/light/clock interpretation", but the full source design S1
  distinguishes `post-sr-inertial-covariance` (adoption of the affine model and
  covariance of the model equations) from `post-sr-ideal-clocks-and-light`
  (ideal clock reading and ideal vacuum light rays); the expanded inventory and
  the splice both home **both** items on SR01. Both are built here.
- Note for batch 2 (`sr-lorentz-transformations`): its design line mentions
  "post inertial covariance" again, but the splice and expanded inventory fix
  that id's home on SR01. Batch 2 must consume `post-sr-inertial-covariance`,
  not mint or duplicate it. Batch 2 must not re-mint
  `def-sr-affine-minkowski-model`, `post-sr-ideal-clocks-and-light`, or any
  other id from this manifest.
- `S0`'s "M01 geometry" on this page covers the affine model, orthonormal-basis
  existence, cones, inertial frames and charts, the smooth structure, the
  volume form and the frame's spatial Euclidean structure. Nothing uses a
  choice-dependent supplier: the orthogonal-basis and Sylvester suppliers are
  finite-dimensional and choice-free; no AC-dependent item is consumed or
  recommended on the page.

## Local closure decisions

- `def-sr-affine-minkowski-model` is the stable mathematical interface for the
  69 EM design references (`research/first-principles-2026-10-03/classical-electromagnetism/scaffold/sr-to-em-mapping.json`;
  consumers `def-em-lab-geometry`, `def-em-relativistic-worldlines-frames`,
  `def-em-electromagnetic-tensor`, and `lem-em-particle-curve-variation` in the
  EM plan). It is domain mathematics and may be consumed by physical items under
  `mathematical-premise`.
- The S0 claim that the affine atlas makes A a smooth 4-manifold diffeomorphic
  to R^4 and that T_pA is canonically V is supplied by
  `lem-affine-minkowski-charts-form-a-smooth-atlas` and
  `lem-tangent-space-of-affine-minkowski-space-is-v`, with published
  smooth-manifold imports (no local manifold re-development). This is adjacent
  to, but disjoint from, GR01's `def-gr-smooth-lorentzian-objects`.
- The S0 volume form and the ε^{0123} = -1 convention are supplied by
  `def-oriented-minkowski-volume-form` and
  `lem-volume-form-is-independent-of-the-oriented-frame`; consumers SR08 and EM
  may rely on the exact sign conventions recorded there.
- `post-sr-ideal-clocks-and-light` states the clock reading rule for the model
  without importing the later worldline/proper-time development of SR03 (a
  forward edge is impossible); SR03/SR04 may re-derive the general
  parametrization theory from its own S4 items.
- No page split is needed: 19 + 8 items are far below the 100-item cap.

## Sources (A page)

Three independent treatments were read over the exact load-bearing ranges and
are recorded in `research/physics-em-sr-40-2026-10-08-batch-1.coverage.json`
(32 harvested headings, all disposed):

1. B. Crowell, *Special Relativity* (rev. 2020-12-10), textbook; §§1.3–1.4
   pp. 23–31 and Ch. 2 §§2.1–2.5 pp. 43–51; `https://archive.org/download/sr_20220102/sr.pdf`
   (fetch-verified, 246 pages, sha16 `4c11e8f367267d53`).
2. S. M. Carroll, *Lecture Notes on General Relativity*, lecture notes; Ch. 1
   pp. 2–7 (PDF pp. 9–14); `https://arxiv.org/pdf/gr-qc/9712019`
   (fetch-verified, 238 pages, sha16 `d4cbfeed3a18370c`).
3. H. S. Reall, Part III General Relativity (2022-10-12), lecture notes;
   §§2.1–2.2 pp. 25–28 (PDF pp. 26–29); Internet Archive copy of the original
   `https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf`
   (fetch-verified, 125 pages, sha16 `fe8a24c67e884ff1`).

Source recovery record: the original DAMTP URL failed full-text fetch with
`UNABLE_TO_VERIFY_LEAF_SIGNATURE` (initial attempt plus five retries, 6 attempts
recorded in `original_location_attempts` on the source row; `curl` in the same
environment fails identically at TLS setup). The Wayback Machine snapshot
`20230323191108id_` of the same URL serves the identical 125-page PDF
(sha256 `fe8a24c67e884ff141f85ce192f16639ff68be6f3e60f42ba5f26b9c6af8a66a`,
byte-identical to the reader's archived copy in
`research/first-principles-2026-10-03/relativity/reader-gourgoulhon/sources/reall-part3-gr.pdf`),
found through the CDX index; the coverage row now cites the archive location and
the fetch stamp is on those bytes. This is the "same document from the archive"
recovery, not a source drop and not an alternative-proof substitution.

Notable source limitations carried into the scaffold: Crowell's ch. 1 writes the
metric with signature (+−−−) and natural units c = 1, and his ch. 2 axiom system
P1–P6 is a different (verbal-postulate) axiomatization whose reconstruction is
deferred to the SR02 remark; Carroll uses c = 1; Reall states the orthonormal
basis and causal classification at a point of a Lorentzian manifold; none of the
three supplies the abstract V-torsor definition of an affine space, which is a
local mathematical adaptation (ai-altered) whose dispositions are recorded in
the coverage file.

## Cross-batch dependencies and consumer inputs

- Consumer edges from batch 1: none (all local deps are on this pair; all other
  deps are byte-identical published imports on disk). Batch input file
  `research/physics-em-sr-40-2026-10-08-batch-1.cross-batch-dependencies.json`
  is therefore the empty array.
- Supplier edges into batch 1 that other batches will create: SR02–SR12 and the
  EM batches consume this page's items, in particular the three stable ids above
  plus `def-inertial-frame-and-inertial-chart`, `def-causal-classification-of-lorentz-vectors`,
  `def-time-orientation-and-future-causal-sets`, `lem-timelike-cone-has-two-convex-components`,
  `lem-lorentz-form-has-orthonormal-basis`, `def-oriented-minkowski-volume-form`,
  `def-sr-si-units-and-coordinate-conventions`, `def-spatial-euclidean-structure-of-an-inertial-frame`
  and the SR01 boundary items. Those consuming batches must review each edge in
  their own `cross-batch-dependencies.json` input.

## Checks actually run (exact results)

| Check | Command | Result |
|---|---|---|
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-1.pages.json` | 27 items, 0 missing, 0 errors |
| manifest policy | `node tools/physics-support/content-policy.mjs --manifest-only research/physics-em-sr-40-2026-10-08-batch-*.pages.json` | 0 errors, 0 warnings (scoped-item count moves as sibling batches are written; 46 at the last run) |
| coverage | `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-1.coverage.json --require-destination` | 1 page, 32 harvested results, 0 errors, 0 warnings |
| full-text fetch | `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-em-sr-40-2026-10-08-batch-1.coverage.json --stamp` | 3/3 sources fetch-verified |
| URL liveness | `node tools/physics-support/url-sweep.mjs --coverage research/physics-em-sr-40-2026-10-08-batch-1.coverage.json --out /tmp/... --recover --fail-on-dead` | 3/3 live, 0 failed (run-level gate writes the in-repo artifact itself) |
| source backing | `node tools/physics-support/source-backing.mjs --coverage ... --liveness /tmp/batch1-url-liveness.json` | 5 authored results, every one backed; empty reharvest work list |
| physics plan | `node tools/physics-support/physics-check.mjs --plan research/plan-spec.json` | 0 errors, 26654 items checked |
| plan | `node tools/physics-support/validate-plan.mjs research/plan-spec.json` | exit 0 (578 planned pages still carry no item list; expected at step 1) |
| scope ledger | `node tools/physics-support/manifest-integrity.mjs --run physics-em-sr-40-2026-10-08` | 80/80 pages present, no scope drift |
| drift | `node tools/physics-support/drift-review-check.mjs --run physics-em-sr-40-2026-10-08` | 40 pages reviewed, no blocked edges |
| external refs | `node tools/physics-support/extcheck.mjs` | 0 recorded-not-proved, OK |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | batch-1 items clean; remaining errors are the expected `empty scaffold inventory` of not-yet-scaffolded pages (batches 2–12 and 15–40) |
| readiness | `node tools/physics-support/step1-decisions.mjs check --run physics-em-sr-40-2026-10-08` | 27 batch-1 items recorded `ready`; open work is the other batches' missing records |

## Run-level findings (not batch-1 blockers)

- `node tools/physics-support/fwdcheck.mjs --quiet` currently exits 1 with
  thousands of findings on imported legacy mathematical items (for example
  `items/cex-ordered-field-not-archimedean.md`: forward_ref to a page whose
  reading-order resolves to `#Infinity` in this workspace). fwdcheck is not a
  step-1 gate; recorded here for owner/engine reconciliation before the later
  `repoWide` gates.
- `item-dependency-levels` and `step1-decisions` are run-wide gates: they will
  stay red until every batch manifest is populated and every item recorded.
  Batch 1 contributes 27 items, all `ready`.

## Unresolved / escalated

- No batch-1 item is escalated; every item has a complete statement, a proof or
  non-derivation strategy, explicitly named deps and a computed dependency
  level.
- The only source-level uncertainty is the DAMTP TLS failure above; it was
  resolved by the byte-identical archive copy and is recorded as history, not
  hidden. No alternative proof was needed or claimed.

## Final verification (after the last edits)

- `manifest-deps` on the final manifest: 27 items, 0 missing, 0 errors.
- `content-policy --manifest-only` over all current batch manifests: 0 errors,
  0 warnings (46 scoped items when last run; the count moves with sibling
  batches).
- `source-fetch-check` in check mode: 3/3 sources fetch-verified; the coverage
  file carries all three stamps and the original-location attempt history.
- `coverage-checklist --require-destination`: 1 page, 32 harvested results,
  0 errors, 0 warnings.
- Stage-release simulation through the real stage table
  (`tools/physics-autopilot/stages/mathlib.mts`, `1-scaffold.artifacts`): unit
  `1` resolves to 29 artifacts (manifest, coverage, 27 readiness records), none
  missing, and no `…batch-1.scaffold-incomplete` sentinel, so the batch is
  releasable to its dependent batches.
- `step1-decisions check --run`: 46 declared items, 46 `ready`; every open work
  row belongs to a page whose manifest is still an empty shell (other batches).
  Batch 1 contributes zero open rows and zero stale records after the reference
  update.
