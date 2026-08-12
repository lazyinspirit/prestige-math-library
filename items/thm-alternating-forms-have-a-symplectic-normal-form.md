---
id: thm-alternating-forms-have-a-symplectic-normal-form
kind: theorem
title: 'Every alternating form on a finite-dimensional space has a basis of symplectic pairs followed by a basis of its radical; in particular its rank is even'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bilinear-symmetric-skew-and-alternating-forms, thm-symmetric-alternating-relations-by-characteristic, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, thm-dimension-of-a-linear-subspace, def-linear-basis]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Bilinear Forms, §6'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf'
pipeline_run: null
---

## Statement

Let $B$ be an alternating bilinear form on a finite-dimensional vector space $V$. There is a basis

$$e_1,f_1,\ldots,e_r,f_r,z_1,\ldots,z_s$$

such that $B(e_i,f_i)=1$, $B(f_i,e_i)=-1$, every other pairing of distinct listed blocks is zero, and $z_1,\ldots,z_s$ is a basis of $\operatorname{rad}B$. Thus the matrix is a direct sum of $r$ blocks $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ and an $s\times s$ zero block, so $\operatorname{rank}B=2r$ is even.

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$ and an alternating bilinear form $B$.

[L1] Alternation means $B(v,v)=0$ for every $v$ ([[def-bilinear-symmetric-skew-and-alternating-forms]]), and every alternating form is skew-symmetric ([[thm-symmetric-alternating-relations-by-characteristic]]).

[L2] The radical consists of vectors pairing to zero with every vector, and the rank is the rank of the associated map into the dual ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[L3] Subspaces of finite-dimensional spaces are finite-dimensional and admit bases ([[thm-dimension-of-a-linear-subspace]]); a basis is an independent spanning set, with the empty basis for zero space ([[def-linear-basis]]).

## Proof

**Proof technique:** induction on $n=\dim V$.

1.1 If $n=0$, the empty basis has the asserted form. If $B=0$, any basis of $V=\operatorname{rad}B$ works with $r=0$. [base, L2, L3]

1.2 Assume $B\ne0$ and the result below dimension $n$. Choose $e,f$ with $B(e,f)\ne0$ and rescale $f$ so $B(e,f)=1$; [L1] gives $B(f,e)=-1$. [ih, L1, given, choose]

2.1 Put $W=\operatorname{span}\{e,f\}$ and $W^\perp=\{v:B(v,e)=B(v,f)=0\}$. For every $v\in V$, the vector $z=v-B(v,f)e+B(v,e)f$ lies in $W^\perp$, so $V=W+W^\perp$. If $ae+bf\in W^\perp$, pairing with $e$ and $f$ gives $b=0=a$, hence $V=W\oplus W^\perp$. [step 1.2, L1, algebra]

3.1 Since $e\notin W^\perp$, this subspace is proper and [L3] gives $\dim W^\perp<n$. By induction its restricted alternating form has symplectic pairs followed by a basis of its radical. Adjoining $e,f$ gives the displayed basis of $V$; because $W$ is nondegenerate and orthogonal to $W^\perp$, the remaining radical is exactly the radical of the whole form. [step 1.2, step 2.1, ih, L2, L3]

4.1 In that basis the associated map has one invertible rank-two block per pair and is zero on the radical block, so its rank is $2r$. This remains valid in characteristic $2$, where $-1=1$. [step 3.1, L1, L2, algebra]

5.1 The base cases and induction step establish the normal form and even-rank conclusion in every finite dimension, including odd-dimensional and degenerate forms. [step 1.1, step 4.1, discharge-induction] ∎
