---
id: thm-csm-dk-ou-velocity-diffusion-response
kind: theorem
title: "Exact OU velocity response, diffusion and Gaussian scaling"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-tdmath-ornstein-uhlenbeck-equation
  - thm-tdmath-ornstein-uhlenbeck-model
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-tdmath-ornstein-uhlenbeck-equation: mathematical-premise
  thm-tdmath-ornstein-uhlenbeck-model: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. A. Pavliotis, Stochastic Processes and Applications"
      url: "https://www.ma.imperial.ac.uk/~pavl/PavliotisBook.pdf"
      locator: "Chapter 1 §1.2, Chapter 3 §3.7, and Chapter 4 §4.4: integrated covariance, linear SDE solution and OU stationary covariance."
    - title: "Udo Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/pdf/1205.4176"
      locator: "§2.6.1: underdamped Langevin dynamics with inertia and thermally normalized white noise."
---

## Statement

Assume the Axiom of Choice [[def-axiom-of-choice]] and the Brownian probability-space hypotheses in [[def-tdmath-ornstein-uhlenbeck-equation]]. Let $\gamma,m,\Theta,k_B>0$, $\sigma>0$, and $\sigma^2=2\gamma k_B\Theta/m$. Here these are real mathematical parameters; a separate physics postulate assigns their physical units and interpretation. Let $V_0\sim N(0,k_B\Theta/m)$ be independent of future Brownian increments. For any locally continuous deterministic input $u:[0,\infty)\to\mathbb R$, and every finite $t_f>0$, the equation restricted to $[0,t_f]$
$$V_t=V_0-\gamma\int_0^tV_s\,ds+\frac1m\int_0^tu(s)\,ds+\sigma B_t,\qquad 0\le t\le t_f,$$
has a unique continuous solution; these unique finite-horizon solutions agree on overlapping intervals and define one solution for all $t\ge0$. Its mean is
$$\mathbb E V_t=\frac1m\int_0^te^{-\gamma(t-s)}u(s)\,ds.$$
For $u=0$, $V$ is a stationary centered Gaussian process on $[0,\infty)$ with covariance
$$\mathbb E[V_sV_t]=v_\Theta e^{-\gamma|t-s|},\qquad v_\Theta:=k_B\Theta/m.$$
Define $Y_t:=\int_0^tV_s\,ds$ and $D:=v_\Theta/\gamma$. Then
$$\operatorname{Var}(Y_t)=2v_\Theta\left(\frac{t}{\gamma}-\frac{1-e^{-\gamma t}}{\gamma^2}\right),\qquad \lim_{t\to\infty}\frac{\operatorname{Var}(Y_t)}{2t}=D.$$
For every deterministic input, the centered displacement $Y_t-\mathbb E Y_t$ is Gaussian with the variance above; consequently $(Y_t-\mathbb E Y_t)/\sqrt t$ converges in distribution to $N(0,2D)$. For constant input $u(s)=u_0$, $\lim_{t\to\infty}\mathbb E[V_t]/u_0=\chi:=1/(m\gamma)$ when $u_0\ne0$, and $D=\chi k_B\Theta$.

## Facts & Assumptions
**Given:** The Axiom of Choice, the OU integral equation definition, the published OU solution theorem, positive scalar parameters, and an independent stationary Gaussian initial state.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F1] [[def-tdmath-ornstein-uhlenbeck-equation]]: an OU solution is a continuous adapted process satisfying the stated integral equation with Brownian increments independent of the present filtration.

[F2] [[thm-tdmath-ornstein-uhlenbeck-model]]: under Choice and its Brownian and initial-data hypotheses, the OU solution exists uniquely; a centered Gaussian initial law with variance $V=\sigma^2/(2\gamma)$ gives a stationary Gaussian process with covariance $Ve^{-\gamma|\tau|}$.

## Proof

**Given:** [A1], [F1]–[F2], $m,\gamma,\Theta,k_B>0$, $\sigma^2=2\gamma k_B\Theta/m$, and $V_0\sim N(0,k_B\Theta/m)$ independently of future Brownian increments.

1.1 Let $V^0$ be the unforced OU solution from [F2]. Define the deterministic function $g(t):=\frac1m\int_0^te^{-\gamma(t-s)}u(s)\,ds$. Differentiation under this finite integral gives $g(0)=0$ and $g'(t)=-\gamma g(t)+u(t)/m$. Hence $V_t:=V^0_t+g(t)$ is continuous and satisfies [F1] with the added input term. If two forced solutions have the same initial state and Brownian path, their difference $z$ satisfies $z(t)=-\gamma\int_0^tz(s)\,ds$; with $H(t)=\int_0^t|z(s)|\,ds$, one has $H'(t)\le\gamma H(t)$ and $H(0)=0$, whence $H=0$ and $z=0$. [A1, F1, F2, construct, algebra]

2.1 Since $V^0$ is centered and $g$ is deterministic, $\mathbb E V_t=g(t)$, giving the claimed mean. The parameter relation gives $\sigma^2/(2\gamma)=k_B\Theta/m=v_\Theta$, so [F2] gives stationarity, Gaussianity and the displayed covariance for the unforced solution. [F2, step 1.1, algebra]

3.1 For a uniform partition of $[0,t]$, the Riemann sums $S_n=(t/n)\sum_{j=0}^{n-1}V_{jt/n}$ converge almost surely to $Y_t$ because $V$ has continuous paths. Each $S_n$ is centered Gaussian under $u=0$. By the covariance in step 2.1, its variance is a Riemann sum converging to $\int_0^t\int_0^t v_\Theta e^{-\gamma|s-r|}\,ds\,dr=2v_\Theta\int_0^t(t-a)e^{-\gamma a}\,da=2v_\Theta\left(\frac{t}{\gamma}-\frac{1-e^{-\gamma t}}{\gamma^2}\right)$. Hence the Gaussian characteristic functions of $S_n$ converge to that of the centered normal with this variance. For each real $\xi$, almost-sure convergence and $|e^{i\xi S_n}|=1$ let bounded convergence give $\mathbb E e^{i\xi S_n}\to\mathbb E e^{i\xi Y_t}$. Therefore $Y_t$ has the stated Gaussian law and variance. Adding the deterministic $g$ to velocity changes only the mean of its integral, not this variance. [F2, step 2.1, algebra]

4.1 Dividing the variance formula in step 3.1 by $2t$ and letting $t\to\infty$ gives $D=v_\Theta/\gamma$. The centered displacement has Gaussian variance $2Dt-2v_\Theta(1-e^{-\gamma t})/\gamma^2$; after division by $t$ this tends to $2D$, proving the distributional limit. For constant $u_0$, step 1.1 gives $\mathbb E V_t=u_0(1-e^{-\gamma t})/(m\gamma)$, so $\chi=1/(m\gamma)$ and $D=(k_B\Theta/m)/\gamma=\chi k_B\Theta$. [step 3.1, step 1.1, algebra] ∎
