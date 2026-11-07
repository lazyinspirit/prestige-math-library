---
dependency_level: 2
id: ex-polymath8b-admissible-50-tuple-of-diameter-246
kind: example
title: "Polymath8b’s admissible 50-tuple of diameter 246"
status: draft
origin: pipeline
proof_strategy: direct
deps: [thm-polymath8b-admissible-50-tuple-diameter-246]
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

The displayed tuple $H_{50}=\{0,4,6,16,30,34,36,46,48,58,60,64,70,78,84,88,90,94,100,106,108,114,118,126,130,136,144,148,150,156,160,168,174,178,184,190,196,198,204,210,214,216,220,226,228,234,238,240,244,246\}$ is admissible and has diameter $246$.


## Example references

[[thm-polymath8b-admissible-50-tuple-diameter-246|Finite admissibility verification]]


## Facts & Assumptions

**Given:** The displayed finite tuple $H_{50}$.

[F1] The tuple is admissible and its largest-minus-smallest shift is $246$ ([[thm-polymath8b-admissible-50-tuple-diameter-246]]).

## Verification

1.1 The source theorem gives the residue-class checks for all primes $p\le 50$; for $p>50$, a tuple with 50 entries occupies fewer than $p$ classes. Its displayed endpoints differ by $246$. [given, F1, algebra]

2.1 Therefore the example has the stated admissibility and diameter. [step 1.1, F1] ∎
