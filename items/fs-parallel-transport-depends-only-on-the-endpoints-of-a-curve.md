---
id: fs-parallel-transport-depends-only-on-the-endpoints-of-a-curve
kind: false-statement
title: "Parallel transport depends only on the endpoints of a curve"
status: published
origin: pipeline
deps: ["thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law","prop-local-frame-formula-for-covariant-differentiation-along-a-curve","prop-parallel-transport-under-reparametrization-reversal-and-concatenation"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
verification:
  audited: 2026-09-12
---

## Statement

For any connection, two piecewise smooth curves with the same starting and ending points have the same parallel transport.

## Facts & Assumptions

**Given:** The asserted endpoint independence.

[F1] A smooth one-form in a global line frame defines a connection ([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

[F2] In a frame, parallel coefficients satisfy $v'+\omega(\dot\gamma)v=0$ ([[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]]).

[F3] Concatenation composes transports and constant curves give the identity ([[prop-parallel-transport-under-reparametrization-reversal-and-concatenation]]).

## Refutation

1.1 Take $E=\mathbb R^2\times\mathbb R$ and $\omega=x\,dy$ in its unit frame. This is a smooth connection by [F1]. Traverse the unit square through $(0,0),(1,0),(1,1),(0,1),(0,0)$, using each side's affine parameter $t\in[0,1]$. The four values of $x\,y'$ are respectively $0,1,0,0$. Thus the four equations in [F2] are $v'=0,v'=-v,v'=0,v'=0$, with solution multipliers $1,e^{-1},1,1$ respectively. The multiplier on the second side follows directly by differentiating $v(t)=e^{-t}v(0)$. [F1, F2, given]

2.1 By [F3] the square's transport multiplies by $e^{-1}$, whereas the constant loop at $(0,0)$ multiplies by $1$. These differ on the unit vector of the endpoint fibre, since $e^{-1}<1$. The zero vector is fixed by both and is not a witness. Both paths are continuous finite piecewise smooth loops with exactly the same endpoints; corners cause no additional derivative condition. No curvature or homotopy theorem is used. [F3, step 1.1] ∎
