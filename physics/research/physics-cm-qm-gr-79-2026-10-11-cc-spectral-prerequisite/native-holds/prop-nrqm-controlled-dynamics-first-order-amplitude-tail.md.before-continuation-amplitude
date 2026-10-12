---
id: prop-nrqm-controlled-dynamics-first-order-amplitude-tail
aliases: [nrqm-controlled-dynamics-first-order-amplitude-tail]
kind: proposition
domain: mathematics
title: "First-order amplitude tail"
status: draft
origin: pipeline
dependency_level: 3
deps: [thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness, lem-nrqm-controlled-dynamics-dyson-truncation-bound, thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture, def-hilbert-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-bounded-linear-operator, def-operator-norm, lem-bochner-integral-norm-inequality, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  lem-nrqm-controlled-dynamics-dyson-truncation-bound: mathematical-premise
  thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Perturbation Expansion and Harmonic Perturbations pp. 180-183 (first-order time-dependent amplitudes and their error as a formal expansion)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 5.1 pp. 123-126 (unitary dynamics) and Chapter 6 pp. 133-136 (self-adjointness of bounded perturbations)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Adopt the
hypotheses and notation of
[[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]]: $H$ is a
complex Hilbert space, $H_0$ is self-adjoint with domain $D(H_0)$, $\hbar>0$,
$V:[a,b]\to\mathcal B(H)$ is strongly continuous with self-adjoint values and
$v=\sup_t\|V(t)\|<\infty$, $K=v/\hbar$, and $U(t,s)$ is the mild propagator of
that item. Suppose in addition that $(\varphi_n)_{n\in\mathbb N}$ is a complete
orthonormal family of $H$ consisting of eigenvectors of $H_0$, with
$H_0\varphi_n=E_n\varphi_n$ and $E_n\in\mathbb R$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), and
fix indices $a_0,b_0$ and $s\le t$ in $[a,b]$, $\tau:=t-s$. Define the
*transition amplitude*
$$A_{b_0a_0}(t,s):=e^{iE_{b_0}(t-s)/\hbar}\bigl\langle\varphi_{b_0},U(t,s)\varphi_{a_0}\bigr\rangle.$$
Then
$$A_{b_0a_0}(t,s)=\delta_{a_0b_0}-\frac{i}{\hbar}\int_s^te^{i(E_{b_0}-E_{a_0})(r-s)/\hbar}\bigl\langle\varphi_{b_0},V(r)\varphi_{a_0}\bigr\rangle\,dr+R_{b_0a_0}(t,s),$$
where the remainder satisfies the explicit bound
$$|R_{b_0a_0}(t,s)|\le e^{K\tau}\frac{(K\tau)^2}{2}.$$

Consequently, if $\eta:[a,b]\to\mathbb R_{\ge0}$ is integrable with
$\|V(t)-V_0(t)\|\le\eta(t)$ for a family $V_0$ of self-adjoint bounded operators,
the first-order amplitude computed with $V_0$ differs from the exact one by at
most $\frac1\hbar\int_s^t\eta(r)\,dr+e^{K\tau}(K\tau)^2/2$. No physical
transition probability, no measurement postulate and no long-time limit are
asserted.

## Facts & Assumptions

**Given:** the data of [[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]];
the eigenbasis $(\varphi_n)$ with eigenvalues $E_n$; indices $a_0,b_0$;
$s\le t$ in $[a,b]$ and $\tau=t-s$.

[F1] The mild identity $U(t,s)=e^{-i\tau H_0/\hbar}-\frac{i}{\hbar}\int_s^te^{-i(t-r)H_0/\hbar}V(r)U(r,s)\,dr$ holds with the strong Bochner integral ([[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]] (c)).

[F2] $\|U_I(r,s)-I\|\le e^{K(r-s)}-1\le K(r-s)e^{K(r-s)}$ for $r\in[s,t]$, where $U_I$ is the interaction-picture propagator; consequently $\|U(r,s)-e^{-i(r-s)H_0/\hbar}\|=\|e^{-irH_0/\hbar}(U_I(r,s)-I)e^{isH_0/\hbar}\|\le e^{K(r-s)}-1$ ([[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]], [[lem-nrqm-controlled-dynamics-dyson-truncation-bound]]).

[F3] $(\varphi_n)$ is orthonormal, $e^{-i\sigma H_0/\hbar}\varphi_n=e^{-i\sigma E_n/\hbar}\varphi_n$, and $\|V(r)\varphi_{a_0}\|\le v$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]], [[def-operator-norm]]).

[F4] The Bochner norm inequality $\|\int_s^t f(r)dr\|\le\int_s^t\|f(r)\|dr$ for continuous Hilbert-space-valued $f$ ([[lem-bochner-integral-norm-inequality]]).

## Proof

1.1 [Inserting the free evolution] By [F1] and [F3], pairing the mild identity with $\varphi_{b_0}$ and applying it to $\varphi_{a_0}$ gives $\langle\varphi_{b_0},U(t,s)\varphi_{a_0}\rangle=e^{-iE_{b_0}\tau/\hbar}\delta_{a_0b_0}-\frac{i}{\hbar}\int_s^te^{-iE_{b_0}(t-r)/\hbar}\langle\varphi_{b_0},V(r)U(r,s)\varphi_{a_0}\rangle dr$. Replacing $U(r,s)\varphi_{a_0}$ by $e^{-iE_{a_0}(r-s)/\hbar}\varphi_{a_0}$ and multiplying by $e^{iE_{b_0}\tau/\hbar}$ produces exactly the displayed first-order term. [F1, F3, algebra]

2.1 [Bounding the replacement] The error of the replacement in step 1.1 is the absolute value of $-\frac{i}{\hbar}\int_s^te^{iE_{b_0}(t-r)/\hbar}\langle\varphi_{b_0},V(r)(U(r,s)-e^{-i(r-s)H_0/\hbar})\varphi_{a_0}\rangle dr$, which by [F4], Cauchy–Schwarz and [F2] is at most $\frac1\hbar\int_s^t\|V(r)\|\,\|U(r,s)-e^{-i(r-s)H_0/\hbar}\|dr\le\frac{v}{\hbar}\int_s^t(e^{K(r-s)}-1)dr\le\frac{v}{\hbar}\cdot\frac{(K\tau)^2}{2}e^{K\tau}=e^{K\tau}\frac{(K\tau)^2}{2}$, using $\int_s^t(e^{K(r-s)}-1)dr\le\int_s^tK(r-s)e^{K(r-s)}dr\le K\tau^2e^{K\tau}/2$ and $v/\hbar=K$. [step 1.1, F2, F3, F4, algebra]

3.1 [Scope remark as part of the claim] For the last assertion, write the difference of the two amplitudes as $-\frac{i}{\hbar}\int_s^te^{i(E_{b_0}-E_{a_0})(r-s)/\hbar}\langle\varphi_{b_0},(V-V_0)(r)\varphi_{a_0}\rangle dr$, bounded by $\frac1\hbar\int_s^t\eta(r)dr$ via [F4] and Cauchy–Schwarz, and add the bound of step 2.1. [step 1.1, step 2.1, F4, algebra] ∎
