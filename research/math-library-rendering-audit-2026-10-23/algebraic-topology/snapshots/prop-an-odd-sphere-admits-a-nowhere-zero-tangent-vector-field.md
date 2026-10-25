---
id: "prop-an-odd-sphere-admits-a-nowhere-zero-tangent-vector-field"
kind: "proposition"
title: "An odd sphere admits a nowhere zero tangent vector field"
deps: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Theorem 2.28, positive direction p.135"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Theorem 2.28, positive direction p.135"
status: published
origin: "pipeline"
proof_strategy: "Check directly that <ix,x>=0 and |ix|=1."
---

## Statement

For $n=2m-1\ge1$, identify $\mathbb R^{2m}$ with $\mathbb C^m$. The map $v:S^n\to\mathbb R^{2m}$ given by $v(x)=ix$ is a continuous unit tangent vector field.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

## Proof

1.1 In real coordinates, $v(x_1,x_2,\ldots,x_{2m})=(-x_2,x_1,\ldots,-x_{2m},x_{2m-1})$. This linear map is continuous and $\langle v(x),x\rangle=\sum_{j=1}^m(-x_{2j}x_{2j-1}+x_{2j-1}x_{2j})=0$. [given, algebra]

2.1 Moreover $|v(x)|^2=\sum_{j=1}^{2m}x_j^2=1$ on the sphere, so the field never vanishes. For $m=1$ this is the usual quarter-turn field on the circle. [step 1.1, algebra] ∎
