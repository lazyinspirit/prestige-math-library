---
id: thm-tapered-block-bootstrap-clt-for-dependent-data
kind: theorem
title: Tapered block bootstrap CLT for dependent Hilbert-valued data
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps: [alg-tapered-block-bootstrap, def-axiom-of-choice, def-conditional-weak-convergence-in-probability, def-l2-m-approximable-causal-bernoulli-shift, lem-taper-window-l2-normalization, lem-tapered-block-bootstrap-conditional-covariance, thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]
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

Assume $m\delta_m\to0$, and let $b_n\to\infty$ with $b_n/\sqrt n\to0$. Let the taper satisfy the support, positivity-near-$1/2$, symmetry and monotonicity conditions in [[alg-tapered-block-bootstrap]], and apply that algorithm to $Y_1,\ldots,Y_n$. Write $\bar Y_n^*=n^{-1}\sum_{t=1}^nY_t^*$ for the resulting bootstrap mean. With $\Gamma$ the long-run covariance operator from [[thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]], the planned conclusions are

$$\mathcal L^*\!\left(\sqrt n(\bar Y_n^*-E^*\bar Y_n^*)\right)\Rightarrow\mathcal L(G)\quad\hbox{in probability},$$

and

$$\left\|n\,\operatorname{Cov}^*(\bar Y_n^*)-\Gamma\right\|_{\mathrm{HS}}\longrightarrow0\quad\hbox{in probability},$$

where $G$ is centered Gaussian with covariance $\Gamma$. The partial argument below does not establish these planned conclusions; this item is escalated.

## Facts & Assumptions

**Given:** The Axiom of Choice; a centered $L^2$-$m$-approximable causal Bernoulli shift; $m\delta_m\to0$; the stated block-length regime; and an admissible taper.

[F1] [[def-l2-m-approximable-causal-bernoulli-shift]]: The process has a measurable causal representation from iid innovations, finite second moment, and replacement errors $\delta_m$ with $\sum_{m\ge1}\delta_m<\infty$.

[F2] [[thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]]: Under AC and the centered $L^2$-$m$-approximability assumptions, normalized sample sums converge weakly in $H$ to a centered Gaussian with covariance $\Gamma$; no path-process FCLT is asserted.

[F3] [[alg-tapered-block-bootstrap]]: Each selected centered observation is multiplied by $a_bw_b(r)$, with $a_b=\sqrt b/W_b$, and independent uniform block starts are concatenated and truncated to length $n$.

[F4] [[lem-taper-window-l2-normalization]]: $W_b^2/b\to\int_0^1w(u)^2du>0$, so $a_b$ is defined and bounded for all sufficiently large $b$.

[F5] [[lem-tapered-block-bootstrap-conditional-covariance]]: The exact conditional covariance is the sum of empirical covariances of independent tapered block sums, including the partial final block.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function. Its use here is inherited solely through [F2], whose Hilbert-space CLT explicitly assumes AC; this item makes no additional choice.

## Proof

**Given:** The assumptions and supplier claims in the Statement and Facts & Assumptions.

1.1 The sampling target has limit $G$ by [F2]; the definition and stronger rate in [F1] satisfy the supplier's process hypotheses, and its AC hypothesis is exactly [A1]. [given, F1, F2, A1]

1.2 Conditional on the observations, the tapered block sums are independent. Their exact conditional covariance is the weighted empirical block covariance in [F5]; the normalization factor has the nonzero finite limit in [F4]. [F3, F4, F5, given, algebra]

## Escalation

The proof still needs the empirical tapered lag-covariance convergence in $L^2([0,1]^2)$, plus the conditional Lindeberg and tightness steps that turn the independent selected block sums into a Hilbert-valued conditional CLT. The recovered 15-page supplement gives the Theorem 2.2 proof, but its Lemma 5.2(ii) says the empirical-covariance argument is analogous to Horváth, Kokoszka, and Reeder (2013, Appendix A.2) without reproducing it. The article assumes $n=kb$ for algebraic simplicity, so the arbitrary-$n$ version here needs a final partial-block bound. The proposed A-page suppliers, placed before this theorem, are `lem-tbb-empirical-tapered-covariance-consistency` (prove the weighted lag-covariance limit under $m\delta_m\to0$ and the stated block/taper conditions) and `lem-tbb-conditional-tightness-and-lindeberg` (prove conditional Lindeberg and Hilbert-space tightness, including the final partial block, using the first lemma). The stated conclusions remain escalated.
