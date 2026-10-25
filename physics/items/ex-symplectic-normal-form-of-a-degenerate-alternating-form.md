---
id: ex-symplectic-normal-form-of-a-degenerate-alternating-form
kind: example
title: 'A rank-two alternating form on $\mathbb R^3$ has one symplectic pair and a one-dimensional radical'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-alternating-forms-have-a-symplectic-normal-form, lem-standard-basis-of-f-n]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Bilinear Forms, §6'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf'
pipeline_run: null
---

## Example

On $\mathbb R^3$, the form with matrix

$$A=\begin{pmatrix}0&1&0\\-1&0&0\\0&0&0\end{pmatrix}$$

has the symplectic pair $(e_1,e_2)$, radical $\operatorname{span}\{e_3\}$, and rank $2$.

## Facts & Assumptions

**Given:** The displayed matrix in the standard basis.

[L1] The standard coordinate vectors form a basis of $\mathbb R^3$ ([[lem-standard-basis-of-f-n]]).

[L2] An alternating form has a basis of symplectic pairs followed by a radical basis, with two rank units per pair ([[thm-alternating-forms-have-a-symplectic-normal-form]]).

## Verification

**Proof technique:** direct matrix inspection.

1.1 The matrix has zero diagonal and is skew-symmetric, so $B(v,v)=0$ by direct expansion. Also $B(e_1,e_2)=1$ and $B(e_2,e_1)=-1$. [L1, algebra]

1.2 Multiplication by $A$ kills exactly the vectors $(0,0,z)$, so the radical is $\operatorname{span}\{e_3\}$; the first two columns are independent, giving rank $2$. [L1, algebra]

2.1 Thus $(e_1,e_2)$ is one symplectic pair followed by the radical basis $(e_3)$, exactly the normal form of [L2]. [step 1.1, step 1.2, L2] ∎
