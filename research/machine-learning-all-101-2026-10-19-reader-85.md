# Step 3a reader report — batch 85

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Date: 2026-10-20

## Opened inventory

Read `research/machine-learning-all-101-2026-10-19-batch-85.pages.json` and the current batch-85 proof contracts in `research/machine-learning-all-101-2026-10-19-batch-85.proof-contracts.json`. The manifest assigns these draft pages:

- `rl-function-approximation-and-off-policy-limits` (`library/machine-learning/rl-function-approximation-and-off-policy-limits.md`): four theorem/definition items, no examples; requires `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, `tabular-prediction-and-control`, and `ml02-gaussian-process-regression`.
- `rl-function-approximation-and-off-policy-limits-examples` (`library/machine-learning/rl-function-approximation-and-off-policy-limits-examples.md`): three examples, no theorem/definition items; requires the A page above.

Opened all assigned items in dependency order: `lem-projected-bellman-error-is-well-defined`, `def-projected-bellman-error`, `thm-bairds-counterexample-off-policy-td-diverges`, `thm-bellman-error-unlearnability-example`, `ex-on-policy-one-state-linear-td-is-stable`, `ex-bairds-seven-state-star-expected-update`, and `ex-matched-observation-mrps-have-distinct-bellman-errors`.

Opened the direct item dependencies named by the assigned manifests: `def-finite-markov-decision-process`, `def-policy-bellman-operator`, `def-sum-over-a-finite-index-set`, `lem-finite-span-orthogonal-projection-in-inner-product-space`, `lem-finite-sum-laws`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `lem-geometric-sequence-null`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-axiom-of-choice`, `thm-finite-mdp-policy-induces-reward-state-chain`, and `thm-ionescu-tulcea-construction-of-a-markov-chain`. Also opened prerequisite page carriers for the A page and the relevant transitive suppliers `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `def-finite-sum`, `lem-finite-sum-permutation-invariance`, `def-premeasure-on-an-algebra`, `lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined`, and `thm-caratheodory-extension-theorem`.

Reviewed the assigned contracts as evidence, not as proof verdicts. They cover the seven assigned IDs and their cited facts, proof steps, and boundary cases.

## Review and edit

The finite weighted quotient in `lem-projected-bellman-error-is-well-defined` is an inner-product space after identifying functions equal on the positive-weight support; the finite-dimensional projection result applies to the feature span, including dependent or zero feature classes. The definition `def-projected-bellman-error` then uses this fixed quotient projection on each residual class.

In `thm-bairds-counterexample-off-policy-td-diverges`, the importance-weighted expected update and the synchronous update reduce to the stated three-coordinate recurrence. The displayed matrix and left eigenvector yield a positive growth factor for every `alpha > 0`, and the initial pairing is positive. The exact eigenvalue bounds and rational inequalities in steps 3.1–5.1 check out. The diagram correctly distinguishes solid transitions to `s_7` from dashed routing uniformly to the six upper states; its routing box is explicitly not a state.

In `thm-bellman-error-unlearnability-example`, both transition matrices and stationary weightings are correct. The two observed feature/reward processes have the same initial law and transition kernel. The residual formulas, normal-equation calculation, positive definiteness of the residual matrix, and minimum `(gamma+2)^2/(6D)` check out. At `gamma = 0`, both unique minimizers are `(0,0)`; for `0 < gamma < 1`, the minimizers differ.

The assigned examples specialize those results correctly. The one-state update has ratio `q = 1 - alpha(1-gamma)` with `0 <= gamma <= q < 1`. The first Baird update has exact increments `(444/175, -3/175, 1326/175)` per unit step size and the stated fractions at `alpha = 1/100`. The matched-MRP example correctly specializes the theorem to `gamma = 1/2`, yielding minimum `25/42` and `BE_2(0,0) = 2/3`. Both TikZ diagrams match the transition descriptions; no additional diagram is needed for the scalar or finite-iterate examples.

Edited only the title of `thm-bellman-error-unlearnability-example` to “Feature-reward data do not determine the Bellman error or, at positive discount, its minimizer.” The prior title claimed the minimizer was undetermined across the full stated range, including `gamma = 0`, where the two unique minimizers coincide. The statement and proof remain unchanged. No proof-contract field represents the title, so the proof contract required no update; the item had no `verification.judge` record to remove. Reflow reported the file unchanged, precheck passed (`1 checked, 0 failing`), and proof-layout reported `1 items, 6 steps, 0 defects`.

No A-page prose edits were needed.

## Uneditable finding

`thm-ionescu-tulcea-construction-of-a-markov-chain` is a published dependency of assigned consumer `thm-bellman-error-unlearnability-example`. In Proof step 2.1, the clause “a [F2, step 1.1] probability section of each `K_n` has nonempty target” misuses F2: the opened target `lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined` concerns well-defined finite additivity of the cylinder law, not nonempty sections of a probability kernel. The target nonemptiness follows immediately from the statement’s probability-kernel hypothesis (`K_n(x,E_{n+1})=1`), so this is a nonfatal citation defect; cite that kernel condition instead. The Ionescu–Tulcea theorem itself is sound for the use made here. The complete external cross-check was Shalizi, §3.2, Theorem 33 and proof (PDF pp. 15–16), which constructs the path law from sequential probability kernels and verifies continuity at the empty set.

## Page verdicts

- `rl-function-approximation-and-off-policy-limits`: pass. Its inventory and prerequisites match the manifest; the page has only frontmatter, preserves `page_layout: compact-v1`, and has no summary body.
- `rl-function-approximation-and-off-policy-limits-examples`: pass. Its example inventory and A-page prerequisite match the manifest; the page has only frontmatter, preserves `page_layout: compact-v1`, and has no summary body.

## Sources and coverage limits

The Sutton–Barto Baird citation is §11.2, Figures 11.1–11.2 and equation (11.9); the official Stanford PDF fetch timed out. The expected-update computation and eigenvalue proof were checked directly from the assigned item. For the matched-MRP example, Hutter, Yang-Zhao, and Majeed, §4, Figure 2 and accompanying text (PDF pp. 3–4) corroborate the transition matrices, stationary distributions, identical feature/reward sequence law, and differing Bellman errors at zero parameter; the exact minimizers were checked locally. Tsitsiklis and Van Roy, §IX, Theorem 3 (printed pp. 686–687) was opened as independent context and is not used as a supplier for Baird’s calculation.

All assigned pages and items and all direct item dependencies named in the batch manifest were opened. The additional transitive items listed above were opened where needed to check finite-sum, projection, and measure-extension uses; this was not a corpus-wide audit of every prerequisite behind every published dependency. The official Sutton–Barto PDF retrieval limitation is the only source-access limitation. No blocker prevents batch 85’s reader handoff. The live run remains `running`; its status reports an unrelated `3a-collect` blocker for `collect-57` (covers batch 57, failed three times).
