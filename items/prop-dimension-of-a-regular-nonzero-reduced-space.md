---
id: prop-dimension-of-a-regular-nonzero-reduced-space
kind: proposition
title: The dimension of a regular reduced space at a nonzero value
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-marsden-weinstein-meyer-symplectic-reduction, prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness, lem-differential-of-the-moment-map-and-orbit-orthogonal-identity, def-coadjoint-representation-of-a-lie-group, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Theorems 8.2 and 8.3, printed pages 100--101
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.4, printed pages 149--150
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space,
let $\alpha\in\mathfrak g^*$ be a regular value with nonempty level, and suppose that $G_\alpha$
acts freely and properly on $\mu^{-1}(\alpha)$. Then the reduced space
$M_\alpha=\mu^{-1}(\alpha)/G_\alpha$ has dimension

$$\dim M_\alpha=\dim M-\dim G-\dim G_\alpha .$$

In particular the value $\alpha$ enters the formula only through the dimension
of its coadjoint stabilizer, and at $\alpha=0$, where $G_\alpha=G$, the formula
specialises to $\dim M-2\dim G$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space, a regular value $\alpha$ with nonempty level, and a free proper $G_\alpha$-action on the level.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the reduction and fundamental-field suppliers.

[F1] $M_\alpha$ is the quotient of $\mu^{-1}(\alpha)$ by the free proper $G_\alpha$-action. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F2] Regularity of $\alpha$ means $d\mu_p$ is surjective at every $p$ in the level, so $\dim\mu^{-1}(\alpha)=\dim M-\dim\mathfrak g$. [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]], [[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]].

[F3] Quotienting a manifold by a free proper $G_\alpha$-action lowers the dimension by $\dim G_\alpha$. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F4] The coadjoint stabilizer of $0$ is $G$, and $\dim G_\alpha=\dim\mathfrak g_\alpha$. [[def-coadjoint-representation-of-a-lie-group]].

## Proof

**Proof technique:** direct.

1.1 By [F2] the level has dimension $\dim M-\dim\mathfrak g$. [F2, given]

2.1 By [F3] the quotient by the free proper $G_\alpha$-action subtracts $\dim G_\alpha$, so $\dim M_\alpha=\dim M-\dim\mathfrak g-\dim G_\alpha=\dim M-\dim G-\dim G_\alpha$, using that a Lie group and its Lie algebra have equal dimension. [step 1.1, F1, F3]

3.1 For $\alpha=0$ the coadjoint action is linear, so every group element fixes $0$ and $G_0=G$ by [F4]; the formula then reads $\dim M_0=\dim M-2\dim G$, consistent with the zero-level corollary. [step 2.1, F4, A1] ∎
