# Batch 24 notes — `cm08-symmetry-noether-and-conditional-conservation` (and examples)

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 24; one A/B pair
(orders 127/128), category `non-relativistic-classical-mechanics`, library
`physics`. Step 1 (complete initial authoring) is finished: 13 items and both
page carriers are authored, checked and recorded ready. The full authoring
handoff is
`research/physics-cm-qm-gr-79-2026-10-11-step3b-pair-cm08-symmetry-noether-and-conditional-conservation.md`.

## Delivered inventory

- A page `cm08-symmetry-noether-and-conditional-conservation` (9 items, levels 13–19):
  `def-cm08-symmetry-of-the-mechanical-lagrangian` (13),
  `pthm-cm08-point-noether` (16), `pthm-cm08-general-noether` (16),
  `pthm-cm08-time-energy` (17), `pthm-cm08-translation` (17),
  `pthm-cm08-rotation` (17), `pthm-cm08-boost-boundary` (18),
  `pthm-cm08-moving-chart-energy-function` (16),
  `rem-cm08-external-symmetry-breaking` (19).
- B page `cm08-symmetry-noether-and-conditional-conservation-examples`
  (4 examples, levels 17–19):
  `ex-cm08-uniform-field-breaks-translation-and-boost` (19),
  `ex-cm08-pair-potential-charges-check` (19),
  `ex-cm08-rotating-chart-hamiltonian-not-mechanical-energy` (17),
  `ex-cm08-time-dependent-potential-breaks-energy` (18).
- Levels are one plus the maximum level of an in-run `deps` target; published
  root suppliers and out-of-run pages do not raise levels. Verified mechanically
  by the `dependencyLevels` implementation behind `item-dependency-levels.mjs`
  over all run manifests: zero cm08 findings (the remaining 52 errors are empty
  inventories of unbuilt pages in other batches). Engine batch graph: batch 24
  has `dependency_level: 7` and `requires: [23]`; batch 23 is complete.

## Design versus plan

- The reservation (track plan L647) lists eight provisional A items with their
  kinds; the delivered A inventory matches one-to-one, with kinds preserved:
  `cm08-symmetry`→`def-cm08-symmetry-of-the-mechanical-lagrangian` (def),
  `cm08-point-noether`→`pthm-cm08-point-noether` (pthm),
  `cm08-time-energy`→`pthm-cm08-time-energy` (pthm),
  `cm08-translation`→`pthm-cm08-translation` (pthm),
  `cm08-rotation`→`pthm-cm08-rotation` (pthm),
  `cm08-boost-boundary`→`pthm-cm08-boost-boundary` (pthm),
  `cm08-general-noether`→`pthm-cm08-general-noether` (pthm, the reserved E4
  section), `cm08-external-symmetry-breaking`→`rem-cm08-external-symmetry-breaking` (rem).
  One local prerequisite was added on the same A page,
  `pthm-cm08-moving-chart-energy-function`, because the design's B-and-sources
  theme "moving-coordinate H≠E" and the general theorem's chart-energy reading
  require the difference identity, the coincidence criterion and the
  chart-energy conservation under hyperregularity proved locally. The four
  B-side examples (no reserved inventory) realize the declared B themes: a
  force law breaking a kinematic symmetry (uniform field breaking translation
  and boost; time-dependent potential breaking energy), moving-coordinate H≠E
  (rotating chart), and a positive pair-potential model verifying all four
  charges. No reserved claim was dropped or weakened.
- Local mathematical proof sections `E4`, `M4`, `M5` of the design are realized
  as in-run mathematics items consumed with exact statements:
  `def-cm-infinitesimal-point-symmetry`,
  `thm-cm-point-symmetry-charge-is-conserved`,
  `thm-cm-point-noether-identity-with-time-reparametrization` and
  `thm-cm-stationarity-iff-euler-lagrange` (batch 4, page `cm-math-variations`),
  together with `prop-cm-mechanical-chart-lagrangian-is-hyperregular`,
  `def-cm-legendre-map-in-a-time-dependent-chart` and
  `prop-cm-hamiltonian-branch-identities` for the moving-chart theorem. The
  published canonical supplier `thm-chain-rule-for-total-derivatives` is
  consumed with its exact statement. The design's second named canonical
  supplier, `thm-euclidean-inverse-function-theorem`, is not consumed: the
  delivered proof route uses the chain rule, the constancy criterion, the ODE
  suppliers and the cited chart theorems, and no implicit-function step
  occurs. This is a delivery note, not a weakening: no claim of the reservation
  rests on it.
- `research/plan-spec.json` entries 127/128 agree with the carriers in id,
  title, kind sequence, order, category, library, companion and `requires`
  (`["cm07-stationary-action-and-lagrangian-dynamics"]` and
  `["cm08-symmetry-noether-and-conditional-conservation"]`); the item arrays in
  the plan are empty (prose-track splice), so the item scope is taken from the
  linked reservation and this batch's manifest. No other design-versus-plan
  conflict was found, and no plan change was requested.

## Cross-batch dependencies and consumer inputs

- 114 outgoing cross-batch rows (113 item edges plus the A-page→
  `cm07-stationary-action-and-lagrangian-dynamics` page edge; the B→A page edge
  is same-batch and is not a ledger row) are recorded with consumer-side
  evidence in
  `physics-cm-qm-gr-79-2026-10-11-batch-24.cross-batch-dependencies.json` and
  accepted by `frontier-dependency-ledger.mjs refresh` ("refreshed and
  deduplicated"): all 114 edges with consumer batch 24 carry a `verified`
  review, and no batch-24 review is orphaned. In-run item suppliers come from
  batches 1, 4, 17, 18, 19 and 23.
- Consumer batches of this pair (from the refreshed run ledger): batch 30
  (`cm14-hamilton-jacobi-and-integrability` requires the cm08 A page). Its
  dependency input will be written by its own worker against the current
  carriers; no other batch manifest declares a cm08 supplier.
- Internal order on the A page: the definition (13) → point Noether (16) →
  general Noether (16) → time-energy (17), translation (17), rotation (17) →
  boost-boundary (18) → remark (19), with the moving-chart theorem (16)
  consuming cm07 and the mathematics chart items; the four B examples (17–19)
  consume the A page. No cycles, no forward references, no missing
  prerequisites.

## Sources

7 coverage entries (4 A, 3 B; Tong, Likharev and Stewart reused across the two
pages, SICM on the A page): D. Tong *Classical Dynamics* §2.4, §2.4.1;
K. K. Likharev *Essential Graduate Physics* CM §2.3–2.4; G. J. Sussman and
J. Wisdom *SICM* (2nd ed.) §1.8.5, §5.4.4–5.4.5; I. Stewart MIT 8.09/8.309
§1.3. 33 harvested results with dispositions (25 included with item ids, 8 out
of scope with specific reasons), all 7 fetch-verified (`source-fetch-check
--coverage`: 7/7 fetch-verified, 7/7 resolved, 0 documented drops); no
recovery attempts and no source drop or owner escalation were required.

## Authoring review repairs (Step 1, final session)

1. Two `cited-not-in-deps` findings were resolved: `post-cm01-spacetime` was
   added to the definition item's `deps` with its role (level recomputed
   unchanged), and a duplicated remarks block of the pair-potential example
   that named cm03 balance items outside the declared `deps` was removed; the
   final `depcheck` run has no cm08 finding.
2. The numerical step of
   `ex-cm08-rotating-chart-hamiltonian-not-mechanical-energy` now carries [F5]
   for its cross-product evaluation `omega x e_1 = (0,2,0)`, completing the
   fact-to-step map; the goal was to remove the contract generator's
   `shotgun-bracket` warning by citing the fact at the step that uses it.
3. Proof contracts were generated from the finished arguments: 239 exact
   citation excerpts (each verified to occur verbatim in the named supplier
   section), one derivation entry per numbered step with its explicit inputs,
   and a full 8-case boundary worksheet for every item, including the
   definition and remark items (empty citation/step lists with the complete
   boundary disposition).

## Checks run on the final carriers

- `precheck.mts` (via `tsx-run.mjs`) on all 13 items: `11 checked, 0 failing —
  all clean` (the definition and remark have no phase body).
- `proof-layout.mjs` on 13 items + 2 pages: `15 items, 73 steps, 0 defects`.
- `rendercheck.mjs` on 13 items + 2 pages: OK (YAML, KaTeX, no nested or
  multiline math problems).
- `proof-contract.mjs --strict`: `0 error(s), 0 warning(s), 13/13 item(s)
  checked`.
- `proof-contract-coverage.mjs`: the run-wide form aborts on an empty inventory
  of another batch (`Empty or invalid frontier page inventory
  cm13-symplectic-geometry-and-canonical-methods`); a batch-local replica of
  the same predicate over this batch's manifest reports `13 item(s), 11/11
  supplied argument(s) covered` (the definition and remark are not
  proof-bearing under `isProofBearing` but also carry contract entries).
- `content-policy.mjs` on the batch manifest: `13 scoped item(s), 0 error(s),
  0 warning(s)`.
- `manifest-deps.mjs`: `13 item(s), 0 normalized, 0 error(s)`;
  `manifest-integrity.mjs --run`: `158 page(s) owed, 158 in the manifests — no
  scope drift`.
- `coverage-checklist.mjs`: `2 page(s), 33 harvested result(s), 0 error(s), 0
  warning(s)`; `source-fetch-check.mjs --coverage`: `7/7 source(s)
  fetch-verified` (check mode).
- `item-dependency-levels.mjs check --run`: 52 errors, all `empty scaffold
  inventory` of unbuilt pages in other batches; no cm08 finding.
- `depcheck.mjs`: 765 run-wide warnings elsewhere in the corpus on the final
  run (the count drifts as other workers repair their material); none names a
  cm08 item (0 matches for all 13 item file names in the warning section).
- `fwdcheck.mjs --run`: all 13 cm08 items `inherited`; no finding names a cm08
  item (the 12 598 `forward-undeclared` findings are in the mathematics
  corpus).
- `extcheck.mjs` on the 13 explicit item paths: `28168 items, 0
  recorded-not-proved, 0 resting on them — OK`.
- `validate-plan.mjs research/plan-spec.json --run`: pages 127/128 resolve with
  9/4 items and exactly the plan requires; the five `undeclared-prereq` errors
  are in other batches (`qm-math-controlled-dynamics`,
  `qm-math-fock-and-equilibrium`, `gr-homogeneous-cosmology`); no cm08 finding.
- `frontier-dependency-ledger.mjs refresh --run`: `refreshed and deduplicated`;
  114 batch-24 outgoing rows present, all `verified`.
- `step1-decisions.mjs check --run`: `1041 item(s), 946 ready`, `closed:
  false`; 147 work rows, all `empty scaffold inventory` of other batches'
  unbuilt pages; 0 cm08 work rows after the readiness records.

## Run-level findings outside batch 24 (recorded, not repaired here)

1. `physics-check.mjs --run` aborts on `Invalid or empty current page in
   physics-cm-qm-gr-79-2026-10-11-batch-29.pages.json`; the unbuilt later
   batches are outside this worker's scope, and the same condition blocks the
   run-wide form of `item-dependency-levels`, `proof-contract-coverage` and
   `extcheck --run`.
2. `validate-plan.mjs --run` fails only on other batches'
   `undeclared-prereq` findings (5 rows, none cm08).
3. `batch-dependency-levels.mjs check --run` reports `Stale batch dependency
   levels ...; recompute before authoring`: its input hash covers every batch
   manifest, and concurrent writes by other workers changed that input. The
   recorded levels for batch 24 (`dependency_level: 7`, `requires: [23]`) are
   consistent with this batch's manifest; engine state was deliberately not
   edited by this worker.
4. `depcheck.mjs` (765 warnings on the final run) and `fwdcheck.mjs`
   (12 598 findings) exit nonzero run-wide on unrelated published/deferred
   material in other libraries; no finding names cm08.

## Readiness

All 13 items are recorded `ready` after the final carrier, manifest and proof
contract rebuild, each with its exact examined dependency list
(`step1-decisions.mjs record`, then `check`: no cm08 work row). No cm08 item is
escalated; no source recovery or owner escalation was required. Step 1
authoring is complete; independent review is Step 2's task, and readiness here
is an authoring disposition, not a mathematical approval.
