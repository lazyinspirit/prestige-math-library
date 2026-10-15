---
id: thm-moving-block-bootstrap-clt-for-dependent-data
kind: theorem
title: Moving block bootstrap CLT for dependent Hilbert-valued data
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - lem-weighted-overlapping-block-moment-and-covariance-limits
  - lem-conditional-independent-block-bootstrap-clt
  - alg-moving-block-bootstrap
  - def-axiom-of-choice
  - def-conditional-weak-convergence-in-probability
  - def-l2-m-approximable-causal-bernoulli-shift
  - lem-moving-block-bootstrap-conditional-covariance
  - thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts
  - lem-independent-tail-replacement-errors-are-monotone
proof_strategy: block decomposition, conditional iid limit, covariance consistency and Hilbert-space tightness
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Theorem 2.1 and Appendix
      url: https://arxiv.org/pdf/1711.01070
    - title: A. DasGupta, Asymptotic Theory of Statistics and Probability, Section 29.18, Block Bootstrap Methods, pp. 478-479
      url: https://www.stat.purdue.edu/~dasgupta/bootstrap.pdf
dependency_level: 5
---

## Statement

Assume the Axiom of Choice. Let $H=L^2([0,1])$, and let $(X_t)_{t\in\mathbb Z}$ be a centered causal Bernoulli shift that is $L^2$-$m$-approximable under [[def-l2-m-approximable-causal-bernoulli-shift]]. Write

$$\delta_m=\bigl(E\|X_0-X_{0,m}\|_H^2\bigr)^{1/2}.$$

Retain the displayed source approximation condition $m\delta_m\to0$. For each $n$, let $b_n$ be an integer with $b_n\to\infty$ and $b_n/\sqrt n\to0$. For all sufficiently large $n$, these conditions give $1\le b_n\le n$; apply [[alg-moving-block-bootstrap]] to $X_1,\ldots,X_n$ on this admissible tail. All limits below concern that tail. Let $\Gamma$ be the long-run covariance operator from [[thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]], and let $\bar X_n^*=n^{-1}\sum_{t=1}^nX_t^*$. Then

$$\mathcal L^*\!\left(\sqrt n(\bar X_n^*-E^*\bar X_n^*)\right)\Rightarrow\mathcal L(G)\quad\hbox{in probability},$$

and

$$\left\|n\,\operatorname{Cov}^*(\bar X_n^*)-\Gamma\right\|_{\mathrm{HS}}\longrightarrow0\quad\hbox{in probability},$$

where $G$ is the centered $H$-valued Gaussian with covariance $\Gamma$.

## Facts & Assumptions

**Given:** AC, the centered causal shift, summable replacement errors with $m\delta_m\to0$, and $b=b_n\to\infty$, $b/\sqrt n\to0$.

[F1] [[def-l2-m-approximable-causal-bernoulli-shift]] supplies the centered measurable causal representation, second moment, replacement extension and summable errors.

[F2] [[thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]] supplies the sampling-law limit $n^{-1/2}\sum_{t=1}^nX_t\Rightarrow G$ and its long-run covariance $\Gamma$. This is a sample-sum CLT, not a time-indexed FCLT.

[F3] [[alg-moving-block-bootstrap]] concatenates independent uniformly chosen overlapping blocks and retains exactly $n$ observations. [[lem-moving-block-bootstrap-conditional-covariance]] gives its exact full-plus-partial-block covariance formula.

[F4] [[lem-weighted-overlapping-block-moment-and-covariance-limits]] proves uniform integrability and empirical block covariance consistency for bounded normalized deterministic weights with fixed-lag autocorrelations tending to one. [[lem-conditional-independent-block-bootstrap-clt]] proves the conditional CLT, tightness and trace-norm covariance limit for exactly this resampling, including the last partial block.

[A1] [[def-axiom-of-choice]] is assumed. Its uses are those of the Hilbert sampling and conditional-block suppliers, including the complete orthonormal basis in the latter; no further choice principle is added here.

## Proof

**Given:** The assumptions and suppliers above.

1.1 Take $c_{b,\ell}=1$ for $1\le\ell\le b$. These weights are bounded by one, have $b^{-1}\sum_\ell c_{b,\ell}^2=1$, and for each fixed $h\ge0$ have $b^{-1}\sum_{\ell=1}^{b-h}c_{b,\ell}c_{b,\ell+h}=(1-h/b)_+\to1$. Thus every process and weight hypothesis of [F4] holds, with exactly the displayed approximation rate and block regime. [given, F1, F4, A1, algebra]

2.1 Write $n=kb+r$, $0\le r<b$. Subtracting the conditional mean from the sum of the $k$ complete sampled blocks and the sampled length-$r$ prefix gives exactly the variable $Z_n^*$ in the conditional-block supplier. The candidate starts for both block sizes are the same $N=n-b+1$ starts, as required by [F3]. Hence [F4] gives the asserted conditional law and trace-norm covariance convergence. The Hilbert-Schmidt conclusion follows from $\|T\|_{\mathrm{HS}}\le\|T\|_1$; the covariance in question is exactly $n\operatorname{Cov}^*(\bar X_n^*)$ by [F3]. The remainder has expected conditional squared norm $O(b/n)$, so no divisibility condition is used. [F3, F4, step 1.1, algebra]

3.1 The limiting Gaussian is the same $G$ as in the sampling-law limit [F2], because both have covariance $\Gamma$. This proves both stated limits with the approved hypotheses. [F2, F4, step 2.1] ∎

Under the independent-tail replacement convention in the process definition, [[lem-independent-tail-replacement-errors-are-monotone]] proves that summability already implies $m\delta_m\to0$. The displayed rate is retained to match the source theorem contract; it is not a stronger process restriction under this convention.
