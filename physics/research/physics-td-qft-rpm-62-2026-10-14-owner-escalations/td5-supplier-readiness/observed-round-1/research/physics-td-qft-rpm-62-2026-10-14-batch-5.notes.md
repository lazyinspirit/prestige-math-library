# Batch 5 notes — Local Pfaff Geometry

Run: `physics-td-qft-rpm-62-2026-10-14` · batch: `5` · owner: beta

## Plan comparison and conflicts

- The complete design is `research/plan-thermodynamics-track.md` §Local Pfaff Geometry (lines 415–442). It reserves five named A items (`def-tdmath-one-form-and-horizontal-path`, `lem-tdmath-local-contraction-flow`, `lem-tdmath-variational-flow-and-commutation`, `thm-tdmath-codimension-one-frobenius`, and `thm-tdmath-local-caratheodory-inaccessibility`) with 24 A / 8 B reserved slots and names two B witnesses (contact-form obstruction and punctured-plane period). Those five A IDs and both promised boundaries are preserved; one additional A lemma proves the exact-multiple converse before use. Current placement is six A items and three B examples/counterexamples, within the frozen reservations and the hard 100-item cap.
- The current `plan-spec.json` row for `td-math-local-pfaff-geometry` adds `line-integrals-and-the-gradient-theorem`, `the-fundamental-theorems-of-calculus`, and `the-riemann-integral` to the design's declared `td-math-nonsmooth-equilibrium` prerequisite. The plan controls this conflict: all four `requires` entries remain in the batch manifest. The line-integral suppliers are used by the punctured-plane period example; calculus/integral suppliers are used by the flow and exactness arguments.
- The plan-spec currently has `items: []` for both pages. This is the pre-authoring inventory state, not a conflicting promise; the assigned manifest is now populated with the design's five A IDs plus the necessary local exact-multiple lemma and three B examples.
- `batch-dependency-levels.json` records batch 5 at level 2, requiring batch 4 (which is level 1 and itself requires batch 3). The authored item levels are in the assigned manifest: 0 (definition and contraction-flow lemma), 1 (variational-flow and exact-multiple lemmas), 2 (local Frobenius), 3 (local Carathéodory), and 1/2/1 for the three B carriers. Item levels are from actual local logical suppliers; the absent planned rank carrier is explicitly recorded rather than treated as proved.

## Cross-batch prerequisite status

The required batch-4 page `td-math-nonsmooth-equilibrium` currently has an empty inventory, so its planned `thm-tdmath-local-implicit-rank` carrier is absent. The exact planned statement and use are recorded in `batch-5.cross-batch-dependencies.json` and in both consumers' Facts & Assumptions. The source M15 is a complete local research argument for the stated C1 full-row-rank graph theorem, but it is not a current authored carrier, proof acceptance, or permission to treat batch 4 as complete. The Frobenius and Carathéodory proofs are fully conditional at the exact uses and both are escalated; independent flow, exactness, and example arguments are completed.

The category directory `library/thermodynamics-mathematics` did not exist before this assignment and has no `_category.md` yet. I created only the assigned A/B pages there; the category overview is outside this batch's authorized files and remains a structural owner input before any gate requiring category metadata.

## Source reading

The complete source records are in `batch-5.coverage.json`. I read the relevant full-text sections from two independent differential-geometry treatments: Ko Honda's complete notes, §33 / §33.2 (PDF pp. 69–71), and Leonard Tomczak's complete Cambridge notes, §§5.1 and 6.2–6.3 (PDF pp. 30–35). Honda's general Frobenius proof route ends with a request to write out the general proof; I use its theorem/form criterion and contact example only, and supply the full C2 local-flow/inverse argument here. Tomczak gives the local flow-coordinate proof; this batch supplies the detailed variational and commutation estimates used by its C2 codimension-one specialization.

For scope and physical interpretation I read David Tong, *Statistical Physics*, §4.3.4 (printed pp. 123–125 / PDF pp. 129–131), and Lieb–Yngvason, *The Physics and Mathematics of the Second Law of Thermodynamics*, §II.G / Theorem 2.9 (printed pp. 32–33). These are context only: Tong's treatment invokes thermodynamic first-/second-law assumptions, while Lieb–Yngvason's theorem uses its abstract convex-state axioms and nonempty forward-sector interiors. Neither supplies the local mathematical flow proof or identifies arbitrary horizontal curves with physical adiabatic processes. J. Lebl, *Basic Analysis II*, §§9.2.11 and 9.3.3, supplies the exact punctured-plane period example and the gradient/closed-loop argument; I inspected the complete statement and proof, including the closed-loop direction.

No source retrieval failed. `source-fetch-check --stamp` and scoped validation results will be appended after those commands run.

## Readiness and checks

- Planned missing input: `thm-tdmath-local-implicit-rank` from batch 4; affects `thm-tdmath-codimension-one-frobenius` and `thm-tdmath-local-caratheodory-inaccessibility`, which remain `escalated`.
- Items that do not need that carrier are candidates for `ready` after current proof-layout, scoped-format, dependency, and contract checks.
- The run-wide `batch-dependency-levels.json` hash is bound to all manifests and will become stale as other batches fill their inventories. I did not overwrite this shared run-level evidence during parallel Step 1 authoring; the assigned batch-5 page level is unchanged at 2. Owner should refresh the global file once manifests settle.
