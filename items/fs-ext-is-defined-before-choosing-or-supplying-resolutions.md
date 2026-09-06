---
id: fs-ext-is-defined-before-choosing-or-supplying-resolutions
kind: false-statement
title: "FALSE: Ext is defined before choosing or supplying resolutions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ext-via-an-injective-resolution-of-the-second-variable, def-ext-via-a-projective-resolution-of-the-first-variable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

FALSE: Ext is defined before choosing or supplying resolutions

## Facts & Assumptions

**Given:** An abelian category, objects $M,N$, and the two resolution-based Ext constructions of this page.

## Refutation

**Proof technique:** direct.

1.1 The injective construction is the cohomology of $\operatorname{Hom}(M,I(N))$ and requires a supplied injective resolution $N\hookrightarrow I(N)$; the projective construction similarly requires a supplied resolution $P(M)\twoheadrightarrow M$. Neither complex is specified before that datum is supplied. [given, algebra]

2.1 Thus the raw resolution constructions are not definitions of a choice-free object merely from $M$ and $N$. Choice-independence is a later comparison result, so it cannot make the claim “defined before supplying resolutions” true. [step 1.1, algebra] ∎
