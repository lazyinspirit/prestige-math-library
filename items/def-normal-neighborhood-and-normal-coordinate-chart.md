---
id: "def-normal-neighborhood-and-normal-coordinate-chart"
kind: "definition"
title: "Normal neighborhood and normal coordinate chart"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-existence-of-normal-neighborhoods","def-countable-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Definition 17.2.1, p.130
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Definition

Assume $\mathrm{AC}_\omega$. A **normal neighbourhood centred at $p$** is an open set $U\subseteq M$ for which there is an open star-shaped neighbourhood $D\subseteq T_pM$ of $0_p$ such that $D\subseteq\mathcal E_p$ and $\exp_p:D\to U$ is a diffeomorphism.

Given a supplied ordered basis $e=(e_1,\ldots,e_n)$ of $T_pM$, let $E_e:\mathbb R^n\to T_pM$ be $E_e(a^1,\ldots,a^n)=\sum_i a^ie_i$. The associated **normal coordinate chart** is
$$x_e=E_e^{-1}\circ\exp_p^{-1}:U\longrightarrow E_e^{-1}(D)\subseteq\mathbb R^n.$$
When $e$ is orthonormal, these are orthonormal normal coordinates.

## Facts & Assumptions

**Given:** A boundaryless Riemannian manifold, a point $p$, and, for the coordinate clause, a supplied ordered basis $e$ of $T_pM$.

[F1] Under [[def-countable-choice]], [[thm-existence-of-normal-neighborhoods]] supplies at least one such star-shaped exponential diffeomorphism at every point.

## Verification

1.1 Because $\exp_p|_D$ is a diffeomorphism, its inverse is a well-defined smooth map $U\to D$. The supplied basis makes $E_e$ a specified linear isomorphism, so $E_e^{-1}(D)$ is open and $x_e$ is a diffeomorphism onto it. Thus the intrinsic normal neighbourhood does not depend on coordinates, while the displayed coordinate list records exactly its dependence on the supplied basis. [F1, given]

2.1 Star-shaped means that $v\in D$ implies $tv\in D$ for every $0\le t\le1$, including both endpoints. The zero vector belongs to $D$ and maps to $p$. In dimension zero, the ordered basis is the empty tuple, $\mathbb R^0$, $T_pM$, $D$, and $U$ are singletons, and the formula gives the unique chart; dimension one is literal. If $M$ is empty there is no centre $p$. The basis is supplied rather than chosen, so the only choice principle is the stated $\mathrm{AC}_\omega$ inherited through [F1]. [F1, step 1.1] ∎
