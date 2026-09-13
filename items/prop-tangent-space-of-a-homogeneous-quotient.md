---
id: prop-tangent-space-of-a-homogeneous-quotient
kind: proposition
title: Tangent space of a homogeneous quotient
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-quotient-manifold-by-a-closed-lie-subgroup, thm-quotient-module-universal-property, prop-tangent-space-of-a-regular-level-set-is-the-kernel]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Theorem 4.1 and quotient tangent calculation, printed page 28
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. For a closed subgroup $H\le G$, the differential
of $q:G\to G/H$ at the identity induces a canonical linear isomorphism

$$\overline{dq_e}:\mathfrak g/\mathfrak h\xrightarrow{\ \cong\ }T_{eH}(G/H).$$

At $gH$ this identification is transported by left translation and satisfies

$$dq_g\circ d(L_g)_e=d(L_g^{G/H})_{eH}\circ dq_e.$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$, a
closed subgroup $H$, and the quotient map $q:G\to G/H$.

[A1] The quotient manifold exists and $q$ is a surjective submersion.
[[def-countable-choice]], [[thm-quotient-manifold-by-a-closed-lie-subgroup]].

[F1] A surjective linear map factors through the quotient by its kernel.
[[thm-quotient-module-universal-property]].

[F2] The tangent space of a regular fibre is the kernel of the differential.
[[prop-tangent-space-of-a-regular-level-set-is-the-kernel]].

## Proof

**Proof technique:** quotient the differential by its kernel.

1.1 Since $q$ is a submersion by [A1], $eH$ is a regular value. Its fibre is $q^{-1}(eH)=H$, so [F2] gives $\ker dq_e=T_eH=\mathfrak h$. Also $dq_e$ is surjective. [A1, F2, algebra]

2.1 By [F1], $dq_e$ factors uniquely through a linear map $\overline{dq_e}:\mathfrak g/\mathfrak h\to T_{eH}(G/H)$. It is injective because its kernel would lift to $\ker dq_e=\mathfrak h$, and it is surjective because $dq_e$ is. Hence it is the claimed canonical isomorphism. [F1, step 1.1]

3.1 Equivariance of the quotient map says $q\circ L_g=L_g^{G/H}\circ q$. Differentiating at $e$ gives the displayed identity. Both translation differentials are isomorphisms, so it transports the identity-coset description to every $gH$. The formulas include $H=G$, $H=\{e\}$, and disconnected groups. Choice is used only through [A1]. [A1, step 2.1, algebra] ∎
