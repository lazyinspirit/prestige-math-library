---
id: thm-qc-instrument-conditional-state-is-density
kind: theorem
title: "Positive-probability instrument branches are density operators"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-instrument-and-conditional-state, thm-qc-instrument-outcome-law-normalizes, def-qc-density-operator, def-trace-of-an-endomorphism, prop-trace-is-linear, def-qc-completely-positive-map, def-non-negative-and-positive-operator]
justified_by: []
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.2.4"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $\rho$ be an input density operator for a finite instrument $(\mathcal I_a)_{a\in\Omega}$, and let $p_a=\operatorname{tr}(\mathcal I_a(\rho))$. If $p_a>0$, then the conditional operator $\rho_a=\mathcal I_a(\rho)/p_a$ is a density operator on the instrument's output space.

## Facts & Assumptions

**Given:** A finite instrument, an input density operator $\rho$, and an outcome $a$ with $p_a>0$.

[F1] [[def-qc-instrument-and-conditional-state]]: each branch map is completely positive, $p_a=\operatorname{tr}(\mathcal I_a(\rho))$, and the conditional operator is $\mathcal I_a(\rho)/p_a$ when $p_a>0$.

[F2] [[def-qc-completely-positive-map]]: at ancilla dimension $r=1$, a completely positive map preserves nonnegative operators.

[F5] [[def-qc-density-operator]]: on a nonzero finite-dimensional complex inner-product space, a density operator is nonnegative and has trace one.

[F3] [[thm-qc-instrument-outcome-law-normalizes]]: the branch weights satisfy $p_a\ge0$ and sum to one.

[F4] [[prop-trace-is-linear]]: trace commutes with scalar multiplication.

[F6] [[def-non-negative-and-positive-operator]]: a nonnegative operator is self-adjoint and has nonnegative quadratic form on every vector.

## Proof

1.1 The outcome-law theorem [F3] shows that $p_a$ is the probability of branch $a$; the hypothesis $p_a>0$ selects a positive-probability branch. [given, F3]

2.1 Put $\tau_a=\mathcal I_a(\rho)$. By [F1]–[F2] and [F5]–[F6], $\tau_a$ is nonnegative. Since $p_a>0$ is real and $\tau_a$ is self-adjoint, for all $u,v$ one has $\langle(\tau_a/p_a)u,v\rangle=p_a^{-1}\langle\tau_a u,v\rangle=p_a^{-1}\langle u,\tau_a v\rangle=\langle u,(\tau_a/p_a)v\rangle$, so $\tau_a/p_a$ is self-adjoint. Division by $p_a>0$ also preserves nonnegativity of every quadratic form. Thus $\rho_a=\tau_a/p_a$ is nonnegative by [F6]. [given, F1, F2, F5, F6, step 1.1]

3.1 By the definition in [F1], $\operatorname{tr}(\tau_a)=p_a$. Linearity [F4] gives $\operatorname{tr}(\rho_a)=p_a^{-1}\operatorname{tr}(\tau_a)=1$. Thus $\rho_a$ is a density operator by [F5]. The hypothesis $p_a>0$ also forces the output space to be nonzero, since its zero space has only trace-zero endomorphisms. [given, F1, F4, F5, step 2.1] ∎
