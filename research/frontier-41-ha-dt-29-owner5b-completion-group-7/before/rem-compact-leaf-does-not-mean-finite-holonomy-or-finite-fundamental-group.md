---
id: rem-compact-leaf-does-not-mean-finite-holonomy-or-finite-fundamental-group
kind: remark
title: "A compact leaf neither has finite holonomy nor finite fundamental group automatically"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf, cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis, def-holonomy-representation-and-holonomy-group-of-a-leaf, def-two-dimensional-torus, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
sources:
  scraped: []
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
      locator: "§2.1–§2.2, printed pp. 11–15 (the Reeb component and product foliations)"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.3, Example 4.7, printed pp. 144–145 (the Reeb component)"
dependency_level: 14
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). The hypotheses
"compact leaf", "finite holonomy" and "finite fundamental group" are pairwise
distinct for compact leaves.

The boundary torus of the Reeb foliation of the solid torus
([[prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf]],
[[def-two-dimensional-torus]]) is compact but has infinite holonomy and
infinite fundamental group, and it is not stable, so compactness of the leaf
does not imply finiteness of the holonomy group. Conversely a leaf of a product
foliation $L\times S^1$ by the slices is compact with trivial holonomy for
every closed $L$, including $L=T^2$ with infinite fundamental group, so
compactness alone neither implies finite holonomy nor guarantees stability, and
"finite holonomy" is strictly weaker than "finite fundamental group"
([[cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis]]).

## Remarks

- **The Reeb example.** In the Reeb component the holonomy of the loop in the
  $S^1$-factor is a non-identity contraction germ
  ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]), so the
  compact boundary leaf has infinite holonomy; the interior leaves are planes
  accumulating on it, so it is not stable either. No finiteness of holonomy is
  available for free.

- **The product example.** For the product foliation of $L\times S^1$ the
  leafwise transport in product coordinates is the identity, so every leaf has
  trivial holonomy regardless of $\pi_1(L)$; taking $L=T^2$ exhibits a compact
  leaf with infinite fundamental group and finite (indeed trivial) holonomy.

- **The exact hypothesis.** The local Reeb stability theorem of this pair is
  stated with the hypothesis it actually consumes, finiteness of the holonomy
  group of the compact leaf; finiteness of $\pi_1(L)$ is a sufficient condition
  for that hypothesis and not a necessary one.
