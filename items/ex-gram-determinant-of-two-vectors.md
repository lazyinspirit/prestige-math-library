---
id: ex-gram-determinant-of-two-vectors
kind: example
title: "The Gram determinant of two vectors is $\\lVert u\\rVert^2\\lVert v\\rVert^2-|\\langle u,v\\rangle|^2$ and detects dependence"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-gram-determinant-detects-linear-independence, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For two vectors $u,v$, the Gram determinant is

$$\det G(u,v)=\lVert u\rVert^2\lVert v\rVert^2-|\langle u,v\rangle|^2.$$

In standard $\mathbb R^2$, $u=(1,0)$ and $v=(1,2)$ give determinant $4$. Replacing $v$ by $2u$ gives determinant $0$.

## Facts & Assumptions

**Given:** Two vectors $u,v$ in an inner product space.

[L1] A Gram determinant is positive exactly for an independent list and zero exactly for a dependent list ([[thm-gram-determinant-detects-linear-independence]]).

[L2] Cauchy–Schwarz says $|\langle u,v\rangle|^2\le\lVert u\rVert^2\lVert v\rVert^2$, with equality exactly for dependent $u,v$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Verification

**Proof technique:** computation.

1.1 Expanding the determinant of $\begin{pmatrix}\langle u,u\rangle&\langle u,v\rangle\\\langle v,u\rangle&\langle v,v\rangle\end{pmatrix}$ and using conjugate symmetry gives the displayed formula. Its nonnegativity and equality case agree with [L1] and [L2]. [L1, L2, algebra]

2.1 For $(1,0),(1,2)$, the Gram matrix is $\begin{pmatrix}1&1\\1&5\end{pmatrix}$, whose determinant is $4$; this is positive, and $(1,0),(1,2)$ are independent, as [L1] requires. For $(u,2u)$, the two rows are dependent and the determinant is $0$. [step 1.1, L1, algebra] ∎
