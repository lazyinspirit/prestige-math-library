---
id: def-affine-connection-on-a-smooth-manifold
kind: definition
title: "Affine connection on a smooth manifold"
status: published
origin: pipeline
deps: ["def-connection-on-a-smooth-vector-bundle"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Definition

An **affine connection** on a smooth manifold $M$ is a connection on the tangent bundle $TM$ in the sense of [[def-connection-on-a-smooth-vector-bundle]]. Thus it assigns a vector field $\nabla_XY$ to two vector fields and is function-linear in the differentiating direction $X$, real-linear in $Y$, and obeys $\nabla_X(fY)=X(f)Y+f\nabla_XY$.

The word affine imposes neither a metric nor torsion freeness. The tangent-bundle specialization allows the Lie bracket of $X,Y$ to be compared with their covariant derivatives; there is no corresponding bracket on sections of a general vector bundle. Manifolds with boundary are allowed, and tangent vectors at their boundary need not be tangent to the boundary. The empty and zero-dimensional manifolds have the unique tangent-bundle connection.
