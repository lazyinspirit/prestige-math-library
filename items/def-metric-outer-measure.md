---
id: def-metric-outer-measure
kind: definition
title: "Metric outer measures"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-outer-measure, def-metric-space, def-metric-bounded-diameter]
justified_by: []
aliases: []
landmark: true
short: "metric outer measure"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Section 11.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space and let $\mu^*$ be an outer measure on $X$. An outer measure on a metric space is a **metric outer measure** when $\mu^*(A\cup B)=\mu^*(A)+\mu^*(B)$ for all nonempty $A,B$ with $d(A,B)>0$.

The nonempty restriction is necessary because set distance in [[def-metric-bounded-diameter]] is defined only when both sets are nonempty. If either set is empty, the same equality follows separately from $\mu^*(\varnothing)=0$.
