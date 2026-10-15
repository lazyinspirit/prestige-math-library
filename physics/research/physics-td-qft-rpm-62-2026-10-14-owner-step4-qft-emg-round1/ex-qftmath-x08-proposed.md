---
id: ex-qftmath-x08
kind: example
title: Hypothetical calibration error interval
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [lem-qft-example-deterministic-ratio-error]
dependency_roles:
  lem-qft-example-deterministic-ratio-error: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "X. Fan et al., Measurement of the Electron Magnetic Moment, Physical Review Letters 130, 071801 (2023), arXiv:2209.13084v2 (2022)"
      url: https://arxiv.org/html/2209.13084
    - title: "L. S. Brown and G. Gabrielse, Geonium theory: Physics of a single electron or ion in a Penning trap, Reviews of Modern Physics 58 (1986)"
      url: https://cfp.physics.northwestern.edu/documents/GeoniumTheoryReview.pdf
---

## Example

Take the stipulated nominal values $a=1\,\mathrm{Hz}$, $c=100\,\mathrm{Hz}$, and interval bounds $\epsilon_a=0.1\,\mathrm{Hz}$, $\epsilon_c=1\,\mathrm{Hz}$. The nominal ratio $R=1+a/c$ is dimensionless, and the exact absolute error bound is $11/9900$. These inputs are hypothetical interval values: they are not measurements, error bars, a standard error, or a confidence interval, and no reported Fan et al. data are used.

## Facts & Assumptions

**Given:** The four numerical values in the example are stipulated; the frequency unit is hertz.

[A1] $a=1\,\mathrm{Hz}$, $c=100\,\mathrm{Hz}$, $\epsilon_a=0.1\,\mathrm{Hz}$, and $\epsilon_c=1\,\mathrm{Hz}$, so $c>0$ and $0\le\epsilon_c<c$.

[F1] [[lem-qft-example-deterministic-ratio-error]] (Statement): the current carrier is a draft lemma with a complete local proof but no independent acceptance stamp. Its exact bound is conditional input to this numerical verification, not a result certified by this example: for positive-denominator interval data, $|R(a+\delta a,c+\delta c)-R(a,c)|\le(c\epsilon_a+|a|\epsilon_c)/(c(c-\epsilon_c))$ whenever $|\delta a|\le\epsilon_a$ and $|\delta c|\le\epsilon_c<c$.

## Verification
1.1 Put $u:=1\,\mathrm{Hz}$ and apply the real-valued map of [F1] to $a/u=1$, $c/u=100$, $\epsilon_a/u=1/10$, $\epsilon_c/u=1$, and perturbations $\delta a/u,\delta c/u$. The physical ratio agrees since $(a+\delta a)/(c+\delta c)=((a+\delta a)/u)/((c+\delta c)/u)$. Multiplying the bound numerator and denominator by $u^2$ gives the unit-labelled calculation: The numerator is $100\,\mathrm{Hz}\cdot0.1\,\mathrm{Hz}+1\,\mathrm{Hz}\cdot1\,\mathrm{Hz}=11\,\mathrm{Hz}^2$, and the denominator is $100\,\mathrm{Hz}\cdot99\,\mathrm{Hz}=9900\,\mathrm{Hz}^2$. Thus every allowed perturbation has $|R(a+\delta a,c+\delta c)-R(a,c)|\le11/9900$. [A1, F1, algebra]

2.1 The nominal value is $R(a,c)=1+1/100=101/100=1.01$; both the ratio and its bound are dimensionless because the frequency units cancel. The bound is a deterministic calculation for the stated intervals only, with no empirical or statistical interpretation. [A1, step 1.1, algebra] ∎
