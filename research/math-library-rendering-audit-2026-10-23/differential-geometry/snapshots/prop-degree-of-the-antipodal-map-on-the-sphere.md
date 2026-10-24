---
id: "prop-degree-of-the-antipodal-map-on-the-sphere"
kind: "proposition"
title: "Degree of the antipodal map on the sphere"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism","prop-pointwise-orientation-sign-of-a-local-diffeomorphism","def-induced-boundary-orientation"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, degree examples following Theorem 5.4.1
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Give $S^n=\partial D^{n+1}$ its outward-normal-first boundary orientation. For $n\ge1$, the antipodal diffeomorphism $A:S^n\to S^n$, $A(x)=-x$, has
$$\deg(A)=(-1)^{n+1}.$$

## Facts & Assumptions

**Given:** The oriented sphere and antipodal map in the statement.

[F1] [[def-induced-boundary-orientation]] says that $(v_1,\ldots,v_n)$ is positive in $T_xS^n$ exactly when $(x,v_1,\ldots,v_n)$ is positive in the ambient $\mathbb R^{n+1}$.

[F2] [[prop-pointwise-orientation-sign-of-a-local-diffeomorphism]] identifies the orientation behavior of a local diffeomorphism from the determinant sign of its differential.

[F3] [[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]] gives degree $1$ for an orientation-preserving diffeomorphism and $-1$ for an orientation-reversing one.

## Proof

**Proof technique:** direct orientation comparison.

1.1 The map $A$ is smooth and satisfies $A^{-1}=A$, hence is a diffeomorphism. Fix $x\in S^n$ and a positive tangent basis $(v_1,\ldots,v_n)$ at $x$. Its image basis at $-x$ is $(-v_1,\ldots,-v_n)$. By [F1], its boundary-orientation sign is the ambient sign of $$(-x,-v_1,\ldots,-v_n)=(-1)^{n+1}(x,v_1,\ldots,v_n).$$ Thus [F2] makes $A$ orientation preserving when $n+1$ is even and orientation reversing when $n+1$ is odd. [F1, F2, given]

2.1 Applying [F3] in the two parity cases gives $\deg(A)=(-1)^{n+1}$. For $n=1$ this is $+1$, agreeing with the half-turn of the oriented circle; for even $n$ it is $-1$. The excluded $n=0$ case has a disconnected sphere and lies outside the degree definition used here. There are no endpoint, fibre, or choice issues: the calculation is pointwise and the same sign holds at every $x$. [F3, step 1.1] ∎
