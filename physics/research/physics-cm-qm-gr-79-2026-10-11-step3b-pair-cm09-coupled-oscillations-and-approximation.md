# Step 3b authoring report — pair `cm09-coupled-oscillations-and-approximation` / `cm09-coupled-oscillations-and-approximation-examples`

- Run: `physics-cm-qm-gr-79-2026-10-11`; role: beta (batch 25), Step 1 complete initial authoring; 2026-10-11.
- Owned pair: A page `cm09-coupled-oscillations-and-approximation` (order 129, category `non-relativistic-classical-mechanics`, library `physics`, requires `cm04-one-dimensional-conservative-and-dissipative-models`, `cm07-stationary-action-and-lagrangian-dynamics`); B page `cm09-coupled-oscillations-and-approximation-examples` (order 130, requires the A page).
- Owned items in authoring order (dependency level; numbered proof steps; suppliers before consumers):
  1. `def-cm09-coupled-quadratic-model` (14, A, definition)
  2. `pthm-cm09-free-modes-and-degeneracy` (15, A, 10 steps)
  3. `pthm-cm09-linearization-at-a-strict-minimum` (16, A, 5 steps)
  4. `pthm-cm09-linearization-error-bound` (15, A, 5 steps)
  5. `pthm-cm09-forced-modal-response` (16, A, 7 steps)
  6. `pthm-cm09-averaging-for-weak-damping` (15, A, 7 steps)
  7. `rem-cm09-zero-modes-degeneracy-and-scope` (17, A, remark)
  8. `ex-cm09-two-mass-spring-modes` (18, B, 7 steps)
  9. `ex-cm09-triatomic-translation-zero-mode` (16, B, 6 steps)
  10. `ex-cm09-double-pendulum-linear-modes` (16, B, 6 steps)
  11. `ex-cm09-degenerate-oscillator-subspace` (19, B, 5 steps)
  12. `ex-cm09-unstable-quadratic-mode` (18, B, 5 steps)
  13. `ex-cm09-forced-resonant-mode-check` (19, B, 5 steps)
  14. `ex-cm09-weak-damping-averaging-check` (16, B, 5 steps)
  15. `ex-cm09-cubic-potential-error-check` (16, B, 5 steps)
- Artifacts owed at handoff: the fifteen item carriers under `items/`; the two page carriers under `library/non-relativistic-classical-mechanics/`; `research/physics-cm-qm-gr-79-2026-10-11-batch-25.pages.json`; `.coverage.json`; `.proof-contracts.json`; `.cross-batch-dependencies.json`; `.notes.md`; this report; Step-1 readiness records. The `dispatch-author-artifacts` accounting then passes 19/19 for the pair.

## Scope and inputs

- Read before construction: `AGENTS.md`; `../CLAUDE.md`; `CLAUDE.md`; `SCHEMA.md`; `WORKFLOW.md`; `../PHYSICS-CONTENT-MODEL.md`; the binding owner direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`; the batch dependency levels `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch 25 = level 7, requires batches 20 and 23; both complete); the design section `research/plan-non-relativistic-classical-mechanics-track.md` L677 (CM09 reservation and B-side source inventory); `research/plan-spec.json` entries 129/130; the scaffold proof sections `M7`, `E3`, `E8`, `E19` and the closure ledger; and the current carriers of every consumed supplier.
- All 15 items carry explicit `dependency_roles` and a nonempty `physical_scope`; all are `domain: physics` (there is no purely mathematical item in this pair; the mathematical suppliers are consumed in-run items on `cm-math-*` pages). Kinds: 1 definition, 5 physics-theorems, 1 remark, 8 examples. Every statement provenance is `ai-altered` with no `generation` block, so no `ai-generated` statement is a `deps` target. No published content, shared plan file, engine state or mathematical original was edited.

## Design versus plan

- The seven provisional A items of the reservation are delivered one-to-one with kinds preserved: `cm09-mass-metric`→`def-cm09-coupled-quadratic-model` (def), `cm09-linearization`→`pthm-cm09-linearization-at-a-strict-minimum` (pthm), `cm09-generalized-eigenmodes`→`pthm-cm09-free-modes-and-degeneracy` (pthm), `cm09-zero-mode`→`rem-cm09-zero-modes-degeneracy-and-scope` (rem), `cm09-forcing`→`pthm-cm09-forced-modal-response` (pthm), `cm09-error-control`→`pthm-cm09-linearization-error-bound` (pthm), `cm09-averaging`→`pthm-cm09-averaging-for-weak-damping` (pthm). No reserved claim was dropped or weakened. The B page (no reserved items) carries eight constructed examples covering the declared B-side themes: two coupled masses, degeneracy, an unstable quadratic mode, resonance, and the limits of the approximation statements.
- Local mathematical proof sections of the reservation are materially realized as in-run mathematics items: `M7` (quadratic modes and energy stability) by `thm-cm-quadratic-mode-decomposition`, `prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium`, `lem-cm-strict-minimum-has-positive-semidefinite-hessian` and `thm-cm-energy-stability-of-a-strict-minimum` on `cm-math-dynamics`; `E3` (oscillators and forcing) by the forced-oscillator items of `cm-math-approximation`; `E8` (finite-time linearisation, averaging and adiabatic control) by `thm-cm-finite-time-linearization-error-bound`, `thm-cm-averaging-for-fast-periodic-oscillations`, `def-cm-averaging-data-and-averaged-field` and `thm-cm-adiabatic-invariant-drift-bound` on `cm-math-approximation`; `E19` (verification examples) by `prop-cm-two-mass-spring-modes`, `prop-cm-pendulum-small-angle-linearization-bound` and `prop-cm-oscillator-second-variation-signs` on `cm-math-verification`.
- Published canonical mathematical suppliers named by the reservation are consumed with exact statements: `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` transitively through `thm-cm-quadratic-mode-decomposition`, and `cor-second-order-taylor-expansion-with-the-hessian` transitively through `lem-cm-strict-minimum-has-positive-semidefinite-hessian`; both are cited directly by this pair's items.
- Page `requires` match the plan exactly; both pages resolve with 7/8 items and no cm09 plan finding. **Recorded design resolution:** `E8` has two branches; this pair delivers the averaging branch as the rotating-frame weak-damping estimate (`pthm-cm09-averaging-for-weak-damping`, consuming the in-run `thm-cm-averaging-for-fast-periodic-oscillations`), while the one-frequency adiabatic action statement is not asserted here; Tong's heuristic adiabatic-invariance result is recorded in the coverage as `deferred` to `cm12-legendre-transformation-and-hamiltonian-mechanics`. No design-versus-plan conflict required a plan change.

## Dependency graph and levels

- Item levels follow the dispatch rule (zero without in-run `deps` targets; otherwise one plus the maximum level of the in-run `deps` targets; published and other out-of-run suppliers do not raise levels) and were computed mechanically over all run manifests by `item-dependency-levels.mjs`; the fifteen labels above are the computed values, with no cm09 finding in the check output.
- Proven order and structure. `pthm-cm09-free-modes-and-degeneracy` consumes `def-cm09-coupled-quadratic-model`; `pthm-cm09-linearization-at-a-strict-minimum` and `pthm-cm09-forced-modal-response` consume the pair `def` + `free-modes`; `pthm-cm09-linearization-error-bound` consumes `def` together with the out-of-run `cm-math-approximation` suppliers; `pthm-cm09-averaging-for-weak-damping` depends on out-of-run oscillator/averaging suppliers only; `rem-cm09-zero-modes-degeneracy-and-scope` consumes all six A items; the examples consume the A results (`two-mass` also before `degenerate-oscillator-subspace` and `forced-resonant-mode-check`; `rem` and `linearization-at-a-strict-minimum` before `unstable-quadratic-mode`; `linearization-error-bound` before `cubic-potential-error-check`). No cycles, no forward references and no missing prerequisites; the deepest in-run suppliers (batches 1, 2, 3, 4, 7, 12, 17-20, 23, and the completed `cm-math-*` pages) were all complete before construction.
- Every outgoing edge to another batch is recorded with consumer-side evidence in `physics-cm-qm-gr-79-2026-10-11-batch-25.cross-batch-dependencies.json` (62 rows: 60 item edges + the two A-page page edges; B→A edges are same-batch and are not ledger rows). `frontier-dependency-ledger.mjs refresh` accepted the file ("refreshed and deduplicated"). The only review-less incoming cm09 edge is the page edge `cm16-stability-perturbations-and-chaos` → `cm09` from the unbuilt batch 32, which its own worker must supply.

## Source handling

- Coverage: 6 source entries (3 A, 3 B; D. Tong *Classical Dynamics*, K. K. Likharev *Essential Graduate Physics* CM and I. Stewart MIT 8.09/8.309 reused across both pages) with exact locators. 28 harvested results carry dispositions: 21 `included` with item ids, 2 `inline` (Tong Eqs. (2.127)-(2.129) in the definition; Likharev's degeneracy/zero-mode warning in the remark), 4 `out-of-scope` with specific reasons, and 1 `deferred` (Tong §4.6 adiabatic action to `cm12-legendre-transformation-and-hamiltonian-mechanics`).
- All 6 source records are fetch-verified with byte counts, SHA-256 prefixes and page counts (`source-fetch-check --stamp`: 6/6 source(s) fetch-verified; final check mode: 6/6 fetch-verified, 6/6 resolved). No recovery attempts and no source drops or owner escalations were needed.
- **Recorded source error.** The frequency-comparison sentence at the end of Tong §2.6.2 contradicts the matrices printed in the same section (which give $\omega_{\text{sym}}>\omega_{\text{antisym}}$ for every $M>0$); the coverage row records the sentence as `out-of-scope` with that reason, the reader ledger already flags it, and `ex-cm09-triatomic-translation-zero-mode` proves the comparison from the displayed matrices without using the erroneous sentence.

## Item checkpoints (all authored and re-checked 2026-10-11)

1. `def-cm09-coupled-quadratic-model` (A, level 14). The model class: constant symmetric positive-definite mass metric $M$, constant symmetric stiffness $K$, optional prescribed generalized force $J$, quadratic energies, phase system, the modal vocabulary of the decoupling transform, and the small-oscillation model assigned to a mechanical equilibrium; dimensions and the generalized-force pairing convention recorded. Definition; layout/render clean.
2. `pthm-cm09-free-modes-and-degeneracy` (A, level 15). Global existence for the free model; complete modal classification via $M^{1/2}$-diagonalization; mode energies; intrinsic versus non-intrinsic degenerate subspaces; boundedness when $K\ge0$ and the unstable exponential direction otherwise; proof from the in-run quadratic-mode decomposition and the symmetric spectral theorem (10 steps).
3. `pthm-cm09-linearization-at-a-strict-minimum` (A, level 16). At a strict minimum of the potential the linearized model is the free quadratic model with $M(q_0)$ and $D^2U(q_0)$; its normal modes are the small-oscillation modes; the nonlinear equilibrium is Lyapunov stable, from the in-run linearisation and energy-stability suppliers with exact hypotheses (5 steps).
4. `pthm-cm09-linearization-error-bound` (A, level 15). $C^3$ data, explicit remainder of the mechanical field, and a variation-of-constants bound: on a finite time window where the solution stays in the chart, the difference from the linearized solution is $O(\|\delta\|^2)$ with constants read off compactness data (5 steps).
5. `pthm-cm09-forced-modal-response` (A, level 16). Decoupling of the forced model by the mass-metric transform; convolution formula for the modal coordinates; sinusoidal drive; resonance exactly at modal frequencies with the linear-in-time amplitude; boundedness away from resonance; case analysis including zero modes (7 steps).
6. `pthm-cm09-averaging-for-weak-damping` (A, level 15). Rotating-frame amplitude for $m x''+\varepsilon\gamma x'+kx=0$; exact first-order slow system; averaged equation $\zeta'=-\varepsilon\gamma\zeta/(2m)$; order-$\varepsilon$ error bound on the $O(1/\varepsilon)$ time scale and the exponential energy-decay conclusion, from the in-run averaged slow-system theorem (7 steps).
7. `rem-cm09-zero-modes-degeneracy-and-scope` (A, level 17). Scope audit reading zero modes, intrinsic degenerate families, hyperbolic unstable directions and the finite-time/averaged limits of the approximation statements from the cited items; lists what is not asserted (no nonlinear stability from nondegenerate minima alone, no long-time validity without an error contract). Remark; contract entry with boundaries present.
8. `ex-cm09-two-mass-spring-modes` (B, level 18). Two coupled masses on a line: in-phase and anti-phase modes and frequencies verified by explicit multiplication, mode energies, and the zero-stiffness translation mode (7 steps).
9. `ex-cm09-triatomic-translation-zero-mode` (B, level 16). Linear triatomic chain: translation zero mode, antisymmetric and symmetric stretches, with the corrected frequency comparison proved from the displayed matrices (6 steps).
10. `ex-cm09-double-pendulum-linear-modes` (B, level 16). Equal-arm double pendulum quadratic data; both eigenpairs verified; slow same-side and fast opposite-side mode patterns and bounded modal motions (6 steps).
11. `ex-cm09-degenerate-oscillator-subspace` (B, level 19). Doubly degenerate model: every direction is a mode, the modal basis is not intrinsic, and coupling splits the double frequency; explicit splitting comparison against the two-mass example (5 steps).
12. `ex-cm09-unstable-quadratic-mode` (B, level 18). Inverted pendulum about the upward equilibrium: negative modal stiffness, exponential quadratic family, quadratic-model instability, and the nonlinear hyperbolic conclusion from the linearisation theorem (5 steps).
13. `ex-cm09-forced-resonant-mode-check` (B, level 19). In-phase drive of the two-mass chain: modal force, resonance exactly at $\omega_{+}$, explicit linear-in-time growth, and bounded steady response off resonance at $\omega_{-}$ (5 steps).
14. `ex-cm09-weak-damping-averaging-check` (B, level 16). Explicit weakly damped oscillator with exact constants; smallness/trapping hypotheses checked and the averaged energy-decay bound evaluated in exact arithmetic on five thousand oscillation periods (5 steps).
15. `ex-cm09-cubic-potential-error-check` (B, level 16). Cubic-potential chart system with the exact quadratic remainder, explicit constants, a checked finite-time bound and the linear case recovered (5 steps).

## Authoring review repairs (mathematical closure, same session)

- **Step-numbering canonicalisation.** Every numbered proof step was canonicalised to one physical line with trailing tags and renumbered by citation depth per the normative precheck's repair layer; the final `precheck.mts` pass proposes no further repair.
- **Missing declared dependencies.** Two `cited-not-in-deps` warnings were fixed by adding `def-cm-oscillator-model-and-phase-system` and `thm-cm-quadratic-mode-decomposition` to the items citing them; levels were recomputed and the manifest rebuilt.
- **Provenance retagging.** The eight examples' statement provenance was retagged `ai-generated`→`ai-altered` (their sources are the cited treatments) and the `generation` blocks were removed, so no `ai-generated` statement is a `deps` target.
- **Decimal literals in proof steps.** Two numerical examples carried decimal literals inside proof steps (the proof-contract tokenizer reads them as step references); the steps were rewritten with exact rational and elementary estimates (`e^{3/2}/100`, `e^{4}/20000`, `K<198`, `\varepsilon K<1/50`, `1/24`, `1590\pi<3498\cdot\ldots<5000`) and the decimal orientation values moved to Remarks, labelled as evaluations of the exact expressions.
- **Boundary worksheets and fact use.** One boundary-worksheet evidence string and one unused fact label were repaired: `ex-cm09-triatomic-translation-zero-mode` now cites its scalar calculus fact in the step that uses it, and the degenerate/zero boundary evidence strings name the statement or a step.

## Supplier findings for the owner (recorded, not repaired here)

1. **`def-cm07-generalized-coordinates-and-forces` clause (c) dimension defect.** The item states the $i$-th generalized-force component has dimension "$\mu\ell\tau^{-2}\gamma_{i}^{-1}$", while its own decomposition ($\partial X_{a}/\partial q_{i}$ of dimension $\ell\gamma_{i}^{-1}$ times $f_{a}$ of dimension $\mu\ell\tau^{-2}$) gives $\mu\ell^{2}\tau^{-2}\gamma_{i}^{-1}$, i.e. energy per unit coordinate; the pairing convention $Q\cdot\delta q$ and the dimensionless-angle case force the corrected form. Status: draft, batch 23. Repair strategy: replace the printed dimension by $\mu\ell^{2}\tau^{-2}\gamma_{i}^{-1}$; the following decomposition sentence already agrees. This batch's definition states the corrected dimension and records the convention in a remark without editing the supplier.
2. **Tong §2.6.2 frequency-comparison sentence (source error)** as described under Source handling; recorded in the coverage dispositions and the reader ledger ("normal-mode frequency comparison p43").

## Checks run on the final carriers

- `precheck.mts` on the 15 items: `13 checked, 0 failing — all clean` (the definition and remark have no phase body).
- `proof-layout.mjs` on the 15 items: `15 items, 78 steps, 0 defects`.
- `rendercheck.mjs` on the 15 items and the 2 pages: `OK — 17 file(s)` (YAML, KaTeX, no nested or multiline math).
- `proof-contract.mjs --strict`: `0 error(s), 0 warning(s), 15/15 item(s) checked`; all 13 proof-bearing items have contract entries.
- `content-policy.mjs` on the batch manifest: `15 scoped item(s), 0 error(s), 0 warning(s)`.
- `manifest-deps.mjs`: `15 item(s), 0 normalized, 0 error(s)`; `manifest-integrity.mjs --run`: `158 page(s) owed, 158 in the manifests — no scope drift`.
- `coverage-checklist.mjs`: `2 page(s), 28 harvested result(s), 0 error(s), 0 warning(s)`; `source-fetch-check.mjs --coverage` (check mode): `6/6 source(s) fetch-verified`, `6/6 source(s) resolved`.
- `item-dependency-levels.mjs check --run`: no cm09 finding (remaining run-wide errors are "empty scaffold inventory" rows for unbuilt later batches).
- `depcheck.mjs --run`: no cm09 finding (only the page home listing lines for orders 50/51). `validate-plan.mjs --run`: pages 129/130 resolve with 7/8 items and exactly the plan requires; no cm09 finding. `fwdcheck.mjs --run`: all 15 cm09 items `inherited` from published suppliers' edges; no cm09-caused finding. `extcheck.mjs` on the 15 explicit paths: `28168 items, 0 recorded-not-proved, 0 resting on them — OK`. `pathcheck.mjs`: no cm09 finding (its 3 errors and 22 warnings are root mathematics pathway records outside this workspace's physics scope).
- `step1-decisions.mjs check --run`: no cm09 work row — all 15 readiness records are current against the final carriers and examined dependency lists (the run-wide `closed: false` comes from other scopes).
- `frontier-dependency-ledger.mjs refresh`: accepted the 62 batch-25 rows; `dispatch-author-artifacts` for the pair: 19/19 required files present.

## Run-level findings outside batch 25 (recorded, not repaired here)

1. `proof-contract-coverage.mjs --run` aborts with `Empty or invalid frontier page inventory cm13-symplectic-geometry-and-canonical-methods`: the run-wide form needs every batch manifest populated, and the unbuilt later batches are outside this worker's scope. The batch-local equivalents all pass.
2. `validate-plan.mjs --run` fails only on other batches' `undeclared-prereq` findings (two qm-math pages); no cm09 page or item is named.
3. `frontier-dependency-ledger.mjs` reports 28 orphaned review rows from other batches and the one review-less incoming cm09 page edge (`cm16` → `cm09`, batch 32); neither blocks this batch.
4. `item-dependency-levels.mjs check --run` reports 52 "empty scaffold inventory" errors for unbuilt later batches; none names cm09.

## Readiness

All 15 items are recorded `ready` with their exact examined dependency lists after the final carrier and manifest rebuild (`step1-decisions.mjs record`, then `check`: no cm09 work row). No item of this batch is escalated, and no significant unmet prerequisite was found: every in-run supplier is completed (batches 1, 2, 3, 4, 7, 12, 17-20, 23 and the completed `cm-math-*` pages) and every out-of-run supplier is a published canonical root item. Step 1 authoring is complete; independent review is Step 2's task, and readiness here is an authoring disposition, not a mathematical approval.
