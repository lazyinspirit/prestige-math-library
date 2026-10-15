---
id: cor-stable-ar-long-run-variance-plug-in-consistency
kind: corollary
title: "Plug-in long-run variance for a stable AR mean"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - thm-stable-linear-process-sample-mean-clt
  - thm-fixed-order-autoregressive-ols-martingale-limit
  - thm-arma-causality-and-invertibility-root-criteria
  - def-strict-and-weak-stationarity-for-time-series
  - def-axiom-of-choice
  - thm-vector-stochastic-order-calculus
  - thm-continuous-maps-preserve-convergence-in-probability
proof_strategy: direct
axiom_use: "AC is inherited through the fixed-order OLS and linear-process CLT suppliers; no additional choice is used in the continuity argument."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Theorems 3.1 and Section 6.1"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Sections 2.1–2.3"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Statement

Assume AC and fix $p\ge1$. Let $X$ be a stable AR$(p)$, meaning that its
autoregressive polynomial $\phi(z)=1-\sum_{j=1}^p\phi_jz^j$ has no zero in
$|z|\le1$, with unknown mean $\mu$,
$$X_t-\mu=\sum_{j=1}^p\phi_j(X_{t-j}-\mu)+\epsilon_t,$$
with iid centered innovations of variance $0<\sigma^2<\infty$. Assume the
strict stationarity, ergodicity, past independence, and positive-definite
augmented Gram hypotheses of
[[thm-fixed-order-autoregressive-ols-martingale-limit]], using its
fixed-intercept regressor $Z_t=(1,X_{t-1},\ldots,X_{t-p})^T$ and coefficient
vector $(c,\phi_1,\ldots,\phi_p)^T$ with
$c=\mu(1-\sum_{j=1}^p\phi_j)$. Write $\widehat\phi_n$ for the OLS slope
vector and $\widehat\sigma_n^2$ for its residual mean square. Define
$$\widehat\tau_n^2:= \begin{cases} \widehat\sigma_n^2/(1-\sum_{j=1}^p\widehat\phi_{n,j})^2, &1-\sum_j\widehat\phi_{n,j}\ne0,\\ 0,&1-\sum_j\widehat\phi_{n,j}=0. \end{cases}$$
Then
$$\widehat\tau_n^2\longrightarrow_{\mathbb P} \frac{\sigma^2}{(1-\sum_{j=1}^p\phi_j)^2} =\sigma^2\Psi^2>0,$$
where $\Psi$ is the coefficient sum of the causal AR$(p)$ representation.
Consequently $\widehat\tau_n^2$ supplies the consistent positive variance
scale required by
[[thm-stable-linear-process-sample-mean-clt]] for the sample-mean interval.

## Facts & Assumptions

**Given:** A stable AR$(p)$ with unknown mean, iid centered innovations of
finite positive variance, the strict stationarity, ergodicity, past
independence, and augmented Gram assumptions in the OLS theorem, and the
coefficient and variance estimators defined in the Statement.

[A1] [[def-axiom-of-choice]]: AC is inherited through the OLS and
linear-process CLT suppliers cited below.

[F1] [[thm-arma-causality-and-invertibility-root-criteria]]: if $\phi$ has
no zero in $|z|\le1$, its causal transfer series is $1/\phi(z)$ and its
coefficients decay exponentially.

[F5] [[def-strict-and-weak-stationarity-for-time-series]] defines weak
stationarity by finite second moments, constant mean, and lag-only covariance.

[F2] [[thm-fixed-order-autoregressive-ols-martingale-limit]]: for fixed
order under the stated hypotheses, the OLS slope vector has a root-$n$
normal limit and the residual mean-square estimate converges in probability
to $\sigma^2$.

[F3] [[thm-continuous-maps-preserve-convergence-in-probability]]: finite
coordinate pairing and continuous maps preserve convergence in probability.

[F6] [[thm-vector-stochastic-order-calculus]]: convergence in distribution
in a fixed finite-dimensional Euclidean space implies boundedness in
probability: for every $\eta>0$ there is $M>0$ with
$\limsup_n\mathbb P(\|U_n\|_2>M)\le\eta$.

[F4] [[thm-stable-linear-process-sample-mean-clt]]: if the linear-process
coefficient sum has positive variance and a nonnegative scale estimate
converges to that variance, studentization gives a standard-normal limit and
the corresponding symmetric interval coverage.

## Proof

1.1 Stability means that $\phi$ has no zero in $|z|\le1$. In particular $\phi(1)=1-\sum_j\phi_j\ne0$. The finite augmented Gram matrix gives a finite second moment for each lagged coordinate, and strict stationarity gives the same finite second moment and mean at every time. Strict stationarity also makes the bivariate laws shift-invariant, so the covariance depends only on lag. Thus [F5] gives weak stationarity and verifies the solution premise of [F1]. The causal AR coefficients are then the Taylor coefficients of $1/\phi(z)$ and decay exponentially. Their sum converges absolutely; evaluating the power-series identity $\phi(z)\Psi(z)=1$ at $z=1$ gives $\Psi=1/\phi(1)=1/(1-\sum_j\phi_j)$. Since $\sigma^2>0$ and $\phi(1)$ is finite and nonzero, $\sigma^2\Psi^2>0$. [F1, F5, given, algebra]

1.2 By [F2], $U_n:=\sqrt n(\widehat\beta_n-\beta)$ converges in distribution to a finite-dimensional normal law, so [F6] makes $U_n$ bounded in probability. Fix $\delta,\eta>0$ and choose $M>0$ with $\limsup_n\mathbb P(\|U_n\|_2>M)\le\eta$. For all sufficiently large $n$, $\sqrt n\delta>M$, so $\mathbb P(\|\widehat\beta_n-\beta\|_2>\delta)\le\mathbb P(\|U_n\|_2>M)$. Its limiting upper probability is at most $\eta$; letting $\eta\downarrow0$ proves $\widehat\beta_n\to_{\mathbb P}\beta$, and hence $\widehat\phi_n\to_{\mathbb P}\phi$ because the slope subvector norm is at most the full-vector norm. Supplier [F2] also gives $\widehat\sigma_n^2\to_{\mathbb P}\sigma^2$. [F2, F6, given, choose, algebra]

2.1 Put $d_0:=1-\sum_j\phi_j\ne0$ and $d_n:=1-\sum_j\widehat\phi_{n,j}$. Step 1.2 and finite coordinate pairing in [F3] give $(\widehat\sigma_n^2,\widehat\phi_n)\to_{\mathbb P}(\sigma^2,\phi)$ and $d_n\to_{\mathbb P}d_0$. The everywhere-continuous map $g(s,v):=s/\max\{(1-\sum_jv_j)^2,d_0^2/4\}$ therefore satisfies $g(\widehat\sigma_n^2,\widehat\phi_n)\to_{\mathbb P}\sigma^2/d_0^2$ by [F3]. On $\{|d_n|\ge|d_0|/2\}$ this map equals the displayed estimator $\widehat\tau_n^2$. The complement has probability at most $\mathbb P(|d_n-d_0|\ge|d_0|/2)\to0$. For every $\varepsilon>0$, the estimator's deviation probability is bounded by that complement probability plus $\mathbb P(|g(\widehat\sigma_n^2,\widehat\phi_n)-\sigma^2/d_0^2|>\varepsilon)$, so it tends to zero. This proves consistency including the zero-denominator fallback. [F3, step 1.1, step 1.2, algebra]

3.1 By step 1.1, the limiting long-run variance is $\sigma^2\Psi^2>0$; step 2.1 proves that $\widehat\tau_n^2$ is a nonnegative consistent estimate of it. The exponential coefficient bound in step 1.1 gives $\sum_j\sqrt{j+1}|\psi_j|<\infty$, so all additional hypotheses of [F4] hold; its AC branch is supplied by [A1]. The stable linear-process CLT gives the stated standardized mean limit and interval coverage. This uses the fitted OLS innovation variance and fixed-order slope estimate; it makes no claim for a data-selected order or an unspecified HAC estimator. [A1, F4, step 1.1, step 2.1, given] ∎