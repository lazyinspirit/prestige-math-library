---
id: lem-author-b02e51f9da03-trivial-chern
kind: lemma
title: The actual Chern series of a trivial bundle is the unit
status: draft
domain: mathematics
deps:
  - prop-chern-whitney-identities
  - lem-author-4f94f7982b0d-actual-whitney
  - def-motivic-chern-classes
  - math:def-chern-classes-of-a-vector-bundle
  - math:lem-operational-chern-classes-and-whitney-formula
  - math:def-axiom-of-choice
dependency_roles:
  prop-chern-whitney-identities: mathematical-premise
  lem-author-4f94f7982b0d-actual-whitney: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  math:def-chern-classes-of-a-vector-bundle: mathematical-premise
  math:lem-operational-chern-classes-and-whitney-formula: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 21
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied motivic Chern constructions. For every $m\geq0$, the actual total motivic Chern series of the trivial bundle on a qcqs scheme over a field is $c_t(\mathcal O_X^m)=1$. On a smooth equidimensional finite-type scheme the same identity holds for the ordinary integral Chow Chern series. These statements refer to the actual projective-relation classes and their Whitney formulas. A formal variable $t$ records degree, so $c_t(V)=1+\sum_{i\geq1}c_i(V)t^i$.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and the stated compatible site and universe bounds. These are inherited from the actual motivic Chern and Whitney suppliers when they are applied below; their finite direct-sum and coefficient calculations add no further choice principle.


**Given:** The data and hypotheses in the statement, AC and the stated compatible site and universe bounds for the actual motivic constructions.

**Goal:** Establish the stated conclusion.

[F1] The completed actual motivic Whitney formula and additive first-Chern orientation hold for these classes; a line has no higher classes and $c_t(0)=1$. [[prop-chern-whitney-identities]], [[lem-author-4f94f7982b0d-actual-whitney]], [[def-motivic-chern-classes]]

[F2] The ordinary Chow classes have zero positive Chern classes for a trivial line, obey Whitney, and have $c_t(0)=1$. [[math:def-chern-classes-of-a-vector-bundle]], [[math:lem-operational-chern-classes-and-whitney-formula]]

## Proof

1.1 For the motivic trivial line, tensor-additivity gives $c_1(\mathcal O_X)=c_1(\mathcal O_X\otimes\mathcal O_X)=2c_1(\mathcal O_X)$. Subtracting in its coefficient group yields zero. Higher line classes vanish, so its total series is 1. The ordinary Chow trivial line has the same unit series by [F2]. [A1, F1, F2, algebra]

2.1 For $m>0$, apply the respective actual direct-sum Whitney formula to the $m$ trivial line summands. The product is $1^m=1$. For $m=0$ the zero-bundle convention gives the same result. Thus both assertions include all finite stabilizations. [A1, F1, F2, step 1.1] ∎
