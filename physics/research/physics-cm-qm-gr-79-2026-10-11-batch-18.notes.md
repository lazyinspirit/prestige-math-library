# Batch 18 notes — `cm02-forces-initial-data-and-newtonian-flow` / `…-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-18, covers 18.
Step 1 complete initial authoring only; a readiness record is not independent
mathematical approval (Step 3 review follows). The binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` was
read before construction; the plan record
`research/plan-non-relativistic-classical-mechanics-track.md` L467
("Forces, initial data and Newtonian flow") and `research/plan-spec.json` were
the design inputs, and the batch-dependency-levels file
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 18 requires batches 7 and 17, both complete) was read before
construction.

## Scope built

- A page `cm02-forces-initial-data-and-newtonian-flow` (order 115, category
  `non-relativistic-classical-mechanics`, `library: physics`), 8 items:
  3 postulates (`post-cm02-force-superposition`, `post-cm02-interactions`,
  `post-cm02-drag`), 1 physics-domain definition
  (`def-cm02-newtonian-flow`), 2 physics theorems (`pthm-cm02-ivp`,
  `pthm-cm02-continuation`), 1 example (`ex-cm02-uniform-field`) and
  1 remark (`rem-cm02-open-system-warning`).
- B page `cm02-forces-initial-data-and-newtonian-flow-examples` (order 116),
  5 leaf items: 3 examples (`ex-cm02-force-model-regularity-checks`,
  `ex-cm02-constant-field-projectile`, `ex-cm02-drag-terminal-velocity`) and
  2 counterexamples (`cex-cm02-nonunique-flow-for-a-continuous-force`,
  `cex-cm02-singular-collision-finite-time`). Nothing outside the pair
  depends on these five items.
- The design's contract
  `cm02-force-superposition(P4), cm02-interactions(P5), cm02-ivp(pthm),
  cm02-continuation(pthm), cm02-uniform-field(example), cm02-drag(post),
  cm02-open-system-warning(rem)` was delivered in the design's order with two
  recorded additions (below): a flow definition, and the split of the design's
  `cm02-uniform-field` example into the A item `ex-cm02-uniform-field` plus
  B-page computations.
- Page carriers
  `library/non-relativistic-classical-mechanics/cm02-forces-initial-data-and-newtonian-flow.md`
  and `…-examples.md` are nonempty and carry the item lists, `requires`,
  order, kind, category, library and companion metadata; the category
  `_category.md` (created by batch 17) is unchanged. No `_pathway.md` is
  created here (closeout artifact).
- The design's `B_and_sources` line ("Unique/nonunique force examples, singular
  collision, projectile with stated constant g and drag. T§1.2; L§1.2; W§1.2")
  is delivered by the five B items and the A-page example.

## Dependency graph, levels and construction order

Authored in prerequisite order; each item built once. In-run levels (computed
mechanically by `tools/physics-support/item-dependency-levels.mjs` over the run
manifests and recorded as `dependency_level` in the batch manifest):

| item | level | in-run suppliers |
|---|---|---|
| `post-cm02-force-superposition` | 8 | batch-17 `cm01` items (`post-cm01-spacetime`, `post-cm01-frames`, `post-cm01-worldlines`, `def-cm01-configuration`, `def-cm01-velocity-acceleration`, `def-cm01-units`, `pthm-cm01-galilean-kinematics`); published `def-locally-lipschitz-in-the-state-variable` |
| `post-cm02-interactions` | 9 | `post-cm02-force-superposition`; batch-17 `post-cm01-worldlines`, `def-cm01-configuration`, `def-cm01-units`; published `def-euclidean-inner-product`, `def-jacobian-matrix-and-gradient`, `def-ck-euclidean-maps-and-diffeomorphisms` |
| `def-cm02-newtonian-flow` | 9 | `post-cm02-force-superposition`; batch-17 `post-cm01-worldlines`, `def-cm01-configuration`, `def-cm01-velocity-acceleration`, `def-cm01-units`; published ODE items |
| `pthm-cm02-ivp` | 10 | `post-cm02-force-superposition`, `def-cm02-newtonian-flow`; published ODE/norm/EVT items |
| `pthm-cm02-continuation` | 11 | `post-cm02-force-superposition`, `def-cm02-newtonian-flow`, `pthm-cm02-ivp`; batch-2 `cm-math-balances` items `thm-cm-compact-continuation-for-locally-lipschitz-odes`, `cor-cm-finite-time-breakdown-requires-escape`; published `thm-heine-borel-rn` |
| `ex-cm02-uniform-field` | 12 | `post-cm02-force-superposition`, `def-cm02-newtonian-flow`, `pthm-cm02-ivp`, `pthm-cm02-continuation`; batch-17 `post-cm01-worldlines`, `def-cm01-velocity-acceleration`, `def-cm01-units`, `pthm-cm01-galilean-kinematics` |
| `post-cm02-drag` | 10 | `post-cm02-force-superposition`, `post-cm02-interactions`; batch-17 `post-cm01-worldlines`, `def-cm01-velocity-acceleration`, `def-cm01-units` |
| `rem-cm02-open-system-warning` | 13 | `post-cm02-force-superposition`, `post-cm02-interactions`, `post-cm02-drag`, `def-cm02-newtonian-flow`, `pthm-cm02-ivp`, `pthm-cm02-continuation`, `ex-cm02-uniform-field`; batch-17 `def-cm01-configuration`, `def-cm01-units`, `post-cm01-frames` |
| `ex-cm02-force-model-regularity-checks` (B) | 12 | `post-cm02-force-superposition`, `post-cm02-interactions`, `post-cm02-drag`, `def-cm02-newtonian-flow`, `pthm-cm02-ivp`, `pthm-cm02-continuation`; published continuity/norm items |
| `ex-cm02-constant-field-projectile` (B) | 13 | `post-cm02-force-superposition`, `def-cm02-newtonian-flow`, `pthm-cm02-ivp`, `ex-cm02-uniform-field`, `post-cm02-drag`; batch-17 `post-cm01-worldlines`, `def-cm01-velocity-acceleration`, `def-cm01-units`; published `thm-double-angle-and-power-reduction-identities` |
| `ex-cm02-drag-terminal-velocity` (B) | 11 | `post-cm02-drag`, `post-cm02-force-superposition`, `def-cm02-newtonian-flow`, `pthm-cm02-ivp`; batch-7 `cm-math-approximation` items `def-cm-oscillator-model-and-phase-system`, `thm-cm-forced-oscillator-variation-of-constants`, `prop-cm-oscillator-degenerate-and-repulsive-cases`; published exponential/limit items |
| `cex-cm02-nonunique-flow-for-a-continuous-force` (B) | 11 | `post-cm02-force-superposition`, `def-cm02-newtonian-flow`, `pthm-cm02-ivp`; batch-17 `post-cm01-worldlines`; published real-analysis items |
| `cex-cm02-singular-collision-finite-time` (B) | 13 | `post-cm02-force-superposition`, `post-cm02-interactions`, `def-cm02-newtonian-flow`, `pthm-cm02-ivp`, `pthm-cm02-continuation`, `ex-cm02-force-model-regularity-checks`; batch-17 `def-cm01-configuration`, `def-cm01-units` |

`node tools/physics-support/item-dependency-levels.mjs check --run
physics-cm-qm-gr-79-2026-10-11` reports **no finding for any of these 13
items**; the remaining errors of that run belong to other batches' empty
scaffold inventories (`qm-*`, `gr-*`, several `cm-math-*`). Every in-run
supplier was authored earlier in the run (batches 2, 7 and 17, all complete);
the published mathematical items (`thm-picard-lindelof-…`,
`thm-existence-and-uniqueness-of-a-maximal-ode-solution`,
`def-locally-lipschitz-in-the-state-variable`, `thm-heine-borel-rn`, …) are
read-only imports and do not raise levels. No cycle, forward edge or missing
supplier was introduced.

## Design versus plan-spec, and conflicts recorded

- Page ids, titles, orders 115/116, category, library, companion and the A-page
  `requires` (`cm-math-approximation`, `cm01-framework-quantities-and-geometry`)
  agree with the plan record and `plan-spec.json`.
- **Conflict recorded (B-page `requires` extension).** `plan-spec.json`
  declares the B page as requiring only its own A page, but three items of the
  B page depend on published items whose home pages are not in the closure of
  `cm02-forces-initial-data-and-newtonian-flow`; `validate-plan` rule 15
  (`undeclared-prereq`: every page edge induced by an item dep must lie in the
  closure of the page's declared `requires`, with the tool's own remedy "either
  add it or drop the dependency") therefore required declaring them. The batch
  manifest and the page carrier declare the B page with three additional
  published prerequisites, each backed by an actual dep edge:

| consumer item | dep item | home page (added to `requires`) |
|---|---|---|
| `ex-cm02-constant-field-projectile` | `thm-double-angle-and-power-reduction-identities` | `fundamental-trigonometric-identities` |
| `ex-cm02-drag-terminal-velocity` | `lem-exponential-dominates-one-plus-x` | `finite-probability-and-the-probabilistic-method` |
| `cex-cm02-nonunique-flow-for-a-continuous-force` | `thm-continuous-inverse` | `monotone-functions-and-discontinuities` |

  `plan-spec.json` was **not** edited (outside worker write scope). With the
  declarations present, `validate-plan --run` reports zero findings on either
  cm02 page (see checks below); the owner may reconcile the plan's B-page
  `requires` at merge time. No item is escalated for this; all three edges are
  backward (home-page orders 80.7, 80.5 and 80.9), so no `prereq-order` or
  cycle risk is introduced.
- **Scope additions relative to the design contract.** (a)
  `def-cm02-newtonian-flow` was added so that the equation of motion's
  "motion", its associated first-order system, initial data and maximal motion
  have a precise local definition before the existence theorem names them
  (otherwise `pthm-cm02-ivp` would rest on undefined terms). (b) The design's
  single `cm02-uniform-field` example was delivered as the A item
  `ex-cm02-uniform-field` (uniqueness and frame covariance of the model) plus
  B-page computations (projectile with stated constant `g`), keeping the A page
  within the design's A budget (8 of 35) and the B page within its budget
  (5 of 20).
- No other conflict between the design section, the plan-spec rows and the
  generated dispatch text was found.

## Sources, harvest and fetch status

Six complete external treatments supply the physical and ODE content, cited
per item with exact locators (and mirrored on both pages' coverage entries;
11 source entries across the two pages):

1. D. Tong, *Classical Dynamics* (author-hosted complete PDF, 139 pages),
   §1.2 pp. 2-5.
2. D. Tong, *Dynamics and Relativity* (author-hosted complete PDF, 166 pages),
   §1.2.1 p. 5 and §6.1-6.2.
3. K. K. Likharev, *Essential Graduate Physics, Part CM* (complete volume),
   §1.2 chapter pp. 3-4 and §1.3.
4. I. Stewart, *Advanced Classical Mechanics* (MIT 8.09/8.309 full course
   text, 199 pages), §1.2 pp. 1-2 and §7.1.1 p. 143.
5. G. Teschl, *Ordinary Differential Equations and Dynamical Systems* (online
   edition), §2.1-2.2 pp. 25-32 and §2.6, Corollaries 2.15-2.16, pp. 50-53.
6. J. Arino, *MATH 8430 Fundamental Theory of ODE* (University of Manitoba
   lecture notes), §1.3, Lemma 1.3.1, Theorems 1.3.3, Corollary 1.3.4,
   pp. 24-28.

`source-fetch-check.mjs` (check mode) reports **11/11 source entries
fetch-verified** and **11/11 resolved, 0 documented drops**; no
`source_resolution` record is required and no fabricated fetch state is
claimed. Every harvested result has a disposition recorded in
`…-batch-18.coverage.json` (included/inline with item IDs, or an explicit
statement use); `coverage-checklist.mjs` reports 2 pages, 40 harvested
results, 0 errors, 0 warnings.

## Local closure decisions worth surfacing to reviewers

- **The two A-page theorems are conditional deductions only.**
  `pthm-cm02-ivp` instantiates the published Picard–Lindelöf theorem and the
  published maximal-solution theorem at the associated first-order field
  $\mathcal F=(v,\mathsf M^{-1}F)$ and transports the solution back to the
  second-order motion; `pthm-cm02-continuation` applies the batch-2
  compact-continuation and escape results and states the autonomous-trapping
  clause only for an autonomous force, explicitly reading the model on the
  extended window. Neither theorem asserts global existence, a nondegenerate
  interval bound or any empirical content.
- **Definitions before names.** `def-cm02-newtonian-flow` defines the
  associated first-order system, motions (as $C^{2}$ families satisfying the
  equations), initial data, maximal motions and the Newtonian flow with the
  Euclidean state norm; `post-cm02-force-superposition` clause (iv) cites it
  for the precise notion rather than presupposing it.
- **Empirical qualifications preserved.** No measured value of any mass, field
  strength, drag coefficient or gravitational coupling is asserted anywhere in
  the batch. `post-cm02-interactions` clause (vi) records the identification
  $m_{i}^{g}=m_{i}$ of gravitational couplings with inertial masses as a
  separate empirical assumption (weak equivalence principle), not a
  consequence of the equation of motion; `post-cm02-drag` states the
  linear-drag model's regime, its neglect of environmental fluctuations and the
  status of its parameters. The two B-page counterexamples are refutations
  inside the model class, not statements about physical bodies.
- **Counterexample content.** `cex-cm02-nonunique-flow-for-a-continuous-force`
  refutes only the weakened variant of the force postulate in which continuity
  replaces the state-local-Lipschitz clause (continuous force
  $F=m\sqrt{\lvert x_{1}\rvert}\,e_{1}$ with two $C^{2}$ motions through the
  rest datum); `cex-cm02-singular-collision-finite-time` exhibits the
  collision-collapse motion $r(t)=r_{0}(1-t/T)^{2/3}$ with finite maximal
  interval on the collision-excluded domain, matching the continuation
  theorem's escape alternative rather than contradicting it.
- **No new local mathematical items were needed beyond the flow definition**:
  every analytic step is either a published import or a batch-2/batch-7 in-run
  supplier whose statement was checked at the level used (the statements of
  `thm-picard-lindelof-local-existence-and-uniqueness`,
  `thm-existence-and-uniqueness-of-a-maximal-ode-solution`,
  `thm-cm-compact-continuation-for-locally-lipschitz-odes` and
  `cor-cm-finite-time-breakdown-requires-escape` were re-read against the uses
  in `pthm-cm02-ivp` and `pthm-cm02-continuation`). No axiom-of-choice
  declaration is made in this batch; the only occurrence of the word "choice"
  is the modelling-choice sentence of the remark. No item declares
  `forward_refs`.
- **No conservation laws, no constrained dynamics and no measurements** are
  claimed; the remark records these omissions as page boundaries.

## Checks actually run (on the final carriers)

- `precheck.mts` on all 13 items: 13 files read, **11 checkable, 0 failing**
  (the definition and the remark have no phase body); the 3 postulates pass
  the nonproof-structure check.
- `proof-layout.mjs` on the 13 items: `13 items, 43 steps, 0 defects`.
- `rendercheck.mjs` on the 13 items, both page carriers and `_category.md`:
  `OK — 16 file(s)` (KaTeX, YAML, wikilink/math nesting).
- `proof-contract.mjs --strict` on the batch proof contracts: **12/12 items
  checked, 0 errors, 0 warnings** (8 proof items with per-step derivations,
  citations and boundary dispositions; 3 postulates with `physics_review`;
  1 remark with boundary dispositions). `proof-contract-coverage.mjs`
  (batch-scoped root): **13 items, 8/8 supplied arguments covered**.
- `coverage-checklist.mjs`: `2 page(s), 40 harvested result(s), 0 error(s),
  0 warning(s)`. `source-fetch-check.mjs`: `11/11 source(s) fetch-verified`,
  `11/11 resolved, 0 documented drops`.
- `content-policy.mjs` on the batch manifest: `13 scoped item(s), 0 error(s),
  0 warning(s)`; `manifest-deps.mjs`: `13 item(s), 0 error(s)`.
- `depcheck.mjs` (whole repository): run-wide FAIL from **other items'
  pre-existing findings** (`published-unaudited`, …); the only cm02 lines in
  its output are the two page dependency-summary lines — **0 findings
  attributable to this batch**.
- `fwdcheck.mjs`: run-wide FAIL from other items' `forward-undeclared`
  findings; the 13 cm02 items appear only as `inherited` markers in the
  resting-on-later-material listing (inherited from published suppliers; this
  batch declares no `forward_refs`) — **0 findings attributable to this
  batch**.
- `extcheck.mjs`: `OK — 27574 items, 0 recorded-not-proved, 0 resting on
  them`.
- `physics-check.mjs`: the run-wide invocation aborts before scoping on
  another batch's pre-authoring state (`Invalid or empty current page in
  physics-cm-qm-gr-79-2026-10-11-batch-10.pages.json`); a batch-scoped overlay
  root whose only current manifest is batch 18's reports
  **`physics-content: 0 error(s), 13 items checked`** (domains, dependency
  roles, physical scope, bodies and scoped import verification).
- `validate-plan.mjs research/plan-spec.json --run …`: run-wide **9 errors,
  none on a cm02 page** (all `cm-math-fluid`, including the unresolved import
  `lem-fourier-tail-diagonal-compact-convergence` → `thm-rationals-dense-in-r`
  noted below); both cm02 pages are listed with their declared `requires` and
  no undeclared-prereq finding.
- `item-dependency-levels.mjs check`: no cm02 finding (remaining errors are
  other batches' empty scaffold inventories).
- Cross-batch input `…-batch-18.cross-batch-dependencies.json`: **42 review
  rows, one per (kind, consumer, supplier) edge of this batch, all
  `verified`**, with the exact supplier clauses read and the use recorded;
  `frontier-dependency-ledger.mjs refresh --run …` merged them with **0
  orphaned reviews**. (The unified ledger lists a 43rd cm02-related edge,
  `cm03-momentum-work-and-energy-balances` → cm02's page requires; its
  consumer owner is batch 19, so its review row is not batch 18's to write.)
- `step1-decisions.mjs check --run …`: after the records below, **0 cm02 work
  items** (the run is still open on other batches' missing records).

## Readiness records

All 13 items are recorded `ready` (never `--owner`, no escalation overwritten),
each **after** the final item and page carriers: complete carrier, met
prerequisites examined, adequate page placement and current proof contract
exist for every item. The records carry the exact frontmatter `deps` arrays
and the item-hash binding computed by the engine; the manifest was re-emitted
from the item frontmatter immediately before recording (byte-level JSON
escaping only; semantically identical to the checked manifest), so the input
hashes are current.

## Open findings for the owner (none attributable to batch 18)

1. Run-level `validate-plan` and (per its finding) the run-wide
   `physics-check` dependency edge
   `lem-fourier-tail-diagonal-compact-convergence` → `thm-rationals-dense-in-r`
   is unresolved and belongs to `cm-math-fluid`'s batch; it blocks the
   run-wide gates and is recorded here for the canonical ledger, not repaired
   in this batch.
2. `physics-check` run-wide aborts on
   `physics-cm-qm-gr-79-2026-10-11-batch-10.pages.json` ("Invalid or empty
   current page"), a pre-authoring state of another batch.
3. `item-dependency-levels check`, `depcheck` and `fwdcheck` report run-wide
   errors from other batches' empty inventories or pre-existing corpus
   findings; none touches a cm02 item, and the scoped runs for this batch are
   clean.
4. The B-page `requires` extension versus `plan-spec.json` (recorded above) is
   the only plan-metadata discrepancy of this batch; all 13 items remain
   `ready` because the discrepancy is a plan declaration outside worker write
   scope, not a missing item prerequisite.

No published defect and no missing local prerequisite was found for the pair;
no item is escalated. This handoff is Step-1 initial authoring evidence only —
owner/operator reconciliation and the full engine gate follow, and Steps 2-3
provide the independent mathematical review.
