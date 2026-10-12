# Step 3b authoring report — pair `cm-math-dynamics` / `cm-math-dynamics-examples`

- Run: `physics-cm-qm-gr-79-2026-10-11`; role: beta (batch 3), Step 1 authoring; 2026-10-11.
- Owned pair: A page `cm-math-dynamics` (order 85, category `non-relativistic-classical-mechanics-mathematics`, library `mathematics`); B page `cm-math-dynamics-examples` (order 90).
- Owned items in authoring order (dependency level, page):
  1. `def-cm-local-flow-of-an-autonomous-system` (0, A)
  2. `lem-cm-local-flow-composition-law` (1, A)
  3. `lem-cm-continuous-dependence-on-initial-data` (0, A)
  4. `thm-cm-smooth-dependence-and-the-variational-equation` (1, A)
  5. `cor-cm-flow-domain-open-and-flow-is-c1` (2, A)
  6. `prop-cm-first-return-map-is-a-local-c1-diffeomorphism` (3, A)
  7. `def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent` (3, A)
  8. `def-cm-bilateral-shift-space-and-cylinders` (0, A)
  9. `lem-cm-bilateral-shift-metric-and-sequential-compactness` (1, A)
  10. `def-cm-topologically-mixing-dense-periodic-and-sensitive-maps` (0, A)
  11. `thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive` (2, A)
  12. `rem-cm-recurrence-scope-for-mechanical-systems` (3, A)
  13. `thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism` (0, A)
  14. `thm-cm-exponential-stability-by-a-lyapunov-quadratic-form` (1, A)
  15. `thm-cm-instability-of-a-hyperbolic-saddle` (2, A)
  16. `def-cm-mechanical-vector-field-and-energy-in-a-chart` (0, A)
  17. `lem-cm-energy-conservation-for-the-mechanical-system` (1, A)
  18. `lem-cm-positive-definite-matrix-square-roots` (0, A)
  19. `lem-cm-strict-minimum-has-positive-semidefinite-hessian` (0, A)
  20. `thm-cm-quadratic-mode-decomposition` (1, A)
  21. `thm-cm-energy-stability-of-a-strict-minimum` (2, A)
  22. `prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium` (2, A)
  23. `rem-cm-scope-of-energy-stability-and-quadratic-modes` (3, A)
  24. `ex-cm-flow-of-a-linear-system-is-the-matrix-exponential` (2, B)
  25. `ex-cm-coupled-oscillator-modes` (2, B)
  26. `ex-cm-planar-harmonic-oscillator-return-map` (4, B)
  27. `ex-cm-bilateral-shift-finite-checks` (3, B)
  28. `ex-cm-jordan-block-dichotomy-computed` (1, B)
  29. `cex-cm-nonhyperbolic-equilibria-defeat-exponential-conclusions` (1, B)
- Artifacts owed at handoff: the 29 item carriers under `items/`; the two page carriers under `library/non-relativistic-classical-mechanics-mathematics/`; `research/physics-cm-qm-gr-79-2026-10-11-batch-3.pages.json`; `.coverage.json`; `.proof-contracts.json`; `.cross-batch-dependencies.json`; `.notes.md`; this report; Step-1 readiness records.

## Scope and inputs

- Read before construction: `AGENTS.md`; `../CLAUDE.md`; `CLAUDE.md`; `SCHEMA.md`; `WORKFLOW.md`; `../PHYSICS-CONTENT-MODEL.md`; the binding owner direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`; `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`; the design section `research/plan-non-relativistic-classical-mechanics-track.md` L116; `research/plan-spec.json` entries 85/90; the scaffold `research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/prose-scaffold.md`, `mathematical-prerequisites.md` (M7) and `expansion-proofs.md` (E2, E12, E16); the batch-1 and batch-2 carriers consumed here.
- Mathematics-only pair: every item carries `domain: mathematics`, `library: mathematics` and only mathematical prerequisites; the consumed published/imported suppliers are read-only and were inspected in place. No physical law, frame, unit or empirical claim is asserted on either page; the physical reading of these models belongs to the consuming classical-mechanics pages.

## Design versus plan

- The design reserves local proved sections M7, E2, E12, E16 with internal local dependencies D1, E2, M10 and names six published canonical suppliers. The plan-spec page `requires` list controls; the manifest and page carriers copy it verbatim and extend it to the closure of the items' direct root dependencies (the same resolution batch 2 recorded and the engine spliced into the plan for its pages). All six design-named suppliers are consumed at item level.
- Granular split: M7, E2, E12, E16 were split into 23 A items and 6 B items; every promised claim is preserved, including the zero modes and modal energies, the Hessian-free energy-stability statement, the no-diagonalisability dichotomy, the recurrence qualifications, and the explicit statement that the symbolic example is not a smoothly realized mechanical flow.
- Step numbering: the normative precheck's layer convention was adopted for all 22 proof-bearing items (steps in dependency-layer order, labels `layer.index`, all references rewritten). Content is unchanged by the re-expression; every rewritten reference and range was re-read.

## Dependency graph and levels

- Levels are one plus the maximum in-run dependency level; out-of-run suppliers (published root items, imported mathematics, draft EM/SR suppliers under the owner exception) do not raise levels. `item-dependency-levels.mjs check --run` computes the same labels as recorded in the manifest and item frontmatter.
- In-run prerequisites: batch 2 `thm-cm-compact-continuation-for-locally-lipschitz-odes` (consumed by the smooth-dependence theorem, the open-flow-domain corollary, the exponential-stability theorem, the instability theorem and the energy-stability theorem); batch 1 `def-cm-equilibrium-and-lyapunov-stability` (consumed by the same stability/instability items and by the non-hyperbolic counterexample). Both are reviewed in `.cross-batch-dependencies.json` together with the two page edges onto `cm-math-geometry` and `cm-math-balances`.
- Same-batch edges were authored supplier-before-consumer (definition of the flow before the composition law; smooth dependence before the open-domain corollary; the corollary and composition law before the Poincaré-map proposition; the dichotomy before its stability/instability corollaries; the mechanical-field definition before energy conservation, energy stability and linearisation; the square-root lemma and the spectral supplier before the quadratic-mode theorem; the properties before the examples).
- `depcheck` over the 29 items: no unresolved dependency, no citation outside `deps`/`justified_by`, no cycle, no B-page-leaf dependency. The one initial B-page dependency (`ex-explicit-equivalence-constants-for-standard-norms-on-kn`, homed on the examples page `finite-dimensional-normed-spaces-and-riesz-lemma-examples`) was removed by replacing it with the general finite-dimensional norm-equivalence theorem plus the definition of equivalent norms, and the equivalence constant was absorbed into the dichotomy constant.

## Source handling

- Full texts fetched and inspected; URLs and locators in the carriers and in `.coverage.json`: Teschl, *ODE and Dynamical Systems* §§2.1, 2.4, 3.2, 6.1, 6.4, 6.5-6.7, 8.6, 9.1-9.2; Arino, MATH 8430 §1.3-1.4 and Ch. 2; Ramponi, *Notes on Lyapunov's theorem* §§2-4; Tong, *Classical Dynamics* §§1.2.3, 2.6, 4.1; Ulcigrai, *Topological and Symbolic Dynamics* §§2.2-2.3, 2.6-2.7; Glasner-Weiss, *Sensitive dependence* §0 and §2; Einsiedler-Ward, *Ergodic Theory* Ch. 2; Cannas da Silva, *Symplectic Geometry* Lecture 18; Axler, *Linear Algebra Done Right* 4e Ch. 7.
- `.coverage.json`: 38 harvested results with dispositions; `--require-destination` green; `source-fetch-check --stamp` 9/9 verified.

## Item checkpoints

- Flow layer (items 1-7): the definition keeps all domain conditions explicit; the composition law is proved by gluing translated solutions; the cylinder estimates use Gronwall; smooth dependence proves `D_a Phi_t = Y_a`; the flow domain is open and the flow `C^1`; the return-map proposition is stated and proved on the section with the corrected image identity; finite-time rates and the Lyapunov-exponent convention are definitional with the limit an explicit clause.
- Symbolic layer (items 8-12): the shift definition fixes the metric expression; the lemma proves the metric, the cylinder-ball comparison and sequential compactness by a choice-free diagonal argument, with compactness conditional on `AC_N`/`DC`; the chaos definition records the four-property package; the theorem proves continuity, mixing, dense periodic points and sensitivity with constant 1; the recurrence remark collects the published statements with finiteness, definedness-of-iterates and almost-everywhere qualifications and no identification with the shift.
- Hyperbolicity layer (items 13-15): the dichotomy is proved without diagonalisability by a coprime factorisation of the minimal polynomial and Jordan-block estimates with an adapted basis; the stability theorem builds the Lyapunov matrix and proves local exponential stability; the instability theorem uses the indefinite form with the corrected `sqrt2` constant and proves Lyapunov instability.
- Modal layer (items 16-23): the chart model defines the field, Lagrangian and energy; energy conservation cancels the configuration-dependence terms; the square-root lemma supplies `M^{+-1/2}` and the congruence; the strict-minimum lemma gives the necessary first- and second-order conditions; the quadratic-mode theorem gives the complete decoupled solution sets, the zero mode and the modal energies; energy stability uses the exact energy barrier and compact continuation; the linearisation proposition computes the derivative and isolates the strict-minimum case; the scope remark separates the exact model from the approximation.
- B page: explicit linear flow and variational equation; coupled-oscillator modes including the free zero mode at `k=0`; the planar-oscillator Poincare map computed as the reflection; finite shift checks including the mixing threshold `N=2`; the computed dichotomy constants for a Jordan block and a diagonal sink-source; and the `x'=x^3` counterexample refuting stability from a zero-real-part linearisation.

## Checks run at handoff

- `proof-layout.mjs` (29 items): 29 items, 110 steps, 0 defects. `precheck.mts` (29 items): 22 checked, 0 failed (7 definitions/remarks not applicable). `rendercheck.mjs` (29 items + 2 pages): OK.
- `content-policy.mjs <batch-3 manifest>`: 29 items, 0 errors, 0 warnings. `manifest-deps.mjs`: 29 items, 0 errors. `item-dependency-levels.mjs check --run`: no batch-3 finding.
- `proof-contract.mjs --strict`: 22/22 items, 0 errors, 0 warnings (176 boundary worksheets). `coverage-checklist.mjs --require-destination`: 0 errors. `source-fetch-check` check mode: 9/9 verified. `frontier-dependency-ledger refresh`: all 11 batch-3 rows accepted.
- `validate-plan.mjs --run`: exits 0 after the plan update and the requires sync recorded under Escalations below. The 21 remaining findings are `redundant-prereq` warnings on other run pages; neither batch-3 page is named in any finding.

## Escalations

1. **Plan-registry gap for two imported host pages — raised, then resolved.** `cm-math-dynamics` depends on six published items homed on `complexification-realification-and-real-structures` and `diagonalisation-and-the-minimal-polynomial`, originally undeclared pages of `research/plan-spec.json` (read-only imports listed in `research/math-imports.json`). The owner/operator response declared both pages as `kind: "P"` plan pages with orders strictly below 85 and listed them in the `cm-math-dynamics` requires; this batch then propagated the amended 28-entry list verbatim into its manifest and A-page carrier (JSON equality with the plan entry verified) and re-recorded the 29 readiness records through the ordinary CLI (page metadata only; no item content changed). `validate-plan.mjs --run` now exits 0 and the two `undeclared-prereq` findings are gone. Details and the full post-fix battery: batch notes, section "Escalation (raised, actioned and resolved)".
2. **Whole-run findings owned elsewhere.** Whole-run `item-dependency-levels` empty-inventory errors, `redundant-prereq` warnings on other pages, the merged run-level proof contract and `frontier-dependency-ledger --require-reviewed` remain open until all batches finish. No published defect in the consumed root suppliers was found that would block these proofs.
