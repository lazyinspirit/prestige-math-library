---
id: fs-positive-ext-vanishes-whenever-either-variable-is-injective
kind: false-statement
title: "FALSE: positive Ext vanishes whenever either variable is injective"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-positive-ext-vanishes-on-an-injective-second-variable, prop-positive-ext-vanishes-on-a-projective-first-variable]
proof_strategy: direct
verification:
  audited: 2026-09-06
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

FALSE: positive Ext vanishes whenever either variable is injective

## Facts & Assumptions

**Given:** The category of abelian groups and $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$.

## Refutation

**Proof technique:** direct.

1.1 The group $\mathbb Q/\mathbb Z$ is divisible and therefore injective, but it occurs as the quotient, hence as the first argument of the extension. If the sequence split, a retraction $\mathbb Q\to\mathbb Z$ would restrict to the identity on $\mathbb Z$. [given, algebra]

2.1 Every homomorphism $\mathbb Q\to\mathbb Z$ is zero, so the extension is nonsplit and yields $0\ne\operatorname{Ext}^1(\mathbb Q/\mathbb Z,\mathbb Z)$. Injectivity instead forces positive Ext to vanish in the second variable, and projectivity does so in the first. [step 1.1, algebra] ∎
