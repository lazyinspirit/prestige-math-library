---
id: lem-adaptive-em-predictable-grid-second-moment
kind: lemma
title: Uniform second moment for Euler–Maruyama on predictable grids
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-adaptive-euler-maruyama-on-predictable-grid
  - alg-euler-maruyama
  - def-predictable-stopping-time-grid
  - lem-stopping-time-ito-step-interval-sum
  - thm-stopping-an-ito-integral
  - thm-doob-maximal-bound-for-the-ito-integral
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-gronwall-integral-inequality
  - thm-fatou-lemma
  - thm-dominated-convergence
  - def-continuous-time-stopping-time
  - lem-rat-embeds-dense
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §2"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, §8.2"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
---

## Statement

Work on a filtered probability space satisfying the usual conditions for the
It\^o integral. Assume the coefficient and Brownian hypotheses of
[[alg-euler-maruyama]] on $[0,T]$: finite state/noise dimensions, a square
integrable $\mathcal F_0$-measurable initial value, globally Lipschitz state
dependence, linear growth, and the stated half-Hölder time modulus. Let a
finite predictable grid as in
[[def-predictable-stopping-time-grid]] have $N<\infty$ almost surely and
maximum step at most $h_{\max}\le T$. Form the complete continuous Euler
interpolation by applying the predictable-grid updates in
[[alg-adaptive-euler-maruyama-on-predictable-grid]] on every interval. A
finite-budget execution returns this interpolation as complete when its
budget $B$ satisfies $N\le B$. Then a finite constant
$C=C(T,K,m,\mathbb E|X_0|^2)$ satisfies
$$\mathbb E\sup_{0\le t\le T}|Y_t|^2\le C.$$
The bound is uniform over the controller and the number and placement of its
predictable steps; no deterministic bound on $N$ is needed for this moment
estimate.

## Facts & Assumptions

**Given:** AC; the usual filtered-space hypotheses for the It\^o integral; the global Lipschitz, linear-growth and time-modulus hypotheses of [[alg-euler-maruyama]]; $X_0\in L^2$; a finite predictable grid with $N<\infty$ almost surely and maximum step at most $h_{\max}\le T$; and its complete continuous Euler interpolation $Y$.

[F1] The update on each interval is $Y_t=Y_n+b(\tau_n,Y_n)(t-\tau_n)+\sigma(\tau_n,Y_n)(W_t-W_{\tau_n})$, with coefficients measurable at $\mathcal F_{\tau_n}$. [[alg-adaptive-euler-maruyama-on-predictable-grid]] [[def-predictable-stopping-time-grid]]

[F2] Stopping a locally square-integrable predictable It\^o integral at a stopping time is the same as integrating the predictable integrand multiplied by $1_{[0,\rho]}$. [[thm-stopping-an-ito-integral]]

[F3] A square-integrable coefficient measurable at $\mathcal F_\tau$ on a stopping-time interval $(\tau,\sigma]$ gives a predictable step whose It\^o integral is the stopped Brownian increment times that coefficient. [[lem-stopping-time-ito-step-interval-sum]]

[F4] For a scalar Brownian It\^o integral $M_t=\int_0^tH_s\,dW_s$, $\mathbb E\sup_{t\le T}|M_t|^2\le4\mathbb E\int_0^TH_s^2ds$. [[thm-doob-maximal-bound-for-the-ito-integral]]

[F5] The coefficient growth condition gives $|b(t,x)|^2+\|\sigma(t,x)\|_F^2\le K^2(1+|x|^2)$. [[alg-euler-maruyama]]

[F6] If a continuous nonnegative $u$ satisfies $u(t)\le A+C\int_0^t u(s)ds$, then $u(t)\le Ae^{Ct}$. [[thm-gronwall-integral-inequality]]

[F7] If $Z_k\to Z$ almost surely and $Z_k\ge0$, then $\mathbb EZ\le\liminf_k\mathbb EZ_k$. [[thm-fatou-lemma]]

[F8] For a continuous adapted path, the running supremum is measurable from its values on a dense countable time set; this makes the first hitting time of a closed level a stopping time. [[def-continuous-time-stopping-time]] [[lem-rat-embeds-dense]]

[F9] If measurable random variables converge almost surely and are dominated in absolute value by an integrable random variable, their expectations converge. [[thm-dominated-convergence]]

[A1] AC is inherited through the Brownian and It\^o-integral interfaces [F1]–[F4]. The stopping and localization argument uses no further choice. [[def-axiom-of-choice]]

## Proof

1.1 For $R>0$ define $\rho_R=\inf\{t\le T:|Y_t|\ge R\}\wedge T$, taking $\rho_R=T$ if the set is empty. For an integer $k\ge1$, set $\theta_{R,k}=\rho_R\wedge\tau_k$ and $Y^{R,k}_t=Y_{t\wedge\theta_{R,k}}$. Continuity, adaptedness and [F8] make $\rho_R$ a stopping time, so $\theta_{R,k}$ is a stopping time. For the first $k$ intervals, multiply each left-endpoint coefficient by $1_{\{|Y_n|\le |X_0|\vee R\}}$. These factors are measurable at $\mathcal F_{\tau_n}$, the truncated coefficients are in $L^2$ by [F5], and they agree with the original coefficients before $\theta_{R,k}$, except at time endpoints which do not affect the integrals. Thus [F3] gives their finite-step integral representation, to which [F2] applies. Before $\theta_{R,k}$, every active left-endpoint value is bounded by $|X_0|\vee R$; [F5] and $X_0\in L^2$ therefore give finite expected coefficient energy. Applying [F2] at $\theta_{R,k}$ to the finite-step integral representation yields $Y^{R,k}_t=X_0+\int_0^t1_{[0,\theta_{R,k}]}(s)\bar b_s\,ds+\int_0^t1_{[0,\theta_{R,k}]}(s)\bar\sigma_s\,dW_s$, where $\bar Y_s=Y_n$, $\bar b_s=b(\tau_n,Y_n)$ and $\bar\sigma_s=\sigma(\tau_n,Y_n)$ on active intervals, with arbitrary values at $s=0$. Also $\sup_{u\le t}|Y^{R,k}_u|\le |X_0|\vee R$, so $U_{R,k}(t):=\mathbb E\sup_{u\le t}|Y^{R,k}_u|^2$ is finite and continuous by [F9], since the path suprema converge pointwise with $t$ and are bounded by the integrable variable $(|X_0|\vee R)^2$. [F1, F2, F3, F5, F8, F9, given]

2.1 Write each coordinate of the stopped martingale as $M^i=\sum_{j=1}^m M^{ij}$, with $M^{ij}_t=\int_0^t1_{[0,\theta_{R,k}]}(s)\bar\sigma^{ij}_s\,dW^j_s$. For every $i,j$, [F4] applies to the scalar Brownian coordinate $W^j$. The inequalities $\sup_t|\sum_jM^{ij}_t|^2\le m\sum_j\sup_t|M^{ij}_t|^2$ and $|a+b+c|^2\le3(|a|^2+|b|^2+|c|^2)$ give the martingale bound $4m\mathbb E\int_0^t1_{[0,\theta_{R,k}]}\|\bar\sigma_s\|_F^2ds$. Cauchy–Schwarz bounds the squared drift supremum by $T\int_0^t1_{[0,\theta_{R,k}]}|\bar b_s|^2ds$. On an active interval with $s\le\theta_{R,k}$, its left endpoint satisfies $\tau_n<s\le\theta_{R,k}$, so $\bar Y_s=Y_n=Y^{R,k}_{\tau_n}$ and $|\bar Y_s|^2\le\sup_{u\le s}|Y^{R,k}_u|^2$. Outside this range the stopped-integral indicator is zero; using [F5] in the representation of step 1.1 yields $U_{R,k}(t)\le3\mathbb E|X_0|^2+(3T+12m)K^2\int_0^t(1+U_{R,k}(s))ds$. [F4, F5, step 1.1, algebra]

3.1 Apply [F6] to $1+U_{R,k}$ with $A=1+3\mathbb E|X_0|^2$ and $C=(3T+12m)K^2$. Then $U_{R,k}(T)\le(1+3\mathbb E|X_0|^2)e^{(3T+12m)K^2T}-1$, uniformly in $R,k$. [F6, step 2.1, algebra]

4.1 Since $N<\infty$ almost surely, for almost every path $\tau_k=T$ for all sufficiently large $k$. Thus $Y^{R,k}$ eventually equals $Y^{\rho_R}$ uniformly on $[0,T]$; [F7] passes the bound of step 3.1 to $\mathbb E\sup_{t\le T}|Y_{t\wedge\rho_R}|^2$. Each continuous path $Y$ is bounded on $[0,T]$, so $Y^{\rho_R}\to Y$ uniformly almost surely as $R\to\infty$, and [F7] gives the stated bound. The cases $X_0=0$ or $K=0$ are covered by the same inequality, and no lower mesh bound or deterministic bound on $N$ is used. AC is inherited only through [A1]. [A1, F7, step 3.1, given] ∎
