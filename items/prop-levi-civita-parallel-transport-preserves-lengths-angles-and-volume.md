---
id: prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
kind: proposition
title: "Levi civita parallel transport preserves lengths angles and volume"
status: published
origin: pipeline
deps: ["thm-fundamental-theorem-of-riemannian-geometry","prop-a-connection-is-metric-compatible-iff-parallel-transport-is-isometric","def-riemannian-volume-density","def-riemannian-volume-form-on-an-oriented-manifold"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
verification:
  audited: 2026-09-12
---

## Statement

Levi–Civita parallel transport preserves inner products, lengths, angles of nonzero vectors, and Riemannian volume density. If the manifold is oriented, it also preserves its oriented Riemannian volume form. Without a supplied global orientation only density preservation is claimed.

## Facts & Assumptions

**Given:** A Riemannian manifold and a piecewise smooth curve on a compact interval.

[F1] Levi–Civita is metric compatible ([[thm-fundamental-theorem-of-riemannian-geometry]]).

[F2] Metric compatibility is equivalent to isometric parallel transport ([[prop-a-connection-is-metric-compatible-iff-parallel-transport-is-isometric]]).

[F3] The Riemannian density has coefficient $\sqrt{\det G}$, with empty determinant one ([[def-riemannian-volume-density]]).

[F4] The oriented volume form has that coefficient in positive charts; in dimension zero it is the orientation sign ([[def-riemannian-volume-form-on-an-oriented-manifold]]).

## Proof

1.1 By compatibility and [F2], transport preserves $g(v,w)$. In particular it preserves $|v|=\sqrt{g(v,v)}$, and for nonzero $v,w$ it preserves their angle, defined by the cosine $g(v,w)/(|v||w|)$. Nonzero vectors remain nonzero because transport is an isometry. No angle is asserted for a zero vector. [F1, F2]

2.1 For $n$ vectors with coordinate-column matrix $V$, the squared density value is $(\det V)^2\det G=\det(V^TGV)$ by determinant multiplicativity. It is therefore the Gram determinant of their pairings. Step 1.1 preserves this matrix and hence its nonnegative square root, proving density preservation for independent and dependent tuples alike. [F3, step 1.1]

3.1 On an oriented positive-dimensional manifold, transport any one basis along the curve. Its Gram determinant is constant and positive. Evaluation of the smooth volume form on this continuous piecewise smooth frame is continuous and, by step 2.1, has constant nonzero absolute value. It cannot change sign on an interval, so its initial and final values coincide. Multilinearity then proves preservation on every tuple. Reversing the chosen global orientation negates both endpoint forms. In dimension zero the curve is constant because the base is discrete, so the supplied orientation sign is unchanged and density is one. Empty manifolds have no curves; singleton curves give identity transport. Only one finite basis is used, not an arbitrary family of bases. [F4, step 2.1] ∎
