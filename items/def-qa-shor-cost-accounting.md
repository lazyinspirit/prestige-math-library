---
id: def-qa-shor-cost-accounting
kind: definition
title: "Shor factoring cost-accounting branches"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-classical-bit-cost

justified_by: []
proof_strategy: direct
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

Fix a promised input integer $N\ge4$, set $n=\lceil\log_2N\rceil$, and let an order-finding phase register have width $m\ge1$ and size $Q=2^m$. A **work wire** is an auxiliary circuit wire outside the stated input and output registers; its presence and use are charged as part of the supplied circuit. Classical bit transitions use the convention of [[def-qa-classical-bit-cost]]. The cost report for Shor factoring keeps the following branches separate.

- **Explicit reversible arithmetic.** A supplied reversible circuit for multiplication by a fixed residue modulo $N$ is charged by its actual gate occurrences and work wires. Each use of that circuit is also counted in a separate modular-multiplier-call coordinate. The circuit, its inverse, and any controlled version must be supplied; this definition assigns none of them zero cost. It asserts no finite circuit-description generator or generation-time bound.
- **Ideal exact-angle QFT.** In this named ideal submodel, each Hadamard, exact controlled-phase rotation, and swap in the supplied $m$-bit QFT circuit counts as one ideal gate. The standard exact cyclic QFT has $m$ Hadamards, $m(m-1)/2$ controlled-phase rotations, and $\lfloor m/2\rfloor$ swaps, hence $O(m^2)$ ideal gates. This submodel permits exact real angles as unit-cost gates. It supplies no finite gate alphabet, finite binary description, approximation, compiler, or uniform-family claim.
- **Bare controlled-unitary access.** If only a controlled call to $U_x:|z\rangle\mapsto|xz\bmod N\rangle$ is supplied, implementing the controlled power $U_x^{2^j}$ by repetition costs $2^j$ oracle calls. Across $j=0,\ldots,m-1$ this is $\sum_j2^j=Q-1$ calls per phase-estimation sample. These oracle-query counts are separate from gate counts.
- **Classical bit work.** Integer inputs are binary, elementary arithmetic is charged in bit operations, and schoolbook multiplication of two $b$-bit integers costs $O(b^2)$. A rejection sampler's random-bit cost is reported in expectation separately from deterministic bit operations.

The four coordinates used by the factoring cost theorem are ideal or explicit quantum gates, modular-multiplier calls, bare controlled-unitary oracle queries, and classical bit operations. An inapplicable branch is not reported as a zero-cost implementation.

## Remarks

This is a cost convention for the stated algorithmic comparison. In particular, the ideal exact-angle QFT count is not a finite-alphabet or uniform-circuit theorem.
