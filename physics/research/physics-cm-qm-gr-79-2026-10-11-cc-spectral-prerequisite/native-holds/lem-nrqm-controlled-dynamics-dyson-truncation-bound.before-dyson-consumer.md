---
id: lem-nrqm-controlled-dynamics-dyson-truncation-bound
aliases: [nrqm-controlled-dynamics-dyson-truncation-bound]
kind: lemma
domain: mathematics
title: "Dyson truncation bound"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, lem-bochner-integral-norm-inequality, thm-bochner-integrability-criterion, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  thm-bochner-integrability-criterion: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 5 pp. 123-131 (quantum dynamics; existence, uniqueness and norm bounds for time-ordered evolution)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Perturbation Expansion pp. 180-182 (the Dyson-type expansion and its truncation as an approximation scheme)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and adopt the
hypotheses and notation of
[[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]: $H$ is a
complex Hilbert space, $I=[a,b]$, $\hbar>0$, $\mathcal H:I\to\mathcal B(H)$ is
norm-continuous with self-adjoint values,
$K=\hbar^{-1}\sup_{t\in I}\|\mathcal H(t)\|$, $U_n(t,s)$ are the ordered
integrals and $U(t,s)=\sum_{n\ge0}U_n(t,s)$ is the unitary propagator. Then for
every integer $N\ge0$ and all $s\le t$ in $I$:

(a) *Remainder identity.*
$$U(t,s)-\sum_{n=0}^{N}U_n(t,s)=\Bigl(\frac{-i}{\hbar}\Bigr)^{\!N+1}\int_{s<t_1<\cdots<t_{N+1}<t}\mathcal H(t_1)\cdots\mathcal H(t_{N+1})U(t_{N+1},s)\,dt_1\cdots dt_{N+1}.$$

(b) *Truncation bound.*
$$\Bigl\|U(t,s)-\sum_{n=0}^{N}U_n(t,s)\Bigr\|\le e^{K(t-s)}\,\frac{(K(t-s))^{N+1}}{(N+1)!}.$$

In particular $\|U(t,s)-I-U_1(t,s)\|\le e^{K(t-s)}(K(t-s))^2/2$, so the
first-order term approximates the propagator with a bound that is quadratic in
the coupling strength and in the time interval.

## Facts & Assumptions

**Given:** the data and notation of
[[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]; an integer
$N\ge0$ and reals $s\le t$ in $I$.

[F1] $U(t,s)=\sum_{n\ge0}U_n(t,s)$ with $\|U_n(t_1,s)\|\le(K(t_1-s))^n/n!$, and the series converges uniformly in operator norm; in particular $\|U(r,s)\|\le e^{K(r-s)}\le e^{K(b-a)}$ for $r\in[s,t]$ ([[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]], [[def-operator-norm]]).

[F2] The recursion $U_{n+1}(t,s)=\frac{-i}{\hbar}\int_s^t\mathcal H(r)U_n(r,s)\,dr$ and the Bochner norm inequality $\|\int f\|\le\int\|f\|$ ([[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]], [[lem-bochner-integral-norm-inequality]], [[thm-bochner-integrability-criterion]]).

[F3] $\|AB\|\le\|A\|\|B\|$ and $\|\mathcal H(r)\|\le\hbar K$ for $r\in I$ ([[def-bounded-linear-operator]], [[def-operator-norm]]).

## Proof

1.1 [Splitting the hyperplane] For $m\ge N+1$ apply the recursion of [F2] $N+1$ times and Fubini for Bochner integrals to write $U_m(t,s)=\bigl(\frac{-i}{\hbar}\bigr)^{N+1}\int_{s<t_1<\cdots<t_{N+1}<t}\mathcal H(t_1)\cdots\mathcal H(t_{N+1})U_{m-N-1}(t_{N+1},s)\,dt_1\cdots dt_{N+1}$, the $N+1$ integral signs being absorbed by the simplex $\{s<t_1<\cdots<t_{N+1}<t\}$ whose remaining free variable $t_{N+1}$ enters the factor $U_{m-N-1}(t_{N+1},s)$. [F2, algebra]

2.1 [Summing the tail] Summing step 1.1 over all $m\ge N+1$ and interchanging the sum with the Bochner integral (uniform convergence in operator norm, [F1]) gives the identity of (a), because $\sum_{m\ge N+1}U_{m-N-1}(t_{N+1},s)=U(t_{N+1},s)$ by the defining series of the propagator. [step 1.1, F1, F2, algebra]

3.1 [Bound] Taking norms in step 2.1 and using [F3] and the norm inequality [F2] gives $\|U(t,s)-\sum_{n=0}^N U_n(t,s)\|\le\frac{K^{N+1}}{(N+1)!}(t-s)^{N+1}\sup_{r\in[s,t]}\|U(r,s)\|\le e^{K(t-s)}\frac{(K(t-s))^{N+1}}{(N+1)!}$, where the simplex volume $(t-s)^{N+1}/(N+1)!$ comes from the constant integrand and [F1] bounds the supremum. [step 2.1, F1, F2, F3, algebra] ∎
