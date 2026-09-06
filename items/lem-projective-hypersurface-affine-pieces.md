---
id: lem-projective-hypersurface-affine-pieces
kind: lemma
title: "projective hypersurface affine pieces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-degree-projective-hypersurface, lem-standard-projective-opens-are-affine-spaces, lem-homogenization-dehomogenization-correspondence]
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

If $X=V_+(F)$, then $X\cap D_+(x_i)$ is the affine hypersurface obtained by setting $x_i=1$ in $F$, with the usual ratio-coordinate transition formulas.

## Proof

**Given:** A homogeneous polynomial $F$ and an index $i$.

1.1 Normalize a point of $D_+(x_i)$ by $x_i=1$; $F$ vanishes exactly when the dehomogenized equation vanishes. [given, algebra]

2.1 The chart normalization therefore identifies $X\cap D_+(x_i)$ with that affine hypersurface. [step 1.1]

3.1 On overlaps the two normalizations differ by division by a nonzero coordinate, giving the stated transitions. [step 2.1, algebra] ∎
