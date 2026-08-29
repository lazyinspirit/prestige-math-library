---
id: thm-increasing-basis-wedges-form-a-basis
kind: theorem
title: "Increasing-index wedges of a basis form a basis of $\\Lambda^kV$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kth-exterior-power-by-quotient, def-decomposable-k-vector-and-basic-wedge-product, thm-universal-property-and-uniqueness-of-exterior-powers, thm-tensor-product-basis-from-bases, def-linear-basis, def-determinant-of-a-square-matrix, thm-leibniz-determinant-is-alternating-multilinear-and-normalized]
aliases: []
landmark: true
short: "Wedge basis of $\\Lambda^kV$"
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Statement

Let $V$ have the ordered basis $(e_1,\ldots,e_n)$ over $F$ and let $0\le k\le n$. For each $k$-element subset $I=\{i_1<\cdots<i_k\}\subseteq\{1,\ldots,n\}$ write

$$e_I:=e_{i_1}\wedge\cdots\wedge e_{i_k}.$$

Then the family $(e_I)_{I}$ indexed by the $k$-element subsets of $\{1,\ldots,n\}$ is a basis of $\Lambda^kV$.

## Facts & Assumptions

**Given:** A vector space $V$ with ordered basis $(e_1,\ldots,e_n)$ and a degree $0\le k\le n$.

[L1] The exterior power is $\Lambda^kV=V^{\otimes k}/W_k$ with the wedge equal to the universal multilinear map composed with the quotient projection ([[def-kth-exterior-power-by-quotient]]).

[L2] The pure tensors $e_{i_1}\otimes\cdots\otimes e_{i_k}$ over all $k$-tuples form a basis of $V^{\otimes k}$ ([[thm-tensor-product-basis-from-bases]]).

[L3] Alternating $k$-linear maps factor uniquely through $\Lambda^kV$ ([[thm-universal-property-and-uniqueness-of-exterior-powers]]).

[L4] A basis is a linearly independent spanning set ([[def-linear-basis]]).

[L5] For $k\ge1$, the matrix determinant is alternating and multilinear in the columns, with $\det(I_k)=1$ ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

## Proof

**Proof technique:** direct.


1.1 If $k=0$, then [L1] gives $\Lambda^0V=F$, and the unique $0$-element subset of $\{1,\ldots,n\}$ is $\varnothing$, with $e_\varnothing:=1_F$ a basis of $F$. So only the case $k\ge1$ remains. [L1]

1.2 Assume $k\ge1$. By [L2], every element of $V^{\otimes k}$ is a linear combination of the pure tensors over all $k$-tuples; passing to the quotient of [L1], every element of $\Lambda^kV$ is a linear combination of the wedges $e_{i_1}\wedge\cdots\wedge e_{i_k}$ over all $k$-tuples. [L1, L2]

1.3 Still assuming $k\ge1$, a wedge with a repeated index is zero by [L1], and a wedge with distinct indices equals the increasing-index wedge up to a sign: transposing two adjacent wedge entries multiplies the wedge by $-1$, because by [L1] the alternating relation gives $0=(\cdots v+w\cdots v+w\cdots)=(\cdots v\cdots w\cdots)+(\cdots w\cdots v\cdots)$. [L1, algebra]

1.4 For each $k$-subset $J=\{j_1<\cdots<j_k\}$ define $\varphi_J:V^k\to F$ by $\varphi_J(v_1,\ldots,v_k):=\det M$, where $M$ is the $k\times k$ matrix whose $r$th column is the list of the $j_1,\ldots,j_k$ coordinates of $v_r$; by [L5], $\varphi_J$ is $k$-linear and alternating, so [L3] induces a unique linear map $\overline\varphi_J:\Lambda^kV\to F$ with $\overline\varphi_J(v_1\wedge\cdots\wedge v_k)=\varphi_J(v_1,\ldots,v_k)$. [L3, L5]

2.1 If $k\ge1$, then steps 1.2 and 1.3 give that the increasing wedges $e_I$ span $\Lambda^kV$. [step 1.2, step 1.3, L4]

2.2 If $k\ge1$, then for subsets $I,J$, the matrix for $\varphi_J$ at $(e_{i_1},\ldots,e_{i_k})$ is the identity when $I=J$ and has a zero row when $I\ne J$, so [L5] and step 1.4 give $\overline\varphi_J(e_I)=1$ for $I=J$ and $0$ for $I\ne J$. [L5, step 1.4]

3.1 If $k\ge1$ and $\sum_Ic_Ie_I=0$, applying $\overline\varphi_J$ of step 1.4 gives $c_J=0$ for every $J$ by step 2.2, so the increasing wedges are linearly independent in the sense of [L4]. [step 1.4, step 2.2, L4]

4.1 Step 1.1 handles $k=0$, while steps 2.1 and 3.1 show that for $k\ge1$ the increasing wedges are a spanning independent set. Therefore in every case the family $(e_I)_I$ is a basis of $\Lambda^kV$. [step 1.1, step 2.1, step 3.1, L4] ∎
