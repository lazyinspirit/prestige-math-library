---
id: thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point
kind: theorem
title: "Local stable and unstable manifolds at a Morse critical point"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-downward-gradient-like-vector-field, def-stable-and-unstable-sets-of-a-critical-point, def-nondegenerate-critical-point-nullity-index-and-coindex]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Proposition 13.8 and Theorem 13.9"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

Let $p$ be a critical point of index $\lambda$ of a Morse function on an
$n$-manifold, and let $X$ be downward gradient-like. In the Morse coordinates
of its definition, the local unstable and stable manifolds are respectively

$$ \{v=0\}\cong\mathbb R^\lambda,\qquad \{u=0\}\cong\mathbb R^{n-\lambda}. $$

After restricting to sufficiently small balls, they are embedded disks tangent
at $p$ to the negative and positive Hessian eigenspaces, respectively.

## Facts & Assumptions

**Given:** A Morse critical point $p$ of index $\lambda$ and a downward gradient-like field $X$.

[F1] In Morse coordinates $f=f(p)-|u|^2+|v|^2$ and $X=2u\partial_u-2v\partial_v$ ([[def-downward-gradient-like-vector-field]]).

[F2] The index and coindex are the dimensions of the negative and positive Hessian directions ([[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the coordinate flow solves $\dot u=2u$ and $\dot v=-2v$, hence $u(t)=e^{2t}u(0)$ and $v(t)=e^{-2t}v(0)$. [F1, given, algebra]

2.1 A point remains near $p$ and converges to it in forward time exactly when $u(0)=0$; in backward time exactly when $v(0)=0$. Thus the local stable disk is $\{u=0\}$ and the local unstable disk is $\{v=0\}$. [step 1.1]

3.1 By [F2], the $u$-space has dimension $\lambda$ and is the negative Hessian space, while the $v$-space has dimension $n-\lambda$ and is the positive one. This gives the claimed disk dimensions and tangent spaces. [F2, step 2.1] ∎
