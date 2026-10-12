# Step 3b authoring report — pair `cm-math-rigid` / `cm-math-rigid-examples`

- Run: `physics-cm-qm-gr-79-2026-10-11`; role: beta (batch 9), Step 1 authoring; 2026-10-11.
- Owned pair: A page `cm-math-rigid` (order 97, category `non-relativistic-classical-mechanics-mathematics`, library `mathematics`); B page `cm-math-rigid-examples` (order 98).
- Owned items in authoring order (dependency level; page):
  1. `def-cm-mass-distribution-and-inertia-matrix` (0, A)
  2. `lem-cm-mass-moments-are-finite` (1, A)
  3. `lem-cm-matrix-curve-derivative-rules` (2, A)
  4. `lem-cm-skew-matrix-cross-product-correspondence` (2, A)
  5. `lem-cm-inertia-matrix-properties` (2, A)
  6. `def-cm-rigid-placement-and-body-angular-velocity` (3, A)
  7. `cor-cm-principal-axes-of-the-inertia-matrix` (3, A)
  8. `lem-cm-coordinate-rotation-matrices` (3, A)
  9. `thm-cm-rigid-kinetic-energy-and-angular-momentum` (4, A)
  10. `def-cm-euler-angle-parametrization-and-heavy-top-system` (4, A)
  11. `thm-cm-euler-equations-and-torque-free-invariants` (5, A)
  12. `thm-cm-heavy-top-reduction` (5, A)
  13. `lem-cm-euler-angle-angular-velocity` (5, A)
  14. `thm-cm-stability-of-extreme-principal-axes` (6, A)
  15. `thm-cm-instability-of-the-intermediate-axis` (6, A)
  16. `thm-cm-linearized-torque-free-euler-equations` (6, A)
  17. `ex-cm-inertia-tensors-of-point-masses` (4, B)
  18. `ex-cm-euler-angle-and-heavy-top-checks` (6, B)
  19. `ex-cm-torque-free-spin-checks` (7, B)
- Artifacts owed at handoff: nineteen item carriers under `items/`; the two page carriers under `library/non-relativistic-classical-mechanics-mathematics/`; `research/physics-cm-qm-gr-79-2026-10-11-batch-9.pages.json`; `.coverage.json`; `.proof-contracts.json`; `.cross-batch-dependencies.json`; `.notes.md`; this report; Step-1 readiness records.

## Scope and inputs

- Read before construction: `AGENTS.md`; `../CLAUDE.md`; `CLAUDE.md`; `SCHEMA.md`; `WORKFLOW.md`; `../PHYSICS-CONTENT-MODEL.md`; the binding owner direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`; `research/physics-cm-qm-gr-79-2026-10-11-batch-9.task.md`; the batch dependency levels `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`; the design section `research/plan-non-relativistic-classical-mechanics-track.md` L210–231; `research/plan-spec.json` entries 97/98; the scaffold sources `research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/mathematical-prerequisites.md` (§M8) and `expansion-proofs.md` (§E9); and the readers' full texts for Tong, Likharev and SICM.
- This is a mathematics-only pair: every item carries `domain: mathematics`, `library: mathematics` and only mathematical prerequisites; the consumed root-library suppliers are read-only and were inspected in place, and the batch-1/2 suppliers are this run's own draft items read at their exact statements (owner exception of 2026-10-11). No physical law, measurement or empirical claim appears on either page; the classical-mechanics reading of bodies, placements, torque and tops remains with the consuming physics pages (notably `cm-math-verification`, whose page `requires` names `cm-math-rigid`).

## Design versus plan

- The design's M8/E9 sections are the scope source. The plan-spec page `requires` is the four-entry list above; the manifest copies it verbatim. The design names `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` and `thm-linearity-of-the-lebesgue-integral-on-l-one` as published suppliers, which are additionally consumed at item level. No other design-versus-plan conflict was found; the current plan controls.
- M8/E9 were split into the sixteen A items and three constructed B examples (the design reserved no B items; `SCHEMA.md` requires a nonempty B inventory). Every promised claim is preserved: the inertia tensor, the quadratic identity and positivity criterion, kinetic energy and angular momentum, principal axes, Euler equations with torque and the torque-free invariants, the nonlinear stability of the extreme axes, the nonlinear instability of the intermediate axis, the linearized dichotomy, the Euler-angle chart with its angular-velocity components, and the heavy-top reduction.
- Two deliberate sharpenings, recorded honestly: (i) the design assumes a bounded measure with finite second moment, while this batch defines bounded finite Borel measures and proves the moments finite (`lem-cm-mass-moments-are-finite`), which forces the library's AC-scoped measurability supplier and is declared accordingly; (ii) the design's blanket $C^2$ regularity for the placement is replaced by the per-claim differentiability hypotheses actually used, which makes the statements slightly stronger and keeps the proofs honest.
- The heavy-top system is introduced by its three displayed second-order equations, not by a Lagrangian/variational route, because no variational supplier exists in this run's closure and creating one would exceed the assigned scope. The chart domain uses $\sin\theta>0$ and the singular chart boundary is excluded explicitly, matching the design's warning; $R$ remains the global orientation object.

## Dependency graph and levels

- Levels are one plus the maximum in-run dependency level; published root suppliers (including the whole measure-theory and matrix layer) and the batch-1/batch-2 suppliers do not raise levels. The layer structure: level 0 `def-cm-mass-distribution-and-inertia-matrix`; level 1 `lem-cm-mass-moments-are-finite`; level 2 the curve-derivative and skew-correspondence lemmas plus `lem-cm-inertia-matrix-properties`; level 3 `def-cm-rigid-placement-and-body-angular-velocity`, `cor-cm-principal-axes-of-the-inertia-matrix`, `lem-cm-coordinate-rotation-matrices`; level 4 the kinetic/angular-momentum theorem, the Euler-angle/heavy-top system definition, and `ex-cm-inertia-tensors-of-point-masses`; level 5 the Euler equations, the heavy-top reduction, the Euler-angle angular-velocity lemma; level 6 the two nonlinear stability theorems, the linearized theorem, and `ex-cm-euler-angle-and-heavy-top-checks`; level 7 `ex-cm-torque-free-spin-checks`.
- `def-cm-mass-distribution-and-inertia-matrix` is justified by `lem-cm-mass-moments-are-finite` (`justified_by`), and the lemma depends on the definition through `deps` — the ordinary well-definedness cycle sanctioned by `SCHEMA.md`. Every other in-run edge is acyclically ordered; 54 internal `deps` edges run from suppliers to consumers in the authoring order above.
- Cross-batch edges (recorded in `.cross-batch-dependencies.json`, 17 rows, all `verified`): fifteen item edges onto batch 1 (`def-cm-special-orthogonal-group`, `lem-cm-so3-is-a-matrix-group`, `def-cm-equilibrium-and-lyapunov-stability`) and batch 2 (`cor-cm-finite-time-breakdown-requires-escape`), plus the two page edges `cm-math-rigid → cm-math-geometry` and `cm-math-rigid → cm-math-balances`. Each supplier statement was read and the exact consumer use and location recorded; `frontier-dependency-ledger.mjs refresh` merged the rows and every batch-9 edge carries a verified review. The engine batch graph placed batch 9 after batches 1 and 2 (`requires: ["1","2"]`), so suppliers were available before construction.
- `item-dependency-levels.mjs check --run physics-cm-qm-gr-79-2026-10-11` exits 1 with 144 `empty scaffold inventory` errors for other batches; no error mentions this pair, so all nineteen labels are computed-consistent.

## Choice principle

- `lem-cm-mass-moments-are-finite` states $\mathrm{AC}_\omega$, declares `def-countable-choice`, and uses it exactly once in [L1] through the AC-scoped published measurability suppliers; the four direct consumers of the finiteness result carry the assumption explicitly with a named, exact use (definition finiteness sentence; [L1] of the inertia-properties lemma; the integrability clause of the kinetic theorem; the observation preamble of the point-mass example). Downstream items treat the inertia matrix as given and their own arguments are choice-free; they were kept choice-free per `SCHEMA.md`. Details and the observation about the published AC-scoped corollary are in `.notes.md`.

## Source handling

- Per-page sources (full texts fetched, inspected and fetch-stamped; URLs and exact locators in the item carriers and `.coverage.json`): D. Tong, *Classical Dynamics* §§3.1–3.6, printed pp. 46–73 (moving frame, inertia tensor, Euler equations, free top, heavy top); K. Likharev, *Essential Graduate Physics: CM* Ch. 4 §§4.1–4.5 (inertia tensor, rotation dynamics, symmetric top); G. J. Sussman and J. Wisdom, *SICM* 2nd ed. §§2.2–2.10 (orientation matrices, inertia tensor, Euler angles, heavy top). Six coverage source entries, 55 harvested results, all with dispositions; `coverage-checklist.mjs --require-destination` green; `source-fetch-check --stamp` 6/6 verified.
- **Source limitation (recorded honestly).** The nonlinear stability certificate argument (`thm-cm-stability-of-extreme-principal-axes`), the nonlinear intermediate-axis instability with its logarithmic escape bound (`thm-cm-instability-of-the-intermediate-axis`), and every numerical check in the three examples are locally authored: Tong's intermediate-axis treatment is linearized only, Likharev leaves the nonlinear statement to an exercise, and SICM gives qualitative level curves. They are recorded as local constructions in the coverage dispositions, not credited to a source. The linearized dichotomy is source-adjacent but the uniform remainder bound is local. No empirical or physical claim is made anywhere.

## Item checkpoints (all authored 2026-10-11)

- **1 `def-cm-mass-distribution-and-inertia-matrix`** (0). Bounded finite Borel measure, total mass, first moment and inertia matrix with componentwise integrals; well-definedness discharged by the justified_by target, with $\mathrm{AC}_\omega$ declared. Rendercheck OK; content-policy clean.
- **2 `lem-cm-mass-moments-are-finite`** (1). Measurability and finiteness of the first and second moments with explicit bounds $R\nu(\mathbb R^3)$, $R^2\nu(\mathbb R^3)$ and $2R^2\nu(\mathbb R^3)$; 4 steps, 0 defects, precheck PASS; $\mathrm{AC}_\omega$ stated and used once.
- **3 `lem-cm-matrix-curve-derivative-rules`** (2). Sum, transpose, product rules for matrix curves and skewness of $A^{\mathsf T}A'$ on $SO(3)$; 7 steps, 0 defects; consumes batch-1 SO(3) items.
- **4 `lem-cm-skew-matrix-cross-product-correspondence`** (2). The bijection $\omega\mapsto[\omega]_\times$, the identity $[\omega]_\times z=\omega\times z$ and $R[\omega]_\times R^{\mathsf T}=[R\omega]_\times$; 5 steps, 0 defects.
- **5 `lem-cm-inertia-matrix-properties`** (2). Symmetry, the quadratic identity $\omega^{\mathsf T}I\omega=\int\lVert\omega\times\rho\rVert_2^2\,d\nu\ge0$, the positive-definiteness criterion and invertibility; 6 steps, 0 defects; $\mathrm{AC}_\omega$ declared, used only in [L1].
- **6 `def-cm-rigid-placement-and-body-angular-velocity`** (3). $x(t,\rho)=c(t)+R(t)\rho$ and $\omega$ from $R^{\mathsf T}R'=[\omega]_\times$, with uniqueness of $\omega$; complete definition carrier.
- **7 `cor-cm-principal-axes-of-the-inertia-matrix`** (3). Principal axes via the published real spectral theorem, with the vanishing-eigenvalue criterion; 6 steps, 0 defects.
- **8 `lem-cm-coordinate-rotation-matrices`** (3). $R_z,R_y\in SO(3)$, the composition law, axis fixings and derivative identities; 7 steps, 0 defects.
- **9 `thm-cm-rigid-kinetic-energy-and-angular-momentum`** (4). $K=\tfrac12m\lVert c'\rVert_2^2+\tfrac12\omega^{\mathsf T}I\omega$, $L_c=RI\omega$, with integrability; 7 steps, 0 defects; $\mathrm{AC}_\omega$ declared for the integrability clause.
- **10 `def-cm-euler-angle-parametrization-and-heavy-top-system`** (4). The chart $\Theta=R_z(\varphi)R_y(\theta)R_z(\psi)$ with $\sin\theta>0$ and the heavy-top system by its three displayed equations.
- **11 `thm-cm-euler-equations-and-torque-free-invariants`** (5). $I\omega'+\omega\times I\omega=R^{\mathsf T}\tau$ from the adopted balance hypothesis; the torque-free system $l'=l\times(I^{-1}l)$ and the invariants $\lVert l\rVert_2^2$, $\tfrac12\langle l,I^{-1}l\rangle$; 6 steps, 0 defects.
- **12 `thm-cm-heavy-top-reduction`** (5). Conserved $b=C(\psi'+\varphi'\cos\theta)$, $a=A\varphi'\sin^2\theta+b\cos\theta$, explicit rates and $A\theta''=-U'(\theta)$; 6 steps, 0 defects.
- **13 `lem-cm-euler-angle-angular-velocity`** (5). Body angular-velocity components in the chart; 7 steps, 0 defects.
- **14 `thm-cm-stability-of-extreme-principal-axes`** (6). Nonlinear Lyapunov stability of $Le_1,Le_3$ from the certificates $D,D_3$ with compact continuation; 8 steps, 0 defects; stale step references repaired.
- **15 `thm-cm-instability-of-the-intermediate-axis`** (6). Nonlinear escape of $Le_2$ with the logarithmic time bound; 7 steps, 0 defects; local argument.
- **16 `thm-cm-linearized-torque-free-euler-equations`** (6). Explicit linearization, $\lambda=\Omega^2(I_2-I_3)(I_3-I_1)/(I_1I_2)$ and the oscillatory/exponential dichotomy with a uniform remainder bound; 7 steps, 0 defects.
- **17 `ex-cm-inertia-tensors-of-point-masses`** (4, B). Three exact data sets including two degenerate, line-supported cases and one off-centre case, each checked against the quadratic identity and the positivity criterion; 6 steps, 0 defects; statement `ai-generated` with `generation.role: example`, used as a dependency target by no item.
- **18 `ex-cm-euler-angle-and-heavy-top-checks`** (6, B). Exact steady-precession checks of the angular velocity, the reduced equation along $\theta=\pi/3$ and conserved combinations; 4 steps, 0 defects.
- **19 `ex-cm-torque-free-spin-checks`** (7, B). Certificate, escape-bound and linearized-dichotomy checks at explicit data; 5 steps, 0 defects; all decimal literals rewritten as exact rationals.

## Checks run at handoff

- `proof-layout.mjs` on the nineteen changed item paths: 98 numbered steps, 0 defects; `tsx-run.mjs precheck.mts` on the sixteen proof-bearing items: 16 checked, 0 failing (definitions are not proof-bearing); `rendercheck.mjs` on nineteen items + two pages: OK; `content-policy.mjs` item mode on the batch manifest: 19 items, 0 errors, 0 warnings; `proof-contract.mjs --strict`: 19/19 checked, 0 errors, 0 warnings; `coverage-checklist.mjs --require-destination`: 55 results, 0 errors; `manifest-deps` on the batch manifest: 19 items, 0 errors; `depcheck.mjs`: zero findings naming a batch-9 item or page; `extcheck.mjs` whole library: OK.
- `boundary-audit.mjs`: 152 rows; 3 template clusters and 2 contradicted-disposition candidates on the `empty` axis, both caused by fixed three-term sums, read and answered in the refined row reasons, left for Alpha adjudication. `citation-fidelity.mjs`: 201 citations, every quote found; one widening candidate read and dismissed (specialisation to `n=3` of an `n>=1` corollary, hypotheses intact). `citation-faithfulness-screen.mjs`: 13 notation-level candidates, all read.
- `content-policy.mjs --manifest-only` reports `batch-item-already-exists` for all nineteen ids — the known mechanical artifact of the plan-spec pages carrying empty `items` arrays, identical to sibling batches; item mode is green and the engine's splice is the intended resolution. The shared plan was not edited by hand.
- Whole-run gates that depend on other concurrent batches (`frontier-dependency-ledger --require-reviewed`, whole-run contract merge, the full engine gate) remain open by design and are not claimed here; all seventeen batch-9 ledger rows themselves are supplied and reviewed.

## Readiness

- Step-1 readiness records for all nineteen items are recorded with the exact examined dependency id lists and the evidence above; `step1-decisions.mjs check --run physics-cm-qm-gr-79-2026-10-11` reports 136/136 items ready and zero outstanding work rows for this pair. No item is escalated. No published defect was found in a consumed supplier that blocks these proofs.

## Plan gate (validate-plan) — exact result

`node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-cm-qm-gr-79-2026-10-11` exits 1. For this pair it now reports two warning-class `redundant-prereq` rows on `cm-math-rigid` and six `[undeclared-prereq]` findings on the A page only: item dependencies reach published root pages outside the closure of the plan-seeded four-entry `requires` (`sigma-algebras-and-borel-sets`, `measures-and-their-basic-properties`, `gaussian-elimination-and-row-reduction`, `the-exponential-function`, `sine-cosine-and-the-definition-of-pi`, `the-logarithm-and-general-powers`). These are real homes of used suppliers, not spurious. The B page initially did not mirror its plan `requires` (it listed only `cm-math-rigid`, producing four `undeclared-prereq` findings); the manifest and carrier were corrected to the plan's five-entry list and the check reports no B-page finding. The two resolution routes for the remaining six A-page findings (extend `requires` with splice adjudication, or an owner scope decision) are recorded in `.notes.md`. The shared plan was not edited; this is escalated for owner reconciliation.

## Authoring review repairs (same session, before readiness)

- `thm-cm-stability-of-extreme-principal-axes` step 5.1: stale in-text references to steps 6.1/7.1 (left by canonical renumbering) repaired to the actual steps 1.3, 2.1, 3.1, 3.2, 4.1.
- `ex-cm-torque-free-spin-checks` steps 2.1–2.2: decimal literals replaced by exact rationals; the false clause $l_1(0)^2+l_2(0)^2=0$ corrected; the unsupported instantiation claim about the stability theorem's $\varepsilon$ replaced by the verified certificate inequality; the escape bound stated as the exact $4\log 25$.
- Contract boundary worksheets completed with the eight standard `case` names and corrected stale step references; strict contract now 0 errors / 0 warnings.
- $\mathrm{AC}_\omega$ declarations added to the finiteness lemma's four direct consumers with named uses; manifest statements, deps and roles synced to the final carriers.
- Wikilink typo in the point-mass example corrected. All gates above were rerun after these edits, and readiness records were written last, so every input hash is current.
- The `cm-math-rigid-examples` manifest entry and page carrier were corrected to mirror the plan-spec `requires` list verbatim (five entries, four of them root pages), removing the four B-page `undeclared-prereq` findings.
