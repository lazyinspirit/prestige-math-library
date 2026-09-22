---
id: cor-zero-level-symplectic-reduction-and-dimension-formula
kind: corollary
title: Zero-level symplectic reduction and the dimension formula
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-marsden-weinstein-meyer-symplectic-reduction, def-coadjoint-representation-of-a-lie-group, def-regular-and-critical-points-and-values, def-countable-choice, thm-a-regular-level-set-is-an-embedded-submanifold, prop-tangent-space-of-a-regular-level-set-is-the-kernel, thm-free-proper-action-quotient-manifold]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 23, Theorem 23.1, printed pages 141--142
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Definition 8.5 and the zero-level case, printed pages 101--102
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space
and suppose that $0\in\mathfrak g^*$ is a regular value of $\mu$, that
$\mu^{-1}(0)$ is nonempty, and that $G$ acts freely and properly on
$\mu^{-1}(0)$. Then the symplectic quotient

$$M_0:=\mu^{-1}(0)/G$$

is a symplectic manifold and

$$\dim M_0=\dim M-2\dim G .$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space, $0$ a regular value of $\mu$, a nonempty level $\mu^{-1}(0)$, and $G$ acting freely and properly on that level.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the reduction and fundamental-field suppliers.

[F1] The coadjoint stabilizer of $0$ is all of $G$, because the coadjoint action is linear: $g\cdot 0=0$ for every $g$. [[def-coadjoint-representation-of-a-lie-group]].

[F2] Under these hypotheses the reduction theorem applies with $\alpha=0$ and $G_\alpha=G$, producing the unique symplectic form $\omega_0$ on $M_0$ with $\pi^*\omega_0=\iota^*\omega$. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F3] Regularity of $0$ means $d\mu_p$ is surjective for every $p\in\mu^{-1}(0)$; hence $\dim\ker d\mu_p=\dim M-\dim\mathfrak g$ and $T_p\mu^{-1}(0)=\ker d\mu_p$. [[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]], [[def-regular-and-critical-points-and-values]].

[F4] A smooth free proper action of $G$ on a nonempty manifold of dimension $n$ has a smooth quotient of dimension $n-\dim G$, with quotient projection a surjective submersion. [[thm-free-proper-action-quotient-manifold]].

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2] the reduction theorem applies at the level $0$ with stabilizer $G$, so $M_0=\mu^{-1}(0)/G$ is a smooth manifold carrying the unique form $\omega_0$ with $\pi^*\omega_0=\iota^*\omega$, which is symplectic. [F1, F2, given]

2.1 The nonempty level hypothesis allows the regular-level theorem in [F3] to be applied to the smooth map $\mu:M\to\mathfrak g^*$ at zero. Since $\dim\mathfrak g^*=\dim\mathfrak g=\dim G$, the level has dimension $\dim M-\dim\mathfrak g$ near every point, and its tangent space is $\ker d\mu_p$. Its quotient is nonempty because the level is nonempty, and by [F4] quotienting by the free proper $G$-action lowers the dimension by $\dim G$. Hence $\dim M_0=\dim M-\dim\mathfrak g-\dim G=\dim M-2\dim G$. [step 1.1, F3, F4, A1] ∎
