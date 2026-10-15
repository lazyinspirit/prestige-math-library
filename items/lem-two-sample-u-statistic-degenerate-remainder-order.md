---
id: lem-two-sample-u-statistic-degenerate-remainder-order
kind: lemma
title: Second-moment order of the degenerate remainder
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - lem-two-sample-u-statistic-hoeffding-decomposition
  - def-moments-variance-and-covariance
  - cor-cauchy-schwarz-inequality-for-l-two
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Appendix A, Lemma A.2"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
    - title: "Péter Major, Some Results About U-statistics, in On the Estimation of Multiple Random Integrals and U-Statistics, Lecture Notes in Mathematics 2079, Theorem 9.1"
      url: "https://static.renyi.hu/~major/articles/lect-note1.pdf"
---

## Statement

In the setup of [[lem-two-sample-u-statistic-hoeffding-decomposition]], fix
$r$ and suppose $m/N\to p\in(0,1)$, $n/N\to1-p$, with $N=m+n$. At row $N$,
let the two groups be independent IID samples from probability measures
$P_N,Q_N$ and use the same block-symmetric kernel $h$. If
$$B:=\sup_N\max_{\eta\in\{P_N,Q_N\}^{2r}}E_\eta[h^2]<\infty,$$
where $E_\eta$ integrates independent arguments with the assigned marginal
laws. Write $E_N$ for expectation under the row-$N$ sample law. Then the
remainder in the first-projection decomposition satisfies

$$E_N[R_{m,n}^2]=O(N^{-2}),\qquad \sqrt N R_{m,n}\to0\quad\text{in }L^2.$$

## Facts & Assumptions

**Given:** Fixed order $r$, proportionally growing $m,n$, independent IID
groups with row laws $P_N,Q_N$, and the canonical Hoeffding components from
the preceding lemma. Fixed $P,Q$ is the special case $P_N=P$, $Q_N=Q$.

[F1] [[lem-two-sample-u-statistic-hoeffding-decomposition]]: $R_{m,n}$ is the finite sum of the terms $\binom ra\binom rb U_{a,b}(h_{a,b})$ with $a+b\ge2$; every selected-coordinate kernel is canonical.

[F2] [[def-moments-variance-and-covariance]]: variance is the second centered moment and covariance is the expectation of the product of centered variables.

[F3] [[cor-cauchy-schwarz-inequality-for-l-two]]: $|E[AB]|\le(EA^2)^{1/2}(EB^2)^{1/2}$.

## Proof

**Given:** The hypotheses in the Statement. Prove the remainder is $O_{L^2}(N^{-1})$.

1.1 Fix $(a,b)$ with $a+b\ge1$. Expand $U_{a,b}(h_{a,b})$ as the average over its $\binom ma\binom nb$ pairs of index subsets. Two summands with different X-index sets or different Y-index sets have covariance zero: choose an observation appearing in one selected-coordinate set but not the other, condition on all other observations, and integrate its canonical coordinate to zero by [F1]. The identical-index terms each have second moment at most $E_N[h_{a,b}^2]$, where $E_N$ is expectation under the row-$N$ sample law. Therefore $E_N[U_{a,b}(h_{a,b})^2]\le\frac{E_N[h_{a,b}^2]}{\binom ma\binom nb},$ with the convention $\binom m0=\binom n0=1$. [F1, F2, algebra]

1.2 The coordinate operators in the decomposition have $L^2$ norm at most $1$ for $P_u$ by Cauchy–Schwarz on a probability section. The pointwise inequality $|f-P_uf|^2\le2|f|^2+2|P_uf|^2$ then bounds the $L^2$ norm of $I-P_u$ by $2$. Hence each $E_N[h_{a,b}^2]\le 4^{2r}E_N[h^2]\le4^{2r}B$, uniformly over $N$ and the finitely many pairs $(a,b)$. Since $m,n\asymp N$ and $a,b$ are fixed, $\binom ma\binom nb\asymp N^{a+b}$. [F1, F3, algebra]

2.1 Distinct Hoeffding components in [F1] are orthogonal by the same canonical-coordinate argument used in step 1.1. Summing their variances with the fixed coefficients $\binom ra^2\binom rb^2$ gives $E_N[R_{m,n}^2]=\sum_{a+b\ge2}\binom ra^2\binom rb^2 E_N[U_{a,b}(h_{a,b})^2]\le C_{r,p}BN^{-2},$ because there are finitely many pairs and every denominator has order at least $N^2$. Multiplying by $N$ proves $E_N[(\sqrt N R_{m,n})^2]\to0$. [F1, step 1.1, step 1.2, algebra] ∎
