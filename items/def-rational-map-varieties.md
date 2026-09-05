---
id: def-rational-map-varieties
kind: definition
title: "Rational maps between irreducible classical affine varieties"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-affine-open-subset-classical-variety, def-morphism-classical-varieties, lem-density-nonempty-open-affine-variety]
justified_by: [lem-rational-map-equivalence-transitive]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, paragraph before Proposition 5.38"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, paragraph before Example 3.2.3"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: n/a
---

## Definition

Let $X$ and $Y$ be classical affine varieties. A **rational map**
$$ X \dashrightarrow Y $$
is an equivalence class of morphisms $\varphi:U \to Y$ whose source
$U \subseteq X$ is a nonempty affine open subset.

Two representatives $\varphi:U \to Y$ and $\psi:V \to Y$ are equivalent when
there exists a nonempty affine open subset $W \subseteq U \cap V$ such that
$$ \varphi|_W=\psi|_W. $$

The transitivity needed for this equivalence relation is discharged by
[[lem-rational-map-equivalence-transitive]].
