---
id: thm-unit-semicircle-arc-length-is-pi
kind: theorem
title: "The arc length of a unit semicircle is pi"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-circular-arcs-circumference-and-diameter, thm-c1-paths-have-length-equal-to-the-integral-of-speed, def-vector-valued-derivative-and-integral, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, lem-integral-elementary-bounds, thm-arc-length-is-invariant-under-monotone-reparametrization]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 11.4.3"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

Every once-traversed semicircle of radius $1$ has arc length $\pi$. In particular, the upper unit semicircle $\gamma(t)=(\cos t,\sin t)$, $0\le t\le\pi$, has length $\pi$.

## Facts & Assumptions
**Given:** The path $\gamma(t)=(\cos t,\sin t)$ on $[0,\pi]$.

[L1] Vector differentiation is componentwise ([[def-vector-valued-derivative-and-integral]]).

[L2] The functions sine and cosine are differentiable, with $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]).

[L3] For every real $t$, $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] A $C^1$ path has length equal to the integral of its Euclidean speed ([[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]).

[L5] The integral of the constant function $1$ on $[a,b]$ is $b-a$ ([[lem-integral-elementary-bounds]]).

[L6] Path length is invariant under every continuous surjective monotone reparametrization ([[thm-arc-length-is-invariant-under-monotone-reparametrization]]).



## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $\gamma'(t)=(-\sin t,\cos t)$ on $[0,\pi]$. [given, L1, L2]

2.1 By [L3], $\lVert\gamma'(t)\rVert_2=\sqrt{\sin^2t+\cos^2t}=1$. [step 1.1, L3, algebra]

3.1 By [L4] and [L5], $L(\gamma)=\int_0^\pi1\,dt=\pi$. [step 2.1, L4, L5]

4.1 Translating or rotating the displayed path does not change the differences between its points, and reversing or monotonically reparametrizing it does not change its length by [L6]. Thus every once-traversed unit semicircle has length $\pi$. [step 3.1, L6, algebra] ∎
