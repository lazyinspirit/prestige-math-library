---
id: thm-qc-povm-probabilities-normalize
kind: theorem
title: "POVM outcome weights are probabilities"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-povm-and-outcome-law, def-non-negative-and-positive-operator, thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique, def-trace-of-an-endomorphism, prop-trace-is-linear, thm-trace-of-ab-equals-trace-of-ba, def-qc-density-operator]
justified_by: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.1.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $\rho$ be a density operator on a nonzero finite-dimensional complex inner-product space $H$, and let $E=(E_a)_{a\in\Omega}$ be a finite POVM on $H$. Then

$$p_\rho(a)=\operatorname{tr}(\rho E_a)\in[0,1]\quad\text{for each }a\in\Omega,\qquad \sum_{a\in\Omega}p_\rho(a)=1.$$

## Facts & Assumptions

**Given:** $H$, the density operator $\rho$, the finite outcome set $\Omega$, and the POVM $E$ stated above.

[F1] [[def-qc-povm-and-outcome-law]]: $E_a$ is nonnegative, $\sum_aE_a=I_H$, and $p_\rho(a)=\operatorname{tr}(\rho E_a)$.

[F7] [[def-qc-density-operator]]: on a nonzero finite-dimensional complex inner-product space, a density operator is nonnegative and has trace one.

[F8] [[def-non-negative-and-positive-operator]]: a nonnegative operator is self-adjoint and has nonnegative quadratic form on every vector.

[F2] [[thm-non-negative-square-root-exists-and-is-unique]]: every nonnegative operator on a finite-dimensional real or complex inner-product space has a unique nonnegative square root $R$ with $R^2=T$.

[F3] [[thm-non-negative-operator-characterisations]]: a nonnegative operator has an orthonormal basis in which its matrix is diagonal with nonnegative real diagonal entries.

[F4] [[thm-trace-of-ab-equals-trace-of-ba]]: for compatible rectangular matrices $A,B$, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$, including zero-sized cases.

[F5] [[prop-trace-is-linear]]: trace preserves finite sums and scalar multiples.

[F6] [[def-trace-of-an-endomorphism]]: endomorphism trace is the matrix trace in any basis and is basis-independent.

## Proof

1.1 Fix $a\in\Omega$. Let $M_a=E_a^{1/2}$ be the nonnegative square root supplied by [F2]. Since $M_a$ and $\rho$ are self-adjoint by [F2] and [F7]–[F8], for every $x,y\in H$ one has $\langle M_a\rho M_ax,y\rangle=\langle\rho M_ax,M_ay\rangle=\langle M_ax,\rho M_ay\rangle=\langle x,M_a\rho M_ay\rangle$, so $M_a\rho M_a$ is self-adjoint. For every $x\in H$, $\langle M_a\rho M_ax,x\rangle=\langle\rho M_ax,M_ax\rangle\ge0$ by [F7]–[F8], so $M_a\rho M_a$ is nonnegative. By [F3] it is diagonal with nonnegative entries in an orthonormal basis, hence its trace is nonnegative by [F6]. By [F4] and $M_a^2=E_a$, $p_\rho(a)=\operatorname{tr}(\rho E_a)=\operatorname{tr}(M_a\rho M_a)\ge0$. [given, F1, F2, F3, F4, F6, F7, F8]

1.2 Linearity of trace [F5] and the completeness relation in [F1] give $\sum_{a\in\Omega}p_\rho(a)=\operatorname{tr}(\rho\sum_aE_a)=\operatorname{tr}(\rho I_H)=\operatorname{tr}(\rho)=1$ by [F7] and [F6]. [given, F1, F5, F6, F7]

2.1 For fixed $a$, $1-p_\rho(a)=\sum_{b\in\Omega,\,b\ne a}p_\rho(b)\ge0$ by step 1.1; if $\Omega=\{a\}$ this is the empty sum $0$. Thus $p_\rho(a)\le1$, and together with step 1.1 each weight lies in $[0,1]$. [step 1.1, algebra] ∎
