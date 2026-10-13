# Reader report — batch 14

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: assigned batch 14 only

## Opened inventory

Assigned pages opened:

- A-page `cm-math-kam` — `library/non-relativistic-classical-mechanics-mathematics/cm-math-kam.md`
- B-page `cm-math-kam-examples` — `library/non-relativistic-classical-mechanics-mathematics/cm-math-kam-examples.md`

All 15 assigned items were opened and reviewed in dependency order:

1. `def-holomorphic-kam-domain-and-diophantine-labels`
2. `lem-cauchy-fourier-and-lattice-shell-bounds`
3. `lem-truncated-homological-equation-with-conservative-loss`
4. `lem-kam-affine-taylor-fourier-truncation`
5. `lem-kam-generator-flow-and-remainder-bound`
6. `lem-frequency-reparametrization-by-contraction`
7. `lem-kam-parameter-sequences-satisfy-all-step-hypotheses`
8. `lem-kam-composed-map-and-derivative-convergence`
9. `thm-parameter-kam-torus-invariance-and-lagrangianity`
10. `lem-kam-limit-is-an-embedding`
11. `lem-nondegenerate-frequency-reduction-and-alpha-square-smallness`
12. `lem-diophantine-resonance-slab-measure`
13. `thm-positive-measure-analytic-kam-family`
14. `lem-kam-conjugation-symmetry-of-the-construction`
15. `ex-two-rotor-kam-model-with-units`

The relevant cross-batch suppliers opened were `def-cm-phase-domain-and-standard-symplectic-two-form`, `prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart`, `prop-cm-canonical-map-tests-and-hamiltonian-transport`, `def-cm-local-flow-of-an-autonomous-system`, `lem-cm-continuous-dependence-on-initial-data`, `thm-cm-smooth-dependence-and-the-variational-equation`, and `def-variational-equation-along-an-ode-solution`. The cited published mathematical suppliers needed for the reviewed arguments were opened at their relevant statements, including the complex-analysis, Fourier, measure/product-measure, topology/metric, calculus/inverse-function, compactness/fixed-point, ODE, trigonometric, Gronwall, and Hamiltonian results.

## Repairs and evidence

All six edits below are in assigned, in-flight items. I did not edit page prose, another batch, published content, or mathematical supplier files.

- `def-holomorphic-kam-domain-and-diophantine-labels`: corrected “temperature of a step” to “scale of a step.” This removes a terminology error while preserving the step-scale definition.
- `lem-frequency-reparametrization-by-contraction`: proved completeness for the actual sup metric on the finite-dimensional parameter space and its closed subset; handled the zero-radius case; made the closedness of the contraction domain explicit; and supplied the chain-rule and mean-value steps for the Lipschitz estimate. Removed the irrelevant Euclidean-ball compactness citation, which did not justify completeness in the stated metric.
- `lem-diophantine-resonance-slab-measure`: stated the measure, box-volume, and product-measure facts needed by the estimate; treated dimension one directly; and made the orthogonal slicing argument explicit for dimensions at least two. Removed an unused neighbourhood-measure assertion.
- `lem-kam-limit-is-an-embedding`: added the chain-rule prerequisite, justified the exact coordinatewise derivative estimate used for the lower bound, and verified that the quotient distance and induced phase distance are metrics with the claimed topology.
- `thm-positive-measure-analytic-kam-family`: repaired the measurability and positive-measure argument. The labels are shown closed and compact; the closed-cube resonance estimate is obtained by enlargement and a limit; the compact image argument establishes measurability of the torus union; and the joint lower-Lipschitz estimate is stated in a fixed scaled norm, with no uniformity claim as `α` tends to zero. Added the direct metric-topology prerequisite and aligned the proof contract's citations and step record with the current proof. The proof-contract file is `research/physics-cm-qm-gr-79-2026-10-11-batch-14.proof-contracts.json`.
- `ex-two-rotor-kam-model-with-units`: made the rotor model description and physical units explicit, stated `n=2` and the chosen Diophantine exponent, and renamed the energy and time symbols to avoid collisions with KAM constants and the exponent.

The analytic KAM claims were cross-checked against J. Pöschel, *A Lecture on the Classical KAM Theorem*, arXiv:0908.2234, §§1–2 (PDF pp. 5–10), which gives the classical and parameter KAM theorems and their hypotheses: https://arxiv.org/pdf/0908.2234. I also checked the technical caution in Abed Bounemoura, *Some remarks on the Classical KAM Theorem, following Pöschel*, arXiv:2006.04453, introduction, pp. 1–2: https://arxiv.org/pdf/2006.04453. The local parameter-sequence argument imposes the small-step condition `h_0 ≤ α/(2K_0^(τ+1))` implicated by that caution. These sources were used as cross-checks; local proof obligations remain supported by the cited local suppliers and the repairs above.

No stale `verification.judge` record was present on the edited item carriers. The proof-contract updates were checked against current source links and derivation-step IDs.

## Validation

- Reflow and precheck passed for each changed item. The final theorem check was run after its last item and proof-contract update: `PASS items/thm-positive-measure-analytic-kam-family.md (direct); 1 checked, 0 failing`.
- The required final proof-layout command was run once over all six changed item paths: `proof-layout: 6 items, 25 steps, 0 defects`.

## Defects not editable in this scope

None found in the inspected dependencies or assigned pages. No uneditable finding remains for routing.

## Page verdicts

- `cm-math-kam` (A-page): retained. Its assigned theorem and supporting items now state the relevant analytic, measure, regularity, and parameter hypotheses and provide the checked proof chain. No separate A-page prose defect was found.
- `cm-math-kam-examples` (B-page): retained. The assigned two-rotor example now gives its model conventions and units explicitly. No separate page-level defect was found.

## Blockers and limits

No blocker. The review was limited to batch 14 and the dependency statements needed for its claims; unrelated repository content was not audited. The report records mathematical-model deductions only and makes no empirical claim.
