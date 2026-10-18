---
page: particle-in-cell-and-particle-mesh-kinetic-methods
title: Particle in cell and particle mesh kinetic methods
status: draft
items:
  - def-periodic-pic-grid-and-inner-product
  - lem-periodic-composite-trapezoid-error
  - def-periodic-pic-shape-assignment-and-gather
  - thm-periodic-centered-difference-poisson-zero-mode-and-gauge
  - thm-periodic-pic-zero-mean-pseudoinverse-is-self-adjoint
  - alg-periodic-pic-zero-mean-poisson-solver
  - thm-periodic-pic-charge-conservation-and-neutralized-source
  - thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth
  - lem-periodic-pic-smooth-assignment-weights
  - thm-periodic-pic-deposition-potential-gather-adjointness
  - thm-periodic-pic-poisson-residual-to-gathered-force-bound
  - def-periodic-pic-regularized-grid-interaction-kernel
  - lem-periodic-pic-shape-partition-and-quadrature-bound
  - thm-periodic-pic-poisson-solver-returns-the-zero-mean-solution
  - alg-periodic-pic-classical-rk4-step
  - def-periodic-pic-separable-hamiltonian-grid-model
  - thm-periodic-pic-grid-interaction-kernel-is-globally-lipschitz
  - thm-periodic-pic-smooth-density-grid-force-consistency
  - thm-periodic-pic-hamiltonian-force-is-a-gradient-and-conserves-energy
  - thm-periodic-pic-mean-field-error-with-force-defect
  - thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube
  - thm-periodic-pic-leapfrog-geometric-properties-and-order-two-error
  - thm-periodic-pic-staged-fixed-regularization-error-budget
requires:
  - interacting-particle-mean-field-and-vortex-blob-error
  - elliptic-finite-difference-methods
  - spectral-collocation-and-galerkin-methods
---

This page fixes a periodic electrostatic particle/grid model on $\mathbb T_L^d$, $d\in\{1,2,3\}$, with an odd uniform grid, a nonnegative partition-of-unity deposition shape, a uniform neutralizing background, centered differences, and a zero-mean periodic Poisson gauge. The finite Fourier solver is exact-arithmetic; floating-point FFT residuals require a separate certificate. Deposition and potential gathering are adjoints under the cell-volume grid pairing. A centered-field residual estimate uses the actual inverse/derivative norm and retains the grid-to-particle $h^{-d/2}$ factor.

Two force branches are kept distinct. The ordinary particle-mesh interaction uses a fixed-$\varepsilon$ smooth periodic assignment kernel, which makes the finite particle ODE globally smooth and Lipschitz. A separate variational grid energy defines the canonical force used for the leapfrog geometry theorem. Adjoint gathering alone does not identify the ordinary interpolated force with that variational force, and neither symplecticity nor reversibility gives exact discrete energy conservation.

For fixed $\varepsilon$, the smooth-density force error is bounded by $L^{d/2}h^{2-d/2}(\gamma_{N,L}C_{\rm src}+C_3)+C_{\rm int}h^2$, with $\gamma_{N,L}\le L/4$ and source/field derivative constants stated in the theorem. Vector quadrature uses Euclidean norms and a supremum over all shifted kernel/field products, preserving the scalar $1/12$ coefficient without a dimension factor. The regularized continuum force is globally Lipschitz, so the XD-08 Dobrushin estimate propagates a prescribed initial $W_1$ error and a uniform force defect. Classical RK4 contributes a conditional $P^{-1/2}C_{\rm RK}\Delta t^4$ term on uniform grid times $t_n=n\Delta t\le T$ with $0<\Delta t\le h_0$, when the $C^4$ field and all paired stages stay in the declared compact tube and satisfy its local-defect bounds. The grid need not end at $T$. The resulting estimate is at fixed $\varepsilon$; it asserts no singular $\varepsilon\to0$ limit and no universal empirical $P^{-1/2}$ rate.

Grid crossing, spectral aliasing, and stochastic loading are separate effects. The CIC example shows that a piecewise-linear assignment weight has a derivative jump at a node, so the smooth-tube RK4 theorem is not supplied by CIC regularity. The Fourier alias example concerns spectral collocation sampling, not the centered finite-difference solver. The chosen loading enters through the actual initial discrepancy $\delta_0$; no sampling law is assumed. A local periodic solvability proof is included because the inspected elliptic supplier page states a rectangular Dirichlet solver and does not provide the periodic Poisson interface planned in the design. Owner reconciliation is recorded in batch evidence.
