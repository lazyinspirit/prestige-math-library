---
id: ex-cylindrical-coordinate-jacobian
kind: example
title: "Cylindrical coordinates have absolute Jacobian determinant $r$ on an injective compact box"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-change-of-variables-for-compact-jordan-sets, def-jacobian-determinant-of-a-c-one-map, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §5.5"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Example

The cylindrical-coordinate map
$$C(r,\theta,z)=(r\cos\theta,r\sin\theta,z)$$
is injective on $[1,2]\times[\pi/6,\pi/3]\times[-1,1]$ and has absolute Jacobian determinant $r$ there.

## Facts & Assumptions

**Given:** The cylindrical map on the displayed parameter box.

[L1] Sine and cosine have their standard derivatives and satisfy $\sin^2+\cos^2=1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] Cosine is strictly decreasing on $[0,\pi]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[L3] Compact-Jordan change of variables applies on injective boxes with nonzero Jacobian ([[thm-change-of-variables-for-compact-jordan-sets]]).

## Verification

**Proof technique:** computation.

1.1 The derivative matrix is block triangular over the polar block, and [L1] gives the following determinant. [L1]
$$\det DC=\det\begin{pmatrix}\cos\theta&-r\sin\theta&0\\\sin\theta&r\cos\theta&0\\0&0&1\end{pmatrix}=r.$$

2.1 The third image coordinate recovers $z$. The first two recover $r$ from their Euclidean norm and then $\theta$ from strict cosine monotonicity [L2]. The same recovery works on $(1/2,5/2)\times(\pi/12,5\pi/12)\times(-2,2)$, where $r>0$, so the map is injective with invertible derivative on an open neighborhood of the compact box. [L1, L2, step 1.1]

3.1 Therefore [L3] applies on this seam-free compact box, and every transformed volume integral carries precisely the factor $r$. [L3, step 2.1] ∎
