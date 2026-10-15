---
id: ex-tdmath-hard-core-zero-beta
kind: example
title: A hard core remains at zero inverse temperature
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 8
deps:
  - def-tdmath-superstable-regular-interaction
  - thm-tdmath-retained-hard-zero-beta-limit
  - def-product-measure-on-sigma-finite-spaces
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-factorial-and-falling-factorial
dependency_roles:
  def-tdmath-superstable-regular-interaction: mathematical-premise
  thm-tdmath-retained-hard-zero-beta-limit: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Section 2, printed pp.172–174 / PDF pp.2–4: finite-volume Boltzmann weights assign zero weight to forbidden infinite-energy configurations for positive inverse temperature. The retained-admissibility zero-parameter convention is supplied by [[thm-tdmath-retained-hard-zero-beta-limit]], with the finite calculation proved below; Theorem 4 on printed p.177 allows a nonnegative multiplier; this finite retained-exclusion calculation is proved locally and does not invoke a positive-temperature LDP at zero."
---

## Example

In one spatial dimension, let $\phi(x)=+\infty$ for $|x|<a$ and $0$ otherwise, with $a>0$. On an interval $[0,L]$, define the beta-zero weight by retaining the forbidden-pair exclusion as in [[thm-tdmath-retained-hard-zero-beta-limit]]. If $L>a$, the two-particle canonical partition is
$$Z(L,2;0)=\frac{(L-a)^2}{2},$$
while the unrestricted ideal-gas value is $L^2/2$. Thus the retained hard-core beta-zero ensemble is not the Poisson ideal gas.

## Facts & Assumptions

**Given:** $a>0$, $L>a$, and the hard-admissibility convention.

[F1] [[def-tdmath-superstable-regular-interaction]]: the canonical positional integral has normalization $1/N!$.

[F2] [[thm-tdmath-retained-hard-zero-beta-limit]]: at beta zero, configurations with a forbidden pair receive weight zero and admissible configurations receive $z^N$.

[F3] [[def-product-measure-on-sigma-finite-spaces]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: the labeled coordinate measure is product Lebesgue measure, with rectangular volume and iterated integration.

[F4] [[def-factorial-and-falling-factorial]]: the canonical normalization uses $2!=2$.

## Verification

**Given:** The one-dimensional hard-rod potential and the stated interval.

1.1 On the ordered region $x_1<x_2$, allowed pairs satisfy $x_2\geq x_1+a$, so their volume is $\int_0^{L-a}(L-x_1-a)\,dx_1=(L-a)^2/2$. The coordinate-swap map preserves product Lebesgue measure, so the region $x_2<x_1$ has the same volume; the diagonal has zero product measure. Thus the full labeled allowed volume is $(L-a)^2$, and division by $2!$ gives $Z(L,2;0)=(L-a)^2/2$. [F1, F2, F3, F4, algebra]

2.1 Since $0<a<L$, $(L-a)^2/2<L^2/2$, the unrestricted ideal-gas two-particle canonical term. The strict deficit is caused by the forbidden separation band and remains at beta zero by [F2]. [F1, F2, step 1.1, algebra] ∎
