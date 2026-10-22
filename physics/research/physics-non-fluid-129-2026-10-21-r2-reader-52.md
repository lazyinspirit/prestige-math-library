# Step 3a Reader Report — Batch 52

Run: physics-non-fluid-129-2026-10-21-r2  
Role: reader (read-only)  
Scope: batch 52 only

## Opened inventory

Assigned pages:

- library/non-relativistic-quantum-mechanics-mathematics/nrqmx-finite-mode-gaussian.md
- library/non-relativistic-quantum-mechanics-mathematics/nrqmx-finite-mode-gaussian-examples.md

Assigned items, read in dependency order:

- Level 0: lem-nrqmx-finite-mode-fock-schr-identification; lem-nrqmx-finite-symplectic-generator-factorization.
- Level 1: def-nrqmx-finite-mode-symplectic-data; lem-nrqmx-finite-symplectic-implementers.
- Level 2: lem-nrqmx-finite-maslov-phase-parity; lem-nrqmx-williamson-normal-form; lem-nrqmx-schwartz-joint-quadrature-graph-core.
- Level 3: thm-nrqmx-finite-metaplectic-construction.
- Level 4: thm-nrqmx-finite-mode-bogoliubov.
- Level 5: thm-nrqmx-gaussian-covariance-uncertainty; cex-nrqmx-infinite-mode-vacuum-warning.
- Level 6: ex-nrqmx-single-mode-squeezing.

Page-level prerequisite context opened:

- library/non-relativistic-quantum-mechanics-mathematics/nrqmx-weyl-galilei-representations.md
- library/non-relativistic-quantum-mechanics-mathematics/qm-math-oscillator.md
- library/non-relativistic-quantum-mechanics-mathematics/qm-math-fock-and-equilibrium.md
- library/representation-theory/regular-weyl-representations-and-stone-von-neumann.md
- library/real-analysis/bounded-variation-and-riemann-stieltjes.md

Direct item suppliers declared by the batch manifest were opened: cor-c-one-change-of-variables-for-l-one-functions; cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn; cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space; cor-volume-of-the-unit-n-ball; def-absolutely-continuous-function; def-axiom-of-choice; def-countable-choice; def-fourier-transform-on-l-one-of-rn; def-inner-product-space; def-nrqmx-finite-mode-symplectic-data; def-polar-surface-measure-on-the-unit-sphere; def-schwartz-space-and-its-seminorms; lem-complex-integration-by-parts-on-intervals-and-decaying-lines; lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization; lem-nrqm-composites-density-and-scalar-spectral-probability; lem-nrqm-fock-and-equilibrium-creation-contraction-bounds; lem-nrqm-oscillator-closed-ladder-domains; lem-nrqmx-finite-maslov-phase-parity; lem-nrqmx-finite-mode-fock-schr-identification; lem-nrqmx-finite-symplectic-generator-factorization; lem-nrqmx-finite-symplectic-implementers; lem-nrqmx-schwartz-joint-quadrature-graph-core; lem-nrqmx-williamson-normal-form; lem-schrodinger-weyl-system-is-regular-and-irreducible; lem-smooth-bump-between-concentric-euclidean-balls; lem-weak-leibniz-rule-with-a-smooth-factor; thm-choice-implies-dependent-implies-countable-choice; thm-dominated-convergence; thm-exponential-beats-every-polynomial; thm-first-fundamental-theorem-of-calculus-for-l-one; thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces; thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces; thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions; thm-linear-change-of-variables-for-lebesgue-measure; thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains; thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction; thm-nrqm-oscillator-hermite-recurrence; thm-nrqm-oscillator-multidimensional-oscillator-completeness; thm-nrqmx-finite-metaplectic-construction; thm-nrqmx-finite-mode-bogoliubov; thm-nrqmx-finite-weyl-uniqueness-interface; thm-nrqmx-gaussian-covariance-uncertainty; thm-plancherel; thm-polar-coordinates-formula-for-lebesgue-measure; thm-spectral-theorem-for-bounded-normal-operators-pvm-form; thm-stone-one-parameter-unitary-groups; thm-stone-von-neumann-for-finite-dimensional-weyl-systems.

Additional transitive prerequisite context opened: lem-nrqm-fock-and-equilibrium-fock-sector-projections; lem-nrqm-composites-hilbert-tensor-construction; lem-nrqm-composites-permutation-sector-projections; thm-nrqm-oscillator-hermite-completeness; thm-stars-and-bars; thm-nrqm-fock-and-equilibrium-number-operator-domain.

The batch 52 cross-batch record was read. Its page edge and the batch 49 finite-Weyl item edge are marked verified. I independently opened the batch 49 item and checked that its AC, finite phase-space, nonzero central parameter, irreducibility, and regularity hypotheses match the local use.

## Source and diagram review

I checked the relevant source passages for Gaussian characteristic functions and covariance, Bogoliubov transformations, Williamson reduction, squeezing, and metaplectic phase. Sources opened included Weedbrook et al., Gaussian Quantum Information, §II.A Eqs. 15–19, §II.A Eqs. 21–25, §II.B.3 Eqs. 31–33, and §II.C.1 Eqs. 44–49; Arvind et al., The Real Symplectic Groups in Quantum Mechanics and Optics, §§IV, VI, and IX; Nam, Mathematical Quantum Mechanics II, §6.3; and Robbin–Salamon, Feynman Path Integrals on Phase Space and the Metaplectic Representation, including its Theorem 8.5 discussion. The local proofs retain their own hypotheses and do not rely on the source's general-Hermiticity assertion for iΩV.

No TikZ or tikzcd diagram occurs in either assigned page or any assigned item. I also checked the diagram in the transitive supplier thm-stars-and-bars: its example k=(2,0,3) has bars at positions 2 and 3 in a seven-position row, matching its stated encoding.

## Findings I could not edit

1. Fatal, ill-formed: def-nrqmx-finite-mode-symplectic-data is a definition-kind carrier but its body uses the heading “Statement” rather than the required “Definition”. The heading does not identify the defining clause under the schema's item-body conventions. It needs a Definition section before it can be reviewed as a definition.

2. Fatal, unlicensed inference: def-nrqmx-finite-mode-symplectic-data uses the Schwartz space as the Fourier domain and common core in its Statement and Facts, but it neither defines that space nor depends on the exact definition def-schwartz-space-and-its-seminorms. Its Fourier-automorphism supplier names Schwartz space but does not define its elements. Add the defining supplier and state the relevant domain/core content.

3. Fatal, ill-formed: lem-nrqmx-schwartz-joint-quadrature-graph-core, Proof 2.1, writes “(partial_j theta)” in the weak product-rule formula. This is not the derivative symbol used in the preceding formula or in the cited product-rule premise; it must read “(∂_j theta)”.

4. Fatal, unlicensed inference: cex-nrqmx-infinite-mode-vacuum-warning states a “mean total number” and introduces the total-number operator symbol in Proof 1.1 without defining its domain or action. The exact published total number operator theorem thm-nrqm-fock-and-equilibrium-number-operator-domain is not a declared dependency. Define the finite-mode total number operator and use its domain/expectation result, or state the computed quantity directly as the sum of the mode number forms.

No content repairs were made because this was a read-only reader assignment.

## Page verdicts

- nrqmx-finite-mode-gaussian: defects found in def-nrqmx-finite-mode-symplectic-data; the page needs repair before acceptance.
- nrqmx-finite-mode-gaussian-examples: a defect found in cex-nrqmx-infinite-mode-vacuum-warning; the page needs repair before acceptance.

## Blocker and coverage limits

No blocker prevented this review. All assigned pages and items, all direct item suppliers declared in the manifest, and the page-level prerequisite context listed above were opened. I did not audit every transitive proof dependency of already-published suppliers or every cited book section; no whole-library or full-source-book review is claimed.
