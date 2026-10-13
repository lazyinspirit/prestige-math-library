# Step 3a reader report — batch 43

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: independent reader  
Scope: batch `43`

## Opened inventory

### Assigned pages

- `qm-framework-and-quantities` — `library/non-relativistic-quantum-mechanics/qm-framework-and-quantities.md`.
- `qm-framework-and-quantities-examples` — `library/non-relativistic-quantum-mechanics/qm-framework-and-quantities-examples.md`.

### Assigned items

Framework page (A):

- `def-nrqm-framework-newtonian-spacetime`
- `def-nrqm-framework-galilei-transformations`
- `lem-nrqm-framework-galilei-transformations-form-a-group`
- `def-nrqm-framework-inertial-frames`
- `def-nrqm-framework-classical-apparatus-trajectories`
- `def-nrqm-framework-quantities-and-units`
- `lem-nrqm-framework-ccr-on-the-schwartz-core`
- `post-nrqm-framework-state-and-composition`
- `post-nrqm-framework-observable-and-probability`
- `post-nrqm-framework-ideal-conditional-measurement`
- `post-nrqm-framework-autonomous-dynamics`
- `post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle`
- `post-nrqm-framework-identical-particles-and-spin`
- `post-nrqm-framework-preparation-and-apparatus`
- `rem-nrqm-framework-assumption-classes-and-scope`
- `rem-nrqm-framework-primitive-and-derived-status`

Examples companion (B):

- `ex-nrqm-framework-dimension-bookkeeping`
- `ex-nrqm-framework-quantity-type-checks`
- `cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit`
- `cex-nrqm-framework-quadratic-shear-is-not-galilean`
- `cex-nrqm-framework-mean-position-can-fail-to-exist`
- `rem-nrqm-framework-examples-scope-limits`

### Prerequisite pages and item suppliers consulted

The five page prerequisites were opened: `qm-math-magnetic-and-detection`, `cm-math-geometry`, `qm-math-composites`, `qm-math-orbital-and-spin`, and `qm-math-fock-and-equilibrium`.

The 64 direct item dependencies outside the assigned inventory were opened: `cor-primitives-of-a-continuous-function`, `def-adjoint-of-a-densely-defined-unbounded-operator`, `def-axiom-of-choice`, `def-borel-sigma-algebra`, `def-cm-affine-time-space`, `def-cm-special-orthogonal-group`, `def-complex-lp-and-euclidean-test-function-conventions`, `def-countable-choice`, `def-euclidean-inner-product`, `def-hilbert-orthogonal-projection`, `def-hilbert-space`, `def-improper-integral-at-infinity`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-matrix-product-and-identity-matrix`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `def-non-negative-and-positive-operator`, `def-nrqm-magnetic-and-detection-position-and-momentum-operators`, `def-orthogonal-projection`, `def-probability-measure`, `def-projection-valued-measure`, `def-schwartz-space-and-its-seminorms`, `def-sobolev-space-wkp-and-its-norm`, `def-strongly-continuous-one-parameter-unitary-group`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `def-trace-class-operator`, `def-trace-of-a-trace-class-operator`, `def-unbounded-integral-against-a-pvm`, `def-vector-valued-derivative-and-integral`, `lem-classical-derivatives-are-weak-derivatives`, `lem-cm-adapted-charts-and-galilean-transformations`, `lem-cm-adapted-coordinates-exist-and-are-unique`, `lem-cm-so3-is-a-matrix-group`, `lem-complex-translation-and-approximate-identity-interfaces`, `lem-derivative-of-a-power`, `lem-nrqm-composites-bounded-tensor-maps`, `lem-nrqm-composites-density-and-scalar-spectral-probability`, `lem-nrqm-composites-finite-effects-and-instruments`, `lem-nrqm-composites-hilbert-tensor-construction`, `lem-nrqm-composites-permutation-sector-projections`, `lem-nrqm-composites-rank-one-operator-calculus`, `lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint`, `lem-nrqm-observables-l2-multiplication-spectral-measure`, `lem-nuclear-series-characterizes-trace-norm`, `lem-scalar-and-complex-measures-from-a-pvm`, `lem-schwartz-cutoffs-from-the-standard-smooth-step`, `lem-schwartz-functions-and-all-derivatives-are-integrable`, `lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group`, `prop-nrqm-orbital-and-spin-finite-spin-matrices`, `thm-algebra-of-derivatives`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-chain-rule-for-total-derivatives`, `thm-dominated-convergence`, `thm-exponential-beats-every-polynomial`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-improper-p-test-rational`, `thm-monotone-convergence-for-the-integral`, `thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators`, `thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation`, `thm-nrqm-orbital-and-spin-symmetric-power-su2-representation`, `thm-plancherel`, `thm-separable-hilbert-space-has-a-countable-orthonormal-basis`, `thm-spectral-theorem-for-unbounded-self-adjoint-operators`, `thm-trace-class-is-a-two-sided-banach-operator-ideal`, and `thm-trace-is-absolutely-convergent-and-basis-independent`.

## Independent review and repairs

1. **`def-nrqm-framework-newtonian-spacetime` — domain made explicit.** The smooth-structure clause used `I` as a curve domain without defining it. It now specifies a nonempty open time interval `I ⊆ ℝ`, matching the derivative convention and the apparatus-trajectory definition. The adapted-chart transition supplier is smooth, so the coordinate-independent regularity reading remains valid.

2. **`def-nrqm-framework-classical-apparatus-trajectories` — affine reparameterization condition corrected.** Under a fixed frame, the reparameterized curve has time coordinate `αs + β`. Equality with its parameter `s` holds exactly when `α = 1` and `β = 0`; the prior remark omitted the shift condition.

3. **`def-nrqm-framework-quantities-and-units` — constant dimensions completed.** The item gave SI units and definitions for `h`, `c`, `e`, `μ₀` and `ε₀` but omitted their dimensions and scalar types. The additions use the item’s dimension conventions: `[h] = [ℏ] = μℓ²τ⁻¹`, `[c] = ℓτ⁻¹`, `[e] = ϑ`, `[μ₀] = μℓϑ⁻²`, and `[ε₀] = μ⁻¹ℓ⁻³τ²ϑ²`, with the corresponding SI units. The BIPM *SI Brochure*, 9th edition version 4.01, confirms the exact `h`, `c`, and `e` values and that the defining ampere leaves `μ₀` experimentally determined (Sections 2.2 and 2.2.1, printed pp. 124–129); Table 6 gives the permeability and permittivity units (printed pp. 135–136): <https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf>. The framework continues to treat these as SI conventions, not as measurements made by this item.

4. **`post-nrqm-framework-state-and-composition` — completed tensor-product states clarified.** The previous phrase “linear combinations” could be read as restricting all pure composite preparations to finite sums of product vectors. It now states that finite sums of simple tensors are dense in the completed tensor product, while any unit ray in the completion is an allowed pure composite preparation. This matches the cited tensor construction and preserves entangled states and the full completed-space scope.

5. **`post-nrqm-framework-observable-and-probability` — effects defined for arbitrary assigned Hilbert spaces.** Its cited `def-non-negative-and-positive-operator` is finite-dimensional, while P1 permits infinite-dimensional separable spaces and P2’s finite effects apply on those spaces. The item now defines a bounded effect by `F = F*` and `0 ≤ ⟨Fx,x⟩ ≤ ‖x‖²` for every `x ∈ H`, explicitly stating that this applies in finite and infinite dimension. The separate self-adjoint definition is also restated as equality of domains and values. The general normalization computation still follows from the density expansion, rank-one trace identity and trace ideal bound. P3, P7, the assigned status remarks and assigned examples were checked against this definition; no assigned consumer required a change.

6. **`post-nrqm-framework-identical-particles-and-spin` — sentence boundary repaired.** A comma splice joined the conditional exclusion consequence to the next independent bounded-operator condition. It is now separated into complete sentences; the adopted sectors and mathematical claims are unchanged.

7. **`ex-nrqm-framework-quantity-type-checks` — mixture rank and outcome law stated correctly.** The old argument inferred “not of the form `T_{φ,φ}`” from non-idempotence alone. It now shows that the mixture has two positive eigenvalues on independent vectors, hence rank at least two. The spin example also distinguished the two-outcome probability law from an individual outcome and computes the finite mean explicitly. The local observable calculation now records self-adjointness of `S_z ⊗ I` by the bounded tensor adjoint identity and identifies its `ℏ/2` spectral projection on the product basis.

8. **`cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit` — frequency condition made precise.** The former statement assigned a “frequency law” to a hypothetical limit operator without defining that association. It now explicitly defines the massive-family formal plane-wave frequency `ωₘ(k) = ℏ|k|²/(2m)` and states the pointwise finite-limit claim refuted by the computation. The existing smooth test-state calculation refutes strong action convergence, and the dispersion calculation refutes the finite-frequency limit.

9. **`rem-nrqm-framework-examples-scope-limits` — statistical wording clarified.** It now describes the type-check result as a probability measure on possible outcomes, not a measure “rather than a number.” This preserves the distinction between an outcome law and an individual recorded value.

The existing batch-43 proof contract was updated for the P1/P2 formulation clarifications and for verification steps 1.2–1.4 of `ex-nrqm-framework-quantity-type-checks`. Existing review verdicts were left unchanged. None of the changed items had a `verification.judge` record to remove.

## Assigned-consumer dispositions

The assigned descendants of the P1, P2 and quantity-convention clarifications were reviewed, including the measurement, dynamics, kinematics, spin, apparatus and scope-status items; the type-check example; and the dimension example. The assigned companion-page summary remains accurate for the revised mass-limit formulation. No repair was needed in B-page prose, and no B-page prose was edited. Cross-batch descendants were not independently re-reviewed as part of batch 43; the clarifications preserve the existing definitions, model scope and supplier assumptions.

## Page verdicts

- **`qm-framework-and-quantities` (A): pass.** Its summary accurately introduces the Newtonian arena, inertial charts, apparatus trajectories, quantity conventions and P1–P7 assumptions. The repaired domain and unit details fit the existing scope. The page makes no experimental or empirical claim.
- **`qm-framework-and-quantities-examples` (B): pass.** Its summary accurately reports the five checks/refutations and their limits. The corrected type-check summary distinguishes a probability law from a single deterministic result. The page reports no observations or statistical inference.

## Validation and limitations

Reflow and precheck were run on every changed item; all commands succeeded, with proof-bearing items passing precheck and definition/remark/postulate items reported as nonproof structure or no proof steps. The final `proof-layout` run covered all nine changed items and reported `9 steps, 0 defects`. No additional tests or whole-run gates were run.

No blocker or uneditable defect was identified in the assigned batch. The assigned items and pages, their directly used prerequisite statements, and the in-run suppliers listed above were inspected. I did not recursively re-audit every transitive proof dependency of published mathematics suppliers or inspect descendants assigned to other current-run batches. The initial inventory scan also preceded some supplier retrieval; final mathematical dispositions were checked against the supplier statements and proofs listed above, but I do not claim a strictly topological first-open order.
