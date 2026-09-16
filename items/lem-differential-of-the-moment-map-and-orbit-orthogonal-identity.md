---
id: lem-differential-of-the-moment-map-and-orbit-orthogonal-identity
kind: lemma
title: The differential of the moment map and the orbit-orthogonal identity
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, prop-moment-map-components-generate-the-negative-infinitesimal-action, prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra, prop-symplectic-double-orthogonal-and-dimension-identities, def-symplectic-orthogonal-complement, thm-every-orbit-is-an-injectively-immersed-homogeneous-space, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Proposition 8.1 and its complete proof, printed page 100
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 23, §23.2 ingredient 1, printed page 142
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let a Hamiltonian action of $G$ on $(M,\omega)$
have moment map $\mu$, and let $p\in M$. Then

$$\ker d\mu_p=\bigl(T_p(G\cdot p)\bigr)^\omega, \qquad \operatorname{im}d\mu_p=\operatorname{ann}(\mathfrak g_p),$$

where $(T_p(G\cdot p))^\omega$ is the symplectic orthogonal of the tangent
space of the orbit of $p$ and $\mathfrak g_p$ is the infinitesimal stabilizer.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space with moment map $\mu$, and a point $p\in M$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface cited in [F2].

[F1] $d\mu^\xi=-\iota_{\xi_M}\omega$ for every $\xi\in\mathfrak g$. [[def-moment-map-and-component-hamiltonian]].


[F3] The infinitesimal orbit map $\xi\mapsto\xi_M(p)$ has image $T_p(G\cdot p)$, the tangent space of the orbit with its canonical structure, and kernel $\mathfrak g_p$. [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]], [[thm-every-orbit-is-an-injectively-immersed-homogeneous-space]].

[F4] For a subspace $W$ of a finite-dimensional symplectic vector space, $\dim W+\dim W^\omega=\dim V$ and $(W^\omega)^\omega=W$. [[prop-symplectic-double-orthogonal-and-dimension-identities]], [[def-symplectic-orthogonal-complement]].

## Proof

**Proof technique:** direct.

1.1 For $v\in T_pM$ and $\xi\in\mathfrak g$, [F1] gives $\langle d\mu_p(v),\xi\rangle=d\mu^\xi_p(v)=-\omega_p(\xi_M(p),v)$. Hence $d\mu_p(v)=0$ if and only if $\omega_p(\xi_M(p),v)=0$ for every $\xi$, that is, if and only if $v$ is symplectically orthogonal to the span of the values $\xi_M(p)$; by [F3] that span is $T_p(G\cdot p)$. Therefore $\ker d\mu_p=(T_p(G\cdot p))^\omega$. [F1, F3]

2.1 The image is contained in the annihilator: if $\xi\in\mathfrak g_p$, then $\xi_M(p)=0$ by [F3], so for every $v\in T_pM$ the same identity gives $\langle d\mu_p(v),\xi\rangle=-\omega_p(0,v)=0$, so $\operatorname{im}d\mu_p\subseteq\operatorname{ann}(\mathfrak g_p)$. [step 1.1, F3]

3.1 Dimension count: by step 1.1 and [F4], $\dim\ker d\mu_p=\dim M-\dim T_p(G\cdot p)$, and by [F3] $\dim T_p(G\cdot p)=\dim\mathfrak g-\dim\mathfrak g_p$. Hence $\dim\operatorname{im}d\mu_p=\dim\mathfrak g-\dim\mathfrak g_p=\dim\operatorname{ann}(\mathfrak g_p)$. Since step 2.1 gives containment between spaces of equal dimension, $\operatorname{im}d\mu_p=\operatorname{ann}(\mathfrak g_p)$. [step 1.1, step 2.1, F3, F4, A1] ∎
