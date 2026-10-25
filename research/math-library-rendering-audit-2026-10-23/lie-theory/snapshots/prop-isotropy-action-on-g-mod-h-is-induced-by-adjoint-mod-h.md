---
id: prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h
kind: proposition
title: The isotropy action on G/H is induced by Ad modulo h
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, prop-tangent-space-of-a-homogeneous-quotient, def-conjugation-and-the-adjoint-representation-of-a-lie-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Homogeneous spaces and adjoint action, §§4.1 and 9.1, printed pages 28 and 53
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $H\le G$ be closed. For $h\in H$, the
differential at $eH$ of the isotropy diffeomorphism $L_h^{G/H}$ corresponds,
under $\mathfrak g/\mathfrak h\cong T_{eH}(G/H)$, to

$$X+\mathfrak h\longmapsto \operatorname{Ad}_hX+\mathfrak h.$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a closed subgroup $H\le G$, and $h\in H$.

[A1] The map $dq_e$ identifies $\mathfrak g/\mathfrak h$ with $T_{eH}(G/H)$. [[def-countable-choice]], [[prop-tangent-space-of-a-homogeneous-quotient]].

[F1] $\operatorname{Ad}_h=d(C_h)_e$, where $C_h(g)=hgh^{-1}$. [[def-conjugation-and-the-adjoint-representation-of-a-lie-group]].

## Proof

**Proof technique:** differentiate an equivariant identity.

1.1 Conjugation by $h$ maps $H$ to itself, because $h\in H$. Therefore its differential preserves $\mathfrak h=T_eH$, and [F1] shows that $\operatorname{Ad}_h$ descends to the stated linear map on $\mathfrak g/\mathfrak h$. [F1, given, algebra]

1.2 For every $g\in G$, $$q(C_h(g))=hgh^{-1}H=hgH=L_h^{G/H}(q(g)),$$ since $h^{-1}H=H$. Differentiate $q\circ C_h=L_h^{G/H}\circ q$ at $e$ to obtain $$dq_e\circ\operatorname{Ad}_h=d(L_h^{G/H})_{eH}\circ dq_e.$$ [F1, algebra]

2.1 Since $dq_e$ is surjective and its induced map from $\mathfrak g/\mathfrak h$ is an isomorphism by [A1], step 1.2 says exactly that the isotropy differential is conjugate to the descended adjoint map. For $h=e$ both are the identity; no normality of $H$ is required. Choice is inherited only through [A1]. [A1, step 1.1, step 1.2] ∎
