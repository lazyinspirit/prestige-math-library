---
id: cor-transitive-smooth-actions-identify-m-with-g-mod-h
kind: corollary
title: Transitive smooth actions identify M with G/H
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-every-orbit-is-an-injectively-immersed-homogeneous-space, thm-quotient-manifold-by-a-closed-lie-subgroup, thm-morse-sard-for-smooth-manifolds, prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold, thm-smooth-inverse-function-theorem-on-manifolds]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Homogeneous Space Characterization Theorem 21.18 and complete proof, printed pages 552–553; Equivariant Rank Theorem 7.25, printed pages 165–166
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Proposition 4.12 and proof, printed pages 30–31
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. If a Lie group $G$ acts smoothly and
transitively on a smooth manifold $M$, then for every $x\in M$ the map

$$G/G_x\longrightarrow M,\qquad gG_x\longmapsto g\cdot x$$

is a $G$-equivariant diffeomorphism.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a transitive smooth left action of $G$ on
$M$, and $x\in M$.

[A1] The induced map $f:G/G_x\to M$ is a smooth equivariant injective
immersion; transitivity makes it bijective.
[[def-countable-choice]],
[[thm-every-orbit-is-an-injectively-immersed-homogeneous-space]],
[[thm-quotient-manifold-by-a-closed-lie-subgroup]].

[F1] Critical values of a smooth map are null, and a null set cannot be all of
a positive-dimensional manifold.
[[thm-morse-sard-for-smooth-manifolds]],
[[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]].

[F2] An invertible differential gives a local diffeomorphism.
[[thm-smooth-inverse-function-theorem-on-manifolds]].

## Proof

**Proof technique:** use Sard to prove equality of dimensions, then apply the inverse function theorem.

1.1 Put $m=\dim(G/G_x)$ and $n=\dim M$. Since $f$ is an immersion, its differential is injective everywhere, so $m\le n$. If $n=0$, this forces $m=0$. Assume $n>0$. [A1, algebra]

2.1 If $m<n$, no differential of $f$ is surjective, so every point in its image is a critical value. But $f$ is surjective by transitivity, so all of $M$ would be a null set by Morse–Sard [F1]. The dense-complement result [F1] would then say that the empty complement of $M$ is dense, impossible because $M$ contains $x$. Therefore $m=n$. [A1, F1, step 1.1, contradiction]

3.1 The injective differential of $f$ is now an isomorphism everywhere. By [F2], $f$ is a local diffeomorphism. A bijective local diffeomorphism has a smooth inverse, since its local inverses agree with its unique set-theoretic inverse. Thus $f$ is a diffeomorphism; its equivariance was already proved in [A1]. Zero-dimensional and disconnected cases are included. Countable choice is inherited through [A1]. [A1, F2, step 1.1, step 2.1] ∎
