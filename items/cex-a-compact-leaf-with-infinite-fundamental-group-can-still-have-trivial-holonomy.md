---
id: cex-a-compact-leaf-with-infinite-fundamental-group-can-still-have-trivial-holonomy
kind: counterexample
title: "A compact leaf with infinite fundamental group can still have trivial holonomy"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis, cor-trivial-holonomy-gives-a-product-foliated-neighbourhood, def-two-dimensional-torus, cor-fundamental-group-of-two-dimensional-torus, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-holonomy-representation-and-holonomy-group-of-a-leaf, def-based-loops-and-fundamental-group, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
      locator: "§2.1–§2.2, printed pp. 11–15 (product foliations and trivial holonomy)"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.2, printed pp. 140–143 (trivial transverse transport in product foliations)"
dependency_level: 14
---

## Statement refuted

A compact leaf has finite fundamental group exactly when it has finite
holonomy, so the finiteness of the holonomy group in Reeb stability is
equivalent to finiteness of the fundamental group of the leaf.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]). The product foliation of $M=T^2\times S^1$ by the tori $L_\theta=T^2\times\{\theta\}$.

[F1] The product $T^2\times S^1$ carries the canonical product smooth structure and the product foliation by the slices, whose leaves are the maximal connected integral manifolds of the kernel of $d\theta$ ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-two-dimensional-torus]]).

[F2] The fundamental group of the two-dimensional torus is $\mathbb Z^2$, hence infinite ([[cor-fundamental-group-of-two-dimensional-torus]], [[def-based-loops-and-fundamental-group]]).

[F3] The holonomy of a leaf is the image of the holonomy representation defined by transverse transport along leafwise loops; in a product foliation the leafwise transport in product coordinates is the identity ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]).

[F4] A compact leaf with trivial holonomy has a fundamental system of product foliated neighbourhoods, so it is stable, and finiteness of $\pi_1$ is sufficient but not necessary for stability ([[cor-trivial-holonomy-gives-a-product-foliated-neighbourhood]], [[cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis]]).

## Counterexample

**Proof technique:** direct verification.

1.1 (The leaves and their fundamental groups.) The slices $T^2\times\{\theta\}$ are the leaves of the product foliation, each compact and diffeomorphic to $T^2$ [F1]; the fundamental group of every leaf is $\pi_1(T^2)\cong\mathbb Z^2$, which is infinite [F2]. [F1, F2]

1.2 (Trivial holonomy.) A local transversal is a vertical circle segment $\{p\}\times(-\varepsilon,\varepsilon)$, and the leafwise transport in product coordinates is the identity because the second coordinate is constant on the slices; hence the holonomy representation of every leaf is trivial [F3]. [F1, F3]

2.1 (Stability and what this refutes.) Since the leaves are compact with trivial holonomy, [F4] gives a fundamental system of saturated product foliated neighbourhoods $T^2\times(-\varepsilon,\varepsilon)$ of every leaf, so every leaf is stable, while its fundamental group is infinite. Hence a compact leaf can have trivial (in particular finite) holonomy and be stable although its fundamental group is infinite, so finiteness of the fundamental group is not equivalent to finiteness of holonomy and is not necessary for stability. [F3, F4, step 1.1, step 1.2] ∎
