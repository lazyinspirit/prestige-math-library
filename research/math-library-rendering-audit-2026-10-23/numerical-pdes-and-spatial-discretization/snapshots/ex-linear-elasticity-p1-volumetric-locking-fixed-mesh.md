---
id: ex-linear-elasticity-p1-volumetric-locking-fixed-mesh
kind: example
title: "A fixed-mesh P1 volumetric-locking obstruction"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps: [def-linear-elasticity-displacement-formulation-and-data, thm-linear-elasticity-displacement-wellposedness-and-galerkin-bound, lem-na-homogeneous-dirichlet-korn-identity, def-linear-elasticity-near-incompressible-mixed-mini-pair, thm-nearly-incompressible-elasticity-mini-uniform-stability-and-error, def-na-mini-element-p1-bubble-p1-spaces, def-wkp-zero-as-a-sobolev-closure, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Long Chen, Introduction to Linear Elasticity and Its Finite Element Approximation (complete 13-page notes)"
      url: "https://cpb-us-e2.wpmucdn.com/sites.uci.edu/dist/5/3624/files/2019/01/elasticity.pdf"
      locator: "§5.1, printed p. 13: locking from a large Lamé parameter and the divergence-free approximation space."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete 691-page text)"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
      locator: "Chapter 8, §§8.3 and 8.12.1, printed pp. 466–468 and 519–520: overconstrained low-order displacement spaces and the mixed pressure formulation."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. On $D=(0,1)^2$, let $c=(1/2,1/2)$ and split the square into the four triangles joining $c$ to consecutive corners. The continuous P1 vector space with zero boundary values has no nonzero elementwise divergence-free field. Choose a nonzero smooth compactly supported divergence-free displacement $u$ and set $f=-\operatorname{div}(2\varepsilon(u))$. Then $u$ solves the continuous model with $\mu=1$ for every finite $\lambda\ge0$, but the P1 displacement Galerkin solutions on this fixed mesh tend to zero as $\lambda\to\infty$, so their $V$-norm error tends to $\|u\|_V>0$. The mini mixed pair on the same mesh retains the $\lambda$-uniform best-approximation estimate of [[thm-nearly-incompressible-elasticity-mini-uniform-stability-and-error]]. This is a fixed-mesh obstruction, not a mesh-uniform P1 rate.

## Facts & Assumptions

**Given:** Countable Choice; the displacement model, its energy theorem, the mini mixed formulation and stability theorem; and the four-triangle fan mesh specified in the statement.

[A1] Countable Choice is inherited through the continuous Hilbert-space solution theorem; the finite-mesh calculation and compactness argument use finite-dimensional subsequence extraction. ([[def-countable-choice]])

[F1] For $\mu=1$ and finite $\lambda$, the displacement solution is unique, has the stated energy identity, and satisfies a uniform $H^1_0$ bound. ([[thm-linear-elasticity-displacement-wellposedness-and-galerkin-bound]])

[F2] The mixed mini-element problem has a $\lambda$-uniform solution and best-approximation bound on a common shape-regular mesh family. ([[thm-nearly-incompressible-elasticity-mini-uniform-stability-and-error]])

[F3] The P1-bubble/P1 mini-element uses continuous P1 vector functions with zero trace plus cell bubbles, and mean-zero continuous P1 pressures. ([[def-na-mini-element-p1-bubble-p1-spaces]])

[F4] The integral pairing obeys $|(g,h)_{L^2}|\le\|g\|_2\|h\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F5] $H^1_0(D)$ is the $H^1$-closure of $C_c^\infty(D)$. ([[def-wkp-zero-as-a-sobolev-closure]])

[F6] For zero-boundary fields, $2\|\varepsilon(v)\|_2^2\ge\|\nabla v\|_2^2$. ([[lem-na-homogeneous-dirichlet-korn-identity]])

## Verification

1.1 Set $\eta(t)=\exp(-1/((t-1/4)(3/4-t)))$ for $1/4<t<3/4$ and $\eta(t)=0$ otherwise. At each endpoint every derivative from the interior is a finite sum of reciprocal-distance powers multiplied by $\exp(-c/\text{distance})$ for some $c>0$, hence tends to zero; so $\eta\in C_c^\infty(0,1)$. Put $\psi(x,y)=\eta(x)\eta(y)$ and $u=(\partial_y\psi,-\partial_x\psi)$. Equality of mixed derivatives gives $\operatorname{div}u=0$. Since $\eta(1/2)>0$ and $\eta(1/4)=0$, the mean value theorem gives $y\in(1/4,1/2)$ with $\eta'(y)>0$; hence $u_1(1/2,y)=\eta(1/2)\eta'(y)>0$. Thus $u\ne0$ and is compactly supported in $D$. [given, construct, algebra]

1.2 Let $f=-\operatorname{div}(2\varepsilon(u))\in C_c^\infty(D;\mathbb R^2)$. For $v\in C_c^\infty(D;\mathbb R^2)$, integration by parts and symmetry of $2\varepsilon(u)$ give $2(\varepsilon(u),\varepsilon(v))=(f,v)$. By [A1, F5], choose such tests converging to any given $v\in V$ in $H^1$; [F4] makes both pairings continuous under this convergence, so the identity holds for every $v\in V$. [A1, F4, F5, given, algebra]

1.3 A P1 vector field in this mesh vanishes at every boundary vertex and is determined by its center value $z=(a,b)$. On the bottom triangle the edge vectors from the center to its corners are $(-1/2,-1/2)$ and $(1/2,-1/2)$; its affine gradient $G$ maps both to $-z$. Subtracting gives the first column of $G$ zero, and adding gives the second column $(2a,2b)$, so divergence is $2b$. On the right triangle the edge vectors are $(1/2,-1/2)$ and $(1/2,1/2)$; subtraction gives the second column zero and addition the first column $(-2a,-2b)$, hence divergence is $-2a$. On the top triangle the edge vectors are $(1/2,1/2)$ and $(-1/2,1/2)$; subtraction gives the first column zero and addition the second column $(-2a,-2b)$, hence divergence is $-2b$. On the left triangle the edge vectors are $(-1/2,1/2)$ and $(-1/2,-1/2)$; subtraction gives the second column zero and addition the first column $(2a,2b)$, hence divergence is $2a$. If all four divergences vanish, then $a=b=0$, so the elementwise divergence-free subspace is exactly $\{0\}$. [given, algebra]

2.1 Since $\operatorname{div}u=0$, the volumetric term vanishes and step 1.2 gives $\mathcal E_\lambda(u,v)=f(v)$ for every $v\in V$ and every finite $\lambda\ge0$. By [F1], this identifies the same nonzero $u$ as the unique continuous solution for each such $\lambda$. [F1, step 1.1, step 1.2, given, algebra]

3.1 Let $u_{h,\lambda}$ be the P1 Galerkin solution, which exists uniquely by [F1]. Testing with $u_{h,\lambda}$, using [F6] with $\mu=1$, and applying [F4] gives $\|u_{h,\lambda}\|_V\le\|f\|_{V'}$ and $\lambda\|\operatorname{div}u_{h,\lambda}\|_2^2\le\|f\|_{V'}^2$. Thus along every sequence $\lambda_n\to\infty$ the discrete solutions are bounded in the finite-dimensional P1 space and have a convergent subsequence; the divergence of its limit is zero because the divergence norms tend to zero and convergence in $H^1$ implies convergence of divergence in $L^2$. The limit is zero by step 1.3. If the full family did not converge to zero, a sequence bounded away from zero would have such a zero-convergent subsequence, a contradiction. Hence $u_{h,\lambda}\to0$ and the reverse triangle inequality gives $\|u-u_{h,\lambda}\|_V\to\|u\|_V>0$. [F1, F4, F6, step 1.3, step 2.1, algebra]

4.1 The mini mixed comparison is exactly the scoped result [F2] under the spaces [F3]; its estimate keeps the best-approximation term and its constant is independent of $\lambda$ on this mesh family. No conclusion about a P1 rate as $h\to0$ is used. [F2, F3, step 3.1] ∎
