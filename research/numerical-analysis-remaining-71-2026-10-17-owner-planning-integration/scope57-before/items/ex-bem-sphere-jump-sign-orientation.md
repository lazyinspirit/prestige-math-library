---
id: ex-bem-sphere-jump-sign-orientation
kind: example
title: A unit sphere checks both layer jump signs
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-bem-newtonian-kernel-in-three-dimensions, lem-bem-newtonian-kernel-is-fundamental-solution, ex-bem-sphere-constant-density]
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

[F1] The kernel is $G_3=(4\pi|x-y|)^{-1}$ and satisfies $-\Delta_xG_3=\delta_y$ ([[def-bem-newtonian-kernel-in-three-dimensions]], [[lem-bem-newtonian-kernel-is-fundamental-solution]]).

[F2] For the constant single-layer density, the sphere trace is $1$ and its interior/exterior normal derivatives are $0$ and $-1$ ([[ex-bem-sphere-constant-density]]).

## Proof

1.1 The single-layer sign is exactly the radial derivative computation in [F2]. For the double layer and $x\notin S_1$, apply the divergence theorem in the $y$ variable to $G_3(x,y)$ on the unit ball when $|x|>1$: there is no singularity in the ball and $\Delta_yG_3=0$, so $\int_{S_1}\partial_{n_y}G_3\,dS_y=0$. [F1, F2, given, algebra]

2.1 If $|x|<1$, remove $B_\varepsilon(x)$ from the unit ball. On the punctured domain $\Delta_yG_3=0$, and the inner boundary normal points toward $x$; since $\partial_{n}G_3=1/(4\pi\varepsilon^2)$ there, its flux is $1$. The divergence theorem therefore gives the outer flux $-1$. Thus $D1=-1$ in the interior and $D1=0$ in the exterior. The one-sided traces differ by $-1$, and both fields are constant on their sides so their normal derivatives are zero. This proves both signs and the constant-mode kernel check. [F1, step 1.1, given, algebra] ∎

