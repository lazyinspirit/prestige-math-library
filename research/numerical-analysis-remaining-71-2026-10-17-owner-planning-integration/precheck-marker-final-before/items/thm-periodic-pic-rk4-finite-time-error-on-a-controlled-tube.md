---
id: thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube
kind: theorem
title: Fourth-order RK4 trajectory error for the fixed-grid periodic PIC ODE
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - alg-periodic-pic-classical-rk4-step
  - thm-periodic-pic-grid-interaction-kernel-is-globally-lipschitz
  - prop-euler-midpoint-rk4-orders-and-stability-functions
  - lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube
  - lem-discrete-one-step-error-recurrence-bound
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: MIT OpenCourseWare 18.330, Introduction to Numerical Analysis, Chapter 5
      url: https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Chapter 4
      url: https://djvu.online/file/cjOfwRgltjv1g
---

## Statement

Fix $\varepsilon>0$, grid width $h$, particle count $P\ge1$, and final time $T>0$. Apply classical RK4 from [[alg-periodic-pic-classical-rk4-step]] to the autonomous finite-dimensional PIC system
$$ \dot Z=F_{\varepsilon,h}(Z),\qquad (F_{\varepsilon,h}(Z))_p=\frac1P\sum_{r=1}^P \mathbb K_{\varepsilon,h}(z_p,z_r),\qquad z_p=(X_p,V_p). $$ Let $Z(t)$ be an exact solution on $[0,T]$. Assume $F_{\varepsilon,h}$ is $C^4$ on an open set containing a common compact convex tube $\mathcal T$; the exact path, all numerical states, and every RK4 stage generated from both the exact and numerical starting states lie in $\mathcal T$; and all derivatives of $F_{\varepsilon,h}$ through order four are bounded there. Let $h_t=T/n$ for an integer $n\ge1$, $h_t\le h_0$, and initialize exactly. Put $$ L_F=2L_{\varepsilon,h},\qquad L_*=L_Fe^{L_Fh_0}, $$ and let $C_4$ be a uniform RK4 exact-start defect constant on this tube. Then, for every grid time $t_k=kh_t\le T$, $$ \|Z_k-Z(t_k)\|_2\le \begin{cases} C_4\dfrac{e^{L_*T}-1}{L_*}h_t^4,&L_*>0,\\[4pt] C_4Th_t^4,&L_*=0. \end{cases} $$
The tube, exact-solution, and stage-admissibility hypotheses are conditional; this is a fixed-$\varepsilon$, fixed-grid finite-particle time error, not a continuum or singular-force estimate.

## Facts & Assumptions

**Given:** The exact smooth finite-grid ODE solution, exact initialization, the common compact convex tube, bounded derivatives through order four, and admissible RK4 stages from exact and numerical starts.

[F1] [[thm-periodic-pic-grid-interaction-kernel-is-globally-lipschitz]]: the two-variable phase kernel has constant $L_{\varepsilon,h}$ in the sum norm convention.

[F2] [[prop-euler-midpoint-rk4-orders-and-stability-functions]]: classical RK4 has uniform local order at least four for a $C^4$ autonomous field with bounded derivatives and its exact-start stages in a common compact convex tube.

[F3] [[lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube]]: if the field is $L_F$-Lipschitz on the stages from two admitted starts, the one-step RK4 map has bound $(1+L_*h_t)\|u-v\|_2$ with $L_*=L_Fe^{L_Fh_0}$.

[F4] [[lem-discrete-one-step-error-recurrence-bound]]: if $e_0=0$ and $e_{k+1}\le(1+L_*h_t)e_k+C_4h_t^5$, then the stated geometric-exponential bound holds, including the branch $L_*=0$.

## Proof

1.1 The state field is a mean over $P$ pair interactions. For two stacked states $Z,\widetilde Z$, [F1] gives $|(F_{\varepsilon,h}(Z))_p-(F_{\varepsilon,h}(\widetilde Z))_p| \le L_{\varepsilon,h}|z_p-\widetilde z_p| +\frac{L_{\varepsilon,h}}P\sum_r|z_r-\widetilde z_r|.$ Taking the stacked Euclidean norm and applying finite Cauchy–Schwarz to the average term shows $\|F_{\varepsilon,h}(Z)-F_{\varepsilon,h}(\widetilde Z)\|_2\le2L_{\varepsilon,h}\|Z-\widetilde Z\|_2=L_F\|Z-\widetilde Z\|_2$. The $C^4$ tube hypotheses therefore permit [F2], which gives a uniform exact-start local defect at most $C_4h_t^5$. [F1, F2, given, algebra]

2.1 Let $E_k=\|Z_k-Z(t_k)\|_2$. The RK4 stages from the paired exact and numerical starts are admitted by assumption, so [F3] bounds the difference of their one-step outputs by $(1+L_*h_t)E_k$. Adding the exact-start defect from step 1.1 by the triangle inequality gives $E_{k+1}\le(1+L_*h_t)E_k+C_4h_t^5$, with $E_0=0$. [F2, F3, given, step 1.1, algebra]

3.1 Apply [F4] to the recurrence in step 2.1 with $p=4$, $C_0=0$, $C=C_4$, and step width $h_t=T/n$. Its two cases are exactly the displayed estimate. [F4, step 2.1] ∎
