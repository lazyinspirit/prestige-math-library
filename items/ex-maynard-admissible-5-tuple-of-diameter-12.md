---
dependency_level: 2
id: ex-maynard-admissible-5-tuple-of-diameter-12
kind: example
title: "Admissible 5-tuple of diameter 12"
status: draft
origin: pipeline
proof_strategy: direct
deps: [thm-maynard-admissible-5-tuple-diameter-12]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
---

## Example

The displayed tuple $H_{5}=\{0,2,6,8,12\}$ is admissible and has diameter $12$.


## Example references

[[thm-maynard-admissible-5-tuple-diameter-12|Finite admissibility verification]]


## Facts & Assumptions

**Given:** The displayed finite tuple $H_{5}$.

[F1] The tuple is admissible and its largest-minus-smallest shift is $12$ ([[thm-maynard-admissible-5-tuple-diameter-12]]).

## Verification

1.1 The source theorem gives the residue-class checks for all primes $p\le 5$; for $p>5$, a tuple with 5 entries occupies fewer than $p$ classes. Its displayed endpoints differ by $12$. [given, F1, algebra]

2.1 Therefore the example has the stated admissibility and diameter. [step 1.1, F1] ∎
