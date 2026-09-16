---
id: thm-reduction-in-stages-for-free-proper-regular-actions
kind: theorem
title: Reduction in stages for free proper regular actions
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, thm-marsden-weinstein-meyer-symplectic-reduction, thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group, thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism, prop-equivariant-maps-descend-to-smooth-maps-on-free-proper-quotients, prop-moment-level-is-invariant-under-the-coadjoint-stabilizer, def-regular-and-critical-points-and-values, def-coadjoint-representation-of-a-lie-group, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.3, Reduction in stages, printed pages 105--106
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.3, printed page 149
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space,
let $H\trianglelefteq G$ be a closed normal subgroup with Lie algebra
$\mathfrak h$, and put $\mu_H:=\mu|_{\mathfrak h}:M\to\mathfrak h^*$. Assume:

* $0\in\mathfrak h^*$ is a regular value of $\mu_H$ and $H$ acts freely and
  properly on $\mu_H^{-1}(0)$, so that $M_0^H:=\mu_H^{-1}(0)/H$ is defined;

* $0\in(\mathfrak g/\mathfrak h)^*$ is a regular value of the residual map
  $$\bar\mu:M_0^H\longrightarrow(\mathfrak g/\mathfrak h)^*,\qquad \bar\mu([p])(\xi+\mathfrak h):=\mu(p)(\xi),$$
  and $G/H$ acts freely and properly on $\bar\mu^{-1}(0)$;

* the one-stage hypotheses hold: $0$ is a regular value of $\mu$ and $G$ acts
  freely and properly on $\mu^{-1}(0)$.

Then $\bar\mu$ is a well-defined smooth equivariant moment map for the induced
$G/H$-action on $M_0^H$, and the canonical identification
$$(M_0^H)_0:=\bar\mu^{-1}(0)/(G/H)\;\longrightarrow\;\mu^{-1}(0)/G=M_0^G$$
is a symplectomorphism, where the left side carries the two-stage reduced form
and the right side the one-stage reduced form.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space, a closed normal subgroup $H$, and the three sets of hypotheses above.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the reduction, fundamental-field and quotient suppliers cited below.

[F1] $\mu$ is coadjoint equivariant and its components satisfy $d\mu^\xi=-\iota_{\xi_M}\omega$; for $p\in\mu_H^{-1}(0)$ the covector $\mu(p)$ annihilates $\mathfrak h$. [[def-moment-map-and-component-hamiltonian]].

[F2] The first-stage reduction gives the rule $\pi_H^*\omega_H=\iota_H^*\omega$ for the unique form $\omega_H$ on $M_0^H$, with $\pi_H:\mu_H^{-1}(0)\to M_0^H$ the quotient map; and the one-stage reduction gives $\pi_G^*\omega_G=\iota_G^*\omega$ on $M_0^G$. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F3] $G/H$ is a Lie group with Lie algebra $\mathfrak g/\mathfrak h$, the quotient homomorphism $q:G\to G/H$ is smooth with differential the quotient map, and the adjoint action of $G/H$ is induced by $\operatorname{Ad}$ on $\mathfrak g$; its coadjoint action on $(\mathfrak g/\mathfrak h)^*$ corresponds under $(\mathfrak g/\mathfrak h)^*\simeq\mathfrak h^0$ to the restriction of the coadjoint action of $G$ on $\mathfrak h^0$. [[thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group]], [[thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism]], [[def-coadjoint-representation-of-a-lie-group]].

[F4] $H$ preserves the level $\mu_H^{-1}(0)$ and $G$-equivariant maps constant on $H$-orbits descend to smooth maps on $M_0^H$. [[prop-moment-level-is-invariant-under-the-coadjoint-stabilizer]], [[prop-equivariant-maps-descend-to-smooth-maps-on-free-proper-quotients]].

[F5] The double quotient $\mu^{-1}(0)/G$ is canonically $(\mu^{-1}(0)/H)/(G/H)$ because $H\trianglelefteq G$; and forms on a quotient with equal pullback to the total space coincide. [[thm-marsden-weinstein-meyer-symplectic-reduction]], [[thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group]].


## Proof

**Proof technique:** direct.

1.1 Well-definedness of $\bar\mu$: for $p\in\mu_H^{-1}(0)$, [F1] says that the covector $\mu(p)$ annihilates $\mathfrak h$, so $\xi\mapsto\mu(p)(\xi)$ factors through $\mathfrak g/\mathfrak h$. If $h\in H$, then $\bar\mu([h\cdot p])(\xi+\mathfrak h)=\langle h\cdot\mu(p),\xi\rangle=\langle\mu(p),\operatorname{Ad}_{h^{-1}}\xi\rangle$ and $\operatorname{Ad}_{h^{-1}}\xi-\xi\in\mathfrak h$ because $\mathfrak h$ is an ideal; since $\mu(p)$ annihilates $\mathfrak h$, this equals $\mu(p)(\xi)$, so $\bar\mu$ is independent of the representative. [F1, F3]

2.1 Smoothness and equivariance: the composite $\mu_H^{-1}(0)\to\mathfrak h^0$, $p\mapsto\mu(p)$, is $H$-equivariant for the trivial action on $\mathfrak h^0$ by [F1] and [F3], so by [F4] it descends to the smooth map $\bar\mu$. Its equivariance for $G/H$ follows from [F1] and [F3]: $\bar\mu([g\cdot p])(\xi+\mathfrak h)=\langle g\cdot\mu(p),\xi\rangle=\bar\mu([p])(\operatorname{Ad}_{g^{-1}}\xi+\mathfrak h)$. [step 1.1, F1, F3, F4]

3.1 Moment equation for $\bar\mu$: let $\xi\in\mathfrak g$ and $v\in T_p\mu_H^{-1}(0)$. Since the $G/H$-fundamental field at $[p]$ is $d\pi_H(\xi_M(p))$ and $\pi_H^*\omega_H=\iota_H^*\omega$ by [F2], $$\bigl\langle d\bar\mu_{[p]}(d\pi_H v),\xi+\mathfrak h\bigr\rangle=d\mu^\xi_p(v)=-\omega_p(\xi_M(p),v)=-\omega_H\bigl(\xi\cdot[p],d\pi_Hv\bigr),$$ which is the component moment equation for $\bar\mu$ on $M_0^H$. [step 2.1, F1, F2]

4.1 Zero level and double quotient: $[p]\in\bar\mu^{-1}(0)$ if and only if $\mu(p)(\xi)=0$ for all $\xi\in\mathfrak g$, that is, $p\in\mu^{-1}(0)$; hence $\bar\mu^{-1}(0)=\mu^{-1}(0)/H$ and its quotient by $G/H$ is canonically $\mu^{-1}(0)/G$. [step 1.1, step 3.1, F3, F5]

5.1 Form comparison: pull the one-stage reduced form back along the composite quotient map $\mu^{-1}(0)\to\mu^{-1}(0)/G$; by [F2] the result is $\iota_G^*\omega$. Pulling the two-stage reduced form back along the composite $\mu^{-1}(0)\to\mu^{-1}(0)/H\to\bar\mu^{-1}(0)/(G/H)$ likewise gives first $\iota_H^*\omega$ restricted to $\mu^{-1}(0)$, namely $\iota_G^*\omega$. Both composite maps are surjective submersions, so by the uniqueness part of [F2] and [F5] the canonical diffeomorphism between the two quotients identifies the two symplectic forms. [step 3.1, step 4.1, F2, F5]

6.1 Steps 1.1--3.1 construct the residual moment map and verify the Hamiltonian property of the induced $G/H$-action; steps 4.1--5.1 identify the two-stage and one-stage quotients and their symplectic forms, as claimed. [step 3.1, step 4.1, step 5.1, A1] ∎
