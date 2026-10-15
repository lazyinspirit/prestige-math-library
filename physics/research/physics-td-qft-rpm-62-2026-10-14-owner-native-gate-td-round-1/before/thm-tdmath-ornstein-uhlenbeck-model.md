---
id: thm-tdmath-ornstein-uhlenbeck-model
kind: theorem
title: "Ornstein–Uhlenbeck equation, transition law, and fluctuations"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-tdmath-ornstein-uhlenbeck-equation","def-brownian-motion","def-complex-exponential","def-elementary-predictable-brownian-integrand","def-ito-integral-for-square-integrable-predictable-processes","thm-complex-exponential-addition-and-real-extension","thm-derivative-of-exponential","thm-existence-of-continuous-brownian-motion","thm-ito-integral-process-has-a-continuous-martingale-version","thm-ito-isometry-and-linearity-in-predictable-l2","cor-deterministic-ito-integrals-are-gaussian","thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces","thm-gaussian-integral"]
justified_by: []
dependency_roles: {"def-tdmath-ornstein-uhlenbeck-equation":"mathematical-premise","def-brownian-motion":"mathematical-premise","def-complex-exponential":"mathematical-premise","def-elementary-predictable-brownian-integrand":"mathematical-premise","def-ito-integral-for-square-integrable-predictable-processes":"mathematical-premise","thm-complex-exponential-addition-and-real-extension":"mathematical-premise","thm-derivative-of-exponential":"mathematical-premise","thm-existence-of-continuous-brownian-motion":"mathematical-premise","thm-ito-integral-process-has-a-continuous-martingale-version":"mathematical-premise","thm-ito-isometry-and-linearity-in-predictable-l2":"mathematical-premise","cor-deterministic-ito-integrals-are-gaussian":"mathematical-premise","thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces":"mathematical-premise","thm-gaussian-integral":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. A. Pavliotis, Stochastic Processes and Applications"
      url: https://www.ma.imperial.ac.uk/~pavl/PavliotisBook.pdf
      locator: "Complete 155-page author-hosted book retrieved and read; §3.7 explicit Ornstein–Uhlenbeck solution; §§4.1–4.2 transition density and Fokker–Planck equation."
    - title: "David Tong, Kinetic Theory, Part 3"
      url: https://www.damtp.cam.ac.uk/user/tong/kintheory/three.pdf
      locator: "Complete 26-page lecture-note part retrieved and read; §§3.1.2–3.2.3, pp.54–70, Langevin dynamics, velocity diffusion, and Fokker–Planck equation."
---

## Statement

Assume the filtered probability space, Brownian increment hypothesis, and initial data of [[def-tdmath-ornstein-uhlenbeck-equation]], including $\mathbb E X_0^2<\infty$ and future increments independent of $\mathcal F_0$. For $\gamma,\sigma>0$, on every finite time interval the process
$$X_t=e^{-\gamma t}X_0+\sigma e^{-\gamma t}\int_0^t e^{\gamma s}\,dB_s$$
has a continuous adapted version, solves the stated Ornstein–Uhlenbeck integral equation, and is the unique continuous solution driven by the same $(X_0,B)$. Put $V=\sigma^2/(2\gamma)$. For $0\le s<t$, its transition law conditional on $\mathcal F_s$ is normal with mean $e^{-\gamma(t-s)}X_s$ and variance $V(1-e^{-2\gamma(t-s)})$. Consequently
$$\mathbb E X_t=e^{-\gamma t}\mathbb E X_0,\qquad\operatorname{Var}(X_t)=e^{-2\gamma t}\operatorname{Var}(X_0)+V(1-e^{-2\gamma t}).$$
From any such initial law, $X_t$ converges in distribution to $N(0,V)$. If $X_0\sim N(0,V)$ and is independent of future Brownian increments, the process is stationary Gaussian with covariance $C(\tau)=Ve^{-\gamma|\tau|}$, and its transition kernel satisfies detailed balance with the $N(0,V)$ density. Its transition density solves the Fokker–Planck equation for positive time. Under the convention $S(\omega)=(2\pi)^{-1}\int_{\mathbb R}C(\tau)e^{i\omega\tau}\,d\tau$, the stationary spectrum and time-average bound are
$$S(\omega)=\frac{V\gamma}{\pi(\gamma^2+\omega^2)},\qquad\operatorname{Var}\!\left(\frac1T\int_0^T X_t\,dt\right)\le\frac{2V}{\gamma T}.$$
All these statements concern the specified linear stochastic model. An Einstein relation between $\sigma$ and a physical bath temperature would be an additional physical postulate.

## Facts & Assumptions

**Given:** The exact Brownian filtration hypothesis and the OU equation definition.

[A1] $B$ is adapted and each increment $B_t-B_s$ is independent of $\mathcal F_s$ with law $N(0,t-s)$; $X_0$ is $\mathcal F_0$-measurable, has finite second moment, and is independent of future Brownian increments.

[A2] $\gamma>0$, $\sigma>0$, and time is restricted to an arbitrary finite interval $[0,T]$.

[F1] [[def-tdmath-ornstein-uhlenbeck-equation]]: a solution is a continuous adapted process satisfying $X_t=X_0-\gamma\int_0^tX_sds+\sigma B_t$ almost surely for every $t$.

[F2] [[def-brownian-motion]], [[thm-existence-of-continuous-brownian-motion]], and [[def-elementary-predictable-brownian-integrand]]: Brownian paths have a common continuous version and deterministic continuous square-integrable integrands satisfy the standing predictable Brownian hypotheses on finite intervals.

[F3] [[def-ito-integral-for-square-integrable-predictable-processes]] and [[thm-ito-isometry-and-linearity-in-predictable-l2]]: the stochastic integral is defined for the deterministic square-integrable integrand and isometry computes its second moments.

[F4] [[thm-ito-integral-process-has-a-continuous-martingale-version]] and [[cor-deterministic-ito-integrals-are-gaussian]]: the integral process has a continuous version, and deterministic-integrand integrals are centered Gaussian with variance equal to the squared-integrand integral.

[F5] [[thm-derivative-of-exponential]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: the ordinary exponential derivative and finite continuous-integral Fubini identity hold.

[F6] [[def-complex-exponential]] and [[thm-complex-exponential-addition-and-real-extension]]: complex exponential phases are continuous, have unit modulus on the imaginary axis, and integrate by their elementary antiderivative.

[F7] [[thm-gaussian-integral]]: the centered Gaussian density with variance $v>0$ is normalized after the linear change of variable from the unit Gaussian.

## Proof



**Given:** [A1]–[A2] and [F1]–[F7].

1.1 On $[0,T]$, $g(s)=e^{\gamma s}$ is deterministic, continuous, and square-integrable. Thus $W_t=\int_0^t g(s)\,dB_s$ is defined by [F3], and [F4] supplies a continuous version. For a partition $0=t_0<\cdots<t_n=t$, the deterministic step sums $\sum_k g(t_k)(B_{t_{k+1}}-B_{t_k})$ converge in $L^2$ to $W_t$ by the Itô isometry and uniform approximation of $g$. Discrete summation by parts rewrites them as $g(t)B_t-g(0)B_0-\sum_{k=0}^{n-1}B_{t_{k+1}}(g(t_{k+1})-g(t_k))$ up to an endpoint term tending to zero. Brownian path continuity makes the last sums converge pathwise to $\int_0^t g'(s)B_sds$. The $L^2$ limit and this almost-sure limit agree in probability, so $$W_t=e^{\gamma t}B_t-\gamma\int_0^t e^{\gamma s}B_s\,ds$$ almost surely for each fixed $t$. Both sides have continuous versions; equality on rational $t$ holds on one probability-one event and therefore extends to all $t\in[0,T]$. [A1, A2, F2, F3, F4, F5]

1.2 Split the stochastic integral at $s$ and use its linearity: $$X_t=e^{-\gamma(t-s)}X_s+\sigma\int_s^t e^{-\gamma(t-u)}\,dB_u.$$ Step-function approximants to the last deterministic-integrand integral depend only on increments after $s$, so [A1] makes them independent of $\mathcal F_s$. Their $L^2$ limit remains independent of $\mathcal F_s$: for bounded $\mathcal F_s$-measurable $Y$ and bounded continuous $\varphi$, convergence in probability plus boundedness gives convergence of $\mathbb E[Y\varphi(\cdot)]$, preserving the factorization. By [F4] the limit is centered Gaussian; [F3] computes its variance as $\sigma^2\int_s^t e^{-2\gamma(t-u)}du=V(1-e^{-2\gamma(t-s)})$. This proves the conditional transition law and the Markov property. [A1, A2, F3, F4]

2.1 Set $X_t=e^{-\gamma t}X_0+\sigma e^{-\gamma t}W_t$. By [F4] it is continuous and adapted. Step 1.1 rewrites it as $$X_t=e^{-\gamma t}X_0+\sigma B_t-\sigma\gamma\int_0^t e^{-\gamma(t-s)}B_s\,ds.$$ Integrating this continuous expression in $t$, ordinary Fubini [F5] gives $$\int_0^tX_sds=X_0(1-e^{-\gamma t})/\gamma+\sigma\int_0^tB_sds-\sigma\int_0^tB_u(1-e^{-\gamma(t-u)})\,du.$$ Substitution into $X_0-\gamma\int_0^tX_sds+\sigma B_t$ cancels the two $\int B_sds$ terms and leaves exactly the displayed expression for $X_t$. Thus [F1] holds. [A1, A2, F1, F4, F5, step 1.1]

2.2 Taking expectations in the explicit solution, the stochastic integral has mean zero by [F4], giving $\mathbb E X_t=e^{-\gamma t}\mathbb E X_0$. The integral is independent of $X_0$ and centered, so its variance adds to $e^{-2\gamma t}\operatorname{Var}(X_0)$; [F3] evaluates the added variance as $V(1-e^{-2\gamma t})$. The independent Gaussian term tends in law to $N(0,V)$ because its variance tends to $V$ and $e^{-\gamma t}X_0\to0$ in $L^2$; for any bounded continuous test, restrict to a compact interval, use uniform continuity and the second-moment tail bound, then take the interval radius to infinity. [A1, A2, F3, F4, step 1.2]

2.3 Write $r=e^{-\gamma t}$ and $\pi(x)=(2\pi V)^{-1/2}e^{-x^2/(2V)}$. The transition density is $$K_t(x,y)=[2\pi V(1-r^2)]^{-1/2}\exp\!\left(-\frac{(y-rx)^2}{2V(1-r^2)}\right).$$ Multiplying by $\pi(x)$ gives a symmetric prefactor and exponent proportional to $-[x^2+y^2-2rxy]/[2V(1-r^2)]$, unchanged when $x$ and $y$ are exchanged. Hence $\pi(x)K_t(x,y)=\pi(y)K_t(y,x)$, the detailed-balance identity. [A1, A2, F6, F7, step 1.2]

2.4 For $t>0$ let $\mu=e^{-\gamma t}x$, $v=V(1-e^{-2\gamma t})$, and $p(t,x,y)$ be the normal density with mean $\mu$ and variance $v$. Direct differentiation gives $$\partial_t p=p\left(\frac{\mu'(y-\mu)}v+\frac{v'}2\left[\frac{(y-\mu)^2}{v^2}-\frac1v\right]\right),\quad \mu'=-\gamma\mu,\quad v'=\sigma^2-2\gamma v.$$ Also direct $y$-differentiation gives $\gamma\partial_y(yp)+(\sigma^2/2)\partial_{yy}p$ equal to the same expression after writing $y=\mu+(y-\mu)$. Thus $\partial_t p=\gamma\partial_y(yp)+(\sigma^2/2)\partial_{yy}p$. The Gaussian formula has total integral one and converges to point mass at $x$ as $t\downarrow0$; this is the stated positive-time Fokker–Planck solution. [A2, F5, F7, step 1.2]

3.1 If $X$ and $\widetilde X$ are two continuous solutions with the same data, their difference $z$ satisfies $z(t)=-\gamma\int_0^tz(s)ds$. Let $D(t)=\int_0^t|z(s)|ds$. Then $D(0)=0$, $D\ge0$, and $D'(t)=|z(t)|\le\gamma D(t)$ by the equation. The derivative of $e^{-\gamma t}D(t)$ is nonpositive, so this nonnegative function is at most its initial value zero. Hence $D=0$ and continuity gives $z=0$ at every time. [A2, F1, step 2.1, algebra]

3.2 If $X_0$ is centered normal with variance $V$, step 1.2 gives centered Gaussian finite-dimensional laws, since each stochastic integral over a disjoint increment interval is an independent Gaussian and $X_0$ is independent of future increments. Its one-time variance is $V$. For $s\le t$, the split formula in 2.1 and independence of the later increment yield $\mathbb E[X_sX_t]=e^{-\gamma(t-s)}\mathbb E[X_s^2]=Ve^{-\gamma(t-s)}$. Thus covariance depends only on $|t-s|$. A centered Gaussian finite-dimensional law is determined by its covariance matrix; shifting every time by the same amount preserves that matrix and proves stationarity. [A1, A2, F4, step 1.2, step 2.2]

4.1 The stationary covariance is integrable. By evenness, $$S(\omega)=\frac V\pi\operatorname{Re}\int_0^\infty e^{-(\gamma-i\omega)t}dt =\frac V\pi\operatorname{Re}\frac1{\gamma-i\omega} =\frac{V\gamma}{\pi(\gamma^2+\omega^2)}.$$ The integral converges absolutely because $\gamma>0$. [A2, F6, step 3.2]

5.1 For the stationary time average, Fubini applies since $C$ is bounded on the finite square. Changing variables in the two triangular halves gives $$\operatorname{Var}\!\left(T^{-1}\int_0^TX_tdt\right) =\frac{2V}{T^2}\int_0^T(T-s)e^{-\gamma s}ds \le\frac{2V}{\gamma T}.$$ The bound tends to zero, so these averages converge to zero in $L^2$ and in probability. It asserts no almost-sure theorem for arbitrary observables. [A1, A2, F5, step 3.2] ∎
