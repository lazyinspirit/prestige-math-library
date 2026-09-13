---
id: def-curvature-of-a-vector-bundle-connection
kind: definition
title: Curvature of a vector-bundle connection
status: published
origin: pipeline
deps: ["def-connection-on-a-smooth-vector-bundle", "def-lie-bracket-of-smooth-vector-fields"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Will J. Merry, Differential Geometry (2021)
      url: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf
      locator: Lecture 35, curvature of a connection
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 6, Section 6.1, printed pages 37–39
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $E\to M$ be a smooth vector bundle with connection $\nabla$. For smooth
vector fields $X,Y$ and a smooth section $s$ of $E$, the **curvature of
$\nabla$** is

$$R^\nabla(X,Y)s:=\nabla_X\nabla_Ys-\nabla_Y\nabla_Xs-\nabla_{[X,Y]}s.$$

This uses the same sign convention as the curvature of an affine connection.
The next proposition proves that this operator is tensorial and hence is an
$\operatorname{End}(E)$-valued two-form. At this definition stage no metric,
torsion, or bundle trivialization is assumed.

If $M$ is empty, $E$ has rank zero, or $M$ has dimension zero, the displayed
operator is the unique zero curvature operator. For a rank-one bundle and for
a manifold with boundary the same local formula applies without modification.
