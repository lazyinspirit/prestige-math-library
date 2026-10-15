# Step 3a reader report — batch 10

Run: physics-td-qft-rpm-62-2026-10-14

Role: independent reader

## Opened inventory

Assigned pages:

- td-cycles-and-low-temperature — library/thermodynamics/td-cycles-and-low-temperature.md
- td-cycles-and-low-temperature-examples — library/thermodynamics/td-cycles-and-low-temperature-examples.md

The declared page prerequisite td-potentials-and-responses was opened at library/thermodynamics/td-potentials-and-responses.md.

All eleven assigned item files were opened: def-td-reservoir-cycle, pthm-td-carnot-engine-bound, pthm-td-refrigerator-bound, post-td-nernst-scoped, post-td-unattainability-scoped, rem-td-residual-entropy, ex-td-carnot-engine-600-300, ex-td-refrigerator-cop-240-300, cex-td-integrable-capacity-not-integer-power, ex-td-finite-canonical-ground-state-entropy, and ex-td-geometric-cooling-protocol.

The opened physical suppliers were def-td-si-quantities, def-td-equilibrium-state-domain, def-td-system-and-permitted-exchanges, def-td-galilean-rest-frame, def-td-process-and-protocol, def-td-reversible-process, post-td-concave-fundamental-entropy, def-td-temperature-pressure-chemical-potential, post-td-first-law-energy, post-td-macroscopic-second-law, def-td-isolated-compound-feasible-set, def-td-response-functions, pthm-td-local-energy-representation, def-td-legendre-potentials, pthm-td-potential-differentials, and lem-tdmath-smooth-partial-legendre-transform-differential.

Mathematical supplier items opened for the displayed calculations were def-complete-ordered-field, def-natural-numbers, def-ordered-field, thm-induction-principle, thm-reals-ordered-field, lem-of-add-order, def-real-exponential-function-and-e, thm-exponential-is-strictly-increasing, thm-exponential-limits-and-range, cor-exponential-is-a-bijection-onto-positive-reals, def-natural-logarithm, thm-natural-logarithm-laws, def-real-power, thm-real-power-continuity-and-derivatives, thm-newton-leibniz-with-interior-derivative, thm-chain-sum-product-and-composition-rules-for-banach-derivatives, thm-exponential-beats-every-polynomial, thm-logarithm-slower-than-every-positive-power, def-convex-concave-and-midpoint-convex-functions, cor-second-derivative-characterises-convexity, thm-continuous-implies-integrable, and thm-euclidean-implicit-function-theorem. These were read as current suppliers; their displayed hypotheses, statements, and proof status were checked at the uses made in batch 10.

Run evidence consulted as navigation rather than verdict: the assigned batch manifest, batch dependency-level record, cross-batch-dependencies report, proof contracts, author notes, and source coverage file.

## Repairs and evidence

1. def-td-reservoir-cycle: its former full-compound record was not explicitly tied to the working-system endpoints or to the bath/work-store energy coordinates used in the same definition's transfer balances. The Carnot engine and refrigerator arguments apply the first-law postulate to the working-system record and the second-law postulate to a full-compound record; without a stated endpoint association, substituting the former record's transfers into the latter's entropy change was an unstated premise. The process definition supplies working-system endpoint records, while the macroscopic second-law postulate requires an endpoint association into one feasible set; neither by itself identifies these two records. The definition now requires an admitted total-compound endpoint association in one feasible set, identifies its working-system component with x_P^±, ties its other components to the bath/store energy coordinates, and declares the additive entropy split on those same endpoint tuples. Reversibility is now attached to that full-compound record. The full text of the changed Definition was written into both affected theorem proof-contract excerpts. I independently checked both bound proofs and the two numerical examples downstream; their claims and calculations remain valid under this explicit compatibility condition.

2. cex-td-integrable-capacity-not-integer-power: the formal response chart now explicitly realizes D_c by preparation labels and an identity coordinate map, and supplies positive mass and rest-frame data for those preparations. This closes the state-domain witness that was previously only called a “local state-domain patch.” The state-domain supplier defines D_c as the image of the preparation-label map and requires positive mass and center-of-mass data; the Galilean frame supplier provides the point-mass rest-frame convention used by the witness. The entropy, derivative identities, improper-integral limit, and failure of every O((T/T_*)^q) bound for q ≥ 1 were checked directly. The current item derives C_V=T S_T from its explicit branch; it does not cite or depend on pthm-td-potential-differentials. The contrary blocker in the author notes/coverage record is stale for the current carrier.

3. ex-td-finite-canonical-ground-state-entropy and ex-td-geometric-cooling-protocol: both now state that their positive Kelvin-valued variables are parameters or coordinates of the stipulated finite/toy model, not silently identified with the macroscopic entropy-derived function T_c=1/S_{c,U}. This uses the exact temperature definition in def-td-temperature-pressure-chemical-potential to mark the boundary between the model parameter and the macroscopic state function. The finite-state proof still yields k_B log g under the stated positive-gap assumptions. The geometric example still proves only finite-step nonreachability for its stipulated map, whose codomain excludes D_0; it makes no claim about physical refrigerators or universal unattainability.

No verification judge records were present on the changed items. No page prose was edited.

## Page verdicts

- td-cycles-and-low-temperature: no confirmed remaining content defect. Its engine and refrigerator bounds are conditional deductions from the adopted first- and second-law postulates and the declared ideal-bath model. Its two low-temperature claims are separately adopted, explicitly scoped postulates; neither is presented as derived from the other or from the first/second law.
- td-cycles-and-low-temperature-examples: no confirmed remaining content defect. The engine/refrigerator calculations use stipulated inputs, the capacity counterexample is a formal local chart, the canonical result is a finite-model limit, and the geometric update calculation is confined to its stated map. None is reported as experimental evidence.

Sources checked for the relevant claims: David Tong, Statistical Physics, Chapter 4, §4.3.1 (printed pp. 115–116) and §4.5 (printed pp. 133–134), [author-hosted PDF](https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf); Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §§2.5.2–2.5.4 (printed pp. 21–25) and §2.6.2 (printed p. 29), [UC San Diego course PDF](https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf). Tong's stated power-law inference is not treated as a theorem: the local square-root branch demonstrates that finite convergence of the improper entropy integral alone does not imply the stated pointwise bound. No experiments or measurements are claimed in this batch, so apparatus, sampling, and statistical uncertainty do not enter these model calculations.

## Validation and blocker

For all six changed items (def-td-reservoir-cycle, both cycle-bound theorems, the capacity counterexample, and the two examples), the required reflow and precheck commands exited successfully. Definitions had zero proof steps to precheck; every proof-bearing item passed.

The one required batched proof-layout invocation was attempted after the final item edits and exited 1 before inspecting any item. The renderer failed to resolve @/components imported by /Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx (ERR_MODULE_NOT_FOUND). The proof-layout result is therefore unavailable; this is the task blocker.

## Uneditable defects and coverage limit

No confirmed defect remains in a subject outside this batch's edit scope, and no current in-run dependency defect was confirmed. The current potential-differential/local-energy items were opened as context; the batch-10 counterexample does not reach them in its current dependency closure.

This review opened every assigned carrier and the direct suppliers needed for the claims. I did not independently re-audit every transitive foundational dependency beneath the published mathematical suppliers; their exact cited statements and current published/audited status were used as mathematical premises. The Arovas PDF was retrieved and the cited sections were inspected; I did not read unrelated parts of its 112-page chapter.
