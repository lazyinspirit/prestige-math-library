---
id: pthm-type-iib-gauge-invariance-of-tilded-field-strengths
kind: physics-theorem
title: Gauge Invariance of the Type IIB Tilded Field Strengths
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: physics
library: physics
deps:
- def-type-iib-potential-gauge-transformations
- post-type-iib-two-derivative-supergravity-pseudoaction
- thm-the-exterior-derivative-squares-to-zero
- thm-the-exterior-derivative-is-a-graded-derivation
- thm-wedge-product-is-associative-and-graded-commutative
dependency_roles:
  def-type-iib-potential-gauge-transformations: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  thm-wedge-product-is-associative-and-graded-commutative: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free
      notation, arXiv:1607.00327v3
    url: https://arxiv.org/pdf/1607.00327v3
    locator: §7.1, generalized gauge transformations following Definition 7.1, printed p. 36; the local invariance calculation
      is written out here.
physical_scope: Conditional local calculation for smooth potentials and gauge parameters on a source-free patch; no large-gauge,
  brane, or boundary action claim.
aliases: []
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the transformations in *Type IIB Potential Gauge Transformations*, with $dH_3=0$, the four field strengths $H_3,G_1,\widetilde G_3,\widetilde G_5$ defined by *Type IIB Two Derivative Supergravity Pseudoaction* are invariant.

## Statement references

[[def-type-iib-potential-gauge-transformations]]

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

## Facts & Assumptions

**Given:** A smooth source-free patch; smooth potentials $B_2,C_0,C_2,C_4$ and smooth gauge parameters $\zeta_1,\Lambda_1,\Lambda_3$; $dH_3=0$; the transformations and field-strength definitions above.

[F1] [[post-type-iib-two-derivative-supergravity-pseudoaction]]: $H_3=dB_2$, $G_1=dC_0$, $G_3=dC_2$, $G_5=dC_4$, $\widetilde G_3=G_3-C_0H_3$, and $\widetilde G_5=G_5-\tfrac12H_3\wedge C_2+\tfrac12G_3\wedge B_2$.

[F2] [[def-type-iib-potential-gauge-transformations]]: $\delta B_2=d\zeta_1$, $\delta C_0=0$, $\delta C_2=d\Lambda_1$, and $\delta C_4=d\Lambda_3-\tfrac12H_3\wedge\Lambda_1+\tfrac12G_3\wedge\zeta_1$.

[F3] [[thm-the-exterior-derivative-squares-to-zero]] and [[thm-the-exterior-derivative-is-a-graded-derivation]]: $d^2=0$ and $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta$.

[F4] [[thm-wedge-product-is-associative-and-graded-commutative]]: exchanging forms of degrees $r,s$ contributes $(-1)^{rs}$.

## Proof

1.1 From [F1]–[F3], $H'_3=d(B_2+d\zeta_1)=H_3+d^2\zeta_1=H_3$ and $G'_1=dC'_0=G_1$. Also $G'_3=d(C_2+d\Lambda_1)=G_3$; since $C'_0=C_0$ and $H'_3=H_3$, it follows that $\widetilde G'_3=G'_3-C'_0H'_3=\widetilde G_3$. [F1, F2, F3, algebra]

1.2 Using $dG_3=d^2C_2=0$ and $dH_3=0$, [F2]–[F3] give $G'_5-G_5=d\delta C_4=\tfrac12H_3\wedge d\Lambda_1-\tfrac12G_3\wedge d\zeta_1$. The term $d(d\Lambda_3)$ vanishes; $d(H_3\wedge\Lambda_1)=-H_3\wedge d\Lambda_1$ and $d(G_3\wedge\zeta_1)=-G_3\wedge d\zeta_1$ by the odd degree of the three-forms. [F1, F2, F3, algebra]

2.1 Substituting these changes and [F2] into [F1], $\widetilde G'_5-\widetilde G_5=(G'_5-G_5)-\tfrac12H_3\wedge d\Lambda_1+\tfrac12G_3\wedge d\zeta_1=0$ by step 1.2. The degree-two and degree-three factors commute by [F4], so the cancellation preserves the displayed wedge order. Thus all four strengths are invariant. The proof uses only local exact gauge shifts and does not address large-gauge or boundary terms. [F1, F2, F4, step 1.2, algebra] ∎
