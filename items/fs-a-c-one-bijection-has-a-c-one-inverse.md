---
id: fs-a-c-one-bijection-has-a-c-one-inverse
kind: false-statement
title: "FALSE: every $C^1$ bijection has a $C^1$ inverse"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Exercise 8.5.4"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

**False claim:** every $C^1$ bijection between open subsets of Euclidean space has a $C^1$ inverse.

## Facts & Assumptions

**Given:** No assumptions beyond the false claim.

[L1] The map $x\mapsto x^3$ is a smooth open bijection of $\mathbb R$ with derivative zero at the origin, but its inverse is not differentiable there ([[cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism]]).

## Refutation

**Proof technique:** direct.

1.1 The map in [L1] satisfies the $C^1$ bijection hypothesis of the false claim. [L1]

2.1 Its inverse fails even to be differentiable at zero by [L1], and therefore cannot be $C^1$. Hence the claim is false. [step 1.1, L1] ∎
