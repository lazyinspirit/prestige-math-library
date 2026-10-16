---
id: def-qa-finite-cyclic-discrete-logarithm-problem
kind: definition
title: Finite cyclic discrete-logarithm problem and costed encoding
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-finite-abelian-hidden-subgroup-problem
  - def-qc-ordered-bitstring-encoding
  - def-qc-controlled-unitary-access
  - def-qc-coherent-function-oracle
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
---

## Definition

A finite cyclic discrete-logarithm instance consists of a cyclic group $G=\langle g\rangle$ of known exact order $q\ge2$ and an element $x\in G$. Its answer is the unique integer $a\in\{0,\ldots,q-1\}$ satisfying $g^a=x$. Uniqueness follows because $g^u=g^v$ exactly when $u\equiv v\pmod q$.

For a quantum or bit-cost claim, the instance additionally declares an injective fixed-length encoding $\operatorname{enc}:G\to\{0,1\}^w$, with $w\ge\lceil\log_2q\rceil$, and one of the following operation profiles:

1. explicit reversible circuits for multiplication, equality, and any controlled multiplication used by the algorithm, with gate and clean-work costs; or
2. named group-operation oracles with a separate query charge for each operation. A controlled call is available only if that controlled operation is explicitly supplied and charged.

The associated hidden-subgroup function is $f:\mathbb Z_q\times\mathbb Z_q\to G$, $f(u,v)=g^u x^v$. A direct coherent XOR oracle for its fixed-length encoding is a separate supplied interface; if it is supplied, one call costs one $f$ query. Group-operation oracles do not automatically supply this function oracle, a controlled call, an inverse call, a gate implementation, or a classical bit-cost bound. No efficient implementation is asserted for every abstract finite cyclic group.

## Remarks

The problem definition does not require $q$ to be prime. For $x=g^a$, the function $f$ is analyzed by the separate hidden-subgroup lemma on this page.
