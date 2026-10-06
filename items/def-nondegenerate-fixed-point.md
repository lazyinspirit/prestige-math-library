---
id: def-nondegenerate-fixed-point
kind: definition
title: "Nondegenerate fixed point"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-manifold, def-differential-of-a-smooth-map, def-linear-isomorphism-and-invertible-linear-map, thm-smooth-inverse-function-theorem-on-manifolds]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed pp. 120-121 (the Lefschetz condition: df_x-I an isomorphism; Lefschetz points are isolated)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "Lecture 17, printed p. 54 (a fixed point is nondegenerate if the graph is transverse to the diagonal at it; sign(x)=sign det(I-df))"
dependency_level: 0
---

## Definition

Let $M$ be a smooth $n$-manifold and let $f:M\to M$ be a smooth map with a
fixed point $x$; identify $T_{f(x)}M$ with $T_xM$ along $f(x)=x$, so that the
differential is an endomorphism $Df_x:T_xM\to T_xM$
([[def-differential-of-a-smooth-map]]). The fixed point $x$ is **nondegenerate**
when $I-Df_x$ is an isomorphism of $T_xM$
([[def-linear-isomorphism-and-invertible-linear-map]]), equivalently when $1$
is not an eigenvalue of $Df_x$. A nondegenerate fixed point is isolated: in a
chart at $x$ the displacement $u\mapsto u-\widehat f(u)$ has invertible
derivative $I-D\widehat f(0)$ at $u=0$, hence is a local diffeomorphism near $0$
([[thm-smooth-inverse-function-theorem-on-manifolds]]) with the unique zero $0$
there, so a neighbourhood of $x$ contains no other fixed point. No choice
principle is used, and $n=0$ is allowed (then $I-Df_x$ is an isomorphism of the
zero space and the condition is vacuous).

## Remarks

- **Convention.** The condition is written $I-Df_x$, not $Df_x-I$; whether
  $1$ is an eigenvalue of $Df_x$ is insensitive to the order, since
  $\det(I-Df_x)=(-1)^n\det(Df_x-I)$ for an $n$-dimensional $T_xM$ and a
  determinant is nonzero exactly when the endomorphism is invertible. The sign
  matters for the *value* of the local index, not for nondegeneracy; see
  [[def-local-fixed-point-index]] and
  [[thm-index-of-a-nondegenerate-fixed-point]].
- **The two readings agree with graph transversality.** The equivalence of the
  algebraic condition with transversality of the graph of $f$ to the diagonal
  of $M\times M$ at $(x,x)$ is
  [[lem-graph-transversality-is-fixed-point-nondegeneracy]], and it is what
  brings nondegenerate fixed points under the intersection theory of the
  ambient manifold. Neither statement uses an orientation of $M$.
