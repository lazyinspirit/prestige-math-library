---
id: ex-reeb-foliation-of-s-three-is-not-taut
kind: example
title: "The Reeb foliation of the three-sphere is not taut"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-a-reeb-component-obstructs-tautness, prop-gluing-two-reeb-components-gives-a-foliation-of-s-three, prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf, def-taut-codimension-one-foliation, def-reeb-component-in-a-cooriented-three-manifold-foliation, def-two-dimensional-torus, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "\u00a74.3, printed pp. 144-145"
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a74, printed pp. 11-16"
    - title: "Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov's Theorem (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)"
      url: "https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf"
      locator: "\u00a72.2, printed pp. 40-41"
---

## Example

Assume Countable Choice $\mathrm{AC}_\omega$. The Reeb foliation $F_{\mathrm{Reeb}}$ of $S^3$, obtained by gluing two Reeb solid tori along their boundary tori ([[prop-gluing-two-reeb-components-gives-a-foliation-of-s-three]]), contains two Reeb components meeting along the single compact leaf, the Heegaard torus $T^2$. Consequently $F_{\mathrm{Reeb}}$ is not taut: the torus leaf is the boundary leaf of both Reeb components, and no closed transversal meets it. Every other leaf is a plane accumulating on the torus.

## Facts & Assumptions

**Given:** The Reeb foliation $F_{\mathrm{Reeb}}$ of $S^3$ obtained by gluing two Reeb solid tori along their boundary tori.

[F1] Gluing two Reeb components along their boundary tori gives a foliation of $S^3$ whose two solid tori are Reeb components with common boundary leaf the Heegaard torus ([[prop-gluing-two-reeb-components-gives-a-foliation-of-s-three]]); the standard Reeb foliation of the closed solid torus has the boundary as a single compact leaf diffeomorphic to $T^2$ and every interior leaf a plane accumulating on it ([[prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf]], [[def-two-dimensional-torus]]).

[F2] A Reeb component is a compact saturated solid torus foliated homeomorphically by the standard Reeb model whose boundary is a single compact leaf ([[def-reeb-component-in-a-cooriented-three-manifold-foliation]]), and a foliation containing a Reeb component is not taut ([[lem-a-reeb-component-obstructs-tautness]]).

[F3] A foliation is taut when every leaf meets a closed transversal ([[def-taut-codimension-one-foliation]]), and the standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Verification

**Proof technique:** direct.

1.1 The gluing proposition [F1] supplies the foliation and identifies the two solid tori as Reeb components with common boundary leaf the Heegaard torus, so the definition of a Reeb component is satisfied with the foliated homeomorphism supplied by the model. [F1, F2]

2.1 By [F2] a foliation containing a Reeb component is not taut, and concretely the accessible manifold of the torus leaf is not all of $S^3$: transverse curves crossing the torus into either solid torus are trapped by the accumulating plane leaves, so no closed transversal meets the torus leaf. Since tautness would require a closed transversal through that leaf, $F_{\mathrm{Reeb}}$ is not taut. [F2, F3, step 1.1]

3.1 This realises Ranz's statement that a foliated manifold containing a Reeb component is not taut in the standard example, verifying the obstruction and supplying the negative model dual to the fibre-foliation example; every other leaf is a plane accumulating on the torus, and the argument uses only the two solid-torus models and the obstruction, hence only the standing countable choice from [F3]. [F1, F3, step 2.1] ∎
