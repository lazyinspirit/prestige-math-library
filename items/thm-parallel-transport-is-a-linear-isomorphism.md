---
id: thm-parallel-transport-is-a-linear-isomorphism
kind: theorem
title: "Parallel transport is a linear isomorphism"
status: published
origin: pipeline
deps: ["def-parallel-transport-along-a-piecewise-smooth-curve","thm-existence-and-uniqueness-of-parallel-sections"]
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

For each curve under the transport definition, $P_{\gamma;s,t}$ is a linear isomorphism and
$$P_{\gamma;s,t}^{-1}=P_{\gamma;t,s}.$$
For the reversed curve $\bar\gamma(u)=\gamma(a+b-u)$, $P_{\bar\gamma}=P_\gamma^{-1}$.

## Facts & Assumptions

**Given:** A supplied connection and a piecewise smooth curve on $[a,b]$.

[F1] Transport evaluates the parallel section determined by the initial vector ([[def-parallel-transport-along-a-piecewise-smooth-curve]]).

[F2] Such sections exist uniquely, solving a homogeneous linear equation on each piece ([[thm-existence-and-uniqueness-of-parallel-sections]]).

## Proof

1.1 For real $c,d$, the linear combination $cV_v+dV_w$ solves the homogeneous equation and has initial value $cv+dw$. Uniqueness identifies it with $V_{cv+dw}$. Evaluating at $t$ proves linearity of $P_{\gamma;s,t}$. Restarting the same section at $t$ and using uniqueness gives $P_{\gamma;t,s}P_{\gamma;s,t}v=v$ for every $v$; interchanging $s,t$ gives the other inverse identity. [F1, F2]

2.1 In a frame, put $h(u)=a+b-u$. If $v'+\omega(\dot\gamma)v=0$, then $(v\circ h)' +\omega((\gamma\circ h)')(v\circ h)=h'(v'+\omega(\dot\gamma)v)\circ h=0$. Thus reversing a parallel section is parallel along the reversed curve, continuously at its corners. Its endpoint values are interchanged, proving $P_{\bar\gamma}=P_{\gamma;b,a}=P_\gamma^{-1}$. For $a=b$ these are identity maps; for rank zero they are the unique isomorphism of zero spaces. Zero vectors and rank one are already included in the linear calculation. [F2, step 1.1] ∎
