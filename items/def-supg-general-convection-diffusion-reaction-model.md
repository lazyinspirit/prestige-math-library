---
id: def-supg-general-convection-diffusion-reaction-model
kind: definition
title: "Stationary multidimensional convection–diffusion–reaction P1 model"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-matching-affine-simplicial-meshes]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "§5.3.2, printed pp. 56–60: the stationary operator, the condition $c-\\frac12\\nabla\\cdot b\\ge\\omega$, the SUPG norm, coercivity, and the P1 error route."
    - title: "Hans Petter Langtangen, INF5620: Numerical Methods for Partial Differential Equations, lecture slides"
      url: "https://hplgit.github.io/INF5620/doc/web/literature/slides5620_12_8.pdf"
      locator: "Slides 81–86, PDF pp. 10–11: streamline-direction stabilization, residual consistency, and the separation of multidimensional parameter choice."
---

## Definition

Fix $d\ge2$ and a bounded connected polyhedral open set $\Omega\subset\mathbb R^d$. Let $\{\mathcal T_h\}$ be a shape-regular family of finite matching affine simplicial meshes in the sense of [[def-matching-affine-simplicial-meshes]]: one finite constant $\sigma$ satisfies $h_K/\rho_K\le\sigma$ for every cell of every mesh. Put $h=\max_{K\in\mathcal T_h}h_K$. Let $V_h$ be the space of continuous functions on $\overline\Omega$ that are affine on every cell and vanish on $\partial\Omega$.

Let $\epsilon>0$, $b\in C^1(\overline\Omega;\mathbb R^d)$, $c\in C(\overline\Omega)$, and $f\in C(\overline\Omega)$. Define $B:=\|b\|_{L^\infty(\Omega)}$ and $C:=\|c\|_{L^\infty(\Omega)}$. Assume a fixed $\omega>0$ satisfies $c-\frac12\nabla\cdot b\ge\omega$ on $\Omega$. The boundary condition for this branch is $u=0$ on the whole boundary, including the inflow part $\{x\in\partial\Omega:b(x)\cdot n(x)<0\}$. A classical exact solution is a function $u\in C^2(\overline\Omega)$ satisfying $-\epsilon\Delta u+b\cdot\nabla u+cu=f$ in $\Omega$ and this boundary condition.

