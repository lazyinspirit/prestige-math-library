---
id: def-crouzeix-raviart-global-space
kind: definition
title: The global homogeneous Crouzeix–Raviart space
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-crouzeix-raviart-local-p1-element
  - def-matching-affine-simplicial-meshes
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "§36.2.2, equation (36.7) and the homogeneous boundary subspace (36.8), PDF pp. 3–4."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 280–290: piecewise P1 functions whose face means agree."
---

## Definition

Let $\Omega\subset\mathbb R^d$ be a bounded connected Lipschitz polyhedral
domain with a finite matching affine simplicial mesh $\mathcal T$. Here
Lipschitz polyhedral means that the boundary is a finite union of flat
simplex faces and, near each boundary point after a rigid coordinate change,
$\Omega$ lies on one side of a Lipschitz graph. Let $\mathcal F^\circ$ and
$\mathcal F^\partial$ be its interior and boundary facets. For a cellwise
affine function $v$, write $v_K$ for its polynomial restriction to $K$. The
broken gradient $\nabla_hv$ is defined by $(\nabla_hv)|_K:=\nabla v_K$.
For a facet $F$ and an integrable function $w$ on $F$, let $h_F:=\operatorname{diam}(F)$ and write $\operatorname{avg}_F(w):=|F|^{-1}\int_Fw\,dS$.
The homogeneous Crouzeix–Raviart space is
$$V_h^{CR,0}:=\left\{v\in L^2(\Omega): v_K\in\mathbb P_1(K)\ \text{for each }K\in\mathcal T,\quad \int_F(v_{K^+}-v_{K^-})\,dS=0\ \text{for }F=K^+\cap K^-\in\mathcal F^\circ,\quad \int_Fv_K\,dS=0\ \text{for }F\in\mathcal F^\partial\right\}.$$
The ordering $K^+,K^-$ on an interior facet is arbitrary; the zero-mean
condition is independent of that ordering. The functions need not agree
pointwise on a facet and need not belong to $H^1(\Omega)$.
