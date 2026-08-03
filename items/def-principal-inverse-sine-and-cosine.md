---
id: def-principal-inverse-sine-and-cosine
kind: definition
title: "Principal inverse sine and inverse cosine"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous, thm-quarter-turn-values-and-shift-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-intermediate-value, thm-continuous-inverse]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Inverse Trigonometric Functions"
      url: "https://dlmf.nist.gov/4.23"
pipeline_run: null
---

## Definition

Sine is differentiable, hence continuous, and strictly increasing on
$[-\pi/2,\pi/2]$; its endpoint values are $-1$ and $1$
([[thm-sine-and-cosine-derivatives]],
[[cor-differentiable-implies-continuous]],
[[thm-sine-cosine-signs-monotonicity-and-ranges]],
[[thm-quarter-turn-values-and-shift-formulas]],
[[cor-trigonometric-parity-and-pythagorean-identity]]). The intermediate value
theorem therefore makes its restricted image exactly $[-1,1]$
([[thm-intermediate-value]]). Likewise, cosine is continuous and strictly
decreasing on $[0,\pi]$, with endpoint values $1$ and $-1$, so its restricted
image is $[-1,1]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]],
[[thm-sine-and-cosine-derivatives]], [[cor-differentiable-implies-continuous]],
[[thm-quarter-turn-values-and-shift-formulas]], [[thm-intermediate-value]]).
Their principal inverses are denoted

$$\arcsin:[-1,1]\to[-\pi/2,\pi/2],\qquad\arccos:[-1,1]\to[0,\pi],$$

and are characterised by

$$\sin(\arcsin y)=y,\qquad\cos(\arccos y)=y\qquad(-1\le y\le1).$$

The chosen target intervals are part of the notation: without them, inverse
sine and inverse cosine would be multivalued relations rather than functions.
Their continuity follows from [[thm-continuous-inverse]].
