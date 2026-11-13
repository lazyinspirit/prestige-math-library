---
title: Differentiation of symmetric periodic pair potentials
status: published
research_item: prop-expander-prereq-pair-potential-calculus
dependency_level: 1
---

## Prerequisites

- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)
- [math:def-directional-and-partial-derivatives](https://alphabetamath.cc/item/def-directional-and-partial-derivatives)
- [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)


## Statement

Let $X$ be a nonempty finite set, let $w_{xy}=w_{yx}$ be arbitrary real numbers for $x,y\in X$, and let $v:\mathbb R\to\mathbb R$ be even, twice continuously differentiable and $2\pi$-periodic. Even means $v(-t)=v(t)$, and $2\pi$-periodic means $v(t+2\pi)=v(t)$ for every real $t$. For $\theta\in\mathbb R^X$ define $U(\theta)=\frac12\sum_{x,y\in X}w_{xy}v(\theta_x-\theta_y)$. Write $(\nabla U)_x=\partial U/\partial\theta_x$ and let $\nabla^2U$ be the matrix of second partial derivatives. Then, for every $f\in\mathbb R^X$,

$$(\nabla U)_x=\sum_{y\in X}w_{xy}v'(\theta_x-\theta_y),$$

$$f^T\nabla^2U f=\frac12\sum_{x,y\in X}w_{xy}v''(\theta_x-\theta_y)(f_x-f_y)^2.$$

The terms with $x=y$ contribute zero to both displayed expressions. The identities hold for signed weights; nonnegativity is an additional hypothesis when needed for a later inequality.

## Facts & Assumptions

[F1] Finite sums of differentiable real-valued functions may be differentiated termwise ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)). For a real constant $c$ and a differentiable real function $g$, the product rule gives $(cg)'=cg'$: the constant function has derivative zero because all its difference quotients are zero ([math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)).

[F2] The derivative of a composite is the composite of its derivatives when the constituent maps are differentiable ([math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)).

[F3] A coordinate partial derivative $\partial_z F(\theta)$ is the derivative at $t=0$ of the real line restriction $t\mapsto F(\theta+t e_z)$, where $(e_z)_x=\delta_{xz}$. Iterated partial derivatives apply this definition again to the first partial maps ([math:def-directional-and-partial-derivatives](https://alphabetamath.cc/item/def-directional-and-partial-derivatives)).

[A1] The set, weights, function and vectors satisfy the hypotheses in the Statement.

## Proof

**Given:** $X$, $w$, $v$, $\theta$ and $f$ as in the Statement.

**Goal:** Prove the gradient and Hessian quadratic-form identities, including the diagonal and signed-weight assertions.

1.1 Differentiate $v(-t)=v(t)$ using [F2]. This gives $-v'(-t)=v'(t)$, so $v'$ is odd and in particular $v'(0)=0$. By [F3], compute coordinate derivatives on $\theta+t e_z$. On this line $\theta_x-\theta_y$ becomes $\theta_x-\theta_y+t(\delta_{xz}-\delta_{yz})$, whose derivative is $\delta_{xz}-\delta_{yz}$ directly from its difference quotient; here $\delta_{xz}$ is $1$ if $x=z$ and $0$ otherwise. By [F1] and [F2], $\partial_z U=\frac12\sum_{x,y}w_{xy}v'(\theta_x-\theta_y)(\delta_{xz}-\delta_{yz})$. [A1, F1, F2, F3, algebra]

2.1 The first Kronecker-delta sum is $\frac12\sum_yw_{zy}v'(\theta_z-\theta_y)$. In the second, exchange the two indices and use symmetry of $w$ and oddness of $v'$ from step 1.1; it becomes the same sum. Their sum is the asserted gradient component. The term $y=z$ is zero by $v'(0)=0$. [A1, step 1.1, algebra]

3.1 Since $v$ is twice continuously differentiable, differentiating the first partial maps along coordinate lines as in [F3] and applying [F1] and [F2] gives $\partial_a\partial_b U=\frac12\sum_{x,y}w_{xy}v''(\theta_x-\theta_y)(\delta_{xa}-\delta_{ya})(\delta_{xb}-\delta_{yb})$. Multiplying by $f_a f_b$ and summing over $a,b$ gives the stated quadratic form, because $\sum_a f_a(\delta_{xa}-\delta_{ya})=f_x-f_y$. For $x=y$ this factor is zero. No step uses a sign restriction on $w$, completing the proof. [A1, F1, F2, F3, step 1.1, step 2.1, algebra] ∎
