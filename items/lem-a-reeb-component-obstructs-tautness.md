---
id: lem-a-reeb-component-obstructs-tautness
kind: lemma
title: A Reeb component obstructs tautness
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-reeb-component-in-a-cooriented-three-manifold-foliation
- prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf
- def-taut-codimension-one-foliation
- def-countable-choice-principle-for-foliation-pair
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 4
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: 'Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov''s Theorem
      (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)'
    url: https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf
    locator: §2.2, printed pp. 40-41
---

## Statement

Assume $\mathrm{AC}_\omega$. A cooriented codimension-one foliation of a closed oriented three-manifold containing a Reeb component is not taut. Thus every taut foliation is Reebless.

## Facts & Assumptions

**Given:** The foliation and Reeb component $R$ of the statement.

[F1] A Reeb component is a compact saturated solid-torus region with its connected boundary torus as a leaf ([[def-reeb-component-in-a-cooriented-three-manifold-foliation]], [[prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf]]).

[F2] Tautness requires an embedded closed transversal through every leaf ([[def-taut-codimension-one-foliation]]).

## Proof

1.1 Along the connected boundary torus the positive transverse direction is everywhere inward or everywhere outward: it is continuous, transverse to that leaf, and cannot change the sign of its boundary normal component. Reversing the direction chosen on a hypothetical transversal through that torus, if necessary, makes all its boundary crossings inward. [F1, given]

2.1 Each such crossing is isolated, and the compact parameter circle has only finitely many crossings. In a boundary defining coordinate every crossing goes from outside $R$ to inside $R$. A periodic curve with an entry must also have an exit; all crossings inward makes that impossible. Thus no closed transversal meets the boundary leaf, contradicting F2's condition for tautness. No accessible-set characterization or monotonicity across infinitely many interior leaves is needed. [F1, F2, step 1.1] ∎
