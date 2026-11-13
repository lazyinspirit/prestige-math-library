---
title: Strict saddle critical point
status: draft
research_item: def-expander-sync-strict-saddles
dependency_level: 3
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 3–4, Section 1, strict-saddle parenthesis
      statement: A strict saddle point of the energy is a state at which its Hessian
        has a strictly negative eigenvalue.
      hypotheses: The homogeneous Kuramoto energy on the finite graph phase space; the
        passage concerns convergence to saddle points.
      reading_limits: The supplied article text at the cited passage was inspected for
        terminology. This citation attributes the definition and does not supply
        its mathematical justification.
---

PDF p. 3: ` Section 1, strict-saddle parenthesis `; PDF p. 4: ` Section 1, strict-saddle parenthesis `

## Prerequisites

- [def-expander-sync-energy](item-def-expander-sync-energy)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [math:def-hessian-and-euclidean-critical-point](https://alphabetamath.cc/item/def-hessian-and-euclidean-critical-point)
- [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)


## Definition

Let $G=(V,E)$ and its homogeneous Kuramoto energy $\mathcal E_G$ be as in [def-expander-sync-energy](item-def-expander-sync-energy), on the phase torus $T_V=(S^1)^V$. In angular coordinates, a critical point is a state $\theta$ at which every first partial derivative of $\mathcal E_G$ is zero. Its Hessian $\nabla^2\mathcal E_G(\theta)$ is the real matrix of second partial derivatives in those coordinates. An eigenvalue $\lambda$ of this matrix is a scalar for which $\nabla^2\mathcal E_G(\theta)v=\lambda v$ for some nonzero vector $v$.

A strict saddle is a critical point $\theta$ for which $\nabla^2\mathcal E_G(\theta)$ has a strictly negative eigenvalue.

## Facts & Assumptions

[F1] The energy is the finite sum $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$, evaluated using real lifts ([def-expander-sync-energy](item-def-expander-sync-energy)).

[F2] Angular chart transitions on the phase torus are locally translations by vectors in $(2\pi\mathbb Z)^V$ ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)).

[F3] Sine and cosine and their stated derivatives are periodic under shifts by integer multiples of $2\pi$; the derivative and finite-sum rules apply ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F4] The gradient and Hessian consist respectively of first and second partial derivatives, and a Euclidean critical point has zero gradient ([math:def-hessian-and-euclidean-critical-point](https://alphabetamath.cc/item/def-hessian-and-euclidean-critical-point)).

[F5] For real functions $f,g$, if $f$ is differentiable at $c$, $g$ is differentiable at $f(c)$, and $g\circ f$ is defined near $c$, then $(g\circ f)'(c)=g'(f(c))f'(c)$. The sum and product rules also hold ([math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)).

## Justification

**Given:** A phase state $\theta$ and angular charts containing it.

**Goal:** Show that the critical-point and negative-eigenvalue conditions do not depend on the chart or lift.

1.1 Holding all but one angular coordinate fixed makes each phase difference in [F1] an affine real function. The chain, sum and product rules in [F5], together with the trigonometric derivatives in [F3], therefore give the first partial derivatives of the finite energy expression. Differentiating once more in any angular coordinate uses the same rules and gives all second partial derivatives. By [F2], two chart coordinates near $\theta$ differ by a constant lattice translation. The periodicity in [F3] and these differentiation rules show that the corresponding first and second partial derivatives agree at $\theta$. [F1, F2, F3, F5]

2.1 By [F4] and step 1.1, the gradient and Hessian have the same entries in either chart. Thus zero gradient is independent of the chart, and the Hessian has the same eigenvalues in either chart. The stated conditions therefore define an unambiguous subset of the phase torus. [F4, step 1.1] ∎

## Source notes

The strict-saddle terminology is attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 3–4, Section 1. The justification uses the mathematical suppliers above.
