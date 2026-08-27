---
id: fs-nonnegative-quadratic-values-force-self-adjointness
kind: false-statement
title: "FALSE: If <Tv,v> is nonnegative for every v, then T is automatically self-adjoint"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-non-negative-and-positive-operator, ex-quarter-turn-real-normal-form]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

If $\langle Tv,v\rangle$ is nonnegative for every vector $v$, then $T$ is
automatically self-adjoint.

## Facts & Assumptions

**Given:** The quarter-turn matrix $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ on $\mathbb R^2$.

[L1] The quarter-turn is not self-adjoint, because it is normal of the $2\times2$ rotation type rather than diagonal over $\mathbb R$ ([[ex-quarter-turn-real-normal-form]]).

## Refutation

**Proof technique:** direct.

1.1 For every $v=(x,y)^{\mathsf T}$, one has $Av=(-y,x)^{\mathsf T}$ and therefore $\langle Av,v\rangle=-xy+xy=0\ge0$. Thus the hypothesis of the claim holds for $A$. [algebra]

2.1 By [L1], the same operator $A$ is not self-adjoint. Hence the displayed inequality alone does not force self-adjointness, and the claim is false. [L1, step 1.1] ∎
