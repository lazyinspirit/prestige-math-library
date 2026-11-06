---
id: pthm-type-iib-bianchi-identities
kind: physics-theorem
title: Type IIB Source Free Bianchi Identities
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
- post-type-iib-two-derivative-supergravity-pseudoaction
- thm-the-exterior-derivative-squares-to-zero
- thm-the-exterior-derivative-is-a-graded-derivation
- thm-wedge-product-is-associative-and-graded-commutative
dependency_roles:
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
    locator: §7.1, Definition 7.1 and Theorem 7.2(f), printed pp. 35–39; local derivation from potentials is given here.
physical_scope: Purely local source-free differential identities from smooth potentials; no magnetic sources, nontrivial gerbe
  patching, or global flux quantization.
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

On a smooth local patch with the potentials and field strengths of *Type IIB Two Derivative Supergravity Pseudoaction*,

$dH_3=0,\qquad dG_1=0,\qquad d\widetilde G_3=H_3\wedge G_1,\qquad d\widetilde G_5=H_3\wedge\widetilde G_3.$

These are Bianchi identities from the local potential definitions, not field equations. A source or nontrivial global potential patch can change the hypotheses.

## Statement references

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[Hamilton, §7.1, Theorem 7.2(f)](https://arxiv.org/pdf/1607.00327v3)

## Facts & Assumptions

**Given:** Smooth local potentials $B_2,C_0,C_2,C_4$ and the field-strength definitions in [F1].

[F1] [[post-type-iib-two-derivative-supergravity-pseudoaction]]: $H_3=dB_2$, $G_1=dC_0$, $G_3=dC_2$, $G_5=dC_4$, $\widetilde G_3=G_3-C_0H_3$, $\widetilde G_5=G_5-\tfrac12H_3\wedge C_2+\tfrac12G_3\wedge B_2$.

[F2] [[thm-the-exterior-derivative-squares-to-zero]] and [[thm-the-exterior-derivative-is-a-graded-derivation]]: $d^2=0$ and $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta$.

[F3] [[thm-wedge-product-is-associative-and-graded-commutative]]: exchanging degree-$r$ and degree-$s$ forms contributes $(-1)^{rs}$.

## Proof

1.1 The first two identities follow directly from [F1]–[F2]: $dH_3=d^2B_2=0$ and $dG_1=d^2C_0=0$. Also $dG_3=d^2C_2=0$ and $dG_5=d^2C_4=0$. [F1, F2, algebra]

2.1 By [F1]–[F2], $d\widetilde G_3=dG_3-dC_0\wedge H_3-C_0dH_3=-G_1\wedge H_3=H_3\wedge G_1$, where the last equality uses [F3] since the exchanged forms $G_1$ and $H_3$ have degrees one and three, so the exchange sign is $(-1)^{1\cdot3}=-1$. [F1, F2, F3, step 1.1, algebra]

3.1 Applying [F2] to the five-form gives $d\widetilde G_5=-\tfrac12d(H_3\wedge C_2)+\tfrac12d(G_3\wedge B_2)=\tfrac12H_3\wedge G_3-\tfrac12G_3\wedge H_3=H_3\wedge G_3$ by [F3]. Since $G_3=\widetilde G_3+C_0H_3$ and $H_3\wedge H_3=0$ for an odd-degree form by [F3], this equals $H_3\wedge\widetilde G_3$. [F1, F2, F3, step 1.1, algebra] ∎
