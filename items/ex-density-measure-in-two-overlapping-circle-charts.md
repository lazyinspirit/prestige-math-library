---
id: ex-density-measure-in-two-overlapping-circle-charts
title: "Circle overlap weights count each arc once"
kind: example
status: published
origin: pipeline
deps: ["thm-density-measure-is-independent-of-the-chart-gluing", "thm-density-measure-integration-agrees-with-smooth-density-integration", "thm-lebesgue-measure-of-a-box-of-every-kind"]
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

## Example

For $S^1=\mathbb R/(2\pi\mathbb Z)$ take the angular charts with images $(-\pi,\pi)$ and $(0,2\pi)$. The coefficient one in both charts defines a positive smooth density with total mass $2\pi$, for any subordinate partition.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Circle overlap translations and a disjoint semicircle calculation.

[F1] [[thm-density-measure-is-independent-of-the-chart-gluing]]: Every Borel set in a chart has its coefficient integral, independent of partition.

[F2] [[thm-density-measure-integration-agrees-with-smooth-density-integration]]: Nonnegative integration equals the sum of weighted chart integrals.

[F3] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: An interval has its length as measure; a singleton has length zero.

## Verification

1.1 Write $q:\mathbb R\to S^1$ for the quotient. The chart domains are $U_1=S^1\setminus\{q(\pi)\}$ and $U_2=S^1\setminus\{q(0)\}$. On one overlap component $x_2=x_1$, and on the other $x_2=x_1+2\pi$. Both derivatives equal one, so the two constant coefficients satisfy the density law. [given]

2.1 The disjoint decomposition is $S^1=q((0,\pi))\sqcup q((\pi,2\pi))\sqcup\{q(0),q(\pi)\}$. The chart formula assigns the two arcs masses $\pi$ and $\pi$, and the endpoints mass zero. Hence $\mu_r(S^1)=2\pi$. [F1, F3, step 1.1]

3.1 For any subordinate pair $(\varphi_1,\varphi_2)$, translate the negative-angle part of the first chart by $2\pi$. Translation has unit Jacobian. The chart-sum formula becomes $\int_0^{2\pi}(\varphi_1(q(t))+\varphi_2(q(t)))\,dt=\int_0^{2\pi}1\,dt=2\pi$, ignoring only the already null endpoints. Thus overlapping chart weights count each arc once. Empty arcs contribute zero. [F1, F2, F3, step 1.1, step 2.1] ∎
