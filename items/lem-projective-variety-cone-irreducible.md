---
id: lem-projective-variety-cone-irreducible
kind: lemma
title: "projective variety cone irreducible"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-cone-projective-set, lem-projective-irreducibility-homogeneous-prime, thm-affine-variety-prime-coordinate-ring]
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
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

The affine cone over a classical projective variety is irreducible.

## Proof

**Given:** A classical projective variety $X$.

1.1 $I_+(X)$ is prime. [given]

2.1 The cone coordinate ring is $k[x_0,\ldots,x_n]/I_+(X)$ and is therefore a domain. [step 1.1, algebra]

3.1 The affine prime-coordinate-ring criterion makes $C(X)$ irreducible. [step 2.1] ∎
