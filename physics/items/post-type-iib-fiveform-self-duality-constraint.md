---
id: post-type-iib-fiveform-self-duality-constraint
kind: postulate
title: Type IIB Five Form Self Duality Constraint
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
deps:
- def-supergravity-conventions-and-normalizations
- post-type-iib-two-derivative-supergravity-pseudoaction
- pthm-type-iib-bianchi-identities
- def-type-iib-potential-gauge-transformations
- pthm-type-iib-gauge-invariance-of-tilded-field-strengths
- def-type-iib-lorentzian-hodge-star
- thm-type-iib-lorentzian-hodge-star-properties
- thm-wedge-product-is-associative-and-graded-commutative
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: formulation-prerequisite
  pthm-type-iib-bianchi-identities: formulation-prerequisite
  def-type-iib-potential-gauge-transformations: formulation-prerequisite
  pthm-type-iib-gauge-invariance-of-tilded-field-strengths: formulation-prerequisite
  def-type-iib-lorentzian-hodge-star: mathematical-premise
  thm-type-iib-lorentzian-hodge-star-properties: mathematical-premise
  thm-wedge-product-is-associative-and-graded-commutative: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free
      notation, arXiv:1607.00327v3
    url: https://arxiv.org/pdf/1607.00327v3
    locator: §7.1, Definition 7.1, printed p. 36; inspected equation and five-form discussion.
  - title: 'Colin Sterckx, Modave Lecture notes: Introduction to Exceptional Field Theory, arXiv:2410.19600v1'
    url: https://arxiv.org/pdf/2410.19600v1
    locator: §3.2.3, equations (3.32)–(3.35), PDF pp. 31–32.
physical_scope: Adopted on-shell first-order condition for the gauge-invariant five-form in the selected source-free two-derivative
  type IIB formulation. It is imposed after variation and is not a consequence of the undoubled pseudoaction alone.
aliases: []
verification:
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

After varying *Type IIB Two Derivative Supergravity Pseudoaction*, separately impose $*_{g_s}\widetilde G_5=\widetilde G_5$ on the gauge-invariant real five-form in the oriented Lorentzian ten-dimensional convention *Lorentzian Hodge Star in Ten Dimensions*. By *Existence and Five-Form Properties of the Lorentzian Hodge Star*, $*_{g_s}^2=1$ on five-forms, so the equation is a consistent real constraint. It is an adopted formulation postulate, not an equation obtained by varying the undoubled pseudoaction. Since the degree is odd, the constraint also gives $\widetilde G_5\wedge\widetilde G_5=0$ and hence $|\widetilde G_5|^2=0$ pointwise. This scalar identity does not set $\widetilde G_5$ to zero.

## Postulate references

[[def-supergravity-conventions-and-normalizations]]

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[[pthm-type-iib-bianchi-identities]]

[[def-type-iib-potential-gauge-transformations]]

[[pthm-type-iib-gauge-invariance-of-tilded-field-strengths]]

[[def-type-iib-lorentzian-hodge-star]]

[[thm-type-iib-lorentzian-hodge-star-properties]]

[[thm-wedge-product-is-associative-and-graded-commutative]]

[Hamilton, §7.1, Definition 7.1](https://arxiv.org/pdf/1607.00327v3)

[Sterckx, §3.2.3, equations (3.32)–(3.35)](https://arxiv.org/pdf/2410.19600v1)

## Remarks

For a real five-form the star is an involution and its $+1$ eigenspace has dimension $126$ in each fiber by the mathematical theorem above. The statement does not identify a global potential or establish global flux quantization.
