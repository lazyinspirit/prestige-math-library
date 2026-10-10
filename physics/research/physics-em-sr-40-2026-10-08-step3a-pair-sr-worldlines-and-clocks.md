# Step 3a scope report — pair `sr-worldlines-and-clocks` / `sr-worldlines-and-clocks-examples`

- Run: `physics-em-sr-40-2026-10-08`, role alpha, label
  `step3a-pair-sr-worldlines-and-clocks-832dde4a3fa70e1b`.
- A page `sr-worldlines-and-clocks` (order 213, batch 3, category
  `special-relativity`, `library: physics`, 11 items: 9 domain-mathematics
  items, 1 postulate, 1 physics-theorem). B companion
  `sr-worldlines-and-clocks-examples` (order 214, 8 leaf items: 5 examples,
  3 counterexamples). Batch 3 holds only this pair.
- Scope decision: **sufficient** for the A page, recorded via
  `tools/physics-support/step3-decisions.mjs record-scope`. No omission found,
  no pair merger or enrichment recommended, no owner proceed/merge/enrich
  action requested. Three non-blocking observations are recorded at the end.

## Inputs read

- Current native manifests: `research/physics-em-sr-40-2026-10-08-batch-3.pages.json`
  (this pair) and, for the consumer and prerequisite scans, all 40
  `…-batch-*.pages.json`; coverage `…-batch-3.coverage.json`; dependency
  records `…-batch-3.cross-batch-dependencies.json` (47 rows); readiness
  records `research/…-step1-<item>.json` (checked, not edited); `…-batch-3.notes.md`
  (read, known stale — see Observation 1).
- Plan: `research/plan-spec.json` (pair entries 213/214 and the P entries of
  the declared prerequisite pages); design index
  `research/plan-special-relativity-track.md` §Worldlines And Clocks (L56–80);
  full source design
  `research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md`
  (SR03 row and the precise-objects prose), the S4 argument in
  `…/scaffold/sr-supplier-proofs.md` §S4, the closure-ledger entry `M03`
  ("positive integral derivative/inverse/substitution argument"), the SR03 row
  of `proposed-inventory-and-checks.json`, `expanded-item-inventory.json`
  (`thm-sr-proper-time-and-observer-decomposition`, home SR03), and
  `research/prose-scaffold-splice.json` (`proposed_item_homes`: that stable id
  is homed on `sr-worldlines-and-clocks`).
- Owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`
  (weak-piecewise histories with finite one-sided quotient tangents; the
  `def-sr-piecewise-proper-time` earlier home before the clock postulate;
  monotone-including-vanishing-derivative interface of
  `lem-sr-proper-time-reparametrization-invariance`; the retained `omega = 0`
  case of the circular example). EM supplier contract
  `research/first-principles-2026-10-03/relativity/sr-em-supplier-contract.json`
  (`thm-sr-proper-time-and-observer-decomposition`, "proper-time
  parametrization, U/A norms, observer rest split and relative
  velocity/acceleration formulas").
- Pinned imports `research/math-imports.json` (28 422 entries) and the
  published placements under `library/`; item carriers `items/`.

## Scope evidence (design vs current content)

Design row SR03 reserves exactly: "def regular causal curve/proper time; M03;
def u/a; pthm norm and orthogonality; post free trajectories/clock hypothesis",
budget 22 A / 10 B, closure S4, declared prerequisites SR01–02. Every reserved
element is built, and the current manifest adds only the owner-directed
weak-piecewise developments:

| design element | current item(s) |
|---|---|
| def regular causal curve | `def-sr-regular-causal-curve-and-worldline` (curve domain, affine difference-quotient derivative, C^k, piecewise C^1 with finite one-sided quotient tangents, causal character, future timelike worldline, no derivative-limit hypothesis) |
| def proper time | `def-sr-proper-time` (factor c^{-1}, oriented integral, future timelike hypothesis, straight-segment value, additive base point); `def-sr-piecewise-proper-time` (weak piecewise total proper time, ordinary closed-piece Riemann (H) case special) per owner direction |
| M03 derivative/inverse/substitution | `lem-sr-proper-time-parametrization` (FTC derivative, strict monotonicity, C^1 inverse, reciprocal derivative); `lem-sr-proper-time-reparametrization-invariance` (substitution plus nonnegative curve-length integral equality for monotone C^1 surjections including vanishing derivatives); weak piecewise: `lem-sr-weak-piecewise-causal-integrability`, `lem-sr-piecewise-proper-time-reparametrization-invariance` |
| def u/a | `def-sr-four-velocity-and-four-acceleration` (U = x'/tau', A = U'/tau', proper-time-parametrized tangent identification) |
| pthm norm and orthogonality | `pthm-sr-four-velocity-norm-and-orthogonality` (model-conditional physical packaging of eta(U,U) = -c^2, eta(U,A) = 0, free clocks A = 0, subliminal relative speed) |
| post free trajectories/clock hypothesis | `post-sr-free-trajectories-and-clock-hypothesis` (straight free histories; the clock-reading rule extended to the general worldline calculus with no acceleration-dependent term; weak piecewise clause) |
| closure S4 stable interface | `thm-sr-proper-time-and-observer-decomposition` — minted here with the contract content (norms, orthogonality, rest projection h, relative-velocity split, coordinate formulas), the id required by the splice and the EM supplier contract |

The B page supplies 8 leaf items computed from the A definitions: clock at
rest, straight worldline at beta = 3/5, cubic reparametrization, uniform
circular motion, observer split, and three counterexamples delimiting the
future-timelike hypothesis (null, spacelike, past-directed). All eight are
`provenance.statement: ai-generated` with `generation.role` set; no other page
depends on any of them (0 consumers). The built totals (11 A / 8 B) are within
the design reservation (22/10); the reservation is a budget, not a target, and
no reserved inventory element is unbuilt. Page metadata (ids, titles, orders,
category, `library: physics`, companion pairing) is unchanged from the plan;
the only Step-1-owned edits are the item arrays.

No mathematical item of the pair reaches a physical item (scripted transitive
check: 0 paths), so the domain boundary holds on this pair.

## Source coverage

The current coverage file passes: `1 page(s), 47 harvested result(s), 0 error(s),
0 warning(s)` (`coverage-checklist --require-destination`). The 47 rows are 36
per-source content rows plus 11 canonical local-development / B rows. All 36
source rows are disposed: 17 included, 9 inline (8 of them landing on pair
items, 2 on earlier in-run pages), 8 deferred with destinations, 2 reasoned
out-of-scope (Crowell's Lewis–Tolman example; Carroll's spacelike path length).
The deferred destinations are planned pages strictly later in order:
`sr-accelerated-observers` (227), `sr-proper-time-comparisons` (219),
`gr-connections-and-free-fall` (237). Three independent treatments are
fetch-verified with exact ranges: Crowell *Special Relativity* §§3.5–3.7
(sha16 `4c11e8f367267d53`), Carroll *Lecture Notes on GR* Ch. 1 pp. 26–27 and
Ch. 3 pp. 68–71 (sha16 `d4cbfeed3a18370c`), and Reall Part III GR §§2.2–2.3
(sha16 `fe8a24c67e884ff1`, Wayback copy with `original_url` declaration after
the recorded DAMTP TLS failure).

## Prerequisites (unmet-prerequisite screening)

- The A page's 11 items have 56 distinct `deps` targets: 23 in-run scaffold
  items (13 on batch 1 `sr-spacetime-primitives`, 10 in-pair) and 33 published
  imported mathematical items. All 33 imports are pinned in
  `research/math-imports.json` with `status: published` and are placed on
  published `library/` pages (checked 33/33). Zero unresolved targets.
- The page `requires` `["sr-lorentz-transformations",
  "monotone-functions-and-discontinuities",
  "monotone-sequences-and-cauchy-completeness",
  "properties-of-the-integral-and-the-working-ftc", "the-riemann-integral"]`.
  The four mathematical pages are published imports with library placements;
  the local `sr-lorentz-transformations` page carries its own requires chain
  through `sr-spacetime-primitives`. The requires closure (37 pages) contains
  all ten published mathematics pages of the Step-1 `undeclared-prereq`
  finding recorded in `…-batch-3.notes.md`, and
  `frontier-item-gate.mjs --tool validate-plan` now reports **0**
  `undeclared-prereq` findings run-wide.
- Consumer screening: a run-wide scan of all 80 manifests (471 items) finds 0
  unresolved dependency targets. 84 external consumer items on 21 pages
  (16 SR pages: observer-measurements 13+5, energy-momentum 13+7,
  accelerated-observers 6+4, proper-time-comparisons 6+2, forces 4+2,
  causality 3+2, light-and-doppler 3, newtonian-bridge 3+2,
  experimental-interface 1; 5 EM pages: primitives 3, lorentz-covariant 2,
  action-variational 1, retarded-fields 1, expanded-analysis 1) declare edges
  into this pair; their recorded "required content" matches the pair's
  statements, including the weak-piecewise rows consumed by
  `sr-causality-and-signals` and `sr-proper-time-comparisons`. No consumer
  expects an id or claim this pair fails to plan.
- Result: **no unmet prerequisite found** — nothing is absent from both the
  published library and the current scaffold. Uncertainty and non-claims: the
  internal proofs of the pinned published imports were not re-audited here
  (read-only and outside Step-3a scope), and source content was checked
  against the Step-1 fetch stamps and coverage records, not re-fetched by this
  review; both are scope-irrelevant for presence/identity/publication checks.

## Checks run (exact)

| Check | Command | Result |
|---|---|---|
| coverage | `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-3.coverage.json --require-destination` | 1 page, 47 harvested, 0 errors, 0 warnings |
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-3.pages.json` | 19 items, 0 normalized, 0 errors |
| physics content | `node tools/physics-support/physics-check.mjs --run physics-em-sr-40-2026-10-08 --plan research/plan-spec.json` | 0 errors, 471 items |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | 471 items over 80 pages, max level 24, no error |
| scope ledger | `node tools/physics-support/manifest-integrity.mjs --run physics-em-sr-40-2026-10-08` | 80 pages owed, 80 present, no scope drift |
| plan validation | `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan` | 0 `undeclared-prereq`; acyclic and consistent, no unresolved ids |
| readiness | `node tools/physics-support/step1-decisions.mjs check --run physics-em-sr-40-2026-10-08` | 471 declared, 471 ready, closed |
| prerequisite/consumer scan | scripted scan of all manifests, `items/`, `library/`, `math-imports.json` | 0 unresolved deps; 33/33 imports pinned+published+placed; 84 external consumers; 0 math→physics paths |
| step 3a state | `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase scope` | this pair listed "current scope review required" (closed by this decision) |

## Observations (non-blocking; no scope change)

1. **Batch-3 notes are stale relative to the current native manifest.** They
   describe 8 A items, 8 B items and 36 cross-batch rows; the current
   manifest/coverage carry 11 A items and 47 cross-batch rows because of the
   owner's weak-piecewise direction (owner direction, third reconciliation:
   "fully author `lem-sr-weak-piecewise-causal-integrability` and
   `lem-sr-piecewise-proper-time-reparametrization-invariance` … the existing
   `def-sr-piecewise-proper-time` ID now has its necessary earlier home on
   `sr-worldlines-and-clocks`"). This report and the scope record use the
   current native manifest; the notes were not edited (another owner's record).
2. **Two items are not the `item` target of a coverage row of their own**:
   `lem-sr-proper-time-reparametrization-invariance` (its content is the
   substitution step of the sourced M03/S4 argument, exercised by the B row
   C3) and `pthm-sr-four-velocity-norm-and-orthogonality` (the model-conditional
   packaging of the postulate rows and the decomposition-theorem rows; it is
   the design-promised "pthm norm and orthogonality"). No harvested result is
   unmapped, and every clause of both items traces to rows landing on their
   premises; recorded for Step 3b traceability only.
3. The Step-1-recorded `undeclared-prereq` conflict for this page is resolved
   in the current native plan (0 findings above); no further action recorded.

## Decision

`sufficient` — the planned definitions (curve/worldline regularity, proper
time and piecewise proper time), M03 derivative/inverse/substitution lemmas
including the owner-directed weak-piecewise extensions, four-velocity and
four-acceleration, the S4 decomposition interface with the EM-contract id, and
the free-trajectory/clock postulate, together with the 8 B worked examples and
hypothesis-delimiting counterexamples, adequately cover the intended SR03
subject with exact supplier resolution and no unmet prerequisite. Recorded in
`research/physics-em-sr-40-2026-10-08-step3a-review-sr-worldlines-and-clocks.json`
(the record binds the current pair scope hash). No owner proceed/merge/enrich
action is requested for this pair.
