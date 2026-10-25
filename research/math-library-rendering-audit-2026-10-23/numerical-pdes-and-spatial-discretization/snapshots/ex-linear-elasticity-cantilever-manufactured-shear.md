---
id: ex-linear-elasticity-cantilever-manufactured-shear
kind: example
title: "A manufactured shear field on a clamped rectangle"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-linear-elasticity-displacement-formulation-and-data, def-countable-choice]
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
      locator: "§§3.1–3.4 and 4.1, printed pp. 7–10: strain, stress, traction, and the displacement equilibrium equation."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete 691-page text)"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
      locator: "Chapter 8, §8.12.1, printed pp. 519–520: homogeneous Dirichlet elasticity and its variational form."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. On $D=(0,1)^2$, clamp the left edge $\Gamma_D=\{0\}\times(0,1)$ and prescribe traction on the other three open edges $\Gamma_N$. Let $\mu>0$ and $\lambda\ge0$ be constants and set $u(x,y)=(0,x)$. The stress $\sigma_\lambda(u)=2\mu\varepsilon(u)+\lambda(\operatorname{div}u)I_2$ is constant and satisfies $-\operatorname{div}\sigma_\lambda(u)=0$, $u|_{\Gamma_D}=0$, and $\sigma_\lambda(u)n=(0,\mu)$ on the right edge, $(\mu,0)$ on the top edge, and $(-\mu,0)$ on the bottom edge. This is a manufactured linear-elasticity solution; no uniqueness result for partial Dirichlet data is asserted.

## Facts & Assumptions

**Given:** Countable Choice; the linear-elasticity strain and stress conventions of [[def-linear-elasticity-displacement-formulation-and-data]]; the square $D=(0,1)^2$; constant $\mu>0$; and $\lambda\ge0$.

[A1] Countable Choice is inherited through the imported model definition; the direct matrix and traction computations use no choice. ([[def-countable-choice]])

[F1] The symmetric gradient is $\varepsilon(u)=(\nabla u+\nabla u^T)/2$ and $\sigma_\lambda(u)=2\mu\varepsilon(u)+\lambda(\operatorname{div}u)I_2$. ([[def-linear-elasticity-displacement-formulation-and-data]])

## Verification

1.1 The gradient of $u=(0,x)$ is $\begin{pmatrix}0&0\\1&0\end{pmatrix}$, so $\varepsilon(u)=\begin{pmatrix}0&1/2\\1/2&0\end{pmatrix}$ and $\operatorname{div}u=0$. Hence [F1] gives $\sigma_\lambda(u)=\begin{pmatrix}0&\mu\\\mu&0\end{pmatrix}$, independent of $\lambda$. [A1, given, F1, algebra]

2.1 The stress is constant, so its row-wise divergence is zero. The displacement vanishes at $x=0$. Multiplication by the outward unit normals $(1,0)$, $(0,1)$, and $(0,-1)$ on the right, top, and bottom edges gives the three displayed tractions. [given, step 1.1, algebra] ∎