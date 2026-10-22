---
id: lem-qsmx-modular-unitary-strong-continuity
kind: lemma
title: Strong continuity of positive modular unitary powers
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: null
deps:
  - def-axiom-of-choice
  - def-unbounded-integral-against-a-pvm
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - thm-unbounded-borel-functional-calculus
  - thm-dominated-convergence
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  thm-dominated-convergence: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
      locator: §2.1, Theorem 2.2 proof, printed pp. 15–16
---

## Statement

Assume the Axiom of Choice. Let $H$ be a complex Hilbert space and let $A$ be a positive self-adjoint injective operator with spectral projection valued measure $E$ supported on $(0,\infty)$. For $t\in\mathbb R$, the unbounded Borel functional calculus defines $A^{it}$ as a unitary on all of $H$. For every $\xi\in H$, the map $t\mapsto A^{it}\xi$ is norm-continuous.

## Statement references

[[def-axiom-of-choice]]

[[def-unbounded-integral-against-a-pvm]]

[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

[[thm-unbounded-borel-functional-calculus]]

[[thm-dominated-convergence]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a complex Hilbert space $H$, a positive self-adjoint injective $A$ with spectral measure $E$, and $\xi\in H$.

[A1] Assume the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] The spectral theorem and unbounded Borel calculus give the scalar spectral measure $\mu_\xi(B)=\langle E(B)\xi,\xi\rangle$, the norm formula for bounded spectral multipliers, and unitary imaginary powers ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-unbounded-integral-against-a-pvm]], [[thm-unbounded-borel-functional-calculus]]).

[F2] Dominated convergence applies to the finite scalar measure $\mu_\xi$ ([[thm-dominated-convergence]]).

## Proof

1.1 Let $t_n\to t$. For every $\lambda>0$, $\lambda^{it_n}\to\lambda^{it}$, while $|\lambda^{it_n}-\lambda^{it}|^2\leq4$. Since $\mu_\xi((0,\infty))=\|\xi\|^2<\infty$, [F1] and [F2] give
$$\|A^{it_n}\xi-A^{it}\xi\|^2=\int_{(0,\infty)}|\lambda^{it_n}-\lambda^{it}|^2\,d\mu_\xi(\lambda)\longrightarrow0.$$
Thus the orbit is sequentially continuous. [A1, F1, F2, given, algebra]

2.1 The real parameter space and Hilbert-space norm topology are metric, so sequential continuity is equivalent to continuity. Therefore $t\mapsto A^{it}\xi$ is norm-continuous for every $\xi\in H$. [step 1.1, algebra] ∎
