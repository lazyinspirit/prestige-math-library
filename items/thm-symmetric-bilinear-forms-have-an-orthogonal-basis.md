---
id: thm-symmetric-bilinear-forms-have-an-orthogonal-basis
kind: theorem
title: 'Every symmetric bilinear form on a finite-dimensional space over a field of characteristic not $2$ has an orthogonal basis'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polarization-bijection-in-characteristic-not-two, thm-dimension-of-a-linear-subspace, def-linear-basis]
aliases: []
landmark: true
proof_strategy: induction
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

Let $V$ be finite-dimensional over a field of characteristic not $2$. Every symmetric bilinear form $B$ on $V$ admits a basis whose distinct vectors are pairwise orthogonal for $B$.

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$, $\operatorname{char}F\ne2$, and a symmetric bilinear form $B$.

[L1] In characteristic not $2$, a symmetric bilinear form is recovered from $q_B(v)=B(v,v)$ by $B(u,v)=\tfrac12b_{q_B}(u,v)$ ([[thm-polarization-bijection-in-characteristic-not-two]]).

[L2] A subspace of a finite-dimensional space is finite-dimensional, and an independent subset extends without Choice to a basis ([[thm-dimension-of-a-linear-subspace]]).

[L3] A basis is a linearly independent spanning set; the zero space has the empty basis ([[def-linear-basis]]).

## Proof

**Proof technique:** induction on $n=\dim V$.

1.1 If $n=0$, the empty basis is orthogonal. If $B=0$, any basis is orthogonal. [base, L3, given]

1.2 Assume $n>0$, $B\ne0$, and the theorem below dimension $n$. By [L1], choose $v\in V$ with $B(v,v)\ne0$. Put $v^\perp=\{w:B(w,v)=0\}$. [ih, L1, choose]

2.1 Every $w\in V$ has the decomposition $w=av+z$, where $a=B(w,v)B(v,v)^{-1}$ and $z=w-av\in v^\perp$. If $av\in v^\perp$, then $aB(v,v)=0$, so $a=0$. Hence $V=Fv\oplus v^\perp$. [step 1.2, algebra]

3.1 Since $v\notin v^\perp$, this subspace is proper and [L2] gives $\dim v^\perp<n$. The restricted form is symmetric, so the induction hypothesis gives it an orthogonal basis; adjoining $v$ gives an orthogonal basis of $V$. [step 1.2, step 2.1, ih, L2, L3]

4.1 The base cases and induction step prove the theorem, including degenerate forms and the zero space. [step 1.1, step 3.1, discharge-induction] ∎
