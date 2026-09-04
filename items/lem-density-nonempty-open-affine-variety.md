---
id: lem-density-nonempty-open-affine-variety
kind: lemma
title: "Every nonempty open subset of an affine variety is dense"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-variety-classical, lem-irreducible-space-open-intersections]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 2g"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, irreducibility discussion in §1.5"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Statement

Let $X$ be a classical affine variety. Every nonempty open subset of $X$ is
dense in $X$.

## Facts & Assumptions

**Given:** A classical affine variety $X$ and a nonempty open subset $U\subseteq X$.

[L1] In a classical affine variety, irreducibility is equivalent to every pair of nonempty open subsets meeting, and also to every nonempty open subset being dense ([[lem-irreducible-space-open-intersections]]).

## Proof

**Proof technique:** direct.

1.1 Because $X$ is a classical affine variety, it is irreducible. By [L1], an irreducible space is one in which every nonempty open subset is dense. [L1, given]

2.1 Applying step 1.1 to the specific nonempty open subset $U$ shows that $U$ is dense in $X$. [step 1.1] ∎
