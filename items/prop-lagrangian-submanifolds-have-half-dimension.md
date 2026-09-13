---
id: prop-lagrangian-submanifolds-have-half-dimension
kind: proposition
title: Lagrangian submanifolds have half dimension
status: published
origin: pipeline
deps: ["def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds", "thm-equivalent-characterizations-of-lagrangian-subspaces"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §4.3, first paragraph, p. 50
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

A Lagrangian submanifold of a symplectic $2n$-manifold has dimension $n$.

## Facts & Assumptions

**Given:** A Lagrangian embedded submanifold $L$ of $(M^{2n},\omega)$.

[F1] Each $T_pL$ is a Lagrangian subspace of $T_pM$.
[[def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds]].

[F2] A Lagrangian subspace of a $2n$-dimensional symplectic space has
dimension $n$. [[thm-equivalent-characterizations-of-lagrangian-subspaces]].

## Proof

**Proof technique:** direct.

1.1 For every $p\in L$, [F1] and [F2] give $\dim T_pL=n$. [F1, F2]

2.1 Since $L$ is an embedded constant-dimensional submanifold, its dimension equals the dimension of any tangent space, hence $\dim L=n$. This includes $n=0$. [F1, step 1.1] ∎
