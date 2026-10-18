---
id: ex-hp-reentrant-corner-h-versus-hp
kind: example
title: A reentrant-corner mode separates h and hp approximation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - cor-finite-dimensional-subspaces-are-closed
  - thm-hp-corner-exponential-energy-convergence
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
axiom_use: "The local singularity and h lower bound are choice-free. The hp comparison assumes Countable Choice through the conforming corner theorem."
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
      locator: "§2.3, corner-weighted analytic regularity; §4.1, geometric corner mesh and degree law. The repaired item supplies both the local h lower bound and the hp upper comparison."
---

## Example

Assume Countable Choice for the hp comparison. Let $\Omega=((-1,1)\times(0,1))\cup((-1,0)\times(-1,1))$ be the L-shaped polygon, with polar angle $0<\theta<3\pi/2$ about its reentrant corner. Put $u(r,\theta)=r^{2/3}\sin(2\theta/3)$. It has zero trace on the two edges ending at the origin, belongs to $H^1(\Omega)$, and does not belong to $H^2(\Omega)$. Let $\widehat T$ be a fixed nondegenerate triangle with a vertex at the origin and its punctured interior in the sector. For $T_h=h\widehat T\subset\overline\Omega$ and every fixed degree $p$, there is $c_p>0$ such that
$$\inf_{q\in\mathbb P_p(T_h)}|u-q|_{H^1(T_h)}\ge c_ph^{2/3}.$$
This lower bound also bounds the global error below for any fixed-degree finite-element mesh containing that corner cell. In contrast, on the geometric meshes and uniform degrees $p_k\simeq k$ of [[thm-hp-corner-exponential-energy-convergence]], with zero traces imposed on the two edges ending at the origin, the best conforming hp error satisfies
$$\inf_{v\in V_k}|u-v|_{H^1(\Omega)}\le Ce^{-bN_k^{1/3}}.$$
No zero trace is imposed on the outer polygon edges, where this mode is nonzero.

## Facts & Assumptions

**Given:** Countable Choice for the hp comparison; the L-shaped polygon and mode just defined; reentrant sector angle $3\pi/2$, $\lambda=2/3$, a fixed nondegenerate closed triangle $\widehat T$ with one vertex at the origin and $\widehat T\setminus\{0\}\subset\Omega$, and $h_0>0$ such that $T_h=h\widehat T\subset\overline\Omega$ for $0<h\le h_0$, and integer $p\ge0$.

[F1] [[def-hp-variable-degree-spaces-on-matching-meshes]]: on an affine simplex of size $h$, the local degree-$p$ approximation space is $\mathbb P_p$ and h-refinement scales cells by affine maps.

[F2] [[cor-finite-dimensional-subspaces-are-closed]]: every finite-dimensional subspace of a normed space is closed.

[F3] [[thm-hp-corner-exponential-energy-convergence]] gives the geometric hp error bound for its explicitly weighted-analytic class, geometric mesh, degree law, and homogeneous trace hypotheses, under Countable Choice.

## Verification

1.1 With $\lambda=2/3$, polar differentiation gives $|u|=r^\lambda|\sin(\lambda\theta)|$ and $|\nabla u|^2=\lambda^2r^{2\lambda-2}$. The polygon lies in the sector with $0<r<\sqrt2$, so polar integration shows $\int_\Omega |u|^2<\infty$ and $\int_\Omega|\nabla u|^2<\infty$, since the radial exponents are $2\lambda+1$ and $2\lambda-1$. The mode is smooth in the open polygon and these derivatives are its weak derivatives, so $u\in H^1(\Omega)$. [given, algebra]

2.1 In the polar orthonormal frame the Hessian components are $u_{rr}=\lambda(\lambda-1)r^{\lambda-2}\sin(\lambda\theta)$, $u_{r\theta}^{\mathrm{orth}}=\lambda(\lambda-1)r^{\lambda-2}\cos(\lambda\theta)$, and $u_{\theta\theta}^{\mathrm{orth}}=\lambda(1-\lambda)r^{\lambda-2}\sin(\lambda\theta)$. Therefore $|D^2u|^2=2\lambda^2(1-\lambda)^2r^{2\lambda-4}$, whose area integral contains $\int_0^1r^{2\lambda-3}\,dr=\int_0^1r^{-5/3}\,dr=\infty$. If $u$ were in $H^2$, its weak Hessian would agree with its classical Hessian on every punctured sub-sector, contradicting this divergent integral. Thus $u\notin H^2$. [given, step 1.1, algebra]

3.1 Define $c_p:=\inf_{q\in\mathbb P_p(\widehat T)}\|\nabla(u-q)\|_{L^2(\widehat T)}$. The gradients of $\mathbb P_p(\widehat T)$ form a finite-dimensional subspace of $L^2(\widehat T;\mathbb R^2)$, hence are closed by [F2]. If $c_p=0$, then $\nabla u=\nabla q$ almost everywhere for some $q\in\mathbb P_p(\widehat T)$. On the punctured triangle both gradients are continuous, so equality almost everywhere forces equality everywhere there; differentiating on that open set would make $D^2u=D^2q$ bounded near the corner, contrary to step 2.1. Therefore $c_p>0$. [F1, F2, step 2.1, given]

4.1 For any $q_h\in\mathbb P_p(T_h)$ define $\widehat q(y)=h^{-2/3}q_h(hy)$; then $\widehat q\in\mathbb P_p(\widehat T)$ and, by homogeneity of $u$ and the change of variables $x=hy$, $\|\nabla_x(u-q_h)\|_{L^2(T_h)}=h^{2/3}\|\nabla_y(u-\widehat q)\|_{L^2(\widehat T)}\ge c_ph^{2/3}$. Taking the infimum over $q_h$ proves the claimed fixed-degree h lower bound. Restriction to $T_h$ gives the same lower bound for any global piecewise-polynomial error on a mesh containing $T_h$. [F1, step 3.1, given, algebra]

5.1 Write $u=\operatorname{Im}z^{2/3}$ in the branch $0<\arg z<3\pi/2$. For derivative order $j\ge2$, repeated complex differentiation yields $|D^ju|\le C^j j!r^{2/3-j}$, including the finite sum over multi-indices. At the origin choose $\beta_0=1/2$, and at every other polygon corner choose $\beta_i=0$. The other-corner factors $\prod_{c_i\ne0}|x-c_i|^{j-2}$ are at most $C^j$ on the bounded polygon. Thus the weighted derivative norm is at most $C^j j!(\int_0^{\sqrt2}r^{-2/3}dr)^{1/2}$, since $r^{\beta_0+j-2}r^{2/3-j}=r^{-5/6}$. Finally $j!/(j-2)!=j(j-1)\le C_1^j$, so increasing the fixed analytic constant proves exactly the $B^2_\beta$ factorial bound in [F3]. Near the other corners the mode is analytic in a full neighborhood under a local complex branch; there is no further singularity. [given, step 1.1, algebra]

5.2 The mode vanishes on $\theta=0$ and $\theta=3\pi/2$, exactly the two designated Dirichlet edges. Step 5.1 and step 1.1 verify the regularity hypotheses of [F3]. Applying [F3] to any mesh and degree sequence satisfying its hypotheses proves the stated exponential hp upper bound. Together with step 4.1 this gives the asserted h versus hp comparison on the same polygon. [F3, step 1.1, step 4.1, step 5.1, given] ∎
