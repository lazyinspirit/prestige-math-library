---
id: def-countable-chart-gluing-of-a-nonnegative-density-measure
title: "Countable partition construction of the Borel set function"
kind: definition
status: draft
origin: pipeline
deps: ["def-borel-measurable-nonnegative-density-on-a-manifold", "cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover", "thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary", "def-nonnegative-lebesgue-integral"]
justified_by: ["thm-chart-gluing-defines-a-countably-additive-borel-density-measure", "thm-density-measure-is-independent-of-the-chart-gluing"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Lee density gluing construction pp.431\u2013432"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Definition

For a density $r$ as in [[def-borel-measurable-nonnegative-density-on-a-manifold]], choose a countable locally finite chart cover $(U_i,x_i)$ and a subordinate smooth partition of unity $(\varphi_i)$ with $\varphi_i\ge0$, $\operatorname{supp}\varphi_i\subset U_i$ and $\sum_i\varphi_i=1$. Define the proposed set function on $\mathcal B(M)$ by
$$\mu_{r,(x_i,\varphi_i)}(E)=\sum_i\int_{x_i(E\cap U_i)}(\varphi_i\circ x_i^{-1})r_{x_i}\,d\lambda_n.$$
Each term is the nonnegative integral of [[def-nonnegative-lebesgue-integral]], with $0\cdot\infty=0$. Its coefficient, extended by zero outside the chart image, is Borel; smoothness of that zero extension is not required. Empty sums and the empty-set value are zero. For $n=0$ use singleton charts and the mass-one coordinate convention.

Here is why the choices exist under countable choice, including at a boundary. From a countable base select a chart and a relatively compact ball or half-ball for each basis member whose closure fits inside such a chart; these members cover $M$. Their finite unions of compact closures give compact sets whose interiors cover $M$. Passing recursively to the least sufficiently large index gives an exhaustion $K_m\subset\operatorname{Int}K_{m+1}$. Cover each compact annulus $K_m\setminus\operatorname{Int}K_{m-1}$ by finitely many chart balls or half-balls whose closures lie in $\operatorname{Int}K_{m+1}\setminus K_{m-2}$ (take $K_0=K_{-1}=\varnothing$). Such small coordinate neighborhoods exist at every point of the annulus. Countable choice selects one finite cover per annulus. The resulting countable chart cover is locally finite: $\operatorname{Int}K_j$ misses all families indexed $m\ge j+2$, and only finitely many sets come from each remaining annulus. Apply [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]] to this cover; the boundaryless specialization is also [[cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover]]. If the subordinate partition has several terms per chart, aggregate those terms; local finiteness makes each sum smooth, and its support remains in the assigned chart.

Countable additivity is discharged by [[thm-chart-gluing-defines-a-countably-additive-borel-density-measure]]. Independence of both choices and the intrinsic notation $\mu_r$ are discharged by [[thm-density-measure-is-independent-of-the-chart-gluing]].
