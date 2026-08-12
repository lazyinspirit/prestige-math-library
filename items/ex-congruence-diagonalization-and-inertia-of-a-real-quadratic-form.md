---
id: ex-congruence-diagonalization-and-inertia-of-a-real-quadratic-form
kind: example
title: '$q(x,y)=2x^2+4xy+5y^2=2(x+y)^2+3y^2$ has inertia $(2,0,0)$'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-quadratic-forms-diagonalize-in-characteristic-not-two, thm-sylvesters-law-of-inertia]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The real quadratic form

$$q(x,y)=2x^2+4xy+5y^2$$

satisfies $q(x,y)=2(x+y)^2+3y^2$ and has inertia $(2,0,0)$.

## Facts & Assumptions

**Given:** The displayed real quadratic form, whose symmetric matrix is $A=\begin{pmatrix}2&2\\2&5\end{pmatrix}$.

[L1] Quadratic forms over characteristic not $2$ admit diagonal coordinates ([[cor-quadratic-forms-diagonalize-in-characteristic-not-two]]).

[L2] The counts of positive, negative, and zero diagonal entries give the unique inertia ([[thm-sylvesters-law-of-inertia]]).

## Verification

**Proof technique:** explicit congruence and expansion.

1.1 Expanding gives $2(x+y)^2+3y^2=2x^2+4xy+5y^2=q(x,y)$. With $u=x+y$, $v=y$, old coordinates are $(x,y)=(u-v,v)$, so $P=\begin{pmatrix}1&-1\\0&1\end{pmatrix}$ is invertible. [algebra]

2.1 Direct multiplication gives $P^{\mathsf T}AP=\begin{pmatrix}2&0\\0&3\end{pmatrix}$. Both diagonal entries are positive, and positive rescaling changes this matrix to $I_2$. [step 1.1, algebra]

3.1 By [L2], the inertia is $(2,0,0)$, in agreement with the diagonalization promised by [L1]. [step 2.1, L1, L2] ∎
