# Batch 6 notes — `sr-proper-time-comparisons` / `sr-proper-time-comparisons-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, label batch-6, covers 1. Owned pair:
`sr-proper-time-comparisons` (A, order 219, category `special-relativity`, `library: physics`) and
`sr-proper-time-comparisons-examples` (B, order 220). Step 1 scaffold construction only: no item was
authored, and no readiness record is independent mathematical approval (Step 3 review follows).
Nothing outside the assigned manifests, coverage, notes, readiness records and consumer-batch
dependency inputs was written.

Authority read in full before construction: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`../PHYSICS-CONTENT-MODEL.md`, the binding owner authoring direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`, the design section
`research/plan-special-relativity-track.md` L126 (with the full source design
`research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md` SR06 row and its
required sources), the S6/M02 arguments in `.../scaffold/sr-supplier-proofs.md` and
`.../scaffold/mathematical-prerequisites.md` (M02), the closure ledger entry M02, the expanded item
inventory and the splice `proposed_item_homes`, the SR06 source-coverage row in
`.../scaffold/prose-scaffold.md` (Crowell §§1.3.3, 1.5 pp. 25–29, 36–37; Carroll Ch. 3 pp. 69–73;
Reall §2.3 pp. 28–30; "sources' curved-maximality assertions insufficient"), the reader reports and
material of `reader-taylor` (Crowell), `reader-carroll` and `reader-gourgoulhon` (Reall), the
current `research/plan-spec.json`, and the batch-1…5 manifests and notes (suppliers and the sibling
SR05 pair).

---

## Scope built

- **A page** `sr-proper-time-comparisons`, 10 items in dependency order: seven domain-mathematics
  items (`def-sr-inertial-and-piecewise-inertial-worldline`, `def-sr-piecewise-proper-time`,
  `lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors`,
  `cor-sr-reverse-triangle-and-future-cone-convexity`,
  `lem-sr-rest-frame-of-a-future-timelike-displacement`,
  `lem-sr-endpoint-displacement-of-a-future-timelike-worldline`,
  `thm-sr-endpoint-proper-time-bound-and-flat-maximum`), one `physics-theorem`
  (`pthm-sr-same-endpoint-clock-comparison`), one `thought-experiment`
  (`texp-sr-piecewise-inertial-twin-reunion`) and one physics-domain `remark`
  (`rem-sr-twin-acceleration-and-synchronization-caveats`). No mathematical item depends on a
  physical item.
- **B page** `sr-proper-time-comparisons-examples`, 6 leaf items, all domain mathematics and all
  `ai-generated` with `generation.role` set (4 examples, 2 counterexamples): worked reverse
  Cauchy–Schwarz/reverse-triangle evaluations, the two-leg/straight comparison at β = 3/5, the
  simultaneity gap of the traveler's two momentary frames, the two boundary counterexamples, and the
  worked rest-frame construction. Nothing outside the pair depends on them, and no item depends on a
  B-page item.
- Page `order`, `id`, `kind`, `category`, `library`, `title`, `companion` and `requires` are
  unchanged from the plan record and the generated task shell; the only edits are the two `items`
  arrays.
- `dependency_level` computed from in-run `deps` only, then verified by
  `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`
  (no batch-6 error; remaining errors are other batches' empty inventories):

  | level | item |
  |---|---|
  | 8 | `def-sr-inertial-and-piecewise-inertial-worldline` |
  | 9 | `def-sr-piecewise-proper-time` |
  | 6 | `lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors` |
  | 7 | `cor-sr-reverse-triangle-and-future-cone-convexity` |
  | 8 | `lem-sr-rest-frame-of-a-future-timelike-displacement` |
  | 10 | `lem-sr-endpoint-displacement-of-a-future-timelike-worldline` |
  | 11 | `thm-sr-endpoint-proper-time-bound-and-flat-maximum` |
  | 12 | `pthm-sr-same-endpoint-clock-comparison` |
  | 13 | `texp-sr-piecewise-inertial-twin-reunion` |
  | 14 | `rem-sr-twin-acceleration-and-synchronization-caveats` |
  | 8 / 12 / 13 / 7 / 12 / 9 | the six B-page items in manifest order |

- **Budget.** The design reserves 18 A / 10 B closure slots; the pair is built to 10 A / 6 B because
  the promised content closes with fewer items. The reservation is a budget, not a target; the
  mapping of every promised inventory element is below. The A page is far below the 100-item cap, so
  no split is required.

### Mapping of the SR06 design inventory

| design element | disposition |
|---|---|
| "M02 reverse inequality" | `lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors` (the reversed Cauchy–Schwarz inequality with its exact equality case, future and past timelike clauses) and `cor-sr-reverse-triangle-and-future-cone-convexity` (reversed triangle inequality, convexity of the future timelike set, finite sums) |
| "M02 endpoint bound" | `def-sr-piecewise-proper-time` (well-defined total proper time for the piecewise class), `lem-sr-endpoint-displacement-of-a-future-timelike-worldline` (the endpoint displacement is future timelike), `lem-sr-rest-frame-of-a-future-timelike-displacement` (rest-frame reduction), `thm-sr-endpoint-proper-time-bound-and-flat-maximum` (bound, equality case, strictness, straight value) |
| "texp piecewise inertial twin reunion" | `texp-sr-piecewise-inertial-twin-reunion`, with the explicit stay-at-home and two-leg histories, the corner r, the readings 2T and 2T/γ and the conditional conclusion |
| "pthm same-endpoint duration calculation" | `pthm-sr-same-endpoint-clock-comparison`: straight reading c⁻¹T, general bound Δτ(x) ≤ c⁻¹T with equality iff the image is the straight segment, strict case for non-straight piecewise inertial itineraries, and chart-independence of both readings |
| "acceleration/synchronization caveats" | `rem-sr-twin-acceleration-and-synchronization-caveats` (no acceleration term; corner idealization; non-symmetry; the two simultaneity slices at t = T/γ² and t = T(1+v²/c²) and the gap 2Tv²/c²; no empirical content) |
| stable S6 id `thm-sr-future-cone-and-flat-domain-of-dependence` | **not re-minted**: the splice and expanded inventory home it on `sr-causality-and-signals` (batch 5), which now scaffolds it. This pair uses its own cone reversal/endpoint items and does not duplicate that id. |

## Design vs plan

- `research/plan-spec.json` and the generated batch manifest agree with the design
  (`plan-special-relativity-track.md` L126) on page ids, titles, order 219/220, category, library,
  companion and `requires: ["sr-observer-measurements"]`. The design's "requires SR03–04" is
  consistent because the plan edge to SR04 transitively contains SR03. No page-edge or order
  conflict to record.
- **Recorded conflict (run-level, not repaired here).** The frontier `validate-plan` gate reports one
  `undeclared-prereq` finding for this page: `cor-sr-reverse-triangle-and-future-cone-convexity`
  depends on the published `thm-induction-principle`, which is homed on the published mathematics
  page `construction-of-the-natural-numbers` (plan order 80.12), and that page is not in the
  `requires` closure of `sr-proper-time-comparisons`. The correct repair is a plan-owned `requires`
  update on `research/plan-spec.json` followed by the native `drift-apply` sync of the manifest's
  plan-owned metadata — both outside a beta's write scope (shared plans), exactly as the owner's
  earlier `external-prerequisite-repair` handled the same class for batches 1–4. Recorded for the
  owner/Step-4 adjudication instead of dropping the dependency, which would weaken the finite-sum
  reversed triangle inequality that the consumer pages (SR08-style same-character sums) use. The
  same finding class currently affects `sr-energy-momentum` (including the same supplier page) and
  `em-causal-wave-kernel-prerequisites`; the gate fails on those too, so this is not a batch-6-only
  condition.
- **Recorded deviation of source range.** The SR06 coverage row names Crowell §§1.3.3, 1.5
  pp. 25–29, 36–37; for this page the load-bearing Crowell material is at pp. 25–27 (figure s, the
  two-leg metric computation, the reunion/time-dilation/symmetry discussion) and pp. 36–37
  (the reversed Cauchy–Schwarz inequality and the future-directedness note); pp. 28–29 are the
  Hafele–Keating / Chou / muon empirical narratives, which are disposed as deferred to
  `sr-experimental-interface` and are not claimed as read for any item. Carroll's load-bearing range
  is Ch. 3 pp. 68–73 (not 69–73 only), and Reall's is §2.3 pp. 28–30. The exact locators are in the
  coverage file.

## Local closure decisions

- The page supplies every prerequisite of its own claims in-page: the reverse inequalities from the
  model's eta, the rest-frame construction from the boost suppliers of batch 2, the endpoint bound
  from the rest-frame computation, and the physical comparison from the block's postulates. Its
  in-run closure is batches 1–4 (`sr-spacetime-primitives`, `sr-lorentz-transformations`,
  `sr-worldlines-and-clocks`, `sr-observer-measurements`) plus published imported mathematics on
  disk (Riemann/Darboux integrals and the FTC suppliers, finite sums, finite Cauchy–Schwarz, the
  vector-valued derivative/integral and norm-inequality items, square-root and monotonicity items,
  the induction principle, coordinates with respect to a basis).
- **The corner hypothesis (H), and why it is stated.** Batch 3's piecewise C^1 definition
  ("C^1 on the open pieces and one-sided derivatives at the partition points exist") does not by
  itself make the piecewise proper-time integral well defined: a derivative that is continuous on an
  open interval can be unbounded at the endpoints and fail to be Riemann integrable (the same
  phenomenon the library records in `cex-a-function-with-a-primitive-that-is-not-integrable`, and
  the reason `thm-ftc-second-part` carries an integrability hypothesis). SR06 therefore states its
  own corner hypothesis (H): each piece's derivative has finite one-sided limits at both endpoints,
  i.e. extends continuously to the closed piece. This is the library's standard piecewise-C^1
  convention (`def-piecewise-c-one-curve-on-a-manifold`), it is automatic for every piecewise
  inertial worldline (the extended derivative is the constant d_i), and it makes the piecewise
  integral, the per-piece Newton–Leibniz increment and the endpoint bound well defined by
  additivity. The non-(H) piecewise case is deliberately outside the pair's scope. This is recorded
  as an interface observation for the owner; it requires no change to any batch-3 item, since no
  batch-3 claim is restated or weakened here.
- **Interface observation on the batch-3 clock postulate.** `post-sr-free-trajectories-and-clock-
  hypothesis` (ii) states the clock hypothesis for piecewise C^1 histories "with finitely many
  kinks" and attaches the reading to the proper-time difference of `def-sr-proper-time`, which is
  stated there for C^1 worldlines. SR06 supplies the missing piecewise object for the class (H) in
  `def-sr-piecewise-proper-time` and both physics items read the clock hypothesis through it. No
  wording of the batch-3 item is changed (it is out of this batch's scope); the observation is
  recorded for owner reconciliation.
- **Units and the constant c.** The mathematics items treat c as a fixed positive real parameter;
  the SI identification of c, the metre/second units and the coordinate conventions are carried by
  `def-sr-si-units-and-coordinate-conventions` and imported into the physics items as a
  `formulation-prerequisite`. No mathematical item depends on a physical item.
- **Axiom of choice.** No item of either page uses the Axiom of Choice or any countable-choice
  principle; every argument is finite-dimensional or one-variable Riemann-integral real analysis on
  compact intervals, and none of the 22 direct imported dependencies declares a choice assumption.
  No choice declaration is made.
- **Non-claims kept explicit.** (i) the endpoint-bound theorem is a statement about the affine model
  and the class (H) only; it asserts nothing about curved spacetimes and does not identify proper
  time with a clock reading; (ii) the physics theorem and thought experiment are conditional on the
  named postulates, carry their idealizations in `physical_scope`, and claim no measurement,
  statistical inference or real-clock behavior; (iii) the remark quantifies its slice computations
  and explicitly excludes real apparatus; (iv) the counterexamples delimit the future/orientation
  hypotheses rather than weakening any positive claim.
- **Exact independent checks performed while scaffolding (not claims of review).** The two-leg and
  simultaneity numbers were recomputed by hand with exact rational arithmetic (β = 3/5: two-leg
  reading 8T/5 against 2T; slices 16T/25 and 34T/25; gap 18T/25; reconciliation
  16T/25 + 18T/25 + 16T/25 = 2T; relative boost 15/17; reverse Cauchy–Schwarz witness values
  34 ≥ 16 and 32 = 4·8; rest frame e′₀ = (5/4, 3/4, 0, 0) and chart value (4,0,0,0)). These are
  scaffold-construction checks; Step 3 authors and independent reviewers must re-derive them.

## Sources (A page)

Three independent treatments were read over the exact load-bearing ranges and are recorded in
`research/physics-em-sr-40-2026-10-08-batch-6.coverage.json` (20 harvested headings, all disposed:
9 included, 1 inline, 6 deferred, 4 out-of-scope) and are full-text fetch-stamped 3/3:

1. B. Crowell, *Special Relativity* (rev. 2020-12-10), textbook; §1.3.3 pp. 25–27 and §1.5
   pp. 36–37; `https://archive.org/download/sr_20220102/sr.pdf` (fetch-verified, 10 728 180 bytes,
   246 pages, sha16 `4c11e8f367267d53` — identical bytes to batches 1 and 3).
2. S. M. Carroll, *Lecture Notes on General Relativity*, lecture notes; Ch. 3 pp. 68–73 (PDF
   pp. 75–80); `https://arxiv.org/pdf/gr-qc/9712019` (fetch-verified, 1 583 209 bytes, 238 pages,
   sha16 `d4cbfeed3a18370c` — identical bytes to batches 1, 2 and 3).
3. H. S. Reall, Mathematical Tripos Part III General Relativity (2022-10-12), lecture notes; §2.3
   pp. 28–30; Internet Archive copy of the original
   `https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf` (fetch-verified, 1 017 792
   bytes, 125 pages, sha16 `fe8a24c67e884ff1`).

Source-recovery record (history, not hidden): the original DAMTP location fails TLS verification in
this environment. The initial attempt plus five retries were already executed and recorded by
batch 1 (`research/physics-em-sr-40-2026-10-08-batch-1.coverage.json`,
`original_location_attempts`, 2026-10-08T12:21:48Z–12:21:51Z, all
`UNABLE_TO_VERIFY_LEAF_SIGNATURE`); this batch reuses that genuine attempt record verbatim
(`original_url` + `original_location_attempts` on the Reall source row) and does not restart the
retry allowance. The reader-facing URL is the byte-identical Wayback snapshot used by batches 1 and
3, whose bytes match the reader's archived copy
`research/first-principles-2026-10-03/relativity/reader-gourgoulhon/sources/reall-part3-gr.pdf`.
This is the "same document from the archive" recovery, not a source drop and not an
alternative-proof substitution.

Notable source limitations carried into the scaffold: Crowell uses signature (+−−−) and c = 1, so
every formula is converted to (−+++) with x⁰ = ct; his twin computation is a single diagram
evaluation and his reverse-inequality section defers the future-directed triangle inequality to
problem 18, so the complete equality-case argument is supplied locally; his empirical narratives
(Hafele–Keating; Chou et al. 2010; the 1974 CERN muon experiment) are secondary reports and are
deferred to the experimental-interface pair with the primary-report requirement recorded. Carroll's
maximality discussion (pp. 71–72) is heuristic ("jagged null curves") and explicitly local in curved
spacetime; the flat global bound and equality case are proved locally, and the curved statement is
deferred to the GR geodesic pages. Reall derives the Euler–Lagrange equation (2.17)–(2.25) and
states the Minkowski straight-line maximum as "it can be shown"; the variational derivation is
deferred to `gr-connections-and-free-fall` and the flat statement is proved locally.

## Cross-batch dependencies and consumer inputs

- `research/physics-em-sr-40-2026-10-08-batch-6.cross-batch-dependencies.json` holds 102 rows: 101
  item rows (one per declared cross-batch item edge, all into batches 1–4) and 1 page row
  (`sr-proper-time-comparisons` → `sr-observer-measurements`). Imported published mathematics on
  disk is graph context, not a cross-batch run edge, so it has no rows. Every declared batch-6 edge
  carries a review row in the unified ledger (`frontier-dependency-ledger.mjs refresh` reports 0
  orphaned reviews and no unreviewed batch-6 edge); the run-wide `--require-reviewed` mode remains
  red because 23 batches have no input file yet at the last refresh (the count moves as sibling
  batches land).
- Downstream consumers (SR10 accelerated observers, SR12 experimental interface, the SR08-style
  same-character sums, and any EM page using proper-time comparisons) consume, in particular: the
  stable endpoint-bound theorem and its equality case, `def-sr-piecewise-proper-time`,
  `def-sr-inertial-and-piecewise-inertial-worldline`, the reverse inequalities and the physical
  comparison. Each consumer must review its own edge in its own cross-batch input; this file only
  records the edges of this batch. The B-page examples are leaves and must not be consumed.
- **For the sibling/consumer batches:** `thm-sr-future-cone-and-flat-domain-of-dependence` (S6 in
  the supplier layer) is homed on `sr-causality-and-signals` (batch 5) and is not re-minted here;
  SR06's cone reversal and endpoint bound are separate items on this page, and no page may treat
  them as the SR05 causal-reachability theorem.

## Checks actually run (exact results)

| Check | Command | Result |
|---|---|---|
| manifest deps (batch 6) | `node tools/physics-support/manifest-deps.mjs research/...batch-6.pages.json` | 16 items, 0 missing, 0 errors |
| manifest deps (all batches) | `node tools/physics-support/manifest-deps.mjs research/...batch-*.pages.json` | 234 items, 0 missing, 0 errors |
| manifest policy | `node tools/physics-support/content-policy.mjs --manifest-only research/...batch-*.pages.json` | 234 scoped items, 0 errors, 0 warnings |
| physics content (engine form) | `node tools/physics-support/physics-check.mjs --run physics-em-sr-40-2026-10-08 --plan research/plan-spec.json` | 0 errors, 234 items checked |
| coverage | `node tools/physics-support/coverage-checklist.mjs research/...batch-6.coverage.json --require-destination` | 1 page, 20 harvested results, 0 errors, 0 warnings |
| full-text fetch | `node tools/physics-support/source-fetch-check.mjs --coverage research/...batch-6.coverage.json --stamp` then check mode | 3/3 sources fetch-verified (3 newly stamped); check mode 3/3 |
| URL liveness (batch scope) | `node tools/physics-support/url-sweep.mjs --coverage research/...batch-6.coverage.json --out /tmp/b6/url-liveness.json --recover --fail-on-dead` | 3/3 live, 0 failed |
| source backing | `node tools/physics-support/source-backing.mjs --coverage research/...batch-6.coverage.json --liveness /tmp/b6/url-liveness.json` | 6 authored results, every one backed; empty reharvest list |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | batch-6 items clean (levels 6–14); remaining 46 errors are other pages' empty inventories |
| readiness | `node tools/physics-support/step1-decisions.mjs check --run physics-em-sr-40-2026-10-08` | 234 declared items, 210 ready, 70 open work rows (24 other batches' missing records + 46 empty page inventories); no batch-6 item open |
| scope ledger | `node tools/physics-support/manifest-integrity.mjs --run physics-em-sr-40-2026-10-08` | 80/80 pages present, no scope drift |
| drift review | `node tools/physics-support/drift-review-check.mjs --run physics-em-sr-40-2026-10-08` | 40 pages reviewed, 0 blocked edges |
| external refs | `node tools/physics-support/extcheck.mjs` | 0 recorded-not-proved, OK |
| cross-batch ledger | `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` | refreshed, 0 orphaned reviews; batch-6 input complete (102 rows) |
| frontier plan validator | `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan` | FAIL with 6 `undeclared-prereq` findings; 1 for this page (see §Design vs plan), recorded as a plan-owned `requires` repair |

The counts "234 / 210 / 46 / 70 / 23" move as sibling batches are scaffolded, recorded and
re-recorded by their own owners during this run; they are the values at the last run of each
command in this batch.

## Run-level findings (not batch-6 blockers)

1. **`undeclared-prereq` for this page (owner/Step-4 repair).** As recorded in §Design vs plan:
   `construction-of-the-natural-numbers` must be added to the plan's `requires` for
   `sr-proper-time-comparisons` (via the item dependency `thm-induction-principle` in
   `cor-sr-reverse-triangle-and-future-cone-convexity`), followed by a native `drift-apply` sync.
   Batches 1–4 received the same repair earlier; this batch's other edge decisions are clean.
2. **Step-1 readiness and dependency-level gates are run-wide.** They stay red until every batch's
   manifest is populated and recorded; batch 6 contributes 16 items, all `ready`, with zero open or
   stale rows.
3. **Cross-batch ledger is run-wide.** `refresh --require-reviewed` stays red until all 40 batches
   supply an input (23 without one at the last refresh); batch 6's own input (102 rows) and review
   rows are complete.
4. **Root mathematics import drift (external, not a supplier of this pair).**
   `node tools/physics-support/physics-check.mjs --plan research/plan-spec.json` (without `--run`)
   exits 1 with `mathematics import changed: items/thm-hilbert-basis-theorem.md`; the engine's
   run-scoped invocation passes. `thm-hilbert-basis-theorem` is not a dependency of this pair.
   Reconciliation is an owner action outside an active run.
5. **`fwdcheck` legacy findings.** `node tools/physics-support/fwdcheck.mjs --quiet` exits 1 on
   imported legacy mathematical items (for example `items/thm-zero-weak-gradient-implies-
   componentwise-constancy.md`); fwdcheck is not a step-1 gate and does not concern this pair. It is
   recorded for owner/engine reconciliation before the later repo-wide gates.
6. **Scoped `extcheck --manifest-only` cannot run yet.** The frontier wrapper aborts because other
   batches still carry empty item arrays; this is a stage precondition, not a batch-6 defect.
   Batch 6 declares no `proved_here: false` item, no `external_refs` and no `forward_refs`.

## Unresolved / escalated

- No batch-6 item is escalated: each has a complete statement, an explicit proof or
  non-derivation strategy, named dependencies with roles and a computed dependency level, and every
  supplier is scaffolded in this run or published on disk. The escalations recorded above are the
  plan-owned `requires` repair for `construction-of-the-natural-numbers` and the two interface
  observations on batch-3's piecewise C^1 definition and piecewise clock-postulate wording, which
  require owner reconciliation, not a change to any claim.
- The only source-level uncertainty is the DAMTP TLS failure, reused from batch 1 and resolved by the
  byte-identical archive copy; no alternative proof was needed or claimed.

## Final verification (after the last edits)

- `manifest-deps` on the final batch-6 manifest: 16 items, 0 missing, 0 errors.
- `content-policy --manifest-only` over all current manifests: 0 errors, 0 warnings.
- `coverage-checklist --require-destination` on the batch file: 0 errors, 0 warnings.
- `source-fetch-check` in check mode: 3/3 fetch-verified; the coverage file carries the stamps and
  the original-location attempt history; `url-sweep` 3/3 live and `source-backing` every authored
  result backed.
- `physics-check --run ... --plan`: 0 errors, 234 items.
- `item-dependency-levels check --run`: no batch-6 error; all 16 `dependency_level` labels equal the
  computed levels.
- `step1-decisions check --run`: the 16 batch-6 records are closed and current; every open row
  belongs to another batch.
- Stage-artifact simulation for unit 6 (`tools/physics-autopilot/stages/mathlib.mts`,
  `1-scaffold.artifacts`): the manifest, the coverage file and all 16
  `research/...-step1-<id>.json` records exist, every record is current (`step1Decision` closed) and
  every `dependency_level` matches the computed level, so no `...batch-6.scaffold-incomplete`
  sentinel applies and the pair is releasable to its dependent batches.
