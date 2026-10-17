---
id: thm-csm-dk-liouville-and-fine-entropy
kind: theorem
title: Liouville probability transport and constant fine entropy
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-dk-hamiltonian-flow-measure
  - lem-csm-dk-volume-form-pullback-preserves-reference-measure
  - thm-csm-dk-invariant-hamiltonian-and-shell-measures
  - thm-liouville-volume-preservation
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-chain-rule-for-total-derivatives
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-countable-choice
  - def-axiom-of-choice
dependency_roles:
  def-csm-dk-hamiltonian-flow-measure: mathematical-premise
  lem-csm-dk-volume-form-pullback-preserves-reference-measure: mathematical-premise
  thm-csm-dk-invariant-hamiltonian-and-shell-measures: mathematical-premise
  thm-liouville-volume-preservation: mathematical-premise
  thm-integrals-are-invariant-under-measure-preserving-maps: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2.1
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §3.2
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/03:_Ergodicity_and_the_Approach_to_Equilibrium/3.02:_Phase_Flows_in_Classical_Mechanics
---

## Statement

Let $(M,\omega,H,\Phi,m_0)$ be a Hamiltonian phase datum and let $R\subseteq M$
be an open complete invariant domain. For any finite-valued Borel density
$\rho_0\ge0$ with $\rho_0\in L^1(m_0|_R)$ and
$\int_R\rho_0\,dm_0=1$, define
$\rho_t=\rho_0\circ\Phi_{-t}$. Then $\rho_t$ is a probability density for every
$t$, and for every bounded Borel observable $A$,
$$\int_R A\rho_t\,dm_0=\int_R(A\circ\Phi_t)\rho_0\,dm_0.$$
If $\rho_0$ is smooth, it satisfies the classical Liouville equation
$\partial_t\rho_t+X_H\rho_t=0$. For merely $L^1$ data, it satisfies the
distributional equation on $R$, meaning
$$\int_{\mathbb R}\int_R\rho_t (\partial_t\varphi+X_H\varphi)\,dm_0\,dt=0$$
for every smooth compactly supported test function
$\varphi\in C_c^\infty(\mathbb R\times R)$.

If additionally $\int_R|\rho_0\log\rho_0|\,dm_0<\infty$, with
$0\log0=0$, then the reference-measure fine entropy
$$S_k(t)=-k\int_R\rho_t\log\rho_t\,dm_0,\qquad k>0,$$
is finite and constant. This is not a monotonicity claim for entropy after
coarse graining.

## Facts & Assumptions

**Given:** An open complete invariant flow domain, a normalized
$m_0$-density, and, for the entropy clause, absolute integrability of
$\rho_0\log\rho_0$.

[A1] Full AC is carried because the stated item uses
[[thm-csm-dk-invariant-hamiltonian-and-shell-measures]], whose regular-shell
clause requires it. The transport calculation itself uses only the
phase-flow hypotheses.

[F1] [[def-csm-dk-hamiltonian-flow-measure]]: $\Phi_t$ is the actual flow and
$m_0$ is the measure induced by the positive symplectic density.

[F2] [[thm-liouville-volume-preservation]] and
[[lem-csm-dk-volume-form-pullback-preserves-reference-measure]]: the flow
preserves $m_0$ wherever defined.

[F3] [[thm-integrals-are-invariant-under-measure-preserving-maps]]: for an
$m_0$-preserving map, composition preserves nonnegative and integrable
Lebesgue integrals.

[F4] [[thm-tonelli-and-fubini-for-completed-product-measures]]: the time and
phase-space integral of the compactly supported weak-test integrand may be
interchanged under its stated countable-choice assumption.

[F5] [[def-integrable-real-and-complex-functions-and-their-integrals]]:
the displayed $L^1$ assumptions mean absolute integrability with respect to
$m_0|_R$.

[F6] [[thm-chain-rule-for-total-derivatives]]: differentiating a smooth
observable along a differentiable flow curve gives its derivative by
applying the vector field.

[F7] [[thm-csm-dk-invariant-hamiltonian-and-shell-measures]]: when
$Z_\beta\in(0,\infty)$, the canonical density is one of the invariant
energy-weighted probabilities.

## Proof

**Given:** [A1] and [F1]–[F7].

1.1 By [F2], $\Phi_t$ preserves $m_0|_R$. Applying [F3] to $\rho_0$ gives $\int_R\rho_t\,dm_0=\int_R\rho_0\,dm_0=1$. Applying [F3] to the nonnegative and negative parts of the bounded observable times the probability density gives $\int_R A\rho_t\,dm_0=\int_R(A\circ\Phi_t)\rho_0\,dm_0$. All these integrals are finite because $A$ is bounded and $\rho_0\in L^1$. [A1, F1, F2, F3, F6, given]

1.2 For $L^1$ data and a test function $\varphi$ as in the statement, use the measure-preserving change $z=\Phi_t(w)$ from [F2]. The integrand becomes $\rho_0(w)\frac{d}{dt}\varphi(t,\Phi_tw)$. Its time support is compact; the union of the inverse images of the compact spatial support over that compact time interval is compact by continuity of the complete flow. The derivative of $\varphi$ is bounded there, so $\rho_0$ times a constant times the indicator of this compact set is integrable by [F5]. [F4] permits Fubini, and the inner time integral is the integral of a total derivative with zero endpoint values. It is therefore zero, proving the distributional identity. [A1, F2, F4, F5, given]

2.1 If $\rho_0$ is smooth, differentiate $\rho_t(z)=\rho_0(\Phi_{-t}z)$ by [F6] and the flow composition law. The derivative of $\Phi_{-t}$ along the flow is $-X_H$, yielding $\partial_t\rho_t+X_H\rho_t=0$. [F1, F6, step 1.1, algebra]

3.1 Pointwise, $\rho_t\log\rho_t=(\rho_0\log\rho_0)\circ\Phi_{-t}$, including zeros under the convention $0\log0=0$. By [F3], the integral of this integrable function is independent of $t$. Its absolute integrability and the $L^1$-integrability of $\rho_0$ make $S_k(t)$ finite, and the displayed identity makes it constant. In particular, when the finite canonical density of [F7] is used, it is stationary. [A1, F3, F5, F7, step 1.1] ∎

## Remarks

The mathematical entropy here is defined relative to the specified
dimensionless reference measure; choosing $k=k_B$ gives entropy units J/K in
a physical interpretation. Hamiltonian volume preservation does not prove
entropy increase, coarse-grained monotonicity, or equilibration.
