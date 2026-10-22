---
id: ex-csm-frontier-potts-two-vertices
kind: example
title: "Two-vertex Potts and FK weights"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps: [thm-csm-frontier-edwards-sokal, def-csm-frontier-finite-potts-fk]
dependency_roles:
  thm-csm-frontier-edwards-sokal: mathematical-premise
  def-csm-frontier-finite-potts-fk: mathematical-premise
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the verification enumerates finitely many states."
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Geoffrey R. Grimmett, The Random-Cluster Model"
      url: https://arxiv.org/pdf/math/0205237
      locator: "§2.2–2.3, printed pp. 6–9 / PDF pp. 5–8: finite Potts weights and correlation/connection formula."
    - title: "Hugo Duminil-Copin, Geometric Representations of Lattice Spin Models, Cours Peccot lecture notes"
      url: https://www.ihes.fr/~duminil/publi/Courspeccot2.pdf
      locator: "Chapter 3, §3.2, printed pp. 24–26: finite Potts/FK coupling and connectivity interpretation."
verification:
  precheck: pending
---

## Example

Let $G=(V,E)$ have vertex set $V=\{x,y\}$ with $x\ne y$ and edge set $E=\{e\}$, where $e=\{x,y\}$ has finite activity $v\geq0$, and let $Q\geq2$ be an integer. Its FK normalizer is $Z_{FK}=Q^2+Qv$, and under the normalized FK law $\mathbb P_{FK}(x\leftrightarrow y)=v/(Q+v)$. The finite Potts normalizer is the same and the same-color probability is
$$\mathbb P(\sigma(x)=\sigma(y))=\frac{1+v}{Q+v}.$$

## Example references

[[thm-csm-frontier-edwards-sokal]]

## Facts & Assumptions

**Given:** The graph $G=(V,E)$ with $V=\{x,y\}$, $x\ne y$, and $E=\{e\}$ for $e=\{x,y\}$, integer $Q\geq2$, and finite activity $v\geq0$.

[F1] [[def-csm-frontier-finite-potts-fk]]: for a subset $A\subseteq E$, its FK weight is $Q^{k_G(A)}\prod_{e\in A}v_e$.

[F2] [[thm-csm-frontier-edwards-sokal]]: $\mathbb P(\sigma(x)=\sigma(y))=Q^{-1}+(1-Q^{-1})\mathbb P_{FK}(x\leftrightarrow y)$.

## Verification

**Proof technique:** direct finite enumeration.

1.1 There are two edge subsets. The empty subset has two isolated components and weight $Q^2$; the occupied subset has one component and weight $Qv$. Thus $Z_{FK}=Q^2+Qv$ and $\mathbb P_{FK}(x\leftrightarrow y)=Qv/(Q^2+Qv)=v/(Q+v)$, also when $v=0$. [given, F1, algebra]

2.1 Substitution in [F2] gives $\mathbb P(\sigma(x)=\sigma(y))=Q^{-1}+(1-Q^{-1})v/(Q+v)=(1+v)/(Q+v)$. [F2, step 1.1, algebra]

3.1 Direct spin enumeration checks the same result: $Q$ equal-color assignments each have weight $1+v$, and $Q(Q-1)$ unequal-color assignments each have weight $1$, so $Z_P=Q(1+v)+Q(Q-1)=Q^2+Qv$ and the same-color probability is $Q(1+v)/(Q^2+Qv)=(1+v)/(Q+v)$. [given, F1, step 2.1, algebra] ∎
