---
title: Twisted cycle equilibria and transverse positivity
status: draft
research_item: prop-expander-prereq-cycle-twisted-states
dependency_level: 2
---

## Prerequisites

- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus)
- [prop-expander-prereq-laplacian-support-kernel](item-prop-expander-prereq-laplacian-support-kernel)
- [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)
- [math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges)
- [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)
- [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)
- [math:cor-second-order-taylor-expansion-with-the-hessian](https://alphabetamath.cc/item/cor-second-order-taylor-expansion-with-the-hessian)


## Statement

Let $n\ge5$ be an integer and let $V=\{0,\ldots,n-1\}$, with indices read modulo $n$. The unweighted cycle has an edge between $j$ and $j+1$ for each $j\in V$. On the phase torus $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$, consider the homogeneous cosine-difference potential $U(\theta)=\sum_{j=0}^{n-1}(1-\cos(\theta_{j+1}-\theta_j))$ and its negative-gradient system $\dot\theta=-\nabla U(\theta)$. An equilibrium is a configuration at which this vector field vanishes. Let $L$ be the cycle Laplacian, $(Lf)_j=2f_j-f_{j-1}-f_{j+1}$.

The winding-one configuration $\theta^*_j=2\pi j/n$ modulo $2\pi$ is an equilibrium. Its Hessian is $\nabla^2U(\theta^*)=\cos(2\pi/n)L$ and is positive definite on $\mathbf1^\perp=\{f\in\mathbb R^V:\sum_j f_j=0\}$, the orthogonal complement of the common rotation direction $\mathbf1=(1,\ldots,1)$. The rotation class of $\theta^*$ is a strict local minimum of the induced potential in relative-phase coordinates. This is a local-landscape assertion; it does not assert positive-volume point attraction.

## Facts & Assumptions

[F1] The phase torus has angular charts given by local real representatives. A function depending only on phase differences descends to the rotation quotient, which is homeomorphic to the relative-phase torus via $\theta\mapsto(\theta_j-\theta_0)_{j\ne0}$ ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus), [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)).

[F2] Sine and cosine are $2\pi$-periodic, $\cos'=-\sin$, and $\sin'=\cos$ ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)). Cosine is even and sine is odd, as follows from the phasor identity $e^{-it}=\overline{e^{it}}$ and its real and imaginary parts in the same supplier.

[F3] For symmetric weights and an even twice continuously differentiable periodic pair potential $v$, the gradient and Hessian quadratic form are the finite sums stated in [prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus).

[F4] For a connected nonnegatively weighted support graph, the Laplacian quadratic form is the sum of weighted squared edge differences and its kernel consists of the constant functions ([prop-expander-prereq-laplacian-support-kernel](item-prop-expander-prereq-laplacian-support-kernel)).

[F5] Cosine is strictly decreasing on $[0,\pi]$ and $\cos(\pi/2)=0$ ([math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges), [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)).

[F6] The Cauchy–Schwarz inequality bounds the square of a finite sum by the number of terms times the sum of their squares ([math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)). For a $C^2$ scalar field, the second-order Taylor formula has remainder $o(\|h\|^2)$ ([math:cor-second-order-taylor-expansion-with-the-hessian](https://alphabetamath.cc/item/cor-second-order-taylor-expansion-with-the-hessian)).

## Proof

**Given:** An integer $n\ge5$, the cycle and the configuration in the Statement.

**Goal:** Prove equilibrium, the Hessian identity and transverse positivity, and strict minimality modulo common rotation.

1.1 Set $\delta=2\pi/n$ and $v(t)=1-\cos t$. By [F2], $v$ is even and periodic, with $v'(t)=\sin t$ and $v''(t)=\cos t$; it is $C^2$ by those derivative formulas. Use weight one on each cycle edge and zero otherwise. Since $n\ge5$, the two neighbors of each vertex are distinct and the pair-potential expression in [F3] counts each edge once. At $\theta^*$ the two incident differences at vertex $j$ are congruent to $\delta$ and $-\delta$ modulo $2\pi$, including across the edge from $n-1$ to $0$. Thus [F2] and [F3] give $(\nabla U(\theta^*))_j=\sin\delta+\sin(-\delta)=0$. Therefore the negative-gradient vector field vanishes. [given, F2, F3, algebra]

1.2 Use the relative-coordinate section with vertex $0$ fixed. For a sufficiently small relative-coordinate displacement $h=(h_1,\ldots,h_{n-1})$, put $h_0=0$ and represent the nearby class by $\theta^*+h$. The descended potential in this chart is $C^2$ by [F1] and [F2]. For each $j$, telescoping along the path from $0$ to $j$ and [F6] give $h_j^2\le n\sum_{k=0}^{n-1}(h_{k+1}-h_k)^2$, with indices modulo $n$. Summing over $j$ yields $\|h\|^2\le n^2\sum_k(h_{k+1}-h_k)^2$. [F1, F2, F6, algebra]

2.1 At every edge, the cosine of the phase difference is $c=\cos\delta$. For every real $f$, [F3] gives $f^T\nabla^2U(\theta^*)f=c\sum_j(f_{j+1}-f_j)^2$. The cycle is connected because consecutive edges give a path between any two vertices; [F4] identifies the sum as $f^TLf$. Both matrices are symmetric, so equality of their quadratic forms for every $f$ implies equality of matrices by evaluating on coordinate vectors and their pairwise sums. Hence $\nabla^2U(\theta^*)=cL$. [F2, F3, F4, step 1.1, algebra]

3.1 Since $n\ge5$, $0<\delta<\pi/2$; [F5] therefore gives $c>0$. By [F4], the connected cycle Laplacian has nonnegative quadratic form and kernel consisting of constants. Consequently $f^T\nabla^2U(\theta^*)f>0$ for each nonzero $f\in\mathbf1^\perp$, since a constant vector with zero coordinate sum is zero. [F4, F5, step 2.1, algebra]

4.1 The first-order Taylor term vanishes by step 1.1. Combining [F6], steps 2.1 and 1.2 gives $U(\theta^*+h)-U(\theta^*)\ge c\|h\|^2/(2n^2)+o(\|h\|^2)$. Because $c>0$, the right side is positive for all sufficiently small nonzero $h$. The relative-coordinate homeomorphism in [F1] identifies these displacements with nearby distinct rotation classes, proving strict local minimality. The argument establishes no basin or measure assertion. [F1, F6, step 1.1, step 2.1, step 3.1, step 1.2, algebra] ∎
