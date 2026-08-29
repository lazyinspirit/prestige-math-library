---
id: prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth
kind: proposition
title: "Restrictions, corestrictions, and products of smooth maps are smooth"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-identity-maps-and-composites-of-smooth-maps-are-smooth,
       prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth,
       prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth,
       prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure,
       prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $F:M\to N$ and $G:P\to Q$ be smooth maps of smooth manifolds.

1. If $U\subseteq M$ is open, with its restricted smooth structure, then the
   restriction $F|_U:U\to N$ is smooth.
2. If $W\subseteq N$ is open and $F[M]\subseteq W$, then the corestriction
   $F^W:M\to W$ is smooth for the restricted smooth structure on $W$.
3. The product map
   $$F\times G:M\times P\to N\times Q,\qquad (m,p)\mapsto(F(m),G(p)),$$
   is smooth for the canonical product smooth structures.

## Facts & Assumptions

**Given:** Smooth maps $F:M\to N$ and $G:P\to Q$ of smooth manifolds.

[F1] An open subset of a smooth manifold carries a canonical restricted smooth structure ([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]).

[F2] Identity maps and composites of smooth maps are smooth ([[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

[F3] A map into a product smooth manifold is smooth exactly when its component maps are smooth ([[prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth]]).

[F4] Products of smooth manifolds carry canonical product smooth structures ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

## Proof

**Proof technique:** direct.

1.1 Let $U\subseteq M$ be open. [F1, F2] By [F1] the subset $U$ is a smooth manifold, and the inclusion $j:U\to M$ has identity coordinate representative in restricted charts, hence is smooth. Since $F|_U=F\circ j$, [F2] makes $F|_U$ smooth. [F1, F2]

1.2 By [F4] the source and target products are smooth manifolds. [F2, F3, F4] The first component of $F\times G$ is $F\circ\pi_M$, and the second is $G\circ\pi_P$, where the projections are smooth in product charts because they are ordinary Euclidean coordinate projections. Hence [F2] makes both components smooth, and then [F3] makes $F\times G$ smooth. [F2, F3, F4]

2.1 Let $W\subseteq N$ be open and suppose $F[M]\subseteq W$. [F1, F2, step 1.1] By [F1] the subset $W$ is a smooth manifold, and the inclusion $i:W\to N$ is smooth by the same restricted-chart identity argument as in step 1.1. In charts of $W$ inherited from $N$, the corestriction $F^W:M\to W$ has exactly the same Euclidean representative as $F$, so it is smooth. [F1, F2, step 1.1]

3.1 Step 1.1 proves the restriction claim, step 2.1 proves the corestriction claim, and step 1.2 proves the product claim. [step 1.1, step 1.2, step 2.1] ∎
