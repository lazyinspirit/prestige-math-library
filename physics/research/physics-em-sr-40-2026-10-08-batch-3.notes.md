# Batch 3 notes — `sr-worldlines-and-clocks` / `sr-worldlines-and-clocks-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, label batch-3, covers 1. Owned pair:
`sr-worldlines-and-clocks` (A, order 213, category `special-relativity`, `library: physics`) and
`sr-worldlines-and-clocks-examples` (B, order 214). Step 1 scaffold construction only: no item was
authored, and no readiness record is independent mathematical approval (Step 3 review follows).
Nothing outside the assigned manifests, coverage, notes, readiness records and the consumer-batch
dependency input was written.

Authority read in full before construction: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`../PHYSICS-CONTENT-MODEL.md`, the owner authoring direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`, the design section
`research/plan-special-relativity-track.md` L56, the full source design
`research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md` (SR03 inventory and
the S1/S4 paragraphs), the S4 argument in `.../scaffold/sr-supplier-proofs.md`, the closure ledger
(M03 = "positive integral derivative/inverse/substitution argument"), the expanded item inventory,
the splice `proposed_item_homes`, the EM supplier contract `sr-em-supplier-contract.json`, the SR03
source-coverage row in `.../scaffold/prose-scaffold.md`, the reader reports
(`reader-taylor`/Crowell, `reader-carroll`, `reader-gourgoulhon`/Reall), the current
`research/plan-spec.json`, and batch 1's and batch 2's manifests and notes (the supplier pairs).

---

## Scope built

- **A page** `sr-worldlines-and-clocks`, 8 items in dependency order: 6 domain-mathematics items
  (`def-sr-regular-causal-curve-and-worldline`, `def-sr-proper-time`,
  `lem-sr-proper-time-parametrization`, `lem-sr-proper-time-reparametrization-invariance`,
  `def-sr-four-velocity-and-four-acceleration`, `thm-sr-proper-time-and-observer-decomposition`),
  one `postulate` (`post-sr-free-trajectories-and-clock-hypothesis`) and one `physics-theorem`
  (`pthm-sr-four-velocity-norm-and-orthogonality`). No mathematical item depends on a physical item.
- **B page** `sr-worldlines-and-clocks-examples`, 8 leaf items, all domain mathematics: 5 `example`
  (`ex-sr-clock-at-rest-in-a-chart`, `ex-sr-proper-time-of-a-straight-worldline`,
  `ex-sr-proper-time-reparametrization`,
  `ex-sr-four-velocity-and-acceleration-of-a-circular-worldline`, `ex-sr-observer-split-worked`)
  and 3 `counterexample` (`cex-sr-null-curves-have-no-proper-time-parametrization`,
  `cex-sr-spacelike-curves-have-no-proper-time`,
  `cex-sr-past-directed-timelike-parametrization-is-not-a-worldline`). All have `provenance.statement:
  ai-generated` with `generation.role` set, so none of them may be a `deps` target; nothing outside
  the pair depends on them, and no item depends on a B-page item.
- Page `order`, `id`, `kind`, `category`, `library`, `title`, `companion` and `requires` are
  unchanged from the plan record and the generated task shell; the only edits are the two `items`
  arrays.
- `dependency_level` computed from in-run `deps` only (batch 1 items count as in-run; published
  imports and other planned pages do not raise a level):

  | level | item |
  |---|---|
  | 7 | `def-sr-regular-causal-curve-and-worldline` |
  | 8 | `def-sr-proper-time` |
  | 9 | `lem-sr-proper-time-parametrization`, `lem-sr-proper-time-reparametrization-invariance` |
  | 10 | `def-sr-four-velocity-and-four-acceleration` |
  | 11 | `thm-sr-proper-time-and-observer-decomposition` |
  | 9 | `post-sr-free-trajectories-and-clock-hypothesis` |
  | 12 | `pthm-sr-four-velocity-norm-and-orthogonality` |
  | 12 | `ex-sr-clock-at-rest-in-a-chart`, `ex-sr-proper-time-of-a-straight-worldline`, `ex-sr-four-velocity-and-acceleration-of-a-circular-worldline`, `ex-sr-observer-split-worked` |
  | 10 | `ex-sr-proper-time-reparametrization` |
  | 9 | the three counterexamples |

  `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`
  reports no error for any batch-3 item (the remaining errors are the other batches' not-yet-
  scaffolded empty inventories).
- **Budget.** The design reserves 22 A / 10 B closure slots. The pair is built to 8 A / 8 B because
  the promised content closes with fewer items; the reservation is a budget, not a target, and the
  mapping of every promised inventory element is recorded below. The A page is far below the
  100-item cap, so no split is required.

### Mapping of the SR03 design inventory

| design element | disposition |
|---|---|
| "def regular causal curve/proper time" | `def-sr-regular-causal-curve-and-worldline` (curves, C^k via affine difference quotients, causal character, future timelike worldline, piecewise C^1 and C^2 variants) and `def-sr-proper-time` (the proper-time integral with the factor c^{-1}, the oriented integral and the straight-segment consistency) |
| "M03" (positive integral derivative/inverse/substitution argument) | `lem-sr-proper-time-parametrization` (FTC derivative, strict monotonicity, C^1 inverse and reciprocal derivative) and `lem-sr-proper-time-reparametrization-invariance` (substitution) |
| "def u/a" | `def-sr-four-velocity-and-four-acceleration` (U = x'/tau', A = U'/tau', chain-rule identification with the proper-time parametrized tangent) |
| "pthm norm and orthogonality" | `pthm-sr-four-velocity-norm-and-orthogonality`, the model-conditional physical packaging (clock reading, eta(U,U) = -c^2, eta(U,A) = 0, free clocks have A = 0, relative speed below c); the mathematical identities themselves are clauses of the stable theorem |
| "post free trajectories/clock hypothesis" | `post-sr-free-trajectories-and-clock-hypothesis` (free massive particles on straight future timelike lines; the clock-reading rule extended to the general worldline calculus with no acceleration-dependent term) |
| the stable S4 interface `thm-sr-proper-time-and-observer-decomposition` | minted here with exactly the promised content: proper-time parametrization, U/A norms, observer rest split and the relative velocity/acceleration formulas |

## Design vs plan

- `research/plan-spec.json` and the generated batch manifest agree with the design
  (`plan-special-relativity-track.md` L56) on page ids, titles, order 213/214, category, library,
  companion and `requires: ["sr-lorentz-transformations"]`; the design's "requires SR01-02" is
  consistent because the plan edge to SR02 transitively contains SR01. No page-edge or order
  conflict to record.
- The stable ids are minted exactly where the splice, the expanded inventory and the EM supplier
  contract place them: `thm-sr-proper-time-and-observer-decomposition` on `sr-worldlines-and-clocks`
  (consumed by the EM pages `def-em-relativistic-worldlines-frames`, `post-em-lorentz-coupling`,
  `pthm-em-lienard-emitted-power`, `lem-em-particle-curve-variation`). All other ids in this batch
  are new stable unused ids; no item of batch 1 or batch 2 is re-minted.
- **Recorded conflict (run-level, not repaired here).** The page declaration
  `sr-worldlines-and-clocks requires [sr-lorentz-transformations]` does not cover the published
  mathematics pages that this page's items consume, so the frontier run-mode plan validator reports
  `undeclared-prereq`: `rn-as-a-normed-space`, `monotone-sequences-and-cauchy-completeness`,
  `properties-of-the-integral-and-the-working-ftc`, `the-riemann-integral`,
  `roots-and-rational-powers`, `the-logarithm-and-general-powers`,
  `continuity-ivt-evt-and-uniform-continuity`, `monotone-functions-and-discontinuities`,
  `the-derivative-and-mean-value-theorems`, `linear-maps-rank-nullity-and-quotient-spaces`. All ten
  are already-planned imported mathematics pages with lower order (80.x) and are genuine
  prerequisites of the item strategies. The correct repair is a plan-owned `requires` update on
  `research/plan-spec.json` followed by a `drift-apply` sync of the manifest's plan-owned metadata;
  both are outside a beta's write scope (`shared plans` are not editable by the scaffolder), so this
  is recorded for the owner/planner rather than applied. The same class of finding exists for
  batches 1, 2, 13, 14 and 15, whose manifests also predate the plan's later `requires` additions
  (for example `sr-spacetime-primitives` and `sr-lorentz-transformations` carry the mathematics
  pages in `plan-spec.json` but not in their manifests).
- **Recorded deviation of source range.** The design's coverage table cites "Carroll Ch1/3 pp8-16,
  68-70" as the SR03-04 source range. For this page the load-bearing Carroll material is at
  pp. 26-27 (worldline, proper time (1.97), four-velocity (1.98)-(1.99)) and pp. 68-71 (the
  proper-time functional and its variation; affine parameters; the maximum remark); pp. 8-16 is the
  tensor/dual-vector calculus used by other pages of the framework, not by any item here, so it is
  not claimed as read for this pair. The coverage locator records the exact ranges read.
- **Duplication check against batch 1.** `post-sr-ideal-clocks-and-light` (batch 1, S1) already
  adopts the ideal-clock reading rule (including the clock hypothesis) at the model level. The
  SR03 design's "post free trajectories/clock hypothesis" is therefore minted as an extension: the
  free-trajectory clause is new content, and the clock-hypothesis clause is the applicability
  statement for the general worldline calculus of this page. The dependency on the batch-1
  postulate is declared with role `formulation-prerequisite` (a postulate may not be "derived"
  from a physical assumption in this schema; `physics-content.mjs` enforces exactly this).

## Local closure decisions

- The page supplies every prerequisite of its own claims in-page. Its in-run closure is
  `sr-spacetime-primitives` (batch 1: affine model, Lorentz form, causal classification, time
  orientation, cone components, orthonormal basis, frames/charts, transition smoothness, spatial
  Euclidean structure, SI conventions, both postulates) plus published imported mathematics on
  disk (FTC and the working FTC corollary, substitution, continuous-inverse and inverse-derivative
  theorems, Cauchy-Schwarz for finite sums, real power continuity/derivatives, the monotonicity and
  nonnegative-vanishing integral theorems, vector-valued calculus, rank-nullity). Batch 2 items are
  not needed at item level; the page edge remains as an ordering prerequisite.
- The S4 argument is split so that each MathOverflow-scale step has its own supplier: the
  derivative/inverse step (M03) is `lem-sr-proper-time-parametrization`; the substitution step (M03)
  is `lem-sr-proper-time-reparametrization-invariance`; the norm/orthogonality and observer
  decomposition is the stable `thm-sr-proper-time-and-observer-decomposition`. The projection
  clause is proved by a coordinate computation in an eta-orthonormal basis with the finite
  Cauchy-Schwarz inequality (no appeal to a boost, no topology), and the positivity of
  `gamma = -eta(n,u)` uses the future-cone coordinate description of
  `lem-timelike-cone-has-two-convex-components`.
- **Units and the constant c.** The mathematics items treat c as a fixed positive real parameter;
  the physical identification of c, the m/s and m/s^2 units and the SI coordinate conventions are
  carried by `def-sr-si-units-and-coordinate-conventions` on the physical items
  (`post-sr-free-trajectories-and-clock-hypothesis`, `pthm-sr-four-velocity-norm-and-orthogonality`),
  which import it as a `formulation-prerequisite`. No mathematical item depends on a physical item.
- **Axiom of choice.** No item of either page uses the Axiom of Choice or any countable-choice
  principle: every argument is finite-dimensional or one-variable real analysis. No choice
  declaration is needed, and none is made.
- **Non-claims kept explicit.** (i) `def-sr-four-velocity-and-four-acceleration` does not assert
  unit norm or orthogonality; (ii) `def-sr-proper-time` does not assert differentiability,
  invertibility or clock behaviour; (iii) the postulate does not assert conservation laws, a
  mass-shell relation, a force law or collision kinematics (those need the later momentum
  postulate); (iv) the physics theorem is conditional and carries the idealizations of its premises;
  (v) the counterexamples delimit the future timelike hypothesis rather than weakening any claim.
- **Exact independent checks performed while scaffolding (not claims of review).** The worked
  numbers of the B page were recomputed by hand with exact rational arithmetic: beta = 3/5 gives
  tau' = 4/5 and U = (5c/4, 3c/4, 0, 0) with eta(U,U) = -c^2; the cubic reparametrization
  x(u) = u^3 d, d = (5,3,0,0) gives 12u^2 on [1,2] and 28/c in both parametrizations; the circular
  worldline has w.a = 0, A = gamma^2 a, eta(A,A) = gamma^4 R^2 omega^4 and with R omega = 3c/5 the
  value (15 c omega)/16; the observer split of u = (5/4,3/4,0,0) gives gamma = 5/4,
  h(u) = (0,3/4,0,0) and w = (0,3c/5,0,0). The equivalence of the projection h with Crowell's
  P_o under a normalized observer, and the index-free algebra of the decomposition, were checked
  against the source formulas under the (+---) to (-+++) conversion. These are scaffold-construction
  checks; Step 3 authors and independent reviewers must re-derive them.

## Sources (A page)

Three independent treatments were read over the exact load-bearing ranges and are recorded in
`research/physics-em-sr-40-2026-10-08-batch-3.coverage.json` (44 harvested headings, all disposed:
25 included, 9 inline, 8 deferred, 2 out-of-scope) and are full-text fetch-stamped 3/3:

1. B. Crowell, *Special Relativity* (rev. 2020-12-10), textbook; Sections 3.5 pp. 60-64, 3.6 p. 65
   and 3.7 pp. 66-68; `https://archive.org/download/sr_20220102/sr.pdf` (fetch-verified,
   10 728 180 bytes, 246 pages, sha16 `4c11e8f367267d53`; one HTTP 500 on the first fetch attempt
   followed by success, recorded in `recovery_attempts`).
2. S. M. Carroll, *Lecture Notes on General Relativity*, lecture notes; Chapter 1 pp. 26-27
   (PDF pp. 33-34) and Chapter 3 pp. 68-71 (PDF pp. 75-78); `https://arxiv.org/pdf/gr-qc/9712019`
   (fetch-verified, 1 583 209 bytes, 238 pages, sha16 `d4cbfeed3a18370c`).
3. H. S. Reall, Mathematical Tripos Part III General Relativity (2022-10-12), lecture notes;
   Section 2.2 pp. 27-28 (PDF pp. 28-29) and Section 2.3 pp. 28-30 (PDF pp. 29-31); Internet
   Archive copy `https://web.archive.org/web/20230323191108id_/...part3_gr_lectures.pdf`
   (fetch-verified, 1 017 792 bytes, 125 pages, sha16 `fe8a24c67e884ff1`).

Source-recovery record (history, not hidden): the original DAMTP location
`https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf` fails every client in this
environment at TLS setup (`curl: (60) ... unable to get local issuer certificate`); the same-origin
history of batches 1 and 2 of this run is recorded in
`research/physics-em-sr-40-2026-10-08-batch-1.coverage.json` (`original_location_attempts`, initial
attempt plus five retries) and this batch's own HEAD attempt is recorded in the coverage file's
`original_location_attempts` (`2026-10-08T13:12:35Z`). The reader-facing URL is the Wayback snapshot,
whose bytes are identical to the copies fetched by batches 1 and 2 (same sha16) and which is
declared as `original_url` provenance so the liveness sweep does not re-probe a superseded link.
This is the "same document from the archive" recovery, not a source drop and not an
alternative-proof substitution.

Notable source limitations carried into the scaffold: Crowell uses signature (+---) and c = 1, so
every formula is converted to (-+++) with x^0 = c t (the conversion is explicit in the item
strategies); his velocity vector is defined only for timelike world-lines and his acceleration
discussion is an idealized point-particle account. Carroll uses c = 1 and derives the geodesic
equation in a general Lorentzian metric; only the flat, proper-time-parametrization parts are
harvested. Reall works in a Lorentzian manifold with c = 1; his §2.2-2.3 provide the definitions and
the flat example, while the variational derivation is deferred to the GR connections page.

## Cross-batch dependencies and consumer inputs

- Batch input file `research/physics-em-sr-40-2026-10-08-batch-3.cross-batch-dependencies.json`
  holds 36 item rows and 1 page row, one per declared cross-batch edge (all item edges point into
  batch 1; the page edge points to batch 2). `frontier-dependency-ledger.mjs refresh` reports 0
  orphaned reviews and every declared batch-3 edge carries a review row; the unified ledger's
  remaining `unreviewed_batches` are the batches not yet scaffolded.
- Downstream consumer batches (SR04 observer-measurements, SR05 causality, SR06 proper-time
  comparisons, SR07 light-and-doppler, SR08 energy-momentum, SR10 accelerated observers, SR12
  experimental interface, and the EM pages named in §Design vs plan) will consume, in particular:
  the stable `thm-sr-proper-time-and-observer-decomposition` (τ parametrization, U norm, d/dτ = γ d/dt,
  rest projection h and observer speed), `def-sr-four-velocity-and-four-acceleration`,
  `def-sr-regular-causal-curve-and-worldline` and the two postulates. Each consumer must review its
  own edge in its own cross-batch input; this file only records the edges of this batch. The B-page
  examples are leaves and must not be consumed.

## Checks actually run (exact results)

| Check | Command | Result |
|---|---|---|
| manifest deps (all batches) | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-*.pages.json` | 91 items, 0 missing, 0 errors |
| manifest policy (all batches) | `node tools/physics-support/content-policy.mjs --manifest-only research/physics-em-sr-40-2026-10-08-batch-*.pages.json` | 91 scoped items, 0 errors, 0 warnings |
| coverage | `node tools/physics-support/coverage-checklist.mjs research/...batch-3.coverage.json --require-destination` | 1 page, 44 harvested results, 0 errors, 0 warnings |
| full-text fetch | `node tools/physics-support/source-fetch-check.mjs --coverage research/...batch-3.coverage.json --stamp` | 3/3 sources fetch-verified (check mode 3/3 resolved) |
| URL liveness (batch scope) | `node tools/physics-support/url-sweep.mjs --coverage research/...batch-3.coverage.json --out /tmp/batch3-url-liveness.json --recover --fail-on-dead` | 3/3 live, 0 failed (after the `original_url` declaration on the Reall source) |
| source backing | `node tools/physics-support/source-backing.mjs --coverage research/...batch-3.coverage.json --liveness /tmp/batch3-url-liveness.json` | 6 authored results, every one backed; empty reharvest list |
| physics content (engine form) | `node tools/physics-support/physics-check.mjs --run physics-em-sr-40-2026-10-08 --plan research/plan-spec.json` | 0 errors, 91 items checked |
| plan (page level) | `node tools/physics-support/validate-plan.mjs research/plan-spec.json` | exit 0 |
| scope ledger | `node tools/physics-support/manifest-integrity.mjs --run physics-em-sr-40-2026-10-08` | 80/80 pages present, no scope drift |
| drift review | `node tools/physics-support/drift-review-check.mjs --run physics-em-sr-40-2026-10-08` | 40 pages reviewed, no blocked edges |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | batch-3 items clean (7-12); remaining errors are other batches' empty inventories |
| readiness | `node tools/physics-support/step1-decisions.mjs check --run physics-em-sr-40-2026-10-08` | 91 declared items, 91 ready, 0 open item rows; the 68 open rows are other batches' empty inventories |

## Run-level findings (not batch-3 blockers)

1. **Frontier plan validator (`undeclared-prereq`).** `node tools/physics-support/frontier-item-gate.mjs
   --run physics-em-sr-40-2026-10-08 --tool validate-plan` exits 1 with 85 `undeclared-prereq`
   findings across the scaffolded batches, 10 of them for `sr-worldlines-and-clocks` (the ten
   mathematics pages listed under §Design vs plan). The finding is a page-declaration gap: the
   page's `requires` (matching the current plan record) omits the published mathematics pages its
   items consume. Repair belongs to the plan writer plus a `drift-apply` sync; a beta may not edit
   the shared plan, and a manifest-only edit would be reverted by that sync.
2. **Root mathematics import drift.** `node tools/physics-support/physics-check.mjs --plan
   research/plan-spec.json` (without `--run`) exits 1 with `mathematics import changed:
   items/thm-hilbert-basis-theorem.md`. The physics snapshot still matches
   `research/math-imports.json` (sha256 `477f7015a44a08...` recomputed and equal), but the root
   original `../items/thm-hilbert-basis-theorem.md` now differs
   (sha256 `7fc568a1f412bc1a...`; modified 2026-10-08 23:28 in the root working tree) — external
   activity in the mathematics repository. Exactly one of the 28 422 imported files has drifted.
   The file is not a supplier of this pair; in the engine's actual invocation (`--run`, which
   restricts the source comparison to the frontier import scope) the check passes. Reconciliation
   is an owner action outside an active run.
3. **Scoped `extcheck --manifest-only` cannot run yet.** The frontier wrapper aborts with
   `Invalid or empty current page in physics-em-sr-40-2026-10-08-batch-10.pages.json` because the
   reader loads every run manifest and other batches still carry empty item arrays. This is a
   stage precondition, not a batch-3 defect: batch 3 declares no `proved_here: false` item, no
   `external_refs` and no `forward_refs`, so its own extcheck scope is empty.
4. **Ledger gate** `frontier-dependency-ledger.mjs refresh --require-reviewed` remains red run-wide
   until every batch supplies an input and every declared edge has a review row; batch 3's input is
   complete (0 orphaned reviews, 0 unreviewed batch-3 edges).

## Unresolved / escalated

- No batch-3 item is escalated: each has a complete statement, an explicit proof or
  non-derivation strategy, named dependencies with roles and a computed dependency level, and
  every supplier is scaffolded in this run or published on disk. The only escalations are the
  run-level findings above (page `requires` reconciliation and the root-library import drift),
  which are recorded for the owner and the Step-1 repair loop.

## Final verification (after the last edits)

- `manifest-deps` on all current manifests: 91 items, 0 missing, 0 errors.
- `content-policy --manifest-only` over all current manifests: 0 errors, 0 warnings.
- `coverage-checklist --require-destination` on the batch file: 0 errors, 0 warnings.
- `source-fetch-check` in check mode: 3/3 fetch-verified; the coverage file carries the stamps and
  the original-location history.
- `url-sweep` on the batch coverage: 3/3 live, 0 failed; `source-backing`: every authored result
  backed.
- `physics-check --run ... --plan`: 0 errors, 91 items.
- Stage-artifact simulation for unit 3 (`tools/physics-autopilot/stages/mathlib.mts`,
  `1-scaffold.artifacts`): the manifest, the coverage file and all 16 `research/...-step1-<id>.json`
  records exist, every record is current (`step1Decision` closed) and every `dependency_level`
  matches the computed level, so no `...batch-3.scaffold-incomplete` sentinel applies and the pair
  is releasable to its dependent batches.
