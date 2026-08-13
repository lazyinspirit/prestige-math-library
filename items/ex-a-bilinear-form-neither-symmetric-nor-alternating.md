---
id: ex-a-bilinear-form-neither-symmetric-nor-alternating
kind: example
title: 'The form on $\mathbb R^2$ with matrix $\begin{pmatrix}0&1\\0&0\end{pmatrix}$ is neither symmetric nor alternating'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bilinear-symmetric-skew-and-alternating-forms, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Bilinear Forms, §1'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf'
pipeline_run: null
---

## Example

On $\mathbb R^2$, let $B$ have matrix $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ in the standard basis. Then $B$ is neither symmetric nor alternating.

## Facts & Assumptions

**Given:** The displayed matrix and standard basis $e_1,e_2$.

[L1] A matrix $A$ represents the form by $B(u,v)=u^{\mathsf T}Av$ ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[L2] Symmetry requires $B(u,v)=B(v,u)$, while alternation requires $B(v,v)=0$ for every $v$ ([[def-bilinear-symmetric-skew-and-alternating-forms]]).

## Verification

**Proof technique:** direct evaluation.

1.1 By [L1], $B(e_1,e_2)=1$ but $B(e_2,e_1)=0$, so symmetry fails by [L2]. [L1, L2, algebra]

1.2 Also $B(e_1+e_2,e_1+e_2)=1$, so alternation fails by [L2]. [L1, L2, algebra]

2.1 The same form therefore witnesses both failures. [step 1.1, step 1.2] ∎
