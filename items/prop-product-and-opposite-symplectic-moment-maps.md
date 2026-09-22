---
id: prop-product-and-opposite-symplectic-moment-maps
kind: proposition
title: Products and opposites of symplectic moment maps
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, prop-products-and-opposites-of-symplectic-manifolds, def-symplectic-and-hamiltonian-lie-group-action, def-fundamental-vector-field-of-a-left-action, def-countable-choice]
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
      locator: §7.4.6, constructions (a) and (b), printed page 91
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, §22.4 and Lecture 24, §24.3, printed pages 137--139, 149
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,\omega_M)$ and $(N,\omega_N)$ be
Hamiltonian $G$-spaces with equivariant moment maps $\mu_M$ and $\mu_N$.

1. On the product $M\times N$ with the diagonal action
   $g\cdot(p,q)=(g\cdot p,g\cdot q)$ and the product form
   $\Omega=\operatorname{pr}_M^*\omega_M+\operatorname{pr}_N^*\omega_N$
   ([[prop-products-and-opposites-of-symplectic-manifolds]]), the map
   $$\mu(p,q):=\mu_M(p)+\mu_N(q)$$
   is an equivariant moment map, with components
   $\mu^\xi(p,q)=\mu_M^\xi(p)+\mu_N^\xi(q)$.
2. On $(M,-\omega_M)$ with the same action, $-\mu_M$ is an equivariant moment
   map: component equations and equivariance are those of $\mu_M$ with the
   signs of the form and the map reversed.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, Hamiltonian $G$-spaces $(M,\omega_M,\mu_M)$ and $(N,\omega_N,\mu_N)$ with equivariant moment maps.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface cited in [F2].

[F1] $\Omega=\operatorname{pr}_M^*\omega_M+\operatorname{pr}_N^*\omega_N$ is symplectic on $M\times N$, and $(M,-\omega_M)$ is symplectic. [[prop-products-and-opposites-of-symplectic-manifolds]].

[F2] The fundamental field of a product action is the pair of fundamental fields: $\xi_{M\times N}(p,q)=(\xi_M(p),\xi_N(q))$, and on $(M,-\omega_M)$ the fundamental field is unchanged, equal to $\xi_M$. [[def-fundamental-vector-field-of-a-left-action]], [[def-symplectic-and-hamiltonian-lie-group-action]].

[F3] $\mu_M,\mu_N$ are equivariant moment maps: $d\mu_M^\xi=-\iota_{\xi_M}\omega_M$, $d\mu_N^\xi=-\iota_{\xi_N}\omega_N$, $\mu_M(g\cdot p)=g\cdot\mu_M(p)$ and $\mu_N(g\cdot q)=g\cdot\mu_N(q)$. [[def-moment-map-and-component-hamiltonian]].

## Proof

**Proof technique:** direct.

1.1 On the product, the contraction of the product form with the fundamental field splits: by [F1] and [F2], $$\iota_{\xi_{M\times N}}\Omega=\operatorname{pr}_M^*\bigl(\iota_{\xi_M}\omega_M\bigr)+\operatorname{pr}_N^*\bigl(\iota_{\xi_N}\omega_N\bigr),$$ because each summand of $\Omega$ is pulled back from one factor and the fundamental field has the corresponding component there. [F1, F2]

1.2 Equivariance of $\mu$: $\mu(g\cdot(p,q))=\mu_M(g\cdot p)+\mu_N(g\cdot q)=g\cdot\mu_M(p)+g\cdot\mu_N(q)=g\cdot(\mu_M(p)+\mu_N(q))=g\cdot\mu(p,q)$ by linearity of the coadjoint action. [F3]

2.1 Hence, using [F3], $$d\mu^\xi=\operatorname{pr}_M^*d\mu_M^\xi+\operatorname{pr}_N^*d\mu_N^\xi=-\operatorname{pr}_M^*\bigl(\iota_{\xi_M}\omega_M\bigr)-\operatorname{pr}_N^*\bigl(\iota_{\xi_N}\omega_N\bigr)=-\iota_{\xi_{M\times N}}\Omega,$$ so the components of $\mu=\mu_M+\mu_N$ satisfy the component moment equations for the diagonal action. [step 1.1, F3]

2.2 For the opposite form, [F3] and [F2] give, with $\nu:=-\mu_M$, $$d\nu^\xi=-d\mu_M^\xi=\iota_{\xi_M}\omega_M=-\iota_{\xi_M}(-\omega_M),$$ so $\nu$ satisfies the component equations on $(M,-\omega_M)$; and $\nu(g\cdot p)=-\mu_M(g\cdot p)=-g\cdot\mu_M(p)=g\cdot\nu(p)$ by linearity of the coadjoint action, so $\nu$ is equivariant. [step 1.2, F2, F3]

3.1 Steps 2.1 and 1.2 show that $\mu_M+\mu_N$ is an equivariant moment map on the product, and step 2.2 that $-\mu_M$ is an equivariant moment map on $(M,-\omega_M)$. [step 2.1, step 1.2, step 2.2, A1] ∎
