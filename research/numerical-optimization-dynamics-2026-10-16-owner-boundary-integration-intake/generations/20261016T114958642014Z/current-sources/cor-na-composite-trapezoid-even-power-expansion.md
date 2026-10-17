---
id: cor-na-composite-trapezoid-even-power-expansion
kind: corollary
title: "Even-power expansion of trapezoid levels with a uniform remainder"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 3
deps: [thm-na-euler-maclaurin-composite-trapezoid-remainder, def-higher-derivatives-and-smoothness, def-composite-trapezoidal-rule, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, def-na-bernoulli-polynomials]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The result follows from the finite remainder formula with explicit norm bounds.
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.3"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 230–233, finite Euler–Maclaurin remainders and trapezoid expansion."
    - title: "NIST Digital Library of Mathematical Functions, §3.5(iii), Romberg Integration"
      url: "https://dlmf.nist.gov/3.5"
      locator: "Full-text section §3.5(iii), equations 3.5.9–3.5.12 on the finite even-power expansion and Romberg recurrence."
---

## Statement

Let $a<b$, let $j\ge1$ be an integer, and let $f\in C^{2j+2}([a,b])$. For $N\ge1$ set $h=(b-a)/N$, $I=\int_a^b f$, and
$$c_r:=\frac{B_{2r}}{(2r)!}\bigl(f^{(2r-1)}(b)-f^{(2r-1)}(a)\bigr),\qquad 1\le r\le j+1,$$
using the Bernoulli numbers of [[def-na-bernoulli-polynomials]]. Then
$$T_N(f)=I+\sum_{r=1}^{j}c_rh^{2r}+\varepsilon_N,\qquad |\varepsilon_N|\le C_jh^{2j+2},$$
where the level-independent finite constant
$$C_j:=|c_{j+1}|+\frac{(b-a)M_{2j+2}}{(2j+2)!}\|f^{(2j+2)}\|_\infty,\qquad M_{2j+2}:=\max_{0\le u\le1}|B_{2j+2}(u)|,$$
does not depend on $N$. Thus the remainder bound is uniform over every set of dyadic levels.

## Facts & Assumptions

**Given:** $a<b$, an integer $j\ge1$, $f\in C^{2j+2}([a,b])$, and an integer trapezoid panel count $N\ge1$.

[F1] [[thm-na-euler-maclaurin-composite-trapezoid-remainder]]: for every $p\ge1$, the composite trapezoid equals the integral, the first $p$ endpoint Bernoulli corrections, and a remainder bounded by $(b-a)M_{2p}h^{2p}\|f^{(2p)}\|_\infty/(2p)!$.

[F2] [[def-higher-derivatives-and-smoothness]]: $C^{2j+2}$ supplies all continuous endpoint derivatives through order $2j+2$.

[F3] [[def-composite-trapezoidal-rule]]: $T_N(f)$ uses the uniform mesh of width $h=(b-a)/N$.

[F4] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: continuous real functions on the compact interval $[a,b]$ are bounded and attain finite extrema.

## Proof

1.1 Apply [F1] with $p=j+1$. The formula has the displayed coefficients $c_1,\ldots,c_{j+1}$ and a remainder $\rho_N$ satisfying $|\rho_N|\le (b-a)M_{2j+2}h^{2j+2}\|f^{(2j+2)}\|_\infty/(2j+2)!$. [given, F1, F2, F3]

2.1 By [F2] and [F4], each derivative norm in $c_{j+1}$ and $C_j$ is finite; the Bernoulli maximum exists by the Euler–Maclaurin theorem's construction. Put $\varepsilon_N:=c_{j+1}h^{2j+2}+\rho_N$. The triangle inequality gives $|\varepsilon_N|\le\bigl(|c_{j+1}|+(b-a)M_{2j+2}\|f^{(2j+2)}\|_\infty/(2j+2)!\bigr)h^{2j+2}=C_jh^{2j+2}$. Every term in $C_j$ depends only on $f,a,b,j$, not on $N$, so this is the claimed uniform remainder. [given, F1, F2, F4, step 1.1, algebra] ∎
