---
id: lem-no-nowhere-zero-tangent-field-on-a-positive-even-sphere
kind: lemma
title: "A positive even sphere has no nowhere-zero tangent field"
status: published
origin: session
deps: [prop-degree-is-homotopy-invariant-and-multiplicative-under-composition, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, degree properties and vector fields on spheres, section 2.2"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
---

## Statement

For every integer $m\ge1$, the tangent bundle of the unit sphere $S^{2m}\subset\mathbb R^{2m+1}$ has no continuous nowhere-zero section. In particular $TS^2$ is not trivial.

## Facts & Assumptions

**Given:** A positive integer $m$ and the unit sphere $S^{2m}$.

[F1] Homotopic sphere self-maps have equal degree ([[prop-degree-is-homotopy-invariant-and-multiplicative-under-composition]]).

[F2] The identity on $S^{2m}$ has degree $1$, and its antipodal map has degree $(-1)^{2m+1}=-1$ ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]]).

## Proof

1.1 Suppose a continuous nowhere-zero tangent field $V$ exists, and set $u(x)=V(x)/\|V(x)\|$. Tangency means $\langle x,u(x)\rangle=0$, while both vectors have norm one. Consequently $H(x,t)=\cos(\pi t)x+\sin(\pi t)u(x)$ has norm one for every $(x,t)\in S^{2m}\times[0,1]$, is continuous, and has endpoints $H(x,0)=x$ and $H(x,1)=-x$. It is a homotopy from the identity to the antipodal map. [given, construct, algebra]

2.1 By [F1] these endpoints have equal degree, contradicting their degrees $1$ and $-1$ in [F2]. Thus no such field exists. A trivial positive-rank tangent bundle has a nowhere-zero section given by a constant nonzero vector in its trivialization, so $TS^2$ cannot be trivial. [F1, F2, step 1.1] ∎
