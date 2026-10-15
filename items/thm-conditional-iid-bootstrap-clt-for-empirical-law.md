---
id: thm-conditional-iid-bootstrap-clt-for-empirical-law
kind: theorem
title: Conditional IID bootstrap CLT for an empirical law
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-iid-empirical-bootstrap-sample
  - lem-empirical-bootstrap-law-is-a-probability-measure
  - lem-finite-index-bootstrap-sample-is-conditionally-iid
  - lem-iid-sample-covariance-converges
  - def-row-wise-independent-centered-triangular-array
  - def-total-row-variance-and-lindeberg-condition
  - def-axiom-of-choice
  - def-convergence-in-distribution-for-real-random-variables
  - def-standard-normal-and-normal-laws
  - lem-standard-normal-cdf-is-continuous-and-strictly-increasing
  - thm-dominated-convergence
  - cor-markov-inequality-for-random-variables
  - thm-lindeberg-feller-central-limit-theorem-sufficiency
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-heine-cantor-metric
  - thm-well-ordering-principle
  - cor-archimedean-reciprocal
  - lem-finite-bootstrap-cdf-supremum-is-measurable
  - thm-almost-sure-convergence-implies-convergence-in-probability
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §4, Theorem 4.1 and full proof"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
    - title: "P. J. Bickel, F. Götze, and W. R. van Zwet, Resampling Fewer Than n Observations: Gains, Losses, and Remedies for Losses, Statistica Sinica 7 (1997), §2.2"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X_1,X_2,\ldots$ be IID $\mathbb R^d$-valued vectors with $\mathbb E\|X_1\|^2<\infty$, mean $\mu$, and covariance $\Sigma$. Fix $a\in\mathbb R^d$ such that $\sigma^2=a^T\Sigma a>0$. For the finite-index empirical bootstrap in [[def-iid-empirical-bootstrap-sample]], let $\bar X_n^*$ be the bootstrap mean and define the conditional CDF
$$F_n^*(x)=\mathbb P^*\!\left(\sqrt n\,a^T(\bar X_n^*-\bar X_n)\le x\mid X_1,\ldots,X_n\right).$$
Then
$$D_n:=\sup_{x\in\mathbb R}\left|F_n^*(x)-\Phi_\sigma(x)\right|\longrightarrow0\quad\text{in probability},$$
where $\Phi_\sigma$ is the CDF of $N(0,\sigma^2)$. The assumption $\sigma^2>0$ is needed for the normalized Lindeberg–Feller step.

## Facts & Assumptions

**Given:** The IID vectors, finite second moment, fixed $a$, positive projected variance, and finite-index bootstrap law in the statement.

[A1] The Axiom of Choice (AC) is assumed. It is used through the Lindeberg–Feller theorem and the normal-law/CDF suppliers cited below; the empirical bootstrap and subsequence selection use finite sets and the well-ordering principle. [[def-axiom-of-choice]]

[F1] The empirical bootstrap law is a finite uniform average over index tuples, and its coordinates are conditionally IID from $P_n$. [[def-iid-empirical-bootstrap-sample]] [[lem-finite-index-bootstrap-sample-is-conditionally-iid]]

[F2] The empirical covariance converges entrywise in probability to $\Sigma$, and $\bar X_n\to\mu$ in probability. [[lem-iid-sample-covariance-converges]]

[F3] A centered row-wise independent triangular array has independent centered entries in each finite row; its probability space may vary by row. [[def-row-wise-independent-centered-triangular-array]]

[F4] For a centered row with total standard deviation $s_n>0$, the Lindeberg quantity is $s_n^{-2}\sum_k\mathbb E[X_{n,k}^2 1\{|X_{n,k}|>\varepsilon s_n\}]$; the condition is that this tends to zero for every $\varepsilon>0$. [[def-total-row-variance-and-lindeberg-condition]]

[F5] A centered row-wise independent triangular array with finite second moments, positive total standard deviation, and the Lindeberg condition has a normalized sum converging in distribution to $N(0,1)$. [[thm-lindeberg-feller-central-limit-theorem-sufficiency]]

[F6] Real convergence in distribution means convergence of CDFs at every continuity point of the limiting CDF; the variables may live on different probability spaces. [[def-convergence-in-distribution-for-real-random-variables]]

[F7] Dominated convergence sends integrable tail moments to zero. [[thm-dominated-convergence]]

[F8] For a nonnegative random variable $Y$ and $t>0$, $\mathbb P(Y\ge t)\le\mathbb E[Y]/t$. [[cor-markov-inequality-for-random-variables]]

[F9] Countable subadditivity bounds the probability of a union by the sum of its probabilities. [[thm-finite-and-countable-subadditivity-of-measures]]

[F10] $\Phi_\sigma$ is continuous, since $\Phi_\sigma(x)=\Phi(x/\sigma)$ and the standard normal CDF is continuous. [[def-standard-normal-and-normal-laws]] [[lem-standard-normal-cdf-is-continuous-and-strictly-increasing]]

[F11] On a compact interval, continuity of $\Phi_\sigma$ implies uniform continuity. [[thm-heine-cantor-metric]]

[F12] Every nonempty subset of $\mathbb N$ has a least element. [[thm-well-ordering-principle]]

[F13] For every real $t>0$ there is an integer $r\ge1$ with $1/r<t$. [[cor-archimedean-reciprocal]]

[F14] For this finite-index conditional bootstrap law, $D_n$ is a measurable real random variable. [[lem-finite-bootstrap-cdf-supremum-is-measurable]]

[F15] Almost-sure convergence of real random variables implies convergence in probability. [[thm-almost-sure-convergence-implies-convergence-in-probability]]

## Proof


1.1 Put $Y_i=a^T(X_i-\mu)$ and $\bar Y_n=n^{-1}\sum_iY_i$. Its variance is $\sigma^2$. By [F2], the empirical variance $s_n^2=\frac1n\sum_{i=1}^n(Y_i-\bar Y_n)^2=a^T\widehat\Sigma_n a$ converges in probability to $\sigma^2>0$, while $\bar Y_n\to0$ in probability and $n^{-1}\sum_iY_i^2\to\sigma^2$ in probability. [F2, given, algebra]

1.2 For $t>0$, define the unnormalized empirical tail quantity $T_n(t)=\frac1n\sum_{i=1}^n(Y_i-\bar Y_n)^2\,1\{|Y_i-\bar Y_n|>t\sqrt n\}.$ On $|\bar Y_n|\le t\sqrt n/2$, the indicator implies $|Y_i|>t\sqrt n/2$, and $T_n(t)\le 2\,\frac1n\sum_iY_i^2\,1\{|Y_i|>t\sqrt n/2\} +2\bar Y_n^2\,\frac1n\sum_i1\{|Y_i|>t\sqrt n/2\}.$ The expectation of the first term tends to zero by [F7], so [F8] makes it converge to zero in probability. The second empirical tail fraction is at most $4(t^2n)^{-1}(n^{-1}\sum_iY_i^2)$; hence its product with $2\bar Y_n^2$ tends to zero in probability by [F2]. The complement event has probability tending to zero by [F2], so $T_n(t)\to0$ in probability for every $t>0$. [F2, F7, F8, given, algebra]

2.1 Conditionally on the data, the row variables $Z_{n\ell}^*=n^{-1/2}a^T(X_\ell^*-\bar X_n)$, $1\le\ell\le n$, are independent and centered by [F1]. They are finite conditional rows of the type in [F3], with total variance $s_n^2$. By [F4], when $s_n>0$ their normalized Lindeberg quantity at threshold $\varepsilon>0$ is $s_n^{-2}T_n(\varepsilon s_n)$. On $s_n\ge\sigma/2$, this is at most $4\sigma^{-2}T_n(\varepsilon\sigma/2)$, which tends to zero in probability by step 1.2; also $s_n^2\to\sigma^2$ in probability by [F2]. [F1, F2, F3, F4, given, step 1.2]

2.2 Take any subsequence, indexed $(n_k)_{k\ge1}$. Recursively, after $k_0=0$, let $k_j$ be the least integer $k>k_{j-1}$ for which $\mathbb P(|s_{n_k}^2-\sigma^2|>1/j)+\sum_{r=1}^j\mathbb P(T_{n_k}(1/r)>1/j)<2^{-j}$. For fixed $j$, each of these finitely many probabilities tends to zero as $k\to\infty$ by [F2] and step 1.2, so the qualifying set is nonempty; [F12] gives its least index. [F2, F12, given, step 1.2, choose]

3.1 Let $E_j$ be the union of the variance-deviation event and the $j$ tail events at index $k_j$. By [F9], $\mathbb P(E_j)<2^{-j}$ and $\mathbb P(\bigcup_{j\ge m}E_j)\le\sum_{j\ge m}2^{-j}=2^{1-m}$. The event that infinitely many $E_j$ occur is contained in every such tail union, so its probability is zero. Off this null event, $s_{n_{k_j}}^2\to\sigma^2$ and, for every fixed $r\ge1$, $T_{n_{k_j}}(1/r)\to0$. For any $t>0$, choose $r$ with $1/r<t$ by [F13]; since $T_n$ is nonincreasing, $0\le T_{n_{k_j}}(t)\le T_{n_{k_j}}(1/r)\to0$. [F9, F13, step 2.2, algebra]

4.1 Along almost every selected data path, $s_{n_{k_j}}\to\sigma>0$, and for every $\varepsilon>0$ the Lindeberg quantity is eventually bounded by $4\sigma^{-2}T_{n_{k_j}}(\varepsilon\sigma/2)\to0$. Thus the deterministic conditional rows satisfy [F5], giving $\sum_{\ell=1}^{n_{k_j}}Z_{n_{k_j},\ell}^*/s_{n_{k_j}}\Rightarrow N(0,1)$. Every starting subsequence has a further subsequence with this almost-sure conditional convergence. [A1, F3, F4, F5, given, step 2.1, step 3.1]

5.1 Along each data sequence from step 4.1, put $m_j=n_{k_j}$ and let $H_j$ be the conditional CDF of $\sum_{\ell=1}^{m_j}Z_{m_j,\ell}^*/s_{m_j}$, discarding finitely many rows before $s_{m_j}>0$. By [F6], $H_j(t)\to\Phi(t)$ for every real $t$. Fix $x\in\mathbb R$ and $h>0$. Since $s_{m_j}\to\sigma>0$, eventually $x/\sigma-h\le x/s_{m_j}\le x/\sigma+h$, so monotonicity gives $H_j(x/\sigma-h)\le F_{m_j}^*(x)=H_j(x/s_{m_j})\le H_j(x/\sigma+h)$. Letting $j\to\infty$ and then $h\downarrow0$, continuity in [F10] yields $F_{m_j}^*(x)\to\Phi(x/\sigma)=\Phi_\sigma(x)$. To make this uniform, fix $\eta>0$, choose $R$ with $\Phi_\sigma(-R)<\eta$ and $1-\Phi_\sigma(R)<\eta$, and partition $[-R,R]$ into finitely many intervals on which $\Phi_\sigma$ varies by less than $\eta$, using [F11]. Monotonicity of each conditional CDF bounds its error between grid points by the endpoint errors plus $\eta$; outside $[-R,R]$ the two tail probabilities add at most $2\eta$ plus endpoint errors. The maximum grid error tends to zero, and then $\eta\downarrow0$ proves almost-sure uniform CDF convergence along the selected subsequence. Since $D_n$ is measurable by [F14], this is almost-sure convergence of real random variables. [F6, F10, F11, F14, step 2.1, step 4.1, given]

6.1 If $D_n$ did not converge to zero in probability, there would be $\delta,\varepsilon>0$ and a subsequence on which $\mathbb P(D_n>\delta)\ge\varepsilon$. Applying the subsequence construction in step 2.2 and its consequences in steps 3.1–5.1 gives a further subsequence with $D_n\to0$ almost surely by step 5.1. By [F15], this is convergence in probability, contradicting the lower bound. [F14, F15, step 2.2, step 3.1, step 4.1, step 5.1, given] ∎
