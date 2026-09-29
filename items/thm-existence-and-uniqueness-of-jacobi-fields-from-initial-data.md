---
id: thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
kind: theorem
title: Existence and uniqueness of jacobi fields from initial data
status: draft
origin: pipeline
deps:
  - cor-the-tangent-space-of-an-n-manifold-has-dimension-n
  - def-covariant-derivative-along-a-curve
  - def-jacobi-field
  - def-levi-civita-connection
  - def-parallel-section-along-a-curve
  - def-riemann-curvature-four-tensor
  - def-riemannian-metric-and-riemannian-manifold
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - thm-existence-and-uniqueness-of-parallel-sections
  - thm-gram-schmidt-orthonormalisation
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Proposition 10.4 and proof, printed p.176 (PDF label P192); Theorem 4.12 and Exercise 4.11, printed pp.60-61 (PDF labels P76-77)"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 21, Proposition 21.2.4, printed p.157 (PDF label P164)"
---

## Statement

Let $(M,g)$ be an $n$-dimensional Riemannian manifold, let $I\subseteq\mathbb R$
be an interval with nonempty interior, and let $\gamma:I\to M$ be an
affinely parametrized geodesic. For every $a\in I$ and every
$v,w\in T_{\gamma(a)}M$, there is exactly one smooth Jacobi field $J$ along
all of $\gamma$ such that
$$J(a)=v,\qquad D_tJ(a)=w.$$
If $a$ is an included endpoint, $D_tJ(a)$ is interpreted one-sided. Constant
geodesics and dimension zero are included. The result requires no completeness,
compactness of $I$, or axiom of choice.

## Facts & Assumptions

**Given:** The Riemannian manifold, nondegenerate parameter interval, supplied affine geodesic, initial time $a$, and initial vectors $v,w$.

[F1] A Jacobi field is a smooth field satisfying $$D_t^2J+R(J,\dot\gamma)\dot\gamma=0$$ on the full interval, with one-sided endpoint derivatives; constant geodesics are included ([[def-jacobi-field]]).

[F2] Given a supplied smooth curve, connection, time, and fibre vector, there is exactly one parallel section on all of $I$ with that initial value; this requires no AC ([[thm-existence-and-uniqueness-of-parallel-sections]]).

[F3] A section is parallel when $D_tE=0$, and along the curve $$D_t(fE)=f'E+fD_tE$$ for smooth scalar $f$ ([[def-parallel-section-along-a-curve]], [[def-covariant-derivative-along-a-curve]]).

[F4] Levi-Civita parallel transport preserves inner products on every compact smooth curve segment ([[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]).

[F5] The smooth curvature four-tensor is $$\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$$ ([[def-riemann-curvature-four-tensor]]).

[F6] On a compact interval, every continuous linear matrix ODE with specified initial matrix has a unique solution on the full interval ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[F7] Each tangent space is an $n$-dimensional real inner-product space with positive-definite metric ([[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]], [[def-riemannian-metric-and-riemannian-manifold]]). Gram-Schmidt turns one finite basis into an orthonormal basis ([[thm-gram-schmidt-orthonormalisation]]).

[F8] The connection used here is the metric-compatible Levi-Civita connection on $TM$ ([[def-levi-civita-connection]]).

## Proof

1.1 If $M$ is empty there is no supplied geodesic. If $n=0$, then $T_{\gamma(a)}M=\{0\}$ and the only field along $\gamma$ is zero by [F1]; it is the unique Jacobi field with the only possible initial data. Assume $n>0$. The finite-dimensional inner-product space $T_{\gamma(a)}M$ has an orthonormal basis $e_1,\ldots,e_n$ by [F7]. [F1, F7, given]

1.2 For each $e_i$, [F2] gives a unique parallel field $E_i$ on all of $I$ with $E_i(a)=e_i$. By [F3], $D_tE_i=0$. For any $t\in I$, restrict to the compact segment between $a$ and $t$; [F4] shows the fields there remain orthonormal. Thus $E_1(t),\ldots,E_n(t)$ are an orthonormal basis of $T_{\gamma(t)}M$ for every $t$. Only the given finite basis is extended. [F2, F3, F4, F7, F8]

1.3 Put $T=\dot\gamma$ and define the smooth matrix $A(t)$ by $$A_{ij}(t)=\operatorname{Rm}(E_j(t),T(t),T(t),E_i(t)).$$ Writing a field as $J(t)=\sum_j x_j(t)E_j(t)$, [F3] gives $D_tJ=\sum_jx_j'E_j$ and $D_t^2J=\sum_jx_j''E_j$. The Jacobi equation [F1] therefore becomes $x''+A(t)x=0$. With $y=(x,x')$ it is the first-order system $$y'=C(t)y,\qquad C(t)=\begin{pmatrix}0&I_n\\-A(t)&0\end{pmatrix}.$$ The coefficient $C$ is smooth by [F5]. [F1, F3, F5]

2.1 Let $\xi,\eta\in\mathbb R^n$ be the coordinates of $v,w$ in the initial frame and put $y_0=(\xi,\eta)$. For each $t\ne a$, the closed segment $K_t$ between $a$ and $t$ is a compact interval contained in $I$. Apply [F6] to $C|_{K_t}$ and the $2n\times2n$ initial matrix whose first column is $y_0$ and whose other columns are zero. Its first column is the unique vector solution $y_t$ with value $y_0$ at $a$; uniqueness for vector solutions follows by placing any such solution in the first column of a matrix with other columns zero. If $s,t\in I$, their two segments lie in the compact interval spanned by $a,s,t$; uniqueness on that interval makes $y_s$ and $y_t$ agree wherever both are defined. These unique compact-interval solutions therefore glue to a well-defined solution $y$ on all of $I$. Around each interior time it agrees with a solution on a compact segment extending on both sides, and at included endpoints it has the corresponding one-sided derivatives. Smoothness follows from the smooth coefficient system. [F6, step 1.3, algebra]

3.1 Write $y=(x,p)$ and set $J(t)=\sum_i x_i(t)E_i(t)$. The system gives $p=x'$ and $p'=-A x$, so [F3] yields $$D_tJ=\sum_i p_iE_i,\qquad D_t^2J=-\sum_i(Ax)_iE_i =-R(J,T)T.$$ Thus [F1] makes $J$ Jacobi on all of $I$. Its initial coordinates are $x(a)=\xi$ and $p(a)=\eta$, so $J(a)=v$ and $D_tJ(a)=w$. This proves existence, including when $\gamma$ is constant, for which $A=0$. [F1, F3, step 1.3, step 2.1]

4.1 If $\widetilde J$ is another Jacobi field with the same initial data, its coordinates in the same parallel frame satisfy the same system and initial value. Uniqueness in [F6] on each compact segment between $a$ and $t$ gives $\widetilde J(t)=J(t)$ for every $t\in I$, so $\widetilde J=J$. Included endpoints use the one-sided convention from [F1]. The finite basis and the unique gluing use no choice axiom; the argument imposes no compactness or completeness condition on $I$ or $M$. [F1, F6, step 1.2, step 2.1, step 3.1] ∎
