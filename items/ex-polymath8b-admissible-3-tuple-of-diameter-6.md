---
dependency_level: 2
id: ex-polymath8b-admissible-3-tuple-of-diameter-6
kind: example
title: "Admissible 3-tuple of diameter 6"
status: draft
origin: pipeline
proof_strategy: direct
deps: [thm-polymath8b-admissible-3-tuple-diameter-6]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
---

## Example

The displayed tuple $H_{3}=\{0,2,6\}$ is admissible and has diameter $6$.


## Example references

[[thm-polymath8b-admissible-3-tuple-diameter-6|Finite admissibility verification]]


## Facts & Assumptions

**Given:** The displayed finite tuple $H_{3}$.

[F1] The tuple is admissible and its largest-minus-smallest shift is $6$ ([[thm-polymath8b-admissible-3-tuple-diameter-6]]).

## Verification

1.1 The source theorem gives the residue-class checks for all primes $p\le 3$; for $p>3$, a tuple with 3 entries occupies fewer than $p$ classes. Its displayed endpoints differ by $6$. [given, F1, algebra]

2.1 Therefore the example has the stated admissibility and diameter. [step 1.1, F1] ∎
