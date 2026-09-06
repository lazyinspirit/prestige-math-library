---
id: fs-baer-sum-is-formed-by-taking-only-the-direct-sum-of-middle-objects
kind: false-statement
title: "FALSE: Baer sum only takes the direct sum of middle objects"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-baer-sum-of-extension-classes, thm-baer-sum-makes-extension-classes-an-abelian-group]
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
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

FALSE: Baer sum only takes the direct sum of middle objects

## Facts & Assumptions

**Given:** Two extensions $0\to N\to E_i\to M\to0$ for $i=1,2$.

## Refutation

**Proof technique:** direct.

1.1 Taking their direct sum gives $0\to N\oplus N\to E_1\oplus E_2\to M\oplus M\to0$, whose endpoints are $N\oplus N$ and $M\oplus M$, not the required $N$ and $M$. [given, algebra]

2.1 Pulling this sequence back along $\Delta:M\to M\oplus M$ restores the quotient $M$, and pushing out along $\nabla:N\oplus N\to N$ restores the subobject $N$. These two operations, not merely the direct sum of middle terms, define the Baer sum. [step 1.1, algebra] ∎
