---
id: ex-spherical-coordinate-jacobian
kind: example
title: 'Spherical coordinates have absolute Jacobian determinant $r^2\sin\phi$ away from the axis and angular seam'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-change-of-variables-for-compact-jordan-sets, def-jacobian-determinant-of-a-c-one-map, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-cosine-zero-sets-and-fundamental-period]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §6.1"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Example

For
$$S(r,\phi,\theta)=(r\sin\phi\cos\theta,r\sin\phi\sin\theta,r\cos\phi),$$
one has $|\det DS|=r^2\sin\phi$ on
$$[1,2]\times[\pi/6,\pi/3]\times[\pi/6,\pi/3].$$
The map is injective there, away from both polar axes and the angular seam.

## Facts & Assumptions

**Given:** The spherical map and the compact parameter box in the statement.

[L1] Sine and cosine have their standard derivatives and satisfy the Pythagorean identity ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] Cosine is strictly decreasing on $[0,\pi]$, and sine has no zero strictly between $0$ and $\pi$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]). With [L1], sine is therefore positive on the displayed polar-angle interval.

[L3] Compact-Jordan change of variables applies to injective $C^1$ maps with invertible derivative ([[thm-change-of-variables-for-compact-jordan-sets]]).

## Verification

**Proof technique:** computation.

1.1 Differentiating the three coordinates and expanding by columns, then using [L1], gives $\det DS=r^2\sin\phi$. It is positive on the parameter box by [L2]. [L1, L2]

2.1 The image norm recovers $r$; the quotient of the third coordinate by $r$ recovers $\phi$ through strict cosine monotonicity; the first two normalized coordinates then recover $\theta$. The same recovery works when both angles range in $(\pi/12,5\pi/12)$ and $r\in(1/2,5/2)$, so $S$ is injective with nonzero determinant on an open neighborhood of the compact box. [L1, L2, step 1.1]

3.1 The positive determinant and step 2.1 verify every hypothesis of [L3], so spherical integration on this box carries the factor $r^2\sin\phi$. [L3, step 2.1] ∎
