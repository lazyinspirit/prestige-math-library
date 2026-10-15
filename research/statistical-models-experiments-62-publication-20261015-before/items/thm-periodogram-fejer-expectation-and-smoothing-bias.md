---
id: thm-periodogram-fejer-expectation-and-smoothing-bias
kind: theorem
title: "Expected periodogram and smoothed spectral-density bias"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-time-series-spectral-measure-and-periodogram
  - def-strict-and-weak-stationarity-for-time-series
  - def-autocovariance-and-sample-autocovariance
  - def-moments-variance-and-covariance
  - lem-angular-fourier-orthogonality
  - def-countable-choice
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-complex-conjugation-and-modulus-laws
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-sine-and-cosine-derivatives
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Sections 3.1–3.3"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Section 2.3, Lemmas 2.10 and 2.14"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf"
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Section 4.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
---

## Statement

Let $X=(X_t)_{t\in\mathbb Z}$ be a real weakly stationary process with known
mean $\mu$ and autocovariance $\gamma$. For every $n\ge1$ and
$\lambda\in\mathbb T$, its known-mean periodogram from
[[def-time-series-spectral-measure-and-periodogram]] satisfies
$$\mathbb E[I_n(\lambda)] =\frac1{2\pi}\sum_{|h|<n}\left(1-\frac{|h|}{n}\right)\gamma(h)e^{-ih\lambda}.$$
If $F$ is any spectral measure for $X$, this is equivalently the finite-sample
Fejér convolution
$$\mathbb E[I_n(\lambda)]=\int_{\mathbb T}\Phi_n(\lambda-\theta)\,F(d\theta).$$
If $F(d\theta)=f(\theta)\,d\theta$, the right side is
$\int_{\mathbb T}\Phi_n(\lambda-\theta)f(\theta)\,d\theta$.

The finite expectation identity and the convolution identity for a supplied
spectral measure use no choice principle. Assume Countable Choice for the
angular Lebesgue measure and the smoothing conclusion below, as required by
the measure convention in
[[def-time-series-spectral-measure-and-periodogram]].

For the smoothing definition in
[[def-time-series-spectral-measure-and-periodogram]], suppose
$F(d\theta)=f(\theta)\,d\theta$, where $f\in L^1(\mathbb T,d\lambda)$ is
continuous at $\lambda_0$. Let $K$ be as defined there and let $b_n>0$ satisfy
$b_n\to0$ and $n b_n\to\infty$. Then the weights are defined for all
sufficiently large $n$, and
$$\mathbb E[\widetilde f_n(\lambda_0)]\longrightarrow f(\lambda_0).$$
This is a bias limit for the smoothed estimator; it asserts no variance
consistency, raw-periodogram consistency, central limit theorem, or interval
coverage.

## Facts & Assumptions

**Given:** A real weakly stationary process $X=(X_t)_{t\in\mathbb Z}$ with
known mean $\mu$ and autocovariance $\gamma$. For the spectral-measure
identity assume a finite positive Radon measure $F$ satisfies
$\gamma(h)=\int_{\mathbb T}e^{ih\theta}F(d\theta)$. For the smoothing
conclusion also assume Countable Choice, $F(d\theta)=f(\theta)d\theta$, with
$f$ integrable and continuous at $\lambda_0$, and $b_n>0$, $b_n\to0$,
$nb_n\to\infty$.

[F1] [[def-time-series-spectral-measure-and-periodogram]]: the known-mean
periodogram is
$I_n(\lambda)=(2\pi n)^{-1}|\sum_{t=1}^n(X_t-\mu)e^{-it\lambda}|^2$.

[F2] [[def-strict-and-weak-stationarity-for-time-series]] and
[[def-autocovariance-and-sample-autocovariance]]: each $X_t$ has finite
second moment, the mean is $\mu$, and covariance depends only on the lag with
$\gamma(h)=\operatorname{Cov}(X_{t+h},X_t)$.

[F3] [[def-moments-variance-and-covariance]]: covariance of square-integrable
real variables is the expectation of their centered product.

[F4] [[def-time-series-spectral-measure-and-periodogram]]: a supplied spectral
measure has Fourier coefficients $\gamma(h)$, and $F=f\,d\lambda$ means
$f$ is a spectral density.

[F5] [[def-time-series-spectral-measure-and-periodogram]]: the normalized
finite-sample Fejér kernel is
$\Phi_n(x)=(2\pi n)^{-1}|\sum_{t=1}^ne^{-itx}|^2$.

[F6] [[def-time-series-spectral-measure-and-periodogram]]: the periodized
kernel and the finite normalized Fourier-grid weights define
$\widetilde f_n(\lambda_0)$ when their denominator is positive.

[F7] [[lem-angular-fourier-orthogonality]]: under the unnormalized angular
measure, $\int_{\mathbb T}e^{ikx}\,dx=2\pi$ for $k=0$ and $0$ for nonzero
integer $k$.

[A1] [[def-countable-choice]]: Countable Choice supplies the angular
Lebesgue measure and orthogonality fact [F7], and is used only in the
density/smoothing branch.

[F8] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation
is linear for finite sums of integrable random variables and deterministic
weights.

[F9] [[thm-complex-exponential-addition-and-real-extension]],
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]],
[[lem-complex-conjugation-and-modulus-laws]], and
[[cor-trigonometric-parity-and-pythagorean-identity]]: Euler's identity and
the exponential law give $|1-e^{-iy}|=2|\sin(y/2)|$, and the Pythagorean
identity gives $|\sin y|\le1$.

[F10] [[thm-sine-cosine-signs-monotonicity-and-ranges]] and
[[thm-sine-and-cosine-derivatives]]: for $0<\delta<\pi$ and
$\delta\le|x|\le\pi$, $|\sin(x/2)|\ge\sin(\delta/2)>0$.

[F11] [[def-time-series-spectral-measure-and-periodogram]]: circular angular
distance is $d_{\mathbb T}(\lambda,\theta)=\min_{k\in\mathbb Z}
|\lambda-\theta+2\pi k|$.

## Proof



**Proof technique:** Expand the finite square exactly, then use the
nonnegative Fejér kernels as an approximate identity on the circle.

1.1 Expand the finite squared modulus in $I_n(\lambda)$. By [F2] and [F3], $\mathbb E[(X_t-\mu)(X_s-\mu)]=\gamma(t-s)$, so $\mathbb E[I_n(\lambda)] =\frac1{2\pi n}\sum_{t=1}^n\sum_{s=1}^n\gamma(t-s)e^{-i(t-s)\lambda}.$ All sums are finite and all terms integrable. [F1, F2, F3, given, algebra]

1.2 Since $K$ is continuous and $K(0)>0$, it is positive on some interval $[-r,r]$ with $r>0$. The nearest point of the Fourier grid is within $\pi/n$ of $\lambda_0$; because $nb_n\to\infty$, eventually $\pi/(nb_n)<r$, so the denominator defining the weights is positive. Every positive weight is supported at a grid point within circular distance $R b_n$ of $\lambda_0$, where $[-R,R]$ contains the support of $K$; this distance tends to zero. [F6, given, choose]

2.1 For each $h$ with $|h|<n$, exactly $n-|h|$ ordered pairs $(t,s)\in\{1,\ldots,n\}^2$ have $t-s=h$. Grouping the sum in step 1.1 by $h$ gives the asserted finite Fourier sum. [step 1.1, algebra]

2.2 If a spectral measure $F$ is supplied, substitute $\gamma(t-s)=\int_{\mathbb T}e^{i(t-s)\theta}F(d\theta)$ into the finite double sum and interchange the finite sum and integral. The resulting integrand is $\frac1{2\pi n}\left|\sum_{t=1}^ne^{-it(\lambda-\theta)}\right|^2 =\Phi_n(\lambda-\theta),$ which proves the Fejér convolution formula. When $F=f\,d\theta$, substitute that density in the same integral. [F4, F5, step 1.1, algebra]

3.1 The kernel $\Phi_n$ is nonnegative. Expanding its finite square and applying [F7] to each term gives $\int_{\mathbb T}\Phi_n(x)\,dx=1$. When $F=f\,d\lambda$, steps 2.2 and [F4] also give $g_n(\omega):=\mathbb E[I_n(\omega)] =\int_{\mathbb T}\Phi_n(\omega-\theta)f(\theta)\,d\theta$ as a normalized Fejér average of $f$. [A1, F4, F5, F7, step 2.2, algebra]

4.1 For $0<\delta<\pi$, if $d_{\mathbb T}(x,0)\ge\delta$, choose its representative in $[-\pi,\pi]$, so $\delta\le|x|\le\pi$ by [F11]. Put $r=e^{-ix}$. Finite cancellation gives $(1-r)\sum_{t=1}^nr^t=r(1-r^n).$ By [F9], $|1-r|=2|\sin(x/2)|>0$ by [F10], and $|1-r^n|=2|\sin(nx/2)|\le2$. Therefore $\Phi_n(x)=\frac1{2\pi n}\left|\frac{\sin(nx/2)}{\sin(x/2)}\right|^2 \le\frac1{2\pi n\sin^2(\delta/2)}.$ Given $\varepsilon>0$, continuity of $f$ at $\lambda_0$ gives a positive radius; shrink it so that $0<2\delta<\pi$ and $|f(\theta)-f(\lambda_0)|<\varepsilon$ when $d_{\mathbb T}(\theta,\lambda_0)<2\delta$. If $d_{\mathbb T}(\omega,\lambda_0)<\delta$, split the integral for $g_n(\omega)-f(\lambda_0)$ into that neighborhood and its complement. The first part has modulus at most $\varepsilon$ because $\Phi_n$ has integral one; on the complement $d_{\mathbb T}(\omega,\theta)\ge\delta$: choose minimizing integers $k_1,k_2$ for $d_{\mathbb T}(\theta,\omega)$ and $d_{\mathbb T}(\omega,\lambda_0)$. Then $d_{\mathbb T}(\theta,\lambda_0) \le|\theta-\lambda_0+2\pi(k_1+k_2)| \le d_{\mathbb T}(\theta,\omega)+d_{\mathbb T}(\omega,\lambda_0),$ by [F11] and the real triangle inequality. Since the first term is at least $2\delta$ and the last term is less than $\delta$, the displayed kernel bound makes the second part at most $\frac{\|f\|_1+2\pi|f(\lambda_0)|}{2\pi n\sin^2(\delta/2)},$ which tends to zero uniformly for all such $\omega$. Hence $g_n(\omega)$ tends uniformly to $f(\lambda_0)$ as $\omega$ ranges over any neighborhoods of $\lambda_0$ whose radii tend to zero. [A1, F5, F9, F10, F11, given, step 3.1, algebra]

5.1 For all sufficiently large $n$, the weights are nonnegative and sum to one, and every grid point receiving positive weight lies in a shrinking neighborhood of $\lambda_0$. Finite-sum linearity of expectation [F8] therefore gives $\mathbb E[\widetilde f_n(\lambda_0)] =\sum_{j=0}^{n-1}w_{n,j}(\lambda_0)g_n(\lambda_{j,n}) \longrightarrow f(\lambda_0)$ by the uniform local convergence in step 4.1. [F8, step 4.1, step 1.2, given, algebra] ∎