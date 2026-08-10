---
id: ex-polar-change-of-variables-on-an-annular-sector
kind: example
title: "Polar change of variables on a compact annular sector gives the Jacobian factor $r$ and its area"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-change-of-variables-for-compact-jordan-sets, def-jacobian-determinant-of-a-c-one-map, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-ftc-second-part, lem-derivative-of-a-power, thm-sine-cosine-signs-monotonicity-and-ranges]
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

On $K=[1,2]\times[\pi/6,\pi/3]$, the polar map
$$P(r,\theta)=(r\cos\theta,r\sin\theta)$$
is injective with Jacobian factor $r$. Its annular-sector image has area $\pi/4$.

## Facts & Assumptions

**Given:** The polar map and compact parameter rectangle $K$.

[L1] Sine and cosine have their standard derivatives and satisfy $\sin^2+\cos^2=1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] Cosine is strictly decreasing on $[0,\pi]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[L3] Compact-Jordan change of variables uses the absolute Jacobian determinant ([[thm-change-of-variables-for-compact-jordan-sets]]).

## Verification

**Proof technique:** computation.

1.1 Differentiation and [L1] give $$DP=\begin{pmatrix}\cos\theta&-r\sin\theta\\\sin\theta&r\cos\theta\end{pmatrix},\qquad \det DP=r.$$ [L1]

2.1 Equality of two images first gives equality of radii by [L1], then equality of cosines; [L2] gives equality of angles. The same recovery works on the open neighborhood $(1/2,5/2)\times(\pi/12,5\pi/12)$, where $\det DP$ never vanishes. Thus the compact theorem's neighborhood hypotheses hold. [L1, L2, step 1.1]

3.1 Applying [L3] to the constant-one function and integrating $r$ gives $$\operatorname{area}(P(K))=\int_{\pi/6}^{\pi/3}\int_1^2r\,dr\,d\theta=\frac32\cdot\frac\pi6=\frac{\pi}{4}.$$ [L3, step 2.1] ∎
