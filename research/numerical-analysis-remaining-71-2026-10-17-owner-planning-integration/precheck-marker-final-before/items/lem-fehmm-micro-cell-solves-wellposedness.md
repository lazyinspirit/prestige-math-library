---
id: lem-fehmm-micro-cell-solves-wellposedness
kind: lemma
title: Well-posedness of the finite FE-HMM micro solves
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - alg-fehmm-periodic-cell-micro-macro
  - def-periodic-zero-mean-cell-space
  - def-periodic-scalar-diffusion-data
  - lem-periodic-cell-poincare
  - lem-unit-cube-h01-separability-and-l2-compactness
  - thm-matching-continuous-piecewise-polynomials-are-wkp
  - thm-zero-boundary-piecewise-polynomials-in-w10p
  - thm-lax-milgram
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Patrick Ciarlet Jr. and Christian Stohrer, Finite-element heterogeneous multiscale method for the Helmholtz equation"
      url: "https://comptes-rendus.academie-sciences.fr/mathematique/item/10.1016/j.crma.2014.07.006.pdf"
      locator: "§§2–3: FE-HMM quadrature samples, periodic micro coupling and macro assembly."
verification:
  precheck: n/a
---
## Statement

For every macro cell $K$ in [[alg-fehmm-periodic-cell-micro-macro]], the coefficient $b_K$ satisfies $\lambda\le b_K\le\Lambda$. For each $p\in\mathbb R^2$, both the full cell problem on $V_\#$ and its restriction to $W_{\mathcal M}$ have unique solutions $w_{K,p}$ and $w^h_{K,p}$. The tensors
$$A_K^{\rm ex}p=\int_Yb_K(p+\nabla w_{K,p}),\qquad A_K^hp=\int_Yb_K(p+\nabla w^h_{K,p})$$
are symmetric and satisfy $\lambda I\le A_K^{\rm ex},A_K^h\le\Lambda I$. Consequently the macro FE-HMM system in the algorithm has a unique solution.

## Facts & Assumptions

**Given:** The coefficient bound, full periodic cell space, finite-dimensional periodic P1 subspace, periodic gradients of mean zero, zero-boundary macro space, and real Lax--Milgram.

[F1] [[alg-fehmm-periodic-cell-micro-macro]]: $W_{\mathcal M}$ is finite-dimensional and is a subspace of $V_\#$; $b_K(y)=a(x_K/\epsilon+ry)$.

[F2] [[def-periodic-zero-mean-cell-space]] and [[lem-periodic-cell-poincare]]: $V_\#$ is a Hilbert space in the gradient norm and $\int_Y\nabla v=0$ for every $v\in V_\#$.

[F3] [[def-periodic-scalar-diffusion-data]]: $\lambda\le b_K\le\Lambda$ almost everywhere because translation/dilation preserves the a.e. coefficient bounds.

[F4] [[thm-lax-milgram]]: bounded coercive bilinear forms on Hilbert spaces have unique solutions.

[F5] [[thm-matching-continuous-piecewise-polynomials-are-wkp]] and [[thm-zero-boundary-piecewise-polynomials-in-w10p]]: the finite macro space is contained in $H^1_0(Q)$.

[F6] [[lem-unit-cube-h01-separability-and-l2-compactness]]: $\|v\|_2\le\|\nabla v\|_2$ on $H^1_0(Q)$.

[A1] [[def-countable-choice]]: the periodic Sobolev and Hilbert conventions use Countable Choice; no stronger axiom is required here.

## Proof



1.1 For fixed $K,p$, on $V_\#$ define $c_K(u,v)=\int_Yb_K\nabla u\cdot\nabla v$ and $F_{K,p}(v)=-\int_Yb_Kp\cdot\nabla v$. The bounds [F3] give $|c_K(u,v)|\le\Lambda\|\nabla u\|_2\|\nabla v\|_2$, $c_K(v,v)\ge\lambda\|\nabla v\|_2^2$, and $|F_{K,p}(v)|\le\Lambda|p|\|\nabla v\|_2$. By [F2], [F4] gives a unique solution $w_{K,p}$. The space $W_{\mathcal M}$ is finite dimensional, and its restricted gradient inner product is positive definite because it is a subspace of the mean-zero space $V_\#$; finite-dimensional completeness makes it Hilbert. The same boundedness and coercivity estimates therefore give the unique $w^h_{K,p}$ by [F4]. [F3, F2, F4, F1, A1, algebra]

2.1 Each solution is linear in $p$ by uniqueness. For either space $X=V_\#$ or $X=W_\mathcal M$, the variational equation says $w_{K,p}^X$ minimizes $J_{K,p}(z)=\int_Yb_K|p+\nabla z|^2$ over $X$: expanding at the solution cancels the cross term and leaves $\int b_K|\nabla(z-w)|^2\ge0$. For $p,q$, testing the $q$ equation with $w_{K,p}^X$ shows $p\cdot A_K^Xq=\int_Yb_K(p+\nabla w_{K,p}^X)\cdot(q+\nabla w_{K,q}^X),$ so the tensor is symmetric. Since $\int_Y\nabla w_{K,p}^X=0$ by [F2], Jensen gives $J_{K,p}(w_{K,p}^X)\ge\lambda|p|^2$; the competitor zero gives it at most $\Lambda|p|^2$. [F2, F3, step 1.1, algebra]

3.1 By [F5] the macro space is a finite-dimensional subspace of $H^1_0(Q)$. For $U\in V_H$, [F1] and step 2.1 imply $B_H(U,U)=\sum_K|K|\nabla U|_K\cdot A_K^h\nabla U|_K\ge\lambda\|\nabla U\|_{L^2(Q)}^2.$ This is positive for every nonzero $U$; [F6] ensures the gradient seminorm is a norm on $V_H$. The load is bounded by $\|f\|_2\|U\|_2\le\|f\|_2\|\nabla U\|_2$. Thus finite-dimensional Lax--Milgram [F4] gives a unique macro solution; if the space is zero, its sole element is the unique solution by definition. The micro and macro systems are therefore nonsingular. [F5, F1, step 2.1, F6, F4, algebra] ∎
