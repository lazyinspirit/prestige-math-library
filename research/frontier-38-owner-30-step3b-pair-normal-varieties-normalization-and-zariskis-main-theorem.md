# Step 3b authoring report — `normal-varieties-normalization-and-zariskis-main-theorem`

- Run: `frontier-38-owner-30`; role `alpha-high`; label
  `step3b-pair-normal-varieties-normalization-and-zariskis-main-theorem-630fc47308f9f74c`.
- Pair: A `normal-varieties-normalization-and-zariskis-main-theorem` (366.061) /
  B `normal-varieties-normalization-and-zariskis-main-theorem-examples` (366.062),
  batch 1, algebraic-geometry.
- Owned inputs: the 39 batch-1 manifest rows of this pair only; sibling pairs in
  batch 1 and the other 29 pairs are preserved untouched.

## Owned IDs and open obligations at entry

A page (31): `def-finite-morphism-classical-affine-local`,
`def-normal-point-and-normal-variety`,
`lem-av7-finite-morphism-projective-over-projective-base`,
`lem-av7-relative-integral-closure-finite-affine-charts`,
`lem-av7-zero-dimensional-standard-smooth-local-tools`,
`def-normalization-affine-variety`,
`lem-av7-coprime-factorization-finite-component-neighbourhoods`,
`lem-av7-integral-closure-elementary-etale-base-change`,
`lem-finite-birational-to-normal-is-isomorphism`,
`lem-normality-local-on-affine-opens`,
`thm-finite-morphism-closed-and-finite-fibres`,
`thm-normal-curve-is-nonsingular`, `thm-regular-local-ring-is-normal`,
`cor-bijective-birational-to-normal-isomorphism-under-finiteness`,
`lem-av7-classical-zmt-relative-integral-closure-neighbourhoods`,
`lem-normalization-isomorphism-over-normal-locus`,
`thm-normal-functions-codimension-one-intersection`,
`thm-normal-variety-regular-in-codimension-one`,
`thm-normalization-finite-birational-surjective`,
`cor-rational-function-no-poles-codimension-one-regular`,
`lem-av7-proper-quasi-finite-factor-is-finite`,
`thm-normalization-glues-variety`,
`thm-zariski-main-open-immersion-factorization-classical`,
`cor-normalization-resolves-singularities-of-curves`,
`def-conductor-normalization`, `def-unibranch-point-classical`,
`lem-normalization-commutes-with-restriction-open`,
`rem-normalization-not-resolution-higher-dimension`,
`thm-normalization-universal-property`,
`cor-normalization-unique-up-to-unique-isomorphism`,
`lem-conductor-ideal-common-ideal`.

B page (8): `cex-normal-not-smooth-quadric-cone`, `ex-normal-affine-space`,
`cex-finite-fibres-not-finite-open-immersion`, `ex-normalization-node`,
`cex-normalization-not-injective-node`, `ex-normalization-cusp`,
`cex-bijective-birational-not-isomorphism-cusp-reprise`,
`ex-conductor-cusp-semigroup`.

Entry obligations: (1) author the 32 missing item files and audit the 7 existing
`lem-av7-*` bridge drafts; (2) create both library pages; (3) create
`research/frontier-38-owner-30-batch-1.proof-contracts.json` covering all 39;
(4) record current `repaired`/`accept` item decisions for all 39 with the
examined dependency IDs after final edits; (5) run explicit-path precheck,
rendercheck, content-policy item mode, strict proof contracts, dependency-level
checks, and `validate-plan`; (6) run `proof-layout.mjs` once over every changed
item path.

No supplier in the closure is unauthored: the seven bridges are on disk and the
rest of the closure is published. No escalation is opened at entry.

## Checkpoints

Everything recorded below is re-verified against disk; this section is a log,
not evidence. (Entry checkpoint 2026-10-03: read CLAUDE.md, SCHEMA.md, the
AV-7 design section, batch-1 notes/coverage/manifest, the Step 3a report and
scope receipt, the owner authoring direction, and the local-prereq packet.)

Authoring conventions fixed for this pair (all verified against the live
checkers): item files carry `status: draft`, `origin: pipeline`,
`pipeline_run: frontier-38-owner-30`, `dependency_level`, and `proof_strategy:
direct`; proof steps are numbered by cited-step layer (independent first-layer
steps 1.1, 1.2, ...; a step citing layer-n steps is (n+1).1); every step ends
in `[tags]` from the precheck vocabulary (given, F#, step n.m, algebra,
construct, choose); the final step carries the QED mark after its tags.
Definitions and remarks use `provenance.proof: not-applicable`; proved items
use `ai-altered` (with a URL-bearing source). Counterexamples use
`## Statement refuted` + `## Facts & Assumptions` + `## Counterexample`;
examples use `## Statement` + `## Facts & Assumptions` + `## Proof`.

Checkpoint 1 (level 0 and the first level-1 items):

- Written: `def-finite-morphism-classical-affine-local` (Milne 8.17/8.19/8.21
  read in the PDF at pp. 181-183; the cover criterion is the definition and
  affine-locality is recorded, source-backed), `def-normal-point-and-normal-
  variety` (Milne Def. 8.1 at p. 176 and the reducible-point remark, with the
  minimal-prime zero-divisor argument recorded), `lem-normality-local-on-
  affine-opens`, `thm-finite-morphism-closed-and-finite-fibres` (affine
  image-is-$V(J\cap A)$ argument via lying over, maximality transfer and
  Nullstellensatz; finite fibres via the published module-finite quasi-finite
  corollary). Precheck+rendercheck clean on each.
- Audited: the seven `lem-av7-*` bridge drafts pass explicit-path precheck and
  rendercheck; their manifest levels 0,0,0,1,1,2,3 match the computed levels.
- Dependency additions (item files and manifest not yet harmonised; all
  additions are published items with home pages strictly before 366.061):
  `def-normalization-affine-variety` -> `def-finite-morphism-classical-affine-
  local`; `lem-normality-local-on-affine-opens` ->
  `thm-classical-affine-variety-prime-coordinate-ring`,
  `lem-maximal-ideals-are-points-over-algebraically-closed-field`;
  `thm-finite-morphism-closed-and-finite-fibres` ->
  `thm-affine-nullstellensatz-correspondence`,
  `cor-contraction-of-maximal-ideals-integral-extension`,
  `cor-module-finite-affine-map-quasi-finite`,
  `def-module-finite-affine-classical-map`,
  `def-quasi-finite-morphism-classical`.
- Open at this checkpoint: 27 item files still to author; pages, contracts,
  decisions and the batched proof-layout run still owed.

Checkpoint 2 (authoring complete; 39/39 item files on disk):

- All 39 files exist: 7 pre-existing `lem-av7-*` bridges (audited, unchanged) and
  32 newly written items. Every proof-bearing item was written one at a time in
  the dispatch's dependency order against its exact suppliers; the last author
  edit preceded the recorded decisions.
- Dependency additions (item files; all targets are published items whose home
  page order is strictly below 366.061/366.062, so no in-run level changed):
  `def-normalization-affine-variety` -> `def-finite-morphism-classical-affine-
  local`; `lem-normality-local-on-affine-opens` ->
  `thm-classical-affine-variety-prime-coordinate-ring`,
  `lem-maximal-ideals-are-points-over-algebraically-closed-field`;
  `thm-finite-morphism-closed-and-finite-fibres` ->
  `thm-affine-nullstellensatz-correspondence`,
  `cor-contraction-of-maximal-ideals-integral-extension`,
  `cor-module-finite-affine-map-quasi-finite`,
  `def-module-finite-affine-classical-map`,
  `def-quasi-finite-morphism-classical`;
  `ex-normal-affine-space` -> `thm-normality-is-local-for-domains`;
  `thm-regular-local-ring-is-normal` -> none beyond the scaffold;
  `lem-finite-birational-to-normal-is-isomorphism` ->
  `thm-local-ring-affine-variety-localization`;
  `thm-normal-curve-is-nonsingular` -> `thm-regular-local-rings-are-normal`,
  `lem-dimension-local-ring-codimension-closure`,
  `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`;
  `cex-normal-not-smooth-quadric-cone` -> `lem-finite-variable-polynomial-
  rings-over-fields-are-ufds`, `lem-gauss-lemma-over-a-ufd`,
  `thm-affine-nullstellensatz-correspondence`,
  `cor-height-plus-quotient-dimension-affine-domain`,
  `thm-affine-variety-dimension-coordinate-ring`,
  `def-depth-with-respect-to-an-ideal`,
  `thm-krull-principal-ideal-theorem`,
  `cor-finite-type-algebra-over-noetherian-ring-is-noetherian`,
  `cor-dimension-of-a-finite-polynomial-ring-over-a-field`,
  `def-normal-noetherian-ring`;
  `thm-normal-variety-regular-in-codimension-one` ->
  `thm-one-dimensional-regular-local-rings-are-dvrs`;
  `cex-finite-fibres-not-finite-open-immersion` ->
  `cor-zariski-topology-cofinite-on-affine-line`;
  `cor-rational-function-no-poles-codimension-one-regular` -> none;
  cusp and node items -> the elementary A-page commutative-algebra suppliers
  (`thm-quotient-ring-universal-property`, `def-quotient-ring`,
  `lem-polynomial-algebras-over-fields-are-integrally-closed`,
  `def-integral-closure-and-integrally-closed-domain`,
  `def-integral-element-and-algebraic-integer`,
  `thm-transitivity-of-integrality`,
  `cor-integral-elements-form-a-subring`, `def-field-of-fractions`,
  `thm-monic-polynomial-division`,
  `def-polynomial-degree-leading-coefficient-and-monic`,
  `def-zero-divisor-and-integral-domain`,
  `cor-polynomial-ring-over-a-domain-is-a-domain`,
  `def-polynomial-evaluation-and-root`).
- Examples-page dependencies replaced by local arguments (dispatch: replace
  load-bearing examples-page dependencies): the node and cusp items no longer
  cite `ex-normalization-nodal-coordinate-domain`,
  `ex-integral-closure-cusp-semigroup-affine-domain`, or
  `cex-regular-bijection-not-isomorphism-cusp`; each now proves its
  integral-closure computation (unique monic representative, parity
  separation, integrality of $t$, integral closedness of $k[t]$) inside our
  B-page item. A focused dependency scan over all 39 items reports 0 remaining
  cross-page examples-page dependencies.
- Manifest rows were not edited: the scaffold's `statement`, `deps`,
  `dependency_level` and provenance are preserved, and the item files'
  additional deps are published items only, so all in-run dependency levels
  computed from the manifests are unchanged and consistent with the item
  frontmatter levels.

## Checks actually run (final content)

- `node tools/tsx-run.mjs tools/precheck.mts <39 explicit paths>`: exit 0,
  **33 checked, 0 failing** (6 definition/remark items carry no proof body).
- `node tools/rendercheck.mjs <39 explicit paths>`: exit 0, all frontmatter and
  math spans parse.
- `node tools/proof-layout.mjs <39 explicit paths>` (one batched command, no
  shim): exit 0, **proof-layout: 39 items, 116 steps, 0 defects**. At entry the
  default invocation failed for one file with a raw JSX loader error and
  `PRESTIGE_APP_DIR=/tmp/ag885-render-app` was used to read the real renderer;
  the final run needs no shim.
- `node tools/depcheck.mjs --items-file /tmp/av7-items.json`: no error or
  warning line names any of the 39 items. (Its global page/cycle pass reports
  33 errors, all in sibling pairs: the in-flight
  `blowups-exceptional-divisors-and-strict-transforms` page lists item files
  not yet written, and two other pairs carry `b-leaf-content` edges. Reported
  for the owner, not edited.)
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-1.pages.json`:
  exit 0, **39 scoped item(s), 0 error(s), 0 warning(s)**.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`:
  exit 0, 816 items across 60 pages, no level mismatch and no cycle.
- `node tools/manifest-integrity.mjs --run frontier-38-owner-30`: exit 0,
  60/60 pages, no scope drift.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-1.pages.json`:
  39 item(s), 0 missing, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-1.coverage.json --require-destination`:
  0 errors, 1 advisory low-yield warning (pre-existing and explained in the
  scaffold notes).
- `node tools/source-fetch-check.mjs --coverage ...batch-1.coverage.json`:
  15/15 sources resolved (14 fetch stamps, 1 documented drop).
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-1.proof-contracts.json --strict`:
  exit 0, 39/39 item contracts, 0 errors, 0 warnings; citations and derivations
  regenerated from the final item text with `tools/regen-contract-entries.mjs`.
- `node tools/finite-smoke.mjs <batch contract>`: 0 errors; `risk-report`: 0
  errors (5 items routed HIGH/CRITICAL for Step 5a review);
  `boundary-audit --fail-on-contradicted --fail-on-template`: 0 contradicted,
  0 template clusters; `citation-fidelity --fail-on-missing-quote`: every quote
  found, no widening candidates.
- `node tools/fwdcheck.mjs`: 0 open forward references; the one forward marker
  in this pair (`rem-normalization-not-resolution-higher-dimension` ->
  `cex-normal-not-smooth-quadric-cone`) is closed and load-bearing.
  `node tools/extcheck.mjs`, `node tools/prosecheck.mjs` and
  `node tools/depsource.mjs`: exit 0; no line names this pair.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0. Pre-splice
  plan state for Step 4: the plan's A row lists the 7 bridge items and its B row
  lists none; the batch manifest carries all 39, so the Step 4 splice is the place
  where the remaining 32 rows enter `plan-spec.json`. No `undeclared-prereq`,
  cycle or unresolved id was introduced by the authored deps.
- Decisions: `tools/step3-decisions.mjs record-item --decision accept
  --confidence 1` was recorded for each of the 39 items after the last content
  edit, with the examined dependency IDs; `check --phase final` reports 0 open
  work rows for this pair (589 open rows remain, all in sibling pairs still
  being authored).

## Published concerns and open obligations

- No published defect was caused by this pair. Sibling concerns observed while
  running the repo-wide gates (not edited, confidence high that they belong to
  sibling work in flight): missing item files behind the blowups pages;
  `link-unplanned` in `thm-singular-inner-function-properties`; a `pathcheck`
  crash on a not-yet-written Calderon-Zygmund example file; two `b-leaf-content`
  edges in other pairs. Left to their owning authors and the serial reconciler.
- Open obligations for Steps 5-8: independent mathematical audit of all 39
  proofs; verification of the finite-morphism definition item's recorded
  affine-locality (Milne 8.19/8.21/8.22 is cited as its source, not reproved
  inside the definition); and review of the one qualification recorded in
  `lem-conductor-ideal-common-ideal`, where the finite-dimensionality of
  $B/\mathfrak c$ is asserted for the finite-support (curve) case, the general
  geometric case being a finite module over $A/\mathfrak c$ with positive-
  dimensional support possible.
- Handoff summary: completed IDs = all 39 scaffold rows of the pair; added
  suppliers = none (no new item IDs were created; dependency additions are all
  published items, listed above); open obligations as above; no manifest
  statement, level or sibling row was changed.
