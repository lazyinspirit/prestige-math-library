---
id: cor-trivial-holonomy-gives-a-product-foliated-neighbourhood
kind: corollary
title: "Trivial holonomy gives a product foliated neighbourhood"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-local-reeb-stability, def-finite-holonomy-normal-model, def-holonomy-representation-and-holonomy-group-of-a-leaf, def-saturated-neighbourhood-of-a-leaf, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-countable-choice-principle-for-foliation-pair, def-holonomy-cover-of-a-leaf]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced Mathematics 91, 2003)"
      url: "https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016"
      locator: "Design locators: §2.3, pp. 30–33 (local Reeb stability; trivial-holonomy case)"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.2, printed pp. 140–143 (a leaf with trivial holonomy has a product neighbourhood)"
dependency_level: 12
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a regular
foliation and $L$ a compact leaf whose holonomy representation is trivial
(equivalently, whose holonomy group is the trivial group)
([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]). Then the
finite-holonomy normal model with $H=\{1\}$ is $\widehat L\times D$ with
$\widehat L=L$, and $L$ has arbitrarily small saturated neighbourhoods $U$
foliated-diffeomorphic to products $L\times D$ with the product foliation by
the slices $L\times\{t\}$. In particular every leaf of $F|_U$ is compact and
diffeomorphic to $L$, and $L$ has a fundamental system of product foliated
neighbourhoods.

## Facts & Assumptions

**Given:** A regular foliation $F$ and a compact leaf $L$ whose holonomy representation $\rho_x$ is trivial.

[F1] The holonomy cover $p:\widehat L\to L$ is the connected covering with $p_*\pi_1(\widehat L,\hat x)=\ker\rho_x$; when $\rho_x$ is trivial, $\ker\rho_x=\pi_1(L,x)$, so $p$ has degree one and $\widehat L=L$ ([[def-holonomy-cover-of-a-leaf]], [[def-holonomy-representation-and-holonomy-group-of-a-leaf]]).

[F2] The finite-holonomy normal model of $(L,T,D,H)$ is $(\widehat L\times D)/H$ with the diagonal action; for $H=\{1\}$ it is the product $L\times D$ with the product foliation by the slices, and the product carries its canonical product smooth structure ([[def-finite-holonomy-normal-model]], [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[F3] A compact leaf with finite holonomy is stable: every neighbourhood contains a saturated neighbourhood foliated-diffeomorphically onto a neighbourhood of the central leaf of the normal model ([[thm-local-reeb-stability]], [[def-saturated-neighbourhood-of-a-leaf]]).

[F4] A diffeomorphism of a neighbourhood of the central leaf onto a product $L\times D'$ restricts to the slices, which are diffeomorphic to $L$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 (The holonomy cover is trivial.) With $\rho_x$ trivial, the kernel is all of $\pi_1(L,x)$, so the covering $p:\widehat L\to L$ associated with the kernel has $p_*\pi_1(\widehat L,\hat x)=\pi_1(L,x)$; a covering of degree one is a diffeomorphism, and we identify $\widehat L=L$ [F1]. [F1]

2.1 (The model and the neighbourhood.) With $H=\{1\}$ the finite-holonomy normal model is the product $L\times D$ with the product foliation by slices [F2]. The local Reeb stability theorem applies because the holonomy group is finite (indeed trivial), and gives, for every neighbourhood $W$ of $L$, a saturated neighbourhood $U\subseteq W$ foliated-diffeomorphically onto a neighbourhood of the central leaf, which after shrinking $D$ is a product $L\times D'$ with the product foliation [F2, F3]. [F1, F2, F3, step 1.1]

3.1 (Fundamental system and leaves.) The product neighbourhoods $L\times D'$ for shrinking transverse disks $D'$ form a fundamental system of neighbourhoods of the central leaf, and each leaf of the product foliation is a slice $L\times\{t\}$, compact and diffeomorphic to $L$ [F2, F4]. Hence $L$ has a fundamental system of product foliated neighbourhoods whose leaves are compact and diffeomorphic to $L$. [F2, F3, F4, step 2.1] ∎
