---
id: lem-maxwell-nedelec-smooth-interpolation-estimate
kind: lemma
title: Smooth lowest-order Nedelec and RT0 interpolation estimate
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-maxwell-edge-fem-semidiscretization
  - def-na-lowest-order-whitney-de-rham-spaces
  - def-matching-affine-simplicial-meshes
  - thm-affine-piola-differential-and-trace-moment-identities
  - lem-na-nedelec-edge-unisolvence
  - lem-na-whitney-moments-commute-with-grad-curl-div
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§§1.1–1.3, printed pp. 1–6: lowest-order Nedelec and RT0 degrees of freedom, their commuting curl identity, and the first-order curl interpolation estimate."
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
      locator: "§§5.2–5.4, printed pp. 50–55: lowest-order Whitney spaces, geometric degrees of freedom, and the warning that canonical moments require smooth inputs."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice only in the H(div)/Piola space branch inherited from the suppliers below. Let $\mathcal T_h$ be a finite matching affine tetrahedral mesh of a bounded polyhedron, with shape-regularity constant $\sigma$ and $h=\max_K h_K$. Assume material interfaces are mesh-aligned. Let $u,v$ be piecewise $C^1$ on cell closures, with $\operatorname{curl}u$, $\operatorname{div}v$ also piecewise $C^1$, and with matching tangential traces of $u$ and matching normal traces of $v$. The canonical edge and face moment interpolants $I_h^1,I_h^2$ are those in [[lem-na-whitney-moments-commute-with-grad-curl-div]]. Then
$$\begin{aligned} &\|u-I_h^1u\|_{L^2(\Omega)}+\|\operatorname{curl}(u-I_h^1u)\|_{L^2(\Omega)} \quad+\|v-I_h^2v\|_{L^2(\Omega)}+\|\operatorname{div}(v-I_h^2v)\|_{L^2(\Omega)} \le C_\sigma h |\Omega|^{1/2}\max_{K\in\mathcal T_h}\left(\|\nabla u\|_{L^\infty(K)}+\|\nabla\operatorname{curl}u\|_{L^\infty(K)}+\|\nabla v\|_{L^\infty(K)}+\|\nabla\operatorname{div}v\|_{L^\infty(K)}\right). \end{aligned}$$
The constant depends only on reference-element basis norms and $\sigma$. This estimate is only for the canonical smooth-input interpolants; it makes no boundedness claim on all of $H(\operatorname{curl})$ or $H(\operatorname{div})$.

## Facts & Assumptions


**Given:** A finite matching shape-regular affine tetrahedral mesh, the real lowest-order Nedelec and RT0 local spaces, and piecewise smooth fields with the stated trace compatibility.

[A1] Countable Choice means every countable family of nonempty sets has a choice function. It is inherited from the affine Piola and H(div) definitions; no stronger Choice axiom is used. ([[def-countable-choice]])

[F1] The local spaces are the span of the six Whitney edge fields $\phi_{ij}=\lambda_i\nabla\lambda_j-\lambda_j\nabla\lambda_i$ and $RT_0(K)=\{a+c x:a\in\mathbb R^3,c\in\mathbb R\}$. ([[def-na-lowest-order-whitney-de-rham-spaces]])

[F2] The six oriented edge circulations are unisolvent and the local edge space is $\{a+b\times x:a,b\in\mathbb R^3\}$, so it contains every constant vector field. ([[lem-na-nedelec-edge-unisolvence]])

[F3] For smooth inputs the moment interpolants are globally conforming and commute cellwise with gradient, curl, and divergence; in particular $\operatorname{curl}I_h^1u=I_h^2\operatorname{curl}u$ and $\operatorname{div}I_h^2v=I_h^3\operatorname{div}v$. ([[lem-na-whitney-moments-commute-with-grad-curl-div]])

[F4] Covariant and contravariant affine Piola maps preserve oriented edge and face moments, with pushforwards $A^{-T}\hat u$ and $(\det A)^{-1}A\hat v$. ([[thm-affine-piola-differential-and-trace-moment-identities]])

[F5] Shape regularity gives $\|A_K\|\le C_\sigma h_K$, $\|A_K^{-1}\|\le C_\sigma h_K^{-1}$, and $c_\sigma h_K^3\le |K|\le C_\sigma h_K^3$. ([[def-matching-affine-simplicial-meshes]])

## Proof

1.1 On a fixed reference tetrahedron, each canonical basis function has finite $L^2$ norm. Under the covariant Piola map, [F4] and [F5] give $\|\phi_{K,e}\|_{L^2(K)}\le C_\sigma h_K^{-1}h_K^{3/2}=C_\sigma h_K^{1/2}$ for each edge basis function. Under the contravariant Piola map they give $\|\psi_{K,F}\|_{L^2(K)}\le C_\sigma h_K^{-3}h_Kh_K^{3/2}=C_\sigma h_K^{-1/2}$ for each unit-face-flux RT0 basis function. [A1, F1, F4, F5, given, algebra]

1.2 By [F3], $\operatorname{div}I_K^2v=I_K^3\operatorname{div}v$, and $I_K^3$ is the cell average because its defining degree of freedom is the cell integral. Thus $|\operatorname{div}v(x)-I_K^3\operatorname{div}v|\le h_K\|\nabla\operatorname{div}v\|_{L^\infty(K)}$ throughout $K$, and $\|\operatorname{div}(v-I_K^2v)\|_{L^2(K)}\le C h_K^{5/2}\|\nabla\operatorname{div}v\|_{L^\infty(K)}$. [F3, given, algebra]

2.1 Fix $K$ and $x_K\in K$, and put $u_K=u(x_K)$, a constant vector in the local Nedelec space by [F2]. For each of its six edges, the mean-value bound gives $|\int_e(u-u_K)\cdot t\,ds|\le h_K^2\|\nabla u\|_{L^\infty(K)}$. By edge-moment unisolvence [F2], $I_K^1(u-u_K)$ is the sum of these six coefficients times the corresponding basis functions. Step 1.1 and $\|u-u_K\|_{L^2(K)}\le C h_K^{5/2}\|\nabla u\|_\infty$ therefore yield $\|u-I_K^1u\|_{L^2(K)}\le C_\sigma h_K^{5/2}\|\nabla u\|_{L^\infty(K)}$. [A1, F1, F2, step 1.1, given, algebra]

2.2 Set $q=\operatorname{curl}u$ and $q_K=q(x_K)$, a constant RT0 field. By the curl commuting identity [F3], $\operatorname{curl}I_K^1u=I_K^2q$. Each face-flux coefficient of $q-q_K$ is at most $C h_K^3\|\nabla q\|_{L^\infty(K)}$; multiplying the four coefficients by the RT0 basis bounds in step 1.1 and adding $\|q-q_K\|_{L^2(K)}$ gives $\|\operatorname{curl}(u-I_K^1u)\|_{L^2(K)}\le C_\sigma h_K^{5/2}\|\nabla\operatorname{curl}u\|_{L^\infty(K)}$. [A1, F1, F3, step 1.1, given, algebra]

2.3 For $v$, set $v_K=v(x_K)$, again a constant in RT0. Each of the four face-flux coefficients of $v-v_K$ is bounded by $C h_K^3\|\nabla v\|_{L^\infty(K)}$. The RT0 basis scaling in step 1.1 and $\|v-v_K\|_{L^2(K)}\le C h_K^{5/2}\|\nabla v\|_\infty$ give $\|v-I_K^2v\|_{L^2(K)}\le C_\sigma h_K^{5/2}\|\nabla v\|_{L^\infty(K)}$. [A1, F1, F3, step 1.1, given, algebra]

3.1 Square and sum the four local bounds. By [F5], $h_K^5\le C_\sigma h^2|K|$; the cell interiors are disjoint and sum to $\Omega$. Taking square roots gives the displayed global estimate with the maximum cell derivative bound and the factor $|\Omega|^{1/2}$. The matching traces and the conformity part of [F3] assemble the interpolants globally. [F3, F5, step 2.1, step 2.2, step 2.3, step 1.2, algebra] ∎
