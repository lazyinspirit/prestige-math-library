---
id: ex-keyhole-contour-assembly-without-cauchys-theorem
kind: example
title: "Assembling a keyhole contour from two radial segments and two circular arcs"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-complex-contours-reversal-concatenation-and-closedness, prop-reversal-and-concatenation-of-complex-line-integrals, cor-absolute-integral-of-one-is-path-length]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $0<r<R$. A keyhole contour about the positive real axis is the concatenation of the upper radial segment $r\to R$, the outer circle once counterclockwise, the lower radial segment $R\to r$, and the inner circle clockwise. For every continuous integrand on the trace, its integral is the signed sum of the four piece integrals.

## Facts & Assumptions

**Given:** Radii $0<r<R$ and four oriented pieces with matching endpoints.

[L1] Concatenation and reversal of rectifiable complex contours are defined in [[def-complex-contours-reversal-concatenation-and-closedness]].

[L2] Complex line integrals add under concatenation and change sign under reversal ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

[L3] The absolute integral of $1$ is contour length ([[cor-absolute-integral-of-one-is-path-length]]).

## Verification

**Proof technique:** direct.

1.1 On $[0,1]$, parametrize the pieces by $r+(R-r)t$, $Re^{2\pi it}$, $R-(R-r)t$, and $re^{2\pi i(1-t)}$, respectively. Their endpoints match in this order, so [L1] defines a closed concatenation. [L1, construct]

2.1 Repeated application of [L2] gives the total integral as the sum of the four oriented integrals, with the reversed radial and inner-circle orientations carrying their signs. [step 1.1, L2]

3.1 By [L3], the piece lengths are $R-r$, $2\pi R$, $R-r$, and $2\pi r$. This verifies rectifiability and bookkeeping without evaluating the integral by Cauchy's theorem or choosing a logarithm branch. [step 1.1, L3] ∎
