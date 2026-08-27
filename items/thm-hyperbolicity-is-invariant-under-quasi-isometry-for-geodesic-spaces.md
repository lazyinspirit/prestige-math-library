---
id: thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces
kind: theorem
title: "Hyperbolicity is a quasi-isometry invariant of geodesic spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarsely-dense-subset-and-quasi-isometry, thm-morse-stability-of-quasi-geodesics, thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.2.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.2"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Statement

If two geodesic metric spaces are quasi-isometric and one of them is
hyperbolic, then so is the other.

## Facts & Assumptions

**Given:** A quasi-isometry between geodesic metric spaces $X$ and $Y$.

[L1] Morse stability controls quasi-geodesics in hyperbolic spaces
([[thm-morse-stability-of-quasi-geodesics]]).

[A1] A quasi-isometry between geodesic spaces admits a quasi-inverse, and both maps send geodesic segments to uniform quasi-geodesics in the other space.

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is hyperbolic and let $f \colon X \to Y$ be the given quasi-isometry. By [A1], choose a quasi-inverse $g \colon Y \to X$. For any geodesic triangle in $Y$, the images of its sides under $g$ are uniform quasi-geodesics in $X$. [given, A1, choose]

2.1 Since $X$ is hyperbolic, [L1] shows that each of those quasi-geodesic sides stays within a bounded distance of a genuine geodesic triangle in $X$. Applying $f$ back to that comparison triangle produces a bounded-neighborhood comparison in $Y$, because $f$ is coarsely Lipschitz and $f \circ g$ stays uniformly close to the identity on $Y$. [L1, step 1.1, algebra]

3.1 Therefore geodesic triangles in $Y$ are uniformly slim, so $Y$ is hyperbolic. Reversing the roles of $X$ and $Y$ gives the converse. Hence hyperbolicity is a quasi-isometry invariant of geodesic spaces. [A1, step 2.1] ∎
