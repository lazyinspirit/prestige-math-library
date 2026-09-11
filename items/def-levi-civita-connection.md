---
id: def-levi-civita-connection
kind: definition
title: "Levi civita connection"
status: draft
origin: pipeline
deps: ["def-affine-connection-on-a-smooth-manifold","def-metric-compatible-connection-on-a-riemannian-vector-bundle","def-torsion-tensor-of-an-affine-connection"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Definition

For a supplied Riemannian metric $g$, a **Levi–Civita connection** is an affine connection on $TM$ that is both metric compatible and torsion free, in the senses of [[def-affine-connection-on-a-smooth-manifold]], [[def-metric-compatible-connection-on-a-riemannian-vector-bundle]] and [[def-torsion-tensor-of-an-affine-connection]]. Thus for all local fields
$$Xg(Y,Z)=g(\nabla_XY,Z)+g(Y,\nabla_XZ),\qquad \nabla_XY-\nabla_YX=[X,Y].$$
Existence and uniqueness are proved below from the supplied metric by the Koszul formula. This definition does not choose an arbitrary connection first and does not assume the general connection-existence theorem. In dimension zero the unique tangent-bundle connection satisfies both identities; in dimension one torsion freeness alone imposes no restriction, so metric compatibility remains essential.
