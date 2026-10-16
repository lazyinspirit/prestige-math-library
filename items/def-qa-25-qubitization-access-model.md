---
id: def-qa-25-qubitization-access-model
kind: definition
title: Qubitization access model
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-22-block-encoding
  - def-qa-22-block-encoding-access-model
  - def-qa-23-qsp-signal-sequence
  - def-qa-23-qsp-admissible-polynomial-pair
  - def-qa-24-singular-value-transform
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - def-qc-circuit-cost-model
  - def-qc-uniform-circuit-family
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
justified_by:
  - thm-qa-25-qubitization-signal-sequence
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Guang Hao Low and Isaac L. Chuang, Hamiltonian Simulation by Qubitization"
      url: "https://arxiv.org/pdf/1610.06546"
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
---

## Definition

Let $H$ be a finite-dimensional complex inner-product space, let $K=K^*$ on $H$, and let $\alpha>0$ satisfy $\|K\|_{\mathrm{op}}\le\alpha$. Put $A=K/\alpha$. Let $U$ be a unitary on an ancilla-system space $H_A\otimes H$, let $J:H\to H_A\otimes H$ be the isometry $Jv=|0^a\rangle\otimes v$, and let $\Pi=JJ^*$. An **exact Hermitian block encoding** is the data $(U,J,\alpha)$ with $J^*UJ=A$. The matrix $K$ is Hermitian; $U$ itself need not be Hermitian.

The signal-register reflection is $R_\Pi=2\Pi-I$. The access record lists, separately, each supplied call to $U$, $U^*$, controlled-$U$, controlled-$U^*$, and $R_\Pi$, together with their circuit, query, gate, width, ancilla, precision, and classical-generation costs from [[def-qa-22-block-encoding-access-model]] and [[def-qc-circuit-cost-model]]. A state description or block matrix alone supplies none of these calls. A controlled reflection is also separate. Any PREPARE, SELECT, sparse-location, value, or coefficient operation used by a construction is a separately supplied, reversible interface with its inverse and cost recorded.

Here is the standard-form **qubiterate** for this access instance. Add a flag qubit and define $\widetilde U=|0\rangle\langle0|\otimes U+|1\rangle\langle1|\otimes U^*$, $J'v=|+\rangle\otimes Jv$, $S=X\otimes I$, $F=S\widetilde U$, and $W_{\mathrm q}=(2J'J'^*-I)F$. Implementing $\widetilde U$ requires the separately declared controlled-$U$ and controlled-$U^*$ calls; $S$, the preparation of $|+\rangle$, and the reflection about $\operatorname{ran}(J')$ also have declared costs. [[thm-qa-25-qubitization-signal-sequence]] proves its compressed block and spectral relation.

For the QSVT simulation sequence, the signal operations are the alternating $U,U^*$ calls interleaved with the projector phases $e^{i\phi(2\Pi-I)}$ from [[def-qa-23-qsp-signal-sequence]]. Their exact phase list, parity, real-polynomial extraction, controls, inverse calls, and phase-synthesis precision are part of the supplied circuit description. The scalar polynomial pairs must satisfy [[def-qa-23-qsp-admissible-polynomial-pair]]; singular-value transformations use the convention of [[def-qa-24-singular-value-transform]].
