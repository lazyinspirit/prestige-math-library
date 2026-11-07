---
id: op-grothendieck-section-conjecture-for-proper-hyperbolic-curves-over-number-fields
kind: open-problem
title: Grothendieck section conjecture for proper hyperbolic curves over number fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-arithmetic-fundamental-group-extension
  - def-genus-euler-characteristic-curve
  - def-number-field
  - thm-arithmetic-fundamental-group-sequence-is-exact
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Jakob Stix, On the period-index problem in light of the section conjecture, §1.1
      url: https://arxiv.org/pdf/0802.4125
    - title: W. Porowski, Lectures on the Grothendieck Section Conjecture, pp. 1–2
      url: https://ahgt.math.cnrs.fr/assets/pdf/Porowski%20-%20Lecture%20on%20section%20conjecture.pdf
---

## Open problem

Assume the Axiom of Choice. Let $k$ be a number field, meaning a finite extension of $\mathbb Q$, and let $C/k$ be a smooth, proper, geometrically connected curve of genus at least two. The rational-point map sends $x\in C(k)$ to the conjugacy class, under $\pi_1^{\mathrm{et}}(C_{\bar k},\bar c)$, of the section of $p_C:\pi_1^{\mathrm{et}}(C,\bar c)\to G_k$ induced by $x$. The Grothendieck section conjecture asks whether this map from $C(k)$ to the set of continuous sections modulo geometric conjugacy is bijective.

## Open problem references

[Stix, section-conjecture formulation and period-index context, §1.1](https://arxiv.org/pdf/0802.4125)

[[def-number-field]]

[[def-arithmetic-fundamental-group-extension]]

[[def-genus-euler-characteristic-curve]]
## Status

This is a conjecture, not an established theorem. The formulation and status were checked through 25 October 2026. Results for the generic pointed curve over a moduli function field and restricted or conditional local/global cases do not establish the universal assertion for every proper hyperbolic curve over a number field.


## Status references

[Porowski, lecture overview and open-problem status, pp. 1–2](https://ahgt.math.cnrs.fr/assets/pdf/Porowski%20-%20Lecture%20on%20section%20conjecture.pdf)

[Luo and Watanabe, The Section Conjecture for Generic Pointed Curves, abstract and §1](https://arxiv.org/abs/2610.24986)
