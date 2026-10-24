---
id: thm-qc-zero-probability-branch-has-no-conditioned-state
kind: theorem
title: "A zero-probability instrument branch has no conditioned state"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-instrument-and-conditional-state, def-qc-completely-positive-map, def-trace-of-an-endomorphism, thm-non-negative-operator-characterisations, def-qc-density-operator, def-non-negative-and-positive-operator]
justified_by: []
dependency_level: 6
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

Let $(\mathcal I_a)_{a\in\Omega}$ be a finite instrument and let $\rho$ be an input density operator. If $p_a=\operatorname{tr}(\mathcal I_a(\rho))=0$, then $\mathcal I_a(\rho)=0$ and the conditional value for outcome $a$ is $\bot$, not a density operator.

## Facts & Assumptions

**Given:** A finite instrument, an input density operator $\rho$, and an outcome $a$ whose branch weight $p_a$ is zero.

[F1] [[def-qc-instrument-and-conditional-state]]: $p_a=\operatorname{tr}(\mathcal I_a(\rho))$, and the conditional value is $\bot$ when $p_a=0$.

[F2] [[def-qc-completely-positive-map]]: each finite-ancilla extension of a completely positive branch map preserves nonnegative operators.

[F5] [[def-qc-density-operator]]: on a nonzero finite-dimensional complex inner-product space, a density operator is nonnegative and has trace one.

[F3] [[thm-non-negative-operator-characterisations]]: a nonnegative operator has an orthonormal basis in which it is diagonal with nonnegative real diagonal entries.

[F4] [[def-trace-of-an-endomorphism]]: trace is the basis-independent sum of the diagonal entries in any chosen basis.

[F6] [[def-non-negative-and-positive-operator]]: a nonnegative operator is self-adjoint and has nonnegative quadratic form on every vector.

## Proof

1.1 Since $\mathcal I_a$ is completely positive, its $r=1$ extension sends the nonnegative $\rho$ from [F5] to the nonnegative operator $\tau:=\mathcal I_a(\rho)$ by [F2], with nonnegativity as defined in [F6]. By [F3], $\tau$ is diagonal with entries $\lambda_j\ge0$ in an orthonormal basis. Its trace is $\sum_j\lambda_j=0$ by the hypothesis and [F1], [F4]; a finite sum of nonnegative numbers is zero only when every $\lambda_j=0$. Hence $\tau=0$. [given, F1, F2, F3, F4, F5, F6]

2.1 The instrument definition [F1] assigns $\bot$ when $p_a=0$. The algebraic quotient $\mathcal I_a(\rho)/p_a$ would have zero denominator, so it is not a normalized conditional density state. [given, F1, step 1.1] ∎
