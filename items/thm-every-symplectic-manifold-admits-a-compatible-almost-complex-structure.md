---
id: thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure
kind: theorem
title: Every symplectic manifold admits a compatible almost-complex structure
status: draft
origin: pipeline
deps: ["def-countable-choice", "thm-every-smooth-manifold-admits-a-riemannian-metric", "lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots", "def-compatible-complex-structure-on-a-symplectic-vector-space"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Discussion preceding Definition 3.31, p. 42, using Theorem 2.26
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Every symplectic manifold $(M,\omega)$ admits a
smooth almost-complex structure $J$ compatible with $\omega$.

## Facts & Assumptions

**Given:** A symplectic manifold $(M,\omega)$ and the axiom of countable choice
$\mathrm{AC}_\omega$.

[F1] Under $\mathrm{AC}_\omega$, every smooth manifold admits a Riemannian
metric. [[def-countable-choice]],
[[thm-every-smooth-manifold-admits-a-riemannian-metric]].

[F2] Smooth positive-definite self-adjoint bundle endomorphisms have unique
smooth positive square roots.
[[lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots]].

[F3] An endomorphism $J$ is compatible when $J^2=-I$ and
$\omega(\cdot,J\cdot)$ is positive-definite symmetric.
[[def-compatible-complex-structure-on-a-symplectic-vector-space]].

## Proof

**Proof technique:** direct.

1.1 Spend the assumed $\mathrm{AC}_\omega$ only through [F1] to choose a smooth Riemannian metric $k$. Define the smooth invertible bundle map $A$ by $k(u,v)=\omega(u,Av)$. Fibrewise skew-symmetry gives $A^*=-A$, so $-A^2=A^*A$ is smooth, self-adjoint, and positive definite. [F1, given, algebra]

2.1 By [F2], $P=(-A^2)^{1/2}$ is a smooth positive bundle endomorphism. Fibrewise, $A$ preserves the eigenspaces of $-A^2$ and $P$ is scalar on each of them, so $P$ commutes with $A$. Hence $J=AP^{-1}$ is smooth and $J^2=-I$. [F2, step 1.1, algebra]

3.1 Fibrewise, $$\omega(u,Jv)=k(u,P^{-1}v)=k(P^{-1/2}u,P^{-1/2}v),$$ which is symmetric and positive definite. Thus [F3] proves compatibility. Empty and zero-dimensional manifolds carry the unique such structure. [F2, F3, step 1.1, step 2.1] ∎
