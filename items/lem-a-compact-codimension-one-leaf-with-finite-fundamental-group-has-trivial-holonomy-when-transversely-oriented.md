---
id: lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented
kind: lemma
title: "In a transversely oriented codimension-one foliation a compact leaf with finite fundamental group has trivial holonomy"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-germs-of-orientation-preserving-diffeomorphisms-of-the-line-at-zero-are-torsion-free, def-holonomy-representation-and-holonomy-group-of-a-leaf, def-transversely-oriented-codimension-one-foliation, def-local-transversal-to-a-regular-foliation, def-based-loops-and-fundamental-group, def-induced-homomorphism-on-fundamental-groups, def-compact-space, def-countable-choice-principle-for-foliation-pair, cor-trivial-holonomy-gives-a-product-foliated-neighbourhood, lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced Mathematics 91, 2003)"
      url: "https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016"
      locator: "Design locators: §2.3, pp. 30–33 (local Reeb stability; finite π₁ and co-orientation force trivial holonomy)"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.2, printed pp. 140–143 (one-dimensional transverse germs and torsion-freeness)"
dependency_level: 13
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a
transversely oriented codimension-one foliation of a smooth manifold $M$
([[def-transversely-oriented-codimension-one-foliation]]) and let $L$ be a
compact leaf with finite fundamental group
([[def-based-loops-and-fundamental-group]]). Then the holonomy group of $L$ is
trivial, and consequently $L$ has a fundamental system of product foliated
neighbourhoods $L\times D$ and every leaf in such a neighbourhood is compact
and diffeomorphic to $L$.

## Facts & Assumptions

**Given:** A transversely oriented codimension-one foliation $F$ of a smooth manifold $M$ and a compact leaf $L$ with finite $\pi_1(L,x)$.

[F1] A local transversal $T$ to a codimension-one foliation at $x\in L$ is one-dimensional; transverse orientability orients it, and the holonomy representation $\rho_x$ takes values in the germs of orientation-preserving local diffeomorphisms of $(\mathbb R,0)$, that is, in $\operatorname{Diff}^+_0(\mathbb R,0)$ ([[def-transversely-oriented-codimension-one-foliation]], [[def-local-transversal-to-a-regular-foliation]], [[def-holonomy-representation-and-holonomy-group-of-a-leaf]]).

[F2] Every finite subgroup of $\operatorname{Diff}^+_0(\mathbb R,0)$ is trivial; equivalently the group of orientation-preserving one-dimensional germs is torsion-free ([[lem-germs-of-orientation-preserving-diffeomorphisms-of-the-line-at-zero-are-torsion-free]]).

[F3] The image of a finite group under a homomorphism is finite ([[lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite]]).

[F4] Trivial holonomy on a compact leaf gives a fundamental system of product foliated neighbourhoods $L\times D$, whose leaves are compact and diffeomorphic to $L$ ([[cor-trivial-holonomy-gives-a-product-foliated-neighbourhood]]).

## Proof

**Proof technique:** direct.

1.1 (The holonomy group is finite.) The holonomy group is $H=\rho_x(\pi_1(L,x))$ [F1]. Since $\pi_1(L,x)$ is finite, its image $H$ is finite by [F3]. [F1, F3]

2.1 (It is trivial.) By [F1] the finite group $H$ is a subgroup of $\operatorname{Diff}^+_0(\mathbb R,0)$; by torsion-freeness [F2] every finite subgroup of that group is trivial, so $H$ is the trivial group. Hence the holonomy of $L$ is trivial. [F1, F2, step 1.1]

3.1 (Product neighbourhoods.) Since $L$ is compact and its holonomy is trivial, [F4] provides a fundamental system of saturated neighbourhoods foliated-diffeomorphically as products $L\times D$ with the product foliation; every leaf of such a neighbourhood is a slice, hence compact and diffeomorphic to $L$. [F4, step 2.1] ∎
