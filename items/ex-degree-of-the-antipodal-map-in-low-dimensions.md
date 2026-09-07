---
id: "ex-degree-of-the-antipodal-map-in-low-dimensions"
kind: "example"
title: "Degree of the antipodal map in low dimensions"
deps: ["prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps", "thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd"]
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
    - title: "Hatcher, Algebraic Topology, Degree property (f) and Theorem 2.28, pp.134–135"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Degree property (f) and Theorem 2.28, pp.134–135"
status: "draft"
origin: "pipeline"
proof_strategy: "Compute the number of coordinate reflections in each ambient dimension and relate the odd-dimensional cases to x -> ix."
---

## Example

The antipodal maps on $S^1,S^2,S^3$ have degrees $+1,-1,+1$, respectively. Of these three spheres, exactly $S^1$ and $S^3$ admit a continuous nowhere-zero tangent vector field.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] On $S^n\subset\mathbb R^{n+1}$ for $n\ge1$, the identity, a constant map, any single coordinate reflection, and the antipodal map have degrees $1$, $0$, $-1$, and $(-1)^{n+1}$ respectively. ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]])

[F2] For every integer $n\ge1$, $S^n$ admits a continuous nowhere-zero tangent vector field if and only if $n$ is odd. ([[thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd]])

## Verification

1.1 In $\mathbb R^{n+1}$, negating all coordinates is the composite of its $n+1$ coordinate reflections. The antipodal formula in [F1] gives $(-1)^2=+1$ on $S^1$, $(-1)^3=-1$ on $S^2$, and $(-1)^4=+1$ on $S^3$. [F1, algebra]

2.1 By [F2], the odd dimensions $1$ and $3$ permit such a field and dimension $2$ does not. Concretely, identify $\mathbb R^2=\mathbb C$ and $\mathbb R^4=\mathbb C^2$ and set $v(z)=iz$. It has norm $1$ on the sphere and real inner product $\operatorname{Re}\sum\overline z_j iz_j=0$ with $z$, so is tangent and nowhere zero. [F2, construct] ∎
