---
id: lem-gts-general-landau-ginzburg-matrix-factorization-hom-dg
kind: lemma
title: The matrix-factorization Hom differential is a dg differential
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories
dependency_level: 1
deps:
  - def-gts-general-landau-ginzburg-matrix-factorization-data
dependency_roles:
  def-gts-general-landau-ginzburg-matrix-factorization-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alexander Polishchuk and Arkady Vaintrob, Chern characters and Hirzebruch–Riemann–Roch formula for matrix factorizations, arXiv:1002.2116v3"
      url: https://arxiv.org/pdf/1002.2116v3
      locator: "§2.1, Definition 2.1.1 and equation (2.3), printed pp. 15–16: the finite-projective commutative-algebra definition and Hom differential. Here the same algebraic construction is applied to finite-rank locally free sheaves and global sheaf maps on the stated ringed space; no singularity, generation or equivalence theorem is imported."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

For matrix factorizations $E,F$ of the same $W$ in [[def-gts-general-landau-ginzburg-matrix-factorization-data]], define, for homogeneous $\phi:E\to F$ of parity $p$,

$$D_{E,F}(\phi)=\delta_F\circ\phi-(-1)^p\phi\circ\delta_E.$$

Then $D_{E,F}^2=0$. For three factorizations, composition satisfies the graded Leibniz rule, and identity morphisms are closed. Hence these morphism modules form a differential graded category with $\mathbb Z/2$ grading.

## Facts & Assumptions

**Given:** The sheaf of scalars is commutative, and $\delta_E^2=\delta_F^2=W\operatorname{id}$ for every object.

[F1] A matrix factorization has an odd differential-like map with square $W\operatorname{id}$ ([[def-gts-general-landau-ginzburg-matrix-factorization-data]]).

## Proof

1.1 If $\phi$ has parity $p$, then $D\phi$ has parity $p+1$. Expanding once more gives
$$D^2\phi=\delta_F^2\phi-(-1)^p\delta_F\phi\delta_E-(-1)^{p+1}\delta_F\phi\delta_E-\phi\delta_E^2.$$
The middle coefficients sum to zero, while [F1] turns the first and last terms into $W\phi-\phi W=0$, since $W$ acts centrally as a scalar. Thus $D^2=0$. [given, F1, algebra]

2.1 For homogeneous $\psi:F\to G$ of parity $q$, expand both sides: $D(\psi\phi)=\delta_G\psi\phi-(-1)^{p+q}\psi\phi\delta_E$, whereas $D\psi\,\phi+(-1)^q\psi\,D\phi$ equals the same expression because the two intermediate terms $(-1)^q\psi\delta_F\phi$ cancel. This is the graded Leibniz rule. [given, step 1.1, algebra]

3.1 Composition is associative because it is composition of sheaf maps, and for each $E$, $D(\operatorname{id}_E)=\delta_E-\delta_E=0$. Together with [step 1.1], the morphism differential squares to zero and preserves the identities, proving the dg-category axioms. [given, step 1.1, step 2.1, algebra] ∎

## Definition references

[[def-gts-general-landau-ginzburg-matrix-factorization-data]]

