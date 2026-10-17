---
id: thm-discrete-sde-adjoint-gradient-interchange
kind: theorem
title: "A finite stochastic adjoint gives the discrete gradient under domination"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-simulation-gradient-objective-and-payoff-oracle
  - thm-pathwise-simulation-gradient-is-unbiased-under-envelope
  - thm-discrete-adjoint-gradient-recursion
  - thm-chain-rule-for-total-derivatives
  - thm-induction-principle
  - def-random-element-and-real-random-variable
  - thm-composition-with-borel-functions-preserves-measurability
  - lem-coordinate-maps-and-permutations-are-measurable-on-finite-products
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-expectation-linearity-monotonicity-and-modulus-bound
provenance:
  statement: literature-derived
  proof: ai-altered
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Michael C. Fu, Stochastic Gradient Estimation, preprint of Handbook of Simulation Optimization, §3"
      url: "https://drum.lib.umd.edu/bitstreams/87a3c71b-9eca-4d5d-9287-e1e432f68a69/download"
    - title: "Paul Glasserman, Monte Carlo Methods in Financial Engineering, §§6–7"
      url: "https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf"
---

## Statement

Gradients of scalar functions are Euclidean column vectors, with $Dg(\theta)[v]=\langle\nabla g(\theta),v\rangle$ under [[def-euclidean-inner-product]]; vector expectations are taken coordinatewise.

Let $\Theta\subseteq\mathbb R^d$ be open, fix $\theta_0\in\Theta$, and choose an open ball $U$ with $\theta_0\in U\subseteq\Theta$. Let $d,m\ge1$, let $N\ge0$ be a finite integer, let the states lie in $\mathbb R^m$, and let $\xi=(\xi_0,\ldots,\xi_N)$ collect fixed simulation inputs on one probability space. The maps are $u_0:\Theta\times E_0\to\mathbb R^m$, $\Psi_k:\mathbb R^m\times\Theta\times E_{k+1}\to\mathbb R^m$, $\ell_k:\mathbb R^m\times\Theta\to\mathbb R$, and $\phi:\mathbb R^m\times\Theta\to\mathbb R$. Gradients of scalar functions are columns; $D_u\Psi_k$ is an $m\times m$ Jacobian and $D_\theta\Psi_k$ is an $m\times d$ Jacobian. Let
$u_0=u_0(\theta,\xi_0),\qquad u_{k+1}=\Psi_k(u_k,\theta,\xi_{k+1})\quad(0\le k<N).$
Assume the displayed step data maps are jointly measurable in all their arguments and, outside one probability-zero set, are continuously differentiable in their state and parameter variables on $U$. Define
$F_N(\theta,\xi):=\phi(u_N,\theta)+\sum_{k=0}^{N-1}\ell_k(u_k,\theta),\qquad J_N(\theta):=\mathbb E[F_N(\theta,\xi)].$
Assume $F_N(\theta,\xi)$ is integrable for every $\theta\in U$, and that there is a nonnegative integrable random variable $M$ with $\|\nabla_\theta F_N(\theta,\xi)\|_2\le M$ for all $\theta\in U$ almost surely, while $\mathbb E\|\nabla_\theta F_N(\theta_0,\xi)\|_2^2<\infty$. Put $S_0=D_\theta u_0$, propagate
$S_{k+1}=D_u\Psi_k\,S_k+D_\theta\Psi_k,$
and define reverse variables by
$p_N=\nabla_u\phi(u_N,\theta),\qquad p_k=\nabla_u\ell_k(u_k,\theta)+(D_u\Psi_k)^\mathsf T p_{k+1}.$
Then the discrete adjoint integrand
$\Gamma_N=\nabla_\theta\phi+S_0^\mathsf T p_0+\sum_{k=0}^{N-1}\left(\nabla_\theta\ell_k+(D_\theta\Psi_k)^\mathsf T p_{k+1}\right)$
satisfies $\nabla J_N(\theta_0)=\mathbb E[\Gamma_N(\theta_0,\xi)]$.

For a family of discretizations indexed by $h$, if each discrete objective satisfies the preceding pathwise interchange hypotheses, $\mathbb E\|\Gamma_h(\theta_0)-\Gamma(\theta_0)\|_2\to0$, and the continuous-limit objective has derivative $\nabla J(\theta_0)=\mathbb E[\Gamma(\theta_0)]$ under the same pathwise interchange conditions, then $\nabla J_h(\theta_0)\to\nabla J(\theta_0)$. This conclusion gives no rate unless a quantitative bound on $\mathbb E\|\Gamma_h(\theta_0)-\Gamma(\theta_0)\|_2$ is also supplied. Euler–Maruyama is the special case $\Psi_k(u,\theta,\Delta W_k)=u+b(u,\theta)h_k+\sigma(u,\theta)\Delta W_k$, with $\Delta W_k$ the simulated Brownian increment.

All tangent, reverse and adjoint derivatives are evaluated on the common full-probability event where the sample maps are $C^1$. Define $\Gamma_N=0$ on its measurable null complement, and use this version in expectations.

## Facts & Assumptions

**Given:** The finite simulation graph, its differentiability and pathwise envelope hypotheses, and, for the final convergence assertion, $L^1$ convergence of the discrete adjoint integrands and the stated derivative representation of the continuous-limit objective.

[F1] [[thm-chain-rule-for-total-derivatives]]: derivatives of compositions of differentiable Euclidean maps are obtained by composing their total derivatives.

[F2] [[thm-induction-principle]]: a property true at the initial index and inherited at each successor holds at every finite index.

[F3] [[thm-pathwise-simulation-gradient-is-unbiased-under-envelope]]: an integrable common envelope for a continuous pathwise gradient allows differentiation of its expected objective, with derivative equal to the expected pathwise derivative.

[F4] [[def-random-element-and-real-random-variable]]: each $\xi_k$ is a measurable random element. A constant parameter map is measurable because each measurable-set preimage is either empty or the whole probability space.

[F5] [[thm-discrete-adjoint-gradient-recursion]]: for a finite deterministic $C^1$ state-step graph, the tangent and reverse recursions in the Statement give its exact objective gradient.

[F6] [[thm-composition-with-borel-functions-preserves-measurability]]: the composite of two measurable maps is measurable once the inner map is measurable into the outer map's measurable domain.

[F7] [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$, and $\|z\|_2=\sup_{\|v\|_2\le1}\langle v,z\rangle$ (equality is attained by $v=z/\|z\|_2$ when $z\ne0$).

[F8] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear for integrable scalar random variables.

[F9] [[lem-coordinate-maps-and-permutations-are-measurable-on-finite-products]]: a finite tuple of measurable coordinate maps is measurable into the finite product sigma-algebra.

[F10] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: finite sums, differences, real scalar multiples and products of finite real measurable functions are measurable.

[F11] [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]: a pointwise limit of a sequence of measurable functions is measurable.

## Proof

1.1 Fix $\vartheta\in U$. By [F4] the constant map $\omega\mapsto\vartheta$ and each $\xi_k$ are measurable. The finite-tuple lemma [F9] first makes $\omega\mapsto(\vartheta,\xi_0(\omega))$ measurable; joint measurability of the initial-state map and composition [F6] then make $u_0(\vartheta,\xi_0)$ measurable. If $u_k$ is measurable, [F9] makes $\omega\mapsto(u_k(\omega),\vartheta,\xi_{k+1}(\omega))$ measurable into the step map's finite product domain, and [F6] makes $u_{k+1}$ measurable. Finite induction [F2] gives every state. Applying [F9] and [F6] to $(u_k,\vartheta)$ in each payoff map and then [F10] to the finite sum proves measurability of $F_N(\vartheta,\xi)$, also when $N=0$. Let $A$ be the common measurable null set excluded in the Statement. Fix a coordinate $j$ and put $h_n=1/(n+1)$ for $n\ge0$. If $\vartheta+h_ne_j\in U$, form the measurable difference quotient $Q_{j,n}=(F_N(\vartheta+h_ne_j,\xi)-F_N(\vartheta,\xi))/h_n$; otherwise put $Q_{j,n}=0$. Measurability follows from the fixed-parameter argument and [F10]. Replace each $Q_{j,n}$ by zero on $A$: equivalently multiply it by the measurable indicator of $A^c$, which remains measurable by [F10]. Since $U$ is open, these modified quotients converge at every outcome to the version of $\partial_jF_N(\vartheta,\xi)$ given by its derivative on $A^c$ and zero on $A$. By [F11] that version is measurable. This works for every fixed $\vartheta\in U$ and every coordinate, as required by [F3], without assuming the probability space is complete. The initial state is differentiable with sensitivity $S_0=D_\theta u_0$. If $u_k$ is differentiable, [F1] applied to $u_{k+1}=\Psi_k(u_k,\theta_0,\xi_{k+1})$ gives $D_\theta u_{k+1}=D_u\Psi_k\,D_\theta u_k+D_\theta\Psi_k$. Thus the stated tangent recursion holds for every $k<N$ by [F2]. [given, F1, F2, F3, F4, F6, F9, F10, F11]

2.1 Applying the chain rule to $F_N$ at $\theta_0$ gives its pathwise gradient $\nabla_\theta F_N=\nabla_\theta\phi+S_N^\mathsf T p_N+\sum_{k=0}^{N-1}\left(\nabla_\theta\ell_k+S_k^\mathsf T\nabla_u\ell_k\right),$ where $p_N=\nabla_u\phi$. [given, F1, step 1.1]

3.1 Fix an input realization $\xi$ outside the common null set and set $x_0^\xi(\theta)=u_0(\theta,\xi_0)$, $\Psi_k^\xi(u,\theta)=\Psi_k(u,\theta,\xi_{k+1})$, $\ell_k^\xi(u,\theta)=\ell_k(u,\theta)$, and $\phi^\xi(u,\theta)=\phi(u,\theta)$. For $N\ge1$ this is a finite deterministic $C^1$ state-step graph on $U$, so [F5] applies. For $N=0$, $p_0=p_N=\nabla_u\phi$ and step 2.1 directly gives the derivative $\nabla_\theta\phi+S_0^Tp_0=\Gamma_0$. For each $k<N$, the definitions of $p_k$ and $S_{k+1}$ imply $S_k^\mathsf T p_k=S_k^\mathsf T\nabla_u\ell_k+S_{k+1}^\mathsf T p_{k+1}-(D_\theta\Psi_k)^\mathsf T p_{k+1}.$ Rearrange and sum these identities over $k$: the $S_k^\mathsf T p_k$ terms telescope, and $p_N=\nabla_u\phi$. Thus $S_N^\mathsf T p_N+\sum_{k=0}^{N-1}S_k^\mathsf T\nabla_u\ell_k =S_0^\mathsf T p_0+\sum_{k=0}^{N-1}(D_\theta\Psi_k)^\mathsf T p_{k+1},$ so the gradient in step 2.1 is exactly $\Gamma_N$, agreeing with [F5] when $N\ge1$. [given, F5, step 1.1, step 2.1, algebra]

4.1 The pathwise derivative at $\theta_0$ is $\Gamma_N(\theta_0,\xi)$ by step 3.1. The Statement supplies integrability of $F_N$, the common integrable derivative envelope on $U$, and square-integrability at $\theta_0$. Thus [F3] gives $\nabla J_N(\theta_0)=\mathbb E[\Gamma_N(\theta_0,\xi)]$. [given, F3, step 3.1]

5.1 In the discretization family, step 4.1 gives $\nabla J_h(\theta_0)=\mathbb E[\Gamma_h(\theta_0)]$. For any integrable vector $Z$, [F7] and [F8] give, for every $\|v\|_2\le1$,
$\langle v,\mathbb EZ\rangle=\mathbb E\langle v,Z\rangle\le\mathbb E\|Z\|_2.$
Taking the supremum over such $v$ and using [F7] yields $\|\mathbb EZ\|_2\le\mathbb E\|Z\|_2$. Applying this to $Z=\Gamma_h(\theta_0)-\Gamma(\theta_0)$ yields $\|\nabla J_h(\theta_0)-\nabla J(\theta_0)\|_2=\|\mathbb E[\Gamma_h(\theta_0)-\Gamma(\theta_0)]\|_2\le\mathbb E\|\Gamma_h(\theta_0)-\Gamma(\theta_0)\|_2\longrightarrow0$ by the assumed $L^1$ convergence. No state-payoff weak-convergence premise appears in this argument. [given, F7, F8, step 4.1, algebra] ∎
