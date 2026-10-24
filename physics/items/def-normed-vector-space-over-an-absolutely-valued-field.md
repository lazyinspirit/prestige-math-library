---
id: def-normed-vector-space-over-an-absolutely-valued-field
title: "Normed vector space over an absolutely valued field"
kind: definition
status: published
origin: pipeline
deps: [def-multiplicative-absolute-value-on-a-field]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a75, Definition 5.4, p.9"
      url: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf
---

## Definition

Let F carry a multiplicative absolute value. A norm on an F-vector space V is a function $\|\cdot\|:V\to\mathbb R_{\ge0}$ satisfying $\|v\|=0$ exactly for $v=0$,
$$\|av\|=|a|\|v\|,\qquad\|v+w\|\le\|v\|+\|w\|.$$
Its metric is $d(v,w)=\|v-w\|$. The scalar absolute value may be archimedean, nonarchimedean or trivial; it is not restricted to real or complex scalars.
