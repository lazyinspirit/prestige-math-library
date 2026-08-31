---
id: cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective
kind: corollary
title: "A smooth map from lower to higher dimension cannot be surjective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-image-of-a-lower-dimensional-c1-manifold-is-null,
       prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

If $F:M^m\to N^n$ is smooth and $m<n$, then $F$ is not surjective onto any
nonempty $N$.

## Facts & Assumptions

**Given:** A smooth map $F:M^m\to N^n$ with $m<n$ and $N\neq\varnothing$.

[L1] The image of a lower-dimensional $C^1$ manifold is null ([[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]).

[L2] In a positive-dimensional manifold, a null set has dense complement ([[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], $F(M)$ is a null subset of $N$. Since $m<n$, the target dimension is positive. [L1, given]

2.1 If $F$ were surjective, then $N=F(M)$ would be null in itself. But [L2] would then force its complement $\varnothing$ to be dense in $N$, impossible because $N$ is nonempty. [L2, step 1.1, contradiction]

3.1 Hence $F$ cannot be surjective. [discharge-contradiction: surjectivity impossible, step 2.1] ∎