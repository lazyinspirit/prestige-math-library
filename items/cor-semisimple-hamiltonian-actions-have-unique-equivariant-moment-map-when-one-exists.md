---
id: cor-semisimple-hamiltonian-actions-have-unique-equivariant-moment-map-when-one-exists
kind: corollary
title: Semisimple Hamiltonian actions have a unique equivariant moment map when one exists
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors, cor-semisimple-lie-algebras-are-centerless-and-perfect, def-coadjoint-representation-of-a-lie-group, def-simple-semisimple-and-reductive-lie-algebras, def-countable-choice]
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
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 26, Theorem 26.5 and corollary, printed page 167
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Remark 7.16, printed pages 85--86
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$ and let $M$ be connected. Let $\mathfrak g$ be a
finite-dimensional real semisimple Lie algebra, and let a Hamiltonian action
of a Lie group $G$ with Lie algebra $\mathfrak g$ on $(M,\omega)$ be given.
Then there is at most one equivariant moment map for the action: if one
equivariant moment map exists, it is the unique one.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a connected symplectic $G$-manifold with $\mathfrak g$ finite-dimensional real semisimple, and an equivariant moment map $\mu$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through [F1].

[F1] Any two equivariant moment maps for the same action differ by a constant coadjoint-fixed covector $\delta\in(\mathfrak g^*)^G$. [[prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors]].

[F2] If $\mathfrak g$ is finite-dimensional semisimple over a characteristic-zero field then $[\mathfrak g,\mathfrak g]=\mathfrak g$. [[cor-semisimple-lie-algebras-are-centerless-and-perfect]], [[def-simple-semisimple-and-reductive-lie-algebras]].

[F3] For $\alpha\in\mathfrak g^*$ and $\xi,\zeta\in\mathfrak g$, the coadjoint action satisfies $\left.\frac d{dt}\right|_0\langle\exp_G(t\xi)\cdot\alpha,\zeta\rangle=-\langle\alpha,[\xi,\zeta]\rangle$. [[def-coadjoint-representation-of-a-lie-group]].

## Proof

**Proof technique:** direct.

1.1 Let $\mu_1,\mu_2$ be two equivariant moment maps. By [F1] there is $\delta\in(\mathfrak g^*)^G$ with $\mu_1-\mu_2=\delta$. We show $\delta=0$. [F1, given]

2.1 Since $g\cdot\delta=\delta$ for every $g\in G$, taking $g=\exp_G(t\xi)$ and differentiating the constant function $t\mapsto\langle\exp_G(t\xi)\cdot\delta,\zeta\rangle$ at $t=0$ gives $0=-\langle\delta,[\xi,\zeta]\rangle$ for all $\xi,\zeta\in\mathfrak g$ by [F3]. [F3, step 1.1]

3.1 Thus $\delta$ vanishes on the linear span of all brackets, that is on $[\mathfrak g,\mathfrak g]$, which equals $\mathfrak g$ by [F2]. Therefore $\delta=0$ and $\mu_1=\mu_2$; an equivariant moment map, when it exists, is unique. [step 2.1, F2, A1] ∎
