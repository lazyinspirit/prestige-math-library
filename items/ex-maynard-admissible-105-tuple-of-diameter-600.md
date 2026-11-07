---
dependency_level: 2
id: ex-maynard-admissible-105-tuple-of-diameter-600
kind: example
title: "Maynard’s admissible 105-tuple of diameter 600"
status: draft
origin: pipeline
proof_strategy: direct
deps: [thm-maynard-admissible-105-tuple-diameter-600]
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

The displayed tuple $H_{105}=\{0,10,12,24,28,30,34,42,48,52,54,64,70,72,78,82,90,94,100,112,114,118,120,124,132,138,148,154,168,174,178,180,184,190,192,202,204,208,220,222,232,234,250,252,258,262,264,268,280,288,294,300,310,322,324,328,330,334,342,352,358,360,364,372,378,384,390,394,400,402,408,412,418,420,430,432,442,444,450,454,462,468,472,478,484,490,492,498,504,510,528,532,534,538,544,558,562,570,574,580,582,588,594,598,600\}$ is admissible and has diameter $600$.


## Example references

[[thm-maynard-admissible-105-tuple-diameter-600|Finite admissibility verification]]


## Facts & Assumptions

**Given:** The displayed finite tuple $H_{105}$.

[F1] The tuple is admissible and its largest-minus-smallest shift is $600$ ([[thm-maynard-admissible-105-tuple-diameter-600]]).

## Verification

1.1 The source theorem gives the residue-class checks for all primes $p\le 105$; for $p>105$, a tuple with 105 entries occupies fewer than $p$ classes. Its displayed endpoints differ by $600$. [given, F1, algebra]

2.1 Therefore the example has the stated admissibility and diameter. [step 1.1, F1] ∎
