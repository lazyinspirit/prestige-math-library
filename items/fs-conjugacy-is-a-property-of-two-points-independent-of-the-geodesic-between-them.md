---
id: fs-conjugacy-is-a-property-of-two-points-independent-of-the-geodesic-between-them
kind: false-statement
title: Conjugacy is a property of two points independent of the geodesic between them
status: published
origin: pipeline
deps:
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - ex-great-circles-as-round-sphere-geodesics
  - thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field
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
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Proposition 5.13 and proof, printed pp.82-83 / PDF labels P98-99, lines 3427-3466."
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Lemma 10.8 and proof, printed pp.179-180 / PDF labels P195-196, lines 6974-7020."
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10 conjugacy definition and Proposition 10.11, printed pp.182-183 / PDF labels P198-199, lines 7169-7250."
---

## Statement

**False claim:** Whether two endpoints are conjugate is independent of the
specified geodesic segment joining them. On the unit round sphere $S^2$, the
point $p=(1,0,0)$ is conjugate to itself along a full great-circle loop, but is
not conjugate to itself along the constant segment.

## Facts & Assumptions

**Given:** The standard unit round sphere $S^2\subset\mathbb R^3$ and the
explicit parameter interval $[0,2\pi]$.

[F1] If $p,u\in S^2$ are orthonormal, then
$$t\longmapsto \cos(t)p+\sin(t)u$$
is an affinely parametrized geodesic; constant curves are also geodesics
([[ex-great-circles-as-round-sphere-geodesics]]).

[F2] For a smooth variation through affinely parametrized geodesics, its
variation field is a Jacobi field along the central geodesic
([[thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field]]).

[F3] For a specified geodesic segment $\eta:[a,b]\to M$ with $a<b$, the
endpoints are conjugate along $\eta$ exactly when there is a nonzero Jacobi
field vanishing at both endpoints
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F4] If the specified segment $\eta$ is constant, its endpoint-vanishing
Jacobi-field space is $\{0\}$, so its endpoints are not conjugate
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

## Refutation

1.1 Let $p=e_0=(1,0,0)$, $e_1=(0,1,0)$, $e_2=(0,0,1)$, and $u(s)=\cos(s)e_1+\sin(s)e_2$ for $-1<s<1$; then $p,u(s)$ are orthonormal for each $s$. [construct, algebra]
2.1 Define $F(s,t)=\cos(t)e_0+\sin(t)u(s)$ on $(-1,1)\times[0,2\pi]$. Orthonormality and $\cos^2t+\sin^2t=1$ give $|F(s,t)|=1$, so $F$ is a smooth map into $S^2$; by [F1], each longitudinal curve is a great-circle affine geodesic. Thus $F$ is a geodesic variation. [F1, step 1.1, algebra]
3.1 The central geodesic $\gamma(t)=F(0,t)=\cos(t)e_0+\sin(t)e_1$ has $\gamma(0)=\gamma(2\pi)=p$, and differentiating gives $J(t)=\partial_sF(0,t)=\sin(t)e_2$, with $J(0)=J(2\pi)=0$ and $J(\pi/2)=e_2\ne0$. By [F2], $J$ is Jacobi; [F3] makes the endpoints conjugate along this full loop. [F2, F3, step 2.1, algebra]
4.1 On the same interval let $\delta(t)=p$. By [F1] it is a constant geodesic with the same endpoints as $\gamma$, but [F4] says those endpoints are not conjugate along $\delta$; hence this endpoint pair has different conjugacy outcomes along the two segments. [F1, F4, step 3.1]
5.1 Since $0<2\pi$, the witness interval is nondegenerate; $J$ is smooth up to both included endpoints and has the displayed endpoint zeros, while its nonzero value in step 3.1 witnesses conjugacy. The fixed $S^2$ example needs no dimension-zero or dimension-one case, and its standard basis and variation are explicit, so neither AC nor $\mathrm{AC}_\omega$ is used; no iff is asserted. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Source locator

Lee, *Riemannian Manifolds*, Proposition 5.13 and its complete proof, printed
pp.82-83 / PDF labels P98-99, lines 3427-3466, identifies round-sphere
geodesics as great circles. The library's [[ex-great-circles-as-round-sphere-geodesics]]
derives the explicit all-time formula used here. Lee's Lemma 10.8 and proof,
printed pp.179-180 / PDF labels P195-196, lines 6974-7020, reduces normal
Jacobi fields on a constant-curvature geodesic to the sine equation. Lee's
Chapter 10 definition and Proposition 10.11, printed pp.182-183 / PDF labels
P198-199, lines 7169-7250, define conjugacy along a specified geodesic and
relate it to geodesic variations. Those passages do not compare the full-loop
segment with the constant segment; the explicit field and constant-geodesic
conclusion above are established from the cited library items.
