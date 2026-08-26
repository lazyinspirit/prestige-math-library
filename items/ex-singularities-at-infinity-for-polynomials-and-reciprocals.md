---
id: ex-singularities-at-infinity-for-polynomials-and-reciprocals
kind: example
title: "Positive powers have poles at infinity and their reciprocals have removable singularities there"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-singularity-at-infinity, thm-removable-singularity-characterizations, thm-pole-characterizations]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For every integer $m\ge1$,

$$f(z)=z^m$$

has a pole of order $m$ at $\infty$, while

$$g(z)=\frac{1}{z^m}$$

has a removable singularity at $\infty$.

## Facts & Assumptions

**Given:** An integer $m\ge1$.

[L1] A singularity at infinity is classified by the singularity of the pulled-back function $h(w)=f(1/w)$ at $w=0$ ([[def-singularity-at-infinity]]).

[L2] A pole is characterized by a finite nonzero principal part, and a removable singularity by vanishing principal part or holomorphic extendability ([[thm-pole-characterizations]], [[thm-removable-singularity-characterizations]]).

## Verification

**Proof technique:** direct.

1.1 For $f(z)=z^m$, the pulled-back function is $f(1/w)=w^{-m}$ on $0<|w|<1/R$, so it has a pole of order $m$ at $0$ by [L2]; therefore $f$ has a pole of order $m$ at $\infty$ by [L1]. [L1, L2]

2.1 For $g(z)=z^{-m}$, the pulled-back function is $g(1/w)=w^m$, which is holomorphic at $0$ and vanishes there; by [L2] the singularity at $0$ is removable, so $g$ has a removable singularity at $\infty$ by [L1]. [L1, L2] ∎
