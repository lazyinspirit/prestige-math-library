---
id: ex-first-barycentric-subdivision-of-a-triangle
kind: example
title: "First barycentric subdivision of a triangle"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-barycentric-subdivision-chain-operator, thm-barycentric-subdivision-is-a-chain-map]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Example

For the oriented triangle $[v_0v_1v_2]$, write $b_i$ for the midpoint of the
edge opposite $v_i$ and $b$ for its barycenter. Its first subdivision is the
sum of the six oriented triangles obtained by coning the two halves of each
oriented boundary edge to $b$.

## Facts & Assumptions

**Given:** An oriented affine $2$-simplex.

## Verification

**Proof technique:** direct.

1.1 Coning the three subdivided boundary edges to $b$ produces exactly six small triangles with their cone orientations. [given, construct]

2.1 Every interior radial or midpoint edge occurs twice with opposite orientations; the uncancelled edges are the once-subdivided boundary. Thus $\partial S=S\partial$ in this case. [step 1.1, algebra] ∎
