---
id: thm-moving-block-bootstrap-clt-for-dependent-data
kind: theorem
title: Moving block bootstrap CLT for dependent Hilbert-valued data
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps: [alg-moving-block-bootstrap, def-axiom-of-choice, def-conditional-weak-convergence-in-probability, def-l2-m-approximable-causal-bernoulli-shift, lem-moving-block-bootstrap-conditional-covariance, thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]
proof_strategy: block decomposition, conditional iid limit, covariance consistency and Hilbert-space tightness
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Theorem 2.1 and Appendix"
      url: https://arxiv.org/pdf/1711.01070
    - title: "A. DasGupta, Asymptotic Theory of Statistics and Probability, Section 29.18, Block Bootstrap Methods, pp. 478-479"
      url: https://www.stat.purdue.edu/~dasgupta/bootstrap.pdf
---

## Statement

Assume the Axiom of Choice. Let $H=L^2([0,1])$, and let $(X_t)_{t\in\mathbb Z}$ be a centered causal Bernoulli shift that is $L^2$-$m$-approximable under [[def-l2-m-approximable-causal-bernoulli-shift]]. Write

$$\delta_m=\bigl(E\|X_0-X_{0,m}\|_H^2\bigr)^{1/2}.$$

Assume the stronger approximation condition $m\delta_m\to0$. For each $n$, let $b_n$ be an integer with $b_n\to\infty$ and $b_n/\sqrt n\to0$, and apply [[alg-moving-block-bootstrap]] to $X_1,\ldots,X_n$. Let $\Gamma$ be the long-run covariance operator from [[thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]], and let $\bar X_n^*=n^{-1}\sum_{t=1}^nX_t^*$. The planned conclusions are

$$\mathcal L^*\!\left(\sqrt n(\bar X_n^*-E^*\bar X_n^*)\right)\Rightarrow\mathcal L(G)\quad\hbox{in probability},$$

and

$$\left\|n\,\operatorname{Cov}^*(\bar X_n^*)-\Gamma\right\|_{\mathrm{HS}}\longrightarrow0\quad\hbox{in probability},$$

where $G$ is the centered $H$-valued Gaussian with covariance $\Gamma$. The partial argument below does not establish these planned conclusions; this item is escalated.

## Facts & Assumptions

**Given:** The Axiom of Choice, a centered $L^2$-$m$-approximable causal Bernoulli shift, $m\delta_m\to0$, and block lengths $b_n\to\infty$, $b_n/\sqrt n\to0$.

[F1] [[def-l2-m-approximable-causal-bernoulli-shift]]: The process has a measurable causal representation from iid innovations, $E\|X_0\|_H^2<\infty$, and replacement errors $\delta_m$ with $\sum_{m\ge1}\delta_m<\infty$.

[F2] [[thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]]: Under AC and the centered $L^2$-$m$-approximability assumptions, $n^{-1/2}\sum_{t=1}^nX_t\Rightarrow G$ in $H$, with covariance $\Gamma$; this is a sample-sum CLT, not a partial-sum-process FCLT.

[F3] [[alg-moving-block-bootstrap]]: Conditional on the observations, the bootstrap series concatenates independent uniform draws of consecutive length-$b_n$ blocks and truncates the last block to length $n$.

[F4] [[lem-moving-block-bootstrap-conditional-covariance]]: For a fixed sample, $n\,\operatorname{Cov}^*(\bar X_n^*)=(kC_b+C_r)/n$, with $C_b,C_r$ the empirical covariances of complete and final partial block sums.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function. Its use here is inherited solely through [F2], whose Hilbert-space CLT explicitly assumes AC; this item makes no additional choice.

## Proof

**Given:** The assumptions and supplier claims in the Statement and Facts & Assumptions.

1.1 The sampling target has limit $G$ by [F2]; all process assumptions of that supplier are present in [F1], and its AC hypothesis is exactly [A1]. [given, F1, F2, A1]

1.2 Conditional on the observed series, the centered bootstrap mean is a sum of independent centered block sums divided by $n$. Its exact conditional covariance is therefore the overlapping-block expression in [F4], including the partial final block when $b_n\nmid n$. [F3, F4, given, algebra]

## Escalation

The proof still needs a local Hilbert-Schmidt consistency proof for the random empirical overlapping-block covariance in [F4], and a conditional Lindeberg plus Hilbert-space tightness argument under the stated second-moment and physical-dependence assumptions. The article invokes the external empirical-covariance argument of Horváth, Kokoszka, and Reeder (2013, Appendix A.2) and a Hilbert-space tightness criterion; neither has a local supplier proof in this batch. It also assumes $n=kb$ for algebraic simplicity, so this carrier's arbitrary-$n$ procedure needs a bound proving that the final partial-block term is negligible in the conditional covariance and limit. The proposed A-page suppliers, placed before this theorem, are `lem-mbb-empirical-block-covariance-consistency` (prove the covariance limit under $m\delta_m\to0$ and the stated block regime) and `lem-mbb-conditional-tightness-and-lindeberg` (prove the conditional Lindeberg and Hilbert-space tightness bounds, including the final partial block, using the first lemma). The two stated conclusions remain escalated.
