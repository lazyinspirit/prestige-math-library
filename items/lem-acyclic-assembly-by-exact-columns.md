---
id: lem-acyclic-assembly-by-exact-columns
kind: lemma
title: "Acyclic assembly by exact columns"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-direct-sum-total-complex-on-finite-diagonals]
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
$C^\bullet$ maps to the bottom edge so that, for every $p$, the augmented
column
$$0\longrightarrow C^p\longrightarrow K^{p,0}\xrightarrow{v}K^{p,1}\xrightarrow{v}K^{p,2}\longrightarrow\cdots$$
is exact and the augmentations commute with the horizontal maps. Then the
induced cochain map $C^\bullet\to\operatorname{Tot}K$ is a quasi-isomorphism.

## Facts & Assumptions

**Given:** The first-quadrant double complex, compatible column augmentations, and exact augmented columns stated above.

## Proof

**Proof technique:** direct.

1.1 Adjoin $C^p$ in vertical degree $-1$. Compatibility makes this an augmented double complex, and the cone of $C^\bullet\to\operatorname{Tot}K$ is its signed total complex up to shift. In total degree $n$, only the finitely many columns $0\le p\le n+1$ occur; filtering by the largest horizontal degree has successive quotients equal to shifts of the exact augmented columns. [given, algebra]

2.1 Starting with one column and adjoining the others, the short exact sequences of successive filtered complexes show inductively that every finite truncation is acyclic. These truncations stabilize degreewise, so the full cone is acyclic. Hence $C^\bullet\to\operatorname{Tot}K$ is a quasi-isomorphism. [step 1.1, algebra] ∎
