---
id: pthm-nrqm-driven-dynamics-bounded-norm-propagator
aliases: [ nrqm-driven-dynamics-bounded-norm-propagator ]
kind: physics-theorem
domain: physics
title: "The bounded norm-continuous driven model: unique unitary propagator,
  Dyson truncation budget and outcome-law error"
status: published
origin: session
dependency_level: 10
deps:
  [
    def-nrqm-driven-dynamics-framework-driven-model,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-framework-quantities-and-units,
    thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness,
    lem-nrqm-controlled-dynamics-dyson-truncation-bound,
    def-hilbert-space,
    def-bounded-linear-operator,
    def-operator-norm,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-projection-valued-measure,
    thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces,
    def-inner-product-space,
    def-countable-choice,
    def-axiom-of-choice,
    lem-nrqm-composites-density-and-scalar-spectral-probability
  ]
dependency_roles:
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-state-geometry-pure-mixed-states-and-purity: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  lem-nrqm-controlled-dynamics-dyson-truncation-bound: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The bounded norm-continuous driven model of the declared
  system: existence, uniqueness and unitarity of the two-time propagator with
  its operator-norm Schroedinger equation, the Dyson truncation bound as an
  explicit error budget for the truncated propagator, the reading of evolved
  preparations at the running time, and the bound comparing exact Born
  probabilities to unnormalized truncated quadratic estimates. The theorem is
  conditional on the bounded norm-continuous class; it asserts no unbounded or
  common-domain family, no laboratory realization, no measurement model, no
  long-time limit and no empirical result."
empirical_premises: []
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 5.1 printed pages 123-126 (PDF pages 135-138):
        autonomous unitary evolution and Stone's theorem; the nonautonomous
        Dyson construction and bounds are supplied by the local mathematics"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 2.3 printed pages 15-17 (PDF pages 15-17): the
        time-ordered exponential series of a time-dependent Hamiltonian and its
        truncation"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework data and the declared driven model of [[def-nrqm-driven-dynamics-framework-driven-model]] in the **bounded norm-continuous class** of clause (b)(i): $I=[a,b]$ is the declared compact time interval, $\mathfrak H$ the state space of the declared system, $\hbar>0$, and $H:I\to\mathcal B(\mathfrak H)$ is norm-continuous with self-adjoint values, $K:=\sup_{t\in I}\|H(t)\|/\hbar<\infty$. Let $U_{0}(t,s)=I$ and $U_{n+1}(t,s)=\int_{s}^{t}A(r)U_{n}(r,s)\,dr$ with $A(r)=-\frac{i}{\hbar}H(r)$ be the oriented Dyson iterates of [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]], and let $U(t,s)=\sum_{n\ge0}U_{n}(t,s)$ be its norm-convergent propagator; for $N\in\mathbb N_{0}$ put $R_{N}(t,s):=U(t,s)-\sum_{n=0}^{N}U_{n}(t,s)$. Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), the latter for the outcome-law reading of P2. Then (all differential assertions below apply only when $a<b$, with one-sided derivatives at endpoints; for $a=b$ only $U(a,a)=I$ and the algebraic and norm assertions are claimed):

(a) *Well-posedness of the declared model.* The family $U$ is the unique family of bounded operators on $\mathfrak H$ that is jointly norm-continuous on $I\times I$, unitary-valued, satisfies $U(s,s)=I$ and the cocycle $U(t,r)=U(t,s)U(s,r)$, and solves $i\hbar\partial_{t}U(t,s)=H(t)U(t,s)$ together with its second-endpoint equation $i\hbar\partial_{s}U(t,s)=-U(t,s)H(s)$ in operator norm. In particular the model's clause (c)(i) declaration has exactly one solution: the driven model in the bounded norm-continuous class is well posed.

(b) *Truncation budget.* For all $s,t\in I$ and all $N\in\mathbb N_{0}$, with $\tau:=|t-s|$,
$$\bigl\|R_{N}(t,s)\bigr\|\le e^{K\tau}\,\frac{(K\tau)^{N+1}}{(N+1)!},\qquad\text{and}\qquad \|U(t,s)-I\|\le e^{K\tau}-1 .$$
In particular $\|R_{1}(t,s)\|\le e^{K\tau}(K\tau)^{2}/2$ and $\|R_{2}(t,s)\|\le e^{K\tau}(K\tau)^{3}/6$.

(c) *Evolved states and outcome laws.* For every preparation $\rho$ specified at time $s$ the operator $\rho(t):=U(t,s)\rho(s)U(t,s)^{*}$ is a preparation of the model with $\operatorname{tr}\rho(t)=1$ for every $t\in I$, and the specification is consistent with the cocycle: evolving first from $s$ to $r$ and then from $r$ to $t$ gives the same preparation. For a pure preparation of a unit vector $\psi(s)$ the vector $\psi(t):=U(t,s)\psi(s)$ is unit and spans a pure preparation for every $t$. For every assigned sharp observable $(A,u_{A})$ ([[def-nrqm-observables-framework-observable-and-outcome-law]]) and every Borel set $B\subseteq\mathbb R$, the number $\mu^{A}_{\rho(t)}(B)$ is the model's outcome probability at time $t$.

(d) *Error of the unnormalized truncated quadratic estimate.* Let $\psi(s)$ be a unit vector, put $\psi^{N}(t):=\sum_{n=0}^{N}U_{n}(t,s)\psi(s)$ and let $(A,u_{A})$ be an assigned sharp observable with $A\in\mathcal B(\mathfrak H)$ bounded. Then for every $t\in I$ and every Borel set $B\subseteq\mathbb R$,
$$\bigl|\mu^{A}_{\psi(t)}(B)-\mu^{A}_{\psi^{N}(t)}(B)\bigr|\le (1+\|\sum_{n=0}^NU_n(t,s)\|)\,\|R_N(t,s)\|\le 2\,e^{K\tau}\frac{(K\tau)^{N+1}}{(N+1)!},$$
where the truncated quantity is the unnormalized quadratic form $\mu^{A}_{\psi^{N}(t)}(B):=\|E_{A}(B)\psi^{N}(t)\|^{2}$ of the truncated vector, whose norm is at most $e^{K\tau}$. It is an approximation to the normalized exact Born law and need not itself be a probability law; for $N=1$ the bound also implies the looser estimate $2e^{K\tau}(K\tau)^{2}$.

(e) *Scope.* The theorem is conditional on the bounded norm-continuous class, on the compactness of $I$ and on $K<\infty$. It asserts no existence or uniqueness statement for unbounded families (which are treated in their own classes), no uniform-in-time approximation, no rate or decay, no measurement or apparatus model, and no comparison with any recorded data.

## Facts & Assumptions


**Given:** the declared driven model in the bounded norm-continuous class; the iteration $U_{n}$ with $A=-iH/\hbar$ and the propagator $U$; a truncation order $N$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Dyson propagator.** Under the hypotheses of the Statement, $\|U_{n}(t,s)\|\le(K|t-s|)^{n}/n!$; the series $U=\sum_{n\ge0}U_{n}$ converges in operator norm uniformly on $I\times I$, is jointly norm-continuous, satisfies $U(s,s)=I$, $\|U(t,s)-I\|\le e^{K|t-s|}-1$, is the unique continuous $\mathcal B(\mathfrak H)$-valued solution of the integral equation $U(t,s)=I-\frac{i}{\hbar}\int_{s}^{t}H(r)U(r,s)\,dr$ for fixed $s$, and, when $a<b$ with one-sided derivatives at endpoints, has operator-norm derivatives $\partial_{t}U(t,s)=-\frac{i}{\hbar}H(t)U(t,s)$, $\partial_{s}U(t,s)=+\frac{i}{\hbar}U(t,s)H(s)$; every $U(t,s)$ is unitary with $U(t,s)^{*}=U(s,t)$ and the cocycle holds ([[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]] clauses (a)-(d)).

[F2] **Dyson truncation bound.** With the notation of [F1] and $R_{N}(t,s)=U(t,s)-\sum_{n=0}^{N}U_{n}(t,s)$ one has $\|R_{N}(t,s)\|\le e^{K|t-s|}(K|t-s|)^{N+1}/(N+1)!$ for all $s,t\in I$ and all $N$, and the same actual self-adjoint hypotheses give the stronger $\|R_N(t,s)\|\le(K\tau)^{N+1}/(N+1)!$ ([[lem-nrqm-controlled-dynamics-dyson-truncation-bound]] clause (b)).

[F3] **State and outcome readings of the model.** The model declares the evolved preparation $\rho(t)=U(t,s)\rho(s)U(t,s)^{*}$ and states that it is a preparation for every $t$ by unitarity and [[lem-nrqm-composites-density-and-scalar-spectral-probability]]; the outcome law of an assigned sharp observable $(A,u_{A})$ in a preparation is $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_{A}(B))$, for a pure preparation of a unit vector $\psi$ the value $\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}$ ([[def-nrqm-driven-dynamics-framework-driven-model]] clauses (c)(i), (d); [[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a), (b); [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]; [[post-nrqm-framework-state-and-composition]]; [[post-nrqm-framework-observable-and-probability]]).

[F4] **Inner-product and projection estimates.** The pairing is linear in the first argument and conjugate-linear in the second with $|\langle u,v\rangle|\le\|u\|\|v\|$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[def-inner-product-space]]); the spectral projections $E_{A}(B)$ of a self-adjoint bounded $A$ satisfy $0\le E_{A}(B)\le I$ and $\|E_{A}(B)\|\le1$ ([[def-projection-valued-measure]]); and for unit vectors $u,v$ and a contraction $Q$ one has $|\|Qu\|^{2}-\|Qv\|^{2}|\le 2\|u-v\|$.

## Proof

**Proof technique:** direct; instantiate the norm-continuous Dyson supplier and its truncation lemma at the model's data, then estimate the Born probabilities of the exact and truncated vectors.

**Given:** the data of the Statement and [F1]-[F4].

1.1 [Well-posedness and the properties of the propagator] The family $H$ is norm-continuous with bounded self-adjoint values on the compact interval $I$, so [F1] applies and supplies the norm-convergent unitary propagator $U$ with the cocycle, the inverse relation, joint norm-continuity and, for $a<b$, the two operator-norm endpoint equations with one-sided endpoint derivatives; if $a=b$, all iterated integrals vanish and $U(a,a)=I$ is the sole evolution assertion. For $a<b$, uniqueness of the continuous solution of the integral equation with $U(s,s)=I$ for fixed $s$ is clause (c) of [F1], and the differential equation together with $U(s,s)=I$ implies that integral equation by integration. Hence the family declared in clause (c)(i) of the model is exactly $U$, and it is unique; this is clause (a). [F1, given]

1.2 [Truncation budget] By [F2] with $\tau=|t-s|$, $\|R_{N}(t,s)\|\le e^{K\tau}(K\tau)^{N+1}/(N+1)!$ for every $N\ge0$; [F1] separately gives $\|U(t,s)-I\|\le e^{K\tau}-1$, and $N=1$, $N=2$ in [F2] give the displayed remainder bounds. This is clause (b). [F1, F2, algebra]

1.3 [Evolved preparations and outcome laws] By [F3] the model's evolved preparation is $\rho(t)=U(t,s)\rho(s)U(t,s)^{*}$, and it is a preparation for every $t$ because $U(t,s)$ is unitary [F1]; put $\rho(r)=U(r,s)\rho(s)U(r,s)^{*}$ for any $r\in I$. The cocycle of [F1] then gives $U(t,r)\rho(r)U(t,r)^{*}=U(t,r)U(r,s)\rho(s)U(r,s)^{*}U(t,r)^{*}=U(t,s)\rho(s)U(t,s)^{*}=\rho(t)$, so the result does not depend on the intermediate time. For a unit vector $\psi(s)$, $\|\psi(t)\|=\|\psi(s)\|=1$ by unitarity, so $[\psi(t)]$ is a pure preparation. The outcome probability at time $t$ is $\mu^{A}_{\rho(t)}(B)$ by [F3], the reading of P2. This is clause (c). [F1, F3, given]

2.1 [Error of the unnormalized truncated estimate] Let $S_N=\sum_{n=0}^NU_n(t,s)$, $u=U(t,s)\psi(s)$ and $v=S_N\psi(s)$ for a unit initial vector. Then $\|u\|=1$, $\|v\|\le\|S_N\|\le\sum_{n=0}^N(K\tau)^n/n!\le e^{K\tau}$ by [F1], and $\|u-v\|\le\|R_N\|$. For the spectral projection $Q=E_A(B)$, the exact Born probability is $\|Qu\|^2$ while $\|Qv\|^2$ is the stated unnormalized quadratic estimate. Their difference equals $\langle Q(u-v),Qu\rangle+\langle Qv,Q(u-v)\rangle$; Cauchy-Schwarz and contraction of $Q$ bound its absolute value by $(1+\|S_N\|)\|R_N\|\le(1+e^{K\tau})\|R_N\|$. Crucially [F2] supplies the stronger unitary remainder $\|R_N\|\le(K\tau)^{N+1}/(N+1)!$, so the result is at most $2e^{K\tau}(K\tau)^{N+1}/(N+1)!$, preserving the advertised final bound. For $N=1$ it is at most $e^{K\tau}(K\tau)^2$, and hence also the stated looser $2e^{K\tau}(K\tau)^2$. At $K\tau=0$ both quantities coincide. No unit norm or density interpretation is assigned to the truncated vector. This proves (d). [step 1.1, step 1.2, F1, F2, F3, F4, algebra]

3.1 [Scope] Only the bounded norm-continuous class, the compactness of $I$ and $K<\infty$ entered; the truncation bound is linear-exponential in $\tau$ and gives no uniform-in-time statement, the truncation is a mathematical error budget rather than a laboratory protocol, and no measurement, rate, decay or empirical comparison is asserted. This is clause (e). [step 1.1, step 1.2, step 1.3, step 2.1, given] ∎

## Remarks

- **The stronger unitary bound.** Because every $U(t,s)$ is unitary, the truncation lemma also records the bound $\|R_{N}(t,s)\|\le(K\tau)^{N+1}/(N+1)!$, which does not grow exponentially; the theorem states the exponential version because it is the one used to convert to the outcome-law estimate with the same constant.
- **From propagator error to probability error.** Clause (d) is the mechanism by which the Dyson truncation of the page's amplitude theorems becomes a bound on an outcome probability; it applies to every Borel outcome set and every bounded assigned sharp observable, and it requires no additional physical assumption beyond P2.
