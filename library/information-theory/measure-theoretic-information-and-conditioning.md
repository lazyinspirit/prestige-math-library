---
page: measure-theoretic-information-and-conditioning
title: "Measure-Theoretic Information and Conditioning"
status: published
requires:
  - finite-alphabet-entropy-and-divergence
  - conditional-distributions-and-regular-conditional-probability
  - numerical-optimization-for-statistical-computation
items:
  - lem-kl-invariant-under-measurable-bijections
  - lem-product-of-two-probability-kernels
  - def-measure-theoretic-mutual-information
  - lem-same-marginal-conditional-product-law-well-defined
  - thm-general-kl-variational-and-partition-formulas
  - def-finite-alphabet-conditional-entropy-given-observation
  - def-law-entropy-as-self-mutual-information
  - def-standard-borel-conditional-mutual-information
  - thm-conditional-kl-is-measurable
  - def-conditional-kl-for-probability-kernels
  - rem-general-law-entropy-versus-differential-entropy
  - thm-finite-alphabet-conditional-entropy-version-and-chain-rule
  - thm-law-entropy-countable-support-characterization
  - thm-mutual-information-and-conditional-mutual-information-equality-conditions
  - thm-mutual-information-and-conditional-mutual-information-quantization
  - thm-general-kl-chain-rule-for-standard-borel-kernels
  - thm-mutual-information-chain-rule
examples: []
---

This page develops finite-alphabet conditional entropy for general standard-Borel observations, law entropy as self-mutual information, general mutual information as joint relative entropy, and conditional mutual information through the same-marginal conditional-product law. It proves kernel measurability, finite-partition and variational formulas, the KL chain rule, mutual-information chain rules, zero-information equality conditions, and finite-quantization limits. All divergences are directional extended nonnegative quantities; no proof subtracts infinities, and conditioning variables are retained in the quantization theorem. A separate remark distinguishes law entropy from differential entropy. The controlling source is IT02 in research/plan-information-theory-track.md; no separate pair-specific design section governs this page.
