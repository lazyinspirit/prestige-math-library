---
id: lem-projective-regular-function-chart-compatibility
kind: lemma
title: "projective regular function chart compatibility"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-function-projective-variety, lem-standard-projective-opens-are-affine-spaces]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement

On overlapping standard charts, equal-degree fractions define the same regular function exactly when their cross-products agree in $S(X)$. Thus regularity is chart-independent.

## Proof

**Given:** Equal-degree fractions $G/H,G\prime/H\prime$ with denominators nonzero at a common point.

1.1 The intersection of the two charts with $D_+(HH\prime)\cap X$ contains the given point, so it is a nonempty open subset of the irreducible variety $X$. If the two evaluations agree on that overlap, the homogeneous cross difference $GH\prime-G\prime H$ vanishes there. Its zero locus is closed, and every nonempty open subset of an irreducible space is dense; hence the cross difference vanishes on all of $X$ and is zero in $S(X)$. Conversely, if $GH\prime=G\prime H$ in $S(X)$, evaluation and division by the nonzero product $HH\prime$ show that the fractions agree throughout their common domain. Equivalently, this is equality of the two fractions in $\operatorname{Frac}(S(X))$. [given, algebra]

2.1 Dehomogenization in either chart turns this into the same equality of ordinary affine fractions. [step 1.1, algebra]

3.1 Therefore the affine descriptions agree exactly as stated. [step 2.1] ∎
