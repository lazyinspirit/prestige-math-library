---
id: thm-regular-grid-smoothed-periodogram-bias-vanishes
kind: theorem
title: "Vanishing bias of a smoothed regular-grid spatial periodogram"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-regular-grid-periodogram-and-smoother
  - thm-regular-grid-periodogram-fejer-expectation
  - def-product-measure-on-sigma-finite-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-integrable-real-and-complex-functions-and-their-integrals
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - cor-pi-is-the-first-positive-sine-zero
  - def-axiom-of-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Lemmas 2.10 and 2.14"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/mitarbeiter/spodarev/publications/scripts/SpatialStatistics_2024.pdf"
---

## Statement

Assume the Axiom of Choice and Dependent Choice, as in
[[thm-regular-grid-periodogram-fejer-expectation]]. Let the lattice spectral
measure from that theorem be absolutely continuous
with a specified bounded representative $f\in L^\infty(\mathbb T^d)$ continuous at the chosen target frequency $\lambda_0\in\mathbb T^d$.
Let $K$ and $\widetilde f_{n,b}$ be as in
[[def-regular-grid-periodogram-and-smoother]], and let $b_n>0$ satisfy
$$b_n\to0,\qquad n b_n\to\infty.$$
Then the denominator
defining $\widetilde f_{n,b_n}(\lambda_0)$ is positive for all sufficiently
large $n$, and
$$\mathbb E[I_n(\lambda_0)]\longrightarrow f(\lambda_0),\qquad\mathbb E[\widetilde f_{n,b_n}(\lambda_0)]\longrightarrow f(\lambda_0).$$
This is an asymptotic-bias statement only; it asserts no variance limit,
weak consistency, or central limit theorem.

## Facts & Assumptions

**Given:** The known-mean regular-grid periodogram, periodized kernel $K_b^{\rm
per}$, bandwidth sequence, and continuous bounded spectral density in the
Statement. For angular representatives define
$$\rho_{\mathbb T}(x,y):=\min_{m\in\mathbb Z}|x-y+2\pi m|, \qquad \rho_\infty(\lambda,\theta):= \max_{1\le r\le d}\rho_{\mathbb T}(\lambda_r,\theta_r),$$
and for $u\in\mathbb R^d$ define $\|u\|_\infty:=\max_r|u_r|$.

[A1] [[def-regular-grid-periodogram-and-smoother]]: the normalized Fourier-grid
weights are $w_{n,q,b}(\lambda)$ and
$\widetilde f_{n,b}(\lambda)=\sum_qw_{n,q,b}(\lambda)I_n(\lambda_{n,q})$
when the denominator is positive.

[A2] [[def-axiom-of-choice]]: the Axiom of Choice is assumed for the
imported Bochner representation.

[A3] [[def-dependent-choice]]: Dependent Choice is also assumed for that
representation, as in the preceding Fejer theorem.

[F1] [[thm-regular-grid-periodogram-fejer-expectation]]: the expected raw
periodogram is $g_n(\lambda):=\mathbb E[I_n(\lambda)]
=\int_{\mathbb T^d}\Phi_n(\lambda-\theta)f(\theta)\,d\theta$, where
$\Phi_n\ge0$ and $\int_{\mathbb T^d}\Phi_n=1$.

[F2] [[thm-sine-cosine-signs-monotonicity-and-ranges]] and
[[cor-pi-is-the-first-positive-sine-zero]]: sine is increasing on
$[0,\pi/2]$ and positive on $(0,\pi)$, so $\sin(\delta/2)>0$ for
$0<\delta<\pi$.

[F3] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation
passes through the finite weighted sum defining the smoother.

[F4] [[def-product-measure-on-sigma-finite-spaces]] and
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: product angular
measure and iterated integrals for the product Fejer kernel use the stated
Lebesgue product measure.

## Proof


**Proof technique:** control the Fejer mass outside neighborhoods, then use the
kernel support and Fourier-grid mesh to localize the smoothing weights.

1.1 Write $\phi_n(x):=(2\pi n)^{-1}|\sum_{a=0}^{n-1}e^{-iax}|^2$, so $\Phi_n(x)=\prod_{r=1}^d\phi_n(x_r)$ by [F1]. Fix $0<\delta<\pi$. If the circular distance of $x$ from $0$ is at least $\delta$, choose its representative in $[-\pi,\pi]$; then $|\sin(x/2)|\ge\sin(\delta/2)>0$ by [F2]. The finite geometric-series formula therefore gives $\phi_n(x)=\frac1{2\pi n} \left|\frac{\sin(nx/2)}{\sin(x/2)}\right|^2 \le\frac1{2\pi n\sin^2(\delta/2)}.$ By the union bound over coordinates and the unit integral of each factor from [F1], $\int_{\{x:\rho_\infty(x,0)\ge\delta\}}\Phi_n(x)\,dx \le\frac{d}{n\sin^2(\delta/2)},$ where $\rho_\infty$ is the maximum circular distance over the $d$ coordinates. [A2, A3, F1, F2, F4, given, algebra]

2.1 Fix $\varepsilon>0$. Continuity of $f$ at $\lambda_0$ gives $0<\delta<\pi$ such that $|f(\theta)-f(\lambda_0)|<\varepsilon$ whenever $\rho_\infty(\theta,\lambda_0)<2\delta$. For any $\lambda'$ with $\rho_\infty(\lambda',\lambda_0)<\delta$, split the convolution in [F1] into that neighborhood and its complement. On the neighborhood its contribution to $|g_n(\lambda')-f(\lambda_0)|$ is at most $\varepsilon$ because $\Phi_n$ has integral one. On the complement, $\rho_\infty(\lambda'-\theta,0)\ge\delta$; with $M:=\|f\|_\infty+|f(\lambda_0)|<\infty$, step 1.1 gives $|g_n(\lambda')-f(\lambda_0)| \le\varepsilon+\frac{Md}{n\sin^2(\delta/2)}.$ This bound holds uniformly for all such $\lambda'$. [A2, A3, F1, step 1.1, given]

3.1 Since $K$ is continuous and $K(0)>0$, there is $a>0$ such that $K(u)>0$ whenever $\|u\|_\infty<a$. A nearest Fourier-grid point to $\lambda_0$ is within $\pi/n$ in each circular coordinate. Since $n b_n\to\infty$, eventually $\pi/(n b_n)<a$, so the periodized kernel is positive at that grid point and the denominator in [A1] is positive. Moreover, if a weight in [A1] is positive, compact support of $K$ implies its grid point is within circular distance $R b_n$ of $\lambda_0$ in every coordinate, where $[-R,R]^d$ contains the support of $K$. Since $b_n\to0$, all positive-weight grid points eventually lie within the $\delta$-neighborhood from step 2.1. [A1, given, step 2.1, algebra]

4.1 For all sufficiently large $n$, [F3] and [A1] give $\mathbb E[\widetilde f_{n,b_n}(\lambda_0)] =\sum_{q\in\Lambda_n}w_{n,q,b_n}(\lambda_0) g_n(\lambda_{n,q}).$ The weights are nonnegative and sum to one, and every positive weight is on a grid point covered by step 2.1. Hence $\left|\mathbb E[\widetilde f_{n,b_n}(\lambda_0)]-f(\lambda_0)\right| \le\varepsilon+\frac{Md}{n\sin^2(\delta/2)}.$ Taking $n\to\infty$ and then arbitrary $\varepsilon\downarrow0$ proves the smoothed bias limit. Taking $\lambda'=\lambda_0$ in step 2.1 proves the raw expectation limit as well. [A1, A2, A3, F3, step 2.1, step 3.1, algebra] ∎