---
id: lem-acyclic-assembly-by-exact-rows
kind: lemma
title: "Acyclic assembly by exact rows"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-direct-sum-total-complex-on-finite-diagonals, lem-acyclic-assembly-by-exact-columns]
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

Let $K^{p,q}$ be a first-quadrant double cochain complex whose signed total
complex uses finite direct sums on every diagonal. Suppose a cochain complex
$E^\bullet$ maps to the left edge so that, for every $q$, the augmented row
$$0\longrightarrow E^q\longrightarrow K^{0,q}\xrightarrow{h}K^{1,q}\xrightarrow{h}K^{2,q}\longrightarrow\cdots$$
is exact and the augmentations commute with the vertical maps. Then the
induced cochain map $E^\bullet\to\operatorname{Tot}K$ is a quasi-isomorphism.

## Facts & Assumptions

**Given:** The first-quadrant double complex, compatible row augmentations, and exact augmented rows stated above.

## Proof

**Proof technique:** direct.

1.1 Interchange the two indices of $K$. Multiplying the component in bidegree $(p,q)$ by $(-1)^{pq}$ identifies its signed total complex with the total complex after the interchange; the augmented rows become exact augmented columns with compatible edge maps. [given, algebra]

2.1 Apply the exact-column assembly lemma to the interchanged double complex. Transporting its quasi-isomorphism back through the sign identification gives $E^\bullet\to\operatorname{Tot}K$. [step 1.1, algebra] ∎
