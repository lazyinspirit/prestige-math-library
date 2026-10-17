---
id: lem-qsm-boundary-dynamics-cauchy
kind: lemma
title: Boundary Duhamel estimate for thermodynamic spin dynamics
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-qsm-bounded-finite-range-interaction
  - def-qsm-local-spin-algebras
  - lem-qsm-finite-range-commutator-path-bound
dependency_roles:
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-finite-range-commutator-path-bound: mathematical-premise
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, Theorem 4.2.1 and proof, pp. 101–102
      url: https://arxiv.org/pdf/1311.2717
    - title: Bruno Nachtergaele and Robert Sims, Lieb-Robinson Bounds in Quantum Many-Body Physics, Theorem 3.1 and proof, pp. 18–20
      url: https://arxiv.org/pdf/1004.2086
verification:
  precheck: pass
---

## Statement

Let $\Phi$ be an interaction of [[def-qsm-bounded-finite-range-interaction]], fix $\mu>0$, and let $X\subseteq\Lambda\subseteq\Lambda'$ be finite regions with $X\ne\varnothing$. For every $A\in\mathcal A_X$ and $t\in\mathbb R$,

$$\|\alpha_t^{\Lambda'}(A)-\alpha_t^\Lambda(A)\|\le\frac{2\kappa |X|\|A\||t|}{\hbar}e^{(2\kappa M e^{\mu R}/\hbar)|t|+\mu R}\sum_{y\notin\Lambda}e^{-\mu\operatorname{dist}_\infty(X,\{y\})}.$$

The infinite sum is finite. It tends to zero as $\Lambda$ exhausts $\mathbb Z^d$, so the estimate gives compact-time norm Cauchy convergence of free-boundary finite-volume dynamics on each local observable.

## Facts & Assumptions

**Given:** $d\ge1$, finite $q\ge1$, $\hbar>0$, a uniformly bounded finite-range interaction $\Phi$ with parameters $M,R,\kappa$, finite $X\subseteq\Lambda\subseteq\Lambda'$, $X\ne\varnothing$, $A\in\mathcal A_X$, and $\mu>0$.

[F1] [[def-qsm-bounded-finite-range-interaction]]: $\Phi(Z)$ is supported on $Z$, vanishes beyond range $R$ or size $M$, has per-site norm sum at most $\kappa$, and defines $H_\Lambda$ and $\alpha_t^\Lambda$.

[F2] [[lem-qsm-finite-range-commutator-path-bound]]: for local $A\in\mathcal A_X$ and $B\in\mathcal A_Z$, with $Z$ not necessarily contained in the finite volume, the identity-extended finite-volume commutator is bounded by $2\|A\|\|B\||X|e^{(2\kappa M e^{\mu R}/\hbar)|t|-\mu\operatorname{dist}_\infty(X,Z)}$.

[F3] [[def-qsm-local-spin-algebras]]: finite-region observables act in the finite matrix algebra $\mathcal A_\Lambda$, and operators on disjoint tensor factors commute.

## Proof

**Proof technique:** finite-volume Duhamel comparison followed by the commutator path bound.

**Given:** The finite nested regions, interaction, local observable, and suppliers in [F1]–[F3].

1.1 For $t=0$, both sides of the stated estimate vanish. For $t\ne0$, put $\sigma=\operatorname{sign}(t)\in\{-1,1\}$, and for $s$ between $0$ and $t$, set $G(s)=\alpha_s^{\Lambda'}(\alpha_{t-s}^{\Lambda}(A))$. Differentiating the finite matrix exponentials gives
$$G'(s)=\frac{i}{\hbar}\alpha_s^{\Lambda'}\!\left([H_{\Lambda'}-H_\Lambda,\alpha_{t-s}^{\Lambda}(A)]\right).$$
Indeed, the derivative of $\alpha_s^{\Lambda'}$ contributes $(i/\hbar)[H_{\Lambda'},\cdot]$, while differentiating $\alpha_{t-s}^{\Lambda}$ contributes $-(i/\hbar)[H_\Lambda,\cdot]$; the outer map $\alpha_s^{\Lambda'}$ is unitary conjugation and hence isometric. Integrating from $0$ to $t$, reversing the orientation for $t<0$, and using $u=|t-s|$ gives intermediate evolution time $t-s=\sigma u$. Expanding $H_{\Lambda'}-H_\Lambda$ therefore yields
$$\|\alpha_t^{\Lambda'}(A)-\alpha_t^\Lambda(A)\|\le\frac1{\hbar}\int_0^{|t|}\sum_{\substack{Z\subseteq\Lambda'\\Z\not\subseteq\Lambda}}\|[\Phi(Z),\alpha_{\sigma u}^\Lambda(A)]\|\,du.$$
Terms with $Z\cap\Lambda=\varnothing$ commute with $\alpha_{\sigma u}^\Lambda(A)\in\mathcal A_\Lambda$ and contribute zero; only interaction sets crossing the boundary of $\Lambda$ remain. [given, F1, F3, algebra]

2.1 For each crossing $Z$, apply [F2] to $A$ and $\Phi(Z)$ at the signed time $\sigma u$. Its bound depends on $|\sigma u|=u$, so the same positive integrand estimate holds for either sign of $t$. For any $y\in Z\setminus\Lambda$, choose $z\in Z$ minimizing the distance from $X$ to $Z$. Since $\operatorname{diam}_\infty Z\le R$, the triangle inequality gives $\operatorname{dist}_\infty(X,\{y\})\le\operatorname{dist}_\infty(X,Z)+R$, so
$$e^{-\mu\operatorname{dist}_\infty(X,Z)}\le e^{\mu R}e^{-\mu\operatorname{dist}_\infty(X,\{y\})}.$$
Summing over every exterior $y$ overcounts each crossing interaction and therefore gives an upper bound. By the definition of $\kappa$,
$$\sum_{\substack{Z\subseteq\Lambda'\\Z\not\subseteq\Lambda\\Z\cap\Lambda\ne\varnothing}}\|\Phi(Z)\|e^{-\mu\operatorname{dist}_\infty(X,Z)}\le\kappa e^{\mu R}\sum_{y\notin\Lambda}e^{-\mu\operatorname{dist}_\infty(X,\{y\})}.$$
The displayed inequality is independent of $\Lambda'$; integrating the time factor in [F2] over an interval of length $|t|$ proves the claimed estimate. [F1, F2, step 1.1, algebra]

3.1 For each $r\ge1$, the max-metric shell around one lattice site has $(2r+1)^d-(2r-1)^d$ sites. A finite union bound over $x\in X$ shows that $\sum_{y\in\mathbb Z^d}e^{-\mu\operatorname{dist}_\infty(X,\{y\})}<\infty$, since a polynomial shell count is summable against $e^{-\mu r}$. Given $\varepsilon>0$, choose a finite set of sites whose omitted tail is below $\varepsilon$; every sufficiently large exhausting $\Lambda$ contains that finite set. Thus the exterior tail tends to zero, uniformly for $|t|\le T$ after replacing $|t|$ by $T$ in the prefactor. [given, F1, step 2.1, algebra] ∎
