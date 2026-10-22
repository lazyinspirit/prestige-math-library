---
id: lem-satellite-connected-sum-substitution
kind: lemma
title: "Satellite substitution across connected sum"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-knot-connected-sum-and-prime-knot
  - def-satellite-induced-concordance-operator
  - def-satellite-pattern-companion-and-winding-number
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: 'Tim D. Cochran, Christopher W. Davis, and Arunima Ray, "Injectivity of satellite operators in knot concordance"'
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "Lemma 2.4, satellite of a connected sum"
    - title: 'Charles Livingston, "A Survey of Classical Knot Concordance"'
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§9, satellite conventions"
---

## Statement

Let P be a pattern and let K be a knot. Form a pattern P_K by tying K into a small arc of P in a ball disjoint from the solid-torus core, using the zero framing. For every knot J, the satellite P(K#J) is isotopic as an oriented knot to P_K(J). The pattern P_K has the same winding number as P.

## Statement references

[CDR, Lemma 2.4](https://arxiv.org/pdf/1205.5058v3)

[Livingston, §9](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf)

## Facts & Assumptions

**Given:** A pattern P and oriented knots K,J, with connected sum and all satellite embeddings using the zero-framing convention.

[F1] A satellite is obtained by applying the fixed pattern inside the zero-framed tubular neighborhood of its companion ([[def-satellite-induced-concordance-operator]]).

[F2] Connected sum is formed by deleting oriented arcs and joining their endpoints with a band, with the preferred framings matched ([[def-knot-connected-sum-and-prime-knot]]).

[F3] Pattern winding is the algebraic coefficient of the solid-torus core ([[def-satellite-pattern-companion-and-winding-number]]).

## Proof

1.1 Represent K#J by placing K and J in disjoint 3-balls and joining the removed arcs by a product band. Choose the zero-framed tubular neighborhood so its meridian and preferred longitude restrict to the corresponding meridians and longitudes on both sides of the separating sphere. [F1, F2, given]

2.1 Insert P into that neighborhood and cut along the separating sphere. Inside the K-ball the inserted tangle is exactly the arc of P with K tied into it, which is the pattern P_K. The remaining J-ball is the companion neighborhood for P_K(J). Gluing along the separating annulus matches the same meridian and preferred longitude, so the two constructions are related by an orientation-preserving isotopy of the glued knots. [F1, F2, step 1.1]

3.1 Tying a local knot into an arc contained in a 3-ball does not change the homology class of P in the solid torus. Its core coefficient, and hence its winding number, is unchanged. This proves both claims. [F3, step 2.1, algebra] ∎

