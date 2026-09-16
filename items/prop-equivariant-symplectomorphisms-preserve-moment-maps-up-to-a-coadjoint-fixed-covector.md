---
id: prop-equivariant-symplectomorphisms-preserve-moment-maps-up-to-a-coadjoint-fixed-covector
kind: proposition
title: Equivariant symplectomorphisms preserve moment maps up to a coadjoint-fixed covector
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors, def-symplectic-and-hamiltonian-lie-group-action, def-fundamental-vector-field-of-a-left-action, def-coadjoint-representation-of-a-lie-group, def-countable-choice, def-smooth-left-action-of-a-lie-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Remarks 7.13(a) and the discussion of equivariant moment maps, printed pages 83--84
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 26, §26.4, printed page 167
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$ and let $M$ be connected. Let $(M,\omega,G,\mu)$ be
a Hamiltonian $G$-space with equivariant moment map $\mu$, and let
$\phi:M\to M$ be a $G$-equivariant symplectomorphism, so that
$\phi(g\cdot p)=g\cdot\phi(p)$ and $\phi^*\omega=\omega$ for all $g,p$. Then

$$\mu\circ\phi-\mu=\delta$$

for a constant coadjoint-fixed covector $\delta\in(\mathfrak g^*)^G$. In
particular, after a normalization of the moment map that fixes the affine
ambiguity of the previous proposition, an equivariant symplectomorphism
preserves the moment map literally: $\mu\circ\phi=\mu$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a connected Hamiltonian $G$-space $(M,\omega,G,\mu)$ with equivariant moment map, and a $G$-equivariant symplectomorphism $\phi$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface cited in [F1].

[F1] $\mu$ is coadjoint equivariant and its components satisfy $d\mu^\xi=-\iota_{\xi_M}\omega$; the action satisfies $\phi^*\omega=\omega$. [[def-symplectic-and-hamiltonian-lie-group-action]], [[def-moment-map-and-component-hamiltonian]].

[F2] $\xi_M(p)=\left.\frac d{dt}\right|_0\exp_G(-t\xi)\cdot p$ and $d\phi$ intertwines the differentials of the action maps. [[def-fundamental-vector-field-of-a-left-action]], [[def-smooth-left-action-of-a-lie-group]].

[F3] The coadjoint action is $(g\cdot\alpha)(\zeta)=\alpha(\operatorname{Ad}_{g^{-1}}\zeta)$. [[def-coadjoint-representation-of-a-lie-group]].

[F4] Two equivariant moment maps for the same action on a connected symplectic manifold differ by a constant element of $(\mathfrak g^*)^G$. [[prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors]].

## Proof

**Proof technique:** direct.

1.1 For every $\xi\in\mathfrak g$ the fundamental field is $\phi$-related to itself: differentiating the identity $\phi(\exp_G(-t\xi)\cdot p)=\exp_G(-t\xi)\cdot\phi(p)$, which holds because $\phi$ commutes with the action, gives $d\phi_p(\xi_M(p))=\xi_M(\phi(p))$. [F1, F2, given]

1.2 The composite $\mu\circ\phi$ is coadjoint equivariant: $(\mu\circ\phi)(g\cdot p)=\mu(\phi(g\cdot p))=\mu(g\cdot\phi(p))=g\cdot\mu(\phi(p))=g\cdot(\mu\circ\phi)(p)$ for all $g,p$. [F1, given]

2.1 The composite satisfies the component moment equations. Indeed, for $v\in T_pM$, $$d(\mu\circ\phi)^\xi_p(v)=d\mu^\xi_{\phi(p)}\bigl(d\phi_pv\bigr)=-\omega_{\phi(p)}\bigl(\xi_M(\phi(p)),d\phi_pv\bigr)=-\omega_{\phi(p)}\bigl(d\phi_p\xi_M(p),d\phi_pv\bigr)=-\omega_p\bigl(\xi_M(p),v\bigr),$$ where step 1.1 identifies the fundamental field at $\phi(p)$ with $d\phi_p\xi_M(p)$ and symplecticity of $\phi$ removes the differential. [step 1.1, F1]

3.1 By steps 1.2 and 2.1 the composite $\mu\circ\phi$ is an equivariant moment map for the same action as $\mu$. Both are equivariant moment maps on the connected manifold $M$, so [F4] provides $\delta\in(\mathfrak g^*)^G$ with $\mu\circ\phi-\mu=\delta$. [step 1.2, step 2.1, F4]

4.1 The difference vanishes exactly when $\delta=0$. A normalization that selects one representative of the affine class of moment maps fixes $\delta=0$, and for that representative $\mu\circ\phi=\mu$; without such a normalization the two maps differ by the constant coadjoint-fixed covector $\delta$. [step 3.1, F3, A1] ∎
