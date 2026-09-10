---
id: thm-additivity-of-radon-nikodym-derivatives
kind: theorem
title: "Radon-Nikodym derivatives add almost everywhere"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-radon-nikodym-derivative, thm-jordan-decomposition-for-signed-measures, prop-jordan-parts-and-total-variation-formulas-for-signed-measures, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: owner-authorized local defect repair; no independent judge
    delegated_by: owner
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.8"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\mu$ be a sigma-finite positive measure. Let $\nu_1,\nu_2$ be either two
finite signed measures or two finite complex measures, with
$\nu_1\ll\mu$ and $\nu_2\ll\mu$. Then
$$\frac{d(\nu_1+\nu_2)}{d\mu}=\frac{d\nu_1}{d\mu}+\frac{d\nu_2}{d\mu}\qquad\mu\text{-almost everywhere.}$$

## Facts & Assumptions

**Given:** AC and finite measures $\nu_1,\nu_2$ absolutely continuous with respect to $\mu$.

[L1] Under AC, absolutely continuous finite signed measures have unique almost-everywhere L1 densities; the repaired complex corollary supplies the same for finite complex measures. ([[def-axiom-of-choice]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]], [[def-radon-nikodym-derivative]])

[L2] The integral is linear on L1. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[L3] The Jordan parts of a finite-valued signed measure have finite totals (their totals are finite measure values on Hahn pieces); their sum is the total variation. ([[thm-jordan-decomposition-for-signed-measures]], [[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]])

## Proof

**Proof technique:** direct.

1.1 The sum $\nu_1+\nu_2$ is finite-valued and countably additive, and vanishes on every $\mu$-null set, so is a finite signed or finite complex measure of the same type and is absolutely continuous. In the signed case [L3] gives finite total variation for both summands and the sum. Any increasing finite-measure exhaustion for $\mu$ is therefore common to these measures. Under AC apply [L1] to choose $h_1,h_2\in L^1(\mu)$ representing $\nu_1,\nu_2$, and to obtain the almost-everywhere unique density of their sum. [L1, L3, given, choose]

2.1 By [L2], $h_1+h_2$ is L1, and for every measurable $E$, $(\nu_1+\nu_2)(E)=\int_Eh_1\,d\mu+\int_Eh_2\,d\mu=\int_E(h_1+h_2)\,d\mu.$ Thus it is a density of the sum. Uniqueness in [L1] gives the asserted equality of RN classes. [L1, L2, step 1.1, algebra] ∎
