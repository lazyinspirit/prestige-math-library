---
id: thm-sine-and-cosine-parametrize-the-unit-circle
kind: theorem
title: "$t\\mapsto(\\cos t,\\sin t)$ is a bijection from $[0,2\\pi)$ onto the real unit circle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-cosine-zero-sets-and-fundamental-period, def-pi-via-first-positive-cosine-zero]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement

The map $t\mapsto(\cos t,\sin t)$ is a bijection from $[0,2\pi)$ onto $S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$. The conventions and prerequisite facts used below are recorded in [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[def-pi-via-first-positive-cosine-zero]].

## Facts & Assumptions

**Given:** A point $(x,y)$ on $S^1$ or parameters $s,t\in[0,2\pi)$.

## Proof

**Proof technique:** direct.

1.1 The Pythagorean identity puts every image point on $S^1$. [given]

1.2 The range and sign theorem supplies an angle in the stated half-open interval with prescribed cosine and the compatible sine, proving surjectivity. [given]

2.1 If two parameters have the same pair, the sine--cosine period theorem says their difference is a multiple of $2\pi$; the half-open interval forces that multiple to be zero. [given] ∎
