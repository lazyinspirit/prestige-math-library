---
id: thm-gram-schmidt-orthonormalisation
kind: theorem
title: "Gram–Schmidt turns every finite independent list into an orthonormal list with the same successive spans"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-orthogonal-vectors-sets-and-orthonormal-bases, thm-orthogonal-nonzero-vectors-are-linearly-independent, def-inner-product-norm, def-linear-independence]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., result 6.32'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, §5.3.1'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

Let $(v_0,\ldots,v_{r-1})$ be a finite linearly independent list in a real or complex inner product space. There is an orthonormal list $(e_0,\ldots,e_{r-1})$ such that, for every $k\le r$,

$$\operatorname{span}(e_0,\ldots,e_{k-1})=\operatorname{span}(v_0,\ldots,v_{k-1}).$$

It is obtained recursively from

$$u_k=v_k-\sum_{j<k}\langle v_k,e_j\rangle e_j,\qquad e_k=\frac{u_k}{\lVert u_k\rVert}.$$

For $r=0$, both lists are empty.

## Facts & Assumptions

**Given:** A finite linearly independent list $(v_0,\ldots,v_{r-1})$.

[L1] An orthonormal list is orthogonal and every listed vector has norm one ([[def-orthogonal-vectors-sets-and-orthonormal-bases]]).

[L2] A finite list $v$ is linearly independent when every list of scalars with $\sum_{i<n}\lambda_iv_i=0_V$ has $\lambda_i=0_F$ for all $i<n$ ([[def-linear-independence]]).

[L3] For a nonzero vector $u$, positive definiteness gives $\lVert u\rVert>0$, so $u/\lVert u\rVert$ is defined and has norm one ([[def-inner-product-norm]]).

[L4] Every finite orthogonal list of nonzero vectors is linearly independent ([[thm-orthogonal-nonzero-vectors-are-linearly-independent]]).

## Proof

**Proof technique:** induction.

1.1 For $r=0$ there is nothing to construct, and the successive-span assertion at $k=0$ is equality of zero subspaces. [base]

1.2 Suppose $e_0,\ldots,e_{k-1}$ have been constructed orthonormally with the required span equalities. Define $u_k$ by the displayed formula. For $i<k$, linearity and orthonormality give $\langle u_k,e_i\rangle=\langle v_k,e_i\rangle-\langle v_k,e_i\rangle=0$. [ih, L1, algebra]

2.1 If $u_k=0$, then $v_k$ lies in $\operatorname{span}(e_0,\ldots,e_{k-1})=\operatorname{span}(v_0,\ldots,v_{k-1})$, say $v_k=\sum_{i<k}\mu_iv_i$; then the scalars $\lambda_i=\mu_i$ for $i<k$, $\lambda_k=-1_F$ and $\lambda_i=0_F$ for $i>k$ satisfy $\sum_i\lambda_iv_i=0_V$ with $\lambda_k\ne0_F$, contradicting the independence of $v$ through [L2]. Hence $u_k\ne0$, and [L3] makes $e_k=u_k/\lVert u_k\rVert$ a unit vector orthogonal to its predecessors. [step 1.2, ih, L2, L3]

3.1 The formula for $u_k$ shows $e_k$ lies in $\operatorname{span}(v_0,\ldots,v_k)$, while its rearrangement shows $v_k$ lies in $\operatorname{span}(e_0,\ldots,e_k)$. Together with the induction hypothesis these give both inclusions in the span equality at $k+1$. [step 2.1, ih, algebra]

4.1 Induction constructs the stated list and proves every successive-span equality. Its vectors are nonzero and orthogonal, so [L4] also confirms their independence; their unit norms make the list orthonormal. [step 1.1, step 1.2, step 2.1, step 3.1, L1, L4, discharge-induction] ∎
