---
id: rem-weyl-kac-products-are-formal-not-analytic-identities-here
kind: remark
title: Weyl Kac products are formal not analytic identities here
deps: ["def-kac-moody-formal-character-completion", "def-kac-moody-denominator-product-with-root-multiplicities"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Sections 9.2 and 10.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Sections 10.7 and 11.2
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
---

## Remark

The completion in [[def-kac-moody-formal-character-completion]] consists of coefficient arrays supported in finitely many downward cones. Equality on this page means equality of those coefficients. For a fixed difference $\sum b_i\alpha_i\in Q^+$, each contributing summand of a product has simple coordinates bounded by the $b_i$, so there are finitely many pairs. In an inverse of $1+u$, with strictly positive-depth $u$, only powers up to $\sum b_i$ contribute. The root product of [[def-kac-moody-denominator-product-with-root-multiplicities]] has finitely many relevant roots and finite multiplicities at that same bound.

These bounds justify the sums, products, inverses and coefficient extractions used in the proofs. They do not supply a numerical value for $e^\lambda$, an analytic region of convergence, or permission to rearrange a conditionally convergent complex series. Even a specialization making a displayed denominator zero is not an operation asserted here. The zero coefficient, empty product and unit inverse are ordinary formal algebra conventions. Weyl symmetry was proved for the particular arrays used, not assumed for arbitrary elements of the completion. No AC or analytic assertion is being added.
