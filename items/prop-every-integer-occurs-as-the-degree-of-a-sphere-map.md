---
id: "prop-every-integer-occurs-as-the-degree-of-a-sphere-map"
kind: "proposition"
title: "Every integer occurs as the degree of a sphere map"
deps: ["thm-global-sphere-degree-is-the-sum-of-local-degrees", "prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Example 2.31, p.136"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Example 2.31, p.136"
status: "draft"
origin: "pipeline"
proof_strategy: "For |d| positive pinch the complement of interiors of |d| disjoint disks to a point and fold each disk quotient by an orientation-preserving or reversing homeomorphism. A value away from the pinch point has exactly |d| local contributions of the chosen sign. For d=0 use a constant. This is existence, not classification."
---

## Statement

For every $d\in\mathbb Z$ and $n\ge1$ there exists a continuous self-map of $S^n$ of degree $d$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Let $f:S^n\to S^n$ be continuous, $n\ge1$, with source and target orientations fixed. If $f^{-1}(y)$ is finite, then $$\deg(f)=\sum_{x\in f^{-1}(y)}\deg_x f.$$ The sum over an empty fibre is $0$. ([[thm-global-sphere-degree-is-the-sum-of-local-degrees]])

[F2] On $S^n\subset\mathbb R^{n+1}$ for $n\ge1$, the identity, a constant map, any single coordinate reflection, and the antipodal map have degrees $1$, $0$, $-1$, and $(-1)^{n+1}$ respectively. ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]])

## Proof

1.1 For $d=0$ take a constant map, which has degree zero by F2. [F2]

1.2 For $k=|d|>0$, choose $k$ disjoint closed coordinate balls with nonempty interiors. Collapse their boundaries and the complement of their interiors to a single point. The quotient is a wedge of $k$ copies of $D^n/\partial D^n\cong S^n$: a homeomorphism of the ball interior with $\mathbb R^n$, followed by inverse stereographic projection, extends to this quotient by sending the boundary to the omitted pole. Fold these copies to a common target sphere. Use an orientation-preserving homeomorphism on each copy if $d>0$, and compose each with a coordinate reflection if $d<0$. The maps agree at the collapsed point, so the quotient construction is continuous. [given, F2]

2.1 A point distinct from the common pole has exactly one preimage in each ball. At each such point the local degree is $+1$ or $-1$ as chosen: an orientation-preserving chart restricts the local generator unchanged, and reflection reverses it. F1 gives degree $k\,\operatorname{sgn}(d)=d$. This works for $k=1$ and for one-dimensional balls as well. [F1, F2, step 1.2] ∎
