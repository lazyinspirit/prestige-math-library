# Step 3a reader report — batch 41

Run: physics-cm-qm-gr-79-2026-10-11  
Role: reader  
Scope: batch 41 only

## Opened inventory

Pages:

- A — library/non-relativistic-quantum-mechanics-mathematics/qm-math-fock-and-equilibrium.md
- B — library/non-relativistic-quantum-mechanics-mathematics/qm-math-fock-and-equilibrium-examples.md

Assigned items, opened in dependency order:

- thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction
- lem-nrqm-fock-and-equilibrium-fock-sector-projections
- lem-nrqm-fock-and-equilibrium-creation-contraction-bounds
- thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains
- thm-nrqm-fock-and-equilibrium-number-operator-domain
- thm-nrqm-fock-and-equilibrium-fixed-mode-number-law
- thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace
- thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion
- thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas
- thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum
- ex-nrqm-fock-and-equilibrium-entropy-divergence-example
- thm-nrqm-fock-and-equilibrium-variational-ground-gap-overlap
- thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator
- thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness
- thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness
- lem-nrqm-observables-spectral-support-and-outcome-law
- lem-nrqm-observables-l2-multiplication-spectral-measure
- thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian
- thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation
- thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound
- thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence
- thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity
- ex-nrqm-fock-and-equilibrium-example-infinite-identical-mode-divergence
- ex-nrqm-fock-and-equilibrium-example-no-automatic-equilibration
- ex-nrqm-fock-and-equilibrium-example-repeated-orbital-fermion-exclusion

The dependency statements and relevant proof clauses used below were opened, including the Hilbert tensor and permutation-sector constructions; abstract Hilbert-space Cauchy–Schwarz; Riesz representation; adjoint and closed-operator definitions; trace and scalar spectral-probability results; logarithm and integral inequalities; the finite symmetric-group sign theorem; the real rational-box-step-function density theorem; separability and countability results; the spectral theorem and PVM integration; Sobolev/Plancherel and Hardy suppliers; and Kato–Rellich. Unrelated supplier proofs were not re-audited wholesale.

## Confirmed repairs

- thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction — The Statement and dependencies now require Countable Choice only. Proof 1.1 explicitly establishes vector-space closure and uses the abstract Hilbert Cauchy–Schwarz theorem for the sector and sequence pairings. Proof 1.2 establishes square summability of the coordinatewise limit before treating it as a Fock vector and proves convergence in the direct-sum norm. This removes the unsupported global Axiom-of-Choice premise and supplies the missing completeness argument. The relevant supplier statements are lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, and thm-cauchy-schwarz-in-an-inner-product-space.

- lem-nrqm-fock-and-equilibrium-creation-contraction-bounds — Facts F4 and proof references now invoke thm-cauchy-schwarz-in-an-inner-product-space for Hilbert tensor factors. The scalar sequence estimate is derived by applying it to finite real vectors and taking limits; the former L2 Cauchy–Schwarz citation did not support the tensor-space claim.

- thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains — Fact F4 now cites abstract Hilbert-space Cauchy–Schwarz for pairings in F(H), replacing the inapplicable L2 supplier.

- thm-nrqm-fock-and-equilibrium-number-operator-domain — Fact F2 and the proof now use abstract Cauchy–Schwarz, with the finite-sequence specialization stated where needed. Proof 2.1 replaces the unsupported “N is closed discrete” resolvent assertion by explicit bounds: for n > 2|λ|, |n−λ| > n/2, and the finitely many remaining denominators are nonzero when λ is outside the spectrum.

- thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum — Proof 1.3 derives log x ≤ x−1, with equality only at x=1, from the integral formula, so the entropy bound and equality case no longer depend on an unsupported strict-Jensen equality assertion. Proof 2.1 obtains the weighted logarithmic inequality by applying this scalar inequality termwise. The unused finite-Jensen and convexity prerequisites were removed; logarithm-law fact numbering and its proof-contract citations were updated.

- thm-nrqm-fock-and-equilibrium-variational-ground-gap-overlap — Fact F1 no longer identifies the first moment of a possibly negative semibounded H with a square-root quadratic form. It states integrability of |λ| and the finite signed first moment for u in D(|H|^{1/2}), and identifies that moment with ⟨Hu,u⟩ only for u in D(H), using the scalar spectral-probability and spectral-theorem suppliers.

- thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness — Application (e) now assumes W is even, which makes each pair potential W(x_i−x_j) permutation invariant; it also states the additional Axiom of Choice needed by its bounded-fixed-N supplier. Fact F1 now supplies the finite-group definition and sign homomorphism, states surjectivity for N≥2, and pairs terms by left multiplication by an element of sign −1. The fixed-N Coulomb consumer uses part (d), and its pair kernel is even; the other inspected consumers use parts (a)–(d), so the repair does not invalidate their uses.

- lem-nrqm-observables-l2-multiplication-spectral-measure — Statement (a) no longer relies on a multiplier theorem limited to Lebesgue L2 for an arbitrary measure space. Proof 1.1 proves density by truncation to X_n={|m|≤n}, proves symmetry, and identifies the adjoint domain by testing with (mh−k)1_Xn; this establishes self-adjointness on the stated maximal domain. Fact F1 and dependencies now identify the Hilbert pairing and supply abstract Cauchy–Schwarz.

- thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian — The unsupported assertion that L2(R3;C3) is separable has been replaced by Fact F10 and proof 2.1: rational box-step functions give a countable dense real L2 family; six copies approximate the real and imaginary components; the bounded projection MΠ maps this family to a countable dense subset of its range. Countability, separability, the rational-box theorem, and abstract sector Cauchy–Schwarz are now explicit dependencies.

- thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness — Fact F1 now cites cor-cauchy-schwarz-inequality-for-l-two for the L2 estimate used in proofs 2.1 and 3.1.

- thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound — Proof 2.1 now shows A+(g)ΨN is Cauchy by applying the CCR norm identity to differences of truncations. Closedness of A+(g) then establishes Ψ∈D(A+(g)) before the limit identity is used. This removes the circular assumption that A+(g)ΨN already converges to A+(g)Ψ. Fact F4 distinguishes the L2 estimate from the Fock-space Cauchy–Schwarz estimate.

- thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity — The eigenrelation typo in the hypotheses now reads H_a v_b=E_b v_b, and the eigenvalues are specified as real. Fact F7 cites abstract Cauchy–Schwarz for the Hilbert-space estimate. Proof 3.1 uses the open neighborhood |x|<δ, so continuity at Δ is sufficient for the approximate-identity argument.

- lem-nrqm-observables-spectral-support-and-outcome-law — Proof 3.1 now disjointizes the countable cover of the spectral complement before invoking strong countable additivity. Monotonicity gives zero PVM on each disjoint piece; this avoids applying countable additivity directly to overlapping null sets.

- thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace — Fact F2 now separates the direct-sum theorem’s boundedness, self-adjointness, and norm conclusions from positivity. Proof 1.1 establishes positivity directly from the nonnegative coordinate quadratic-form sum.

For these repairs, the batch-41 proof contract was synchronized with the current numbered derivations, their inline and end-of-step inputs, and fact-use locations. Supplier quotations were refreshed in the repaired-item contracts for the current statements of lem-nrqm-composites-permutation-sector-projections, lem-nrqm-composites-hilbert-tensor-construction, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-euclidean-l2-product-unitary, and the two repaired in-run supplier statements. No stale verification.judge record was present in the changed carriers.

## Unedited defects

None identified in the assigned items or assigned page prose.

## Page verdicts

- qm-math-fock-and-equilibrium (A): Pass. The page summary and prerequisite framing were reviewed; no separate page-prose defect was found.
- qm-math-fock-and-equilibrium-examples (B): Pass. The page summary was reviewed; no separate page-prose defect was found.

## Validation and blocker

- Reflow and precheck passed for all 14 changed items.
- The single batched proof-layout run checked 14 items and 83 proof steps with 0 defects.
- No blocker. No page, published mathematics supplier, or other-batch item was edited.
