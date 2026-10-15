---
id: thm-stable-linear-process-sample-mean-clt
kind: theorem
title: "Sample-mean CLT for stable linear processes"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-linear-process-and-arma-model
  - lem-absolutely-summable-linear-filters-preserve-weak-stationarity
  - thm-arma-causality-and-invertibility-root-criteria
  - def-identically-distributed-and-iid-random-variables
  - def-axiom-of-choice
  - thm-lindeberg-levy-iid-central-limit-theorem
  - thm-vector-slutsky
  - thm-continuous-maps-preserve-convergence-in-probability
  - thm-portmanteau-theorem
  - cor-cauchy-schwarz-for-random-variables
  - cor-markov-inequality-for-random-variables
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fatou-lemma
  - def-standard-normal-and-normal-laws
proof_strategy: direct
axiom_use: "AC is inherited from the iid CLT at step 3.1 and the standard-normal-law supplier at step 5.1; there is no AC use in the endpoint remainder estimate."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Sections 2.2 and 3.1–3.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Sections 2.1–2.5"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Statement

Assume AC. Let
$$X_t-\mu=\sum_{j\ge0}\psi_j\epsilon_{t-j},\qquad t\in\mathbb Z,$$
be a causal linear process with real coefficients satisfying
$\sum_{j\ge0}\sqrt{j+1}\,|\psi_j|<\infty$. Suppose the two-sided innovation
sequence $(\epsilon_t)_{t\in\mathbb Z}$ is iid, centered, and has
$0<\sigma^2=\mathbb E[\epsilon_0^2]<\infty$. Put
$\Psi:=\sum_{j\ge0}\psi_j$ and
$\bar X_n:=n^{-1}\sum_{t=1}^nX_t$. Then
$$\sqrt n(\bar X_n-\mu)\Rightarrow N(0,\sigma^2\Psi^2).$$
For a causal ARMA model with no zero of $\phi$ in $|z|\le1$, the root
criterion theorem implies that its coefficients satisfy the weighted
summability condition. The limiting variance may be zero when $\Psi=0$.
If $\tau^2:=\sigma^2\Psi^2>0$ and a nonnegative variance estimate
$\widehat\tau_n^2$ separately satisfies
$\widehat\tau_n^2\longrightarrow_{\mathbb P}\tau^2$, then
$T_n:=\sqrt n(\bar X_n-\mu)/\widehat\tau_n$,
with $\widehat\tau_n=\sqrt{\widehat\tau_n^2}$ and any finite convention
when $\widehat\tau_n=0$, converges to $N(0,1)$. For each fixed $c>0$, the
symmetric interval
$$\left[\bar X_n-\frac{c\widehat\tau_n}{\sqrt n}, \bar X_n+\frac{c\widehat\tau_n}{\sqrt n}\right]$$
therefore has limiting coverage $\mathbb P(|N(0,1)|\le c)$. No consistency
is attributed to a variance estimator unless it is separately proved.

## Facts & Assumptions

**Given:** AC; the causal linear-process representation and weighted
coefficient summability; a two-sided iid centered innovation sequence with
finite positive variance; and, for the standardized conclusions, a
nonnegative variance estimate consistent for the strictly positive limit
$\tau^2$.

[A1] [[def-axiom-of-choice]]: AC is assumed only through the iid CLT and
standard-normal-law suppliers below.

[F1] [[def-linear-process-and-arma-model]] defines a causal linear process
as an absolutely summable one-sided filter of centered white noise.

[F2] [[lem-absolutely-summable-linear-filters-preserve-weak-stationarity]]
establishes almost-sure and $L^2$ existence and weak stationarity of the
filtered white-noise series by Tonelli and the finite-filter $L^2$ tail bound.

[F3] [[def-identically-distributed-and-iid-random-variables]]: the innovations
are mutually independent with a common law; their means and variance are as
stated in the hypothesis.

[F4] [[thm-arma-causality-and-invertibility-root-criteria]]: for a causal
ARMA with no autoregressive zero in the closed unit disk, the causal filter
coefficients decay exponentially.

[F5] [[thm-lindeberg-levy-iid-central-limit-theorem]]: under AC, iid centered
real variables with finite positive variance have their normalized sample
sum converging to $N(0,1)$.

[F6] [[thm-vector-slutsky]]: a vector converging in distribution jointly with
a vector converging in probability to a constant has the corresponding joint
limit, and continuous transformations preserve it.

[F7] [[thm-continuous-maps-preserve-convergence-in-probability]]: continuous
real maps preserve convergence in probability at finite limits.

[F8] [[def-standard-normal-and-normal-laws]]: $N(0,1)$ has a continuous
density; therefore fixed interval endpoints have probability zero.

[F9] [[thm-portmanteau-theorem]]: probabilities of Borel continuity sets
converge under convergence in distribution.

[F10] [[cor-cauchy-schwarz-for-random-variables]] gives the $L^2$ triangle
bound through finite-sum expansion; [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]
and [[thm-fatou-lemma]] justify the endpoint remainder's random-series and
integrable-limit bounds.

[F11] [[cor-markov-inequality-for-random-variables]] bounds a nonnegative
random variable's probability tail by its expectation divided by a positive
threshold.



## Verification

1.1 The weighted summability implies $\sum_j|\psi_j|<\infty$. By [F2], the series defining $X_t-\mu$ is well-defined almost surely and in $L^2$, and the filtered process is weakly stationary. Thus for a causal ARMA the weak-stationarity premise of [F4] is met, and [F4] gives $|\psi_j|\le Cr^{-j}$ for some $C<\infty$ and $r>1$. The ratio of consecutive terms $\sqrt{j+2}\,r^{-(j+1)}/(\sqrt{j+1}\,r^{-j})$ tends to $1/r<1$, so $\sum_j\sqrt{j+1}|\psi_j|<\infty$ as required. Absolute summability also makes $\Psi$ finite. [F1, F2, F4, given, algebra]

1.2 For $j\ge0$ let $D_{n,j}:=\sum_{t=1}^n\epsilon_{t-j}-\sum_{t=1}^n\epsilon_t$, so $D_{n,0}=0$. For finite $J$, summing the first $J$ filter coefficients over $t=1,\ldots,n$ gives $$\sum_{t=1}^n\sum_{j=0}^J\psi_j\epsilon_{t-j} =\left(\sum_{j=0}^J\psi_j\right)\sum_{t=1}^n\epsilon_t +\sum_{j=0}^J\psi_jD_{n,j}.$$ As $J\to\infty$, the left side converges in $L^2$ to $\sum_{t=1}^n(X_t-\mu)$ by [F2], and the first term on the right converges in $L^2$ because $\sum_j|\psi_j|<\infty$. We pass the finite identity to its limit once the remainder convergence has been established. [F1, F2, given, algebra]

1.3 For $1\le j\le n$, the two sums defining $D_{n,j}$ cancel on their overlap and leave $j$ distinct positive-sign and $j$ distinct negative-sign innovations. For $j>n$, they leave $n$ of each. These innovations are centered, mutually independent, and have variance $\sigma^2$, so $$\|D_{n,j}\|_2=\sigma\sqrt{2\min(j,n)}\le\sigma\sqrt{2j}.$$ The variance calculation uses the zero covariance of distinct innovations from the white-noise condition in [F1] (also implied by iid in [F3]). For finite sums, expanding the square and using Cauchy–Schwarz [F10] gives the $L^2$ triangle bound. Therefore $\sum_j\mathbb E|\psi_jD_{n,j}| \le\sigma\sqrt2\sum_j|\psi_j|\sqrt j<\infty$; Tonelli [F10] defines an almost-surely absolutely convergent remainder $R_n:=\sum_{j\ge0}\psi_jD_{n,j}$. Applying the finite-sum $L^2$ bound to each tail and Fatou [F10] gives $$\|R_n\|_2\le\sigma\sum_{j\ge0}|\psi_j|\sqrt{2j}<\infty,$$ uniformly in $n$, and the same bound for tails tends to zero. Thus the partial remainders converge to $R_n$ in $L^2$. The uniform bound follows from the given weighted summability. [F1, F3, F10, given, algebra]

2.1 Passing to the $L^2$ limit in step 1.2 yields $$\sum_{t=1}^n(X_t-\mu)=\Psi\sum_{t=1}^n\epsilon_t+R_n.$$ Step 1.3 gives $\mathbb E[R_n^2]/n\to0$. For every $\delta>0$, [F11] applied to $R_n^2$ gives $\mathbb P(|R_n|/\sqrt n\ge\delta) \le\mathbb E[R_n^2]/(n\delta^2)\to0$. Thus $R_n/\sqrt n\to_{\mathbb P}0$. [F11, step 1.2, step 1.3, algebra]

3.1 By [F5], $(\sigma\sqrt n)^{-1}\sum_{t=1}^n\epsilon_t\Rightarrow N(0,1)$; multiplying by $\sigma$ gives $n^{-1/2}\sum_{t=1}^n\epsilon_t\Rightarrow N(0,\sigma^2)$. Multiplying by $\Psi$ (also when $\Psi=0$) and adjoining the remainder $R_n/\sqrt n\to_{\mathbb P}0$ from step 2.1, [F6] gives $$\sqrt n(\bar X_n-\mu)\Rightarrow N(0,\sigma^2\Psi^2).$$ This also covers $\Psi=0$, where the limit is the point mass $N(0,0)$. [A1, F5, F6, step 2.1, given, algebra]

4.1 Now assume $\tau=\sigma|\Psi|>0$ and $\widehat\tau_n^2\to_{\mathbb P}\tau^2$. By [F7], $\widehat\tau_n=\sqrt{\widehat\tau_n^2}\to_{\mathbb P}\tau$. The map $g(x,s):=x/\max(s,\tau/2)$ is continuous everywhere; by [F6] and step 3.1, $g(\sqrt n(\bar X_n-\mu),\widehat\tau_n)\Rightarrow N(0,1)$. The event $\widehat\tau_n<\tau/2$ has probability tending to zero by convergence in probability to $\tau$. On its complement this transformed variable equals $T_n$, so $T_n\Rightarrow N(0,1)$. [F6, F7, step 3.1, given]

5.1 For fixed $c>0$, on $\{\widehat\tau_n>0\}$ membership of $\mu$ in the stated interval is equivalent to $|T_n|\le c$. The complementary event has probability tending to zero by step 4.1. The boundary $\{-c,c\}$ has $N(0,1)$ probability zero by [F8], so [F9] gives limiting coverage $\mathbb P(|N(0,1)|\le c)$. The conclusion is conditional on the separately proved consistency of $\widehat\tau_n^2$; it does not assert that naming an estimator makes it consistent. [A1, F8, F9, step 4.1, given] ∎