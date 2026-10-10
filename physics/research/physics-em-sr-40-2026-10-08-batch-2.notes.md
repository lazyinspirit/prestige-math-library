# Batch 2 notes — `sr-lorentz-transformations` / `sr-lorentz-transformations-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, label `batch-2`, covers 2. Owned pair:
`sr-lorentz-transformations` (A, order 211, category `special-relativity`, `library: physics`)
and `sr-lorentz-transformations-examples` (B, order 212). Step 1 scaffold construction only:
no item was authored, and no readiness record is independent mathematical approval (Step 3
review follows). Nothing outside the assigned manifests, coverage, notes, readiness records and
the consumer-batch dependency input was written.

Authority read in full before construction: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`../PHYSICS-CONTENT-MODEL.md`, the owner authoring direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`, the design section
`research/plan-special-relativity-track.md` L34, the full source design
`research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md` (SR02 inventory
and the S1/S2 postulates), the S2/S3 supplier arguments in
`.../scaffold/sr-supplier-proofs.md`, the closure ledger, the expanded item inventory, the splice
`proposed_item_homes`, and batch 1's manifest/notes (the supplier pair).

---

## Scope built

- A page `sr-lorentz-transformations`, 17 items: 15 domain-mathematics items and 2 domain-physics
  items (one `physics-theorem`, one `remark`). The two stable vocabulary ids required by the
  splice, the expanded inventory and the EM supplier contract are minted here with exactly those
  ids: `thm-sr-proper-orthochronous-lorentz-algebra` (S2) and
  `thm-sr-tensor-and-current-transformation` (S3, placement note "generic tensor/current
  transformation mathematics immediately after the Lorentz algebra, before Doppler/observer-field
  consumers").
- A page inventory in dependency order (computed levels from in-run deps, batch 1 included):

  | level | item |
  |---|---|
  | 5 | `def-lorentz-map-and-lorentz-group` |
  | 5 | `rem-sr-verbal-postulate-reconstruction-obligations` |
  | 6 | `def-lorentz-boost`, `def-spatial-rotation-of-an-inertial-frame`, `lem-lorentz-map-preserves-metric-and-causal-structure` |
  | 7 | `lem-boost-is-proper-orthochronous-with-inverse`, `lem-lorentz-lie-algebra-structure`, `lem-inertial-chart-transitions-are-affine-lorentz` |
  | 8 | `lem-collinear-boost-composition-and-velocity-addition`, `lem-boost-rotation-factorization`, `thm-sr-affine-isometry-classification`, `def-ck-tensor-field-on-minkowski-space` |
  | 9 | `lem-rapidity-parametrization-of-collinear-boosts`, `pthm-sr-interval-and-cone-invariance`, `thm-sr-tensor-and-current-transformation` |
  | 10 | `thm-sr-proper-orthochronous-lorentz-algebra`, `lem-lorentz-exponential-map-and-rapidity` |

- B page `sr-lorentz-transformations-examples`, 9 leaf items (8 examples, 1 counterexample set):
  `ex-sr-one-plus-one-boost-matrix`, `ex-sr-collinear-boost-composition-and-rapidity`,
  `ex-sr-boost-rotation-factorization-worked`, `cex-sr-noncollinear-boosts-do-not-commute`,
  `cex-sr-discrete-lorentz-maps-are-not-proper-orthochronous`,
  `ex-sr-tensor-component-transformation`, `ex-sr-four-current-boost`,
  `ex-sr-primed-frame-origin-motion`,
  `cex-sr-a-rotation-is-a-proper-orthochronous-lorentz-map-that-is-not-a-boost`.
  Nothing outside the pair depends on them; they are computed from the A-page definitions.
- Page `requires`, order, kind, category, library, companion and titles are unchanged from the
  plan record; the only edits to the page shells are the two `items` arrays.
- Budget: the design reserves 34 A / 10 B closure slots. The pair is built to 17 A / 9 B because
  the promised content (below) closes with fewer items than the reservation; the reservation is a
  budget, not a target, and no promised claim, example, warning or qualification was dropped.

## Design vs plan

- `research/plan-spec.json` and the generated batch manifest agree with the design
  (`plan-special-relativity-track.md` L34) on page ids, titles, order 211/212, category, library,
  companion and `requires: ["sr-spacetime-primitives"]`. No page-edge or order conflict.
- Recorded granularity conflict (resolved, not edited anywhere): the SR02 design line again names
  "post inertial covariance", but the splice (`proposed_item_homes`) and the expanded inventory
  fix that postulate's home on SR01, and batch 1 has already minted it there. This batch
  **consumes** `post-sr-inertial-covariance` (as the physical premise of
  `pthm-sr-interval-and-cone-invariance` and in the reconstruction remark) and mints no duplicate.
- The design line "S3 generic tensor/covector/current mathematics before Doppler" is implemented
  as `def-ck-tensor-field-on-minkowski-space` plus the stable
  `thm-sr-tensor-and-current-transformation` (vector, covector, general (r,s), derivative,
  (2,0)-divergence, exterior-form, volume-form and current clauses).
- The design's "M01 boost verification/inverse/composition" and M01's closure ("full C^2
  affine-isometry classification") are implemented as the boost lemmas, the factorization lemma,
  the affine-isometry classification theorem and the Lie-algebra/exponential items.
- No conflict was found between the owner authoring direction and this pair; that direction's one
  pair-level override (the Carleman/unique-continuation chain) concerns the EM
  boundary-and-spectral pair, not SR02.

## Local closure decisions

- The page supplies every prerequisite of its own claims. The dependency closure is
  `sr-spacetime-primitives` (batch 1: the affine model, Lorentz form, causal classification, time
  orientation, cone components, orthonormal basis, frames/charts and transition formula, smooth
  atlas, tangent-space identification, spatial Euclidean structure, volume form, SI units, and the
  two postulates) plus published imported mathematics on disk. No item depends on a physical item
  unless it is itself physical; no mathematical item uses a physical supplier.
- Pure-mathematics boundary: the boost, rotation, factorization, Lie-algebra, exponential,
  affine-isometry, chart-transition and tensor/current items are `domain: mathematics` and use
  only `mathematical-premise` deps. The physical content (identification of inertial changes of
  description with proper orthochronous affine Lorentz maps, interval/cone invariance as a
  conditional statement about the model, and the reconstruction obligations) is confined to
  `pthm-sr-interval-and-cone-invariance` and
  `rem-sr-verbal-postulate-reconstruction-obligations`, both `domain: physics` with
  `physical_scope` and with the postulates carried as `physical-assumption`.
- The exponential item deliberately does **not** claim that every proper orthochronous Lorentz map
  is a single exponential (the S2 text explicitly warns against that reading); it proves that
  generators exponentiate into SO^+ and that boosts are exponentials, and records the disclaimer.
- AC / choice: none of the 26 items uses the Axiom of Choice or AC_omega; every dependency is a
  finite-dimensional or explicit computation, and the exponential convergence uses the published
  bounded-operator series on a finite-dimensional Banach space.
- Exact independent checks performed while scaffolding (not claims of review): the B-page
  arithmetic was recomputed with exact rational arithmetic in a separate calculation. In
  particular `B(3/5 e_1)B(3/5 e_2)` equals the 4x4 matrix recorded in
  `ex-sr-boost-rotation-factorization-worked`, its `u = L e_0 = (25/16,-15/16,-3/4,0)`,
  `beta = (-3/5,-12/25,0)`, `gamma(beta) = 25/16`, and `B(beta)L = diag(1,R)` with
  `R = [[40/41,9/41,0],[-9/41,40/41,0],[0,0,1]]` (so `40^2+9^2 = 41^2`); the noncommutativity
  counterexample's two matrices differ in the displayed entries; and the 1+1, collinear,
  covector/vector and current numbers were verified exactly. These are scaffold-construction
  checks; Step 3 authors and independent reviewers must re-derive them.

### Local mathematical completions (provenance honesty)

The three harvested treatments supply the definitions and the small-case verifications, not the
full S2/S3 algebra: Reall's course leaves the Lorentz-generator commutators as an ellipsis, and
Carroll states the six-parameter matrix is not written down. The following items are therefore
local completions (`ai-altered`) whose exact arguments are adapted from the run's research
supplier proof `research/first-principles-2026-10-03/relativity/scaffold/sr-supplier-proofs.md`
S2/S3 (research artifact, not a published item): `lem-boost-rotation-factorization`,
`thm-sr-proper-orthochronous-lorentz-algebra`, `lem-lorentz-lie-algebra-structure`,
`lem-lorentz-exponential-map-and-rapidity`, `thm-sr-affine-isometry-classification`,
`lem-rapidity-parametrization-of-collinear-boosts`, `def-ck-tensor-field-on-minkowski-space`,
`def-spatial-rotation-of-an-inertial-frame`, and the interfaces of
`thm-sr-tensor-and-current-transformation`. The coverage file records these as local completions
in its `canonical` list; the sources' own statements are disposed separately. Reviewers should
check each completion against the recorded source qualifications (e.g. the (+---)/c=1
conversions) and against the S2/S3 hypotheses.

## Sources (A page)

Three independent treatments were read over the exact load-bearing ranges and are recorded in
`research/physics-em-sr-40-2026-10-08-batch-2.coverage.json` (44 harvested results, every one
disposed):

1. B. Crowell, *Special Relativity* (rev. 2020-12-10), textbook; §1.4 pp. 30-32 including
   Examples 11-14, §§2.3-2.4 pp. 46-49, §8.3.2 pp. 175-176; `https://archive.org/download/sr_20220102/sr.pdf`
   (fetch-verified, 246 pages, sha16 `4c11e8f367267d53`).
2. S. M. Carroll, *Lecture Notes on General Relativity*, lecture notes; Ch. 1 pp. 3-7 (PDF
   pp. 10-14), equations (1.3)-(1.21); `https://arxiv.org/pdf/gr-qc/9712019` (fetch-verified,
   238 pages, sha16 `d4cbfeed3a18370c`).
3. H. S. Reall, Part III General Relativity (2022-10-12), lecture notes; §2.2 pp. 26-28 (PDF
   pp. 27-29), equations (2.9)-(2.12); Internet Archive copy of the original
   `https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf`
   (fetch-verified, 125 pages, sha16 `fe8a24c67e884ff1`).

Source recovery record: the original DAMTP URL for Reall fails full-text fetch in this
environment with an SSL certificate-verification error (`curl` (60), same failure as in batch 1);
the Wayback snapshot serves the byte-identical 125-page course, so the reader-facing URL is the
archive location and the coverage row records `original_url` as the superseded citation (which is
what makes the run-level URL sweep pass). No source was dropped and no alternative proof was
needed; the batch's fetch check stamped 3/3 sources, byte-identical to batch 1's stamps. A fourth
candidate treatment (D. Tong, *General Relativity*) was not used: the local copy stops at extracted
text and its official URL fails TLS in this environment, so no reading claim is made for it.

Source qualifications carried into the scaffold: Crowell writes the metric with signature (+---)
and c=1 (converted explicitly to eta_0 = diag(-1,1,1,1) with x^0 = ct in every use); Carroll uses
c=1 and states the general six-parameter matrix is omitted; Reall works pointwise on a Lorentzian
manifold and states the defining equations of a Lorentz transformation in an orthonormal basis
(the affine-model adaptation is local). None of the three supplies the C^2 affine-isometry
classification, the Lie-algebra commutators, the matrix exponential, or the tensor/current
component laws as proved statements; those are the local completions listed above.

## Cross-batch dependencies and consumer inputs

- The pair's own in-run dependencies are confined to batch 1 (`sr-spacetime-primitives`);
  everything else is published imported mathematics on disk. Consumer-batch input
  `research/physics-em-sr-40-2026-10-08-batch-2.cross-batch-dependencies.json` therefore records
  57 rows: the page edge `sr-lorentz-transformations -> sr-spacetime-primitives` plus 56 item
  edges (56 of the batch's declared deps point into batch 1; the rest are imported). Every row is
  `open` because the batch-1 suppliers are scaffolded and recorded ready but not yet authored.
  `frontier-dependency-ledger.mjs refresh --run` was run and reports batch 2 as reviewed with zero
  orphaned reviews and zero unreviewed edges of its own.
- Consumer edges from batch 2 to later batches (recorded for those batches' own inputs):
  `sr-worldlines-and-clocks` (batch 3) requires this page; the EM batches consume the two stable
  ids through `sr-em-supplier-contract.json` (S2 for `pthm-em-lorentz-field-transform`; S3 for
  `def-em-sources`, `pthm-em-tensor-maxwell-equivalence`, `pthm-em-covariant-stress-energy`), and
  S7's Doppler consumer needs the covector/phase clause. The interfaces as scaffolded match the
  contract: passive boost convention `x'^0 = gamma(x^0 - beta.x)`, matrix condition
  `M^T eta_0 M = eta_0`, `epsilon_{0123} = +1`, and the component law with `Lambda` and
  `Lambda^{-1}` in exactly the S3 orientations.

## Checks actually run (exact results)

| Check | Command | Result |
|---|---|---|
| manifest deps (pair) | `node tools/physics-support/manifest-deps.mjs /tmp/b2/manifest.json` | 26 items, 0 missing, 0 errors |
| manifest deps (run) | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-*.pages.json` | 75 items, 0 missing, 0 errors |
| scaffold policy | `node tools/physics-support/content-policy.mjs --manifest-only research/physics-em-sr-40-2026-10-08-batch-*.pages.json` | 75 scoped items, 0 errors, 0 warnings |
| coverage | `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-2.coverage.json --require-destination` | 1 page, 44 harvested results, 0 errors, 0 warnings |
| full-text fetch | `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-em-sr-40-2026-10-08-batch-2.coverage.json --stamp` | 3/3 sources fetch-verified (stamps recorded) |
| run fetch check | `node tools/physics-support/source-fetch-check.mjs --coverage <all five batch coverages>` | 20/20 sources fetch-verified |
| URL liveness (pair) | `node tools/physics-support/url-sweep.mjs --coverage research/physics-em-sr-40-2026-10-08-batch-2.coverage.json --out /tmp/b2/url-liveness.json --recover --fail-on-dead` | 3/3 live, 0 failed |
| URL liveness (run, to /tmp) | `node tools/physics-support/url-sweep.mjs --coverage research/physics-em-sr-40-2026-10-08-batch-*.coverage.json --out /tmp/b2/run-url-liveness.json --recover --fail-on-dead` | 16/16 live, 0 failed |
| source backing (pair) | `node tools/physics-support/source-backing.mjs --coverage ...batch-2.coverage.json --liveness /tmp/b2/url-liveness.json --require-verified` | 7 authored results, all backed, empty reharvest list |
| source backing (run) | `node tools/physics-support/source-backing.mjs --coverage <all five> --liveness /tmp/b2/run-url-liveness.json` | 24 authored results, all backed, empty reharvest list |
| scope ledger | `node tools/physics-support/manifest-integrity.mjs --run physics-em-sr-40-2026-10-08` | 80/80 pages present, no scope drift |
| drift | `node tools/physics-support/drift-review-check.mjs --run physics-em-sr-40-2026-10-08` | 40 pages reviewed, 0 blocked edges |
| plan (plain) | `node tools/physics-support/validate-plan.mjs research/plan-spec.json` | exit 0 (578 planned pages carry no item list yet; expected at step 1) |
| external refs | `node tools/physics-support/extcheck.mjs` | 0 recorded-not-proved items, OK |
| readiness | `node tools/physics-support/step1-decisions.mjs check --run physics-em-sr-40-2026-10-08` | 75 declared items, 75 ready, batch 2 contributes 0 open rows |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | batch-2 items clean; remaining errors are the expected `empty scaffold inventory` of not-yet-scaffolded pages (70) |
| artifact completeness | simulated `scaffoldArtifacts` unit 2 (manifest nonempty, coverage present, all 26 records closed, levels equal computed) | complete; no `…batch-2.scaffold-incomplete` sentinel needed |
| cross-batch ledger | `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` | refreshed; batch 2 reviewed, 0 orphaned reviews, 0 unreviewed edges of its own |

## Run-level findings (not batch-2 blockers)

- **Deep plan check (`validate-plan` under the frontier gate) reports `undeclared-prereq` for
  every scaffolded page in the run.** Command:
  `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan`
  exits 1 with 75 findings. For this pair the findings are 25 on `sr-lorentz-transformations` and
  4 on the examples page; the named pages are published mathematics pages such as
  `matrices-and-the-matrix-of-a-linear-map`, `the-exponential-function`,
  `dual-spaces-bilinear-forms-and-inertia` and so on. The checker requires every page edge
  induced by an item dep to lie in the closure of the page's declared `requires`; imported
  published mathematics has homes outside this run's plan, and 18 of the 25 supplier pages are
  not plan `P` entries at all, so naming them in `requires` is not possible without a
  plan-level addition (and `requires-resolve` would reject pages that are not declared pages).
  The same pattern appears for batches 1, 13, 14 and 15 (16, 8, 13 and 6 findings
  respectively), so this is a run-level planning/engine question, not a batch-2 defect. No plan
  or page `requires` was edited; the finding is escalated to the owner with these exact counts.
- **Mathematics import drift outside the run.** `node tools/physics-support/physics-check.mjs
  --plan research/plan-spec.json` exits 1 with `mathematics import changed:
  items/thm-hilbert-basis-theorem.md; reconcile and re-import before a new run`. The physics
  snapshot `physics/items/thm-hilbert-basis-theorem.md` is byte-identical to its pinned hash
  (`477f7015…`); the *root* original changed after the import pin (mtime 2026-10-08 12:28 UTC,
  after this run started). No item in this run depends on that item, so no batch-2 closure is
  affected; reconciliation of supplier updates belongs outside the active run.
- `node tools/physics-support/fwdcheck.mjs --quiet` exits 1 with findings on imported legacy
  mathematics items (for example `items/thm-zorn.md` forward-refs a page whose reading order
  resolves to `#Infinity` in this workspace). Same run-level condition batch 1 recorded; fwdcheck
  is not a step-1 gate.
- `node tools/physics-support/frontier-item-gate.mjs --run … --tool extcheck -- --manifest-only`
  currently throws `Invalid or empty current page in …batch-10.pages.json` because
  `run-manifest-pages.mjs` rejects empty page shells; expected until all 40 batches are
  scaffolded, and batch 2's pages are populated.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run … --require-reviewed`
  exits 1 only because batches 3-12 and 16-40 have not yet written their inputs; batch 2's own
  edges are all reviewed.
- `step1-readiness` and `item-dependency-levels` stay run-wide red only through the 70 page
  shells of other batches that are still empty; neither reports a batch-2 row.

## Unresolved / escalated

- No batch-2 item is escalated: every item has a complete statement, a proof or
  non-derivation strategy with named steps, explicitly named deps with roles and a computed
  dependency level, and a closed readiness record.
- The only escalated finding is the run-level deep-plan `undeclared-prereq` question above,
  recorded with exact counts and command for the owner/engine.
- No source-level uncertainty remains for this batch: 3/3 sources fetch-verified, 0 drops,
  0 reharvest work.

## Final verification (after the last edits)

- `manifest-deps` on the final pair manifest: 26 items, 0 missing, 0 errors.
- `content-policy --manifest-only` over all current batch manifests: 75 scoped items, 0 errors,
  0 warnings.
- `coverage-checklist --require-destination`: 1 page, 44 harvested results, 0 errors,
  0 warnings; `source-fetch-check` in check mode: 3/3 sources fetch-verified.
- `source-backing --require-verified`: 7 authored results, every one backed.
- `step1-decisions check --run`: all 26 batch-2 items recorded `ready` with their examined
  dependency lists; every open work row belongs to another batch's empty scaffold.
- `item-dependency-levels check --run`: no batch-2 level error; all 70 remaining errors are
  other batches' empty scaffolds.
- After a final precision pass, two statements were edited: clause (e) of
  `def-lorentz-map-and-lorentz-group` now states the proper-orthochronous reading of "Lorentz
  transformation" as this framework's convention (not as a library-wide claim), and the wording
  of `def-spatial-rotation-of-an-inertial-frame` no longer says "equivalently R(S) = S, since R is
  required to be invertible" (the determinant condition on the restriction now carries that
  consequence). All 24 items whose transitive closure changed were re-recorded `ready` with their
  examined dependency lists; the 2 unaffected records were preserved unchanged.
  `step1-decisions check` again reports 75/75 ready with 0 open batch-2 rows.
- Artifact-completeness simulation for unit 2: complete, so the batch is releasable to its
  dependent batches (batch 3 and the EM consumers) once the run-wide gates close.
