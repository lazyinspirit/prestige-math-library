---
id: thm-additivity-of-radon-nikodym-derivatives
kind: theorem
title: "Radon-Nikodym derivatives add almost everywhere"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-radon-nikodym-derivative,
       thm-integration-against-a-radon-nikodym-derivative,
       thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality,
       cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.8"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

Let $\mu$ be a sigma-finite positive measure. Let $\nu_1,\nu_2$ be either two
finite signed measures or two finite complex measures, with
$\nu_1\ll\mu$ and $\nu_2\ll\mu$. Then
$$\frac{d(\nu_1+\nu_2)}{d\mu}=\frac{d\nu_1}{d\mu}+\frac{d\nu_2}{d\mu}\qquad\mu\text{-almost everywhere.}$$

## Facts & Assumptions

**Given:** Measures $\nu_1,\nu_2$ absolutely continuous with respect to $\mu$.

[L1] A representative of $d\nu/d\mu$ recovers the measurable-set values of $\nu$. ([[thm-integration-against-a-radon-nikodym-derivative]])

[L2] The representing density is unique up to $\mu$-almost-everywhere equality
for signed measures under the Radon--Nikodym hypotheses and for finite complex
measures
([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]],
[[cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]]).

## Proof

**Proof technique:** direct.

1.1 Choose representatives $h_j$ of $d\nu_j/d\mu$ for $j=1,2$. For every measurable set $E$, [L1] gives $$(\nu_1+\nu_2)(E)=\nu_1(E)+\nu_2(E)=\int_E h_1\,d\mu+\int_E h_2\,d\mu=\int_E(h_1+h_2)\,d\mu.$$ [L1, choose, algebra]

2.1 The function $h_1+h_2$ is therefore a density for $\nu_1+\nu_2$, so [L2] yields $$\frac{d(\nu_1+\nu_2)}{d\mu}=h_1+h_2=\frac{d\nu_1}{d\mu}+\frac{d\nu_2}{d\mu}\qquad\mu\text{-almost everywhere.}$$ [step 1.1, L2] ∎
