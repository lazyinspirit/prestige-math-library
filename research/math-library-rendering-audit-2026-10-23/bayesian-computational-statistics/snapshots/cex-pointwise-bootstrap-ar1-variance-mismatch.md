---
id: cex-pointwise-bootstrap-ar1-variance-mismatch
kind: counterexample
title: Pointwise resampling misses the long-run variance of an AR(1) mean
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps: [alg-moving-block-bootstrap, alg-overlapping-block-resampling, cor-cauchy-schwarz-for-random-variables, cor-markov-inequality-for-random-variables, def-axiom-of-choice, def-identically-distributed-and-iid-random-variables, def-moments-variance-and-covariance, def-standard-normal-and-normal-laws, def-strict-and-weak-stationarity-for-time-series, lem-characteristic-function-of-a-normal-law, lem-characteristic-functions-under-affine-maps-and-independent-sums, lem-gaussian-even-moment-bound-for-brownian-increments, thm-dominated-convergence, thm-factorization-of-expectations-for-independent-variables, thm-grouping-independent-sigma-algebras, thm-monotone-convergence-for-the-integral, thm-portmanteau-theorem, thm-riesz-fischer-completeness-of-l-p, thm-uniqueness-of-a-law-from-its-characteristic-function]
proof_strategy: compute the conditional iid-bootstrap variance and the sampling long-run variance separately
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Section 2.2"
      url: https://arxiv.org/pdf/1711.01070
    - title: "A. DasGupta, Asymptotic Theory of Statistics and Probability, Section 29.18, Block Bootstrap Methods, pp. 478-479"
      url: https://www.stat.purdue.edu/~dasgupta/bootstrap.pdf
---

## Statement refuted

The claim refuted is: for every strictly stationary real time series, if its long-run variance
$$V_\infty:=\lim_{n\to\infty}\operatorname{Var}(\sqrt n\,\bar X_n)$$
exists and is finite, then the pointwise bootstrap is variance-consistent, meaning
$$\operatorname{Var}^*\!\left(\sqrt n(\bar X_n^*-\bar X_n)\right)\longrightarrow V_\infty$$
in probability. Here $\bar X_n=n^{-1}\sum_{t=1}^nX_t$; under the pointwise bootstrap, conditional on the observations, each $X_t^*$ independently selects a uniform index from $\{1,\ldots,n\}$ and takes the corresponding observed value, and $\bar X_n^*=n^{-1}\sum_{t=1}^nX_t^*$; $\operatorname{Var}^*$ is conditional variance given the observations.

## Facts & Assumptions

**Given:** Assume AC. Let $(\varepsilon_t)_{t\in\mathbb Z}$ be a two-sided iid sequence with law $N(0,\sigma^2)$, $\sigma^2>0$. For each $t$, define $X_t$ as the sum $\sum_{j=0}^{\infty}2^{-j}\varepsilon_{t-j}$ when the series converges absolutely, and set $X_t=0$ otherwise.

[A1] AC is assumed by the repository's normal-law and characteristic-function uniqueness suppliers ([[def-axiom-of-choice]]).

[F1] [[def-identically-distributed-and-iid-random-variables]]: The innovations have a common law and are mutually independent; shifting a finite index set preserves its joint product law.

[F2] [[def-standard-normal-and-normal-laws]] and [[lem-characteristic-function-of-a-normal-law]]: $N(0,s^2)$ is a centered symmetric normal law with characteristic function $t\mapsto e^{-s^2t^2/2}$ and variance $s^2$.

[F3] [[lem-characteristic-functions-under-affine-maps-and-independent-sums]]: The characteristic function of a finite sum of independent real random variables is the product of their characteristic functions.

[F4] [[thm-uniqueness-of-a-law-from-its-characteristic-function]]: Under AC, two Borel probability laws on $\mathbb R$ with equal characteristic functions are equal.

[F5] [[lem-gaussian-even-moment-bound-for-brownian-increments]]: If $Z\sim N(0,v)$, its even moments are $E|Z|^{2m}=(2m-1)!!v^m$; in particular its fourth moment is $3v^2$ and its sixth moment is finite.

[F6] [[cor-cauchy-schwarz-for-random-variables]]: An $L^2$ tail has $L^1$ norm at most its $L^2$ norm.

[F7] [[def-moments-variance-and-covariance]]: Variance and covariance are centered second moments, so finite-sum expansions count pairs at each lag.

[F8] [[alg-moving-block-bootstrap]] and [[alg-overlapping-block-resampling]]: When $b=1$, each selected block contains one observation; its start is independently uniform on $\{1,\ldots,n\}$, so the replicate consists of conditionally iid empirical draws.

[F9] [[thm-monotone-convergence-for-the-integral]]: Expectations of increasing nonnegative partial sums converge to the expectation of their pointwise sum.

[F10] [[thm-dominated-convergence]]: Almost-sure convergence of bounded complex random variables passes to their expectations.

[F11] [[thm-grouping-independent-sigma-algebras]]: Disjoint groups of an independent family generate independent sigma-algebras.

[F12] [[thm-factorization-of-expectations-for-independent-variables]]: Expectations of integrable products of functions of independent random variables factor.

[F13] [[thm-riesz-fischer-completeness-of-l-p]]: The space $L^2$ is complete, so an $L^2$-Cauchy sequence has an $L^2$ limit.

[F14] [[cor-markov-inequality-for-random-variables]]: For a nonnegative random variable $U$ and $a>0$, $P(U>a)\le EU/a$; applying it to squared errors turns $L^2$ convergence into convergence in probability.

[F15] [[thm-portmanteau-theorem]]: Borel probability laws on a metric space are determined by their integrals against all bounded uniformly continuous real functions.

[F16] [[def-strict-and-weak-stationarity-for-time-series]]: A real process indexed by $\mathbb Z$ is strictly stationary when every finite-dimensional law is unchanged by every common integer shift.

## Counterexample

We verify strict stationarity and calculate $V_\infty$ for this series. Compare its true sample-mean variance with the conditional variance of the pointwise bootstrap, which is the $b=1$ case of [[alg-moving-block-bootstrap]].

**Given:** AC, the iid normal innovations, stationary linear filter, and pointwise resampling rule in the Statement and Facts & Assumptions.

1.1 For $J\ge1$ let $X_{t,J}=\sum_{j=0}^{J-1}2^{-j}\varepsilon_{t-j}$. For $K>J$, independence, centering and [F12] give $E|X_{t,K}-X_{t,J}|^2=\sigma^2\sum_{j=J}^{K-1}4^{-j}$, so the partial sums are $L^2$-Cauchy and have a limit by [F13]. Also [F9] and [F2], [F6] give $E\sum_{j\ge0}2^{-j}|\varepsilon_{t-j}|=2E|\varepsilon_0|<\infty$, so the series converges absolutely almost surely. The $L^2$ limit and the almost-sure series are both probability limits of these partial sums: [F14] applied to squared $L^2$ errors proves the first assertion, and [F10] applied to indicators of tail events proves the second. For each $\epsilon>0$, the triangle inequality bounds the probability that the two limits differ by more than $\epsilon$ by the sum of the two partial-sum error probabilities at threshold $\epsilon/2$; letting $J\to\infty$ gives zero, so the limits agree almost surely. By [F6], the expectations of the partial sums converge to $E X_0=0$, and continuity of the $L^2$ norm gives $v:=E X_0^2=\lim_J E X_{0,J}^2=\sigma^2\sum_{j\ge0}4^{-j}=4\sigma^2/3$. For any finite set of times, the finite truncation vector has the same law after a common time shift by [F1]; its coordinates converge almost surely to the series vector, so bounded uniformly continuous test expectations pass to the limit by [F10]. [F15] gives equality of the limiting vector laws, proving strict stationarity in the sense of [F16]. [F1, F2, F6, F9, F10, F12, F13, F14, F15, F16, given, algebra, construct]

2.1 The characteristic function of $X_{0,J}$ is $\exp\{-t^2\sigma^2\sum_{j=0}^{J-1}4^{-j}/2\}$ by [F3] and [F2]. By the a.s. convergence in step 1.1 and [F10], these characteristic functions converge to $\exp(-t^2v/2)$; [F4] identifies $X_0\sim N(0,v)$. Thus [F5] gives $E X_0^4=3v^2$. [A1, F2, F3, F4, F5, F10, step 1.1, algebra]

3.1 For $h\ge1$, the recursion gives $X_h=2^{-h}X_0+\eta_h$, where $\eta_h=\sum_{j=0}^{h-1}2^{-j}\varepsilon_{h-j}$. The variable $X_0$ is measurable with respect to the past innovation sigma-algebra and $\eta_h$ with respect to the disjoint sigma-algebra generated by $\varepsilon_1,\ldots,\varepsilon_h$, so [F11] makes them independent. [F12] gives $E\eta_h=0$, $E\eta_h^2=v(1-4^{-h})$, and $E[X_0^2\eta_h^2]=EX_0^2E\eta_h^2$. Thus $\gamma(h):=E(X_0X_h)=2^{-h}v$. Expanding the product of squares, the cross term vanishes because $E\eta_h=0$ and independence, and $EX_0^4=3v^2$ by step 2.1; by the covariance definition [F7], $\operatorname{Cov}(X_0^2,X_h^2)=2v^2 4^{-h}=2\gamma(h)^2$. [F1, F2, F5, F7, F11, F12, given, step 1.1, step 2.1, algebra]

4.1 By [F8], conditional on the observations each of the $n$ draws is uniform on the observed values, so its mean is $\bar X_n$ and its variance is $n^{-1}\sum_{t=1}^n(X_t-\bar X_n)^2$. [F12] factors the cross terms in the variance of their mean, giving $\operatorname{Var}^*\!\left(\sqrt n(\bar X_n^*-\bar X_n)\right)=n^{-1}\sum_{t=1}^n(X_t-\bar X_n)^2$. Stationarity and step 3.1 give $\operatorname{Var}(n^{-1}\sum_tX_t^2)\le\frac2n(v^2+2\sum_{h\ge1}\gamma(h)^2)\to0$: the lag-zero covariance is $E X_0^4-v^2=2v^2$, and the positive-lag covariances are $2\gamma(h)^2$. Also $E\bar X_n^2=\frac1n\sum_{|h|<n}(1-|h|/n)\gamma(|h|)\to0$ because $\sum_{h\in\mathbb Z}|\gamma(h)|<\infty$. Markov [F14] applied to squared deviations gives $n^{-1}\sum_tX_t^2\to v$ in probability and $\bar X_n^2\to0$ in probability. Therefore $n^{-1}\sum_t(X_t-\bar X_n)^2=n^{-1}\sum_tX_t^2-\bar X_n^2\to v$ in probability. [F7, F8, F12, F14, step 1.1, step 3.1, algebra]

5.1 Counting pairs at each lag gives $\operatorname{Var}(\sqrt n\,\bar X_n)=\sum_{|h|<n}(1-|h|/n)\gamma(|h|)$. Absolute summability of $\gamma$ gives the limit $\gamma(0)+2\sum_{h\ge1}\gamma(h)=v(1+2\sum_{h\ge1}2^{-h})=3v=4\sigma^2$, whereas the conditional bootstrap variance tends to $v=4\sigma^2/3$ by step 4.1. The finite, unequal limits refute the universal variance-consistency claim. This calculation makes no broader assertion about every possible distributional metric. [F7, step 1.1, step 3.1, step 4.1, algebra] ∎
