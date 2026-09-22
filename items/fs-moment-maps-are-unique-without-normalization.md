---
id: fs-moment-maps-are-unique-without-normalization
kind: false-statement
title: Moment maps are unique without normalization
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map, lem-tautological-cotangent-moment-map-is-equivariant, prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors, def-coadjoint-representation-of-a-lie-group, def-countable-choice, def-fundamental-vector-field-of-a-left-action]
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
      locator: Lecture 26, §26.4, corollary of the uniqueness proof, printed page 167
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Remark 7.13(c), printed page 84
proof_strategy: direct
---

## Statement

A moment map for a Hamiltonian action is unique without any normalization
condition. **This is false.**

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the cotangent bundle $T^*\mathbb R=\mathbb R^2$ with canonical coordinates $(q,p)$, the translation action of $G=\mathbb R$ lifted to the cotangent bundle, and the tautological moment map.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and cotangent suppliers.

[F1] For the lifted action of a group acting on $Q$, the tautological map has components $\mu^\xi(q,p)=-p(\xi_Q(q))$ and satisfies the component moment equations; the companion lemma proves its coadjoint equivariance, so it is an equivariant moment map. [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]], [[lem-tautological-cotangent-moment-map-is-equivariant]].

[F2] For $Q=\mathbb R$ with the translation action, the fundamental field of $\xi=1$ is the constant field $\xi_Q=-\partial_q$, the lifted action is $t\cdot(q,p)=(q+t,p)$, and the tautological moment map is $\mu(q,p)=p$. [[def-fundamental-vector-field-of-a-left-action]], [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]].

[F3] The coadjoint action of an abelian group is trivial, and for connected $M$ every translate $\mu+\delta$ of an equivariant moment map by a coadjoint-fixed covector is again an equivariant moment map. [[def-coadjoint-representation-of-a-lie-group]], [[prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors]].


## Refutation

**Proof technique:** direct.

1.1 By [F2] the tautological moment map for the lifted translation action is $\mu(q,p)=p$, and by [F1] it is an equivariant moment map. [F1, F2, given]

1.2 The group $G=\mathbb R$ is abelian, so its coadjoint action on $\mathfrak g^*=\mathbb R$ is trivial and every real $\delta$ is a coadjoint-fixed covector. [F3]

2.1 By [F3] the translate $\mu+\delta$, i.e. $(q,p)\mapsto p+\delta$, is again an equivariant moment map for the same action. [step 1.1, step 1.2, F3]

3.1 Taking $\delta=1$ gives two distinct equivariant moment maps $\mu$ and $\mu+1$ for the same Hamiltonian action, so moment maps are not unique without a normalization convention. [step 2.1, A1] ∎
