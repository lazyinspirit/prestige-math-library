---
id: def-qsmx-von-neumann-kms-state
kind: definition
title: Upper-strip KMS condition for von Neumann algebras
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: null
deps:
  - def-qsmx-von-neumann-algebra
  - lem-qsmx-von-neumann-predual
  - def-axiom-of-choice
dependency_roles:
  def-qsmx-von-neumann-algebra: mathematical-premise
  lem-qsmx-von-neumann-predual: mathematical-premise
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
      locator: §2.2, Definition 2.11, printed pp. 17–18; sign and time reversal stated explicitly here
---

## Definition

Assume the Axiom of Choice. Let $M\ne\{0\}$ be a concrete von Neumann algebra on a complex Hilbert space. Use the predual $M_*=Q$ of [[lem-qsmx-von-neumann-predual]]; its elements are the normal linear functionals, and the induced topology $\sigma(M,Q)$ is the ultraweak topology. A **normal state** on $M$ is a bounded complex-linear functional $\omega:M\to\mathbb C$ with $\omega(I)=1$, $\omega(a)\geq0$ for every positive $a\in M$, and
$$\omega\!\left(\sup_i a_i\right)=\sup_i\omega(a_i)$$
for every increasing net $(a_i)$ of positive elements with $0\leq a_i\leq C I$ for a common finite $C$ and supremum taken in $M$.
An automorphism of $M$ is **normal** when it preserves the suprema of all such bounded increasing positive nets.
A **point-ultraweakly continuous one-parameter automorphism group** is a family $(\alpha_t)_{t\in\mathbb R}$ of bijective unital complex-linear maps $M\to M$ preserving multiplication and adjoints, with $\alpha_0=\operatorname{id}_M$, $\alpha_s\alpha_t=\alpha_{s+t}$, and $t\mapsto\varphi(\alpha_t(x))$ continuous for every $x\in M$ and every normal linear functional $\varphi\in Q$.
For dimensionless $t$ and dimensionless $\beta>0$, the normal state $\omega$ satisfies the **upper-strip $(\alpha,\beta)$ KMS condition** when, for every $A,B\in M$, there is a bounded scalar function $F_{A,B}$ on $S_\beta=\{z\in\mathbb C:0\leq\operatorname{Im}z\leq\beta\}$ that is continuous on $S_\beta$, holomorphic in its interior, and satisfies
$$F_{A,B}(t)=\omega(A\alpha_t(B)),\qquad F_{A,B}(t+i\beta)=\omega(\alpha_t(B)A)\quad(t\in\mathbb R).$$

## Definition references

[[def-qsmx-von-neumann-algebra]]

[[lem-qsmx-von-neumann-predual]]

[[def-axiom-of-choice]]
