---
id: thm-fixed-order-autoregressive-ols-martingale-limit
kind: theorem
title: "Fixed-order autoregressive OLS martingale limit"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-stationary-process-and-canonical-shift
  - def-ergodic-measure-preserving-system
  - thm-stationary-process-birkhoff-ergodic-limit
  - thm-kolmogorov-iid-l1-strong-law
  - def-filtration-and-filtered-probability-space
  - def-square-integrable-martingale-difference-array-and-variance-clock
  - def-conditional-expectation-as-an-ae-class
  - def-independent-sigma-algebras-and-events
  - lem-measurable-functions-preserve-independence
  - thm-factorization-of-expectations-for-independent-variables
  - def-moments-variance-and-covariance
  - cor-cauchy-schwarz-for-random-variables
  - thm-dominated-convergence
  - thm-martingale-central-limit-theorem
  - thm-cramer-wold-device
  - thm-vector-slutsky
  - thm-vector-stochastic-order-calculus
  - def-convergence-in-distribution-of-random-elements
  - def-convergence-in-probability
  - def-multivariate-normal-law
  - def-chi-square-law
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
proof_strategy: direct
axiom_use: "AC is inherited through the conditional-expectation, Birkhoff, martingale-CLT, Cramér–Wold, and multivariate-normal/chi-square suppliers; the proof uses those branches at steps 1.1, 1.2, 2.3, 3.1, and 5.1."
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
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Sections 2.3 and 6.1"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Sections 2.1–2.3"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Statement

Assume the Axiom of Choice. Fix $p\ge1$, put
$\phi=(\phi_1,\ldots,\phi_p)^T$, and let
$Y_t=(X_{t-1},\ldots,X_{t-p})^T$. Either take $Z_t=Y_t$ and
$X_t=\beta^TZ_t+\epsilon_t$ with $d=p$ and $\beta=\phi$, or take
$Z_t=(1,Y_t^T)^T$ and $X_t=\beta^TZ_t+\epsilon_t$ with $d=p+1$ to include
a fixed intercept. Let $X$ be a strictly stationary process whose canonical
one-sided shift is ergodic, and suppose the displayed AR($p$) equation holds.
Assume the innovations $(\epsilon_t)_{t\in\mathbb Z}$ are iid, centered, have
$0<\sigma^2=\mathbb E[\epsilon_0^2]<\infty$, and are independent of the past:
for the filtration
$$\mathcal F_t:=\sigma(X_s,\epsilon_s:s\le t),\qquad t\in\mathbb N_0,$$
$Z_t$ is $\mathcal F_{t-1}$-measurable and $\epsilon_t$ is independent of
$\mathcal F_{t-1}$ for each $t\ge1$. Assume
$$\Gamma:=\mathbb E[Z_tZ_t^T]$$
is finite and positive definite, meaning $a^T\Gamma a>0$ for every
$a\ne0$.

For observations at $t=1,\ldots,n$, set
$$G_n:=\frac1n\sum_{t=1}^{n}Z_tZ_t^T,\qquad b_n:=\frac1n\sum_{t=1}^{n}Z_tX_t.$$
Define the measurable OLS fallback by $\widehat\beta_n=G_n^{-1}b_n$ when
$G_n$ is invertible and $\widehat\beta_n=0$ otherwise, and define
$$\widehat\sigma_n^2:=\frac1n\sum_{t=1}^{n} (X_t-\widehat\beta_n^TZ_t)^2.$$
Then
$$\sqrt n(\widehat\beta_n-\beta)\Rightarrow N_d(0,\sigma^2\Gamma^{-1}),\qquad \widehat\sigma_n^2\longrightarrow_{\mathbb P}\sigma^2.$$
If $W_n$ is the fixed-order Wald statistic
$$W_n:=\frac{n}{\widehat\sigma_n^2} (\widehat\beta_n-\beta)^TG_n(\widehat\beta_n-\beta)$$
when $G_n$ is invertible and $\widehat\sigma_n^2>0$, and is set to $0$
otherwise, then $W_n\Rightarrow\chi_d^2$. These statements use fixed $p$;
they do not assert validity after data-selected order.

## Facts & Assumptions

**Given:** The Axiom of Choice; a fixed-order AR($p$) equation and regressor
choice from the Statement; a strictly stationary ergodic process; the iid
innovation and past-independence assumptions; $0<\sigma^2<\infty$; and a
finite positive-definite matrix $\Gamma=\mathbb E[Z_tZ_t^T]$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice
function. It is inherited by the conditional-expectation, Birkhoff,
martingale-CLT, Cramér–Wold, and multivariate-normal/chi-square suppliers.

[F1] [[def-stationary-process-and-canonical-shift]] and
[[def-ergodic-measure-preserving-system]]: strict stationarity is invariance
of finite-dimensional laws under shifts, and ergodicity is ergodicity of the
canonical shift on path space.

[F2] [[thm-stationary-process-birkhoff-ergodic-limit]]: under AC, averages of
a strictly stationary integrable process converge almost surely to the
process mean when its canonical shift is ergodic.

[F3] [[def-filtration-and-filtered-probability-space]] and
[[def-square-integrable-martingale-difference-array-and-variance-clock]]:
a rowwise square-integrable martingale-difference array has predictable
variance clock $\Gamma_{n,m}=\sum_{k\le m}
\mathbb E[Z_{n,k}^2\mid\mathcal F_{n,k-1}]$; finite rows are padded by zeros.

[F4] [[def-conditional-expectation-as-an-ae-class]]: conditional expectation
is the unique almost-sure class characterized by its integrals over every
event in the conditioning sigma-algebra.

[F5] [[def-independent-sigma-algebras-and-events]],
[[lem-measurable-functions-preserve-independence]], and
[[thm-factorization-of-expectations-for-independent-variables]]: measurable
functions of independent variables remain independent, and expectations of
products of integrable independent variables factor.

[F6] [[def-moments-variance-and-covariance]] and
[[cor-cauchy-schwarz-for-random-variables]]: finite second moments give
integrable products and $|\mathbb E[UV]|\le\|U\|_2\|V\|_2$.

[F7] [[thm-martingale-central-limit-theorem]]: under AC, a square-integrable
martingale-difference array whose terminal predictable variance tends in
probability to $1$ and whose unconditional Lindeberg sums tend to zero has
terminal sum converging to $N(0,1)$.

[F8] [[thm-cramer-wold-device]]: under AC, convergence of every scalar
projection to the corresponding projection of a specified finite-dimensional
law implies vector convergence in distribution.

[F9] [[thm-vector-slutsky]] and
[[thm-vector-stochastic-order-calculus]]: a vector converging in distribution
is bounded in probability; adjoining a vector converging in probability to
a constant preserves joint convergence and permits continuous maps.

[F10] [[thm-kolmogorov-iid-l1-strong-law]]: sample averages of iid integrable
variables converge almost surely to their common mean.

[F11] [[def-multivariate-normal-law]] and [[def-chi-square-law]]: a
finite-dimensional normal law is determined by its scalar normal
projections, and $\chi_d^2$ is the law of the squared norm of
$N_d(0,I_d)$.

[F12] [[thm-dominated-convergence]] permits limits through expectations under
an integrable dominating function.

[F13] [[def-identically-distributed-and-iid-random-variables]]: iid means
mutual independence together with a common marginal law.

[F14] [[def-convergence-in-distribution-of-random-elements]] and
[[def-convergence-in-probability]] give the meanings of $\Rightarrow$ and
$\longrightarrow_{\mathbb P}$.

[F15] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real
symmetric positive-definite matrix has an orthonormal eigenbasis; taking
positive square roots of its eigenvalues gives its positive-definite square
root.



## Verification

1.1 Fix $a\in\mathbb R^d$ and $t\ge1$. For any $A\in\mathcal F_{t-1}$, the variables $a^TZ_t\,1_A$ and $(a^TZ_t)^2\,1_A$ are $\mathcal F_{t-1}$-measurable. Past-independence, [F5], and $\mathbb E[\epsilon_t]=0$ give $\mathbb E[a^TZ_t\epsilon_t1_A]=0$; past-independence, [F5], and $\mathbb E[\epsilon_t^2]=\sigma^2$ give $\mathbb E[(a^TZ_t)^2\epsilon_t^2 1_A] =\sigma^2\mathbb E[(a^TZ_t)^2 1_A]$. By [F4] these event-integral identities say $$\mathbb E[a^TZ_t\epsilon_t\mid\mathcal F_{t-1}]=0,\qquad \mathbb E[(a^TZ_t\epsilon_t)^2\mid\mathcal F_{t-1}] =\sigma^2(a^TZ_t)^2.$$ Factorization also gives $\mathbb E[(a^TZ_t\epsilon_t)^2]=\sigma^2a^T\Gamma a<\infty$, so each score increment is square-integrable. [A1, F4, F5, F6, given]

1.2 For each coordinate pair $(i,j)$, the sequence $V_k^{ij}:=Z_{k,i}Z_{k,j}$, $k\ge1$, is an integrable measurable function of the finite block $(X_{k-p},\ldots,X_{k-1})$. Cauchy–Schwarz gives $\mathbb E|V_k^{ij}|\le (\mathbb E Z_{k,i}^2)^{1/2}(\mathbb E Z_{k,j}^2)^{1/2}<\infty$. The one-sided process $W_m:=X_{m+1-p}$, $m\ge0$, has the same canonical path law as the one-sided restriction of $X$, by strict stationarity. Each lag block $(X_{k-p},\ldots,X_{k-1})$ is a fixed finite-block function of $W_{k-1},\ldots,W_{k+p-2}$. A shift-invariant event for this factor pulls back to a shift-invariant event for $W$, so the block process is ergodic. Applying [F2] componentwise gives $G_n\to\Gamma$ almost surely, since there are finitely many entries. [A1, F1, F2, F6, given]

2.1 By [F15], the positive eigenvalues of $\Gamma$ have positive product, so $\det\Gamma>0$. The determinant and cofactors are polynomials in the matrix entries, hence $\det G_n\to\det\Gamma$ almost surely. Therefore $\mathbb P(G_n\text{ is singular})\to0$. On the invertible event, the adjugate formula $G_n^{-1}=\operatorname{adj}(G_n)/\det G_n$ gives inverse convergence on the invertible event. Define $H_n=G_n^{-1}$ there and $H_n=\Gamma^{-1}$ otherwise; then $H_n\to\Gamma^{-1}$ in probability. The OLS fallback is measurable because $G_n$ and $\det G_n$ are measurable, and inversion is continuous on the invertible matrices. [F14, F15, step 1.2, given, algebra]

2.2 Fix $a\ne0$ and put $\lambda_a:=\sigma^2a^T\Gamma a>0$. For each $n$, define $$D_{n,k}:=\frac{a^TZ_k\epsilon_k}{\sqrt{n\lambda_a}} \quad(1\le k\le n),\qquad D_{n,k}:=0\quad(k>n),$$ with filtration $\mathcal F_k$. By step 1.1 the nonzero terms are square-integrable martingale differences; the padded terms preserve that property. [F3, step 1.1, given]

2.3 By step 1.1, the terminal predictable variance of this row is $$\Gamma_{n,\infty} =\frac1{na^T\Gamma a}\sum_{k=1}^n(a^TZ_k)^2.$$ The squared projection is integrable, stationary and ergodic as a measurable function of the lag block by step 1.2. Birkhoff [F2] makes this average converge almost surely to $\mathbb E[(a^TZ_t)^2]/(a^T\Gamma a)=1$. [A1, F2, F3, step 1.1, step 1.2, given]

2.4 Let $W_k:=a^TZ_k\epsilon_k$. The AR equation makes $W_k$ the same finite-block measurable function of the strictly stationary process $X$ at each time, so the $W_k$ are identically distributed; step 1.1 gives $\mathbb E[W_1^2]=\lambda_a<\infty$. For every $\delta>0$, the unconditional Lindeberg sum is $$\sum_{k=1}^n\mathbb E[D_{n,k}^2 1_{\{|D_{n,k}|>\delta\}}] =\frac1{\lambda_a}\mathbb E\!\left[ W_1^2 1_{\{|W_1|>\delta\sqrt{n\lambda_a}\}}\right]\longrightarrow0$$ by dominated convergence [F12], since the indicators decrease pointwise to zero and $W_1^2$ is integrable. [F6, F12, step 1.1, given]

3.1 Steps 2.2, 2.3, and 2.4 verify the square-integrable array, variance-clock, and unconditional Lindeberg hypotheses of [F7]. Thus $a^TS_n/\sqrt{\lambda_a}\Rightarrow N(0,1)$ for $S_n:=n^{-1/2}\sum_{k=1}^n Z_k\epsilon_k$. This holds for every nonzero $a$; $a=0$ is immediate. Applying [F8] to the specified normal law gives $S_n\Rightarrow N_d(0,\sigma^2\Gamma)$. [A1, F7, F8, F14, step 2.2, step 2.3, step 2.4]

4.1 On the event that $G_n$ is invertible, the normal equations give $$\sqrt n(\widehat\beta_n-\beta)=G_n^{-1}S_n=H_nS_n.$$ By step 2.1, $H_n\to_{\mathbb P}\Gamma^{-1}$; by step 3.1 the score converges in distribution. The bilinear map $(A,x)\mapsto Ax$ is continuous, so [F9] gives the limit $\Gamma^{-1}N_d(0,\sigma^2\Gamma)=N_d(0,\sigma^2\Gamma^{-1})$. The OLS fallback differs from $H_nS_n$ only on an event whose probability tends to zero by step 2.1, so bounded-continuous test expectations have the same limit. [F9, F14, step 2.1, step 3.1, given]

4.2 By [F9] and step 3.1, $S_n=O_{\mathbb P}(1)$; step 2.1 also gives $H_n=O_{\mathbb P}(1)$. Consequently $\widehat\beta_n-\beta=O_{\mathbb P}(n^{-1/2})$. On the invertible event, expanding the residual square and using the normal equations gives $$\widehat\sigma_n^2 =\frac1n\sum_{k=1}^n\epsilon_k^2 -\frac1n S_n^TG_n^{-1}S_n.$$ The second term is $O_{\mathbb P}(n^{-1})$. By [F10], the first term converges almost surely to $\sigma^2$, because $\epsilon_t^2$ are iid and integrable. The singular-event probability tends to zero by step 2.1, so $\widehat\sigma_n^2\to_{\mathbb P}\sigma^2$. [F9, F10, F13, step 2.1, step 3.1, given, algebra]

5.1 The event that $G_n$ is singular or $\widehat\sigma_n^2\le\sigma^2/2$ has probability tending to zero by steps 2.1 and 4.2. The map $h(x,A,s):=x^TAx/\max(s,\sigma^2/2)$ is continuous everywhere and agrees with the Wald formula on the complement of that event. By steps 1.2, 4.1, and 4.2, the joint limit of the vector, matrix, and scalar arguments of $h$ is $(Z,\Gamma,\sigma^2)$ with $Z\sim N_d(0,\sigma^2\Gamma^{-1})$. [F9] gives the limit $\sigma^{-2}Z^T\Gamma Z$. By [F15], let $\Gamma^{1/2}$ be the positive square root. The definition of the multivariate normal law in [F11] gives $U=\Gamma^{1/2}Z/\sigma\sim N_d(0,I_d)$, so [F11] identifies $\sigma^{-2}Z^T\Gamma Z=\|U\|^2\sim\chi_d^2$. The statistic's arbitrary zero convention on the vanishing-probability exceptional event does not change this limit. [A1, F9, F11, F14, F15, step 1.2, step 2.1, step 4.1, step 4.2, algebra] ∎