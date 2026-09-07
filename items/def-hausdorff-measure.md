---
id: "def-hausdorff-measure"
kind: "definition"
title: "Unnormalised Hausdorff measure"
deps: ["def-hausdorff-content-at-scale-delta", "lem-hausdorff-scale-monotonicity-and-limit"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264A–C,K
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
justified_by: ["thm-hausdorff-measure-is-an-outer-measure"]
---

## Definition

For every subset $A$ of a metric space and finite real $s\ge0$, define the **unnormalised Hausdorff measure** by

$$\mathcal H^s(A)=\sup_{0<\delta<\infty}\mathcal H^s_\delta(A)=\lim_{k\to\infty}\mathcal H^s_{2^{-k}}(A).$$

The scale functions use [[def-hausdorff-content-at-scale-delta]] and the limit exists by [[lem-hausdorff-scale-monotonicity-and-limit]]. The name here initially denotes a set function on all subsets. Its outer-measure axioms and the measure on its Carathéodory measurable domain are established below; no measurability of an arbitrary subset is built into the notation. No volume normalising factor is inserted.
