---
id: cex-nilpotent-polynomial-data-invisible-to-zero-locus
kind: counterexample
title: "The ideals (x) and (x^2) have the same zero locus but different quotient rings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-coordinate-ring-affine-algebraic-set
  - lem-zero-locus-ideal-closure
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Aside 2.24"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, radical-ideal discussion"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Statement refuted

The underlying zero locus of an ideal determines the same quotient ring as the
ideal itself.

## Example

In $k[x]$, the ideals $(x)$ and $(x^2)$ cut out the same point set because
[[lem-zero-locus-ideal-closure]] gives
$$ V(x)=V(x^2). $$

The quotient rings are nevertheless different:
$$ k[x]/(x)\cong k $$
is reduced, while in
$$ k[x]/(x^2) $$
the class $\overline x$ is nonzero and satisfies $\overline x^{\,2}=0$. So the
second quotient remembers a nilpotent thickening that the common zero locus does
not see. This refutes the statement.
