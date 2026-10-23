---
id: ex-fd-ar1-long-run-variance
kind: example
title: A Gaussian AR(1) sensor and its long-run variance
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-random-velocity-sensor-law
  - lem-fd-sensor-pairing-is-well-defined
  - def-axiom-of-choice
  - def-probability-measure
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-moments-variance-and-covariance
  - thm-geometric-series
  - def-weak-convergence-of-borel-probability-measures
  - thm-dominated-convergence
  - def-long-run-variance-for-stationary-markov-chain
dependency_roles:
  def-fd-random-velocity-sensor-law: mathematical-premise
  lem-fd-sensor-pairing-is-well-defined: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-probability-measure: mathematical-premise
  def-time-homogeneous-markov-chain-with-transition-kernel: mathematical-premise
  def-invariant-and-stationary-distribution-for-a-markov-kernel: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  thm-geometric-series: mathematical-premise
  def-weak-convergence-of-borel-probability-measures: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-long-run-variance-for-stationary-markov-chain: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: AC is stated as required by the Markov-chain definition and long-run-variance supplier; no stronger choice principle is used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes
      url: https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf
      locator: Sections 4.8.1–4.9, printed pp. 132–135; the AR(1) covariance and Gaussian limit are derived locally.
    - title: Galin L. Jones, On the Markov Chain Central Limit Theorem, arXiv:math/0409112v2
      url: https://arxiv.org/pdf/math/0409112
      locator: Section 4.1, Theorem 9 and Corollaries 1–5, PDF pp. 9–12; general MCMC CLT context only, with the AR(1) calculation derived locally.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Example

Let $(D,\mathcal D,\lambda)$, $d$, and $H$ be as in the Definition, with $\lambda(D)>0$. Let $e_1$ be the first standard basis vector in $\mathbb R^d$ and set $\psi:=e_1/\lambda(D)$. For each $x\in\mathbb R$, the spatially uniform field $V_x(y):=x e_1$ belongs to $H$ and has sensor reading $S_\psi(V_x)=x$.

Assume AC. Let $(X_n)_{n\ge0}$ be a centered (that is, $\mathbb E[X_n]=0$ for every $n\ge0$), strictly stationary, jointly Gaussian time-homogeneous Markov chain on $\mathbb R$ with invariant probability $\nu=\mathcal L(X_0)$, where $\mathcal L(X_0)(A):=\mathbb P(X_0\in A)$ for every Borel set $A\subseteq\mathbb R$, and recursion
$$X_{n+1}=\rho X_n+\epsilon_{n+1},\qquad |\rho|<1,\quad \eta>0.$$
Assume $(\epsilon_{n})_{n\ge1}$ is an independent sequence with common law $N(0,\eta^2)$, independent of $X_0$; then the transition kernel is $P(x,\cdot)=N(\rho x,\eta^2)$. For $m\in\mathbb R$ and $v\ge0$, $N(m,v)$ denotes the normal law with mean $m$ and variance $v$; for $v=0$ it is the point mass at $m$, and for $v>0$ it has density $(2\pi v)^{-1/2}\exp(-(x-m)^2/(2v))$. “Jointly Gaussian” means every finite real linear combination of chain coordinates has law $N(m,v)$ for some $m\in\mathbb R$ and $v\ge0$; “strictly stationary” means every finite-dimensional law is unchanged by nonnegative integer time shifts. The recursion is imposed for every $n\ge0$. The associated velocity-field sensor output is $Y_n:=S_\psi(V_{X_n})=X_n$. If $X_n$ has velocity units $\mathrm{m\,s^{-1}}$, then $\epsilon_n$ and $\eta$ have units $\mathrm{m\,s^{-1}}$, $\rho$ is dimensionless, and the long-run variance has units $\mathrm{m^2\,s^{-2}}$. This is a mathematical model example, not a reported fluid measurement.

For $k\ge0$, its covariance is
$$\gamma_k:=\operatorname{Cov}(Y_0,Y_k)=\frac{\eta^2\rho^k}{1-\rho^2}.$$
The covariance series is absolutely summable, and the centered sensor sum satisfies
$$\frac1{\sqrt n}\sum_{j=0}^{n-1}Y_j\Rightarrow N\!\left(0,\frac{\eta^2}{(1-\rho)^2}\right).$$
Consequently its covariance long-run variance is $\sigma_{\mathrm{LR}}^2=\eta^2/(1-\rho)^2$.

## Example references

[[def-fd-random-velocity-sensor-law]]

[[lem-fd-sensor-pairing-is-well-defined]]

[[def-axiom-of-choice]]

[[def-probability-measure]]

[[def-time-homogeneous-markov-chain-with-transition-kernel]]

[[def-invariant-and-stationary-distribution-for-a-markov-kernel]]

[[def-moments-variance-and-covariance]]

[[thm-geometric-series]]

[[def-weak-convergence-of-borel-probability-measures]]

[[thm-dominated-convergence]]

[[def-long-run-variance-for-stationary-markov-chain]]

[Geyer, Markov Chain Monte Carlo Lecture Notes, Sections 4.8.1–4.9](https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf)

[Jones, On the Markov Chain Central Limit Theorem, Section 4.1](https://arxiv.org/pdf/math/0409112)

## Facts & Assumptions

**Given:** A finite-volume spatial measure space, the normalized weight $\psi=e_1/\lambda(D)$, a centered strictly stationary jointly Gaussian time-homogeneous Markov chain with the stated transition recursion and independent Gaussian innovations, $|\rho|<1$, $\eta>0$, and AC.

[A1] AC is an assumption required by the time-homogeneous Markov-chain definition and the long-run-variance supplier ([[def-axiom-of-choice]]).

[A2] The centered, stationary jointly Gaussian AR(1) chain and its independent innovations are the stipulated mathematical probability model in the Example; centering means $\mathbb E[X_n]=0$ for every $n\ge0$.

[F1] The ideal sensor is $S_\psi(v)=\int_Dv\cdot\psi\,d\lambda$ on spatial $L^2$ velocity fields ([[def-fd-random-velocity-sensor-law]]).

[F2] The sensor pairing is well-defined on equivalence classes and its centering is finite ([[lem-fd-sensor-pairing-is-well-defined]]).

[F3] The Markov-chain transition kernel is the conditional law of the next state given the natural filtration ([[def-time-homogeneous-markov-chain-with-transition-kernel]]).

[F4] An invariant distribution $\nu$ satisfies $\nu P=\nu$ ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]]).

[F5] Variance and covariance are the centered second moment and centered product expectation ([[def-moments-variance-and-covariance]]).

[F6] For $|\rho|<1$, $\sum_{k=0}^\infty \rho^k=(1-\rho)^{-1}$ and $\sum_{k=0}^\infty|\rho|^k<\infty$ ([[thm-geometric-series]]).

[F7] Weak convergence is convergence of integrals against every bounded continuous real function ([[def-weak-convergence-of-borel-probability-measures]]).

[F8] Dominated convergence passes limits through integrals under one integrable majorant ([[thm-dominated-convergence]]).

[F9] After the CLT and absolute covariance summability are proved, the covariance series defines the long-run variance ([[def-long-run-variance-for-stationary-markov-chain]]).

## Proof

**Given:** The assumptions and notation of the Example.

1.1 For each scalar $x$, $S_\psi(V_x)=\int_D xe_1\cdot(e_1/\lambda(D))\,d\lambda=x\lambda(D)/\lambda(D)=x$. Thus the random-field sensor output $Y_n$ equals $X_n$. [F1, F2, given, algebra]

1.2 Independence of $\epsilon_{n+1}$ from the natural past and its stated law imply $\mathbb P(X_{n+1}\in A\mid\sigma(X_0,\ldots,X_n))=P(X_n,A)$ for every Borel $A$, with $P(x,\cdot)=N(\rho x,\eta^2)$. The stipulated stationary law $\nu$ is invariant in the sense of [F4]. [A1, A2, F3, F4, given]

2.1 Stationarity and the recursion give $\mathbb E[X_{n+1}^2]=\rho^2\mathbb E[X_n^2]+\eta^2$, because $\epsilon_{n+1}$ is centered and independent of $X_n$. Thus $\gamma_0=\mathbb E[X_n^2]=\eta^2/(1-\rho^2)$. Iterating the recursion gives $X_k=\rho^kX_0+\sum_{j=1}^k\rho^{k-j}\epsilon_j$; the innovation sum is centered and independent of $X_0$, so [F5] yields $\gamma_k=\rho^k\gamma_0$ for every $k\ge0$. [A2, F5, step 1.2, algebra]

3.1 Since $|\rho|<1$, [F6] gives $\sum_{k\ge1}|\gamma_k|=\gamma_0\sum_{k\ge1}|\rho|^k<\infty$ and
$$\gamma_0+2\sum_{k\ge1}\gamma_k=\frac{\eta^2}{1-\rho^2}\left(1+\frac{2\rho}{1-\rho}\right)=\frac{\eta^2}{(1-\rho)^2}.$$
The last equality uses $1-\rho^2=(1-\rho)(1+\rho)$ and $|\rho|<1$, so $1+\rho>0$. [F6, step 2.1, algebra]

3.2 The centered sum $S_n:=n^{-1/2}\sum_{j=0}^{n-1}Y_j$ is normally distributed because the finite vector $(X_0,\ldots,X_{n-1})$ is jointly Gaussian. Expanding its variance and counting the $n-k$ pairs at lag $k$ gives
$$v_n:=\operatorname{Var}(S_n)=\gamma_0+2\sum_{k=1}^{n-1}\left(1-\frac{k}{n}\right)\gamma_k.$$
[A2, F5, step 2.1, algebra]

4.1 On the counting-measure space $\mathbb N$, the summands $\mathbf 1_{\{k<n\}}(1-k/n)\gamma_k$ converge pointwise to $\gamma_k$ and are dominated in absolute value by the summable sequence $|\gamma_k|$. By [F8], $v_n\to\gamma_0+2\sum_{k\ge1}\gamma_k=\eta^2/(1-\rho)^2=:v>0$. [F6, F8, step 3.1, step 3.2, algebra]

5.1 Let $G$ have law $N(0,1)$. Since $S_n$ is centered normal with variance $v_n$, its law equals that of $\sqrt{v_n}G$. For every bounded continuous $h:\mathbb R\to\mathbb R$, $h(\sqrt{v_n}G)\to h(\sqrt vG)$ pointwise and is bounded by $\|h\|_\infty$; [F8] gives convergence of expectations. By [F7], $S_n\Rightarrow N(0,v)$. The chain is stationary Markov, the covariance series is absolutely summable by step 3.1, and the CLT has now been proved, so [F9] identifies $v$ as its covariance long-run variance. [F7, F8, F9, step 3.1, step 4.1, given] ∎

