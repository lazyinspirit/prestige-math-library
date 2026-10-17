---
id: thm-circle-circumference-diameter-ratio-is-pi
kind: theorem
title: "Every circle has circumference 2 pi r and circumference-to-diameter ratio pi"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-circular-arcs-circumference-and-diameter, thm-unit-semicircle-arc-length-is-pi, thm-c1-paths-have-length-equal-to-the-integral-of-speed, def-vector-valued-derivative-and-integral, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, lem-integral-elementary-bounds]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 11.4.3"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For every centre $c\in\mathbb R^2$ and radius $r>0$, the once-traversed circle has circumference

$$C(r)=2\pi r.$$

Since its diameter is $d(r)=2r$, one has $C(r)/d(r)=\pi$.

## Facts & Assumptions
**Given:** A centre $c\in\mathbb R^2$, a real $r>0$, and the once-around path $\gamma(t)=c+r(\cos t,\sin t)$ on $[0,2\pi]$.

[L1] Circumference is the length of this once-around path, and diameter is $d(r)=2r$ ([[def-circular-arcs-circumference-and-diameter]]).

[L2] Vector differentiation is componentwise ([[def-vector-valued-derivative-and-integral]]).

[L3] $(\sin t)'=\cos t$, $(\cos t)'=-\sin t$, and $\sin^2t+\cos^2t=1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] A $C^1$ path has length equal to the integral of its speed ([[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]).

[L5] The integral of a constant $q$ on $[a,b]$ is $q(b-a)$ ([[lem-integral-elementary-bounds]]).

[L6] Every once-traversed unit semicircle has length $\pi$ ([[thm-unit-semicircle-arc-length-is-pi]]).



## Proof

**Proof technique:** direct.

1.1 By [L2] and [L3], $\gamma'(t)=r(-\sin t,\cos t)$ and $\lVert\gamma'(t)\rVert_2=r$, since $r>0$. [given, L2, L3, algebra]

2.1 By [L1], [L4], and [L5], $C(r)=L(\gamma)=\int_0^{2\pi}r\,dt=2\pi r$. [step 1.1, L1, L4, L5]

3.1 Because $r>0$, the diameter $d(r)=2r$ is nonzero, and step 2.1 gives $C(r)/d(r)=(2\pi r)/(2r)=\pi$. [given, step 2.1, L1, algebra]

4.1 At $r=1$, step 2.1 gives circumference $2\pi$, agreeing with the sum of the two semicircle lengths from [L6]. [step 2.1, L6, algebra] ∎
