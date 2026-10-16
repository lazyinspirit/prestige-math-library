---
id: alg-qa-shor-uniform-residue-sampler
kind: algorithm
title: "Exact uniform sampling from the nonzero residue representatives"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-countable-choice
  - def-dependent-choice
  - thm-countable-product-of-probability-spaces
justified_by: []
axiom_use: "Countable choice and dependent choice are used only to form the countable independent fair-bit tape."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§4, “Quantum Fourier transforms,” and §5, “Prime factorization” (order-finding and the factor reduction)."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 5, §§5.1–5.4, “Factoring,” “Reduction from factoring to period-finding,” “Shor’s period-finding algorithm,” and “Continued fractions.”"
---

## Definition

**Input.** An integer $N\ge3$. The random tape is a countable sequence of independent bits, each taking $0$ and $1$ with probability $1/2$. Its countable product law is supplied by [[thm-countable-product-of-probability-spaces]] under countable choice and dependent choice ([[def-countable-choice]], [[def-dependent-choice]]).

Set $M=N-1$ and let $h$ be the binary length of $M-1$, equivalently the least integer with $M\le2^h$. For each block, read its bits in order as $\beta_0,\ldots,\beta_{h-1}$, with the first bit most significant, and set $b=\sum_{j=0}^{h-1}2^{h-1-j}\beta_j\in\{0,\ldots,2^h-1\}$. If $b\ge M$, discard this block and read the next $h$ bits. Otherwise output $a=b+1$ and halt.

Whenever it halts, the procedure returns an element of $\{1,\ldots,N-1\}$ because an accepted block has $0\le b<M=N-1$ and the output is $b+1$.
