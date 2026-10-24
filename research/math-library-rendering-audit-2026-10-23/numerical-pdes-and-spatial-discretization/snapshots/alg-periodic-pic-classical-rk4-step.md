---
id: alg-periodic-pic-classical-rk4-step
kind: algorithm
title: Classical RK4 step for the fixed-grid regularized PIC particle ODE
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-periodic-pic-grid-and-inner-product
  - def-periodic-pic-shape-assignment-and-gather
  - def-periodic-pic-regularized-grid-interaction-kernel
  - thm-periodic-pic-charge-conservation-and-neutralized-source
  - alg-periodic-pic-zero-mean-poisson-solver
  - thm-periodic-pic-poisson-solver-returns-the-zero-mean-solution
  - def-euler-midpoint-rk4-tableaus
justified_by: []
axiom_use: No choice principle is used; the algorithm is a finite composition of
  explicit stages.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: MIT OpenCourseWare 18.330, Introduction to Numerical Analysis, Chapter 5
      url: https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles,
        Chapter 4
      url: https://djvu.online/file/cjOfwRgltjv1g
verification:
  precheck: n/a
---

## Definition

Input an odd periodic grid with $N\ge3$, a fixed $\varepsilon>0$, particle count $P\ge1$, total charge $Q$, total mass $M>0$, a state $Z=(z_1,\ldots,z_P)$ with $z_p=(X_p,V_p)\in\mathbb R^{2d}$, and step $\Delta t>0$. The grid, mass, and shape must satisfy the domains in [[def-periodic-pic-grid-and-inner-product]], [[def-periodic-pic-regularized-grid-interaction-kernel]], and [[def-periodic-pic-shape-assignment-and-gather]]; otherwise return status invalid-input. Use the exact-evaluation phase field of [[def-periodic-pic-regularized-grid-interaction-kernel]]:
$$ F_p(Z)=\frac1P\sum_{r=1}^P\mathbb K_{\varepsilon,h}(z_p,z_r). $$ At each of four classical RK stages, evaluate this complete field at that stage's particle state: deposit every charge $Q/P$, subtract the neutralizing background, solve its zero-mean Poisson system with [[alg-periodic-pic-zero-mean-poisson-solver]], compute $E_h=-D^0\phi_h$, and gather $E_h$ at each stage position $X_p$. Multiply the gathered field by $c=Q/M$ and return $F_p=(V_p,c(G_XE_h)_p)$, using that stage's velocity $V_p$. With $k_1=F(Z)$, $k_2=F(Z+\frac{\Delta t}{2}k_1)$, $k_3=F(Z+\frac{\Delta t}{2}k_2)$, and $k_4=F(Z+\Delta t\,k_3)$, return $$ Z^+=Z+\frac{\Delta t}{6}(k_1+2k_2+2k_3+k_4). $$
Every stage source is compatible by [[thm-periodic-pic-charge-conservation-and-neutralized-source]], and [[thm-periodic-pic-poisson-solver-returns-the-zero-mean-solution]] supplies each exact finite field solve. Thus no field-solve-failure branch occurs for admissible input. All operations use exact real or complex arithmetic; no floating-point stability or error bound is asserted.

