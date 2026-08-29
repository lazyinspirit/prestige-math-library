---
id: thm-interior-product-is-adjoint-to-exterior-multiplication
kind: theorem
title: "Interior product is the adjoint of exterior multiplication by a vector"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-interior-product-on-the-exterior-algebra, thm-gram-inner-product-on-exterior-powers-is-positive-definite, thm-exterior-algebra-laws, thm-adjoint-exists-and-is-unique-in-finite-dimension, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-universal-property-and-uniqueness-of-exterior-powers]
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

For $v\in V$, the interior product $\iota_v$ of [[def-interior-product-on-the-exterior-algebra]] is the adjoint of exterior multiplication $m_v(\alpha)=v\wedge\alpha$. On a decomposable wedge,

$$\iota_v(v_1\wedge\cdots\wedge v_k)=\sum_{r=1}^{k}(-1)^{r-1}\langle v,v_r\rangle\,v_1\wedge\cdots\wedge\widehat{v_r}\wedge\cdots\wedge v_k,$$

where $\widehat{v_r}$ means $v_r$ is omitted. Equivalently, $\iota_v$ is the unique linear operator with $\iota_v(1)=0$, $\iota_v(w)=\langle v,w\rangle$ for $w\in V$, and the graded derivation rule $\iota_v(w\wedge\alpha)+w\wedge\iota_v(\alpha)=\langle v,w\rangle\alpha$, established on the following page item as the anticommutation identity.

## Facts & Assumptions

**Given:** A finite-dimensional real inner product space $V$, a vector $v$, and a degree $k\ge1$.

[L1] The interior product is the adjoint $\iota_v=m_v^*$, characterized by $\langle\iota_v\alpha,\beta\rangle=\langle\alpha,v\wedge\beta\rangle$ ([[def-interior-product-on-the-exterior-algebra]]).

[L2] The wedge product is multilinear, and $v\wedge w=-w\wedge v$ for vectors ([[thm-exterior-algebra-laws]]).

[L3] A linear map between finite-dimensional inner product spaces has a unique adjoint ([[thm-adjoint-exists-and-is-unique-in-finite-dimension]]).

[L4] A finite-dimensional inner product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[L5] A linear map out of $\Lambda^kV$ is determined by its values on decomposable wedges ([[thm-universal-property-and-uniqueness-of-exterior-powers]]).

## Proof

**Proof technique:** direct.


1.1 The map $m_v:\Lambda^{k-1}V\to\Lambda^kV$ is linear by [L2], so [L3] supplies its unique adjoint; by [L1] that adjoint is $\iota_v$ with $\langle\iota_v\alpha,\beta\rangle=\langle\alpha,v\wedge\beta\rangle$. [L1, L2, L3]

1.2 Choose an orthonormal basis $(e_1,\ldots,e_n)$ by [L4], write $v=\sum_jv_je_j$, and let $I=\{i_1<\cdots<i_k\}$. Then $\langle\iota_ve_I,e_J\rangle=\langle e_I,v\wedge e_J\rangle=\sum_jv_j\langle e_I,e_j\wedge e_J\rangle$, and the pairing is nonzero only when $J=I\setminus\{i_r\}$ for some $r$ and $j=i_r$, in which case $e_j\wedge e_J=(-1)^{r-1}e_I$. [L2, L4, algebra]

2.1 By step 1.2, $\iota_ve_I=\sum_{r=1}^k(-1)^{r-1}v_{i_r}e_{I\setminus\{i_r\}}$, since the $e_J$ form an orthonormal basis of $\Lambda^{k-1}V$ and the pairing is nondegenerate by [L1]. [step 1.2, L1]

3.1 The assignment $\Phi_v(v_1,\ldots,v_k):=\sum_{r=1}^k(-1)^{r-1}\langle v,v_r\rangle\,v_1\wedge\cdots\wedge\widehat{v_r}\wedge\cdots\wedge v_k$ is multilinear (each term is multilinear) and alternating (when $v_a=v_b$, the two terms $r=a$ and $r=b$ cancel by the block sign of [L2], and the remaining terms have a repeated entry), so by [L5] there is a unique linear map agreeing with $\Phi_v$ on decomposables; on the basis wedge $e_I$ it equals step 2.1, hence it is $\iota_v$. [L2, L5, step 2.1]

4.1 Steps 1.1 and 3.1 prove the adjoint description and the displayed contraction formula; evaluating at $k=0,1$ gives $\iota_v(1)=0$ and $\iota_v(w)=\langle v,w\rangle$, the two boundary clauses of the characterization. [step 1.1, step 3.1] ∎
