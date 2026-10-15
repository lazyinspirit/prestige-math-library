---
id: def-time-series-spectral-measure-and-periodogram
kind: definition
title: "Spectral measures and the known-mean periodogram"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-strict-and-weak-stationarity-for-time-series
  - def-autocovariance-and-sample-autocovariance
  - def-integers
  - def-radon-measure-on-an-lch-space
  - def-borel-sigma-algebra
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-continuous-preimages-of-borel-sets-are-borel
  - def-measure
  - def-subspace-topology-top
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-differentiability-implies-continuity
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-discrete-integers-have-circle-dual
  - def-moments-variance-and-covariance
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Theorem 4.2 and Corollary 4.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Sections 3.1–3.3"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Section 2.3"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf"
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice ([[def-countable-choice]]) for the angular Lebesgue
measure clause below; under it $\lambda_1$ is a measure and intervals have
their usual lengths ([[thm-lebesgue-measure-is-a-complete-measure]],
[[thm-lebesgue-measure-of-a-box-of-every-kind]]).

Let $\mathbb T:=\{z\in\mathbb C:|z|=1\}$ be the multiplicative unit circle
with its subspace topology from $\mathbb C$
([[lem-unit-circle-is-a-compact-metrizable-topological-group]]), identified
with angular frequencies by $z=e^{i\lambda}$. Write $d\lambda$ for
the finite angular Lebesgue Borel measure obtained from ordinary Lebesgue
measure on $[-\pi,\pi)$; thus $d\lambda(\mathbb T)=2\pi$, and the endpoints
$-\pi$ and $\pi$ denote the same point. The characters of discrete additive
$\mathbb Z$ are $h\mapsto e^{ih\lambda}$ by
[[thm-discrete-integers-have-circle-dual]].

For angular representatives $\lambda,\theta\in\mathbb R$, define their
circular distance by
$$d_{\mathbb T}(\lambda,\theta):=\min_{k\in\mathbb Z}|\lambda-\theta+2\pi k|.$$
The minimum exists because the displayed absolute values tend to infinity
with $|k|$, and changing either representative by $2\pi$ leaves it unchanged.

Precisely, for Borel $B\subseteq\mathbb T$ put
$$d\lambda(B):=\lambda_1\{\theta\in[-\pi,\pi):e^{i\theta}\in B\}.$$
The map $\theta\mapsto e^{i\theta}$ is continuous by
[[thm-complex-exponential-is-entire-with-derivative-itself]] and
[[cor-complex-differentiability-implies-continuity]], so the preimage is
Borel by [[thm-continuous-preimages-of-borel-sets-are-borel]]. Preimages
preserve disjoint unions, so this is a finite Borel measure under the stated
Countable Choice premise. Integrating a Borel function of the circle angle
means integrating its periodic lift over this half-open interval.

Let $X=(X_t)_{t\in\mathbb Z}$ be a real weakly stationary process with mean
$\mu$ and autocovariance $\gamma(h)=\operatorname{Cov}(X_{t+h},X_t)$
([[def-strict-and-weak-stationarity-for-time-series]],
[[def-autocovariance-and-sample-autocovariance]]). A **spectral measure** for
$X$ is a finite positive Radon Borel measure $F$ on $\mathbb T$
([[def-radon-measure-on-an-lch-space]]) satisfying
$$\gamma(h)=\int_{\mathbb T}e^{ih\lambda}\,F(d\lambda)\qquad(h\in\mathbb Z).$$
Putting $h=0$ gives $F(\mathbb T)=\gamma(0)$. A **spectral density** is a
nonnegative measurable function $f$ with
$$F(B)=\int_B f(\lambda)\,d\lambda$$
for every Borel set $B\subseteq\mathbb T$; it exists only when $F$ is
absolutely continuous with respect to $d\lambda$ and is unique up to
$d\lambda$-null sets.

For a known mean $\mu$ and integer $n\ge1$, the **known-mean periodogram** is
the random function
$$I_n(\lambda):=\frac1{2\pi n}\left|\sum_{t=1}^n(X_t-\mu)e^{-it\lambda}\right|^2,\qquad\lambda\in\mathbb T.$$
The centering uses the population mean, not the sample mean. The finite sum is
square-integrable, so $I_n(\lambda)$ has finite expectation: for
$Y_t=X_t-\mu$, the pointwise inequality
$|\sum_{t=1}^nY_te^{-it\lambda}|^2\le n\sum_{t=1}^n|Y_t|^2$ bounds its
expectation by $n\sum_{t=1}^n\mathbb E[Y_t^2]<\infty$
([[def-moments-variance-and-covariance]]).

Define the normalized finite-sample Fejér kernel
$$\Phi_n(x):=\frac1{2\pi n}\left|\sum_{t=1}^ne^{-itx}\right|^2,\qquad x\in\mathbb T.$$

For smoothing, let $K:\mathbb R\to[0,\infty)$ be continuous with compact
support, $\int_{\mathbb R}K(u)\,du=1$, and $K(0)>0$. For bandwidth $b>0$,
periodize it on the circle by
$$K_b(x):=\sum_{k\in\mathbb Z}\frac1bK\!\left(\frac{x+2\pi k}{b}\right).$$
Compact support makes this a finite sum at each $x$, and changing variables
over the intervals that tile $\mathbb R$ gives
$\int_{\mathbb T}K_b(x)\,d\lambda(x)=1$. Fix a sequence of bandwidths
$(b_n)_{n\ge1}$ with $b_n>0$. For the Fourier grid
$\lambda_{j,n}=2\pi j/n$ ($0\le j<n$) and target $\lambda_0\in\mathbb T$, when
the denominator is positive define
$$w_{n,j}(\lambda_0):=\frac{K_{b_n}(\lambda_0-\lambda_{j,n})}{\sum_{\ell=0}^{n-1}K_{b_n}(\lambda_0-\lambda_{\ell,n})},\qquad \widetilde f_n(\lambda_0):=\sum_{j=0}^{n-1}w_{n,j}(\lambda_0)I_n(\lambda_{j,n}).$$
The weights are nonnegative and sum to one.

## Remarks

The finite-sum bound used in the finite-expectation paragraph follows directly.
Put $Z_t:=Y_te^{-it\lambda}$. Since $|e^{-it\lambda}|=1$ by
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]],
$\sum_{t=1}^n|Z_t|^2=\sum_{t=1}^n|Y_t|^2$. Expanding the squares gives
$$n\sum_{t=1}^n|Z_t|^2-\left|\sum_{t=1}^n Z_t\right|^2=\sum_{1\le s<t\le n}|Z_s-Z_t|^2\ge0,$$
so $|\sum_{t=1}^nY_te^{-it\lambda}|^2\le n\sum_{t=1}^n|Y_t|^2$.
