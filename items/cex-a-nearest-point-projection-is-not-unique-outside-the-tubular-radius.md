---
id: cex-a-nearest-point-projection-is-not-unique-outside-the-tubular-radius
kind: counterexample
title: "A nearest-point projection need not be unique outside the tubular radius"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement refuted

Nearest-point projection onto an embedded submanifold stays uniquely defined
everywhere in the ambient space.

## Facts & Assumptions

**Given:** The unit circle $S^1\subseteq\mathbb R^2$ and the center point
$0\in\mathbb R^2$.

[L1] Nearest-point projection agrees with the tubular retraction only after one
shrinks to a sufficiently small tube
([[prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking]]).

## Counterexample
**Proof technique:** direct.

1.1 Every point of $S^1$ is distance $1$ from the origin. Hence the origin has infinitely many nearest points on $S^1$. [given, algebra]

2.1 Therefore nearest-point projection is not uniquely defined at the origin, which lies outside every sufficiently small annular tubular neighbourhood. This is exactly the boundary described in [L1]. [L1, step 1.1] ∎
