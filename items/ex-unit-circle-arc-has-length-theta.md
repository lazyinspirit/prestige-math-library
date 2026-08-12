---
id: ex-unit-circle-arc-has-length-theta
kind: example
title: "For every $\\theta\\ge0$, the unit-circle path $t\\mapsto(\\cos t,\\sin t)$ on $[0,\\theta]$ has length $\\theta$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-c1-paths-have-length-equal-to-the-integral-of-speed, def-vector-valued-derivative-and-integral, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, lem-integral-elementary-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. R. Shastri, Metric Spaces, Section 5"
      url: "https://www.math.iitb.ac.in/~ars/ma403.pdf"
pipeline_run: null
---

## Example

For every real $\theta\ge0$, let

$$\gamma_\theta:[0,\theta]\to\mathbb R^2,\qquad \gamma_\theta(t)=(\cos t,\sin t).$$

Then $L(\gamma_\theta)=\theta$. No geometric definition of angle or of $\pi$ is used: sine and cosine are the published power-series functions.

## Facts & Assumptions

**Given:** A real $\theta\ge0$ and the displayed path.

[L1] Vector differentiation is componentwise ([[def-vector-valued-derivative-and-integral]]).

[L2] $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]).

[L3] $\sin^2t+\cos^2t=1$ for every real $t$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] A $C^1$ path has length equal to the integral of its speed ([[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]).

[L5] The integral of the constant function $1$ on $[0,\theta]$ is $\theta$ ([[lem-integral-elementary-bounds]]).

## Verification

**Proof technique:** computation.

1.1 If $\theta>0$, [L1]--[L2] give $\gamma_\theta'(t)=(-\sin t,\cos t)$. [given, L1, L2]

2.1 By [L3], $\lVert\gamma_\theta'(t)\rVert_2=\sqrt{\sin^2t+\cos^2t}=1$. [step 1.1, L3]

3.1 Apply [L4] and [L5] to get $L(\gamma_\theta)=\int_0^\theta1\,dt=\theta$. [step 2.1, L4, L5]

4.1 If $\theta=0$, the domain is a singleton and the defined length is $0=\theta$. [given] ∎
