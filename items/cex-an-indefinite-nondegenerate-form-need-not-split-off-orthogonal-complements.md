---
id: cex-an-indefinite-nondegenerate-form-need-not-split-off-orthogonal-complements
kind: counterexample
title: "A nondegenerate indefinite symmetric form can have $W\\cap W^\\perp\\ne0$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, thm-finite-dimensional-orthogonal-decomposition]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Every nondegenerate symmetric bilinear form $B$ on a finite-dimensional real vector space satisfies $V=W\oplus W^{\perp_B}$ for every subspace $W$.

## Facts & Assumptions

**Given:** On $\mathbb R^2$, the symmetric form $B(x,y)=x_0y_0-x_1y_1$, the vector $v=(1,1)$, and $W=\mathbb Rv$.

[L1] A bilinear form is nondegenerate when its radical is zero; for a matrix form this is equivalent to its representing matrix having full rank ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[L2] The orthogonal-decomposition theorem requires a positive-definite inner product and then gives $V=W\oplus W^\perp$ ([[thm-finite-dimensional-orthogonal-decomposition]]).

## Counterexample

**Proof technique:** counterexample.

1.1 The matrix of $B$ is $\operatorname{diag}(1,-1)$, whose determinant is $-1$, so [L1] makes $B$ nondegenerate. It is indefinite because $B((1,0),(1,0))=1$ and $B((0,1),(0,1))=-1$. [L1, algebra]

1.2 Yet $B(v,v)=1-1=0$. Therefore $B(v,av)=0$ for every $av\in W$, so the nonzero vector $v$ lies in both $W$ and $W^{\perp_B}$. Thus their sum is not direct. [algebra]

2.1 This does not contradict [L2]: positivity, not merely nondegeneracy, is the hypothesis that forces the orthogonal direct sum. [step 1.1, step 1.2, L2] ∎
