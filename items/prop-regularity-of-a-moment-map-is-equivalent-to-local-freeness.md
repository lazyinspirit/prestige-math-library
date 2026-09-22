---
id: prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness
kind: proposition
title: Regularity of a moment map is equivalent to local freeness
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-differential-of-the-moment-map-and-orbit-orthogonal-identity, prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra, thm-stabilizers-are-closed-embedded-lie-subgroups, cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups, def-regular-and-critical-points-and-values, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Theorem 8.2 and its proof, printed pages 100--101
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 23, §23.2, printed page 142
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. For a Hamiltonian $G$-space with moment map
$\mu$ and a point $p\in M$, the differential $d\mu_p:T_pM\to\mathfrak g^*$ is
surjective if and only if the infinitesimal stabilizer $\mathfrak g_p$ is
zero. Consequently a covector $\alpha\in\mathfrak g^*$ is a regular value of
$\mu$ if and only if $\mathfrak g_p=0$ for every $p\in\mu^{-1}(\alpha)$, that
is, if and only if the action is locally free along the level
$\mu^{-1}(\alpha)$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space with moment map $\mu$, and a point $p\in M$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface cited in [F1] and [F2].

[F1] $\operatorname{im}d\mu_p=\operatorname{ann}(\mathfrak g_p)$. [[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]].

[F2] The infinitesimal orbit map has kernel exactly the stabilizer Lie algebra $\mathfrak g_p=T_eG_p$, and $G_p$ is a closed embedded Lie subgroup. [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]], [[thm-stabilizers-are-closed-embedded-lie-subgroups]].

[F3] A subgroup of a finite-dimensional real Lie group is discrete in the subspace topology if and only if it is a closed embedded zero-dimensional Lie subgroup; a Lie group is zero-dimensional exactly when its Lie algebra is zero. [[cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups]].

[F4] A value of a smooth map is regular when the differential is surjective at every point of its fibre. [[def-regular-and-critical-points-and-values]].

## Proof

**Proof technique:** direct.

1.1 By [F1], surjectivity of $d\mu_p$ is equivalent to $\operatorname{ann}(\mathfrak g_p)=\mathfrak g^*$, which holds if and only if $\mathfrak g_p=0$: if $\mathfrak g_p$ contained a nonzero vector then some linear functional would not vanish on it, and conversely $\operatorname{ann}(0)=\mathfrak g^*$. [F1, given]

1.2 By [F2] and [F3], $\mathfrak g_p=0$ is equivalent to the stabilizer $G_p$ being discrete: $\mathfrak g_p$ is the Lie algebra of $G_p$, so it vanishes exactly when $G_p$ is zero-dimensional, and by [F3] that is equivalent to discreteness of $G_p$. [F2, F3]

2.1 Combining steps 1.1 and 1.2, $d\mu_p$ is surjective exactly when the stabilizer $G_p$ is discrete, i.e. when the action is locally free at $p$. Applying this at every point of the fibre of a covector $\alpha$ and using [F4], $\alpha$ is a regular value of $\mu$ exactly when the stabilizers along $\mu^{-1}(\alpha)$ are discrete, i.e. when the action is locally free along the level. [step 1.1, step 1.2, F4, A1] ∎
