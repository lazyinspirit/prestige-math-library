---
id: def-periodic-pic-shape-assignment-and-gather
kind: definition
title: Periodic PIC deposition shape and gather operators
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-periodic-pic-grid-and-inner-product]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: No choice principle is used.
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Sections 2-2-3 and 5-2
      url: https://djvu.online/file/cjOfwRgltjv1g
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Section 2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
---

## Definition

On the torus and grid of [[def-periodic-pic-grid-and-inner-product]], an algebraic assignment shape is any family of functions $w_j:\mathbb T_L^d\to[0,\infty)$ such that $\sum_{j\in J_N}w_j(x)=1$ for every $x$. For the smooth fixed-$\varepsilon$ branch used in the force-error and ODE results, put $\alpha_\varepsilon=e^{-\varepsilon/L}$ and choose the explicit even periodic kernel
$$ \eta_\varepsilon(x)=L^{-d}\prod_{a=1}^d \frac{1-\alpha_\varepsilon^2}{1-2\alpha_\varepsilon\cos(2\pi x_a/L)+\alpha_\varepsilon^2}. $$ For this smooth branch and each $x\in\mathbb T_L^d$, set $$ Z_{\varepsilon,h}(x)=h^d\sum_{j\in J_N}\eta_\varepsilon(x_j-x),\qquad w_j^{\varepsilon,h}(x)=\frac{h^d\eta_\varepsilon(x_j-x)}{Z_{\varepsilon,h}(x)}. $$ Each factor in the kernel denominator is positive, so $Z_{\varepsilon,h}(x)>0$ and the smooth-branch weights are well-defined. For any algebraic shape family above and finitely many particle positions $X=(X_1,\ldots,X_P)$ with charges $q_1,\ldots,q_P\in\mathbb R$, write $Q=\sum_{p=1}^Pq_p$ and define deposited charge density $$ \rho_j(X)=h^{-d}\sum_{p=1}^Pq_pw_j(X_p)-Q/L^d . $$
For any grid scalar $g$, its potential gather is $(G_Xg)_p=\sum_jw_j(X_p)g_j$. For any grid vector $E$, its field gather is defined componentwise by the same weights, $(G_XE)_p=\sum_jw_j(X_p)E_j$. On the smooth fixed-$\varepsilon$ branch, $w_j$ means the explicit family $w_j^{\varepsilon,h}$ above.

