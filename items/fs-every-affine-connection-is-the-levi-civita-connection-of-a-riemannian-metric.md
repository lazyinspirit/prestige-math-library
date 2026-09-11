---
id: fs-every-affine-connection-is-the-levi-civita-connection-of-a-riemannian-metric
kind: false-statement
title: "Every affine connection is the levi civita connection of a riemannian metric"
status: published
origin: pipeline
deps: ["thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law","def-torsion-tensor-of-an-affine-connection","def-levi-civita-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
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

## Statement

Every affine connection is the Levi–Civita connection of some Riemannian metric.

## Facts & Assumptions

**Given:** The universal existence assertion for a compatible metric with Levi–Civita connection.

[F1] A smooth matrix of one-forms in a global tangent frame defines an affine connection ([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

[F2] Torsion is $T(X,Y)=\nabla_XY-\nabla_YX-[X,Y]$ ([[def-torsion-tensor-of-an-affine-connection]]).

[F3] A Levi–Civita connection must be torsion free ([[def-levi-civita-connection]]).

## Refutation

1.1 On $\mathbb R^2$ use frame $(\partial_x,\partial_y)$ and the matrix with sole nonzero entry $\omega^x{}_y=dx$. It defines a connection by [F1], with $\nabla_{\partial_x}\partial_y=\partial_x$ and all other coordinate derivatives zero. Coordinate fields commute, so [F2] gives $T(\partial_x,\partial_y)=\partial_x-0-0=\partial_x$. [F1, F2, given]

2.1 This vector is nonzero everywhere. Torsion depends on the connection and bracket, with no metric in its definition; changing a metric cannot change this value. Therefore [F3] excludes this connection from being Levi–Civita for every Riemannian metric on the plane, refuting the assertion. [F2, F3, step 1.1] ∎
