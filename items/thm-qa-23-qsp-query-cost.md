---
id: thm-qa-23-qsp-query-cost
kind: theorem
title: QSP signal-query and phase-rotation count
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - alg-qa-23-qsp-phase-synthesis
  - def-qa-23-qsp-signal-sequence
  - def-qc-circuit-cost-model
  - thm-qa-23-qsp-phase-implementation-error
proof_strategy: direct
axiom_use: "None; the resource counts are finite counts of the displayed product factors."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Theorem 3 and Corollary 10, PDF pp. 7–14."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 29 §29.2, equations (29.6)–(29.14), PDF pp. 144–145."
---

## Statement

A length-$d$ sequence from [[def-qa-23-qsp-signal-sequence]] has exactly $d$ signal factors $W_R(x)$ and exactly $d+1$ phase factors $Z(\phi_j)$, for $0\le j\le d$. In the scalar QSP model the signal acts on one two-dimensional signal register. If each $W_R$ is provided by a named query oracle, the sequence uses exactly $d$ calls to that oracle; it makes no controlled or inverse signal calls. The oracle's work registers, implementation, and query/gate charges are those explicitly supplied with it. The phase-rotation, ordinary-gate, circuit-description, bit, and numerical-precision coordinates remain separate as in [[def-qc-circuit-cost-model]].

## Facts & Assumptions

**Given:** A nonnegative integer $d$, the ordered QSP product, and the declared signal-oracle and circuit-cost interfaces.

[F1] [[def-qa-23-qsp-signal-sequence]]: $U_\Phi=Z(\phi_0)\prod_{j=1}^d(W_R(x)Z(\phi_j))$; the empty product at $d=0$ is $Z(\phi_0)$.

[F2] [[alg-qa-23-qsp-phase-synthesis]]: the output list contains the $d+1$ phase values and the target length $d$; phase generation is classical preprocessing.

[F3] [[def-qc-circuit-cost-model]]: named oracle calls, ordinary gates, phase precision, circuit-description size, and classical computation costs are distinct coordinates; a matrix description alone gives no oracle call.

[F4] [[thm-qa-23-qsp-phase-implementation-error]]: any compiled phase or signal operator errors are bounded separately by the sum of their per-factor operator errors.

## Proof

1.1 The product in [F1] contains one factor $W_R$ for each integer $j=1,\ldots,d$, hence exactly $d$ signal occurrences. It contains $Z(\phi_0)$ once and one $Z(\phi_j)$ for each $j=1,\ldots,d$, hence exactly $d+1$ phase rotations. The case $d=0$ has zero signal factors and the single endpoint phase $Z(\phi_0)$. [F1, given, algebra]

2.1 A named signal query is invoked once for each displayed $W_R$ factor and no other signal call appears in the sequence; therefore the query count is exactly $d$. The one-qubit signal matrix acts on $\mathbb C^2$, while any implementation work space is included only if the supplied signal interface declares it. The phase and compilation coordinates remain distinct by [F3]–[F4]; no controlled or inverse call is inferred. [F1, F2, F3, F4, step 1.1] ∎
