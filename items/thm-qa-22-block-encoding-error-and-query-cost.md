---
id: thm-qa-22-block-encoding-error-and-query-cost
kind: theorem
title: Block-encoding normalization, error, and cost accounting
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
verification:
  precheck: pass
deps:
  - def-qa-22-block-encoding-access-model
  - alg-qa-22-lcu-block-encoding
  - alg-qa-22-product-block-encoding
  - thm-qa-22-lcu-block-encoding-correctness
  - thm-qa-22-product-block-encoding-correctness
  - def-qc-circuit-cost-model
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapters 28–29 (17 April 2025)
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Section 4
      url: https://arxiv.org/pdf/1806.01838
---

## Statement

For one LCU construction, the normalization is $\Lambda$ and each additive cost coordinate for the sequential operations is the sum of the declared costs of PREPARE, SELECT, and PREPARE$^{\dagger}$; a SELECT implementation assembled from controlled component unitaries includes those calls and phases in its declared cost. For a two-factor product construction, the normalization is $\alpha_A\alpha_B$ and the query and gate counts are the sums of the two supplied encoding costs in the chosen order. Any explicit wire permutation or control wrapper is included in a supplied operation's cost or charged as a separate operation. The normalized error is bounded by [[thm-qa-22-product-block-encoding-correctness]].

Matrix-data access, coefficient-table access and storage, state preparation and its inverse, controlled access, angle or entry precision, classical preprocessing, and compilation remain separate cost coordinates. This result counts declared primitives; it does not synthesize a circuit from a bare matrix or assign an absent primitive zero cost.

## Facts & Assumptions

**Given:** A supplied access instance as in [[def-qa-22-block-encoding-access-model]], the LCU circuit of [[alg-qa-22-lcu-block-encoding]], and the product construction of [[alg-qa-22-product-block-encoding]].

[F1] [[def-qa-22-block-encoding-access-model]]: each supplied operation has its own declared cost, and a call to one operation does not imply access to another.

[F2] [[alg-qa-22-lcu-block-encoding]]: the circuit applies $P$, SELECT, and $P^{\dagger}$ once each in that order.

[F3] [[alg-qa-22-product-block-encoding]]: the product circuit applies the supplied $V_B$ and $V_A$ once each in that order.

[F4] [[thm-qa-22-lcu-block-encoding-correctness]]: the LCU normalization is $\Lambda$.

[F5] [[thm-qa-22-product-block-encoding-correctness]]: the product normalization and error are as stated there.

## Proof

1.1 The LCU circuit consists, in chronological order, of one call to $P$, one call to SELECT, and one call to $P^{\dagger}$ by [F2]. Additivity of the declared sequential cost coordinates in [F1] gives their coordinatewise sum; when SELECT is decomposed, its listed controlled calls and phases are part of that sum. Its normalization is $\Lambda$ by [F4]. [F1, F2, F4, given, algebra]

2.1 The product circuit calls the two supplied encodings exactly once each, first $V_B$ and then $V_A$, by [F3]. Their query and gate counts therefore add, with any separately supplied routing or control operations charged in their own coordinates. Its normalization and error are those proved in [F5]. No matrix access, state-preparation circuit, inverse call, or controlled call not explicitly present in the supplied access instance is included for free. [F1, F3, F5, given, algebra] ∎
