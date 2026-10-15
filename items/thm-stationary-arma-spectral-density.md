---
id: thm-stationary-arma-spectral-density
kind: theorem
title: "Spectral density of a stationary ARMA solution"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-linear-process-and-arma-model
  - lem-absolutely-summable-linear-filters-preserve-weak-stationarity
  - def-time-series-spectral-measure-and-periodogram
  - def-radon-measure-on-an-lch-space
  - cor-every-complex-polynomial-splits-into-linear-factors
  - thm-tonelli-for-nonnegative-double-series
  - def-countable-choice
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - thm-compactness-agrees-with-metric-compactness
  - thm-compact-implies-complete-and-totally-bounded
  - lem-compact-metric-space-has-a-countable-dense-subset
  - def-polish-space
  - thm-borel-probability-measures-on-polish-spaces-are-inner-regular
  - def-probability-measure
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Theorem 4.4"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, spectral representation sections"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]).

Let $X_t-\mu$ be a real weakly stationary solution of the normalized coprime
ARMA$(p,q)$ equation
$$\phi(B)(X_t-\mu)=\theta(B)\epsilon_t,$$
where $\epsilon$ is centered white noise with variance $\sigma^2>0$. If
$\phi(z)\ne0$ for every $|z|=1$, then $X$ has a spectral density, under the
convention
$\gamma(h)=\int_{\mathbb T}e^{ih\lambda}F(d\lambda)$ and angular Lebesgue
measure $d\lambda$ of total mass $2\pi$, given by
$$f(\lambda)=\frac{\sigma^2}{2\pi}\frac{|\theta(e^{-i\lambda})|^2}{|\phi(e^{-i\lambda})|^2},\qquad -\pi\le\lambda\le\pi.$$
No causal or invertible root condition is required; zeros of $\theta$ on the
unit circle are permitted.

## Facts & Assumptions

**Given:** Countable Choice; the normalized ARMA equation, a real weakly stationary solution,
centered white noise with variance $\sigma^2>0$, and no zero of $\phi$ on the
unit circle.

[A1] [[def-countable-choice]] is assumed for the angular Lebesgue measure and
Polish-space regularity steps below.

[F1] [[def-linear-process-and-arma-model]]: the equation uses the backshift
and normalized real polynomials; white noise is centered, finite-variance,
and uncorrelated at distinct times.

[F2] [[def-time-series-spectral-measure-and-periodogram]]: with
$\mathbb T=\mathbb R/(2\pi\mathbb Z)$, a spectral measure represents
$\gamma(h)$ by $\int e^{ih\lambda}F(d\lambda)$; a spectral density $f$
means $F(d\lambda)=f(\lambda)d\lambda$, where angular Lebesgue measure has
total mass $2\pi$.

[F3] [[lem-absolutely-summable-linear-filters-preserve-weak-stationarity]]:
two-sided $\ell^1$ filters are well-defined in $L^2$, compose by convolution,
and transform covariance through their coefficients.

[F4] [[def-radon-measure-on-an-lch-space]]: a finite Borel measure on the
compact circle is Radon when it is outer regular on Borel sets and inner
regular on open sets.

[F5] [[thm-tonelli-for-nonnegative-double-series]] permits interchanging the
order of summation for absolutely summable coefficient products.

[F6] [[cor-every-complex-polynomial-splits-into-linear-factors]]: every
nonconstant complex polynomial factors into linear terms over $\mathbb C$.

[F7] The unit circle with its inherited metric is compact by
[[lem-unit-circle-is-a-compact-metrizable-topological-group]] and
[[thm-compactness-agrees-with-metric-compactness]]. A compact metric space is
complete by [[thm-compact-implies-complete-and-totally-bounded]], and under
Countable Choice it is separable by
[[lem-compact-metric-space-has-a-countable-dense-subset]]. Thus $\mathbb T$
is Polish by [[def-polish-space]].

[F8] Under Countable Choice, every Borel probability measure on a Polish space
is inner regular on all Borel sets
([[thm-borel-probability-measures-on-polish-spaces-are-inner-regular]]).

[F9] If $f$ is nonnegative and Borel measurable, then
$E\mapsto\int_E f\,d\lambda$ is a Borel measure
([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]).

[F10] The nonnegative integral is monotone and homogeneous
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F11] A probability measure is a measure of total mass one
([[def-probability-measure]]).



## Proof

**Proof technique:** invert $\phi$ by a two-sided absolutely summable
Laurent filter, compute the filtered white-noise covariance, and identify its
Fourier density directly.

1.1 By [F6], factor $\phi$ over $\mathbb C$ as $\phi(z)=\prod_{\ell=1}^m(1-z/r_\ell)$, with multiplicities and $\phi(0)=1$; if $m=0$, take the empty product $1$. None of the roots satisfies $|r_\ell|=1$. For a root with $|r_\ell|>1$ use $(1-z/r_\ell)^{-1}=\sum_{j\ge0}r_\ell^{-j}z^j$ on the unit circle. For a root with $|r_\ell|<1$ use $(1-z/r_\ell)^{-1}=-\sum_{j\ge1}r_\ell^jz^{-j}$ there. Each coefficient sequence is in $\ell^1(\mathbb Z)$, so their finite convolution and multiplication by $\theta$ give a two-sided sequence $h\in\ell^1(\mathbb Z)$ with $$\sum_{k\in\mathbb Z}h_kz^k=\frac{\theta(z)}{\phi(z)},\qquad |z|=1.$$ Conjugate roots occur in pairs for real $\phi,\theta$. For each conjugate pair the finite convolution coefficient is unchanged by complex conjugation after reversing its summation index; real roots have real coefficients. Multiplication by real $\theta$ preserves reality. [F1, F3, F6, given, construct]

1.2 The angular measure $d\lambda$ is a finite Borel measure of total mass $2\pi$ by [F2]. Normalize it to $P=d\lambda/(2\pi)$, a Borel probability by [F11]. By [F7], $\mathbb T$ is Polish, so [F8] gives compact inner approximations for every Borel set under $P$; scaling by $2\pi$ gives the same property for $d\lambda$. For any Borel $E$, apply this inner approximation to $\mathbb T\setminus E$: for every $\eta>0$ there is compact $K\subseteq\mathbb T\setminus E$ with $d\lambda((\mathbb T\setminus E)\setminus K)<\eta$. Then $U=\mathbb T\setminus K$ is open, contains $E$, and $d\lambda(U\setminus E)<\eta$. Thus $d\lambda$ is outer regular on Borel sets and inner regular on open sets; it is finite on compact sets because its total mass is finite. Hence $d\lambda$ is Radon by [F4]. [A1, F2, F4, F7, F8, F11, algebra]

2.1 Write $a(z)=1/\phi(z)$ for the two-sided absolutely convergent series constructed in step 1.1. Its product with $\phi$ is the constant series $1$. Applying filter composition [F3] to the ARMA equation gives $$X_t-\mu=a(B)\phi(B)(X_t-\mu)=a(B)\theta(B)\epsilon_t=\sum_{k\in\mathbb Z}h_k\epsilon_{t-k}.$$ Thus every weakly stationary solution under the stated root condition is the same two-sided filtered white-noise process. [F1, F3, step 1.1, algebra]

2.2 Define $$f(\lambda):=\frac{\sigma^2}{2\pi}\left|\sum_{k\in\mathbb Z}h_ke^{-ik\lambda}\right|^2=\frac{\sigma^2}{2\pi}\frac{|\theta(e^{-i\lambda})|^2}{|\phi(e^{-i\lambda})|^2}.$$ The series is uniformly convergent because $h\in\ell^1$, so $f$ is continuous, periodic, and nonnegative. It is bounded on the compact circle; therefore $F(E):=\int_Ef\,d\lambda$ is a finite positive Borel measure by [F9] and [F10]. For any Borel $E$ and $\varepsilon>0$, outer regularity of $d\lambda$ gives an open $U\supset E$ with $d\lambda(U\setminus E)<\varepsilon/(\|f\|_\infty+1)$. Since $F(U)=F(E)+F(U\setminus E)$ and $F(U\setminus E)\le\|f\|_\infty d\lambda(U\setminus E)$, this proves outer regularity of $F$. For any open $O$, inner regularity of $d\lambda$ gives a compact $K\subset O$ with $d\lambda(O\setminus K)<\varepsilon/(\|f\|_\infty+1)$; the same bound on $F(O\setminus K)$ proves inner regularity of $F$ on open sets. Thus $F$ is Radon by [F4]. [F2, F4, F9, F10, step 1.1, step 1.2, algebra]

3.1 Applying the covariance formula in [F3] to the representation in step 2.1 and using $\operatorname{Cov}(\epsilon_s,\epsilon_t)=\sigma^2$ when $s=t$ and $0$ otherwise gives $$\gamma(h)=\sigma^2\sum_{k\in\mathbb Z}h_{k+h}h_k.$$ The sum is absolutely convergent because $h\in\ell^1(\mathbb Z)$. [F1, F3, step 2.1]

4.1 Put $H_N(\lambda):=\sum_{|k|\le N}h_ke^{-ik\lambda}$. Since $h\in\ell^1$, $H_N$ converges uniformly to $H(\lambda):=\sum_kh_ke^{-ik\lambda}$. The sequence $H_N$ is uniformly bounded, so $|H_N|^2$ converges uniformly to $|H|^2$. Expanding each finite square gives $|H_N(\lambda)|^2=\sum_{|j|,|k|\le N}h_jh_ke^{-i(j-k)\lambda}$, and [F5] gives $\sum_{j,k}|h_jh_k|=(\sum_k|h_k|)^2<\infty$. Hence the finite squares also converge uniformly to the full double series. Integration against $e^{ih\lambda}$ preserves this uniform limit because the circle has finite measure. For each integer $h$, $$\int_{\mathbb T}e^{ih\lambda}f(\lambda)\,d\lambda=\sigma^2\sum_{j,k}h_jh_k\frac1{2\pi}\int_{-\pi}^{\pi}e^{i(h-j+k)\lambda}\,d\lambda=\sigma^2\sum_kh_{k+h}h_k=\gamma(h),$$ where the middle integral is $1$ when $h-j+k=0$ and $0$ otherwise, and the last equality is step 3.1. Hence $F$ represents the autocovariance and $f$ is a spectral density under [F2]. [F2, F5, step 3.1, step 2.2, algebra] ∎