---
id: thm-na-rt0-p0-darcy-error-estimate
kind: theorem
title: RT0/P0 Darcy stability and flux/pressure error bound
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 10
deps: [def-na-neumann-darcy-mixed-problem, def-na-simplicial-mesh-rt-bdm-spaces, lem-na-rt0-unisolvence-and-global-conformity, thm-na-darcy-mixed-wellposedness, thm-na-rt0-p0-bounded-divergence-lift-and-infsup, lem-na-rt0-p0-kernel-is-divergencefree, thm-na-mixed-galerkin-quasioptimality, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part XI Chapter 49: Well-posedness for PDEs in mixed form"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "Complete chapter, §§49.3–49.4: discrete stability, Galerkin approximation and explicit mixed error bounds."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 5 Theorem 5.2.2 and Chapter 7: mixed error estimates and Darcy elements."
---

## Statement

Assume Countable Choice, the Darcy data in [[def-na-neumann-darcy-mixed-problem]], and a facet-connected shape-regular mesh. For at least two cells, set $C_R$ as in the stable lift theorem and define
$$\widehat\beta=(1+C_R^2)^{-1/2},\quad M_a=\kappa_{\min}^{-1},\quad M_b=1,\quad\alpha_*=\kappa_{\max}^{-1}.$$
Let $(u,p)$ solve the continuous source-only Darcy problem ($F=0$) and $(u_h,p_h)$ the RT0/P0 Galerkin system. For any $w_h\in V_h,r_h\in Q_h$, put $\delta_u=\|u-w_h\|_{H(\operatorname{div})}$, $\delta_p=\|p-r_h\|_2$, and
$$R_h=\widehat\beta^{-1}M_b\delta_u,$$
$$U_h=\delta_u+\alpha_*^{-1}\{M_a(\delta_u+R_h)+M_b\delta_p\}+R_h,$$
$$P_h=\delta_p+\widehat\beta^{-1}\{M_a(U_h+\delta_u)+M_b\delta_p\}.$$
Then the discrete pair exists uniquely and
$$\|u-u_h\|_{H(\operatorname{div})}\le U_h,\qquad \|p-p_h\|_2\le P_h,\qquad \|u-u_h\|_{K^{-1}}\le\kappa_{\min}^{-1/2}U_h.$$
For a one-cell mesh $V_h=Q_h=\{0\}$, so the unique discrete pair is $(0,0)$; the nonzero-$Q_h$ error theorem is not invoked. The constants display permeability contrast and do not assert contrast-independent robustness.

## Facts & Assumptions

**Given:** Countable Choice, a continuous source-only Darcy solution, a facet-connected shape-regular mesh, and the stated permeability bounds.

[A1] Countable Choice is required by the continuous mixed and Galerkin solvability suppliers. ([[def-countable-choice]])

[F1] The continuous Darcy pair exists uniquely in $V\times Q$. ([[thm-na-darcy-mixed-wellposedness]])

[F2] For nonzero $Q_h$, the stable lift gives $\beta_h\ge\widehat\beta>0$. ([[thm-na-rt0-p0-bounded-divergence-lift-and-infsup]])

[F3] The discrete mixed kernel is exactly divergencefree. ([[lem-na-rt0-p0-kernel-is-divergencefree]])

[F4] The Darcy form obeys $|a(v,w)|\le\kappa_{\min}^{-1}\|v\|_{H(\operatorname{div})}\|w\|_{H(\operatorname{div})}$ and $|b(v,q)|\le\|v\|_{H(\operatorname{div})}\|q\|_2$; on the divergencefree kernel, $a(v,v)\ge\kappa_{\max}^{-1}\|v\|_{H(\operatorname{div})}^2$. ([[def-na-neumann-darcy-mixed-problem]])

[F5] For conforming finite-dimensional subspaces, nonzero $Q_h$, positive $\beta_h$, and discrete-kernel coercivity, the actual mixed Galerkin solution is unique and satisfies the displayed explicit $U_h,P_h$ bound with $\beta_h$ retained. ([[thm-na-mixed-galerkin-quasioptimality]])

[F6] A one-cell RT0 field with zero flux on every facet is zero, by facet-flux unisolvence; a one-cell mean-zero P0 space is zero. ([[lem-na-rt0-unisolvence-and-global-conformity]], [[def-na-simplicial-mesh-rt-bdm-spaces]])

## Proof

1.1 Suppose first there are at least two cells. Facet-connectedness implies there are at least two independent cell constants before imposing the one mean constraint, hence $Q_h\ne\{0\}$. The stable lift [F2] gives a positive discrete inf-sup constant. If $z_h$ belongs to the discrete kernel, [F3] gives $\operatorname{div}z_h=0$; hence its graph norm is its $L^2$ norm and the coefficient lower bound [F4] gives discrete coercivity with $\alpha_*=\kappa_{\max}^{-1}$. The bounds in [F4] give $M_a=\kappa_{\min}^{-1}$ and $M_b=1$. [A1, F2, F3, F4, given]

2.1 Apply [F5] to the conforming spaces $V_h\subset V$, $Q_h\subset Q$, continuous solution [F1], and the constants in step 1.1. This gives a unique Galerkin pair and the bound with $\beta_h$. Since $\beta_h\ge\widehat\beta$, each occurrence of $\beta_h^{-1}$ in the supplied formulas is no larger than $\widehat\beta^{-1}$; all coefficients and best-approximation errors are nonnegative, so replacing $\beta_h^{-1}$ by $\widehat\beta^{-1}$ only enlarges $R_h,U_h,P_h$. The $L^2$ flux error estimate follows from $\|e\|_{K^{-1}}^2\le\kappa_{\min}^{-1}\|e\|_2^2$. [A1, F1, F5, step 1.1, algebra]

3.1 If the mesh has one cell, every facet is a physical-boundary facet. The boundary-zero facet moments and [F6] force $V_h=\{0\}$, while a constant with zero global mean is zero, so $Q_h=\{0\}$. The zero pair is the sole discrete pair. Finally $M_a/\alpha_*=\kappa_{\max}/\kappa_{\min}$, making the permeability-contrast dependence explicit in the formulas rather than uniform in that ratio. [F4, F6, step 2.1, algebra, cases] ∎