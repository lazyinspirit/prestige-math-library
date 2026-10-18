---
id: def-supg-general-residual-form
kind: definition
title: "Multidimensional P1 SUPG residual form and parameter scaling"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-supg-general-convection-diffusion-reaction-model]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "Definition 5.14, Definition 5.21, and Theorems 5.22 and 5.26, printed pp. 54–60: residual form, streamline norm, admissible parameter bounds, and error analysis."
    - title: "Thomas J. R. Hughes, Guglielmo Scovazzi, and Leopoldo P. Franca, Multiscale and Stabilized Methods, Encyclopedia of Computational Mechanics, ICES Report 04-18 (2004)"
      url: "https://www.oden.utexas.edu/media/reports/2004/0418.pdf"
      locator: "Sections 3.1–3.2.2: residual-based stabilization and the role of fine-scale residuals."
---

## Definition

Use the model and notation of [[def-supg-general-convection-diffusion-reaction-model]]. Define $s_b(K)=h_K/\|b\|_{L^\infty(K)}$ when that norm is positive and $s_b(K)=+\infty$ otherwise; define $s_c(K)=\omega/\|c\|_{L^\infty(K)}^2$ when that norm is positive and $s_c(K)=+\infty$ otherwise. For each cell set
$$\delta_K:=\theta\min\left\{\frac{h_K^2}{\epsilon},s_b(K),s_c(K)\right\},\quad 0<\theta\le\frac14.$$
The minimum is finite and positive because its first entry is finite and positive. This scaling gives $\delta_K\|c\|_{L^\infty(K)}^2\le\omega/4$.

For a trial function $w$ that is the sum of a cellwise smooth function and a member of $V_h$, and $v_h\in V_h$, define the element residual $R_K(w):=-\epsilon\Delta_K w+b\cdot\nabla w+cw$, and
$$a_h(w,v_h):=\epsilon(\nabla w,\nabla v_h)_\Omega+(b\cdot\nabla w+cw,v_h)_\Omega+\sum_{K\in\mathcal T_h}\delta_K(R_K(w),b\cdot\nabla v_h)_K,$$
$$F_h(v_h):=(f,v_h)_\Omega+\sum_{K\in\mathcal T_h}\delta_K(f,b\cdot\nabla v_h)_K.$$
Here $(g_1,g_2)_D:=\int_Dg_1g_2\,dx$ and $\Delta_K$ is the classical Laplacian restricted to the interior of $K$. For $w_h\in V_h$, $\Delta_Kw_h=0$ because $w_h$ is affine on $K$. No stability claim is part of this definition.

