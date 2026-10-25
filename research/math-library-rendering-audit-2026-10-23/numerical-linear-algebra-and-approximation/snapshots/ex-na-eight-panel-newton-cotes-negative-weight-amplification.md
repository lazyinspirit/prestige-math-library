---
id: ex-na-eight-panel-newton-cotes-negative-weight-amplification
kind: example
title: "Negative weights amplify sample perturbations in the nine-point Newton–Cotes rule"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature-examples
dependency_level: 6
deps: [def-na-closed-newton-cotes-eight-panel-rule, lem-na-closed-newton-cotes-eight-panel-weights-and-exactness, cor-na-closed-newton-cotes-eight-panel-peano-bound]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The finite absolute-value calculation is exact.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.1.1 and §13.2"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 217–219 and 223–227, Newton–Cotes weights and Peano error."

    - title: "NIST Digital Library of Mathematical Functions, §3.5(iv), Interpolatory Quadrature Rules"
      url: "https://dlmf.nist.gov/3.5"
      locator: "Full-text section §3.5(iv), equation 3.5.15 and accompanying text on integrated Lagrange interpolants and closed Newton–Cotes rules."
---

## Example

For a sample vector $s=(s_0,\ldots,s_8)\in\mathbb R^9$, write $\widehat Q_8(s):=\sum_{j=0}^8w_js_j$. If a perturbed sample vector is $s+\delta$ with $|\delta_j|\le\varepsilon$, then
$$|\widehat Q_8(s+\delta)-\widehat Q_8(s)|\le\frac{13714}{4725}\varepsilon.$$
This constant is sharp and exceeds $2$, the signed sum of the weights and the total weight of any positive rule exact on constants over $[-1,1]$. Independently, for $f\in C^{10}[-1,1]$ the quadrature error satisfies the Peano bound $\left(\int_{-1}^1|K_{10}(t)|\,dt\right)\|f^{(10)}\|_\infty$ of [[cor-na-closed-newton-cotes-eight-panel-peano-bound]].

## Facts & Assumptions

**Given:** A sample vector $s\in\mathbb R^9$, the nine weights of $Q_8$, and real perturbations $\delta_0,\ldots,\delta_8$ satisfying $|\delta_j|\le\varepsilon$.

[A1] $\varepsilon\ge0$ and $|\delta_j|\le\varepsilon$ for each node.

[F1] [[def-na-closed-newton-cotes-eight-panel-rule]]: the rule has weights with numerators $(989,5888,-928,10496,-4540,10496,-928,5888,989)$ and common denominator $14175$.

[F2] [[lem-na-closed-newton-cotes-eight-panel-weights-and-exactness]]: these coefficients are the integrated cardinal weights and the rule is exact through degree $9$.

[F3] [[cor-na-closed-newton-cotes-eight-panel-peano-bound]]: for $f\in C^{10}$, its integral error is bounded by $\|K_{10}\|_1\|f^{(10)}\|_\infty$ with the stated explicit kernel.

## Proof

1.1 The positive weight numerators sum to $34746$ and the absolute values of the negative numerators sum to $928+4540+928=6396$. Thus $\sum_j|w_j|=(34746+6396)/14175=41142/14175=13714/4725$, while $\sum_jw_j=2$. The triangle inequality and [A1] give $|\widehat Q_8(s+\delta)-\widehat Q_8(s)|=|\sum_jw_j\delta_j|\le\varepsilon\sum_j|w_j|$. Equality holds by taking $\delta_j=\varepsilon$ when $w_j>0$ and $\delta_j=-\varepsilon$ when $w_j<0$ (with either value when $w_j=0$), so the bound is sharp. [given, A1, F1, algebra]

2.1 For any separately supplied $f\in C^{10}[-1,1]$, [F2] and [F3] bound its deterministic integration error as stated. That smooth-function bound does not remove the sample-perturbation amplification in step 1.1. [given, F2, F3, step 1.1] ∎
