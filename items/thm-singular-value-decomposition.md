---
id: thm-singular-value-decomposition
kind: theorem
title: "Every linear map between finite-dimensional real or complex inner product spaces admits a singular value decomposition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-singular-values-of-an-endomorphism, prop-singular-values-are-well-defined, thm-non-negative-operator-characterisations, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-finite-dimensional-orthogonal-decomposition]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  repair: research/quantum-computing-algorithms-60-2026-10-15-owner/published-repairs/thm-singular-value-decomposition.json
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $T:V\to W$ be a linear map between finite-dimensional real or complex inner
product spaces, and let $r$ be the number of positive singular values of $T$.
Then there exist orthonormal bases $(e_1,\dots,e_n)$ of $V$ and
$(f_1,\dots,f_m)$ of $W$, together with singular values

$$s_1\ge\cdots\ge s_r>0,$$

such that

$$Tv=\sum_{j=1}^r s_j\langle v,e_j\rangle f_j$$

for every $v\in V$.

## Facts & Assumptions

**Given:** A linear map $T:V\to W$ between finite-dimensional real or complex inner product spaces.

[L1] The singular values of $T$ are the eigenvalues of the non-negative operator $|T|=\sqrt{T^*T}$ ([[def-singular-values-of-an-endomorphism]], [[prop-singular-values-are-well-defined]]).

[L2] A non-negative operator has an orthonormal eigenbasis with nonnegative eigenvalues ([[thm-non-negative-operator-characterisations]]).

[L3] Every finite-dimensional real or complex inner product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[L4] A subspace of a finite-dimensional inner-product space and its orthogonal complement form an internal direct sum ([[thm-finite-dimensional-orthogonal-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the non-negative operator $|T|$ on $V$ has an orthonormal eigenbasis $(e_1,\dots,e_n)$ with $|T|e_j=s_je_j$ and $s_1\ge\cdots\ge s_r>0=s_{r+1}=\cdots=s_n$. Because $|T|^2=T^*T$, one has $\langle T^*Te_j,e_j\rangle=s_j^2$ and therefore $\lVert Te_j\rVert=s_j$. [L1, L2, algebra]

2.1 For each $j\le r$, define $f_j:=s_j^{-1}Te_j$. Then $\lVert f_j\rVert=1$, and for $i\ne j$ one has $\langle f_i,f_j\rangle=(s_is_j)^{-1}\langle T^*Te_i,e_j\rangle=(s_is_j)^{-1}s_i^2\langle e_i,e_j\rangle=0$. For $j>r$, step 1.1 gives $\lVert Te_j\rVert=s_j=0$, so $Te_j=0$. [step 1.1, algebra]

3.1 Put $F=\operatorname{span}(f_1,\ldots,f_r)$, allowing $F=0$ when $r=0$. By [L4], $W=F\oplus F^\perp$. Choose an orthonormal basis of $F^\perp$ by [L3] and append it to $(f_1,\ldots,f_r)$. The combined list is orthonormal because the two subspaces are orthogonal, and it spans $W$ by the direct-sum decomposition. It is therefore an orthonormal basis $(f_1,\ldots,f_m)$ of $W$. If $W=0$, both lists are empty; if $r=0$, the complement basis alone is the required basis. If $v=\sum_{j=1}^n \langle v,e_j\rangle e_j$, then step 2.1 gives $Tv=\sum_{j=1}^n \langle v,e_j\rangle Te_j=\sum_{j=1}^r s_j\langle v,e_j\rangle f_j$, and when $r=0$ this is the empty sum $0$. [L3, L4, step 2.1, choose, algebra] ∎
