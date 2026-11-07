---
id: def-affine-hyperbolic-curve-type
kind: definition
title: Affine hyperbolic curve and its type
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-divisor-smooth-proper-curve
  - def-genus-euler-characteristic-curve
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Akio Tamagawa, The Grothendieck conjecture for affine curves, §4, notation before Theorem 4.3
      url: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614
    - title: "Kirsten Wickelgren, Notes for the Talk: On the Section Conjecture, §§1.7–1.9"
      url: https://services.math.duke.edu/~kgw/Wickelgren_On_the_section_conjecture_7-23-12.pdf
---

## Definition

Assume the Axiom of Choice. Let $k$ be a field and let $(C,D)$ consist of a smooth, proper, geometrically connected curve $C/k$ and a reduced effective divisor $D$ whose base change to an algebraic closure $\bar k$ is reduced and finite; put $U=C\setminus D$ and require $U$ to be affine. Set $g=\dim_k H^1(C,\mathcal O_C)$ and $r=\#D(\bar k)$. The type of this compactification pair is $(g,r)$. It is hyperbolic when $2g-2+r>0$. No uniqueness of a compactification is asserted by this definition.

## Definition references

[Tamagawa, affine hyperbolic curves, §4 and Theorem 4.3](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614)

[Wickelgren, hyperbolic-curve conventions, §§1.7–1.9](https://services.math.duke.edu/~kgw/Wickelgren_On_the_section_conjecture_7-23-12.pdf)

[[def-algebraic-curve-over-field]]

[[def-divisor-smooth-proper-curve]]

[[def-genus-euler-characteristic-curve]]
