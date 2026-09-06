---
id: fs-projective-ext-and-injective-ext-are-equal-by-definition
kind: false-statement
title: "FALSE: projective and injective Ext are equal by definition"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ext-via-an-injective-resolution-of-the-second-variable, def-ext-via-a-projective-resolution-of-the-first-variable, thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic]
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

FALSE: projective and injective Ext are equal by definition

## Facts & Assumptions

**Given:** Objects $M,N$ with a projective resolution $P_\bullet\twoheadrightarrow M$ and an injective resolution $N\hookrightarrow I^\bullet$.

## Refutation

**Proof technique:** direct.

1.1 By definition the two groups are $H^q\operatorname{Hom}(P_\bullet,N)$ and $H^q\operatorname{Hom}(M,I^\bullet)$. They are cohomologies of different complexes, with no equality map included in either definition. [given, algebra]

2.1 The finite-diagonal double-complex argument supplies a natural isomorphism between these groups. Because that isomorphism is the conclusion of the balance theorem rather than a definitional identity, the asserted statement is false. [step 1.1, algebra] ∎
