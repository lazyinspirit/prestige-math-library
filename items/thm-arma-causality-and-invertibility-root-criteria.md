---
id: thm-arma-causality-and-invertibility-root-criteria
kind: theorem
title: "ARMA causality and invertibility root criteria"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-linear-process-and-arma-model
  - def-strict-and-weak-stationarity-for-time-series
  - lem-absolutely-summable-linear-filters-preserve-weak-stationarity
  - cor-every-complex-polynomial-splits-into-linear-factors
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Theorems 3.1–3.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Sections 2.1–2.5"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Statement

Let $X$ be weakly stationary and let $(X_t,\epsilon_t)$ satisfy the
normalized coprime ARMA$(p,q)$ equation
of [[def-linear-process-and-arma-model]], with centered white noise of
variance $\sigma^2>0$. A **causal representation** with absolutely summable
one-sided coefficients exists if and only if $\phi(z)\ne0$ for every
$|z|\le1$. In that case its coefficients are uniquely determined by
$$\Psi(z):=\sum_{j\ge0}\psi_jz^j=\frac{\theta(z)}{\phi(z)},\qquad |z|\le1,$$
and there are constants $C<\infty$ and $r>1$ with
$|\psi_j|\le Cr^{-j}$.

An **invertible representation** with absolutely summable one-sided
coefficients exists if and only if $\theta(z)\ne0$ for every $|z|\le1$. Its
coefficients are uniquely determined by
$$\Pi(z):=\sum_{j\ge0}\pi_jz^j=\frac{\phi(z)}{\theta(z)},\qquad |z|\le1.$$
The two criteria are separate: neither condition assumes the other.

## Facts & Assumptions

**Given:** A weakly stationary real solution of the normalized coprime ARMA equation
$\phi(B)(X_t-\mu)=\theta(B)\epsilon_t$, real polynomials
$\phi(0)=\theta(0)=1$, and centered white noise with
$0<\sigma^2=\mathbb E[\epsilon_t^2]<\infty$.

[F1] [[def-linear-process-and-arma-model]]: a causal representation is an
$L^2$ one-sided filter $X_t-\mu=\sum_{j\ge0}\psi_j\epsilon_{t-j}$ with
$\sum_j|\psi_j|<\infty$; invertibility is an $L^2$ representation
$\epsilon_t=\sum_{j\ge0}\pi_j(X_{t-j}-\mu)$ with
$\sum_j|\pi_j|<\infty$. The polynomials are normalized and have no common
complex root.

[F2] [[def-strict-and-weak-stationarity-for-time-series]]: weak stationarity
supplies finite second moments, constant mean, and lag-only autocovariance;
these hypotheses make the absolutely summable filter operations applicable
to the given solution.

[F3] [[lem-absolutely-summable-linear-filters-preserve-weak-stationarity]]:
absolutely summable filters are well-defined in $L^2$ and compose by
convolution. Applied to white noise, a filter with coefficients
$a\in\ell^1(\mathbb N_0)$ has variance
$\sigma^2\sum_{j\ge0}a_j^2$.

[F4] [[cor-every-complex-polynomial-splits-into-linear-factors]]:
every nonconstant complex polynomial factors into linear terms over
$\mathbb C$.



## Proof

**Proof technique:** compare filter coefficients against nondegenerate white
noise for necessity; expand reciprocal polynomials into geometric series for
sufficiency.

1.1 Suppose a causal representation exists, with $\Psi(z)=\sum_{j\ge0}\psi_jz^j$ and $\sum_j|\psi_j|<\infty$. Applying the finite polynomial $\phi(B)$ and using the ARMA equation gives $$\bigl(\phi(B)\Psi(B)-\theta(B)\bigr)\epsilon_t=0.$$ The coefficient sequence $a$ of $\phi\Psi-\theta$ is in $\ell^1$ because $\phi,\theta$ are finite polynomials and $\psi\in\ell^1$. By [F3], the variance of this zero random variable is $\sigma^2\sum_{j\ge0}a_j^2$. Since $\sigma^2>0$, every $a_j=0$, so $\phi(z)\Psi(z)=\theta(z)$ on the closed unit disk; the series for $\Psi$ converges uniformly there because $\sum_j|\psi_j|<\infty$. [F1, F3, given, algebra]

1.2 Suppose $\phi$ has degree $m\ge1$ and roots $r_1,\ldots,r_m$ counted with multiplicity. None is zero because $\phi(0)=1$. By [F4] and normalization, $$\phi(z)=\prod_{\ell=1}^m(1-z/r_\ell).$$ If every $|r_\ell|>1$, then for $|z|\le1$ each factor has the geometric expansion $$(1-z/r_\ell)^{-1}=\sum_{k\ge0}r_\ell^{-k}z^k.$$ The coefficient of $z^j$ in $1/\phi(z)$ has absolute value at most $\binom{j+m-1}{m-1}r_*^{-j}$, where $r_*=\min_\ell|r_\ell|>1$, since there are $\binom{j+m-1}{m-1}$ nonnegative $m$-tuples summing to $j$. Choose $1<r<r_*$. The polynomial factor $\binom{j+m-1}{m-1}(r/r_*)^j$ is bounded in $j$, so these coefficients are bounded by $Cr^{-j}$. Multiplication by the finite polynomial $\theta$ preserves an exponential bound. If $m=0$, $\phi=1$ and $\theta/\phi$ is finite, which also has an exponential bound after enlarging $C$. Thus $\eta(z):=1/\phi(z)$ and $\Psi(z):=\eta(z)\theta(z)=\theta(z)/\phi(z)$ have absolutely summable one-sided coefficients, and those of $\Psi$ have the stated exponential decay. [F4, given, algebra]

1.3 Suppose an invertible representation exists, $\epsilon_t=\pi(B)(X_t-\mu)$ with $\pi\in\ell^1(\mathbb N_0)$. Apply the finite filter $\phi(B)$ and commute the absolutely summable and polynomial filters by [F3] on the weakly stationary process [F2]: $$\phi(B)\epsilon_t=\phi(B)\pi(B)(X_t-\mu) =\pi(B)\phi(B)(X_t-\mu)=\pi(B)\theta(B)\epsilon_t.$$ The coefficient sequence of $\phi-\pi\theta$ is in $\ell^1$. Its filter of white noise is zero, so [F3] and $\sigma^2>0$ imply every coefficient is zero. The absolutely summable series $\Pi$ converges uniformly on the closed unit disk, so the coefficient identity yields $\phi(z)=\Pi(z)\theta(z)$ for $|z|\le1$. [F1, F2, F3, given, algebra]

2.1 If $\phi(z_0)=0$ for some $|z_0|\le1$, step 1.1 gives $\theta(z_0)=\phi(z_0)\Psi(z_0)=0$. This is a common root, contrary to the coprime condition in [F1]. Therefore causality implies that $\phi$ has no zero in the closed unit disk. [F1, step 1.1, algebra]

2.2 Let $\eta(z)=1/\phi(z)$ be the absolutely summable causal series from step 1.2. Apply the filter $\eta(B)$ to the given equation. Since $X-\mu$ is weakly stationary, [F2] and [F3] justify composition and $\eta*\phi$ is the constant coefficient sequence $1$. Therefore $$X_t-\mu=\eta(B)\phi(B)(X_t-\mu) =\eta(B)\theta(B)\epsilon_t =\Psi(B)\epsilon_t.$$ This is the required causal representation of the given solution. [F1, F2, F3, step 1.2, algebra]

2.3 If $\theta(z_0)=0$ for some $|z_0|\le1$, step 1.3 gives $\phi(z_0)=\Pi(z_0)\theta(z_0)=0$, contradicting coprimality. Hence invertibility implies that $\theta$ has no zero in the closed unit disk. [F1, step 1.3, algebra]

2.4 If $\theta$ has no zero in $|z|\le1$, the same geometric-series argument as in step 1.2 applied to its roots gives an absolutely summable causal series $\eta(z)=1/\theta(z)$. Set $\Pi(z)=\eta(z)\phi(z)$; its coefficients are absolutely summable. Applying $\eta(B)$ to the ARMA equation and using filter composition [F3] on the weakly stationary process [F2] gives $$\Pi(B)(X_t-\mu)=\eta(B)\phi(B)(X_t-\mu) =\eta(B)\theta(B)\epsilon_t=\epsilon_t.$$ Thus the model is invertible. [F1, F2, F3, F4, given, step 1.2, algebra]

3.1 Steps 1.1, 1.2, 2.1, and 2.2 prove both directions of the causal criterion and identify its coefficients; steps 1.3, 2.3, and 2.4 prove both directions of the invertibility criterion and identify its coefficients. The proof uses no choice axiom. [step 1.1, step 1.2, step 2.1, step 2.2, step 1.3, step 2.3, step 2.4] ∎