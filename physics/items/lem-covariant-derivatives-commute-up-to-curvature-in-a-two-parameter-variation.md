---
id: lem-covariant-derivatives-commute-up-to-curvature-in-a-two-parameter-variation
kind: lemma
title: Covariant derivatives commute up to curvature in a two parameter variation
status: published
origin: pipeline
deps:
  - def-geodesic-variation
  - def-curvature-of-an-affine-connection
  - def-covariant-derivative-along-a-curve
  - lem-curvature-is-c-infinity-linear-in-all-three-vector-fields
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Lemma 10.1"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025), Lectures 21–24"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

Use the curvature convention
$$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z.$$
Let $F$ be a smooth two-parameter variation (in particular, it may be the
geodesic variation of [[def-geodesic-variation]]) and let $V$ be a smooth
vector field along $F$. Write $D_s,D_t$ for covariant differentiation along
the two parameter curves. Then
$$D_sD_tV-D_tD_sV=R(F_s,F_t)V.$$
The identity holds on the parameter interior and extends to included endpoints
by the smooth one-sided derivatives. It does not require the longitudinal
curves of $F$ to be geodesic.

## Facts & Assumptions

**Given:** A smooth map $F$ from a parameter rectangle to a manifold with an
affine connection, and a smooth section $V$ along $F$.

[F1] The parameter derivatives and smooth variation field have the meaning in
[[def-geodesic-variation]].

[F2] Covariant differentiation along a parameter curve is the induced
connection derivative, as in
[[def-covariant-derivative-along-a-curve]].

[F3] Curvature is the bracket-corrected commutator
[[def-curvature-of-an-affine-connection]].

[F4] Curvature is $C^\infty$-linear in its three vector-field slots by
[[lem-curvature-is-c-infinity-linear-in-all-three-vector-fields]].

## Proof

**Proof technique:** direct coordinate computation.

1.1 Fix any point in the parameter rectangle and choose a target coordinate chart near its image. Write $F=(x^a(s,t))$, $V=V^i(s,t)\partial_i$, $S=F_s$, and $T=F_t$; by [F2], $D_tV=(\partial_tV^i)\partial_i+V^iD_t\partial_i$ and $D_sV=(\partial_sV^i)\partial_i+V^iD_s\partial_i$. This is a local calculation, with no frame chosen over the whole rectangle. [F1, F2, given]

1.2 Expand the two iterated derivatives using those coordinate formulas: the mixed ordinary derivatives of $V^i$ and the two cross terms cancel, leaving $D_sD_tV-D_tD_sV=V^i(D_sD_t\partial_i-D_tD_s\partial_i)$. Since $D_t\partial_i=F_t^j\nabla_{\partial_j}\partial_i$ and $D_s\partial_i=F_s^k\nabla_{\partial_k}\partial_i$, equality of the mixed partials of $F$ cancels the derivatives of $F_s,F_t$, leaving $F_s^kF_t^jV^i(\nabla_{\partial_k}\nabla_{\partial_j}-\nabla_{\partial_j}\nabla_{\partial_k})\partial_i$. [F2, given]

2.1 Coordinate fields commute, so $[\partial_k,\partial_j]=0$; by [F3] the remaining expression is $F_s^kF_t^jV^iR(\partial_k,\partial_j)\partial_i$, and [F4] identifies it with $R(F_s,F_t)V$. Thus the identity holds in each local chart and on overlaps because both sides are intrinsically defined. [F3, F4, step 1.2]

3.1 Smoothness to the parameter boundary extends the identity there by one-sided limits; the empty manifold has no given map $F$. If $V=0$, both sides vanish; in dimension zero every field along $F$ is zero, and in dimension one the calculation applies with curvature zero because its first two slots are alternating. Only a chart near an arbitrary point is used, so no choice principle is needed; the claim is an identity, not a biconditional. [F1, F2, F3, step 2.1] $\square$
