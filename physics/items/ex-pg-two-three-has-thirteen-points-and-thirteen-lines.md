---
id: ex-pg-two-three-has-thirteen-points-and-thirteen-lines
kind: example
title: "$PG(2,3)$ has $13$ points and $13$ lines"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-pg-two-q-is-a-finite-projective-plane,
       thm-counts-in-a-finite-projective-plane]
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Noam D. Elkies, Math 155 notes: Feb. 3"
      url: "https://people.math.harvard.edu/~elkies/M155.09/feb03"
---

## Example

The finite projective plane $PG(2,3)$ has $13$ points and $13$ lines, and each
line contains $4$ points.

## Facts & Assumptions

**Given:** The projective plane $PG(2,3)$.

[L1] $PG(2,3)$ is a finite projective plane of order $3$ ([[thm-pg-two-q-is-a-finite-projective-plane]]).

[L2] A projective plane of order $n$ has $n^2+n+1$ points and the same number of lines ([[thm-counts-in-a-finite-projective-plane]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L2] with $n=3$ gives $3^2+3+1=13$ points and $13$ lines. [L1, L2, algebra]

2.1 The line $\langle e_1,e_2\rangle$ consists of the one-dimensional subspaces represented by $(1,0,0)$, $(0,1,0)$, $(1,1,0)$, and $(1,2,0)$, so it has $4$ projective points, exactly as order $3$ predicts. [L1, algebra] ∎
