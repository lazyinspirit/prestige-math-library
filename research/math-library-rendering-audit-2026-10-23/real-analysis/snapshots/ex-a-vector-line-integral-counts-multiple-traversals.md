---
id: ex-a-vector-line-integral-counts-multiple-traversals
kind: example
title: "A vector line integral around the vortex counts repeated traversals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-line-integrals-under-oriented-reparametrization, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, lem-integral-elementary-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, sections 9.2 and 9.3"
      url: "https://www.jirka.org/ra/html/sec_pathintegral.html"
pipeline_run: null
---

## Example

For the vortex field

$$F(x,y)=\left(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2}\right),$$

let $\gamma(t)=(\cos t,\sin t)$ and $\beta(t)=(\cos(2t),\sin(2t))$ on $[0,2\pi]$. Then

$$\int_\gamma F\cdot d\mathbf r=2\pi,\qquad \int_\beta F\cdot d\mathbf r=4\pi.$$

## Facts & Assumptions
**Given:** The field and paths in the Example.

[L1] Vector line integrals integrate $\langle F(\eta(t)),\eta'(t)\rangle$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L2] Sine and cosine have derivatives $\cos t$ and $-\sin t$ and satisfy $\sin^2t+\cos^2t=1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] The integral of a constant $q$ on $[a,b]$ is $q(b-a)$ ([[lem-integral-elementary-bounds]]).

[L4] Parametrization invariance assumes a bijective oriented reparametrization ([[thm-line-integrals-under-oriented-reparametrization]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], $F(\gamma(t))=\gamma'(t)=(-\sin t,\cos t)$, so [L1], [L2], and [L3] give $\int_\gamma F\cdot d\mathbf r=\int_0^{2\pi}1\,dt=2\pi$. [given, L1, L2, L3, algebra]

1.2 By [L2], $$\beta'(t)=2(-\sin(2t),\cos(2t)),\qquad F(\beta(t))=(-\sin(2t),\cos(2t)).$$ [given, L2, algebra]

2.1 Hence [L1], [L2], and [L3] give $$\int_\beta F\cdot d\mathbf r=\int_0^{2\pi}2(\sin^2(2t)+\cos^2(2t))\,dt=4\pi.$$ [step 1.2, L1, L2, L3]

3.1 The two paths have the same counterclockwise unit-circle image, but $t\mapsto2t$ on $[0,2\pi]$ is not a bijection onto $[0,2\pi]$; it covers the circle twice. Thus [L4] does not assert equality here. [given, L4, algebra] ∎
