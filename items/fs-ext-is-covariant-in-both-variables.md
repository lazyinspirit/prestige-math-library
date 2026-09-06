---
id: fs-ext-is-covariant-in-both-variables
kind: false-statement
title: "FALSE: Ext is covariant in both variables"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable, prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable]
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

FALSE: Ext is covariant in both variables

## Facts & Assumptions

**Given:** A morphism $a:M'\to M$, a morphism $b:N\to N'$, and balanced Ext.

## Refutation

**Proof technique:** direct.

1.1 Precomposition sends $f:M\to I^q(N)$ to $f\circ a:M'\to I^q(N)$, hence gives $\operatorname{Ext}^q(M,N)\to\operatorname{Ext}^q(M',N)$; its direction is opposite to $a$. [given, algebra]

2.1 Postcomposition by the comparison induced by $b$ gives $\operatorname{Ext}^q(M,N)\to\operatorname{Ext}^q(M,N')$. Thus only the second variable is covariant, while the first is contravariant, disproving covariance in both. [step 1.1, algebra] ∎
