## qsmx-quasifree-gases — Quasifree covariance, finite Bogoliubov theory and interacting boundaries

Earlier A/P pages: qsm-bose-fermi-gases, qsmx-entropy-entanglement, nrqmx-finite-mode-gaussian.

### def-qsmx-quasifree-finite-covariance

Kind: definition; domain: mathematics.

On r finite fermion modes with CAR, a gauge-invariant quasifree state is specified by covariance 0<=C<=I with omega(a_i* a_j)=C_ji and Wick determinant moments, odd moments zero. For quadratic H=sum a_i* h_ij a_j, h=h*, grand Gibbs has C=(I+exp(beta(h-mu I)))^-1.

[[lem-qsm-fock-occupation-basis-and-car-relations]]

Proof / construction route: Unitary diagonalization of h gives independent Bernoulli occupations; expand determinants and transform back. Wick is proved from finite occupation traces, not assumed as a general interacting identity.

Source sections: naaijkens.

### thm-qsmx-quasifree-entropy

Kind: theorem; domain: mathematics.

For the finite quasifree state, S=-Tr[C log C+(I-C)log(I-C)]. Restriction to a mode subspace remains quasifree with compressed covariance; covariance spectra determine restricted entropy.

[[def-qsmx-quasifree-finite-covariance]]

[[def-qsmx-information-conventions]]

Proof / construction route: Diagonal modes yield product binary entropy, and moments restricted to a mode subspace retain determinant Wick form. No bosonic tensor partial trace sign ambiguity: fix ordered CAR modes and use even gauge-invariant states.

Source sections: it-local.

### thm-qsmx-finite-boson-stability

Kind: theorem; domain: mathematics.

For finite r bosonic modes, a strictly positive real quadratic canonical form with an explicit finite symplectic Bogoliubov diagonalization gives H=sum_k hbar omega_k(b_k* b_k+1/2)+c with every omega_k>0. Then Z=e^(-beta c) product_k [2sinh(beta hbar omega_k/2)]^-1.

[[thm-nrqmx-finite-mode-bogoliubov]]

[[lem-qsm-models-diagonal-occupation-trace]]

Proof / construction route: Require positive Williamson frequencies as an explicit hypothesis or prove Williamson normal form before invoking it; finite unitary implementability transfers the occupation trace. No infinite-mode equivalence, interacting depletion estimate or superfluid theorem is inferred.

Source sections: nrqm-planned.

### Leaf companion qsmx-quasifree-gases-examples

### cex-qsmx-bogoliubov-zero-mode

Kind: counterexample; domain: mathematics.

A bosonic zero mode with H=0 on its Fock factor has Tr exp(-beta H)=infinity for every beta>0; formal determinant formulas with that mode omitted describe a different model.

[[thm-qsmx-finite-boson-stability]]

Proof / construction route: Each occupation contributes one; finite oscillator trace theorem requires strictly positive frequency.

Source sections: naaijkens.

