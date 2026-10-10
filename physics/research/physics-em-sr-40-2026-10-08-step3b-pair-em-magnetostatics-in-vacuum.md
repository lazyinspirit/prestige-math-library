# Step 3b authoring — `em-magnetostatics-in-vacuum` / `-examples`

- Run: `physics-em-sr-40-2026-10-08` · Role: alpha-high (Step 3b scaffold auditor and item author) · Batch 28.
- A page `em-magnetostatics-in-vacuum` (order 335); B page `em-magnetostatics-in-vacuum-examples` (order 336); category `classical-electromagnetism`, library `physics`.
- Own only this pair. Report created at entry 2026-10-09.

## Owned IDs and authoring order

| # | Item | Page | kind | domain | level | status |
|---|---|---|---|---|---|---|
| 1 | `lem-em-ideal-cylindrical-sheet-field` | A | lemma | mathematics | 0 | repaired (closed) |
| 2 | `lem-em-ideal-line-current-field` | A | lemma | mathematics | 0 | repaired (closed) |
| 3 | `lem-em-newtonian-kernel-curl-identity` | A | lemma | mathematics | 1 | escalate (batch-16 supplier) |
| 4 | `def-em-steady-current-regime` | A | definition | physics | 17 | accept (closed) |
| 5 | `def-em-magnetic-moment` | A | definition | physics | 18 | accept (closed) |
| 6 | `post-em-ideal-magnetostatic-models` | A | postulate | physics | 18 | accept (closed) |
| 7 | `pthm-em-magnetostatic-vector-potential` | A | physics-theorem | physics | 18 | escalate (batch-16 supplier) |
| 8 | `pthm-em-biot-savart` | A | physics-theorem | physics | 19 | escalate (batch-16 suppliers) |
| 9 | `pthm-em-magnetic-dipole-field` | A | physics-theorem | physics | 19 | escalate (batch-16 supplier) |
| 10 | `ex-em-infinite-wire-and-solenoid` | B | example | physics | 19 | accept (closed) |
| 11 | `pthm-em-magnetic-loop-force-torque` | A | physics-theorem | physics | 20 | escalate (transitive batch-16) |
| 12 | `ex-em-circular-loop-axis-field` | B | example | physics | 20 | escalate (batch-16 supplier) |
| 13 | `ex-em-wire-force-coupling` | B | example | physics | 21 | accept (closed) |

Pages to author: `library/classical-electromagnetism/em-magnetostatics-in-vacuum.md`
and `library/classical-electromagnetism/em-magnetostatics-in-vacuum-examples.md`.

## Open obligations at entry

- In-run suppliers not yet authored (sibling pairs still in Step 3b): every in-run
  dependency named in the schedule below. Each consumer is authored anyway, and its
  decision stays escalated until the supplier carrier and the actual proof use are
  reconciled. Exact IDs and consuming items are recorded per item below.
- `em-expanded-analysis-prerequisites` (order 310, batch 16): `lem-em-smooth-newtonian-upgrade`
  (used by `lem-em-newtonian-kernel-curl-identity`, `pthm-em-magnetostatic-vector-potential`),
  `lem-em-thin-current-limit` (used by `pthm-em-biot-savart`, `ex-em-circular-loop-axis-field`),
  `lem-em-magnetic-dipole-remainder` (used by `pthm-em-magnetic-dipole-field`).
- `em-maxwell-integral-and-constraints` (order 327, batch 24): `pthm-em-charge-continuity`,
  `def-em-weak-sources`, `post-em-distributional-vacuum-maxwell`, `pthm-em-fixed-vacuum-jumps`.
- `em-primitives-and-postulates` (order 325): `def-em-si-conventions`, `def-em-fields`,
  `def-em-lab-geometry`, `def-em-sources`, `def-em-weak-sources`, `post-em-vacuum-maxwell`,
  `post-em-lorentz-coupling`.
- All imported mathematical suppliers used by items 1–3 exist as pinned published items
  (`research/math-imports.json`); their exact statements are read before use.

## Checkpoint log

### 2026-10-09 — entry

- Read: `CLAUDE.md`, `SCHEMA.md`, `../PHYSICS-CONTENT-MODEL.md`, `WORKFLOW.md`, batch-28
  manifest/coverage/notes/cross-batch input, Step 3a report and scope decision (sufficient,
  scope hash `bb1980b3…`), plan-track L1838 ff., design scaffolding
  (`prose-scaffold.md`, `proposed-inventory.json` pair 06, `definition-contracts.md`,
  `core-conditional-proofs.md#K4`, `worked-example-verifications.md#X3`), owner authoring
  direction, reconciliation7 magnetostatics acceptance.
- Next action: author item 1 `lem-em-ideal-cylindrical-sheet-field` after reading its exact
  supplier statements.

### 2026-10-09 — items 1–2 authored (level 0)

- `items/lem-em-ideal-cylindrical-sheet-field.md` — authored. Statement = manifest text plus
  an explicit componentwise div/curl pairing convention. Proof: nullity of the cylinder
  surface (two measurable graphs + `cor-graph-of-a-measurable-function-is-lebesgue-null`),
  well-definedness of `T_g` via the bounded Borel representative `e_3 1_{rho<a}`, reduction
  of both pairings to the half cylinder `V`, divergence theorem on the finite piecewise C1
  presentation, coordinate computations `div(phi e_3)=e_3.grad phi` and
  `div(psi x e_3)=e_3.curl psi`, and the one-sided jump equivalence. Checks: precheck PASS,
  rendercheck OK, proof-layout 6 steps 0 defects. Manifest deps reconciled to actual uses:
  added `cor-graph-of-a-measurable-function-is-lebesgue-null`,
  `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`; removed the unused
  `thm-algebra-of-derivatives` (the constant-field computations need no product rule).
  Level unchanged at 0 (all imports read-only published items).
- `items/lem-em-ideal-line-current-field.md` — authored. Proof: axis nullity (Tonelli +
  singletons null), local integrability of `rho^{-1}` (Tonelli + two-dimensional polar
  formula, `sigma` finite), pointwise div/curl vanish by quotient rule, circulation `2 pi`,
  distributional pairings, excision limit `eps -> 0` (dominated convergence), inner-cylinder
  boundary term `(1/eps) int psi_3 dS` evaluated with the cylinder chart, uniform-continuity
  limit giving `2 pi A(psi)`, and the vanishing divergence pairing. Checks: precheck PASS,
  rendercheck OK, proof-layout 11 steps 0 defects. Manifest deps reconciled to actual uses:
  added `thm-tonelli-theorem-for-sigma-finite-product-spaces`,
  `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`,
  `cor-continuous-functions-are-borel-measurable`,
  `prop-countable-subsets-of-rn-are-lebesgue-null`; removed the unused Fubini-L1,
  extreme-value, integral-triangle and Euclidean-ball items (the polar theorem already
  states that `sigma` is finite). Level unchanged at 0.
- `item-dependency-levels.mjs check --run` clean (473 items, 80 pages, max level 24) after
  both manifest edits; `frontier-dependency-ledger.mjs refresh` clean (no new cross-batch
  edges: all reconciled suppliers are imported published mathematics).
- Next action: author item 3 `lem-em-newtonian-kernel-curl-identity` (level 1); its in-run
  supplier `lem-em-smooth-newtonian-upgrade` (batch 16) is still scaffolded, not authored —
  flag the provisional use.

### 2026-10-09 — resume: items 3–13 verified on disk and full local battery re-run

The checkpoint above was stale relative to disk. On resume I re-read all thirteen
carriers, both pages, the batch-28 manifest/coverage/proof-contracts, the
cross-batch input and the authored supplier carriers, re-derived the dependency
levels and the actual supplier uses, repaired the one manifest/contract gap
found, and re-ran every local check before recording decisions. Item-by-item
state and the exact supplier reconciliation:

3. `items/lem-em-newtonian-kernel-curl-identity.md` — statement matches the
   scaffold; proof is the finite-excision shell computation of `div A = N(div f)`
   and `curl A = (1/4pi) int f(y) x (x-y)/|x-y|^3 dy` at every point including
   the support (outer face vanishes, inner-face bound `O(eps)` via the surface
   measure, dominated convergence, alternating-symbol contraction). Deps
   reconciled earlier to actual uses (`lem-euclidean-balls-…` out,
   `thm-linearity-of-the-lebesgue-integral-on-l-one` in). **Escalate**:
   `lem-em-smooth-newtonian-upgrade` (batch 16) has no carrier; [F2] and step 1.1
   consume its exact interface (`Nh ∈ C^∞`, `-ΔNh = h`, `D^α Nh = N(D^α h)`).
4. `items/def-em-steady-current-regime.md` — clauses (a) steady reduction with
   `div J = 0` (pointwise C²/C¹; distributional otherwise, with the exact Choice
   boundary), (b) compact smooth class, (c1)–(c3) the three ideal pairings,
   (c4) admissibility, (d) scope, with the well-definedness remarks.
   **Accept**: actual uses are `post-em-vacuum-maxwell`(a),
   `pthm-em-charge-continuity`(a)/(b), `def-em-weak-sources`(c),
   `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-fields`,
   `def-em-sources`(b) — all authored on disk and read against the uses. The only
   unfinished closure item is `thm-sr-tensor-and-current-transformation`, consumed
   by `def-em-sources`(c) (covariant identification), a clause no step of this
   definition cites; closure-level only, flagged below.
5. `items/def-em-magnetic-moment.md` — (a) compact-current moment as a finite
   Riemann integral with rectangle independence, (b) declared-loop moment with
   the circle value `I pi a^2 e_3`, (c) status/scope and unit remarks.
   **Accept**: uses `def-em-steady-current-regime`(b)/(c1),
   `def-em-si-conventions` and the Riemann/cross-product mathematics; the
   computation is choice-free as stated; the unfinished SR closure item is not
   used.
6. `items/post-em-ideal-magnetostatic-models.md` — the physical adoption of the
   declared ideal models with `E=0`, `rho=0`, explicit separation from the earlier
   L1/point-sheet postulates, and scope prose; `physics_review` (formulation,
   scope, sources, non_derivation) passes in the batch contract. **Accept**: uses
   only authored suppliers; SR closure item not used.
7. `items/pthm-em-magnetostatic-vector-potential.md` — `A = mu_0 N(J)`
   componentwise with `-ΔA = mu_0 J`, `div A = 0` (the only use of
   `div J = 0` is step 2.1), `B = curl A` with `div B = 0`, `curl B = mu_0 J`,
   and the smooth-Maxwell reading/scope. **Escalate**: [F1] and steps 1.1, 2.1
   consume `lem-em-smooth-newtonian-upgrade`, still without a carrier.
8. `items/pthm-em-biot-savart.md` — the compact-class Biot–Savart
   representation at every point (step 1.1 via the vector potential and the
   kernel lemma) and the declared thin-loop limit with global distributional
   identities, integrable representative and decay (steps 2.1–3.1 via
   `lem-em-thin-current-limit` [F3]). **Escalate** on both unfinished suppliers,
   with the exact steps.
9. `items/pthm-em-magnetic-dipole-field.md` — uniform two-term far-field
   estimates with explicit remainders `O(mu_0 a^2 ||J||_1 r^{-3})`,
   `O(mu_0 a^2 ||J||_1 r^{-4})` and absolute constants, transported from the
   remainder lemma with the Riemann–Lebesgue moment reconciliation (step 1.1).
   **Escalate**: [F3] `lem-em-magnetic-dipole-remainder` has no carrier; steps
   1.1/2.1 consume it.
10. `items/ex-em-infinite-wire-and-solenoid.md` — both declared ideal fields
    verified clause-by-clause against admissibility (c4) with circulation, jump,
    symmetry, transverse decay and distributional identities. **Accept**: every
    step consumes authored items (two math lemmas, `def-em-steady-current-regime`
    (c2)–(c4), `post-em-ideal-magnetostatic-models`); no unfinished supplier is
    used.
11. `items/pthm-em-magnetic-loop-force-torque.md` — (a) coupling-(W) integrals,
    (b) `F = 0`, `N = m x B` by the antisymmetric first-moment identities,
    (c) slowly varying estimates with explicit absolute remainders (`div B = 0`
    used in the force identity), (d) compact-current sufficient condition,
    (e) scope, plus the distributional endpoint identity in step 1.3.
    **Manifest/contract repair**: the four published mathematical deps actually
    used by step 1.3 (`def-distributional-derivative`,
    `thm-chain-rule-for-total-derivatives`, `thm-ftc-second-part`,
    `def-dirac-delta-and-its-derivatives`) were missing from the manifest; they
    were added with role `mathematical-premise` (deps 15 → 19, matched to the
    item file). **Escalate** (transitive): step 3.3 via [F6] uses the
    compact-class construction of the vector-potential and Biot–Savart theorems,
    whose proofs consume `lem-em-smooth-newtonian-upgrade`; part (d) consumes
    `lem-em-thin-current-limit` through `pthm-em-biot-savart` [F3].
12. `items/ex-em-circular-loop-axis-field.md` — axis field as the explicit line
    integral, evaluated to `mu_0 I a^2/(2(a^2+z^2)^{3/2}) e_3` with
    `B(0) = mu_0 I/(2a) e_3`, identified with the Biot–Savart field and the
    declared thin-current limit, plus `m = I pi a^2 e_3`. **Escalate**: [F1] and
    step 1.1 consume `lem-em-thin-current-limit`; also `pthm-em-biot-savart`.
13. `items/ex-em-wire-force-coupling.md` — `f = -(mu_0 I_1 I_2/(2 pi d)) e_1`
    from wire 1's admitted field, the coupling (W) of the loop theorem on a
    compact segment, and the per-length division. **Accept with an explicit
    actual-use finding**: the example cites only clause (a) (and the endpoint
    identity) of the loop theorem, whose proof step 1.1 is a finite Riemann
    calculation independent of the theorem's part-(d) chain; the unfinished
    `lem-em-smooth-newtonian-upgrade`/`lem-em-thin-current-limit` and the SR
    algebra items are closure-only and are not consumed by any step here.

### Decisions recorded (step3-decisions.mjs `record-item`, phase 3b)

Receipts `research/physics-em-sr-40-2026-10-08-step3b-review-<item>.json`:
`repaired` for items 1–2; `accept` (confidence 1) for items 4, 5, 6, 10, 13;
`escalate` for items 3, 7, 8, 9, 11, 12 with the exact supplier IDs and
consuming steps in the reason field. `step3-decisions check --phase scope`
confirms this pair's scope decision is current (the run-wide phase shows only the
sibling `sr-newtonian-bridge` scope refresh outstanding); `check --phase final`
counts 28 accepted items across the run, including the seven closed items here,
with the six escalations owner-held exactly as the mandate requires until the
batch-16 carriers exist and the uses are reconciled.

### Checks actually run (batch-28 pair scope)

- `precheck.mts` explicit 13 item paths: PASS for all proof items; the two
  definitions and the postulate handled as nonproof/not-applicable — 0 failing.
- `rendercheck.mjs` 13 items + 2 pages: OK (no wikilinks in math, all math
  parses, all frontmatter parses).
- `proof-layout.mjs` explicit 13 item paths: 13 items, 55 steps, 0 defects.
- `content-policy.mjs research/…-batch-28.pages.json`: 13 scoped items,
  0 errors, 0 warnings. `manifest-deps.mjs` same manifest: 13 items,
  0 normalized, 0 errors.
- `item-dependency-levels.mjs check --run`: 473 items / 80 pages, maximum level
  24; the thirteen declared levels match the computed levels.
- `proof-contract.mjs research/…-batch-28.proof-contracts.json --strict`: 13/13
  items checked; the only findings are the five `citation-source-missing` rows
  for the three unauthored batch-16 suppliers (0 warnings otherwise); every
  citation quote matches the authored supplier text.
- `depcheck` scoped to the 13 items: only the expected
  `dep-unresolved`/`link-unresolved` rows for the five escalated consumers; no
  cycles, no B-leaf, no duplicate or missing registrations. Run-wide depcheck and
  `fwdcheck` remain red across all in-flight pairs (155 run items still without
  carriers), which is the expected mid-stage state.
- Scoped `physics-content` (13 items, 2 pages, `requireBodies: true`): only
  `edge-unresolved` for the unauthored suppliers; no classification, provenance,
  role, DAG or class-structure findings for any of the thirteen items.
- `coverage-checklist … --require-destination`: 2 pages, 48 harvested results,
  0 errors, 0 warnings. `source-fetch-check`: 8/8 source rows fetch-verified.
- `frontier-item-gate … --tool validate-plan` (pre-splice): FAIL run-wide with
  33 `undeclared-prereq` rows on other pages (em-expanded-analysis-prerequisites,
  em-boundary-and-spectral-prerequisites, em-experiment-analysis-prerequisites,
  em-variational-mathematical-prerequisites-examples, em-maxwell-integral-and-constraints,
  em-electrostatic-boundaries-and-conductors, em-material-response) — **none names
  a batch-28 page** — plus a `redundant-prereq` warning on
  `em-induction-and-circuit-limits` (it requires `picard-lindelof-and-first-order-odes`
  directly while already reaching it through this page's requires closure via
  em-expanded-analysis-prerequisites). Reported for Step 4; not repairable inside
  this pair's scope.
- `frontier-dependency-ledger refresh --run` clean; the batch-28 cross-batch
  input has 24 rows, one per current declared edge, all reviewed. `refresh
  --require-reviewed` is still red only for batches 2, 3, 4, 5, 6, 8, 30 and 35
  (sibling pairs in flight), not for batch 28.

### Bookkeeping changes made in this session

- `research/…-batch-28.pages.json`: repaired the `pthm-em-magnetic-loop-force-torque`
  dep list and roles (four added mathematical premises, as above). No statement
  text of any item was edited: the authored statements of items 1–2 carry the
  definitional clarifications recorded as local repairs in their receipts, and
  the manifest statements remain the Step-3a-bound scope text.
- `research/…-batch-28.cross-batch-dependencies.json`: refreshed the two page
  rows — `em-maxwell-integral-and-constraints` now `verified` with the exact
  consumed interfaces re-read against the authored carriers and the two removed
  edges named; `em-expanded-analysis-prerequisites` stays `open` with the exact
  escalated consumers and steps. The unified ledger was refreshed mechanically
  with the repository tool. No sibling file was edited.
- Proof-contracts, coverage and the two pages needed no change: the strict
  contract pass, coverage checklist and page checks are green in their current
  state.

### Published concerns

None confirmed for this pair. All suppliers used are draft run-local items or
pinned published mathematical snapshots; every inspected interface matched the
use. No published item was edited. The two historical edges
(`post-em-distributional-vacuum-maxwell`, `pthm-em-fixed-vacuum-jumps`) were left
as the owner-reconciliation7 `removed` records; the current items neither
declare nor use them.

### Open obligations at handoff

1. **Batch-16 carriers (owner-held escalations).** `lem-em-smooth-newtonian-upgrade`
   (consumers 3, 7, 8 step 1.1, 11 step 3.3), `lem-em-thin-current-limit`
   (consumers 8 steps 2.1/3.1, 11(d) via Biot–Savart, 12 step 1.1),
   `lem-em-magnetic-dipole-remainder` (consumer 9 steps 1.1/2.1). Escalate until
   each carrier exists and the exact step use is reconciled (receipt paths above).
2. **Closure-level, not load-bearing here.** `thm-sr-tensor-and-current-transformation`
   (batch 2) is in the dependency closure of items 4, 5, 6, 10 (and of 11, 13
   through `post-em-lorentz-coupling` plus the SR algebra items) but is not cited
   by any step of the thirteen items. When it is authored, the affected receipts
   rehash and receive an ordinary re-audit; no content change is expected.
3. **Run-level gates.** Step-3 `final` stays open for the rest of the run (445
   work rows, mostly unauthored items and in-flight pairs); the pre-splice
   `validate-plan` findings above are for Step 4 reconciliation. This pair's own
   scope and seven item decisions are current.
4. Independent mathematical review, source review and proof audit of all
   thirteen items follow in Steps 5–8; a decision recorded here is the author's
   complete-authoring record, not a verification stamp.

### Handoff summary

- Completed: all 13 assigned items authored and edited into their pages; both
  pair pages written; manifest, coverage, contracts and cross-batch input
  current for batch 28.
- Added suppliers: none (all reconciled dependencies already existed as pinned
  published mathematics or authored run items).
- Checks actually run: precheck, rendercheck, proof-layout, content-policy
  (item mode), manifest-deps, item-dependency-levels, strict proof-contracts,
  scoped depcheck, scoped physics-content, coverage-checklist,
  source-fetch-check, validate-plan (pre-splice, reported), step3-decisions
  scope/final checks, frontier-dependency-ledger refresh.
- Open: the six owner-held escalations and the three run-level items above;
  nothing in this pair was marked complete while its actual-use suppliers are
  unauthored.
