---
page: clenshaw-curtis-and-extrapolation-quadrature
title: "Clenshaw–Curtis and extrapolation quadrature"
status: draft
requires:
  - polynomial-interpolation-and-remainder
  - computed-fast-transforms-and-convolution
  - polynomial-approximation-and-chebyshev-interpolation
  - composite-quadrature-rules
items:
  - alg-na-romberg-trapezoid-table
  - def-na-bernoulli-polynomials
  - def-na-clenshaw-curtis-dct-i
  - def-na-closed-newton-cotes-eight-panel-rule
  - def-na-peano-kernel
  - lem-na-chebyshev-degree-bound-from-recurrence
  - lem-na-chebyshev-recurrence-angle-identity
  - lem-na-bernoulli-polynomial-identities
  - lem-na-chebyshev-integral-moments
  - lem-na-clenshaw-curtis-dct-i-orthogonality
  - thm-na-peano-kernel-remainder-and-bound
  - thm-na-euler-maclaurin-composite-trapezoid-remainder
  - cor-na-composite-trapezoid-even-power-expansion
  - lem-na-closed-newton-cotes-eight-panel-weights-and-exactness
  - thm-na-romberg-even-power-cancellation
  - cor-na-closed-newton-cotes-eight-panel-peano-bound
  - thm-na-clenshaw-curtis-interpolation-coefficients
  - def-na-clenshaw-curtis-quadrature
  - thm-na-clenshaw-curtis-exactness-and-near-best-error
  - alg-na-computed-clenshaw-curtis-via-fast-dft
examples: []
---

Clenshaw–Curtis quadrature is defined by integrating the Chebyshev–Lobatto
interpolant, with explicit DCT-I endpoint conventions and a midpoint case at
degree zero. It is exact through degree $n$. The approximation estimate is
$$\left|\int_a^b f-Q_{n,[a,b]}(f)\right|\le (b-a)(1+\Lambda_n^L)E_n(f),$$
where $E_n(f)$ is the best uniform degree-$n$ error and $\Lambda_n^L$ is the
Lobatto interpolation norm. The factor $(b-a)$ follows by integrating the
interpolation residual over the physical interval; on $[-1,1]$ the factor is
$2$. The source contract's shorter $[-1,1]$ expression without that factor
is not used.

The page also defines a finite nested Romberg table. A finite Euler–Maclaurin
formula supplies a uniform even-power expansion, and a separate induction
proves the cancellations under that expansion hypothesis. An observed error
ratio alone does not establish the hypothesis or the resulting order.

For a finite quadrature functional annihilating polynomials through degree
$r-1$, the Peano kernel gives an integral remainder and an $L^1$ bound. The
nine-node closed Newton–Cotes rule is verified exactly through degree nine;
its negative weights give a sample-perturbation norm larger than its signed
weight sum. The even-extension DFT algorithm inherits only the computed-DFT
status in its supplier contract and makes no new stability or accuracy claim.
