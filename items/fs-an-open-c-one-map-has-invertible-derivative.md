---
id: fs-an-open-c-one-map-has-invertible-derivative
kind: false-statement
title: "FALSE: every open $C^1$ map has invertible derivative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism, cor-c-one-local-diffeomorphisms-are-open-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §8.5"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

**False claim:** every open $C^1$ map between open subsets of Euclidean space has invertible derivative at every point.

## Facts & Assumptions

**Given:** No assumptions beyond the false claim.

[L1] The map $x\mapsto x^3$ is a smooth open bijection of $\mathbb R$ with derivative zero at the origin, but its inverse is not differentiable there ([[cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism]]).

[L2] A $C^1$ map with everywhere-invertible derivative is an open map ([[cor-c-one-local-diffeomorphisms-are-open-maps]]).

## Refutation

**Proof technique:** direct.

1.1 The cube map in [L1] is open and $C^1$, but its derivative at zero is the zero linear map, which is not invertible. [L1, algebra]

2.1 Therefore openness does not imply derivative invertibility. The valid result [L2] is only the forward sufficient implication from derivative invertibility to openness. [step 1.1, L2] ∎
