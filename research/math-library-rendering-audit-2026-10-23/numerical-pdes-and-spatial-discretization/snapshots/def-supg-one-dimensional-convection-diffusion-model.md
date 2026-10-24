---
id: def-supg-one-dimensional-convection-diffusion-model
kind: definition
title: "One-dimensional stationary convection–diffusion model and uniform P1 space"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "Example 5.16, printed pp. 55–56: the steady one-dimensional P1 SUPG equation and the exact coth parameter."
    - title: "Hans Petter Langtangen, INF5620: Numerical Methods for Partial Differential Equations, lecture slides"
      url: "https://hplgit.github.io/INF5620/doc/web/literature/slides5620_12_8.pdf"
      locator: "Slides 77–86, PDF pp. 9–10: perturbed test functions, streamline diffusion, consistency, and the optimal one-dimensional parameter."
---

## Definition

Fix an integer $N\ge1$, put $h=1/N$, and let $x_j=jh$ for $j=0,\ldots,N$. The cells are $K_j=[x_{j-1},x_j]$. For $g_0,g_1\in\mathbb R$, let $S_h(g_0,g_1)$ be the finite-dimensional affine space of continuous functions on $[0,1]$ that are affine on each cell and have endpoint values $g_0,g_1$. Write $V_h=S_h(0,0)$ for the homogeneous test and trial vector space; explicitly, $S_h(g_0,g_1)=\ell+V_h$ with $\ell(x)=(1-x)g_0+xg_1$. “P1” means polynomial degree at most one on each interval.

Let $\epsilon>0$, $b\in\mathbb R\setminus\{0\}$, and $f\in C([0,1])$. The stationary boundary-value problem is to find $u\in C^2([0,1])$ such that $-\epsilon u''+b u'=f$ on $(0,1)$, with prescribed endpoint values $u(0)=g_0$ and $u(1)=g_1$. Its dimensionless cell Péclet number is $\mathrm{Pe}=|b|h/(2\epsilon)>0$. The stability theorem on this page uses the homogeneous branch $g_0=g_1=0$; the general endpoint notation also permits the boundary-layer example.

