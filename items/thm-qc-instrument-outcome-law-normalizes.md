---
id: thm-qc-instrument-outcome-law-normalizes
kind: theorem
title: "Instrument outcome weights normalize"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-instrument-and-conditional-state, def-qc-density-operator, def-trace-of-an-endomorphism, thm-non-negative-operator-characterisations, def-qc-completely-positive-map, def-non-negative-and-positive-operator]
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

For a finite instrument $(\mathcal I_a)_{a\in\Omega}$ and a density operator $\rho$ on its input space, the branch weights $p_a=\operatorname{tr}(\mathcal I_a(\rho))$ form a probability distribution on $\Omega$.

## Facts & Assumptions

**Given:** A finite instrument $(\mathcal I_a)_{a\in\Omega}$ and an input density operator $\rho$.

[F1] [[def-qc-instrument-and-conditional-state]]: each outcome map is completely positive and $\sum_a\operatorname{tr}(\mathcal I_a(X))=\operatorname{tr}(X)$ for every input operator $X$; $p_a=\operatorname{tr}(\mathcal I_a(\rho))$.

[F2] [[def-qc-completely-positive-map]]: complete positivity includes the $r=1$ extension, which is the original map and therefore preserves nonnegativity.

[F5] [[def-qc-density-operator]]: on a nonzero finite-dimensional complex inner-product space, a density operator is nonnegative and has trace one.

[F3] [[thm-non-negative-operator-characterisations]]: a nonnegative operator has an orthonormal basis in which its matrix is diagonal with nonnegative real diagonal entries.

[F4] [[def-trace-of-an-endomorphism]]: trace is the basis-independent matrix trace of a finite-dimensional endomorphism.

[F6] [[def-non-negative-and-positive-operator]]: a nonnegative operator is self-adjoint and has nonnegative quadratic form on every vector.

## Proof

1.1 For each $a$, complete positivity [F1]–[F2] at $r=1$ sends the nonnegative input $\rho$ from [F5] to a nonnegative $\tau_a:=\mathcal I_a(\rho)$ in the sense of [F6]. By [F3], $\tau_a$ has nonnegative diagonal entries in an orthonormal basis, and [F4] therefore gives $p_a=\operatorname{tr}(\tau_a)\ge0$. [given, F1, F2, F3, F4, F5, F6]

1.2 Apply the trace-preservation identity in [F1] to $X=\rho$. It gives $\sum_{a\in\Omega}p_a=\operatorname{tr}(\rho)=1$ by [F5]. Thus the nonnegative branch weights sum to one. [given, F1, F5]

2.1 For any $a$, $1-p_a=\sum_{b\ne a}p_b\ge0$ by step 1.1, including the empty sum when $\Omega=\{a\}$. Hence $p_a\in[0,1]$ for every outcome, and the weights form a finite probability distribution. [step 1.1, step 1.2, algebra] ∎
