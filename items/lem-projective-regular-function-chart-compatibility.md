---
id: lem-projective-regular-function-chart-compatibility
kind: lemma
title: "projective regular function chart compatibility"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-function-projective-variety, lem-standard-projective-opens-are-affine-spaces]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: pass
---

## Statement

On overlapping standard charts, equal-degree fractions define the same regular function exactly when their cross-products agree in $S(X)$. Thus regularity is chart-independent.

## Proof

**Given:** Equal-degree fractions $G/H,G\prime/H\prime$ with denominators nonzero at a common point.

1.1 $G/H=G\prime/H\prime$ is equivalent to $GH\prime=G\prime H$ after multiplying by the nonzero product $HH\prime$. [given, algebra]

2.1 Dehomogenization in either chart turns this into the same equality of ordinary affine fractions. [step 1.1, algebra]

3.1 Therefore the affine descriptions agree exactly as stated. [step 2.1] ∎
