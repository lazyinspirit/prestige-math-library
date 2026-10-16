---
id: thm-qc-projective-measurement-outcome-law
kind: theorem
title: "Projective measurement outcome weights are probabilities"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-projective-measurement, def-qc-density-operator, def-non-negative-and-positive-operator, def-trace-of-an-endomorphism, prop-trace-is-linear, thm-trace-of-ab-equals-trace-of-ba, thm-non-negative-operator-characterisations]
justified_by: []
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §§2.3.1–2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.1.1"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $\rho$ be a density operator on a nonzero finite-dimensional complex inner-product space $H$, and let $(P_a)_{a\in\Omega}$ be a finite projective measurement on $H$. Then $p_\rho(a)=\operatorname{tr}(\rho P_a)$ lies in $[0,1]$ for every $a$, and $\sum_{a\in\Omega}p_\rho(a)=1$.

## Facts & Assumptions

**Given:** The density operator $\rho$ and the finite projective measurement $(P_a)_{a\in\Omega}$ stated above.

[F1] [[def-qc-projective-measurement]]: $P_a^*=P_a=P_a^2$, $P_aP_b=0$ for $a\ne b$, and $\sum_aP_a=I_H$; zero projections are allowed.

[F6] [[def-qc-density-operator]]: on a nonzero finite-dimensional complex inner-product space, a density operator is nonnegative and has trace one.

[F7] [[def-non-negative-and-positive-operator]]: a nonnegative operator is self-adjoint and has nonnegative quadratic form on every vector.

[F2] [[thm-non-negative-operator-characterisations]]: a nonnegative operator has an orthonormal basis in which its matrix is diagonal with nonnegative real diagonal entries.

[F3] [[thm-trace-of-ab-equals-trace-of-ba]]: $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ for compatible rectangular matrices.

[F4] [[prop-trace-is-linear]]: trace preserves finite sums and scalar multiples.

[F5] [[def-trace-of-an-endomorphism]]: endomorphism trace is the matrix trace in any basis and is basis-independent.

## Proof

1.1 Fix $a$. Set $\tau_a=P_a\rho P_a$. Self-adjointness of $P_a$ and $\rho$ gives $\langle\tau_ax,y\rangle=\langle\rho P_ax,P_ay\rangle=\langle x,\tau_ay\rangle$ for all $x,y$, so $\tau_a$ is self-adjoint. It is nonnegative, since $\langle\tau_ax,x\rangle=\langle\rho P_ax,P_ax\rangle\ge0$ for every $x$ by [F6]–[F7]. By [F2], $\tau_a$ has nonnegative diagonal entries in an orthonormal basis, so [F5] gives $\operatorname{tr}(\tau_a)\ge0$. By [F3] and $P_a^2=P_a$, $p_\rho(a)=\operatorname{tr}(\rho P_a)=\operatorname{tr}(P_a\rho P_a)=\operatorname{tr}(\tau_a)\ge0$. [given, F1, F2, F3, F5, F6, F7]

1.2 By [F4], the resolution of the identity in [F1], and [F6], $\sum_a p_\rho(a)=\operatorname{tr}(\rho\sum_aP_a)=\operatorname{tr}(\rho I_H)=\operatorname{tr}(\rho)=1$. [given, F1, F4, F5, F6]

2.1 For each $a$, $1-p_\rho(a)=\sum_{b\ne a}p_\rho(b)\ge0$ by step 1.1, with the empty sum interpreted as $0$ when $\Omega=\{a\}$. Therefore every weight is at most one and, by step 1.1, belongs to $[0,1]$. [step 1.1, algebra] ∎
