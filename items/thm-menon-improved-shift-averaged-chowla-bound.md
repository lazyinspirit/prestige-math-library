---
id: thm-menon-improved-shift-averaged-chowla-bound
kind: theorem
title: "Menon improved shift-averaged Chowla bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-averaged-shift-liouville-correlation
  - def-liouville-function
  - thm-menon-short-interval-liouville-exponential-sum
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
    - title: "Siddarth Menon, Improved bounds for multiplicative functions in almost all short intervals, Theorem 1.5"
      url: "https://arxiv.org/pdf/2607.15574v1"
---

## Statement

For every integer $k\ge2$, there is a constant $C_k>0$ depending only on $k$
such that for all real $X,H$ with $X\ge H\ge10$,
$$
\sum_{\substack{h_2,\ldots,h_k\in\mathbb Z\\1\le h_j\le H}}\left|\sum_{\substack{n\in\mathbb Z_{>0}\\1\le n\le X}}\lambda(n)\prod_{j=2}^k\lambda(n+h_j)\right|\le C_k H^{k-1}X\left(\frac{\log\log H}{\log H}+\frac{(\log\log X)^2}{\log X}\right).
$$
The statement is unconditional; it makes no Axiom of Choice assumption.

## Statement references

[[def-liouville-function|Liouville function on the positive integers]]

[[def-averaged-shift-liouville-correlation|normalization of the shift average]]

[[def-natural-logarithm|natural logarithm in the error terms]]

[[thm-natural-logarithm-laws|logarithm domain on positive real inputs]]

[[thm-menon-short-interval-liouville-exponential-sum|Theorem 1.4 input in Menon's proof route; its current local proof is not supplied and its statement assumes Countable Choice]]

[Menon, Theorem 1.5 and proof sketch, PDF pp. 3 and 48–49](https://arxiv.org/pdf/2607.15574v1)

## Facts & Assumptions

**Given:** The fixed integer $k\ge2$ and real parameters $X\ge H\ge10$.

[F1] [[def-liouville-function]]: $\lambda(n)=(-1)^{\Omega(n)}$ for positive integers $n$, with prime factors counted with multiplicity.

[F2] [[def-averaged-shift-liouville-correlation]]: the shift average uses the absolute value of each inner natural sum and normalization $H^{k-1}X$.

[F3] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$.

[F4] [[thm-natural-logarithm-laws]]: the natural logarithm is strictly increasing on the positive reals.

[F5] [[thm-natural-logarithm-laws]]: $\log 1=0$.

[L1] [[thm-menon-short-interval-liouville-exponential-sum]]: the current local supplier statement assumes $\mathrm{AC}_\omega$ and has no supplied Proof. It is recorded as the planned proof interface only, not as an established premise in a completed proof of this unconditional claim.

## Local proof blocks and remaining obligation

The finite Fourier/Ramaré/van der Corput/density-restoration blocks are locally proved. The required analytic input is Menon Proposition 5.1 on the restricted typical-factorization set, with W up to min(h^(1/(2 C_kappa)),(log X)^20), P1=W^C_kappa and Q1=min(h,h0)/W^3. The proof needs Corollary 3.7, which has arbitrary negative powers of log X before restoring the sieve complement. The unrestricted Theorem 1.4 bound alone does not give this restricted estimate with the necessary W power, and repeated square-root losses do not preserve the advertised error. Corollary 3.7 depends on the full separated-last-prime-range Dirichlet-polynomial argument in Proposition 3.1 and its contour estimates. No complete local proof of those analytic blocks is supplied. The existing batch38 exponential-sum supplier remains unproved and explicitly assumes Countable Choice; it therefore cannot establish the present unconditional Statement. No choice assumption has been added, and no supplier claim has been imported. The original fixed k, all X>=H>=10 and improved error are preserved.

[[lem-short-window-fourier-correlation-identity]]

[[lem-short-exponential-average-controls-squared-correlations]]

[[lem-bounded-factor-shift-average-from-correlation-energy]]

[[lem-corrected-ramare-prime-divisor-identity]]

[[lem-restoring-a-sparse-factorization-exception-in-shift-averages]]
