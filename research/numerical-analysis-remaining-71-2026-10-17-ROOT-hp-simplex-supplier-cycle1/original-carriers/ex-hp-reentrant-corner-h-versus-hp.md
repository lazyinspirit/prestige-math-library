---
id: ex-hp-reentrant-corner-h-versus-hp
kind: example
title: A reentrant-corner mode has a fixed-degree h lower bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - cor-finite-dimensional-subspaces-are-closed
  - lem-hp-simplex-p-explicit-conforming-interpolant
  - thm-hp-corner-exponential-energy-convergence
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
axiom_use: "The verified local singularity and fixed-degree h lower bound are choice-free; the planned hp comparison remains escalated and would inherit Countable Choice through Céa."
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: Martin Vohralík, Finite Element Methods, Chapter 6, hp finite elements
      url: https://who.rocq.inria.fr/Martin.Vohralik/Enseig/FEM/FEM.pdf
      locator: "Theorems 6.2.1 and 6.3.1, printed pp. 55–58: hp corner-rate context; relevant local approximation proofs are omitted."
    - title: Yanchen He, Paul Houston, Christoph Schwab, and Thomas P. Wihler, Exponential Convergence of hp-ILGFEM, version 1
      url: https://arxiv.org/pdf/2404.18569
      locator: "§2.3, corner-weighted analytic regularity; §4.1, geometric corner mesh and degree law. The present item proves only its local h lower bound."
---

## Example

In the sector $0<r<1$, $0<\theta<3\pi/2$, let $u(r,\theta)=r^{2/3}\sin(2\theta/3)$. This corner mode is in $H^1$ but not $H^2$. Let $\widehat T$ be a fixed nondegenerate closed triangle with one vertex at the origin and $\widehat T\setminus\{0\}\subset\Omega$. Choose $h_0>0$ so that $T_h:=h\widehat T\subset\overline\Omega$ for every $0<h\le h_0$. Then, for each fixed polynomial degree $p$, there is $c_p>0$ such that
$$
\inf_{q\in\mathbb P_p(T_h)}|u-q|_{H^1(T_h)}\ge c_p h^{2/3}.
$$
This proves the fixed-degree local h lower bound. The geometric hp upper comparison from the assigned design is recorded below as an unresolved dependency, not as a conclusion of this example.

## Facts & Assumptions

**Given:** Reentrant sector angle $3\pi/2$, $\lambda=2/3$, a fixed nondegenerate closed triangle $\widehat T$ with one vertex at the origin and $\widehat T\setminus\{0\}\subset\Omega$, and $h_0>0$ such that $T_h=h\widehat T\subset\overline\Omega$ for $0<h\le h_0$, and integer $p\ge0$.

[F1] [[def-hp-variable-degree-spaces-on-matching-meshes]]: on an affine simplex of size $h$, the local degree-$p$ approximation space is $\mathbb P_p$ and h-refinement scales cells by affine maps.

[F2] [[cor-finite-dimensional-subspaces-are-closed]]: every finite-dimensional subspace of a normed space is closed.

## Verification

1.1 With $\lambda=2/3$, polar differentiation gives $|u|=r^\lambda|\sin(\lambda\theta)|$ and $|\nabla u|^2=\lambda^2r^{2\lambda-2}$. The area element is $r\,dr\,d\theta$, so $\int_\Omega |u|^2<\infty$ because $\int_0^1r^{2\lambda+1}\,dr<\infty$, and $\int_\Omega|\nabla u|^2<\infty$ because $\int_0^1r^{2\lambda-1}\,dr<\infty$. The origin is on the sector boundary, so $u$ is smooth in the open sector and these classical derivatives are its weak derivatives; hence $u\in H^1(\Omega)$. [given, algebra]

2.1 In the polar orthonormal frame the Hessian components are $u_{rr}=\lambda(\lambda-1)r^{\lambda-2}\sin(\lambda\theta)$, $u_{r\theta}^{\mathrm{orth}}=\lambda(\lambda-1)r^{\lambda-2}\cos(\lambda\theta)$, and $u_{\theta\theta}^{\mathrm{orth}}=\lambda(1-\lambda)r^{\lambda-2}\sin(\lambda\theta)$. Therefore $|D^2u|^2=2\lambda^2(1-\lambda)^2r^{2\lambda-4}$, whose area integral contains $\int_0^1r^{2\lambda-3}\,dr=\int_0^1r^{-5/3}\,dr=\infty$. If $u$ were in $H^2$, its weak Hessian would agree with its classical Hessian on every punctured sub-sector, contradicting this divergent integral. Thus $u\notin H^2$. [given, step 1.1, algebra]

3.1 Define $c_p:=\inf_{q\in\mathbb P_p(\widehat T)}\|\nabla(u-q)\|_{L^2(\widehat T)}$. The gradients of $\mathbb P_p(\widehat T)$ form a finite-dimensional subspace of $L^2(\widehat T;\mathbb R^2)$, hence are closed by [F2]. If $c_p=0$, then $\nabla u=\nabla q$ almost everywhere for some $q\in\mathbb P_p(\widehat T)$. On the punctured triangle both gradients are continuous, so equality almost everywhere forces equality everywhere there; differentiating on that open set would make $D^2u=D^2q$ bounded near the corner, contrary to step 2.1. Therefore $c_p>0$. [F1, F2, step 2.1, given]

4.1 For any $q_h\in\mathbb P_p(T_h)$ define $\widehat q(y)=h^{-2/3}q_h(hy)$; then $\widehat q\in\mathbb P_p(\widehat T)$ and, by homogeneity of $u$ and the change of variables $x=hy$, $\|\nabla_x(u-q_h)\|_{L^2(T_h)}=h^{2/3}\|\nabla_y(u-\widehat q)\|_{L^2(\widehat T)}\ge c_ph^{2/3}$. Taking the infimum over $q_h$ proves the claimed fixed-degree h lower bound. [F1, step 3.1, given, algebra] ∎

## Planned hp comparison — unresolved

The planned comparison requires the geometric mesh law, uniform degree $p_k\simeq ck$, the count $N_k=O(k^3)$, and a proved p-explicit conforming simplex approximation/lift. The assigned target is [[thm-hp-corner-exponential-energy-convergence]] with required supplier [[lem-hp-simplex-p-explicit-conforming-interpolant]]. Both remain escalated; this example does not assert the exponential hp upper bound.
