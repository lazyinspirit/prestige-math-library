---
id: lem-characteristic-kernel-on-a-regular-moment-level
kind: lemma
title: The characteristic kernel on a regular moment level
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-differential-of-the-moment-map-and-orbit-orthogonal-identity, prop-moment-level-is-invariant-under-the-coadjoint-stabilizer, prop-tangent-space-of-a-regular-level-set-is-the-kernel, prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra, prop-symplectic-double-orthogonal-and-dimension-identities, prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity, def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, proof of Theorem 8.2, printed page 101
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 23, §23.2, printed page 142
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space,
let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, let
$\iota:\mu^{-1}(\alpha)\hookrightarrow M$ be the inclusion, and let
$p\in\mu^{-1}(\alpha)$. Then the kernel of the restricted form at $p$ is
exactly the tangent space of the coadjoint-stabilizer orbit:

$$\ker(\iota^*\omega)_p=T_p(G_\alpha\cdot p).$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space with equivariant moment map $\mu$, a regular value $\alpha$, and $p\in\mu^{-1}(\alpha)$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interfaces cited below.

[F1] $\ker d\mu_p=(T_p(G\cdot p))^\omega$ and $T_p\mu^{-1}(\alpha)=\ker d\mu_p$. [[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]].

[F2] $(W^\omega)^\omega=W$ for subspaces of a symplectic vector space. [[prop-symplectic-double-orthogonal-and-dimension-identities]].

[F3] $X_{\mu^\xi}=-\xi_M$ for all $\xi$. [[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]].

[F4] $G_\alpha$ preserves $\mu^{-1}(\alpha)$, so $\eta_M(p)$ is tangent to the level for every $\eta\in\mathfrak g_\alpha$. [[prop-moment-level-is-invariant-under-the-coadjoint-stabilizer]], [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]].

[F5] The moment map is equivariant, so the bracket identity $\{\mu^\xi,\mu^\eta\}=\mu^{[\xi,\eta]}$ holds for all $\xi,\eta$. [[prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity]].

[F6] The infinitesimal orbit map of the $G_\alpha$-action on $M$ has image $T_p(G_\alpha\cdot p)$, and $\xi\in\mathfrak g_\alpha$ if and only if $\alpha([\xi,\cdot])=0$. [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]], [[def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit]].

## Proof

**Proof technique:** direct.

1.1 Let $v\in T_p\mu^{-1}(\alpha)$. By [F1] and [F2], $T_p\mu^{-1}(\alpha)=(T_p(G\cdot p))^\omega$ and $(T_p\mu^{-1}(\alpha))^\omega=T_p(G\cdot p)$; hence $v$ is in the kernel of $(\iota^*\omega)_p$ if and only if $v\in T_p(G\cdot p)$, that is, if and only if $v$ lies in the radical of the restriction of $\omega$ to the orbit tangent space $T_p(G\cdot p)$. [F1, F2]

1.2 For $\xi,\eta\in\mathfrak g$ the value of the orbit restriction is $\omega_p(\xi_M(p),\eta_M(p))=\{\mu^\xi,\mu^\eta\}(p)$: this follows from $X_{\mu^\xi}=-\xi_M$, $X_{\mu^\eta}=-\eta_M$ by [F3] and the definition of the Poisson bracket, or equivalently from $\omega_p(\xi_M,\eta_M)=-d\mu^\xi_p(\eta_M(p))$. [F3, given]

2.1 Suppose first that $\xi\in\mathfrak g_\alpha$. Then $\mu^\xi$ is constant, equal to $\langle\alpha,\xi\rangle$, on the level, and $\eta_M(p)$ is tangent to the level by [F4]; hence $\omega_p(\xi_M(p),\eta_M(p))=-d\mu^\xi_p(\eta_M(p))=0$ for every $\eta\in\mathfrak g$. [step 1.2, F4]

2.2 Conversely suppose $\omega_p(\xi_M(p),\eta_M(p))=0$ for every $\eta$. By step 1.2 and the bracket identity [F5], $0=\{\mu^\xi,\mu^\eta\}(p)=\mu^{[\xi,\eta]}(p)=\langle\alpha,[\xi,\eta]\rangle$ for every $\eta$, so $\alpha([\xi,\cdot])=0$ and $\xi\in\mathfrak g_\alpha$ by [F6]. [step 1.2, F5, F6]

3.1 Therefore the radical of the restriction of $\omega$ to $T_p(G\cdot p)$ equals the image of $\mathfrak g_\alpha$ under the infinitesimal orbit map, namely $T_p(G_\alpha\cdot p)$ by [F6]. [step 2.1, step 2.2, F6]

4.1 By step 1.1 the kernel of the restricted form is precisely that radical, so $\ker(\iota^*\omega)_p=T_p(G_\alpha\cdot p)$. [step 1.1, step 3.1, A1] ∎
