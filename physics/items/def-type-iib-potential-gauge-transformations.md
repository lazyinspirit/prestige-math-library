---
id: def-type-iib-potential-gauge-transformations
kind: definition
title: Type IIB Potential Gauge Transformations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
- def-supergravity-conventions-and-normalizations
- post-type-iib-two-derivative-supergravity-pseudoaction
- thm-wedge-product-is-associative-and-graded-commutative
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  thm-wedge-product-is-associative-and-graded-commutative: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free
      notation, arXiv:1607.00327v3
    url: https://arxiv.org/pdf/1607.00327v3
    locator: §7.1, generalized gauge transformations following Definition 7.1, printed p. 36; checked against the displayed
      potential formulas.
physical_scope: Local small gauge transformations of smooth potentials on a source-free patch with dH3=0. This definition
  excludes large gauge transformations, nontrivial gerbe patching, brane worldvolume fields, and boundary contributions.
aliases: []
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

On a contractible smooth patch, let $\zeta_1,\Lambda_1,\Lambda_3$ be smooth real gauge-parameter forms of degrees $1,1,3$. With the raw and tilded fields of *Type IIB Two Derivative Supergravity Pseudoaction*, define

$$B'_2=B_2+d\zeta_1,\qquad C'_0=C_0,\qquad C'_2=C_2+d\Lambda_1,\qquad C'_4=C_4+d\Lambda_3-\frac12H_3\wedge\Lambda_1+\frac12G_3\wedge\zeta_1.$$

The associated field strengths are those defined in *Type IIB Two Derivative Supergravity Pseudoaction*. The local transformation maps are definitions; their invariance consequence is established separately after this definition.

## Definition references

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[Hamilton, §7.1, generalized gauge transformations](https://arxiv.org/pdf/1607.00327v3)

## Remarks

The theorem proves invariance of the field strengths. Invariance of the full pseudoaction up to boundary terms is not asserted here; it requires a separate check of the Chern–Simons transformation and boundary conditions.

The gauge-parameter component dimensions are $[\zeta_M]=[\Lambda_M]=[\Lambda_{MNP}]=L$. Since a coordinate derivative has dimension $L^{-1}$ and the potential components are dimensionless under the adopted conventions, each component of $d\zeta_1$, $d\Lambda_1$, $d\Lambda_3$, $H_3\wedge\Lambda_1$, and $G_3\wedge\zeta_1$ is dimensionless, as required by the shifts of $B_2,C_2,C_4$.
