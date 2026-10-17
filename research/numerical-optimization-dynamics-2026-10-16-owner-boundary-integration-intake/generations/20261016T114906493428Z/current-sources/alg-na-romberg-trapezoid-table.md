---
id: alg-na-romberg-trapezoid-table
kind: algorithm
title: "Finite Romberg table from nested composite trapezoid levels"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 0
deps: [def-composite-trapezoidal-rule, def-canonical-natural, thm-reals-field, def-nat-power, lem-of-naturals-positive, lem-power-monotone]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.3"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 228–235, finite Euler–Maclaurin expansion for trapezoidal rules."
    - title: "NIST Digital Library of Mathematical Functions, §3.5 Quadrature"
      url: "https://dlmf.nist.gov/3.5"
      locator: "Full-text section §3.5(iii), equations 3.5.9–3.5.12 on the finite even-power expansion and Romberg recurrence."
verification:
  precheck: n/a
---

## Definition

Input a real function $f$ on a nondegenerate closed interval $[a,b]$ and an integer $L\ge0$. The output is the finite triangular table $(R_{\ell,j})_{0\le j\le\ell\le L}$ and its top entry $R_{L,L}$.

1. For each $\ell=0,\ldots,L$, set $N_\ell:=2^\ell\in\mathbb N$ using natural exponentiation of [[def-nat-power]], $h_\ell:=(b-a)/N_\ell$, and $R_{\ell,0}:=T_{N_\ell}(f)$ using the composite trapezoidal value $T_N$ of [[def-composite-trapezoidal-rule]]. Natural powers in real scalar expressions are understood through their canonical real images.
2. For $j=1,\ldots,L$, and then for each $\ell=j,\ldots,L$, set
$$R_{\ell,j}:=R_{\ell,j-1}+\frac{R_{\ell,j-1}-R_{\ell-1,j-1}}{4^j-1}.$$

For $j\ge1$, claim 3 of [[lem-power-monotone]] gives $4^j\ge4>1$, using the natural-to-real power identity of [[def-nat-power]]; thus every displayed denominator $4^j-1$ is the positive real $4^j-1$ and is invertible by [[thm-reals-field]]. This definition returns only the stated finite table; it makes no accuracy claim for nonsmooth inputs or finite-precision arithmetic.
