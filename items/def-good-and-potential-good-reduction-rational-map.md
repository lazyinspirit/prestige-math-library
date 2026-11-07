---
dependency_level: 1
id: def-good-and-potential-good-reduction-rational-map
kind: definition
title: "Good and potentially good reduction of a rational map"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-multiplicative-absolute-value-on-a-field
  - def-sylvester-resultant-of-binary-forms
  - def-rational-map-on-projective-line-degree
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, \u00a71.2, definitions preceding Theorem 1.9"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Definition

Let $L$ be a field with a nonarchimedean absolute value, let $\mathcal O_L=\{a:|a|\le1\}$, and let $\phi$ be a degree-$d$ rational map of $\mathbb P^1_L$, where $d\ge2$. A homogeneous lift is a pair $F=(F_1,F_2)$ of homogeneous degree-$d$ forms with nonzero Sylvester resultant $R_F=\operatorname{Res}_{d,d}(F_1,F_2)$, representing $\phi([x:y])=[F_1(x,y):F_2(x,y)]$. The lift has **good reduction** if its coefficients belong to $\mathcal O_L$ and $|R_F|=1$. The rational map has good reduction if it admits such a lift. It has **potentially good reduction** if, in some supplied finite extension $L'/L$ with a nonarchimedean absolute value extending that of $L$, a Möbius conjugate of the map has good reduction. It has **genuinely bad reduction** if it does not have potentially good reduction. If $L$ is algebraically closed, the finite extension in this definition is unnecessary. These definitions assert neither existence of extensions of valuations nor existence or algebraic closedness of any completion.

## Definition references

[[def-multiplicative-absolute-value-on-a-field]]

[[def-sylvester-resultant-of-binary-forms]]

[[def-rational-map-on-projective-line-degree]]
