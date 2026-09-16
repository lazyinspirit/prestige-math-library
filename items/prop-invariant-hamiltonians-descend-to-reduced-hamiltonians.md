---
id: prop-invariant-hamiltonians-descend-to-reduced-hamiltonians
kind: proposition
title: Invariant Hamiltonians descend to reduced Hamiltonians
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-noether-conservation-law-for-hamiltonian-actions, thm-marsden-weinstein-meyer-symplectic-reduction, prop-equivariant-maps-descend-to-smooth-maps-on-free-proper-quotients, thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions, thm-unique-maximal-integral-curve-through-each-point, def-poisson-bracket-on-a-symplectic-manifold, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.2, Reduced Hamiltonians, printed pages 104--105
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.2, printed pages 147--148
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space
with a $G$-invariant Hamiltonian $H\in C^\infty(M)^G$, let $\alpha$ be a
regular value of $\mu$, and suppose $G_\alpha$ acts freely and properly on the
level $\mu^{-1}(\alpha)$, with reduction $(M_\alpha,\omega_\alpha)$ and quotient
map $\pi$. Then:

1. $X_H$ is tangent to the level $\mu^{-1}(\alpha)$ and is $G_\alpha$-invariant,
   so it pushes forward to a smooth vector field $Y=d\pi(X_H|_{\mu^{-1}(\alpha)})$
   on $M_\alpha$;
2. $H|_{\mu^{-1}(\alpha)}$ is $G_\alpha$-invariant and descends to a unique
   smooth $h\in C^\infty(M_\alpha)$ with $\pi^*h=\iota^*H$;
3. $Y=X_h$; consequently every integral curve of $X_H$ that lies in the level
   projects under $\pi$ to an integral curve of the flow of $h$ on
   $M_\alpha$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space with invariant Hamiltonian $H$, a regular value $\alpha$, and a free proper $G_\alpha$-action on the level.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the reduction, fundamental-field and descent suppliers cited below.

[F1] If $H$ is $G$-invariant then $\{\mu^\xi,H\}=0$ for all $\xi$, and $\mu$ is constant along the flow of $X_H$. [[thm-noether-conservation-law-for-hamiltonian-actions]].

[F2] $X_H$ is the unique field with $\iota_{X_H}\omega=dH$, and $X_G(F)=\{F,G\}$ for the Poisson bracket. [[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]], [[def-poisson-bracket-on-a-symplectic-manifold]].

[F3] $\pi^*\omega_\alpha=\iota^*\omega$ and $M_\alpha$ is a smooth manifold with $\pi$ a surjective submersion. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F4] A smooth $G_\alpha$-equivariant map from the free proper $G_\alpha$-manifold $\mu^{-1}(\alpha)$ to a manifold with trivial $G_\alpha$-action descends to a unique smooth map on $M_\alpha$; in particular $H|_{\mu^{-1}(\alpha)}$ descends to $h$ with $\pi^*h=\iota^*H$. [[prop-equivariant-maps-descend-to-smooth-maps-on-free-proper-quotients]], [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F5] Integral curves of a smooth vector field through a given initial point are unique. [[thm-unique-maximal-integral-curve-through-each-point]].

## Proof

**Proof technique:** direct.

1.1 $X_H$ is tangent to the level: for every $\xi$, $d\mu^\xi(X_H)=X_H(\mu^\xi)=\{\mu^\xi,H\}=0$ by [F1] and [F2], so $X_H$ lies in $\ker d\mu$ and hence in $T\mu^{-1}(\alpha)$. [F1, F2]

1.2 $X_H$ is invariant under the action: since $H$ is $G$-invariant, for $g\in G$ and $p\in M$, $\omega_{g\cdot p}(d(a_g)_pX_H(p),d(a_g)_pv)=\omega_p(X_H(p),v)=dH_p(v)=dH_{g\cdot p}(d(a_g)_pv)$ for all $v$, so nondegeneracy gives $d(a_g)_pX_H(p)=X_H(g\cdot p)$. [F1, F2, given]

2.1 By steps 1.1 and 1.2 the field $X_H$ is $G_\alpha$-invariant and tangent to the level, so $Y_{[p]}:=d\pi_p(X_H(p))$ is well defined: for $p'=h\cdot p$ with $h\in G_\alpha$ one has $d\pi_{p'}X_H(p')=d\pi_{p'}d(a_h)X_H(p)=d(\pi\circ a_h)_pX_H(p)=d\pi_pX_H(p)$ because $\pi\circ a_h=\pi$. It is smooth, since near any point of $M_\alpha$ the submersion $\pi$ has a smooth local section. [step 1.1, step 1.2, F3]

2.2 By [F4] the invariant function $H|_{\mu^{-1}(\alpha)}$ descends to a unique smooth $h\in C^\infty(M_\alpha)$ with $\pi^*h=\iota^*H$. [step 1.2, F4]

3.1 The projected field is the Hamiltonian field of $h$: for $v\in T_p\mu^{-1}(\alpha)$, $$dh_{[p]}(d\pi_pv)=d(\pi^*h)_p(v)=d(\iota^*H)_p(v)=dH_p(v)=\omega_p(X_H(p),v)=(\pi^*\omega_\alpha)_p(X_H(p),v)=\omega_\alpha(Y_{[p]},d\pi_pv),$$ using [F3]; since $d\pi_p$ is onto, $\iota_Y\omega_\alpha=dh$, and uniqueness of Hamiltonian fields [F2] gives $Y=X_h$. [step 2.1, step 2.2, F2, F3]

4.1 If $\gamma$ is an integral curve of $X_H$ lying in the level, then $\pi\circ\gamma$ is an integral curve of $Y=X_h$ by the chain rule, and by uniqueness of integral curves [F5] it is the flow of $h$; hence the restricted flow of $X_H$ projects to the reduced Hamiltonian flow. [step 3.1, F5, A1] ∎
