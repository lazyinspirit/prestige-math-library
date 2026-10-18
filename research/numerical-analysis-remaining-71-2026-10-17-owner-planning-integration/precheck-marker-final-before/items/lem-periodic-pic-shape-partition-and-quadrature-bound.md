---
id: lem-periodic-pic-shape-partition-and-quadrature-bound
kind: lemma
title: Partition and quadrature bounds for a periodic PIC shape
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-periodic-pic-grid-and-inner-product
  - def-periodic-pic-shape-assignment-and-gather
  - thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth
  - lem-periodic-composite-trapezoid-error
proof_strategy: direct
axiom_use: No choice principle is used; all sums are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Sections 2-2-3 and 5-2
      url: https://djvu.online/file/cjOfwRgltjv1g
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Section 2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
---

## Statement

Let $d,L,N,h,\eta_\varepsilon,Z_{\varepsilon,h}$, and $w_j^{\varepsilon,h}$ have the meanings in [[def-periodic-pic-grid-and-inner-product]] and [[def-periodic-pic-shape-assignment-and-gather]]. For a finite signed Borel measure $\mu$ on the torus, write $\|\mu\|_{\rm TV}=|\mu|(\mathbb T_L^d)$ and define
$$ (P_h^\varepsilon\mu)_j=h^{-d}\int_{\mathbb T_L^d}w_j^{\varepsilon,h}(x)\,d\mu(x). $$ Put $$ C_\eta=\frac{L^d}{12}\sum_{a=1}^d\|\partial_{aa}\eta_\varepsilon\|_\infty,\qquad Z_{\min}=L^d\min_{x\in\mathbb T_L^d}\eta_\varepsilon(x)>0 . $$ Then $\sum_jw_j^{\varepsilon,h}(x)=1$ for every $x$, and $Z_{\varepsilon,h}(x)\ge Z_{\min}$. The measure assignment satisfies $$ \left|(P_h^\varepsilon\mu)_j-(\eta_\varepsilon*\mu)(x_j)\right| \le \frac{C_\eta\|\eta_\varepsilon\|_\infty}{Z_{\min}}\|\mu\|_{\rm TV}h^2 . $$ For $g\in C^2(\mathbb T_L^d)$ define $$ C_{\eta,g}=\frac{L^d}{12}\sum_{a=1}^d \|\partial_{aa}(\eta_\varepsilon g)\|_\infty . $$ The gathered nodal samples satisfy the explicit bound $$ \left|\sum_jw_j^{\varepsilon,h}(x)g(x_j)-(\eta_\varepsilon*g)(x)\right| \le \frac{C_{\eta,g}+C_\eta\|g\|_\infty}{Z_{\min}}h^2 \qquad(x\in\mathbb T_L^d). $$

## Facts & Assumptions
**Given:** The periodic grid and pairing, the strictly positive normalized smooth kernel, its sampled normalizer, and the weights defined in [[def-periodic-pic-grid-and-inner-product]] and [[def-periodic-pic-shape-assignment-and-gather]].

[F1] [[def-periodic-pic-grid-and-inner-product]]: $h=L/N$, the grid is the uniform periodic tensor grid, and $h^d\sum_j$ is its volume-weighted sum.

[F2] [[def-periodic-pic-shape-assignment-and-gather]]: $Z_{\varepsilon,h}(x)=h^d\sum_j\eta_\varepsilon(x_j-x)$ and $w_j^{\varepsilon,h}(x)=h^d\eta_\varepsilon(x_j-x)/Z_{\varepsilon,h}(x)$.

[F3] [[lem-periodic-composite-trapezoid-error]]: for $f\in C^2(\mathbb T_L^d)$, the uniform periodic tensor-grid trapezoid error is at most $(L^dh^2/12)\sum_a\|\partial_{aa}f\|_\infty$.

[F4] [[thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth]]: $\eta_\varepsilon$ has unit integral.

## Proof

1.1 Strict positivity of $\eta_\varepsilon$ implies $Z_{\varepsilon,h}(x)>0$. Summing the weights in [F2] gives $\sum_jw_j^{\varepsilon,h}(x)=Z_{\varepsilon,h}(x)/Z_{\varepsilon,h}(x)=1$, and each weight is nonnegative. Since every summand in $Z$ is at least $h^d\min\eta_\varepsilon$, and $h^d|J_N|=L^d$, $Z_{\varepsilon,h}(x)\ge Z_{\min}$. [F1, F2, algebra]

1.2 For fixed $x$, apply [F3] to $f_x(y)=\eta_\varepsilon(y-x)g(y)$. The trapezoidal sum is $h^d\sum_j f_x(x_j)$ and its integral is $(\eta_\varepsilon*g)(x)$ because $\eta_\varepsilon$ is even. Its quadrature error is at most $C_{\eta,g}h^2$. Also $|(\eta_\varepsilon*g)(x)|\le\|g\|_\infty$ because $\eta_\varepsilon\ge0$ and [F4] gives unit integral. [F1, F3, F4, algebra]

2.1 Apply [F3] to $y\mapsto\eta_\varepsilon(y-x)$; translation does not change its second-derivative suprema and its integral is $1$ by [F4]. Thus $|Z_{\varepsilon,h}(x)-1|\le C_\eta h^2$. By [F2], $(P_h^\varepsilon\mu)_j=\int_{\mathbb T_L^d}\frac{\eta_\varepsilon(x_j-x)}{Z_{\varepsilon,h}(x)}\,d\mu(x) .$ Subtract $(\eta_\varepsilon*\mu)(x_j)$, factor $\eta_\varepsilon(x_j-x)$, and use $|Z^{-1}-1|=|Z-1|/Z\le C_\eta h^2/Z_{\min}$. Integrating against the total variation measure gives the first bound. [F1, F2, F3, F4, step 1.1, algebra]

3.1 The gathered sum in the Statement is $h^d\sum_j f_x(x_j)/Z_{\varepsilon,h}(x)$ by [F2]. Subtract the integral, use the quadrature error from step 1.2 divided by $Z\ge Z_{\min}$, and bound the normalization correction by $|Z^{-1}-1|\|g\|_\infty\le C_\eta h^2\|g\|_\infty/Z_{\min}$. This is the second bound. [F2, step 1.1, step 1.2, algebra] ∎
