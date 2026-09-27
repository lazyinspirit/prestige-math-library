---
id: def-torsion-tensor-of-an-affine-connection
kind: definition
title: "Torsion tensor of an affine connection"
status: published
origin: pipeline
deps: ["def-affine-connection-on-a-smooth-manifold","prop-coordinate-formula-for-the-lie-bracket"]
justified_by: [lem-torsion-is-c-infinity-bilinear-and-skew-symmetric]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
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

For an affine connection, define its **torsion** on local vector fields by
$$T(X,Y)=\nabla_XY-\nabla_YX-[X,Y].$$
The connection is as in [[def-affine-connection-on-a-smooth-manifold]], and the bracket is the smooth vector field given by [[prop-coordinate-formula-for-the-lie-bracket]]. The next lemma proves this operation is a smooth alternating tangent-valued two-tensor. It is called **torsion free** when $T(X,Y)=0$ for all local fields.

This construction uses the tangent bundle: general bundle sections have no Lie bracket with which to form this difference. In dimension zero all terms vanish. Smooth fields on a manifold with boundary need not be boundary-tangent; bracket and covariant derivative use smooth coordinate derivatives there as well.
