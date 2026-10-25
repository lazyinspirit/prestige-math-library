---
id: def-supg-one-dimensional-residual-form
kind: definition
title: "One-dimensional residual SUPG form with the exact cell parameter"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-supg-one-dimensional-convection-diffusion-model]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "Definition 5.14 and Example 5.16, printed pp. 54–56: element residual, streamline test perturbation, and the one-dimensional P1 form."
    - title: "Hans Petter Langtangen, INF5620: Numerical Methods for Partial Differential Equations, lecture slides"
      url: "https://hplgit.github.io/INF5620/doc/web/literature/slides5620_12_8.pdf"
      locator: "Slides 78–86, PDF pp. 9–10: the perturbation $v+\tau v'$ and its consistent residual formulation."
---

## Definition

Use the uniform mesh, coefficients, and spaces of [[def-supg-one-dimensional-convection-diffusion-model]]. On every cell set
$$\tau=\frac{h}{2|b|}\left(\coth(\mathrm{Pe})-\frac1{\mathrm{Pe}}\right),\qquad \coth s:=\frac{\cosh s}{\sinh s}.$$
For $w\in S_h(g_0,g_1)+C^2([0,1])$ and $v_h\in V_h$, define
$$a_h(w,v_h):=\epsilon\int_0^1w'v_h'\,dx+b\int_0^1w'v_h\,dx+\sum_{K\in\mathcal T_h}\tau\int_K(-\epsilon w''+bw')(bv_h')\,dx,$$
$$F_h(v_h):=\int_0^1fv_h\,dx+\sum_{K\in\mathcal T_h}\tau\int_K f(bv_h')\,dx.$$
Second derivatives are taken classically on each cell. The strong equation residual is $R_K(w):=-\epsilon w''+bw'-f$. For P1 trial functions, $w_h''=0$ on each cell, so the cell term is $\tau\int_K(bw_h')(bv_h')$. On the smooth consistency extension it retains $-\epsilon w''$; thus the full residual pairing is $\tau\int_K(R_K(w)+f)(bv_h')$, while the load contains the matching $f$ term. The SUPG equation is $a_h(w_h,v_h)=F_h(v_h)$ and adds the same residual-weighted streamline test perturbation to the differential equation and its load.

