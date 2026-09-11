---
id: prop-local-frame-formula-for-covariant-differentiation-along-a-curve
kind: proposition
title: "Local frame formula for covariant differentiation along a curve"
status: published
origin: pipeline
deps: ["thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension","def-pullback-connection","thm-connection-one-form-transformation-law"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

If $V(t)=e(\gamma(t))v(t)$ and $B(t)=\omega_{\gamma(t)}(\dot\gamma(t))$, then
$$D_tV=e(\gamma(t))(v'(t)+B(t)v(t)).$$
Thus $D_tV=0$ is the linear system $v'=-Bv$.

## Facts & Assumptions

**Given:** A frame on a neighbourhood of the image of a curve segment and the displayed coefficient column.

[F1] The along-curve derivative is intrinsic pullback differentiation ([[thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension]]).

[F2] The pullback connection has matrix obtained by evaluating the original one-forms on the differential of the map ([[def-pullback-connection]]).

[F3] Frame changes obey the inhomogeneous matrix transformation law ([[thm-connection-one-form-transformation-law]]).

## Proof

1.1 Apply the pullback prescription to $X=\partial_t$: its action on $v$ is $v'$ and the pulled-back one-form evaluated on $\partial_t$ is $B(t)$. This gives the formula, and the frame is a basis, so zero covariant derivative is equivalent to $v'+Bv=0$. [F1, F2]

2.1 Explicitly, for a second frame put $C(t)=A(\gamma(t))$, write $v=Cw$, and use $B'=C^{-1}BC+C^{-1}C'$ for the new connection matrix (here the prime on $B'$ denotes the new matrix). Then $v'+Bv=C'w+Cw'+BCw=C(w'+B'w)$. Multiplication by the respective frames gives the same derivative. This computation allows singular curve velocity, including zero velocity, and uses no inverse of $\dot\gamma$. Rank zero means empty vectors; rank one is the scalar equation. Endpoint derivatives are one-sided, so the same product rule applies. [F3, step 1.1] ∎
