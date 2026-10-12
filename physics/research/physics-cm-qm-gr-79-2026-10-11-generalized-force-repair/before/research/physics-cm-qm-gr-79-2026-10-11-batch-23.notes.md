# Batch 23 notes — `cm07-stationary-action-and-lagrangian-dynamics` (and examples)

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 23; one A/B pair
(orders 125/126), category `non-relativistic-classical-mechanics`, library
`physics`. Step 1 (complete initial authoring) is finished: 16 items and both
page carriers are authored, checked and recorded ready. The full authoring
handoff is `research/physics-cm-qm-gr-79-2026-10-11-step3b-pair-cm07-stationary-action-and-lagrangian-dynamics.md`.

## Delivered inventory

- A page `cm07-stationary-action-and-lagrangian-dynamics` (10 items, levels 12–15):
  `def-cm07-action-and-mechanical-lagrangian` (12),
  `pthm-cm07-first-variation-and-euler-lagrange-expression` (13),
  `pthm-cm07-euler-lagrange-equations` (14), `pthm-cm07-newton-equivalence` (15),
  `pthm-cm07-coordinate-covariance-of-the-equations` (15),
  `pthm-cm07-boundary-terms-and-gauge` (15),
  `def-cm07-generalized-coordinates-and-forces` (13),
  `lem-cm07-immersion-euler-lagrange-transport` (0, mathematics),
  `pthm-cm07-lagrangian-reduction-of-ideal-constraints` (14),
  `rem-cm07-scope-and-singular-warnings` (15).
- B page `cm07-stationary-action-and-lagrangian-dynamics-examples` (6 examples,
  levels 9–16): `ex-cm07-free-particle-straight-lines` (16),
  `ex-cm07-oscillator-stationary-saddle-check` (15),
  `ex-cm07-polar-coordinate-kinetic-metric-check` (16),
  `ex-cm07-total-derivative-gauge-check` (16),
  `ex-cm07-nonholonomic-unrestricted-action-fails` (9),
  `ex-cm07-pendulum-constraint-elimination-check` (15).
- Levels are one plus the maximum level of an in-run `deps` target; published
  root suppliers and out-of-run pages do not raise levels. Verified mechanically
  by the `dependencyLevels` implementation behind `item-dependency-levels.mjs`
  over all run manifests: zero cm07 findings (the remaining run errors are empty
  inventories of unbuilt pages in other batches). Engine batch graph: batch 23
  has `dependency_level: 6` and `requires: [12, 22]`, both complete.

## Design versus plan

- The reservation (track plan L617) lists eight provisional A items with their
  kinds; the delivered A inventory matches one-to-one (def, pthm, pthm, pthm,
  pthm, pthm, def, rem) plus two locally authored prerequisites on the same A
  page (`def-cm07-generalized-coordinates-and-forces` realizes the
  `cm07-generalized-force` contract item; `lem-cm07-immersion-euler-lagrange-transport`
  and `pthm-cm07-lagrangian-reduction-of-ideal-constraints` realize the
  constraint-elimination scope implied by the B-side theme "invalid
  unrestricted nonholonomic action" and by the constraint page cm06). The B
  page carries six constructed examples, not an inventory reservation. No
  reserved claim was dropped or weakened.
- Local mathematical proof sections: `E4` (coordinate covariance and the full
  Noether identity), `M3` (finite-interval first variation), `M5` (point
  symmetry and boundary terms) and `E20` (rheonomic acceleration, phase and
  endpoint action) are realized as in-run mathematics items on
  `cm-math-variations`; `E19`'s saddle phenomenon is realized by
  `prop-cm-oscillator-second-variation-signs` on `cm-math-verification` and
  re-derived for the physical oscillator on the B page. Published canonical
  suppliers named by the reservation (`thm-chain-rule-for-total-derivatives`,
  `thm-integration-by-parts`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`)
  are consumed with exact statements.
- **Recorded plan interaction, resolved without a plan change.** A first draft
  of `ex-cm07-oscillator-stationary-saddle-check` depended on
  `lem-cm-cosine-sine-orthogonality-and-odd-extension`, homed on the
  out-of-closure page `cm-math-continuum`; `validate-plan` reported
  `[undeclared-prereq]`. Instead of extending the page's `requires` beyond the
  plan, the example now proves
  $\int_0^T\sin^2(n\pi t/T)dt=\int_0^T\cos^2(n\pi t/T)dt=T/2$ inline from the
  product-to-sum identity and the fundamental theorem, so the plan `requires`
  `["cm-math-verification","cm06-regular-constraints-and-moving-frames"]` are
  preserved verbatim and the B page depends only on root canonical items for
  this computation.
- The design's B-and-sources sentence ("stationary saddle, total derivatives,
  coordinate kinetic metric, invalid unrestricted nonholonomic action;
  T§§2.1–2.3; S Ch1; L§10.3") is satisfied thematically: the saddle, gauge and
  kinetic-metric examples are present, the unrestricted-action failure is
  present, and the nonholonomic scope warning is recorded on the A page with the
  cited counterexample. Likharev Chapter 10's heuristic adiabatic reasoning is
  not used or needed on this pair (it belongs to the later CM12–CM14 pages), so
  no claim rests on the parts of the source that the scaffold audit flagged as
  heuristic.
- `research/plan-spec.json` entries 125/126 agree with the carriers in id,
  title, kind, order, category, library, companion and `requires`; the item
  arrays in the plan are empty (prose-track splice), so the item scope is taken
  from the linked inventory and this batch's manifest.
- No other design-versus-plan conflict was found.

## Cross-batch dependencies and consumer inputs

- 94 outgoing cross-batch rows (92 item edges plus the two A-page page edges;
  the B→A page edge is same-batch and is not a ledger row) are recorded with
  consumer-side evidence in `physics-cm-qm-gr-79-2026-10-11-batch-23.cross-batch-dependencies.json`
  and accepted by `frontier-dependency-ledger.mjs refresh` ("refreshed and
  deduplicated"). In-run item suppliers come from batches 4, 12, 17, 18, 19 and
  22; root published items supply the analysis used by the local lemma.
- Consumer batches of this pair (from the run manifests): batch 24 (cm08), batch
  25 (cm09), batch 28 (cm12) and batch 33 (cm17); all four manifests are still
  empty, so their dependency inputs will be written by their own workers
  against the current carriers.

## Authoring review repairs (Step 1, final session)

1. Step-numbering canonicalisation: every numbered step is now a single
   physical line with trailing tags, numbered by citation depth per the
   normative precheck's repair layer; stale bare step references left by
   renumbering were corrected in two items.
2. Two `cited-not-in-deps` findings were fixed by adding the cited suppliers to
   `deps` with roles (`lem-cm-first-variation-formula`,
   `def-cm02-newtonian-flow`); levels recomputed unchanged.
3. One fact of the nonholonomic example ([F4]) was cited by no step; the step
   that uses it now carries [F4].

## Sources

10 coverage entries (6 A, 5 B; Tong, Cline and Likharev reused across pages),
46 harvested results with dispositions (35 included with item ids, 11 out of
scope with specific reasons), all 10 fetch-verified with byte counts, hashes and
timestamps; no recovery attempts and no drops were required.

## Checks run on the final carriers

- `precheck.mts`: `13 checked, 0 failing — all clean`.
- `proof-layout.mjs` on 16 items + 2 pages: `18 items, 65 steps, 0 defects`.
- `rendercheck.mjs`: OK (YAML, KaTeX, math nesting).
- `proof-contract.mjs --strict`: `0 error(s), 0 warning(s), 16/16 item(s) checked`.
- `proof-contract-coverage.mjs` (batch overlay): `16 item(s), 13/13 supplied argument(s) covered`.
- `content-policy.mjs` on the batch manifest: `16 scoped item(s), 0 error(s), 0 warning(s)`.
- `manifest-deps.mjs`: `16 item(s), 0 normalized, 0 error(s)`; `manifest-integrity.mjs --run`: `158 page(s) owed, 158 in the manifests — no scope drift`.
- `coverage-checklist.mjs`: `2 page(s), 46 harvested result(s), 0 error(s), 0 warning(s)`; `source-fetch-check.mjs --coverage`: `10/10 source(s) fetch-verified`.
- `item-dependency-levels.mjs check --run`: no cm07 finding (other batches' empty inventories remain).
- `depcheck.mjs --run`: no cm07 finding. `validate-plan.mjs`: no cm07 finding.
- `fwdcheck.mjs --run`: cm07 items `inherited`; no finding. `extcheck.mjs` on the 16 explicit paths: `0 recorded-not-proved, 0 resting on them — OK`.

## Run-level findings outside batch 23 (recorded, not repaired here)

1. `physics-check.mjs --run` aborts on `physics-content: Invalid or empty
   current page in physics-cm-qm-gr-79-2026-10-11-batch-24.pages.json`; the
   unbuilt later batches are outside this worker's scope and block the run-wide
   forms of `item-dependency-levels`, `proof-contract-coverage` and
   `extcheck --run` as well.
2. `validate-plan.mjs --run` fails only on other batches'
   `undeclared-prereq`/`redundant-prereq` findings; no cm07 page or item is
   named.

## Readiness

All 16 items are recorded `ready` after the final carrier and manifest rebuild,
with their exact examined dependency lists; no cm07 item is escalated. Step 1
authoring is complete; independent review is Step 2's task, and readiness here
is an authoring disposition, not a mathematical approval.
