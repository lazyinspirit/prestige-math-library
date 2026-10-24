---
page: qubitization-and-optimal-hamiltonian-simulation
title: Qubitization and Near-Optimal Hamiltonian Simulation
status: published
items:
  - lem-qa-25-isometry-error-implies-trace-distance
  - lem-qa-25-parity-path-transfer
  - def-qa-25-qubitization-access-model
  - def-qa-25-hamiltonian-simulation-polynomial
  - lem-qa-25-hermitian-block-encoding-signal-subspaces
  - thm-qa-25-qubitization-signal-sequence
  - thm-qa-25-bounded-error-parity-query-lower-bound
  - alg-qa-25-qubitized-hamiltonian-simulation
  - lem-qa-25-clean-subspace-unitary-hybrid
  - lem-qa-25-sorted-xor-sparse-access-isometries
  - alg-qa-25-sparse-hamiltonian-block-encoding
  - thm-qa-25-sparse-no-fast-forwarding-lower-bound
  - alg-qa-25-small-time-aware-simulator
  - thm-qa-25-sparse-hamiltonian-block-encoding-correctness
  - lem-qa-25-jacobi-anger-truncation
  - thm-qa-25-qubitized-simulation-correctness
  - thm-qa-25-small-time-aware-simulator-correctness
  - thm-qa-25-qubitized-simulation-resource-bound
examples: []
requires:
  - hamiltonian-simulation-and-product-formulas
  - quantum-singular-value-transformation
  - block-encodings
  - quantum-signal-processing
  - controlled-gates-phase-and-entanglement
  - uniform-circuit-families-promise-problems-and-complexity
  - inner-product-spaces-and-orthogonality
  - the-spectral-theorem-and-singular-value-decomposition
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - continuous-time-quantum-walks
  - the-complex-exponential-and-eulers-formula
  - the-polynomial-hierarchy-and-relativization
  - reversible-computation-ancillas-and-coherent-oracles
  - state-preparation-isometry-synthesis-and-limits
  - lcu-oblivious-amplitude-amplification-and-taylor-simulation
---

An exact Hermitian block encoding supplies the normalized compression $H/\alpha$, while the access record separately charges $U$, $U^*$, controlled calls, projector reflections, state preparation, phase synthesis, and circuit costs. The signal-subspace lemma derives the paired two-dimensional actions, including the zero signal value and the collapsed $|\lambda|=\alpha$ endpoints. The qubiterate is a unitary rotation with eigenphases $\pm\arccos(\lambda/\alpha)$; alternating signal calls and projector phases implement the corresponding scalar QSP sequence.

For $f_\tau(x)=e^{-i\tau x}$, the locally proved Jacobi–Anger expansion splits into real even and real odd Chebyshev polynomials. The binding OP4 procedure certifies the factorial tail, rounded coefficients, complementary-polynomial phase lists, controlled relative phase, and finite LCU/OAA circuit. Its correctness guarantee is an operator-norm bound on the clean-input isometry. Auxiliary output registers may retain leakage bounded by that guarantee; tracing them out gives the stated reference-system trace-distance bound. A small-time wrapper returns the identity when $\alpha|t|\le\epsilon$, which closes the uniform degree claim near $t=0$.

The supplied-permutation sparse construction requires explicit reversible in-place row and column location permutations, their inverses, a costed uniform state preparation, and value rotations. It accepts any certified entry bound $h\ge h_{\max}$ and uses normalization $d_Hh$; choosing $h=h_{\max}$ gives the tight normalization. Standard XOR row-location access alone does not supply an in-place permutation at constant cost. The no-fast-forwarding theorem is scoped to the sparse row/value oracle: its path family reduces simulation to bounded-error parity and yields an $\Omega(t)$ query lower bound there, without asserting a lower bound for arbitrary block-encoding access.

The optional sorted-XOR sparse-access construction charges a logarithmic number of location queries, including clean slot erasure, inverses and coherent controls. Its support lists may include known zero-valued entries without requiring a real-zero test. The separate clean-subspace hybrid proves how simulator dilations compose and reverse on ideal clean-work trajectories while actual work may be dirty. The original supplied-permutation sparse mode and its sharper count remain available.
