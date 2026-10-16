---
id: def-qc-effective-unitary-matrix-input
kind: definition
title: Effective Unitary Matrix Input
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-effective-binary-encoding-and-decoder]
justified_by: []
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: §2, finite gate labels and target-unitary input; §4, exact-real arithmetic caveat
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: Ch. 2 §2.2, PDF pp. 26–29, finite gate approximation
---

## Definition

A **finite gate alphabet** is a finite list of distinct labels, each assigned
one exact matrix in $SU(2):=\{M\in M_2(\mathbb C):M^*M=I_2,\det M=1\}$. A
**Cauchy name** for a target $U\in SU(2)$ is a
deterministic procedure which, on unary input $1^b$, returns a rational
$2\times2$ complex matrix $Q_b$ whose real and imaginary entries differ from
the corresponding entries of $U$ by at most $2^{-b}$. The name has a stated
time bound $T(b)$. A precision request is a positive rational
$\varepsilon\in(0,1/2)$ in binary, using the effective encoding convention of
[[def-effective-binary-encoding-and-decoder]].

The Cauchy name specifies the exact target through all its approximants; an
individual $Q_b$ need not be unitary. An exact-real target handle and a
Cauchy-name input are distinct interfaces: the first permits ideal exact
comparisons, while a finite Turing implementation must use the second.
