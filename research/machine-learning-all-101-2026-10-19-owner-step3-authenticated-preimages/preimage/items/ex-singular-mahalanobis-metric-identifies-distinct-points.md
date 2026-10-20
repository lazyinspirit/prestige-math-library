---
id: ex-singular-mahalanobis-metric-identifies-distinct-points
kind: example
title: "A rank-deficient Mahalanobis matrix identifies distinct points"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-mahalanobis-pseudometric, thm-mahalanobis-distance-is-pseudometric]
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  scraped: []
  references: []
aliases: []
landmark: false
proof_strategy: direct
---

## Example

On $\mathbb R^2$, let $M=\begin{pmatrix}1&0\\0&0\end{pmatrix}$, $u=(0,0)$, and $v=(0,1)$. The matrix is symmetric, positive semidefinite, and singular, while $u\ne v$. Its Mahalanobis pseudometric satisfies $d_M(u,v)=0$. Thus the pseudometric need not separate distinct points, whereas a metric requires distance zero only for equal points.

## Example references

[[def-mahalanobis-pseudometric|Definition of the squared Mahalanobis distance and its square root]]

[[thm-mahalanobis-distance-is-pseudometric|Pseudometric properties and linear-feature representation]]

## Facts & Assumptions

**Given:** The matrix $M$ and points $u,v$ in the Example.

[F1] For $M\succeq0$, $q_M(x,x')=(x-x')^TM(x-x')$ and $d_M(x,x')=\sqrt{q_M(x,x')}$. A pseudometric need not separate distinct points ([[def-mahalanobis-pseudometric]]).

[F2] The square-root distance associated with a positive-semidefinite matrix satisfies the pseudometric axioms ([[thm-mahalanobis-distance-is-pseudometric]]).

## Verification

1.1 The matrix $M$ is symmetric, and for every $(a,b)\in\mathbb R^2$, $(a,b)M(a,b)^T=a^2\ge0$; its rank is one, so it is singular. Also $u\ne v$. [given, algebra]

1.2 The difference $u-v=(0,-1)$ satisfies $(u-v)^TM(u-v)=0$, hence $q_M(u,v)=0$ and $d_M(u,v)=\sqrt0=0$ by [F1]. [given, F1, algebra]

2.1 Step 1.2 exhibits zero distance between distinct points, so this valid Mahalanobis pseudometric fails the separation property required of a metric; [F2] confirms its other pseudometric axioms. [step 1.2, F2] ∎
