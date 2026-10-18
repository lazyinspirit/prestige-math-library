---
id: thm-periodic-pic-hamiltonian-force-is-a-gradient-and-conserves-energy
kind: theorem
title: The matched periodic PIC grid force is a gradient and its ODE conserves energy
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-periodic-pic-separable-hamiltonian-grid-model
  - thm-periodic-pic-zero-mean-pseudoinverse-is-self-adjoint
  - thm-periodic-pic-charge-conservation-and-neutralized-source
  - lem-periodic-pic-smooth-assignment-weights
proof_strategy: direct
axiom_use: No choice principle is used; all variations and sums are finite-dimensional.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Section 5-5
      url: https://djvu.online/file/cjOfwRgltjv1g
    - title: Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration, §3.5
      url: https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf
---

## Statement

For the Hamiltonian grid model of [[def-periodic-pic-separable-hamiltonian-grid-model]], let $\phi=A_h^\dagger\rho(X)$. Its position gradient is
$$ \nabla_{X_p}U_h(X)=q_p\sum_{j\in J_N}\nabla w_j^{\varepsilon,h}(X_p)\phi_j . $$
Along every differentiable solution of $\dot X=M^{-1}p$, $\dot p=-\nabla_XU_h(X)$, the continuous semidiscrete energy $H_h(X(t),p(t))$ is constant. This is an invariant of the exact finite-grid ODE; no time-discrete energy conservation is asserted.

## Facts & Assumptions

**Given:** Smooth periodic shape weights, the neutralized deposition, the mean-zero inverse $A_h^\dagger$, positive masses, and a differentiable solution of the stated Hamiltonian ODE.

[F1] [[def-periodic-pic-separable-hamiltonian-grid-model]]: $U_h=\frac12\langle\rho,A_h^\dagger\rho\rangle_h$, $H_h=\frac12p^TM^{-1}p+U_h$, and the ODE is $\dot X=M^{-1}p$, $\dot p=-\nabla U_h$.

[F2] [[thm-periodic-pic-zero-mean-pseudoinverse-is-self-adjoint]]: $A_h^\dagger$ is linear, maps a source to the unique mean-zero solution of its mean-zero part, and is self-adjoint.

[F3] [[thm-periodic-pic-charge-conservation-and-neutralized-source]]: the neutralized density $\rho(X)$ has zero mean.

[F4] [[lem-periodic-pic-smooth-assignment-weights]]: the smooth weights are differentiable and satisfy $\sum_jw_j^{\varepsilon,h}(x)=1$ for every $x$.

## Proof

1.1 For a variation $\delta X$, differentiating the partition identity in [F4] gives $\sum_j\nabla w_j^{\varepsilon,h}(X_p)=0$ for each $p$. Thus the finite variation $(D\rho(X)[\delta X])_j=h^{-d}\sum_pq_p\nabla w_j^{\varepsilon,h}(X_p)\cdot\delta X_p$ has zero mean; $\rho(X)$ itself has zero mean by [F3]. Since $A_h^\dagger$ is self-adjoint on the zero-mean subspace by [F2], differentiating $U_h$ gives $DU_h(X)[\delta X] =\tfrac12\langle D\rho,A_h^\dagger\rho\rangle_h +\tfrac12\langle \rho,A_h^\dagger D\rho\rangle_h =\langle D\rho,\phi\rangle_h =\sum_pq_p\left(\sum_j\nabla w_j(X_p)\phi_j\right)\cdot\delta X_p .$ Identifying coefficients of arbitrary $\delta X_p$ yields the displayed gradient. [F1, F2, F3, F4, given, algebra]

2.1 Differentiate $H_h$ along a solution. Symmetry of $M^{-1}$ gives $\frac{d}{dt}H_h =(\nabla U_h)\cdot\dot X+(M^{-1}p)\cdot\dot p =(\nabla U_h)\cdot M^{-1}p-(M^{-1}p)\cdot\nabla U_h=0.$ Therefore $H_h$ is constant in time on the solution interval. [F1, step 1.1, given, algebra] ∎
