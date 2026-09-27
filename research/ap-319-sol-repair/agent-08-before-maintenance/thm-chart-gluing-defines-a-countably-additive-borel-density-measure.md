---
id: thm-chart-gluing-defines-a-countably-additive-borel-density-measure
title: "The glued set function is a Borel measure"
kind: theorem
status: published
origin: pipeline
deps: ["def-countable-chart-gluing-of-a-nonnegative-density-measure", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "cor-beppo-levi-theorem"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
---

## Statement

The set function of [[def-countable-chart-gluing-of-a-nonnegative-density-measure]] is a countably additive nonnegative Borel measure. No local integrability or sigma-finiteness of $r$ is required.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Fixed gluing data and arbitrary disjoint Borel sequence.

[F1] [[def-countable-chart-gluing-of-a-nonnegative-density-measure]]: The set function is the sum of nonnegative weighted chart integrals.

[F2] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]: Integrating a fixed nonnegative measurable coefficient over measurable sets defines a measure.

[F3] [[cor-beppo-levi-theorem]]: Integration commutes with a countable nonnegative sum.

## Proof

1.1 For each chart set $q_i=(\varphi_i\circ x_i^{-1})r_{x_i}$. This is nonnegative Borel. The set function $\nu_i(E)=\int_{x_i(E\cap U_i)}q_i\,d\lambda_n$ is a measure: disjoint Borel sets have disjoint Borel chart images, and the indefinite-integral theorem supplies countable additivity there. In dimension zero it is a singleton weight times its indicator, hence also a measure, even for infinite weight. [F1, F2]

2.1 For disjoint Borel $E_k$, $\nu_i(\bigcup_kE_k)=\sum_k\nu_i(E_k)$; equivalently apply the nonnegative summation theorem to $q_i\mathbf1_{x_i(E_k\cap U_i)}$. For $a_{ik}=\nu_i(E_k)\ge0$, both iterated sums equal $\sup_{m,l}\sum_{i\le m,k\le l}a_{ik}$: a finite selection in any row fits in some finite rectangle, and conversely every rectangle is bounded by either iterated sum. Consequently $\mu(\bigcup_kE_k)=\sum_k\mu(E_k)$. [F3, step 1.1, F1]

3.1 Every $\nu_i(\varnothing)=0$, so $\mu(\varnothing)=0$; all values are nonnegative extended reals. Zero coefficients contribute zero, and a one-term family gives its chart measure. Thus the claimed Borel measure exists with no finiteness assumption. [step 1.1, step 2.1] ∎
