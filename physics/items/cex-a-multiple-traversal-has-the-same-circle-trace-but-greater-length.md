---
id: cex-a-multiple-traversal-has-the-same-circle-trace-but-greater-length
kind: counterexample
title: "A twice-traversed circle has the same trace but twice the path length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-circular-arcs-circumference-and-diameter, thm-c1-paths-have-length-equal-to-the-integral-of-speed, def-vector-valued-derivative-and-integral, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-zero-sets-and-fundamental-period, lem-integral-elementary-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
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

## Statement refuted

Two $C^1$ paths with the same trace must have the same length.

## Facts & Assumptions
**Given:** The paths $$\gamma(t)=(\cos t,\sin t),\qquad \beta(t)=(\cos(2t),\sin(2t)),\qquad 0\leq t\leq2\pi.$$

[L1] The path $t\mapsto(\cos t,\sin t)$ on $[0,2\pi]$ is the once-around parametrization used to define unit-circle circumference ([[def-circular-arcs-circumference-and-diameter]]).

[L2] Vector differentiation is componentwise, $(\sin t)'=\cos t$, $(\cos t)'=-\sin t$, and $\sin^2t+\cos^2t=1$ ([[def-vector-valued-derivative-and-integral]], [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] Both sine and cosine have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L4] A $C^1$ path has length equal to the integral of its speed ([[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]).

[L5] The integral of a constant $q$ on $[a,b]$ is $q(b-a)$ ([[lem-integral-elementary-bounds]]).



## Counterexample

**Proof technique:** constructive.

1.1 Each point $\gamma(s)$, $0\leq s\leq2\pi$, equals $\beta(s/2)$, while periodicity in [L3] reduces every $\beta(t)=\gamma(2t)$ to a parameter in $[0,2\pi]$. Thus $\gamma$ and $\beta$ have the same unit-circle trace. [given, L1, L3, construct]

1.2 By [L2], $\lVert\gamma'(t)\rVert_2=1$ and $\lVert\beta'(t)\rVert_2=2$ throughout the interval. [given, L2, algebra]

2.1 By [L4] and [L5], $$L(\gamma)=\int_0^{2\pi}1\,dt=2\pi,\qquad L(\beta)=\int_0^{2\pi}2\,dt=4\pi.$$ [step 1.2, L4, L5]

3.1 The traces coincide by step 1.1 but the lengths differ by step 2.1, so the statement is false. The once-around qualification in the definition of circumference prevents this multiplicity ambiguity. [step 1.1, step 2.1, L1, discharge-construct] ∎
