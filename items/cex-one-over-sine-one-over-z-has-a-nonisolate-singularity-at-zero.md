---
id: cex-one-over-sine-one-over-z-has-a-nonisolate-singularity-at-zero
kind: counterexample
title: "1/sin(1/z) has a nonisolated singularity at 0"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-trigonometric-and-hyperbolic-functions, thm-complex-trigonometric-hyperbolic-dictionary, thm-sine-cosine-zero-sets-and-fundamental-period]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Greenfield, Rutgers Math 403 diary"
      url: "https://sites.math.rutgers.edu/~greenfie/mill_courses/math403/diary2.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every singularity at a point of a complex function is
automatically isolated.

The witness is

$$f(z)=\frac{1}{\sin(1/z)}$$

at $a=0$. The function has poles at points tending to $0$, so the singularity at
$0$ is not isolated.

## Facts & Assumptions

**Given:** The function $f(z)=1/\sin(1/z)$.

[L1] The zeros of sine are exactly the integral multiples of $\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

## Counterexample

**Proof technique:** direct.

1.1 For every positive integer $n$, the point $z_n:=1/(n\pi)$ satisfies $\sin(1/z_n)=\sin(n\pi)=0$ by [L1], so $f$ has a pole at each $z_n$. [L1, algebra]

2.1 The sequence $(z_n)$ tends to $0$, so every punctured neighbourhood of $0$ contains some pole of $f$. Hence no punctured neighbourhood of $0$ is a region on which $f$ is holomorphic, and the singularity at $0$ is not isolated. [step 1.1, algebra] ∎
