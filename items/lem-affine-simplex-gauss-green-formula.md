---
id: lem-affine-simplex-gauss-green-formula
kind: lemma
title: Gauss–Green formula on an affine simplex
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-matching-affine-simplicial-meshes, lem-affine-pullback-weak-derivatives-and-scaling, cor-vector-valued-ftc-and-lipschitz-bound, thm-tonelli-and-fubini-for-completed-product-measures, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 14
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "§14.1, printed pp. 156–157: the simplex divergence theorem in the Raviart–Thomas unisolvence proof."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 6
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§6.5, printed pp. 130–131: normal-flux transformation and element integration by parts."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. Let $K$ be a nondegenerate affine $d$-simplex and let
$G\in C^1(\overline K;\mathbb R^d)$. If $n_{K,F}$ is the outward unit
normal on each facet $F$, then
$$\int_K\operatorname{div}G\,dx=\sum_{F\subset\partial K}\int_FG\cdot n_{K,F}\,dS.$$
For an orientation-preserving affine map $F_K(\widehat x)=b+A\widehat x$,
the oriented area element transforms as
$$n_{K,F}\,dS=\det(A)A^{-T}\widehat n_{\widehat F}\,d\widehat S.$$

## Facts & Assumptions

**Given:** Countable Choice, a nondegenerate affine simplex $K$, its fixed reference simplex, and a continuously differentiable vector field on $\overline K$.

[F1] The reference open simplex is $\{\widehat x_i>0,\ \sum_i\widehat x_i<1\}$; every physical cell is its affine image. ([[def-matching-affine-simplicial-meshes]])

[F2] For affine maps, weak derivatives transform by the constant Jacobian chain rule, and volume measure transforms by $|\det A|$. ([[lem-affine-pullback-weak-derivatives-and-scaling]])

[F3] The one-dimensional fundamental theorem of calculus gives $\int_a^b f'(t)\,dt=f(b)-f(a)$ for a continuously differentiable vector-valued function. ([[cor-vector-valued-ftc-and-lipschitz-bound]])

[F4] Fubini's theorem permits iterated integration of the continuous bounded functions on the bounded simplex used below. ([[thm-tonelli-and-fubini-for-completed-product-measures]])

[F5] A C1 diffeomorphism obeys Lebesgue change of variables with the absolute determinant. For the bounded integrands here, apply the nonnegative formula separately to positive and negative parts. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]])

[F6] The cited change-of-variables theorem assumes Countable Choice. ([[def-countable-choice]])

## Proof

1.1 First take $\widehat S_d$. Fix $i$ and write $y=(\widehat x_j)_{j\ne i}$, where $y_j>0$ and $\sum_{j\ne i}y_j<1$. The $i$th coordinate ranges from $0$ to $g(y):=1-\sum_{j\ne i}y_j$. By [F3], $$\int_0^{g(y)}\partial_iG_i(y,t)\,dt=G_i(y,g(y))-G_i(y,0).$$ Integrating in $y$ and using [F4] gives the volume integral of $\partial_iG_i$ as the difference of these two graph integrals. The lower graph is the coordinate facet with outward normal $-e_i$ and area factor $1$, hence its flux contribution is $-G_i(y,0)$. The upper facet is the graph $\widehat x_i=1-\sum_{j\ne i}\widehat x_j$: its tangent Gram matrix is $I_{d-1}+\mathbf1\mathbf1^T$, whose eigenvalues are $1$ (multiplicity $d-2$) and $d$, so its area factor is $\sqrt d$. Its outward unit normal is $d^{-1/2}(1,\ldots,1)$, so the $i$th component of normal times area factor is $1$. Thus the upper graph integral is exactly its $i$th flux contribution. Other coordinate facets have zero $i$th normal component. Summing over $i$ accounts for every component of the boundary flux and proves the formula on $\widehat S_d$. [F1, F3, F4, given, algebra]

1.2 Let $\widehat\tau_1,\ldots,\widehat\tau_{d-1}$ be an oriented tangent basis for a reference facet, with orientation chosen so its oriented area vector is $\widehat n\,d\widehat S$. By the determinant definition of oriented area vector, for every $w\in\mathbb R^d$, $$w\cdot(n_{K,F}\,dS)=\det(A\widehat\tau_1,\ldots,A\widehat\tau_{d-1},w) =\det(A)\det(\widehat\tau_1,\ldots,\widehat\tau_{d-1},A^{-1}w) =w\cdot(\det(A)A^{-T}\widehat n\,d\widehat S).$$ Equality against every $w$ gives the cofactor area-vector formula. Because $\det A>0$, $A^{-T}\widehat n$ points to the exterior side corresponding to $\widehat n$, so the formula has the outward orientation. [F1, given, algebra]

2.1 Define $\widehat G(\widehat x):=\det(A)A^{-1}G(b+A\widehat x)$. The chain rule gives $$\operatorname{div}_{\widehat x}\widehat G =\det(A)\sum_{j,i,l}(A^{-1})_{ji}(\partial_{x_l}G_i)(F(\widehat x))A_{lj} =\det(A)(\operatorname{div}_xG)(F(\widehat x)),$$ since $\sum_jA_{lj}(A^{-1})_{ji}=\delta_{li}$. Applying the reference identity of step 1.1 to $\widehat G$, and using [F5] to change variables in its bounded volume integrand, gives the physical volume integral. On each facet, step 1.2 gives $$\widehat G\cdot\widehat n\,d\widehat S =G(F(\widehat x))\cdot\det(A)A^{-T}\widehat n\,d\widehat S =G\cdot n_{K,F}\,dS.$$ Summing the facet identities proves the stated Gauss–Green formula on $K$. [F2, F5, F6, step 1.1, step 1.2, algebra] ∎
