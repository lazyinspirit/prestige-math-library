---
id: cex-symmetric-form-need-not-have-an-orthogonal-basis-in-characteristic-two
kind: counterexample
title: 'In characteristic $2$, a symmetric bilinear form need not have an orthogonal basis'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-symmetric-alternating-relations-by-characteristic, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, thm-z-mod-p-is-a-field]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Bilinear Forms, §§4–5'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf'
pipeline_run: null
---

## Statement refuted

**Refuted claim:** Every symmetric bilinear form over every field has an orthogonal basis.

## Facts & Assumptions

**Given:** Over $\mathbb F_2$, let $B$ on $\mathbb F_2^2$ have matrix $A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$.

[L1] The ring $\mathbb F_2$ is a field of characteristic $2$ ([[thm-z-mod-p-is-a-field]]).

[L2] In characteristic $2$, alternating forms are symmetric ([[thm-symmetric-alternating-relations-by-characteristic]]).

[L3] A finite-dimensional bilinear form is nondegenerate exactly when its representing matrix is invertible ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

## Counterexample

**Proof technique:** contradiction from the displayed form.

1.1 For $v=(x,y)$, $B(v,v)=xy+yx=2xy=0$, so $B$ is alternating and hence symmetric by [L1] and [L2]. Its matrix has determinant $-1=1$ in $\mathbb F_2$, so it is nondegenerate by [L3]. [L1, L2, L3, algebra]

2.1 If $(u,v)$ were an orthogonal basis, alternation would give $B(u,u)=B(v,v)=0$ and orthogonality would give $B(u,v)=B(v,u)=0$. The matrix in that basis would be zero, contradicting nondegeneracy. [step 1.1, L3, algebra]

3.1 Thus this symmetric form has no orthogonal basis, and the characteristic-not-$2$ hypothesis in the diagonalization theorem is essential. [step 2.1] ∎
