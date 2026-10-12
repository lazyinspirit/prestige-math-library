# Batch 19 notes — `cm03-momentum-work-and-energy-balances` / `…-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-19, covers 19.
Step 1 complete initial authoring only; a readiness record is not independent
mathematical approval (Step 2/3 review follows). Inputs read before
construction: `CLAUDE.md`, `SCHEMA.md`, `../PHYSICS-CONTENT-MODEL.md`,
`WORKFLOW.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
design record `research/plan-non-relativistic-classical-mechanics-track.md`
L496 ("Momentum, work and energy balances"), `research/plan-spec.json`, the
first-principles inventory
`research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/proposed-inventory.json`,
and the batch-dependency-levels file
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 19 is dependency level 4, requires batch 18; batches 1, 2, 9, 17 and 18
are complete).

## Scope built

- A page `cm03-momentum-work-and-energy-balances` (order 117, category
  `non-relativistic-classical-mechanics`, `library: physics`), 9 items:
  2 physics-domain definitions (`def-cm03-centre-of-mass-and-momenta`,
  `def-cm03-potential-and-mechanical-energy`), 6 physics theorems
  (`pthm-cm03-centre-of-mass-and-kinetic-splitting`, `pthm-cm03-momentum-balance`,
  `pthm-cm03-angular-momentum-balance`, `pthm-cm03-work-energy`,
  `pthm-cm03-energy-balance`, `pthm-cm03-frame-transformations`) and
  1 remark (`rem-cm03-conservation-scope`).
- B page `cm03-momentum-work-and-energy-balances-examples` (order 118),
  4 leaf items: 2 examples (`ex-cm03-two-body-hooke-model-check`,
  `ex-cm03-driven-mechanical-energy-balance`) and 2 counterexamples
  (`cex-cm03-centrality-is-not-necessary-for-angular-momentum-conservation`,
  `cex-cm03-closed-force-field-without-a-global-potential`). Nothing outside
  the pair depends on these four.
- Page carriers `library/non-relativistic-classical-mechanics/cm03-momentum-work-and-energy-balances.md`
  and `…-examples.md` are nonempty and carry the item lists, `requires`
  lists, order, kind, category, library and companion metadata. The category
  `_category.md` (created by batch 17) is unchanged. No `_pathway.md` is
  created here (closeout artifact).
- Design contract delivered (design `contract_text` to delivered items):
  `cm03-com(def)` → `def-cm03-centre-of-mass-and-momenta`;
  `cm03-mass-splitting(pthm)` → `pthm-cm03-centre-of-mass-and-kinetic-splitting`;
  `cm03-momentum-balance(pthm)`; `cm03-angular-balance(pthm)` →
  `pthm-cm03-angular-momentum-balance`; `cm03-work-energy(pthm)`;
  `cm03-potential(def)` → `def-cm03-potential-and-mechanical-energy`;
  `cm03-energy-balance(pthm)`; `cm03-conservation-scope(rem)`. Recorded
  additions relative to the design contract: `pthm-cm03-frame-transformations`
  (the design names `thm-chain-rule-for-total-derivatives` as a supplier and
  the transformation laws of $P,K,J,E$ are exercised by the checks), and the
  B-page `ex-cm03-two-body-hooke-model-check` (the design's `B_and_sources`
  line names the centrality counterexample, the annular counterexample and the
  driven-energy computation; the Hooke check is an added explicit
  pair-potential model check). The design's provisional ids (`cm03-*`) are
  placeholders; the delivered ids use the run's `kind-prefix` conventions, as
  in batches 17-18.

## Dependency graph, levels and construction order

Authored in prerequisite order; each item built once. Levels computed
mechanically by `tools/physics-support/item-dependency-levels.mjs` over the
run manifests (`dependency_level` in the batch manifest); the check reports
**no finding for any of these 13 items**. In-run suppliers by batch:

| item | level | in-run suppliers |
|---|---|---|
| `def-cm03-centre-of-mass-and-momenta` | 10 | 17: frames, worldlines, configuration, velocity-acceleration, units; 18: force-superposition, interactions, newtonian-flow |
| `pthm-cm03-centre-of-mass-and-kinetic-splitting` | 11 | `def-cm03-centre-of-mass-and-momenta`; 18: force-superposition; 2: `thm-cm-center-of-mass-and-kinetic-splitting`; 17: units |
| `pthm-cm03-momentum-balance` | 12 | `def-cm03-centre-of-mass-and-momenta`, `pthm-cm03-centre-of-mass-and-kinetic-splitting`; 18: force-superposition, interactions, newtonian-flow; 2: `thm-cm-momentum-and-angular-momentum-balance` |
| `pthm-cm03-angular-momentum-balance` | 11 | `def-cm03-centre-of-mass-and-momenta`; 18: force-superposition, interactions, newtonian-flow; 2: `lem-cm-derivative-of-pairings-of-curves` |
| `pthm-cm03-work-energy` | 11 | `def-cm03-centre-of-mass-and-momenta`; 18: force-superposition, newtonian-flow; 2: `lem-cm-derivative-of-pairings-of-curves` |
| `def-cm03-potential-and-mechanical-energy` | 11 | `def-cm03-centre-of-mass-and-momenta`; 18: force-superposition, interactions; 17: units |
| `pthm-cm03-energy-balance` | 12 | `def-cm03-potential-and-mechanical-energy`, `def-cm03-centre-of-mass-and-momenta`, `pthm-cm03-work-energy`; 18: force-superposition, interactions, newtonian-flow; 2: `thm-cm-work-energy-balance` |
| `pthm-cm03-frame-transformations` | 13 | `def-cm03-centre-of-mass-and-momenta`, `def-cm03-potential-and-mechanical-energy`, `pthm-cm03-momentum-balance`; 17: frames, worldlines, `pthm-cm01-galilean-kinematics`, velocity-acceleration, units; 18: force-superposition, interactions, newtonian-flow; 1: `def-cm-special-orthogonal-group`, `lem-cm-so3-is-a-matrix-group`; 9: `lem-cm-skew-matrix-cross-product-correspondence` |
| `rem-cm03-conservation-scope` | 14 | A: def, splitting, momentum, angular, work-energy, potential, energy-balance, frame-transformations; 18: force-superposition, interactions, drag, newtonian-flow, `pthm-cm02-continuation`, open-system warning; 17: units |
| `ex-cm03-two-body-hooke-model-check` (B) | 14 | A: def, splitting, momentum, angular, work-energy, potential, energy-balance, frame; 18: force-superposition, interactions, newtonian-flow, `pthm-cm02-ivp`; 17: units, velocity-acceleration |
| `ex-cm03-driven-mechanical-energy-balance` (B) | 13 | A: def, work-energy, potential, energy-balance; 18: force-superposition, newtonian-flow; 17: units |
| `cex-cm03-centrality-is-not-necessary-for-angular-momentum-conservation` (B) | 13 | A: def, angular, momentum; 18: force-superposition, interactions, newtonian-flow; 17: units, velocity-acceleration |
| `cex-cm03-closed-force-field-without-a-global-potential` (B) | 13 | A: potential, def, energy-balance; 18: force-superposition, newtonian-flow; 17: units; plus published mathematical line-integral/Poincaré suppliers (imports, read-only) |

Published mathematical imports (`thm-cm-*` items of batches 1/2/9 are in-run;
`def-closed-and-exact-c1-vector-fields`, `thm-poincare-lemma-for-star-shaped-domains`,
`def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`,
`thm-gradient-theorem-for-line-integrals`, ODE/norm/interval/trig items and so
on are read-only published imports) do not raise in-run levels. No cycle,
forward edge or missing supplier was introduced; every in-run supplier was
authored earlier in the run (batches 1, 2, 9, 17 and 18, all complete).

## Design versus plan-spec, and conflicts recorded

1. `research/plan-spec.json` records page `requires` as
   A = `[cm02-forces-initial-data-and-newtonian-flow]` and
   B = `[cm03-momentum-work-and-energy-balances]`. The authored carriers and
   the batch manifest declare A =
   `[cm02-forces-initial-data-and-newtonian-flow, line-integrals-and-the-gradient-theorem, cm-math-rigid]`
   and B = `[cm03-momentum-work-and-energy-balances]`. The two extra A entries
   are forced by the item-level dependency closure: `line-integrals-and-the-gradient-theorem`
   is the published mathematical page homing the Poincaré-lemma and
   line-integral suppliers of `def-cm03-potential-and-mechanical-energy` and
   `cex-cm03-closed-force-field-without-a-global-potential`, and `cm-math-rigid`
   (batch 9) homes `lem-cm-skew-matrix-cross-product-correspondence`, a
   declared dependency of `pthm-cm03-frame-transformations`. Without them
   `validate-plan` reports `undeclared-prereq` on the A page (observed during
   construction); with the carrier/manifest record `validate-plan --run`
   passes (`OK … no item-level cycles, forward references, B-page dependencies,
   or unresolved ids among the 52 page(s) with item lists`). The plan files
   are outside worker write scope and were not edited; this is a plan-metadata
   annotation difference, not a dependency defect.
2. The design's `B_and_sources` line is delivered; the two design-named
   counterexamples and the driven-energy computation are present and the
   design's T/L locators are harvested. The Hooke model check and the
   frame-transformation theorem are the recorded additions of point 1 above.
3. The design's published-supplier list names `def-countable-choice`. No
   delivered item of the pair consumes a choice principle — every argument is
   choice-free (finite sums, ODE suppliers, line integrals and the Poincaré
   lemma) — so the planned supplier has **no use**; disposition: not consumed,
   no coverage obligation created. The other three planned suppliers are used:
   `def-cross-product-in-r3` (definition, angular-balance and
   frame-transformation items), `thm-a-regular-level-set-is-an-embedded-submanifold`
   (clause (f) of `def-cm03-potential-and-mechanical-energy`) and
   `thm-chain-rule-for-total-derivatives` (`pthm-cm03-frame-transformations`).

## Sources, harvest and fetch verification

- Coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-19.coverage.json`
  records 8 source entries across the two pages with dispositions
  (`included` with item ids, or `out-of-scope` with a reason): Tong, Classical
  Dynamics §§1.2-1.3 (A) and §§1.3.2-1.3.3 (B); Tong, Dynamics and Relativity
  §1.2.1 (A); Likharev, Essential Graduate Physics CM §§1.1-1.4 (A) and
  §§1.3, 3.4 (B); Fitzpatrick, Non-Isolated Systems (A); Lebl, Basic Analysis
  II §9.3 Example 9.3.7 (B, vortex field); Campesato, Poincaré lemma notes
  (B, star-shaped/Poincaré readings). Two or more independent treatments per
  page, at least one full book/course-notes treatment per page.
- `source-fetch-check` check mode on the final coverage: **8/8
  fetch-verified, 0 documented drops**. Full texts were fetched and inspected
  (Tong 139 pp., Tong dynrel 166 pp., Likharev CM 252 pp., Fitzpatrick HTML
  chapter, Lebl HTML §9.3).
- The Campesato file is a 3-page short publication: the tool's page floor
  (4 pages) requires a hash-bound reading receipt. A single stamp invocation
  had recorded 6 attempts that failed *classification only* (body fetched, no
  receipt); the document was then read in full (title page and Section 1 on
  PDF p. 1; §§2.1-2.3 with the vortex counterexample and Theorems 5/8/11 on
  p. 2; §§3-4 with Proposition 15 and Theorem 16 ending the document on
  p. 3), the `short_document_reading` receipt bound to the document's sha256
  (`cab5788f…930f8d`, 41641 bytes) was written, and a genuine fetch with the
  receipt in place stamped the source (sha256 and page count agreeing with an
  independent download). The full 7-entry attempt history is preserved in the
  coverage file; no attempt was deleted or restarted.

## Local closure, proof routes and recorded decisions

- Every claim is proved or sourced locally; no new cross-batch prerequisite
  pair was needed and no escalation was raised. The mathematical core is
  supplied by the in-run mathematical pages of batches 1/2/9 (centre-of-mass
  and kinetic splitting, momentum/angular balance, work-energy balance,
  skew-matrix correspondence, SO(3)) and by published read-only imports; the
  physical layer (force branch, interactions, motion) by batches 17/18.
- Balances use their hypotheses exactly: antisymmetry for the internal-force
  cancellation of `pthm-cm03-momentum-balance`; antisymmetry plus the
  centrality/cancellation alternatives for `pthm-cm03-angular-momentum-balance`;
  the equation of motion alone for `pthm-cm03-work-energy`; a global potential
  presentation with time-independent representative and no residual forces for
  the conservation clause of `pthm-cm03-energy-balance`. The two counterexamples
  exhibit (i) antisymmetric non-central pair forces whose internal torque sum
  vanishes identically by telescoping, so centrality is sufficient but not
  necessary, and (ii) a smooth closed field on an annulus with circulation
  $2\pi\beta\neq0$ and no global potential, with local potentials on
  star-shaped pieces via the published Poincaré lemma.
- `cex-cm03-closed-force-field-without-a-global-potential` deliberately does
  **not** depend on any B-page item of another page: it recomputes the curl,
  the circulation $2\pi\beta$ from the definitions of the line integral, and
  non-exactness via the gradient theorem, so the B page remains a leaf and the
  dependency stays inside the plan closure.
- Numbered steps are single-line and in the canonical citation-layer scheme;
  examples use `## Verification`, counterexamples `## Counterexample`
  (`precheck`, `proof-layout` clean).

## Cross-batch dependencies

- `research/physics-cm-qm-gr-79-2026-10-11-batch-19.cross-batch-dependencies.json`
  carries 66 rows (64 item edges + 2 page edges), one per declared
  `(kind, consumer, supplier)` edge emitted by
  `frontier-dependency-ledger.mjs`: 38 edges to batch 18, 19 to batch 17,
  5 to batch 2, 2 to batch 1, 1 to batch 9, plus the two page edges
  (`cm03-…` → `cm02-forces-initial-data-and-newtonian-flow` and
  `cm03-…` → `cm-math-rigid`). Every row records the supplier clause read and
  the concrete consumer use (statement/facts/step), status `verified`.
- `frontier-dependency-ledger.mjs refresh --run …` refreshed and
  deduplicated the unified ledger; every batch-19 edge now carries its review
  (0 orphaned reviews from batch 19). The run-wide ledger shows 2 orphaned
  reviews owned by **batch 39** (pages `qm-math-coulomb` /
  `qm-math-coulomb-examples`), outside this batch.

## Checks actually run (on the final carriers)

- `precheck.mts` on all 13 items: **10 checked, 0 failing** (the two
  definitions and the remark have no phase body).
- `proof-layout.mjs` on the 10 proof-bearing items: **53 steps, 0 defects**;
  the two page carriers: 0 steps, 0 defects.
- `rendercheck.mjs` on the 13 items and 2 pages: **15 files, clean** (KaTeX,
  YAML, wikilink/math nesting).
- `proof-contract.mjs --strict`: **11/11 items, 0 errors, 0 warnings**;
  `proof-contract-coverage.mjs` (overlay root, this batch's manifest only):
  **13 items, 10/10 supplied arguments covered**.
- `coverage-checklist.mjs`: **2 pages, 23 harvested results, 0 errors,
  0 warnings**.
- `source-fetch-check.mjs` check mode: **8/8 source(s) fetch-verified,
  0 drops**.
- `content-policy.mjs` (batch manifest): **13 scoped items, 0 errors,
  0 warnings**; `manifest-deps.mjs`: **13 items, 0 errors**;
  `manifest-integrity.mjs --run`: **158 pages owed, 158 in the manifests, no
  scope drift**.
- `physics-check.mjs` against an overlay root whose only current manifest is
  this batch's: **0 errors, 13 items checked**. The run-wide invocation aborts
  before scoping on `Invalid or empty current page in
  physics-cm-qm-gr-79-2026-10-11-batch-10.pages.json`, a pre-authoring state
  of another batch (run-level blocker, below).
- `item-dependency-levels.mjs check --run …`: **0 findings for the 13 cm03
  items**; remaining run errors are other batches' empty scaffold inventories.
- `validate-plan.mjs research/plan-spec.json --run …`: **OK, exit 0** —
  acyclic declared page order, no item-level cycles, forward references,
  B-page dependencies or unresolved ids; the two pages appear with 9 and 4
  items and their declared requires.
- `depcheck.mjs` (whole repository): **0 findings attributable to this batch**
  after the repair log below; `fwdcheck.mjs`: 0 errors and 0 warnings for
  these items (the run-wide listing marks all 13 "inherited" via published
  suppliers' load-bearing forward edges, not produced here); `extcheck.mjs`:
  0 findings.
- `step1-decisions.mjs check --run …` (after the records below): **531 items,
  510 ready run-wide, 0 cm03 work items**; a direct per-item replay in the
  real root reports **13/13 closed**; the run remains open on other batches.

## Post-check repairs (before readiness; no statement, hypothesis or proof step changed)

1. `depcheck` reported 10 `cited-not-in-deps` warnings on six items — forward
   orientation links inside scanned Statement/Definition sections
   (`def-cm03-centre-of-mass-and-momenta` → splitting, angular balance,
   potential, frame transformations; `def-cm03-potential-and-mechanical-energy`
   → energy balance (two occurrences); `pthm-cm03-angular-momentum-balance` →
   momentum balance; `pthm-cm03-centre-of-mass-and-kinetic-splitting` → frame
   transformations; `pthm-cm03-momentum-balance` → angular balance;
   `pthm-cm03-work-energy` → frame transformations, energy balance). Adding
   deps would be circular (each target depends on the citing item) or a false
   prerequisite (orientation-only mentions), so each was reworded to a
   link-free mention ("the … item of this page"); the same targets remain
   wikilinked in `## Remarks`, which the checker does not scan. No dependency
   was added or removed; re-runs of `depcheck` show 0 cm03 findings.
2. The proof contract of `pthm-cm03-energy-balance` quoted the reworded
   sentence from `def-cm03-centre-of-mass-and-momenta`; the quote was updated
   to the current text (`--strict` clean again).
3. `coverage-checklist` kind vocabulary: `book` → `textbook` (Likharev ×2),
   `web-chapter` → `course-notes` (Fitzpatrick), `book-chapter` → `textbook`
   (Lebl); coverage semantics unchanged.
4. The manifest was regenerated from the final item frontmatter after repair 1
   (only the six edited `statement` strings changed; deps, roles, levels,
   sources unchanged) before the readiness records were written.

## Readiness records

All 13 items are recorded `ready` — never `--owner`, no escalation overwritten
— **after** the final item and page carriers, with the complete carrier, met
prerequisites examined at statement/proof level, adequate page placement and
the current proof contract in place. Each record carries the item's exact
frontmatter `deps` array and the engine's item-hash binding (which includes
the transitive input closure); the manifest was re-emitted immediately before
recording, so the input hashes are current. `step1-decisions check` reports
no work item for any of the 13 (real root: 13/13 closed; the run-wide report
is 510/531 ready with the remainder belonging to other batches' open work).
See the `*-step1-cm03-*.json` records.

## Open findings for the owner (none attributable to batch 19)

1. Run-level `physics-check` aborts before scoping on another batch's
   pre-authoring empty inventory
   (`physics-cm-qm-gr-79-2026-10-11-batch-10.pages.json`); the batch-scoped
   overlay run is clean. `proof-contract-coverage` and
   `item-dependency-levels` have the same class of run-wide aborts/findings
   for other batches' empty inventories (`cm-math-numerical`, `cm04`-`cm10`
   pages, `gr-*` items). Recorded for the canonical ledger; not repaired here.
2. The unified frontier ledger carries 2 orphaned reviews owned by batch 39
   (`qm-math-coulomb`, `qm-math-coulomb-examples`) whose consumer pages do not
   declare the reviewed edges; outside batch 19's write scope.
3. `plan-spec.json` page `requires` for the A page is stale relative to the
   item dependency closure (point 1 of "Design versus plan-spec"); plan files
   are outside worker write scope and were not edited.
4. The design's planned supplier `def-countable-choice` is not consumed by any
   item of the pair (all arguments choice-free); recorded as an unused planned
   supplier, not a coverage gap.
5. No published defect and no missing local prerequisite was found for this
   pair; no item is escalated. This handoff is Step-1 initial authoring
   evidence only — owner/operator reconciliation and the full engine gate
   follow, and Steps 2-3 provide the independent mathematical review.
