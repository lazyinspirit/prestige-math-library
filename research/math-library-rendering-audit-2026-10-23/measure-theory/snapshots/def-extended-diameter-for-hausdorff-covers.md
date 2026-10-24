---
id: "def-extended-diameter-for-hausdorff-covers"
kind: "definition"
title: "Extended diameter for Hausdorff covers"
deps: ["def-metric-bounded-diameter", "def-extended-reals"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264A, 264K
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

For a metric space $(X,d)$ extend the diameter of [[def-metric-bounded-diameter]] to every subset $A\subseteq X$ by

$$\operatorname{diam}A=\begin{cases}0&A=\varnothing,\\ \sup\{d(x,y):x,y\in A\}&A\ne\varnothing\text{ and }A\text{ bounded},\\+\infty&A\text{ unbounded}.\end{cases}$$

The bounded nonempty branch is the existing real diameter; the infinite value belongs to [[def-extended-reals]]. A nonempty set has diameter zero exactly when it is a singleton: all its pairwise distances must be zero. No value of a point-to-empty-set distance is introduced.
