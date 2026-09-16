---
id: prop-moment-level-is-invariant-under-the-coadjoint-stabilizer
kind: proposition
title: The moment level is invariant under the coadjoint stabilizer
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, def-coadjoint-representation-of-a-lie-group, def-symplectic-and-hamiltonian-lie-group-action, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.4, printed page 149
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Theorem 8.2, printed pages 100--101
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space,
let $\alpha\in\mathfrak g^*$ and let
$G_\alpha=\{g\in G:g\cdot\alpha=\alpha\}$ be the coadjoint stabilizer. Then
$G_\alpha$ preserves the level:

$$g\cdot p\in\mu^{-1}(\alpha) \qquad\text{for all }g\in G_\alpha,\ p\in\mu^{-1}(\alpha).$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space with equivariant moment map $\mu$, a covector $\alpha$, and $g\in G_\alpha$, $p\in\mu^{-1}(\alpha)$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface of the Hamiltonian action.

[F1] $\mu$ is coadjoint equivariant: $\mu(g\cdot p)=g\cdot\mu(p)$. [[def-moment-map-and-component-hamiltonian]], [[def-symplectic-and-hamiltonian-lie-group-action]].

[F2] $G_\alpha=\{g\in G:g\cdot\alpha=\alpha\}$. [[def-coadjoint-representation-of-a-lie-group]].

## Proof

**Proof technique:** direct.

1.1 By [F1], $\mu(g\cdot p)=g\cdot\mu(p)=g\cdot\alpha$ because $\mu(p)=\alpha$. [F1, given]

1.2 Since $g\in G_\alpha$, [F2] gives $g\cdot\alpha=\alpha$. [F2, given]

2.1 Combining the two computations, $\mu(g\cdot p)=\alpha$, that is $g\cdot p\in\mu^{-1}(\alpha)$. As $g$ and $p$ were arbitrary, $G_\alpha$ preserves the level. [step 1.1, step 1.2, A1] ∎
