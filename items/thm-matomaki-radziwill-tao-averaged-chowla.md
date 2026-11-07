---
id: thm-matomaki-radziwill-tao-averaged-chowla
kind: theorem
title: "Matomäki–Radziwiłł–Tao Chowla correlation on average over shifts"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-averaged-shift-liouville-correlation
  - def-liouville-function
  - def-short-interval-sum-of-an-arithmetic-function
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - lem-short-window-fourier-correlation-identity
  - lem-short-exponential-average-controls-squared-correlations
  - lem-bounded-factor-shift-average-from-correlation-energy
  - lem-corrected-ramare-prime-divisor-identity
  - lem-restoring-a-sparse-factorization-exception-in-shift-averages
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Kaisa Matomäki, Maksym Radziwiłł, and Terence Tao, An averaged form of Chowla's conjecture, Theorem 1.1 (1.3)"
      url: "https://arxiv.org/pdf/1503.05121v3"
---

## Statement

For each integer $k\ge1$, there is a constant $C_k>0$ depending only on $k$
such that for all real $X,H$ with $10\le H\le X$,
$$
\sum_{\substack{h_2,\ldots,h_k\in\mathbb Z\\1\le h_j\le H}}\left|\sum_{\substack{n\in\mathbb Z_{>0}\\1\le n\le X}}\lambda(n)\prod_{j=2}^k\lambda(n+h_j)\right|\le C_k H^{k-1}X\left(\frac{\log\log H}{\log H}+\frac1{(\log X)^{1/3000}}\right).
$$
The sums are over integers. The first shift is fixed at $0$; the remaining
$k-1$ positive shifts are averaged in absolute value. For $k=1$, the shift
tuple is empty and contributes one term, and the empty product equals $1$.

## Statement references

[[def-liouville-function|Liouville function on the positive integers]]

[[def-averaged-shift-liouville-correlation|normalization of the shift average]]

[[def-short-interval-sum-of-an-arithmetic-function|closed short-interval sum used in the source proof]]

[[def-natural-logarithm|natural logarithm in the error terms]]

[[thm-natural-logarithm-laws|logarithm domain on positive real inputs]]

[Matomäki, Radziwiłł, and Tao, Theorem 1.1, stronger form (1.3), PDF p. 2](https://arxiv.org/pdf/1503.05121v3)

## Facts & Assumptions

**Given:** The fixed integer $k\ge1$ and the real parameters $10\le H\le X$.

[F1] [[def-liouville-function]]: for a positive integer $n$, $\lambda(n)=(-1)^{\Omega(n)}$, where $\Omega(n)$ counts prime factors with multiplicity.

[F2] [[def-averaged-shift-liouville-correlation]]: the absolute sum over $h_2,\ldots,h_k$ is normalized by $H^{k-1}X$.

[F3] [[def-short-interval-sum-of-an-arithmetic-function]]: the source uses closed sums over the positive integers in $[x,x+h]$; the local definition fixes that endpoint convention.

[F4] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$.

[F5] [[thm-natural-logarithm-laws]]: the natural logarithm is strictly increasing on the positive reals.

[F6] [[thm-natural-logarithm-laws]]: $\log 1=0$.

## Local proof blocks and remaining obligation

The Fourier identity, its L1-to-correlation estimate, the bounded-factor van der Corput inequality, the corrected Ramaré identity and the exact cost of restoring exceptional factorizations are proved locally below. They do not supply the required truncated short-exponential estimate. The smallest analytic block remaining is MRT Theorem 2.3/Proposition 2.4, uniformly over its typical-factorization set and W range. Its major arcs require the complex truncated mean-square theorem A.2 (including the corrected v3 Proposition A.3), not merely the real-valued Matomäki–Radziwiłł statement. Its minor arcs require the prime-quadruple upper-bound sieve and rational-frequency reciprocal-sum bound with the exact W powers. The Liouville specialization additionally requires the uniform growing-character/twist pretentious-distance estimate (1.12). These estimates have not been proved locally here. Fourier energy alone gives fourth-root losses; the source's restriction to typical factorization and subsequent density restoration are essential for the stated log-log/log rate. The k=1 case separately requires the corresponding quantitative Liouville mean estimate. All parameter ranges, the first shift 0, and both original error terms remain unchanged.

[[lem-short-window-fourier-correlation-identity]]

[[lem-short-exponential-average-controls-squared-correlations]]

[[lem-bounded-factor-shift-average-from-correlation-energy]]

[[lem-corrected-ramare-prime-divisor-identity]]

[[lem-restoring-a-sparse-factorization-exception-in-shift-averages]]
