---
id: lem-qsm-local-generator-domain
kind: lemma
title: Local observables lie in the closed generator domain
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-qsm-bounded-finite-range-interaction
  - def-countable-choice
  - def-qsm-local-spin-algebras
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - lem-qsm-quasilocal-completion
  - lem-qsm-boundary-dynamics-cauchy
  - thm-qsm-finite-range-spin-dynamics
dependency_roles:
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-boundary-dynamics-cauchy: mathematical-premise
  thm-qsm-finite-range-spin-dynamics: mathematical-premise
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.3, pp. 64–71
      url: https://arxiv.org/pdf/1311.2717
    - title: Bruno Nachtergaele and Robert Sims, Lieb-Robinson Bounds in Quantum Many-Body Physics, Theorem 3.1 and proof, pp. 18–20
      url: https://arxiv.org/pdf/1004.2086
verification:
  precheck: pass
---

## Statement

Under the hypotheses of [[thm-qsm-finite-range-spin-dynamics]], including its Countable Choice and finite-matrix C*-identity conditions, let $\alpha_t$ be the strongly continuous automorphism group. Define its generator by

$$D(\delta)=\left\{A\in\mathcal A:\lim_{t\to0}\frac{\alpha_t(A)-A}{t}\text{ exists in norm}\right\},\qquad\delta(A)=\lim_{t\to0}\frac{\alpha_t(A)-A}{t}.$$

Then $\delta$ is closed. For every local $A\in\mathcal A_X$,

$$A\in D(\delta),\qquad\delta(A)=\frac{i}{\hbar}\sum_{Z:\,Z\cap X\ne\varnothing}[\Phi(Z),A].$$

The sum is finite by the finite-range and finite-size hypotheses; its value is independent of the chosen localization region $X$.

## Facts & Assumptions

**Given:** The finite-range interaction $\Phi$, its local algebras, and the strongly continuous group $\alpha_t$ of [[thm-qsm-finite-range-spin-dynamics]], under that theorem's Countable Choice and finite-matrix C*-identity assumptions.

[A1] [[thm-qsm-finite-range-spin-dynamics]] assumes the exact finite-matrix identity $\|T^*T\|=\|T\|^2$ stated by [[lem-qsm-finite-matrix-cstar-and-state-duality]]. That earlier supplier is authored and placed on its planned A page, included in the batch-36 manifest, and has a current owner authoring-readiness record. Its proved finite identity supplies the same premise here; independent review and native gate acceptance remain separate.

[A2] Countable Choice is carried from [[def-countable-choice]] and [[thm-qsm-finite-range-spin-dynamics]], as required by [[lem-qsm-quasilocal-completion]].

[F1] [[thm-qsm-finite-range-spin-dynamics]]: $\alpha_t$ is a one-parameter group of complex-linear unital isometric $*$-automorphisms obtained as the norm limit of the finite-volume dynamics; for each fixed $B\in\mathcal A$, $t\mapsto\alpha_t(B)$ is norm-continuous.

[F2] [[lem-qsm-boundary-dynamics-cauchy]]: finite-volume dynamics converge uniformly on compact time intervals on each local observable.

[F3] [[def-qsm-bounded-finite-range-interaction]]: each nonzero interaction term has support diameter at most $R$ and the per-site norm sum is at most $\kappa$.

[F4] [[def-qsm-local-spin-algebras]]: $\Gamma=\mathbb Z^d$ with the max-coordinate metric, and every finite region has a finite-dimensional local matrix algebra.

## Proof

**Proof technique:** stabilize the local finite-volume commutator, pass its integral identity to the limit, and prove graph closedness.

**Given:** [A1], [A2], [F1]–[F4], the generator definition in the Statement, and a local $A\in\mathcal A_X$.

1.1 If $X=\varnothing$, [F4] identifies $A=cI$ for some $c\in\mathbb C$. By complex linearity and unitality in [F1], $\alpha_t(A)=A$, so $A\in D(\delta)$ and $\delta(A)=0$. The displayed commutator sum is empty for $X=\varnothing$ and is zero for every other localization of this scalar, since $[\Phi(Z),cI]=0$. For the remaining local-observable argument take $X\ne\varnothing$. Every nonzero term $\Phi(Z)$ meeting $X$ has $Z\subseteq X^{+R}:=\{y\in\mathbb Z^d:\operatorname{dist}_\infty(X,\{y\})\le R\}$, a finite union of finite lattice balls. There are finitely many subsets of $X^{+R}$, so
$$D_0(A):=\frac{i}{\hbar}\sum_{Z:\,Z\cap X\ne\varnothing}[\Phi(Z),A]$$
is a finite local sum. If $X\subseteq X'$, each term present in the sum for $X'$ but not for $X$ has support disjoint from $X$ and therefore commutes with $A\in\mathcal A_X$; hence both sums agree. For any two localization regions, compare each with their union to obtain the same conclusion. Thus $D_0(A)$ is independent of the chosen region. For every finite $\Lambda$ containing $X^{+R}$, finite-volume differentiation gives $\delta_\Lambda(A)=\frac{i}{\hbar}[H_\Lambda,A]=D_0(A)$ and
$$\alpha_t^\Lambda(A)-A=\int_0^t\alpha_s^\Lambda(D_0(A))\,ds.$$
Here the finite-dimensional integral is the coordinatewise Riemann integral; differentiating the finite exponential gives the integrand. [given, A1, A2, F1, F3, F4, algebra]

2.1 By [F2], $\alpha_s^\Lambda(A)$ and $\alpha_s^\Lambda(D_0(A))$ converge in norm uniformly on compact time intervals as $\Lambda$ exhausts the lattice. A continuous Banach-valued function has a Riemann integral because uniform continuity makes its Riemann sums Cauchy in the complete algebra; uniform convergence of the finite-volume integrands lets their integrals pass to the limit. This gives
$$\alpha_t(A)-A=\int_0^t\alpha_s(D_0(A))\,ds.$$
By [F1], $s\mapsto\alpha_s(D_0(A))$ is norm-continuous at $0$; the difference between its average over $[0,t]$ and its value at $0$ is at most $\sup_{|s|\le|t|}\|\alpha_s(D_0(A))-D_0(A)\|$, which tends to zero. Therefore $A\in D(\delta)$ and $\delta(A)=D_0(A)$. [A1, A2, F1, F2, step 1.1, algebra]

3.1 Let $A_n\in D(\delta)$ with $A_n\to A$ and $\delta(A_n)\to B$ in norm. The integral identities below are immediate at $t=0$. Fix $t\ne0$ and put $h=t/N$ for a positive integer $N$; the group law gives the exact telescope
$$\alpha_t(A_n)-A_n=\sum_{k=0}^{N-1}\alpha_{kh}(\alpha_h(A_n)-A_n)=h\sum_{k=0}^{N-1}\alpha_{kh}(\delta(A_n))+h\sum_{k=0}^{N-1}\alpha_{kh}\!\left(\frac{\alpha_h(A_n)-A_n}{h}-\delta(A_n)\right).$$
As $N\to\infty$, the second sum has norm at most $|t|\|(\alpha_h(A_n)-A_n)/h-\delta(A_n)\|$, which tends to zero by the definition of $\delta(A_n)$. The first sum is a Riemann sum for the continuous function $s\mapsto\alpha_s(\delta(A_n))$; its integral exists because the algebra is complete and the function is uniformly continuous on compact intervals. Hence $\alpha_t(A_n)-A_n=\int_0^t\alpha_s(\delta(A_n))\,ds$. Isometry bounds the integral of $\alpha_s(\delta(A_n)-B)$ by $|t|\|\delta(A_n)-B\|$, allowing the identity to pass to $\alpha_t(A)-A=\int_0^t\alpha_s(B)\,ds$. Strong continuity bounds the difference between the quotient of this integral and $B$ by $\sup_{|s|\le|t|}\|\alpha_s(B)-B\|$, which tends to zero. Thus $A\in D(\delta)$ and $\delta(A)=B$, proving that the graph of $\delta$ is closed. [A1, A2, F1, step 2.1, algebra] ∎
