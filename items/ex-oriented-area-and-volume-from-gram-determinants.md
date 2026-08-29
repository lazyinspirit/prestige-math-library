---
id: ex-oriented-area-and-volume-from-gram-determinants
kind: example
title: "Oriented area and volume are recovered from wedges and Gram determinants"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-gram-inner-product-on-exterior-powers-is-positive-definite, def-oriented-unit-volume-form]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §8.1"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Example

In $\mathbb R^2$ with the standard inner product, the parallelogram spanned by $u=(1,2)$ and $v=(3,1)$ has Gram matrix $\begin{pmatrix}5&5\\5&10\end{pmatrix}$, whose determinant is $25$, so its area is $5$. In $\mathbb R^3$, the parallelotope spanned by $u=(1,0,1)$, $v=(0,2,0)$, $w=(1,1,0)$ has Gram matrix $\begin{pmatrix}2&0&1\\0&4&2\\1&2&2\end{pmatrix}$, whose determinant is $4$, so its volume is $2$.

## Facts & Assumptions

**Given:** The standard inner products on $\mathbb R^2$ and $\mathbb R^3$ and the displayed vectors.

[L1] The Gram formula gives $\|v_1\wedge\cdots\wedge v_k\|^2=\det G(v_1,\ldots,v_k)$ on the exterior power ([[thm-gram-inner-product-on-exterior-powers-is-positive-definite]]).

[L2] The oriented unit area/volume form has norm $1$ in the Gram pairing, so the norm of a pure wedge is the unoriented area or volume of the spanned parallelepiped ([[def-oriented-unit-volume-form]]).

## Verification

**Proof technique:** direct.


1.1 By [L1], $\|u\wedge v\|^2=\det\begin{pmatrix}\langle u,u\rangle&\langle u,v\rangle\\\langle v,u\rangle&\langle v,v\rangle\end{pmatrix}=\det\begin{pmatrix}5&5\\5&10\end{pmatrix}=25$, so the parallelogram area is $\sqrt{25}=5$. [L1, algebra]

1.2 By [L1], $\|u\wedge v\wedge w\|^2=\det\begin{pmatrix}2&0&1\\0&4&2\\1&2&2\end{pmatrix}=2(8-4)+\bigl(0-4\bigr)=4$, so the parallelotope volume is $\sqrt4=2$. [L1, algebra]

2.1 By [L2], the unit volume forms have norm $1$, so the norms computed in steps 1.1 and 1.2 are precisely the unoriented area and volume; the orientation data would only attach a sign, not a size. [L2, step 1.1, step 1.2]

3.1 Steps 1.1, 1.2 and 2.1 recover area and volume from wedges and Gram determinants. [step 1.1, step 1.2, step 2.1] ∎
