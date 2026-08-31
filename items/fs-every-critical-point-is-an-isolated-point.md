---
id: fs-every-critical-point-is-an-isolated-point
kind: false-statement
title: "Critical points need not be isolated"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-critical-locus-and-critical-value-set]
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

**False claim:** every critical point of a smooth map is isolated.

## Facts & Assumptions

**Given:** The constant smooth map $F:\mathbb R\to\mathbb R$, $F(x)=0$.

[F1] The critical locus is the set of nonregular points ([[def-critical-locus-and-critical-value-set]]).

## Refutation
**Proof technique:** direct.

1.1 The differential of $F$ is zero at every point and is not surjective onto $T_0\mathbb R$, so every point of $\mathbb R$ is critical. [given, algebra]

2.1 The critical locus is therefore all of $\mathbb R$, which has no isolated points. This is the critical locus from [F1]. [F1, step 1.1]

3.1 Therefore critical points need not be isolated. [step 2.1] ∎
