---
id: lem-absolutely-summable-linear-filters-preserve-weak-stationarity
kind: lemma
title: "Absolutely summable linear filters preserve weak stationarity"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-linear-process-and-arma-model
  - def-autocovariance-and-sample-autocovariance
  - def-moments-variance-and-covariance
  - cor-cauchy-schwarz-for-random-variables
  - lem-variance-and-covariance-identities-for-random-variables
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-tonelli-for-nonnegative-double-series
  - thm-fatou-lemma
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Sections 4.3–4.4"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Section 2.6"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Statement

Let $Z=(Z_t)_{t\in\mathbb Z}$ be a centered real weakly stationary process
with autocovariance $\gamma$. For a real two-sided sequence
$c=(c_j)_{j\in\mathbb Z}\in\ell^1(\mathbb Z)$ define
$c(B)Z_t:=\sum_{j\in\mathbb Z}c_jZ_{t-j}$. Then this filter is well-defined
almost surely and in $L^2$, is centered and weakly stationary, and has
autocovariance
$$\gamma_Y(h)=\sum_{j,k\in\mathbb Z}c_jc_k\gamma(h-j+k),\qquad h\in\mathbb Z.$$
For $c,d\in\ell^1(\mathbb Z)$ their filter composition is the convolution
filter
$$(c*d)_m:=\sum_{j\in\mathbb Z}c_jd_{m-j},\qquad c(B)\bigl(d(B)Z\bigr)=(c*d)(B)Z.$$
All sums are absolutely convergent in the senses justified below. This
argument uses no choice axiom.

## Facts & Assumptions

**Given:** A centered weakly stationary real process $Z$ on one probability space, its autocovariance $\gamma$, and a real sequence $c\in\ell^1(\mathbb Z)$.

[F1] [[def-autocovariance-and-sample-autocovariance]] gives $\gamma(h)=\operatorname{Cov}(Z_{t+h},Z_t)$, independent of $t$.

[F2] [[def-moments-variance-and-covariance]] defines the second moment, variance, and covariance used here.

[F3] [[cor-cauchy-schwarz-for-random-variables]] gives $\mathbb E|UV|\le(\mathbb E U^2)^{1/2}(\mathbb E V^2)^{1/2}$ for square-integrable real variables.

[F4] [[lem-variance-and-covariance-identities-for-random-variables]] expands covariance bilinearly for finite linear combinations.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] interchanges a nonnegative sum and expectation by applying Tonelli to counting measure times the probability measure.

[F6] [[thm-tonelli-for-nonnegative-double-series]] permits interchanging the order of summation for nonnegative double series.

[F7] [[thm-fatou-lemma]] bounds the integral of an almost-sure limit by the liminf of the nonnegative integrals.



## Proof

**Proof technique:** establish almost-sure sums by Tonelli, control finite filter tails in $L^2$, and pass finite covariance identities to the limit.

1.1 Weak stationarity makes $\mathbb E[Z_t^2]=\gamma(0)$ for every $t$. Applying [F3] to $Z_t$ and the constant one gives $\mathbb E|Z_t|\le\sqrt{\gamma(0)}$, while applying it to the centered variables $Z_{t+h},Z_t$ gives $|\gamma(h)|\le\gamma(0)$. Consequently $$\sum_{j\in\mathbb Z}\mathbb E\bigl[|c_jZ_{t-j}|\bigr] \le \sqrt{\gamma(0)}\sum_{j\in\mathbb Z}|c_j|<\infty.$$ Tonelli [F5] on counting measure over $\mathbb Z$ times the probability measure shows that the random series of absolute values has finite expectation, hence is finite almost surely. Thus $Y_t$ is defined by an absolutely convergent sum. [F1, F2, F3, F5, given]

2.1 For any finite $J\subset\mathbb Z$, the finite filter $Y_t^J=\sum_{j\in J}c_jZ_{t-j}$ satisfies, by [F4], $$\mathbb E[(Y_t^J)^2]=\sum_{j,k\in J}c_jc_k\gamma(k-j) \le \gamma(0)\left(\sum_{j\in J}|c_j|\right)^2.$$ The equality is a finite covariance expansion; the inequality follows from $|\gamma(k-j)|\le\gamma(0)$ from step 1.1. Applying the same bound to a finite tail $J$ gives $\|\sum_{j\in J}c_jZ_{t-j}\|_2\le\sqrt{\gamma(0)}\sum_{j\in J}|c_j|$. [F1, F2, F4, step 1.1]

3.1 Enumerate $\mathbb Z$ as $0,1,-1,2,-2,\ldots$ and let $Y_t^N$ be the partial sum through the first $N$ terms. The absolute almost-sure convergence from step 1.1 gives $Y_t-Y_t^N=\lim_{M\to\infty}(Y_t^M-Y_t^N)$ almost surely. Fatou [F7] and the finite-tail bound of step 2.1 therefore give $$\mathbb E|Y_t-Y_t^N|^2 \le \gamma(0)\left(\sum_{j\text{ omitted after }N}|c_j|\right)^2 \longrightarrow0.$$ Thus $Y_t^N\to Y_t$ in $L^2$ and $Y_t$ is square-integrable. [F7, step 1.1, step 2.1, algebra]

4.1 Each finite filter is centered. The $L^2$ convergence in step 3.1 implies $L^1$ convergence by [F3] applied to the difference and the constant one; hence $\mathbb E[Y_t]=0$. For finite $J$, covariance bilinearity [F4] gives $$\operatorname{Cov}(Y_{t+h}^J,Y_t^J) =\sum_{j,k\in J}c_jc_k\gamma(h-j+k).$$ As $J$ increases through the enumeration, the left side converges to $\operatorname{Cov}(Y_{t+h},Y_t)$ by $L^2$ convergence and [F3]. The right side converges absolutely because $$\sum_{j,k\in\mathbb Z}|c_jc_k\gamma(h-j+k)| \le\gamma(0)\left(\sum_j|c_j|\right)^2<\infty,$$ with order of summation justified by [F6]. Its limit is independent of $t$, so $Y$ is weakly stationary with the stated autocovariance. [F1, F2, F3, F4, F6, step 3.1, algebra]

5.1 Let $c,d\in\ell^1(\mathbb Z)$. The triangle inequality and [F6] give $$\sum_{m\in\mathbb Z}|(c*d)_m| \le\sum_{j,k\in\mathbb Z}|c_j||d_k| =\left(\sum_j|c_j|\right)\left(\sum_k|d_k|\right)<\infty,$$ so $c*d\in\ell^1(\mathbb Z)$. Tonelli [F5] and the uniform bound from step 1.1 give $$\mathbb E\!\left[\sum_{j,k\in\mathbb Z} |c_jd_kZ_{t-j-k}|\right] =\sum_{j,k\in\mathbb Z}|c_jd_k|\mathbb E|Z_{t-j-k}| \le\sqrt{\gamma(0)}\left(\sum_j|c_j|\right)\left(\sum_k|d_k|\right)<\infty.$$ Hence this double random series is absolutely convergent almost surely. Reindexing the absolutely convergent terms by $m=j+k$ gives $$\sum_jc_j\left(\sum_kd_kZ_{t-j-k}\right) =\sum_m\left(\sum_jc_jd_{m-j}\right)Z_{t-m} =\sum_m(c*d)_mZ_{t-m}.$$ Both sides are the filter limits defined in the Statement, and the equality holds almost surely and in $L^2$ by the bounds of steps 2.1 and 3.1. This proves the composition formula. [F5, F6, step 1.1, step 2.1, step 3.1, algebra] ∎
