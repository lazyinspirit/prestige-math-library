---
id: def-qsm-dt-channel-definition
kind: definition
title: Finite completely positive trace-preserving maps
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 1
deps:
  - lem-qsm-matrix-state-calculus
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.2.1–2.2.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 3, §3.2
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
---

## Definition

Let $d,e\geq1$ be integers, let $H_{\mathrm{in}}=\mathbb C^d$ and $H_{\mathrm{out}}=\mathbb C^e$ with their standard inner products, and write $M_d(\mathbb C)$ and $M_e(\mathbb C)$ for the complex linear maps on these spaces. A matrix $X$ is **positive semidefinite**, written $X\geq0$, when it is Hermitian and $\langle Xv,v\rangle\geq0$ for every vector $v$. The finite spectral convention in [[lem-qsm-matrix-state-calculus]] gives positive matrices their orthonormal eigenbases and positive square roots.

A **positive map** is a complex-linear map $\Phi:M_d(\mathbb C)\to M_e(\mathbb C)$ such that $\Phi(X)\geq0$ whenever $X\geq0$. For each integer $r\geq1$, identify $M_r(\mathbb C)\otimes M_d(\mathbb C)$ with matrices on $\mathbb C^r\otimes\mathbb C^d$ in the ordered product basis. The map $\Phi$ is **completely positive** when $\operatorname{id}_r\otimes\Phi$ is positive for every such $r$, where $\operatorname{id}_r$ is the identity map on $M_r(\mathbb C)$.

The map $\Phi$ is **trace-preserving** when $\operatorname{Tr}(\Phi(X))=\operatorname{Tr}(X)$ for every $X\in M_d(\mathbb C)$. A **finite quantum channel** is a complex-linear map that is both completely positive and trace-preserving, abbreviated CPTP. Unitality, $\Phi(I_d)=I_e$, is a separate condition and is not part of this definition.

This is a mathematical definition. A physical preparation, measurement, or open-system model must separately identify when one of these maps represents a physical transformation.

