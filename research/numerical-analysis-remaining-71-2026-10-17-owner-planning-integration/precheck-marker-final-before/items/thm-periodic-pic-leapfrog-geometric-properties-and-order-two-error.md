---
id: thm-periodic-pic-leapfrog-geometric-properties-and-order-two-error
kind: theorem
title: Leapfrog geometry and finite-time order for the matched periodic PIC Hamiltonian
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-periodic-pic-separable-hamiltonian-grid-model
  - thm-periodic-pic-hamiltonian-force-is-a-gradient-and-conserves-energy
  - def-leapfrog-step-map
  - def-local-leapfrog-domain-on-an-open-configuration-set
  - lem-canonical-kick-and-drift-shears-have-symplectic-jacobians
  - prop-local-leapfrog-and-symplectic-euler-are-symplectic
  - thm-local-symplectic-euler-and-leapfrog-trajectory-errors
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
proof_strategy: direct
axiom_use: Countable Choice is used only to infer Lebesgue-volume preservation from determinant one. Reversibility, symplecticity, semidiscrete energy conservation, and the conditional order-two estimate are choice-free.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration
      url: https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Chapter 4
      url: https://djvu.online/file/cjOfwRgltjv1g
---

## Statement

Let $H_h(X,p)=\frac12p^TM^{-1}p+U_h(X)$ be [[def-periodic-pic-separable-hamiltonian-grid-model]], with $M$ symmetric positive definite and $U_h\in C^3(\mathbb R^{dP})$ periodic. Let $\Phi_{\Delta t}=K_{\Delta t/2}\circ D_{\Delta t}\circ K_{\Delta t/2}$ be the leapfrog map with the kick and drift conventions of [[def-leapfrog-step-map]]. Then:

1. For every signed step $\Delta t$, $\Phi_{\Delta t}^{-1}=\Phi_{-\Delta t}$.
2. Every step is symplectic.
3. Assuming Countable Choice, every step preserves Lebesgue volume on phase space.
4. On a finite interval $[0,T]$, if the exact and numerical paths, all kick/drift stages, and all line segments in the comparison lie in a common compact convex tube and the Hamiltonian vector field has bounded derivatives through order two there, the leapfrog trajectory error is at most $C_VTe^{LT}\Delta t^2$ for exact initialization and sufficiently small $\Delta t=T/n$.

The exact continuous flow conserves $H_h$ by [[thm-periodic-pic-hamiltonian-force-is-a-gradient-and-conserves-energy]]. No claim says the leapfrog map preserves $H_h$ exactly or that modified-energy estimates hold outside the analytic tube hypotheses of the geometric-integration suppliers.

## Facts & Assumptions
**Given:** A smooth periodic potential, symmetric positive-definite mass matrix, the kick/drift convention, an admitted step, and (for the finite-time error) the stated compact convex tube and exact initialization.

[A1] Countable Choice is assumed only in claim 3 ([[def-countable-choice]]).

[F1] [[def-leapfrog-step-map]]: $K_a(q,p)=(q,p-a\nabla U_h(q))$, $D_b(q,p)=(q+bM^{-1}p,p)$, and $\Phi_{\Delta t}=K_{\Delta t/2}\circ D_{\Delta t}\circ K_{\Delta t/2}$.

[F2] [[lem-canonical-kick-and-drift-shears-have-symplectic-jacobians]]: for $U_h\in C^2$ and $M$ symmetric positive definite, each kick and drift Jacobian satisfies $A^TJA=J$.

[F3] [[prop-local-leapfrog-and-symplectic-euler-are-symplectic]]: the admitted local leapfrog composition is $C^1$ and symplectic under those hypotheses.

[F4] [[thm-local-symplectic-euler-and-leapfrog-trajectory-errors]]: on a common compact convex tube with $U_h\in C^3$, bounded derivatives through order two of the Hamiltonian vector field, exact initialization, and admitted stages, leapfrog has finite-time global error at most $C_VTe^{LT}\Delta t^2$.

[F5] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice a $C^1$ diffeomorphism changes Lebesgue measure by the absolute value of its Jacobian determinant.

[F6] [[thm-periodic-pic-hamiltonian-force-is-a-gradient-and-conserves-energy]]: the continuous semidiscrete Hamiltonian flow conserves the exact $H_h$.

## Proof

1.1 The kicks and drifts in [F1] have inverses $K_{-a}$ and $D_{-b}$. Reversing the composition gives $\Phi_{\Delta t}^{-1}=K_{-\Delta t/2}\circ D_{-\Delta t}\circ K_{-\Delta t/2}=\Phi_{-\Delta t}$. All maps are global on the periodic lift, so no intermediate-domain restriction is lost. [F1, algebra]

1.2 The potential is smooth, hence $C^2$, and $M$ is symmetric positive definite. Each admitted kick and drift satisfies the symplectic Jacobian identity [F2]; composing the three maps preserves that identity by the chain rule, as stated in [F3]. [F1, F2, F3, given]

1.3 The Jacobian of a kick is $\begin{pmatrix}I&0\\-\frac{\Delta t}{2}\nabla^2U_h&I\end{pmatrix}$ and the Jacobian of a drift is $\begin{pmatrix}I&\Delta t M^{-1}\\0&I\end{pmatrix}$. Each is block triangular with identity diagonal blocks, so its determinant is $1$; multiplicativity gives $\det D\Phi_{\Delta t}=1$. The global kick/drift maps are $C^1$ diffeomorphisms, so [A1] permits applying [F5] to the map and its inverse, proving preservation of Lebesgue volume. [A1, F1, F5, given, algebra]

2.1 Under the tube and smoothness hypotheses, [F4] gives the stated global order-two error bound. The continuous invariant is the separate identity [F6]; it is not an assertion about the discrete map. [F4, F6, given] ∎
