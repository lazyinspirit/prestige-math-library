---
id: alg-periodic-pic-zero-mean-poisson-solver
kind: algorithm
title: Fourier diagonal solver for the periodic centered-difference Poisson equation
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-periodic-pic-grid-and-inner-product,
    thm-periodic-centered-difference-poisson-zero-mode-and-gauge
  ]
justified_by: []
axiom_use: No choice principle is used; the procedure consists of finite
  transforms and divisions by positive real numbers.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Benjamin Seibold, MIT 18.336 Lecture 5, Finite Difference Approximation
      url: https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell
        Method with Phase-Space Remapping for the Vlasov–Poisson Equation,
        Section 2.2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Input an odd $N\ge3$ periodic grid as in [[def-periodic-pic-grid-and-inner-product]] and a real grid source $s$. If $\bar s\ne0$, return the status incompatible-source. Otherwise compute the finite discrete Fourier coefficients $\widehat s_k=N^{-d}\sum_js_je^{-2\pi i k\cdot j/N}$. Set $\widehat\phi_0=0$ and, for each $k\ne0$, set $\widehat\phi_k=\widehat s_k/\lambda_h(k)$ with $\lambda_h(k)$ from [[thm-periodic-centered-difference-poisson-zero-mode-and-gauge]]. Return the inverse finite Fourier transform $\phi_j=\sum_{k\in\mathcal K_N}\widehat\phi_ke^{2\pi i k\cdot j/N}$ and status success. All arithmetic here is exact real or complex arithmetic; an implementation using floating-point FFTs requires a separate perturbation analysis.

