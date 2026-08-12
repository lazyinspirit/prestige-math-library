---
id: cor-symmetric-matrices-are-congruent-to-diagonal-matrices
kind: corollary
title: 'Over a field of characteristic not $2$, every symmetric matrix is congruent to a diagonal matrix'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-symmetric-bilinear-forms-have-an-orthogonal-basis, thm-change-of-basis-for-a-bilinear-form-is-congruence, lem-standard-basis-of-f-n]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Bilinear Forms, §5'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf'
pipeline_run: null
---

## Statement

If $A\in M_n(F)$ is symmetric and $\operatorname{char}F\ne2$, then there is an invertible $P$ such that $P^{\mathsf T}AP$ is diagonal.

## Facts & Assumptions

**Given:** A symmetric matrix $A\in M_n(F)$ over a field of characteristic not $2$.

[L1] The standard coordinate vectors form a basis of $F^n$ ([[lem-standard-basis-of-f-n]]).

[L2] Every symmetric bilinear form in the stated characteristic has an orthogonal basis ([[thm-symmetric-bilinear-forms-have-an-orthogonal-basis]]).

[L3] A basis change by $P$ sends a bilinear-form matrix $A$ to $P^{\mathsf T}AP$ ([[thm-change-of-basis-for-a-bilinear-form-is-congruence]]).

## Proof

**Proof technique:** direct.

1.1 In the standard basis [L1], let $B(u,v)=u^{\mathsf T}Av$. Symmetry of $A$ makes $B$ symmetric. [L1, given, algebra]

1.2 Choose an orthogonal basis for $B$ by [L2], and let $P$ have those basis vectors as its columns in standard coordinates. Then $P$ is invertible and the matrix of $B$ in that basis is diagonal. [L2, choose]

2.1 By [L3], this diagonal matrix is $P^{\mathsf T}AP$. When $n=0$, the empty matrix is already diagonal and the same conclusion holds. [step 1.2, L3] ∎
