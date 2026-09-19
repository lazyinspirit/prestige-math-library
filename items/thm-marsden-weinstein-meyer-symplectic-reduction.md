---
id: thm-marsden-weinstein-meyer-symplectic-reduction
kind: theorem
title: Marsden--Weinstein--Meyer symplectic reduction
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-a-regular-level-set-is-an-embedded-submanifold, prop-tangent-space-of-a-regular-level-set-is-the-kernel, thm-free-proper-action-quotient-manifold, prop-tangent-space-of-a-free-proper-quotient, lem-characteristic-kernel-on-a-regular-moment-level, prop-moment-level-is-invariant-under-the-coadjoint-stabilizer, lem-invariant-horizontal-form-on-a-free-proper-quotient-descends-uniquely, def-regular-and-critical-points-and-values, def-symplectic-form-and-symplectic-manifold, def-countable-choice, def-symplectic-and-hamiltonian-lie-group-action]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Theorem 8.3 and Remark 8.4, printed pages 101--102
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 23, Theorem 23.1, printed pages 141--145
landmark: true
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space,
let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, and suppose that the
coadjoint stabilizer $G_\alpha$ acts freely and properly on the level
$\mu^{-1}(\alpha)$. Put

$$M_\alpha:=\mu^{-1}(\alpha)/G_\alpha,\qquad \pi:\mu^{-1}(\alpha)\longrightarrow M_\alpha,$$

with the quotient structure, and let $\iota:\mu^{-1}(\alpha)\hookrightarrow M$
be the inclusion. Then $M_\alpha$ is a smooth manifold and there is a unique
symplectic form $\omega_\alpha$ on $M_\alpha$ satisfying

$$\pi^*\omega_\alpha=\iota^*\omega .$$

The pair $(M_\alpha,\omega_\alpha)$ is the **symplectic reduction** of
$(M,\omega,\mu)$ at $\alpha$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space with moment map $\mu$, a regular value $\alpha$, and a free proper $G_\alpha$-action on the level.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field, level-set and quotient suppliers cited below.

[F1] If $\mu^{-1}(\alpha)$ is nonempty, it is an embedded submanifold with $T_p\mu^{-1}(\alpha)=\ker d\mu_p$, and $\iota^*\omega$ is a smooth two-form on it. If it is empty, it is the empty smooth manifold and all pointwise tangent assertions below are vacuous. [[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]].

[F2] Since $G_\alpha$ acts freely and properly on $\mu^{-1}(\alpha)$, the quotient $M_\alpha$ is a smooth manifold and $\pi$ is a smooth surjective submersion. [[thm-free-proper-action-quotient-manifold]].

[F3] $G_\alpha$ preserves the level and acts by restrictions of the symplectic action, which preserves $\omega$. [[prop-moment-level-is-invariant-under-the-coadjoint-stabilizer]], [[def-symplectic-and-hamiltonian-lie-group-action]].

[F4] On the level, $\ker(\iota^*\omega)_p=T_p(G_\alpha\cdot p)$ for every $p$, and the image of this subspace under $d\pi_p$ is zero. [[lem-characteristic-kernel-on-a-regular-moment-level]], [[prop-tangent-space-of-a-free-proper-quotient]].

[F5] A $G_\alpha$-invariant horizontal form on the free proper $G_\alpha$-manifold $\mu^{-1}(\alpha)$ descends to a unique form on $M_\alpha$; a form on $M_\alpha$ with zero pullback is zero. [[lem-invariant-horizontal-form-on-a-free-proper-quotient-descends-uniquely]].

[F6] $\omega$ is closed. [[def-symplectic-form-and-symplectic-manifold]], [[def-symplectic-and-hamiltonian-lie-group-action]].

## Proof

**Proof technique:** direct.

1.1 If the level is empty, its quotient is the empty smooth manifold and the unique two-form on it is closed and nondegenerate vacuously, so the conclusion holds. Henceforth suppose the level is nonempty. The restricted form $\iota^*\omega$ is $G_\alpha$-invariant: for $h\in G_\alpha$ the action $a_h$ preserves the level by [F3], so $a_h|_{\mu^{-1}(\alpha)}$ is a diffeomorphism of the level with $\iota\circ a_h|_{\text{level}}=a_h\circ\iota$, and $(a_h|_{\text{level}})^*\iota^*\omega=\iota^*a_h^*\omega=\iota^*\omega$ because $a_h$ preserves $\omega$. [F1, F3]

1.2 The restricted form is horizontal for the $G_\alpha$-action: by [F4] each vertical vector $\xi_M(p)$, $\xi\in\mathfrak g_\alpha$, lies in the kernel of $(\iota^*\omega)_p$, so any contraction of $\iota^*\omega$ with a vertical entry vanishes. [F4]

2.1 By the descent lemma [F5] applied to the free proper $G_\alpha$-action on the level, there is a unique two-form $\omega_\alpha$ on $M_\alpha$ with $\pi^*\omega_\alpha=\iota^*\omega$. [step 1.1, step 1.2, F2, F5]

3.1 Closedness: $\pi^*(d\omega_\alpha)=d(\pi^*\omega_\alpha)=d(\iota^*\omega)=\iota^*(d\omega)=0$ by [F6]; a form on the base with zero pullback vanishes by [F5], so $d\omega_\alpha=0$. [step 2.1, F5, F6]

3.2 Nondegeneracy: let $v\in T_{[p]}M_\alpha$ with $\omega_\alpha(v,w)=0$ for all $w\in T_{[p]}M_\alpha$. Choose $\tilde v\in T_p\mu^{-1}(\alpha)$ with $d\pi_p\tilde v=v$; since $\pi$ restricted to the level is a submersion, every $\tilde w\in T_p\mu^{-1}(\alpha)$ is a lift of some $w$, so $(\iota^*\omega)_p(\tilde v,\tilde w)=\omega_\alpha(v,d\pi_p\tilde w)=0$ for all $\tilde w\in T_p\mu^{-1}(\alpha)$. Hence $\tilde v\in\ker(\iota^*\omega)_p=T_p(G_\alpha\cdot p)$ by [F4], and therefore $v=d\pi_p\tilde v=0$ by [F4]. Thus $\omega_\alpha$ is pointwise nondegenerate. [step 2.1, F4]

4.1 Steps 3.1 and 3.2 show that $\omega_\alpha$ is closed and nondegenerate, hence symplectic on the manifold $M_\alpha$ of [F2]; step 2.1 gives existence and uniqueness of the form with $\pi^*\omega_\alpha=\iota^*\omega$. [step 2.1, step 3.1, step 3.2, F2, A1] ∎
