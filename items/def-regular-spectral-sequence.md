---
id: def-regular-spectral-sequence
kind: definition
title: Regular spectral sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["def-homological-spectral-sequence", "prop-degree-reasons-force-stabilization-in-a-bounded-region"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Definition

For a homological spectral sequence as in [[def-homological-spectral-sequence]], **two-sided regularity** means that for every $(p,q)$ there is an integer $R\ge r_0$ such that for every $r\ge R$ both
$$d^r_{p,q}:E^r_{p,q}\longrightarrow E^r_{p-r,q+r-1},\qquad d^r_{p+r,q-r+1}:E^r_{p+r,q-r+1}\longrightarrow E^r_{p,q}$$
are zero. On this page the design term **regular** means this two-sided condition. The bound may depend on $(p,q)$; there need not be a single collapse page.

This differs from the convention on the prerequisite spectral-sequences page and in [Stacks, Definition 12.24.7](https://stacks.math.columbia.edu/tag/012K): there **regular** means eventual outgoing vanishing alone and **coregular** means eventual incoming vanishing. We call these **outgoing regularity** and **incoming regularity** when only one is intended. Neither may silently replace the two-sided hypothesis.

When both maps vanish the specified next-page isomorphism identifies $E^{r+1}_{p,q}$ with $E^r_{p,q}$ itself, since its kernel is the whole term and its incoming image is zero. Thus the condition gives canonical pointwise stationarity, as in [[prop-degree-reasons-force-stabilization-in-a-bounded-region]]. For first-quadrant support, the outgoing target is zero for $r>p$, and the incoming source is zero for $r>q+1$. Outside that support every page term is zero. These bounds include the axes and the entirely zero sequence, without a choice of representatives or an assumption of AC.
