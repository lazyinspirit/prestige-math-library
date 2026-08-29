---
id: prop-wedge-and-interior-product-satisfy-the-graded-anticommutation-identity
kind: proposition
title: "Exterior multiplication and interior product satisfy the graded anticommutation identity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-interior-product-on-the-exterior-algebra, thm-interior-product-is-adjoint-to-exterior-multiplication, thm-exterior-algebra-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Albert Chern, Geometric Fluid Dynamics notes, Interior Products"
      url: "https://cseweb.ucsd.edu/~alchern/notes/GeometricFluidDynamics/"
---

## Statement

For vectors $v,w$ in a finite-dimensional real inner product space $V$ and every $\alpha\in\Lambda^kV$,

$$\iota_v(w\wedge\alpha)+w\wedge\iota_v(\alpha)=\langle v,w\rangle\,\alpha.$$

## Facts & Assumptions

**Given:** Vectors $v,w\in V$ and an element $\alpha\in\Lambda^kV$.

[L1] The interior product is the adjoint of exterior multiplication: $\langle\iota_v\alpha,\beta\rangle=\langle\alpha,v\wedge\beta\rangle$ ([[def-interior-product-on-the-exterior-algebra]]).

[L2] On a decomposable wedge, $\iota_v(v_1\wedge\cdots\wedge v_k)=\sum_{r=1}^k(-1)^{r-1}\langle v,v_r\rangle\,v_1\wedge\cdots\wedge\widehat{v_r}\wedge\cdots\wedge v_k$ ([[thm-interior-product-is-adjoint-to-exterior-multiplication]]).

[L3] The wedge product is bilinear, associative, and satisfies $v\wedge w=-w\wedge v$ for vectors ([[thm-exterior-algebra-laws]]).

## Proof

**Proof technique:** direct.


1.1 For a decomposable $\alpha=v_1\wedge\cdots\wedge v_k$, apply [L2] to $w\wedge\alpha=w\wedge v_1\wedge\cdots\wedge v_k$: the $r=0$ term is $\langle v,w\rangle\,v_1\wedge\cdots\wedge v_k$, and the terms $r\ge1$ contribute $-\sum_{r=1}^k(-1)^{r-1}\langle v,v_r\rangle\,w\wedge v_1\wedge\cdots\wedge\widehat{v_r}\wedge\cdots\wedge v_k$, because the omission of $v_r$ leaves $w$ in position $r+1$, which costs the sign $(-1)^r$. [L2, algebra]

2.1 Using [L3] to move the leading $w$ and [L2] once more identifies the sum over $r\ge1$ with $-w\wedge\iota_v(\alpha)$, so $\iota_v(w\wedge\alpha)=\langle v,w\rangle\alpha-w\wedge\iota_v(\alpha)$. [step 1.1, L2, L3]

3.1 Both sides of the claimed identity are linear in $\alpha$ (the wedge is bilinear by [L3] and $\iota_v$ is linear by [L1]), so equality extends from decomposables to all of $\Lambda^kV$. [step 2.1, L1, L3] ∎
