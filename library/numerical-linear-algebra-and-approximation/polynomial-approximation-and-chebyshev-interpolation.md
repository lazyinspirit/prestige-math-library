---
page: polynomial-approximation-and-chebyshev-interpolation
title: "Polynomial approximation and Chebyshev interpolation"
status: published
items:
  - def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants
  - lem-sine-chord-and-lipschitz-bounds
  - lem-cardinal-lagrange-interpolation-and-operator-norm
  - cor-best-polynomial-approximation-errors-vanish
  - lem-chebyshev-cardinal-polynomial-formulas
  - thm-chebyshev-interpolation-near-best-error-bound
  - thm-chebyshev-interpolation-lebesgue-constant-log-bound
examples: []
---

For $f\in C[-1,1]$, $E_n(f)$ is the best degree-$n$ uniform error.
The first-kind root and Chebyshev–Lobatto interpolation operators use their
specified $n+1$ angular nodes, with the one-node case stated separately.
Their Lebesgue constants are bounded by
$\left(4+(\pi+4)/\log2\right)\log(n+1)$ for $n\geq1$, and their
interpolation errors are at most $(1+\Lambda_n)E_n(f)$.

The logarithmic estimate is proved from the trigonometric cardinal formulas,
nearest-node separation, and a harmonic sum. Weierstrass density proves only
$E_n(f)\to0$; interpolation convergence requires a rate strong enough to
control the logarithmic factor. Barycentric evaluation and finite-precision
conditioning are separate topics. No stability claim for rounded evaluations
is made here.
