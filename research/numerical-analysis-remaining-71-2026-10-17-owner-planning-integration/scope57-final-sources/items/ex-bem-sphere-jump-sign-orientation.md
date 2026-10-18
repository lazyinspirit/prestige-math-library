---
id: ex-bem-sphere-jump-sign-orientation
kind: example
title: A unit sphere checks both layer jump signs
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-bem-newtonian-kernel-in-three-dimensions, lem-bem-newtonian-kernel-is-fundamental-solution, ex-bem-sphere-constant-density, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, def-surface-area-and-scalar-surface-integral-of-a-patch]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 2 §2.1, PDF pp. 23–25: signed single- and double-layer jump conventions."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed p. 615: fundamental-solution normalization and layer signs."
---

## Example

On the unit sphere $S_1$ with outward normal, let both layer densities be the constant $1$. The single layer has boundary trace $1$ and conormal jump $\partial_n^-S1-\partial_n^+S1=1$. The double-layer kernel $\partial_{n_y}G_3$ has potential $-1$ in the unit ball and $0$ outside; hence $\gamma^-D1-\gamma^+D1=-1$. Its common normal derivative is zero. Thus these conventions agree with $\gamma^-D-\gamma^+D=-\phi$ and $\partial_n^-S-\partial_n^+S=\lambda$.

## Facts & Assumptions

**Given:** The Newton kernel and its fundamental-solution identity, a unit sphere with outward normal, and constant density $1$.

[F1] The kernel is $G_3=(4\pi|x-y|)^{-1}$ ([[def-bem-newtonian-kernel-in-three-dimensions]]).

[F2] For density one on a radius-$R$ sphere, $U_R(x)=R$ for $|x|\le R$ and $U_R(x)=R^2/|x|$ for $|x|\ge R$; at $R=1$ the trace is $1$ and the interior/exterior normal derivatives are $0$ and $-1$ ([[ex-bem-sphere-constant-density]]).

[F3] Differentiation under a compact parameter integral is valid when the integrand and its parameter derivative are continuous on a compact rectangle. Use it successively in the two sphere parameters with area density $R^2\sin\theta$; for fixed $x\notin S_1$, choose $R$ in a small interval around one avoiding $|x|$, so all kernel derivatives there are uniformly continuous and bounded. ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]], [[def-surface-area-and-scalar-surface-integral-of-a-patch]])

## Proof

1.1 The single-layer trace and conormal sign are exactly [F2]. For the double layer put $U_R(x)=\int_{S_R}G_3(x,y)dS_y$ and $D_R1(x)=\int_{S_R}\partial_{n_y}G_3(x,y)dS_y$. In sphere parameters $y=R\omega$, differentiating $R^2G_3(x,R\omega)$ by [F3] gives $\partial_RU_R=D_R1+(2/R)U_R$: the kernel derivative is the outward source-normal derivative, and the second term differentiates area density. [F1, F2, F3, given, algebra]

2.1 For fixed $|x|<1$ and $R$ sufficiently near one, [F2] gives $U_R(x)=R$, so $D_R1=1-2=-1$. For fixed $|x|>1$ it gives $U_R(x)=R^2/|x|$, so $D_R1=2R/|x|-(2/R)(R^2/|x|)=0$. At $R=1$ the two potentials are constant on their respective sides; therefore their trace jump is $-1$ and both normal derivatives are zero. This proves both signs without adding a divergence-theorem axiom to the classical example. [F2, step 1.1, given, algebra] ∎
