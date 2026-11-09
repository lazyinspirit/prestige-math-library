---
id: lem-author-394a5b71198d-split-vanishing
kind: lemma
title: A split trivial line annihilates the exterior and top Chow classes
status: published
domain: mathematics
deps:
  - lem-author-394a5b71198d-exterior-dual-interface
  - def-exterior-determinant-bundles
  - math:lem-operational-chern-classes-and-whitney-formula
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-394a5b71198d-exterior-dual-interface: mathematical-premise
  def-exterior-determinant-bundles: mathematical-premise
  math:lem-operational-chern-classes-and-whitney-formula: mathematical-premise
  math:def-chern-classes-of-a-vector-bundle: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 14
---

## Statement
Assume AC. Let $r\geq1$ and let $E\cong\mathcal O_X\oplus F$ be a rank-$r$ bundle on a noetherian affine scheme, with $F$ of rank $r-1$. Then $\varepsilon(E)=0$. If $X$ is smooth and equidimensional over a field, then also $c_r(E)=0$ in the ordinary integral Chow group $\mathrm{CH}^r(X)$.

## Facts & Assumptions

**Given:** The hypotheses and data in the statement, with AC and the article's fixed universes wherever perfect K-theory is used.

**Goal:** Establish the asserted conclusion.

[F1] The actual exterior-dual class is defined in [[lem-author-394a5b71198d-exterior-dual-interface]].

[F2] Exterior powers have their increasing-wedge bases. [[def-exterior-determinant-bundles]]

[F3] Whitney gives $c_t(E)=c_t(\mathcal O_X)c_t(F)=c_t(F)$, and Chern classes vanish above the rank. [[math:lem-operational-chern-classes-and-whitney-formula]], [[math:def-chern-classes-of-a-vector-bundle]]

## Proof

1.1 Dualize the splitting. For each $i$, exterior multiplication identifies $\Lambda^i(\mathcal O_X\oplus F^\vee)$ with $\Lambda^iF^\vee\oplus\Lambda^{i-1}F^\vee$, where nonexistent exterior degrees are zero: wedges either contain the chosen generator 1 of the trivial line or do not. The basis formula proves the identification locally and its naturality in $F$ glues it. In the finite alternating sum, each $[\Lambda^iF^\vee]$ occurs once with each opposite sign, so the total is zero. [F1, F2, algebra]

2.1 By [F3], $c_t(E)=c_t(F)$ and the rank-$(r-1)$ bundle $F$ has zero coefficient in degree $r$. Hence $c_r(E)=0$. This is the necessary direction for an actual splitting. [F3, step 1.1] ∎
