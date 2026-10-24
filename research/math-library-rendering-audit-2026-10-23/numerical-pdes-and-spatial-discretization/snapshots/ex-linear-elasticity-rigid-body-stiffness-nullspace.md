---
id: ex-linear-elasticity-rigid-body-stiffness-nullspace
kind: example
title: "Rigid motions in a free-body stiffness nullspace"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [alg-linear-elasticity-rigid-body-nullspace-gauge]
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
      locator: "§1, printed pp. 1–2, and §5, printed p. 12: translations and rotations preserve strain and must be represented in discretizations."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete 691-page text)"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
      locator: "Chapter 3, §§3.2–3.4, printed pp. 140–173: finite-dimensional kernels and singular matrix systems."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $D\subset\mathbb R^d$, $d\in\{2,3\}$, be a connected polygonal or polyhedral domain with a finite conforming affine simplicial mesh $\mathcal T_h$ and no essential boundary constraints. Define the continuous P1 vector space $S_h=\{v\in C^0(\overline D;\mathbb R^d):v|_K\text{ is affine for every }K\in\mathcal T_h\}$ and its global nodal basis $(\phi_i)_{i=1}^N$. For constants $\mu>0$ and $\lambda\ge0$, set $\varepsilon(v)=(\nabla v+\nabla v^T)/2$, $k(v,w)=2\mu\int_D\varepsilon(v):\varepsilon(w)+\lambda\int_D\operatorname{div}v\,\operatorname{div}w$, and $K_{ij}=k(\phi_j,\phi_i)$. For every infinitesimal rigid motion $r(x)=a+\Omega x$, with $a\in\mathbb R^d$ and $\Omega^T=-\Omega$, its nodal coefficient vector lies in $\ker K$. Thus the range of any complete nullspace basis supplied to [[alg-linear-elasticity-rigid-body-nullspace-gauge]] must contain these translation and rotation vectors. This example does not claim they exhaust the nullspace on every mesh.

## Facts & Assumptions

**Given:** A conforming affine simplicial mesh, its global continuous P1 vector space without essential boundary constraints, and the displayed isotropic stiffness bilinear form.

[F1] The algebraic gauge procedure requires a complete basis $R$ of the stiffness kernel and a compatible load before it is applied. ([[alg-linear-elasticity-rigid-body-nullspace-gauge]])

## Verification

1.1 On each nondegenerate simplex, an affine map is uniquely determined by its values at the $d+1$ affinely independent vertices, so its nodal P1 interpolant equals it. On each shared face the affine traces are determined by the same face-vertex values, so they agree and define a global continuous member of $S_h$. [given, construct]

2.1 Since $\Omega$ is skew-symmetric, $\varepsilon(r)=(\Omega+\Omega^T)/2=0$ and $\operatorname{div}r=\operatorname{tr}\Omega=0$. Thus the stiffness bilinear form pairs $r$ to zero with every test basis function, which is exactly $Kr=0$ in coefficient coordinates. By [F1], every complete gauge basis must span these null vectors, although other null modes are not excluded here. [F1, step 1.1, algebra] ∎
