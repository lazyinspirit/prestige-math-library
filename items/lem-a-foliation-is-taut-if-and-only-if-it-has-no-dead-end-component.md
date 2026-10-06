---
id: lem-a-foliation-is-taut-if-and-only-if-it-has-no-dead-end-component
kind: lemma
title: A foliation is taut if and only if it has no dead-end component
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-countable-choice-principle-for-foliation-pair
- def-taut-codimension-one-foliation
- def-dead-end-component
- def-accessible-manifold-of-a-leaf
- lem-no-transversal-leaf-bounds-a-positive-accessibility-region-with-finite-inward-boundary
- lem-a-no-transversal-leaf-is-a-torus-via-the-finite-accessibility-boundary-sum
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 13
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.4, Definition 4.27 and Lemma 4.28 with proof, printed pp. 156-157
  - title: 'Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov''s Theorem
      (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)'
    url: https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf
    locator: §2.2, Lemma 2.5 and Propositions 2.7-2.8, printed pp. 36-41
---

## Statement

Assume $\mathrm{AC}_\omega$. A smooth cooriented codimension-one foliation of a closed manifold is taut if and only if it has no dead-end component with nonempty boundary. The assertion holds componentwise when the manifold is disconnected. The boundary of every such component is a finite union of compact leaves. In a closed oriented three-manifold, every boundary leaf is a torus.

## Facts & Assumptions

**Given:** The foliation and countable choice in the statement.

[F1] Tautness and dead-end regions are [[def-taut-codimension-one-foliation]] and [[def-dead-end-component]]; the latter requires nonempty boundary.

[F2] [[lem-no-transversal-leaf-bounds-a-positive-accessibility-region-with-finite-inward-boundary]] supplies the compact proper strict accessible region of any no-transversal leaf, its finite compact-leaf inward boundary, and the fact that every boundary leaf also meets no closed transversal. It also justifies [[def-accessible-manifold-of-a-leaf]].

[F3] In a closed oriented cooriented three-manifold, every leaf meeting no closed transversal is a torus, by the locally supplied finite Euler boundary-sum and spherical-stability argument in [[lem-a-no-transversal-leaf-is-a-torus-via-the-finite-accessibility-boundary-sum]].

## Proof

1.1 If a dead-end region $N$ exists, choose one boundary leaf. A hypothetical closed transversal through it can be oriented positively; its transverse direction then points inward at every boundary crossing. It enters $N$ but cannot exit, by the boundary defining-coordinate argument in F1. Boundary crossings are isolated and finite on the compact parameter circle; an entry with no exit contradicts periodicity. Therefore this boundary leaf meets no closed transversal, and the foliation is not taut. This uses a transversal through that leaf only, not a presumed transversal through every leaf. [F1, given]

1.2 Conversely, if the foliation is not taut, F1 gives a leaf meeting no closed transversal. F2 constructs its strict accessible closure $W$ as a compact proper region with nonempty finite compact-leaf boundary and inward positive directions. Thus $W$ is a dead-end region in the precise sense of F1. This argument works inside the ambient component of the chosen leaf and so also on a disconnected manifold. [F1, F2, given]

2.1 For an arbitrary dead-end region the same entry/exit argument of step 1.1 applies to every boundary leaf. Its boundary is a compact embedded manifold locally equal to one plaque, so a finite boundary-chart cover supplies finitely many compact leaves, as in F2. In dimension three with ambient orientation these are cooriented oriented surfaces, and F3 makes each one a torus. The proof therefore uses the finite local accessibility and Euler suppliers rather than invoking Goodman's argument or an unproved definition theorem. [F1, F2, F3, step 1.1, step 1.2] ∎
