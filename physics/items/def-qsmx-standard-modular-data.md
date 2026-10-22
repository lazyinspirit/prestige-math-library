---
id: def-qsmx-standard-modular-data
kind: definition
title: Tomita graph and standard modular data
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
physical_scope: null
deps:
  - def-qsmx-von-neumann-algebra
  - lem-qsmx-tomita-operator-involution
  - thm-unbounded-borel-functional-calculus
  - def-axiom-of-choice
dependency_roles:
  def-qsmx-von-neumann-algebra: mathematical-premise
  lem-qsmx-tomita-operator-involution: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: F. Hiai, Concise lectures on selected topics of von Neumann algebras
      url: https://arxiv.org/pdf/2004.02383
      locator: §2.1, Definition 2.3 and Lemma 2.1, printed pp. 10–11
    - title: Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory
      url: https://arxiv.org/pdf/1803.04993
      locator: §3.1, equations (3.1)–(3.19), printed pp. 18–20 (PDF pp. 19–21)
---

## Definition

Assume the Axiom of Choice. Let $H$ be a complex Hilbert space with inner product linear in its first argument, let $M\subseteq\mathcal B(H)$ be a concrete von Neumann algebra, and let $\Omega$ be a unit vector cyclic and separating for $M$. Define $D(S_0)=M\Omega$ and $S_0(x\Omega)=x^*\Omega$ for $x\in M$. Let $S=\overline{S_0}$ and write its polar decomposition as $S=J\Delta^{1/2}$. The preceding Tomita-operator lemma ensures this closure and polar data are well defined, with $\Delta$ positive self-adjoint and injective. For $x\in\mathcal B(H)$ and dimensionless $t\in\mathbb R$, define
$$\sigma_t(x):=\Delta^{it}x\Delta^{-it}.$$
Set $\omega(x)=\langle x\Omega,\Omega\rangle$. The powers $\Delta^{it}$ are the bounded unitary imaginary powers from the unbounded Borel functional calculus. At this definition stage $\sigma_t$ is defined on $\mathcal B(H)$; preservation of $M$ is established by a separate theorem.

## Definition references

[[def-qsmx-von-neumann-algebra]]

[[lem-qsmx-tomita-operator-involution]]

[[thm-unbounded-borel-functional-calculus]]

[[def-axiom-of-choice]]
