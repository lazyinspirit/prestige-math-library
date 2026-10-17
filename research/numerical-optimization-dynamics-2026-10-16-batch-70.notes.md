# Batch 70 authoring notes — Nonlinear conjugate gradient methods

Run `numerical-optimization-dynamics-2026-10-16`, batch `70`, role beta.
Assigned pair: `nonlinear-conjugate-gradient-methods` and its examples page.

## Controlling plan and conflicts

- Read the current owner-authoring direction, the complete OPT14 design in
  `research/plan-numerical-optimization-track.md` at lines 800 and 812, the
  incorporated `contract-opt14` in the optimization audit, and the current
  `plan-spec.json` rows for both pages.
- The controlling design is the current repaired OPT14 entry in the optimization
  plan together with its incorporated `contract-opt14`; the owner direction
  binds the incorporated appendix and overrides stale task/design copies. The
  two cited plan locations repeat the same scope and proof route; neither
  conflicts with the appendix.
- The current plan and `plan-spec.json` agree on pair identity, category, page
  order, companion, page prerequisites, and the stated nonlinear-CG scope. The
  spec's `items: []` is its pre-authoring inventory state; the generated batch
  manifest supplies the authored inventory. No plan/spec conflict was found.
- The owner direction preserves the distinct conclusions: FR has a positive
  normalized-slope bound and only `liminf ||g_k|| -> 0`; safeguarded PR+ has a
  uniform angle and full gradient-norm convergence; raw PR+ has no unrestricted
  convergence claim; exact-CG equivalence is limited to exact arithmetic and
  SPD quadratics; a finite line-search budget may fail.

## Inventory and dependency levels

The generated inventory contains seven A-page items and three B-page examples,
well below the 100-item page cap. Item levels are computed from in-run logical
supplier items; published/external items do not raise a level.

| Level | Item | Highest in-run supplier |
|---:|---|---|
| 2 | `alg-nonlinear-conjugate-gradient-methods` | `alg-bracketing-zoom-strong-wolfe-search` (level 1, batch 58) |
| 3 | `lem-fr-descent-and-direction-growth-bound` | nonlinear-CG algorithm (level 2) |
| 3 | `lem-safeguarded-pr-plus-uniform-angle` | nonlinear-CG algorithm (level 2) |
| 3 | `thm-nonlinear-cg-finite-budget-terminates` | nonlinear-CG algorithm (level 2) |
| 3 | `thm-fr-and-raw-prplus-exact-line-search-match-linear-cg` | nonlinear-CG algorithm (level 2); its other CG facts are published |
| 3 | `ex-rosenbrock-fr-prplus-trace` | nonlinear-CG algorithm (level 2) |
| 3 | `cex-raw-prplus-loses-descent-and-safeguard-restarts` | nonlinear-CG algorithm (level 2) |
| 4 | `thm-fletcher-reeves-liminf-gradient-under-strong-wolfe` | FR lemma (level 3) |
| 4 | `thm-safeguarded-pr-plus-gradient-norms-converge` | angle lemma and uniform-angle corollary (level 3) |
| 4 | `ex-spd-quadratic-nonlinear-cg-matches-linear-cg` | exact-CG theorem (level 3) |

The task's scheduling input is
`6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`.
The generated run dependency record gives batch 70 level 4 with prerequisite
batches 34 and 58; its row remains level 4. No item `deps` or page `requires`
were changed during authoring.

## Supplier verification and unresolved interfaces

- Batch 34: read the current `krylov-methods-and-lanczos-convergence` A page,
  its examples page, and the finite-precision CG residual-gap, two-pass MGS,
  and computed-GMRES residual-gap items. The new CG result is expressly a
  finite-precision residual-gap theorem; it is not used to prove an exact
  nonlinear/linear CG identity or to transfer a finite-precision guarantee.
  Read the published canonical CG recurrence, residual-orthogonality theorem,
  positive-denominator proposition, and energy-inner-product definition at
  their actual linear-algebra homes; these are the precise item suppliers for
  the local exact-equivalence proof.
- Batch 58: read the current `nonconvex-line-search-and-inexact-newton-methods`
  A page and the actual bodies of `def-wolfe-and-strong-wolfe-conditions`,
  `alg-bracketing-zoom-strong-wolfe-search`,
  `lem-wolfe-step-lower-bound-from-the-descent-angle`,
  `thm-zoutendijk-summability-for-wolfe-steps`, and
  `cor-uniform-descent-angle-implies-gradient-vanishing`. The lower-bound,
  Zoutendijk, and corollary proofs were checked for their sign conventions,
  trial-segment hypotheses, sublevel lower bound, and exact conclusion.
- The local FR recurrence proof supplies its direction-growth estimate before
  the liminf theorem. The PR+ safeguard proof checks both kept and reset
  branches. The convergence theorem imports only the actual uniform-angle
  corollary under its complete hypotheses. No failed finite search is treated
  as a successful Wolfe step.
- There is no unresolved supplier item or missing hypothesis affecting the ten
  assigned claims. Batch 34 and 58 remain draft supplier evidence; this record
  claims neither independent acceptance nor approval.

## Sources and coverage

The A page and B page each have two independent treatments: Nocedal–Wright's
full textbook PDF and the complete Gilbert–Nocedal author-hosted paper. The
coverage file records exact locators, supported items, harvested results and
their dispositions. The B examples' numerical values and inequalities are
computed locally; source method formulas and exact-quadratic context are not
used as substitutes for those verifications.

The selected textbook and paper PDFs were opened and inspected in the full-text
PDF view. The relevant Nocedal–Wright material includes the complete Zoutendijk
Theorem 3.2 proof, the linear-CG exact-minimization discussion, FR Lemma 5.6,
and the complete Theorem 5.7 proof. The Gilbert–Nocedal material includes the
nonlinear recurrence/exact-quadratic convention and the FR descent and liminf
proofs. PR+ source arguments with different line-search/property hypotheses
are explicitly distinguished in the coverage file. Existing failed mirror
history remains in `source_candidates`; the selected full-text URLs have no
unresolved retrieval failure and no dropped active source.

`source-fetch-check --stamp` fetched and verified both selected PDFs (2/2 newly
stamped). After adding the same inspected treatments to the B-page record, the
final no-network check verified 4/4 page-source entries; the two duplicate
entries reuse the identical URL-bound byte/hash stamps. `coverage-checklist`
reports two pages, 20 harvested results, zero errors, and zero warnings.

## Mathematical changes

- The finite-budget theorem now distinguishes the at-most `K+1` outer-iterate
  gradient evaluations from trial directional-derivative evaluations. The
  earlier total-gradient count would have ignored the line search's `phi'(t)`
  evaluations. The theorem makes no total gradient-count or arithmetic-work
  claim.
- The nonlinear-CG algorithm now names its line-search mode as an input and
  states the exact-SPD model inputs for that branch.
- The algorithm checks the new gradient after every accepted step and returns
  **stationary** when it is zero, including after the final budgeted update;
  loop exhaustion with a nonzero last gradient returns **iteration-limit**.
  This closes the terminal-zero boundary that the earlier wording left
  ambiguous and matches the exact-CG theorem's common zero-residual exit.
- The finite-budget theorem and its proof contract now reflect that terminal
  check. Its outer-iterate gradient bound remains at most `K+1`.
- The exact-CG equivalence proof now treats the initial zero-residual exit
  explicitly and separates the base case from the induction step.
- The local example proofs retain the exact Rosenbrock strong-Wolfe arithmetic,
  the rational raw-PR+ ascent witness and safeguard reset, and the exact
  two-step SPD-CG trace. No choice axiom is used.

## Scoped checks

Final checks after the terminal-zero boundary edit:

- `node tools/tsx-run.mjs tools/precheck.mts --json <batch-70 items>`: 10 files,
  9 proof-bearing items checked, 0 failures; the algorithm is not applicable.
  The normative precheck's phase-layer repair was adopted for six proofs and
  their contract step IDs, references, and boundary evidence were reconciled.
- `node tools/proof-layout.mjs <all 10 batch-70 items>`: 10 items, 29 steps,
  0 defects.
- `node tools/rendercheck.mjs <10 items and 2 pages> --json`: 12 files,
  0 errors and 0 warnings.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-70.proof-contracts.json --strict --json`:
  9/9 proof-bearing items checked, 0 errors and 0 warnings.
- Focused `depcheck` using the 10 manifest item IDs: 439 dependency-closure
  items, 87 prerequisite pages, 0 errors and 0 warnings. No undeclared supplier
  links or cycles were found in the selected closure.
- `content-policy` on the batch-70 manifest: 10 items, 0 errors and 0 warnings.
  `manifest-deps`: 10 items, no missing `deps` arrays. `coverage-checklist`
  with destination enforcement: two pages, 20 harvested results, 0 errors and
  0 warnings. `source-fetch-check --stamp`: 4/4 source records fetch-verified
  and resolved, 0 drops.
- The run-wide `item-dependency-levels` check exits 1 with 57 errors outside
  batch 70: 52 empty scaffold inventories, duplicate page listings for
  `ex-parareal-dissipative-scalar-heat-mode`,
  `ex-parareal-oscillatory-coarse-phase-error`, and
  `ex-parareal-nonlinear-tube-escape`, and dependency-level mismatches for
  `lem-tamed-euler-uniform-moment-bounds` and
  `thm-tamed-euler-strong-order-half`. It reports no batch-70 item-level
  mismatch.
- The latest run-wide `batch-dependency-levels` recomputation exits before
  level analysis with `Duplicate item ex-parareal-dissipative-scalar-heat-mode`.
  An earlier recomputation also surfaced malformed YAML in Batch 73's
  `items/alg-adam-update.md` at line 19 (the unquoted source title contains
  `Adam: A Method`); the duplicate now prevents the command from reaching that
  parser error. No foreign file was edited. The assigned dependency record
  still binds input
  `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510` and gives
  batch 70 level 4 from batches 34 and 58; the recorded DAG has those suppliers
  at levels 2 and 3, respectively.
- The two early Batch 70 `ready` decision records for the algorithm and FR
  lemma are now hash-stale because the algorithm body changed at the terminal
  zero-gradient boundary. The final `step1-decisions check` and attempted
  algorithm re-record both stop before writing with
  `Duplicate item ex-parareal-dissipative-scalar-heat-mode`; this is the same
  foreign duplicate reported above. The other eight Batch 70 items still lack
  decision records. No stale record was manually overwritten and no `--owner`
  override was used. The owner must resolve the duplicate inventory before the
  run-wide readiness CLI can close current Batch 70 records.

Recomputed live status from `.autopilot/numerical-optimization-dynamics-2026-10-16`
and `git log` on 2026-10-16: the run is still at the running Step 1 scaffold
stage (58/107 covered, no worker in flight). Its blockers include the existing
owner repair/recertification hold and the invalid unit-prerequisite evaluation
for duplicate item `ex-parareal-dissipative-scalar-heat-mode`. Batch 70's
global readiness/dependency blockers are external to this pair; this handoff
does not claim the run gate or stage has passed.
