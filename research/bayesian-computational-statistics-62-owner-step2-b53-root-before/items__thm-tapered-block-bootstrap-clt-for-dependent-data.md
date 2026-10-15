---
id: thm-tapered-block-bootstrap-clt-for-dependent-data
kind: theorem
title: Tapered block bootstrap CLT for dependent Hilbert-valued data
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps: [lem-weighted-overlapping-block-moment-and-covariance-limits, lem-conditional-independent-block-bootstrap-clt, alg-tapered-block-bootstrap, def-axiom-of-choice, def-conditional-weak-convergence-in-probability, def-l2-m-approximable-causal-bernoulli-shift, lem-taper-window-l2-normalization, lem-tapered-block-bootstrap-conditional-covariance, thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]
proof_strategy: tapered block decomposition, conditional iid limit, tapered covariance consistency and Hilbert-space tightness
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Theorem 2.2"
      url: https://arxiv.org/pdf/1711.01070
    - title: "A. DasGupta, Asymptotic Theory of Statistics and Probability, Section 29.18, Block Bootstrap Methods, pp. 478-479"
      url: https://www.stat.purdue.edu/~dasgupta/bootstrap.pdf
---

## Statement

Assume the Axiom of Choice. Let $H=L^2([0,1])$, and let $(Y_t)_{t\in\mathbb Z}$ be a centered causal Bernoulli shift that is $L^2$-$m$-approximable under [[def-l2-m-approximable-causal-bernoulli-shift]]. Write

$$\delta_m=\bigl(E\|Y_0-Y_{0,m}\|_H^2\bigr)^{1/2}.$$

Assume $m\delta_m\to0$, and let the integers $b_n\to\infty$ with $b_n/\sqrt n\to0$. Let the taper satisfy the support, positivity-near-$1/2$, symmetry and monotonicity conditions in [[alg-tapered-block-bootstrap]]. For all sufficiently large $n$, $1\le b_n\le n$ and $W_{b_n}>0$, the latter by [[lem-taper-window-l2-normalization]]. Apply that algorithm to $Y_1,\ldots,Y_n$ only on this admissible tail; all limits below concern that tail. Write $\bar Y_n^*=n^{-1}\sum_{t=1}^nY_t^*$ for the resulting bootstrap mean. Let $\Gamma$ be the long-run covariance operator from [[thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]]. Then

$$\mathcal L^*\!\left(\sqrt n(\bar Y_n^*-E^*\bar Y_n^*)\right)\Rightarrow\mathcal L(G)\quad\hbox{in probability},$$

and

$$\left\|n\,\operatorname{Cov}^*(\bar Y_n^*)-\Gamma\right\|_{\mathrm{HS}}\longrightarrow0\quad\hbox{in probability},$$

where $G$ is centered Gaussian with covariance $\Gamma$.

## Facts & Assumptions

**Given:** AC; the centered causal shift, summable replacement errors with $m\delta_m\to0$; the stated block regime; and the admissible taper.

[F1] [[def-l2-m-approximable-causal-bernoulli-shift]] supplies the measurable causal representation, second moment and summable replacement errors.

[F2] [[thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]] supplies the sampling-law limit and centered Gaussian $G$ of covariance $\Gamma$; it makes no time-indexed FCLT assertion.

[F3] [[alg-tapered-block-bootstrap]] uses midpoint weights $c_{b,\ell}=a_bw((\ell-1/2)/b)$ on sample-centered observations, independent uniform starts and truncation to exactly $n$ observations. [[lem-tapered-block-bootstrap-conditional-covariance]] gives the exact conditional full-plus-partial covariance.

[F4] [[lem-taper-window-l2-normalization]] gives $W_b^2/b\to I_w>0$, so $a_b=\sqrt b/W_b$ is defined and bounded for all sufficiently large $b$.

[F5] [[lem-weighted-overlapping-block-moment-and-covariance-limits]] proves uniform integrability and empirical trace-norm covariance consistency for bounded normalized weights with fixed-lag autocorrelations tending to one. [[lem-conditional-independent-block-bootstrap-clt]] proves the corresponding conditional law, tightness, trace-norm covariance limit and partial-block bound; subtracting any common sample center leaves its centered blocks unchanged.

[A1] [[def-axiom-of-choice]] is assumed. Its uses are inherited from the sampling and conditional-block suppliers, including the latter's complete orthonormal basis; no further choice principle is added.

## Proof

**Given:** The assumptions and suppliers above.

1.1 Set $c_{b,\ell}=a_bw((\ell-1/2)/b)$ and extend this finite sequence by zero on all other integer indices. The exact normalization gives $b^{-1}\sum_\ell c_{b,\ell}^2=1$, and [F4] bounds its maximum by a constant $A$ for sufficiently large $b$. Symmetry and monotonicity of $w$ make the sequence nonnegative and unimodal, including the possible equal central pair; hence its discrete total variation, including both exterior zero tails, is at most $2A$. For every fixed integer $h\ge1$, telescoping $h$ successive shifts gives $\sum_{\ell\in\mathbb Z}|c_{b,\ell+h}-c_{b,\ell}|\le2Ah$. Therefore
$$\left|b^{-1}\sum_{\ell=1}^{b-h}c_{b,\ell}c_{b,\ell+h}-1\right|\le\frac{A}{b}\sum_{\ell\in\mathbb Z}|c_{b,\ell+h}-c_{b,\ell}|\le\frac{2A^2h}{b}\longrightarrow0.$$
This verifies every weight hypothesis of [F5], even for discontinuous monotone tapers. The process hypotheses and displayed rate are exactly [F1] and the Given. [given, F1, F3, F4, F5, A1, algebra]

2.1 For each full or partial weighted block, replacing $Y_t$ by $Y_t-\bar Y_n$ subtracts $(\sum_{\ell=1}^qc_{b,\ell})\bar Y_n$ from every candidate block with $q$ entries. Its empirical conditional center over the $N=n-b+1$ starts subtracts the same vector, so all conditionally centered block sums agree exactly with those formed from $Y_t$. Thus $\sqrt n(\bar Y_n^*-E^*\bar Y_n^*)$ is precisely $Z_n^*$ in [F5], with the full-taper prefix weights on its last $r=n-b\lfloor n/b\rfloor$ entries. [F3, F5, step 1.1, algebra]

3.1 Apply [F5]. It gives conditional weak convergence to $G$, conditional tightness, and convergence of the exact covariance $n\operatorname{Cov}^*(\bar Y_n^*)$ in trace norm, which implies its stated Hilbert-Schmidt convergence. The final prefix has expected conditional squared norm $O(b/n)$ and is negligible without requiring $b\mid n$. Its limiting covariance $\Gamma$ is the sampling target in [F2], completing both claims. [F2, F3, F5, step 1.1, step 2.1] ∎

Under the independent-tail replacement convention in the process definition, [[lem-independent-tail-replacement-errors-are-monotone]] proves that summability already implies $m\delta_m\to0$. The displayed rate is retained to match the source theorem contract; it is not a stronger process restriction under this convention.
