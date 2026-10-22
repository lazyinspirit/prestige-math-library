---
id: lem-gr-fx-cauchy-slices-are-diffeomorphic
kind: lemma
title: "A complete temporal flow identifies smooth Cauchy slices"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: "A differential-topological statement about two smooth Cauchy hypersurfaces and a supplied complete timelike product flow; no field equation or empirical claim is involved."
deps:
  - def-gr-spacelike-hypersurfaces-and-cauchy-sets
  - def-gr-causal-curves-and-reachability
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - thm-smooth-inverse-function-theorem-on-manifolds
dependency_roles:
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-diffeomorphism-and-local-diffeomorphism-of-manifolds: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, arXiv:1901.03928v6 (2023), §5.6, latest v6 PDF (107 pages)."
      url: "https://arxiv.org/pdf/1901.03928v6"
verification:
  precheck: pending
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold. Suppose a smooth three-manifold $S_0$ and a smooth diffeomorphism $\Psi:\mathbb R\times S_0\to M$ are supplied such that each curve $s\mapsto\Psi(s,z)$ is an inextendible future timelike curve and $\Psi(0,z)=z$. Let $\Sigma\subset M$ be a smooth spacelike Cauchy hypersurface, meaning that it is met exactly once by every inextendible causal curve. Then the second-coordinate projection
$$P:=\operatorname{pr}_{S_0}\circ\Psi^{-1}\big|_\Sigma:\Sigma\to S_0$$
is a diffeomorphism. In particular, $\Sigma$ and $S_0$ have the same connectedness and compactness properties.

## Statement references

[[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]

[[def-gr-causal-curves-and-reachability]]

[[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]

[[def-gr-smooth-lorentzian-objects]]

[[thm-smooth-inverse-function-theorem-on-manifolds]]

## Facts & Assumptions

**Given:** A complete timelike product flow $\Psi$ as in the Statement and a smooth spacelike Cauchy hypersurface $\Sigma$.

[F1] The map $\Psi$ is a diffeomorphism, each $s$-curve is an inextendible future timelike curve, and $\Psi(0,z)=z$; these are the explicit product-flow hypotheses. In [[def-gr-causal-curves-and-reachability]], timelikeness of a curve requires a future timelike velocity almost everywhere.

[F2] [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]: a Cauchy hypersurface meets every inextendible causal curve exactly once, and a smooth spacelike hypersurface has a three-dimensional positive-definite tangent space at each point.

[F3] [[thm-smooth-inverse-function-theorem-on-manifolds]]: a smooth map with an isomorphism as differential at a point restricts to a diffeomorphism on suitable open neighborhoods.

[F4] Write $V(s,z)=d\Psi_{(s,z)}(\partial_s)$. It is nonzero because $d\Psi$ is invertible. For each fixed $z$, the smooth function $s\mapsto g(V(s,z),V(s,z))$ is negative almost everywhere by [F1], hence is nonpositive everywhere: a positive value would, by continuity, give a positive value on an interval of positive measure. Thus every nonzero vector in the orbit tangent line has nonpositive squared norm, whereas [F2] gives positive squared norm for every nonzero vector tangent to $\Sigma$. Their intersection is therefore $0$, even at an exceptional null orbit tangent.

## Proof

**Given:** [F1]–[F4].

1.1 For each $z\in S_0$, the orbit $s\mapsto\Psi(s,z)$ is an inextendible timelike curve, so [F2] says it meets $\Sigma$ in exactly one point. Define $P(p)$ by writing $\Psi^{-1}(p)=(s,z)$ and setting $P(p)=z$. Every $z$ occurs because its orbit meets $\Sigma$, and if $P(p)=P(q)$ then $p,q$ lie on the same orbit, which meets $\Sigma$ only once; hence $P$ is bijective. [F1, F2, given, construct]

1.2 The map $P$ is smooth because it is the restriction of the smooth map $\operatorname{pr}_{S_0}\circ\Psi^{-1}$ to the embedded submanifold $\Sigma$. [F1, given]

1.3 At $p=\Psi(s,z)\in\Sigma$, the kernel of $d(\operatorname{pr}_{S_0}\circ\Psi^{-1})_p$ is the one-dimensional tangent to the $s$-orbit. If $v\in T_p\Sigma$ is in the kernel, then $v$ lies in that orbit tangent line and is tangent to the spacelike hypersurface. By [F4], $v=0$. Since both tangent spaces have dimension three, $dP_p:T_p\Sigma\to T_zS_0$ is an isomorphism. [F1, F2, F4, given, algebra]

2.1 By [F3], $P$ is a local diffeomorphism at every point. It is already a bijection by step 1.1, so its local smooth inverses agree with the unique set-theoretic inverse $P^{-1}$ on their domains; these neighborhoods cover $S_0$, proving that $P^{-1}$ is smooth. Thus $P$ is a diffeomorphism. [F3, step 1.1, step 1.2, step 1.3] ∎
## Remarks

The proof uses the Cauchy property of $\Sigma$ to identify each flow orbit once, and spacelikeness to make the projection a local diffeomorphism. It does not assert that an arbitrary continuous Cauchy set is smoothly diffeomorphic to a chosen slice.
