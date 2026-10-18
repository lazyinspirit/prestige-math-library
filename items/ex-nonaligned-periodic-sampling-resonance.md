---
id: ex-nonaligned-periodic-sampling-resonance
kind: example
title: "A nonaligned one-dimensional micro window has resonance error"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [lem-fehmm-one-dimensional-nonaligned-resonance-bound, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Example

Let $a(y)=1$ on $[0,1/2)$ and $a(y)=2$ on $[1/2,1)$, extended with period one. At phase $\theta=0$ and nonaligned ratio $r=\delta/\epsilon=3/2$, the exact sampled harmonic tensor is $A_r=6/5$, whereas $A^*=4/3$. The discrepancy is $2/15>0$ even though the continuum coefficient is periodic.

## Facts & Assumptions

**Given:** The two-phase periodic scalar coefficient, phase zero, and sample ratio $r=3/2$.

[F1] [[lem-fehmm-one-dimensional-nonaligned-resonance-bound]]: the sampled tensor is the reciprocal of the average reciprocal coefficient and obeys $|A_r-A^*|\le 2\Lambda^2/(\lambda r)$.

[F2] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: the affine pullback $y\mapsto3y/2$ preserves measurability and null sets, so the sampled reciprocal integral is well defined on the stated coefficient class.

## Proof



1.1 By [F2], the sample pullback and its reciprocal are measurable on $[0,1]$. Over $0\le t\le3/2$, the reciprocal coefficient equals $1$ for lengths $1/2$, $1/2$, and $1/2$ on the successive intervals $[0,1/2)$, $[1/2,1)$, and $[1,3/2)$, except that its value on the middle interval is $1/2$. Thus its integral is $1/2+1/4+1/2=5/4$; dividing by $r=3/2$ gives $\int_0^1a(3y/2)^{-1}dy=5/6$, so $A_r=6/5$. The full-period reciprocal mean is $(1+1/2)/2=3/4$, hence $A^*=4/3$. [F1, F2, algebra]

2.1 Therefore $|A_r-A^*|=|6/5-4/3|=2/15$. Here $\lambda=1$, $\Lambda=2$, and $1/r=2/3$, so the bound in [F1] is $2\cdot4\cdot(2/3)=16/3$; indeed $2/15\le16/3$. The example verifies both nonzero resonance and the stated conservative estimate. [F1, step 1.1, algebra] ∎
