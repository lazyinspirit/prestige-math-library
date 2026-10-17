# Step 3a reader report — batch 45

Run: physics-remaining-80-2026-10-17  
Role: reader  
Scope: batch 45

## Opened inventory

Assigned pages:

- A page [qsm-bose-fermi-gases](../library/quantum-statistical-mechanics/qsm-bose-fermi-gases.md).
- Examples page [qsm-bose-fermi-gases-examples](../library/quantum-statistical-mechanics/qsm-bose-fermi-gases-examples.md).

Page prerequisites opened:

- [csm-exact-models](../library/classical-statistical-mechanics/csm-exact-models.md), including its directly used Gaussian supplier lem-csm-examples-gamma-gaussian-tools.
- [qm-math-oscillator](../library/non-relativistic-quantum-mechanics-mathematics/qm-math-oscillator.md), including the assigned oscillator suppliers.
- [qm-framework-and-quantities](../library/non-relativistic-quantum-mechanics/qm-framework-and-quantities.md), including the state/preparation postulates consumed here.

The 15 assigned items were opened in dependency order:

| Level | Items |
|---|---|
| 0 | def-qsm-identical-particle-fock-sectors |
| 1 | lem-qsm-fock-occupation-basis-and-car-relations; thm-qsm-models-lattice-riemann-bose-bound |
| 2 | lem-qsm-models-diagonal-occupation-trace |
| 3 | post-qsm-models-statistics-and-preparation |
| 4 | pthm-qsm-dilute-occupation-limit; pthm-qsm-oscillator-spin-ensembles; pthm-qsm-periodic-ideal-occupation |
| 5 | pthm-qsm-fermi-zero-temperature; pthm-qsm-homogeneous-bose-condensation; ex-qsm-dilute-occupation-limit; ex-qsm-oscillator-spin-ensembles; ex-qsm-periodic-ideal-occupation |
| 6 | ex-qsm-fermi-zero-temperature; ex-qsm-homogeneous-bose-condensation |

The direct external item dependencies reviewed for their exact relevant Statement or Definition were:

def-absolute-value-and-singular-values-of-a-compact-operator, def-adjoint-of-a-densely-defined-unbounded-operator, def-axiom-of-choice, def-countable-choice, def-densely-defined-closed-and-closable-operator, def-hilbert-space, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-nonnegative-lebesgue-integral, def-tdmath-countable-canonical-model, def-trace-class-operator, def-trace-of-a-trace-class-operator, def-unbounded-linear-operator-domain-and-graph, lem-csm-examples-gamma-gaussian-tools, lem-finite-rank-operators-are-compact, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, lem-positive-square-root-of-a-compact-positive-operator, lem-tdmath-bose-fermi-mode-fluctuations, post-nrqm-framework-observable-and-probability, post-nrqm-framework-state-and-composition, thm-cauchy-schwarz-in-an-inner-product-space, thm-lebesgue-measure-of-a-box-of-every-kind, thm-monotone-convergence-for-the-integral, thm-norm-limit-of-compact-operators-is-compact, thm-nrqm-oscillator-hermite-completeness, thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, thm-tdmath-grand-response-covariance, thm-tdmath-summable-canonical-differentiation, thm-tonelli-theorem-for-sigma-finite-product-spaces, and thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues.

The CSM Gaussian supplier is a draft from another batch. I read its complete proof; its Gaussian integral evaluation used by the lattice theorem is established there. I found no defect in that supplier.

## Repairs and evidence

- thm-qsm-models-lattice-riemann-bose-bound: its proof already used monotone convergence and Tonelli to evaluate the endpoint integral as an extended nonnegative value, but the Statement only supplied the finite-dimensional case. I made the Statement include the endpoint identity for every \(d\ge1\), its extended value, the \(\mu\uparrow0\) integral limit, and the missing-origin lattice limit for \(d>2\). Proof step 5.1 now says explicitly that the sum/integral equality is extended-valued and diverges for \(d\le2\). The proof uses the existing Gaussian, Tonelli, and monotone-convergence suppliers.
- pthm-qsm-homogeneous-bose-condensation: updated Fact [F2] and its proof contract to state the exact endpoint and \(\mu\uparrow0\) content of the lattice supplier that Step 1.2 uses. The resulting \(\rho_c=+\infty\) claim for \(d\le2\) now has an explicit mathematical supplier.
- pthm-qsm-dilute-occupation-limit: replaced the vague “total occupation approximation error” with explicit bounds for the total mean occupations, and stated the corresponding aggregate log-partition bounds. Removed the unqualified Maxwell–Boltzmann label from the concluding sentence; the proof contract now records the two aggregate estimates directly. Steps 2.1 and 3.1 sum the displayed per-mode inequalities under the given \(\sum_jq_j^2\) hypothesis.
- ex-qsm-dilute-occupation-limit: defined the comparison Poisson law \(P_q(n)=e^{-q}q^n/n!\) and derived its mean and variance from the exponential series in Verification step 2.1. The text now distinguishes this comparator from the linked theorem’s mean and log-partition estimates. Updated its proof contract.
- ex-qsm-periodic-ideal-occupation: defined the same two-mode grand-canonical comparison used by the example, including \(\mu<\min(\epsilon_1,\epsilon_2)\), its geometric weights, and the factorized normalized law. Defined \(N_i(n_1,n_2)=n_i\). Verification step 2.1 now compares this two-mode law with the fixed-\(N=1\) law and keeps the periodic-model supplier as a separate matching instance. Updated its proof contract.

No stale verification.judge record was present on the changed items. The affected proof contracts were updated for the lattice theorem, its Bose consumer, the dilute theorem, and both repaired examples. The lattice Statement extension’s consumers were checked: the Bose periodic theorem, Fermi endpoint theorem, and Bose-condensation theorem are all assigned to this batch; only the last uses the newly explicit singular endpoint conclusion.

## Checks

For each of the five changed items, reflow completed with no change and precheck passed:

- thm-qsm-models-lattice-riemann-bose-bound
- pthm-qsm-homogeneous-bose-condensation
- pthm-qsm-dilute-occupation-limit
- ex-qsm-dilute-occupation-limit
- ex-qsm-periodic-ideal-occupation

The required final proof-layout command covered those five items: proof-layout: 5 items, 20 steps, 0 defects.

## Page verdicts and remaining defects

- qsm-bose-fermi-gases (A): no remaining confirmed defect found after the repairs above. Its scope, units, Fock/occupation construction, conditional grand-trace results, and endpoint claims match the reviewed item statements. Page prose was not changed.
- qsm-bose-fermi-gases-examples (B): no remaining confirmed defect found after the two example repairs above. Its examples remain conditional model calculations and make no empirical claim. Page prose was not changed.

Uneditable findings: none. Blocker: none. The pages and items remain drafts; these reader dispositions are not publication or judge stamps.

## Coverage limitation

I reviewed every assigned item and both assigned pages, all three page-level prerequisite pages, and the exact relevant Statements or Definitions of all 32 direct external item dependencies. I did not independently re-audit the full transitive published-mathematics proof closures or retrieve the external textbook URLs; I relied on the opened exact supplier statements for those published mathematical results. The one directly used in-run draft supplier, lem-csm-examples-gamma-gaussian-tools, was read through its complete proof.
